/* ─── DEVLOGS CONFIG ──────────────────────────────────────────────────────────
   Set DEVLOGS_CONFIG.apiUrl to your actual API endpoint.
   The fallback object is used when the API is unavailable or not configured.
   Expected JSON shape:
   {
     gameName: string,
     latestVersion: string,
     contact: { discord?, group?, web?, user? },
     updates: [{ version, date, changes: string[] }]
   }
   ─────────────────────────────────────────────────────────────────────────── */

const DEVLOGS_CONFIG = {
  /* Replace with your real endpoint — leave as-is to use fallback data */
  apiUrl: 'https://api.example.com/devlogs',

  /* Static fallback shown when API is unreachable */
  fallback: {
    gameName:      "Neon Studio · [NS]",
    latestVersion: "v1.0",
    contact: {
      discord: "https://discord.gg/6r2J4mpxXC",
      group:   "https://www.roblox.com/communities/244262448",
      web:     "https://panda15fps.com",
      user:    "Panda15Fps",
    },
    updates: [
      {
        version: "v1.0",
        date:    "01/02/26",
        changes: ["Lanzamiento oficial del juego"],
      },
    ],
  },
};

async function loadDevLogs() {
  const container = document.getElementById('devlogs-container');
  if (!container) return;

  const t = i18n[currentLang];
  container.innerHTML = `<div class="devlog-loading">${t.devlogs.loading}</div>`;

  let data = null;

  try {
    const isRealApi = DEVLOGS_CONFIG.apiUrl && !DEVLOGS_CONFIG.apiUrl.includes('example.com');
    if (isRealApi) {
      const res = await fetch(DEVLOGS_CONFIG.apiUrl, { signal: AbortSignal.timeout(5000) });
      if (res.ok) data = await res.json();
    }
  } catch (_) { /* fall through to fallback */ }

  if (!data) data = DEVLOGS_CONFIG.fallback;

  if (!data?.updates) {
    container.innerHTML = `<div class="devlog-error">${t.devlogs.error}</div>`;
    return;
  }

  container.innerHTML = '';

  data.updates.slice(0, 5).forEach(update => {
    const card = document.createElement('div');
    card.className = 'devlog-card';

    const changesHtml = (update.changes || [])
      .map(c => `<div class="devlog-entry">
        <span class="devlog-dot">+</span>
        <span class="devlog-change">${c}</span>
      </div>`)
      .join('');

    card.innerHTML = `
      <div class="devlog-header">
        <span class="devlog-game">${data.gameName || 'Project'}</span>
        <span class="devlog-version">${update.version}</span>
      </div>
      <div class="devlog-body">
        ${changesHtml || `<div class="devlog-entry">
          <span class="devlog-dot">+</span>
          <span class="devlog-change">${t.devlogs.noData}</span>
        </div>`}
      </div>
      <div class="devlog-date">${update.date || ''}</div>
    `;
    container.appendChild(card);
  });

  /* Contact links panel */
  if (data.contact) {
    const info = document.createElement('div');
    info.className = 'devlog-contact';
    if (data.contact.discord)
      info.innerHTML += `<a href="${data.contact.discord}" target="_blank" rel="noopener" class="devlog-contact-link">Discord</a>`;
    if (data.contact.group)
      info.innerHTML += `<a href="${data.contact.group}" target="_blank" rel="noopener" class="devlog-contact-link">Roblox Group</a>`;
    if (data.contact.user)
      info.innerHTML += `<span class="devlog-contact-by">by <strong>${data.contact.user}</strong></span>`;
    container.appendChild(info);
  }
}
