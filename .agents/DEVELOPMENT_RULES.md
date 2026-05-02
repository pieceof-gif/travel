# odiga 개발 규칙 & 주의사항

## 🚨 절대 건드리면 안 되는 것들

### 1. `_initMobileCompare()` 함수
- **위치**: index.html 하단 JS 블록
- **역할**: 페이지 최초 로드 시 홈화면을 숨기고 비교화면 + 데이터를 렌더링
- **금지사항**:
  - `updateColumn()` 호출 제거 금지
  - `updateResultsByFilters()` 호출 제거 금지
  - 함수 자체를 `startSearch()`로 교체 금지

```js
// 이 흐름이 반드시 유지되어야 함
_initMobileCompare()
  → refreshSelectOptions()   // 드롭다운 옵션 채우기
  → updateColumn(0, 3, ...)  // 1번 컬럼 렌더링
  → updateColumn(1, 4, ...)  // 2번 컬럼 렌더링
  → updateResultsByFilters() // 랭킹/필터 적용
```

### 2. 초기 화면 구조 (HTML)
```html
<!-- home-view: 항상 기본 표시 (JS가 숨김 처리) -->
<div id="home-view"> ... </div>

<!-- compare-view: 항상 기본 숨김 (JS가 표시) -->
<div id="compare-view" style="display: none;"> ... </div>
```
- HTML에서 직접 `display:none` / `display:block`을 뒤집으면 안 됨
- JS의 `_initMobileCompare()`가 view 전환을 담당

### 3. `comparison-body`
- 초기 `display: none`으로 시작
- `updateResultsByFilters()` 내부에서 데이터가 있을 때만 `display: block`으로 변경
- API 추가 시 이 흐름을 우회하면 빈 화면 발생

---

## ✅ API 기능 추가 시 체크리스트

API(호텔/항공 등) 실시간 데이터를 붙일 때:

- [ ] `_initMobileCompare()` 기본 로직은 그대로 유지
- [ ] API 데이터는 `updateColumn()` 이후 **오버라이드** 방식으로 적용
- [ ] API 실패 시에도 하드코딩 fallback으로 화면이 나와야 함
- [ ] 비교화면이 처음 로드될 때 데이터가 보이는지 항상 확인

---

## 🚫 AI 금지 행동

- **`git push` 제안 금지** — push는 항상 사용자가 직접 한다. 커밋 후 push 여부를 묻거나 제안하지 않는다.
- **사용자에게 검증 요청 금지** — 브라우저·API 검증은 AI가 직접 한다.
- **이미 완료된 작업 재확인 요청 금지** — 사용자가 "했어"라고 하면 그대로 믿는다.
- **항공·숙박 링크 수정 전 매뉴얼 확인 없이 바로 수정 금지** — 반드시 `.agents/workflows/link-fix.md`를 먼저 열고 진단 3단계 완료 후 수정한다.

---

## 🔁 복구 방법 (버그 발생 시)

```bash
# 마지막 안전 커밋 확인
git log --oneline -10

# 특정 커밋 상태로 파일 복구
git checkout <커밋해시> -- index.html worker.js

# 커밋
git add index.html worker.js
git commit -m "revert: <이유>"
```

**안전 기준점 커밋**: `2caf57f` (링크 공유 + 아이콘 교체 완료)

---

## 📋 주요 함수 역할

| 함수 | 역할 | 주의 |
|---|---|---|
| `_initMobileCompare()` | 페이지 초기 렌더링 | 수정 금지 |
| `startSearch()` | 홈→비교뷰 전환 (버튼 클릭 시) | DOMContentLoaded에서 호출 금지 |
| `updateColumn(col, idx, budget, days)` | 개별 컬럼 데이터 렌더링 | API 추가 시 이후 오버라이드 |
| `updateResultsByFilters()` | 필터/랭킹 재계산 | 단독 호출로는 컬럼 데이터 안 채워짐 |
| `refreshSelectOptions()` | 드롭다운 옵션 생성 | updateColumn 전에 먼저 호출해야 함 |
| `_getSearchDates()` | 항공·숙박 링크용 날짜 계산 | 아래 규칙 참고 |
| `_getCurrentBudget()` | 현재 예산값 읽기 | budget-input-home 기준 |

---

## ✈️ 항공·숙박 링크 생성 규칙 (2026-05-02 확정)

### 핵심 원칙
- **모든 링크는 클릭 시점에 URL을 생성**한다 (렌더링 시점 고정 금지)
- **항공·숙박 링크는 항상 동일한 날짜**를 사용한다

### 날짜 판별 로직 (`_getSearchDates()`)
```js
// 1. 사용자가 직접 선택한 경우
if (window._isAutoDate === false && window.selectedDates?.length >= 2) {
  → window.selectedDates[0], [1] 사용
}
// 2. 날짜 미선택 (자동/기본값)
else {
  → 오늘 기준 +14일 출발, +21일 귀국 (7박)
  → 클릭하는 그 순간의 today 기준 (동적 계산)
}
```

### `window.selectedDates` 설정 시점
- flatpickr `onChange` → `window.selectedDates = [dep, ret]` + `window._isAutoDate = false`
- dc 달력 선택 → `window.selectedDates = [...]` + `window._isAutoDate = false`
- compare 달력 선택 → `window.selectedDates = [...]` + `window._isAutoDate = false`
- 앱 자동 날짜 세팅 → `window._isAutoDate = true` (selectedDates 설정 안 함)

### Skyscanner URL 포맷
```
/transport/flights/{출발코드}/{도착코드}/{YYMMDD}/{YYMMDD}/?adultsv2=1&currency=KRW&cabinclass=economy|business
```
- 날짜 포맷: `YYMMDD` (예: 260516)
- 예산 300만원 이상 → `cabinclass=business`
- 예산 300만원 미만 → `cabinclass=economy`

### Booking.com / Agoda URL 포맷
```
checkin=YYYY-MM-DD&checkout=YYYY-MM-DD  (Booking.com)
checkIn=YYYY-MM-DD&checkOut=YYYY-MM-DD  (Agoda)
```

### 금지사항
- `linkEl.href = 'https://...'` 형태로 렌더링 시점에 URL 고정 금지
- `_checkin`, `_checkout` 변수를 렌더링 시점에 계산해서 주입 금지
- `home-date-value` DOM 파싱으로 날짜 읽기 금지 (→ `window.selectedDates` 사용)

