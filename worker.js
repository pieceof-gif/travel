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
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // ── /api/flights/all — 항공 최저가 전체 ──────────────
    if (url.pathname === '/api/flights/all') {
      const apiUrl = `https://api.travelpayouts.com/v1/prices/cheap?origin=${ORIGIN_IATA}&token=${TP_TOKEN}&currency=KRW&limit=1000`;

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

            // Step 2: get hotel prices for this city
            const priceUrl = `https://engine.hotellook.com/api/v2/cache.json?location=${locationId}&currency=krw&token=${TP_TOKEN}&period=7&adults=1&limit=3`;
            const priceRes = await fetch(priceUrl);
            if (!priceRes.ok) return;
            const priceData = await priceRes.json();

            if (Array.isArray(priceData) && priceData.length > 0) {
              const sorted = priceData
                .filter(h => h.priceFrom > 0)
                .sort((a, b) => (a.priceFrom || 9e9) - (b.priceFrom || 9e9));
              if (sorted.length > 0) {
                const pricePerNight = sorted[0].priceFrom;
                results[iata] = {
                  priceKRW: pricePerNight,
                  priceLabel: Math.round(pricePerNight / 10000) + '만원~/박',
                  hotelName: sorted[0].hotelName || sorted[0].name || '',
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

    return new Response(JSON.stringify({ status: 'ok', service: '최고의 여행 API Proxy' }), {
      headers: CORS_HEADERS
    });
  }
};
