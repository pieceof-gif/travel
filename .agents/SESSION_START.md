# 🚀 새 대화 시작 시 필수 체크리스트

> **AI에게:** 새 대화가 시작되면 코드 작업 전에 아래 파일들을 **반드시 순서대로** 읽어야 합니다.
> 읽지 않고 작업하면 이전 맥락을 잃어버려 같은 실수가 반복됩니다.

---

## Step 1: 필수 파일 읽기 (순서 지키기)

| 순서 | 파일 | 내용 |
|---|---|---|
| 1 | `.agents/API_KEYS.md` | **API 키 목록** — 사용자에게 다시 묻지 않기 위해 가장 먼저 읽기 |
| 2 | `.agents/DEVELOPMENT_RULES.md` | 절대 건드리면 안 되는 함수/구조 |
| 3 | `.agents/PRICE_STRUCTURE.md` | 가격 데이터 구조 |
| 4 | `.agents/workflows/coding-process.md` | 버그 재발 방지 룰 (Rule 0~6) |

---

## Step 2: 이전 작업 맥락 파악

1. 대화 히스토리 요약 확인 (Conversation Summaries)
2. 마지막 task.md 또는 implementation_plan.md 확인
3. 미완료 항목(`[ ]`) 파악 후 사용자에게 이어서 진행할지 확인

---

## Step 3: 작업 전 자가 점검

코드 작업 시작 전 확인:

```
□ API_KEYS.md에서 필요한 키 확인했는가?
□ DEVELOPMENT_RULES.md의 금지사항 숙지했는가?
□ coding-process.md의 Rule 0 (표준 패턴 파악) 적용했는가?
□ 여러 파일 수정이면 브랜치를 팠는가? (api-feature.md 참고)
```

---

## 워크플로우 전체 맵

| 상황 | 참고 워크플로우 |
|---|---|
| 새 여행지 추가 | `workflows/add-destination.md` |
| API 추가/변경 작업 | `workflows/api-change.md` + `workflows/api-feature.md` |
| API 키 필요할 때 | `workflows/api-keys.md` → `API_KEYS.md` 확인 |
| 데이터 최신화 | `workflows/data-update.md` |
| 배포 전 | `workflows/deploy-security.md` |
| 파트너십 연동 | `workflows/partnership.md` |
| 코드 수정 중 버그 의심 | `workflows/coding-process.md` |

---

## 과거 실수 기록 (반복 금지)

| 날짜 | 실수 내용 | 방지 방법 |
|---|---|---|
| 2026-04-19 | 사용자가 준 API 키(외교부, 2026-04-18)를 새 대화에서 기억 못함 | 항상 `API_KEYS.md` 먼저 읽기 |
| 2026-04-19 | DEST_ENTRY 교체 시 중복 생성으로 JS 에러 발생 | `coding-process.md` Rule 3 적용 |
| 2026-04-19 | 홈화면이 CSS/JS/HTML 4곳에서 충돌하여 반복 부활 | `coding-process.md` Rule 4 적용 |
