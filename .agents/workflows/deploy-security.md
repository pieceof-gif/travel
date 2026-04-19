---
description: 안전하게 배포하는 프로세스 (GitHub Pages + Cloudflare Worker)
---

# 배포 보안 워크플로우

커밋/배포 전 반드시 이 체크리스트를 확인합니다.

---

## 배포 전 필수 체크 (모든 작업 완료 후)

### 1. API 키 노출 검사
// turbo
```bash
grep -n "api_key\|apikey\|token.*=.*['\"][a-zA-Z0-9]\{10,\}" index.html worker.js \
  | grep -v "env\.\|//\|Bearer\|TP_TOKEN은"
```
결과가 반드시 0줄이어야 합니다. 노출된 키가 있으면 커밋하지 않습니다.

### 2. JS 문법 검사
// turbo
```bash
node -e "
const fs=require('fs');
const h=fs.readFileSync('index.html','utf8');
const m=h.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
let err=0;
m.forEach((b,i)=>{
  const c=b.replace(/<script[^>]*>/,'').replace(/<\/script>/,'');
  if(c.trim().length<50) return;
  try{new Function(c)}catch(e){console.log('Block '+i+': '+e.message.substring(0,200));err++}
});
console.log(err?'❌ ERRORS: '+err:'✅ JS 문법: OK');
"
```

---

## OG 이미지 변경 시

카카오톡 캐시 우회를 위해 반드시 파일명 버전 변경:
- `og-image-v4.png` → `og-image-v5.png`
- `index.html`의 `og:image` 경로도 함께 업데이트
- 배포 후 카카오 디버거(developers.kakao.com/tool/debugger)에서 캐시 초기화

---

## GitHub Pages 배포

```bash
git add -A
git commit -m "커밋 메시지"
# 이후 GitHub Desktop에서 Push
```

> 현재 환경에서 터미널 push 시 인증 오류 발생 → GitHub Desktop 사용

---

## Cloudflare Worker 배포

`worker.js`를 변경했을 때만 필요합니다:

```
Cloudflare Dashboard > Workers & Pages > travel
> 우측 상단 Deploy 버튼
```

---

## 현재 등록된 Secrets

| 이름 | 용도 |
|---|---|
| `TP_TOKEN` | Travelpayouts 항공·숙박 API |

새 API 키 추가 시:
1. Cloudflare Dashboard > travel Worker > Settings > Variables and Secrets
2. Type: **Secret** (Plaintext 아님) 선택
3. 코드에서 `env.새키이름`으로 참조

---

## 공유 URL 확인

공유 버튼은 항상 `https://odiga.kr/` 기준으로 URL 생성합니다.
`http://` 또는 프로토콜 없는 URL로 공유하면 카카오 OG 캐시가 분리됩니다.
