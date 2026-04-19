#!/usr/bin/env python3
"""
데이터 추출 스크립트 — index.html → data.js
- v1_0_9_DEST_DATA, DEST_ENTRY, DEST_COUNTRY, DEST_REGION, DEST_COORDS 추출
- const → var 변환 (중복 선언 방지)
- <script src="data.js"> 자동 삽입
- 실패 시 자동 롤백
"""
import re, shutil, sys, os

HTML_FILE = 'index.html'
DATA_FILE = 'data.js'
BAK_FILE  = 'index.html.data.bak'

def rollback(reason):
    print(f'\n❌ {reason}')
    if os.path.exists(BAK_FILE):
        shutil.copy(BAK_FILE, HTML_FILE)
        print('🔄 index.html 자동 복원 완료')
    if os.path.exists(DATA_FILE):
        os.remove(DATA_FILE)
        print(f'🗑  {DATA_FILE} 제거')
    sys.exit(1)

def extract_declaration(content, pattern):
    """변수 선언 블록을 브래킷 카운팅으로 정확히 추출"""
    m = re.search(pattern, content)
    if not m:
        return None, None, None

    start = m.start()
    # '=' 이후부터 브래킷 카운팅
    eq_pos = content.index('=', start) + 1
    
    depth = 0
    in_string = False
    str_char = None
    i = eq_pos
    
    while i < len(content):
        c = content[i]
        
        # 문자열 처리
        if in_string:
            if c == '\\':
                i += 2
                continue
            if c == str_char:
                in_string = False
        else:
            if c in ('"', "'", '`'):
                in_string = True
                str_char = c
            elif c in ('{', '[', '('):
                depth += 1
            elif c in ('}', ']', ')'):
                depth -= 1
                if depth == 0:
                    end = i + 1
                    # 세미콜론 포함
                    j = end
                    while j < len(content) and content[j] in (' ', '\t'):
                        j += 1
                    if j < len(content) and content[j] == ';':
                        end = j + 1
                    return start, end, content[start:end]
        i += 1
    
    return None, None, None

# ── 1. 백업 ──
shutil.copy(HTML_FILE, BAK_FILE)
print(f'💾 백업 완료: {BAK_FILE}')

content = open(HTML_FILE, encoding='utf-8').read()

# ── 2. 각 데이터 변수 추출 ──
data_vars = [
    ('const v1_0_9_DEST_DATA', r'const v1_0_9_DEST_DATA\s*='),  # const → var 변환
    ('var DEST_ENTRY',         r'var DEST_ENTRY\s*='),
    ('var DEST_COUNTRY',       r'var DEST_COUNTRY\s*='),
    ('var DEST_REGION',        r'var DEST_REGION\s*='),
    ('var DEST_COORDS',        r'var DEST_COORDS\s*='),
]

extracted = []  # (name, start, end, code)

for name, pattern in data_vars:
    start, end, code = extract_declaration(content, pattern)
    if start is None:
        rollback(f'변수를 찾지 못했습니다: {name}')
    size = len(code)
    print(f'✅ 추출: {name} ({size:,} 바이트)')
    extracted.append((name, start, end, code))

# ── 3. data.js 생성 ──
data_js_content = '// data.js — 여행지 정적 데이터 (index.html에서 자동 추출)\n'
data_js_content += '// 주의: 직접 편집하지 마세요. extract_data.py로 재생성하세요.\n\n'

for name, start, end, code in extracted:
    # const → var 변환 (중복 선언 에러 방지)
    code_out = re.sub(r'^const\s+', 'var ', code.strip())
    data_js_content += f'// ── {name} ──\n'
    data_js_content += code_out + '\n\n'

open(DATA_FILE, 'w', encoding='utf-8').write(data_js_content)
print(f'\n✅ {DATA_FILE} 생성: {len(data_js_content):,} 바이트')

# ── 4. index.html에서 데이터 선언 제거 ──
# 역순으로 제거해야 위치가 흐트러지지 않음
new_content = content
sorted_extracted = sorted(extracted, key=lambda x: x[1], reverse=True)

for name, start, end, code in sorted_extracted:
    # 앞뒤 공백/줄바꿈도 같이 제거
    actual_start = start
    while actual_start > 0 and new_content[actual_start-1] in (' ', '\t'):
        actual_start -= 1
    actual_end = end
    while actual_end < len(new_content) and new_content[actual_end] in ('\n', '\r'):
        actual_end += 1
    new_content = new_content[:actual_start] + new_content[actual_end:]
    print(f'🗑  제거: {name}')

# ── 5. <script src="data.js"> 삽입 ──
# 첫 번째 인라인 <script> 바로 앞에 삽입 (원래 데이터가 있던 스크립트 앞)
# 실제로는 </head> 바로 전이나 첫 inline script 전에
insert_tag = '<script src="data.js"></script>\n'

# 첫 인라인 스크립트 찾기 (src="" 없는 것)
inline_script_match = re.search(r'<script(?!\s+src)[^>]*>', new_content)
if not inline_script_match:
    rollback('인라인 <script> 태그를 찾지 못했습니다')

insert_pos = inline_script_match.start()
new_content = new_content[:insert_pos] + insert_tag + new_content[insert_pos:]
print(f'\n✅ <script src="data.js"> 삽입 완료')

# ── 6. 검증 ──
checks = [
    ('src="data.js"',          'data.js 스크립트 태그'),
    ('function updateColumn',  'updateColumn 함수'),
    ('function fetchWeather',  'fetchWeather 함수'),
    ('function renderEntryInfo', 'renderEntryInfo 함수'),
    ('<link rel="stylesheet"', 'style.css 링크'),
]

for pattern, desc in checks:
    if pattern not in new_content:
        rollback(f'검증 실패: {desc} 없음')

# 데이터 변수가 data.js에 있고 index.html에서 선언이 제거됐는지
for name, _, _, _ in extracted:
    # index.html에 원래 선언이 없어야 함 (사용은 OK)
    var_name = name.split()[-1]
    # 선언 패턴 (var/const varname =) 이 남아있으면 안됨
    decl_pattern = rf'(?:var|const)\s+{re.escape(var_name)}\s*='
    if re.search(decl_pattern, new_content):
        rollback(f'index.html에 {name} 선언이 아직 남아있음')

print('✅ 모든 검증 통과')

# ── 7. 저장 ──
open(HTML_FILE, 'w', encoding='utf-8').write(new_content)

print(f'\n{"="*50}')
print(f'✅ 데이터 추출 성공!')
orig_size = os.path.getsize(BAK_FILE)
new_size  = len(new_content)
data_size = len(data_js_content)
print(f'   index.html: {orig_size:,} → {new_size:,} 바이트')
print(f'   data.js:    {data_size:,} 바이트')
print(f'{"="*50}')
print(f'\n다음 단계:')
print(f'  1. 브라우저에서 localhost:3000 확인 (데이터 정상 로드?)')
print(f'  2. python3 validate.py 실행')
print(f'  3. 문제 없으면: git add data.js index.html && git commit')
