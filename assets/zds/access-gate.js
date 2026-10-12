/* Access gate for the portfolio's Robot Lab (/lab/) and design system (/design-system/).

   This is an access threshold for a static site, not security: the SHA-256 below, the gate and the apps behind it are
   all public files. It mirrors assets/js/tiktok-gate.js (same hash, same popover classes, same sessionStorage idea) so the
   three gates look and behave alike.

   Two modes, one script (served as /assets/zds/access-gate.js, classic `defer` script, no imports):
   - Launcher (portfolio pages): a capture-phase click listener on document intercepts left clicks on same-origin links
     to /lab/ or /design-system/ (including links inside the React island) and opens a resume-style popover for that
     destination. Correct password → sessionStorage[<key>] = '1' → navigate to the clicked href. Esc / backdrop dismiss.
   - Standalone (the /lab/ and /design-system/ pages): the build writes the gate markup into the page and a tiny head
     script that marks <html class="access-locked"> unless the session is unlocked; CSS hides the app until then. Esc /
     backdrop leave the page (back to the referrer on this site, otherwise home).

   The pure helpers are exposed on globalThis.ZijiezAccessGate so Node tests and the build use the same code. */
(() => {
  // Same static-site access hash as tiktok-gate.js; never store the plaintext password in source.
  const ACCESS_HASH = '3378fd1b3e3d336695ad764a3c3675c36cd6474465122e332f8b1ff53b493dd1';
  const LANGUAGE_KEY = 'zijiez-language';

  const SHARED = Object.freeze({
    label: { en: 'Access password', zh: '访问密码' },
    contact: { en: 'Contact Zijie', zh: '联系周子杰' },
    email: { en: 'Email Zijie', zh: '给周子杰发邮件' },
    checking: { en: 'Checking access…', zh: '正在验证…' },
    wrong: { en: 'That password does not match. Please try again.', zh: '密码不正确，请重试。' },
    unsupported: { en: 'This browser cannot verify the password securely.', zh: '当前浏览器无法安全验证密码。' },
  });

  const DESTINATIONS = Object.freeze([
    Object.freeze({
      id: 'lab',
      path: '/lab/',
      sessionKey: 'lab-unlocked',
      copy: Object.freeze({
        pill: { en: 'Side project', zh: '个人实验' },
        title: { en: 'Robot Lab', zh: 'Robot Lab 机器人实验室' },
        body: {
          en: 'A 3D workshop for my quadruped robot, still in progress. Enter the access password to continue.',
          zh: '四足机器人的三维维修室，仍在打磨中。请输入访问密码继续。',
        },
        unlock: { en: 'Open Robot Lab', zh: '进入实验室' },
      }),
    }),
    Object.freeze({
      id: 'design-system',
      path: '/design-system/',
      sessionKey: 'design-system-unlocked',
      copy: Object.freeze({
        pill: { en: 'Design system', zh: '设计系统' },
        title: { en: 'Design system', zh: '设计系统' },
        body: {
          en: 'The tokens, React components and motion behind this site, documented as a working tool. Enter the access password to continue.',
          zh: '这个网站背后的变量、React 组件与动效，整理成一件能上手的工具。请输入访问密码继续。',
        },
        unlock: { en: 'Open design system', zh: '打开设计系统' },
      }),
    }),
  ]);

  const LOCK_ICON = '<svg class="ico" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false"><path d="M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z" opacity="0.2"/><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"/></svg>';

  /* ---------- pure helpers ---------- */

  const destinationById = id => DESTINATIONS.find(item => item.id === id) || null;

  /** The gated destination an href points to on `origin`, or null. Same origin only; `/lab` and `/lab/…` both match. */
  function matchDestination(href, base) {
    let url;
    try { url = new URL(href, base); } catch { return null; }
    let origin;
    try { origin = new URL(base).origin; } catch { return null; }
    if (url.origin !== origin) return null;
    for (const item of DESTINATIONS) {
      const bare = item.path.slice(0, -1);
      if (url.pathname === bare || url.pathname.startsWith(item.path)) return item;
    }
    return null;
  }

  /** tiktok-gate.js writes '1'; 'true' is accepted too. Anything else is locked. */
  const isUnlockedValue = value => value === '1' || value === 'true';

  /** The site's language rule (i18n-boot.js): stored choice first, otherwise Chinese if any browser language is zh. */
  function pickLocale(stored, languages) {
    if (stored === 'en' || stored === 'zh') return stored;
    return (languages || []).some(language => /^zh(?:-|$)/i.test(String(language))) ? 'zh' : 'en';
  }

  const toHex = buffer => [...new Uint8Array(buffer)].map(byte => byte.toString(16).padStart(2, '0')).join('');

  /** Compares two hex digests without stopping at the first difference. */
  function hashMatches(candidate, expected = ACCESS_HASH) {
    if (typeof candidate !== 'string' || candidate.length !== expected.length) return false;
    let difference = 0;
    for (let index = 0; index < expected.length; index += 1) difference |= candidate.charCodeAt(index) ^ expected.charCodeAt(index);
    return difference === 0;
  }

  async function sha256Hex(value, subtle = globalThis.crypto && globalThis.crypto.subtle) {
    if (!subtle) throw new Error('Secure hashing is unavailable.');
    return toHex(await subtle.digest('SHA-256', new TextEncoder().encode(value)));
  }

  /** Where Esc / backdrop go from a standalone gate: back to the referring page on this site, otherwise home. */
  function exitTarget(referrer, here) {
    let from = null;
    try { from = referrer ? new URL(referrer) : null; } catch { from = null; }
    const current = new URL(here);
    if (from && from.origin === current.origin && from.pathname !== current.pathname) return 'back';
    return new URL('/', current).href;
  }

  const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  /** The site's dual-span pattern (.i18n-inline--en / --zh): both languages in the markup, CSS shows one. */
  const bilingual = copy => `<span class="i18n-inline i18n-inline--en" data-i18n-ignore>${escapeHtml(copy.en)}</span>`
    + `<span class="i18n-inline i18n-inline--zh" lang="zh-CN" data-i18n-ignore>${escapeHtml(copy.zh)}</span>`;

  /** The popover, in the resume gate's markup and classes. `standalone` gates start open and own the page. */
  function renderGate(id, { standalone = false } = {}) {
    const item = destinationById(id);
    if (!item) throw new Error(`Unknown gated destination: ${id}`);
    const base = `access-gate-${item.id}`;
    const { copy } = item;
    const unlock = bilingual(copy.unlock);
    return [
      `<section id="${base}" class="tiktok-gate-wrap access-gate${standalone ? ' access-gate--standalone' : ''}" data-zds-gate="${item.id}" data-session-key="${item.sessionKey}" data-i18n-ignore${standalone ? '' : ' hidden'}>`,
      `<div class="tiktok-gate-popover" data-open="${standalone ? 'true' : 'false'}">`,
      '<div class="wrap">',
      `<div class="tiktok-gate panel" role="dialog" aria-modal="true" aria-labelledby="${base}-title">`,
      '<div class="tiktok-gate__intro">',
      `<span class="pill">${LOCK_ICON}${bilingual(copy.pill)}</span>`,
      `<h2 id="${base}-title">${bilingual(copy.title)}</h2>`,
      `<p>${bilingual(copy.body)}</p>`,
      `<div class="tiktok-gate__contact" role="group" aria-label="${escapeHtml(SHARED.contact.en)}">`,
      `<a href="mailto:zijiezhou00@gmail.com" aria-label="${escapeHtml(SHARED.email.en)}">zijiezhou00@gmail.com</a>`,
      '<a href="https://www.linkedin.com/in/zijiezhou000111/" target="_blank" rel="noopener" aria-label="LinkedIn">LinkedIn <span aria-hidden="true">↗</span></a>',
      '</div>',
      '</div>',
      '<form class="tiktok-gate__form">',
      `<label for="${base}-password">${bilingual(SHARED.label)}</label>`,
      '<div class="tiktok-gate__controls">',
      `<input id="${base}-password" name="password" type="password" autocomplete="current-password" required>`,
      `<button class="btn btn--blue" type="submit"><span class="roll"><span class="roll__in">${unlock}</span><span class="roll__in" aria-hidden="true">${unlock}</span></span></button>`,
      '</div>',
      '<p class="tiktok-gate__status" data-access-status role="status" aria-live="polite"></p>',
      '</form>',
      '</div>',
      '</div>',
      '</div>',
      '</section>',
    ].join('');
  }

  const api = Object.freeze({
    ACCESS_HASH, LANGUAGE_KEY, DESTINATIONS, SHARED,
    destinationById, matchDestination, isUnlockedValue, pickLocale, toHex, hashMatches, sha256Hex, exitTarget, renderGate,
  });
  globalThis.ZijiezAccessGate = api;

  /* ---------- browser ---------- */
  if (typeof window === 'undefined' || typeof document === 'undefined' || window.__zijiezAccessGateBooted) return;
  window.__zijiezAccessGateBooted = true;

  const storage = {
    get(key) { try { return sessionStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { sessionStorage.setItem(key, value); } catch { /* private mode: unlock for this page only */ } },
  };
  const unlocked = item => isUnlockedValue(storage.get(item.sessionKey));
  const currentLocale = gate => {
    if (gate && gate.classList.contains('access-gate--standalone')) return document.documentElement.dataset.accessLocale === 'zh' ? 'zh' : 'en';
    return document.documentElement.dataset.locale === 'zh' ? 'zh' : 'en';
  };
  const say = (gate, copy) => copy[currentLocale(gate)] || copy.en;

  let active = null; // { gate, item, href, trigger, standalone }

  const focusables = gate => [...gate.querySelectorAll('.tiktok-gate a[href], .tiktok-gate input, .tiktok-gate button')]
    .filter(node => !node.disabled && node.offsetParent !== null);

  function wire(gate) {
    if (gate.dataset.zdsGateReady) return;
    gate.dataset.zdsGateReady = 'true';
    const popover = gate.querySelector('.tiktok-gate-popover');
    const form = gate.querySelector('form');
    const input = form.querySelector('input[name="password"]');
    const status = gate.querySelector('[data-access-status]');

    popover.addEventListener('click', event => {
      if (event.target instanceof Element && event.target.closest('.tiktok-gate')) return;
      dismiss();
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      const value = input.value.trim();
      if (!value || form.dataset.busy === 'true' || !active) return;
      form.dataset.busy = 'true';
      status.dataset.state = 'loading';
      status.textContent = say(gate, SHARED.checking);
      try {
        if (!hashMatches(await sha256Hex(value))) {
          status.dataset.state = 'error';
          status.textContent = say(gate, SHARED.wrong);
          input.select();
          return;
        }
        storage.set(active.item.sessionKey, '1');
        status.dataset.state = '';
        status.textContent = '';
        unlock();
      } catch {
        status.dataset.state = 'error';
        status.textContent = say(gate, SHARED.unsupported);
      } finally {
        form.dataset.busy = 'false';
      }
    });
  }

  function open(item, { href, trigger }) {
    let gate = document.getElementById(`access-gate-${item.id}`);
    if (!gate) {
      document.body.insertAdjacentHTML('beforeend', renderGate(item.id));
      gate = document.getElementById(`access-gate-${item.id}`);
    }
    wire(gate);
    active = { gate, item, href, trigger, standalone: false };
    const status = gate.querySelector('[data-access-status]');
    status.textContent = '';
    status.dataset.state = '';
    gate.hidden = false;
    // Next frame, so the popover's opacity/transform transition runs from its closed state.
    requestAnimationFrame(() => {
      gate.querySelector('.tiktok-gate-popover').dataset.open = 'true';
      gate.querySelector('input[name="password"]').focus({ preventScroll: true });
    });
  }

  function dismiss() {
    if (!active) return;
    const { gate, trigger, standalone } = active;
    if (standalone) {
      const target = exitTarget(document.referrer, location.href);
      if (target === 'back') history.back(); else location.assign(target);
      return;
    }
    gate.querySelector('.tiktok-gate-popover').dataset.open = 'false';
    gate.hidden = true;
    active = null;
    if (trigger && trigger.isConnected) trigger.focus({ preventScroll: true });
  }

  function unlock() {
    if (!active) return;
    const { gate, item, href, standalone } = active;
    if (!standalone) {
      location.assign(href);
      return;
    }
    active = null;
    gate.remove();
    document.documentElement.classList.remove('access-locked');
    document.dispatchEvent(new CustomEvent('access-unlocked', { detail: { target: item.id } }));
  }

  document.addEventListener('keydown', event => {
    if (!active || active.gate.hidden) return;
    if (event.key === 'Escape') { event.preventDefault(); dismiss(); return; }
    if (event.key !== 'Tab') return;
    const items = focusables(active.gate);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const inside = active.gate.contains(document.activeElement);
    if (event.shiftKey && (document.activeElement === first || !inside)) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && (document.activeElement === last || !inside)) { event.preventDefault(); first.focus(); }
  }, true);

  // Standalone page: the gate is already in the markup.
  const standalone = document.querySelector('.access-gate--standalone[data-zds-gate]');
  if (standalone) {
    const item = destinationById(standalone.dataset.zdsGate);
    if (!item) return;
    if (unlocked(item)) {
      standalone.remove();
      document.documentElement.classList.remove('access-locked');
      return;
    }
    document.documentElement.classList.add('access-locked');
    wire(standalone);
    active = { gate: standalone, item, href: location.href, trigger: null, standalone: true };
    standalone.querySelector('input[name="password"]').focus({ preventScroll: true });
    return;
  }

  // Launcher: every same-origin link to a gated destination, including ones rendered later (the React island).
  document.addEventListener('click', event => {
    const trigger = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!trigger || trigger.target === '_blank' || trigger.hasAttribute('download')) return;
    if ((event.button != null && event.button !== 0) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const item = matchDestination(trigger.getAttribute('href'), location.href);
    if (!item || unlocked(item)) return;
    event.preventDefault();
    event.stopPropagation();
    open(item, { href: new URL(trigger.getAttribute('href'), location.href).href, trigger });
  }, true);

})();
