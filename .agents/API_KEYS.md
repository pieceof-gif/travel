# odiga 프로젝트 API 키 목록

> ⚠️ 이 파일은 새 대화 시작 시 **반드시 먼저 확인**해야 합니다.
> API 키가 필요할 때 다시 묻지 않도록 여기에 영구 저장합니다.

---

## 외교부 국가별 입국허가요건 API

| 항목 | 내용 |
|---|---|
| **서비스명** | 외교부 국가별 입국허가요건 조회 |
| **출처** | [data.go.kr](https://www.data.go.kr) |
| **발급일** | 2026-04-18 |
| **키 종류** | 일반 (개인 API 인증키) |
| **인증키** | `6cd2e8cbcd8831892fcc106f90756158e31986ba23c94f1ba0e38104435d58c5` |
| **용도** | worker.js `/api/entry` 엔드포인트에서 비자 정보 자동화 |
| **Cloudflare Secret 이름** | `MOFA_API_KEY` |

### 연동 상태
- [x] Cloudflare Worker Secret 등록 (`MOFA_API_KEY`) — 사용자 직접 등록 완료
- [x] worker.js `/api/visa` 엔드포인트 구현 (218~345줄, 외교부 1차 + GitHub CSV fallback)
- [x] app.js `fetchVisaInfo()` + `renderEntryInfo()` 연동 — 2026-04-18 완료

---

## 기타 서비스 키

| 서비스 | 키 | 발급일 | 용도 |
|---|---|---|---|
| *(추가 예정)* | | | |
