/* Reusable lightweight gate for private portfolio content.
   This is an access threshold for a static site, not a confidentiality boundary. */
(() => {
  const text = (key, values) => window.ZijiezI18n?.t(key, values) || key;
  const isResumePage = /\/resume\/?$/.test(location.pathname);
  const resumeTriggers = isResumePage ? [] : [...document.querySelectorAll('a[href]')].filter(link => {
    try {
      return new URL(link.href, location.href).pathname.replace(/\/$/, '').endsWith('/resume');
    } catch {
      return false;
    }
  });

  if (resumeTriggers.length && !document.querySelector('#resume-gate')) {
    const launcher = document.createElement('section');
    launcher.id = 'resume-gate';
    launcher.className = 'tiktok-gate-wrap';
    launcher.dataset.accessGate = '';
    launcher.dataset.accessDestination = resumeTriggers[0].href;
    launcher.dataset.sessionKey = 'resume-unlocked';
    launcher.setAttribute('aria-labelledby', 'resume-gate-title');
    launcher.hidden = true;
    launcher.innerHTML = `
      <div class="tiktok-gate-popover" data-open="false">
        <div class="wrap">
          <div class="tiktok-gate panel">
            <div class="tiktok-gate__intro">
              <span class="pill">${text('Private resume')}</span>
              <h2 id="resume-gate-title">${text('Resume')}</h2>
              <p>${text('This resume contains private contact and career details. Enter the access password to continue.')}</p>
              <div class="tiktok-gate__contact" aria-label="${text('Contact Zijie')}">
                <a href="mailto:zijiezhou00@gmail.com" aria-label="${text('Email Zijie')}">zijiezhou00@gmail.com</a>
                <a href="https://www.linkedin.com/in/zijiezhou000111/" target="_blank" rel="noopener" aria-label="LinkedIn">LinkedIn <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <form class="tiktok-gate__form">
              <label for="resume-launcher-password">${text('Access password')}</label>
              <div class="tiktok-gate__controls">
                <input id="resume-launcher-password" name="password" type="password" autocomplete="current-password" required>
                <button class="btn btn--blue" type="submit"><span class="roll"><span class="roll__in">${text('Unlock resume')}</span><span class="roll__in" aria-hidden="true">${text('Unlock resume')}</span></span></button>
              </div>
              <p class="tiktok-gate__status" data-access-status role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
      </div>`;
    document.body.append(launcher);
    window.ZijiezI18n?.refresh?.();
  }

  const gate = document.querySelector('[data-access-gate], #tiktok-gate');
  const targetId = gate?.dataset.accessTarget;
  const content = targetId ? document.getElementById(targetId) : document.querySelector('#tiktok-full-content');
  const destination = gate?.dataset.accessDestination;
  const popover = gate?.querySelector('.tiktok-gate-popover');
  const form = gate?.querySelector('form');
  const input = form?.querySelector('input[name="password"]');
  const status = gate?.querySelector('[data-access-status], .tiktok-gate__status');
  if (!gate || (!content && !destination) || !form || !input || !status) return;

  const sessionKey = gate.dataset.sessionKey || 'tiktok996633-unlocked';
  const backdropAction = destination ? 'dismiss' : gate.id === 'resume-gate' ? 'exit' : 'scroll-top';
  // Static-site access hash; never store the plaintext password in source.
  const accessHash = '3378fd1b3e3d336695ad764a3c3675c36cd6474465122e332f8b1ff53b493dd1';

  const handleBackdropAction = () => {
    if (backdropAction === 'dismiss') {
      if (popover) popover.dataset.open = 'false';
      gate.hidden = true;
      lastResumeTrigger?.focus({preventScroll: true});
      return;
    }
    if (backdropAction === 'scroll-top') {
      window.scrollTo({
        top: 0,
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
      return;
    }

    let referrer;
    try {
      referrer = document.referrer ? new URL(document.referrer) : null;
    } catch {
      referrer = null;
    }
    if (referrer?.origin === location.origin && referrer.pathname !== location.pathname) {
      history.back();
    } else {
      location.assign(new URL('../', location.href));
    }
  };

  popover?.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('.tiktok-gate')) return;
    handleBackdropAction();
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || popover?.dataset.open !== 'true' || gate.hidden) return;
    handleBackdropAction();
  });

  const sha256 = async value => {
    if (!window.crypto?.subtle) throw new Error(text('gate.hashUnavailable'));
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  };

  const loadPrivateMedia = () => {
    if (!content) return;
    content.querySelectorAll('[data-tiktok-src]').forEach(media => {
      media.src = media.dataset.tiktokSrc;
      media.removeAttribute('data-tiktok-src');
    });
  };

  /* Design Proposals carousel — one option at a time, matching the Framer original.
     Enhancement only: without JS the three proposals stay stacked and readable. */
  const setupCarousels = () => {
    if (!content) return;
    content.querySelectorAll('[data-tt-carousel]').forEach(root => {
      if (root.dataset.ttReady) return;
      const slides = [...root.querySelectorAll('[data-tt-slide]')];
      const track = root.querySelector('.tt-carousel__track');
      const dots = root.querySelector('[data-tt-dots]');
      const navs = [...root.querySelectorAll('[data-tt-step]')];
      if (slides.length < 2 || !dots || !track) return;

      let index = 0;
      const updateDots = () => {
        [...dots.children].forEach((dot, i) => {
          dot.setAttribute('aria-current', String(i === index));
          dot.tabIndex = i === index ? 0 : -1;
        });
      };

      const show = next => {
        index = (next + slides.length) % slides.length;
        updateDots();
        track.scrollTo({ left: slides[index].offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      };

      slides.forEach((slide, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        const syncLabel = () => dot.setAttribute('aria-label', text('carousel.show', {current: i + 1, total: slides.length}));
        syncLabel();
        document.addEventListener('zijiez:languagechange', syncLabel);
        dot.setAttribute('aria-controls', slide.id);
        dot.addEventListener('click', () => show(i));
        dots.append(dot);
      });

      navs.forEach(nav => {
        nav.hidden = false;
        nav.addEventListener('click', () => show(index + Number(nav.dataset.ttStep)));
      });

      track.addEventListener('scroll', () => {
        const next = slides.reduce((closest, slide, i) => (
          Math.abs(slide.offsetLeft - track.scrollLeft) < Math.abs(slides[closest].offsetLeft - track.scrollLeft) ? i : closest
        ), 0);
        if (next !== index) {
          index = Math.min(Math.max(next, 0), slides.length - 1);
          updateDots();
        }
      }, { passive: true });

      dots.hidden = false;
      root.dataset.ttReady = 'true';
      updateDots();
      if (track.clientWidth > 0) track.scrollLeft = 0;
      else requestAnimationFrame(() => { track.scrollLeft = 0; });
    });
  };

  const unlock = () => {
    if (destination) {
      location.assign(destination);
      return;
    }
    if (popover) popover.dataset.open = 'false';
    gate.hidden = true;
    content.hidden = false;
    content.classList.add('access-unlocked');
    content.classList.add('tiktok-unlocked');
    content.removeAttribute('aria-hidden');
    loadPrivateMedia();
    setupCarousels();
    document.dispatchEvent(new CustomEvent('access-unlocked', { detail: { target: content.id } }));
    document.dispatchEvent(new CustomEvent('tiktok-unlocked'));
  };

  let popoverWasOpen = false;
  const updatePopover = () => {
    if (!popover || gate.hidden) return;
    const y = window.scrollY;
    const gateTop = Math.round(gate.getBoundingClientRect().top + y);
    const entered = y >= gateTop - 400;
    const returned = y < gateTop - 600;
    const show = entered && !returned;
    popover.dataset.open = String(show);
    if (show && !popoverWasOpen) input.focus({preventScroll: true});
    popoverWasOpen = show;
  };

  if (!destination) {
    window.addEventListener('scroll', updatePopover, { passive: true });
    window.addEventListener('resize', updatePopover, { passive: true });
  }

  let lastResumeTrigger = null;
  document.addEventListener('click', event => {
    const trigger = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!trigger || !resumeTriggers.includes(trigger)) return;
    if ((event.button != null && event.button !== 0) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (sessionStorage.getItem(sessionKey) === '1') return;
    event.preventDefault();
    lastResumeTrigger = trigger;
    gate.hidden = false;
    if (popover) popover.dataset.open = 'true';
    input.focus({preventScroll: true});
  }, true);

  if (sessionStorage.getItem(sessionKey) === '1') {
    if (!destination) unlock();
  } else if (destination) {
    gate.hidden = true;
  } else {
    updatePopover();
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value || form.dataset.busy === 'true') return;
    form.dataset.busy = 'true';
    status.dataset.state = 'loading';
    status.textContent = text('gate.checking');
    try {
      if (await sha256(value) !== accessHash) {
        status.dataset.state = 'error';
        status.textContent = text('gate.wrongPassword');
        input.select();
        return;
      }
      sessionStorage.setItem(sessionKey, '1');
      status.textContent = '';
      unlock();
    } catch {
      status.dataset.state = 'error';
      status.textContent = text('gate.unsupported');
    } finally {
      form.dataset.busy = 'false';
    }
  });
})();
