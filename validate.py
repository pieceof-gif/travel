#!/usr/bin/env python3
"""
커밋 전 구조 검증 스크립트
실행: python3 validate.py

- data.js 분리 여부 자동 감지
- index.html + data.js(있으면) 통합 검증
"""
import subprocess, sys, re, os

html  = open('index.html', encoding='utf-8').read()
# data.js 있으면 통합해서 검증
data_js = open('data.js', encoding='utf-8').read() if os.path.exists('data.js') else ''
combined_src = html + '\n' + data_js  # 두 파일 합쳐서 중복/존재 체크

errors = []

# ── 1. 핵심 JS 객체 — index.html 또는 data.js에 정확히 1개 ──
# regex로 실제 선언만 카운트 (주석 오탐 방지)
def count_decl(src, varname):
    """var/const varname = 패턴만 카운트 (주석 제외)"""
    return len(re.findall(rf'(?:var|const)\s+{re.escape(varname)}\s*=', src))

for varname, display in [
    ('DEST_ENTRY',        'var DEST_ENTRY = {'),
    ('v1_0_9_DEST_DATA',  'v1_0_9_DEST_DATA'),
    ('DEST_COUNTRY',      'var DEST_COUNTRY = {'),
]:
    cnt = count_decl(combined_src, varname)
    if cnt != 1:
        errors.append(f'❌ {display} 선언이 {cnt}번 발견됨 (정상: 1번)')
    else:
        loc = 'data.js' if data_js and varname in data_js else 'index.html'
        print(f'✅ {display}... — 1개 ({loc})')

# ── 2. 핵심 함수 — index.html에 존재 ──
for fn in ['function updateColumn', 'function renderEntryInfo', 'function fetchWeather']:
    if fn not in html:
        errors.append(f'❌ {fn} 함수가 없음')
    else:
        print(f'✅ {fn}')

# ── 3. compare-view 인라인 style 금지 ──
if 'id="compare-view" style="display: none;"' in html:
    errors.append('❌ compare-view에 display:none 인라인 style — 비교화면이 안보임')
else:
    print('✅ compare-view 인라인 style 없음 (정상)')

# ── 4. data.js 분리 시 추가 검증 ──
if data_js:
    # data.js 로드 태그가 index.html에 있는지
    if 'src="data.js"' not in html:
        errors.append('❌ index.html에 <script src="data.js"> 없음')
    else:
        print('✅ data.js 로드 태그 확인')
    # data.js에 핵심 데이터 변수 존재 확인
    for var in ['v1_0_9_DEST_DATA', 'DEST_ENTRY', 'DEST_COUNTRY']:
        if var not in data_js:
            errors.append(f'❌ data.js에 {var} 없음')

# ── 5. style.css 분리 시 추가 검증 ──
if os.path.exists('style.css'):
    if 'href="style.css"' not in html:
        errors.append('❌ index.html에 <link href="style.css"> 없음')
    else:
        print('✅ style.css 로드 태그 확인')

# ── 6. JS 문법 검증 (node 있을 때) ──
scripts = re.findall(r'<script(?!\s+src)[^>]*>(.*?)</script>', html, re.DOTALL)
if scripts:
    combined = '\n'.join(scripts)
    tmp = '/tmp/_odiga_validate.js'
    open(tmp, 'w', encoding='utf-8').write(combined)
    try:
        result = subprocess.run(['node', '--check', tmp],
                                capture_output=True, text=True, timeout=10)
        if result.returncode == 0:
            print('✅ JS 문법 오류 없음')
        else:
            errors.append(f'❌ JS 문법 오류:\n{result.stderr[:300]}')
    except FileNotFoundError:
        print('⚠️  node 없음 — JS 문법 체크 생략')
    except Exception as e:
        print(f'⚠️  JS 체크 실패: {e}')
    finally:
        if os.path.exists(tmp): os.remove(tmp)

# ── 결과 ──
print()
if errors:
    print('=' * 50)
    print('🚨 커밋 전 수정 필요:')
    for e in errors:
        print(' ', e)
    print('=' * 50)
    sys.exit(1)
else:
    print('=' * 50)
    print('🎉 검증 통과 — 커밋 안전!')
    print('=' * 50)
