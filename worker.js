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

    // ── /api/hotels/all — 숙박 최저가 (Booking.com via RapidAPI) ──────────────
    if (url.pathname === '/api/hotels/all') {
      const RAPIDAPI_KEY = '43638f1facmshb20a1efe9df3b5ep15727djsnc67fec4b5de4';
      const RAPIDAPI_HOST = 'booking-com.p.rapidapi.com';

      // Booking.com dest_id 매핑 (도시)
      const DEST_IDS = {
        'TYO': '-246227',   // 도쿄
        'KIX': '-240905',   // 오사카
        'FUK': '900047908', // 후쿠오카
        'BKK': '-3414440',  // 방콕
        'DAD': '-3712125',  // 다낭
        'TPE': '-2637882',  // 타이베이
        'HKG': '-1353149',  // 홍콩
        'SIN': '-73635',    // 싱가포르
        'GUM': '-585621',   // 괌
        'CEB': '-2421883',  // 세부
        'DPS': '900040134', // 발리
        'CTS': '-242395',   // 삿포로
        'OKA': '136937',    // 오키나와
        'HAN': '-3714993',  // 하노이
        'SGN': '-3730078',  // 호치민
        'KUL': '-2403010',  // 쿠알라룸푸르
        'MFM': '-1204094',  // 마카오
        'PEK': '-1898541',  // 베이징
        'PVG': '-1924465',  // 상하이
        'TAO': '-1922199',  // 칭다오
        'SYX': '-1924026',  // 싼야
        'IST': '-755070',   // 이스탄불
        'BKI': '-2404760',  // 코타키나발루
      };

      const checkin = url.searchParams.get('checkin') || '';
      const checkout = url.searchParams.get('checkout') || '';
      const minStars = parseInt(url.searchParams.get('stars') || '0');
      const destFilter = url.searchParams.get('dest') || ''; // 특정 도시만 조회

      // 날짜 없으면 기본값: 내일~모레
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfter = new Date(tomorrow);
      dayAfter.setDate(dayAfter.getDate() + 1);
      const fmtDate = (d) => d.toISOString().split('T')[0];
      const ci = checkin || fmtDate(tomorrow);
      const co = checkout || fmtDate(dayAfter);

      // 숙박일수 계산 (1박 가격 산출용)
      const nights = Math.max(1, Math.round((new Date(co) - new Date(ci)) / 86400000));

      const results = {};
      let entries = Object.entries(DEST_IDS);

      // dest 필터: 특정 도시만 요청 시 해당 도시만 조회 (API 할당량 절약)
      if (destFilter) {
        const wanted = destFilter.split(',').map(s => s.trim().toUpperCase());
        entries = entries.filter(([iata]) => wanted.includes(iata));
      }

      // 8개씩 병렬 처리
      const chunks = [];
      for (let i = 0; i < entries.length; i += 8) {
        chunks.push(entries.slice(i, i + 8));
      }

      for (const chunk of chunks) {
        await Promise.all(chunk.map(async ([iata, destId]) => {
          try {
            const starFilter = minStars > 0 ? `&class=${minStars}` : '';
            const searchUrl = `https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=${ci}&checkout_date=${co}&dest_type=city&dest_id=${destId}&adults_number=2&room_number=1&units=metric&filter_by_currency=KRW&locale=ko&order_by=price&page_number=0${starFilter}`;

            const res = await fetch(searchUrl, {
              headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': RAPIDAPI_HOST,
                'x-rapidapi-key': RAPIDAPI_KEY,
              }
            });
            if (!res.ok) return;
            const data = await res.json();

            if (data.result && data.result.length > 0) {
              // 가격이 있는 결과만 필터
              const withPrice = data.result.filter(h => h.min_total_price > 0);
              if (withPrice.length === 0) return;

              const best = withPrice[0]; // 이미 가격 낮은 순 정렬됨
              const totalPrice = best.min_total_price;
              const pricePerNight = Math.round(totalPrice / nights);
              const hotelName = best.hotel_name || '';
              const stars = best.class || 0;
              const reviewScore = best.review_score || 0;

              results[iata] = {
                priceKRW: pricePerNight,
                priceTotal: Math.round(totalPrice),
                nights: nights,
                priceLabel: Math.round(pricePerNight / 10000) + '만원~/박',
                hotelName: hotelName,
                stars: stars,
                reviewScore: reviewScore,
                bookingLink: `https://www.booking.com/searchresults.ko.html?dest_id=${destId}&dest_type=city&checkin=${ci}&checkout=${co}&group_adults=2&no_rooms=1&order=price`,
              };
            }
          } catch (_) {}
        }));
      }

      return new Response(JSON.stringify({
        data: results,
        checkin: ci,
        checkout: co,
        source: 'booking.com',
      }), { headers: CORS_HEADERS });
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
