---
description: 새 대화 시작 시 반드시 실행 — 이전 맥락·API 키·규칙을 모두 불러오는 초기화 프로세스
---

# 🚀 새 대화 세션 시작 프로세스 (/session-start)

새 대화가 시작되면 **코드 작업 전에** 반드시 이 워크플로우를 실행합니다.

## 1단계: 필수 파일 읽기

다음 파일들을 순서대로 읽습니다:

1. `.agents/API_KEYS.md` — API 키 목록 확인 (사용자에게 다시 묻지 않기 위해)
2. `.agents/DEVELOPMENT_RULES.md` — 금지사항 및 핵심 함수 역할
3. `.agents/PRICE_STRUCTURE.md` — 가격 데이터 구조
4. `.agents/workflows/coding-process.md` — 버그 재발 방지 규칙

## 2단계: 이전 작업 확인

- 최근 대화 요약에서 미완료 항목 파악
- `task.md` / `implementation_plan.md` 잔여 작업 확인
- 사용자에게 이어서 진행할 작업 제안

## 3단계: 이번 세션 작업 확인

사용자 요청 파악 후 관련 워크플로우 식별:

| 요청 유형 | 실행 워크플로우 |
|---|---|
| 여행지 추가 | `/add-destination` |
| API 연동/변경 | `/api-change` |
| 데이터 업데이트 | `/data-update` |
| 배포 | `/deploy-security` |
| 파트너십 | `/partnership` |
