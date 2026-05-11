---
description: 여행지 추가 체크리스트 및 검증 절차
---

# 🗺️ 여행지 추가 워크플로우 (2026년 5월 기준)

새로운 여행지를 추가할 때 아래 순서대로 작업합니다.  
> **이 문서를 항상 먼저 참조하고, 각 단계를 빠짐없이 완료합니다.**

---

## 1단계: `data.js` — v1_0_9_DEST_DATA에 여행지 추가

`var v1_0_9_DEST_DATA = [...]` 배열 **끝에** 새 객체를 추가합니다.

필수 필드:
```javascript
{
  id: 'pattaya',             // 고유 ID (영문 소문자, 언더스코어 없이)
  name: '태국 · 파타야',     // 한국어 이름 (드롭다운 표시용)
  sub: '방콕 근교 해변 휴양', // 한 줄 부제목
  baseAir: 35,               // 기준 항공요금 (만원, 편도×2 기준)
  baseHotel: 7,              // 3-4성급 기준 숙박 (만원/1박) ← 목표표시가 ÷ 1.5 역산
  baseHotelLow: 4,           // 저가 티어 숙박 (만원/1박, 게스트하우스/호스텔)
  baseHotelHigh: 22,         // 프리미엄 티어 숙박 (만원/1박, 4-5성급)
  minDays: 3,                // 최소 권장 일수
  minBudget: 55,             // 최소 예산 티어 (만원, cheapest 기준 계산값)
  daily: '소비 보통',        // 현지 소비 수준
  alert:'-', news:'성수기 혼잡', newsSub:'5~8월 해변 붐빔',
  disaster:'낮음', disasterSub:'열대성 폭풍 주의',
  temp:'28–34°C', tempSub:'연중 더운 열대 기후',
  fx:'THB 안정적', fxSub:'환전 권장',
  // sights, exps, food, hotels, hotelTips, cheapFlights, flightTips ...
}
```

### ⚠️ baseHotel 역산 공식
```
목표 표시가(3-4성급 시장 평균, 만원/1박) ÷ 1.5 = baseHotel
예: 방콕 표시가 목표 8만원 → baseHotel = 8 ÷ 1.5 ≈ 5
```

### ⚠️ news 필드 작성 기준
- **여행자 관점**의 현지 이슈만 작성 (공사/개발 같은 정보 ❌)
- 예: `'성수기 혼잡'`, `'크루즈 인기'`, `'관광객 급증'`, `'우기 시작'`
- 10자 이내로 짧게

---

## 2단계: `data.js` — 매핑 테이블 4곳 업데이트

| 매핑 테이블 | 변수명 | 설명 | 예시 |
|------------|--------|------|------|
| 지역 분류 | `DEST_REGION` | 드롭다운 그룹핑 | `pattaya:'sea'` |
| 국가 코드 | `DEST_COUNTRY` | 입국/비자 정보 연동 | `pattaya:'thailand'` |
| 좌표 | `DEST_COORDS` | 날씨 API 호출 | `pattaya:[12.93,100.88]` |
| 입국 정보 | `DEST_ENTRY` | 나라별 자동 fallback ← **나라 키만 추가** | `thailand`에 이미 있으면 불필요 |

**DEST_REGION 유효값**: `sea`, `japan`, `east_asia`, `europe`, `pacific`, `domestic`

---

## 3단계: `app.js` 상단 — DEST_COORDS 추가 ⚠️ 반드시 필요

> **핵심 주의**: `app.js` **최상단(5번째 줄)** 에 별도의 `DEST_COORDS`가 하드코딩되어 있어,  
> `data.js`에만 좌표를 추가하면 날씨 API가 **작동하지 않습니다.**  
> `app.js` 상단의 `DEST_COORDS`에도 **반드시** 동일 좌표를 추가해야 합니다.

```javascript
// app.js 최상단 (Line 5~22)
var DEST_COORDS = {
  // ... 기존 항목들 ...
  saipan: [15.1850, 145.7504], palawan: [9.8349, 118.7384], sanya: [18.2528, 109.5119],
  pattaya: [12.9236, 100.8825],  // ← 신규 추가
};
```

---

## 4단계: `app.js` — DEST_CITY_IATA 추가

```javascript
// app.js Line ~4160
  istanbul: 'IST', madrid: 'MAD', london: 'LON',
  pattaya: 'BKK'   // ← 신규 추가 (공항 없는 경우 가장 가까운 국제공항)
};
```

> ⚠️ 공항이 없는 경우 가장 가까운 국제공항 IATA 사용  
> 예: `kyoto:'OSA'`, `pattaya:'BKK'`, `halong:'HAN'`

---

## 5단계: `app.js` — narratives 설명글 추가 ⚠️ 반드시 필요

> **없으면 자동 생성 fallback 텍스트가 표시됩니다** (스타일 불일치 발생).

**작성 기준 (기존 스타일 엄수):**
- 패턴: `[도시]는 [감성적 한 줄]. [명소1], [명소2], [명소3]까지 [소품]과 함께 [마무리]세요.`
- **목표 길이: ~112자, ~277B** (±15자 허용)
- 기존 예시 참고:

