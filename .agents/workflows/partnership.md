---
description: Agoda, Klook 등 제휴 파트너십 연동 프로세스
---

# 파트너십 연동 워크플로우

새 제휴 파트너(Agoda, Klook, 트래블월렛 등)가 승인됐을 때 아래 순서로 작업합니다.

---

## 1단계: 승인 확인 및 딥링크 형식 확인

파트너사 대시보드에서 확인:
- 제휴 ID / 트래킹 코드
- 딥링크 URL 형식 (예: `https://www.agoda.com/...?cid=1234567`)
- 커미션 방식 (CPC / CPA / 수수료율)

---

## 2단계: Cloudflare Secrets에 키 등록

코드 작성 전 먼저 Secrets 등록:
```
Cloudflare Dashboard > travel Worker > Settings > Variables and Secrets
Type: Secret
이름 예시: AGODA_PARTNER_ID / KLOOK_AFFILIATE_ID
```

---

## 3단계: 딥링크 적용 위치 결정

| 파트너 | 적용 위치 | 방식 |
|---|---|---|
| Agoda | 숙박 섹션 버튼 | 딥링크 URL에 파트너 ID 포함 |
| Klook | 체험 섹션 버튼 | 딥링크 URL에 파트너 ID 포함 |
| 트래블월렛 | 환전 섹션 | 앱 스토어 링크 또는 웹 링크 |
| 유심 서비스 | 필수 앱 섹션 | 제휴 링크 |

---

## 4단계: index.html 링크 수정

기존 "예약하기" 버튼 또는 앱 링크를 제휴 링크로 교체합니다.

```javascript
// 예: Agoda 딥링크 (파트너 ID 하드코딩 금지 → Worker 통해 처리하거나 공개 ID면 직접 사용)
const agodaUrl = `https://www.agoda.com/search?city=${cityName}&cid=AGODA_PARTNER_ID`;
```

> 파트너 ID가 민감하지 않은 퍼블릭 ID라면 `index.html`에 직접 사용 가능.
> API 키 형태라면 Worker 통해 처리.

---

## 5단계: 트래킹 테스트

1. 딥링크 클릭 후 파트너사 대시보드에서 클릭 수 확인 (보통 24시간 내 반영)
2. 테스트 예약 가능하면 커미션 발생 여부 확인

---

## 6단계: 커밋

```bash
git add -A && git commit -m "feat: [파트너명] 제휴 딥링크 연동"
```

---

## 현재 파트너십 현황

| 파트너 | 상태 | 비고 |
|---|---|---|
| Agoda | 승인 대기 중 | 수동 인증 요청 완료 |
| Travelpayouts | 연동 완료 | 항공·숙박 가격 API |
| Klook | 미신청 | 체험 연동 예정 |
| 트래블월렛 | 미신청 | 환전 섹션 예정 |
| 도시락SIM | 미신청 | 필수 앱 섹션 예정 |
