// India Politics Terminal - Main JS

'use strict';

// ============ STATE ============
const state = {
  currentScreen: 'dashboard',
  currentFilter: 'ALL',
  selectedPM: null,
  searchQuery: '',
};

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
});

function initLoading() {
  setTimeout(() => {
    const overlay = document.getElementById('loading-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      initTerminal();
    }, 500);
  }, 2200);
}

function initTerminal() {
  initClock();
  initTicker();
  renderSidebar();
  renderDashboard();
  initSearch();
  initKeyboard();
  
  // Start real-time API updates if available
  if (window.startRealTimeUpdates) {
    startRealTimeUpdates();
  }
}

// ============ CLOCK ============
function initClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);

  const timeStr = ist.toTimeString().slice(0, 8);
  const dateStr = ist.toDateString().slice(4);

  const el1 = document.getElementById('clock-ist');
  const el2 = document.getElementById('clock-date');
  if (el1) el1.textContent = timeStr;
  if (el2) el2.textContent = dateStr;
}

// ============ TICKER ============
function initTicker() {
  const ticker = document.getElementById('ticker-inner');
  if (!ticker) return;
  
  // Try to get real-time data first, fallback to static data
  if (window.indiaAPI) {
    window.indiaAPI.updateTickerWithLiveData().then(items => {
      if (items && items.length > 0) {
        const html = items.map(item => `<span>◆ ${item}</span><span class="ticker-sep">|</span>`).join('');
        ticker.innerHTML = html + html; // duplicate for seamless loop
      } else {
        // Fallback to static data
        const staticItems = INDIA_POLITICS_DATA.tickerItems;
        const html = staticItems.map(item => `<span>◆ ${item}</span><span class="ticker-sep">|</span>`).join('');
        ticker.innerHTML = html + html;
      }
    }).catch(() => {
      // Fallback to static data on error
      const staticItems = INDIA_POLITICS_DATA.tickerItems;
      const html = staticItems.map(item => `<span>◆ ${item}</span><span class="ticker-sep">|</span>`).join('');
      ticker.innerHTML = html + html;
    });
  } else {
    // Fallback to static data if API not loaded
    const items = INDIA_POLITICS_DATA.tickerItems;
    const html = items.map(item => `<span>◆ ${item}</span><span class="ticker-sep">|</span>`).join('');
    ticker.innerHTML = html + html;
  }
}

// ============ SIDEBAR ============
function renderSidebar() {
  const sections = [
    {
      title: "OVERVIEW",
      items: [
        { label: "Dashboard", key: "dashboard", badge: "LIVE" },
        { label: "Parliament 2024", key: "parliament", badge: null },
      ]
    },
    {
      title: "LEADERS",
      items: [
        { label: "Prime Ministers", key: "pm", badge: "18" },
        { label: "Presidents", key: "presidents", badge: "15" },
        { label: "Chief Ministers", key: "cm", badge: "29" },
      ]
    },
    {
      title: "ELECTIONS",
      items: [
        { label: "All Elections", key: "elections", badge: null },
        { label: "State Elections", key: "state-elections", badge: "NEW" },
        { label: "Seat History", key: "seathistory", badge: null },
        { label: "Vote Share", key: "voteshare", badge: null },
      ]
    },
    {
      title: "PARTIES",
      items: [
        { label: "Party Index", key: "parties", badge: null },
        { label: "INC", key: "party-INC", badge: null },
        { label: "BJP", key: "party-BJP", badge: null },
      ]
    },
    {
      title: "TIMELINE",
      items: [
        { label: "All Events", key: "events", badge: null },
        { label: "Conflicts", key: "events-CONFLICT", badge: null },
        { label: "Economic", key: "events-ECONOMIC", badge: null },
        { label: "Terrorism", key: "events-TERRORISM", badge: null },
        { label: "Political", key: "events-POLITICAL", badge: null },
      ]
    },
    {
      title: "ANALYSIS",
      items: [
        { label: "Political Funding X-Ray", key: "political-funding", badge: "NEW" },
        { label: "Electoral Bonds", key: "electoral-bonds", badge: null },
        { label: "Economic Correlation", key: "correlation", badge: "NEW" },
        { label: "Scandals", key: "scandals", badge: null },
        { label: "Amendments", key: "amendments", badge: null },
        { label: "Search", key: "search", badge: null },
      ]
    },
  ];

  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = '';

  sections.forEach(section => {
    const secDiv = document.createElement('div');
    secDiv.className = 'sidebar-section';
    secDiv.innerHTML = `<div class="sidebar-title">${section.title}</div>`;

    section.items.forEach(item => {
      const div = document.createElement('div');
      div.className = `sidebar-item ${state.currentScreen === item.key ? 'active' : ''}`;
      div.setAttribute('data-screen', item.key);
      const badgeHTML = item.badge ? `<span class="sidebar-badge">${item.badge}</span>` : '';
      div.innerHTML = `<span>${item.label}</span>${badgeHTML}`;
      div.addEventListener('click', () => navigateTo(item.key));
      secDiv.appendChild(div);
    });

    sidebar.appendChild(secDiv);
  });
}

// ============ NAVIGATION ============
function navigateTo(screenKey) {
  state.currentScreen = screenKey;

  // Update sidebar
  document.querySelectorAll('.sidebar-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-screen') === screenKey);
  });

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-screen') === screenKey);
  });

  // Render screen
  const content = document.getElementById('content-area');
  content.innerHTML = '';

  if (screenKey === 'dashboard') renderDashboard();
  else if (screenKey === 'pm') renderPMScreen();
  else if (screenKey === 'presidents') renderPresidents();
  else if (screenKey === 'cm') renderCMScreen();
  else if (screenKey === 'elections') renderElections();
  else if (screenKey === 'state-elections') renderStateElections();
  else if (screenKey === 'seathistory') renderSeatHistory();
  else if (screenKey === 'voteshare') renderVoteShare();
  else if (screenKey === 'parties') renderParties();
  else if (screenKey.startsWith('party-')) renderPartyDetail(screenKey.split('-')[1]);
  else if (screenKey === 'parliament') renderParliament();
  else if (screenKey === 'events') renderEvents('ALL');
  else if (screenKey.startsWith('events-')) renderEvents(screenKey.split('-')[1]);
  else if (screenKey === 'scandals') renderScandals();
  else if (screenKey === 'amendments') renderAmendments();
  else if (screenKey === 'electoral-bonds') renderElectoralBonds();
  else if (screenKey === 'search') renderSearch();
  else if (screenKey === 'correlation') renderCorrelation();
  else if (screenKey === 'political-funding') renderPoliticalFunding();
  else if (screenKey === 'sentiment') renderSentiment();
}

