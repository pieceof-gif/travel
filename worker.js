// ── 최고의 여행 — Cloudflare Worker API 프록시 ──

// TP_TOKEN은 Cloudflare Secrets에서 주입됩니다 (env.TP_TOKEN)
const TP_MARKER = '510036';
const ORIGIN_IATA = 'ICN';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json; charset=utf-8',
};

// 목적지 → Hotellook/Booking 도시명 매핑
const DEST_CITY = {
  LIS: 'Lisbon', DAD: 'Da Nang', TPE: 'Taipei',
  OSA: 'Osaka', TYO: 'Tokyo', BKK: 'Bangkok', DPS: 'Bali',
  CNX: 'Chiang Mai', SIN: 'Singapore', CEB: 'Cebu',
  FUK: 'Fukuoka', SPK: 'Sapporo', OKA: 'Okinawa',
  PQC: 'Phu Quoc', SGN: 'Ho Chi Minh City', HAN: 'Hanoi',
  MPH: 'Boracay', HKT: 'Phuket', HKG: 'Hong Kong',
  GUM: 'Guam', HNL: 'Honolulu', PAR: 'Paris',
  KUL: 'Kuala Lumpur', MLE: 'Male', SYD: 'Sydney',
  SHA: 'Shanghai', BCN: 'Barcelona',
  CJU: 'Jeju', NHA: 'Nha Trang',
  MFM: 'Macau', PEK: 'Beijing', TAO: 'Qingdao',
  SPN: 'Saipan', PPS: 'Puerto Princesa', SYX: 'Sanya',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // ── /api/flights/all — 항공 최저가 전체 ──────────────
    if (url.pathname === '/api/flights/all') {
      const tripClass = url.searchParams.get('trip_class') || '0';
      const depart   = url.searchParams.get('depart') || '';
      const returnD  = url.searchParams.get('return') || '';

      // v2/prices/latest: 최근 48시간 내 실제 검색 결과 (actual=true)
      let apiUrl = `https://api.travelpayouts.com/v2/prices/latest?origin=${ORIGIN_IATA}&token=${env.TP_TOKEN}&currency=KRW&limit=1000&period_type=month&show_to_affiliates=true&sorting=price&trip_class=${tripClass}&one_way=false`;
      if (depart) apiUrl += `&beginning_of_period=${depart}-01`;

      try {
        const res = await fetch(apiUrl, { headers: { 'X-Access-Token': env.TP_TOKEN } });
        const data = await res.json();

        const results = {};
        const priceMap = {}; // 목적지별 가격 수집 (평균 계산용)
        // v2 응답: { data: [ { destination, value, airline, actual, ... }, ... ] }
        if (data && Array.isArray(data.data)) {
          for (const item of data.data) {
            const iata = item.destination;
            const price = item.value;
            if (!iata || !price || price <= 0) continue;
            if (!priceMap[iata]) priceMap[iata] = { prices: [], airline: item.airline };
            priceMap[iata].prices.push(price);
          }
        }
        // 평균 계산
        for (const [iata, info] of Object.entries(priceMap)) {
          const avg = Math.round(info.prices.reduce((a, b) => a + b, 0) / info.prices.length);
          results[iata] = {
            priceKRW: avg,
            priceLabel: Math.round(avg / 10000) + '만원',
            airline: info.airline,
          };
        }

        // v2에서 결과가 부족하면 v1/prices/cheap fallback
        if (Object.keys(results).length < 10) {
          let fallbackUrl = `https://api.travelpayouts.com/v1/prices/cheap?origin=${ORIGIN_IATA}&token=${env.TP_TOKEN}&currency=KRW&limit=1000&trip_class=${tripClass}`;
          if (depart) fallbackUrl += `&depart_date=${depart}`;
          if (returnD) fallbackUrl += `&return_date=${returnD}`;
          try {
            const fbRes = await fetch(fallbackUrl, { headers: { 'X-Access-Token': env.TP_TOKEN } });
            const fbData = await fbRes.json();
            if (fbData && fbData.data) {
              for (const [iata, entries] of Object.entries(fbData.data)) {
                if (results[iata]) continue; // v2 데이터 우선
                const prices = Object.values(entries).map(e => e.price).filter(p => p > 0);
                if (prices.length > 0) {
                  const avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
                  results[iata] = {
                    priceKRW: avg,
                    priceLabel: Math.round(avg / 10000) + '만원',
                    airline: Object.values(entries)[0].airline,
                  };
                }
              }
            }
          } catch (_) {}
        }

        return new Response(JSON.stringify({ data: results }), { headers: CORS_HEADERS });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500, headers: CORS_HEADERS
        });
      }
    }



    // ── /api/hotels/all — 숙박 최저가 전체 ──────────────
    if (url.pathname === '/api/hotels/all') {
      const results = {};
      const cityList = Object.entries(DEST_CITY);

      // Hotellook lookup: 도시명으로 location_id 조회 후 가격 조회
      // 병렬 처리 (최대 10개씩)
      const chunks = [];
      for (let i = 0; i < cityList.length; i += 8) {
        chunks.push(cityList.slice(i, i + 8));
      }

      for (const chunk of chunks) {
        await Promise.all(chunk.map(async ([iata, cityName]) => {
          try {
            // Step 1: lookup city
            const lookupUrl = `https://engine.hotellook.com/api/v2/lookup.json?query=${encodeURIComponent(cityName)}&lang=en&lookFor=city&limit=1&token=${env.TP_TOKEN}`;
            const lookupRes = await fetch(lookupUrl);
            if (!lookupRes.ok) return;
            const lookupData = await lookupRes.json();

            const cityResult = lookupData?.results?.cities?.[0];
            if (!cityResult) return;
            const locationId = cityResult.id || cityResult.cityId;
            if (!locationId) return;

            // Step 2: get hotel prices for this city (limit 늘려서 고급 호텔도 포함)
            const minStars = parseInt(url.searchParams.get('stars') || '0');
            const checkin = url.searchParams.get('checkin') || '';
            const nights = parseInt(url.searchParams.get('nights')) || 7;
            const fetchLimit = minStars >= 4 ? 30 : 3; // 고급 필터 시 더 많이 가져와서 필터링
            let priceUrl = `https://engine.hotellook.com/api/v2/cache.json?location=${locationId}&currency=krw&token=${env.TP_TOKEN}&adults=1&limit=${fetchLimit}`;
            if (checkin) {
              priceUrl += `&checkIn=${checkin}&checkOut=`;
              // checkOut 계산
              const ciDate = new Date(checkin);
              ciDate.setDate(ciDate.getDate() + nights);
              const coStr = ciDate.toISOString().slice(0, 10);
              priceUrl += coStr;
            } else {
              priceUrl += `&period=${nights}`;
            }
            const priceRes = await fetch(priceUrl);
            if (!priceRes.ok) return;
            const priceData = await priceRes.json();

            if (Array.isArray(priceData) && priceData.length > 0) {
              let filtered = priceData.filter(h => h.priceFrom > 0);
              // stars 필터: 4성급 이상만 (VIP용)
              if (minStars > 0) {
                const starFiltered = filtered.filter(h => (h.stars || 0) >= minStars);
                if (starFiltered.length > 0) filtered = starFiltered;
                // 5성급이 없으면 4성급까지 폴백
                else if (minStars >= 5) {
                  const fallback = filtered.filter(h => (h.stars || 0) >= 4);
                  if (fallback.length > 0) filtered = fallback;
                }
              }
              // 고급 호텔은 가격이 높은 순 (프리미엄), 일반은 낮은 순 (최저가)
              const sorted = minStars > 0
                ? filtered.sort((a, b) => (b.stars || 0) - (a.stars || 0) || (b.priceFrom || 0) - (a.priceFrom || 0))
                : filtered.sort((a, b) => (a.priceFrom || 9e9) - (b.priceFrom || 9e9));
              if (sorted.length > 0) {
                const best = sorted[0];
                const pricePerNight = best.priceFrom;
                results[iata] = {
                  priceKRW: pricePerNight,
                  priceLabel: Math.round(pricePerNight / 10000) + '만원~/박',
                  hotelName: best.hotelName || best.name || '',
                  stars: best.stars || 0,
                  bookingLink: `https://tp.media/r?marker=${TP_MARKER}&trs=1&p=4114&u=` +
                    encodeURIComponent(`https://hotellook.com/cities/${encodeURIComponent(cityName)}/`),
                };
              }
            }
          } catch (_) {}
        }));
      }

      return new Response(JSON.stringify({ data: results }), { headers: CORS_HEADERS });
    }

    // ── /api/flights?dest=TPE (단건) ──────────────────────
    if (url.pathname === '/api/flights') {
      const dest = url.searchParams.get('dest') || '';
      const apiUrl = `https://api.travelpayouts.com/v1/prices/cheap?origin=${ORIGIN_IATA}&destination=${dest}&token=${env.TP_TOKEN}&currency=KRW`;
      try {
        const res = await fetch(apiUrl, { headers: { 'X-Access-Token': env.TP_TOKEN } });
        const data = await res.json();
        let minPrice = null, airline = null;
        if (data?.data?.[dest]) {
          const entries = Object.values(data.data[dest]).sort((a, b) => a.price - b.price);
          if (entries.length > 0) { minPrice = entries[0].price; airline = entries[0].airline; }
        }
        return new Response(JSON.stringify({
          dest, priceKRW: minPrice,
          priceLabel: minPrice ? Math.round(minPrice / 10000) + '만원~' : null,
          airline,
        }), { headers: CORS_HEADERS });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: CORS_HEADERS });
      }
    }

    // ── /api/news — 실시간 여행 뉴스 헤드라인 ──────────────
    if (url.pathname === '/api/news') {
      // Google News RSS: 한국 여행 뉴스 (항공권, 해외여행 관련)
      const queries = [
        '해외여행 항공권',
        '여행 트렌드',
      ];
      const q = encodeURIComponent(queries[Math.floor(Math.random() * queries.length)]);
      const rssUrl = `https://news.google.com/rss/search?q=${q}&hl=ko&gl=KR&ceid=KR:ko`;

      try {
        const res = await fetch(rssUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TravelBot/1.0)' }
        });
        if (!res.ok) throw new Error('RSS fetch failed: ' + res.status);
        const xml = await res.text();

        // XML에서 <item> 블록 파싱 (정규표현식으로 간단 처리)
        const items = [];
        const itemRegex = /<item>([\s\S]*?)<\/item>/g;
        let match;
        while ((match = itemRegex.exec(xml)) !== null && items.length < 6) {
          const block = match[1];
          const titleM = /<title>([\s\S]*?)<\/title>/.exec(block);
          const linkM  = /<link>([\s\S]*?)<\/link>/.exec(block) ||
                         /<link\s+href="([^"]+)"/.exec(block);
          const pubM   = /<pubDate>([\s\S]*?)<\/pubDate>/.exec(block);
          if (!titleM) continue;

          // HTML 엔티티 및 사이트명 제거 (제목 끝 " - 매체명" 패턴 삭제)
          let title = titleM[1]
            .replace(/<!\[CDATA\[|\]\]>/g, '')
            .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&')
            .replace(/&quot;/g,'"').replace(/&#39;/g,"'")
            .replace(/\s*-\s*[^-]+$/, '')  // " - 매체명" 제거
            .trim();

          if (!title || title.length < 8) continue;

          items.push({
            title,
            link: linkM ? linkM[1].trim() : '',
            pubDate: pubM ? pubM[1].trim() : '',
          });
        }

        return new Response(JSON.stringify({ news: items }), { headers: CORS_HEADERS });
      } catch (e) {
        // 폴백: 기본 문구 반환
        return new Response(JSON.stringify({
          news: [
            { title: '실시간 여행 정보를 불러오는 중입니다.', link: '' }
          ]
        }), { headers: CORS_HEADERS });
      }
    }

    // ── /api/visa — 한국 여권 비자 요건 (외교부 공공데이터 API 우선) ──
    if (url.pathname === '/api/visa') {

      // 우리 목적지 국가 목록 (ISO2 → IATA 매핑)
      const ISO2_TO_IATAS = {
        JP: ['OSA','TYO','FUK','SPK','OKA'],
        TH: ['BKK','CNX','HKT'],
        VN: ['DAD','SGN','HAN','PQC','NHA'],
        ID: ['DPS'],
        SG: ['SIN'],
        PH: ['CEB','MPH','PPS'],
        HK: ['HKG'],
        TW: ['TPE'],
        MY: ['KUL'],
        MV: ['MLE'],
        AU: ['SYD'],
        FR: ['PAR'],
        ES: ['BCN'],
        PT: ['LIS'],
        US: ['GUM','HNL'],
        CN: ['SHA','PEK','TAO','SYX'],
        MP: ['SPN'],  // 사이판 (미국령 북마리아나)
      };

      // 결과 포맷 통일 헬퍼
      function makeResult(iso2Map) {
        const result = {};
        for (const [iso2, iatas] of Object.entries(ISO2_TO_IATAS)) {
          const info = iso2Map[iso2];
          if (!info) continue;
          for (const iata of iatas) {
            result[iata] = info;
          }
        }
        return result;
      }

      // ── 1차: 외교부 공공데이터 API ──
      if (env.MOFA_API_KEY) {
        try {
          const mofaUrl = `https://apis.data.go.kr/1262000/EntranceVisaService2/getEntranceVisaList2?serviceKey=${env.MOFA_API_KEY}&type=JSON&pageNo=1&numOfRows=300`;
          const mofaRes = await fetch(mofaUrl);
          if (!mofaRes.ok) throw new Error('MOFA ' + mofaRes.status);

          const mofaJson = await mofaRes.json();
          const items = mofaJson?.response?.body?.items?.item;
          if (!items || !Array.isArray(items)) throw new Error('MOFA 응답 형식 오류');

          // 일반여권 + ISO2 기준으로 매핑
          const iso2Map = {};
          for (const item of items) {
            if (item.passport_nm !== '일반') continue;
            const iso2 = item.isoalp2_cd;
            if (!iso2 || iso2Map[iso2]) continue;

            const rawDays = parseInt(item.allow_period);
            const days = isNaN(rawDays) ? null : rawDays;
            let label, badge;

            if (item.allow_yn === 'Y' || days > 0) {
              label = days ? `무비자 ${days}일` : '무비자';
              badge = 'visa-free';
            } else if (item.allow_yn === 'VOA' || String(item.allow_yn).includes('도착')) {
              label = '도착비자'; badge = 'on-arrival';
            } else if (String(item.allow_yn).includes('E-Visa') || String(item.allow_yn).includes('전자')) {
              label = '전자비자(e-Visa)'; badge = 'e-visa';
            } else {
              label = '비자 필요'; badge = 'required';
            }
            iso2Map[iso2] = { label, badge, days };
          }

          const result = makeResult(iso2Map);
          if (Object.keys(result).length === 0) throw new Error('MOFA 데이터 없음 (IP 차단 가능성)');
          return new Response(JSON.stringify({ data: result, updated: new Date().toISOString(), source: 'mofa' }), {
            headers: { ...CORS_HEADERS, 'Cache-Control': 'public, max-age=43200' } // 12시간 캐싱
          });
        } catch (mofaErr) {
          // 외교부 API 실패 → 2차 fallback
          console.error('MOFA API 오류, fallback 사용:', mofaErr.message);
        }
      }

      // ── 2차 fallback: GitHub passport-index-dataset ──
      const csvUrl = 'https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy-iso2.csv';
      try {
        const res = await fetch(csvUrl);
        if (!res.ok) throw new Error('CSV fetch failed: ' + res.status);
        const text = await res.text();

        const krData = {};
        for (const line of text.split('\n')) {
          const parts = line.trim().split(',');
          if (parts.length < 3) continue;
          const [passport, destination, requirement] = parts;
          if (passport !== 'KR') continue;
          krData[destination] = requirement;
        }

        const iso2Map = {};
        for (const iso2 of Object.keys(ISO2_TO_IATAS)) {
          const req = krData[iso2];
          if (!req) continue;
          const days = parseInt(req);
          let label, badge;
          if (!isNaN(days)) {
            label = `무비자 ${days}일`; badge = 'visa-free';
          } else if (req === 'visa free') {
            label = '무비자'; badge = 'visa-free';
          } else if (req === 'visa on arrival') {
            label = '도착비자'; badge = 'on-arrival';
          } else if (req === 'e-visa') {
            label = '전자비자(e-Visa)'; badge = 'e-visa';
          } else if (req === 'eta') {
            label = '전자여행허가(ETA)'; badge = 'eta';
          } else {
            label = '비자 필요'; badge = 'required';
          }
          iso2Map[iso2] = { label, badge, days: isNaN(days) ? null : days };
        }

        return new Response(JSON.stringify({ data: makeResult(iso2Map), updated: new Date().toISOString(), source: 'github' }), {
          headers: { ...CORS_HEADERS, 'Cache-Control': 'public, max-age=43200' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: CORS_HEADERS });
      }
    }

    // ── /api/agoda-hotels — Agoda Affiliate Lite API 숙박 가격 ──
    if (url.pathname === '/api/agoda-hotels') {
      const checkin = url.searchParams.get('checkin') || '';
      const checkout = url.searchParams.get('checkout') || '';
      const currency = url.searchParams.get('currency') || 'KRW';

      if (!checkin || !checkout) {
        return new Response(JSON.stringify({ error: 'checkin, checkout required' }), {
          status: 400, headers: CORS_HEADERS
        });
      }

      const agodaCid = env.AGODA_CID || '1962732';
      const agodaKey = env.AGODA_API_KEY || '';
      if (!agodaKey) {
        return new Response(JSON.stringify({ error: 'AGODA_API_KEY not configured' }), {
          status: 500, headers: CORS_HEADERS
        });
      }

      // 34개 도시별 대표 4성급 호텔 Agoda propertyId
      const DEST_AGODA_PROPERTIES = {
        // ── 일본 ──
        OSA: [62022, 77643, 285498],    // 오사카
        TYO: [45498, 39498, 118050],    // 도쿄
        FUK: [154975, 217398, 281936],  // 후쿠오카
        SPK: [67395, 217399, 281937],   // 삿포로
        OKA: [286521, 316710, 452831],  // 오키나와
        // ── 동남아 ──
        BKK: [77960, 29554, 36446],     // 방콕
        DPS: [183719, 15800, 23998],    // 발리
        CNX: [77963, 231490, 37074],    // 치앙마이
        HKT: [209058, 183724, 109978],  // 푸켓
        SIN: [25182, 71643, 43417],     // 싱가포르
        CEB: [81170, 120024, 176766],   // 세부
        MPH: [169583, 129898, 352483],  // 보라카이
        PPS: [455498, 648521, 1128370], // 팔라완(푸에르토프린세사)
        KUL: [16907, 48952, 85993],     // 쿠알라룸푸르
        // ── 베트남 ──
        DAD: [520965, 587261, 844849],  // 다낭
        SGN: [284747, 141952, 66697],   // 호치민
        HAN: [88898, 165227, 284748],   // 하노이
        PQC: [1039774, 1510381, 6525561], // 푸꾸옥
        NHA: [77034, 237584, 386498],   // 나트랑
        // ── 중화권 ──
        HKG: [25133, 15285, 56272],     // 홍콩
        TPE: [33769, 26551, 181097],    // 타이베이
        MFM: [73198, 50096, 113486],    // 마카오
        SHA: [56089, 95048, 140024],    // 상하이
        PEK: [75562, 229564, 108689],   // 베이징
        TAO: [449498, 1103265, 1652478], // 칭다오
        SYX: [227498, 685421, 1243876], // 산야(하이난)
        // ── 태평양 ──
        GUM: [77655, 105028, 276833],   // 괌
        SPN: [47820, 124589, 276012],   // 사이판
        HNL: [34471, 35879, 120893],    // 하와이
        // ── 유럽 ──
        PAR: [17413, 10666, 251413],    // 파리
        LIS: [17558, 247476, 85070],    // 리스본
        BCN: [27085, 10449, 46775],     // 바르셀로나
        // ── 기타 ──
        MLE: [104499, 1074068, 289483], // 몰디브
        SYD: [12044, 19927, 47685],     // 시드니
        CJU: [89721, 289047, 649821],   // 제주
      };

      const results = {};
      const entries = Object.entries(DEST_AGODA_PROPERTIES);

      // 병렬 처리 (8개씩 청크)
      const chunks = [];
      for (let i = 0; i < entries.length; i += 8) {
        chunks.push(entries.slice(i, i + 8));
      }

      for (const chunk of chunks) {
        await Promise.all(chunk.map(async ([iata, propertyIds]) => {
          try {
            const body = JSON.stringify({
              criteria: {
                propertyIds: propertyIds,
                checkIn: checkin,
                checkOut: checkout,
                rooms: 1,
                adults: 2,
                children: 0,
                childrenAges: [],
                language: 'ko-kr',
                currency: currency,
                userCountry: 'KR',
              },
              features: {
                ratesPerProperty: 1,
                extra: ['rateDetail'],
              },
            });

            const agodaRes = await fetch('https://affiliateapi7643.agoda.com/affiliateservice/lt_v1', {
              method: 'POST',
              headers: {
                'Authorization': `${agodaCid}:${agodaKey}`,
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
              },
              body: body,
            });

            if (!agodaRes.ok) return;
            const agodaData = await agodaRes.json();

            // 응답에서 최저가 추출
            if (agodaData && agodaData.results && Array.isArray(agodaData.results)) {
              const validRates = [];
              for (const hotel of agodaData.results) {
                if (hotel.dailyRate && hotel.dailyRate > 0) {
                  validRates.push({
                    price: hotel.dailyRate,
                    name: hotel.hotelName || '',
                    stars: hotel.starRating || 0,
                    propertyId: hotel.propertyId,
                  });
                } else if (hotel.rates && hotel.rates.length > 0) {
                  for (const rate of hotel.rates) {
                    if (rate.dailyRate > 0 || rate.totalPayment > 0) {
                      const nights = Math.max(1, Math.round(
                        (new Date(checkout) - new Date(checkin)) / (86400000)
                      ));
                      const daily = rate.dailyRate > 0 ? rate.dailyRate : Math.round(rate.totalPayment / nights);
                      validRates.push({
                        price: daily,
                        name: hotel.hotelName || '',
                        stars: hotel.starRating || 0,
                        propertyId: hotel.propertyId,
                      });
                    }
                  }
                }
              }

              if (validRates.length > 0) {
                // 4성급 필터 후 최저가
                const fourStar = validRates.filter(r => r.stars >= 4);
                const best = (fourStar.length > 0 ? fourStar : validRates)
                  .sort((a, b) => a.price - b.price)[0];

                results[iata] = {
                  priceKRW: Math.round(best.price),
                  priceLabel: Math.round(best.price / 10000) + '만원~/박',
                  hotelName: best.name,
                  stars: best.stars,
                  source: 'agoda',
                };
              }
            }
          } catch (_) {}
        }));
      }

      return new Response(JSON.stringify({
        data: results,
        checkin, checkout, currency,
        updated: new Date().toISOString(),
      }), {
        headers: { ...CORS_HEADERS, 'Cache-Control': 'public, max-age=3600' }
      });
    }

    return new Response(JSON.stringify({ status: 'ok', service: '최고의 여행 API Proxy' }), {
      headers: CORS_HEADERS
    });

  }
};
