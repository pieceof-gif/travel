---
description: 새 대화 시작 시 또는 API 키가 필요할 때 반드시 실행하는 프로세스
---

# 🔑 API 키 관리 워크플로우

새 대화가 시작되거나 API 키가 필요한 작업 전에 **반드시** 이 워크플로우를 실행합니다.

## 규칙

> ⚠️ 사용자에게 "API 키를 알려달라"고 요청하기 **전에** 반드시 아래 파일을 먼저 확인해야 합니다.
> 파일에 키가 있으면 사용자에게 다시 묻지 않습니다.

## 1단계: API 키 파일 읽기 (항상 먼저 실행)

```
파일 경로: .agents/API_KEYS.md
```

이 파일에는 사용자가 제공한 모든 API 키가 저장되어 있습니다.
새 대화 시작 시, 또는 외부 API 연동 작업 시작 전에 반드시 읽습니다.

## 2단계: 새 API 키 수령 시 즉시 저장

사용자가 새 API 키를 제공하면 **대화 중 즉시** `.agents/API_KEYS.md`에 추가합니다.

추가 형식:
```markdown
| 서비스명 | 인증키값 | 발급일 | 용도 | Cloudflare Secret 이름 |
```

## 3단계: Cloudflare Secret 등록 안내

API 키를 받은 뒤, Cloudflare Secret 등록이 안 되어 있으면 사용자에게 안내:

```bash
# Cloudflare Worker Secret 등록
wrangler secret put SECRET_NAME
# 프롬프트에 키 값 입력
```

## 현재 등록된 API 키 목록

| 서비스 | 파일 위치 | 상태 |
|---|---|---|
| 외교부 입국허가요건 | `.agents/API_KEYS.md` | ✅ 저장됨 |

---

## 주의사항

- API 키는 절대 `index.html`이나 `worker.js` 소스코드에 하드코딩하지 않습니다.
- Cloudflare Worker에서는 `env.SECRET_NAME`으로 참조합니다.
- 로컬 테스트 시 `.dev.vars` 파일에 임시 저장 (`.gitignore`에 포함 필수).