// ============ DASHBOARD ============
function renderDashboard() {
  const content = document.getElementById('content-area');

  const latestElection = INDIA_POLITICS_DATA.elections[INDIA_POLITICS_DATA.elections.length - 1];
  const currentPM = INDIA_POLITICS_DATA.primeMinisters[INDIA_POLITICS_DATA.primeMinisters.length - 1];
  const currentPresident = INDIA_POLITICS_DATA.presidents[INDIA_POLITICS_DATA.presidents.length - 1];

  content.innerHTML = `
    <div class="screen active" id="screen-dashboard" style="overflow-y:auto;">
      <!-- STATS ROW -->
      <div class="stat-grid" style="grid-template-columns:repeat(6,1fr);">
        <div class="stat-card">
          <div class="stat-label">CURRENT PM</div>
          <div class="stat-value" style="font-size:12px; color:var(--orange);">N. MODI</div>
          <div class="stat-sub">BJP · 3rd Term · Since 2014</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">PRESIDENT</div>
          <div class="stat-value" style="font-size:12px; color:var(--cyan);">D. MURMU</div>
          <div class="stat-sub">BJP · Since Jul 2022</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">LOK SABHA 2024</div>
          <div class="stat-value">240</div>
          <div class="stat-sub" style="color:var(--orange);">BJP (NDA: 293)</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">OPPOSITION</div>
          <div class="stat-value" style="color:var(--green);">234</div>
          <div class="stat-sub">INDIA Bloc (INC: 99)</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">YRS SINCE INDEP.</div>
          <div class="stat-value">${new Date().getFullYear() - 1947}</div>
          <div class="stat-sub">15 Aug 1947</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOTAL ELECTIONS</div>
          <div class="stat-value">${INDIA_POLITICS_DATA.elections.length}</div>
          <div class="stat-sub">1951 → 2024</div>
        </div>
      </div>

      <!-- REAL-TIME DATA ROW -->
      <div id="realtime-data-row" style="margin: 8px 0;">
        <div class="panel-header" style="margin-bottom: 4px;">
          <span class="panel-title">◆ LIVE ECONOMIC INDICATORS</span>
          <span class="panel-meta" id="realtime-last-update">Loading...</span>
        </div>
        <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);">
          <div class="stat-card economic-indicator" data-type="gdp">
            <div class="stat-label">GDP GROWTH</div>
            <div class="stat-value" style="color:var(--green);" id="gdp-value">Loading...</div>
            <div class="stat-sub">World Bank Data</div>
          </div>
          <div class="stat-card economic-indicator" data-type="inflation">
            <div class="stat-label">INFLATION</div>
            <div class="stat-value" style="color:var(--orange);" id="inflation-value">Loading...</div>
            <div class="stat-sub">Consumer Prices</div>
          </div>
          <div class="stat-card economic-indicator" data-type="population">
            <div class="stat-label">UNEMPLOYMENT</div>
            <div class="stat-value" style="color:var(--orange);" id="unemployment-value">Loading...</div>
            <div class="stat-sub">Labor Force</div>
          </div>
          <div class="stat-card economic-indicator" data-type="schemes">
            <div class="stat-label">GOVT SCHEMES</div>
            <div class="stat-value" style="color:var(--purple);" id="schemes-value">Loading...</div>
            <div class="stat-sub">Active Programs</div>
          </div>
        </div>
      </div>

      <!-- MAIN 3-COLUMN GRID -->
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; flex:1; gap:1px; min-height:0; overflow:hidden;">

        <!-- COL 1: Prime Ministers -->
        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">◆ PRIME MINISTERS OF INDIA</span>
            <span class="panel-meta">1947 - PRESENT · ${INDIA_POLITICS_DATA.primeMinisters.length} TOTAL</span>
          </div>
          <div class="panel-body full-scroll" style="max-height:320px;">
            <table class="bt-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>PTY</th>
                  <th>TERM</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                ${INDIA_POLITICS_DATA.primeMinisters.map((pm, i) => `
                  <tr onclick="navigateTo('pm')" class="${pm.id === 18 ? 'highlight' : ''}">
                    <td class="td-gray">${pm.id}</td>
                    <td class="td-name" style="max-width:130px;">${pm.name}</td>
                    <td><span class="tag tag-${pm.party} tag-${pm.party} tag-default" style="background:${getPartyColor(pm.party)};color:${getPartyTextColor(pm.party)}">${pm.party}</span></td>
                    <td class="td-cyan">${pm.tenure}</td>
                    <td class="rating-${pm.rating}" style="font-size:8px;">${pm.rating}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- COL 2: Recent Events + Parliament -->
        <div style="display:flex;flex-direction:column;gap:1px;">
          <!-- Parliament Snapshot -->
          <div class="panel" style="flex:0 0 auto;">
            <div class="panel-header">
              <span class="panel-title">◆ PARLIAMENT COMPOSITION 2024</span>
              <span class="panel-meta">LOK SABHA · 543 SEATS</span>
            </div>
            <div class="panel-body" style="padding:6px;">
              ${renderMiniParliamentBars()}
            </div>
          </div>

          <!-- Elections quick view -->
          <div class="panel" style="flex:1; min-height:0;">
            <div class="panel-header">
              <span class="panel-title">◆ ELECTION HISTORY</span>
              <span class="panel-meta">1951-2024</span>
            </div>
            <div class="panel-body full-scroll">
              <table class="bt-table">
                <thead>
                  <tr><th>YEAR</th><th>WINNER</th><th>SEATS</th><th>VOTE%</th><th>TURNOUT</th></tr>
                </thead>
                <tbody>
                  ${INDIA_POLITICS_DATA.elections.map(e => `
                    <tr class="${e.year === 2024 ? 'highlight' : ''}">
                      <td class="td-yellow">${e.year}</td>
                      <td><span style="background:${getPartyColor(e.winner)};color:${getPartyTextColor(e.winner)};padding:1px 4px;font-size:8px;font-weight:700;">${e.winner}</span></td>
                      <td class="td-orange">${e.seats}</td>
                      <td class="td-cyan">${e.voteShare}%</td>
                      <td class="td-gray">${e.turnout}%</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- COL 3: Timeline / Recent Events -->
        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">◆ RECENT EVENTS TIMELINE</span>
            <span class="panel-meta">SORTED DESC</span>
          </div>
          <div class="panel-body full-scroll" style="max-height:350px;">
            ${INDIA_POLITICS_DATA.events.slice().reverse().slice(0, 25).map(e => `
              <div class="timeline-item" onclick="navigateTo('events')">
                <div class="timeline-date">${e.date.slice(0,7)}</div>
                <span class="timeline-badge badge-${e.category}">${e.category.slice(0,6)}</span>
                <div class="timeline-content">
                  <div class="timeline-title">${e.title}</div>
                  <div class="timeline-desc">${e.description.slice(0,80)}...</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- BOTTOM ROW -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1px; flex-shrink:0;">
        <!-- Parties -->
        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">◆ MAJOR POLITICAL PARTIES</span>
            <span class="panel-meta">CURRENT SEAT STRENGTH</span>
          </div>
          <div class="panel-body">
            ${INDIA_POLITICS_DATA.parties.slice(0,8).map(p => `
              <div class="bar-row">
                <div class="bar-label">${p.code} - ${p.name.slice(0,20)}</div>
                <div class="bar-track">
                  <div class="bar-fill" style="width:${(p.seats2024/303)*100}%;background:${p.color};opacity:0.8;"></div>
                </div>
                <div class="bar-value" style="color:${p.color};">${p.seats2024}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Scandals quick view -->
        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">◆ MAJOR POLITICAL SCANDALS</span>
            <span class="panel-meta">RANKED BY SEVERITY</span>
          </div>
          <div class="panel-body full-scroll">
            <table class="bt-table">
              <thead>
                <tr><th>YEAR</th><th>SCANDAL</th><th>AMOUNT</th><th>SEVERITY</th></tr>
              </thead>
              <tbody>
                ${INDIA_POLITICS_DATA.scandals.filter(s => s.severity === 'CRITICAL').concat(INDIA_POLITICS_DATA.scandals.filter(s => s.severity === 'HIGH')).slice(0,8).map(s => `
                  <tr onclick="navigateTo('scandals')">
                    <td class="td-yellow">${s.year}</td>
                    <td class="td-name" style="max-width:120px;">${s.name}</td>
                    <td class="td-cyan" style="font-size:9px;">${s.amount}</td>
                    <td class="${s.severity === 'CRITICAL' ? 'td-red' : 'td-yellow'}">${s.severity}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Load real-time data after rendering dashboard
  loadRealTimeDashboardData();
}

function loadRealTimeDashboardData() {
  if (!window.indiaAPI) return;
  
  window.indiaAPI.getDashboardData().then(data => {
    if (!data) return;
    
    // Update economic indicators
    if (data.economic) {
      const gdpEl = document.getElementById('gdp-value');
      const inflationEl = document.getElementById('inflation-value');
      const unemploymentEl = document.getElementById('unemployment-value');
      
      if (gdpEl && data.economic.gdpGrowth) {
        const gdp = data.economic.gdpGrowth;
        // Format GDP growth properly
        if (gdp > 0) {
          gdpEl.textContent = `+${gdp.toFixed(2)}%`;
        } else {
          gdpEl.textContent = `${gdp.toFixed(2)}%`;
        }
        // Update subtext to show year
        const gdpSub = gdpEl.parentElement.querySelector('.stat-sub');
        if (gdpSub) {
          gdpSub.textContent = `${data.economic.dataYear || '2026'} · ${data.economic.source}`;
        }
      } else if (gdpEl) {
        gdpEl.textContent = 'Loading...';
      }
      
      if (inflationEl && data.economic.inflation) {
        const inflation = data.economic.inflation;
        // Format inflation properly
        if (inflation > 0) {
          inflationEl.textContent = `${inflation.toFixed(2)}%`;
        } else {
          inflationEl.textContent = `${inflation.toFixed(2)}%`;
        }
        // Update subtext to show year
        const inflSub = inflationEl.parentElement.querySelector('.stat-sub');
        if (inflSub) {
          inflSub.textContent = `${data.economic.dataYear || '2026'} · ${data.economic.source}`;
        }
      } else if (inflationEl) {
        inflationEl.textContent = 'Loading...';
      }
      
      if (unemploymentEl && data.economic.unemployment) {
        const unemployment = data.economic.unemployment;
        // Format unemployment properly
        if (unemployment > 0) {
          unemploymentEl.textContent = `${unemployment.toFixed(2)}%`;
        } else {
          unemploymentEl.textContent = `${unemployment.toFixed(2)}%`;
        }
        // Update subtext to show year
        const unempSub = unemploymentEl.parentElement.querySelector('.stat-sub');
        if (unempSub) {
          unempSub.textContent = `${data.economic.dataYear || '2026'} · ${data.economic.source}`;
        }
      } else if (unemploymentEl) {
        unemploymentEl.textContent = 'Loading...';
      }
    }
    
    // Update government schemes count and budget
    if (data.govSchemes) {
      const schemesEl = document.getElementById('schemes-value');
      if (schemesEl) {
        const verified = data.govSchemes.verified === true;
        const count = data.govSchemes.totalSchemes;
        const budget = data.govSchemes.totalBudgetInCrores;

        if (verified && typeof count === 'number' && typeof budget === 'number') {
          schemesEl.innerHTML = `${count}<br><span style="font-size:8px;color:var(--gray-2);">₹${budget.toLocaleString('en-IN')} Cr</span>`;
        } else {
          schemesEl.textContent = 'N/A';
        }

        const card = schemesEl.closest('.stat-card');
        const sub = card ? card.querySelector('.stat-sub') : null;
        if (sub) {
          const source = data.govSchemes.source || 'Unknown source';
          sub.textContent = verified ? `Verified · ${source}` : `Unverified · ${source}`;
        }
      }
    }
    
    // Update last update time
    const updateEl = document.getElementById('realtime-last-update');
    if (updateEl && data.lastUpdated) {
      const updateTime = new Date(data.lastUpdated).toLocaleTimeString('en-IN');
      updateEl.textContent = `Updated: ${updateTime}`;
    }
  }).catch(err => {
    console.log('Real-time data loading failed:', err);
    // Keep "Loading..." text or update with error
  });
}

function renderMiniParliamentBars() {
  const data = INDIA_POLITICS_DATA.parliament2024.loksabha;
  const total = 543;
  return data.map(p => `
    <div class="bar-row" style="margin-bottom:3px;">
      <div class="bar-label" style="min-width:80px;font-size:9px;">${p.party}</div>
      <div class="bar-track" style="height:12px;">
        <div class="bar-fill" style="width:${(p.seats/total)*100}%;background:${p.color};"></div>
      </div>
      <div class="bar-value" style="color:${p.color};">${p.seats}</div>
    </div>
  `).join('');
}

// ============ PM SCREEN ============
function renderPMScreen() {
  const content = document.getElementById('content-area');
  const pms = INDIA_POLITICS_DATA.primeMinisters;

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="grid-template-columns:repeat(5,1fr);flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL PMs</div>
          <div class="stat-value">${pms.length}</div>
          <div class="stat-sub">1947 → Present</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">LONGEST TENURE</div>
          <div class="stat-value" style="font-size:12px;">NEHRU</div>
          <div class="stat-sub">16 Years 9 Months</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">SHORTEST TENURE</div>
          <div class="stat-value" style="font-size:12px;">NANDA</div>
          <div class="stat-sub">13 Days (x2)</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">BJP PMs</div>
          <div class="stat-value" style="color:var(--orange);">3</div>
          <div class="stat-sub">Vajpayee + Modi</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">INC PMs</div>
          <div class="stat-value" style="color:var(--green);">8</div>
          <div class="stat-sub">Nehru dynasty dominance</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:350px 1fr;flex:1;min-height:0;gap:1px;overflow:hidden;">
        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">◆ ALL PRIME MINISTERS</span>
          </div>
          <div class="panel-body full-scroll">
            <table class="bt-table">
              <thead>
                <tr><th>#</th><th>NAME</th><th>PARTY</th><th>TENURE</th><th>RATING</th></tr>
              </thead>
              <tbody>
                ${pms.map((pm, i) => `
                  <tr id="pm-row-${pm.id}" onclick="selectPM(${pm.id})" class="${pm.id === 18 ? 'highlight' : ''}">
                    <td class="td-gray">${pm.id}</td>
                    <td class="td-name">${pm.name}</td>
                    <td><span style="background:${getPartyColor(pm.party)};color:${getPartyTextColor(pm.party)};padding:1px 4px;font-size:8px;font-weight:700;">${pm.party}</span></td>
                    <td class="td-cyan" style="font-size:9px;">${pm.tenure}</td>
                    <td class="rating-${pm.rating}" style="font-size:9px;">${pm.rating}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        <div class="panel" id="pm-detail-panel">
          <div class="panel-header">
            <span class="panel-title">◆ PM DETAILS</span>
            <span class="panel-meta">CLICK A PM TO VIEW</span>
          </div>
          <div class="panel-body" id="pm-detail-body">
            <div style="padding:20px;color:var(--gray-3);text-align:center;margin-top:40px;">
              <div style="color:var(--orange);font-size:24px;margin-bottom:8px;">◆</div>
              SELECT A PRIME MINISTER FROM THE LIST<br>TO VIEW DETAILED INFORMATION
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Auto-select current PM
  selectPM(18);
}

function selectPM(id) {
  const pm = INDIA_POLITICS_DATA.primeMinisters.find(p => p.id === id);
  if (!pm) return;

  // Highlight row
  document.querySelectorAll('[id^="pm-row-"]').forEach(r => r.style.background = '');
  const row = document.getElementById(`pm-row-${id}`);
  if (row) row.style.background = '#1a0800';

  const body = document.getElementById('pm-detail-body');
  if (!body) return;

  const tenure_years = pm.tenure;
  const coalition_name = pm.coalition;

  body.innerHTML = `
    <div style="padding:12px;">
      <div style="color:var(--orange);font-size:20px;font-weight:700;letter-spacing:2px;margin-bottom:4px;border-bottom:1px solid var(--orange);padding-bottom:6px;">${pm.name.toUpperCase()}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
        <div>
          <div class="stat-label">PARTY</div>
          <div style="margin-top:4px;"><span style="background:${getPartyColor(pm.party)};color:${getPartyTextColor(pm.party)};padding:3px 8px;font-weight:700;font-size:11px;">${pm.party}</span></div>
        </div>
        <div>
          <div class="stat-label">COALITION</div>
          <div class="stat-sub" style="color:var(--white);margin-top:4px;">${coalition_name}</div>
        </div>
        <div>
          <div class="stat-label">TENURE</div>
          <div class="stat-sub" style="color:var(--yellow);margin-top:4px;">${pm.tenure}</div>
        </div>
        <div>
          <div class="stat-label">RATING</div>
          <div class="rating-${pm.rating}" style="margin-top:4px;font-weight:700;">${pm.rating}</div>
        </div>
        <div>
          <div class="stat-label">FROM</div>
          <div class="stat-sub" style="color:var(--green);margin-top:4px;">${pm.from}</div>
        </div>
        <div>
          <div class="stat-label">TO</div>
          <div class="stat-sub" style="color:${pm.to ? 'var(--red)' : 'var(--green)'};margin-top:4px;">${pm.to || 'INCUMBENT'}</div>
        </div>
        <div>
          <div class="stat-label">BORN</div>
          <div class="stat-sub" style="margin-top:4px;">${pm.born}</div>
        </div>
        <div>
          <div class="stat-label">DIED</div>
          <div class="stat-sub" style="color:var(--gray-2);margin-top:4px;">${pm.died || 'ALIVE'}</div>
        </div>
        <div>
          <div class="stat-label">CONSTITUENCY</div>
          <div class="stat-sub" style="color:var(--cyan);margin-top:4px;">${pm.constituency}</div>
        </div>
      </div>
      <div style="border-top:1px solid var(--border);padding-top:10px;">
        <div class="stat-label" style="margin-bottom:6px;">NOTABLE CONTRIBUTIONS & EVENTS</div>
        <div style="color:var(--gray-1);font-family:var(--font-sans);font-size:11px;line-height:1.6;background:var(--bg-panel-alt);padding:10px;border:1px solid var(--border);">${pm.notable}</div>
      </div>
    </div>
  `;
}

// ============ PRESIDENTS ============
function renderPresidents() {
  const content = document.getElementById('content-area');
  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL PRESIDENTS</div>
          <div class="stat-value">${INDIA_POLITICS_DATA.presidents.length}</div>
          <div class="stat-sub">1950 → Present</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">CURRENT PRESIDENT</div>
          <div class="stat-value" style="font-size:11px;">DROUPADI MURMU</div>
          <div class="stat-sub" style="color:var(--orange);">Since July 25, 2022</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">FIRST PRESIDENT</div>
          <div class="stat-value" style="font-size:11px;">RAJENDRA PRASAD</div>
          <div class="stat-sub">1950 - 1962</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">FIRST TRIBAL PRES.</div>
          <div class="stat-value" style="font-size:11px;">DROUPADI MURMU</div>
          <div class="stat-sub" style="color:var(--green);">HISTORIC MILESTONE</div>
        </div>
      </div>
      <div class="panel" style="flex:1;margin:1px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ PRESIDENTS OF INDIA</span>
          <span class="panel-meta">CONSTITUTIONAL HEAD OF STATE</span>
        </div>
        <div class="panel-body full-scroll">
          <table class="bt-table">
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>PARTY</th>
                <th>FROM</th>
                <th>TO</th>
                <th>TENURE</th>
              </tr>
            </thead>
            <tbody>
              ${INDIA_POLITICS_DATA.presidents.map((p, i) => {
                const from = new Date(p.from);
                const to = p.to ? new Date(p.to) : new Date();
                const years = Math.round((to - from) / (365.25 * 24 * 3600 * 1000) * 10) / 10;
                return `
                  <tr class="${!p.to ? 'highlight' : ''}">
                    <td class="td-gray">${i + 1}</td>
                    <td class="td-name">${p.name}</td>
                    <td><span style="background:${getPartyColor(p.party)};color:${getPartyTextColor(p.party)};padding:1px 4px;font-size:8px;font-weight:700;">${p.party}</span></td>
                    <td class="td-green">${p.from}</td>
                    <td class="${!p.to ? 'td-orange' : 'td-red'}">${p.to || 'INCUMBENT'}</td>
                    <td class="td-cyan">${years}y</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ============ CHIEF MINISTERS ============
function renderCMScreen() {
  const content = document.getElementById('content-area');
  const bjpCount = INDIA_POLITICS_DATA.chiefMinisters.filter(c => c.party === 'BJP').length;
  const incCount = INDIA_POLITICS_DATA.chiefMinisters.filter(c => c.party === 'INC').length;

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="grid-template-columns:repeat(5,1fr);flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL STATES/UTs</div>
          <div class="stat-value">${INDIA_POLITICS_DATA.chiefMinisters.length}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">BJP RULED</div>
          <div class="stat-value" style="color:var(--orange);">${bjpCount}</div>
          <div class="stat-sub">States + UTs</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">INC RULED</div>
          <div class="stat-value" style="color:var(--green);">${incCount}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">OTHERS</div>
          <div class="stat-value" style="color:var(--cyan);">${INDIA_POLITICS_DATA.chiefMinisters.length - bjpCount - incCount}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">BJP DOMINANCE</div>
          <div class="stat-value" style="color:var(--orange);">${Math.round(bjpCount/INDIA_POLITICS_DATA.chiefMinisters.length*100)}%</div>
        </div>
      </div>
      <div class="panel" style="flex:1;margin:1px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ CURRENT CHIEF MINISTERS OF ALL STATES</span>
          <span class="panel-meta">AS OF 2025</span>
        </div>
        <div class="panel-body full-scroll">
          <table class="bt-table">
            <thead>
              <tr><th>STATE</th><th>CHIEF MINISTER</th><th>PARTY</th><th>SINCE</th></tr>
            </thead>
            <tbody>
              ${INDIA_POLITICS_DATA.chiefMinisters.sort((a,b) => a.state.localeCompare(b.state)).map(cm => `
                <tr>
                  <td class="td-name">${cm.state}</td>
                  <td class="td-white">${cm.cm}</td>
                  <td><span style="background:${getPartyColor(cm.party)};color:${getPartyTextColor(cm.party)};padding:1px 4px;font-size:8px;font-weight:700;">${cm.party}</span></td>
                  <td class="td-yellow">${cm.since}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ============ ELECTIONS ============
function renderElections() {
  const content = document.getElementById('content-area');
  const elections = INDIA_POLITICS_DATA.elections;

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="grid-template-columns:repeat(5,1fr);flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL ELECTIONS</div>
          <div class="stat-value">${elections.length}</div>
          <div class="stat-sub">1951 → 2024</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">INC VICTORIES</div>
          <div class="stat-value" style="color:var(--green);">${elections.filter(e => e.winner === 'INC').length}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">BJP VICTORIES</div>
          <div class="stat-value" style="color:var(--orange);">${elections.filter(e => e.winner === 'BJP').length}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">HIGHEST TURNOUT</div>
          <div class="stat-value">67.4%</div>
          <div class="stat-sub">2019 Lok Sabha</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">HIGHEST SEATS (INC)</div>
          <div class="stat-value" style="color:var(--green);">404</div>
          <div class="stat-sub">1984 Sympathy Wave</div>
        </div>
      </div>
      <div class="panel" style="flex:1;margin:1px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ ALL LOK SABHA ELECTIONS</span>
          <span class="panel-meta">1951 - 2024 · COMPLETE RESULTS</span>
        </div>
        <div class="panel-body full-scroll">
          <table class="bt-table">
            <thead>
              <tr>
                <th>YEAR</th>
                <th>WINNER</th>
                <th>SEATS</th>
                <th>TOTAL</th>
                <th>VOTE %</th>
                <th>RUNNER UP</th>
                <th>PM FORMED</th>
                <th>TURNOUT</th>
                <th>NOTES</th>
              </tr>
            </thead>
            <tbody>
              ${elections.map((e, i) => `
                <tr class="${i === elections.length - 1 ? 'highlight' : ''}">
                  <td class="td-yellow" style="font-weight:700;">${e.year}</td>
                  <td><span style="background:${getPartyColor(e.winner)};color:${getPartyTextColor(e.winner)};padding:1px 5px;font-size:9px;font-weight:700;">${e.winner}</span></td>
                  <td class="td-orange" style="font-weight:700;">${e.seats}</td>
                  <td class="td-gray">${e.total}</td>
                  <td class="td-cyan">${e.voteShare}%</td>
                  <td class="td-gray" style="font-size:9px;">${e.runnerUp}</td>
                  <td class="td-white" style="font-size:9px;">${e.pm}</td>
                  <td class="td-green">${e.turnout}%</td>
                  <td class="td-gray" style="font-size:9px;max-width:200px;">${e.notes}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ============ STATE ELECTIONS ============
function renderStateElections() {
  const content = document.getElementById('content-area');
  const stateElections = INDIA_POLITICS_DATA.stateElections;

  // Sort by election date
  const sortedElections = stateElections.sort((a, b) => new Date(a.electionDate) - new Date(b.electionDate));

  // Group by year
  const electionsByYear = {};
  sortedElections.forEach(election => {
    const year = election.electionDate.split('-')[0];
    if (!electionsByYear[year]) electionsByYear[year] = [];
    electionsByYear[year].push(election);
  });

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL STATES</div>
          <div class="stat-value">${stateElections.length}</div>
          <div class="stat-sub">2025-2029</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">UPCOMING</div>
          <div class="stat-value" style="color:var(--orange);">${sortedElections.filter(e => calculateDaysUntil(e.electionDate) >= 0).length}</div>
          <div class="stat-sub">This Year</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOTAL SEATS</div>
          <div class="stat-value">${stateElections.reduce((sum, e) => sum + e.assemblySeats, 0)}</div>
          <div class="stat-sub">At Stake</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">REGIONS</div>
          <div class="stat-value">${[...new Set(stateElections.map(e => e.region))].length}</div>
          <div class="stat-sub">Covered</div>
        </div>
      </div>

      <!-- LIVE COUNTDOWN TICKER -->
      <div style="background:var(--bg-secondary);border:1px solid var(--border);padding:12px;margin:8px 0;">
        <div style="color:var(--orange);font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:8px;">◆ LIVE ELECTION COUNTDOWN</div>
        <div id="countdown-ticker" style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;">
          ${sortedElections.slice(0, 8).map(election => {
            const days = calculateDaysUntil(election.electionDate);
            const countdown = formatCountdown(days);
            const statusColor = days < 0 ? 'var(--gray-2)' : days <= 7 ? 'var(--red)' : days <= 30 ? 'var(--yellow)' : 'var(--green)';
            return `
              <div style="background:var(--bg-primary);border:1px solid var(--border);padding:8px;min-width:180px;">
                <div style="font-weight:700;color:var(--cyan);font-size:11px;">${election.state}</div>
                <div style="color:${statusColor};font-size:14px;font-weight:700;margin:4px 0;">${countdown}</div>
                <div style="color:var(--gray-3);font-size:9px;">${election.electionDate} · ${election.assemblySeats} seats</div>
                <div style="color:${getPartyColor(election.rulingParty)};font-size:9px;margin-top:2px;">${election.rulingParty}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- ELECTION CALENDAR BY YEAR -->
      <div style="flex:1;overflow-y:auto;">
        ${Object.keys(electionsByYear).sort().map(year => `
          <div style="margin-bottom:16px;">
            <div class="panel-header" style="margin-bottom:4px;">
              <span class="panel-title">◆ ${year} STATE ELECTIONS</span>
              <span class="panel-meta">${electionsByYear[year].length} STATES · ${electionsByYear[year].reduce((sum, e) => sum + e.assemblySeats, 0)} SEATS</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:8px;">
              ${electionsByYear[year].map(election => {
                const days = calculateDaysUntil(election.electionDate);
                const countdown = formatCountdown(days);
                const statusColor = days < 0 ? 'var(--gray-2)' : days <= 7 ? 'var(--red)' : days <= 30 ? 'var(--yellow)' : 'var(--green)';
                const phaseIcon = election.phase === 'Single' ? '●' : '●●';

                return `
                  <div class="panel" style="margin:0;">
                    <div class="panel-header" style="padding:8px;">
                      <span style="color:var(--cyan);font-weight:700;">${election.state}</span>
                      <span style="color:${statusColor};font-size:11px;font-weight:700;">${countdown}</span>
                    </div>
                    <div class="panel-body" style="padding:8px;">
                      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                        <span style="color:var(--gray-3);font-size:9px;">DATE:</span>
                        <span style="color:var(--yellow);font-size:9px;">${election.electionDate}</span>
                      </div>
                      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                        <span style="color:var(--gray-3);font-size:9px;">PHASE:</span>
                        <span style="color:var(--gray-1);font-size:9px;">${phaseIcon} ${election.phase}</span>
                      </div>
                      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                        <span style="color:var(--gray-3);font-size:9px;">SEATS:</span>
                        <span style="color:var(--orange);font-size:9px;">${election.assemblySeats}</span>
                      </div>
                      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                        <span style="color:var(--gray-3);font-size:9px;">REGION:</span>
                        <span style="color:var(--green);font-size:9px;">${election.region}</span>
                      </div>
                      ${(() => {
                        const pollAggregate = aggregatePolls(election.polls);
                        const pollStatus = getPollStatus(election);
                        let pollHtml = '';
                        
                        if (pollAggregate) {
                          const projectedSeats = projectSeats(pollAggregate, election.assemblySeats);
                          const leadingParty = Object.keys(pollAggregate).reduce((a, b) => pollAggregate[a] > pollAggregate[b] ? a : b);
                          
                          pollHtml += `
                            <div style="border-top:1px solid var(--border);padding-top:6px;margin-top:6px;">
                              <div style="color:var(--cyan);font-size:8px;font-weight:700;margin-bottom:4px;">POLL AGGREGATE (${pollStatus ? pollStatus.daysSincePoll + ' days ago' : ''})</div>
                              <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:4px;">
                                ${Object.keys(pollAggregate).sort((a,b) => pollAggregate[b] - pollAggregate[a]).map(party => `
                                  <span style="background:${getPartyColor(party)};color:${getPartyTextColor(party)};padding:1px 4px;font-size:7px;font-weight:700;">${party.toUpperCase()} ${pollAggregate[party]}%</span>
                                `).join('')}
                              </div>
                              ${projectedSeats ? `
                                <div style="color:var(--gray-3);font-size:7px;margin-bottom:2px;">SEAT PROJECTION:</div>
                                <div style="display:flex;flex-wrap:wrap;gap:2px;">
                                  ${Object.keys(projectedSeats).sort((a,b) => projectedSeats[b] - projectedSeats[a]).slice(0,3).map(party => 
                                    projectedSeats[party] > 0 ? `<span style="background:${getPartyColor(party)};color:${getPartyTextColor(party)};padding:1px 3px;font-size:7px;font-weight:700;">${party.toUpperCase()} ${projectedSeats[party]}</span>` : ''
                                  ).join('')}
                                </div>
                              ` : ''}
                            </div>
                          `;
                        }
                        
                        return pollHtml;
                      })()}
                      <div style="border-top:1px solid var(--border);padding-top:6px;margin-top:6px;">
                        <div style="display:flex;align-items:center;gap:6px;">
                          <span style="background:${getPartyColor(election.rulingParty)};color:${getPartyTextColor(election.rulingParty)};padding:1px 6px;font-size:8px;font-weight:700;">${election.rulingParty}</span>
                          <span style="color:var(--gray-3);font-size:8px;">INCUMBENT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Start countdown updates
  startCountdownUpdates();
}

function startCountdownUpdates() {
  // Update countdowns every minute
  setInterval(() => {
    const ticker = document.getElementById('countdown-ticker');
    if (!ticker) return;

    const stateElections = INDIA_POLITICS_DATA.stateElections.sort((a, b) => new Date(a.electionDate) - new Date(b.electionDate));

    ticker.innerHTML = stateElections.slice(0, 8).map(election => {
      const days = calculateDaysUntil(election.electionDate);
      const countdown = formatCountdown(days);
      const statusColor = days < 0 ? 'var(--gray-2)' : days <= 7 ? 'var(--red)' : days <= 30 ? 'var(--yellow)' : 'var(--green)';
      return `
        <div style="background:var(--bg-primary);border:1px solid var(--border);padding:8px;min-width:180px;">
          <div style="font-weight:700;color:var(--cyan);font-size:11px;">${election.state}</div>
          <div style="color:${statusColor};font-size:14px;font-weight:700;margin:4px 0;">${countdown}</div>
          <div style="color:var(--gray-3);font-size:9px;">${election.electionDate} · ${election.assemblySeats} seats</div>
          <div style="color:${getPartyColor(election.rulingParty)};font-size:9px;margin-top:2px;">${election.rulingParty}</div>
        </div>
      `;
    }).join('');
  }, 60000); // Update every minute
}

// ============ SEAT HISTORY ============
function renderSeatHistory() {
  const content = document.getElementById('content-area');
  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="panel" style="flex:1;margin:4px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ INC vs BJP LOK SABHA SEAT HISTORY</span>
          <span class="panel-meta">1951 - 2024</span>
        </div>
        <div class="panel-body" style="padding:16px;">
          <canvas id="seat-history-canvas" height="300"></canvas>
          <div style="display:flex;gap:20px;justify-content:center;margin-top:8px;">
            <div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--green);">
              <div style="width:30px;height:3px;background:var(--green);"></div> INC
            </div>
            <div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--orange);">
              <div style="width:30px;height:3px;background:var(--orange);"></div> BJP
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  drawSeatHistoryChart();
}

function drawSeatHistoryChart() {
  const canvas = document.getElementById('seat-history-canvas');
  if (!canvas) return;

  const parent = canvas.parentElement;
  canvas.width = parent.clientWidth - 32;
  canvas.height = 300;

  const ctx = canvas.getContext('2d');
  const data = INDIA_POLITICS_DATA.seatHistory;
  const W = canvas.width, H = canvas.height;
  const PAD = { top: 20, right: 30, bottom: 50, left: 50 };

  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);

  // Grid lines
  ctx.strokeStyle = '#222';
  ctx.lineWidth = 1;
  for (let y = 0; y <= 5; y++) {
    const yVal = y * 80;
    const yPos = PAD.top + chartH - (yVal / 420 * chartH);
    ctx.beginPath();
    ctx.moveTo(PAD.left, yPos);
    ctx.lineTo(PAD.left + chartW, yPos);
    ctx.stroke();

    ctx.fillStyle = '#444';
    ctx.font = '9px IBM Plex Mono';
    ctx.textAlign = 'right';
    ctx.fillText(yVal, PAD.left - 4, yPos + 3);
  }

  const drawLine = (dataset, color) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.beginPath();

    dataset.forEach((val, i) => {
      const x = PAD.left + (i / (data.years.length - 1)) * chartW;
      const y = PAD.top + chartH - (val / 420 * chartH);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Dots
    dataset.forEach((val, i) => {
      const x = PAD.left + (i / (data.years.length - 1)) * chartW;
      const y = PAD.top + chartH - (val / 420 * chartH);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Value label
      ctx.fillStyle = color;
      ctx.font = '8px IBM Plex Mono';
      ctx.textAlign = 'center';
      ctx.fillText(val, x, y - 8);
    });
  };

  drawLine(data.INC, '#00cc44');
  drawLine(data.BJP, '#ff6600');

  // Year labels
  data.years.forEach((year, i) => {
    const x = PAD.left + (i / (data.years.length - 1)) * chartW;
    ctx.fillStyle = '#ffcc00';
    ctx.font = '9px IBM Plex Mono';
    ctx.textAlign = 'center';
    ctx.fillText(year, x, H - 10);
  });

  // Axes
  ctx.strokeStyle = '#444';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(PAD.left, PAD.top);
  ctx.lineTo(PAD.left, PAD.top + chartH);
  ctx.lineTo(PAD.left + chartW, PAD.top + chartH);
  ctx.stroke();

  // Majority line
  const majY = PAD.top + chartH - (272 / 420 * chartH);
  ctx.strokeStyle = '#ffffff33';
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(PAD.left, majY);
  ctx.lineTo(PAD.left + chartW, majY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#ffffff55';
  ctx.font = '9px IBM Plex Mono';
  ctx.textAlign = 'left';
  ctx.fillText('MAJORITY (272)', PAD.left + 4, majY - 3);
}

// ============ VOTE SHARE ============
function renderVoteShare() {
  const content = document.getElementById('content-area');
  const elections = INDIA_POLITICS_DATA.elections;

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="panel" style="flex:1;margin:4px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ VOTER TURNOUT & VOTE SHARE ANALYSIS</span>
          <span class="panel-meta">1951 - 2024</span>
        </div>
        <div class="panel-body full-scroll">
          <div style="padding:8px;">
            <div style="color:var(--orange);font-size:10px;margin-bottom:8px;letter-spacing:1px;">WINNER VOTE SHARE BY YEAR</div>
            ${elections.map(e => `
              <div class="bar-row">
                <div class="bar-label">${e.year} - ${e.winner}</div>
                <div class="bar-track">
                  <div class="bar-fill" style="width:${e.voteShare}%;background:${getPartyColor(e.winner)};"></div>
                </div>
                <div class="bar-value">${e.voteShare}%</div>
              </div>
            `).join('')}
          </div>
          <div style="padding:8px;margin-top:8px;border-top:1px solid var(--border);">
            <div style="color:var(--cyan);font-size:10px;margin-bottom:8px;letter-spacing:1px;">VOTER TURNOUT BY YEAR</div>
            ${elections.map(e => `
              <div class="bar-row">
                <div class="bar-label">${e.year}</div>
                <div class="bar-track">
                  <div class="bar-fill" style="width:${e.turnout}%;background:var(--cyan);opacity:0.7;"></div>
                </div>
                <div class="bar-value" style="color:var(--cyan);">${e.turnout}%</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============ PARTIES ============
function renderParties() {
  const content = document.getElementById('content-area');
  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="panel" style="flex:1;margin:4px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ POLITICAL PARTY INDEX</span>
          <span class="panel-meta">CURRENT STRENGTH & HISTORY</span>
        </div>
        <div class="panel-body full-scroll">
          <table class="bt-table">
            <thead>
              <tr>
                <th>CODE</th>
                <th>PARTY NAME</th>
                <th>FOUNDED</th>
                <th>IDEOLOGY</th>
                <th>PRESIDENT</th>
                <th>2024</th>
                <th>2019</th>
                <th>2014</th>
                <th>STRONGHOLD</th>
              </tr>
            </thead>
            <tbody>
              ${INDIA_POLITICS_DATA.parties.map(p => `
                <tr onclick="navigateTo('party-${p.code}')">
                  <td><span style="background:${p.color};color:${isLightColor(p.color)?'#000':'#fff'};padding:2px 6px;font-weight:700;font-size:9px;">${p.code}</span></td>
                  <td class="td-name">${p.name}</td>
                  <td class="td-yellow">${p.founded}</td>
                  <td class="td-gray" style="font-size:9px;">${p.ideology}</td>
                  <td class="td-cyan" style="font-size:9px;">${p.president}</td>
                  <td style="color:${p.color};font-weight:700;">${p.seats2024}</td>
                  <td class="td-gray">${p.seats2019}</td>
                  <td class="td-gray">${p.seats2014}</td>
                  <td class="td-gray" style="font-size:9px;">${p.stronghold}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderPartyDetail(code) {
  const party = INDIA_POLITICS_DATA.parties.find(p => p.code === code);
  if (!party) { renderParties(); return; }

  const content = document.getElementById('content-area');
  content.innerHTML = `
    <div class="screen active" style="overflow-y:auto;">
      <div style="padding:12px;border-bottom:2px solid ${party.color};">
        <div style="font-size:22px;font-weight:700;color:${party.color};letter-spacing:3px;">${party.name.toUpperCase()}</div>
        <div style="color:var(--gray-2);font-size:11px;margin-top:4px;">${party.ideology} · Founded ${party.founded}</div>
      </div>
      <div class="stat-grid" style="grid-template-columns:repeat(5,1fr);">
        <div class="stat-card">
          <div class="stat-label">2024 SEATS</div>
          <div class="stat-value" style="color:${party.color};">${party.seats2024}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">2019 SEATS</div>
          <div class="stat-value">${party.seats2019}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">2014 SEATS</div>
          <div class="stat-value">${party.seats2014}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">PRESIDENT</div>
          <div class="stat-value" style="font-size:11px;">${party.president}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">STRONGHOLD</div>
          <div class="stat-sub" style="color:var(--cyan);font-size:10px;margin-top:4px;">${party.stronghold}</div>
        </div>
      </div>
      <div class="highlight-box" style="margin:8px;">
        <div style="color:${party.color};font-weight:700;margin-bottom:4px;">SEAT TREND</div>
        ${['2014', '2019', '2024'].map(y => `
          <div class="bar-row">
            <div class="bar-label">${y}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width:${(party['seats'+y]/303)*100}%;background:${party.color};"></div>
            </div>
            <div class="bar-value" style="color:${party.color};">${party['seats'+y]}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============ PARLIAMENT ============
function renderParliament() {
  const content = document.getElementById('content-area');
  const data = INDIA_POLITICS_DATA.parliament2024.loksabha;
  const total = 543;
  const majority = 272;
  const ndaTotal = 240 + 12 + 16 + 2; // BJP + JDU + TDP + others approx

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="grid-template-columns:repeat(5,1fr);flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL SEATS</div>
          <div class="stat-value">543</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">MAJORITY MARK</div>
          <div class="stat-value" style="color:var(--yellow);">272</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">BJP SEATS</div>
          <div class="stat-value" style="color:var(--orange);">240</div>
          <div class="stat-sub">Short of majority</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">NDA TOTAL</div>
          <div class="stat-value" style="color:var(--orange);">~293</div>
          <div class="stat-sub">Majority government</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">INDIA BLOC</div>
          <div class="stat-value" style="color:var(--green);">~234</div>
          <div class="stat-sub">Strong opposition</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;flex:1;gap:1px;min-height:0;overflow:hidden;">
        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">◆ PARTY DISTRIBUTION</span>
          </div>
          <div class="panel-body" style="padding:16px;">
            <canvas id="donut-canvas" width="250" height="250" style="display:block;margin:0 auto;"></canvas>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:12px;">
              ${data.map(p => `
                <div class="legend-item">
                  <div class="legend-dot" style="background:${p.color};"></div>
                  <div class="legend-name">${p.party}</div>
                  <div class="legend-seats" style="color:${p.color};">${p.seats}</div>
                  <div class="legend-pct">${((p.seats/total)*100).toFixed(1)}%</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">◆ COALITION BREAKDOWN</span>
          </div>
          <div class="panel-body" style="padding:12px;">
            <div style="margin-bottom:16px;">
              <div style="color:var(--orange);font-weight:700;font-size:12px;letter-spacing:2px;margin-bottom:8px;border-bottom:1px solid var(--orange);padding-bottom:4px;">NDA (NATIONAL DEMOCRATIC ALLIANCE)</div>
              <div class="bar-row">
                <div class="bar-label">BJP</div>
                <div class="bar-track"><div class="bar-fill" style="width:${(240/543)*100}%;background:#ff6600;"></div></div>
                <div class="bar-value" style="color:#ff6600;">240</div>
              </div>
              <div class="bar-row">
                <div class="bar-label">JDU</div>
                <div class="bar-track"><div class="bar-fill" style="width:${(12/543)*100}%;background:#00cc00;"></div></div>
                <div class="bar-value" style="color:#00cc00;">12</div>
              </div>
              <div class="bar-row">
                <div class="bar-label">TDP</div>
                <div class="bar-track"><div class="bar-fill" style="width:${(16/543)*100}%;background:#cccc00;"></div></div>
                <div class="bar-value" style="color:#cccc00;">16</div>
              </div>
              <div style="color:var(--orange);margin-top:4px;font-weight:700;">NDA TOTAL: ~293 seats</div>
            </div>

            <div>
              <div style="color:var(--green);font-weight:700;font-size:12px;letter-spacing:2px;margin-bottom:8px;border-bottom:1px solid var(--green);padding-bottom:4px;">INDIA BLOC</div>
              <div class="bar-row">
                <div class="bar-label">INC</div>
                <div class="bar-track"><div class="bar-fill" style="width:${(99/543)*100}%;background:#1a6b3c;"></div></div>
                <div class="bar-value" style="color:#1a6b3c;">99</div>
              </div>
              <div class="bar-row">
                <div class="bar-label">SP</div>
                <div class="bar-track"><div class="bar-fill" style="width:${(37/543)*100}%;background:#ff0000;"></div></div>
                <div class="bar-value" style="color:#ff0000;">37</div>
              </div>
              <div class="bar-row">
                <div class="bar-label">TMC</div>
                <div class="bar-track"><div class="bar-fill" style="width:${(29/543)*100}%;background:#00b4d8;"></div></div>
                <div class="bar-value" style="color:#00b4d8;">29</div>
              </div>
              <div class="bar-row">
                <div class="bar-label">DMK</div>
                <div class="bar-track"><div class="bar-fill" style="width:${(22/543)*100}%;background:#000088;"></div></div>
                <div class="bar-value" style="color:#0066cc;">22</div>
              </div>
              <div style="color:var(--green);margin-top:4px;font-weight:700;">INDIA BLOC TOTAL: ~234 seats</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  drawDonutChart();
}

function drawDonutChart() {
  const canvas = document.getElementById('donut-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = INDIA_POLITICS_DATA.parliament2024.loksabha;
  const total = 543;
  const cx = 125, cy = 125, r = 100, innerR = 60;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 250, 250);

  let startAngle = -Math.PI / 2;
  data.forEach(p => {
    const angle = (p.seats / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + angle);
    ctx.closePath();
    ctx.fillStyle = p.color;
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    startAngle += angle;
  });

  // Inner circle (hole)
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.fillStyle = '#000';
  ctx.fill();

  // Center text
  ctx.fillStyle = '#ff6600';
  ctx.font = 'bold 20px IBM Plex Mono';
  ctx.textAlign = 'center';
  ctx.fillText('543', cx, cy + 5);
  ctx.fillStyle = '#666';
  ctx.font = '9px IBM Plex Mono';
  ctx.fillText('SEATS', cx, cy + 18);
}

// ============ EVENTS ============
function renderEvents(filterCategory) {
  const content = document.getElementById('content-area');
  const categories = ['ALL', 'HISTORIC', 'CONFLICT', 'POLITICAL', 'ECONOMIC', 'TERRORISM', 'DEFENCE', 'SOCIAL', 'CONSTITUTIONAL', 'TRAGEDY', 'COMMUNAL', 'JUDICIAL', 'GOVERNANCE', 'CRISIS'];

  let events = INDIA_POLITICS_DATA.events;
  if (filterCategory !== 'ALL') {
    events = events.filter(e => e.category === filterCategory);
  }

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="events-filter">
        ${categories.map(cat => `
          <button class="filter-btn ${filterCategory === cat ? 'active' : ''}" onclick="renderEvents('${cat}')">${cat}</button>
        `).join('')}
      </div>
      <div style="padding:4px;color:var(--gray-3);font-size:9px;flex-shrink:0;">
        SHOWING ${events.length} EVENTS ${filterCategory !== 'ALL' ? '· FILTER: '+filterCategory : ''}
      </div>
      <div style="flex:1;overflow-y:auto;overflow-x:hidden;">
        ${events.map(e => `
          <div class="timeline-item">
            <div class="timeline-date">${e.date}</div>
            <span class="timeline-badge badge-${e.category}">${e.category.slice(0,7)}</span>
            <div class="timeline-content">
              <div class="timeline-title">${e.title} <span class="impact-${e.impact}" style="font-size:9px;">[${e.impact}]</span></div>
              <div class="timeline-desc">${e.description}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Re-assign renderEvents to content area so buttons work
  window.renderEvents = renderEvents;
}

// ============ SCANDALS ============
function renderScandals() {
  const content = document.getElementById('content-area');
  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL SCANDALS</div>
          <div class="stat-value">${INDIA_POLITICS_DATA.scandals.length}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">CRITICAL</div>
          <div class="stat-value" style="color:var(--red);">${INDIA_POLITICS_DATA.scandals.filter(s=>s.severity==='CRITICAL').length}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">LARGEST SCAM</div>
          <div class="stat-value" style="font-size:10px;">COAL</div>
          <div class="stat-sub">₹1.86 lakh crore (est)</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">MOST RECENT</div>
          <div class="stat-value" style="font-size:10px;">ADANI</div>
          <div class="stat-sub">2023 · Hindenburg</div>
        </div>
      </div>
      <div class="panel" style="flex:1;margin:1px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ MAJOR POLITICAL SCANDALS & CONTROVERSIES</span>
          <span class="panel-meta">1987 - PRESENT</span>
        </div>
        <div class="panel-body full-scroll">
          <table class="bt-table">
            <thead>
              <tr><th>YEAR</th><th>SCANDAL</th><th>AMOUNT/LOSS</th><th>SEVERITY</th><th>DESCRIPTION</th></tr>
            </thead>
            <tbody>
              ${INDIA_POLITICS_DATA.scandals.sort((a,b) => b.year - a.year).map(s => `
                <tr>
                  <td class="td-yellow">${s.year}</td>
                  <td class="td-name">${s.name}</td>
                  <td class="td-orange" style="font-size:9px;">${s.amount}</td>
                  <td class="${s.severity === 'CRITICAL' ? 'td-red' : s.severity === 'HIGH' ? 'td-yellow' : 'td-cyan'}" style="font-weight:700;">${s.severity}</td>
                  <td class="td-gray" style="font-size:9px;max-width:300px;white-space:normal;line-height:1.4;">${s.description}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ============ AMENDMENTS ============
function renderAmendments() {
  const content = document.getElementById('content-area');
  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL AMENDMENTS</div>
          <div class="stat-value">106</div>
          <div class="stat-sub">As of 2023</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">SHOWN HERE</div>
          <div class="stat-value">${INDIA_POLITICS_DATA.amendments.length}</div>
          <div class="stat-sub">Landmark only</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">MOST CONTROVERSIAL</div>
          <div class="stat-value" style="font-size:10px;">42nd (1976)</div>
          <div class="stat-sub">Emergency era</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">LATEST SHOWN</div>
          <div class="stat-value" style="font-size:10px;">103rd (2019)</div>
          <div class="stat-sub">EWS Reservation</div>
        </div>
      </div>
      <div class="panel" style="flex:1;margin:1px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ LANDMARK CONSTITUTIONAL AMENDMENTS</span>
          <span class="panel-meta">SELECTED MAJOR AMENDMENTS</span>
        </div>
        <div class="panel-body full-scroll">
          <table class="bt-table">
            <thead>
              <tr><th>AMENDMENT #</th><th>YEAR</th><th>DESCRIPTION</th></tr>
            </thead>
            <tbody>
              ${INDIA_POLITICS_DATA.amendments.map(a => `
                <tr>
                  <td class="td-orange" style="font-weight:700;">${a.number}${getOrdinal(a.number)}</td>
                  <td class="td-yellow">${a.year}</td>
                  <td class="td-gray" style="font-size:10px;white-space:normal;line-height:1.5;">${a.description}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ============ SEARCH ============
function renderSearch() {
  const content = document.getElementById('content-area');
  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div style="padding:16px;border-bottom:1px solid var(--border);flex-shrink:0;">
        <div style="color:var(--orange);font-size:12px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">◆ SEARCH INDIA POLITICS DATABASE</div>
        <div style="display:flex;gap:8px;">
          <input id="main-search" type="text" placeholder="Search PMs, parties, events, scandals..." style="flex:1;background:var(--bg-panel);border:1px solid var(--border-bright);color:var(--white);font-family:var(--font-mono);font-size:12px;padding:8px 12px;outline:none;caret-color:var(--orange);" oninput="performSearch(this.value)" onkeydown="if(event.key==='Enter')performSearch(this.value)" autofocus>
          <div style="color:var(--gray-3);font-size:10px;align-self:center;">PRESS ENTER</div>
        </div>
      </div>
      <div id="search-results" style="flex:1;overflow-y:auto;padding:8px;">
        <div style="color:var(--gray-3);text-align:center;padding:40px;font-size:11px;">
          TYPE SOMETHING TO SEARCH ACROSS ALL DATA
        </div>
      </div>
    </div>
  `;
}

function performSearch(query) {
  const results = document.getElementById('search-results');
  if (!results) return;
  if (!query || query.length < 2) {
    results.innerHTML = '<div style="color:var(--gray-3);text-align:center;padding:40px;">TYPE AT LEAST 2 CHARACTERS</div>';
    return;
  }

  query = query.toLowerCase();
  const hits = [];

  INDIA_POLITICS_DATA.primeMinisters.forEach(pm => {
    if (pm.name.toLowerCase().includes(query) || pm.notable.toLowerCase().includes(query) || pm.party.toLowerCase().includes(query)) {
      hits.push({ type: 'PM', title: pm.name, detail: `${pm.party} · ${pm.tenure} · ${pm.from.slice(0,4)} - ${pm.to ? pm.to.slice(0,4) : 'Present'}`, action: 'pm' });
    }
  });

  INDIA_POLITICS_DATA.events.forEach(e => {
    if (e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query) || e.category.toLowerCase().includes(query)) {
      hits.push({ type: 'EVENT', title: e.title, detail: `${e.date} · ${e.category} · ${e.description.slice(0,80)}`, action: 'events' });
    }
  });

  INDIA_POLITICS_DATA.parties.forEach(p => {
    if (p.name.toLowerCase().includes(query) || p.code.toLowerCase().includes(query) || p.ideology.toLowerCase().includes(query) || p.president.toLowerCase().includes(query)) {
      hits.push({ type: 'PARTY', title: p.name, detail: `${p.code} · Founded ${p.founded} · Seats 2024: ${p.seats2024}`, action: `party-${p.code}` });
    }
  });

  INDIA_POLITICS_DATA.scandals.forEach(s => {
    if (s.name.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)) {
      hits.push({ type: 'SCANDAL', title: s.name, detail: `${s.year} · ${s.severity} · ${s.amount}`, action: 'scandals' });
    }
  });

  INDIA_POLITICS_DATA.chiefMinisters.forEach(cm => {
    if (cm.cm.toLowerCase().includes(query) || cm.state.toLowerCase().includes(query)) {
      hits.push({ type: 'CM', title: cm.cm, detail: `${cm.state} · ${cm.party} · Since ${cm.since}`, action: 'cm' });
    }
  });

  if (hits.length === 0) {
    results.innerHTML = `<div style="color:var(--red);text-align:center;padding:40px;">NO RESULTS FOR "${query.toUpperCase()}"</div>`;
    return;
  }

  results.innerHTML = `
    <div style="color:var(--gray-3);font-size:9px;padding:4px;margin-bottom:4px;">${hits.length} RESULTS FOR "${query.toUpperCase()}"</div>
    ${hits.map(h => `
      <div onclick="navigateTo('${h.action}')" style="padding:8px;border-bottom:1px solid var(--border);cursor:pointer;display:flex;gap:10px;align-items:flex-start;" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background=''">
        <span style="background:var(--orange);color:#000;padding:1px 6px;font-size:9px;font-weight:700;flex-shrink:0;">${h.type}</span>
        <div>
          <div style="color:var(--white);font-weight:600;font-size:11px;">${h.title}</div>
          <div style="color:var(--gray-2);font-size:9px;margin-top:2px;">${h.detail}</div>
        </div>
      </div>
    `).join('')}
  `;
}

// Make loadRealTimeDashboardData global for API integration
window.loadRealTimeDashboardData = loadRealTimeDashboardData;

// Make performSearch global
window.performSearch = performSearch;
window.renderEvents = renderEvents;
window.navigateTo = navigateTo;
window.selectPM = selectPM;

// ============ SEARCH BAR (TOP) ============
function initSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      navigateTo('search');
      setTimeout(() => {
        const mainSearch = document.getElementById('main-search');
        if (mainSearch) {
          mainSearch.value = input.value;
          performSearch(input.value);
          mainSearch.focus();
        }
      }, 100);
    }
  });
}

// ============ KEYBOARD ============
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    const keyMap = {
      'F1': 'dashboard', 'F2': 'pm', 'F3': 'elections',
      'F4': 'parties', 'F5': 'events', 'F6': 'parliament',
      'F7': 'scandals', 'F8': 'amendments', 'F9': 'search',
      'F10': 'electoral-bonds',
    };
    if (keyMap[e.key]) { e.preventDefault(); navigateTo(keyMap[e.key]); }
  });
}

// ============ HELPER FUNCTIONS ============
function getPartyColor(code) {
  const colors = {
    BJP: '#ff6600', INC: '#1a6b3c', SP: '#ff0000', TMC: '#00b4d8',
    BSP: '#0000cc', DMK: '#000088', AAP: '#00aacc', 'CPI(M)': '#cc0000',
    JD: '#00aa00', JP: '#884400', NDA: '#ff4400', JNP: '#996600',
    'JD(S)': '#00aa00', JDU: '#006600', TDP: '#888800', RJD: '#004400',
    SS: '#ff5500', SJP: '#663300', IND: '#444444', NPP: '#334400',
    ZPM: '#004433', NDPP: '#333300', SKM: '#003344', JMM: '#004422',
    default: '#555555'
  };
  return colors[code] || colors.default;
}

function getPartyTextColor(code) {
  const light = ['TDP', 'AAP'];
  return light.includes(code) ? '#000' : '#fff';
}

function isLightColor(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

function getOrdinal(n) {
  const s = ['th','st','nd','rd'], v = n%100;
  return s[(v-20)%10]||s[v]||s[0];
}

// ============ STATE ELECTIONS ============
function calculateDaysUntil(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const electionDate = new Date(dateStr);
  const diffTime = electionDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function formatCountdown(days) {
  if (days < 0) {
    return "PASSED";
  } else if (days === 0) {
    return "TODAY";
  } else if (days === 1) {
    return "TOMORROW";
  } else if (days < 7) {
    return `${days} DAYS`;
  } else if (days < 30) {
    const weeks = Math.floor(days / 7);
    const remaining = days % 7;
    return `${weeks}W ${remaining}D`;
  } else if (days < 365) {
    const months = Math.floor(days / 30);
    const remaining = days % 30;
    return `${months}M ${remaining}D`;
  } else {
    const years = Math.floor(days / 365);
    const remaining = days % 365;
    const months = Math.floor(remaining / 30);
    return `${years}Y ${months}M`;
  }
}

function aggregatePolls(polls) {
  if (!polls || polls.length === 0) return null;
  
  const parties = {};
  let totalWeight = 0;
  
  polls.forEach(poll => {
    const weight = calculatePollWeight(poll);
    totalWeight += weight;
    
    Object.keys(poll).forEach(key => {
      if (key !== 'pollster' && key !== 'date' && typeof poll[key] === 'number') {
        if (!parties[key]) parties[key] = 0;
        parties[key] += poll[key] * weight;
      }
    });
  });
  
  // Average the results
  Object.keys(parties).forEach(party => {
    parties[party] = Math.round(parties[party] / totalWeight);
  });
  
  return parties;
}

function calculatePollWeight(poll) {
  // Weight polls by recency (newer polls get higher weight)
  const pollDate = new Date(poll.date);
  const today = new Date();
  const daysDiff = Math.floor((today - pollDate) / (1000 * 60 * 60 * 24));
  
  // Recent polls (within 30 days) get weight 1.0
  // Older polls get decreasing weight
  const weight = Math.max(0.3, 1 - (daysDiff / 90));
  return weight;
}

function projectSeats(pollAggregate, totalSeats) {
  if (!pollAggregate) return null;
  
  const projections = {};
  let allocatedSeats = 0;
  
  // Sort parties by vote share
  const sortedParties = Object.keys(pollAggregate).sort((a, b) => pollAggregate[b] - pollAggregate[a]);
  
  // Use D'Hondt method for seat allocation
  const divisors = Array.from({length: totalSeats}, (_, i) => i + 1);
  
  sortedParties.forEach(party => {
    const voteShare = pollAggregate[party] / 100;
    const seats = divisors.map(div => voteShare / div);
    projections[party] = seats.length;
  });
  
  // Simple proportional allocation (simplified)
  let remainingSeats = totalSeats;
  sortedParties.forEach((party, index) => {
    if (remainingSeats > 0) {
      const voteShare = pollAggregate[party] / 100;
      let seats = Math.round(voteShare * totalSeats);
      
      // Ensure we don't exceed total seats
      if (allocatedSeats + seats > totalSeats) {
        seats = totalSeats - allocatedSeats;
      }
      
      projections[party] = seats;
      allocatedSeats += seats;
      remainingSeats -= seats;
    }
  });
  
  return projections;
}

function getPollStatus(election) {
  if (!election.polls || election.polls.length === 0) return null;
  
  const latestPoll = election.polls.reduce((latest, current) => 
    new Date(current.date) > new Date(latest.date) ? current : latest
  );
  
  const daysSincePoll = Math.floor((new Date() - new Date(latestPoll.date)) / (1000 * 60 * 60 * 24));
  
  return {
    latestPollDate: latestPoll.date,
    daysSincePoll,
    pollster: latestPoll.pollster
  };
}

// ============ ELECTORAL BONDS ============
function renderElectoralBonds() {
  const content = document.getElementById('content-area');
  const data = window.electoralBondsData;
  
  content.innerHTML = `
    <div class="screen active" id="screen-electoral-bonds" style="overflow-y:auto;">
      <!-- ENHANCED HEADER STATS -->
      <div class="stat-grid" style="grid-template-columns:repeat(6,1fr);margin-bottom:20px;">
        <div class="stat-card">
          <div class="stat-label">TOTAL AMOUNT</div>
          <div class="stat-value" style="color:var(--cyan);">₹${data.metadata.totalAmount.toFixed(2)} Cr</div>
          <div class="stat-sub">${data.metadata.totalTransactions.toLocaleString()} Transactions</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">PERIOD</div>
          <div class="stat-value" style="font-size:10px;">${data.metadata.period}</div>
          <div class="stat-sub">Updated: ${data.metadata.lastUpdated}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOP DONOR</div>
          <div class="stat-value" style="font-size:9px;">${data.getTopDonors(1)[0].name.substring(0,15)}...</div>
          <div class="stat-sub">₹${data.getTopDonors(1)[0].totalAmount.toFixed(2)} Cr</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOP PARTY</div>
          <div class="stat-value" style="color:var(--orange);">${data.getTopParties(1)[0].abbreviation}</div>
          <div class="stat-sub">₹${data.getTopParties(1)[0].totalAmount.toFixed(2)} Cr</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">STATES</div>
          <div class="stat-value" style="color:var(--yellow);">${Object.keys(data.getStateAnalysis()).length}</div>
          <div class="stat-sub">Active Regions</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">SECTORS</div>
          <div class="stat-value" style="color:var(--highlight);">${Object.keys(data.getSectorAnalysis()).length}</div>
          <div class="stat-sub">Industries</div>
        </div>
      </div>

      <!-- ADVANCED FILTER CONTROLS -->
      <div style="background:var(--bg-secondary);border:1px solid var(--border-color);padding:15px;margin-bottom:20px;">
        <h3 style="color:var(--orange);margin-bottom:10px;">◆ ADVANCED FILTERS</h3>
        
        <!-- Search Bar -->
        <div style="display:flex;gap:10px;margin-bottom:15px;">
          <input type="text" id="search-input" placeholder="Search donors, parties, states..." 
                 style="flex:1;background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:8px;">
          <button onclick="performSearch()" style="background:var(--orange);color:black;border:none;padding:8px 15px;cursor:pointer;">Search</button>
        </div>
        
        <!-- Filter Row 1 -->
        <div style="display:flex;gap:10px;margin-bottom:10px;flex-wrap:wrap;">
          <select id="amount-filter" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
            <option value="all">All Amounts</option>
            <option value="0-1">₹0-1 Cr</option>
            <option value="1-5">₹1-5 Cr</option>
            <option value="5-10">₹5-10 Cr</option>
            <option value="10+">₹10+ Cr</option>
          </select>
          
          <select id="party-filter" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
            <option value="all">All Parties</option>
            ${data.parties.map(p => `<option value="${p.abbreviation}">${p.abbreviation}</option>`).join('')}
          </select>
          
          <select id="sector-filter" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
            <option value="all">All Sectors</option>
            ${Object.keys(data.getSectorAnalysis()).map(s => `<option value="${s}">${s}</option>`).join('')}
          </select>
          
          <select id="state-filter" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
            <option value="all">All States</option>
            ${Object.keys(data.getStateAnalysis()).map(s => `<option value="${s}">${s}</option>`).join('')}
          </select>
        </div>
        
        <!-- Date Range Filter -->
        <div style="display:flex;gap:10px;margin-bottom:10px;align-items:center;">
          <span style="color:var(--gray-3);font-size:11px;">Date Range:</span>
          <input type="date" id="start-date" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
          <span style="color:var(--gray-3);">to</span>
          <input type="date" id="end-date" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
        </div>
        
        <!-- Action Buttons -->
        <div style="display:flex;gap:10px;">
          <button onclick="updateVisualization()" style="background:var(--cyan);color:black;border:none;padding:8px 15px;cursor:pointer;">Update View</button>
          <button onclick="resetFilters()" style="background:var(--gray-2);color:var(--text-primary);border:none;padding:8px 15px;cursor:pointer;">Reset</button>
          <button onclick="exportData()" style="background:var(--green);color:black;border:none;padding:8px 15px;cursor:pointer;">Export CSV</button>
        </div>
      </div>

      <!-- VISUALIZATION MODES -->
      <div style="display:flex;gap:10px;margin-bottom:20px;">
        <button onclick="setVisualizationMode('sankey')" id="btn-sankey" class="viz-mode-btn active" style="background:var(--orange);color:black;border:none;padding:8px 15px;cursor:pointer;">Sankey Flow</button>
        <button onclick="setVisualizationMode('tree')" id="btn-tree" class="viz-mode-btn" style="background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border-color);padding:8px 15px;cursor:pointer;">Tree Map</button>
        <button onclick="setVisualizationMode('bars')" id="btn-bars" class="viz-mode-btn" style="background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border-color);padding:8px 15px;cursor:pointer;">Bar Charts</button>
        <button onclick="setVisualizationMode('timeline')" id="btn-timeline" class="viz-mode-btn" style="background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border-color);padding:8px 15px;cursor:pointer;">Timeline</button>
        <button onclick="setVisualizationMode('network')" id="btn-network" class="viz-mode-btn" style="background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border-color);padding:8px 15px;cursor:pointer;">Network</button>
      </div>

      <!-- MAIN VISUALIZATION CONTAINER -->
      <div style="background:var(--bg-secondary);border:1px solid var(--border-color);padding:20px;margin-bottom:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
          <h3 style="color:var(--orange);margin:0;" id="viz-title">◆ SANKEY FLOW DIAGRAM</h3>
          <div style="display:flex;gap:10px;">
            <button onclick="zoomIn()" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px 10px;cursor:pointer;">+</button>
            <button onclick="zoomOut()" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px 10px;cursor:pointer;">-</button>
            <button onclick="resetZoom()" style="background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px 10px;cursor:pointer;">Reset</button>
          </div>
        </div>
        <div id="visualization-container" style="height:600px;position:relative;overflow:hidden;">
          <canvas id="main-canvas" width="1400" height="600"></canvas>
          <div id="tooltip" style="position:absolute;display:none;background:var(--bg-primary);border:1px solid var(--orange);padding:8px;border-radius:4px;font-size:11px;max-width:300px;z-index:1000;"></div>
        </div>
        <div style="margin-top:10px;font-size:10px;color:var(--gray-3);" id="viz-subtitle">
          ◆ Interactive flow visualization showing corporate funding to political parties
        </div>
      </div>

      <!-- ANALYSIS PANELS -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
        <!-- STATISTICAL ANALYSIS -->
        <div style="background:var(--bg-secondary);border:1px solid var(--border-color);padding:20px;">
          <h3 style="color:var(--orange);margin-bottom:15px;">◆ STATISTICAL ANALYSIS</h3>
          <div id="stats-content">
            <div style="margin-bottom:10px;">
              <div style="color:var(--gray-3);font-size:10px;">Average Transaction Size</div>
              <div style="color:var(--cyan);font-size:14px;font-weight:bold;">₹${(data.metadata.totalAmount / data.metadata.totalTransactions).toFixed(2)} Cr</div>
            </div>
            <div style="margin-bottom:10px;">
              <div style="color:var(--gray-3);font-size:10px;">Largest Single Transaction</div>
              <div style="color:var(--green);font-size:14px;font-weight:bold;">₹${Math.max(...data.transactions.map(t => t.amount)).toFixed(2)} Cr</div>
            </div>
            <div style="margin-bottom:10px;">
              <div style="color:var(--gray-3);font-size:10px;">Most Active State</div>
              <div style="color:var(--yellow);font-size:14px;font-weight:bold;">${Object.entries(data.getStateAnalysis()).sort((a,b) => b[1].amount - a[1].amount)[0][0]}</div>
            </div>
            <div>
              <div style="color:var(--gray-3);font-size:10px;">Peak Year</div>
              <div style="color:var(--highlight);font-size:14px;font-weight:bold;">${Object.entries(data.getYearlyAnalysis()).sort((a,b) => b[1].amount - a[1].amount)[0][0]}</div>
            </div>
          </div>
        </div>

        <!-- COMPARISON TOOL -->
        <div style="background:var(--bg-secondary);border:1px solid var(--border-color);padding:20px;">
          <h3 style="color:var(--orange);margin-bottom:15px;">◆ COMPARISON TOOL</h3>
          <div style="display:flex;gap:10px;margin-bottom:15px;">
            <select id="compare-type" style="flex:1;background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
              <option value="donor">Donors</option>
              <option value="party">Parties</option>
            </select>
            <select id="entity1" style="flex:1;background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
              ${data.getTopDonors(5).map(d => `<option value="${d.name}">${d.name.substring(0,20)}...</option>`).join('')}
            </select>
            <select id="entity2" style="flex:1;background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border-color);padding:5px;">
              ${data.getTopDonors(5).slice(1).map(d => `<option value="${d.name}">${d.name.substring(0,20)}...</option>`).join('')}
            </select>
          </div>
          <button onclick="performComparison()" style="background:var(--orange);color:black;border:none;padding:8px 15px;cursor:pointer;width:100%;">Compare</button>
          <div id="comparison-result" style="margin-top:15px;font-size:11px;"></div>
        </div>
      </div>

      <!-- DETAILED DATA TABLES -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
        <!-- TOP DONORS TABLE -->
        <div style="background:var(--bg-secondary);border:1px solid var(--border-color);padding:20px;">
          <h3 style="color:var(--orange);margin-bottom:15px;">◆ TOP CORPORATE DONORS</h3>
          <div style="max-height:400px;overflow-y:auto;">
            <table style="width:100%;font-size:11px;">
              <thead style="position:sticky;top:0;background:var(--bg-secondary);">
                <tr style="border-bottom:1px solid var(--border-color);">
                  <th style="text-align:left;padding:5px;">CORPORATION</th>
                  <th style="text-align:right;padding:5px;">SECTOR</th>
                  <th style="text-align:right;padding:5px;">AMOUNT</th>
                  <th style="text-align:right;padding:5px;">TRANS</th>
                </tr>
              </thead>
              <tbody id="donors-table">
                ${data.getTopDonors(15).map(donor => `
                  <tr style="border-bottom:1px solid var(--border-color);cursor:pointer;" onclick="showDonorDetails('${donor.name}')">
                    <td style="padding:5px;color:var(--cyan);">${donor.name}</td>
                    <td style="text-align:right;padding:5px;color:var(--gray-3);font-size:9px;">${donor.sector}</td>
                    <td style="text-align:right;padding:5px;color:var(--green);font-weight:bold;">₹${donor.totalAmount.toFixed(2)}</td>
                    <td style="text-align:right;padding:5px;">${donor.transactions}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- PARTY RECIPIENTS TABLE -->
        <div style="background:var(--bg-secondary);border:1px solid var(--border-color);padding:20px;">
          <h3 style="color:var(--orange);margin-bottom:15px;">◆ PARTY RECIPIENTS</h3>
          <div style="max-height:400px;overflow-y:auto;">
            <table style="width:100%;font-size:11px;">
              <thead style="position:sticky;top:0;background:var(--bg-secondary);">
                <tr style="border-bottom:1px solid var(--border-color);">
                  <th style="text-align:left;padding:5px;">PARTY</th>
                  <th style="text-align:right;padding:5px;">IDEOLOGY</th>
                  <th style="text-align:right;padding:5px;">AMOUNT</th>
                  <th style="text-align:right;padding:5px;">%</th>
                </tr>
              </thead>
              <tbody id="parties-table">
                ${data.getTopParties(10).map(party => `
                  <tr style="border-bottom:1px solid var(--border-color);cursor:pointer;" onclick="showPartyDetails('${party.name}')">
                    <td style="padding:5px;color:var(--cyan);">${party.abbreviation}</td>
                    <td style="text-align:right;padding:5px;color:var(--gray-3);font-size:9px;">${party.ideology}</td>
                    <td style="text-align:right;padding:5px;color:var(--green);font-weight:bold;">₹${party.totalAmount.toFixed(2)}</td>
                    <td style="text-align:right;padding:5px;color:var(--gray-3);">${party.percentage}%</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Initialize visualization
  setTimeout(() => {
    initElectoralBondsVisualization();
    setupEventListeners();
  }, 100);
}

// Global variables for visualization state
let currentVisualizationMode = 'sankey';
let currentZoom = 1;
let currentFilters = {};
let filteredData = null;

function initElectoralBondsVisualization() {
  const data = window.electoralBondsData;
  filteredData = data.transactions;
  renderVisualization();
}

function setupEventListeners() {
  // Setup compare type change
  document.getElementById('compare-type')?.addEventListener('change', function() {
    const type = this.value;
    const data = window.electoralBondsData;
    const entity1Select = document.getElementById('entity1');
    const entity2Select = document.getElementById('entity2');
    
    if (type === 'donor') {
      entity1Select.innerHTML = data.getTopDonors(10).map(d => `<option value="${d.name}">${d.name.substring(0,25)}...</option>`).join('');
      entity2Select.innerHTML = data.getTopDonors(10).slice(1).map(d => `<option value="${d.name}">${d.name.substring(0,25)}...</option>`).join('');
    } else {
      entity1Select.innerHTML = data.parties.map(p => `<option value="${p.name}">${p.abbreviation} - ${p.name.substring(0,20)}...</option>`).join('');
      entity2Select.innerHTML = data.parties.slice(1).map(p => `<option value="${p.name}">${p.abbreviation} - ${p.name.substring(0,20)}...</option>`).join('');
    }
  });

  // Setup canvas mouse events for tooltips
  const canvas = document.getElementById('main-canvas');
  const tooltip = document.getElementById('tooltip');
  
  canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if hovering over a visual element
    const hoveredElement = getElementAtPosition(x, y);
    if (hoveredElement) {
      tooltip.style.display = 'block';
      tooltip.style.left = (e.clientX + 10) + 'px';
      tooltip.style.top = (e.clientY + 10) + 'px';
      tooltip.innerHTML = formatTooltip(hoveredElement);
    } else {
      tooltip.style.display = 'none';
    }
  });
  
  canvas.addEventListener('mouseleave', function() {
    tooltip.style.display = 'none';
  });
}

function setVisualizationMode(mode) {
  currentVisualizationMode = mode;
  
  // Update button styles
  document.querySelectorAll('.viz-mode-btn').forEach(btn => {
    btn.style.background = 'var(--bg-secondary)';
    btn.style.color = 'var(--text-primary)';
    btn.style.border = '1px solid var(--border-color)';
  });
  
  const activeBtn = document.getElementById('btn-' + mode);
  if (activeBtn) {
    activeBtn.style.background = 'var(--orange)';
    activeBtn.style.color = 'black';
    activeBtn.style.border = 'none';
  }
  
  // Update title
  const titles = {
    'sankey': '◆ SANKEY FLOW DIAGRAM',
    'tree': '◆ TREE MAP VISUALIZATION',
    'bars': '◆ BAR CHART ANALYSIS',
    'timeline': '◆ TIMELINE ANALYSIS',
    'network': '◆ NETWORK GRAPH'
  };
  
  const subtitles = {
    'sankey': '◆ Interactive flow visualization showing corporate funding to political parties',
    'tree': '◆ Hierarchical view of funding distribution by sector and party',
    'bars': '◆ Comparative analysis of donations across different dimensions',
    'timeline': '◆ Temporal analysis of electoral bond purchases over time',
    'network': '◆ Network connections between donors and political parties'
  };
  
  document.getElementById('viz-title').textContent = titles[mode];
  document.getElementById('viz-subtitle').textContent = subtitles[mode];
  
  renderVisualization();
}

function renderVisualization() {
  const canvas = document.getElementById('main-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  switch(currentVisualizationMode) {
    case 'sankey':
      renderSankeyDiagram(ctx);
      break;
    case 'tree':
      renderTreeMap(ctx);
      break;
    case 'bars':
      renderBarCharts(ctx);
      break;
    case 'timeline':
      renderTimeline(ctx);
      break;
    case 'network':
      renderNetworkGraph(ctx);
      break;
  }
}

function renderSankeyDiagram(ctx) {
  const data = window.electoralBondsData;
  
  // Prepare data for Sankey
  const donors = [...new Set(filteredData.map(t => t.donor))];
  const parties = [...new Set(filteredData.map(t => t.party))];
  
  // Calculate totals
  const donorTotals = {};
  const partyTotals = {};
  
  filteredData.forEach(t => {
    donorTotals[t.donor] = (donorTotals[t.donor] || 0) + t.amount;
    partyTotals[t.party] = (partyTotals[t.party] || 0) + t.amount;
  });
  
  // Sort and limit
  donors.sort((a, b) => donorTotals[b] - donorTotals[a]);
  parties.sort((a, b) => partyTotals[b] - partyTotals[a]);
  
  const topDonors = donors.slice(0, 12);
  const topParties = parties.slice(0, 10);
  
  // Enhanced Sankey with zoom support
  const zoomFactor = currentZoom;
  const startX = 100 * zoomFactor;
  const endX = 1100 * zoomFactor;
  const donorHeight = 500 * zoomFactor / topDonors.length;
  const partyHeight = 500 * zoomFactor / topParties.length;
  
  // Draw donors (left side)
  ctx.fillStyle = '#00ccff';
  ctx.font = `${10 * zoomFactor}px IBM Plex Mono`;
  
  topDonors.forEach((donor, i) => {
    const y = 50 * zoomFactor + i * donorHeight;
    const amount = donorTotals[donor];
    const height = Math.max(2 * zoomFactor, (amount / Math.max(...Object.values(donorTotals))) * donorHeight * 0.8);
    
    // Draw donor box with gradient
    const gradient = ctx.createLinearGradient(startX - 80 * zoomFactor, y, startX, y);
    gradient.addColorStop(0, '#00ccff');
    gradient.addColorStop(1, '#0088cc');
    ctx.fillStyle = gradient;
    ctx.fillRect(startX - 80 * zoomFactor, y, 60 * zoomFactor, height);
    
    // Draw donor name
    ctx.fillStyle = '#ffffff';
    ctx.save();
    ctx.translate(startX - 85 * zoomFactor, y + height/2);
    ctx.rotate(-Math.PI/2);
    ctx.font = `${9 * zoomFactor}px IBM Plex Mono`;
    ctx.fillText(donor.substring(0, 25), 0, 0);
    ctx.restore();
    
    // Draw amount
    ctx.fillStyle = '#00cc44';
    ctx.font = `${8 * zoomFactor}px IBM Plex Mono`;
    ctx.fillText(`₹${amount.toFixed(1)}Cr`, startX - 85 * zoomFactor, y - 5 * zoomFactor);
  });
  
  // Draw parties (right side)
  topParties.forEach((party, i) => {
    const y = 50 * zoomFactor + i * partyHeight;
    const amount = partyTotals[party];
    const height = Math.max(2 * zoomFactor, (amount / Math.max(...Object.values(partyTotals))) * partyHeight * 0.8);
    
    // Draw party box with party color
    const partyData = data.parties.find(p => p.name === party);
    const partyColor = partyData ? partyData.color : '#ff6600';
    
    const gradient = ctx.createLinearGradient(endX, y, endX + 60 * zoomFactor, y);
    gradient.addColorStop(0, partyColor);
    gradient.addColorStop(1, adjustBrightness(partyColor, -30));
    ctx.fillStyle = gradient;
    ctx.fillRect(endX, y, 60 * zoomFactor, height);
    
    // Draw party name
    ctx.fillStyle = '#ffffff';
    ctx.font = `${9 * zoomFactor}px IBM Plex Mono`;
    ctx.fillText(party.substring(0, 20), endX + 65 * zoomFactor, y + height/2);
    
    // Draw amount
    ctx.fillStyle = '#00cc44';
    ctx.font = `${8 * zoomFactor}px IBM Plex Mono`;
    ctx.fillText(`₹${amount.toFixed(1)}Cr`, endX, y - 5 * zoomFactor);
  });
  
  // Draw enhanced flows with better curves
  filteredData.forEach(t => {
    const donorIndex = topDonors.indexOf(t.donor);
    const partyIndex = topParties.indexOf(t.party);
    
    if (donorIndex !== -1 && partyIndex !== -1) {
      const donorY = 50 * zoomFactor + donorIndex * donorHeight;
      const partyY = 50 * zoomFactor + partyIndex * partyHeight;
      
      // Draw enhanced flow with bezier curve
      ctx.beginPath();
      ctx.moveTo(startX + 60 * zoomFactor, donorY + donorHeight/2);
      
      // Create smooth bezier curve
      const controlX1 = startX + 150 * zoomFactor;
      const controlY1 = donorY + donorHeight/2;
      const controlX2 = endX - 150 * zoomFactor;
      const controlY2 = partyY + partyHeight/2;
      
      ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, partyY + partyHeight/2);
      
      // Enhanced styling
      const opacity = Math.min(0.8, Math.max(0.2, t.amount / 15));
      ctx.strokeStyle = `rgba(255, 102, 0, ${opacity})`;
      ctx.lineWidth = Math.max(1 * zoomFactor, (t.amount / 3) * zoomFactor);
      ctx.stroke();
      
      // Add glow effect for large transactions
      if (t.amount > 5) {
        ctx.shadowColor = 'rgba(255, 102, 0, 0.5)';
        ctx.shadowBlur = 10 * zoomFactor;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }
  });
  
  // Draw title and statistics
  ctx.fillStyle = '#ff6600';
  ctx.font = `bold ${14 * zoomFactor}px IBM Plex Mono`;
  ctx.fillText('CORPORATE → POLITICAL PARTY FUNDING FLOWS', canvas.width/2 - 200 * zoomFactor, 30 * zoomFactor);
  
  ctx.fillStyle = '#666666';
  ctx.font = `${9 * zoomFactor}px IBM Plex Mono`;
  ctx.fillText(`Showing ${filteredData.length} transactions | Total: ₹${filteredData.reduce((sum, t) => sum + t.amount, 0).toFixed(2)} Cr`, canvas.width/2 - 150 * zoomFactor, canvas.height - 20 * zoomFactor);
}

function renderTreeMap(ctx) {
  const data = window.electoralBondsData;
  
  // Create tree map data structure
  const sectorData = data.getSectorAnalysis();
  const sectors = Object.keys(sectorData);
  
  // Calculate total for proportions
  const total = Object.values(sectorData).reduce((sum, sector) => sum + sector.amount, 0);
  
  // Simple treemap layout
  let x = 50, y = 50, width = 1300, height = 500;
  const colors = ['#ff6600', '#00ccff', '#00cc44', '#ffcc00', '#ff2222', '#cc00cc', '#ff9900', '#00ffcc'];
  
  sectors.forEach((sector, i) => {
    const sectorAmount = sectorData[sector].amount;
    const proportion = sectorAmount / total;
    
    // Calculate rectangle dimensions
    const rectWidth = width * Math.sqrt(proportion);
    const rectHeight = height * Math.sqrt(proportion);
    
    // Draw rectangle
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(x, y, rectWidth, rectHeight);
    
    // Draw border
    ctx.strokeStyle = '#2a2a2a';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, rectWidth, rectHeight);
    
    // Draw text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px IBM Plex Mono';
    ctx.fillText(sector, x + 10, y + 20);
    
    ctx.font = '10px IBM Plex Mono';
    ctx.fillText(`₹${sectorAmount.toFixed(1)} Cr`, x + 10, y + 35);
    ctx.fillText(`${(proportion * 100).toFixed(1)}%`, x + 10, y + 50);
    
    // Update position for next rectangle
    x += rectWidth + 10;
    if (x + rectWidth > 1350) {
      x = 50;
      y += rectHeight + 10;
    }
  });
  
  // Draw title
  ctx.fillStyle = '#ff6600';
  ctx.font = 'bold 14px IBM Plex Mono';
  ctx.fillText('SECTOR-WISE FUNDING DISTRIBUTION', 50, 30);
}

function renderBarCharts(ctx) {
  const data = window.electoralBondsData;
  
  // Draw multiple bar charts
  const chartHeight = 250;
  const chartWidth = 600;
  const margin = 50;
  
  // Chart 1: Top Donors
  const topDonors = data.getTopDonors(8);
  const maxDonorAmount = Math.max(...topDonors.map(d => d.totalAmount));
  
  ctx.fillStyle = '#ff6600';
  ctx.font = 'bold 12px IBM Plex Mono';
  ctx.fillText('TOP CORPORATE DONORS', margin, 30);
  
  topDonors.forEach((donor, i) => {
    const barHeight = (donor.totalAmount / maxDonorAmount) * 180;
    const x = margin + i * 70;
    const y = chartHeight - barHeight;
    
    // Draw bar
    const gradient = ctx.createLinearGradient(x, y, x, chartHeight);
    gradient.addColorStop(0, '#00ccff');
    gradient.addColorStop(1, '#0088cc');
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, 50, barHeight);
    
    // Draw value
    ctx.fillStyle = '#00cc44';
    ctx.font = '9px IBM Plex Mono';
    ctx.fillText(`₹${donor.totalAmount.toFixed(0)}`, x + 5, y - 5);
    
    // Draw label
    ctx.fillStyle = '#ffffff';
    ctx.save();
    ctx.translate(x + 25, chartHeight + 10);
    ctx.rotate(-Math.PI/4);
    ctx.fillText(donor.name.substring(0, 15), 0, 0);
    ctx.restore();
  });
  
  // Chart 2: Top Parties
  const topParties = data.getTopParties(8);
  const maxPartyAmount = Math.max(...topParties.map(p => p.totalAmount));
  
  ctx.fillStyle = '#ff6600';
  ctx.font = 'bold 12px IBM Plex Mono';
  ctx.fillText('TOP PARTY RECIPIENTS', margin + 700, 30);
  
  topParties.forEach((party, i) => {
    const barHeight = (party.totalAmount / maxPartyAmount) * 180;
    const x = margin + 700 + i * 70;
    const y = chartHeight - barHeight;
    
    // Draw bar with party color
    const partyData = data.parties.find(p => p.name === party.name);
    const partyColor = partyData ? partyData.color : '#ff6600';
    
    ctx.fillStyle = partyColor;
    ctx.fillRect(x, y, 50, barHeight);
    
    // Draw value
    ctx.fillStyle = '#00cc44';
    ctx.font = '9px IBM Plex Mono';
    ctx.fillText(`₹${party.totalAmount.toFixed(0)}`, x + 5, y - 5);
    
    // Draw label
    ctx.fillStyle = '#ffffff';
    ctx.fillText(party.abbreviation, x + 15, chartHeight + 20);
  });
  
  // Draw second row of charts
  const yOffset = 320;
  
  // Chart 3: Sector Analysis
  const sectorData = data.getSectorAnalysis();
  const sectors = Object.keys(sectorData);
  const maxSectorAmount = Math.max(...sectors.map(s => sectorData[s].amount));
  
  ctx.fillStyle = '#ff6600';
  ctx.font = 'bold 12px IBM Plex Mono';
  ctx.fillText('SECTOR ANALYSIS', margin, yOffset);
  
  sectors.forEach((sector, i) => {
    const barHeight = (sectorData[sector].amount / maxSectorAmount) * 180;
    const x = margin + i * 150;
    const y = yOffset + chartHeight - barHeight;
    
    // Draw bar
    const colors = ['#ff6600', '#00ccff', '#00cc44', '#ffcc00', '#ff2222'];
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(x, y, 100, barHeight);
    
    // Draw value
    ctx.fillStyle = '#00cc44';
    ctx.font = '9px IBM Plex Mono';
    ctx.fillText(`₹${sectorData[sector].amount.toFixed(0)}`, x + 10, y - 5);
    
    // Draw label
    ctx.fillStyle = '#ffffff';
    ctx.font = '8px IBM Plex Mono';
    ctx.fillText(sector.substring(0, 12), x + 5, yOffset + chartHeight + 20);
  });
}

function renderTimeline(ctx) {
  const data = window.electoralBondsData;
  const yearlyData = data.getYearlyAnalysis();
  const years = Object.keys(yearlyData).sort();
  
  // Draw timeline
  const startX = 100;
  const endX = 1300;
  const startY = 300;
  const maxHeight = 200;
  
  // Find max amount for scaling
  const maxAmount = Math.max(...years.map(year => yearlyData[year].amount));
  
  // Draw axes
  ctx.strokeStyle = '#666666';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, startY);
  ctx.stroke();
  
  // Draw timeline bars
  const barWidth = (endX - startX) / years.length;
  
  years.forEach((year, i) => {
    const yearData = yearlyData[year];
    const barHeight = (yearData.amount / maxAmount) * maxHeight;
    const x = startX + i * barWidth;
    const y = startY - barHeight;
    
    // Draw bar
    const gradient = ctx.createLinearGradient(x, y, x, startY);
    gradient.addColorStop(0, '#00cc44');
    gradient.addColorStop(1, '#008844');
    ctx.fillStyle = gradient;
    ctx.fillRect(x + 10, y, barWidth - 20, barHeight);
    
    // Draw year label
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px IBM Plex Mono';
    ctx.fillText(year, x + barWidth/2 - 15, startY + 20);
    
    // Draw amount
    ctx.fillStyle = '#00cc44';
    ctx.font = '9px IBM Plex Mono';
    ctx.fillText(`₹${yearData.amount.toFixed(0)}Cr`, x + barWidth/2 - 20, y - 5);
    
    // Draw transaction count
    ctx.fillStyle = '#666666';
    ctx.font = '8px IBM Plex Mono';
    ctx.fillText(`${yearData.count} tx`, x + barWidth/2 - 15, y + 15);
  });
  
  // Draw title
  ctx.fillStyle = '#ff6600';
  ctx.font = 'bold 14px IBM Plex Mono';
  ctx.fillText('YEARLY FUNDING TIMELINE', startX, 30);
  
  // Draw statistics
  ctx.fillStyle = '#666666';
  ctx.font = '10px IBM Plex Mono';
  ctx.fillText(`Peak Year: ${years.sort((a,b) => yearlyData[b].amount - yearlyData[a].amount)[0]}`, startX, 550);
  ctx.fillText(`Total Years: ${years.length}`, startX + 200, 550);
  ctx.fillText(`Average/Year: ₹${(data.metadata.totalAmount / years.length).toFixed(2)} Cr`, startX + 400, 550);
}

function renderNetworkGraph(ctx) {
  const data = window.electoralBondsData;
  
  // Create network nodes
  const donors = data.getTopDonors(15);
  const parties = data.getTopParties(10);
  
  // Position nodes in a circular layout
  const centerX = 700;
  const centerY = 300;
  const radius = 200;
  
  // Draw party nodes (center circle)
  parties.forEach((party, i) => {
    const angle = (i / parties.length) * Math.PI * 2;
    const x = centerX + Math.cos(angle) * radius * 0.5;
    const y = centerY + Math.sin(angle) * radius * 0.5;
    
    // Draw node
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    const partyData = data.parties.find(p => p.name === party.name);
    ctx.fillStyle = partyData ? partyData.color : '#ff6600';
    ctx.fill();
    
    // Draw label
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px IBM Plex Mono';
    ctx.fillText(party.abbreviation, x - 15, y + 3);
  });
  
  // Draw donor nodes (outer circle)
  donors.forEach((donor, i) => {
    const angle = (i / donors.length) * Math.PI * 2;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    
    // Draw node
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#00ccff';
    ctx.fill();
    
    // Draw label
    ctx.fillStyle = '#ffffff';
    ctx.font = '8px IBM Plex Mono';
    ctx.fillText(donor.name.substring(0, 10), x - 20, y + 3);
  });
  
  // Draw connections
  filteredData.forEach(t => {
    const donorIndex = donors.findIndex(d => d.name === t.donor);
    const partyIndex = parties.findIndex(p => p.name === t.party);
    
    if (donorIndex !== -1 && partyIndex !== -1) {
      const donorAngle = (donorIndex / donors.length) * Math.PI * 2;
      const partyAngle = (partyIndex / parties.length) * Math.PI * 2;
      
      const donorX = centerX + Math.cos(donorAngle) * radius;
      const donorY = centerY + Math.sin(donorAngle) * radius;
      const partyX = centerX + Math.cos(partyAngle) * radius * 0.5;
      const partyY = centerY + Math.sin(partyAngle) * radius * 0.5;
      
      // Draw connection
      ctx.beginPath();
      ctx.moveTo(donorX, donorY);
      ctx.lineTo(partyX, partyY);
      
      const opacity = Math.min(0.6, t.amount / 10);
      ctx.strokeStyle = `rgba(255, 102, 0, ${opacity})`;
      ctx.lineWidth = Math.max(1, t.amount / 5);
      ctx.stroke();
    }
  });
  
  // Draw title
  ctx.fillStyle = '#ff6600';
  ctx.font = 'bold 14px IBM Plex Mono';
  ctx.fillText('NETWORK CONNECTIONS', centerX - 100, 30);
}

// Helper functions
function adjustBrightness(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function getElementAtPosition(x, y) {
  // This would need to be implemented based on the current visualization
  // For now, return null
  return null;
}

function formatTooltip(element) {
  return `<div style="color:var(--orange);font-weight:bold;">${element.name}</div>
          <div>Amount: ₹${element.amount.toFixed(2)} Cr</div>
          <div>Transactions: ${element.count}</div>`;
}

function updateVisualization() {
  const data = window.electoralBondsData;
  
  // Get filter values
  const amountFilter = document.getElementById('amount-filter')?.value || 'all';
  const partyFilter = document.getElementById('party-filter')?.value || 'all';
  const sectorFilter = document.getElementById('sector-filter')?.value || 'all';
  const stateFilter = document.getElementById('state-filter')?.value || 'all';
  const startDate = document.getElementById('start-date')?.value;
  const endDate = document.getElementById('end-date')?.value;
  
  // Apply filters
  currentFilters = {
    amount: amountFilter,
    party: partyFilter,
    sector: sectorFilter,
    state: stateFilter,
    startDate: startDate,
    endDate: endDate
  };
  
  filteredData = data.transactions;
  
  // Apply amount filter
  if (amountFilter !== 'all') {
    if (amountFilter === '0-1') filteredData = filteredData.filter(t => t.amount >= 0 && t.amount <= 1);
    else if (amountFilter === '1-5') filteredData = filteredData.filter(t => t.amount > 1 && t.amount <= 5);
    else if (amountFilter === '5-10') filteredData = filteredData.filter(t => t.amount > 5 && t.amount <= 10);
    else if (amountFilter === '10+') filteredData = filteredData.filter(t => t.amount > 10);
  }
  
  // Apply other filters
  if (partyFilter !== 'all') {
    filteredData = filteredData.filter(t => t.party.includes(partyFilter));
  }
  
  if (sectorFilter !== 'all') {
    filteredData = data.getTransactionsBySector(sectorFilter);
  }
  
  if (stateFilter !== 'all') {
    filteredData = filteredData.filter(t => t.state === stateFilter);
  }
  
  if (startDate) {
    filteredData = filteredData.filter(t => t.purchaseDate >= startDate);
  }
  
  if (endDate) {
    filteredData = filteredData.filter(t => t.purchaseDate <= endDate);
  }
  
  // Re-render visualization
  renderVisualization();
}

function resetFilters() {
  document.getElementById('amount-filter').value = 'all';
  document.getElementById('party-filter').value = 'all';
  document.getElementById('sector-filter').value = 'all';
  document.getElementById('state-filter').value = 'all';
  document.getElementById('start-date').value = '';
  document.getElementById('end-date').value = '';
  
  currentFilters = {};
  filteredData = window.electoralBondsData.transactions;
  renderVisualization();
}

function performSearch() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  if (!searchTerm) return;
  
  const data = window.electoralBondsData;
  const searchResults = data.searchTransactions(searchTerm);
  
  filteredData = searchResults;
  renderVisualization();
  
  // Update search result count
  const tooltip = document.getElementById('tooltip');
  if (tooltip) {
    tooltip.style.display = 'block';
    tooltip.style.left = '50%';
    tooltip.style.top = '100px';
    tooltip.innerHTML = `<div style="color:var(--orange);">Found ${searchResults.length} transactions</div>`;
    setTimeout(() => {
      tooltip.style.display = 'none';
    }, 2000);
  }
}

function performComparison() {
  const type = document.getElementById('compare-type').value;
  const entity1 = document.getElementById('entity1').value;
  const entity2 = document.getElementById('entity2').value;
  
  const data = window.electoralBondsData;
  const comparison = data.getComparisonData(entity1, entity2, type);
  
  if (comparison) {
    const resultDiv = document.getElementById('comparison-result');
    resultDiv.innerHTML = `
      <div style="color:var(--cyan);margin-bottom:10px;">
        <strong>${comparison.entity1.name}</strong> vs <strong>${comparison.entity2.name}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
        <span>Amount Difference:</span>
        <span style="color:var(--green);">₹${comparison.comparison.amountDiff.toFixed(2)} Cr</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
        <span>Ratio:</span>
        <span style="color:var(--yellow);">${comparison.comparison.amountRatio.toFixed(2)}x</span>
      </div>
      ${type === 'party' ? `
        <div style="display:flex;justify-content:space-between;">
          <span>% Difference:</span>
          <span style="color:var(--highlight);">${comparison.comparison.percentageDiff.toFixed(1)}%</span>
        </div>
      ` : ''}
    `;
  }
}

function showDonorDetails(donorName) {
  const data = window.electoralBondsData;
  const donor = data.donors.find(d => d.name === donorName);
  const transactions = data.getTransactionsByDonor(donorName);
  
  if (donor) {
    alert(`Donor Details:\n\nName: ${donor.name}\nSector: ${donor.sector}\nState: ${donor.state}\nTotal Amount: ₹${donor.totalAmount.toFixed(2)} Cr\nTransactions: ${donor.transactions}\nMarket Cap: ${donor.marketCap || 'N/A'}\n\nRecent Transactions: ${transactions.length}`);
  }
}

function showPartyDetails(partyName) {
  const data = window.electoralBondsData;
  const party = data.parties.find(p => p.name === partyName);
  const transactions = data.getTransactionsByParty(partyName);
  
  if (party) {
    alert(`Party Details:\n\nName: ${party.name}\nAbbreviation: ${party.abbreviation}\nIdeology: ${party.ideology}\nHeadquarters: ${party.headquarters}\nFounded: ${party.founded}\nTotal Amount: ₹${party.totalAmount.toFixed(2)} Cr\nTransactions: ${party.transactions}\nShare: ${party.percentage}%\n\nRecent Transactions: ${transactions.length}`);
  }
}

function zoomIn() {
  currentZoom = Math.min(currentZoom * 1.2, 3);
  renderVisualization();
}

function zoomOut() {
  currentZoom = Math.max(currentZoom / 1.2, 0.5);
  renderVisualization();
}

function resetZoom() {
  currentZoom = 1;
  renderVisualization();
}

function exportData() {
  const data = window.electoralBondsData;
  const exportResult = data.exportFilteredData(currentFilters);
  
  // Create CSV content
  let csvContent = "Bond Code,Donor,Party,Amount,Purchase Date,Encashment Date,Denomination,Branch,State,Delay\n";
  
  exportResult.transactions.forEach(t => {
    csvContent += `"${t.bondCode}","${t.donor}","${t.party}",${t.amount},"${t.purchaseDate}","${t.encashmentDate}","${t.denomination}","${t.branch}","${t.state}",${t.delay || 0}\n`;
  });
  
  // Create download link
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', `electoral_bonds_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Show success message
  const tooltip = document.getElementById('tooltip');
  if (tooltip) {
    tooltip.style.display = 'block';
    tooltip.style.left = '50%';
    tooltip.style.top = '100px';
    tooltip.innerHTML = `<div style="color:var(--green);">Exported ${exportResult.summary.totalCount} transactions</div>`;
    setTimeout(() => {
      tooltip.style.display = 'none';
    }, 2000);
  }
}

// ============ ECONOMIC-POLITICAL CORRELATION ============
function renderCorrelation() {
  const content = document.getElementById('content-area');
  
  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">DATA POINTS</div>
          <div class="stat-value">${INDIA_POLITICS_DATA.economicData.length}</div>
          <div class="stat-sub">1951-2024</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">ELECTION YEARS</div>
          <div class="stat-value">${INDIA_POLITICS_DATA.elections.length}</div>
          <div class="stat-sub">Lok Sabha</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">GDP RANGE</div>
          <div class="stat-value" style="font-size:10px;">-5.8% to +8.8%</div>
          <div class="stat-sub">Annual Growth</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">INFLATION PEAK</div>
          <div class="stat-value" style="color:var(--orange);">28.6%</div>
          <div class="stat-sub">1974 Crisis</div>
        </div>
      </div>
      
      <!-- DUAL-AXIS CHART -->
      <div class="panel" style="flex:1;margin:1px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ ECONOMIC ↔ POLITICAL CORRELATION DASHBOARD</span>
          <span class="panel-meta">GDP GROWTH | INFLATION | UNEMPLOYMENT vs ELECTION OUTCOMES | RULING PARTY TENURE</span>
        </div>
        <div class="panel-body" style="padding:0;">
          <canvas id="correlation-chart" width="1200" height="600" style="width:100%;height:100%;"></canvas>
        </div>
      </div>
      
      <!-- LEGEND AND CONTROLS -->
      <div style="display:flex;gap:1px;flex-shrink:0;">
        <div class="panel" style="flex:1;">
          <div class="panel-header">
            <span class="panel-title">◆ ECONOMIC INDICATORS</span>
          </div>
          <div class="panel-body">
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              <div style="display:flex;align-items:center;gap:4px;">
                <div style="width:12px;height:2px;background:var(--green);"></div>
                <span style="font-size:10px;">GDP Growth</span>
              </div>
              <div style="display:flex;align-items:center;gap:4px;">
                <div style="width:12px;height:2px;background:var(--orange);"></div>
                <span style="font-size:10px;">Inflation</span>
              </div>
              <div style="display:flex;align-items:center;gap:4px;">
                <div style="width:12px;height:2px;background:var(--cyan);"></div>
                <span style="font-size:10px;">Unemployment</span>
              </div>
            </div>
          </div>
        </div>
        <div class="panel" style="flex:1;">
          <div class="panel-header">
            <span class="panel-title">◆ POLITICAL EVENTS</span>
          </div>
          <div class="panel-body">
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              <div style="display:flex;align-items:center;gap:4px;">
                <div style="width:12px;height:12px;background:var(--green);border:1px solid var(--border);"></div>
                <span style="font-size:10px;">INC Victory</span>
              </div>
              <div style="display:flex;align-items:center;gap:4px;">
                <div style="width:12px;height:12px;background:var(--orange);border:1px solid var(--border);"></div>
                <span style="font-size:10px;">BJP Victory</span>
              </div>
              <div style="display:flex;align-items:center;gap:4px;">
                <div style="width:12px;height:12px;background:var(--gray-3);border:1px solid var(--border);"></div>
                <span style="font-size:10px;">Other Victory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Draw the correlation chart
  setTimeout(() => drawCorrelationChart(), 100);
}

function drawCorrelationChart() {
  const canvas = document.getElementById('correlation-chart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Data
  const economicData = INDIA_POLITICS_DATA.economicData;
  const elections = INDIA_POLITICS_DATA.elections;
  
  // Chart dimensions with better spacing
  const margin = { top: 60, right: 120, bottom: 80, left: 100 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // Scales
  const years = economicData.map(d => d.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  
  const xScale = (year) => margin.left + ((year - minYear) / (maxYear - minYear)) * chartWidth;
  
  // Left Y-axis: Economic indicators (-10% to 30%)
  const leftMin = -10;
  const leftMax = 30;
  const leftYScale = (value) => margin.top + chartHeight - ((value - leftMin) / (leftMax - leftMin)) * chartHeight;
  
  // Right Y-axis: Political seats (0 to 550)
  const rightMin = 0;
  const rightMax = 550;
  const rightYScale = (value) => margin.top + chartHeight - ((value - rightMin) / (rightMax - rightMin)) * chartHeight;
  
  // Draw chart background
  ctx.fillStyle = '#0a0a0a'; // Slightly lighter than main bg
  ctx.fillRect(margin.left, margin.top, chartWidth, chartHeight);
  
  // Draw axes
  ctx.strokeStyle = '#444444'; // brighter border
  ctx.lineWidth = 2;
  
  // X-axis
  ctx.beginPath();
  ctx.moveTo(margin.left, height - margin.bottom);
  ctx.lineTo(width - margin.right, height - margin.bottom);
  ctx.stroke();
  
  // Left Y-axis
  ctx.beginPath();
  ctx.moveTo(margin.left, margin.top);
  ctx.lineTo(margin.left, height - margin.bottom);
  ctx.stroke();
  
  // Right Y-axis
  ctx.beginPath();
  ctx.moveTo(width - margin.right, margin.top);
  ctx.lineTo(width - margin.right, height - margin.bottom);
  ctx.stroke();
  
  // Grid lines - reduced for cleaner look
  ctx.strokeStyle = '#1a1a1a';
  ctx.setLineDash([1, 3]);
  ctx.lineWidth = 1;
  
  // Vertical grid lines (every 10 years)
  for (let year = minYear; year <= maxYear; year += 10) {
    const x = xScale(year);
    ctx.beginPath();
    ctx.moveTo(x, margin.top);
    ctx.lineTo(x, height - margin.bottom);
    ctx.stroke();
    
    // Year labels
    ctx.fillStyle = '#888888';
    ctx.font = '9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(year.toString(), x, height - margin.bottom + 20);
  }
  
  // Horizontal grid lines for left axis (every 10%)
  for (let val = leftMin; val <= leftMax; val += 10) {
    const y = leftYScale(val);
    ctx.beginPath();
    ctx.moveTo(margin.left, y);
    ctx.lineTo(width - margin.right, y);
    ctx.stroke();
    
    // Left Y labels
    ctx.fillStyle = '#888888';
    ctx.font = '9px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(val + '%', margin.left - 10, y + 3);
  }
  
  // Horizontal grid lines for right axis (every 150 seats)
  for (let val = 0; val <= rightMax; val += 150) {
    const y = rightYScale(val);
    ctx.beginPath();
    ctx.moveTo(margin.left, y);
    ctx.lineTo(width - margin.right, y);
    ctx.stroke();
    
    // Right Y labels
    ctx.fillStyle = '#888888';
    ctx.font = '9px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(val.toString(), width - margin.right + 10, y + 3);
  }
  
  ctx.setLineDash([]);
  
  // Axis labels
  ctx.fillStyle = '#ff6600';
  ctx.font = '10px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('ECONOMIC INDICATORS (%)', margin.left + chartWidth/2, margin.top - 15);
  
  ctx.fillText('YEAR', width/2, height - 10);
  
  ctx.save();
  ctx.translate(20, height/2);
  ctx.rotate(-Math.PI/2);
  ctx.fillText('POLITICAL SEATS', 0, 0);
  ctx.restore();
  
  // Draw economic lines with smoother appearance
  const drawLine = (data, key, color) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    let started = false;
    
    data.forEach(point => {
      if (point[key] !== null && point[key] !== undefined) {
        const x = xScale(point.year);
        const y = leftYScale(point[key]);
        
        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else {
          ctx.lineTo(x, y);
        }
      }
    });
    
    ctx.stroke();
  };
  
  // GDP Growth
  drawLine(economicData, 'gdpGrowth', '#00cc44'); // --green
  
  // Inflation
  drawLine(economicData, 'inflation', '#ff6600'); // --orange
  
  // Unemployment
  drawLine(economicData, 'unemployment', '#00ccff'); // --cyan
  
  // Draw election bars - thinner and semi-transparent
  elections.forEach(election => {
    const x = xScale(election.year);
    const barWidth = 4; // thinner bars
    const barHeight = rightYScale(election.seats) - rightYScale(rightMax);
    
    let color = '#666666'; // --gray-3
    if (election.winner === 'INC') color = '#00cc44'; // --green
    else if (election.winner === 'BJP') color = '#ff6600'; // --orange
    
    // Semi-transparent fill
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = color;
    ctx.fillRect(x - barWidth/2, rightYScale(election.seats), barWidth, chartHeight - (rightYScale(election.seats) - margin.top));
    ctx.globalAlpha = 1;
    
    // Border for bars
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.strokeRect(x - barWidth/2, rightYScale(election.seats), barWidth, chartHeight - (rightYScale(election.seats) - margin.top));
    
    // Only show labels for major elections (every 10 years or significant wins)
    const isMajor = election.year % 10 === 0 || election.seats > 300 || election.seats < 100;
    if (isMajor) {
      // Election year label - positioned above chart area
      ctx.fillStyle = '#ffcc00'; // --yellow
      ctx.font = '7px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(election.year.toString(), x, margin.top - 5);
      
      // Seats label - inside bar if space allows
      const barTop = rightYScale(election.seats);
      if (barTop > margin.top + 15) {
        ctx.fillStyle = color;
        ctx.fillText(election.seats.toString(), x, barTop - 3);
      }
    }
  });
  
  // Draw legend on chart
  const legendX = margin.left + 20;
  const legendY = margin.top + 20;
  const legendSpacing = 15;
  
  // Legend background
  ctx.fillStyle = '#000000';
  ctx.fillRect(legendX - 5, legendY - 12, 120, 50);
  ctx.strokeStyle = '#444444';
  ctx.lineWidth = 1;
  ctx.strokeRect(legendX - 5, legendY - 12, 120, 50);
  
  ctx.font = '8px monospace';
  ctx.textAlign = 'left';
  
  // Economic indicators
  ctx.fillStyle = '#00cc44';
  ctx.fillText('■ GDP Growth', legendX, legendY);
  
  ctx.fillStyle = '#ff6600';
  ctx.fillText('■ Inflation', legendX, legendY + legendSpacing);
  
  ctx.fillStyle = '#00ccff';
  ctx.fillText('■ Unemployment', legendX, legendY + legendSpacing * 2);
  
  // Political events
  ctx.fillStyle = '#ffffff';
  ctx.fillText('POLITICAL:', legendX, legendY + legendSpacing * 3);
  
  ctx.fillStyle = '#00cc44';
  ctx.fillText('█ INC Victory', legendX, legendY + legendSpacing * 4);
  
}

// ============ SENTIMENT HEATMAP ============
function renderSentiment() {
  const content = document.getElementById('content-area');

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">SENTIMENT SOURCE</div>
          <div class="stat-value" style="font-size:12px;">NEWS RSS</div>
          <div class="stat-sub">Google News + Indian Sources</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">ANALYSIS METHOD</div>
          <div class="stat-value" style="font-size:12px;">KEYWORD</div>
          <div class="stat-sub">Positive/Negative/Neutral</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">UPDATE FREQUENCY</div>
          <div class="stat-value">5 MIN</div>
          <div class="stat-sub">Auto-refresh</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">STATUS</div>
          <div class="stat-value" style="color:var(--green);" id="sentiment-status">LOADING...</div>
          <div class="stat-sub" id="sentiment-last-update">Fetching data...</div>
        </div>
      </div>

      <div class="panel" style="flex:1;margin:1px;overflow:hidden;">
        <div class="panel-header">
          <span class="panel-title">◆ POLITICAL SENTIMENT HEATMAP</span>
          <span class="panel-meta" id="sentiment-meta">ANALYZING NEWS ARTICLES...</span>
        </div>
        <div class="panel-body" id="sentiment-heatmap" style="padding:0;">
          <div style="padding:40px;color:var(--gray-3);text-align:center;">
            <div style="color:var(--orange);font-size:24px;margin-bottom:8px;">◆</div>
            LOADING SENTIMENT ANALYSIS FROM NEWS FEEDS...<br>
            <span style="font-size:12px;color:var(--gray-2);">This may take a few seconds</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Load sentiment data
  loadSentimentData();
}

async function loadSentimentData() {
  if (!window.indiaAPI || !window.indiaAPI.getSentimentHeatmap) {
    document.getElementById('sentiment-status').textContent = 'API UNAVAILABLE';
    document.getElementById('sentiment-status').style.color = 'var(--red)';
    return;
  }

  try {
    const sentimentData = await window.indiaAPI.getSentimentHeatmap();

    if (!sentimentData || Object.keys(sentimentData).length === 0) {
      document.getElementById('sentiment-heatmap').innerHTML = `
        <div style="padding:40px;color:var(--gray-3);text-align:center;">
          <div style="color:var(--red);font-size:24px;margin-bottom:8px;">⚠</div>
          UNABLE TO LOAD SENTIMENT DATA<br>
          <span style="font-size:12px;color:var(--gray-2);">Check RSS feeds or try again later</span>
        </div>
      `;
      document.getElementById('sentiment-status').textContent = 'ERROR';
      document.getElementById('sentiment-status').style.color = 'var(--red)';
      return;
    }

    // Update status
    document.getElementById('sentiment-status').textContent = 'ACTIVE';
    document.getElementById('sentiment-status').style.color = 'var(--green)';
    document.getElementById('sentiment-last-update').textContent = new Date().toLocaleTimeString('en-IN');

    // Render heatmap
    renderSentimentHeatmap(sentimentData);

  } catch (error) {
    console.log('Sentiment data loading failed:', error);
    document.getElementById('sentiment-status').textContent = 'ERROR';
    document.getElementById('sentiment-status').style.color = 'var(--red)';
    document.getElementById('sentiment-heatmap').innerHTML = `
      <div style="padding:40px;color:var(--gray-3);text-align:center;">
        <div style="color:var(--red);font-size:24px;margin-bottom:8px;">⚠</div>
        ERROR LOADING SENTIMENT DATA<br>
        <span style="font-size:12px;color:var(--gray-2);">${error.message}</span>
      </div>
    `;
  }
}

function renderSentimentHeatmap(sentimentData) {
  const container = document.getElementById('sentiment-heatmap');
  const entities = Object.values(sentimentData);

  // Sort by total articles (most mentioned first)
  entities.sort((a, b) => b.totalArticles - a.totalArticles);

  // Generate HTML for each entity
  const entityCards = entities.slice(0, 16).map(entity => {
    const data = sentimentData[entity.entity.name || entity.entity.code];
    if (!data) return '';

    const total = data.positive + data.negative + data.neutral;
    const positivePercent = total > 0 ? Math.round((data.positive / total) * 100) : 0;
    const negativePercent = total > 0 ? Math.round((data.negative / total) * 100) : 0;
    const neutralPercent = total > 0 ? Math.round((data.neutral / total) * 100) : 0;

    const entityName = entity.entity.name || entity.entity.code;
    const partyColor = entity.entity.color || '#666666';

    const recentArticleHTML = data.recentArticles.length > 0 ? 
      `<div style="margin-top:6px;border-top:1px solid var(--border);padding-top:4px;">
        <div style="font-size:8px;color:var(--gray-3);margin-bottom:2px;">RECENT:</div>
        <div style="font-size:7px;color:var(--gray-1);line-height:1.2;max-height:30px;overflow:hidden;">
          ${data.recentArticles[0].title.slice(0, 60)}...
        </div>
      </div>` : '';

    return `
      <div class="sentiment-card" style="border:1px solid var(--border);background:var(--bg-panel);padding:8px;">
        <div style="display:flex;align-items:center;margin-bottom:6px;">
          <div style="width:12px;height:12px;background:${partyColor};border-radius:50%;margin-right:6px;"></div>
          <div style="font-weight:700;font-size:11px;color:${partyColor};">${entityName.toUpperCase()}</div>
        </div>

        <div style="margin-bottom:4px;">
          <div style="font-size:9px;color:var(--gray-2);margin-bottom:2px;">ARTICLES: ${data.totalArticles}</div>
          <div style="display:flex;gap:1px;height:6px;border-radius:3px;overflow:hidden;">
            <div style="background:var(--green);width:${positivePercent}%;"></div>
            <div style="background:var(--red);width:${negativePercent}%;"></div>
            <div style="background:var(--gray-3);width:${neutralPercent}%;"></div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;font-size:8px;text-align:center;gap:2px;">
          <div style="color:var(--green);">
            <div style="font-weight:700;">${positivePercent}%</div>
            <div>POS</div>
          </div>
          <div style="color:var(--red);">
            <div style="font-weight:700;">${negativePercent}%</div>
            <div>NEG</div>
          </div>
          <div style="color:var(--gray-2);">
            <div style="font-weight:700;">${neutralPercent}%</div>
            <div>NEU</div>
          </div>
        </div>

        ${recentArticleHTML}
      </div>
    `;
  }).join('');

  const moreEntitiesHTML = entities.length > 16 ? 
    `<div style="margin-top:12px;padding:8px;background:var(--bg-panel-alt);border:1px solid var(--border);text-align:center;font-size:10px;color:var(--gray-2);">
      Showing top 16 entities by article mentions. ${entities.length - 16} more entities available.
    </div>` : '';

  const heatmapHTML = `
    <div style="padding:12px;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;">
        ${entityCards}
      </div>
      ${moreEntitiesHTML}
    </div>
  `;

  container.innerHTML = heatmapHTML;

  // Update meta
  const totalArticles = entities.reduce((sum, e) => sum + e.totalArticles, 0);
  document.getElementById('sentiment-meta').textContent = `${entities.length} ENTITIES · ${totalArticles} ARTICLES ANALYZED`;
}

// ============ POLITICAL FUNDING X-RAY ============
function renderPoliticalFunding() {
  const content = document.getElementById('content-area');
  const data = window.politicalFundingData;

  if (!data) {
    content.innerHTML = '<div class="screen active"><div style="padding:40px;text-align:center;color:var(--red);">POLITICAL FUNDING DATA NOT LOADED</div></div>';
    return;
  }

  const totalAmount = data.donations.reduce((sum, d) => sum + d.amount, 0);
  const totalTransactions = data.donations.length;
  const uniqueDonors = new Set(data.donations.map(d => d.donor)).size;
  const uniqueParties = new Set(data.donations.map(d => d.party)).size;

  content.innerHTML = `
    <div class="screen active" style="overflow:hidden;">
      <!-- STATS ROW -->
      <div class="stat-grid" style="grid-template-columns:repeat(5,1fr);flex-shrink:0;">
        <div class="stat-card">
          <div class="stat-label">TOTAL DONATIONS</div>
          <div class="stat-value">₹${totalAmount.toLocaleString('en-IN')} Cr</div>
          <div class="stat-sub">Form 24A/24B Disclosures</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TRANSACTIONS</div>
          <div class="stat-value">${totalTransactions}</div>
          <div class="stat-sub">Above ₹20,000</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">UNIQUE DONORS</div>
          <div class="stat-value">${uniqueDonors}</div>
          <div class="stat-sub">Corporations & Individuals</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">PARTIES RECEIVED</div>
          <div class="stat-value">${uniqueParties}</div>
          <div class="stat-sub">National Parties</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">PERIOD</div>
          <div class="stat-value">${data.metadata.period}</div>
          <div class="stat-sub">ECI Disclosures</div>
        </div>
      </div>

      <!-- CONTROLS ROW -->
      <div style="display:flex;gap:8px;padding:8px;background:var(--bg-panel);border-bottom:1px solid var(--border);flex-shrink:0;">
        <div style="display:flex;flex-direction:column;gap:2px;">
          <label style="font-size:8px;color:var(--gray-2);">YEAR</label>
          <select id="funding-year-filter" style="background:var(--bg-panel);color:var(--white);border:1px solid var(--border);padding:4px;font-size:10px;">
            <option value="ALL">ALL YEARS</option>
            ${[...new Set(data.donations.map(d => d.year))].sort().reverse().map(y => `<option value="${y}">${y}</option>`).join('')}
          </select>
        </div>
        <div style="display:flex;flex-direction:column;gap:2px;">
          <label style="font-size:8px;color:var(--gray-2);">ELECTION CYCLE</label>
          <select id="funding-cycle-filter" style="background:var(--bg-panel);color:var(--white);border:1px solid var(--border);padding:4px;font-size:10px;">
            <option value="ALL">ALL CYCLES</option>
            ${data.electionCycles.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
          </select>
        </div>
        <div style="display:flex;flex-direction:column;gap:2px;">
          <label style="font-size:8px;color:var(--gray-2);">SEARCH</label>
          <input id="funding-search" type="text" placeholder="Donor or Party..." style="background:var(--bg-panel);color:var(--white);border:1px solid var(--border);padding:4px;font-size:10px;width:120px;">
        </div>
        <div style="display:flex;flex-direction:column;gap:2px;">
          <label style="font-size:8px;color:var(--gray-2);">MIN AMOUNT (Cr)</label>
          <input id="funding-min-amount" type="number" placeholder="0" style="background:var(--bg-panel);color:var(--white);border:1px solid var(--border);padding:4px;font-size:10px;width:80px;">
        </div>
        <div style="margin-left:auto;display:flex;flex-direction:column;gap:2px;">
          <label style="font-size:8px;color:var(--gray-2);">GRAPH MODE</label>
          <button id="funding-toggle-view" style="background:var(--bg-panel);color:var(--cyan);border:1px solid var(--border);padding:4px;font-size:10px;cursor:pointer;">NETWORK VIEW</button>
        </div>
      </div>

      <!-- MAIN CONTENT -->
      <div style="display:grid;grid-template-columns:2fr 1fr;flex:1;min-height:0;gap:1px;overflow:hidden;">
        <!-- GRAPH CANVAS -->
        <div class="panel" style="min-height:0;">
          <div class="panel-header">
            <span class="panel-title">◆ DONOR NETWORK GRAPH</span>
            <span class="panel-meta" id="graph-meta">DONORS ←→ PARTIES · EDGES = DONATION AMOUNTS</span>
          </div>
          <div class="panel-body" style="padding:0;height:100%;position:relative;">
            <canvas id="funding-canvas" style="width:100%;height:100%;background:var(--bg-main);cursor:crosshair;"></canvas>
            <div id="funding-tooltip" style="position:absolute;background:var(--bg-panel);border:1px solid var(--border);padding:4px;font-size:10px;pointer-events:none;display:none;z-index:1000;"></div>
          </div>
        </div>

        <!-- DONATIONS TABLE -->
        <div class="panel" style="min-height:0;">
          <div class="panel-header">
            <span class="panel-title">◆ FILTERED DONATIONS</span>
            <span class="panel-meta" id="table-meta">SHOWING ALL · SORTED BY AMOUNT</span>
          </div>
          <div class="panel-body full-scroll" style="max-height:none;">
            <table class="bt-table">
              <thead>
                <tr>
                  <th>DONOR</th>
                  <th>PARTY</th>
                  <th>AMOUNT (Cr)</th>
                  <th>YEAR</th>
                  <th>FORM</th>
                </tr>
              </thead>
              <tbody id="funding-table-body">
                ${renderFundingTable(data.donations)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize filters and graph
  initFundingFilters();
  drawFundingGraph();
}

function renderFundingTable(donations) {
  return donations.sort((a,b) => b.amount - a.amount).slice(0, 50).map(d => {
    const donor = window.politicalFundingData.donors.find(dn => dn.id === d.donor) || { name: d.donor };
    const party = window.politicalFundingData.parties.find(p => p.id === d.party) || { name: d.party, abbr: d.party };
    return `
      <tr>
        <td class="td-name" style="max-width:120px;">${donor.name}</td>
        <td><span style="background:${party.color};color:#000;padding:1px 4px;font-size:8px;font-weight:700;">${party.abbr}</span></td>
        <td class="td-cyan">₹${d.amount}</td>
        <td class="td-yellow">${d.year}</td>
        <td class="td-gray">${d.form}</td>
      </tr>
    `;
  }).join('');
}

function initFundingFilters() {
  const yearFilter = document.getElementById('funding-year-filter');
  const cycleFilter = document.getElementById('funding-cycle-filter');
  const searchInput = document.getElementById('funding-search');
  const minAmountInput = document.getElementById('funding-min-amount');

  const applyFilters = () => {
    const year = yearFilter.value;
    const cycle = cycleFilter.value;
    const search = searchInput.value.toLowerCase();
    const minAmount = parseFloat(minAmountInput.value) || 0;

    let filtered = window.politicalFundingData.donations.filter(d => {
      if (year !== 'ALL' && d.year != year) return false;
      if (cycle !== 'ALL' && d.electionCycle !== cycle) return false;
      if (minAmount > 0 && d.amount < minAmount) return false;
      if (search) {
        const donor = window.politicalFundingData.donors.find(dn => dn.id === d.donor) || { name: d.donor };
        const party = window.politicalFundingData.parties.find(p => p.id === d.party) || { name: d.party };
        if (!donor.name.toLowerCase().includes(search) && !party.name.toLowerCase().includes(search)) return false;
      }
      return true;
    });

    document.getElementById('funding-table-body').innerHTML = renderFundingTable(filtered);
    document.getElementById('table-meta').textContent = `SHOWING ${filtered.length} · FILTERED`;
    drawFundingGraph(filtered);
  };

  yearFilter.addEventListener('change', applyFilters);
  cycleFilter.addEventListener('change', applyFilters);
  searchInput.addEventListener('input', applyFilters);
  minAmountInput.addEventListener('input', applyFilters);
}

function drawFundingGraph(filteredDonations = null) {
  const canvas = document.getElementById('funding-canvas');
  const ctx = canvas.getContext('2d');
  const data = window.politicalFundingData;
  const donations = filteredDonations || data.donations;

  // Set canvas size
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get unique donors and parties
  const donors = [...new Set(donations.map(d => d.donor))];
  const parties = [...new Set(donations.map(d => d.party))];

  // Layout: donors left, parties right
  const leftX = 100;
  const rightX = canvas.width - 100;
  const donorYSpacing = (canvas.height - 40) / donors.length;
  const partyYSpacing = (canvas.height - 40) / parties.length;

  const donorPositions = {};
  const partyPositions = {};

  // Draw donors (left)
  ctx.fillStyle = '#00ccff';
  ctx.font = '10px IBM Plex Mono';
  donors.forEach((donorId, i) => {
    const y = 20 + i * donorYSpacing;
    const donor = data.donors.find(d => d.id === donorId) || { name: donorId };
    ctx.fillText(donor.name.slice(0, 20), leftX - 80, y + 4);
    ctx.beginPath();
    ctx.arc(leftX, y, 6, 0, 2 * Math.PI);
    ctx.fill();
    donorPositions[donorId] = { x: leftX, y };
  });

  // Draw parties (right)
  parties.forEach((partyId, i) => {
    const y = 20 + i * partyYSpacing;
    const party = data.parties.find(p => p.id === partyId) || { name: partyId, color: '#666' };
    ctx.fillStyle = party.color;
    ctx.fillText(party.abbr, rightX + 10, y + 4);
    ctx.beginPath();
    ctx.arc(rightX, y, 8, 0, 2 * Math.PI);
    ctx.fill();
    partyPositions[partyId] = { x: rightX, y };
  });

  // Draw edges
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  donations.forEach(d => {
    const donorPos = donorPositions[d.donor];
    const partyPos = partyPositions[d.party];
    if (!donorPos || !partyPos) return;

    // Line thickness based on amount (max 5px)
    const maxAmount = Math.max(...donations.map(dd => dd.amount));
    const thickness = Math.max(1, (d.amount / maxAmount) * 5);
    ctx.lineWidth = thickness;

    ctx.beginPath();
    ctx.moveTo(donorPos.x, donorPos.y);
    ctx.lineTo(partyPos.x, partyPos.y);
    ctx.stroke();
  });

  // Update meta
  document.getElementById('graph-meta').textContent = `${donors.length} DONORS → ${parties.length} PARTIES · ${donations.length} CONNECTIONS`;
}

// ============ END POLITICAL FUNDING ============
