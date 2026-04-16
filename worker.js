// ── 최고의 여행 — Cloudflare Worker API 프록시 ──

const TP_TOKEN = '6a6084c8f32d44f563ba4baa66f11975';
const TP_MARKER = '510036';
const ORIGIN_IATA = 'ICN';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
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
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // ── /api/flights/all — 항공 최저가 전체 (날짜 지정 가능) ──────────────
    if (url.pathname === '/api/flights/all') {
      const tripClass = url.searchParams.get('trip_class') || '0'; // 0=이코노미, 1=비즈니스, 2=퍼스트
      const departDate = url.searchParams.get('depart') || ''; // YYYY-MM or YYYY-MM-DD
      const returnDate = url.searchParams.get('return') || ''; // YYYY-MM or YYYY-MM-DD

      // 날짜가 있으면 v1에 depart_date/return_date 추가
      let apiUrl = `https://api.travelpayouts.com/v1/prices/cheap?origin=${ORIGIN_IATA}&token=${TP_TOKEN}&currency=KRW&limit=1000&trip_class=${tripClass}`;
      if (departDate) apiUrl += `&depart_date=${departDate}`;
      if (returnDate) apiUrl += `&return_date=${returnDate}`;

      try {
        const res = await fetch(apiUrl, { headers: { 'X-Access-Token': TP_TOKEN } });
        const data = await res.json();

        const results = {};
        if (data && data.data) {
          for (const [iata, entries] of Object.entries(data.data)) {
            const sorted = Object.values(entries).sort((a, b) => a.price - b.price);
            if (sorted.length > 0 && sorted[0].price > 0) {
              results[iata] = {
                priceKRW: sorted[0].price,
                priceLabel: Math.round(sorted[0].price / 10000) + '만원~',
                airline: sorted[0].airline,
                departureAt: sorted[0].departure_at || '',
                returnAt: sorted[0].return_at || '',
              };
            }
          }
        }

        return new Response(JSON.stringify({
          data: results,
          dateFiltered: !!(departDate || returnDate),
          depart: departDate,
          return: returnDate,
        }), { headers: CORS_HEADERS });
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
            const lookupUrl = `https://engine.hotellook.com/api/v2/lookup.json?query=${encodeURIComponent(cityName)}&lang=en&lookFor=city&limit=1&token=${TP_TOKEN}`;
            const lookupRes = await fetch(lookupUrl);
            if (!lookupRes.ok) return;
            const lookupData = await lookupRes.json();

            const cityResult = lookupData?.results?.cities?.[0];
            if (!cityResult) return;
            const locationId = cityResult.id || cityResult.cityId;
            if (!locationId) return;

            // Step 2: get hotel prices for this city (limit 늘려서 고급 호텔도 포함)
            const minStars = parseInt(url.searchParams.get('stars') || '0');
            const fetchLimit = minStars >= 4 ? 30 : 3; // 고급 필터 시 더 많이 가져와서 필터링
            const priceUrl = `https://engine.hotellook.com/api/v2/cache.json?location=${locationId}&currency=krw&token=${TP_TOKEN}&period=7&adults=1&limit=${fetchLimit}`;
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
      const apiUrl = `https://api.travelpayouts.com/v1/prices/cheap?origin=${ORIGIN_IATA}&destination=${dest}&token=${TP_TOKEN}&currency=KRW`;
      try {
        const res = await fetch(apiUrl, { headers: { 'X-Access-Token': TP_TOKEN } });
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

    // ── /api/visa — 한국 여권 비자 요건 (GitHub passport-index-dataset) ──
    if (url.pathname === '/api/visa') {
      // GitHub ilyankou/passport-index-dataset (MIT License) - 한국여권(KR) 기준
      const csvUrl = 'https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy-iso2.csv';
      try {
        const res = await fetch(csvUrl);
        if (!res.ok) throw new Error('CSV fetch failed: ' + res.status);
        const text = await res.text();

        // KR 행만 필터링
        const lines = text.split('\n');
        const krData = {};
        for (const line of lines) {
          const parts = line.trim().split(',');
          if (parts.length < 3) continue;
          const [passport, destination, requirement] = parts;
          if (passport !== 'KR') continue;
          krData[destination] = requirement;
        }

        // 목적지 IATA → ISO2 매핑 (우리 사이트 목적지 기준)
        const iataToIso2 = {
          LIS: 'PT', DAD: 'VN', TPE: 'TW',
          OSA: 'JP', TYO: 'JP', BKK: 'TH', DPS: 'ID',
          CNX: 'TH', SIN: 'SG', CEB: 'PH',
          FUK: 'JP', SPK: 'JP', OKA: 'JP',
          PQC: 'VN', SGN: 'VN', HAN: 'VN', MPH: 'PH',
          HKT: 'TH', HKG: 'HK', GUM: 'US', HNL: 'US',
          PAR: 'FR', KUL: 'MY', MLE: 'MV',
          SYD: 'AU', SHA: 'CN', BCN: 'ES',
        };

        // 우리 목적지별 비자 요건 정리
        const result = {};
        for (const [iata, iso2] of Object.entries(iataToIso2)) {
          const req = krData[iso2];
          if (!req) continue;

          // 요건 한국어 변환
          let label, badge;
          const days = parseInt(req);
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
          result[iata] = { req, label, badge };
        }

        return new Response(JSON.stringify({ data: result, updated: new Date().toISOString() }), { headers: CORS_HEADERS });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: CORS_HEADERS });
      }
    }

    return new Response(JSON.stringify({ status: 'ok', service: '최고의 여행 API Proxy' }), {
      headers: CORS_HEADERS
    });

  }
};
