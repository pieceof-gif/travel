// app.js — 앱 로직 (index.html 블록 3에서 자동 추출)
// 주의: 직접 편집하지 마세요. extract_js.py로 재생성하세요.

// ── 여행지 좌표 매핑 ──
var DEST_COORDS = {
  lisbon: [38.7223, -9.1393], danang: [16.0544, 108.2022], jeju: [33.4996, 126.5312],
  taipei: [25.0330, 121.5654], osaka: [34.6937, 135.5023], tokyo: [35.6762, 139.6503],
  bangkok: [13.7563, 100.5018], bali: [-8.3405, 115.0920], chiangmai: [18.7061, 98.9817],
  singapore: [1.3521, 103.8198], cebu: [10.3157, 123.8854], nhatrang: [12.2388, 109.1967],
  fukuoka: [33.5904, 130.4017], sapporo: [43.0618, 141.3545], okinawa: [26.3344, 127.8056],
  kyoto: [35.0116, 135.7681], miyakojima: [24.7915, 125.2814], phuquoc: [10.2270, 103.9615],
  hochiminh: [10.8231, 106.6297], hanoi: [21.0285, 105.8542], boracay: [11.9674, 121.9248],
  phuket: [7.8804, 98.3923], hongkong: [22.3193, 114.1694], guam: [13.4443, 144.7937],
  hawaii: [21.3069, -157.8583], paris: [48.8566, 2.3522], kualalumpur: [3.1390, 101.6869],
  maldives: [4.1755, 73.5093], sydney: [-33.8688, 151.2093], shanghai: [31.2304, 121.4737],
  barcelona: [41.3874, 2.1686], nagoya: [35.1815, 136.9066], siemreap: [13.3633, 103.8564],
  rome: [41.9028, 12.4964], london: [51.5074, -0.1278], kotakinabalu: [5.9804, 116.0735],
  luangprabang: [19.8563, 102.1350], madrid: [40.4168, -3.7038], kohsamui: [9.5120, 100.0136],
  interlaken: [46.6863, 7.8632], dubrovnik: [42.6507, 18.0944], istanbul: [41.0082, 28.9784],
  macau: [22.1987, 113.5439], beijing: [39.9042, 116.4074], qingdao: [36.0671, 120.3826],
  saipan: [15.1850, 145.7504], palawan: [9.8349, 118.7384], sanya: [18.2528, 109.5119]
};

// ── 지도 관리 (Google Maps Embed — 무료, 한글 지원) ──
function updateDestMap(colIdx, destId) {
  var coords = DEST_COORDS[destId];
  if (!coords) return;
  var container = document.getElementById('dest-map-' + colIdx);
  if (!container) return;

  var src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB6R0Z1W96Zxb_Uy4zaAFMEJfZwvIlAzAU' +
    '&q=' + coords[0] + ',' + coords[1] + '&zoom=12&language=ko';
  container.innerHTML = '<iframe src="' + src +
    '" style="width:100%;height:100%;border:0;border-radius:6px;" ' +
    'loading="lazy" allowfullscreen onload="this.parentNode.classList.add(\'loaded\')"></iframe>';
}



localStorage.clear(); // Clear any old state

// ── 공통: 사용자 선택 날짜 파싱 ──
// 반환: { start: Date, end: Date, skyStart: 'YYYY-MM-DD', skyEnd: 'YYYY-MM-DD', fmtShort: fn(Date)→'YYMMDD' }
function _getSearchDates() {
  var today = new Date();
  var _toSkyFmt = function (dt) {
    return dt.getFullYear() + '-' +
      String(dt.getMonth() + 1).padStart(2, '0') + '-' +
      String(dt.getDate()).padStart(2, '0');
  };
  var _toShortFmt = function (dt) {
    return String(dt.getFullYear()).slice(2) +
      String(dt.getMonth() + 1).padStart(2, '0') +
      String(dt.getDate()).padStart(2, '0');
  };
  var start, end;

  // 사용자가 직접 선택한 날짜가 있으면 그것을 사용
  if (window._isAutoDate !== true && window.selectedDates && window.selectedDates.length >= 2) {
    start = window.selectedDates[0];
    end = window.selectedDates[1];
  }

  if (!start || isNaN(start.getTime())) {
    // 날짜 미선택: +14일 출발, +21일 귀국 (7박 — 모든 목적지 동일 기간 비교)
    start = new Date(today); start.setDate(today.getDate() + 14);
    end = new Date(today); end.setDate(today.getDate() + 21);
  }

  return {
    start: start, end: end,
    skyStart: _toSkyFmt(start), skyEnd: _toSkyFmt(end),
    shortStart: _toShortFmt(start), shortEnd: _toShortFmt(end)
  };
}


// ── 공통: 현재 예산값 읽기 ──
function _getCurrentBudget() {
  var b1 = document.getElementById('budget-input-home');
  var b2 = document.getElementById('budget-input-compare');
  var raw = (b2 && b2.value) ? b2.value : (b1 ? b1.value : '120');
  if (raw === 'unlimited') return 9999;
  if (raw === 'cheapest') return 40;
  return parseInt(raw) || 120;
}
var fpHome = null, fpCompare = null;

function openDatePicker(which) {
  // Now handled by toggleSbPanel / date panel
  toggleSbPanel(which === 'compare' ? 'date-panel-c' : 'date-panel', null, null);
}

var _activeFp = null;
var _fpLocale = null;

function _makeFpConfig(onRangeSelected) {
  if (!_fpLocale) {
    _fpLocale = (typeof flatpickr !== 'undefined' && flatpickr.l10ns && flatpickr.l10ns.ko) ? flatpickr.l10ns.ko : 'ko';
  }
  return {
    mode: 'range',
    inline: true,
    dateFormat: 'm월 d일',
    locale: _fpLocale,
    monthSelectorType: 'static',
    showMonths: window.innerWidth <= 1068 ? 1 : 2,
    minDate: 'today',
    onChange: function (selectedDates) {
      if (selectedDates.length === 2) {
        onRangeSelected(selectedDates);
      }
    }
  };
}

function _onDateRangeSelected(selectedDates) {
  var dep = selectedDates[0], ret = selectedDates[1];
  var d1str = (dep.getMonth() + 1) + '월 ' + dep.getDate() + '일';
  var d2str = (ret.getMonth() + 1) + '월 ' + ret.getDate() + '일';
  var rangeStr = d1str + ' – ' + d2str;
  // Update hidden compat
  var hd = document.getElementById('home-date-value');
  if (hd) hd.textContent = rangeStr;
  var dep2 = document.getElementById('home-depart-value');
  var ret2 = document.getElementById('home-return-value');
  if (dep2) dep2.textContent = d1str;
  if (ret2) ret2.textContent = d2str;
  // Update date segment displays (home + compare)
  var sbDate = document.getElementById('sb-date-display');
  if (sbDate) { sbDate.textContent = rangeStr; sbDate.classList.add('filled'); }
  var cdv = document.getElementById('sb-date-display-c');
  if (cdv) { cdv.textContent = rangeStr; cdv.classList.add('filled'); }
  // Close date panels after selection
  setTimeout(function () {
    document.querySelectorAll('#date-panel, #date-panel-c').forEach(function (p) { p.classList.remove('open'); });
    document.querySelectorAll('.sb-seg.sb-active').forEach(function (s) { s.classList.remove('sb-active'); });
    // Sync the other flatpickr to same dates silently
    if (fpHome && fpCompare) {
      var other = (_activeFp === fpHome) ? fpCompare : fpHome;
      try { other.setDate(selectedDates, false); } catch (e) { }
    }
    if (document.getElementById('compare-view').style.display === 'block') {
      updateResultsByFilters();
    }
  }, 250);
  // 사용자 직접 날짜 선택 → auto 플래그 해제 + globalDates 저장
  window._isAutoDate = false;
  window.selectedDates = [dep, ret]; // 링크 클릭 시 참조용
  refreshButtonStates();
  if (typeof updateSearchBadge === 'function') updateSearchBadge();
  // 선택 날짜 기준으로 항공·숙박 가격 재조회
  if (typeof window._fetchFlightPrices === 'function') window._fetchFlightPrices();
  if (typeof window._fetchHotelPrices === 'function') window._fetchHotelPrices();
}

function initFlatpickr(which) {
  if (typeof flatpickr === 'undefined') return;
  // Only init the specified calendar (avoids rendering in hidden containers)
  if (which !== 'compare') {
    var hCont = document.getElementById('fp-home-container');
    if (hCont && !fpHome) {
      fpHome = flatpickr(hCont, _makeFpConfig(_onDateRangeSelected));
    }
  }
  if (which !== 'home') {
    var cCont = document.getElementById('fp-compare-container');
    if (cCont && !fpCompare) {
      fpCompare = flatpickr(cCont, _makeFpConfig(_onDateRangeSelected));
    }
  }
}

function handleDateSegClick(event, which) {
  // Now handled by toggleSbPanel
}

function refreshButtonStates() {
  var budgetVal = document.getElementById('budget-input-home').value;
  var btn = document.getElementById('search-btn');
  if (!btn) return;
  // Button always active — budget defaults to unlimited on search
  btn.classList.remove('disabled');
  btn.style.pointerEvents = 'auto';
  if (budgetVal) {
    btn.style.background = 'var(--blue)';
  }
}

function syncBudgets(val) {
  selectBudget(val, null);
}

function checkBothSelected() {
  // Auto-advance removed: only button click triggers startSearch()
}

// ── Top3 변경 토스트 공통 함수 ──
function showRankToast(prevNames, newNames) {
  if (!prevNames || !newNames) return;
  var added = newNames.filter(function (n) { return n && prevNames.indexOf(n) === -1; });
  var removed = prevNames.filter(function (n) { return n && newNames.indexOf(n) === -1; });
  if (added.length === 0) return;
  // 이전 rank-toast 제거 (DOM 누적 방지)
  var oldToasts = document.querySelectorAll('.rank-toast');
  oldToasts.forEach(function (el) { if (el.parentNode) el.parentNode.removeChild(el); });
  var msg = '✨ ' + added.join(', ') + ' 추가됨';
  if (removed.length > 0) msg += ' / ' + removed.join(', ') + ' 제외';
  var t = document.createElement('div');
  t.className = 'rank-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  // DOM 렌더 후 실제 위치 계산 (hidden→show 직후 getBoundingClientRect가 0 반환하는 타이밍 문제 해결)
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      var bannerEl = document.querySelector('#compare-top-banner');
      var navEl = document.querySelector('#compare-view .nav');
      var anchor = bannerEl || navEl;
      if (anchor) {
        var r = anchor.getBoundingClientRect();
        if (r.bottom > 10) {
          t.style.top = (r.bottom + 8) + 'px';
        }
        // r.bottom이 0이면 CSS 클래스 기본값 사용
      }
    });
  });
  setTimeout(function () { t.style.opacity = '0'; t.style.transition = 'opacity 0.4s'; }, 2000);
  setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 2500);
}


function updateResultsByFilters() {
  // 열려있는 모든 패널(날짜/지역/예산) 닫기
  document.querySelectorAll('.sb-panel.open').forEach(function (p) { p.classList.remove('open'); });
  document.querySelectorAll('.flatpickr-calendar').forEach(function (c) { c.classList.remove('open'); });
  // 공유 URL로 로드된 여행지가 있으면 첫 호출 시 건너뛰기
  if (_sharedLoaded) {
    _sharedLoaded = false; // 이후 사용자 검색은 정상 동작
    return;
  }
  // 함수 호출 전 Top3 저장 (updateColumn 역시 비동기 가능하므로 전역 _lastTop3 기준)
  var _savedTop3 = (window._lastTop3 || []).slice();

  // ── 검색 조건 변경 추적: 조건이 같으면 토스트 억제 ──
  var _prevFilterKey = window._lastFilterKey || '';

  const dateVal = document.getElementById('home-date-value').textContent;
  const b1 = document.getElementById('budget-input-home');
  const b2 = document.getElementById('budget-input-compare');
  const budgetRaw = (b2 && b2.value) ? b2.value : b1.value;
  const isCheapest = budgetRaw === 'cheapest';
  const budgetNum = budgetRaw === 'unlimited' ? 9999 : isCheapest ? 40 : (parseInt(budgetRaw) || 120);
  const filterBudget = isCheapest ? 9999 : budgetNum;
  const noResults = document.getElementById('no-results-cnt');
  const body = document.getElementById('comparison-body');

  if (!budgetRaw) {
    body.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
    return;
  }

  let duration = 5;
  if (dateVal.includes(' – ')) {
    const parts = dateVal.split(' – ');
    try {
      const d1 = parts[0].split('월 ');
      const d2 = parts[1].split('월 ');
      const year = new Date().getFullYear();
      const m1 = parseInt(d1[0]) - 1, m2 = parseInt(d2[0]) - 1;
      const date1 = new Date(year, m1, parseInt(d1[1].replace('일', '')));
      const date2 = new Date(m2 < m1 ? year + 1 : year, m2, parseInt(d2[1].replace('일', '')));
      duration = Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24)) + 1;
      if (duration <= 0) duration = 5;
    } catch (e) { duration = 5; }
  }

  // Update select options based on new budget/duration
  refreshSelectOptions(filterBudget, duration);

  // 현재 검색 조건 키 생성 (지역+예산+날짜)
  var _curFilterKey = (window.selectedRegion || 'all') + '|' + budgetRaw + '|' + dateVal;
  var _filtersChanged = (_curFilterKey !== _prevFilterKey);
  window._lastFilterKey = _curFilterKey;

  const _wb = window.wizardBonus || {};
  const _erb = window.exchangeRateBonus || {};
  const _selRegion = window.selectedRegion || '';
  console.log('[Filter] region=' + _selRegion + ', budget=' + filterBudget + ', duration=' + duration);
  // 랜덤 추천에서 제외할 여행지
  const RANDOM_EXCLUDE = new Set(['siemreap']);
  const allCandidates = [...v1_0_9_DEST_DATA].filter(d => {
    if (RANDOM_EXCLUDE.has(d.id)) return false;
    const baseMin = d.minBudget || 40;
    // unlimited/cheapest 예산일 때는 duration 페널티 없이 모든 여행지 노출
    const adjustedMin = (filterBudget >= 9000)
      ? baseMin
      : baseMin + (duration > 5 ? (duration - 5) * 6 : 0);
    if (adjustedMin > filterBudget) return false;

    // ── 실제 비용 기반 필터: 예산 초과 여행지 제외 ──
    if (filterBudget < 9000 && !isCheapest) {
      const _dailyMap = { '소비 매우 적음': 4, '소비 적음': 6, '소비 보통': 9, '소비 많음': 14, '소비 매우 많음': 20 };
      const _daily = parseFloat((d.daily || '').replace('만원', '')) || _dailyMap[d.daily] || Math.round((d.baseHotel || 7) * 0.5) || 7;
      // baseHotelLow(최저가 1박) 기준으로 최소 비용 추정
      const _estAir = d.baseAir || 20;
      const _perNight = d.baseHotelLow || Math.round((d.baseHotel || 10) * 0.6);
      const _estHotel = _perNight * (duration - 1);
      const _estDaily = _daily * 0.6 * duration;
      const _estTotal = _estAir + _estHotel + _estDaily;
      if (_estTotal > filterBudget) return false; // 여유 없이 엄격하게 필터링
    }

    // Region filter (휴양지는 cross-cutting 필터로 별도 처리)
    if (_selRegion) {
      if (_selRegion === 'resort') {
        if (!DEST_RESORT || !DEST_RESORT.has(d.id)) return false;
      } else if (typeof DEST_REGION !== 'undefined') {
        const dRegion = DEST_REGION[d.id] || '';
        if (dRegion !== _selRegion) return false;
      }
    }
    return true;
  });

  // ── 랜덤 셔플 (Fisher-Yates) ──
  // 최저가 모드: 가격순 정렬 + 동일 가격대 내 랜덤 셔플
  // 일반 모드: 전체 랜덤 셔플
  if (isCheapest) {
    // 먼저 전체 셔플 후 가격순 안정 정렬 → 동일 가격대 내 랜덤
    for (let i = allCandidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCandidates[i], allCandidates[j]] = [allCandidates[j], allCandidates[i]];
    }
    allCandidates.sort((a, b) => (a.minBudget || 40) - (b.minBudget || 40));
  } else {
    for (let i = allCandidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCandidates[i], allCandidates[j]] = [allCandidates[j], allCandidates[i]];
    }
  }

  // Country diversity: max 1 per country (unless region filter forces same country)
  const matching = [];
  const seenIds = new Set();
  const seenCountries = new Set();
  for (const d of allCandidates) {
    if (seenIds.has(d.id)) continue;
    const country = (typeof DEST_COUNTRY !== 'undefined' && DEST_COUNTRY[d.id]) || d.id;
    // Enforce country diversity: max 1 destination per country (unless region filter forces same)
    if (!_selRegion && seenCountries.has(country)) {
      continue;
    }
    matching.push(d);
    seenIds.add(d.id);
    seenCountries.add(country);
    if (matching.length >= 3) break;
  }
  // If diversity filter left us with fewer than 3, fill without country constraint
  if (matching.length < 3) {
    for (const d of allCandidates) {
      if (!seenIds.has(d.id)) {
        matching.push(d);
        seenIds.add(d.id);
      }
      if (matching.length >= 3) break;
    }
  }

  console.log('[Filter] candidates=' + allCandidates.length + ', matching:', matching.map(m => m.id + '(' + (DEST_REGION[m.id] || '?') + ')'));

  if (matching.length === 0) {
    body.style.display = 'none';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  body.style.display = 'block';
  if (noResults) noResults.style.display = 'none';
  setTimeout(initMobileScrollSync, 80); // reinit after DOM settles

  const count = Math.min(matching.length, 3);
  const grid = document.querySelector('.dest-images');
  const selGrid = document.querySelector('.sel-grid');
  const dataGrids = body.querySelectorAll('.data-grid');

  // Hide/Show columns and sync selectors
  for (let i = 0; i < 3; i++) {
    const colEl = document.getElementById('col-' + i);
    // Use direct ID lookups instead of fragile positional indexing
    const fixedSelEl = document.getElementById('sel' + i + '-fixed');
    const mainSelEl = document.getElementById('sel' + i);
    const fixedCard = fixedSelEl ? fixedSelEl.closest('.sel-card') : null;
    const regularCard = mainSelEl ? mainSelEl.closest('.sel-card') : null;

    if (i < count) {
      if (colEl) colEl.style.display = 'block';
      if (fixedCard) { fixedCard.style.visibility = 'visible'; fixedCard.style.display = ''; }
      if (regularCard) { regularCard.style.visibility = 'visible'; regularCard.style.display = ''; }
      // 이전에 숨겼던 dc 셀 복원
      document.querySelectorAll('[id$="-' + i + '"]').forEach(function (el) {
        if (el.classList.contains('dc')) el.style.display = '';
      });

      const d = matching[i];
      const destIdx = v1_0_9_DEST_DATA.indexOf(d);
      // 콘텐츠 업데이트 (동기) — 에러 방어
      try { updateColumn(i, destIdx, budgetNum, duration); } catch (e) { console.error('[Filter] updateColumn 에러 col=' + i, e); }
      // TP Worker 가격이 있으면 updateColumn 결과 위에 오버라이드
      var _isVipBudget = budgetNum >= 300 && budgetNum < 9000;
      setTimeout(function (col, dest) {
        // 항공 오버라이드 — VIP: 비즈니스 클래스 실시간, 일반: 이코노미 최저가
        var _airPrice = _isVipBudget ? (dest._vipAirfare || dest.airfare) : dest.airfare;
        var _airSub = _isVipBudget ? '비즈니스 왕복' : '왕복 항공권';
        // 항공 가격 숫자는 표시하지 않음 (API 정확도 한계)
        var _airKicker = _isVipBudget ? '비즈니스 · 인천 출발' : '이코노미 · 인천 출발';
        if (dest && _airPrice && dest._tpLink) {
          var airEl = document.getElementById('air-' + col);
          if (airEl) {
            var mEl = airEl.querySelector('.main');
            var sEl = airEl.querySelector('.sub');
            var kEl = airEl.querySelector('.kicker');
            // API 가격이 있으면 만원 단위로 표시, 없으면 기존 setCell 값 유지
            if (mEl && dest._airfareKRW) mEl.textContent = Math.round(dest._airfareKRW / 10000) + '만원~';
            if (sEl) sEl.textContent = _airSub;
            if (kEl) kEl.textContent = _airKicker;
            airEl.classList.remove('sk');
          }
        }
        // 숙박 오버라이드 — 예산별 링크/라벨 분기
        var _htlPrice, _htlLink, _htlSub, _htlKicker;
        var _isUnlimitedBudget = budgetNum >= 9000;
        if (_isVipBudget) {
          _htlPrice = dest._vipHotelPrice || dest._hotelPrice;
          _htlLink = dest._vipHotelLink || dest._hotelLink;
          _htlSub = '프리미엄 1박 기준';
          var _htlName = dest._vipHotelName || '';
          _htlKicker = _htlName ? (_htlName + ' · ' + (dest._vipHotelStars || 5) + '성급') : '5성급 호텔 기준';
        } else if (_isUnlimitedBudget) {
          // 상관없음: 3-4성급 기본
          _htlPrice = dest._hotelPrice;
          _htlLink = window._makeBookingComLink ? window._makeBookingComLink(dest.id, 3) : (dest._hotelLink || '#');
          _htlSub = '3성급+ 참고가격';
          _htlKicker = '예약 시 3-4성급 필터 적용';
        } else if (budgetNum >= 200) {
          _htlPrice = dest._hotelPrice;
          _htlLink = window._makeBookingComLink ? window._makeBookingComLink(dest.id, 4) : (dest._hotelLink || '#');
          _htlSub = '3성급+ 참고가격';
          _htlKicker = '예약 시 4성급 필터 적용';
        } else if (budgetNum >= 120) {
          _htlPrice = dest._hotelPrice;
          _htlLink = window._makeBookingComLink ? window._makeBookingComLink(dest.id, 3) : (dest._hotelLink || '#');
          _htlSub = '3성급+ 참고가격';
          _htlKicker = '예약 시 3-4성급 필터 적용';
        } else {
          _htlPrice = dest._hotelPrice;
          _htlLink = window._makeBookingComLink ? window._makeBookingComLink(dest.id, 0) : (dest._hotelLink || '#');
          _htlSub = '3성급+ 참고가격';
          _htlKicker = '예약 시 최저가순 정렬';
        }
        if (dest && _htlPrice && _htlLink) {
          var hotelEl = document.getElementById('hotel-' + col);
          if (hotelEl) {
            var hmEl = hotelEl.querySelector('.main');
            var hsEl = hotelEl.querySelector('.sub');
            var hkEl = hotelEl.querySelector('.kicker');
            if (hmEl) hmEl.textContent = _htlPrice;
            if (hsEl) hsEl.textContent = _htlSub;
            if (hkEl) hkEl.textContent = _htlKicker;
            hotelEl.classList.remove('sk');
            if (!hotelEl.querySelector('.tp-hotel-btn')) {
              var hBtn = document.createElement('a');
              hBtn.href = _htlLink; hBtn.target = '_blank';
              hBtn.rel = 'noopener noreferrer';
              hBtn.className = 'tp-book-btn tp-hotel-btn';
              hBtn.textContent = '숙소 예약하기 ›';
              hotelEl.appendChild(hBtn);
            }
          }
        }
      }, 200, i, d);

      // Sync both selectors immediately and after short delay (for safety)
      const syncId = (id) => {
        const s = document.getElementById(id);
        if (!s) return;
        // 해당 option이 없으면 동적 생성 (지역 필터 변경 시 발생 가능)
        if (!Array.from(s.options).some(o => o.value === String(destIdx))) {
          const opt = document.createElement('option');
          opt.value = String(destIdx);
          opt.textContent = _getDestLabel(d, window.selectedRegion || null);
          s.appendChild(opt);
        }
        s.value = String(destIdx); s.style.color = '#000000';
      };
      syncId('sel' + i);
      syncId('sel' + i + '-fixed');
      setTimeout(() => { syncId('sel' + i); syncId('sel' + i + '-fixed'); syncAllDestDdLabels(); }, 100);
      // entry 섹션에 비자 정보 업데이트 (데이터가 로드된 경우)
      if (d && d._visaLabel && typeof _applyVisaToEntry === 'function') {
        setTimeout(function (col, dest) { _applyVisaToEntry(col, dest); }, 350, i, d);
      }

    } else {
      if (colEl) colEl.style.display = 'none';
      if (fixedCard) { fixedCard.style.visibility = 'hidden'; fixedCard.style.display = 'none'; }
      if (regularCard) { regularCard.style.visibility = 'hidden'; regularCard.style.display = 'none'; }
      // data-row 안의 dc 셀도 숨겨서 stale 데이터 안 보이게
      document.querySelectorAll('[id$="-' + i + '"]').forEach(function (el) {
        if (el.classList.contains('dc')) el.style.display = 'none';
      });
    }
  }

  syncAllDestDdLabels(); // 루프 완료 후 한 번만 동기화
  setTimeout(syncAllDestDdLabels, 250); // updateColumn setTimeout 이후 재동기화

  [grid, selGrid, ...dataGrids].forEach(el => {
    if (el) el.style.justifyContent = (count < 3) ? 'center' : 'space-between';
  });

  // ── 추천/최저가 뱃지: matching 데이터 기반 동적 업데이트 ──
  // matching은 score 내림차순 정렬되어 있으므로 matching[0]이 최고점
  // 단, updateColumn 후 adjustedScore(scoreBonus 포함)를 사용하기 위해 DOM 읽기 병행
  const badgeScores = matching.slice(0, count).map(d => d.score);
  const maxRawScore = Math.max(...badgeScores);

  // 먼저 모든 뱃지 초기화
  for (let i = 0; i < 3; i++) {
    const bb = document.getElementById('best-badge-' + i);
    const lb = document.getElementById('low-badge-' + i);
    if (bb) bb.classList.remove('visible');
    if (lb) lb.classList.remove('visible');
  }

  // 추천 뱃지: raw score 기준으로 최고점에만 표시
  for (let i = 0; i < count; i++) {
    if (badgeScores[i] === maxRawScore) {
      const bb = document.getElementById('best-badge-' + i);
      if (bb) bb.classList.add('visible');
      break; // 동점이어도 하나만
    }
  }

  // 최저가 뱃지: 비용은 updateColumn 후 DOM에 쓰이므로 setTimeout
  if (count >= 2) {
    setTimeout(() => {
      const costList = [];
      for (let i = 0; i < count; i++) {
        const totalEl = document.getElementById('total-' + i);
        const mainEl = totalEl ? totalEl.querySelector('.main') : null;
        const rawText = mainEl ? mainEl.textContent.replace(/[^0-9]/g, '') : '';
        const costVal = rawText ? parseInt(rawText) : 9999999;
        costList.push(costVal);
      }
      const minCost = Math.min(...costList);
      for (let i = 0; i < count; i++) {
        if (costList[i] === minCost) {
          const lb = document.getElementById('low-badge-' + i);
          if (lb) lb.classList.add('visible');
          break; // 동점이어도 하나만
        }
      }
    }, 150);
  }

  // ── Top3 토스트: 필터 조건이 실제 변경됐고, 결과 여행지가 바뀌었을 때만 표시 ──
  // 같은 지역 내 랜덤 셔플로 결과가 바뀐 경우에는 표시하지 않음 (혼란 방지)
  setTimeout(function () {
    var _newTop3 = (window._lastTop3 || []).slice();
    if (window._userHasChangedFilters && _filtersChanged && _savedTop3.length > 0) {
      // 실제로 다른 여행지가 추가됐을 때만, "제외" 문구는 표시하지 않음
      var added = _newTop3.filter(function (n) { return n && _savedTop3.indexOf(n) === -1; });
      if (added.length > 0 && added.length < 3) {
        showToast(added.join(', ') + ' 추천!');
      }
    }
  }, 250);

  // 날짜·조건 변경 후 API 가격 재요청 + 계절 보정 적용
  if (typeof window._fetchFlightPrices === 'function') {
    setTimeout(function () { window._fetchFlightPrices(); }, 500);
  }
}

function updateColumn(col, destIdx, budgetLimit, duration) {
  const d = v1_0_9_DEST_DATA[destIdx];
  if (!d) return;
  // ── 스켈레톤: 여행지 변경 시 모든 비동기 셀 로딩 표시 ──
  var _skIds = ['air-', 'hotel-', 'total-', 'cur-temp-', 'weekly-forecast-'];
  _skIds.forEach(function (p) { var e = document.getElementById(p + col); if (e) e.classList.add('sk'); });
  // 5초 후 강제 제거 (날씨 API 느릴 때 대비)
  setTimeout(function () { _skIds.forEach(function (p) { var e = document.getElementById(p + col); if (e) e.classList.remove('sk'); }); }, 5000);
  // 현재 컬럼에 표시 중인 destIdx 저장 (날씨 API에서 참조)
  if (typeof _currentDestIdx !== 'undefined') _currentDestIdx[col] = destIdx;
  // 지도 업데이트
  if (typeof updateDestMap === 'function') updateDestMap(col, d.id);
  const colEl = document.getElementById('col-' + col); // Fix: colEl must be defined here, not from outer scope
  const budget = budgetLimit || 120;
  const days = duration || 5;

  // 1. DYNAMIC PRICING ENGINE (budget-tiered)
  const _dailyMap = { '소비 매우 적음': 4, '소비 적음': 6, '소비 보통': 9, '소비 많음': 14, '소비 매우 많음': 20 };
  const daily = parseFloat(d.daily.replace('만원', '')) || _dailyMap[d.daily] || Math.round(d.baseHotel * 0.5) || 7;
  const baseHL = d.baseHotelLow || Math.round(d.baseHotel * 0.25 * 10) / 10;
  const baseHH = d.baseHotelHigh || Math.round(d.baseHotel * 3);

  // Calculate estimated totals for each tier to pick the best fit
  const calcGrand = (aM, hBase, dM) =>
    Math.round(d.baseAir * aM) + Math.round(hBase * (days - 1)) + Math.round(daily * dM * days);
  const totalHigh = calcGrand(1.3, baseHH, 1.8);
  // totalMid: budget >= 120이면 실제와 동일하게 1.5배 반영
  const _midHotelBase = d.baseHotel * (budget >= 120 ? 1.5 : 1.0);
  const totalMid = calcGrand(1.1, _midHotelBase, 1.0);

  let tier, airType, hotelType, scoreBonus = 0;
  let airPrice, hotelPrice, dailyMultiplier;

  const isUnlimited = budget >= 9000; // 상관없음(unlimited) 판별
  const isVIP = !isUnlimited && budget >= 300; // 300만원 이상 VIP 럭셔리

  if (isVIP) {
    tier = 'high';
    airType = '비즈니스 직항'; hotelType = '5성급·오버워터 빌라';
    airPrice = Math.round(d.baseAir * 1.8);
    hotelPrice = Math.round(baseHH * (days - 1) * 1.5);
    dailyMultiplier = 2.5; scoreBonus = 15;
  } else if (!isUnlimited && budget >= 200 && totalHigh <= budget) {
    tier = 'high';
    airType = '이코노미 직항'; hotelType = '5성급·리조트';
    airPrice = Math.round(d.baseAir * 1.3);
    hotelPrice = Math.round(baseHH * (days - 1));
    dailyMultiplier = 1.8; scoreBonus = 10;
  } else if (budget >= 80 && totalMid <= budget) {
    tier = 'mid';
    airType = '이코노미 직항'; hotelType = budget >= 120 ? '3-4성급 호텔' : '3성급 호텔';
    airPrice = Math.round(d.baseAir * 1.1);
    hotelPrice = Math.round(d.baseHotel * (days - 1) * (budget >= 120 ? 1.5 : 1.0)); // totalMid와 동일 배율
    dailyMultiplier = 1.0; scoreBonus = 5;
  } else {
    tier = 'low';
    airType = 'LCC 이코노미'; hotelType = '게스트하우스·호스텔';
    airPrice = d.baseAir;
    hotelPrice = Math.round(baseHL * (days - 1));
    dailyMultiplier = 0.5;
  }

  // 취향설정 tierOverride 반영 — 가격 계산에도 적용
  const _tierOvr = window.wizardTierOverride;
  if (_tierOvr && _tierOvr !== tier) {
    tier = _tierOvr;
    if (_tierOvr === 'low') {
      airType = 'LCC 이코노미'; hotelType = '게스트하우스·호스텔';
      airPrice = d.baseAir;
      hotelPrice = Math.round(baseHL * (days - 1));
      dailyMultiplier = 0.5; scoreBonus = 0;
    } else if (_tierOvr === 'high') {
      airType = isVIP ? '비즈니스 직항' : '이코노미 직항';
      hotelType = isVIP ? '5성급·오버워터 빌라' : '5성급·리조트';
      airPrice = isVIP ? Math.round(d.baseAir * 1.8) : Math.round(d.baseAir * 1.3);
      hotelPrice = isVIP ? Math.round(baseHH * (days - 1) * 1.5) : Math.round(baseHH * (days - 1));
      dailyMultiplier = isVIP ? 2.5 : 1.8; scoreBonus = isVIP ? 15 : 10;
    }
  }

  const dailySpend = Math.round(daily * dailyMultiplier * 10) / 10;
  const dailyTotal = Math.round(dailySpend * days);
  const grandTotalRaw = hotelPrice + dailyTotal + airPrice;  // 숙박+현지+항공 포함
  // 실제 추정 비용 그대로 표시 (캡 없음 — 정확한 정보 제공)
  const grandTotal = grandTotalRaw;
  const adjustedScore = Math.min(99, d.score + scoreBonus);
  const hotelPerNight = (days > 1) ? Math.round(hotelPrice / (days - 1)) : hotelPrice;

  // 2. NARRATIVE RECOMMENDATION
  const narratives = {
 'lisbon': `리스본은 유럽의 끝자락에서 만나는 느린 시간입니다. 노란 트램이 오르는 알파마 골목, 벨렝탑의 석양, 타임아웃 마켓의 활기까지 파두 음악이 흐르는 저녁 거리에서 포르투갈만의 따뜻한 여유를 온몸으로 느껴보세요.`,
 'danang': `다낭은 해변과 문화가 함께하는 완벽한 휴양지입니다. 미케 해변의 에메랄드빛 파도, 바나힐의 골든 브릿지, 한시장의 소박한 활기까지 리조트 풀사이드에서의 느긋한 오후와 저렴한 씨푸드로 하루를 마무리하세요.`,
 'jeju': `제주는 언제 와도 새로운 풍경을 선물하는 섬입니다. 한라산의 사계절, 협재 해변의 에메랄드빛 바다, 성산일출봉에서 맞이하는 아침까지 오름 트레킹과 감성 카페를 오가며 제주만의 느린 시간 속에 빠져보세요.`,
 'taipei': `타이베이는 골목마다 맛집이 숨어 있는 도시입니다. 스린 야시장의 열기, 지우펀의 홍등 거리, 예류의 기암괴석까지 MRT 하나로 도시 전체를 누비며 가성비 최고의 미식 여행을 완성하세요.`,
 'osaka': `오사카는 먹고 즐기는 것이 일상인 도시입니다. 도톤보리의 타코야키, 신세카이의 꼬치튀김, 쿠로몬 시장의 신선한 해산물까지 유니버설 스튜디오의 짜릿함과 함께 엔저로 더욱 풍성해진 오사카를 누려보세요.`,
 'tokyo': `도쿄는 한 번 가면 반드시 다시 오게 되는 도시입니다. 시부야의 네온, 아사쿠사의 전통, 신주쿠의 활기까지 거리마다 완전히 다른 세계가 펼쳐집니다. 미슐랭 라멘 한 그릇의 감동과 함께 엔저 시대의 도쿄를 마음껏 즐겨보세요.`,
 'bangkok': `방콕은 한 번 빠지면 헤어나올 수 없는 도시입니다. 왓포 사원의 경건한 새벽, 짜뚜짝 시장의 흥정, 루프탑 바에서 내려다보는 야경까지 톰양꿍 한 그릇의 감동과 함께 동남아 최고의 도시 에너지를 느껴보세요.`,
 'bali': `발리는 여행자들이 떠나지 못하는 섬입니다. 우붓의 논밭, 꾸따의 파도, 스미냑의 선셋 바까지 지역마다 완전히 다른 매력을 품고 있습니다. 풀빌라에서의 여유로운 아침과 저렴한 스파·마사지로 몸과 마음을 회복하세요.`,
 'chiangmai': `치앙마이는 느림의 미학을 아는 도시입니다. 란나 왕국의 고대 사원, 도이수텝의 황금 탑, 님만해민의 감성 카페 거리까지 코끼리 보호구역에서의 특별한 하루와 야시장 수공예품 속 태국의 진심을 만나보세요.`,
 'singapore': `싱가포르는 작은 나라에 세계를 담은 도시입니다. 마리나베이샌즈의 인피니티풀, 가든스 바이 더 베이, 호커 센터의 치킨 라이스까지 리틀 인디아부터 차이나타운을 걸으며 다채로운 문화를 하루 만에 경험하세요.`,
 'cebu': `세부는 바다 위의 모험이 기다리는 섬입니다. 오슬롭의 고래상어, 카와산 폭포의 캐녀닝, 막탄 섬의 에메랄드 해변까지 액티비티로 가득 찬 낮과 레촌 한 접시로 마무리하는 특별한 저녁을 즐기세요.`,
 'nhatrang': `나트랑은 아직 덜 알려진 베트남 최고의 해변입니다. 투명한 에메랄드 바다와 저렴한 씨푸드, 빈펄 리조트의 케이블카 뷰까지 다낭보다 조용하고 깨끗한 해변에서 나만의 여유로운 바다 시간을 즐겨보세요.`,
 'fukuoka': `후쿠오카는 가장 가까운 일본의 미식 성지입니다. 야타이 포장마차의 하카타 라멘, 모츠나베의 깊은 맛, 텐진 지하상가의 쇼핑까지 직항 1시간 30분이면 도착하는 일본 여행의 최고 가성비를 경험하세요.`,
 'sapporo': `삿포로는 홋카이도의 낭만이 가득한 도시입니다. 2월 눈 축제의 거대한 설조각, 징기스칸 양고기 BBQ와 삿포로 생맥주, 오도리 공원의 계절마다 다른 풍경까지 사계절 내내 특별한 경험이 기다립니다.`,
 'okinawa': `오키나와는 일본이지만 일본 같지 않은 섬입니다. 케라마 제도의 투명한 산호초 바다, 슈리성에 남은 류큐 왕국의 역사까지 오키나와 소바와 아와모리 한 잔을 곁들이며 아열대의 따뜻한 바람 속에서 쉬어가세요.`,
 'kyoto': `교토는 천년의 시간이 살아 숨 쉬는 도시입니다. 후시미이나리의 수천 개 도리이, 아라시야마 대나무숲의 신비로운 빛줄기, 기온 거리의 게이샤 문화까지 일본 여행의 정수가 모두 담겨 있습니다.`,
 'miyakojima': `미야코지마는 일본 최고의 투명한 바다입니다. 에메랄드빛 산호초가 펼쳐지는 요나하마에하마 해변, 이라부 대교 위의 드라이브, 세계 최고 수준의 다이빙 포인트까지 오키나와보다 고요한 비밀의 섬을 만나보세요.`,
 'phuquoc': `푸꾸옥은 베트남 끝자락에 숨겨진 보석 같은 섬입니다. 에메랄드빛 바다와 새하얀 모래사장, 저렴한 리조트와 신선한 씨푸드까지 롱비치에서의 선셋 한 잔과 함께 동남아 최고의 섬 휴양을 경험하세요.`,
 'hochiminh': `호치민은 쉬지 않는 에너지로 가득한 도시입니다. 오토바이가 물결치는 거리, 벤탄 시장의 활기, 통일궁과 전쟁박물관의 역사까지 쌀국수 한 그릇의 깊은 맛과 함께 베트남의 빠른 성장을 온몸으로 느껴보세요.`,
 'hanoi': `하노이는 골목마다 이야기가 숨어 있는 도시입니다. 호안끼엠 호수의 고즈넉한 아침, 구시가지의 활기, 분짜와 포 한 그릇의 깊은 맛까지 하롱베이 크루즈에서의 하룻밤과 함께 베트남의 진짜 매력에 빠져보세요.`,
 'boracay': `보라카이는 한 번도 안 간 사람은 있어도 한 번만 간 사람은 없는 섬입니다. 파우더처럼 부드러운 화이트비치, 에메랄드빛 바다에서의 선셋 요트 투어까지 세계 10대 해변의 감동을 직접 느껴보세요.`,
 'phuket': `푸켓은 휴양과 모험이 공존하는 섬입니다. 에메랄드 바다의 피피섬, 제임스본드 섬, 빠똥 비치의 활기찬 나이트라이프까지 낮에는 스노클링, 밤에는 해변 위 칵테일로 동남아 최고의 리조트 라이프를 즐기세요.`,
 'hongkong': `홍콩은 압축된 도시 안에 모든 매력이 담겨 있습니다. 빅토리아 피크에서 바라보는 세계 3대 야경, 딤섬 조식, 란콰이퐁의 칵테일 바까지 MTR 하나로 도시 전체를 누비며 동서양이 공존하는 에너지를 느껴보세요.`,
 'guam': `괌은 가장 가까운 미국의 에메랄드 섬입니다. 투몬 비치의 투명한 바다, DFS 갤러리아 쇼핑, 차모로 전통 문화의 따뜻함까지 직항 4시간이면 만나는 가족 여행에 완벽한 태평양의 낙원입니다.`,
 'hawaii': `하와이는 한 번쯤 꼭 가봐야 할 꿈의 섬입니다. 와이키키 비치의 서핑, 다이아몬드 헤드 하이킹, 포케 볼과 루아우 전통 공연까지 섬마다 완전히 다른 자연이 펼쳐지는 평생 기억될 특별한 여행이 시작됩니다.`,
 'paris': `파리는 걷는 것만으로도 예술이 되는 도시입니다. 에펠탑 야경, 루브르의 모나리자, 몽마르트르 언덕에서 바라보는 노을까지 센강 유람선 위의 석양과 함께 마레 지구 카페에서 느린 오후를 즐겨보세요.`,
 'kualalumpur': `쿠알라룸푸르는 다양한 문화가 어우러진 도시입니다. 페트로나스 트윈타워의 찬란한 야경, 바투 동굴의 힌두 사원, 부킷빈탕의 쇼핑까지 나시르막 한 접시의 깊은 맛과 함께 동남아 최고의 도시 에너지를 느껴보세요.`,
 'maldives': `몰디브는 지구상 가장 아름다운 바다 위의 꿈입니다. 에메랄드빛 산호초 위에 떠 있는 오버워터 빌라, 야광 플랑크톤이 빛나는 밤바다까지 수중 레스토랑에서의 특별한 저녁과 함께 평생 잊지 못할 순간을 만들어보세요.`,
 'sydney': `시드니는 도시와 자연이 하나로 어우러진 곳입니다. 오페라하우스의 우아한 곡선, 하버 브리지의 위엄, 본다이 비치의 황금빛 파도까지 더 록스의 주말 마켓을 거닐며 남반구의 여유로운 햇살을 만끽하세요.`,
 'shanghai': `상하이는 중국의 과거와 미래가 공존하는 도시입니다. 황포강 너머 빛나는 푸동의 스카이라인, 와이탄의 클래식한 유럽 건축, 예원의 정원까지 샤오롱바오 한 입의 감동과 함께 아시아 최대의 메트로폴리스를 경험하세요.`,
 'barcelona': `바르셀로나는 가우디의 상상력이 살아 숨 쉬는 도시입니다. 100년째 공사 중인 사그라다 파밀리아, 구엘 공원의 환상적인 모자이크, 지중해를 마주한 바르셀로네타 해변까지 유럽에서 가장 개성 넘치는 도시를 만나보세요.`,
 'dubrovnik': `두브로브니크는 아드리아해의 진주입니다. 성벽 위를 걸으며 내려다보는 붉은 지붕과 코발트빛 바다의 조화는 숨이 멎을 만큼 아름답습니다. 왕좌의 게임 촬영지를 직접 걸어보고 스르지산 케이블카에서 석양을 감상하세요.`,
 'interlaken': `인터라켄은 사진으로 담을 수 없는 감동의 도시입니다. 융프라우요흐에서 밟는 만년설, 그린델발트의 초록 계곡, 투명한 호수까지 패러글라이딩으로 알프스 위를 날며 평생 잊지 못할 풍경 속에 빠져보세요.`,
 'kohsamui': `코사무이는 태국의 숨겨진 고급 낙원입니다. 야자수가 늘어선 차웽 비치, 앙통 국립해양공원의 에메랄드 라군까지 풀빌라에서의 프라이빗한 아침과 함께 푸켓과는 또 다른 럭셔리 휴양을 즐기세요.`,
 'kotakinabalu': `코타키나발루는 대자연의 경이로움이 가득한 곳입니다. 키나발루산의 장엄한 일출, 시파단의 다이빙, 반딧불이 투어의 환상적인 밤까지 탄중아루 해변에서 세계 3대 석양을 바라보며 보르네오의 야생을 온몸으로 느껴보세요.`,
 'london': `런던은 며칠을 머물러도 다 보지 못하는 도시입니다. 빅 벤의 위엄, 대영박물관의 세계 유물, 캠든 마켓의 빈티지 보물까지 오후의 애프터눈 티 한 잔과 함께 역사와 트렌드가 공존하는 거리를 걸어보세요.`,
 'luangprabang': `루앙프라방은 시간이 멈춘 듯한 도시입니다. 새벽의 탁발 행렬은 세상 어디서도 볼 수 없는 경건하고 아름다운 장면입니다. 메콩강 위의 노을, 꽝시 폭포의 에메랄드빛 물까지 진정한 힐링이 무엇인지 느껴보세요.`,
 'madrid': `마드리드는 유럽에서 가장 열정적인 수도입니다. 프라도 미술관의 벨라스케스, 소피아의 게르니카, 레티로 공원의 크리스탈 궁전까지 산미구엘 시장의 타파스 한 접시와 함께 스페인의 뜨거운 밤을 경험하세요.`,
 'nagoya': `나고야는 관광객 적은 진짜 일본을 만나는 도시입니다. 일본 최대의 나고야성과 닌자 박물관, 히츠마부시(장어덮밥)의 세 가지 맛, 오아시스21의 미래적인 야경까지 숨은 매력이 가득한 중부 일본을 경험하세요.`,
 'rome': `로마는 거리 전체가 살아 있는 박물관입니다. 콜로세움에서 2천 년의 역사를 마주하고, 트레비 분수에 동전을 던지며 소원을 빌고, 바티칸 시스티나 성당의 천장화에 숨이 멎는 인류 역사의 걸작을 직접 만나보세요.`,
 'siemreap': `씨엠립은 인류 최대의 걸작, 앙코르와트의 도시입니다. 새벽 일출에 물드는 앙코르와트의 실루엣, 바이욘 사원의 미소 짓는 얼굴 조각, 타프롬 사원을 감싸는 거대한 나무뿌리까지 한 번은 반드시 봐야 할 세계유산입니다.`,
 'istanbul': `이스탄불은 동서양 문명의 교차로입니다. 아야소피아의 장엄한 돔 아래 서면 비잔틴과 오스만의 역사가 눈앞에 펼쳐집니다. 보스포루스 해협 크루즈와 그랜드 바자르의 활기까지 세계 어디서도 느낄 수 없는 독특함입니다.`,
 'macau': `마카오는 동양의 라스베가스 그 이상의 도시입니다. 세계유산 세나도 광장의 이국적 아름다움, 성 바울 성당 유적의 역사, 화려한 카지노 리조트의 분수 쇼까지 홍콩과 함께하면 더욱 풍성한 여행이 됩니다.`,
 'beijing': `베이징은 5천 년 역사가 살아 숨 쉬는 수도입니다. 만리장성에 올라 끝없이 이어지는 성벽을 보고, 자금성에서 황제의 위엄을 느끼며, 후통 골목에서 서민적 매력을 발견하세요. 중국 여행의 시작이자 완성인 도시입니다.`,
 'qingdao': `칭다오는 중국 속 이국적인 해변 도시입니다. 독일 조차지 시절의 유럽풍 건물과 잔교 해변의 시원한 바다가 어우러진 곳. 한국에서 1시간 30분이면 도착하는 맥주 한 잔과 함께하는 가까운 해외 여행입니다.`,
 'saipan': `사이판은 시간이 멈춘 듯한 태평양의 낙원입니다. 마나가하섬의 투명한 산호초 바다, 그로토 동굴의 신비로운 블루홀까지 직항 4시간 30분이면 만나는 에메랄드빛 바다에서 완벽한 휴식을 즐기세요.`,
 'palawan': `팔라완은 세계가 인정한 최후의 비경입니다. 엘니도의 석회암 절벽 사이로 펼쳐지는 비현실적인 에메랄드빛 라군은 직접 눈으로 봐야 믿을 수 있는 아름다움. 자연 속 깊은 힐링 여행을 경험하세요.`,
 'sanya': `삼아는 중국 최남단의 열대 낙원입니다. 야롱만의 투명한 에메랄드 해변, 난산사의 거대한 해수관음상, 천아해각의 기암까지 5성급 리조트에서의 여유로운 하루와 열대 과일의 달콤함으로 일상을 잊어보세요.`
 };

 // ── narrative 누락 검증 (개발 시 경고) ──
  const allDestIds = v1_0_9_DEST_DATA.map(dd => dd.id);
  const missingNarr = allDestIds.filter(nid => !narratives[nid]);
  if (missingNarr.length > 0) {
    console.warn('[narrative 누락] 다음 여행지에 전용 설명이 없습니다:', missingNarr.join(', '), '\n→ narratives 객체에 추가해주세요.');
  }

  // 설명 텍스트 선택
  let rawNarrative;
  if (narratives[d.id]) {
    rawNarrative = narratives[d.id];
  } else {
    // 스마트 fallback: 여행지 고유 데이터로 자동 생성
    const cn = d.name.includes('·') ? d.name.split('·')[1].trim() : d.name;
    const st = d.sub || '';
    const si = d.sights && d.sights.mid ? d.sights.mid.map(s => s.name).slice(0, 2).join(', ') : '';
    const ex = d.exps && d.exps.mid ? d.exps.mid.map(e => e.name).slice(0, 2).join(', ') : '';
    rawNarrative = cn + '의 매력을 발견하세요.<br>' + (st ? st + '의 특별함을 경험하고<br>' : '') + (si ? si + ' 등<br>주요 명소를 둘러보세요.<br>' : '') + (ex ? ex + ' 등<br>현지 경험이 기다립니다.' : '특별한 여행이 시작됩니다.');
  }
  const narrativeText = rawNarrative;

  // 3. UI UPDATE
  // Photo
  if (colEl) {
    var oldPhoto = colEl.querySelector('.dest-photo-wrap');
    if (oldPhoto) oldPhoto.remove();
    var photoWrap = document.createElement('div');
    photoWrap.className = 'dest-photo-wrap';
    var photoUrl = (typeof DEST_PHOTOS !== 'undefined' && DEST_PHOTOS[d.id]) || '';
    if (photoUrl) {
      var img = document.createElement('img');
      img.src = photoUrl;
      img.alt = d.name;
      img.loading = 'lazy';
      img.onerror = function () {
        var gmUrl = 'https://www.google.com/search?q=' + encodeURIComponent(d.name) + '&tbm=isch';
        this.parentNode.innerHTML = '<a href="' + gmUrl + '" target="_blank" rel="noopener" class="dest-photo-gmaps"><span class="dest-photo-gmaps-name">' + d.name + '</span><span class="dest-photo-gmaps-link">Google에서 사진 보기 →</span></a>';
      };
      photoWrap.appendChild(img);
    } else {
      var gmUrl = 'https://www.google.com/search?q=' + encodeURIComponent(d.name) + '&tbm=isch';
      photoWrap.innerHTML = '<a href="' + gmUrl + '" target="_blank" rel="noopener" class="dest-photo-gmaps"><span class="dest-photo-gmaps-name">' + d.name + '</span><span class="dest-photo-gmaps-link">Google에서 사진 보기 →</span></a>';
    }
    // Insert after badge row if present, otherwise at top
    var badgeRow = colEl.querySelector('.col-badges');
    if (badgeRow && badgeRow.nextSibling) {
      colEl.insertBefore(photoWrap, badgeRow.nextSibling);
    } else {
      colEl.insertBefore(photoWrap, colEl.firstChild);
    }
  }
  document.getElementById('dname' + col).textContent = _getDestLabel(d, null);
  // _lastTop3 갱신 (토스트 비교용)
  if (!window._lastTop3) window._lastTop3 = ['', '', ''];
  window._lastTop3[col] = d.name;
  document.getElementById('dsub' + col).textContent = d.sub;
  const dnarrEl = document.getElementById('dnarr' + col);
  if (dnarrEl) dnarrEl.innerHTML = narrativeText;
  const dscoreEl = document.getElementById('dscore' + col);
  if (dscoreEl) dscoreEl.textContent = adjustedScore;
  const dpriceEl = document.getElementById('dprice' + col);
  if (dpriceEl) dpriceEl.textContent = grandTotal + '만원~';

  // 4. TOTAL COST ROW
  setCell('total-' + col, grandTotal + '만원~', '숙박+현지 비용+항공', '총 비용');

  // 5. DETAIL CARDS
  // Fix: pass correct (main, static-sub, dynamic-kicker) to setCell
  const mainAirline = d.cheapFlights && d.cheapFlights[0] ? d.cheapFlights[0].label.split('(')[0].trim() : '';
  setCell('air-' + col, d.airfare || (airPrice + '만원~'), '왕복 항공권', airType);
  setCell('hotel-' + col, hotelPrice + '만원', hotelType, `1박 평균 ${hotelPerNight}만원`);
  setCell('daily-' + col, dailySpend + '만원', '식사+교통+관광', '1일 평균 ' + Math.round(dailySpend) + '만원');
  var alertSafe = (d.alert === '경보 없음' || d.alert === '-');
  setCell('alert-' + col, alertSafe ? '안전' : d.alert, '\u00a0', '여행경보');
  setCell('news-' + col, (d.news === '-' ? '안정적' : d.news), '\u00a0', '현지 이슈');
  setCell('disaster-' + col, (d.disaster === '없음' || d.disaster === '-' ? '낮음' : d.disaster), '\u00a0', '재해 리스크');
  // Weather — API 데이터만 사용 (하드코딩 제거)
  var ctEl = document.getElementById('cur-temp-' + col);
  if (ctEl) {
    var mainT = ctEl.querySelector('.main');
    if (mainT) { mainT.classList.remove('v-lg'); mainT.classList.add('v-xl'); }
    if (typeof d._todayMax === 'number') {
      _updateWeatherCell(col, d);
    } else {
      // API 로딩 전: 빈 상태
      if (mainT) { mainT.textContent = ''; }
      var subEl = ctEl.querySelector('.sub');
      if (subEl) subEl.textContent = '';
    }
  }
  // 밤(최저기온) 캐시 확인
  if (typeof d._todayMin === 'number') {
    _updateForecastCell(col, d);
  } else {
    var fcElTmp = document.getElementById('weekly-forecast-' + col);
    if (fcElTmp) {
      var fmTmp = fcElTmp.querySelector('.main');
      if (fmTmp) { fmTmp.textContent = ''; }
      var fsubTmp = fcElTmp.querySelector('.sub');
      if (fsubTmp) fsubTmp.textContent = '';
    }
  }

  // 5. ATTRACTIONS — split into sights / exps rows
  const CHEVRON_SVG = '<svg class="attr-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';

  function renderAttrList(elId, list) {
    const el = document.getElementById(elId);
    if (!el || !list) return;
    el.innerHTML = '';
    el.style.alignItems = 'flex-start';
    const ul = document.createElement('ul');
    ul.className = 'attr-list';
    list.forEach(item => {
      const li = document.createElement('li');
      li.className = 'attr-item';
      if (typeof item === 'string') {
        li.textContent = item;
      } else {
        if (item.link) {
          const nameLink = document.createElement('a');
          nameLink.href = item.link;
          nameLink.target = '_blank';
          nameLink.rel = 'noopener';
          nameLink.className = 'attr-item-name-link';
          nameLink.innerHTML = item.name + CHEVRON_SVG;
          li.appendChild(nameLink);
        } else {
          const nameEl = document.createElement('div');
          nameEl.className = 'attr-item-name';
          nameEl.textContent = item.name;
          li.appendChild(nameEl);
        }
        if (item.price) {
          const priceEl = document.createElement('div');
          priceEl.className = 'attr-item-price';
          priceEl.style.marginTop = '3px';
          priceEl.textContent = item.price;
          li.appendChild(priceEl);
        }
      }
      ul.appendChild(li);
    });
    el.appendChild(ul);
  }

  function renderFoodList(elId, list) {
    const el = document.getElementById(elId);
    if (!el || !list) return;
    el.innerHTML = '';
    el.style.alignItems = 'flex-start';
    const ul = document.createElement('ul');
    ul.className = 'attr-list';
    list.forEach(item => {
      const li = document.createElement('li');
      li.className = 'attr-item';
      if (typeof item === 'string') {
        const nameEl = document.createElement('div');
        nameEl.className = 'attr-item-name';
        nameEl.textContent = item;
        li.appendChild(nameEl);
      } else {
        if (item.link) {
          const nameLink = document.createElement('a');
          nameLink.href = item.link;
          nameLink.target = '_blank';
          nameLink.rel = 'noopener';
          nameLink.className = 'attr-item-name-link';
          nameLink.innerHTML = item.name + CHEVRON_SVG;
          li.appendChild(nameLink);
        } else {
          const nameEl = document.createElement('div');
          nameEl.className = 'attr-item-name';
          nameEl.textContent = item.name;
          li.appendChild(nameEl);
        }
        if (item.desc) {
          const descEl = document.createElement('div');
          descEl.className = 'attr-item-price';
          descEl.style.marginTop = '3px';
          // 가격 패턴 일괄 제거 (렌더 시점 strip — 데이터 보존)
          // 커버 패턴: · N만원, · 약 N만원, · N~M만원, · N천원, (N만원) 등
          var _desc = (item.desc || '').replace(/\s*[·\-]\s*약?\s*[\d,~\-\.]+\s*(만원|천원)[대~]*/g, '').replace(/\s*\(약?\s*[\d,~\-\.]+\s*(만원|천원)[대~]*\)/g, '').trim();
          descEl.textContent = _desc;
          li.appendChild(descEl);
        }
      }
      ul.appendChild(li);
    });
    el.appendChild(ul);
  }

  function renderHotelList(elId, hotels, tips) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = '';
    el.style.alignItems = 'flex-start';

    // 날짜 취득 — 숙박 링크에 체크인/체크아웃 반영
    var _hDates = _getSearchDates();
    var _checkin = _hDates.skyStart;  // YYYY-MM-DD
    var _checkout = _hDates.skyEnd;    // YYYY-MM-DD

    (hotels || []).forEach(h => {
      const card = document.createElement('div');
      card.className = 'hotel-card';
      if (typeof h === 'string') {
        const nameEl = document.createElement('div');
        nameEl.className = 'hotel-card-name';
        nameEl.textContent = h;
        card.appendChild(nameEl);
      } else {
        const starsEl = document.createElement('div');
        starsEl.className = 'hotel-card-stars';
        starsEl.textContent = '★'.repeat(h.stars || 3) + '☆'.repeat(5 - (h.stars || 3));
        card.appendChild(starsEl);
        const nameEl = document.createElement('div');
        nameEl.className = 'hotel-card-name';
        nameEl.textContent = h.name;
        card.appendChild(nameEl);
        const descEl = document.createElement('div');
        descEl.className = 'hotel-card-desc';
        descEl.textContent = h.desc;
        card.appendChild(descEl);
        const footer = document.createElement('div');
        footer.className = 'hotel-card-footer';
        const priceEl = document.createElement('span');
        priceEl.className = 'hotel-card-price';
        priceEl.textContent = h.priceRange;
        priceEl.style.display = 'none';
        footer.appendChild(priceEl);
        if (h.link) {
          const linkEl = document.createElement('a');
          var _hLink = h.link;
          if (_hLink.includes('booking.com') || _hLink.includes('agoda.com')) {
            var _baseLink = _hLink.split('?')[0];
            var _existingParams = _hLink.includes('?') ? _hLink.split('?')[1] : '';
            _existingParams = _existingParams
              .split('&')
              .filter(function (p) { return !p.match(/^check(in|out|In|Out)/i); })
              .join('&');
            linkEl.dataset.hotelBase = _baseLink;
            linkEl.dataset.hotelParams = _existingParams;
            linkEl.dataset.hotelType = _hLink.includes('agoda') ? 'agoda' : 'booking';
            linkEl.href = '#';
            linkEl.addEventListener('click', function (e) {
              e.preventDefault();
              var hd = _getSearchDates();
              var base = this.dataset.hotelBase;
              var params = this.dataset.hotelParams;
              var sep = params ? '&' : '';
              var dateParam = this.dataset.hotelType === 'agoda'
                ? 'checkIn=' + hd.skyStart + '&checkOut=' + hd.skyEnd
                : 'checkin=' + hd.skyStart + '&checkout=' + hd.skyEnd;
              window.open(base + '?' + params + sep + dateParam, '_blank', 'noopener');
            });
          } else {
            linkEl.href = _hLink;
            linkEl.target = '_blank';
            linkEl.rel = 'noopener';
          }
          linkEl.className = 'hotel-card-link';
          linkEl.textContent = '더 알아보기 ›';
          footer.appendChild(linkEl);
        }
        card.appendChild(footer);
      }
      el.appendChild(card);
    });
    if (tips && tips.length > 0) {
      const details = document.createElement('details');
      details.className = 'tip-details';
      const summary = document.createElement('summary');
      summary.className = 'tip-summary';
      summary.innerHTML = '숙소 팁 <span class="tip-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0071e3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>';
      details.appendChild(summary);
      const content = document.createElement('div');
      content.className = 'tip-content';
      const tipUl = document.createElement('ul');
      tips.forEach(tip => {
        const tipLi = document.createElement('li');
        tipLi.textContent = tip;
        tipUl.appendChild(tipLi);
      });
      content.appendChild(tipUl);
      details.appendChild(content);
      el.appendChild(details);
    }
  }

  function renderFlightList(elId, flights, tips, isVip, destAirfare) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = '';
    el.style.alignItems = 'flex-start';

    // 현재 날짜/예산 취득 — 링크에 동적 파라미터 반영
    var _dates = _getSearchDates();
    var _budget = _getCurrentBudget();
    var _isVipBudget = _budget >= 300 && _budget < 9000;
    var _cabinParam = _isVipBudget ? '&cabinclass=business' : '';

    (flights || []).forEach((f, fi) => {
      const card = document.createElement('div');
      card.className = 'flight-card';

      const labelEl = document.createElement('div');
      labelEl.className = 'flight-card-label';
      labelEl.textContent = f.label;
      card.appendChild(labelEl);

      const descEl = document.createElement('div');
      descEl.className = 'flight-card-desc';
      // 서브텍스트: 시간만 표시 (가격은 비표시)
      var _desc = f.desc || '';
      var _parts = [];
      // 시간 추출 (약 N시간, N.N시간, 비행 N시간 등)
      var _time = _desc.match(/(?:비행\s+)?(?:약\s*)?(\d+(?:\.\d+)?)\s*시간/);
      if (_time) _parts.push(_time[1] + '시간');
      // 직항/경유 정보 추출
      if (_desc.indexOf('직항') !== -1) _parts.push('직항');
      else if (_desc.indexOf('경유') !== -1) _parts.push('경유');
      else if (f.label && f.label.indexOf('직항') !== -1) _parts.push('직항');
      else if (f.label && f.label.indexOf('경유') !== -1) _parts.push('경유');
      descEl.textContent = _parts.join(' · ');
      card.appendChild(descEl);

      if (f.link) {
        const linkEl = document.createElement('a');
        var _href = f.link;
        // Skyscanner URL: 경로(출발-도착)만 data 속성에 저장 → 클릭 시 실시간 날짜+예산 반영
        if (_href.includes('skyscanner')) {
          var _basePath = _href.split('?')[0].replace(/\/\d{6}.*$/, '').replace(/\/$/, '');
          linkEl.dataset.skyRoute = _basePath;  // ex: /transport/flights/icn/lis
          linkEl.href = '#';
          linkEl.addEventListener('click', function (e) {
            e.preventDefault();
            var d = _getSearchDates();
            var b = _getCurrentBudget();
            var c = (b >= 300 && b < 9000) ? '&cabinclass=business' : '&cabinclass=economy';
            var url = this.dataset.skyRoute + '/' + d.shortStart + '/' + d.shortEnd + '/?adultsv2=1&currency=KRW' + c;
            window.open(url, '_blank', 'noopener');
          });
        } else {
          linkEl.href = _href;
          linkEl.target = '_blank';
          linkEl.rel = 'noopener';
        }
        linkEl.className = 'flight-card-link';
        linkEl.textContent = isVip ? '비즈니스석 검색 ›' : '더 알아보기 ›';
        card.appendChild(linkEl);
      }
      el.appendChild(card);
    });
    if (tips && tips.length > 0) {
      const details = document.createElement('details');
      details.className = 'tip-details';
      const summary = document.createElement('summary');
      summary.className = 'tip-summary';
      summary.innerHTML = '항공 팁' + ' <span class="tip-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0071e3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>';
      details.appendChild(summary);
      const content = document.createElement('div');
      content.className = 'tip-content';
      const tipUl = document.createElement('ul');
      tips.forEach(tip => {
        const tipLi = document.createElement('li');
        tipLi.textContent = tip;
        tipUl.appendChild(tipLi);
      });
      content.appendChild(tipUl);
      details.appendChild(content);
      el.appendChild(details);
    }
  }

  const effectiveTier = window.wizardTierOverride || tier;
  const getTiered = obj => !obj ? [] : Array.isArray(obj) ? obj : (obj[effectiveTier] || obj.mid || []);
  renderAttrList('sights-' + col, getTiered(d.sights));
  renderAttrList('exps-' + col, getTiered(d.exps));
  renderFoodList('food-' + col, getTiered(d.food));
  renderHotelList('hotelrec-' + col, getTiered(d.hotels), d.hotelTips);

  // ── VIP 항공 (300만원 이상) ──
  // 각 목적지별 비즈니스석 전용 스카이스캐너 링크 (cabin=business)
  const _vipAirlineMap = {
    'lisbon': { label: '대한항공 비즈니스 (인천→리스본)', desc: '약 16시간 · 왕복 350만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/lis/?adults=1&cabinclass=business' },
    'danang': { label: '대한항공 · 아시아나 비즈니스', desc: '4.5시간 · 왕복 120만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/dad/?adults=1&cabinclass=business' },
    'jeju': { label: '대한항공 최고급 국내선', desc: '50분 · 왕복 30만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cju/?adults=1&cabinclass=business' },
    'taipei': { label: '중화항공 · 에바항공 비즈니스', desc: '2.5시간 · 왕복 110만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/tpe/?adults=1&cabinclass=business' },
    'osaka': { label: '대한항공 · 아시아나 비즈니스', desc: '1.5시간 · 왕복 70만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/kix/?adults=1&cabinclass=business' },
    'tokyo': { label: '대한항공 · ANA 비즈니스', desc: '2.5시간 · 왕복 90만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/nrt/?adults=1&cabinclass=business' },
    'bangkok': { label: '대한항공 · 타이항공 비즈니스', desc: '6시간 · 왕복 200만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/bkk/?adults=1&cabinclass=business' },
    'bali': { label: '가루다인도네시야 비즈니스', desc: '7시간 · 왕복 250만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/dps/?adults=1&cabinclass=business' },
    'chiangmai': { label: '타이항공 비즈니스 (방콕 경유)', desc: '약 8시간 · 왕복 200만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cnx/?adults=1&cabinclass=business' },
    'singapore': { label: '싱가포르항공 비즈니스', desc: '6.5시간 · 왕복 220만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/sin/?adults=1&cabinclass=business' },
    'cebu': { label: '필리핀항공 비즈니스', desc: '4.5시간 · 왕복 180만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/ceb/?adults=1&cabinclass=business' },
    'nhatrang': { label: '베트남항공 비즈니스', desc: '5시간 · 왕복 160만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cxr/?adults=1&cabinclass=business' },
    'fukuoka': { label: '대한항공 · 아시아나 비즈니스', desc: '1.5시간 · 왕복 60만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/fuk/?adults=1&cabinclass=business' },
    'sapporo': { label: '대한항공 · ANA 비즈니스', desc: '2.5시간 · 왕복 100만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cts/?adults=1&cabinclass=business' },
    'okinawa': { label: '대한항공 · ANA 비즈니스', desc: '2시간 · 왕복 80만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/oka/?adults=1&cabinclass=business' },
    'kyoto': { label: '대한항공 (오사카 경유) 비즈니스', desc: '1.5시간 · 왕복 80만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/kix/?adults=1&cabinclass=business' },
    'miyakojima': { label: '대한항공 (오키나와 경유) 비즈니스', desc: '약 4시간 · 왕복 100만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/shi/?adults=1&cabinclass=business' },
    'phuquoc': { label: '베트남항공 비즈니스', desc: '5시간 · 왕복 160만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pqc/?adults=1&cabinclass=business' },
    'hochiminh': { label: '대한항공 · 아시아나 비즈니스', desc: '5시간 · 왕복 200만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/sgn/?adults=1&cabinclass=business' },
    'hanoi': { label: '대한항공 · 베트남항공 비즈니스', desc: '5시간 · 왕복 180만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/han/?adults=1&cabinclass=business' },
    'boracay': { label: '필리핀항공 비즈니스', desc: '4.5시간 · 왕복 180만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mph/?adults=1&cabinclass=business' },
    'phuket': { label: '방콕에어웨이즈 비즈니스 (방콕 경유)', desc: '약 8시간 · 왕복 220만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hkt/?adults=1&cabinclass=business' },
    'hongkong': { label: '캐세이퍼시픽 비즈니스', desc: '3.5시간 · 왕복 150만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hkg/?adults=1&cabinclass=business' },
    'guam': { label: '대한항공 · 유나이티드 비즈니스', desc: '4시간 · 왕복 200만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/gum/?adults=1&cabinclass=business' },
    'hawaii': { label: '대한항공 비즈니스 (직항)', desc: '9.5시간 · 왕복 400만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hnl/?adults=1&cabinclass=business' },
    'paris': { label: '대한항공 · 에어프랑스 비즈니스', desc: '12시간 · 왕복 450만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cdg/?adults=1&cabinclass=business' },
    'kualalumpur': { label: '말레이시아항공 비즈니스', desc: '6시간 · 왕복 200만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/kul/?adults=1&cabinclass=business' },
    'maldives': { label: '스리랑카항공 비즈니스 (콜롬보 경유)', desc: '약 10시간 · 왕복 350만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mle/?adults=1&cabinclass=business' },
    'sydney': { label: '대한항공 · 쿼타스 비즈니스', desc: '10시간 · 왕복 500만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/syd/?adults=1&cabinclass=business' },
    'shanghai': { label: '대한항공 · 중국동방 비즈니스', desc: '2시간 · 왕복 80만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pvg/?adults=1&cabinclass=business' },
    'barcelona': { label: '대한항공 · 이베리아 비즈니스', desc: '약 14시간 · 왕복 400만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/bcn/?adults=1&cabinclass=business' },
    'saipan': { label: '대한항공 · 유나이티드 비즈니스', desc: '4.5시간 · 왕복 180만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/spn/?adults=1&cabinclass=business' },
    'palawan': { label: '필리핀항공 비즈니스 (마닐라 경유)', desc: '약 6시간 · 왕복 200만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pps/?adults=1&cabinclass=business' },
    'sanya': { label: '중국남방항공 비즈니스', desc: '4시간 · 왕복 150만원~', link: 'https://www.skyscanner.co.kr/transport/flights/icn/syx/?adults=1&cabinclass=business' },
  };
  const _vipFlightTips = [
    '✈️ 비즈니스석 예약은 출발 2~3개월 전 마일리지 좌석 우선 확인',
    '💍 신혼여행 패키지(항공+호텔)는 전용 여행사 상담으로 최대 20% 절약',
    '🍾 비즈니스 라운지 무료 이용 · 기내 풀플랫 침대 시트 제공',
    '🎁 항공사 앱에서 업그레이드 입찰(Bid Upgrade) 신청 시 절약 가능',
  ];

  const _vipFlights = isVIP && _vipAirlineMap[d.id]
    ? [_vipAirlineMap[d.id]]
    : d.cheapFlights;
  const _vipTips = isVIP ? _vipFlightTips : d.flightTips;

  renderFlightList('flightrec-' + col, _vipFlights, _vipTips, isVIP, isVIP ? null : d.airfare);
  renderAppList('apps-' + col, d.id);
  renderEntryInfo('entry-' + col, d.id, d._visaLabel || null);
  renderFxTips('fxtip-' + col, d.id, d.fx, d.fxSub);
  renderTravelInfo('travelinfo-' + col, d.id);

  // 6. EXTERNAL LINKS (Skyscanner — YYMMDD 포맷 사용)
  const _dates = _getSearchDates();
  const _skyStart = _dates.shortStart;  // YYMMDD (ex: 260516)
  const _skyEnd = _dates.shortEnd;
  const codes = { 'lisbon': 'lis', 'danang': 'dad', 'jeju': 'cju', 'taipei': 'tpe', 'osaka': 'kix', 'tokyo': 'nrt', 'bangkok': 'bkk', 'bali': 'dps', 'chiangmai': 'cnx', 'singapore': 'sin', 'cebu': 'ceb', 'nhatrang': 'cxr', 'fukuoka': 'fuk', 'sapporo': 'cts', 'okinawa': 'oka', 'kyoto': 'kix', 'miyakojima': 'mmj', 'phuquoc': 'pqc', 'hochiminh': 'sgn', 'hanoi': 'han', 'boracay': 'mph', 'phuket': 'hkt', 'hongkong': 'hkg', 'guam': 'gum', 'hawaii': 'hnl', 'paris': 'cdg', 'kualalumpur': 'kul', 'maldives': 'mle', 'sydney': 'syd', 'shanghai': 'pvg', 'barcelona': 'bcn', 'sanya': 'syx', 'saipan': 'spn', 'palawan': 'pps' };
  const _skyCode = codes[d.id] || 'any';
  const _fromCode = (window.DEPARTURE_AIRPORT || 'ICN').toLowerCase();
  const _skyBase = 'https://www.skyscanner.co.kr/transport/flights';
  const _cabinSuffix = isVIP ? '&cabinclass=business' : '&cabinclass=economy';
  const _skyParams = 'adultsv2=1&currency=KRW' + _cabinSuffix;
  const link = d.id === 'jeju'
    ? (window.DEPARTURE_AIRPORT === 'CJU'
      ? `${_skyBase}/cju/gmp/${_skyStart}/${_skyEnd}/?${_skyParams}`
      : `${_skyBase}/gmp/cju/${_skyStart}/${_skyEnd}/?${_skyParams}`)
    : `${_skyBase}/${_fromCode}/${_skyCode}/${_skyStart}/${_skyEnd}/?${_skyParams}`;

  if (colEl) {
    const btnGhost = colEl.querySelector('.btn-ghost');
    if (btnGhost) {
      // 클릭 시 실시간 날짜+예산 반영 — 경로 정보를 data 속성에 저장
      var _routeKey = d.id === 'jeju' ? '__jeju__' : `${_fromCode}/${_skyCode}`;
      btnGhost.dataset.skyRoute = _routeKey;
      btnGhost.dataset.isVip = isVIP ? '1' : '0';
      btnGhost.href = '#';
      // 기존 리스너 제거 후 재등록 (중복 방지)
      var _newBtn = btnGhost.cloneNode(true);
      btnGhost.parentNode.replaceChild(_newBtn, btnGhost);
      _newBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var d2 = _getSearchDates();
        var b2 = _getCurrentBudget();
        var vip = this.dataset.isVip === '1' || (b2 >= 300 && b2 < 9000);
        var c2 = vip ? '&cabinclass=business' : '&cabinclass=economy';
        var route = this.dataset.skyRoute;
        var dep = (window.DEPARTURE_AIRPORT || 'ICN').toLowerCase();
        var base = 'https://www.skyscanner.co.kr/transport/flights';
        var url;
        if (route === '__jeju__') {
          url = dep === 'cju'
            ? base + '/cju/gmp/' + d2.shortStart + '/' + d2.shortEnd + '/?adultsv2=1&currency=KRW' + c2
            : base + '/gmp/cju/' + d2.shortStart + '/' + d2.shortEnd + '/?adultsv2=1&currency=KRW' + c2;
        } else {
          url = base + '/' + route + '/' + d2.shortStart + '/' + d2.shortEnd + '/?adultsv2=1&currency=KRW' + c2;
        }
        window.open(url, '_blank', 'noopener');
      });
      _newBtn.textContent = isVIP
        ? `${d.name.split(' · ')[1] || d.name} 비즈니스석 보기 ›`
        : `${d.name.split(' · ')[1] || d.name} 항공권 보기 ›`;
    }
  }
}

function selectDest(col) {
  const colEl = document.getElementById('col-' + col);
  if (colEl) {
    const btn = colEl.querySelector('.btn-ghost');
    if (btn && btn.href && btn.href !== '#') {
      window.open(btn.href, '_blank', 'noopener');
      return;
    }
  }
  // Fallback: show skyscanner search
  const name = document.getElementById('dname' + col) ? document.getElementById('dname' + col).textContent : '여행지';
  window.open('https://www.skyscanner.co.kr/', '_blank', 'noopener');
}

function setCell(id, main, sub, kicker) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('sk'); // 스켈레톤 제거
  const mainEl = el.querySelector('.main');
  if (mainEl) mainEl.textContent = main;
  const subEl = el.querySelector('.sub');
  if (subEl && sub !== undefined) subEl.textContent = sub;
  const kickerEl = el.querySelector('.kicker');
  if (kickerEl && kicker !== undefined) kickerEl.textContent = kicker;
}

function updateComparison() {
  const btn = document.getElementById('compare-search-btn');
  if (!btn) { updateResultsByFilters(); return; }
  btn.classList.add('disabled');

  // Check if any results will be found
  const b1 = document.getElementById('budget-input-home');
  const b2 = document.getElementById('budget-input-compare');
  const budgetRaw = (b2 && b2.value) ? b2.value : b1.value;
  const budgetNum = budgetRaw === 'unlimited' ? 9999 : budgetRaw === 'cheapest' ? 40 : (parseInt(budgetRaw) || 120);

  setTimeout(() => {
    var _filterKeyBefore = window._lastFilterKey || '';
    var _top3Before = (window._lastTop3 || []).slice();
    updateResultsByFilters();
    btn.classList.remove('disabled');
    var _filterKeyAfter = window._lastFilterKey || '';
    var _top3After = (window._lastTop3 || []).slice();

    const body = document.getElementById('comparison-body');
    const noResults = document.getElementById('no-results-cnt');
    if (body.style.display === 'none' && noResults && noResults.style.display !== 'none') {
      showToast('현재 예산으로 갈 수 있는 여행지가 없습니다.');
    } else if (_filterKeyBefore !== _filterKeyAfter && _top3Before.join(',') !== _top3After.join(',')) {
      showToast('검색 결과가 업데이트되었습니다.');
    }
  }, 600);
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    t.classList.remove('show');
  }, 2500);
}

// ── SAVE (PRINT/PDF) ──
function handleSaveImage() {
  console.log('[SAVE] handleSaveImage called');
  window.scrollTo(0, 0);
  window.print();
}

// ── SHARE (LINK COPY) ──
function handleShare() {
  // 항상 canonical URL(https://odiga.kr)로 고정 — Kakao OG 캐시 분리 방지
  var base = 'https://odiga.kr/';
  var params = [];
  // 1. 목적지 ID
  var ids = [];
  if (_currentDestIdx) {
    for (var i = 0; i < _currentDestIdx.length; i++) {
      var idx = _currentDestIdx[i];
      if (idx >= 0 && v1_0_9_DEST_DATA[idx] && v1_0_9_DEST_DATA[idx].id) {
        ids.push(v1_0_9_DEST_DATA[idx].id);
      }
    }
  }
  if (ids.length > 0) params.push('d=' + ids.join(','));
  // 2. 검색 조건: 지역
  var regionEl = document.getElementById('region-display');
  if (regionEl && regionEl.textContent && regionEl.textContent !== '전체 지역') {
    params.push('region=' + encodeURIComponent(regionEl.textContent));
  }
  // 3. 검색 조건: 날짜 (사용자가 직접 선택한 경우만)
  if (!window._isAutoDate) {
    var dateEl = document.getElementById('home-date-value');
    if (dateEl && dateEl.textContent && dateEl.textContent !== '날짜선택' && dateEl.textContent.includes(' – ')) {
      params.push('dates=' + encodeURIComponent(dateEl.textContent));
    }
  }
  // 4. 검색 조건: 예산
  var b1 = document.getElementById('budget-input-home');
  if (b1 && b1.value && b1.value !== 'unlimited') {
    params.push('budget=' + encodeURIComponent(b1.value));
  }
  // 5. snap 파라미터 제거 — URL 길이 문제로 공유 URL에서 제외
  // 6. 뱃지 상태
  var badges = [];
  for (var bi = 0; bi < ids.length; bi++) {
    var bb = document.getElementById('best-badge-' + bi);
    var lb = document.getElementById('low-badge-' + bi);
    var bv = (bb && bb.classList.contains('visible')) ? 'R' : '';
    var lv = (lb && lb.classList.contains('visible')) ? 'L' : '';
    badges.push(bv + lv);
  }
  params.push('badges=' + badges.join(','));

  var url = params.length > 0 ? base + '?' + params.join('&') : location.href;
  // 클립보드 복사
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function () {
      showToast('링크가 복사되었어요');
    }).catch(function () { _fallbackCopy(url); });
  } else {
    _fallbackCopy(url);
  }
}
function _fallbackCopy(url) {
  var ta = document.createElement('textarea');
  ta.value = url;
  ta.setAttribute('readonly', '');
  ta.style.cssText = 'position:fixed;left:-9999px';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) { }
  document.body.removeChild(ta);
  showToast('링크가 복사되었어요');
}

// ── DESTINATION DROPDOWN SHARED CONSTANTS ──
const DEST_COUNTRY_KR = {
  japan: '일본', vietnam: '베트남', korea: '국내', taiwan: '대만',
  thailand: '태국', indonesia: '인도네시아', singapore: '싱가포르',
  philippines: '필리핀', hongkong: '홍콩', usa: '하와이',
  usa_territory: '괌', portugal: '포르투갈', france: '프랑스',
  spain: '스페인', malaysia: '말레이시아', maldives: '몰디브',
  australia: '호주', china: '중국',
  cambodia: '캄보디아', italy: '이탈리아', uk: '영국',
  laos: '라오스', switzerland: '스위스', croatia: '크로아티아',
  turkey: '튀르키예', macau: '마카오'
};
const DEST_REGION_LABELS = {
  domestic: '국내', japan: '일본', east_asia: '동아시아',
  sea: '동남아시아', pacific: '태평양·오세아니아', europe: '유럽',
  resort: '휴양지'
};
const DEST_REGION_ORDER = ['domestic', 'japan', 'east_asia', 'sea', 'pacific', 'europe'];
const DEST_REGION_MULTI = new Set(['east_asia', 'sea', 'pacific', 'europe', 'resort']);

// 순수 도시명 추출
function _getDestCity(d) {
  return d.name.includes(' · ')
    ? d.name.split(' · ')[1].trim()
    : d.name.replace(/\s*\([^)]+\)\s*$/, '').trim();
}
// 표시용 라벨 (지역 필터 여부에 따라 국가 prefix 결정)
function _getDestLabel(d, activeRegion) {
  const city = _getDestCity(d);
  const rk = (typeof DEST_REGION !== 'undefined' && DEST_REGION[d.id]) || '';
  const needCountry = !activeRegion || activeRegion === 'resort' || DEST_REGION_MULTI.has(rk);
  if (!needCountry) return city;
  const cc = (typeof DEST_COUNTRY !== 'undefined' && DEST_COUNTRY[d.id]) || '';
  const country = DEST_COUNTRY_KR[cc] || '';
  return (country && country !== city) ? country + ' · ' + city : city;
}
// 트리거 라벨 (항상 풀 표시)
function _getDestTriggerLabel(idx) {
  const d = v1_0_9_DEST_DATA && v1_0_9_DEST_DATA[idx];
  if (!d) return '여행지 선택';
  return _getDestLabel(d, null);
}

function refreshSelectOptions(budget, duration) {
  const _selRegion = window.selectedRegion || '';

  // ── 1. hidden <select> 재빌드 (기존 JS 참조 보존) ──
  ['sel0', 'sel1', 'sel2', 'sel0-fixed', 'sel1-fixed', 'sel2-fixed'].forEach(sid => {
    const el = document.getElementById(sid);
    if (!el) return;
    const cur = el.value;
    el.innerHTML = '';
    if (_selRegion) {
      v1_0_9_DEST_DATA.forEach((d, did) => {
        if (_selRegion === 'resort') {
          if (!DEST_RESORT || !DEST_RESORT.has(d.id)) return;
        } else {
          if ((typeof DEST_REGION !== 'undefined' ? DEST_REGION[d.id] : '') !== _selRegion) return;
        }
        const opt = document.createElement('option');
        opt.value = String(did);
        opt.textContent = _getDestLabel(d, _selRegion);
        el.appendChild(opt);
      });
    } else {
      DEST_REGION_ORDER.forEach(rk => {
        const items = v1_0_9_DEST_DATA.map((d, i) => ({ d, i })).filter(({ d }) => (typeof DEST_REGION !== 'undefined' ? DEST_REGION[d.id] : '') === rk);
        if (!items.length) return;
        const grp = document.createElement('optgroup');
        grp.label = DEST_REGION_LABELS[rk] || rk;
        items.forEach(({ d, i }) => {
          const opt = document.createElement('option');
          opt.value = String(i);
          const adjMin = (d.minBudget || 40) + (duration > 5 ? (duration - 5) * 6 : 0);
          if (adjMin > budget) { opt.classList.add('restricted'); opt.textContent = '🚫 ' + _getDestLabel(d, null) + ' (예산 초과)'; }
          else { opt.textContent = _getDestLabel(d, null); }
          grp.appendChild(opt);
        });
        el.appendChild(grp);
      });
    }
    // cur 복원: 새 옵션에 해당 값이 있을 때만 (지역 변경 시 stale 값 방지)
    if (cur) {
      var hasOpt = Array.from(el.options).some(function (o) { return o.value === cur; });
      if (hasOpt) el.value = cur;
    }
  });

  // ── 2. 커스텀 드롭다운 메뉴 재빌드 ──
  [[0, 'dd0', 'sel0'], [1, 'dd1', 'sel1'], [2, 'dd2', 'sel2'],
  [0, 'dd0-fixed', 'sel0-fixed'], [1, 'dd1-fixed', 'sel1-fixed'], [2, 'dd2-fixed', 'sel2-fixed']
  ].forEach(([col, ddId, selId]) => {
    const menuEl = document.getElementById(ddId + '-menu');
    if (!menuEl) return;
    const curIdx = parseInt((document.getElementById(selId) || {}).value) || 0;
    menuEl.innerHTML = '';

    const addOpt = (d, did, label) => {
      const adjMin = (d.minBudget || 40) + (duration > 5 ? (duration - 5) * 6 : 0);
      const isR = adjMin > budget;
      const el2 = document.createElement('div');
      el2.className = 'dest-dd-option' + (isR ? ' restricted' : '') + (did === curIdx ? ' selected' : '');
      el2.dataset.idx = String(did);
      el2.textContent = isR ? '🚫 ' + label + ' (예산 초과)' : label;
      if (!isR) { const c = col, i = did; el2.onclick = () => selectDestDd(c, i); }
      menuEl.appendChild(el2);
    };

    if (_selRegion) {
      v1_0_9_DEST_DATA.forEach((d, did) => {
        if (_selRegion === 'resort') {
          if (!DEST_RESORT || !DEST_RESORT.has(d.id)) return;
        } else {
          if ((typeof DEST_REGION !== 'undefined' ? DEST_REGION[d.id] : '') !== _selRegion) return;
        }
        addOpt(d, did, _getDestLabel(d, _selRegion));
      });
    } else {
      DEST_REGION_ORDER.forEach(rk => {
        const items = v1_0_9_DEST_DATA.map((d, i) => ({ d, i })).filter(({ d }) => (typeof DEST_REGION !== 'undefined' ? DEST_REGION[d.id] : '') === rk);
        if (!items.length) return;
        const grpEl = document.createElement('div');
        grpEl.className = 'dest-dd-group-label';
        grpEl.textContent = DEST_REGION_LABELS[rk] || rk;
        menuEl.appendChild(grpEl);
        items.forEach(({ d, i }) => addOpt(d, i, _getDestLabel(d, null)));
      });
      // 매핑 안 된 여행지 폴백 (향후 확장 대비)
      const knownRegions = new Set(DEST_REGION_ORDER);
      const others = v1_0_9_DEST_DATA.map((d, i) => ({ d, i })).filter(({ d }) => {
        const rk = (typeof DEST_REGION !== 'undefined' ? DEST_REGION[d.id] : '') || '';
        return !knownRegions.has(rk);
      });
      if (others.length) {
        const grpEl = document.createElement('div');
        grpEl.className = 'dest-dd-group-label';
        grpEl.textContent = '기타';
        menuEl.appendChild(grpEl);
        others.forEach(({ d, i }) => addOpt(d, i, _getDestLabel(d, null)));
      }
    }
  });

  syncAllDestDdLabels();
}

// ── 커스텀 드롭다운 헬퍼 함수 ──
function syncAllDestDdLabels() {
  for (var c = 0; c < 3; c++) {
    var sel = document.getElementById('sel' + c);
    if (!sel) continue;
    var idx = parseInt(sel.value);
    if (isNaN(idx)) continue;
    var label = _getDestTriggerLabel(idx);
    ['dd' + c, 'dd' + c + '-fixed'].forEach(function (ddId) {
      var dd = document.getElementById(ddId);
      if (!dd) return;
      var v = dd.querySelector('.dest-dd-val');
      if (v) v.textContent = label;
    });
  }
}

function toggleDestDd(col) {
  var dd = document.getElementById('dd' + col);
  var ddF = document.getElementById('dd' + col + '-fixed');
  var isOpen = (dd && dd.classList.contains('open')) || (ddF && ddF.classList.contains('open'));
  closeAllDestDds();
  if (!isOpen) {
    if (dd) dd.classList.add('open');
    if (ddF) ddF.classList.add('open');
  }
}

function closeAllDestDds() {
  [0, 1, 2].forEach(function (c) {
    ['dd' + c, 'dd' + c + '-fixed'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.classList.remove('open');
    });
  });
}

function selectDestDd(col, idx) {
  // hidden select 동기화
  ['sel' + col, 'sel' + col + '-fixed'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.value = String(idx);
  });
  // 선택 상태 업데이트
  ['dd' + col, 'dd' + col + '-fixed'].forEach(function (ddId) {
    var menu = document.getElementById(ddId + '-menu');
    if (!menu) return;
    menu.querySelectorAll('.dest-dd-option').forEach(function (opt) {
      opt.classList.toggle('selected', parseInt(opt.dataset.idx) === idx);
    });
  });
  closeAllDestDds();
  syncAllDestDdLabels();
  changeDest(col, idx);
}

// 외부 클릭 시 드롭다운 닫기
document.addEventListener('click', function (e) {
  if (!e.target.closest || !e.target.closest('.dest-dd')) closeAllDestDds();
});

// ── 목적지 인기 클릭 추적 (localStorage) ──
function _trackDestClick(destId) {
  try {
    var raw = localStorage.getItem('odiga_dest_clicks');
    var counts = raw ? JSON.parse(raw) : {};
    counts[destId] = (counts[destId] || 0) + 1;
    localStorage.setItem('odiga_dest_clicks', JSON.stringify(counts));
  } catch (e) { } // localStorage 오류 시 조용히 무시
}

function _getTopDests(n) {
  try {
    var raw = localStorage.getItem('odiga_dest_clicks');
    if (!raw) return null;
    var counts = JSON.parse(raw);
    // v1_0_9_DEST_DATA의 인덱스 기준으로 정렬
    var ranked = [];
    v1_0_9_DEST_DATA.forEach(function (d, i) {
      if (counts[d.id]) ranked.push({ idx: i, count: counts[d.id] });
    });
    ranked.sort(function (a, b) { return b.count - a.count; });
    if (ranked.length < n) return null; // 데이터 부족 시 기본값 사용
    return ranked.slice(0, n).map(function (r) { return String(r.idx); });
  } catch (e) { return null; }
}

function changeDest(col, idx) {
  const idxInt = parseInt(idx);
  const d = v1_0_9_DEST_DATA[idxInt];
  // 유저가 직접 선택한 목적지 기록
  if (d && d.id) _trackDestClick(d.id);

  const b1 = document.getElementById('budget-input-home');
  const b2 = document.getElementById('budget-input-compare');
  const budgetRaw = (b2 && b2.value) ? b2.value : b1.value;
  const isCheapestMode = budgetRaw === 'cheapest';
  const budget = budgetRaw === 'unlimited' ? 9999 : isCheapestMode ? 40 : (parseInt(budgetRaw) || 120);

  const dateVal = document.getElementById('home-date-value').textContent;
  let duration = 5;
  if (dateVal.includes(' – ')) {
    try {
      const parts = dateVal.split(' – ');
      const d1 = parts[0].split('월 ');
      const d2 = parts[1].split('월 ');
      const year = new Date().getFullYear();
      const m1 = parseInt(d1[0]) - 1, m2 = parseInt(d2[0]) - 1;
      const date1 = new Date(year, m1, parseInt(d1[1].replace('일', '')));
      const date2 = new Date(m2 < m1 ? year + 1 : year, m2, parseInt(d2[1].replace('일', '')));
      duration = Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24)) + 1;
      if (duration <= 0) duration = 5;
    } catch (e) { }
  }

  const adjMin = (d.minBudget || 40) + (duration > 5 ? (duration - 5) * 6 : 0);
  // unlimited(상관없음)일 때는 예산 초과 경고 불필요
  var _isUnlimitedBudget = budgetRaw === 'unlimited';
  if (adjMin > budget && !isCheapestMode && !_isUnlimitedBudget) {
    var _budgetLabel = { '120': '120만원', '200': '200만원', '300': '250만원+' }[budgetRaw] || (budget + '만원');
    showToast(`${d.name}은(는) 현재 예산(${_budgetLabel})을 초과합니다.`);
  }

  try {
    updateColumn(col, idxInt, budget, duration);
  } catch (e) {
    console.error('[changeDest] updateColumn 에러:', e);
  }
  // 드롭다운 변경 후 해당 컬럼의 dc 셀 가시성 강제 복원
  document.querySelectorAll('[id$="-' + col + '"]').forEach(function (el) {
    if (el.classList.contains('dc') && el.style.display === 'none') el.style.display = '';
  });
  // Sync both selectors (main + fixed header) to stay in agreement
  const mainSel = document.getElementById('sel' + col);
  const fixedSel = document.getElementById('sel' + col + '-fixed');
  if (mainSel) mainSel.value = String(idxInt);
  if (fixedSel) fixedSel.value = String(idxInt);
  syncAllDestDdLabels();

  // ── 드롭다운 변경 후 추천/최저가 뱃지 실시간 갱신 ──
  // 현재 표시 중인 컬럼 수 파악
  const visibleCols = [0, 1, 2].filter(i => {
    const c = document.getElementById('col-' + i);
    return c && c.style.display !== 'none';
  });
  const colCount = visibleCols.length;

  // 추천 뱃지: adjustedScore DOM 기반으로 최고점 1개에만
  const scoreList = visibleCols.map(i => {
    const el = document.getElementById('dscore' + i);
    return el ? (parseInt(el.textContent) || 0) : 0;
  });
  const maxSc = Math.max(...scoreList);

  // 모두 초기화 후 재설정
  for (let i = 0; i < 3; i++) {
    const bb = document.getElementById('best-badge-' + i);
    if (bb) bb.classList.remove('visible');
  }
  for (let k = 0; k < visibleCols.length; k++) {
    if (scoreList[k] === maxSc) {
      const bb = document.getElementById('best-badge-' + visibleCols[k]);
      if (bb) bb.classList.add('visible');
      break;
    }
  }

  // 최저가 뱃지: updateColumn DOM 업데이트 후 재계산
  if (colCount >= 2) {
    setTimeout(() => {
      const costs = visibleCols.map(i => {
        const te = document.getElementById('total-' + i);
        const me = te ? te.querySelector('.main') : null;
        const rt = me ? me.textContent.replace(/[^0-9]/g, '') : '';
        return rt ? parseInt(rt) : 9999999;
      });
      const minC = Math.min(...costs);
      for (let i = 0; i < 3; i++) {
        const lb = document.getElementById('low-badge-' + i);
        if (lb) lb.classList.remove('visible');
      }
      for (let k = 0; k < visibleCols.length; k++) {
        if (costs[k] === minC) {
          const lb = document.getElementById('low-badge-' + visibleCols[k]);
          if (lb) lb.classList.add('visible');
          break;
        }
      }
    }, 150);
  }

  // ── Travelpayouts 예약 링크 갱신 (드롭다운 변경 시) ──
  // VIP: 비즈니스 클래스 실시간 데이터, 일반: 이코노미 최저가
  var _isVipInChange = budget >= 300 && budget < 9000;
  var _isUnlimitedInChange = budget >= 9000;
  var _cdAirPrice = _isVipInChange ? (d._vipAirfare || d.airfare) : d.airfare;
  var _cdAirSub = _isVipInChange ? '비즈니스 왕복' : '왕복 항공권';
  if (d && d._tpLink && _cdAirPrice) {
    const airEl = document.getElementById('air-' + col);
    if (airEl) {
      const mEl = airEl.querySelector('.main');
      const sEl = airEl.querySelector('.sub');
      if (mEl) mEl.textContent = d._airfareKRW ? Math.round(d._airfareKRW / 10000) + '만원~' : (_cdAirPrice || mEl.textContent);
      if (sEl) sEl.textContent = _cdAirSub;
      // 기존 버튼 제거
      const oldBtn = airEl.querySelector('.tp-book-btn');
      if (oldBtn) oldBtn.remove();
    }
  }

  // ── 숙소 예산별 오버라이드 (드롭다운 변경 시) ──
  if (d && d._hotelPrice) {
    var hotelEl = document.getElementById('hotel-' + col);
    if (hotelEl) {
      var _hmEl = hotelEl.querySelector('.main');
      var _hsEl = hotelEl.querySelector('.sub');
      var _hkEl = hotelEl.querySelector('.kicker');
      if (_hmEl && d._hotelPriceKRW) _hmEl.textContent = Math.round(d._hotelPriceKRW / 10000) + '만원~/박';
      if (_isVipInChange) {
        if (_hsEl) _hsEl.textContent = '프리미엄 1박 기준';
        if (_hkEl) _hkEl.textContent = '5성급 호텔 기준';
      } else if (_isUnlimitedInChange || budget >= 120) {
        var _cdStars = budget >= 200 ? 4 : 3;
        if (_hsEl) _hsEl.textContent = '3성급+ 참고가격';
        if (_hkEl) _hkEl.textContent = budget >= 200 ? '예약 시 4성급 필터 적용' : '예약 시 3-4성급 필터 적용';
      } else {
        if (_hsEl) _hsEl.textContent = '3성급+ 참고가격';
        if (_hkEl) _hkEl.textContent = '예약 시 최저가순 정렬';
      }
      // 기존 호텔 버튼 제거 후 예산별 링크로 재생성
      var _oldHBtn = hotelEl.querySelector('.tp-hotel-btn');
      if (_oldHBtn) _oldHBtn.remove();
      var _cdStarsLink = _isVipInChange ? 5 : (_isUnlimitedInChange || budget >= 120) ? 3 : 0;
      if (!_isVipInChange && budget >= 200) _cdStarsLink = 4;
      var _newHBtn = document.createElement('a');
      _newHBtn.href = window._makeBookingComLink ? window._makeBookingComLink(d.id, _cdStarsLink) : (d._hotelLink || '#');
      _newHBtn.target = '_blank';
      _newHBtn.rel = 'noopener noreferrer';
      _newHBtn.className = 'tp-book-btn tp-hotel-btn';
      _newHBtn.textContent = '숙소 예약하기 ›';
      hotelEl.appendChild(_newHBtn);
    }
  }

  // 여행지 변경 시 날씨 실시간 갱신 (디바운스로 중복 호출 방지)
  _addWeatherSk(); if (typeof fetchWeatherDebounced === 'function') fetchWeatherDebounced();
  // SEO: URL 및 메타 태그 자동 동기화
  if (typeof updateSeoUrlDebounced === 'function') updateSeoUrlDebounced();
}

function goHome() {
  // 홈화면 없음 — 모든 환경에서 검색 시트 오픈
  if (typeof openCvSearchSheet === 'function') openCvSearchSheet();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startSearch() {
  // 열려있는 모든 패널(날짜/지역/예산) 닫기
  document.querySelectorAll('.sb-panel.open').forEach(function (p) { p.classList.remove('open'); });
  // flatpickr 캘린더 닫기
  document.querySelectorAll('.flatpickr-calendar').forEach(function (c) { c.classList.remove('open'); });
  // 모바일 하프팝업이 열려있으면 자연스럽게 닫기
  if (window.innerWidth < 744) {
    var _sheet = document.getElementById('cv-search-sheet');
    if (_sheet && _sheet.classList.contains('open')) {
      _sheet.classList.remove('open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }
  var budgetVal = document.getElementById('budget-input-home').value;
  // Default to cheapest if no budget selected
  if (!budgetVal) {
    budgetVal = 'unlimited';
    var budgetInput = document.getElementById('budget-input-home');
    if (budgetInput) budgetInput.value = 'unlimited';
    var sbBudget = document.getElementById('sb-budget-display');
    if (sbBudget) { sbBudget.textContent = '상관없음'; sbBudget.classList.add('filled'); }
  }
  // If no date selected, auto-apply "언제든지"
  var dateEl = document.getElementById('home-date-value');
  var dateVal = dateEl ? dateEl.textContent : '';
  var isFlexDate = false;
  if (!dateVal || dateVal === '날짜선택' || !dateVal.includes(' – ')) {
    var now = new Date();
    var dep = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var ret = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);
    var d1 = (dep.getMonth() + 1) + '월 ' + dep.getDate() + '일';
    var d2 = (ret.getMonth() + 1) + '월 ' + ret.getDate() + '일';
    dateVal = d1 + ' – ' + d2;
    if (dateEl) dateEl.textContent = dateVal;
    isFlexDate = true;
    // Show "언제든지" in home search bar
    var sbDate = document.getElementById('sb-date-display');
    if (sbDate) { sbDate.textContent = '날짜 선택'; sbDate.classList.remove('filled'); }
  }
  // Region: show "어디든지" if none selected
  var selectedReg = window.selectedRegion || '';
  var regionLabel = selectedReg ? document.getElementById('region-display').textContent : '전체 지역';

  document.getElementById('home-view').style.display = 'none';
  document.getElementById('compare-view').style.display = 'block';
  // Sync budget and date to compare view
  var cSel = document.getElementById('budget-input-compare');
  if (cSel) cSel.value = budgetVal;
  // Sync compare date segment display
  var cDateSeg = document.getElementById('date-seg-c');
  if (cDateSeg) {
    var valEl = cDateSeg.querySelector('.sb-val');
    if (valEl) {
      valEl.textContent = isFlexDate ? '날짜 선택' : dateVal;
      valEl.classList.add('filled');
    }
  }
  // Sync compare region display
  var cRegion = document.getElementById('region-display-c');
  if (cRegion) {
    cRegion.textContent = regionLabel;
    cRegion.classList.add('filled');
  }
  // Sync compare traveler display
  var cTravDisplay = document.getElementById('sb-traveler-display-c');
  if (cTravDisplay) {
    cTravDisplay.textContent = document.getElementById('sb-traveler-display').textContent;
    cTravDisplay.classList.add('filled');
  }
  // Sync compare budget display
  var cBudgetDisplay = document.getElementById('sb-budget-display-c');
  if (cBudgetDisplay) {
    var labels = { 'cheapest': '최저가', '120': '120만원 이내', '200': '200만원 이내', '300': '250만원 이상', 'unlimited': '상관없음' };
    var bLabel = labels[budgetVal] || '상관없음';
    cBudgetDisplay.textContent = bLabel;
    cBudgetDisplay.classList.add('filled');
  }
  updateResultsByFilters();
  window.scrollTo(0, 0);
  // 비교뷰 표시 후 실시간 날씨 갱신 (디바운스로 중복 호출 방지)
  _addWeatherSk(); if (typeof fetchWeatherDebounced === 'function') fetchWeatherDebounced();
  // 태블릿·모바일에서는 스크롤 자동 팝업 비활성화
  if (window.innerWidth > 1068) {
    _initWizardScrollTrigger();
  }
  // 검색 후 배지: 지역+예산 디폴트=2, 날짜 선택 시=3
  if (window.innerWidth <= 1068) {
    var badge = document.getElementById('wiz-launcher-badge');
    if (badge) {
      var bCount = 2; // 지역(어디든지) + 예산(상관없음) 항상 포함
      var hasDate = !window._isAutoDate && dateVal && dateVal.includes(' \u2013 ');
      var hasFlex = (window._cvFlexMonth != null) || (window._cvFlexDuration != null);
      if (hasDate || hasFlex) bCount = 3;
      badge.textContent = bCount + '/3';
      badge.style.display = 'inline-block';
    }
  }
  // SEO: URL 및 메타 태그 자동 동기화
  if (typeof updateSeoUrlDebounced === 'function') updateSeoUrlDebounced();
}

// ── MOBILE: Apple-style compare column shift (CSS transform) ──
const _ms = { cur: 0, max: 0, ready: false };

function initMobileScrollSync() {
  if (window.innerWidth > 1068) {
    document.documentElement.style.setProperty('--compare-offset', '0px');
    return;
  }

  const hint = document.getElementById('mobile-swipe-hint');
  const dotsWrap = document.getElementById('scroll-dots');

  // Count visible destination columns
  let colCount = 0;
  for (let i = 0; i < 3; i++) {
    const el = document.getElementById('col-' + i);
    if (el && el.style.display !== 'none') colCount++;
  }

  _ms.max = colCount >= 3 ? 1 : 0;
  _ms.cur = 0;
  document.documentElement.style.setProperty('--compare-offset', '0px');
  document.querySelectorAll('.scroll-dot').forEach((d, i) => d.classList.toggle('active', i === 0));

  if (hint) hint.style.display = 'none';
  // scroll-dots 제거됨 - 항상 숨김
  if (dotsWrap) dotsWrap.style.display = 'none';
  return; // 이하 dots 로직 불필요

  if (_ms.ready) {
    // Re-attach dot click listeners even if already initialized (count may have changed)
    document.querySelectorAll('.scroll-dot').forEach(dot => {
      dot.addEventListener('click', () => applySnap(parseInt(dot.dataset.idx)));
    });
    return;
  }
  _ms.ready = true;

  const compBody = document.getElementById('comparison-body');
  if (!compBody) return;

  let tx = 0, ty = 0;

  function applySnap(n) {
    n = Math.max(0, Math.min(_ms.max, n));
    _ms.cur = n;
    if (n === 0) {
      document.documentElement.style.setProperty('--compare-offset', '0px');
    } else {
      const col0 = document.getElementById('col-0');
      const offset = col0 ? -(col0.getBoundingClientRect().width + 12) : -50 * window.innerWidth / 100;
      document.documentElement.style.setProperty('--compare-offset', offset + 'px');
    }
    document.querySelectorAll('.scroll-dot').forEach((d, i) => d.classList.toggle('active', i === n));
    if (n > 0 && hint) hint.style.display = 'none';
    // Sync sel-grid scroll
    const sg = document.querySelector('.sel-grid');
    if (sg) {
      const card = sg.querySelector('.sel-card');
      sg.scrollTo({ left: n * ((card ? card.offsetWidth : 0) + 8), behavior: 'smooth' });
    }
  }

  compBody.addEventListener('touchstart', e => {
    tx = e.touches[0].clientX;
    ty = e.touches[0].clientY;
  }, { passive: true });

  compBody.addEventListener('touchend', e => {
    const dx = tx - e.changedTouches[0].clientX;
    const dy = ty - e.changedTouches[0].clientY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      applySnap(dx > 0 ? _ms.cur + 1 : _ms.cur - 1);
    }
  }, { passive: true });

  document.querySelectorAll('.scroll-dot').forEach(dot => {
    dot.addEventListener('click', () => applySnap(parseInt(dot.dataset.idx)));
  });
}

refreshButtonStates();
// URL 파라미터로 공유된 여행지 자동 표시
var _sharedLoaded = false;
(function loadSharedDestinations() {
  var params = new URLSearchParams(location.search);
  var dParam = params.get('d');
  if (!dParam) return;

  var keys = dParam.split(',');
  var idxArr = keys.map(function (k) {
    if (/^\d+$/.test(k)) return parseInt(k, 10);
    for (var i = 0; i < v1_0_9_DEST_DATA.length; i++) {
      if (v1_0_9_DEST_DATA[i].id === k) return i;
    }
    return -1;
  }).filter(function (v) { return v >= 0; });
  if (idxArr.length === 0) return;

  _sharedLoaded = true;

  // 검색 조건 복원
  var regionParam = params.get('region');
  var datesParam = params.get('dates');
  var budgetParam = params.get('budget');

  // setTimeout으로 모든 초기화 완료 후 적용
  setTimeout(function () {
    // 비교뷰 표시
    var hv = document.getElementById('home-view');
    var cv = document.getElementById('compare-view');
    if (hv) hv.style.display = 'none';
    if (cv) cv.style.display = 'block';
    var cb = document.getElementById('comparison-body');
    if (cb) cb.style.display = 'block';

    // 검색 조건 UI 복원
    if (regionParam) {
      var rd = document.getElementById('region-display');
      var rdc = document.getElementById('region-display-c');
      if (rd) { rd.textContent = regionParam; rd.classList.add('filled'); }
      if (rdc) { rdc.textContent = regionParam; rdc.classList.add('filled'); }
    }
    if (datesParam) {
      var dd = document.getElementById('sb-date-display');
      var ddc = document.getElementById('sb-date-display-c');
      var hdv = document.getElementById('home-date-value');
      if (dd) { dd.textContent = datesParam; dd.classList.add('filled'); }
      if (ddc) { ddc.textContent = datesParam; ddc.classList.add('filled'); }
      if (hdv) hdv.textContent = datesParam;
      window._isAutoDate = false;
    }
    if (budgetParam) {
      var b1 = document.getElementById('budget-input-home');
      var b2 = document.getElementById('budget-input-compare');
      if (b1) b1.value = budgetParam;
      if (b2) b2.value = budgetParam;
      var budgetLabels = { '120': '120만원 이내', '200': '200만원 이내', '300': '250만원 이상', 'cheapest': '최저가' };
      var bl = budgetLabels[budgetParam] || budgetParam + '만원 이내';
      var bd = document.getElementById('sb-budget-display');
      var bdc = document.getElementById('sb-budget-display-c');
      if (bd) { bd.textContent = bl; bd.classList.add('filled'); }
      if (bdc) { bdc.textContent = bl; bdc.classList.add('filled'); }
    }

    // 여행지 적용
    var budget = budgetParam ? (budgetParam === 'unlimited' ? 9999 : budgetParam === 'cheapest' ? 40 : (parseInt(budgetParam) || 120)) : 120;
    var days = 5;
    if (datesParam && datesParam.includes(' – ')) {
      try {
        var parts = datesParam.split(' – ');
        var d1p = parts[0].split('월 ');
        var d2p = parts[1].split('월 ');
        var yr = new Date().getFullYear();
        var m1 = parseInt(d1p[0]) - 1, m2 = parseInt(d2p[0]) - 1;
        var dt1 = new Date(yr, m1, parseInt(d1p[1].replace('일', '')));
        var dt2 = new Date(m2 < m1 ? yr + 1 : yr, m2, parseInt(d2p[1].replace('일', '')));
        days = Math.ceil((dt2 - dt1) / (1000 * 60 * 60 * 24)) + 1;
        if (days <= 0) days = 5;
      } catch (e) { }
    }

    for (var ci = 0; ci < Math.min(idxArr.length, 3); ci++) {
      if (idxArr[ci] >= 0 && v1_0_9_DEST_DATA[idxArr[ci]]) {
        try {
          updateColumn(ci, idxArr[ci], budget, days);
          var sel = document.getElementById('sel' + ci);
          var selF = document.getElementById('sel' + ci + '-fixed');
          if (sel) sel.value = String(idxArr[ci]);
          if (selF) selF.value = String(idxArr[ci]);
        } catch (e) { console.error('[Share] error col=' + ci, e); }
      }
    }
    if (typeof syncAllDestDdLabels === 'function') syncAllDestDdLabels();
    // 날씨 데이터 fetch
    _addWeatherSk(); if (typeof fetchWeatherDebounced === 'function') fetchWeatherDebounced();
    // SEO: 공유 링크 진입 시 메타 태그 설정
    if (typeof _updateSeoUrl === 'function') _updateSeoUrl();

    // 스냅샷 가격 적용 (공유 시 캡처된 원본 가격)
    var snapParam = params.get('snap');
    var badgesParam = params.get('badges');
    if (snapParam) {
      var colSnaps = decodeURIComponent(snapParam).split(';;');
      for (var si = 0; si < Math.min(colSnaps.length, 3); si++) {
        var parts = colSnaps[si].split('|');
        // parts: [total, air, airKicker, airSub, hotel, hotelKicker, hotelSub]
        if (parts[0]) {
          var te = document.getElementById('total-' + si);
          if (te) { var tm = te.querySelector('.main'); if (tm) { tm.textContent = parts[0]; te.classList.remove('sk'); } }
        }
        if (parts[1]) {
          var ae = document.getElementById('air-' + si);
          if (ae) {
            var am = ae.querySelector('.main'); if (am && parts[1]) am.textContent = parts[1];
            if (parts[2]) { var ak = ae.querySelector('.kicker'); if (ak) ak.textContent = parts[2]; }
            if (parts[3]) { var asb = ae.querySelector('.sub'); if (asb) asb.textContent = parts[3]; }
          }
        }
        if (parts[4]) {
          var he = document.getElementById('hotel-' + si);
          if (he) {
            var hm = he.querySelector('.main'); if (hm) hm.textContent = parts[4];
            if (parts[5]) { var hk = he.querySelector('.kicker'); if (hk) hk.textContent = parts[5]; }
            if (parts[6]) { var hsb = he.querySelector('.sub'); if (hsb) hsb.textContent = parts[6]; }
          }
        }
      }
    }
    // 뱃지 스냅샷 적용
    if (badgesParam) {
      var bArr = badgesParam.split(',');
      for (var bi = 0; bi < 3; bi++) {
        var bb = document.getElementById('best-badge-' + bi);
        var lb = document.getElementById('low-badge-' + bi);
        if (bb) bb.classList.remove('visible');
        if (lb) lb.classList.remove('visible');
      }
      for (var bj = 0; bj < Math.min(bArr.length, 3); bj++) {
        if (bArr[bj].indexOf('R') >= 0) {
          var bb2 = document.getElementById('best-badge-' + bj);
          if (bb2) bb2.classList.add('visible');
        }
        if (bArr[bj].indexOf('L') >= 0) {
          var lb2 = document.getElementById('low-badge-' + bj);
          if (lb2) lb2.classList.add('visible');
        }
      }
    }

    // 실시간 데이터 변경 감지 → 알림
    if (snapParam) {
      var _snapCheckCount = 0;
      var _snapChecker = setInterval(function () {
        _snapCheckCount++;
        if (_snapCheckCount > 15) { clearInterval(_snapChecker); return; } // 최대 15초
        // TP Worker 데이터 확인
        var anyTpReady = false;
        for (var ci = 0; ci < Math.min(idxArr.length, 3); ci++) {
          var dest = v1_0_9_DEST_DATA[idxArr[ci]];
          if (dest && dest._tpLink) { anyTpReady = true; break; }
        }
        if (!anyTpReady) return; // 아직 로드 안 됨
        clearInterval(_snapChecker);

        // 현재 스냅샷 가격 vs 실시간 가격 비교
        var changed = false;
        var _isVip = budget >= 300 && budget < 9000;
        for (var ci2 = 0; ci2 < Math.min(idxArr.length, 3); ci2++) {
          var dest2 = v1_0_9_DEST_DATA[idxArr[ci2]];
          if (!dest2) continue;
          var liveAir = _isVip ? (dest2._vipAirfare || dest2.airfare) : dest2.airfare;
          if (!liveAir) continue;
          var curAirEl = document.getElementById('air-' + ci2);
          var curAirText = curAirEl ? (curAirEl.querySelector('.main') || {}).textContent || '' : '';
          if (liveAir && curAirText && liveAir !== curAirText) {
            changed = true; break;
          }
        }
        if (changed) {
          // 업데이트 알림 토스트
          var toastEl = document.createElement('div');
          toastEl.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:99999;background:#fff;color:#1d1d1f;padding:20px 24px;border-radius:16px;font-size:14px;display:flex;align-items:center;gap:16px;box-shadow:0 8px 32px rgba(0,0,0,.12);max-width:90vw;border:1px solid rgba(0,0,0,.06);';
          toastEl.innerHTML = '<span style="font-weight:500;line-height:1.4">항공·숙박 가격이 업데이트되었습니다</span><button style="background:#000;color:#fff;border:none;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;letter-spacing:-0.2px">최신 가격 보기</button><button style="background:transparent;color:#aaa;border:none;padding:6px 8px;font-size:16px;cursor:pointer;line-height:1;flex-shrink:0">✕</button>';
          document.body.appendChild(toastEl);
          // 최신 가격 보기 버튼
          toastEl.querySelectorAll('button')[0].onclick = function () {
            // 실시간 API 데이터 있으면 DOM 업데이트
            var updated = false;
            for (var u = 0; u < Math.min(idxArr.length, 3); u++) {
              var d = v1_0_9_DEST_DATA[idxArr[u]];
              if (!d || !d._tpLink) continue;
              var ap = _isVip ? (d._vipAirfare || d.airfare) : d.airfare;
              var asLabel = _isVip ? '비즈니스 왕복' : '왕복 항공권';
              var akLabel = _isVip ? '비즈니스 · 인천 출발' : '이코노미 · 인천 출발';
              if (ap) {
                var ael = document.getElementById('air-' + u);
                if (ael) {
                  var m = ael.querySelector('.main'); if (m && d._airfareKRW) m.textContent = Math.round(d._airfareKRW / 10000) + '만원~';
                  var s = ael.querySelector('.sub'); if (s) s.textContent = asLabel;
                  var k = ael.querySelector('.kicker'); if (k) k.textContent = akLabel;
                }
              }
              var hp = _isVip ? (d._vipHotelPrice || d._hotelPrice) : d._hotelPrice;
              var hl = _isVip ? (d._vipHotelLink || d._hotelLink) : d._hotelLink;
              if (hp && hl) {
                var hel = document.getElementById('hotel-' + u);
                if (hel) {
                  var hm = hel.querySelector('.main'); if (hm) hm.textContent = hp;
                  var hs = hel.querySelector('.sub'); if (hs) hs.textContent = _isVip ? '프리미엄 1박 기준' : '1박 기준';
                }
              }
              updated = true;
            }
            // 실시간 데이터 없어도 항상 토스트 닫기
            toastEl.remove();
          };
          // 닫기 버튼
          toastEl.querySelectorAll('button')[1].onclick = function () { toastEl.remove(); };
          // 15초 후 자동 닫기
          setTimeout(function () { if (toastEl.parentNode) toastEl.remove(); }, 15000);
        }
      }, 1000);
    }
  }, 500);
})();

// Do NOT call updateResultsByFilters() on page load — only run it after user clicks Search

// ── SEO: URL ↔ 상태 동기화 + 동적 메타 태그 ──
// 비교 뷰에서 여행지가 바뀔 때마다 URL과 title/meta를 자동 업데이트
// → 구글/네이버가 "오사카 vs 방콕 여행 비교" 등의 키워드로 색인 가능
var _seoDebounceTimer = null;
var _currentDestIdx = _currentDestIdx || []; // 글로벌 여행지 인덱스 배열

function _updateSeoUrl() {
  // 비교 뷰가 표시 중인지 확인
  var cv = document.getElementById('compare-view');
  if (!cv || cv.style.display === 'none') return;

  // 현재 표시 중인 여행지 ID 수집
  var ids = [];
  var names = [];
  for (var i = 0; i < 3; i++) {
    var sel = document.getElementById('sel' + i);
    if (!sel) continue;
    var idx = parseInt(sel.value);
    var col = document.getElementById('col-' + i);
    if (col && col.style.display === 'none') continue;
    if (!isNaN(idx) && v1_0_9_DEST_DATA[idx]) {
      ids.push(v1_0_9_DEST_DATA[idx].id);
      // 순수 도시명 추출
      var name = v1_0_9_DEST_DATA[idx].name;
      var city = name.includes(' · ') ? name.split(' · ')[1].trim() : name.replace(/\s*\([^)]+\)\s*$/, '').trim();
      names.push(city);
    }
  }
  if (ids.length === 0) return;

  // URL 파라미터 구성
  var params = new URLSearchParams();
  params.set('d', ids.join(','));

  // 예산 (기본값 아닐 때만)
  var b1 = document.getElementById('budget-input-home');
  var b2 = document.getElementById('budget-input-compare');
  var budgetVal = (b2 && b2.value) ? b2.value : (b1 ? b1.value : '');
  if (budgetVal && budgetVal !== 'unlimited') {
    params.set('budget', budgetVal);
  }

  // 날짜 (사용자가 직접 선택한 경우만)
  if (!window._isAutoDate) {
    var dateEl = document.getElementById('home-date-value');
    var dateVal = dateEl ? dateEl.textContent : '';
    if (dateVal && dateVal !== '날짜선택' && dateVal.includes(' – ')) {
      params.set('dates', dateVal);
    }
  }

  // 지역
  var regionEl = document.getElementById('region-display');
  if (regionEl && regionEl.textContent && regionEl.textContent !== '전체 지역') {
    params.set('region', regionEl.textContent);
  }

  // URL 업데이트 (replaceState — 히스토리 쌓지 않음)
  var newUrl = location.pathname + '?' + params.toString();
  if (location.search !== '?' + params.toString()) {
    history.replaceState(null, '', newUrl);
  }

  // ── 동적 SEO 메타 태그 업데이트 ──
  var titleText, descText;

  if (names.length === 1) {
    titleText = names[0] + ' 여행 정보 — odiga';
    descText = names[0] + '의 항공·숙박·날씨·안전 정보를 한눈에 확인하세요.';
  } else if (names.length === 2) {
    titleText = names[0] + ' vs ' + names[1] + ' 여행 비교 — odiga';
    descText = names[0] + '과(와) ' + names[1] + '의 항공·숙박·현지 비용을 비교해보세요.';
  } else {
    titleText = names.join(' vs ') + ' 여행 비교 — odiga';
    descText = names.join(', ') + ' 여행지의 항공·숙박·날씨·안전을 한눈에 비교하세요.';
  }

  // 예산 라벨 추가
  var budgetLabels = { 'cheapest': '최저가', '120': '120만원', '200': '200만원', '300': '250만원+' };
  if (budgetVal && budgetLabels[budgetVal]) {
    descText += ' 예산 ' + budgetLabels[budgetVal] + ' 기준.';
  }

  // title 업데이트
  document.title = titleText;

  // meta description
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', descText);

  // OG tags
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', titleText);
  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', descText);
  var ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', 'https://odiga.kr/' + '?' + params.toString());

  // Twitter tags
  var twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', titleText);
  var twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', descText);
}

// 디바운스 래퍼 — 드롭다운 빠른 연타 시 URL 과부하 방지
function updateSeoUrlDebounced() {
  clearTimeout(_seoDebounceTimer);
  _seoDebounceTimer = setTimeout(_updateSeoUrl, 300);
}

// ── 지역 필터 & 국가 다양성 데이터 ──
// ── 휴양지 (cross-cutting: 기존 지역 분류와 중복 허용) ──
var DEST_RESORT = new Set([
  'guam', 'hawaii', 'sydney',           // 태평양·오세아니아
  'bali', 'cebu', 'boracay', 'phuket',  // 동남아 해변
  'kohsamui', 'maldives', 'nhatrang',   // 동남아 리조트
  'phuquoc', 'kotakinabalu',            // 동남아 섬·자연
  'okinawa', 'miyakojima',              // 일본 해변
  'saipan', 'palawan', 'sanya'           // 신규 휴양지
]);
window.selectedRegion = '';

// ── 필수 앱 & 출입국 준비 데이터 ──
// 앱 아이콘: 공식 CDN / Google Play 아이콘
var APP_ICONS = {
  gmaps: 'https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THqqu_RaCpAM_A=s256',
  uber: 'https://play-lh.googleusercontent.com/3FPiBoQAYuOY3YwAqHTYvBoqEZxklJc7rrVfqYkbwJY-GHeBV8iBFdXBrPxSCMRYfU0=s256',
  gtransl: 'https://play-lh.googleusercontent.com/ZrNeuKthBirZN7rrXPN1JmUbaG8ICy3kZSHt_B5CqxQFYFxOVRmlcwcVTQdWvexRCw=s256',
  revolut: 'https://play-lh.googleusercontent.com/9FXGR4zMPXbOxU86KX_PqOyqNGQgMBv5gHO7AYxZVsz8DU4rN2eiP4VJDOVSLpH6TcA=s256',
  grab: 'https://play-lh.googleusercontent.com/MEjVQ2v6OPB4EMxYKTFXBhG_BI96fUFMRwXHMJNqF8JHRqbgyCRdFiKy_FHuFR3qCA=s256',
  momo: 'https://play-lh.googleusercontent.com/oNdH8XuqM-PN0-iCeAtFCzHdBrZ_jWjhXFcYPFNbHnW_9JYiMrgxjBpjpFCBTLcRSQ=s256',
  kakaomaps: 'https://play-lh.googleusercontent.com/SaqIubcAXuEzFEiB4IUkqhLmN60nA1DLBrTOoIp1_7pFHaZf3ry6N47GTQlGUO9E1Zw=s256',
  kakaot: 'https://play-lh.googleusercontent.com/5OcmO28hkBMEbqmzIFWoqWs5i2kp5w6m8dALJOugjFzQCp25_lgLFHMTFioJL1Vkb0M=s256',
  line: 'https://play-lh.googleusercontent.com/OBF6vbNzJxAXt7YPU9uLzEhHqH4SHlNNBJpJUEqBc1-RbJ_oBrNZRHXTBl39GJnFkg=s256',
  easycard: 'https://play-lh.googleusercontent.com/2E7R4VEh44N0gJDFq4UiN2uHTEPyAnFqEb_iGrXZPdKqGWCYx1c3O4K5g4cTr3KPxPA=s256',
  hsrtwn: 'https://play-lh.googleusercontent.com/2IDCIqMK0yIvzUGjHfINMR7k5bVH5W5C3GiEBCf1VHKK0uMn4mGOZUF3bkIlxm29GQ=s256',
  suica: 'https://play-lh.googleusercontent.com/fBMLXMuJH7-4RcGTYuVLLuiepHzNcWQ-6k4Fvn_dD3hK6lJw9vlD_k6CL7nkMzZmqg=s256',
  jorudan: 'https://play-lh.googleusercontent.com/lHVBCMdY4bMJpLPluBQQpnzKxoHfQM1xaqwnVQ0Hq0mJMWKhq4ZQGbMPnK2ULKdHkC4=s256',
  paypay: 'https://play-lh.googleusercontent.com/JqbWzwnphKUX_IQRRhSDZSKe-8L0y4iJvwv7ZkpX_ZnOXRSbHJb-PoZxEfWjJ1UwFw=s256',
  truemoney: 'https://play-lh.googleusercontent.com/yL5E5SxgfbulRr2B6kVYqiT_QIlZhj1_F-mIz9bEr2OVj9yrJMJV4kSiUBv_Ow0Q7g=s256',
  gojek: 'https://play-lh.googleusercontent.com/lVHSHiWFBE-4DjKzA8Mv15dGMJo9IqzKBvXmexKMKpAvVJJW9DVajAzHfGcKzGnz6A=s256',
  gcash: 'https://play-lh.googleusercontent.com/R1ZLyDRLdENLa8J5M3m6Y6DnFm5oJRa2YHpvb-J1H7g5E7bE1AxVJNL16mipOwS_Fzb8=s256',
  simplygo: 'https://play-lh.googleusercontent.com/GRMdCEJxeHHSGbKCilGxVNH9-Q3g9Ee7z1wWW1aMxE-bm-4L4w4RDyPirYGCJ3K1Nw=s256',
  paynow: 'https://play-lh.googleusercontent.com/V6nT1SNhKLbBDnMk72dA4mruCRlHEXiNSB6a7nLvyf1ELqpKi3mLJY5FmOEjFvTw_Q=s256',
  bolt: 'https://play-lh.googleusercontent.com/e6OkJ7bpBFAuqjWm5JuYv5hJevd_b5OC5dDhEupYOv0m4VHON2vVxipQpwqZ8mj3m2Y=s256',
  alipay: 'https://play-lh.googleusercontent.com/oGy4IfL4W8V8BNNV-5qe7fHJV4FU-GCbH5GqLKY2yYCiVP_cxE3K5CRR9wP0qLRpMw=s256',
};
var DEST_APPS = {
  lisbon: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🚖', name: 'Uber', cat: '택시', desc: '리스본 시내 이동에 편리', iconUrl: APP_ICONS.uber },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '유로화 환전 없이 현지 결제 가능', iconUrl: APP_ICONS.revolut },
    { icon: '🚇', name: 'Lisboa Viva', cat: '대중교통', desc: '리스본 지하철·트램 교통카드 앱', iconUrl: APP_ICONS.gmaps },
  ],
  danang: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시·배달', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: APP_ICONS.grab },
    { icon: '💳', name: 'MoMo', cat: 'QR결제', desc: '베트남 대표 간편결제 앱', iconUrl: APP_ICONS.momo },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '베트남어 카메라 번역 유용', iconUrl: APP_ICONS.gtransl },
  ],
  jeju: [
    { icon: '🗺️', name: '카카오맵', cat: '지도', desc: '제주 버스·택시 경로 검색', iconUrl: APP_ICONS.kakaomaps },
    { icon: '🚖', name: '카카오T', cat: '택시', desc: '제주 택시 앱 호출', iconUrl: APP_ICONS.kakaot },
    { icon: '🚌', name: '제주버스정보', cat: '버스', desc: '제주 간선·지선버스 실시간 정보', iconUrl: APP_ICONS.gmaps },
  ],
  taipei: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '💳', name: 'EasyCard 앱', cat: '교통카드', desc: '유유카드 잔액 확인·충전', iconUrl: APP_ICONS.easycard },
    { icon: '💬', name: 'LINE', cat: '메신저', desc: '대만 현지인과 소통하는 주요 앱', iconUrl: APP_ICONS.line },
    { icon: '🚄', name: 'Taiwan HSR', cat: '고속철', desc: '타이완 고속철(高鐵) 예약', iconUrl: APP_ICONS.hsrtwn },
    { icon: '🛵', name: 'Uber', cat: '택시', desc: '타이베이 시내 택시 이동', iconUrl: APP_ICONS.uber },
  ],
  osaka: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '💳', name: 'Suica / ICOCA', cat: '교통카드', desc: '전철·버스 탑승 + 편의점 결제', iconUrl: APP_ICONS.suica },
    { icon: '🔄', name: '乗換案内', cat: '환승 안내', desc: '전철 환승 최적 경로 검색', iconUrl: APP_ICONS.jorudan },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'PayPay', cat: 'QR결제', desc: '편의점·음식점 QR 결제', iconUrl: APP_ICONS.paypay },
  ],
  tokyo: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '💳', name: 'Suica / PASMO', cat: '교통카드', desc: '전철·버스 탑승 + 편의점 결제', iconUrl: APP_ICONS.suica },
    { icon: '🔄', name: '乗換案内', cat: '환승 안내', desc: '전철 환승 최적 경로 검색', iconUrl: APP_ICONS.jorudan },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'PayPay', cat: 'QR결제', desc: '편의점·음식점 QR 결제', iconUrl: APP_ICONS.paypay },
  ],
  bangkok: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시·배달', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: APP_ICONS.grab },
    { icon: '🚖', name: 'Bolt', cat: '택시', desc: 'Grab보다 저렴한 택시 앱', iconUrl: APP_ICONS.bolt },
    { icon: '💳', name: 'TrueMoney Wallet', cat: 'QR결제', desc: '편의점·식당 QR 결제', iconUrl: APP_ICONS.truemoney },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '태국어 카메라 번역 유용', iconUrl: APP_ICONS.gtransl },
  ],
  bali: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Gojek', cat: '택시·배달', desc: '발리 필수 앱, 오토바이 택시·음식 배달', iconUrl: APP_ICONS.gojek },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: 'Gojek과 함께 이중으로 가격 비교 추천', iconUrl: APP_ICONS.grab },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '인도네시아어·영어 번역', iconUrl: APP_ICONS.gtransl },
  ],
  chiangmai: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: APP_ICONS.grab },
    { icon: '💳', name: 'TrueMoney Wallet', cat: 'QR결제', desc: '편의점·카페 QR 결제', iconUrl: APP_ICONS.truemoney },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '태국어 카메라 번역 유용', iconUrl: APP_ICONS.gtransl },
  ],
  singapore: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: '싱가포르 주요 이동 수단', iconUrl: APP_ICONS.grab },
    { icon: '💳', name: 'SimplyGo', cat: '교통카드', desc: 'MRT·버스 비접촉 결제 (신용카드 등록)', iconUrl: APP_ICONS.simplygo },
    { icon: '💳', name: 'PayNow / PayLah!', cat: 'QR결제', desc: '싱가포르 QR 결제 (식당·마켓)', iconUrl: APP_ICONS.paynow },
  ],
  cebu: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: APP_ICONS.grab },
    { icon: '💳', name: 'GCash', cat: '현지결제', desc: '필리핀 간편결제, 현지인 필수 앱', iconUrl: APP_ICONS.gcash },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '필리핀어·영어 번역', iconUrl: APP_ICONS.gtransl },
  ],
  nhatrang: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🛵', name: 'Grab', cat: '택시·배달', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://grab.com&size=64' },
    { icon: '💳', name: 'MoMo / ZaloPay', cat: 'QR결제', desc: '현지 QR 결제', iconUrl: APP_ICONS.momo },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '베트남어 카메라 번역 유용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
  ],
  fukuoka: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '💳', name: 'Suica / SUGOCA', cat: '교통카드', desc: '후쿠오카 지하철·버스 탑승', iconUrl: APP_ICONS.suica },
    { icon: '🔄', name: '乗換案内', cat: '환승 안내', desc: '전철 환승 최적 경로 검색', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://jorudan.co.jp&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
    { icon: '💳', name: 'PayPay', cat: 'QR결제', desc: '편의점·식당 QR 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://paypay.ne.jp&size=64' },
  ],
  sapporo: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '💳', name: 'Suica / SAPICA', cat: '교통카드', desc: '삿포로 지하철·버스 탑승', iconUrl: APP_ICONS.suica },
    { icon: '🔄', name: '乗換案内', cat: '환승 안내', desc: '전철 환승 최적 경로 검색', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://jorudan.co.jp&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
    { icon: '⛷️', name: 'Yahoo! 天気', cat: '날씨', desc: '삿포로 스키장 날씨·적설량 확인', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://weather.yahoo.co.jp&size=64' },
  ],
  okinawa: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '💳', name: 'Suica / OKICA', cat: '교통카드', desc: '모노레일(유이레일) 탑승', iconUrl: APP_ICONS.suica },
    { icon: '🚗', name: '타베로그', cat: '맛집', desc: '오키나와 현지 인기 식당 검색', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tabelog.com&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
    { icon: '💳', name: 'PayPay', cat: 'QR결제', desc: '편의점·식당 QR 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://paypay.ne.jp&size=64' },
  ],
  kyoto: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '💳', name: 'Suica / ICOCA', cat: '교통카드', desc: '버스·지하철 탑승 + 편의점 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.jreast.co.jp/suica&size=64' },
    { icon: '🔄', name: '乗換案内', cat: '환승 안내', desc: '전철 환승 최적 경로 검색', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://jorudan.co.jp&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
    { icon: '💳', name: 'PayPay', cat: 'QR결제', desc: '편의점·음식점 QR 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://paypay.ne.jp&size=64' },
  ],
  miyakojima: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수 · 렌터카 내비 대용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🚗', name: '타베로그', cat: '맛집', desc: '미야코지마 현지 식당·카페 검색', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tabelog.com&size=64' },
    { icon: '🌊', name: 'Waterlust', cat: '다이빙·스노클링', desc: '스노클링·다이빙 포인트 확인', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://waterlust.com&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
    { icon: '💳', name: 'PayPay', cat: 'QR결제', desc: '편의점·음식점 QR 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://paypay.ne.jp&size=64' },
  ],
  phuquoc: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🛵', name: 'Grab', cat: '택시·배달', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://grab.com&size=64' },
    { icon: '💳', name: 'MoMo / ZaloPay', cat: 'QR결제', desc: '현지 QR 결제', iconUrl: APP_ICONS.momo },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '베트남어 카메라 번역 유용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
  ],
  hochiminh: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🛵', name: 'Grab', cat: '택시·배달', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://grab.com&size=64' },
    { icon: '💳', name: 'MoMo', cat: 'QR결제', desc: '베트남 대표 간편결제 앱', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://momo.vn&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '베트남어 카메라 번역 유용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
  ],
  hanoi: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🛵', name: 'Grab', cat: '택시·배달', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://grab.com&size=64' },
    { icon: '💳', name: 'ZaloPay', cat: 'QR결제', desc: '현지 QR 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://zalopay.vn&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '베트남어 카메라 번역 유용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
  ],
  boracay: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: '보라카이 현지 이동', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://grab.com&size=64' },
    { icon: '💳', name: 'GCash', cat: '현지결제', desc: '필리핀 간편결제, 현지 식당에서 사용', iconUrl: APP_ICONS.gcash },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '필리핀어·영어 번역', iconUrl: APP_ICONS.gtransl },
  ],
  phuket: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://grab.com&size=64' },
    { icon: '🚖', name: 'Bolt', cat: '택시', desc: 'Grab과 가격 비교 추천', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://bolt.eu&size=64' },
    { icon: '💳', name: 'TrueMoney Wallet', cat: 'QR결제', desc: '편의점·식당 QR 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://truemoney.com&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '태국어 카메라 번역 유용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
  ],
  hongkong: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '💳', name: 'Octopus (八達通)', cat: '교통카드', desc: 'MTR·버스·편의점 결제 필수 카드', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://octopus.com.hk&size=64' },
    { icon: '🚇', name: 'MTR Mobile', cat: '지하철', desc: '홍콩 MTR 노선·요금 검색', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mtr.com.hk&size=64' },
    { icon: '🚖', name: 'Uber', cat: '택시', desc: '홍콩 시내 택시 이동', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://uber.com&size=64' },
    { icon: '💳', name: 'Alipay HK', cat: 'QR결제', desc: '현지 QR 결제', iconUrl: APP_ICONS.alipay },
  ],
  guam: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🚖', name: 'Uber', cat: '택시', desc: '괌 주요 지역 이동 (제한적)', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://uber.com&size=64' },
    { icon: '🇺🇸', name: 'ESTA 공식 앱', cat: '입국', desc: '전자여행허가 신청 확인용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://esta.cbp.dhs.gov&size=64' },
    { icon: '🌺', name: 'Guam Visitors Bureau', cat: '여행정보', desc: '괌 관광지·이벤트 정보', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://visitguam.com&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '영어 통용 · 일본어·한국어 메뉴 카메라 번역 유용', iconUrl: APP_ICONS.gtransl },
  ],
  hawaii: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🚖', name: 'Uber / Lyft', cat: '택시', desc: '호놀룰루 시내 이동', iconUrl: APP_ICONS.uber },
    { icon: '🚌', name: 'DaBus2', cat: '버스', desc: '호놀룰루 시내버스 TheBus 실시간 정보', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://thebus.org&size=64' },
    { icon: '🇺🇸', name: 'ESTA 공식 앱', cat: '입국', desc: '전자여행허가 신청 확인용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://esta.cbp.dhs.gov&size=64' },
  ],
  paris: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🚇', name: 'RATP', cat: '대중교통', desc: '파리 지하철·버스·RER 실시간 정보', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.ratp.fr&size=64' },
    { icon: '🚖', name: 'Uber / Bolt', cat: '택시', desc: '파리 택시보다 저렴하게 이동', iconUrl: APP_ICONS.uber },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '프랑스어 카메라 번역 유용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '유로화 환전 없이 현지 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://revolut.com&size=64' },
  ],
  kualalumpur: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🛵', name: 'Grab', cat: '택시·배달', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://grab.com&size=64' },
    { icon: '💳', name: "Touch 'n Go eWallet", cat: '교통·결제', desc: '말레이시아 교통카드 겸 QR 결제 앱', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://touchngo.com.my&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '말레이어·중국어 번역', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
  ],
  maldives: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '섬 이동 전 오프라인 지도 저장', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '💬', name: 'WhatsApp', cat: '소통', desc: '리조트·수상 비행기 예약·문의 필수', iconSlug: 'whatsapp', iconBg: '#25D366', iconFg: 'ffffff' },
    { icon: '🏨', name: '리조트 자체 앱', cat: '리조트', desc: '각 리조트 전용 앱 (룸서비스·액티비티)' },
  ],
  sydney: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '💳', name: 'Opal Travel', cat: '교통카드', desc: '시드니 기차·버스·페리 교통카드 앱', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://opal.com.au&size=64' },
    { icon: '🚖', name: 'Uber / DiDi', cat: '택시', desc: '시드니 시내 이동, DiDi가 저렴', iconUrl: APP_ICONS.uber },
    { icon: '💳', name: 'Afterpay', cat: '결제', desc: '호주 선구매후결제 앱, 광범위하게 사용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://afterpay.com&size=64' },
  ],
  shanghai: [
    { icon: '💬', name: 'WeChat (微信)', cat: 'QR결제·메신저', desc: '중국 필수 앱, WeChat Pay로 모든 결제', iconSlug: 'wechat', iconBg: '#07C160', iconFg: 'ffffff' },
    { icon: '💳', name: 'Alipay (支付宝)', cat: 'QR결제', desc: 'WeChat Pay와 함께 중국 결제 양대산맥', iconSlug: 'alipay', iconBg: '#1677FF', iconFg: 'ffffff' },
    { icon: '🚖', name: 'DiDi (滴滴)', cat: '택시', desc: '중국판 우버, 샹하이 이동 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://didiglobal.com&size=64' },
    { icon: '🗺️', name: 'Baidu Maps (百度)', cat: '지도', desc: '중국 내 Google Maps 불가, 바이두 필수', iconSlug: 'baidu', iconBg: '#2932E1', iconFg: 'ffffff' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '중국어 카메라 번역 (VPN 필요)', iconUrl: APP_ICONS.gtransl },
    { icon: '🔒', name: 'VPN 앱', cat: '인터넷', desc: '구글·카카오 차단 → 출국 전 설치 필수', iconSlug: 'nordvpn', iconBg: '#4687FF', iconFg: 'ffffff' },
  ],
  barcelona: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=64' },
    { icon: '🚇', name: 'TMB (Barcelona Metro)', cat: '대중교통', desc: '바르셀로나 지하철·버스 노선 앱', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.tmb.cat&size=64' },
    { icon: '🚖', name: 'Uber / Bolt / Cabify', cat: '택시', desc: '바르셀로나 택시보다 저렴', iconUrl: APP_ICONS.uber },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '스페인어·카탈루냐어 번역', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=64' },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '유로화 환전 없이 현지 결제', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://revolut.com&size=64' },
  ],
  nagoya: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '💳', name: 'Suica / manaca', cat: '교통카드', desc: '지하철·버스 탑승 + 편의점 결제', iconUrl: APP_ICONS.suica },
    { icon: '🔄', name: '乗換案内', cat: '환승 안내', desc: '전철 환승 최적 경로 검색', iconUrl: APP_ICONS.jorudan },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '카메라 번역으로 메뉴판 즉시 번역', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'PayPay', cat: 'QR결제', desc: '편의점·음식점 QR 결제', iconUrl: APP_ICONS.paypay },
  ],
  siemreap: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: '씨엠립 시내 이동, 툭툭 대안', iconUrl: APP_ICONS.grab },
    { icon: '💵', name: 'PassApp', cat: '택시', desc: '캄보디아 현지 택시 앱 (Grab보다 저렴)', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://passapp.net&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '크메르어 번역 유용', iconUrl: APP_ICONS.gtransl },
  ],
  rome: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🚖', name: 'Uber / Bolt', cat: '택시', desc: '로마 택시보다 저렴하게 이동', iconUrl: APP_ICONS.uber },
    { icon: '🚇', name: 'Moovit', cat: '대중교통', desc: '로마 지하철·버스·트램 실시간 정보', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://moovitapp.com&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '이탈리아어 카메라 번역 유용', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '유로화 환전 없이 현지 결제', iconUrl: APP_ICONS.revolut },
  ],
  london: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🚇', name: 'TfL Go', cat: '대중교통', desc: '런던 지하철·버스 실시간 정보', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tfl.gov.uk&size=64' },
    { icon: '🚖', name: 'Uber', cat: '택시', desc: '런던 블랙캡 대안', iconUrl: APP_ICONS.uber },
    { icon: '💳', name: 'Oyster (Contactless)', cat: '교통카드', desc: '비접촉 결제로 런던 교통 이용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tfl.gov.uk&size=64' },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '파운드화 환전 없이 현지 결제', iconUrl: APP_ICONS.revolut },
  ],
  kotakinabalu: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시·배달', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: APP_ICONS.grab },
    { icon: '💳', name: "Touch 'n Go eWallet", cat: '교통·결제', desc: '말레이시아 교통카드 겸 QR 결제 앱', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://touchngo.com.my&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '말레이어·중국어 번역', iconUrl: APP_ICONS.gtransl },
  ],
  luangprabang: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수 · WiFi 제한적', iconUrl: APP_ICONS.gmaps },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '라오어 번역 유용', iconUrl: APP_ICONS.gtransl },
    { icon: '📱', name: 'Maps.me', cat: '오프라인 지도', desc: 'WiFi 없이 사용 가능한 오프라인 지도', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.me&size=64' },
    { icon: '💵', name: 'LOCA (라오스 택시)', cat: '택시', desc: '루앙프라방 현지 택시 앱 (제한적)', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://loca.la&size=64' },
  ],
  madrid: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🚇', name: 'Metro de Madrid', cat: '대중교통', desc: '마드리드 지하철 노선·요금 앱', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.metromadrid.es&size=64' },
    { icon: '🚖', name: 'Uber / Bolt / Cabify', cat: '택시', desc: '마드리드 택시보다 저렴', iconUrl: APP_ICONS.uber },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '스페인어 카메라 번역 유용', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '유로화 환전 없이 현지 결제', iconUrl: APP_ICONS.revolut },
  ],
  kohsamui: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: '현지 이동 필수 앱, 흥정 없이 정찰제', iconUrl: APP_ICONS.grab },
    { icon: '💳', name: 'TrueMoney Wallet', cat: 'QR결제', desc: '편의점·카페 QR 결제', iconUrl: APP_ICONS.truemoney },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '태국어 카메라 번역 유용', iconUrl: APP_ICONS.gtransl },
  ],
  interlaken: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🚄', name: 'SBB Mobile', cat: '기차', desc: '스위스 철도 시간표·예약 필수 앱' },
    { icon: '🎿', name: 'Jungfrau App', cat: '관광', desc: '융프라우 티켓·날씨·실시간 웹캠' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '독일어·프랑스어 번역', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '스위스 프랑(CHF) 환전 없이 결제', iconUrl: APP_ICONS.revolut },
  ],
  dubrovnik: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🚖', name: 'Uber / Bolt', cat: '택시', desc: '두브로브니크 시내 이동', iconUrl: APP_ICONS.uber },
    { icon: '🚌', name: 'Libertasdubrovnik', cat: '버스', desc: '두브로브니크 시내버스 앱', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://libertasdubrovnik.hr&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '크로아티아어 번역 유용', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '유로화 환전 없이 현지 결제', iconUrl: APP_ICONS.revolut },
  ],
  istanbul: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🚇', name: 'İstanbul Ulaşım', cat: '대중교통', desc: '이스탄불 버스·지하철·트램 실시간 앱', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://iett.istanbul&size=64' },
    { icon: '🚖', name: 'BiTaksi', cat: '택시', desc: '이스탄불 공식 택시 앱 · 바가지 방지', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://bitaksi.com&size=64' },
    { icon: '💳', name: 'İstanbulkart (HES)', cat: '교통카드', desc: '이스탄불 카드 — 지하철·버스·페리 통합 이용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://istanbulkart.istanbul&size=64' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '터키어 카메라 번역 유용', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'Revolut', cat: '환전·결제', desc: '리라(TRY) 환전 없이 현지 결제', iconUrl: APP_ICONS.revolut },
  ],
  macau: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 필수', iconUrl: APP_ICONS.gmaps },
    { icon: '🚌', name: '마카오 버스', cat: '교통', desc: '시내버스 노선 · 카지노 셔틀 정보' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '광둥어·포르투갈어 번역', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'Alipay HK', cat: 'QR결제', desc: '마카오 대부분의 상점 결제 가능', iconUrl: APP_ICONS.alipay },
  ],
  beijing: [
    { icon: '🗺️', name: '바이두 지도', cat: '지도', desc: '중국 내 Google Maps 대신 사용', iconSlug: 'baidu', iconBg: '#2932E1', iconFg: 'ffffff' },
    { icon: '💬', name: 'WeChat (微信)', cat: 'QR결제·메신저', desc: '위챗페이로 베이징 현지 결제 필수', iconSlug: 'wechat', iconBg: '#07C160', iconFg: 'ffffff' },
    { icon: '💳', name: '알리페이', cat: 'QR결제', desc: '중국 필수 결제 앱 (외국인 등록 필요)', iconSlug: 'alipay', iconBg: '#1677FF', iconFg: 'ffffff' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '중국어 카메라 번역 (VPN 필요)', iconUrl: APP_ICONS.gtransl },
    { icon: '🔐', name: 'VPN 앱', cat: '인터넷', desc: '중국 내 구글·카톡 접속 필수', iconSlug: 'nordvpn', iconBg: '#4687FF', iconFg: 'ffffff' },
  ],
  qingdao: [
    { icon: '🗺️', name: '바이두 지도', cat: '지도', desc: '중국 내 Google Maps 대신 사용', iconSlug: 'baidu', iconBg: '#2932E1', iconFg: 'ffffff' },
    { icon: '💬', name: 'WeChat (微信)', cat: 'QR결제·메신저', desc: '위챗페이로 칭다오 현지 결제 필수', iconSlug: 'wechat', iconBg: '#07C160', iconFg: 'ffffff' },
    { icon: '💳', name: '알리페이', cat: 'QR결제', desc: '중국 필수 결제 앱 (외국인 등록 필요)', iconSlug: 'alipay', iconBg: '#1677FF', iconFg: 'ffffff' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '중국어 카메라 번역 (VPN 필요)', iconUrl: APP_ICONS.gtransl },
    { icon: '🔐', name: 'VPN 앱', cat: '인터넷', desc: '중국 내 구글·카톡 접속 필수', iconSlug: 'nordvpn', iconBg: '#4687FF', iconFg: 'ffffff' },
  ],
  saipan: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 사전 다운로드 권장', iconUrl: APP_ICONS.gmaps },
    { icon: '🚖', name: 'Uber', cat: '택시', desc: '제한적이지만 사용 가능', iconUrl: APP_ICONS.uber },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '차모로어·일본어 번역 유용', iconUrl: APP_ICONS.gtransl },
    { icon: '💳', name: 'Revolut', cat: '결제', desc: '달러 수수료 없이 결제', iconUrl: APP_ICONS.revolut },
    { icon: '🇺🇸', name: 'ESTA 공식 앱', cat: '입국', desc: '전자여행허가 신청 확인용', iconUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://esta.cbp.dhs.gov&size=64' },
  ],
  palawan: [
    { icon: '🗺️', name: 'Google Maps', cat: '지도', desc: '오프라인 지도 필수 다운로드', iconUrl: APP_ICONS.gmaps },
    { icon: '🛵', name: 'Grab', cat: '택시', desc: '푸에르토 프린세사에서 사용 가능', iconUrl: APP_ICONS.grab },
    { icon: '💳', name: 'GCash', cat: 'QR결제', desc: '필리핀 대표 모바일 결제', iconUrl: APP_ICONS.gcash },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '영어 통용되지만 필리핀어 번역 유용', iconUrl: APP_ICONS.gtransl },
  ],
  sanya: [
    { icon: '🗺️', name: '바이두 지도', cat: '지도', desc: '중국 내 Google Maps 대신 사용', iconSlug: 'baidu', iconBg: '#2932E1', iconFg: 'ffffff' },
    { icon: '💬', name: 'WeChat (微信)', cat: 'QR결제·메신저', desc: '위챗페이로 삼아 현지 결제 필수', iconSlug: 'wechat', iconBg: '#07C160', iconFg: 'ffffff' },
    { icon: '💳', name: '알리페이', cat: 'QR결제', desc: '중국 필수 결제 앱 (외국인 등록 필요)', iconSlug: 'alipay', iconBg: '#1677FF', iconFg: 'ffffff' },
    { icon: '💬', name: 'Google 번역', cat: '번역', desc: '중국어 카메라 번역 (VPN 필요)', iconUrl: APP_ICONS.gtransl },
    { icon: '🔐', name: 'VPN 앱', cat: '인터넷', desc: '중국 내 구글·카톡 접속 필수', iconSlug: 'nordvpn', iconBg: '#4687FF', iconFg: 'ffffff' },
  ],
};

var DEST_FX_TIPS = {
  // currency, qr(bool), cashNeeded(bool), perPersonKRW, bestBank, airportInfo, tips[]
  _default: {
    bestBank: '하나은행 1등급 (온라인 90% 우대)',
    airport: '인천공항 1터미널 지하 1층·2터미널 2층 환전소',
    note: '출발 전 은행 앱으로 환전 예약 시 최대 90% 우대료 적용'
  },
  // ── 국내 ──
  korea: { currency: 'KRW (원화)', qr: true, cashPerDay: null, perPerson: null, cashNote: null, qrNote: '카카오페이·네이버페이 대부분 가맹점 가능 — 환전 불필요' },
  // ── 일본 ──
  japan: { currency: 'JPY (일본 엔)', qr: true, cashPerDay: '¥3,000–6,000', perPerson: '20–40만원', cashNote: '엔저로 지금이 환전 최적기', qrNote: 'PayPay로 편의점·체인 식당 QR 결제 가능 — 일부 현금만 받는 가게 있음' },
  // ── 대만 ──
  taiwan: { currency: 'TWD (대만달러)', qr: false, cashPerDay: 'NT$500–1,000', perPerson: '10–20만원', cashNote: '야시장·소규모 식당 현금 필수', qrNote: null },
  // ── 베트남 ──
  vietnam: { currency: 'VND (베트남 동)', qr: true, cashPerDay: '₫300,000–500,000', perPerson: '15–25만원', cashNote: '현지 ATM 수수료 유의', qrNote: 'MoMo·ZaloPay로 편의점·식당 QR 결제 가능' },
  // ── 태국 ──
  thailand: { currency: 'THB (태국 바트)', qr: true, cashPerDay: '฿1,000–2,000', perPerson: '20–35만원', cashNote: '시장·노점·마사지·툭툭 현금 필수. 수퍼리치 환전소 환율 좋음 (공항 외)', qrNote: 'TrueMoney·PromptPay로 쇼핑몰·카페 결제 가능' },
  // ── 인도네시아 ──
  indonesia: { currency: 'IDR (인도네시아 루피아)', qr: false, cashPerDay: 'Rp300,000–600,000', perPerson: '25–50만원', cashNote: '차터 차량·현지 식당·사원 입장료 모두 현금. 시내 머니체인저 환율이 공항보다 유리', qrNote: null },
  // ── 싱가포르 ──
  singapore: { currency: 'SGD (싱가포르 달러)', qr: true, cashPerDay: 'S$50–100', perPerson: '20–35만원', cashNote: 'SGD 강세 — 카드 결제 거의 어디서나 가능', qrNote: 'PayNow QR로 식당·마켓 결제 가능 — 현금 최소화 가능' },
  // ── 필리핀 ──
  philippines: { currency: 'PHP (필리핀 페소)', qr: false, cashPerDay: '₱1,500–3,000', perPerson: '20–35만원', cashNote: '현금 위주 국가 — 식당·교통·관광 대부분 현금. 공항보다 SM몰 환전소 환율 유리', qrNote: null },
  // ── 홍콩 ──
  hongkong: { currency: 'HKD (홍콩 달러)', qr: true, cashPerDay: 'HK$400–700', perPerson: '20–40만원', cashNote: '높은 물가 — 로컬 식당·시장 현금 필요. HKD 고정 환율 (안정적)', qrNote: 'Octopus 카드로 교통·편의점 거의 모두 결제 가능' },
  // ── 미국 ──
  usa_territory: { currency: 'USD (미국 달러)', qr: false, cashPerDay: '$30–60', perPerson: '15–25만원', cashNote: '달러 결제 기본 — 현지 환전 불필요', qrNote: null },
  usa: { currency: 'USD (미국 달러)', qr: false, cashPerDay: '$40–80', perPerson: '20–35만원', cashNote: '카드 결제 주류 — 현금은 팁용으로만 소지', qrNote: null },
  // ── 유럽 (쉥겐) ──
  portugal: { currency: 'EUR (유로)', qr: false, cashPerDay: '€30–50', perPerson: '20–30만원', cashNote: '소규모 상점·식당 현금 선호', qrNote: null },
  france: { currency: 'EUR (유로)', qr: false, cashPerDay: '€30–60', perPerson: '20–35만원', cashNote: '카드 결제 일반화. 현금은 주로 팁·소규모 시장용', qrNote: null },
  spain: { currency: 'EUR (유로)', qr: false, cashPerDay: '€35–60', perPerson: '20–35만원', cashNote: '카드 결제 일반화 — 소매치기 주의로 현금 최소 소지 추천', qrNote: null },
  italy: { currency: 'EUR (유로)', qr: false, cashPerDay: '€40–70', perPerson: '25–40만원', cashNote: '카드 결제 일반화 — 소매치기 주의로 현금 최소 소지 추천', qrNote: null },
  switzerland: { currency: 'CHF (스위스 프랑)', qr: true, cashPerDay: 'CHF 50–100', perPerson: '30–50만원', cashNote: '세계 최고 물가 — 카드 결제 광범위', qrNote: 'Apple Pay·Google Pay 대부분 가게에서 사용 가능' },
  croatia: { currency: 'EUR (유로)', qr: false, cashPerDay: '€35–60', perPerson: '20–35만원', cashNote: '2023 유로 전환 완료 — 카드 결제 일반화', qrNote: null },
  // ── 영국 ──
  uk: { currency: 'GBP (영국 파운드)', qr: true, cashPerDay: '£30–60', perPerson: '25–45만원', cashNote: '파운드 강세 — 카드·비접촉 결제 광범위', qrNote: 'Apple Pay·Google Pay 거의 모든 가게에서 사용 가능' },
  // ── 말레이시아 ──
  malaysia: { currency: 'MYR (말레이시아 링깃)', qr: true, cashPerDay: 'RM50–100', perPerson: '10–20만원', cashNote: '원화 강세, 현지 ATM 또는 환전소 이용', qrNote: 'Touch n Go e-Wallet로 편의점·카페 결제 가능' },
  // ── 몰디브 ──
  maldives: { currency: 'USD (미국 달러)', qr: false, cashPerDay: '$50–150', perPerson: '50–120만원', cashNote: '리조트 팁·스파·수상스포츠·로컬 아일랜드 투어 등 현금 지출 상당 — 넉넉하게 준비 권장', qrNote: null },
  // ── 호주 ──
  australia: { currency: 'AUD (호주 달러)', qr: true, cashPerDay: 'A$50–100', perPerson: '20–35만원', cashNote: '카드 결제 광범위 — 현금은 최소한으로', qrNote: 'Apple Pay·Google Pay 거의 모든 가게에서 사용 가능' },
  // ── 중국 ──
  china: { currency: 'CNY (중국 위안)', qr: true, cashPerDay: '¥150–300', perPerson: '25–50만원', cashNote: 'QR 결제 없으면 현금이 유일한 수단 — 식당·교통·관광 전부 현금 필요', qrNote: '위챗페이·알리페이 현지 계정 설정 강력 추천' },
  // ── 캄보디아 ──
  cambodia: { currency: 'USD (미국 달러)', qr: false, cashPerDay: '$15–30', perPerson: '10–20만원', cashNote: '달러 통용 · 현지 리엘은 거스름돈용 — 잔돈 크메르 리엘로 수령', qrNote: null },
  // ── 라오스 ──
  laos: { currency: 'LAK (라오스 킵) / USD', qr: false, cashPerDay: '$15–25', perPerson: '8–15만원', cashNote: '달러·태국 바트 통용 — 킵 잔돈만 필요', qrNote: null },
  // ── 튀르키예 ──
  turkey: { currency: 'TRY (터키 리라)', qr: true, cashPerDay: '₺500–1,000', perPerson: '15–25만원', cashNote: '리라 약세 — 달러·카드 결제 광범위', qrNote: 'Apple Pay·Google Pay 대형 매장에서 사용 가능' },
  // ── 몽골 ──
  mongolia: { currency: 'MNT (몽골 투그릭)', qr: false, cashPerDay: '₮50,000–100,000', perPerson: '10–20만원', cashNote: '투그릭 현금 필수 — 시내 환전소 이용', qrNote: null },
  // ── 마카오 ──
  macau: { currency: 'MOP (마카오 파타카) / HKD', qr: true, cashPerDay: 'MOP 200–400', perPerson: '10–20만원', cashNote: 'HKD 1:1 환율로 통용 — 별도 환전 불필요. 카지노·호텔은 카드·HKD 기본', qrNote: 'Alipay·WeChat Pay 쇼핑몰·대형 식당에서 사용 가능' },
};

// ═══════════════════════════════════════════
// 실시간 환율 API (Frankfurter — ECB 기반, 무료, API 키 불필요)
// ═══════════════════════════════════════════
var COUNTRY_CURRENCY = {
  japan: 'JPY', taiwan: 'TWD', vietnam: 'VND', thailand: 'THB',
  indonesia: 'IDR', singapore: 'SGD', philippines: 'PHP', hongkong: 'HKD',
  usa: 'USD', usa_territory: 'USD', portugal: 'EUR', france: 'EUR',
  spain: 'EUR', italy: 'EUR', croatia: 'EUR', switzerland: 'CHF',
  uk: 'GBP', malaysia: 'MYR', maldives: 'USD', australia: 'AUD',
  china: 'CNY', cambodia: 'USD', laos: 'USD', turkey: 'TRY',
  mongolia: 'MNT', macau: 'HKD'
};
var CURRENCY_SYMBOL = {
  JPY: '¥', TWD: 'NT$', VND: '₫', THB: '฿', IDR: 'Rp',
  SGD: 'S$', PHP: '₱', HKD: 'HK$', USD: '$', EUR: '€',
  CHF: 'CHF ', GBP: '£', MYR: 'RM', AUD: 'A$', CNY: 'CN¥',
  TRY: '₺', MNT: '₮'
};

var _liveRates = null;
var _liveRatesTime = null;
var _liveRatesDate = '';

function fetchLiveExchangeRates(callback) {
  // open.er-api.com: 무료, API 키 불필요, CORS 완벽 지원
  var url = 'https://open.er-api.com/v6/latest/KRW';
  fetch(url)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data && data.result === 'success' && data.rates) {
        _liveRates = data.rates;
        _liveRatesDate = data.time_last_update_utc
          ? new Date(data.time_last_update_utc).toISOString().slice(0, 10)
          : '';
        _liveRatesTime = new Date();
        console.log('[FX] ✅ 실시간 환율 로드 완료 (' + _liveRatesDate + ')', Object.keys(_liveRates).length + '개 통화');
        if (callback) callback();
      }
    })
    .catch(function (e) {
      console.warn('[FX] ⚠️ 환율 API 실패 (하드코딩 유지):', e);
    });
}

function getLiveRateText(countryCode) {
  if (!_liveRates) return null;
  var curCode = COUNTRY_CURRENCY[countryCode];
  if (!curCode || curCode === 'KRW') return null;
  var rate = _liveRates[curCode];
  if (!rate) return null;

  // rate = 1 KRW → X 외화
  var symbol = CURRENCY_SYMBOL[curCode] || curCode + ' ';
  var converted = rate * 10000; // 1만원 기준

  // 포맷: 소수점 처리
  var formatted;
  if (converted >= 1000) {
    formatted = Math.round(converted).toLocaleString();
  } else if (converted >= 10) {
    formatted = converted.toFixed(1);
  } else {
    formatted = converted.toFixed(2);
  }

  return {
    main: '1만원 = ' + symbol + formatted,
    time: _liveRatesDate,
    curCode: curCode
  };
}

// 페이지 로드 시 환율 fetch + 30분마다 자동 갱신
fetchLiveExchangeRates(function () {
  // 이미 렌더링된 환전 섹션 업데이트
  if (typeof _lastRenderedFx !== 'undefined') {
    _lastRenderedFx.forEach(function (item) {
      renderFxTips(item.containerId, item.destId, item.fxRate, item.fxRateSub);
    });
  }
});
setInterval(function () {
  fetchLiveExchangeRates(function () {
    if (typeof _lastRenderedFx !== 'undefined') {
      _lastRenderedFx.forEach(function (item) {
        renderFxTips(item.containerId, item.destId, item.fxRate, item.fxRateSub);
      });
    }
  });
}, 30 * 60 * 1000); // 30분

var _lastRenderedFx = [];

function renderFxTips(containerId, destId, fxRate, fxRateSub) {
  var el = document.getElementById(containerId);
  if (!el) return;

  // 렌더링 추적 (자동 갱신용)
  var exists = _lastRenderedFx.some(function (i) { return i.containerId === containerId; });
  if (!exists) _lastRenderedFx.push({ containerId: containerId, destId: destId, fxRate: fxRate, fxRateSub: fxRateSub });

  var countryCode = (typeof DEST_COUNTRY !== 'undefined' && DEST_COUNTRY[destId]) || destId;
  var d = DEST_FX_TIPS[countryCode] || DEST_FX_TIPS[destId];
  var def = DEST_FX_TIPS._default;
  if (!d) { el.innerHTML = ''; return; }

  // 실시간 환율 가져오기
  var live = getLiveRateText(countryCode);

  // 국내 여행
  if (countryCode === 'korea') {
    el.innerHTML = [
      _appleRow('통화', 'KRW (원화)'),
      _appleRow('환전', '불필요'),
      _appleRow('결제', '카카오페이 · 네이버페이 등 국내 앱 사용 가능'),
    ].join('');
    return;
  }

  var rows = [];

  // 실시간 환율 (기존 디자인 유지)
  if (live) {
    rows.push(_appleRow('현재 환율', live.main));
  } else if (fxRate) {
    rows.push(_appleRow('현재 환율', fxRate + (fxRateSub ? ' · ' + fxRateSub : '')));
  }

  if (d.currency) rows.push(_appleRow('통화', d.currency));
  if (d.perPerson) rows.push(_appleRow('권장 환전', d.perPerson));
  if (d.cashNote) rows.push(_appleRow('환전 팁', d.cashNote));
  if (d.qrNote) rows.push(_appleRow('QR결제', d.qrNote));
  rows.push(_appleRow('최적 방법', def.bestBank));
  rows.push(_appleRow('공항 환전', def.airport));
  el.innerHTML = rows.join('');
}

function _appleRow(label, value) {
  if (!value) return '';
  return '<div style="padding:14px 0;text-align:left;">' +
    '<div style="font-size:13px;font-weight:700;color:#1d1d1f;margin-bottom:5px;">' + label + '</div>' +
    '<div style="font-size:14px;color:#1d1d1f;line-height:1.5;font-weight:400;">' + value + '</div>' +
    '</div>';
}

function _appleRowLive(label, value, sub) {
  return '<div style="padding:14px 0;text-align:left;">' +
    '<div style="font-size:13px;font-weight:700;color:#1d1d1f;margin-bottom:5px;display:flex;align-items:center;gap:6px;">' +
    label +
    '<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#34c759;animation:fxPulse 2s ease-in-out infinite;"></span>' +
    '</div>' +
    '<div style="font-size:17px;color:#1d1d1f;line-height:1.5;font-weight:700;letter-spacing:-0.3px;">' + value + '</div>' +
    (sub ? '<div style="font-size:11px;color:#86868b;margin-top:2px;">' + sub + '</div>' : '') +
    '</div>';
}

// ═══════════════════════════════════════════
// 여행 정보 (나라 단위 — 시차·전압·팁·인터넷·긴급전화)
// ═══════════════════════════════════════════
var DEST_TRAVEL_INFO = {
  korea: {
    timezone: '시차 없음',
    voltage: '220V · Type C/F',
    tip: '팁 불필요',
    internet: '국내 통신 그대로 사용',
    emergency: '112 (경찰) · 119 (소방/구급)'
  },
  japan: {
    timezone: '시차 없음 (UTC+9)',
    voltage: '100V · Type A — 어댑터 필요',
    tip: '팁 불필요 · 오히려 실례',
    internet: 'eSIM 지원 · 공항 유심 추천',
    emergency: '110 (경찰) · 119 (소방/구급)'
  },
  taiwan: {
    timezone: '한국보다 1시간 느림',
    voltage: '110V · Type A/B — 어댑터 필요',
    tip: '팁 불필요',
    internet: 'eSIM 지원 · 현지 유심 저렴',
    emergency: '110 (경찰) · 119 (소방/구급)'
  },
  vietnam: {
    timezone: '한국보다 2시간 느림',
    voltage: '220V · Type A/C — 대부분 호환',
    tip: '팁 선택 (5~10%)',
    internet: 'eSIM 지원 · 현지 유심 매우 저렴',
    emergency: '113 (경찰) · 115 (구급)'
  },
  thailand: {
    timezone: '한국보다 2시간 느림',
    voltage: '220V · Type A/B/C — 대부분 호환',
    tip: '팁 선택 (20~50바트)',
    internet: 'eSIM 지원 · 공항 유심 추천',
    emergency: '191 (경찰) · 1669 (구급)'
  },
  indonesia: {
    timezone: '한국보다 1시간 느림 (발리 기준)',
    voltage: '230V · Type C/F — 호환 가능',
    tip: '팁 선택 (5~10%)',
    internet: 'eSIM 지원 · 현지 유심 저렴',
    emergency: '112 (통합) · 118 (구급)'
  },
  singapore: {
    timezone: '한국보다 1시간 느림',
    voltage: '230V · Type G — 어댑터 필요',
    tip: '팁 불필요 (서비스차지 포함)',
    internet: 'eSIM 지원 · Wi-Fi 매우 우수',
    emergency: '999 (경찰) · 995 (소방/구급)'
  },
  philippines: {
    timezone: '한국보다 1시간 느림',
    voltage: '220V · Type A/B — 대부분 호환',
    tip: '팁 선택 (10%)',
    internet: 'eSIM 지원 · 현지 유심 저렴',
    emergency: '911 (통합) · 117 (경찰)'
  },
  hongkong: {
    timezone: '한국보다 1시간 느림',
    voltage: '220V · Type G — 어댑터 필요',
    tip: '팁 10% (서비스차지 별도)',
    internet: 'eSIM 지원 · Wi-Fi 우수',
    emergency: '999 (통합)'
  },
  usa_territory: {
    timezone: '한국보다 1시간 빠름 (괌/사이판)',
    voltage: '120V · Type A/B — 어댑터 필요',
    tip: '팁 15~20% 필수',
    internet: 'eSIM 지원 · 미국 통신사 로밍',
    emergency: '911 (통합)'
  },
  usa: {
    timezone: '한국보다 14~17시간 느림 (지역별)',
    voltage: '120V · Type A/B — 어댑터 필요',
    tip: '팁 15~20% 필수',
    internet: 'eSIM 지원 · 현지 유심 추천',
    emergency: '911 (통합)'
  },
  portugal: {
    timezone: '한국보다 8시간 느림',
    voltage: '230V · Type C/F — 호환 가능',
    tip: '팁 선택 (5~10%)',
    internet: 'eSIM 지원 · EU 로밍 가능',
    emergency: '112 (통합)'
  },
  france: {
    timezone: '한국보다 7시간 느림',
    voltage: '230V · Type C/E — 호환 가능',
    tip: '팁 선택 (서비스 포함)',
    internet: 'eSIM 지원 · EU 로밍 가능',
    emergency: '112 (통합) · 15 (구급)'
  },
  spain: {
    timezone: '한국보다 7시간 느림',
    voltage: '230V · Type C/F — 호환 가능',
    tip: '팁 선택 (5~10%)',
    internet: 'eSIM 지원 · EU 로밍 가능',
    emergency: '112 (통합)'
  },
  italy: {
    timezone: '한국보다 7시간 느림',
    voltage: '230V · Type C/F/L — 호환 가능',
    tip: '팁 선택 (coperto 별도)',
    internet: 'eSIM 지원 · EU 로밍 가능',
    emergency: '112 (통합) · 118 (구급)'
  },
  croatia: {
    timezone: '한국보다 7시간 느림',
    voltage: '230V · Type C/F — 호환 가능',
    tip: '팁 선택 (10%)',
    internet: 'eSIM 지원 · EU 로밍 가능',
    emergency: '112 (통합)'
  },
  switzerland: {
    timezone: '한국보다 7시간 느림',
    voltage: '230V · Type C/J — 어댑터 권장',
    tip: '팁 불필요 (서비스차지 포함)',
    internet: 'eSIM 지원 · 비EU (별도 유심 필요)',
    emergency: '112 (통합) · 144 (구급)'
  },
  uk: {
    timezone: '한국보다 8시간 느림',
    voltage: '230V · Type G — 어댑터 필요',
    tip: '팁 10~15%',
    internet: 'eSIM 지원 · 현지 유심 추천',
    emergency: '999 (통합) · 112'
  },
  malaysia: {
    timezone: '한국보다 1시간 느림',
    voltage: '240V · Type G — 어댑터 필요',
    tip: '팁 불필요 (서비스차지 포함)',
    internet: 'eSIM 지원 · 현지 유심 저렴',
    emergency: '999 (경찰) · 994 (구급)'
  },
  maldives: {
    timezone: '한국보다 4시간 느림',
    voltage: '230V · Type G — 어댑터 필요 (리조트 대부분 제공)',
    tip: '팁 선택 ($5~10/일)',
    internet: '리조트 Wi-Fi 기본 · eSIM 지원',
    emergency: '119 (경찰) · 102 (구급)'
  },
  australia: {
    timezone: '한국보다 1시간 빠름 (시드니 기준)',
    voltage: '230V · Type I — 어댑터 필요',
    tip: '팁 선택 (10~15%)',
    internet: 'eSIM 지원 · 현지 유심 추천',
    emergency: '000 (통합) · 112'
  },
  china: {
    timezone: '한국보다 1시간 느림',
    voltage: '220V · Type A/C/I — 대부분 호환',
    tip: '팁 불필요',
    internet: 'VPN 필수 · 구글/카카오 차단 · 현지 유심 추천',
    emergency: '110 (경찰) · 120 (구급)'
  },
  cambodia: {
    timezone: '한국보다 2시간 느림',
    voltage: '230V · Type A/C — 대부분 호환',
    tip: '팁 선택 ($1~2)',
    internet: 'eSIM 지원 · 현지 유심 매우 저렴',
    emergency: '117 (경찰) · 119 (소방)'
  },
  laos: {
    timezone: '한국보다 2시간 느림',
    voltage: '230V · Type A/B/C — 대부분 호환',
    tip: '팁 불필요',
    internet: '현지 유심 저렴 · eSIM 일부 지원',
    emergency: '191 (경찰) · 195 (구급)'
  },
  turkey: {
    timezone: '한국보다 6시간 느림',
    voltage: '230V · Type C/F — 호환 가능',
    tip: '팁 선택 (5~10%)',
    internet: 'eSIM 지원 · 현지 유심 추천',
    emergency: '112 (통합) · 155 (경찰)'
  },
  mongolia: {
    timezone: '한국보다 1시간 느림',
    voltage: '220V · Type C/E — 호환 가능',
    tip: '팁 불필요',
    internet: '현지 유심 추천 · LTE 커버리지 제한적',
    emergency: '102 (경찰) · 103 (소방) · 105 (구급)'
  },
  macau: {
    timezone: '한국보다 1시간 느림',
    voltage: '220V · Type G — 어댑터 필요 (호텔 대부분 제공)',
    tip: '팁 선택 (카지노 10%)',
    internet: 'eSIM 지원 · 홍콩 유심 호환',
    emergency: '999 (통합)'
  }
};

function renderTravelInfo(containerId, destId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var countryCode = (typeof DEST_COUNTRY !== 'undefined' && DEST_COUNTRY[destId]) || destId;
  var d = DEST_TRAVEL_INFO[countryCode];
  if (!d) { el.innerHTML = ''; return; }

  el.innerHTML = [
    _appleRow('시차', d.timezone),
    _appleRow('전압 / 플러그', d.voltage),
    _appleRow('팁 문화', d.tip),
    _appleRow('인터넷', d.internet),
    _appleRow('긴급 전화', d.emergency),
  ].join('');
}

// iTunes Search API term 매핑 { term, country }
var ITUNES_TERMS = {
  'Google Maps': { term: 'Google Maps', country: 'kr' },
  'Google 번역': { term: 'Google Translate', country: 'kr' },
  'Uber': { term: 'Uber', country: 'kr' },
  'Uber / Lyft': { term: 'Uber', country: 'us' },
  'Uber / DiDi': { term: 'Uber', country: 'au' },
  'Uber / Bolt': { term: 'Uber', country: 'kr' },
  'Uber / Bolt / Cabify': { term: 'Uber', country: 'es' },
  'Grab': { term: 'Grab', country: 'sg' },
  'Gojek': { term: 'Gojek', country: 'id' },
  'Bolt': { term: 'Bolt Rides', country: 'kr' },
  'LINE': { term: 'LINE', country: 'jp' },
  'Revolut': { term: 'Revolut', country: 'gb' },
  'MoMo': { term: 'MoMo Vietnam', country: 'vn' },
  'MoMo / ZaloPay': { term: 'MoMo Vietnam', country: 'vn' },
  'ZaloPay': { term: 'ZaloPay', country: 'vn' },
  '카카오맵': { term: 'KakaoMap', country: 'kr' },
  '카카오T': { term: 'Kakao T', country: 'kr' },
  '제주버스정보': { term: '제주버스정보', country: 'kr' },
  'EasyCard 앱': { term: 'EasyCard', country: 'tw' },
  'Taiwan HSR': { term: 'Taiwan High Speed Rail', country: 'tw' },
  'Suica / ICOCA': { term: 'Suica', country: 'jp' },
  'Suica / PASMO': { term: 'Suica', country: 'jp' },
  'Suica / SUGOCA': { term: 'Suica', country: 'jp' },
  'Suica / SAPICA': { term: 'Suica', country: 'jp' },
  'Suica / OKICA': { term: 'Suica', country: 'jp' },
  '乗換案内': { term: '乗換案内', country: 'jp' },
  'PayPay': { term: 'PayPay', country: 'jp' },
  'TrueMoney Wallet': { term: 'TrueMoney Wallet', country: 'th' },
  'SimplyGo': { term: 'SimplyGo', country: 'sg' },
  'PayNow / PayLah!': { term: 'DBS PayLah', country: 'sg' },
  'GCash': { term: 'GCash', country: 'ph' },
  'Lisboa Viva': { term: 'Viva.pt', country: 'pt' },
  'Yahoo! 天気': { term: 'Yahoo天気', country: 'jp' },
  '타베로그': { term: '食べログ', country: 'jp' },
  'Octopus (八達通)': { term: 'Octopus', country: 'hk' },
  'MTR Mobile': { term: 'MTR Mobile', country: 'hk' },
  'Alipay HK': { term: 'AlipayHK', country: 'hk' },
  "Touch 'n Go eWallet": { term: 'Touch n Go eWallet', country: 'my' },
  'WhatsApp': { term: 'WhatsApp', country: 'us' },
  'RATP': { term: 'RATP', country: 'fr' },
  'DaBus2': { term: 'DaBus2', country: 'us' },
  'Opal Travel': { term: 'Opal Travel', country: 'au' },
  'TMB (Barcelona Metro)': { term: 'TMB', country: 'es' },
  'DiDi (滴滴)': { term: 'DiDi', country: 'au' },
  'WeChat (微信)': { term: 'WeChat', country: 'cn' },
  'Alipay (支付宝)': { term: 'Alipay', country: 'cn' },
  'ESTA 공식 앱': { term: 'ESTA', country: 'us' },
  'Guam Visitors Bureau': { term: 'Guam Visitors Bureau', country: 'us' },
  'Afterpay': { term: 'Afterpay', country: 'au' },
};
var _itunesCache = {}; // cacheKey → artworkUrl

function _fetchItunesIcon(term, country, imgEl) {
  var cacheKey = term + '|' + country;
  if (_itunesCache[cacheKey]) {
    imgEl.src = _itunesCache[cacheKey];
    return;
  }
  function tryFetch(ctry, fallbackCtry) {
    var url = 'https://itunes.apple.com/search?term=' +
      encodeURIComponent(term) + '&entity=software&limit=1&country=' + ctry;
    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.results && data.results.length > 0) {
          var icon = data.results[0].artworkUrl512 ||
            data.results[0].artworkUrl100 ||
            data.results[0].artworkUrl60;
          if (icon) {
            _itunesCache[cacheKey] = icon;
            imgEl.src = icon;
            return;
          }
        }
        // 결과 없으면 fallback store로 재시도
        if (fallbackCtry) tryFetch(fallbackCtry, null);
      })
      .catch(function () {
        if (fallbackCtry) tryFetch(fallbackCtry, null);
      });
  }
  // 1차: 지정 country, 2차: kr, 3차: us
  var fallback = country === 'kr' ? 'us' : 'kr';
  tryFetch(country, fallback);
}

function renderAppList(containerId, destId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  // DEST_APPS fallback: destId → 같은 나라 다른 도시 앱 → 빈 리스트
  var apps = DEST_APPS[destId];
  if (!apps) {
    var country = (typeof DEST_COUNTRY !== 'undefined' && DEST_COUNTRY[destId]) || '';
    if (country) {
      // 같은 나라의 다른 도시 앱을 찾아 fallback
      for (var k in DEST_APPS) {
        if (DEST_COUNTRY[k] === country && DEST_APPS[k] && DEST_APPS[k].length > 0) {
          apps = DEST_APPS[k]; break;
        }
      }
    }
  }
  if (!apps || apps.length === 0) { el.innerHTML = ''; return; }
  el.innerHTML = '<div class="app-list">' +
    apps.map(function (a) {
      var iconHtml;
      var hasiTunes = !!ITUNES_TERMS[a.name];
      if (a.iconSlug && !hasiTunes) {
        // simpleicons 전용 (iTunes term 없을 때만)
        var bgColor = a.iconBg || '#f0f0f2';
        var iconColor = a.iconFg || 'ffffff';
        var fallbackEmoji = a.icon || '\ud83d\udcf1';
        iconHtml = '<div class="app-icon-wrap" style="background:' + bgColor + '">' +
          '<img src="https://cdn.simpleicons.org/' + a.iconSlug + '/' + iconColor +
          '" width="26" height="26" alt="' + a.name +
          '" onerror="this.parentNode.className=\'app-icon-wrap-fallback\';this.parentNode.innerHTML=\'' + fallbackEmoji + '\';this.remove()">' +
          '</div>';
      } else if (hasiTunes) {
        // iTunes API로 아이콘 교체 (iconUrl 유무 관계없이)
        var initSrc = a.iconUrl || '';
        var fallbackEmoji3 = a.icon || '\ud83d\udcf1';
        iconHtml = '<div class="app-icon-wrap">' +
          '<img src="' + initSrc + '" width="46" height="46" alt="' + a.name +
          '" data-itunes-name="' + a.name + '"' +
          ' onerror="this.src=\'\'" >' +
          '</div>';
      } else if (a.iconUrl) {
        var fallbackEmoji2 = a.icon || '\ud83d\udcf1';
        iconHtml = '<div class="app-icon-wrap">' +
          '<img src="' + a.iconUrl +
          '" width="46" height="46" alt="' + a.name +
          '" onerror="this.parentNode.className=\'app-icon-wrap-fallback\';this.parentNode.innerHTML=\'' + fallbackEmoji2 + '\';this.remove()">' +
          '</div>';
      } else {
        iconHtml = '<div class="app-icon-wrap-fallback">' + (a.icon || '\ud83d\udcf1') + '</div>';
      }
      return '<div class="app-item">' + iconHtml +
        '<div class="app-info">' +
        '<div><span class="app-name">' + a.name + '</span><span class="app-cat">' + a.cat + '</span></div>' +
        '<div class="app-desc">' + a.desc + '</div>' +
        '</div>' +
        '</div>';
    }).join('') +
    '</div>';

  // iTunes API로 실제 앱스토어 아이콘 교체 (비동기)
  var imgs = el.querySelectorAll('img[data-itunes-name]');
  imgs.forEach(function (img) {
    var appName = img.getAttribute('data-itunes-name');
    var info = ITUNES_TERMS[appName];
    if (info) {
      _fetchItunesIcon(info.term, info.country, img);
    }
  });
}



function renderEntryInfo(containerId, destId, visaOverride) {
  var el = document.getElementById(containerId);
  if (!el) return;
  // 나라 코드 기반으로 조회 (같은 나라는 동일한 출입국 정보)
  var countryCode = (typeof DEST_COUNTRY !== 'undefined' && DEST_COUNTRY[destId]) || destId;
  var e = DEST_ENTRY[countryCode] || DEST_ENTRY[destId];
  if (!e) { el.innerHTML = ''; return; }
  // API 비자 데이터 우선, 없으면 하드코딩 fallback
  var visaLabel = visaOverride || e.visa;
  var rows = [];
  rows.push(_appleRow('비자', visaLabel));
  e.docs.forEach(function (d) {
    if (d.sub) {
      rows.push(_appleRow(d.text, d.sub));
    } else {
      rows.push('<div style="padding:14px 0;text-align:left;"><div style="font-size:14px;font-weight:400;color:#1d1d1f;">' + d.text + '</div></div>');
    }
  });
  if (e.tips && e.tips.length > 0) {
    rows.push(_appleRow('유의사항', e.tips.join('\n')));
  }
  el.innerHTML = rows.join('');
}

// ── 데스크톱 2개월 달력 ──
var dcSel = { start: null, end: null };
var dcBaseYear, dcBaseMonth; // 현재 보이는 왼쪽 달
var dcInitialized = false;

function initDesktopCal(containerId, displayId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  if (!dcBaseYear) {
    var today = new Date();
    dcBaseYear = today.getFullYear();
    dcBaseMonth = today.getMonth();
  }
  dcRenderMonths(container, displayId);
}

function dcRenderMonths(container, displayId) {
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var left = new Date(dcBaseYear, dcBaseMonth, 1);
  var right = new Date(dcBaseYear, dcBaseMonth + 1, 1);

  var html = '<div class="dc-wrap">';
  // 이전 화살표 (SVG chevron)
  html += '<button class="dc-nav dc-prev" onclick="dcNav(-1,\'' + container.id + '\',\'' + displayId + '\')" type="button"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>';
  // 다음 화살표 (SVG chevron)
  html += '<button class="dc-nav dc-next" onclick="dcNav(1,\'' + container.id + '\',\'' + displayId + '\')" type="button"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>';
  html += '<div class="dc-months">';
  html += dcBuildMonth(left, today);
  html += dcBuildMonth(right, today);
  html += '</div></div>';
  container.innerHTML = html;
  dcRefresh(container);
}

function dcBuildMonth(base, today) {
  var year = base.getFullYear(), month = base.getMonth();
  var label = year + '년 ' + (month + 1) + '월';
  var html = '<div class="dc-month" data-year="' + year + '" data-month="' + month + '">';
  html += '<div class="dc-month-header">' + label + '</div>';
  html += '<div class="dc-weekdays"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div>';
  html += '<div class="dc-grid">';
  var firstDay = new Date(year, month, 1).getDay();
  for (var e = 0; e < firstDay; e++) html += '<div class="dc-day empty"></div>';
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  for (var d = 1; d <= daysInMonth; d++) {
    var dt = new Date(year, month, d);
    var iso = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    var cls = 'dc-day';
    if (dt < today) cls += ' disabled';
    else if (dt.getTime() === today.getTime()) cls += ' today';
    html += '<div class="' + cls + '" data-iso="' + iso + '" onclick="dcClickDay(\'' + iso + '\')"><span class="dc-num">' + d + '</span></div>';
  }
  html += '</div></div>';
  return html;
}

function dcNav(dir, containerId, displayId) {
  dcBaseMonth += dir;
  if (dcBaseMonth > 11) { dcBaseMonth = 0; dcBaseYear++; }
  if (dcBaseMonth < 0) { dcBaseMonth = 11; dcBaseYear--; }
  var container = document.getElementById(containerId);
  dcRenderMonths(container, displayId);
}

function dcClickDay(iso) {
  if (!dcSel.start || (dcSel.start && dcSel.end)) {
    dcSel = { start: iso, end: null };
  } else {
    if (iso < dcSel.start) { dcSel = { start: iso, end: dcSel.start }; }
    else { dcSel.end = iso; }
  }
  // Re-render to apply updated classes
  ['dc-home-wrap', 'dc-compare-wrap'].forEach(function (cid) {
    var c = document.getElementById(cid);
    if (c && c.querySelector('.dc-wrap')) dcRefresh(c);
  });
  // 날짜 표시 동기화
  if (dcSel.start && dcSel.end) {
    var fmt = function (s) { var p = s.split('-'); return parseInt(p[1]) + '월 ' + parseInt(p[2]) + '일'; };
    var txt = dcSel.start === dcSel.end ? fmt(dcSel.start) : fmt(dcSel.start) + ' – ' + fmt(dcSel.end);
    ['sb-date-display', 'sb-date-display-c'].forEach(function (id) {
      var el = document.getElementById(id); if (el) { el.textContent = txt; el.classList.add('filled'); }
    });
    // home-date-value 업데이트 (updateResultsByFilters에서 읽음)
    var hdv = document.getElementById('home-date-value'); if (hdv) hdv.textContent = txt;
    window._isAutoDate = false; // 사용자 직접 선택
    window._userHasChangedFilters = true;
    window.selectedDates = [new Date(dcSel.start), new Date(dcSel.end)];
    // 모바일: 날짜 범위 선택 완료 시 패널 자동 닫기
    if (window.innerWidth < 744) {
      setTimeout(function () { closeAllHomePanels(); }, 200);
    }
  }
}

function dcRefresh(container) {
  var hasRange = dcSel.start && dcSel.end && dcSel.start !== dcSel.end;
  var s = dcSel.start, e = dcSel.end;
  container.querySelectorAll('.dc-day:not(.empty)').forEach(function (el) {
    el.classList.remove('sel-start', 'sel-end', 'in-range', 'has-range', 'row-start', 'row-end', 'month-start-range', 'month-end-range');
    var iso = el.dataset.iso; if (!iso) return;
    if (s && iso === s) { el.classList.add('sel-start'); if (hasRange) el.classList.add('has-range'); }
    if (e && iso === e) { el.classList.add('sel-end'); if (hasRange) el.classList.add('has-range'); }
    if (hasRange && iso > s && iso < e) {
      el.classList.add('in-range');
      var siblings = Array.from(el.parentNode.children);
      var col = siblings.indexOf(el) % 7;
      if (col === 0) el.classList.add('row-start');
      if (col === 6) el.classList.add('row-end');
      // 달 첫날(index === firstEmptyLen) 과 달 마지막날 처리
      var grid = el.parentNode;
      var allDays = grid.querySelectorAll('.dc-day:not(.empty)');
      if (el === allDays[0]) el.classList.add('month-start-range');
      if (el === allDays[allDays.length - 1]) el.classList.add('month-end-range');
    }
  });
}

// ── SEARCH BAR PANEL SYSTEM ──

function toggleSbPanel(panelId, e, segEl) {
  if (e) e.stopPropagation();
  var panel = document.getElementById(panelId);
  if (!panel) return;
  var wasOpen = panel.classList.contains('open');

  // Close all panels
  document.querySelectorAll('.sb-panel.open').forEach(function (p) { p.classList.remove('open'); });
  document.querySelectorAll('.sb-seg.sb-active').forEach(function (s) { s.classList.remove('sb-active'); });

  var wizBtn = document.getElementById('wiz-launcher');
  var isCompareView = document.getElementById('compare-view') && document.getElementById('compare-view').style.display !== 'none';

  if (!wasOpen) {
    panel.classList.add('open');
    if (segEl) segEl.classList.add('sb-active');

    // 날짜 패널: 커스텀 2개월 달력 초기화
    if (panelId === 'date-panel') {
      if (!document.querySelector('#dc-home-wrap .dc-wrap')) {
        initDesktopCal('dc-home-wrap', 'sb-date-display');
      }
    }
    if (panelId === 'date-panel-c') {
      if (!document.querySelector('#dc-compare-wrap .dc-wrap')) {
        initDesktopCal('dc-compare-wrap', 'sb-date-display-c');
      }
    }

    // 모바일: 취향설정 버튼 하프팝업 아래로
    if (window.innerWidth < 744) {
      var wizBtn = document.getElementById('wiz-launcher');
      if (wizBtn) wizBtn.style.display = 'none';
    }
  } else {
    // wasOpen 상태 - nothing extra needed
  }
}

// 홈뷰 패널 전체 닫기
function closeAllHomePanels() {
  document.querySelectorAll('.sb-panel.open').forEach(function (p) { p.classList.remove('open'); });
  document.querySelectorAll('.sb-seg.sb-active').forEach(function (s) { s.classList.remove('sb-active'); });
  // 취향설정 버튼 복원
  var wizBtn = document.getElementById('wiz-launcher');
  if (wizBtn) wizBtn.style.display = '';
}

// Legacy alias
function toggleRegionDrop(e) { toggleSbPanel('region-panel', e, document.getElementById('region-seg')); }
function toggleSbDrop(id, e) { toggleSbPanel(id, e, null); }

function selectRegion(e, val) {
  if (e) e.stopPropagation();
  window.selectedRegion = val;
  window._userHasChangedFilters = true;
  // Close all panels
  document.querySelectorAll('.sb-panel.open').forEach(function (p) { p.classList.remove('open'); });
  document.querySelectorAll('.sb-seg.sb-active').forEach(function (s) { s.classList.remove('sb-active'); });
  // Update all region opts + checkmarks
  var checkSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  document.querySelectorAll('.sb-region-opt').forEach(function (o) {
    var isActive = o.dataset.val === val;
    o.classList.toggle('active', isActive);
    var chk = o.querySelector('.sb-region-check');
    if (chk) chk.innerHTML = isActive ? checkSVG : '';
  });
  var labels = { '': '전체 지역', 'japan': '일본', 'sea': '동남아', 'europe': '유럽', 'east_asia': '동아시아', 'pacific': '괌·하와이·호주', 'domestic': '국내', 'resort': '휴양지' };
  var labelText = labels[val] || '전체 지역';
  var disp = document.getElementById('region-display');
  var dispC = document.getElementById('region-display-c');
  if (disp) { disp.textContent = labelText; disp.classList.add('filled'); }
  if (dispC) { dispC.textContent = labelText; dispC.classList.add('filled'); }
  updateResultsByFilters();
}

function switchDateTab(mode, e) {
  if (e) e.stopPropagation();
  var suffix = mode.endsWith('-c') ? '-c' : '';
  var isFlexible = mode.startsWith('flexible');
  var tabSpec = document.getElementById('date-tab-specific' + suffix);
  var tabFlex = document.getElementById('date-tab-flexible' + suffix);
  var panelSpec = document.getElementById('date-panel-specific' + suffix);
  var panelFlex = document.getElementById('date-panel-flexible' + suffix);
  if (tabSpec) tabSpec.classList.toggle('active', !isFlexible);
  if (tabFlex) tabFlex.classList.toggle('active', isFlexible);
  if (panelSpec) panelSpec.style.display = isFlexible ? 'none' : '';
  if (panelFlex) panelFlex.style.display = isFlexible ? '' : 'none';
  if (!isFlexible && !fpHome) initFlatpickr('home');
  // PC 유연한 일정 탭 선택 시 초기화
  if (isFlexible && suffix === '-c') {
    setTimeout(function () { if (typeof sbInitFlexMonths === 'function') sbInitFlexMonths(); }, 50);
  }
}

function confirmFlexibleDate(e) {
  if (e) e.stopPropagation();
  var now = new Date();
  var dep = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  var ret = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);
  var d1 = (dep.getMonth() + 1) + '월 ' + dep.getDate() + '일';
  var d2 = (ret.getMonth() + 1) + '월 ' + ret.getDate() + '일';
  var rangeStr = d1 + ' – ' + d2;
  // Store actual range in hidden value for date calculation
  var hd = document.getElementById('home-date-value');
  if (hd) hd.textContent = rangeStr;
  // Show '언제든지' label in visible display elements
  var sbDate = document.getElementById('sb-date-display');
  if (sbDate) { sbDate.textContent = '날짜 선택'; sbDate.classList.remove('filled'); }
  // compare-date-value: store range for calculation, display '언제든지' as label
  var cdv = document.getElementById('compare-date-value');
  if (cdv) { cdv.textContent = rangeStr; cdv.classList.add('filled'); }
  if (!fpHome) initFlatpickr("home");
  if (fpHome) { fpHome._syncing = true; try { fpHome.setDate([dep, ret], false); } catch (e2) { } fpHome._syncing = false; }
  if (fpCompare) { fpCompare._syncing = true; try { fpCompare.setDate([dep, ret], false); } catch (e2) { } fpCompare._syncing = false; }
  document.querySelectorAll('.sb-panel.open').forEach(function (p) { p.classList.remove('open'); });
  document.querySelectorAll('.sb-seg.sb-active').forEach(function (s) { s.classList.remove('sb-active'); });
  refreshButtonStates();
}

// Close all panels on outside click
document.addEventListener('click', function (e) {
  if (!e.target.closest('.sb-wrap') && !e.target.closest('.flatpickr-calendar') && !e.target.closest('.sb-panel') && !e.target.closest('.dc-wrap')) {
    var anyOpen = document.querySelector('.sb-panel.open');
    document.querySelectorAll('.sb-panel.open').forEach(function (p) { p.classList.remove('open'); });
    document.querySelectorAll('.sb-seg.sb-active').forEach(function (s) { s.classList.remove('sb-active'); });
    if (anyOpen) {
      var wizBtn = document.getElementById('wiz-launcher');
      if (wizBtn) wizBtn.style.display = '';
      var dim = document.getElementById('home-sb-dim');
      if (dim) dim.classList.remove('show');
    }
  }
});

// Budget selection via pills
function selectBudget(val, e) {
  if (e) e.stopPropagation();
  var hiddenHome = document.getElementById('budget-input-home');
  var hiddenComp = document.getElementById('budget-input-compare');
  if (hiddenHome) hiddenHome.value = val;
  if (hiddenComp) hiddenComp.value = val;
  window._userHasChangedFilters = true;
  var labels = { 'cheapest': '최저가', '120': '120만원 이내', '200': '200만원 이내', '300': '250만원 이상', 'unlimited': '상관없음' };
  var labelText = labels[val] || '예산 선택';
  var bdisp = document.getElementById('sb-budget-display');
  var bdispc = document.getElementById('sb-budget-display-c');
  if (bdisp) { bdisp.textContent = labelText; bdisp.classList.add('filled'); }
  if (bdispc) { bdispc.textContent = labelText; bdispc.classList.add('filled'); }
  // Update checkmarks
  var checkSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  document.querySelectorAll('.sb-budget-opt').forEach(function (p) {
    var isActive = p.dataset.val === val;
    p.classList.toggle('active', isActive);
    var chk = p.querySelector('.sb-budget-check');
    if (chk) chk.innerHTML = isActive ? checkSVG : '';
  });
  var hv = document.getElementById('home-budget-value');
  var cv = document.getElementById('compare-budget-value');
  if (hv) hv.textContent = labelText;
  if (cv) cv.textContent = labelText;
  var bp = document.getElementById('budget-panel');
  var bpc = document.getElementById('budget-panel-c');
  if (bp) bp.classList.remove('open');
  if (bpc) bpc.classList.remove('open');
  document.querySelectorAll('.sb-seg.sb-active[id^="budget-seg"]').forEach(function (s) { s.classList.remove('sb-active'); });
  updateTravelerDisplay();
  refreshButtonStates();
  if (document.getElementById('compare-view') && document.getElementById('compare-view').style.display === 'block') {
    updateResultsByFilters();
  }
}

// Traveler state
var _travelers = { adults: 1, children: 0, infants: 0, pets: 0 };

function updateTravelers(e, type, delta) {
  if (e) e.stopPropagation();
  var min = type === 'adults' ? 1 : 0;
  _travelers[type] = Math.max(min, (_travelers[type] || 0) + delta);
  ['', '-c'].forEach(function (suffix) {
    var countEl = document.getElementById('count-' + type + suffix);
    if (countEl) countEl.textContent = _travelers[type];
    var minusBtn = document.getElementById('btn-' + type + '-minus' + suffix);
    if (minusBtn) minusBtn.disabled = _travelers[type] <= min;
  });
  updateTravelerDisplay();
}

function updateTravelerDisplay() {
  var parts = [];
  if (_travelers.adults > 0) parts.push('성인 ' + _travelers.adults + '명');
  if (_travelers.children > 0) parts.push('어린이 ' + _travelers.children + '명');
  if (_travelers.infants > 0) parts.push('유아 ' + _travelers.infants + '명');
  if (_travelers.pets > 0) parts.push('반려동물 ' + _travelers.pets + '마리');
  var displayText = parts.length > 0 ? parts.join(' · ') : '게스트 추가';
  // (display update done via dispEl/dispElC below)
  var dispEl = document.getElementById('sb-traveler-display');
  var dispElC = document.getElementById('sb-traveler-display-c');
  if (dispEl) { dispEl.textContent = displayText; dispEl.classList.toggle('filled', parts.length > 0); }
  if (dispElC) { dispElC.textContent = displayText; dispElC.classList.toggle('filled', parts.length > 0); }
  refreshButtonStates();
}

document.addEventListener('DOMContentLoaded', function () {
  ['adults', 'children', 'infants', 'pets'].forEach(function (type) {
    var min = type === 'adults' ? 1 : 0;
    ['', '-c'].forEach(function (suffix) {
      var btn = document.getElementById('btn-' + type + '-minus' + suffix);
      if (btn) btn.disabled = _travelers[type] <= min;
      var countEl = document.getElementById('count-' + type + suffix);
      if (countEl) countEl.textContent = _travelers[type];
    });
  });

  // compare-sb는 항상 filled (검색 결과 화면에서 기본값도 선택된 색상)
  // 홈 화면 항목은 제외 (검색 전엔 비활성화 회색 유지)

  // ── 전체 화면: 홈화면 건너뛰고 바로 비교뷰 ──
  // ⚠️  CRITICAL: startSearch()로 교체 금지. _initMobileCompare()가 초기 렌더링 담당
  _initMobileCompare();
  // PC에서는 wizard scroll trigger 초기화
  if (window.innerWidth > 1068) {
    setTimeout(_initWizardScrollTrigger, 200);
  }
});

// ── 실시간 날씨 (Open-Meteo API) ──
// ── 여행지 대표 사진 (Unsplash) ──
var DEST_PHOTOS = {
  lisbon: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=480&h=320&fit=crop&q=80',
  danang: 'https://images.unsplash.com/photo-1559592413-7cbb2e83e66a?w=480&h=320&fit=crop&q=80',
  jeju: 'https://images.unsplash.com/photo-1598608285406-590e6f64769d?w=480&h=320&fit=crop&q=80',
  taipei: 'https://images.unsplash.com/photo-1470250571284-ae74c67b7d32?w=480&h=320&fit=crop&q=80',
  osaka: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=480&h=320&fit=crop&q=80',
  tokyo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=480&h=320&fit=crop&q=80',
  bangkok: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=480&h=320&fit=crop&q=80',
  bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=480&h=320&fit=crop&q=80',
  chiangmai: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=480&h=320&fit=crop&q=80',
  singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=480&h=320&fit=crop&q=80',
  cebu: 'https://images.unsplash.com/photo-1571519380246-14cbd359f046?w=480&h=320&fit=crop&q=80',
  nhatrang: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=480&h=320&fit=crop&q=80',
  fukuoka: 'https://images.unsplash.com/photo-1531261836244-e99e1c490f6e?w=480&h=320&fit=crop&q=80',
  sapporo: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=480&h=320&fit=crop&q=80',
  okinawa: 'https://images.unsplash.com/photo-1590050777447-e2ede8c0f7b4?w=480&h=320&fit=crop&q=80',
  kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=480&h=320&fit=crop&q=80',
  phuquoc: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=480&h=320&fit=crop&q=80',
  hochiminh: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=480&h=320&fit=crop&q=80',
  hanoi: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=480&h=320&fit=crop&q=80',
  boracay: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=480&h=320&fit=crop&q=80',
  phuket: 'https://images.unsplash.com/photo-1552915394-5b0f0df2b276?w=480&h=320&fit=crop&q=80',
  hongkong: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=480&h=320&fit=crop&q=80',
  guam: 'https://images.unsplash.com/photo-1559562942-e9893e0c9d7c?w=480&h=320&fit=crop&q=80',
  hawaii: 'https://images.unsplash.com/photo-1507876466758-e54b04e9f16f?w=480&h=320&fit=crop&q=80',
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=480&h=320&fit=crop&q=80',
  kualalumpur: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f09?w=480&h=320&fit=crop&q=80',
  maldives: 'https://images.unsplash.com/photo-1573843981267-be1480e65a72?w=480&h=320&fit=crop&q=80',
  sydney: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=480&h=320&fit=crop&q=80',
  shanghai: 'https://images.unsplash.com/photo-1537531829901-a289ce15ad4d?w=480&h=320&fit=crop&q=80',
  barcelona: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=480&h=320&fit=crop&q=80',
  saipan: 'https://images.unsplash.com/photo-1596401057633-54a921691d8e?w=480&h=320&fit=crop&q=80',
  palawan: 'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=480&h=320&fit=crop&q=80',
  sanya: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=480&h=320&fit=crop&q=80'
};

// ── 여행지 플래그 이모지 ──
var DEST_FLAG = {
  lisbon: '🇵🇹', danang: '🇻🇳', jeju: '🇰🇷', taipei: '🇹🇼', osaka: '🇯🇵', tokyo: '🇯🇵',
  bangkok: '🇹🇭', bali: '🇮🇩', chiangmai: '🇹🇭', singapore: '🇸🇬', cebu: '🇵🇭', nhatrang: '🇻🇳',
  fukuoka: '🇯🇵', sapporo: '🇯🇵', okinawa: '🇯🇵', kyoto: '🇯🇵', phuquoc: '🇻🇳', hochiminh: '🇻🇳',
  hanoi: '🇻🇳', boracay: '🇵🇭', phuket: '🇹🇭', hongkong: '🇭🇰', guam: '🇬🇺', hawaii: '🇺🇸',
  paris: '🇫🇷', kualalumpur: '🇲🇾', maldives: '🇲🇻', sydney: '🇦🇺', shanghai: '🇨🇳', barcelona: '🇪🇸',
  saipan: '🇲🇵', palawan: '🇵🇭', sanya: '🇨🇳'
};

// WMO 날씨 코드 → 한국어 매핑
var WMO_KR = {
  0: '맑음', 1: '대체로 맑음', 2: '구름 조금', 3: '흐림',
  45: '안개', 48: '짙은 안개',
  51: '가벼운 이슬비', 53: '이슬비', 55: '짙은 이슬비',
  56: '얼어붙는 이슬비', 57: '강한 결빙 이슬비',
  61: '약한 비', 63: '비', 65: '강한 비',
  66: '약한 결빙 비', 67: '강한 결빙 비',
  71: '약한 눈', 73: '눈', 75: '강한 눈', 77: '싸라기눈',
  80: '소나기', 81: '강한 소나기', 82: '폭우',
  85: '약한 눈보라', 86: '강한 눈보라',
  95: '뇌우', 96: '우박 뇌우', 99: '강한 우박 뇌우'
};

// ── 날씨 fetch 전역 버전 카운터 (race condition 방지) ──
var _weatherRequestId = [0, 0, 0]; // 컬럼별 요청 ID
var _currentDestIdx = [-1, -1, -1]; // 컬럼별 현재 표시 중인 destIdx

function fetchWeather() {
  // 현재 표시 중인 3개 여행지만 호출하여 API 절약
  for (var ci = 0; ci < 3; ci++) {
    _fetchWeatherForCol(ci, 0, _currentDestIdx[ci] >= 0 ? _currentDestIdx[ci] : undefined);
  }
}

// ── 디바운스 래퍼: fetchWeather 중복 호출 방지 ──
// updateColumn이 3개 컬럼에 대해 연속 호출될 때
// fetchWeather가 3번 실행되어 9+개 API 요청이 발생하는 문제 해결
// 날씨 셀 sk 추가 헬퍼 (옵션/날짜 변경 시 스켈레톤 표시용)
function _addWeatherSk() {
  [0, 1, 2].forEach(function (ci) {
    ['cur-temp-', 'weekly-forecast-'].forEach(function (p) {
      var e = document.getElementById(p + ci);
      if (e) e.classList.add('sk');
    });
  });
}

var _fetchWeatherTimer = null;
function fetchWeatherDebounced() {
  if (_fetchWeatherTimer) clearTimeout(_fetchWeatherTimer);
  _fetchWeatherTimer = setTimeout(function () {
    _fetchWeatherTimer = null;
    fetchWeather();
  }, 300);
}

function _fetchWeatherForCol(colIdx, retryCount, forcedDestIdx) {
  var MAX_RETRIES = 3;
  var TIMEOUT_MS = 10000; // 10초 타임아웃

  // forcedDestIdx가 있으면 sel.value 대신 사용 (동기화 타이밍 문제 방지)
  var sel = document.getElementById('sel' + colIdx);
  var idx;
  if (typeof forcedDestIdx === 'number' && forcedDestIdx >= 0) {
    idx = forcedDestIdx;
  } else {
    if (!sel || !sel.value) {
      if (retryCount < MAX_RETRIES) {
        setTimeout(function () { _fetchWeatherForCol(colIdx, retryCount + 1); }, 200);
      }
      return;
    }
    idx = parseInt(sel.value);
  }
  if (isNaN(idx) || !v1_0_9_DEST_DATA[idx]) return;
  var dest = v1_0_9_DEST_DATA[idx];

  // 이미 로드된 경우 스킵 — 단, 이전에 실패했으면 재시도 허용
  if (typeof dest._todayMax === 'number' && !dest._weatherFailed) {
    _updateWeatherCell(colIdx, dest);
    _updateForecastCell(colIdx, dest);
    return;
  }

  var coords = DEST_COORDS[dest.id];
  if (!coords) {
    console.warn('[Weather] col' + colIdx + ' (' + dest.id + '): DEST_COORDS에 좌표 없음');
    return;
  }

  // Race condition 방지: 요청 시점 destIdx 캡처 + 요청 ID 증가
  var requestDestIdx = idx;
  _weatherRequestId[colIdx] = (_weatherRequestId[colIdx] || 0) + 1;
  var myRequestId = _weatherRequestId[colIdx];

  var apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + coords[0]
    + '&longitude=' + coords[1]
    + '&current=temperature_2m,weather_code'
    + '&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max'
    + '&timezone=auto&forecast_days=7&past_days=1';

  // AbortController 타임아웃 설정
  var controller = null;
  var timeoutId = null;
  if (typeof AbortController !== 'undefined') {
    controller = new AbortController();
    timeoutId = setTimeout(function () { controller.abort(); }, TIMEOUT_MS);
  }

  var fetchOpts = controller ? { signal: controller.signal } : {};

  fetch(apiUrl, fetchOpts)
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (data) {
      if (timeoutId) clearTimeout(timeoutId);

      // Race condition 체크: 현재 컬럼의 destIdx가 요청 시점과 다르면 무시
      if (typeof _currentDestIdx !== 'undefined' && _currentDestIdx[colIdx] !== requestDestIdx) {
        console.log('[Weather] col' + colIdx + ': 여행지 변경됨, 응답 무시');
        return;
      }
      // 요청 ID 체크: 더 최신 요청이 있으면 이 응답 무시
      if (myRequestId !== _weatherRequestId[colIdx]) {
        console.log('[Weather] col' + colIdx + ': 더 최신 요청 있음, 응답 무시');
        return;
      }

      if (!data || !data.current) {
        console.warn('[Weather] col' + colIdx + ' (' + dest.id + '): API 응답에 current 데이터 없음');
        dest._weatherFailed = true;
        // 재시도
        if (retryCount < MAX_RETRIES) {
          var delay = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s
          console.log('[Weather] col' + colIdx + ': ' + delay + 'ms 후 재시도 (' + (retryCount + 1) + '/' + MAX_RETRIES + ')');
          setTimeout(function () { _fetchWeatherForCol(colIdx, retryCount + 1); }, delay);
        }
        return;
      }

      var cur = data.current;
      var t = Math.round(cur.temperature_2m);
      var wc = cur.weather_code;
      dest._currentTemp = t;
      dest._weatherCode = wc;
      dest._weatherText = WMO_KR[wc] || '맑음';
      dest._weatherFailed = false; // 성공 시 실패 플래그 해제

      // 오늘 최고/최저 + 어제 비교
      if (data.daily) {
        var maxTemps = data.daily.temperature_2m_max || [];
        var minTemps = data.daily.temperature_2m_min || [];
        var rainProbs = data.daily.precipitation_probability_max || [];
        // past_days=1이므로 index 0=어제, 1=오늘
        var yesterdayMax = maxTemps.length > 0 ? maxTemps[0] : null;
        var todayMax = maxTemps.length > 1 ? Math.round(maxTemps[1]) : null;
        var todayMin = minTemps.length > 1 ? Math.round(minTemps[1]) : null;
        // 0도도 유효한 값이므로 null 대신 숫자를 보장
        dest._todayMax = (todayMax !== null && todayMax !== undefined) ? todayMax : t;
        dest._todayMin = (todayMin !== null && todayMin !== undefined) ? todayMin : t;
        if (yesterdayMax !== null && dest._todayMax !== null) {
          dest._tempDiff = Math.round(dest._todayMax - yesterdayMax);
        }
        dest._todayRainProb = rainProbs.length > 1 ? Math.round(rainProbs[1]) : 0;
      } else {
        // daily 데이터 없는 경우 현재 기온으로 대체
        dest._todayMax = t;
        dest._todayMin = t;
        dest._todayRainProb = 0;
      }
      console.log('[Weather] col' + colIdx + ' ' + dest.id + ': max=' + dest._todayMax + '° min=' + dest._todayMin + '° code=' + wc + ' (' + dest._weatherText + ')');
      _updateWeatherCell(colIdx, dest);
      _updateForecastCell(colIdx, dest);
    })
    .catch(function (err) {
      if (timeoutId) clearTimeout(timeoutId);
      dest._weatherFailed = true;

      var errMsg = (err && err.name === 'AbortError') ? '타임아웃 (' + TIMEOUT_MS + 'ms)' : (err ? err.message : '알 수 없는 오류');
      console.warn('[Weather] col' + colIdx + ' (' + dest.id + '): 실패 - ' + errMsg);

      // 재시도 (exponential backoff: 1s, 2s, 4s)
      if (retryCount < MAX_RETRIES) {
        var delay = Math.pow(2, retryCount) * 1000;
        console.log('[Weather] col' + colIdx + ': ' + delay + 'ms 후 재시도 (' + (retryCount + 1) + '/' + MAX_RETRIES + ')');
        setTimeout(function () { _fetchWeatherForCol(colIdx, retryCount + 1); }, delay);
      } else {
        console.error('[Weather] col' + colIdx + ' (' + dest.id + '): 최대 재시도 횟수 초과');
      }
    });
}

// WMO 코드 → Meteocons 아이콘 파일명 매핑
var WMO_ICON = {
  0: 'clear', 1: 'partly-cloudy', 2: 'partly-cloudy', 3: 'overcast',
  45: 'fog', 48: 'fog',
  51: 'drizzle', 53: 'drizzle', 55: 'drizzle',
  56: 'sleet', 57: 'sleet',
  61: 'rain', 63: 'rain', 65: 'extreme-rain',
  66: 'sleet', 67: 'sleet',
  71: 'snow', 73: 'snow', 75: 'extreme-snow', 77: 'hail',
  80: 'rain', 81: 'extreme-rain', 82: 'extreme-rain',
  85: 'snow', 86: 'extreme-snow',
  95: 'thunderstorms', 96: 'thunderstorms', 99: 'thunderstorms'
};
// 날씨 이모지 매핑 (외부 CDN 없이 바로 표시)
var WMO_EMOJI = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌧️',
  56: '🌨️', 57: '🌨️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  66: '🌨️', 67: '🌨️',
  71: '🌨️', 73: '❄️', 75: '❄️', 77: '🌨️',
  80: '🌦️', 81: '🌧️', 82: '⛈️',
  85: '🌨️', 86: '❄️',
  95: '⛈️', 96: '⛈️', 99: '⛈️'
};
function getWeatherEmoji(wc) {
  return WMO_EMOJI[wc] || '🌡️';
}

function _updateWeatherCell(colIdx, d, _retryCount) {
  if (!d || typeof d._todayMax !== 'number') return;
  var ctEl = document.getElementById('cur-temp-' + colIdx);
  if (!ctEl) {
    var retry = _retryCount || 0;
    if (retry < 3) {
      setTimeout(function () { _updateWeatherCell(colIdx, d, retry + 1); }, 200);
    } else {
      console.warn('[Weather] cur-temp-' + colIdx + ' DOM 요소 없음 (재시도 초과)');
    }
    return;
  }
  var kEl = ctEl.querySelector('.kicker');
  var mEl = ctEl.querySelector('.main');
  var sEl = ctEl.querySelector('.sub');
  if (kEl) kEl.textContent = '낮(최고기온)';
  ctEl.classList.remove('sk'); // 스켈레톤 제거
  if (mEl) {
    var emoji = getWeatherEmoji(d._weatherCode);
    mEl.innerHTML = '<span style="font-size:36px;vertical-align:middle;margin-right:6px;line-height:1;position:relative;top:-4px;">' + emoji + '</span>' + d._todayMax + '°';
    mEl.style.color = '';
  }
  if (sEl) {
    sEl.textContent = d._weatherText + ' / 강수확률 ' + (d._todayRainProb || 0) + '%';
  }
}

function _updateForecastCell(colIdx, d, _retryCount) {
  if (!d || typeof d._todayMin !== 'number') return;
  var el = document.getElementById('weekly-forecast-' + colIdx);
  if (!el) {
    // DOM 미존재 시 200ms 후 재시도 (최대 3회)
    var retry = _retryCount || 0;
    if (retry < 3) {
      setTimeout(function () { _updateForecastCell(colIdx, d, retry + 1); }, 200);
    }
    return;
  }
  var kEl = el.querySelector('.kicker');
  var mEl = el.querySelector('.main');
  var sEl = el.querySelector('.sub');
  if (kEl) kEl.textContent = '밤(최저기온)';
  el.classList.remove('sk'); // 스켈레톤 제거
  if (mEl) {
    var emoji = getWeatherEmoji(d._weatherCode);
    mEl.innerHTML = '<span style="font-size:36px;vertical-align:middle;margin-right:6px;line-height:1;position:relative;top:-4px;">' + emoji + '</span>' + d._todayMin + '°';
    mEl.style.color = '';
  }
  if (sEl) {
    sEl.textContent = d._weatherText + ' / 강수확률 ' + d._todayRainProb + '%';
  }
}
// ── 시작 검증: 매핑 누락 경고 ──
(function validateDestMappings() {
  var requiredMaps = {
    DEST_REGION: typeof DEST_REGION !== 'undefined' ? DEST_REGION : null,
    DEST_COUNTRY: typeof DEST_COUNTRY !== 'undefined' ? DEST_COUNTRY : null,
    DEST_COORDS: typeof DEST_COORDS !== 'undefined' ? DEST_COORDS : null,
  };
  var warnings = [];
  v1_0_9_DEST_DATA.forEach(function (d) {
    for (var mapName in requiredMaps) {
      var map = requiredMaps[mapName];
      if (map && !map[d.id]) {
        warnings.push('[' + mapName + '] ' + d.id + ' 누락');
      }
    }
  });
  if (warnings.length > 0) {
    console.warn('⚠️ [여행지 매핑 검증] 누락된 항목 ' + warnings.length + '개:');
    warnings.forEach(function (w) { console.warn('  → ' + w); });
  } else {
    console.log('✅ [여행지 매핑 검증] 총 ' + v1_0_9_DEST_DATA.length + '개 여행지 — 필수 매핑 완료');
  }
})();

fetchWeather();



// ── Travelpayouts 실시간 숙박 가격 연동 ──
window._fetchHotelPrices = function fetchTpHotelPrices() {
  var TP_MARKER = '510036';
  // 항공 DEST_IATA와 동일한 매핑 (제주·나트랑 제외)
  // Booking.com 검색 링크 생성 (도시명 매핑)
  var BOOKING_CITY = {
    lisbon: 'Lisbon', danang: 'Da+Nang', jeju: 'Jeju', taipei: 'Taipei',
    osaka: 'Osaka', tokyo: 'Tokyo', bangkok: 'Bangkok', bali: 'Bali',
    chiangmai: 'Chiang+Mai', singapore: 'Singapore', cebu: 'Cebu',
    nhatrang: 'Nha+Trang', fukuoka: 'Fukuoka', sapporo: 'Sapporo',
    okinawa: 'Okinawa', kyoto: 'Kyoto', miyakojima: 'Miyako+Island',
    phuquoc: 'Phu+Quoc', hochiminh: 'Ho+Chi+Minh+City', hanoi: 'Hanoi',
    boracay: 'Boracay', phuket: 'Phuket', hongkong: 'Hong+Kong',
    guam: 'Guam', hawaii: 'Honolulu', paris: 'Paris',
    kualalumpur: 'Kuala+Lumpur', maldives: 'Maldives',
    sydney: 'Sydney', shanghai: 'Shanghai', barcelona: 'Barcelona',
    saipan: 'Saipan', palawan: 'Puerto+Princesa', sanya: 'Sanya'
  };
  // BOOKING_CITY와 _makeBookingComLink를 글로벌로 노출 (updateResultsByFilters, changeDest에서 접근)
  if (!window.BOOKING_CITY) {
    window.BOOKING_CITY = BOOKING_CITY;
  }
  var _makeBookingComLink = function (destId, stars) {
    var city = (window.BOOKING_CITY || BOOKING_CITY)[destId] || '';
    var _hDates = _getSearchDates();
    var ci = _hDates.start;
    var co = _hDates.end;
    var fmt = function (d) {
      return d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0');
    };
    var url = 'https://www.booking.com/searchresults.ko.html?ss=' + city +
      '&checkin=' + fmt(ci) + '&checkout=' + fmt(co) +
      '&group_adults=2&no_rooms=1&lang=ko';
    // 예산별 성급 필터 추가
    if (stars === 5) url += '&nflt=class%3D5';
    else if (stars === 4) url += '&nflt=class%3D4%3Bclass%3D5';
    else if (stars === 3) url += '&nflt=class%3D3%3Bclass%3D4';
    else if (stars === 0) url += '&order=price'; // 최저가 정렬
    return url;
  };
  window._makeBookingComLink = _makeBookingComLink;

  var HOTEL_IATA = {
    lisbon: 'LIS', danang: 'DAD', taipei: 'TPE',
    osaka: 'OSA', tokyo: 'TYO', bangkok: 'BKK', bali: 'DPS',
    chiangmai: 'CNX', singapore: 'SIN', cebu: 'CEB',
    fukuoka: 'FUK', sapporo: 'SPK', okinawa: 'OKA', kyoto: 'OSA',
    phuquoc: 'PQC', hochiminh: 'SGN', hanoi: 'HAN', boracay: 'MPH',
    phuket: 'HKT', hongkong: 'HKG', guam: 'GUM', hawaii: 'HNL',
    paris: 'PAR', kualalumpur: 'KUL', maldives: 'MLE',
    sydney: 'SYD', shanghai: 'SHA', barcelona: 'BCN',
    macau: 'MFM', beijing: 'PEK', qingdao: 'TAO',
    saipan: 'SPN', palawan: 'PPS', sanya: 'SYX'
  };
  // 선택 날짜 기반 호텔 조회
  var _hDatesForApi = _getSearchDates();
  var _hotelCheckin = _hDatesForApi.skyStart;
  var _hotelNights = Math.max(1, Math.ceil((_hDatesForApi.end - _hDatesForApi.start) / (1000 * 60 * 60 * 24)));
  fetch('https://travel.le2jy.workers.dev/api/hotels/all?stars=3&checkin=' + _hotelCheckin + '&nights=' + _hotelNights)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.data) return;
      v1_0_9_DEST_DATA.forEach(function (dest) {
        var iata = HOTEL_IATA[dest.id];
        if (!iata || !data.data[iata]) return;
        var entry = data.data[iata];
        if (!entry.priceKRW && !entry.priceLabel) return;
        var _hkrw = entry.priceKRW || parseInt((entry.priceLabel + '').replace(/[^0-9]/g, '')) * 10000;
        dest._hotelPrice = _hkrw.toLocaleString() + '원';
        dest._hotelPriceKRW = _hkrw;
        dest._hotelLink = entry.bookingLink ||
          _makeBookingComLink(dest.id, 3);
      });
      // 비교화면이 이미 열려있으면 즉시 업데이트
      if (document.getElementById('compare-view') &&
        document.getElementById('compare-view').style.display === 'block') {
        var _curBudget = _getCurrentBudget();
        var _isApiVip = _curBudget >= 300 && _curBudget < 9000;
        var _isApiUnlimited = _curBudget >= 9000;
        for (var i = 0; i < 3; i++) {
          var sel = document.getElementById('sel' + i);
          if (!sel) continue;
          var idx = parseInt(sel.value);
          var d = v1_0_9_DEST_DATA[idx];
          if (!d || !d._hotelPrice) continue;
          var hotelEl = document.getElementById('hotel-' + i);
          if (!hotelEl) continue;
          var hmEl = hotelEl.querySelector('.main');
          // 가격만 업데이트 — sub/kicker는 오버라이드에서 이미 예산별로 설정됨
          if (hmEl && d._hotelPriceKRW) hmEl.textContent = Math.round(d._hotelPriceKRW / 10000) + '만원~/박';
          // 예약 버튼: 예산별 올바른 stars 링크
          if (!hotelEl.querySelector('.tp-hotel-btn')) {
            var _apiStars = _isApiVip ? 5 : (_isApiUnlimited || _curBudget >= 120) ? 3 : 0;
            if (!_isApiVip && _curBudget >= 200) _apiStars = 4;
            var hBtn = document.createElement('a');
            hBtn.href = _makeBookingComLink(d.id, _apiStars); hBtn.target = '_blank';
            hBtn.rel = 'noopener noreferrer';
            hBtn.className = 'tp-book-btn tp-hotel-btn';
            hBtn.textContent = '숙소 예약하기 ›';
            hotelEl.appendChild(hBtn);
          }
        }
      }

      // 실시간 가격 도착 → 총 비용 재계산
      if (typeof window._recalcPriceCards === 'function') window._recalcPriceCards();
    })
    .catch(function () { /* Hotellook API 실패 시 하드코딩 데이터 유지 */ });

  // VIP용 5성급 호텔 데이터도 미리 가져오기
  fetch('https://travel.le2jy.workers.dev/api/hotels/all?stars=5&checkin=' + _hotelCheckin + '&nights=' + _hotelNights)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.data) return;
      v1_0_9_DEST_DATA.forEach(function (dest) {
        var iata = HOTEL_IATA[dest.id];
        if (!iata || !data.data[iata]) return;
        var entry = data.data[iata];
        if (!entry.priceKRW && !entry.priceLabel) return;
        var _vhkrw = entry.priceKRW || parseInt((entry.priceLabel + '').replace(/[^0-9]/g, '')) * 10000;
        dest._vipHotelPrice = _vhkrw.toLocaleString() + '원';
        dest._vipHotelPriceKRW = _vhkrw;
        dest._vipHotelName = entry.hotelName || '';
        dest._vipHotelStars = entry.stars || 5;
        dest._vipHotelLink = entry.bookingLink || dest._hotelLink;
      });
      console.log('[VIP] 5성급 호텔 데이터 로드 완료');
    })
    .catch(function (e) { console.log('VIP hotel API error:', e); });
}; // end _fetchHotelPrices
window._fetchHotelPrices(); // 초기 실행

// ── 위치 기반 출발 공항 자동 감지 ──
window.DEPARTURE_AIRPORT = 'ICN'; // 기본값 (인천)
window.DEPARTURE_AIRPORT_NAME = '인천';

(function detectDepartureAirport() {
  // 한국 주요 공항 좌표 및 서비스 범위
  var KR_AIRPORTS = [
    { code: 'GMP', name: '김포', lat: 37.558, lng: 126.795, radiusKm: 50 },  // 서울 서부
    { code: 'ICN', name: '인천', lat: 37.469, lng: 126.451, radiusKm: 80 },  // 수도권 전체
    { code: 'CJU', name: '제주', lat: 33.511, lng: 126.493, radiusKm: 60 },  // 제주도
    { code: 'PUS', name: '부산', lat: 35.179, lng: 128.938, radiusKm: 80 },  // 부산·경남
    { code: 'TAE', name: '대구', lat: 35.894, lng: 128.659, radiusKm: 70 },  // 대구·경북
    { code: 'KWJ', name: '광주', lat: 35.126, lng: 126.809, radiusKm: 80 },  // 광주·전라
    { code: 'CJJ', name: '청주', lat: 36.717, lng: 127.499, radiusKm: 70 },  // 청주·충청
  ];

  function haversineKm(lat1, lng1, lat2, lng2) {
    var R = 6371;
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLng = (lng2 - lng1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function applyAirport(code, name) {
    window.DEPARTURE_AIRPORT = code;
    window.DEPARTURE_AIRPORT_NAME = name;
    // 이미 렌더링된 항공권 링크 갱신
    if (typeof updateFlightLinks === 'function') updateFlightLinks();
  }

  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(function (pos) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;

    // 한국 영역 밖이면 무시 (위도 33~38.5, 경도 124~130)
    if (lat < 33 || lat > 38.5 || lng < 124 || lng > 130) return;

    var best = null, bestDist = Infinity;
    KR_AIRPORTS.forEach(function (ap) {
      var d = haversineKm(lat, lng, ap.lat, ap.lng);
      if (d < ap.radiusKm && d < bestDist) {
        bestDist = d;
        best = ap;
      }
    });

    // 범위 내 공항 없으면 단순 최근접 공항 사용
    if (!best) {
      KR_AIRPORTS.forEach(function (ap) {
        var d = haversineKm(lat, lng, ap.lat, ap.lng);
        if (d < bestDist) { bestDist = d; best = ap; }
      });
    }

    if (best) applyAirport(best.code, best.name);
  }, function () { /* 권한 거부 → ICN 유지 */ }, { timeout: 5000 });
})();

// ── 목적지 → IATA 도시코드 공유 상수 (TP API·비자 API 공용) ──
// NOTE: codes(9578)은 공항코드(KIX/NRT)라 별도 유지, 이 맵은 도시코드(OSA/TYO)
window.DEST_CITY_IATA = {
  lisbon: 'LIS', danang: 'DAD', taipei: 'TPE',
  osaka: 'OSA', tokyo: 'TYO', bangkok: 'BKK', bali: 'DPS',
  chiangmai: 'CNX', singapore: 'SIN', cebu: 'CEB',
  fukuoka: 'FUK', sapporo: 'SPK', okinawa: 'OKA', kyoto: 'OSA',
  phuquoc: 'PQC', hochiminh: 'SGN', hanoi: 'HAN', boracay: 'MPH',
  phuket: 'HKT', hongkong: 'HKG', guam: 'GUM', hawaii: 'HNL',
  paris: 'PAR', kualalumpur: 'KUL', maldives: 'MLE',
  sydney: 'SYD', shanghai: 'SHA', barcelona: 'BCN',
  macau: 'MFM', beijing: 'PEK', qingdao: 'TAO',
  saipan: 'SPN', palawan: 'PPS', sanya: 'SYX',
  istanbul: 'IST', madrid: 'MAD', london: 'LON'
};

// ── 여행지별 월간 계절 보정 계수 (항공f / 숙박h) ──
// 1.0 = 연중 평균, >1.0 = 성수기(비쌈), <1.0 = 비수기(저렴)
// 16개 기후 패턴 → 31개 여행지 매핑
var SEASONAL_FACTORS = {
  // ── 일본 본토: 벚꽃(3-4), 여름방학(7-8), 단풍(10-11), 연말(12), 설(1) ──
  japan_main: [
    {f:1.15,h:1.10},{f:1.05,h:1.00},{f:1.20,h:1.15},{f:1.25,h:1.20},
    {f:1.10,h:1.05},{f:0.85,h:0.85},{f:1.30,h:1.25},{f:1.40,h:1.35},
    {f:0.95,h:0.90},{f:1.10,h:1.10},{f:1.05,h:1.00},{f:1.20,h:1.15}
  ],
  // 삿포로: 눈축제(2월), 라벤더(7월), 스키(12-1월)
  japan_snow: [
    {f:1.20,h:1.15},{f:1.30,h:1.25},{f:1.10,h:1.05},{f:1.00,h:0.95},
    {f:0.90,h:0.85},{f:0.85,h:0.80},{f:1.25,h:1.20},{f:1.30,h:1.25},
    {f:0.90,h:0.85},{f:1.05,h:1.00},{f:1.00,h:0.95},{f:1.25,h:1.20}
  ],
  // 오키나와/미야코지마: 해양리조트 — 여름(6-9) 최성수기, 겨울 비수기
  japan_beach: [
    {f:0.90,h:0.85},{f:0.85,h:0.80},{f:1.00,h:0.95},{f:1.05,h:1.00},
    {f:1.10,h:1.05},{f:1.15,h:1.10},{f:1.35,h:1.30},{f:1.40,h:1.35},
    {f:1.15,h:1.10},{f:1.00,h:0.95},{f:0.90,h:0.85},{f:1.05,h:1.00}
  ],
  // ── 태국/라오스: 건기(11-2) 성수기, 우기(5-10) 비수기 ──
  sea_thai: [
    {f:1.25,h:1.20},{f:1.15,h:1.10},{f:1.00,h:0.95},{f:0.95,h:0.90},
    {f:0.85,h:0.80},{f:0.80,h:0.75},{f:0.85,h:0.80},{f:0.90,h:0.85},
    {f:0.80,h:0.75},{f:0.85,h:0.80},{f:1.10,h:1.05},{f:1.30,h:1.25}
  ],
  // ── 베트남 중부/남부(다낭,호치민,푸꾸옥): 건기(12-4) 성수기, 우기(5-11) ──
  sea_viet: [
    {f:1.20,h:1.15},{f:1.15,h:1.10},{f:1.05,h:1.00},{f:1.00,h:0.95},
    {f:0.85,h:0.80},{f:0.80,h:0.75},{f:0.85,h:0.80},{f:0.90,h:0.85},
    {f:0.85,h:0.80},{f:0.90,h:0.85},{f:1.05,h:1.00},{f:1.25,h:1.20}
  ],
  // 베트남 북부(하노이): 가을(9-11) 베스트, 겨울(12-2) 쌀쌀, 미세먼지(3-4)
  sea_viet_north: [
    {f:1.10,h:1.05},{f:1.00,h:0.95},{f:0.85,h:0.80},{f:0.85,h:0.80},
    {f:0.90,h:0.85},{f:0.80,h:0.75},{f:0.85,h:0.80},{f:0.90,h:0.85},
    {f:1.10,h:1.05},{f:1.15,h:1.10},{f:1.15,h:1.10},{f:1.20,h:1.15}
  ],
  // 나트랑: 건기(1-8) 성수기, 우기(9-12) 태풍 비수기
  sea_nhatrang: [
    {f:1.15,h:1.10},{f:1.10,h:1.05},{f:1.05,h:1.00},{f:1.00,h:0.95},
    {f:0.95,h:0.90},{f:0.90,h:0.85},{f:1.10,h:1.05},{f:1.15,h:1.10},
    {f:0.80,h:0.75},{f:0.75,h:0.70},{f:0.85,h:0.80},{f:1.10,h:1.05}
  ],
  // 발리: 건기(4-10) 성수기, 우기(11-3) 비수기 — 경유 필수 노선이라 성수기 항공 진폭 큼
  sea_bali: [
    {f:0.85,h:0.80},{f:0.80,h:0.75},{f:0.85,h:0.80},{f:1.05,h:1.00},
    {f:1.15,h:1.10},{f:1.20,h:1.15},{f:1.45,h:1.40},{f:1.50,h:1.45},
    {f:1.20,h:1.15},{f:1.05,h:1.00},{f:0.85,h:0.80},{f:0.95,h:0.90}
  ],
  // 필리핀(세부/보라카이): 건기(12-5) 성수기, 우기·태풍(6-11) 비수기
  sea_phil: [
    {f:1.20,h:1.15},{f:1.15,h:1.10},{f:1.10,h:1.05},{f:1.05,h:1.00},
    {f:1.00,h:0.95},{f:0.80,h:0.75},{f:0.85,h:0.80},{f:0.80,h:0.75},
    {f:0.75,h:0.70},{f:0.80,h:0.75},{f:0.90,h:0.85},{f:1.25,h:1.20}
  ],
  // 말레이시아: 연중 편차 적음, 건기(5-9) 약간 성수기
  sea_malay: [
    {f:1.10,h:1.05},{f:1.00,h:0.95},{f:0.95,h:0.90},{f:0.95,h:0.90},
    {f:1.00,h:0.95},{f:1.05,h:1.00},{f:1.10,h:1.05},{f:1.10,h:1.05},
    {f:0.95,h:0.90},{f:0.90,h:0.85},{f:0.95,h:0.90},{f:1.15,h:1.10}
  ],
  // ── 동아시아(대만/홍콩/상하이): 춘절(1-2), 여름(7-8), 국경절(10) ──
  east_asia: [
    {f:1.20,h:1.15},{f:1.15,h:1.10},{f:0.95,h:0.90},{f:1.00,h:0.95},
    {f:1.05,h:1.00},{f:0.90,h:0.85},{f:1.15,h:1.10},{f:1.20,h:1.15},
    {f:0.90,h:0.85},{f:1.15,h:1.10},{f:0.90,h:0.85},{f:1.10,h:1.05}
  ],
  // 싱가포르: 연중 변동 적음, 연말·춘절만 성수기
  east_asia_sg: [
    {f:1.10,h:1.05},{f:1.05,h:1.00},{f:0.95,h:0.90},{f:0.95,h:0.90},
    {f:0.90,h:0.85},{f:1.00,h:0.95},{f:1.05,h:1.00},{f:1.05,h:1.00},
    {f:0.90,h:0.85},{f:0.95,h:0.90},{f:1.00,h:0.95},{f:1.15,h:1.10}
  ],
  // ── 유럽: 여름(6-8) 피크, 겨울(1-2) 비수기, 크리스마스(12) 반등 ──
  europe: [
    {f:0.80,h:0.75},{f:0.80,h:0.75},{f:0.90,h:0.85},{f:1.00,h:0.95},
    {f:1.10,h:1.05},{f:1.25,h:1.20},{f:1.40,h:1.35},{f:1.45,h:1.40},
    {f:1.15,h:1.10},{f:1.05,h:1.00},{f:0.85,h:0.80},{f:1.15,h:1.10}
  ],
  // ── 태평양(괌/하와이): 한국 겨울(12-2) 성수기, 여름방학(7-8) ──
  pacific: [
    {f:1.20,h:1.15},{f:1.10,h:1.05},{f:0.95,h:0.90},{f:0.90,h:0.85},
    {f:0.85,h:0.80},{f:0.85,h:0.80},{f:1.20,h:1.15},{f:1.25,h:1.20},
    {f:0.90,h:0.85},{f:0.90,h:0.85},{f:1.00,h:0.95},{f:1.25,h:1.20}
  ],
  // 몰디브: 건기(12-4) 최성수기, 우기(5-11) 비수기
  pacific_maldives: [
    {f:1.30,h:1.25},{f:1.25,h:1.20},{f:1.15,h:1.10},{f:1.05,h:1.00},
    {f:0.80,h:0.75},{f:0.75,h:0.70},{f:0.75,h:0.70},{f:0.80,h:0.75},
    {f:0.85,h:0.80},{f:0.85,h:0.80},{f:0.95,h:0.90},{f:1.35,h:1.30}
  ],
  // 호주: 남반구 — 한국겨울(12-2)=호주여름 성수기, 한국여름=호주겨울 비수기
  pacific_sydney: [
    {f:1.25,h:1.20},{f:1.15,h:1.10},{f:1.00,h:0.95},{f:0.90,h:0.85},
    {f:0.85,h:0.80},{f:0.80,h:0.75},{f:0.85,h:0.80},{f:0.85,h:0.80},
    {f:0.90,h:0.85},{f:1.00,h:0.95},{f:1.10,h:1.05},{f:1.30,h:1.25}
  ],
  // ── 국내(제주): 여름(7-8), 황금연휴(5), 추석(9), 설(1-2) ──
  domestic: [
    {f:1.10,h:1.05},{f:1.05,h:1.00},{f:0.90,h:0.90},{f:0.95,h:0.95},
    {f:1.15,h:1.10},{f:0.90,h:0.90},{f:1.30,h:1.25},{f:1.35,h:1.30},
    {f:1.05,h:1.00},{f:1.10,h:1.05},{f:0.90,h:0.90},{f:1.10,h:1.05}
  ]
};

// 여행지 ID → 기후 패턴 매핑 (없으면 DEST_REGION으로 폴백)
var DEST_SEASONAL_GROUP = {
  osaka:'japan_main', tokyo:'japan_main', fukuoka:'japan_main', kyoto:'japan_main',
  sapporo:'japan_snow',
  okinawa:'japan_beach', miyakojima:'japan_beach',
  bangkok:'sea_thai', chiangmai:'sea_thai', phuket:'sea_thai',
  danang:'sea_viet', hochiminh:'sea_viet', phuquoc:'sea_viet',
  hanoi:'sea_viet_north',
  nhatrang:'sea_nhatrang',
  bali:'sea_bali',
  cebu:'sea_phil', boracay:'sea_phil',
  kualalumpur:'sea_malay',
  taipei:'east_asia', hongkong:'east_asia', shanghai:'east_asia', macau:'east_asia',
  singapore:'east_asia_sg',
  lisbon:'europe', paris:'europe', barcelona:'europe',
  guam:'pacific', hawaii:'pacific',
  maldives:'pacific_maldives',
  sydney:'pacific_sydney',
  jeju:'domestic'
};

// ── 날짜 기반 프리미엄 (주말/공휴일/명절/여행지 이벤트) ──
function _getDatePremium(startDate, destId) {
  if (!startDate || !startDate.getDay) return 1.0;
  var premium = 1.0;
  var m = startDate.getMonth(); // 0-indexed
  var d = startDate.getDate();
  var md = (m + 1) * 100 + d; // MMDD 형식

  // 1. 요일별 프리미엄/할인
  var day = startDate.getDay();
  if (day === 5) premium *= 1.08;       // 금요일 출발: +8%
  else if (day === 6) premium *= 1.12;  // 토요일 출발: +12%
  else if (day === 0) premium *= 1.05;  // 일요일 출발: +5%
  else if (day === 2 || day === 3) premium *= 0.95; // 화·수 출발: -5% (최저가 요일)

  // 2. 한국 공휴일/명절 프리미엄 (출발일 ±3일 이내 → +15%)
  var y = startDate.getFullYear();
  var krHolidays = [
    101, 301, 505, 606, 815, 1003, 1009, 1225,
    // 2026년 음력: 설 2/17, 추석 10/4 (매년 갱신 필요)
    216, 217, 218,
    1003, 1004, 1005
  ];
  var _isNearHoliday = false;
  for (var i = 0; i < krHolidays.length; i++) {
    var hm = Math.floor(krHolidays[i] / 100);
    var hd = krHolidays[i] % 100;
    var hDate = new Date(y, hm - 1, hd);
    var diff = Math.abs(startDate - hDate) / (1000 * 60 * 60 * 24);
    if (diff <= 3) { premium *= 1.15; _isNearHoliday = true; break; }
  }

  // 2-1. 징검다리 연휴 감지: 공휴일이 목/화에 걸리면 +10%
  if (!_isNearHoliday) {
    for (var j = 0; j < krHolidays.length; j++) {
      var _hm2 = Math.floor(krHolidays[j] / 100);
      var _hd2 = krHolidays[j] % 100;
      var _hDate2 = new Date(y, _hm2 - 1, _hd2);
      var _hDay = _hDate2.getDay();
      var _diff2 = Math.abs(startDate - _hDate2) / (1000 * 60 * 60 * 24);
      // 목요일 공휴일 → 금~일 4연휴, 화요일 공휴일 → 토~화 4연휴
      if ((_hDay === 4 || _hDay === 2) && _diff2 <= 5) {
        premium *= 1.10;
        break;
      }
    }
  }

  // 3. 여름방학 피크 (7/20~8/20): +8%
  if ((m === 6 && d >= 20) || (m === 7 && d <= 20)) {
    premium *= 1.08;
  }

  // 4. 연말연시 (12/23~1/3): 전 세계 +10%
  if ((m === 11 && d >= 23) || (m === 0 && d <= 3)) {
    premium *= 1.10;
  }

  // 5. 한국 학사 시즌
  // 봄방학·졸업여행 (2/15~3/5): +8%
  if ((m === 1 && d >= 15) || (m === 2 && d <= 5)) {
    premium *= 1.08;
  }
  // 수능 후 졸업여행 (11/15~12/10): +6%
  if ((m === 10 && d >= 15) || (m === 11 && d <= 10)) {
    premium *= 1.06;
  }
  // 가정의 달·어린이날 전후 (5/1~5/7): +8%
  if (m === 4 && d >= 1 && d <= 7) {
    premium *= 1.08;
  }

  // 6. 출발까지 남은 기간 (예약 시점 프리미엄)
  var _today = new Date();
  var _daysAhead = Math.round((startDate - _today) / (1000 * 60 * 60 * 24));
  if (_daysAhead >= 0) {
    if (_daysAhead <= 7) premium *= 1.20;         // 7일 이내: +20% (직전 예약)
    else if (_daysAhead <= 14) premium *= 1.12;    // 2주 이내: +12%
    else if (_daysAhead <= 30) premium *= 1.05;    // 1개월 이내: +5%
    else if (_daysAhead >= 90) premium *= 0.93;    // 3개월+ 전: -7% (얼리버드)
    // 30~89일: 기준가 (×1.0)
  }

  // 7. 한국 미세먼지 탈출 수요 (3~5월): 해외 수요↑ → 근거리 +5%
  if (m >= 2 && m <= 4 && destId && destId !== 'jeju') {
    premium *= 1.05;
  }

  // 8. 겨울방학 (12/20~2/5): 가족 여행 수요 +6%
  if ((m === 11 && d >= 20) || m === 0 || (m === 1 && d <= 5)) {
    premium *= 1.06;
  }

  // 9. 항공사 정기 세일 시즌 (1월·5월·9월 초~중순): -4%
  if ((m === 0 && d >= 5 && d <= 20) ||
      (m === 4 && d >= 8 && d <= 25) ||
      (m === 8 && d >= 1 && d <= 20)) {
    premium *= 0.96;
  }

  // 10. 대체 공휴일 확장 (설·추석·어린이날이 주말이면 월요일 쉼 → 3연휴)
  var _subsHolidays = [505, 217, 1004]; // 어린이날, 설 본날, 추석 본날
  for (var k = 0; k < _subsHolidays.length; k++) {
    var _shm = Math.floor(_subsHolidays[k] / 100);
    var _shd = _subsHolidays[k] % 100;
    var _shDate = new Date(y, _shm - 1, _shd);
    var _shDay = _shDate.getDay();
    // 토·일이면 대체 공휴일(월) → 그 월요일 전후도 비쌈
    if (_shDay === 0 || _shDay === 6) {
      var _monDate = new Date(y, _shm - 1, _shd + ((_shDay === 0) ? 1 : 2));
      var _subDiff = Math.abs(startDate - _monDate) / (1000 * 60 * 60 * 24);
      if (_subDiff <= 2) { premium *= 1.08; break; }
    }
  }

  // 11~12: 여행지별 외부 요인 (destId 필요)
  if (destId) {
    var _grp = DEST_SEASONAL_GROUP[destId] || '';

    // 11. 라마단/이드 — 말레이시아·인도네시아 (발리 제외: 힌두교)
    // 2026 라마단: 2/18~3/19, 이드 알 피트르: 3/20~3/21
    if (destId === 'kualalumpur') {
      if ((m === 1 && d >= 18) || (m === 2 && d <= 19)) premium *= 0.95; // 라마단: 숙박-5%
      if (m === 2 && d >= 20 && d <= 25) premium *= 1.10; // 이드: +10%
    }

    // 12. 태풍 시즌 가격 하락 — 대만·필리핀 (7~10월): 추가 -5%
    if ((destId === 'taipei' || _grp === 'sea_phil') && m >= 6 && m <= 9) {
      premium *= 0.95;
    }

    // 13. 일본 스키 시즌 (12~2월): 삿포로·니세코 +5% (눈축제 외 기간)
    if (destId === 'sapporo' && (m === 11 || m === 0 || m === 1)) {
      premium *= 1.05;
    }

    // 14. 괌·하와이 봄방학 한국인 수요 (2/15~3/10): +8%
    if ((destId === 'guam' || destId === 'hawaii') &&
        ((m === 1 && d >= 15) || (m === 2 && d <= 10))) {
      premium *= 1.08;
    }

    // 15. 신혼여행 시즌 (4~5월, 9~10월): 리조트 여행지 +5%
    var _honeymoonDests = ['bali','maldives','hawaii','guam','phuket','boracay','okinawa','miyakojima','cebu'];
    if (_honeymoonDests.indexOf(destId) >= 0 && (m === 3 || m === 4 || m === 8 || m === 9)) {
      premium *= 1.05;
    }
  }

  // 16. 한국 장마 탈출 (6/25~7/20): 해외 수요↑ +4%
  if (m === 5 && d >= 25 || m === 6 && d <= 20) {
    premium *= 1.04;
  }

  // 17. 한국 폭염 탈출 (7/15~8/15): 시원한 곳 수요↑ +5%
  if ((m === 6 && d >= 15) || (m === 7 && d <= 15)) {
    if (destId && (DEST_SEASONAL_GROUP[destId] === 'japan_snow' ||
        DEST_SEASONAL_GROUP[destId] === 'europe' ||
        DEST_SEASONAL_GROUP[destId] === 'pacific_sydney')) {
      premium *= 1.05;
    }
  }

  // 18. 개학 직전 (8/25~8/31): 마지막 여행 수요 +5%
  if (m === 7 && d >= 25) {
    premium *= 1.05;
  }

  // 19. 명절 직후 반등 할인 (설/추석 끝난 직후 1주): -6%
  // 2026 설 연휴 끝: 2/19, 추석 끝: 10/6
  if ((m === 1 && d >= 19 && d <= 25) || (m === 9 && d >= 7 && d <= 13)) {
    premium *= 0.94;
  }

  // 여행지별 이벤트 프리미엄
  if (destId) {
    var group = DEST_SEASONAL_GROUP[destId] || '';
    var isJapanAll = (group === 'japan_main' || group === 'japan_snow' || group === 'japan_beach');

    // ── 일본 ──
    // 벚꽃 피크 (3/25~4/10): 본토+교토 +12%
    if ((group === 'japan_main') && ((m === 2 && d >= 25) || (m === 3 && d <= 10))) {
      premium *= 1.12;
    }
    // 골든위크 (4/29~5/5): 일본 전체 +15%
    if (isJapanAll && ((m === 3 && d >= 29) || (m === 4 && d <= 5))) premium *= 1.15;
    // 오봉(お盆) (8/13~8/16): 일본 전체 대이동 +15%
    if (isJapanAll && m === 7 && d >= 13 && d <= 16) premium *= 1.15;
    // 실버위크 (9/13~9/23): 일본 전체 +10%
    if (isJapanAll && m === 8 && d >= 13 && d <= 23) premium *= 1.10;
    // 단풍 피크 (11/10~11/25): 교토 +10%, 본토 +5%
    if (destId === 'kyoto' && m === 10 && d >= 10 && d <= 25) premium *= 1.10;
    else if (group === 'japan_main' && m === 10 && d >= 15 && d <= 30) premium *= 1.05;
    // 삿포로 눈축제 (2/5~2/11): +15%
    if (destId === 'sapporo' && m === 1 && d >= 5 && d <= 11) premium *= 1.15;

    // ── 태국 ──
    // 송끄란 (4/13~4/15): +10%
    if (group === 'sea_thai' && m === 3 && d >= 13 && d <= 15) premium *= 1.10;
    // 로이끄라통(11월 보름): +5%
    if (group === 'sea_thai' && m === 10 && d >= 1 && d <= 5) premium *= 1.05;

    // ── 베트남 ──
    // 뗏(Tết, 음력설 = 춘절 동일시기, 2026: 2/17): 베트남 전체 +12%
    if ((group === 'sea_viet' || group === 'sea_viet_north' || group === 'sea_nhatrang') &&
        m === 1 && d >= 14 && d <= 22) premium *= 1.12;
    // 통일절+노동절 연휴 (4/30~5/1): +8%
    if ((group === 'sea_viet' || group === 'sea_viet_north' || group === 'sea_nhatrang') &&
        ((m === 3 && d === 30) || (m === 4 && d === 1))) premium *= 1.08;

    // ── 중국/홍콩/대만 ──
    // 춘절 (2/14~2/20 for 2026): +12%
    if (group === 'east_asia' && m === 1 && d >= 14 && d <= 20) premium *= 1.12;
    // 국경절 (10/1~10/7): 중국/홍콩/마카오 +10%
    if ((destId === 'shanghai' || destId === 'hongkong' || destId === 'macau') && m === 9 && d <= 7) {
      premium *= 1.10;
    }
    // 중추절 (2026: 10/4 전후): 대만/홍콩 +8%
    if ((destId === 'taipei' || destId === 'hongkong') && m === 9 && d >= 2 && d <= 6) premium *= 1.08;

    // ── 싱가포르 ──
    // F1 그랑프리 (9월 3째주): 숙박 급등 +18%
    if (destId === 'singapore' && m === 8 && d >= 15 && d <= 21) premium *= 1.18;

    // ── 발리 ──
    // 뉴피(Nyepi, 3월경): 공항 폐쇄 — 3/19±3일 +8%
    if (destId === 'bali' && m === 2 && d >= 16 && d <= 22) premium *= 1.08;

    // ── 필리핀 ──
    // 세부 시눌록 축제 (1월 3째주): +8%
    if (destId === 'cebu' && m === 0 && d >= 14 && d <= 21) premium *= 1.08;

    // ── 유럽 ──
    // 크리스마스 마켓 (11/25~12/23): +8%
    if (group === 'europe' && ((m === 10 && d >= 25) || (m === 11 && d <= 23))) {
      premium *= 1.08;
    }

    // ── 태평양/리조트 ──
    // 하와이 추수감사절 (11월 4째주): +10%
    if (destId === 'hawaii' && m === 10 && d >= 22 && d <= 28) premium *= 1.10;
    // 괌 크리스마스~설 피크: 이미 연말연시로 커버됨
    // 몰디브 연말 피크 (12/20~1/10): +12%
    if (destId === 'maldives' && ((m === 11 && d >= 20) || (m === 0 && d <= 10))) premium *= 1.12;

    // ── 국내 ──
    // 제주 유채꽃 (3/20~4/15): +5%
    if (destId === 'jeju' && ((m === 2 && d >= 20) || (m === 3 && d <= 15))) {
      premium *= 1.05;
    }
    // 제주 감귤 시즌 (11~12월): +3%
    if (destId === 'jeju' && (m === 10 || m === 11)) premium *= 1.03;

    // ── 추가 도시 이벤트 ──
    // 도쿄 마라톤 (3월 첫째주): 호텔 급등 +10%
    if (destId === 'tokyo' && m === 2 && d >= 1 && d <= 7) premium *= 1.10;
    // 마카오 그랑프리 (11월 3째주): 호텔 급등 +12%
    if (destId === 'macau' && m === 10 && d >= 14 && d <= 20) premium *= 1.12;
    // 대만 228 평화기념일 연휴 (2/28 전후): +8%
    if (destId === 'taipei' && m === 1 && d >= 27 && d <= 29) premium *= 1.08;
    // 홍콩 썸머세일 (7~8월): 쇼핑 수요↑ +5%
    if (destId === 'hongkong' && (m === 6 || m === 7)) premium *= 1.05;
    // 일본 연말 국내 대이동 (12/28~1/3): 숙박 추가 급등 +10%
    if (isJapanAll && ((m === 11 && d >= 28) || (m === 0 && d <= 3))) premium *= 1.10;
    // 발리 갈루간/꾸닌간 (발리 설, 210일 주기 — 2026: 약 7월): +5%
    if (destId === 'bali' && m === 6 && d >= 8 && d <= 18) premium *= 1.05;
    // 방콕 짜뚜짝 위크엔드 마켓 시즌 (11~2월 건기): 이미 월간 패턴에 반영
  }

  return Math.round(premium * 100) / 100;
}

// 계절 보정 비율 계산: API현재가 × (목표월 계수 ÷ 현재월 계수) × 날짜 프리미엄
function _getSeasonalMultiplier(destId, targetMonth, startDate) {
  // 1. 여행지별 패턴 → 지역 패턴 → sea 폴백
  var group = DEST_SEASONAL_GROUP[destId];
  if (!group) {
    var region = (typeof DEST_REGION !== 'undefined' && DEST_REGION[destId]) || 'sea';
    var regionMap = {japan:'japan_main', sea:'sea_thai', east_asia:'east_asia', europe:'europe', pacific:'pacific', domestic:'domestic'};
    group = regionMap[region] || 'sea_thai';
  }
  var factors = SEASONAL_FACTORS[group] || SEASONAL_FACTORS.sea_thai;
  var curMonth = new Date().getMonth();
  var curF = factors[curMonth];
  var tgtF = factors[targetMonth];

  // 2. 날짜 프리미엄 (주말/공휴일/명절/이벤트)
  var datePremium = startDate ? _getDatePremium(startDate, destId) : 1.0;

  return {
    flight: Math.round((tgtF.f / curF.f) * datePremium * 100) / 100,
    hotel:  Math.round((tgtF.h / curF.h) * datePremium * 100) / 100
  };
}

// ── Travelpayouts 실시간 항공 가격 연동 ──
window._fetchFlightPrices = function fetchTpFlightPrices() {
  // TP_TOKEN은 Cloudflare Worker에서 처리됩니다
  var TP_MARKER = '510036';
  var ORIGIN = window.DEPARTURE_AIRPORT || 'ICN';


  // 목적지별 IATA 도시코드 — 전역 공유 상수 참조
  var DEST_IATA = window.DEST_CITY_IATA;

  // 제휴 예약 링크 생성 — 사용자 선택 날짜 + 예산 반영 (Skyscanner YYMMDD 포맷)
  var makeBookingLink = function (iata) {
    var dep = window.DEPARTURE_AIRPORT || 'ICN';
    var _dates = _getSearchDates();
    var _budget = _getCurrentBudget();
    var _isVip = _budget >= 300 && _budget < 9000;
    var _cabin = _isVip ? '&cabinclass=business' : '&cabinclass=economy';
    var _sort = (_budget > 0 && _budget < 80) ? '&preferdirects=false&sort=cheapest_first' : '';
    return 'https://www.skyscanner.co.kr/transport/flights/' +
      dep.toLowerCase() + '/' + iata.toLowerCase() + '/' +
      _dates.shortStart + '/' + _dates.shortEnd + '/?adultsv2=1&currency=KRW' + _cabin + _sort;
  };

  // 최저가 API 호출 (Worker 프록시) — 선택 날짜 월 전달
  var _fDates = _getSearchDates();
  var _fDepart = _fDates.skyStart.slice(0, 7); // YYYY-MM
  var _fReturn = _fDates.skyEnd.slice(0, 7);   // YYYY-MM

  // 가격 섹션 설명 동적 업데이트
  var _priceDesc = document.querySelector('#price-section-wrap .sec-hd-inner p');
  if (_priceDesc) {
    var _m1 = _fDates.start.getMonth() + 1;
    var _d1 = _fDates.start.getDate();
    var _m2 = _fDates.end.getMonth() + 1;
    var _d2 = _fDates.end.getDate();
    var _dateStr = (_m1 === _m2) ? _m1 + '월 ' + _d1 + '일~' + _d2 + '일' : _m1 + '월 ' + _d1 + '일~' + _m2 + '월 ' + _d2 + '일';
    var _userPickedDate = (window.selectedDates && window.selectedDates.length >= 2 && window._isAutoDate !== true);
    // 선택 월과 현재 월이 다르면 계절 보정 적용됨을 안내
    var _travelMonth = _fDates.start.getMonth();
    var _curMonth = new Date().getMonth();
    var _isSeasonal = (_travelMonth !== _curMonth);
    if (_userPickedDate) {
      if (_isSeasonal) {
        _priceDesc.textContent = _dateStr + ' 기준으로 표시됩니다.';
      } else {
        _priceDesc.textContent = _dateStr + ' 기준으로 표시됩니다.';
      }
    } else {
      _priceDesc.textContent = _dateStr + ' 기준으로 표시됩니다.';
    }
  }

  fetch('https://travel.le2jy.workers.dev/api/flights/all?depart=' + _fDepart + '&return=' + _fReturn)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.data) return;
      // Worker 응답 구조: data.data[IATA] = { priceLabel, airline, bookingLink }
      v1_0_9_DEST_DATA.forEach(function (dest) {
        var iata = DEST_IATA[dest.id];
        if (!iata || !data.data[iata]) return;
        var entry = data.data[iata];
        if (!entry.priceKRW && !entry.priceLabel) return;
        var _krw = entry.priceKRW || parseInt((entry.priceLabel + '').replace(/[^0-9]/g, '')) * 10000;
        dest.airfare = _krw.toLocaleString() + '원';
        dest._airfareKRW = _krw;
        dest.airfareSub = '왕복 항공권';
        dest._tpLink = makeBookingLink(iata);
        // 실시간 가격 → cheapFlights desc 동적 반영
        if (dest.cheapFlights && dest.airfare) {
          dest.cheapFlights.forEach(function (f) {
            if (f.desc) {
              f.desc = f.desc.replace(/[·\s]*왕복\s*[\d,\-]+만원[대~]*/g, '').trim();
            }
          });
        }
      });
      // 현재 보이는 카드 업데이트
      if (document.getElementById('compare-view') &&
        document.getElementById('compare-view').style.display === 'block') {
        for (var i = 0; i < 3; i++) {
          var sel = document.getElementById('sel' + i);
          if (!sel) continue;
          var dIdx = parseInt(sel.value);
          if (isNaN(dIdx)) continue;
          var d = v1_0_9_DEST_DATA[dIdx];
          if (!d) continue;
          // air-i 셀 (요약 카드) 업데이트 — API 데이터가 있을 때만
          if (d._airfareKRW) {
            var airEl = document.getElementById('air-' + i);
            if (airEl) {
              var mEl = airEl.querySelector('.main');
              if (mEl) mEl.textContent = Math.round(d._airfareKRW / 10000) + '만원~';
            }
          }
          // flightrec-i 항공 카드 desc 실시간 업데이트
          // VIP 모드(budget 300만원+)에선 비즈니스 카드가 표시 중 → 이코노미 가격으로 덮어쓰지 않음
          var recEl = document.getElementById('flightrec-' + i);
          var _isVipNow = (window.wizardTierOverride === 'high') ||
            (recEl && recEl.querySelector('.flight-card-link') &&
              recEl.querySelector('.flight-card-link').textContent.indexOf('비즈니스') !== -1);
          if (recEl && d.cheapFlights && !_isVipNow) {
            recEl.querySelectorAll('.flight-card-desc').forEach(function (descEl, fi) {
              if (d.cheapFlights[fi]) {
                var _d = d.cheapFlights[fi].desc || '';
                descEl.textContent = _d.replace(/[·\s]*왕복\s*[\d,\-]+만원[대~]*/g, '').trim();
              }
            });
          }

        }
        // 실시간 항공 가격 도착 → 총 비용 재계산
        if (typeof window._recalcPriceCards === 'function') window._recalcPriceCards();
      }
    })
    .catch(function (e) { console.log('TP flight API error:', e); });

  // VIP용 비즈니스 클래스 항공 데이터도 미리 가져오기
  fetch('https://travel.le2jy.workers.dev/api/flights/all?trip_class=1&depart=' + _fDepart + '&return=' + _fReturn)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.data) return;
      v1_0_9_DEST_DATA.forEach(function (dest) {
        var iata = DEST_IATA[dest.id];
        if (!iata || !data.data[iata]) return;
        var entry = data.data[iata];
        if (!entry.priceKRW && !entry.priceLabel) return;
        var _vakrw = entry.priceKRW || parseInt((entry.priceLabel + '').replace(/[^0-9]/g, '')) * 10000;
        dest._vipAirfare = _vakrw.toLocaleString() + '원';
        dest._vipAirfareKRW = _vakrw;
        dest._vipAirfareSub = '비즈니스 왕복';
      });
      console.log('[VIP] 비즈니스 항공 데이터 로드 완료');
    })
    .catch(function (e) { console.log('VIP flight API error:', e); });
}; // end _fetchFlightPrices

// ── 실시간 가격 도착 후 참고가격 카드 일괄 재계산 ──
window._recalcPriceCards = function () {
  if (!document.getElementById('compare-view') ||
    document.getElementById('compare-view').style.display !== 'block') return;

  var _dateInfo = _getSearchDates();
  var _nights = Math.max(1, Math.ceil((_dateInfo.end - _dateInfo.start) / (1000 * 60 * 60 * 24)));
  var _targetMonth = _dateInfo.start.getMonth(); // 0-indexed

  for (var i = 0; i < 3; i++) {
    var sel = document.getElementById('sel' + i);
    if (!sel) continue;
    var dIdx = parseInt(sel.value);
    if (isNaN(dIdx)) continue;
    var d = v1_0_9_DEST_DATA[dIdx];
    if (!d) continue;

    // 계절 보정 비율 계산
    var _sm = _getSeasonalMultiplier(d.id, _targetMonth, _dateInfo.start);
    var _curMonth = new Date().getMonth();
    var _isSeasonal = (_targetMonth !== _curMonth);

    // 항공: API 가격 × 계절 보정, 없으면 정적 데이터 × 계절 보정
    var airEl = document.getElementById('air-' + i);
    var airKRW = 0;
    if (d._airfareKRW) {
      airKRW = Math.round(d._airfareKRW * _sm.flight);
      if (airEl) {
        var mEl = airEl.querySelector('.main');
        if (mEl) mEl.textContent = Math.round(airKRW / 10000) + '만원~';
      }
    } else {
      // API 없으면 정적 데이터(만원) × 계절 보정 → KRW 변환
      airKRW = Math.round((d.baseAir || 0) * 10000 * _sm.flight);
      // DOM에도 보정된 가격 반영
      if (airEl && _isSeasonal) {
        var _amEl = airEl.querySelector('.main');
        if (_amEl) _amEl.textContent = Math.round(airKRW / 10000) + '만원~';
      }
    }

    // 호텔: API 1박 가격 × 계절 보정 × 박수, 없으면 정적 데이터 × 계절 보정
    var hotelEl = document.getElementById('hotel-' + i);
    var hotelKRW = 0;
    if (d._hotelPriceKRW) {
      var adjustedPerNight = Math.round(d._hotelPriceKRW * _sm.hotel);
      hotelKRW = adjustedPerNight * _nights;
      if (hotelEl) {
        var hmEl = hotelEl.querySelector('.main');
        var hsEl = hotelEl.querySelector('.sub');
        if (hmEl) hmEl.textContent = Math.round(hotelKRW / 10000) + '만원';
        if (hsEl) hsEl.textContent = '1박 평균 ' + Math.round(adjustedPerNight / 10000) + '만원';
        // kicker는 예산별 필터 안내가 이미 설정되어 있으므로 건드리지 않음
      }
    } else {
      // API 없으면 정적 데이터(만원) × 계절 보정 × 박수 → KRW
      var _basePerNight = Math.round((d.baseHotel || 0) * 10000 * _sm.hotel);
      hotelKRW = _basePerNight * _nights;
      // DOM에도 보정된 가격 반영
      if (hotelEl && _isSeasonal) {
        var _hmFb = hotelEl.querySelector('.main');
        var _hsFb = hotelEl.querySelector('.sub');
        if (_hmFb) _hmFb.textContent = Math.round(hotelKRW / 10000) + '만원';
        if (_hsFb) _hsFb.textContent = '1박 평균 ' + Math.round(_basePerNight / 10000) + '만원';
        // kicker는 예산별 필터 안내가 이미 설정되어 있으므로 건드리지 않음
      }
    }

    // 현지비용: 정적 데이터에서 계산 (현지 물가는 계절 무관)
    var dailyKRW = 0;
    var _dailyMap = { '소비 매우 적음': 4, '소비 적음': 6, '소비 보통': 9, '소비 많음': 14, '소비 매우 많음': 20 };
    var _dailyVal = parseFloat((d.daily || '').replace('만원', '')) || _dailyMap[d.daily] || Math.round((d.baseHotel || 7) * 0.5) || 7;
    dailyKRW = _dailyVal * 10000 * (_nights + 1); // 만원 → KRW × 일수(박+1)

    // 교통비 보정: 여행지별 필수 고정 교통비 (렌터카, 스피드보트 등)
    var _transportCost = 0;
    var _TRANSPORT_SURCHARGE = {
      jeju: 6,       // 렌터카 1일 6만 × 일수
      maldives: 10,  // 공항→리조트 스피드보트 왕복 10만
      bali: 3,       // 그랩/카풀 1일 3만 × 일수
      hawaii: 8,     // 렌터카 1일 8만 × 일수
      guam: 5,       // 렌터카 1일 5만 × 일수
      saipan: 5,     // 렌터카 1일 5만 × 일수
      sydney: 4      // 교통패스 1일 4만 × 일수
    };
    var _tpDay = _TRANSPORT_SURCHARGE[d.id] || 0;
    if (d.id === 'maldives') {
      _transportCost = _tpDay * 10000; // 몰디브는 1회성 왕복 비용
    } else {
      _transportCost = _tpDay * 10000 * (_nights + 1); // 일수 비례
    }

    // 리조트 여행지 성수기 호텔 추가 프리미엄 (공급 제한으로 가격 탄력성 높음)
    var _resortDests = ['bali','maldives','hawaii','guam','boracay','phuket','miyakojima','saipan','palawan'];
    if (_resortDests.indexOf(d.id) >= 0 && _sm.hotel > 1.15) {
      // 성수기 호텔이 1.15 이상이면 추가 프리미엄 (리조트 가격 급등 반영)
      var _resortExtra = ((_sm.hotel - 1.15) * 0.35 + 1); // 1.15→×1.0, 1.45→×1.105
      hotelKRW = Math.round(hotelKRW * _resortExtra);
    }

    // 총 비용은 updateColumn이 예산 티어에 맞게 계산한 값을 그대로 유지
    // (여기서 덮어쓰면 예산 무시한 API 가격으로 오염됨)
  }

  // 안내 문구 업데이트 — 실제 HTML 요소(#price-section-wrap .sec-hd-inner p) 참조
  var _priceDesc = document.querySelector('#price-section-wrap .sec-hd-inner p');
  if (_priceDesc) {
    var _m1 = _dateInfo.start.getMonth() + 1;
    var _d1 = _dateInfo.start.getDate();
    var _m2 = _dateInfo.end.getMonth() + 1;
    var _d2 = _dateInfo.end.getDate();
    var _dateStr = (_m1 === _m2) ? _m1 + '월 ' + _d1 + '일~' + _d2 + '일' : _m1 + '월 ' + _d1 + '일~' + _m2 + '월 ' + _d2 + '일';
    var _userPickedDate = (window.selectedDates && window.selectedDates.length >= 2 && window._isAutoDate !== true);
    if (_userPickedDate) {
      _priceDesc.textContent = _dateStr + ' 기준으로 표시됩니다.';
    } else {
      _priceDesc.textContent = _dateStr + ' 기준으로 표시됩니다.';
    }
  }
};
window._fetchFlightPrices(); // 초기 실행

// ── GitHub passport-index-dataset: 한국여권 비자 요건 연동 ──
(function fetchVisaInfo() {
  // 비자 API용 IATA 도시코드 — 전역 공유 상수 참조
  var DEST_TO_IATA = window.DEST_CITY_IATA;

  fetch('https://travel.le2jy.workers.dev/api/visa')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.data) return;
      var visaMap = data.data;

      // 각 목적지에 비자 정보 첐장
      v1_0_9_DEST_DATA.forEach(function (dest) {
        var iata = DEST_TO_IATA[dest.id];
        if (!iata || !visaMap[iata]) return;
        dest._visaLabel = visaMap[iata].label;
        dest._visaBadge = visaMap[iata].badge;
      });

      // 비교뷰가 열려있으면 즉시 entry 섹션에 반영
      if (document.getElementById('compare-view') &&
        document.getElementById('compare-view').style.display === 'block') {
        for (var i = 0; i < 3; i++) {
          var sel = document.getElementById('sel' + i);
          if (!sel) continue;
          var dIdx = parseInt(sel.value);
          if (isNaN(dIdx)) continue;
          var d = v1_0_9_DEST_DATA[dIdx];
          if (!d || !d._visaLabel) continue;
          _applyVisaToEntry(i, d);
        }
      }
    })
    .catch(function () { });
})();

// API 비자 데이터가 나중에 도착했을 때 entry 섹션을 재렌더링
function _applyVisaToEntry(col, dest) {
  renderEntryInfo('entry-' + col, dest.id, dest._visaLabel || null);
}

// ── 위자드 스크롤 트리거 ──
var _wizScrollObserver = null;
function _initWizardScrollTrigger() {
  if (_wizScrollObserver) { _wizScrollObserver.disconnect(); _wizScrollObserver = null; }
  var sentinel = document.getElementById('wiz-scroll-sentinel');
  if (!sentinel) return;
  _wizScrollObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      // 태블릿/모바일에서는 자동 팝업 비활성화 (사용자 명시적 요청)
      if (window.innerWidth <= 1068) {
        _wizScrollObserver.disconnect();
        _wizScrollObserver = null;
        return;
      }
      _wizScrollObserver.disconnect();
      _wizScrollObserver = null;
      var panel = document.getElementById('wiz-panel');
      if (panel && !panel.classList.contains('wiz-open')) {
        showWizard();
      }
    }
  }, { threshold: 0.1 });
  _wizScrollObserver.observe(sentinel);
}

// ── 실시간 여행 뉴스 배너 로테이션 ──
(function initNewsBanner() {
  var bannerWrapIds = ['home-banner-wrap', 'compare-banner-wrap'];
  var bannerDotsIds = ['home-banner-dots', 'compare-banner-dots'];
  var newsItems = [];
  var currentIdx = 0;
  var rotateTimer = null;

  function renderBanner(idx) {
    var item = newsItems[idx];
    if (!item) return;

    bannerWrapIds.forEach(function (wrapId, i) {
      var wrap = document.getElementById(wrapId);
      if (!wrap) return;
      var textEl = wrap.querySelector('.banner-news-text');
      if (!textEl) return;

      // 페이드 아웃
      wrap.classList.add('fade-out');
      wrap.classList.remove('fade-in');

      setTimeout(function () {
        // 텍스트 교체
        if (item.link) {
          textEl.outerHTML = '<a href="' + item.link + '" target="_blank" rel="noopener noreferrer" class="banner-news-text">' + escapeHtml(item.title) + '</a>';
        } else {
          // span으로 복원
          var curEl = wrap.querySelector('.banner-news-text');
          if (curEl) curEl.textContent = item.title;
        }

        // 도트 업데이트
        var dotsEl = document.getElementById(bannerDotsIds[i]);
        if (dotsEl) {
          dotsEl.querySelectorAll('.banner-dot').forEach(function (dot, di) {
            dot.classList.toggle('active', di === idx);
          });
        }

        // 페이드 인
        var w = document.getElementById(wrapId);
        if (w) {
          w.classList.remove('fade-out');
          w.classList.add('fade-in');
        }
      }, 350);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function buildDots(count) {
    bannerDotsIds.forEach(function (dotsId) {
      var el = document.getElementById(dotsId);
      if (!el) return;
      el.innerHTML = '';
      for (var i = 0; i < count; i++) {
        var dot = document.createElement('span');
        dot.className = 'banner-dot' + (i === 0 ? ' active' : '');
        el.appendChild(dot);
      }
    });
  }

  function startRotation() {
    if (rotateTimer) clearInterval(rotateTimer);
    if (newsItems.length <= 1) return;
    rotateTimer = setInterval(function () {
      currentIdx = (currentIdx + 1) % newsItems.length;
      renderBanner(currentIdx);
    }, 5000); // 5초마다 교체
  }

  // 로컬 폴백 뉴스 (API 실패 또는 더미 응답 시 사용)
  var fallbackNews = [
    { title: '✈️ 2026 상반기 해외여행 인기 여행지 TOP 10', link: '' },
    { title: '💴 엔화 약세 지속 — 일본 여행 가성비 최고 시즌', link: '' },
    { title: '🌴 동남아 건기 시즌 시작! 발리·세부·다낭 추천', link: '' },
    { title: '🛂 무비자 입국 가능 국가 90개국 — 한국 여권 파워', link: '' },
    { title: '💰 100만원이면 충분! 가성비 해외여행지 비교', link: '' },
  ];

  function useFallback() {
    newsItems = fallbackNews;
    renderBanner(0);
    startRotation();
  }

  // Worker에서 뉴스 fetch
  fetch('https://travel.le2jy.workers.dev/api/news')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.news || !data.news.length) { useFallback(); return; }
      // API가 더미 응답("불러오는 중")만 반환한 경우 폴백
      var real = data.news.filter(function (n) { return n.title && n.title.indexOf('불러오는 중') === -1; });
      if (real.length === 0) { useFallback(); return; }
      newsItems = real.slice(0, 5);
      renderBanner(0);
      startRotation();
    })
    .catch(function () {
      useFallback();
    });
})();

// ── 배너 자동 만료 ──

(function () {
  var banner = document.querySelector('.top-banner');
  if (!banner) return;
  var now = new Date();
  // Banner about fuel tax increase from April 1 — hide after April 15
  if (now > new Date(now.getFullYear(), 3, 15)) {
    banner.style.display = 'none';
  }
})();

// ── 실시간 환율 연동 ──
(function fetchExchangeRates() {
  fetch('https://open.er-api.com/v6/latest/KRW')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.rates) return;
      var rates = data.rates;
      // 목적지별 통화 + 역사적 기준환율 (KRW/1단위)
      var destMeta = {
        lisbon: { code: 'EUR', neutral: 1450 },
        osaka: { code: 'JPY', neutral: 10.0 },
        tokyo: { code: 'JPY', neutral: 10.0 },
        taipei: { code: 'TWD', neutral: 44 },
        danang: { code: 'VND', neutral: 0.058, unit: 1000 },
        nhatrang: { code: 'VND', neutral: 0.058, unit: 1000 },
        bangkok: { code: 'THB', neutral: 41 },
        chiangmai: { code: 'THB', neutral: 41 },
        bali: { code: 'IDR', neutral: 8.5, unit: 1000 },
        singapore: { code: 'SGD', neutral: 1050 },
        cebu: { code: 'PHP', neutral: 24 },
        fukuoka: { code: 'JPY', neutral: 10.0 },
        sapporo: { code: 'JPY', neutral: 10.0 },
        okinawa: { code: 'JPY', neutral: 10.0 },
        kyoto: { code: 'JPY', neutral: 10.0 },
        phuquoc: { code: 'VND', neutral: 0.058, unit: 1000 },
        hochiminh: { code: 'VND', neutral: 0.058, unit: 1000 },
        hanoi: { code: 'VND', neutral: 0.058, unit: 1000 },
        boracay: { code: 'PHP', neutral: 24 },
        phuket: { code: 'THB', neutral: 41 },
        hongkong: { code: 'HKD', neutral: 175 },
        guam: { code: 'USD', neutral: 1380 },
        hawaii: { code: 'USD', neutral: 1380 },
        paris: { code: 'EUR', neutral: 1450 },
        kualalumpur: { code: 'MYR', neutral: 330 },
        maldives: { code: 'USD', neutral: 1380 },
        sydney: { code: 'AUD', neutral: 930 },
        shanghai: { code: 'CNY', neutral: 195 },
        barcelona: { code: 'EUR', neutral: 1450 },
      };
      var erBonus = {};
      v1_0_9_DEST_DATA.forEach(function (d) {
        var meta = destMeta[d.id];
        if (!meta || !rates[meta.code]) { erBonus[d.id] = 0; return; }
        var unit = meta.unit || 1;
        var actualKRW = unit / rates[meta.code]; // KRW per (unit) of foreign currency
        var ratio = actualKRW / meta.neutral;
        // ratio < 1 = 외화 약세 (한국인에게 유리) → 보너스+
        var raw = Math.round((1 - ratio) * 25);
        erBonus[d.id] = Math.max(-12, Math.min(12, raw));
        // FX 텍스트 업데이트
        if (meta.code === 'JPY') {
          d.fx = '1엔 = ' + actualKRW.toFixed(1) + '원';
          d.fxSub = actualKRW < 9.5 ? '역대 엔저 · 여행 최적기' : actualKRW < 10.5 ? '엔저 지속 중' : '엔화 강세 · 주의';
        } else if (meta.code === 'EUR') {
          d.fx = '1유로 = ' + Math.round(actualKRW) + '원';
          d.fxSub = ratio < 0.97 ? '유로 약세 · 좋은 타이밍' : ratio > 1.03 ? '유로 강세 · 주의' : '유로화 안정적';
        } else if (meta.code === 'VND') {
          d.fx = '1,000동 = ' + actualKRW.toFixed(1) + '원';
          d.fxSub = '동화 약세 · 가성비 UP';
        } else if (meta.code === 'IDR') {
          d.fx = '1,000루피아 = ' + actualKRW.toFixed(1) + '원';
          d.fxSub = ratio < 0.97 ? '루피아 약세 · 가성비 UP' : '루피아 안정적';
        } else if (meta.code === 'THB') {
          d.fx = '1바트 = ' + actualKRW.toFixed(1) + '원';
          d.fxSub = ratio < 0.97 ? '바트 약세 · 유리한 환율' : '바트화 안정적';
        } else if (meta.code === 'SGD') {
          d.fx = '1SGD = ' + Math.round(actualKRW) + '원';
          d.fxSub = '싱가포르 달러 강세 유지';
        } else if (meta.code === 'TWD') {
          d.fx = '1TWD = ' + actualKRW.toFixed(1) + '원';
          d.fxSub = ratio < 0.97 ? '대만달러 약세 · 유리' : '대만달러 안정적';
        } else if (meta.code === 'PHP') {
          d.fx = '1페소 = ' + actualKRW.toFixed(1) + '원';
          d.fxSub = ratio < 0.97 ? '페소 약세 · 가성비 UP' : '페소화 안정적';
        } else if (meta.code === 'USD') {
          d.fx = '1달러 = ' + Math.round(actualKRW) + '원';
          d.fxSub = ratio < 0.97 ? '달러 약세 · 유리한 환율' : ratio > 1.03 ? '달러 강세 · 주의' : '달러화 안정적';
        } else if (meta.code === 'HKD') {
          d.fx = '1HKD = ' + actualKRW.toFixed(1) + '원';
          d.fxSub = ratio < 0.97 ? '홍콩달러 약세 · 유리' : '홍콩달러 안정적';
        } else if (meta.code === 'MYR') {
          d.fx = '1링깃 = ' + Math.round(actualKRW) + '원';
          d.fxSub = ratio < 0.97 ? '링깃 약세 · 가성비 UP' : '링깃화 안정적';
        } else if (meta.code === 'AUD') {
          d.fx = '1AUD = ' + Math.round(actualKRW) + '원';
          d.fxSub = ratio < 0.97 ? '호주달러 약세 · 유리' : ratio > 1.03 ? '호주달러 강세 · 주의' : '호주달러 안정적';
        } else if (meta.code === 'CNY') {
          d.fx = '1위안 = ' + actualKRW.toFixed(1) + '원';
          d.fxSub = ratio < 0.97 ? '위안화 약세 · 유리' : '위안화 안정적';
        }
      });
      window.exchangeRateBonus = erBonus;
      updateResultsByFilters();
    })
    .catch(function () { window.exchangeRateBonus = {}; });
})();

// ── WIZARD (basicons.com SVG icons) ──
var _wi = function (p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; };
var WIZ_ICONS = {
  globe: _wi('<circle cx="12" cy="12" r="10"/><path d="M3 12H22"/><path d="M12 2.2C14.5 4.7 16 8.2 16 12C16 15.8 14.5 19.3 12 21.8"/><path d="M12 2.2C9.5 4.7 8 8.2 8 12C8 15.8 9.5 19.3 12 21.8"/>'),
  users: _wi('<circle cx="9" cy="7" r="4"/><path d="M2 21V17C2 15.9 2.9 15 4 15H14C15.1 15 16 15.9 16 17V21"/><path d="M16 3C16.9 3.2 17.6 3.7 18.2 4.4C18.7 5.1 19 6 19 6.9C19 7.8 18.7 8.6 18.2 9.3C17.6 10 16.9 10.5 16 10.8"/><path d="M19 15H20C21.1 15 22 15.9 22 17V21"/>'),
  sun: _wi('<path d="M17.5 17.5L19 19M20 12H22M6.5 6.5L5 5M17.5 6.5L19 5M6.5 17.5L5 19M2 12H4M12 2V4M12 20V22M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12Z"/>'),
  rocket: _wi('<path d="M7.5 11H2L6 7H13L15 5C16.1 3.9 17.4 3 19 3H21V5C21 6.5 20 8 19 9L17 11V18L13 22V16.5"/><path d="M12 12L7 17"/>'),
  star: _wi('<path d="M12 2L14.4 9.3H22L15.8 13.8L18.2 21.1L12 16.5L5.8 21.1L8.2 13.8L2 9.3H9.6L12 2Z"/>'),
  sparkle: _wi('<path d="M11 4L13.4 10.6L20 13L13.4 15.4L11 22L8.6 15.4L2 13L8.6 10.6L11 4Z"/><path d="M16.5 2L16.9 3.1L18 3.5L16.9 3.9L16.5 5L16.1 3.9L15 3.5L16.1 3.1L16.5 2Z"/><path d="M21 7L21.3 7.7L22 8L21.3 8.3L21 9L20.7 8.3L20 8L20.7 7.7L21 7Z"/>'),
  person: _wi('<circle cx="12" cy="7" r="4"/><path d="M4 21V17C4 15.9 4.9 15 6 15H18C19.1 15 20 15.9 20 17V21"/>'),
  heart: _wi('<path d="M11.4 20.8L3.6 12.6C1.4 10.3 1.5 6.5 3.9 4.3C6.2 2.2 9.8 2.7 11.7 5.2L12 5.7L12.3 5.2C14.2 2.7 17.8 2.2 20.1 4.3C22.5 6.5 22.6 10.3 20.4 12.6L12.6 20.8C12.2 21.1 11.8 21.1 11.4 20.8Z"/>'),
  home: _wi('<path d="M3 10.3V20C3 20.6 3.4 21 4 21H8.4C9 21 9.4 20.6 9.4 20V13.3H14.6V20C14.6 20.6 15 21 15.6 21H20C20.6 21 21 20.6 21 20V10.3C21 9.9 20.9 9.6 20.6 9.5L12 3L3.4 9.5C3.1 9.6 3 9.9 3 10.3Z"/>'),
  clock: _wi('<circle cx="12" cy="12" r="10"/><path d="M12 6V12L16 16"/>'),
  pin: _wi('<path d="M6 15.3L12 22L18 15.3C22.5 10.1 18.9 2 12 2C5.1 2 1.5 10.1 6 15.3Z"/><circle cx="12" cy="10" r="3"/>'),
  cloud: _wi('<path d="M6.3 9C7.2 6.7 9.4 5 12 5C15.3 5 18 7.7 18 11C20.2 11 22 12.8 22 15C22 17.2 20.2 19 18 19H7C4.2 19 2 16.8 2 14C2 11.5 3.9 9.4 6.3 9Z"/>'),
  waves: _wi('<path d="M1 19H2.5C3.3 19 4 18.7 4.5 18.2L5.1 17.6C5.8 16.8 7.2 16.8 7.9 17.6C8.6 18.3 9.9 18.3 10.6 17.6C11.3 16.8 12.7 16.8 13.4 17.6C14.1 18.3 15.4 18.3 16.1 17.6C16.8 16.8 18.2 16.8 18.9 17.6L19.5 18.2C20 18.7 20.7 19 21.5 19H23"/><path d="M19.4 5.6C20.2 6.4 20.2 7.6 19.4 8.4C18.6 9.2 17.4 9.2 16.6 8.4C15.8 7.6 15.8 6.4 16.6 5.6C17.4 4.8 18.6 4.8 19.4 5.6Z"/><path d="M4 7H10L17.5 13.5"/><path d="M13 10L9.5 13.5"/>'),
  coffee: _wi('<path d="M2 9H18V19C18 20.7 16.7 22 15 22H5C3.3 22 2 20.7 2 19V9Z"/><path d="M18 11H18.9C20.6 11 22 12.4 22 14.1C22 15.3 21.3 16.3 20.3 16.9L18 18"/><path d="M6 2V5"/><path d="M10 2V5"/><path d="M14 2V5"/>'),
  wallet: _wi('<path d="M20 9.7V6.3C20 5 19.1 4 18 4H4C2.9 4 2 5 2 6.3V17.7C2 19 2.9 20 4 20H18C19.1 20 20 19 20 17.7V14.3M22 9.7H16C14.9 9.7 14 10.7 14 12C14 13.3 14.9 14.3 16 14.3H22V9.7Z"/>'),
  shield: _wi('<path d="M3 13V4.2L4.9 4.1C6.6 3.9 8.3 3.5 9.9 2.9L12 2L14.1 2.9C15.7 3.5 17.4 3.9 19.1 4.1L21 4.2V13C21 18 17 22 12 22C7 22 3 18 3 13Z"/><path d="M8 12L10.5 14.5L16 9"/>'),
  umbrella: _wi('<path d="M23 12A11 11 0 0 0 1 12H23Z"/><path d="M12 12V19C12 20.1 12.9 21 14 21C15.1 21 16 20.1 16 19"/>'),
  thermo: _wi('<path d="M14 14.76V3.5A2.5 2.5 0 0 0 9 3.5V14.76A4.5 4.5 0 1 0 14 14.76Z"/>'),
  wind: _wi('<path d="M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>'),
};

// ── 여행지별 시즌 리스크 데이터 (월 = 1~12) ──
// 우기(rainy), 폭염(heat), 태풍·자연재해(disaster)
const DEST_SEASONAL_RISKS = {
  danang: { rainy: [10, 11, 12, 1], heat: [6, 7, 8], disaster: [9, 10] },
  bangkok: { rainy: [5, 6, 7, 8, 9, 10], heat: [3, 4, 5], disaster: [] },
  bali: { rainy: [11, 12, 1, 2, 3], heat: [], disaster: [] },
  osaka: { rainy: [6, 7], heat: [7, 8], disaster: [8, 9] },
  tokyo: { rainy: [6, 7], heat: [7, 8], disaster: [8, 9] },
  fukuoka: { rainy: [6, 7], heat: [7, 8], disaster: [8, 9] },
  sapporo: { rainy: [], heat: [], disaster: [8, 9] },
  okinawa: { rainy: [5, 6], heat: [7, 8, 9], disaster: [7, 8, 9, 10] },
  kyoto: { rainy: [6, 7], heat: [7, 8], disaster: [8, 9] },
  miyakojima: { rainy: [5, 6], heat: [7, 8, 9], disaster: [7, 8, 9, 10] },
  jeju: { rainy: [6, 7], heat: [7, 8], disaster: [7, 8, 9] },
  taipei: { rainy: [3, 4, 5, 9, 10], heat: [6, 7, 8], disaster: [7, 8, 9, 10] },
  hongkong: { rainy: [5, 6, 7, 8, 9], heat: [6, 7, 8, 9], disaster: [7, 8, 9, 10] },
  shanghai: { rainy: [6, 7], heat: [7, 8], disaster: [7, 8, 9] },
  nhatrang: { rainy: [10, 11, 12], heat: [6, 7, 8], disaster: [10, 11] },
  hochiminh: { rainy: [5, 6, 7, 8, 9, 10], heat: [3, 4, 5], disaster: [] },
  hanoi: { rainy: [5, 6, 7, 8, 9], heat: [6, 7, 8], disaster: [8, 9] },
  phuquoc: { rainy: [5, 6, 7, 8, 9, 10], heat: [3, 4], disaster: [] },
  chiangmai: { rainy: [5, 6, 7, 8, 9, 10], heat: [3, 4, 5], disaster: [] },
  phuket: { rainy: [5, 6, 7, 8, 9, 10], heat: [3, 4, 5], disaster: [] },
  singapore: { rainy: [11, 12, 1], heat: [], disaster: [] },
  kualalumpur: { rainy: [10, 11, 3, 4], heat: [], disaster: [] },
  cebu: { rainy: [11, 12, 1, 2], heat: [], disaster: [11, 12] },
  boracay: { rainy: [6, 7, 8, 9], heat: [], disaster: [10, 11] },
  guam: { rainy: [7, 8, 9, 10], heat: [6, 7, 8, 9], disaster: [7, 8, 9, 10] },
  hawaii: { rainy: [11, 12, 1, 2], heat: [], disaster: [] },
  lisbon: { rainy: [11, 12, 1, 2], heat: [7, 8], disaster: [] },
  paris: { rainy: [11, 12, 1, 2], heat: [7, 8], disaster: [] },
  barcelona: { rainy: [10, 11, 12], heat: [7, 8], disaster: [] },
  maldives: { rainy: [5, 6, 7, 8, 9], heat: [], disaster: [] },
  sydney: { rainy: [6, 7, 8], heat: [12, 1, 2], disaster: [] },
  saipan: { rainy: [7, 8, 9, 10], heat: [6, 7, 8, 9], disaster: [7, 8, 9, 10] },
  palawan: { rainy: [6, 7, 8, 9, 10], heat: [3, 4, 5], disaster: [10, 11] },
  sanya: { rainy: [5, 6, 7, 8, 9, 10], heat: [6, 7, 8], disaster: [7, 8, 9, 10] },
};

function getTravelMonth() {
  var dateVal = (document.getElementById('home-date-value') || {}).textContent || '';
  if (dateVal && dateVal.includes('월')) {
    var parts = dateVal.trim().split(' ');
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].endsWith('월')) {
        var m = parseInt(parts[i]);
        if (!isNaN(m) && m >= 1 && m <= 12) return m;
      }
    }
  }
  return new Date().getMonth() + 1; // 날짜 미선택 시 현재 월
}

const WIZ_Q = [
  {
    q: '어떤 여행을 꿈꾸세요?', e: WIZ_ICONS.globe,
    opts: [
      { e: WIZ_ICONS.waves, label: '해변·휴양', bonus: { danang: 55, jeju: 50, lisbon: 5, osaka: -55, taipei: -55, bali: 60, nhatrang: 50, cebu: 55, bangkok: -10, chiangmai: -15, singapore: -25, tokyo: -50, fukuoka: -30, sapporo: -40, okinawa: 60, kyoto: -35, miyakojima: 65, phuquoc: 60, hochiminh: -20, hanoi: -20, boracay: 65, phuket: 55, hongkong: -30, guam: 55, hawaii: 55, paris: -40, kualalumpur: -20, maldives: 70, sydney: 10, shanghai: -40, barcelona: 20, saipan: 60, palawan: 65, sanya: 55 } },
      { e: WIZ_ICONS.pin, label: '도시 탐험', bonus: { osaka: 40, taipei: 40, lisbon: 30, danang: -30, jeju: -40, tokyo: 45, singapore: 35, bangkok: 25, chiangmai: 10, bali: -40, cebu: -40, nhatrang: -30, fukuoka: 40, sapporo: 15, okinawa: -30, kyoto: 45, miyakojima: -40, phuquoc: -35, hochiminh: 30, hanoi: 30, boracay: -45, phuket: -30, hongkong: 45, guam: -30, hawaii: -20, paris: 50, kualalumpur: 30, maldives: -50, sydney: 35, shanghai: 40, barcelona: 45, saipan: -35, palawan: -40, sanya: -20 } },
      { e: WIZ_ICONS.cloud, label: '자연·액티비티', bonus: { jeju: 50, danang: 20, lisbon: 20, osaka: -20, taipei: -20, chiangmai: 45, bali: 35, cebu: 20, nhatrang: 15, bangkok: -10, singapore: -30, tokyo: -15, fukuoka: 10, sapporo: 40, okinawa: 35, kyoto: -20, miyakojima: 40, phuquoc: 20, hochiminh: -10, hanoi: -10, boracay: 25, phuket: 15, hongkong: -25, guam: 20, hawaii: 35, paris: -30, kualalumpur: 0, maldives: 25, sydney: 25, shanghai: -30, barcelona: -10, saipan: 25, palawan: 35, sanya: 10 } },
      { e: WIZ_ICONS.coffee, label: '미식 여행', bonus: { osaka: 45, taipei: 40, danang: 20, lisbon: 15, jeju: -10, tokyo: 50, singapore: 40, bangkok: 35, chiangmai: 20, nhatrang: 15, bali: 5, cebu: 5, fukuoka: 55, sapporo: 30, okinawa: 15, kyoto: 50, miyakojima: 5, phuquoc: 5, hochiminh: 35, hanoi: 35, boracay: 5, phuket: 20, hongkong: 45, guam: 5, hawaii: 15, paris: 55, kualalumpur: 30, maldives: 5, sydney: 25, shanghai: 40, barcelona: 50, saipan: 5, palawan: 5, sanya: 20 } },
    ]
  },
  {
    q: '피하고 싶은 여행 환경이 있나요?', e: WIZ_ICONS.cloud,
    opts: [
      { e: WIZ_ICONS.umbrella, label: '우기·장마는 피할게요', riskType: 'rainy', bonus: {} },
      { e: WIZ_ICONS.thermo, label: '폭염·무더위는 힘들어요', riskType: 'heat', bonus: {} },
      { e: WIZ_ICONS.wind, label: '태풍·자연재해 걱정돼요', riskType: 'disaster', bonus: {} },
      { e: WIZ_ICONS.globe, label: '날씨는 상관없어요', riskType: null, bonus: {} },
    ]
  },
  {
    q: '허용 가능한 비행 시간은?', e: WIZ_ICONS.rocket,
    opts: [
      { e: WIZ_ICONS.clock, label: '1–2시간 (국내·근거리)', bonus: { jeju: 70, danang: -40, osaka: -30, taipei: -30, lisbon: -60, tokyo: -20, singapore: -40, bangkok: -40, bali: -55, chiangmai: -40, cebu: -45, nhatrang: -40, fukuoka: 65, sapporo: -10, okinawa: 10, kyoto: -20, miyakojima: -40, phuquoc: -40, hochiminh: -40, hanoi: -40, boracay: -45, phuket: -45, hongkong: -20, guam: -35, hawaii: -60, paris: -70, kualalumpur: -45, maldives: -65, sydney: -65, shanghai: 20, barcelona: -70, saipan: -30, palawan: -45, sanya: -35 } },
      { e: WIZ_ICONS.rocket, label: '3–5시간 (아시아권)', bonus: { taipei: 30, osaka: 30, danang: 30, jeju: -20, lisbon: -50, tokyo: 25, singapore: 25, bangkok: 30, cebu: 25, nhatrang: 30, chiangmai: 25, bali: 15, fukuoka: 15, sapporo: 15, okinawa: 30, kyoto: 20, miyakojima: 35, phuquoc: 20, hochiminh: 25, hanoi: 25, boracay: 20, phuket: 20, hongkong: 30, guam: 15, hawaii: -30, paris: -55, kualalumpur: 15, maldives: -30, sydney: -45, shanghai: 30, barcelona: -55, saipan: 15, palawan: 20, sanya: 25 } },
      { e: WIZ_ICONS.globe, label: '멀리도 좋아요', bonus: { lisbon: 60, danang: 5, osaka: 5, taipei: 5, jeju: -10, bali: 15, cebu: 10, bangkok: 5, chiangmai: 5, singapore: 10, nhatrang: 5, tokyo: 5, fukuoka: -10, sapporo: 5, okinawa: 5, kyoto: 5, miyakojima: 10, phuquoc: 15, hochiminh: 10, hanoi: 10, boracay: 15, phuket: 15, hongkong: 5, guam: 20, hawaii: 30, paris: 40, kualalumpur: 10, maldives: 35, sydney: 30, shanghai: -5, barcelona: 40, saipan: 20, palawan: 15, sanya: 10 } },
    ]
  },
  {
    q: '여행에서 가장 중요한 건?', e: WIZ_ICONS.star,
    opts: [
      { e: WIZ_ICONS.wallet, label: '최대한 저렴하게', bonus: { danang: 40, jeju: 25, taipei: 25, osaka: 10, lisbon: -30, nhatrang: 50, chiangmai: 45, bangkok: 35, cebu: 35, bali: 20, singapore: -50, tokyo: -10, fukuoka: 30, sapporo: 5, okinawa: 10, kyoto: 5, miyakojima: -20, phuquoc: 40, hochiminh: 50, hanoi: 50, boracay: 25, phuket: 20, hongkong: -20, guam: -15, hawaii: -60, paris: -70, kualalumpur: 35, maldives: -75, sydney: -50, shanghai: 35, barcelona: -65, saipan: -10, palawan: 30, sanya: 15 }, tierOverride: 'low' },
      { e: WIZ_ICONS.shield, label: '안전·치안이 최우선', bonus: { jeju: 45, osaka: 30, taipei: 25, lisbon: 10, danang: -10, singapore: 45, tokyo: 35, chiangmai: 5, bali: -5, bangkok: -15, cebu: -20, nhatrang: -20, fukuoka: 30, sapporo: 25, okinawa: 25, kyoto: 30, miyakojima: 30, phuquoc: -5, hochiminh: -10, hanoi: -5, boracay: -5, phuket: 0, hongkong: 15, guam: 20, hawaii: 25, paris: 5, kualalumpur: 5, maldives: 20, sydney: 20, shanghai: 5, barcelona: 5, saipan: 20, palawan: -5, sanya: 10 } },
      { e: WIZ_ICONS.sun, label: '완벽한 날씨와 분위기', bonus: { lisbon: 30, danang: 30, osaka: 20, jeju: 15, taipei: 10, bali: 40, nhatrang: 30, cebu: 25, chiangmai: 20, bangkok: 15, singapore: 10, tokyo: 10, fukuoka: 15, sapporo: 20, okinawa: 30, kyoto: 20, miyakojima: 55, phuquoc: 30, hochiminh: 10, hanoi: 10, boracay: 35, phuket: 25, hongkong: 15, guam: 25, hawaii: 35, paris: 30, kualalumpur: 5, maldives: 45, sydney: 20, shanghai: 5, barcelona: 30, saipan: 30, palawan: 35, sanya: 25 } },
      { e: WIZ_ICONS.sparkle, label: '잊지 못할 특별한 체험', bonus: { lisbon: 35, osaka: 25, taipei: 20, danang: 15, jeju: 10, tokyo: 30, singapore: 25, bali: 25, chiangmai: 20, bangkok: 20, cebu: 20, nhatrang: 10, fukuoka: 20, sapporo: 30, okinawa: 25, kyoto: 30, miyakojima: 40, phuquoc: 15, hochiminh: 15, hanoi: 15, boracay: 25, phuket: 20, hongkong: 20, guam: 25, hawaii: 40, paris: 45, kualalumpur: 10, maldives: 50, sydney: 25, shanghai: 10, barcelona: 35, saipan: 20, palawan: 30, sanya: 15 } },
    ]
  },
];

const wizState = { answers: {}, openRow: null };

function showWizard() {
  const panel = document.getElementById('wiz-panel');
  if (!panel) return;
  renderWizList();
  panel.classList.add('wiz-open');
}

function closeWizard() {
  const panel = document.getElementById('wiz-panel');
  if (!panel) return;
  panel.classList.remove('wiz-open');
}


// ── 모바일/태블릿: 여행 검색 진행률 뱃지 ──

// ── 모바일/태블릿 초기화 (한 번만 실행) ──
var _mobileInitDone = false;
// ════════════════════════════════════════════════════════════════
// ⚠️  CRITICAL: 이 함수를 수정하면 초기 비교화면이 렌더링되지 않습니다.
//    - updateColumn() 호출을 제거하지 마세요
//    - API 추가 시에도 이 함수의 기본 렌더링 로직은 반드시 유지하세요
//    - 이 함수가 깨지면 → 비교화면 빈 화면 or 홈화면이 대신 표시됨
// ════════════════════════════════════════════════════════════════
function _initMobileCompare() {
  if (_mobileInitDone) return;
  _mobileInitDone = true;
  var homeView = document.getElementById("home-view");
  var compareView = document.getElementById("compare-view");
  if (homeView) homeView.style.display = "none";
  if (compareView) compareView.style.display = "block";
  // ── 스켈레톤 표시 (데이터 렌더 전) ──
  var _skelIds = [
    'total-0', 'air-0', 'hotel-0', 'daily-0',
    'total-1', 'air-1', 'hotel-1', 'daily-1',
    'total-2', 'air-2', 'hotel-2', 'daily-2'
  ];
  _skelIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('sk');
  });
  setTimeout(function () {
    var bInput = document.getElementById("budget-input-home");
    if (bInput && !bInput.value) bInput.value = "unlimited";
    var bInputC = document.getElementById("budget-input-compare");
    if (bInputC && !bInputC.value) bInputC.value = "unlimited";
    window._isAutoBudget = true; // 자동 세팅
    var now = new Date();
    var dep = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var ret = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);
    var d1 = (dep.getMonth() + 1) + "월 " + dep.getDate() + "일";
    var d2 = (ret.getMonth() + 1) + "월 " + ret.getDate() + "일";
    var dateEl = document.getElementById("home-date-value");
    if (dateEl && (!dateEl.textContent || dateEl.textContent === "날짜선택")) {
      dateEl.textContent = d1 + " \u2013 " + d2;
      window._isAutoDate = true; // 자동 세팅
    }
    var s0 = document.getElementById("sel0"), s1 = document.getElementById("sel1"), s2 = document.getElementById("sel2");
    var sf0 = document.getElementById("sel0-fixed"), sf1 = document.getElementById("sel1-fixed"), sf2 = document.getElementById("sel2-fixed");
    // 기본 여행지: 누적 클릭 인기순 → 없으면 한국인 인기 하드코딩 fallback
    var _topDests = _getTopDests(3);
    var _d0 = (_topDests && _topDests[0]) || "4"; // 오사카
    var _d1 = (_topDests && _topDests[1]) || "3"; // 타이베이
    var _d2 = (_topDests && _topDests[2]) || "6"; // 방콕
    if (s0) s0.value = _d0; if (sf0) sf0.value = _d0;
    if (s1) s1.value = _d1; if (sf1) sf1.value = _d1;
    if (s2) s2.value = _d2; if (sf2) sf2.value = _d2;
    updateResultsByFilters();
    // ── 스켈레톤 제거 ──
    requestAnimationFrame(function () {
      _skelIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.classList.remove('sk');
      });
    });
    _cvSheetOpenedOnce = true;
    // wiz-launcher 텍스트 변경 (모바일/태블릿만)
    if (window.innerWidth <= 1068) {
      var wizLabel = document.querySelector(".wiz-launcher-label");
      if (wizLabel) wizLabel.textContent = "여행 검색";
      var wizSvg = document.querySelector("#wiz-launcher svg");
      if (wizSvg) wizSvg.innerHTML = '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>';
    }
    if (typeof updateSearchBadge === "function") updateSearchBadge();
    _addWeatherSk(); if (typeof fetchWeatherDebounced === "function") fetchWeatherDebounced();
  }, 100);
}

function updateSearchBadge() {
  if (window.innerWidth > 1068) return;
  var badge = document.getElementById('wiz-launcher-badge');
  if (!badge) return;

  var inCompareView = document.getElementById('compare-view') &&
    document.getElementById('compare-view').style.display !== 'none';
  // undefined 초기화 전 방어: 자동 세팅된 것으로 간주
  var isAutoDate = (window._isAutoDate !== false); // undefined → true
  var isAutoBudget = (window._isAutoBudget !== false); // undefined → true

  var hasNormalDate = !isAutoDate &&
    (function () {
      var el = document.getElementById('home-date-value');
      return el && el.textContent && el.textContent.includes(' \u2013 ');
    })();
  var hasFlexDate = (window._cvFlexMonth != null) || (window._cvFlexDuration != null);
  var hasDate = hasNormalDate || hasFlexDate;

  var count = 0;
  // 지역: 사용자가 명시적으로 선택 (어디든지 포함)
  if (window._regionTouched) count++;
  // 날짜: 사용자 직접 선택 (자동 아님)
  if (hasDate) count++;
  // 예산: 사용자 직접 선택 (자동 아님)
  if (!isAutoBudget) count++;

  if (count > 0) {
    badge.textContent = count + '/3';
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }
}

function toggleWizard() {
  // 모바일/태블릿: 취향설정 대신 여행 검색 하프팝업
  if (window.innerWidth <= 1068) {
    openCvSearchSheet();
    return;
  }
  const panel = document.getElementById('wiz-panel');
  if (panel.classList.contains('wiz-open')) {
    closeWizard();
  } else {
    showWizard();
  }
}

function renderWizList() {
  const list = document.getElementById('wiz-list');
  if (!list) return;
  const answered = Object.keys(wizState.answers).length;
  const countEl = document.getElementById('wiz-count');
  if (countEl) countEl.textContent = answered + ' / ' + WIZ_Q.length;
  const progressEl = document.getElementById('wiz-progress');
  if (progressEl) progressEl.style.width = (answered / WIZ_Q.length * 100) + '%';
  const badgeEl = document.getElementById('wiz-launcher-badge');
  if (badgeEl) {
    if (answered > 0) { badgeEl.textContent = answered + '/' + WIZ_Q.length; badgeEl.style.display = 'inline-block'; }
    else { badgeEl.style.display = 'none'; }
  }

  list.innerHTML = WIZ_Q.map((q, qi) => {
    const ans = wizState.answers[qi];
    const isAnswered = ans !== undefined;
    const isOpen = wizState.openRow === qi;
    return '<div class="wiz-row' + (isAnswered ? ' answered' : '') + '" onclick="toggleWizRow(' + qi + ')">' +
      '<div class="wiz-num">' + (qi + 1) + '</div>' +
      '<div class="wiz-row-text">' +
      '<div class="wiz-row-q">' + q.q + '</div>' +
      (isAnswered ? '<div class="wiz-row-ans">' + q.opts[ans].label + '</div>' : '') +
      '</div>' +
      '</div>' +
      '<div class="wiz-expand' + (isOpen ? ' open' : '') + '">' +
      q.opts.map((opt, oi) =>
        '<button class="wiz-chip' + (ans === oi ? ' sel' : '') + '" onclick="event.stopPropagation();selectWizChip(' + qi + ',' + oi + ')">' +
        opt.e + opt.label + '</button>'
      ).join('') +
      '</div>';
  }).join('');
}

function toggleWizRow(qi) {
  wizState.openRow = wizState.openRow === qi ? null : qi;
  renderWizList();
}

function selectWizChip(qi, optIdx) {
  // Capture previous top 3 names before update
  var prevNames = [0, 1, 2].map(function (i) {
    var el = document.getElementById('dname' + i);
    return el ? el.textContent : '';
  }).filter(Boolean);

  wizState.answers[qi] = optIdx;
  wizState.openRow = null;
  const bonus = {}; v1_0_9_DEST_DATA.forEach(function (d) { bonus[d.id] = 0; });
  window.wizardTierOverride = null;
  var _travelMonth = getTravelMonth(); // 여행 월 한 번만 계산
  WIZ_Q.forEach((q, si) => {
    const ai = wizState.answers[si];
    if (ai === undefined) return;
    const opt = q.opts[ai];
    // 일반 보너스 적용
    Object.entries(opt.bonus || {}).forEach(([id, pts]) => {
      if (bonus[id] !== undefined) bonus[id] += pts;
    });
    if (opt.tierOverride) window.wizardTierOverride = opt.tierOverride;
    // ── riskType: 모든 답변을 순회하며 패널티 적용 ──
    var riskType = opt.riskType || null;
    if (riskType) {
      v1_0_9_DEST_DATA.forEach(function (d) {
        var risks = DEST_SEASONAL_RISKS[d.id] || {};
        if ((risks[riskType] || []).indexOf(_travelMonth) !== -1) {
          if (bonus[d.id] !== undefined) bonus[d.id] -= 70;
        }
      });
    }
  });
  window.wizardBonus = bonus;
  // 현재 선택한 옵션이 완전히 중립(bonus 없고 riskType도 null)인 경우만 결과 재계산 생략
  var _curOpt = WIZ_Q[qi].opts[optIdx];
  var _isNeutral = !_curOpt.riskType && Object.keys(_curOpt.bonus || {}).length === 0;
  if (!_isNeutral) {
    updateResultsByFilters();
  }
  renderWizList();
}

function resetWizard() {
  wizState.answers = {};
  wizState.openRow = null;
  window.wizardBonus = {}; v1_0_9_DEST_DATA.forEach(function (d) { window.wizardBonus[d.id] = 0; });
  window.wizardTierOverride = null;
  updateResultsByFilters();
  renderWizList();
}

// Fixed Header Logic — handled by CSS position:sticky on .sticky-sel
// No JS needed; native sticky provides pixel-perfect timing
const fixedHeader = document.getElementById('fixed-header-clone');
if (fixedHeader) fixedHeader.style.display = 'none';

// ── 비교뷰 모바일 탭 검색 시트 ──
var cvCalInitialized = false;
var cvCalSel = { start: null, end: null }; // ISO date strings
var cvTravelers = { adults: 1, children: 0, infants: 0 };
var cvRegion = '';
var cvBudget = 'unlimited';

/* ── 커스텀 달력 렌더러 ── */
function initCvCal() {
  var container = document.getElementById('cv-cal');
  if (!container) return;
  container.innerHTML = '';
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var MONTHS = 6;
  for (var mi = 0; mi < MONTHS; mi++) {
    var base = new Date(today.getFullYear(), today.getMonth() + mi, 1);
    container.appendChild(cvRenderMonth(base, today));
  }
  cvCalInitialized = true;
}

function cvRenderMonth(base, today) {
  var year = base.getFullYear(), month = base.getMonth();
  var wrap = document.createElement('div');
  wrap.className = 'cv-cal-month';
  var label = document.createElement('div');
  label.className = 'cv-cal-month-label';
  label.textContent = year + '년 ' + (month + 1) + '월';
  wrap.appendChild(label);
  var weekdays = document.createElement('div');
  weekdays.className = 'cv-cal-weekdays';
  ['일', '월', '화', '수', '목', '금', '토'].forEach(function (d) {
    var s = document.createElement('span'); s.textContent = d; weekdays.appendChild(s);
  });
  wrap.appendChild(weekdays);
  var grid = document.createElement('div');
  grid.className = 'cv-cal-grid';

  // 모든 셀(빈칸 포함)을 flat 배열로 만든 후 7개씩 row로 묶음
  var cells = [];
  var firstDay = new Date(year, month, 1).getDay();
  for (var e = 0; e < firstDay; e++) {
    var em = document.createElement('span'); em.className = 'cv-cal-day empty'; cells.push(em);
  }
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  for (var d = 1; d <= daysInMonth; d++) {
    var dt = new Date(year, month, d);
    var iso = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    var el = document.createElement('span');
    el.className = 'cv-cal-day';
    el.dataset.iso = iso;
    var num = document.createElement('span');
    num.className = 'cv-cal-num';
    num.textContent = d;
    el.appendChild(num);
    if (dt < today) { el.classList.add('disabled'); }
    else {
      if (dt.getTime() === today.getTime()) el.classList.add('today');
      el.addEventListener('click', function () { cvCalClickDay(this.dataset.iso); });
    }
    cells.push(el);
  }
  // 7개씩 row div로 묶어서 grid에 추가
  for (var ri = 0; ri < cells.length; ri += 7) {
    var row = document.createElement('div');
    row.className = 'cv-cal-row';
    var rowCells = cells.slice(ri, ri + 7);
    rowCells.forEach(function (c) { row.appendChild(c); });
    grid.appendChild(row);
  }
  wrap.appendChild(grid);
  return wrap;
}

function cvCalClickDay(iso) {
  if (!cvCalSel.start || (cvCalSel.start && cvCalSel.end)) {
    cvCalSel = { start: iso, end: null };
  } else {
    if (iso < cvCalSel.start) { cvCalSel = { start: iso, end: cvCalSel.start }; }
    else if (iso === cvCalSel.start) { cvCalSel.end = iso; }
    else { cvCalSel.end = iso; }
  }
  cvCalRefresh();
  if (cvCalSel.start && cvCalSel.end) {
    var fmt = function (s) { var p = s.split('-'); return parseInt(p[1]) + '월 ' + parseInt(p[2]) + '일'; };
    var txt = cvCalSel.start === cvCalSel.end
      ? fmt(cvCalSel.start)
      : fmt(cvCalSel.start) + ' \u2013 ' + fmt(cvCalSel.end); // 엔대시 통일
    var ev = document.getElementById('cvt-date-val'); if (ev) ev.textContent = txt;
    var src = document.getElementById('sb-date-display'); if (src) { src.textContent = txt; src.classList.add('filled'); }
    var srcC = document.getElementById('sb-date-display-c'); if (srcC) { srcC.textContent = txt; srcC.classList.add('filled'); }
    // home-date-value 업데이트 (hasNormalDate 체크용)
    var hdv = document.getElementById('home-date-value'); if (hdv) hdv.textContent = txt;
    window.selectedDates = [new Date(cvCalSel.start), new Date(cvCalSel.end)];
    window._isAutoDate = false; // 사용자 직접 선택
    if (typeof updateSearchBadge === 'function') updateSearchBadge();
  }
}

function cvCalRefresh() {
  var hasRange = cvCalSel.start && cvCalSel.end && cvCalSel.start !== cvCalSel.end;
  var s = cvCalSel.start, e = cvCalSel.end;
  var allDays = document.querySelectorAll('#cv-cal .cv-cal-day:not(.empty)');

  // 1) 모든 날짜 클래스 초기화
  allDays.forEach(function (el) {
    el.classList.remove('sel-start', 'sel-end', 'in-range', 'has-range');
    var iso = el.dataset.iso; if (!iso) return;
    if (s && iso === s) { el.classList.add('sel-start'); if (hasRange) el.classList.add('has-range'); }
    if (e && iso === e) { el.classList.add('sel-end'); if (hasRange) el.classList.add('has-range'); }
    if (hasRange && iso > s && iso < e) el.classList.add('in-range');
  });

  // 2) 모든 row pill 초기화
  document.querySelectorAll('#cv-cal .cv-cal-row').forEach(function (row) {
    row.classList.remove('has-pill');
    row.style.removeProperty('--pill-left');
    row.style.removeProperty('--pill-right');
  });

  if (!hasRange) return;

  // 3) row 단위로 pill 배경 계산
  document.querySelectorAll('#cv-cal .cv-cal-row').forEach(function (row) {
    var cells = Array.from(row.querySelectorAll('.cv-cal-day'));
    // row 내에서 선택 범위에 포함되는 첫/끝 col 인덱스 찾기
    var pillStartCol = -1, pillEndCol = -1;

    cells.forEach(function (cell, ci) {
      var iso = cell.dataset.iso;
      if (!iso) return;
      var inSel = (iso >= s && iso <= e);
      if (inSel) {
        if (pillStartCol === -1) pillStartCol = ci;
        pillEndCol = ci;
      }
    });

    if (pillStartCol === -1) return; // 이 row에 선택 범위 없음

    // col 인덱스를 % 기준으로 변환 (7등분) — 셀 경계 기준
    var leftPct = (pillStartCol / 7 * 100).toFixed(2) + '%';
    var rightPct = ((7 - pillEndCol - 1) / 7 * 100).toFixed(2) + '%';

    var hasInRange = cells.some(function (c) { return c.classList.contains('in-range'); });
    var hasSelStart = cells.some(function (c) { return c.classList.contains('sel-start') && c.classList.contains('has-range'); });
    var hasSelEnd = cells.some(function (c) { return c.classList.contains('sel-end') && c.classList.contains('has-range'); });

    if (!hasInRange && !hasSelStart && !hasSelEnd) return;

    row.classList.add('has-pill');

    // 원의 반지름(20px)만큼 안쪽으로 당겨서 pill이 원 테두리에서 정확히 시작/끝나도록 calc() 사용
    var R = 20; // cv-cal-num 반지름 (40px / 2)
    if (hasSelStart && !hasSelEnd) {
      // start -> row 끝: pill 왼쪽 = 원 중앙% - R(px) → 원의 왼쪽 테두리
      var startCell = cells.find(function (c) { return c.classList.contains('sel-start'); });
      var startIdx = cells.indexOf(startCell);
      var centerPct = ((startIdx + 0.5) / 7 * 100).toFixed(4);
      leftPct = 'calc(' + centerPct + '% - ' + R + 'px)';
      rightPct = '0%';
    } else if (hasSelEnd && !hasSelStart) {
      // row 처음 -> end: pill 오른쪽 = 원 중앙% - R(px) → 원의 오른쪽 테두리
      var endCell = cells.find(function (c) { return c.classList.contains('sel-end'); });
      var endIdx = cells.indexOf(endCell);
      var centerFromRightPct = ((7 - endIdx - 0.5) / 7 * 100).toFixed(4);
      leftPct = '0%';
      rightPct = 'calc(' + centerFromRightPct + '% - ' + R + 'px)';
    } else if (hasSelStart && hasSelEnd) {
      // start -> end 같은 row
      var sCell = cells.find(function (c) { return c.classList.contains('sel-start'); });
      var eCell = cells.find(function (c) { return c.classList.contains('sel-end'); });
      var sIdx = cells.indexOf(sCell);
      var eIdx = cells.indexOf(eCell);
      var sCenterPct = ((sIdx + 0.5) / 7 * 100).toFixed(4);
      var eCenterFromRightPct = ((7 - eIdx - 0.5) / 7 * 100).toFixed(4);
      leftPct = 'calc(' + sCenterPct + '% - ' + R + 'px)';
      rightPct = 'calc(' + eCenterFromRightPct + '% - ' + R + 'px)';
    }
    row.style.setProperty('--pill-left', leftPct);
    row.style.setProperty('--pill-right', rightPct);
  });
}

function syncCvTabValues() {
  var regionSrc = document.getElementById('region-display');
  var el = document.getElementById('cvt-region-val');
  if (el) el.textContent = (regionSrc ? regionSrc.textContent.trim() : '') || '전체 지역';
  var dateSrc = document.getElementById('sb-date-display');
  el = document.getElementById('cvt-date-val');
  if (el) el.textContent = (dateSrc ? dateSrc.textContent.trim() : '') || '날짜 선택';
  var travSrc = document.getElementById('sb-traveler-display');
  el = document.getElementById('cvt-traveler-val');
  if (el) el.textContent = (travSrc ? travSrc.textContent.trim() : '') || '1명';
  var adults = parseInt((document.getElementById('count-adults') || {}).textContent) || 1;
  var children = parseInt((document.getElementById('count-children') || {}).textContent) || 0;
  var infants = parseInt((document.getElementById('count-infants') || {}).textContent) || 0;
  cvTravelers = { adults: adults, children: children, infants: infants };
  var an = document.getElementById('cv-count-adults'); if (an) an.textContent = adults;
  var cn = document.getElementById('cv-count-children'); if (cn) cn.textContent = children;
  var inf = document.getElementById('cv-count-infants'); if (inf) inf.textContent = infants;
  var budgetSrc = document.getElementById('sb-budget-display');
  el = document.getElementById('cvt-budget-val');
  if (el) el.textContent = (budgetSrc ? budgetSrc.textContent.trim() : '') || '상관없음';
  // 예산 탭 체크마크 동기화
  var bInput = document.getElementById('budget-input-home');
  var curBudgetVal = bInput ? bInput.value : 'unlimited';
  var checkSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  document.querySelectorAll('#cv-content-budget .cv-row').forEach(function (row) {
    var isActive = row.getAttribute('data-val') === curBudgetVal;
    row.classList.toggle('active', isActive);
    var chk = row.querySelector('.cv-row-check');
    if (chk) chk.innerHTML = isActive ? checkSvg : '';
  });
  cvUpdateCounterBtns();
}

var _cvSheetOpenedOnce = false;
function openCvSearchSheet() {
  syncCvTabValues();
  var sheet = document.getElementById('cv-search-sheet');
  if (sheet) sheet.classList.add('open');
  if (!cvCalInitialized) initCvCal();
  switchCvTab('region');
  // 배경 페이지 스크롤 잠금
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';

  // 모바일 첫 오픈 시 — 팝업 뒤 배경에 기본 여행지 2개 미리 렌더
  if (!_cvSheetOpenedOnce && !_sharedLoaded && window.innerWidth < 744) {
    _cvSheetOpenedOnce = true;
    var cv = document.getElementById('compare-view');
    var hv = document.getElementById('home-view');
    if (cv && hv) {
      hv.style.display = 'none';
      cv.style.display = 'block';
      // 기본 여행지: 타이베이(3), 오사카(4) — v1_0_9_DEST_DATA 인덱스
      var defaultBudget = 120, defaultDays = 5;
      updateColumn(0, 3, defaultBudget, defaultDays);
      updateColumn(1, 4, defaultBudget, defaultDays);
      var s0 = document.getElementById('sel0'), s1 = document.getElementById('sel1');
      var sf0 = document.getElementById('sel0-fixed'), sf1 = document.getElementById('sel1-fixed');
      if (s0) s0.value = '3'; if (sf0) sf0.value = '3';
      if (s1) s1.value = '4'; if (sf1) sf1.value = '4';
    }
  }
}

function closeCvSearchSheet() {
  var sheet = document.getElementById('cv-search-sheet');
  if (sheet) sheet.classList.remove('open');
  // 배경 스크롤 복원
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';

  // 모바일: 닫혔을 때 비교뷰가 비어있으면 기본 여행지 렌더
  if (window.innerWidth < 744 && !_sharedLoaded) {
    var body = document.getElementById('comparison-body');
    if (body && body.style.display === 'none') {
      var bInput = document.getElementById('budget-input-home');
      if (bInput) bInput.value = 'unlimited';
      var bInputC = document.getElementById('budget-input-compare');
      if (bInputC) bInputC.value = 'unlimited';
      window._isAutoBudget = true; // 사용자 미선택 자동 예산
      var now = new Date();
      var dep = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      var ret = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);
      var dateEl = document.getElementById('home-date-value');
      if (dateEl && (!dateEl.textContent || dateEl.textContent === '날짜선택')) {
        dateEl.textContent = (dep.getMonth() + 1) + '월 ' + dep.getDate() + '일 – ' + (ret.getMonth() + 1) + '월 ' + ret.getDate() + '일';
        window._isAutoDate = true; // 사용자 미선택 자동 날짜 표시
      }
      updateResultsByFilters();
    }
  }
  if (typeof updateSearchBadge === 'function') updateSearchBadge();
}

function switchCvTab(tab) {
  ['region', 'date', 'traveler', 'budget'].forEach(function (t) {
    var btn = document.getElementById('cv-tab-' + t);
    var content = document.getElementById('cv-content-' + t);
    if (btn) btn.classList.toggle('active', t === tab);
    if (content) content.style.display = (t === tab) ? '' : 'none';
  });
}

function cvSelectRegion(val) {
  cvRegion = val;
  var checkSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  document.querySelectorAll('#cv-content-region .cv-row').forEach(function (el) {
    var isActive = el.getAttribute('data-val') === val;
    el.classList.toggle('active', isActive);
    var check = el.querySelector('.cv-row-check');
    if (check) check.innerHTML = isActive ? checkSvg : '';
  });
  var labels = { '': '전체 지역', 'japan': '일본', 'sea': '동남아시아', 'europe': '유럽', 'east_asia': '동아시아', 'pacific': '괌·하와이·호주', 'resort': '휴양지' };
  var txt = labels[val] || '전체 지역';
  var el = document.getElementById('cvt-region-val'); if (el) el.textContent = txt;
  var src = document.getElementById('region-display'); if (src) src.textContent = txt;
  window.selectedRegion = val;
  window._regionTouched = true; // 사용자 명시적 선택
  document.querySelectorAll('.sb-region-opt').forEach(function (o) {
    o.classList.toggle('active', o.getAttribute('data-val') === val);
  });
  if (typeof updateSearchBadge === 'function') updateSearchBadge();
}

function cvUpdateTravelers(type, delta) {
  var min = type === 'adults' ? 1 : 0;
  cvTravelers[type] = Math.max(min, (cvTravelers[type] || 0) + delta);
  var el = document.getElementById('cv-count-' + type); if (el) el.textContent = cvTravelers[type];
  cvUpdateCounterBtns();
  var total = cvTravelers.adults + cvTravelers.children + cvTravelers.infants;
  var txt = total + '명';
  var tvEl = document.getElementById('cvt-traveler-val'); if (tvEl) tvEl.textContent = txt;
  // 홈뷰도 동기화
  var srcEl = document.getElementById('sb-traveler-display'); if (srcEl) srcEl.textContent = txt;
  var an = document.getElementById('count-adults'); if (an) an.textContent = cvTravelers.adults;
  var cn = document.getElementById('count-children'); if (cn) cn.textContent = cvTravelers.children;
  var inf = document.getElementById('count-infants'); if (inf) inf.textContent = cvTravelers.infants;
  var pts = document.getElementById('count-pets'); if (pts) pts.textContent = (cvTravelers.pets || 0);
  window.tAdults = cvTravelers.adults;
  window.tChildren = cvTravelers.children;
  window.tInfants = cvTravelers.infants;
  window.tPets = cvTravelers.pets || 0;
}

function cvUpdateCounterBtns() {
  var m = document.getElementById('cv-adults-minus'); if (m) m.disabled = (cvTravelers.adults <= 1);
  var mc = document.getElementById('cv-children-minus'); if (mc) mc.disabled = (cvTravelers.children <= 0);
  var mi = document.getElementById('cv-infants-minus'); if (mi) mi.disabled = (cvTravelers.infants <= 0);
  var mp = document.getElementById('cv-pets-minus'); if (mp) mp.disabled = ((cvTravelers.pets || 0) <= 0);
}

function cvSelectBudget(val) {
  cvBudget = val;
  // hidden input 동기화 — 이 값이 _getCurrentBudget, updateResultsByFilters 등에서 참조됨
  var hiddenHome = document.getElementById('budget-input-home');
  var hiddenComp = document.getElementById('budget-input-compare');
  if (hiddenHome) hiddenHome.value = val;
  if (hiddenComp) hiddenComp.value = val;
  var checkSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  document.querySelectorAll('#cv-content-budget .cv-row').forEach(function (el) {
    var isActive = el.getAttribute('data-val') === val;
    el.classList.toggle('active', isActive);
    var check = el.querySelector('.cv-row-check');
    if (check) check.innerHTML = isActive ? checkSvg : '';
  });
  var labels = { 'cheapest': '최저가', '120': '120만원 이내', '200': '200만원 이내', '300': '250만원 이상', 'unlimited': '상관없음' };
  var txt = labels[val] || '상관없음';
  var el = document.getElementById('cvt-budget-val'); if (el) el.textContent = txt;
  var srcEl = document.getElementById('sb-budget-display'); if (srcEl) { srcEl.textContent = txt; srcEl.classList.add('filled'); }
  var srcElC = document.getElementById('sb-budget-display-c'); if (srcElC) { srcElC.textContent = txt; srcElC.classList.add('filled'); }
  window.selectedBudget = val === 'unlimited' ? null : val;
  window._isAutoBudget = false; // 사용자 직접 선택
  document.querySelectorAll('.budget-pill').forEach(function (o) {
    o.classList.toggle('active', o.getAttribute('data-val') === val);
  });
  // 데스크톱 패널 체크마크도 동기화
  document.querySelectorAll('.sb-budget-opt').forEach(function (p) {
    var isActive = p.dataset.val === val;
    p.classList.toggle('active', isActive);
    var chk = p.querySelector('.sb-budget-check');
    if (chk) chk.innerHTML = isActive ? checkSvg : '';
  });
  if (typeof updateSearchBadge === 'function') updateSearchBadge();
}

function switchCvDateTab(tab) {
  var s = document.getElementById('cv-date-specific');
  var f = document.getElementById('cv-date-flexible');
  var ts = document.getElementById('cvdt-specific');
  var tf = document.getElementById('cvdt-flexible');
  if (s) s.style.display = tab === 'specific' ? '' : 'none';
  if (f) f.style.display = tab === 'flexible' ? '' : 'none';
  if (ts) ts.classList.toggle('active', tab === 'specific');
  if (tf) tf.classList.toggle('active', tab === 'flexible');
  if (tab === 'flexible') cvUpdateFlexDisplay();
}

// ── 유연한 일정 상태 ──
var _cvFlexDuration = null; // 'weekend' | 'week' | 'month' | null
var _cvFlexMonth = null; // { year, month(0-indexed) }

var CV_FLEX_DUR_LABELS = { weekend: '주말', week: '1주일', month: '한 달' };
var CV_FLEX_DUR_NIGHTS = { weekend: 2, week: 6, month: 29 };
var CV_FLEX_MONTH_ICON = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function cvScrollMonths(dir) {
  var list = document.getElementById('cv-flex-month-list');
  if (!list) return;
  if (dir === 'left') {
    list.scrollBy({ left: -94, behavior: 'smooth' });
  } else {
    list.scrollBy({ left: 94, behavior: 'smooth' });
  }
  // 스크롤 후 화살표 표시 업데이트
  setTimeout(cvUpdateMonthArrows, 350);
}

function cvUpdateMonthArrows() {
  var list = document.getElementById('cv-flex-month-list');
  var btnL = document.getElementById('cv-flex-month-arrow-left');
  var btnR = document.getElementById('cv-flex-month-arrow-right');
  if (!list) return;
  var maxScroll = list.scrollWidth - list.clientWidth;
  if (btnL) btnL.style.display = list.scrollLeft > 4 ? 'flex' : 'none';
  if (btnR) btnR.style.display = list.scrollLeft < maxScroll - 4 ? 'flex' : 'none';
}

// ── PC 유연한 일정 함수 (sb-flex-*-c IDs) ──
function sbInitFlexMonths() {
  var list = document.getElementById('sb-flex-month-list-c');
  if (!list || list.children.length > 0) return;
  var today = new Date();
  var curY = today.getFullYear(), curM = today.getMonth();
  var monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  for (var i = 0; i < 9; i++) {
    var m = (curM + i) % 12, y = curY + Math.floor((curM + i) / 12);
    (function (mi, yi) {
      var card = document.createElement('div');
      card.className = 'cv-flex-month-card';
      card.dataset.month = mi; card.dataset.year = yi;
      card.innerHTML =
        '<div class="cv-flex-month-icon">' + CV_FLEX_MONTH_ICON + '</div>' +
        '<div class="cv-flex-month-name">' + monthNames[mi] + '</div>' +
        '<div class="cv-flex-month-year">' + yi + '</div>';
      card.addEventListener('click', function () {
        document.querySelectorAll('.cv-flex-month-card').forEach(function (c) { c.classList.remove('active'); });
        card.classList.add('active');
        _cvFlexMonth = { year: yi, month: mi };
        cvUpdateFlexSummary();
      });
      list.appendChild(card);
    })(m, y);
  }
  setTimeout(sbUpdateMonthArrows, 50);
}

function sbScrollMonths(dir) {
  var list = document.getElementById('sb-flex-month-list-c');
  if (!list) return;
  list.scrollBy({ left: dir === 'left' ? -94 : 94, behavior: 'smooth' });
  setTimeout(sbUpdateMonthArrows, 350);
}

function sbUpdateMonthArrows() {
  var list = document.getElementById('sb-flex-month-list-c');
  var btnL = document.getElementById('sb-flex-month-arrow-left-c');
  var btnR = document.getElementById('sb-flex-month-arrow-right-c');
  if (!list) return;
  var maxScroll = list.scrollWidth - list.clientWidth;
  if (btnL) btnL.style.display = list.scrollLeft > 4 ? 'flex' : 'none';
  if (btnR) btnR.style.display = list.scrollLeft < maxScroll - 4 ? 'flex' : 'none';
}

function cvInitFlexMonths() {
  var list = document.getElementById('cv-flex-month-list');
  if (!list || list.children.length > 0) return; // 이미 생성됨
  var today = new Date();
  var curY = today.getFullYear(), curM = today.getMonth();
  var monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  for (var i = 0; i < 9; i++) {
    var m = (curM + i) % 12, y = curY + Math.floor((curM + i) / 12);
    (function (mi, yi, idx) {
      var card = document.createElement('div');
      card.className = 'cv-flex-month-card';
      card.dataset.month = mi; card.dataset.year = yi;
      card.innerHTML =
        '<div class="cv-flex-month-icon">' + CV_FLEX_MONTH_ICON + '</div>' +
        '<div class="cv-flex-month-name">' + monthNames[mi] + '</div>' +
        '<div class="cv-flex-month-year">' + yi + '</div>';
      card.addEventListener('click', function () {
        document.querySelectorAll('.cv-flex-month-card').forEach(function (c) { c.classList.remove('active'); });
        card.classList.add('active');
        _cvFlexMonth = { year: yi, month: mi };
        cvUpdateFlexSummary();
      });
      list.appendChild(card);
    })(m, y, i);
  }
  // 초기 화살표 상태 설정 (렌더 후 실행)
  setTimeout(cvUpdateMonthArrows, 50);
}

function cvSetDuration(btn, dur) {
  _cvFlexDuration = dur;
  document.querySelectorAll('.cv-flex-dur-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  cvUpdateFlexSummary();
}

function cvUpdateFlexSummary() {
  var el = document.getElementById('cv-flex-summary');
  var monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  var durLabel = _cvFlexDuration ? (CV_FLEX_DUR_LABELS[_cvFlexDuration] || '') : '';
  var monthLabel = _cvFlexMonth ? monthNames[_cvFlexMonth.month] : '';

  // 팝업 내부 요약 텍스트
  if (el) {
    if (_cvFlexMonth && _cvFlexDuration) {
      el.innerHTML = '<strong>' + monthLabel + '의 ' + durLabel + '</strong>으로 검색합니다';
    } else if (_cvFlexMonth) {
      el.innerHTML = '<strong>' + monthLabel + '</strong> 선택됨';
    } else if (_cvFlexDuration) {
      el.innerHTML = '<strong>' + durLabel + '</strong> 선택됨 · 월을 선택해주세요';
    } else {
      el.innerHTML = '';
    }
  }

  // 상단 바 날짜 필드 실시간 반영
  var label = '';
  if (monthLabel && durLabel) {
    label = monthLabel + ' · ' + durLabel;
  } else if (monthLabel) {
    label = monthLabel;
  } else if (durLabel) {
    label = durLabel;
  }

  var displays = ['sb-date-display', 'sb-date-display-c'];
  displays.forEach(function (id) {
    var d = document.getElementById(id);
    if (!d) return;
    if (label) {
      d.textContent = label;
      d.classList.add('filled');
    } else {
      d.textContent = '날짜 선택';
      d.classList.remove('filled');
    }
  });
  // PC 요약 텍스트도 동기화
  var elC = document.getElementById('sb-flex-summary-c');
  if (elC) {
    if (_cvFlexMonth && _cvFlexDuration) {
      elC.innerHTML = '<strong>' + monthLabel + '의 ' + durLabel + '</strong>으로 검색합니다';
    } else if (_cvFlexMonth) {
      elC.innerHTML = '<strong>' + monthLabel + '</strong> 선택됨';
    } else if (_cvFlexDuration) {
      elC.innerHTML = '<strong>' + durLabel + '</strong> 선택됨 · 월을 선택해주세요';
    } else {
      elC.innerHTML = '';
    }
  }

  // 배지도 업데이트
  if (typeof updateSearchBadge === 'function') updateSearchBadge();
}

// 기간+월 조합으로 실제 날짜 계산
function cvCalcFlexDates() {
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var ym = _cvFlexMonth || { year: today.getFullYear(), month: today.getMonth() + 1 };
  // 해당 월의 첫날
  var firstOfMonth = new Date(ym.year, ym.month, 1);
  var dep, ret;
  var D = ['일', '월', '화', '수', '목', '금', '토'];
  if (_cvFlexDuration === 'weekend') {
    // 그 달의 첫 번째 금요일
    dep = new Date(firstOfMonth);
    while (dep.getDay() !== 5) dep.setDate(dep.getDate() + 1);
    ret = new Date(dep); ret.setDate(dep.getDate() + 2); // 2박 3일
  } else if (_cvFlexDuration === 'week') {
    // 그 달의 첫 번째 금요일부터 6박 7일
    dep = new Date(firstOfMonth);
    while (dep.getDay() !== 5) dep.setDate(dep.getDate() + 1);
    ret = new Date(dep); ret.setDate(dep.getDate() + 6);
  } else {
    // 한 달: 1일 ~ 말일
    dep = new Date(firstOfMonth);
    ret = new Date(ym.year, ym.month + 1, 0); // 말일
  }
  // 오늘보다 이전이면 오늘+3일 기준으로 조정
  if (dep < today) {
    dep = new Date(today); dep.setDate(today.getDate() + 3);
    if (_cvFlexDuration === 'weekend') {
      while (dep.getDay() !== 5 && dep.getDay() !== 6) dep.setDate(dep.getDate() + 1);
      ret = new Date(dep); ret.setDate(dep.getDate() + 2);
    } else if (_cvFlexDuration === 'week') {
      while (dep.getDay() !== 5) dep.setDate(dep.getDate() + 1);
      ret = new Date(dep); ret.setDate(dep.getDate() + 6);
    } else {
      ret = new Date(dep); ret.setDate(dep.getDate() + 29);
    }
  }
  function fmt(d) { return (d.getMonth() + 1) + '월 ' + d.getDate() + '일(' + D[d.getDay()] + ')'; }
  return { dep: dep, ret: ret, label: fmt(dep) + ' – ' + fmt(ret) };
}

function cvUpdateFlexDisplay() {
  cvInitFlexMonths();
  // 모바일 카드 active 상태 동기화
  var mobileList = document.getElementById('cv-flex-month-list');
  if (mobileList && _cvFlexMonth) {
    var hasActive = false;
    mobileList.querySelectorAll('.cv-flex-month-card').forEach(function (card) {
      var match = parseInt(card.dataset.month) === _cvFlexMonth.month &&
        parseInt(card.dataset.year) === _cvFlexMonth.year;
      card.classList.toggle('active', match);
      if (match) hasActive = true;
    });
    // 모바일 카드에 active가 없으면 (PC에서만 선택된 경우) 상태 초기화
    if (!hasActive) {
      _cvFlexMonth = null;
      _cvFlexDuration = null;
      document.querySelectorAll('.cv-flex-dur-btn').forEach(function (b) { b.classList.remove('active'); });
    }
  }
  // duration 버튼 active 복원
  if (_cvFlexDuration) {
    document.querySelectorAll('.cv-flex-dur-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.dur === _cvFlexDuration);
    });
  }
  cvUpdateFlexSummary();
}

function cvConfirmFlexibleDate() {
  var info = cvCalcFlexDates();
  window.selectedDates = [info.dep, info.ret];
  var monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  var ym = _cvFlexMonth;
  var durLabel = CV_FLEX_DUR_LABELS[_cvFlexDuration] || '';
  var txt = ym ? monthNames[ym.month] + '의 ' + durLabel : info.label;
  var el = document.getElementById('cvt-date-val'); if (el) el.textContent = txt;
  var src = document.getElementById('sb-date-display'); if (src) src.textContent = txt;
  switchCvTab('traveler');
}
