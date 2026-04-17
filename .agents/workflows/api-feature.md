# API / 기능 추가 브랜치 워크플로우

## 언제 브랜치를 파나?

다음 작업 시 반드시 브랜치 사용:
- 호텔/항공/날씨 등 **API 연동 추가·수정**
- `_initMobileCompare()`, `updateColumn()`, `updateResultsByFilters()` **핵심 함수 수정**
- UI 대규모 변경 (레이아웃, 검색바, 비교 컬럼 구조)
- worker.js 수정

단순 작업은 main 직접 커밋 가능:
- 텍스트/문구 수정
- 색상·폰트 등 CSS 미세 조정
- 여행지 데이터(하드코딩) 추가

---

## 브랜치 네이밍 규칙

```
feature/hotel-api        → 신규 기능
fix/init-render-bug      → 버그 수정
ui/search-bar-redesign   → UI 변경
refactor/split-js        → 코드 정리
```

---

## Step-by-Step 워크플로우

### 1. 브랜치 생성
```bash
git checkout main
git pull
git checkout -b feature/hotel-api
```

### 2. 작업 & 중간 커밋
```bash
# 작업 내용 커밋 (작은 단위로 자주)
git add index.html worker.js
git commit -m "feat: 호텔 API 응답 파싱 추가"
```

### 3. 로컬 테스트 체크리스트
```
브라우저에서 http://localhost:8000/ 새로고침 후 확인:
  [ ] 페이지 로드 시 비교화면이 바로 보임 (홈화면 X)
  [ ] 타이베이·오사카 기본 데이터가 즉시 표시됨
  [ ] 여행지 드롭다운 변경 시 정상 렌더링
  [ ] 공유 URL(?d=...) 접속 시 정상 표시
  [ ] API 응답 없어도 하드코딩 fallback으로 표시됨
  [ ] 콘솔 에러 없음
```

### 4. main 병합
```bash
git checkout main
git merge feature/hotel-api
git push origin main
```

### 5. 브랜치 정리 (선택)
```bash
git branch -d feature/hotel-api
```

---

## 긴급 복구 절차

뭔가 깨졌을 때:

```bash
# 1. 안전 커밋 확인
git log --oneline -10

# 2. 특정 시점으로 파일 복구
git checkout <커밋해시> -- index.html worker.js

# 3. 커밋
git add index.html worker.js
git commit -m "revert: <이유>"

# 4. 배포
git push origin main
```

**현재 안전 기준점**: `2caf57f` (링크 공유 + 아이콘 교체 완료)

---

## AI와 함께 작업 시 주의사항

- "API 추가해줘" 요청 시 → AI에게 **브랜치 먼저 파달라고** 명시
- AI 수정 후 반드시 **로컬 새로고침으로 직접 확인**
- AI가 `_initMobileCompare()` 수정을 제안하면 → **이유 먼저 물어보기**
