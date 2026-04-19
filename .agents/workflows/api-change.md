---
description: API 추가/변경 시 버그 없이 작업하는 프로세스
---

# API 추가 / 변경 워크플로우

새 API를 연동하거나 기존 API를 수정할 때 아래 순서대로 작업합니다.

---

## 1단계: 환경변수 먼저 등록 (코드 작성 전)

API 키가 있다면 **코드에 쓰기 전에** Cloudflare Secrets에 먼저 등록합니다.

```
Cloudflare Dashboard > Workers & Pages > travel Worker
> Settings > Variables and Secrets > + Add
  Type: Secret
  Variable name: 키이름 (예: AGODA_API_KEY)
  Value: 실제 키값
> Deploy
```

> ⚠️ 절대 `index.html`이나 `worker.js` 코드 안에 API 키를 직접 쓰지 않습니다.

---

## 2단계: API 호출 위치 결정

| API 성격 | 호출 위치 | 이유 |
|---|---|---|
| 키가 필요한 API | `worker.js` | 키 보안, CORS 처리 |
| 공개 API (키 없음) | `index.html` 직접 가능 | 보안 이슈 없음 |
| 외부 도메인 API | `worker.js` | CORS 우회 필요 |

---

## 3단계: worker.js 수정 시

1. `export default { async fetch(request, env) {} }` 형태 유지 (`env` 필수)
2. 환경변수는 `env.변수명`으로 사용
3. 새 엔드포인트 추가 시 `url.pathname === '/api/새경로'` 패턴으로 추가
4. 항상 CORS 헤더 포함:
```javascript
return new Response(JSON.stringify(data), { headers: CORS_HEADERS });
```

---

## 4단계: index.html에서 API 호출 시

Cloudflare Worker를 통해 프록시:
```javascript
// 직접 호출 ❌
fetch('https://external-api.com?token=abc123')

// Worker 통해 프록시 ✅
fetch('https://travel.le2jy.workers.dev/api/새경로?param=값')
```

---

## 5단계: 검증

### JS 문법 검사 (필수)
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

### API 키 노출 검사 (필수)
// turbo
```bash
grep -n "api_key\|apikey\|token.*=.*['\"][a-zA-Z0-9]\{10,\}" index.html worker.js \
  | grep -v "env\.\|//\|Bearer\|TP_TOKEN은"
```
결과가 0줄이어야 합니다.

### 브라우저 콘솔 확인
- 빨간 에러 없는지 확인
- API 응답이 정상인지 확인 (Network 탭)

---

## 6단계: Cloudflare Worker 재배포

`worker.js`를 변경했다면 Cloudflare에서 수동 재배포 필요:
```
Cloudflare Dashboard > travel Worker > 화면 우측 상단 > Deploy
```
또는 wrangler CLI:
```bash
npx wrangler deploy worker.js
```

---

## 7단계: 커밋

```bash
git add -A && git commit -m "feat: [API명] 연동 추가"
```

---

## 현재 등록된 API

| API | Worker 엔드포인트 | 용도 | Secret 키 |
|---|---|---|---|
| Travelpayouts | `/api/flights/all`, `/api/hotels` | 항공·숙박 가격 | `TP_TOKEN` |
| Open-Meteo | index.html 직접 (공개 API) | 날씨 | 없음 |
| Agoda | 승인 후 추가 예정 | 숙박 | `AGODA_API_KEY` |
