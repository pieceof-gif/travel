# 항공·숙박 링크 수정 매뉴얼
> 2026-05-02 교훈 기반. 이 파일을 먼저 읽지 않고 링크 수정하지 말 것.

---

## ⛔ 수정 전 반드시 확인할 것 (진단 먼저, 수정 나중)

링크가 잘못 나온다는 제보를 받으면 즉시 수정하지 말고, 아래 순서로 진단한다.

### Step 1: 앱 상태 변수 확인 (콘솔)

```javascript
// 브라우저 DevTools 콘솔에서 실행
console.log('_isAutoDate:', window._isAutoDate);
console.log('selectedDates:', window.selectedDates);
console.log('home-date-value:', document.getElementById('home-date-value')?.textContent);
console.log('budget:', document.getElementById('budget-input-home')?.value);
```

| 변수 | 의미 |
|---|---|
| `_isAutoDate === false` | 사용자가 직접 날짜 선택함 |
| `_isAutoDate === true` | 앱이 자동으로 날짜 표시 (미선택) |
| `_isAutoDate === undefined` | 아직 아무 상호작용 없음 (= 미선택과 동일) |
| `selectedDates` | 실제 선택된 Date 객체 배열 (미선택 시 undefined) |

### Step 2: 링크 href 확인 (콘솔)

```javascript
// 항공 카드 링크
document.querySelectorAll('.flight-card-link').forEach((l, i) => {
  console.log(`항공링크[${i}] href:`, l.href, '| skyRoute:', l.dataset.skyRoute);
});

// 숙박 링크
document.querySelectorAll('.hotel-card-link').forEach((l, i) => {
  console.log(`숙박링크[${i}] href:`, l.href);
});

// 항공권 보기 버튼
document.querySelectorAll('.btn-ghost').forEach((b, i) => {
  console.log(`btnGhost[${i}] skyRoute:`, b.dataset.skyRoute, '| isVip:', b.dataset.isVip);
});
```

**정상 상태**: 항공 링크 `href` = `"#"`, `dataset.skyRoute` = `/transport/flights/icn/xxx`

### Step 3: `_getSearchDates()` 출력 확인

```javascript
// 콘솔에서 직접 호출 (app.js 클로저 외부에서는 접근 불가 → 페이지 직접 조작)
// 대신 클릭 후 Network 탭에서 열린 URL 확인
```

---

## ✅ 링크 동작 원칙 (변경 금지)

```
클릭 → _getSearchDates() 호출 → URL 생성 → window.open()
```

1. **렌더링 시 URL 고정 절대 금지** — `linkEl.href = '...날짜...'` 형태 금지
2. **모든 링크(항공·숙박)는 동일한 `_getSearchDates()` 결과를 사용**
3. **DOM 텍스트 파싱으로 날짜 읽기 금지** — `home-date-value.textContent` 파싱 금지

---

## 📐 날짜 계산 로직 (`_getSearchDates()`)

```
사용자 선택 여부 판단:
  _isAutoDate === false AND selectedDates 존재
  → selectedDates[0], [1] 사용

그 외 (미선택):
  → new Date() + 14일 (출발), + 21일 (귀국)
  → 클릭 순간의 오늘 기준 동적 계산
```

---

## 🕵️ 자주 나타나는 증상과 원인

| 증상 | 원인 | 해결 |
|---|---|---|
| 날짜 바꿔도 링크가 안 바뀜 | href가 렌더링 시점에 고정됨 | click 핸들러에서 URL 생성으로 변경 |
| 날짜 미선택인데 엉뚱한 날짜 | `_isAutoDate`가 false여서 앱 자동 날짜를 선택 날짜로 오인 | `window.selectedDates` 존재 여부 함께 확인 |
| Skyscanner "가장 저렴한 달" 뷰 | 3~4박 단기여행 → Skyscanner 서버 리다이렉트 | 기본값을 7박(+14/+21일)으로 설정 |
| 항공은 올바른 날짜, 숙박은 틀린 날짜 | 각 핸들러가 다른 방식으로 날짜 읽음 | 모두 `_getSearchDates()` 단일 함수로 통일 |
| flatpickr 선택 날짜가 링크에 반영 안 됨 | flatpickr onChange에서 `window.selectedDates` 미설정 | `_onDateRangeSelected()`에 `window.selectedDates = [dep, ret]` 추가 |

---

## 🚫 절대 하지 말 것

- 브라우저 검증 없이 "될 것 같다"고 말하기
- 진단 없이 바로 수정하기
- 기본값을 여러 번 바꾸기 (오늘 6번 바꿈)
- `home-date-value` DOM 텍스트를 파싱해서 날짜 읽기
- `_getSearchDates()` 대신 별도 날짜 변수를 만들기

---

## 🔧 수정이 필요할 때 체크리스트

- [ ] Step 1~3 진단 완료
- [ ] 원인 하나를 특정했는가? (여러 가지 "가능성"이면 더 조사)
- [ ] `_getSearchDates()` 로직에 변경이 필요한가? 아니면 호출하는 쪽 문제인가?
- [ ] 수정 후 브라우저 콘솔에서 날짜 직접 확인했는가?
- [ ] 항공·숙박 양쪽 모두 같은 날짜가 나오는가?
- [ ] 날짜 선택 / 미선택 두 시나리오 모두 테스트했는가?
