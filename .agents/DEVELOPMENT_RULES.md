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
