# 코드 수정 프로세스 (버그 재발 방지)

## 오늘(2026-04-19) 발생한 버그 원인

### 버그 1: DEST_ENTRY 교체 중복 생성
- TargetContent를 첫 줄만 지정 → 새 내용 추가되고 기존 내용 유지 → JS 에러

### 버그 2: 홈화면이 계속 부활
- CSS 전역 / 미디어쿼리 / JS goHome() / HTML 인라인 style 4곳 중 일부만 수정
- 서로 충돌하며 반복적으로 부활

### 버그 3: 데이터 미로딩
- DEST_ENTRY 구조 변경이 renderEntryInfo 함수와 호환성 미확인

---

## 재발 방지 6가지 규칙

### Rule 1: 수정 전 의존 관계 파악 (Read Before Touch)
```bash
# 항상 먼저 확인
grep -n "수정대상" index.html
```

### Rule 2: 수정 1개 → 브라우저 확인 → 커밋 (순서 지키기)
❌ 수정 여러개 → 커밋 → 확인  
✅ 수정 1개 → localhost:3000 확인 → 커밋

### Rule 3: 큰 블록 교체는 Python 스크립트 + 즉시 검증
```python
assert content.count('var DEST_ENTRY = {') == 1
```

### Rule 4: CSS/JS/HTML 3곳이 같은 요소를 제어할 때 체크리스트

| 확인 항목 | 예시 |
|-----------|------|
| 전역 CSS 기본값 | `#home-view { display: flex }` |
| 미디어쿼리 오버라이드 | `@media ... #home-view { display: none }` |
| HTML 인라인 style | `<div id="home-view" style="...">` |
| JS 직접 조작 | `.style.display = 'block'` |

→ 4곳 모두 일관되게 수정한 후 커밋

### Rule 5: 커밋 전 스모크 테스트 (3가지)
```
□ localhost:3000 페이지 로드 → 비교 화면 정상 표시?
□ 여행지 드롭다운 동작?
□ 브라우저 콘솔 에러 없음?
```

### Rule 6: 대형 리팩토링은 브랜치에서
```bash
git checkout -b refactor/기능명
# 작업 + 검증 완료 후
git checkout main && git merge refactor/기능명
```

---

## 커밋 전 필수 체크리스트

```
□ grep으로 수정 대상 모든 참조 확인
□ CSS 전역 / 미디어쿼리 / 인라인 / JS 4곳 일관성 확인
□ Python 스크립트 교체 시 assert 검증 통과
□ localhost:3000 페이지 로드 정상 확인
□ 브라우저 콘솔 에러 없음
□ 의도치 않은 파일 변경 없음 (git diff 확인)
```
