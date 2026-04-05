const fs = require('fs');
const h = fs.readFileSync('/Users/leejiyun/Library/Mobile Documents/com~apple~CloudDocs/Antigravity/test/260318_travel/index.html', 'utf8');
const dataBlock = h.substring(h.indexOf('var v1_0_9_DEST_DATA'), h.indexOf('];', h.indexOf('var v1_0_9_DEST_DATA')));
const ids = [...dataBlock.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
console.log('여행지:', ids.length);

function chk(name, key) {
  const s = h.indexOf(key);
  if (s < 0) { console.log('? ' + name); return; }
  const e = h.indexOf('};', s) > 0 ? h.indexOf('};', s) : h.indexOf('];', s);
  const b = h.substring(s, e);
  const miss = ids.filter(id => !b.includes("'" + id + "'") && !b.includes(id + ':') && !b.includes(id + ':['));
  console.log((miss.length ? '❌' : '✅') + ' ' + name + (miss.length ? ' 누락(' + miss.length + '): ' + miss.join(',') : ''));
}

chk('DEST_REGION', 'var DEST_REGION');
chk('DEST_COUNTRY', 'var DEST_COUNTRY');
chk('DEST_COORDS', 'var DEST_COORDS');
chk('narratives', 'var narratives');
chk('DEST_APPS', 'var DEST_APPS');
chk('DEST_PHOTOS', 'var DEST_PHOTOS');
chk('DEST_ENTRY', 'var DEST_ENTRY');
chk('DEST_FX_TIPS', 'var DEST_FX_TIPS');
chk('DEST_SEASONAL', 'var DEST_SEASONAL');

// wizard bonus
const bs = h.indexOf('const bonus = {');
if (bs > 0) {
  const bb = h.substring(bs, h.indexOf('};', bs));
  const miss = ids.filter(id => !bb.includes(id));
  console.log((miss.length ? '❌' : '✅') + ' wizard.bonus' + (miss.length ? ' 누락(' + miss.length + '): ' + miss.join(',') : ''));
}
const ws = h.indexOf('window.wizardBonus = {');
if (ws > 0) {
  const wb = h.substring(ws, h.indexOf('};', ws));
  const miss = ids.filter(id => !wb.includes(id));
  console.log((miss.length ? '❌' : '✅') + ' window.wizardBonus' + (miss.length ? ' 누락(' + miss.length + '): ' + miss.join(',') : ''));
}

// 위자드 질문별
const qs = h.match(/label:\s*'([^']+)'[^}]*bonus:\s*\{([^}]+)\}/g);
if (qs) {
  let qMiss = 0;
  qs.forEach(q => {
    const m = q.match(/label:\s*'([^']+)'/);
    const b = q.match(/bonus:\s*\{([^}]+)\}/);
    if (m && b) {
      const miss = ids.filter(id => !b[1].includes(id));
      if (miss.length) { console.log('  ❌ Q:"' + m[1] + '" 누락: ' + miss.join(',')); qMiss++; }
    }
  });
  if (!qMiss) console.log('✅ wizard 질문별 bonus: 전체');
}

console.log('DONE');
