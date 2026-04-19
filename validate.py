#!/usr/bin/env python3
"""
커밋 전 index.html 검증 스크립트
실행: python3 validate.py
"""
import subprocess, sys, re, os

html = open('index.html', encoding='utf-8').read()
errors = []

# ── 1. 핵심 JS 객체 중복 체크 ──
for var in ['var DEST_ENTRY = {', 'const v1_0_9_DEST_DATA', 'var DEST_COUNTRY = {']:
    cnt = html.count(var)
    if cnt != 1:
        errors.append(f'❌ "{var}" 가 {cnt}번 발견됨 (정상: 1번)')
    else:
        print(f'✅ {var[:30]}... — 1개')

# ── 2. 핵심 함수 존재 여부 ──
for fn in ['function updateColumn', 'function renderEntryInfo', 'function fetchWeather']:
    if fn not in html:
        errors.append(f'❌ {fn} 함수가 없음')
    else:
        print(f'✅ {fn}')

# ── 3. compare-view 인라인 style 금지 체크 ──
# compare-view에 display:none 인라인 style이 있으면 비교화면이 안보임
if 'id="compare-view" style="display: none;"' in html:
    errors.append('❌ compare-view에 display:none 인라인 style — 비교화면이 안보임')
else:
    print('✅ compare-view 인라인 style 없음 (정상)')

# ── 4. JS 문법 검증 (node 있을 때) ──
# HTML에서 <script> 블록 추출해서 node로 문법 체크
scripts = re.findall(r'<script>(.*?)</script>', html, re.DOTALL)
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
