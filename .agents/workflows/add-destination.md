---
description: 여행지 추가 체크리스트 및 검증 절차
---

# 🗺️ 여행지 추가 워크플로우

새로운 여행지를 추가할 때 아래 순서대로 작업합니다.

## 1단계: v1_0_9_DEST_DATA에 여행지 데이터 추가 (index.html)

`var v1_0_9_DEST_DATA = [...]` 배열 끝에 새 객체를 추가합니다.

필수 필드:
```javascript
{
  id: 'saipan',          // 고유 ID (영문 소문자)
  name: '사이판',        // 한국어 이름
  country: '미국령',     // 국가/지역
  baseAir: 50,           // 기준 항공요금 (만원)
  baseHotel: 12,         // 기준 숙박요금 (만원/1박)
  daily: '7만원',        // 하루 지출 (식비+교통+관광)
  // ... (기존 여행지 구조 참고)
}
```

## 2단계: 매핑 테이블 업데이트 (index.html)

아래 **모든 매핑**에 새 ID를 추가합니다:

| 매핑 테이블 | 위치 | 설명 | 예시 |
|------------|------|------|------|
| `DEST_REGION` | `var DEST_REGION` | 지역 분류 | `saipan:'pacific'` |
| `DEST_COUNTRY` | `var DEST_COUNTRY` | 국가 코드 | `saipan:'usa_territory'` |
| `DEST_COORDS` | `var DEST_COORDS` | 위도·경도 좌표 | `saipan:[15.19,145.75]` |
| `narratives` | `var narratives` | 여행지 설명 3개 | `'saipan':['...','...','...']` |
| `DEST_APPS` | `var DEST_APPS` | 필수 앱 목록 | `saipan:[{icon...,name...}]` |
| `DEST_FLAG` | (있을 경우) | 국기 이모지 | `saipan:'🇲🇵'` |

### 선택적 매핑 (자동 fallback 있음):
- `DEST_APPS`: 없으면 같은 DEST_COUNTRY의 다른 도시 앱을 자동 사용
- `DEST_FX_TIPS`: 없으면 DEST_COUNTRY 기반으로 조회 → `_default` fallback
- `DEST_ENTRY`: 없으면 DEST_COUNTRY 기반으로 조회

### 휴양지인 경우:
- `DEST_RESORT` Set에 ID 추가

## 3단계: IATA 코드 매핑 (index.html, 3곳)

항공·숙박·비자 API 연동을 위해 **3곳을 모두 업데이트**합니다:

```
1. 항공 IATA: "saipan: 'SPN'" (fetchTpFlightPrices 내부)
2. 숙박 IATA: "saipan: 'SPN'" (fetchTpHotelPrices 내부)  
3. 비자 IATA: "saipan:'SPN'" (visa API 내부)
```

> ⚠️ 검색 팁: `macau: 'MFM'` 같은 기존 마지막 항목을 찾아 그 뒤에 추가

## 4단계: worker.js DEST_CITY 업데이트

`worker.js`의 `DEST_CITY` 매핑에 Hotellook API 검색용 도시명을 추가합니다:

```javascript
SPN: 'Saipan',  // IATA코드: '영문도시명'
```

## 5단계: 검증

### 자동 검증 (필수)
// turbo
```bash
node -e "
const fs=require('fs');
const h=fs.readFileSync('index.html','utf8');
const m=h.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
let err=0;
m.forEach((b,i)=>{
  const c=b.replace(/<script[^>]*>/,'').replace(/<\/script>/,'');
  if(c.trim().length<50) return;
  try{new Function(c)}catch(e){console.log('Block '+i+': '+e.message.substring(0,200));err++}
});
console.log(err?'❌ ERRORS: '+err:'✅ JS 문법: OK');
"
```

### 콘솔 검증 (브라우저)
페이지 로드 후 브라우저 콘솔에서 확인:
```
✅ [여행지 매핑 검증] 총 N개 여행지 — 필수 매핑 완료
```
경고가 나오면 해당 매핑을 보완합니다.

### 육안 검증
1. 새 여행지가 드롭다운에 나오는지
2. 날씨가 정상 표시되는지
3. 올바른 통화/환율이 표시되는지
4. 필수 앱이 해당 나라에 맞는지

## 6단계: 커밋

```bash
git add -A && git commit -m "feat: 여행지 추가 — [여행지명] (IATA코드)"
```

## 참고: 자동 안전장치

다음 항목은 누락되어도 자동으로 대처됩니다:
- **DEST_APPS**: 같은 나라의 다른 도시 앱으로 fallback
- **DEST_FX_TIPS**: DEST_COUNTRY 기반 fallback → _default
- **DEST_ENTRY**: DEST_COUNTRY 기반 fallback
- **날씨 API**: DEST_COORDS만 있으면 _currentDestIdx 기반으로 정확히 호출
- **드롭다운**: syncId에서 옵션이 없으면 동적 추가
