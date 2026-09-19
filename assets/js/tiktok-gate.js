/* Lightweight portfolio gate for the TikTok 996633 case study.
   This is an access threshold for a static site, not a confidentiality boundary. */
(() => {
  const gate = document.querySelector('#tiktok-gate');
  const content = document.querySelector('#tiktok-full-content');
  const popover = gate.querySelector('.tiktok-gate-popover');
  const form = document.querySelector('#tiktok-unlock-form');
  const input = document.querySelector('#tiktok-password');
  const status = document.querySelector('#tiktok-gate-status');
  if (!gate || !content || !form || !input || !status) return;
  const text = (key, values) => window.ZijiezI18n?.t(key, values) || key;

  const sessionKey = 'tiktok996633-unlocked';
  // Static-site access hash; never store the plaintext password in source.
  const accessHash = '3378fd1b3e3d336695ad764a3c3675c36cd6474465122e332f8b1ff53b493dd1';

  const sha256 = async value => {
    if (!window.crypto?.subtle) throw new Error(text('gate.hashUnavailable'));
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  };

  const loadPrivateMedia = () => {
    content.querySelectorAll('[data-tiktok-src]').forEach(media => {
      media.src = media.dataset.tiktokSrc;
      media.removeAttribute('data-tiktok-src');
    });
  };

  /* Design Proposals carousel — one option at a time, matching the Framer original.
     Enhancement only: without JS the three proposals stay stacked and readable. */
  const setupCarousels = () => {
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
    if (popover) popover.dataset.open = 'false';
    gate.hidden = true;
    content.hidden = false;
    content.classList.add('tiktok-unlocked');
    content.removeAttribute('aria-hidden');
    loadPrivateMedia();
    setupCarousels();
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

  window.addEventListener('scroll', updatePopover, { passive: true });
  window.addEventListener('resize', updatePopover, { passive: true });

  if (sessionStorage.getItem(sessionKey) === '1') {
    unlock();
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
