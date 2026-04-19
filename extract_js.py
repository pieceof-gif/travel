#!/usr/bin/env python3
"""
JS 로직 추출 스크립트 — index.html 블록 3 → app.js
- 코드 내용 변경 없음 (Lift and Shift)
- 원래 위치에 <script src="app.js"> 배치 (실행 순서 100% 유지)
- 블록 4, 5는 인라인 유지
- 실패 시 자동 롤백
"""
import re, shutil, sys, os

HTML_FILE = 'index.html'
APP_FILE  = 'app.js'
BAK_FILE  = 'index.html.js.bak'

def rollback(reason):
    print(f'\n❌ {reason}')
    if os.path.exists(BAK_FILE):
        shutil.copy(BAK_FILE, HTML_FILE)
        print('🔄 index.html 자동 복원 완료')
    if os.path.exists(APP_FILE):
        os.remove(APP_FILE)
        print(f'🗑  {APP_FILE} 제거')
    sys.exit(1)

# ── 1. 백업 ──
shutil.copy(HTML_FILE, BAK_FILE)
print(f'💾 백업 완료: {BAK_FILE}')

content = open(HTML_FILE, encoding='utf-8').read()

# ── 2. 인라인 블록 모두 찾기 ──
pattern = re.compile(r'<script(?!\s+src)[^>]*>(.*?)</script>', re.DOTALL)
blocks = list(pattern.finditer(content))
print(f'인라인 <script> 블록 수: {len(blocks)}개')

if len(blocks) < 3:
    rollback(f'블록이 3개 미만입니다: {len(blocks)}개')

# ── 3. 블록 3 (인덱스 2) 추출 ──
target = blocks[2]
block3_code = target.group(1)
block3_start = target.start()
block3_end   = target.end()

line_num = content[:block3_start].count('\n') + 1
print(f'✅ 블록 3 위치: L{line_num}, {len(block3_code):,} 바이트')

fn_count = len(re.findall(r'\bfunction\s+\w+', block3_code))
print(f'   함수 수: {fn_count}개')

# ── 4. app.js 저장 ──
app_js_content = (
    '// app.js — 앱 로직 (index.html 블록 3에서 자동 추출)\n'
    '// 주의: 직접 편집하지 마세요. extract_js.py로 재생성하세요.\n\n'
    + block3_code
)
open(APP_FILE, 'w', encoding='utf-8').write(app_js_content)
print(f'✅ {APP_FILE} 저장: {len(app_js_content):,} 바이트')

# ── 5. index.html 수정 ──
# 블록 3을 <script src="app.js"></script>로 교체
replacement = '<script src="app.js"></script>'
new_content = content[:block3_start] + replacement + content[block3_end:]
print(f'✅ 블록 3 → <script src="app.js"> 교체 완료')

# ── 6. 검증 ──
checks_html = [
    ('src="app.js"',              'app.js 로드 태그'),
    ('src="data.js"',             'data.js 로드 태그'),
    ('href="style.css"',          'style.css 로드 태그'),
    ('function updateColumn',     'updateColumn 함수 (블록3에 있어야하지 않음)'),
]

# app.js에 함수가 있고 index.html에는 없어야 함
if 'function updateColumn' in new_content:
    rollback('index.html에 아직 function updateColumn이 남아있음')

if 'function updateColumn' not in app_js_content:
    rollback('app.js에 function updateColumn이 없음')

if 'src="app.js"' not in new_content:
    rollback('index.html에 app.js 로드 태그 없음')

# 블록 4, 5가 인라인으로 유지됐는지 확인
remaining_blocks = list(pattern.finditer(new_content))
if len(remaining_blocks) < 4:  # 블록 1,2,4,5 = 4개
    rollback(f'인라인 블록이 너무 적음: {len(remaining_blocks)}개 (예상: 4개)')

print('✅ 모든 검증 통과')
print(f'   남은 인라인 블록: {len(remaining_blocks)}개 (블록 1,2,4,5)')

# ── 7. 저장 ──
open(HTML_FILE, 'w', encoding='utf-8').write(new_content)

orig_size = os.path.getsize(BAK_FILE)
new_size  = len(new_content)
app_size  = len(app_js_content)

print(f'\n{"="*50}')
print(f'✅ JS 추출 성공!')
print(f'   index.html: {orig_size:,} → {new_size:,} 바이트')
print(f'   app.js:     {app_size:,} 바이트')
print(f'{"="*50}')
print(f'\n다음 단계:')
print(f'  1. localhost:3000 열고 전체 기능 테스트')
print(f'     - 여행지 목록 표시 정상?')
print(f'     - 드롭다운/검색 동작?')
print(f'     - 날씨 로드?')
print(f'     - 스켈레톤 → 실제 데이터?')
print(f'  2. python3 validate.py 실행')
print(f'  3. 문제 없으면 커밋')