```javascript
// ✅ 올바른 스타일 (방콕 — 114자, 278B)
'bangkok': `방콕은 한 번 빠지면 헤어나올 수 없는 도시입니다. 왓포 사원의 경건한 새벽, 짜뚜짝 시장의 흥정, 루프탑 바에서 내려다보는 야경까지 톰양꿍 한 그릇의 감동과 함께 동남아 최고의 도시 에너지를 느껴보세요.`,

// ✅ 올바른 스타일 (파타야 — 112자, 276B)
'pattaya': `파타야는 태국 동부 해안의 자유분방한 해변 도시입니다. 산호섬의 투명한 바다, 농눅 빌리지의 열대 정원, 워킹 스트리트의 화려한 야경까지 타이 마사지 한 번과 함께 해변의 낭만적인 에너지를 즐겨보세요.`,
```

길이 검증 (추가 후 바로 실행):
```bash
node -e "
const t = '여기에 작성한 narrative 텍스트 붙여넣기';
console.log(t.length+'자', Buffer.byteLength(t,'utf8')+'B');
// 목표: 108~120자, 265~300B
"
```

---

## 6단계: `app.js` — DEST_RESORT 추가 (휴양지인 경우만)

```javascript
// app.js Line ~2297
var DEST_RESORT = new Set([
  // ... 기존 항목들 ...
  'pattaya',  // 해변/리조트 여행지만 추가
]);
```

> ⚠️ 도시 여행지(마닐라, 뉴욕 등)는 추가하지 않음

---

## 7단계: `worker.js` — DEST_CITY 추가

```javascript
// worker.js Line ~15
const DEST_CITY = {
  // ... 기존 항목들 ...
  BKK: 'Bangkok',  // 이미 있으면 불필요
};
```

---

## 8단계: `data.js` — DEST_APPS 추가 (선택)

없으면 같은 `DEST_COUNTRY`의 앱으로 자동 fallback — 꼭 추가 안 해도 됨.

---

## 9단계: 검증 (반드시 통과해야 추가 완료)

### 자동 매핑 감사 (필수)
// turbo
```bash
node -e "
const fs=require('fs');
const d=fs.readFileSync('data.js','utf8');
const a=fs.readFileSync('app.js','utf8');

const ids=new Set(); let m; const re=/id:'([^']+)'/g;
while((m=re.exec(d))!==null) ids.add(m[1]);
['spain','europe'].forEach(x=>ids.delete(x));

let fail=0;
const check=(src,name)=>{
  const missing=[...ids].filter(id=>!src.includes(id+':'));
  if(missing.length){ console.log('❌ '+name+' 누락: '+missing.join(', ')); fail+=missing.length; }
  else console.log('✅ '+name+': '+ids.size+'개 전체 커버');
};
check(d,'DEST_REGION');
check(d,'DEST_COUNTRY');
check(d,'DEST_COORDS (data.js)');
check(a,'DEST_COORDS (app.js 상단)');
check(a,'DEST_CITY_IATA');
check(a,'narratives');
console.log('');
console.log(fail===0?'🎉 모든 매핑 완료 — 추가 안전':'❌ '+fail+'건 누락 — 추가 전 반드시 채울 것');
"
```

> ⚠️ **누락이 있으면 절대 커밋하지 않습니다**
> - `DEST_REGION` 누락 → 드롭다운 그룹 분류 안 됨
> - `DEST_COUNTRY` 누락 → 비자/입국 정보 안 나옴
> - `DEST_COORDS` (data.js + **app.js 상단** 양쪽) 누락 → 날씨 안 나옴
> - `DEST_CITY_IATA` 누락 → 항공가격·스카이스캐너 링크 없음
> - `narratives` 누락 → 설명글 fallback 자동생성 텍스트 표시 (스타일 깨짐)

### 육안 검증
1. 새 여행지가 드롭다운에 나오는지
2. 날씨가 정상 표시되는지
3. 설명글이 기존 스타일과 비슷한 길이·문체인지
4. 예산 필터에서 결과에 나오는지

---

## 10단계: 커밋

```bash
git add data.js app.js worker.js && git commit -m "feat: 여행지 추가 — [여행지명] (IATA코드)"
```

---

## 자동 fallback 안전망

| 항목 | fallback 동작 |
|------|--------------|
| `DEST_APPS` | 같은 `DEST_COUNTRY`의 다른 도시 앱으로 대체 |
| `DEST_ENTRY` | `DEST_COUNTRY` 키 기반으로 자동 조회 |
| `DEST_FX_TIPS` | `DEST_COUNTRY` 기반 → `_default` fallback |
| 날씨 API | `DEST_COORDS` **app.js 상단 + data.js 양쪽** 필수 |
| `narratives` | 자동 fallback 있으나 **스타일 불일치 발생** — 반드시 작성 |

---

## ⚠️ 변경 금지 사항

- `v1_0_9_DEST_DATA` 배열의 **기존 항목 인덱스 순서** 변경 금지 (셀렉터 인덱스 기반)
- `DEST_ENTRY`의 기존 나라 키 **삭제 또는 rename** 금지
- 커밋/푸시는 **사용자 명시적 승인** 후에만 실행
