#!/usr/bin/env python3
"""
CSS 추출 스크립트 — index.html → style.css
- 자동 백업 (index.html.bak)
- 실패 시 자동 롤백
- 성공 시에만 .bak 파일 유지 (확인용)
"""
import re, shutil, sys, os

HTML_FILE = 'index.html'
CSS_FILE  = 'style.css'
BAK_FILE  = 'index.html.bak'

def rollback(reason):
    print(f'\n❌ {reason}')
    if os.path.exists(BAK_FILE):
        shutil.copy(BAK_FILE, HTML_FILE)
        print('🔄 index.html 자동 복원 완료')
    sys.exit(1)

# ── 1. 백업 ──
shutil.copy(HTML_FILE, BAK_FILE)
print(f'💾 백업 완료: {BAK_FILE}')

content = open(HTML_FILE, encoding='utf-8').read()

# ── 2. <style> 블록 모두 추출 ──
blocks = list(re.finditer(r'<style[^>]*>(.*?)</style>', content, re.DOTALL))
if not blocks:
    rollback('<style> 블록을 찾지 못했습니다')

combined_css = ''
for i, m in enumerate(blocks):
    combined_css += f'/* ── 블록 {i+1} (원래 L{content[:m.start()].count(chr(10))+1}) ── */\n'
    combined_css += m.group(1).strip() + '\n\n'

print(f'✅ CSS 추출 완료: {len(combined_css):,} 바이트 ({len(blocks)}개 블록)')

# ── 3. style.css 저장 ──
open(CSS_FILE, 'w', encoding='utf-8').write(combined_css)
print(f'✅ {CSS_FILE} 저장 완료')

# ── 4. index.html 수정 ──
# <link> 태그를 첫 <style> 위치에 삽입
first_style_pos = blocks[0].start()
link_tag = '<link rel="stylesheet" href="style.css">\n  '

# 모든 <style>...</style> 블록 제거
new_content = re.sub(r'\s*<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)

# </head> 바로 앞에 <link> 삽입
if '</head>' in new_content:
    new_content = new_content.replace('</head>', f'  {link_tag}</head>', 1)
else:
    rollback('</head> 태그를 찾지 못했습니다')

# ── 5. 기본 구조 검증 ──
checks = [
    ('<link rel="stylesheet" href="style.css">', '<link> 태그 삽입 확인'),
    ('<body', '<body> 태그 확인'),
    ('var DEST_ENTRY', 'DEST_ENTRY 데이터 확인'),
    ('function updateColumn', 'updateColumn 함수 확인'),
]
for pattern, desc in checks:
    if pattern not in new_content:
        rollback(f'검증 실패: {desc}')

# <style> 태그가 완전히 제거됐는지 확인
remaining_styles = re.findall(r'<style[^>]*>', new_content)
if remaining_styles:
    rollback(f'<style> 태그가 아직 남아있음: {remaining_styles}')

# ── 6. 저장 ──
open(HTML_FILE, 'w', encoding='utf-8').write(new_content)

print(f'\n========================================')
print(f'✅ CSS 추출 성공!')
print(f'   index.html: {len(content):,} → {len(new_content):,} 바이트')
print(f'   style.css: {len(combined_css):,} 바이트')
print(f'========================================')
print(f'\n다음 단계:')
print(f'  1. 브라우저에서 localhost:3000 확인')
print(f'  2. python3 validate.py 실행')
print(f'  3. 문제 없으면: git add . && git commit')
print(f'  4. 문제 있으면: python3 extract_css.py --rollback')
