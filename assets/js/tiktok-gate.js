/* Lightweight portfolio gate for the TikTok 996633 case study.
   This is an access threshold for a static site, not a confidentiality boundary. */
(() => {
  const gate = document.querySelector('#tiktok-gate');
  const content = document.querySelector('#tiktok-full-content');
  const form = document.querySelector('#tiktok-unlock-form');
  const input = document.querySelector('#tiktok-password');
  const status = document.querySelector('#tiktok-gate-status');
  if (!gate || !content || !form || !input || !status) return;

  const sessionKey = 'tiktok996633-unlocked';
  // Temporary local-preview hash. Replace before a real release.
  const accessHash = '3378fd1b3e3d336695ad764a3c3675c36cd6474465122e332f8b1ff53b493dd1';

  const sha256 = async value => {
    if (!window.crypto?.subtle) throw new Error('Secure hashing is unavailable.');
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
      const dots = root.querySelector('[data-tt-dots]');
      const navs = [...root.querySelectorAll('[data-tt-step]')];
      if (slides.length < 2 || !dots) return;

      let index = 0;
      const show = next => {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== index)));
        [...dots.children].forEach((dot, i) => {
          dot.setAttribute('aria-current', String(i === index));
          dot.tabIndex = i === index ? 0 : -1;
        });
      };

      slides.forEach((slide, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show proposal ${i + 1} of ${slides.length}`);
        dot.setAttribute('aria-controls', slide.id);
        dot.addEventListener('click', () => show(i));
        dots.append(dot);
      });

      navs.forEach(nav => {
        nav.hidden = false;
        nav.addEventListener('click', () => show(index + Number(nav.dataset.ttStep)));
      });

      dots.hidden = false;
      root.dataset.ttReady = 'true';
      show(0);
    });
  };

  const unlock = () => {
    gate.hidden = true;
    content.hidden = false;
    content.removeAttribute('aria-hidden');
    loadPrivateMedia();
    setupCarousels();
    document.dispatchEvent(new CustomEvent('tiktok-unlocked'));
  };

  if (sessionStorage.getItem(sessionKey) === '1') unlock();
  else input.focus({preventScroll: true});

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value || form.dataset.busy === 'true') return;
    form.dataset.busy = 'true';
    status.dataset.state = 'loading';
    status.textContent = 'Checking access…';
    try {
      if (await sha256(value) !== accessHash) {
        status.dataset.state = 'error';
        status.textContent = 'That password does not match. Please try again.';
        input.select();
        return;
      }
      sessionStorage.setItem(sessionKey, '1');
      status.textContent = '';
      unlock();
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'This browser cannot verify the password securely.';
    } finally {
      form.dataset.busy = 'false';
    }
  });
})();
