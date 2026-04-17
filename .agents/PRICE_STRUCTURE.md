# 가격 구조 분석 — odiga 현재 상태

## 현재 서비스 상태: **100% 하드코딩**

실시간 API 없음. 모든 가격은 `v1_0_9_DEST_DATA` 배열의 고정값 기반으로 계산됨.

---

## 하드코딩 데이터 위치

**`index.html` → `v1_0_9_DEST_DATA` 배열** (line ~4681)

각 여행지마다 다음 값이 하드코딩:

```js
{
  id: 'taipei',
  baseAir: 45,          // 항공 기준가 (만원) — 이걸로 항공료 계산
  baseHotel: 8,         // 숙박 1박 기준가 (만원) — 이걸로 숙박료 계산
  baseHotelLow: 2,      // 저가 숙박 1박
  baseHotelHigh: 20,    // 고가 숙박 1박
  daily: '6만원',       // 1일 현지 경비
  minBudget: 60,        // 필터링 최소 예산
}
```

---

## 총 비용 계산 로직 (`updateColumn()`)

```
airPrice   = baseAir × 배수 (예산 티어에 따라 1.0~1.8배)
hotelPrice = baseHotel × (days - 1) × 배수
dailySpend = daily × 배수 × days

grandTotal = airPrice + hotelPrice + dailySpend
```

### 예산 티어별 배수

| 티어 | 항공 배수 | 숙박 기준 | 현지비 배수 | 조건 |
|---|---|---|---|---|
| **low** | ×1.0 | baseHotelLow | ×0.5 | 예산 부족 시 |
| **mid** | ×1.1 | baseHotel | ×1.0 | 기본 |
| **high** | ×1.3 | baseHotelHigh | ×1.8 | 예산 200만↑ |
| **VIP** | ×1.8 | baseHotelHigh×1.5 | ×2.5 | 예산 300만↑ |

---

## worker.js — 실시간 API 코드 있음 (현재 미사용)

| 엔드포인트 | 데이터 소스 | 상태 |
|---|---|---|
| `/api/flights/all` | Travelpayouts API | ✅ 코드 있음, **index.html에서 호출 안 함** |
| `/api/hotels/all` | Hotellook API | ✅ 코드 있음, **index.html에서 호출 안 함** |
| `/api/weather` | Open-Meteo | ✅ 현재 사용 중 |

---

## 결론

```
화면 가격 = 하드코딩 base값 × 예산 티어 배수
          → 실제 가격 아님, 추정치

worker.js API → 현재 연결 안 됨 (이전 커밋에서 연동했다가 revert됨)
```

## 실시간 연동 순서 (나중에 작업 시)

1. `worker.js` Cloudflare 배포
2. 페이지 로드 후 API 호출
3. 응답값으로 `baseAir`, `baseHotel` DOM 오버라이드
4. ⚠️ `_initMobileCompare()` 기본 렌더가 **반드시 먼저** 실행돼야 함
