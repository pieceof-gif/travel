// ── 최고의 여행 — Cloudflare Worker API 프록시 ──
// 배포 후 URL: https://travel-proxy.<account>.workers.dev

const TP_TOKEN = '6a6084c8f32d44f563ba4baa66f11975';
const TP_MARKER = '510036';
const ORIGIN_IATA = 'ICN';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8',
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // ── /api/flights?dest=TPE ──────────────────────────
    if (url.pathname === '/api/flights') {
      const dest = url.searchParams.get('dest') || '';
      const apiUrl = `https://api.travelpayouts.com/v1/prices/cheap?origin=${ORIGIN_IATA}&destination=${dest}&token=${TP_TOKEN}&currency=KRW`;

      try {
        const res = await fetch(apiUrl, {
          headers: { 'X-Access-Token': TP_TOKEN }
        });
        const data = await res.json();

        // 최저가 추출
        let minPrice = null;
        let airline = null;
        if (data && data.data && data.data[dest]) {
          const entries = Object.values(data.data[dest]);
          entries.sort((a, b) => a.price - b.price);
          if (entries.length > 0) {
            minPrice = entries[0].price;
            airline = entries[0].airline;
          }
        }

        const result = {
          dest,
          priceKRW: minPrice,
          priceLabel: minPrice ? Math.round(minPrice / 10000) + '만원~' : null,
          airline,
          bookingLink: `https://www.jetradar.com/flights/${ORIGIN_IATA}--${dest}/?marker=${TP_MARKER}`,
        };

        return new Response(JSON.stringify(result), { headers: CORS_HEADERS });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500, headers: CORS_HEADERS
        });
      }
    }

    // ── /api/flights/all — 전체 목적지 한번에 ──────────
    if (url.pathname === '/api/flights/all') {
      const apiUrl = `https://api.travelpayouts.com/v1/prices/cheap?origin=${ORIGIN_IATA}&token=${TP_TOKEN}&currency=KRW&limit=1000`;

      try {
        const res = await fetch(apiUrl, {
          headers: { 'X-Access-Token': TP_TOKEN }
        });
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
                bookingLink: `https://www.jetradar.com/flights/${ORIGIN_IATA}--${iata}/?marker=${TP_MARKER}`,
              };
            }
          }
        }

        return new Response(JSON.stringify({ data: results }), { headers: CORS_HEADERS });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500, headers: CORS_HEADERS
        });
      }
    }

    // ── /api/hotels?dest=TPE ───────────────────────────
    if (url.pathname === '/api/hotels') {
      const dest = url.searchParams.get('dest') || '';
      const apiUrl = `https://search.aviasales.ru/api/v1/prices/cheap?origin=${ORIGIN_IATA}&destination=${dest}&token=${TP_TOKEN}`;

      // 숙박은 Travelpayouts Hotel Data API 사용
      const hotelApiUrl = `https://engine.hotellook.com/api/v2/cache.json?location=${dest}&currency=krw&token=${TP_TOKEN}&limit=5`;

      try {
        const res = await fetch(hotelApiUrl);
        const data = await res.json();

        let minPrice = null;
        if (Array.isArray(data) && data.length > 0) {
          const sorted = data.sort((a, b) => (a.priceFrom || 9999999) - (b.priceFrom || 9999999));
          minPrice = sorted[0].priceFrom;
        }

        return new Response(JSON.stringify({
          dest,
          pricePerNight: minPrice,
          priceLabel: minPrice ? Math.round(minPrice / 10000) + '만원~' : null,
          bookingLink: `https://tp.media/r?marker=${TP_MARKER}&trs=1&p=4114&u=https%3A%2F%2Fwww.hotellook.com%2Fcities%2F${dest}`,
        }), { headers: CORS_HEADERS });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500, headers: CORS_HEADERS
        });
      }
    }

    return new Response(JSON.stringify({ status: 'ok', service: '최고의 여행 API Proxy' }), {
      headers: CORS_HEADERS
    });
  }
};
