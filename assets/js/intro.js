/* Home intro — "Tile by tile".
   Each career chapter plays one UI scene, then folds into its tile of the hero
   graphic. In the finale the tiles fuse, the stage lands exactly on the real
   hero card and the page takes over. Everything drawn is a pure function of t
   (seek); the driver only advances the clock, and warps it when skipping. */
(() => {
  const root = document.documentElement;
  const data = window.ZijiezIntro;
  const card = document.querySelector('.hero__card');
  const graphic = document.querySelector('.hero__graphic');
  const heroH1 = document.querySelector('.hero__text h1');
  const heroLede = document.querySelector('.hero__lede');
  const heroBtnWrap = document.querySelector('.hero__card > .fx-up');
  const heroBtn = heroBtnWrap?.querySelector('.btn');
  const params = new URLSearchParams(location.search);
  const SEEK = params.get('intro') === 'seek';
  if (!data || !card || !graphic || !heroBtn || !document.body.classList.contains('page-home')) {
    root.classList.remove('intro-play');
    return;
  }

  /* ---------- math ---------- */
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, u) => a + (b - a) * u;
  const smooth = u => (u = clamp(u), u * u * (3 - 2 * u));
  const rgb = c => `rgb(${c.map(v => Math.round(clamp(v, 0, 255))).join(',')})`;
  const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const BEAT = 60 / data.bpm;
  const SP = {
    shape: { r: 0.46, z: 0.84 }, fast: { r: 0.26, z: 0.86 }, fold: { r: 0.24, z: 0.95 },
    pop: { r: 0.22, z: 0.72 }, press: { r: 0.12, z: 1 }, color: { r: 0.17, z: 1 },
    cam: { r: 0.7, z: 0.94 }, camSlow: { r: 0.95, z: 0.97 }, content: { r: 0.24, z: 0.95 },
    lead: { r: 0.26, z: 0.8 }, trail: { r: 0.55, z: 0.86 }, fly: { r: 0.4, z: 0.86 }, flyTrail: { r: 0.62, z: 0.88 },
    snap: { r: 0.4, z: 0.8 }, bloom: { r: 0.34, z: 0.82 }, fuse: { r: 0.42, z: 0.9 },
  };
  // Closed-form step response of a damped spring (response r in s, damping ratio z).
  function step(t, s) {
    if (t <= 0) return 0;
    if (!s) return 1;
    const w = 2 * Math.PI / s.r, z = s.z;
    if (z < 1) {
      const wd = w * Math.sqrt(1 - z * z);
      return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t));
    }
    return 1 - Math.exp(-w * t) * (1 + w * t);
  }
  const decay = (t, s) => 1 - step(t, s);
  // Landing curve: a critically damped spring normalised to arrive exactly at D.
  const LAND = { r: 0.42, z: 1 };
  const land = (u, D = 0.5) => u <= 0 ? 0 : u >= D ? 1 : step(u, LAND) / step(D, LAND);

  /* A value that changes target many times is the sum of one spring per change. */
  class Track {
    constructor(v0) { this.v0 = v0; this.keys = []; this.k = []; }
    to(t, v, s = SP.shape) { this.keys.push([t, v, s]); return this; }
    set(t, v) { return this.to(t, v, null); }
    done() {
      this.keys.sort((a, b) => a[0] - b[0]);
      let prev = this.v0;
      this.k = this.keys.map(([t, v, s]) => { const k = [t, v - prev, s, prev]; prev = v; return k; });
      return this;
    }
    at(t) { let v = this.v0; for (const [tk, d, s] of this.k) if (d && t > tk) v += d * step(t - tk, s); return v; }
    before(tk) { const k = this.k.find(k => Math.abs(k[0] - tk) < 1e-9); return k ? k[3] : this.v0; }
  }
  class ColorTrack {
    constructor(c0) { this.ch = c0.map(v => new Track(v)); }
    to(t, c, s = SP.color) { this.ch.forEach((tr, i) => tr.to(t, c[i], s)); return this; }
    set(t, c) { this.ch.forEach((tr, i) => tr.set(t, c[i])); return this; }
    done() { this.ch.forEach(tr => tr.done()); return this; }
    at(t) { return this.ch.map(tr => tr.at(t)); }
  }
  // Content visibility with its own enter and exit timing.
  function win(t, tin, tout, o = {}) {
    const din = o.din ?? 0.05, dout = o.dout ?? 0.09;
    const a = Math.min(1, step(t - tin - din, o.rs ?? SP.content));
    const b = tout == null ? 0 : smooth((t - tout) / dout);
    return clamp(a * (1 - b));
  }
  function fx(el, v, blur = 8) {
    el.style.opacity = v.toFixed(4);
    const b = (1 - v) * blur;
    el.style.filter = b > 0.04 ? `blur(${b.toFixed(2)}px)` : 'none';
    el.style.visibility = v < 0.003 ? 'hidden' : 'visible';
  }
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx, cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const X = s => ((ax * s + bx) * s + cx) * s, Y = s => ((ay * s + by) * s + cy) * s;
    return u => { u = clamp(u); let s = u; for (let i = 0; i < 8; i++) { const d = (3 * ax * s + 2 * bx) * s + cx; if (Math.abs(d) < 1e-6) break; s = clamp(s - (X(s) - u) / d); } return Y(s); };
  }
  const moveEase = bezier(0.42, 0, 0.12, 1);
  const sweepEase = bezier(0.5, 0, 0.1, 1);

  /* ---------- copy ---------- */
  const zh = () => window.__zijiezLocale === 'zh';
  const L = o => o == null ? '' : typeof o === 'object' ? (zh() && o.zh) || o.en : String(o);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

  /* ---------- palette ---------- */
  const WHITE = [255, 255, 255], TILE = hex('#1A1A1A'), STAGE = hex('#111112'), CARD = hex('#1a1a1a');
  const ACC = hex('#4b6bf3'), ACC2 = hex('#6488ff'), INK = hex('#1a1a1a'), SOFT = hex('#f1f0f3');

  /* ---------- DOM ---------- */
  const make = html => { const d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; };
  const overlay = make(`<div class="zi" data-i18n-ignore>
    <div class="zi__scene" aria-hidden="true">
      <div class="zi__stage"><div class="zi__dots"></div><div class="zi__world"></div></div>
      <div class="zi__hud">
        <div class="zi__cap"><span class="zi__year"><span class="zi-sw"><span></span><span></span></span></span><span class="zi__captext"><span class="zi-sw"><span></span><span></span></span></span></div>
        <div class="zi__line"><div class="zi__track"></div><div class="zi__fill"></div><div class="zi__head"></div></div>
      </div>
      <div class="zi__skip"><span class="zi__skiptext"></span><span class="zi__esc"></span></div>
      <svg class="zi__cursor" viewBox="0 0 24 24" width="28" height="28"><path d="M5.5 3.2v15.4c0 .55.65.84 1.05.46l3.55-3.3 2.45 5.55c.18.41.66.6 1.07.42l1.83-.8c.41-.18.6-.66.42-1.07l-2.43-5.46h4.86c.56 0 .84-.67.45-1.07L6.54 2.73c-.4-.4-1.04-.12-1.04.47z" fill="#111" stroke="#fff" stroke-width="1.35" stroke-linejoin="round"/></svg>
    </div>
    <button class="zi__sound" type="button" aria-pressed="false"><span class="zi__bars"><i></i><i></i><i></i><i></i></span><span class="zi__soundtext"></span></button>
  </div>`);
  const Q = s => overlay.querySelector(s);
  const stageEl = Q('.zi__stage'), world = Q('.zi__world'), dots = Q('.zi__dots');
  const cursorEl = Q('.zi__cursor'), hud = Q('.zi__hud'), skipEl = Q('.zi__skip'), soundBtn = Q('.zi__sound');
  const add = (parent, html) => { const el = make(html); parent.appendChild(el); return el; };

  /* Swapping text: its own exit and enter, a short roll with blur. */
  function swapper(el, dy = 8) {
    const [A, B] = el.children; let ca = null, cb = null, entries = [];
    const f = t => {
      let i = -1;
      for (let k = 0; k < entries.length; k++) if (entries[k][0] <= t) i = k;
      const prev = i > 0 ? entries[i - 1][1] : '', cur = i >= 0 ? entries[i][1] : '';
      if (ca !== prev) { A.innerHTML = prev; ca = prev; }
      if (cb !== cur) { B.innerHTML = cur; cb = cur; }
      const dt = i >= 0 ? t - entries[i][0] : 0;
      const out = i >= 0 ? smooth(dt / 0.12) : 1, inn = i >= 0 ? Math.min(1, step(dt - 0.05, SP.content)) : 0;
      A.style.opacity = 1 - out; A.style.transform = `translateY(${-dy * out}px)`;
      A.style.filter = out > 0.01 && out < 0.99 ? `blur(${(out * 5).toFixed(2)}px)` : 'none';
      B.style.opacity = inn; B.style.transform = `translateY(${dy * (1 - inn)}px)`;
      B.style.filter = inn < 0.99 ? `blur(${((1 - inn) * 5).toFixed(2)}px)` : 'none';
      return i;
    };
    f.set = e => { entries = e.sort((a, b) => a[0] - b[0]); };
    return f;
  }

  /* ---------- the hero graphic, split into tiles and stars ---------- */
  const tiles = new Map(); const stars = [];
  const tileSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  tileSvg.setAttribute('viewBox', '0 0 800 600'); tileSvg.setAttribute('width', '800'); tileSvg.setAttribute('height', '600');
  tileSvg.setAttribute('class', 'zi__tiles');
  async function loadTiles() {
    const src = graphic.currentSrc || graphic.src;
    const txt = await (await fetch(src)).text();
    const doc = new DOMParser().parseFromString(txt, 'image/svg+xml');
    const NS = 'http://www.w3.org/2000/svg';
    const probe = document.createElementNS(NS, 'svg');
    probe.setAttribute('style', 'position:absolute;left:-9999px;top:0;width:800px;height:600px');
    probe.setAttribute('viewBox', '0 0 800 600');
    document.body.appendChild(probe);
    const bbox = d => { const p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); probe.appendChild(p); const b = p.getBBox(); p.remove(); return b; };
    const pieces = [];
    for (const p of doc.querySelectorAll('path')) {
      const d = p.getAttribute('d'), fill = p.getAttribute('fill');
      // One path holds a row of edge half-stars; each should grow from its own vertex.
      // Icons also have several subpaths, but those are holes and must stay together.
      const b = bbox(d), subs = d.match(/M[^M]+/g);
      const row = (b.width > 250 && b.height < 150) || (b.height > 250 && b.width < 150);
      if (row && subs.length > 1) subs.forEach(s => pieces.push({ d: s, fill, b: bbox(s) }));
      else pieces.push({ d, fill, b });
    }
    probe.remove();
    const near = (v, m) => Math.abs(v / m - Math.round(v / m)) < 0.01;
    const defs = document.createElementNS(NS, 'defs'); tileSvg.appendChild(defs);
    const cellsG = document.createElementNS(NS, 'g'), veilsG = document.createElementNS(NS, 'g'), starsG = document.createElementNS(NS, 'g');
    tileSvg.append(cellsG, veilsG, starsG);
    const cell = (c, r) => {
      const key = `${c},${r}`;
      if (!tiles.has(key)) tiles.set(key, { key, c, r, cx: 100 + 200 * c, cy: 100 + 200 * r, base: [], icon: [], color: TILE });
      return tiles.get(key);
    };
    for (const pc of pieces) {
      const { x, y, width: w, height: h } = pc.b;
      const full = Math.abs(w - 200) < 1 && Math.abs(h - 200) < 1;
      if (full && near(x, 200) && near(y, 200)) {
        const tl = cell(Math.round(x / 200), Math.round(y / 200));
        tl.base.push(pc); tl.color = pc.fill.toLowerCase() === 'white' ? WHITE : hex(pc.fill.length === 7 ? pc.fill : '#1A1A1A');
      } else if (full || (Math.abs(w - 200) < 1 && Math.abs(h - 100) < 1) || (Math.abs(w - 100) < 1 && Math.abs(h - 200) < 1)) {
        let vx = x + w / 2, vy = y + h / 2;
        if (h < 150) vy = y < 1 ? 0 : y + h;
        if (w < 150) vx = x < 1 ? 0 : x + w;
        stars.push({ ...pc, vx, vy });
      } else {
        const tl = cell(Math.floor((x + w / 2) / 200), Math.floor((y + h / 2) / 200));
        tl.icon.push(pc);
      }
    }
    const pathEl = pc => `<path d="${pc.d}" fill="${pc.fill}"/>`;
    for (const tl of tiles.values()) {
      const id = `zi-clip-${tl.c}-${tl.r}`;
      const cp = document.createElementNS(NS, 'clipPath'); cp.setAttribute('id', id);
      cp.innerHTML = `<circle cx="${tl.cx}" cy="${tl.cy}" r="0"/>`;
      defs.appendChild(cp);
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('clip-path', `url(#${id})`);
      g.innerHTML = `<g>${tl.base.map(pathEl).join('')}</g><g class="zi__ticon">${tl.icon.map(pathEl).join('')}</g>`;
      cellsG.appendChild(g);
      // Earned tiles rest behind a stage-coloured veil, a touch larger than the tile.
      const veil = document.createElementNS(NS, 'circle');
      veil.setAttribute('cx', tl.cx); veil.setAttribute('cy', tl.cy); veil.setAttribute('r', 0); veil.setAttribute('fill', '#111112');
      veilsG.appendChild(veil);
      Object.assign(tl, { g, veil, clip: cp.firstElementChild, iconEl: g.lastElementChild, iconMarkup: tl.icon.map(pathEl).join('') });
    }
    for (const st of stars) {
      st.el = document.createElementNS(NS, 'path');
      st.el.setAttribute('d', st.d); st.el.setAttribute('fill', st.fill);
      starsG.appendChild(st.el);
    }
  }

  /* ---------- timeline ---------- */
  let TL = null, M = null;   // timeline, measured layout
  const actors = [0, 1].map(() => {
    const el = add(world, '<div class="zi__actor"><div class="zi__inner"></div></div>');
    return { el, inner: el.firstElementChild };
  });
  const knobEl = add(world, '<div class="zi__knob"></div>');
  const topEl = add(world, '<div class="zi__top"></div>');
  const selEl = add(world, `<div class="zi__sel"><div class="zi__selname">Card</div><div class="zi__selol"></div>
    <i class="zi__selh"></i><i class="zi__selh"></i><i class="zi__selh"></i><i class="zi__selh"></i><i class="zi__selr"></i><div class="zi__selbadge"></div></div>`);
  world.prepend(tileSvg);
  const hudFill = Q('.zi__fill'), hudHead = Q('.zi__head');
  const capYear = swapper(Q('.zi__year .zi-sw'), 6), capText = swapper(Q('.zi__captext .zi-sw'), 6);

  function measure() {
    const vw = innerWidth, vh = innerHeight, portrait = vh > vw * 1.05;
    const r = el => { const b = el.getBoundingClientRect(); return { x: b.left, y: b.top, w: b.width, h: b.height }; };
    return { vw, vh, portrait, card: r(card), graphic: r(graphic), btn: r(heroBtn), radius: parseFloat(getComputedStyle(card).borderTopLeftRadius) || 32 };
  }
  const fit = (w, h) => {
    const fx = M.portrait ? 0.94 : 0.6, fy = M.portrait ? 0.44 : 0.54;
    return clamp(Math.min(fx * M.vw / w, fy * M.vh / h), 0.45, 3.4);
  };

  function build() {
    M = measure();
    const chapters = data.chapters;
    const tl = TL = {
      cam: { x: new Track(0), y: new Track(0), ls: new Track(0) },
      actors: actors.map(() => ({ x: new Track(0), y: new Track(0), w: new Track(0), h: new Track(0), r: new Track(0), col: new ColorTrack(WHITE), vis: [] })),
      knob: { e: [0, 1, 2, 3].map(() => new Track(0)), col: new ColorTrack(WHITE), vis: [] },
      layers: [], updates: [], cursor: [], press: [], cues: [], caps: [], tiles: new Map(), stars: [],
    };
    actors.forEach(a => (a.inner.innerHTML = '')); topEl.innerHTML = '';
    let S = 0; const starts = [];
    chapters.forEach(ch => { starts.push(S); S += ch.beats * BEAT; });
    const F = tl.F = S;
    tl.END = F + 2.1;

    const camKey = (t, x, y, w, h, s = SP.cam) => { tl.cam.x.to(t, x, s); tl.cam.y.to(t, y, s); tl.cam.ls.to(t, Math.log(fit(w, h)), s); };
    const first = tiles.get(chapters[0].cell.join(','));
    tl.cam.x.v0 = first.cx; tl.cam.y.v0 = first.cy; tl.cam.ls.v0 = Math.log(fit(110, 110));
    tl.dot = [first.cx, first.cy];

    let prevLeave = 0, prev = null;
    chapters.forEach((ch, i) => {
      const tile = tiles.get(ch.cell.join(','));
      const ctx = { ch, i, S: starts[i], E: starts[i] + ch.beats * BEAT, A: tl.actors[i % 2], el: actors[i % 2], tile, C: [tile.cx, tile.cy], prev, arrive: prevLeave, camKey };
      const out = scenes[ch.scene](ctx);
      tl.tiles.set(tile.key, { appear: out.swap, iconBlur: out.iconBlur !== false });
      tl.caps.push([ctx.S, ch.year, L(ch.caption)]);
      prevLeave = out.leave; prev = { ...ctx, ...out };
    });

    /* finale: skill tiles bloom, every star grows, the stage lands on the card */
    camKey(F + 0.18, 400, 300, 940, 720, SP.camSlow);
    const claimed = new Set(chapters.map(c => c.cell.join(',')));
    const skills = data.finale.map(c => c.join(',')).filter(k => tiles.has(k) && !claimed.has(k));
    for (const k of tiles.keys()) if (!claimed.has(k) && !skills.includes(k)) skills.push(k);
    skills.forEach((k, j) => { tl.tiles.set(k, { appear: F + 0.5 + j * BEAT / 4, bloom: true, iconBlur: true }); tl.cues.push([F + 0.5 + j * BEAT / 4, 'tick3', 0.7 + j * 0.08]); });
    tl.fuse = F + 0.94;
    stars.map(st => st).sort((a, b) => (a.vx + a.vy) - (b.vx + b.vy)).forEach((st, j) => tl.stars.push({ st, t: tl.fuse + j * 0.018 }));
    tl.land = F + 1.0; tl.swap = F + 1.5;
    tl.caps.push([F, 'Now', L(data.now)]);
    tl.cues.push([F + 0.94, 'fuse', 0.8], [F + 1.0, 'land', 0.9], [F + 1.75, 'ding', 0.8]);
    tl.cursor.push({ t0: F + 0.1, t1: F + 0.6, to: ['s', 0.9, 1.08] });

    // Stage dots reveal from the first dot; HUD years for the timeline.
    tl.years = chapters.map(c => c.year).concat(['Now']);
    tl.starts = starts.concat([F]);

    for (const tr of [tl.cam.x, tl.cam.y, tl.cam.ls, ...tl.knob.e, tl.knob.col]) tr.done();
    tl.actors.forEach(a => ['x', 'y', 'w', 'h', 'r', 'col'].forEach(k => a[k].done()));
    tl.cursor.sort((a, b) => a.t0 - b.t0);
    capYear.set(tl.caps.map(c => [c[0], esc(c[1])])); capText.set(tl.caps.map(c => [c[0], esc(c[2])]));
    buildHud();
  }

  /* helpers shared by scenes */
  const bloomTo = (A, S, C, w, h, r, col, s = SP.shape) => {
    A.x.set(S - 0.001, C[0]); A.y.set(S - 0.001, C[1]);
    A.w.set(S - 0.001, 0).to(S, w, s); A.h.set(S - 0.001, 0).to(S, h, s);
    A.r.set(S - 0.001, r); A.col.set(S - 0.001, col);
  };
  const SWAP = 0.22;   // fold → tile hand-off, once the fold spring has settled
  const foldTo = (A, t, color, s = SP.fold) => { A.w.to(t, 200, s); A.h.to(t, 200, s); A.r.to(t, 100, s); A.col.to(t + 0.04, color); };
  const layer = (ctx, html, tin, tout, o = {}) => {
    const el = add(o.top ? topEl : ctx.el.inner, html);
    TL.layers.push({ el, tin, tout, o });
    return el;
  };
  const pos = (x, y) => `left:${x}px;top:${y}px`;

  const scenes = {
    /* 2019 — the dot of the logo becomes a face: human-computer interaction */
    hello(ctx) {
      const { A, S, C, tile, camKey } = ctx, P = BEAT;
      A.x.set(-1, C[0]); A.y.set(-1, C[1]);
      A.w.set(-1, 0).to(S, 16, SP.pop).to(S + P, 200, SP.shape);
      A.h.set(-1, 0).to(S, 16, SP.pop).to(S + P, 200, SP.shape).to(S + 2 * P - 0.02, 184, SP.press).to(S + 2 * P + 0.1, 200, SP.fast);
      A.r.set(-1, 999); A.col.set(-1, WHITE).to(S + 3 * P, tile.color);
      A.vis.push([S, S + 3 * P + 0.2, tile.key]);
      const icon = layer(ctx, `<svg class="zi__cicon" viewBox="0 0 800 600" width="800" height="600" style="${pos(0, 0)}">${tile.iconMarkup}</svg>`, S + P + 0.06, null, { blur: 6 });
      // The right eye winks on the beat.
      const small = [...icon.querySelectorAll('path')].map(p => ({ p, b: tile.icon[[...icon.querySelectorAll('path')].indexOf(p)].b }))
        .filter(o => o.b.width < 14 && o.b.height < 16).sort((a, b) => b.b.x - a.b.x)[0];
      TL.updates.push(t => {
        const on = step(t - (S + 3 * P), SP.color);
        icon.style.color = rgb(INK.map((c, i) => lerp(c, 255, on)));
        if (small) {
          const wk = step(t - (S + 2 * P - 0.03), SP.press) - step(t - (S + 2 * P + 0.12), SP.fast);
          const cx = small.b.x + small.b.width / 2, cy = small.b.y + small.b.height / 2;
          small.p.setAttribute('transform', `translate(${cx} ${cy}) scale(1 ${(1 - 0.82 * clamp(wk)).toFixed(3)}) translate(${-cx} ${-cy})`);
        }
      });
      camKey(S + P, C[0], C[1], 330, 330);
      TL.cues.push([S, 'pop', 0.8], [S + P, 'bloom', 0.8], [S + 2 * P, 'tick2', 0.7], [S + 3 * P, 'pop', 0.6]);
      return { swap: S + 3 * P + 0.2, leave: S + 3 * P, iconBlur: false };
    },

    /* 2022 — a component snaps back to its design token */
    token(ctx) {
      const { A, S, C, tile, camKey, ch } = ctx, P = BEAT, cp = ch.copy;
      const W = 440, H = 260, x0 = C[0] - W / 2, y0 = C[1] - H / 2, x1 = x0 + W;
      bloomTo(A, S, C, W, H, cp.tokenFrom[1], WHITE);
      const grab = S + 0.42, rel = S + 2 * P, dFrom = 12 + 1.2 * cp.tokenFrom[1], dTo = 12 + 1.2 * 41;
      A.r.to(rel, cp.tokenTo[1], SP.snap);
      foldTo(A, S + 3 * P, tile.color);
      A.vis.push([S, S + 3 * P + SWAP, tile.key]);
      TL.dsDrag = { grab, rel, x0, y0, x1, y1: y0 + H, dFrom, rTo: cp.tokenTo[1], rFrom: cp.tokenFrom[1], W, H, actor: ctx.i % 2 };
      const tout = S + 3 * P;
      layer(ctx, `<div class="zi-a zi-tag" style="${pos(x0 + 32, y0 + 32)}">${esc(L(cp.tag))}</div>`, S, tout);
      layer(ctx, `<div class="zi-a zi-h1" style="${pos(x0 + 32, y0 + 54)}">${esc(cp.title)}</div>`, S, tout);
      layer(ctx, `<div class="zi-a zi-sub" style="${pos(x0 + 32, y0 + 104)}">${esc(L(cp.sub))}</div>`, S, tout);
      const chip = layer(ctx, `<div class="zi-a zi-chip" style="${pos(x0 + 32, y0 + 190)}"><span class="zi-sw"><span></span><span></span></span></div>`, S, tout);
      const chipSw = swapper(chip.firstElementChild, 6);
      const tokenHtml = ([n, v]) => `${esc(n)} <span class="zi-dim">· ${v}</span>`;
      chipSw.set([[S, tokenHtml(cp.tokenFrom)], [grab, '__live__'], [rel, tokenHtml(cp.tokenTo)]]);
      layer(ctx, `<div class="zi-a zi-stat" style="${pos(x0 + 408, y0 + 176)}"><b>${esc(cp.stat)}</b><span>${esc(L(cp.statSub))}</span></div>`, rel, tout, { din: 0.04 });
      TL.updates.push(t => {
        if (t < S - 0.1 || t > tout + 0.3) return;
        chipSw(t);
        const [a, b] = chip.firstElementChild.children;
        if (t >= grab && t < rel) b.innerHTML = `radius <span class="zi-dim">· ${Math.round(TL.rNow)}</span>`;
        if (a.innerHTML.includes('__live__')) a.innerHTML = `radius <span class="zi-dim">· 41</span>`;
        chip.firstElementChild.style.width = lerp(a.offsetWidth, b.offsetWidth, +b.style.opacity || 0) + 'px';
      });
      TL.selWin = [S + 0.08, tout];
      TL.cursor.push({ t0: S - 0.1, t1: grab - 0.04, to: ['w', x1 - dFrom, y0 + dFrom] });
      TL.cursor.push({ t0: S + P, t1: S + P + 0.4, to: ['w', x1 - dTo, y0 + dTo] });
      TL.cursor.push({ t0: S + 2 * P + 0.24, t1: S + 3 * P + 0.3, to: ['s', 0.8, 0.84] });
      TL.press.push([grab, rel]);
      TL.cursorIn = S - 0.12;
      camKey(ctx.arrive, C[0], C[1], W + 90, H + 110);
      TL.cues.push([S, 'bloom', 0.8], [grab, 'click', 0.5], [rel, 'tick2', 0.9], [rel + 0.02, 'chime', 0.5], [S + 3 * P, 'pop', 0.6]);
      return { swap: S + 3 * P + SWAP, leave: S + 3 * P };
    },

    /* 2024 — a notification: the paper gets in */
    toast(ctx) {
      const { A, S, C, tile, camKey, ch } = ctx, P = BEAT, cp = ch.copy;
      const W = 430, H = 88, x0 = C[0] - W / 2;
      bloomTo(A, S, C, W, H, 44, WHITE);
      const fold = S + 1.5 * P, acc = S + P;
      foldTo(A, fold, tile.color);
      A.vis.push([S, fold + SWAP, tile.key]);
      const badge = layer(ctx, `<div class="zi-a zi-badge" style="${pos(x0 + 16, C[1] - 28)}"><svg viewBox="0 0 24 24" width="24" height="24" class="zi-ico"><path class="zi-doc" d="M8 4h6l4 4v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z M10 12h5 M10 15.5h5"/><path class="zi-chk" pathLength="1" d="M6.5 12.5l3.6 3.6L17.5 8.6"/></svg></div>`, S, fold);
      const t1 = layer(ctx, `<div class="zi-a zi-l zi-toastt" style="${pos(x0 + 86, C[1] - 11)}"><span class="zi-sw"><span></span><span></span></span></div>`, S, fold);
      const t2 = layer(ctx, `<div class="zi-a zi-l zi-toasts" style="${pos(x0 + 86, C[1] + 13)}"><span class="zi-sw"><span></span><span></span></span></div>`, S, fold);
      const s1 = swapper(t1.firstElementChild, 7), s2 = swapper(t2.firstElementChild, 7);
      s1.set([[S, esc(L(cp.first[0]))], [acc, esc(L(cp.second[0]))]]);
      s2.set([[S, esc(L(cp.first[1]))], [acc, esc(L(cp.second[1]))]]);
      TL.updates.push(t => {
        if (t < S - 0.1 || t > fold + 0.3) return;
        s1(t); s2(t);
        const on = step(t - acc, SP.fast);
        badge.querySelector('.zi-doc').style.opacity = 1 - on;
        const ck = badge.querySelector('.zi-chk');
        ck.style.strokeDasharray = '1 1'; ck.style.strokeDashoffset = (1 - sweepEase(clamp((t - acc) / 0.28))).toFixed(4);
        badge.style.background = rgb(INK.map((c, i) => lerp(c, ACC[i], on)));
      });
      camKey(ctx.arrive, C[0], C[1], W + 120, 260);
      TL.cues.push([S, 'bloom', 0.7], [acc, 'chime', 0.9], [fold, 'pop', 0.55]);
      return { swap: fold + SWAP, leave: fold };
    },

    /* 2025 — insurance you can tell apart from the warranty, switched on */
    toggle(ctx) {
      const { A, S, E, C, camKey, ch } = ctx, P = BEAT, cp = ch.copy;
      const W = 460, H = 172, x0 = C[0] - W / 2, y0 = C[1] - H / 2;
      bloomTo(A, S, C, W, H, 26, WHITE);
      A.vis.push([S, E + SWAP, ctx.tile.key]);
      foldTo(A, E, ctx.tile.color);
      const icon = layer(ctx, `<div class="zi-a zi-itile" style="${pos(x0 + 24, y0 + 22)}"><svg class="zi-ico zi-sa" viewBox="0 0 24 24" width="22" height="22"><path d="M12 3l7 3v5.2c0 4.3-2.9 7.9-7 9.8-4.1-1.9-7-5.5-7-9.8V6l7-3z"/></svg><svg class="zi-ico zi-sb" viewBox="0 0 24 24" width="22" height="22"><path d="M12 3l7 3v5.2c0 4.3-2.9 7.9-7 9.8-4.1-1.9-7-5.5-7-9.8V6l7-3z"/><path d="M9 12.2l2.2 2.2L15.2 10"/></svg></div>`, S, E);
      layer(ctx, `<div class="zi-a zi-t16" style="${pos(x0 + 82, y0 + 24)}">${esc(L(cp.title))}</div>`, S, E);
      layer(ctx, `<div class="zi-a zi-t13" style="${pos(x0 + 82, y0 + 49)}">${esc(L(cp.sub))}</div>`, S, E);
      const price = layer(ctx, `<div class="zi-a zi-r zi-t15" style="${pos(x0 + 372, y0 + 44)}">${esc(cp.price)}</div>`, S, E);
      const track = layer(ctx, `<div class="zi-a zi-toggle" style="${pos(x0 + 384, y0 + 28)}"></div>`, S, E);
      layer(ctx, `<div class="zi-a zi-rule" style="${pos(x0 + 24, y0 + 94)};width:${W - 48}px"></div>`, S, E);
      layer(ctx, `<div class="zi-a zi-l zi-t14d" style="${pos(x0 + 24, y0 + 134)}">${esc(L(cp.foot))}</div>`, S, E);
      layer(ctx, `<div class="zi-a zi-r zi-t14" style="${pos(x0 + W - 24, y0 + 134)}">${esc(L(cp.footValue))}</div>`, S, E);
      const on0 = S + P;
      TL.updates.push(t => {
        if (t < S - 0.1 || t > E + 0.3) return;
        const on = step(t - on0, SP.fast);
        const hover = step(t - (on0 - 0.06), SP.fast);
        track.style.background = rgb([230, 229, 233].map((c, i) => lerp(lerp(c, c - 18, hover), ACC[i], on)));
        icon.querySelector('.zi-sa').style.opacity = 1 - on; icon.querySelector('.zi-sb').style.opacity = on;
        price.style.color = rgb([138, 138, 143].map((c, i) => lerp(c, INK[i], on)));
      });
      // The knob is its own element so it can leave this chapter as the next one's tab indicator.
      const K = TL.knob, off = [x0 + 387, x0 + 413, y0 + 31, y0 + 57], onb = [x0 + 407, x0 + 433, y0 + 31, y0 + 57];
      K.e.forEach((tr, e) => { tr.set(S - 0.001, off[e]); tr.to(on0, onb[e], [SP.trail, SP.lead, SP.fast, SP.fast][e]); });
      K.col.set(S - 0.001, WHITE);
      K.vis.push([S + 0.06, null]); K.shadow = [S, E];
      TL.knobOn = onb;
      TL.cursor.push({ t0: S + 0.02, t1: on0 - 0.08, to: ['w', x0 + 416, y0 + 48] });
      TL.press.push([on0 - 0.04, on0 + 0.06]);
      camKey(ctx.arrive, C[0], C[1], W + 110, H + 120);
      TL.cues.push([S, 'bloom', 0.8], [on0 - 0.04, 'click', 0.6], [on0, 'toggle', 1]);
      return { swap: E + SWAP, leave: E, knob: true };
    },

    /* 2026 — three checkout lines, conversion lifted, then the designer ships the code */
    payments(ctx) {
      const { A, S, C, tile, camKey, ch, prev } = ctx, P = BEAT, cp = ch.copy;
      const TW = 420, TH = 72, tx0 = C[0] - TW / 2, slots = [0, 1, 2].map(k => [tx0 + 6 + 136 * k, tx0 + 142 + 136 * k]);
      const tabsAt = S + 0.14, click = S + P, ring = S + 2 * P, code = S + 3 * P, run = S + 4 * P, fold = run + 0.12;
      bloomTo(A, tabsAt, C, TW, TH, 36, hex('#2a2a2d'));
      A.w.to(ring, 260, SP.shape); A.h.to(ring, 260, SP.shape); A.r.to(ring, 130, SP.shape); A.col.to(ring, hex('#1f1f21'));
      A.w.to(code, 540, SP.shape); A.h.to(code, 232, SP.shape); A.r.to(code, 18, SP.shape); A.col.to(code, hex('#19191b'));
      foldTo(A, fold, tile.color);
      A.vis.push([tabsAt, fold + SWAP, tile.key]);
      TL.codeWin = [code, fold];
      const K = TL.knob, ind = k => [slots[k][0], slots[k][1], C[1] - 30, C[1] + 30];
      if (!prev?.knob) K.e.forEach((tr, e) => tr.set(tabsAt, ind(0)[e])), K.vis.push([tabsAt + 0.1, null]);
      K.e.forEach((tr, e) => tr.to(S, ind(0)[e], [SP.fly, SP.flyTrail, SP.fly, SP.fly][e]));
      K.e.forEach((tr, e) => tr.to(click, ind(2)[e], [SP.trail, SP.lead, SP.fast, SP.fast][e]));
      const dot = [C[0] - 5, C[0] + 5, C[1] - 105, C[1] - 95];
      K.e.forEach((tr, e) => tr.to(ring, dot[e], SP.fast));
      K.col.to(ring, ACC2);
      K.vis[K.vis.length - 1][1] = ring + 0.2;
      // Tabs: base labels, and ink labels clipped by the moving indicator.
      const labels = cp.tabs.map(L);
      layer(ctx, `<div class="zi-a" style="${pos(0, 0)}">${labels.map((l, k) => `<div class="zi-a zi-c zi-tab" style="${pos((slots[k][0] + slots[k][1]) / 2, C[1])}">${esc(l)}</div>`).join('')}</div>`, tabsAt, ring, { din: 0.08 });
      const ink = layer(ctx, `<div class="zi-a zi-tabink" style="${pos(tx0, C[1] - TH / 2)};width:${TW}px;height:${TH}px">${labels.map((l, k) => `<div class="zi-a zi-c zi-tab zi-tab--ink" style="${pos((slots[k][0] + slots[k][1]) / 2 - tx0, TH / 2)}">${esc(l)}</div>`).join('')}</div>`, tabsAt, ring, { din: 0.08, top: true });
      TL.tabInk = { el: ink, x0: tx0, y0: C[1] - TH / 2, win: [tabsAt, ring + 0.1] };
      // Ring: conversion sweeps from 70% to 80%.
      const R = 100, arc = layer(ctx, `<svg class="zi-a zi-ring" viewBox="-130 -130 260 260" width="260" height="260" style="${pos(C[0] - 130, C[1] - 130)}"><circle r="${R}" class="zi-ringtrack"/><circle r="${R}" class="zi-ringarc" pathLength="100" transform="rotate(-90)"/></svg>`, ring, code, { din: 0.02 });
      const num = layer(ctx, `<div class="zi-a zi-c zi-ringnum" style="${pos(C[0], C[1] + 4)}">70%</div>`, ring, code, { din: 0.06 });
      layer(ctx, `<div class="zi-a zi-c zi-ringlab" style="${pos(C[0], C[1] - 36)}">${esc(L(cp.ringLabel))}</div>`, ring, code, { din: 0.08 });
      layer(ctx, `<div class="zi-a zi-c zi-ringsub" style="${pos(C[0], C[1] + 42)}">${esc(L(cp.ringSub))}</div>`, ring, code, { din: 0.1 });
      const a0 = ring + 0.04, a1 = ring + P / 2;
      TL.updates.push(t => {
        if (t < ring - 0.1 || t > code + 0.3) return;
        const v = lerp(0, cp.ringFrom, sweepEase(clamp((t - a0) / 0.22))) + (cp.ringTo - cp.ringFrom) * sweepEase(clamp((t - a1) / 0.24));
        arc.querySelector('.zi-ringarc').style.strokeDasharray = `${v.toFixed(2)} 100`;
        num.textContent = `${Math.round(v < cp.ringFrom - 0.5 ? Math.max(0, v) : v)}%`;
      });
      // Code: type, AI ghost completion, Tab to accept, ⌘↵ to run.
      const ex0 = C[0] - 270, ey0 = C[1] - 116, typeT = code + 0.03, ghostT = code + 0.16, acceptT = code + P / 2;
      layer(ctx, `<div class="zi-a zi-file" style="${pos(ex0 + 22, ey0 + 18)}">${esc(cp.file)}</div>`, code, fold);
      layer(ctx, `<div class="zi-a zi-ai" style="${pos(ex0 + 518, ey0 + 14)}">✦ AI</div>`, code, fold);
      layer(ctx, `<div class="zi-a zi-rule zi-rule--dark" style="${pos(ex0, ey0 + 46)};width:540px"></div>`, code, fold);
      const hl = s => esc(s).replace(/(\w+)=/g, '<i class="zi-at">$1</i><i class="zi-pu">=</i>').replace(/(&quot;[^&]*&quot;)/g, '<i class="zi-st">$1</i>').replace(/(\/&gt;|&lt;)/g, '<i class="zi-pu">$1</i>');
      const typed = layer(ctx, `<div class="zi-a zi-code" style="${pos(ex0 + 26, ey0 + 64)}">${[...cp.code[0]].map(c => `<span>${esc(c)}</span>`).join('')}<span class="zi-tabkey">Tab</span></div>`, code, fold);
      const ghost = layer(ctx, `<div class="zi-a zi-code zi-ghost" style="${pos(ex0 + 26, ey0 + 94)}">${cp.code.slice(1).map(l => `<div>${hl(l)}</div>`).join('')}</div>`, ghostT, fold, { din: 0 });
      layer(ctx, `<div class="zi-a zi-foot" style="${pos(ex0 + 26, ey0 + 196)}">${esc(L(cp.chip))} <b>${esc(cp.chipValue)}</b></div>`, acceptT, fold, { din: 0.04 });
      const runKey = layer(ctx, `<div class="zi-a zi-rt zi-runkey" style="${pos(ex0 + 514, ey0 + 188)}">⌘ ↵</div>`, acceptT + 0.1, fold);
      const bar = layer(ctx, `<div class="zi-a zi-compile" style="${pos(ex0, ey0)}"></div>`, run, fold + 0.05, { din: 0 });
      TL.updates.push(t => {
        if (t < code - 0.1 || t > fold + 0.3) return;
        const spans = typed.querySelectorAll('span:not(.zi-tabkey)');
        spans.forEach((s, k) => { const u = clamp((t - typeT - k * 0.026) / 0.05); s.style.opacity = u; });
        const tab = typed.querySelector('.zi-tabkey');
        const tv = clamp((t - ghostT) / 0.08) * (1 - clamp((t - acceptT - 0.08) / 0.1));
        tab.style.opacity = tv; tab.style.transform = `scale(${1 - 0.12 * (step(t - acceptT + 0.03, SP.press) - step(t - acceptT - 0.06, SP.fast))})`;
        ghost.classList.toggle('zi-ghost', t < acceptT);
        runKey.style.transform = `translate(-100%,0) scale(${1 - 0.12 * (step(t - run + 0.03, SP.press) - step(t - run - 0.06, SP.fast))})`;
        bar.style.width = (540 * sweepEase(clamp((t - run) / 0.16))) + 'px';
      });
      TL.cursor.push({ t0: S + 0.08, t1: click - 0.08, to: ['w', (slots[2][0] + slots[2][1]) / 2 + 8, C[1] + 8] });
      TL.cursor.push({ t0: click + 0.3, t1: ring + 0.5, to: ['s', 0.82, 0.86] });
      TL.press.push([click - 0.04, click + 0.06]);
      camKey(ctx.arrive, C[0], C[1], TW + 120, 220, SP.fly);
      camKey(ring, C[0], C[1], 330, 330);
      camKey(code, C[0], C[1], 610, 300);
      TL.cues.push([S, 'sweep', 0.6], [tabsAt, 'bloom', 0.6], [click - 0.04, 'click', 0.6], [click, 'tick', 0.8], [ring, 'pop', 0.6], [a1, 'sweep', 0.5],
        ...[...cp.code[0]].map((c, k) => [typeT + k * 0.026, 'key', 0.45]), [acceptT, 'key', 0.8], [run, 'enter', 0.9], [fold, 'pop', 0.6]);
      return { swap: fold + SWAP, leave: run };
    },
  };

  /* ---------- HUD ---------- */
  function buildHud() {
    const line = Q('.zi__line');
    line.querySelectorAll('.zi__tick').forEach(n => n.remove());
    TL.years.forEach((y, i) => add(line, `<div class="zi__tick" style="left:${(i / (TL.years.length - 1)) * 100}%"><i></i><span>${esc(y)}</span></div>`));
    Q('.zi__skiptext').textContent = L(matchMedia('(hover: none)').matches ? data.ui.skipTouch : data.ui.skip);
    Q('.zi__esc').textContent = L(data.ui.esc);
    Q('.zi__soundtext').textContent = L(data.ui.sound);
    soundBtn.setAttribute('aria-label', L(data.ui.sound));
  }

  /* ---------- cursor ---------- */
  function camAt(t) {
    const c = TL.cam, s = Math.exp(c.ls.at(t));
    let x = c.x.at(t), y = c.y.at(t), sc = s;
    const u = land(t - TL.land);
    if (u > 0) {
      const g = M.graphic, sf = g.w / 800;
      const fx = (M.vw / 2 - g.x) / sf, fy = (M.vh / 2 - g.y) / sf;
      sc = Math.exp(lerp(Math.log(s), Math.log(sf), u)); x = lerp(x, fx, u); y = lerp(y, fy, u);
    }
    return { x, y, s: sc };
  }
  const toScreen = (p, cam) => p[0] === 's' ? [p[1] * M.vw, p[2] * M.vh] : [M.vw / 2 + (p[1] - cam.x) * cam.s, M.vh / 2 + (p[2] - cam.y) * cam.s];
  function cursorAt(t, cam) {
    const segs = TL.cursor;
    let k = -1; for (let i = 0; i < segs.length; i++) if (segs[i].t0 <= t) k = i;
    const home = ['s', 0.92, 1.1];
    if (k < 0) return toScreen(home, cam);
    const seg = segs[k], A = k > 0 ? toScreen(segs[k - 1].to, cam) : toScreen(home, cam), B = toScreen(seg.to, cam);
    if (t >= seg.t1) return B;
    const u = moveEase((t - seg.t0) / (seg.t1 - seg.t0)), dx = B[0] - A[0], dy = B[1] - A[1], arc = 0.08 * Math.sin(Math.PI * u);
    return [A[0] + dx * u - dy * arc, A[1] + dy * u + dx * arc];
  }
  const pressAt = t => clamp(TL.press.reduce((v, [a, b]) => v + step(t - a, SP.press) - step(t - b, SP.fast), 0));

  /* ---------- seek(t): the whole frame from time alone ---------- */
  function seek(t) {
    const F = TL.F, P = BEAT;
    const cam = camAt(t);
    // Stage: full viewport, landing on the hero card.
    const u = land(t - TL.land), c = M.card;
    const sx = lerp(0, c.x, u), sy = lerp(0, c.y, u), sw = lerp(M.vw, c.w, u), sh = lerp(M.vh, c.h, u);
    const st = stageEl.style;
    st.left = sx + 'px'; st.top = sy + 'px'; st.width = sw + 'px'; st.height = sh + 'px';
    st.borderRadius = lerp(0, M.radius, u) + 'px';
    st.background = rgb(STAGE.map((v, i) => lerp(v, CARD[i], smooth((t - TL.land + 0.1) / 0.4))));
    const live = t < TL.swap;
    stageEl.style.visibility = live ? 'visible' : 'hidden';
    world.style.transform = `translate(${(M.vw / 2 - cam.x * cam.s - sx).toFixed(3)}px,${(M.vh / 2 - cam.y * cam.s - sy).toFixed(3)}px) scale(${cam.s.toFixed(5)})`;

    // Dot grid, revealed outward from the first dot.
    const gs = 50 * cam.s, ox = M.vw / 2 - cam.x * cam.s - sx, oy = M.vh / 2 - cam.y * cam.s - sy;
    dots.style.backgroundSize = `${gs}px ${gs}px`;
    dots.style.backgroundPosition = `${ox - gs / 2}px ${oy - gs / 2}px`;
    const rv = Math.max(0, (t - 0.02) * 1400) * cam.s / 1.4;
    const [dx, dy] = [ox + TL.dot[0] * cam.s, oy + TL.dot[1] * cam.s];
    const mask = rv > Math.hypot(M.vw, M.vh) * 1.6 ? 'none' : `radial-gradient(circle at ${dx}px ${dy}px, #000 ${rv}px, transparent ${rv + 160}px)`;
    dots.style.webkitMaskImage = dots.style.maskImage = mask;
    dots.style.opacity = (1 - smooth((t - (F + 0.7)) / 0.35)).toFixed(3);

    // Tiles: bloom as circles, fuse into the graphic in the finale.
    const cards = [];
    TL.actors.forEach(A => { const v = A.vis.find(([a, b]) => t >= a && t < b); if (v) cards.push({ key: v[2], x: A.x.at(t), y: A.y.at(t), w: Math.max(0, A.w.at(t)), h: Math.max(0, A.h.at(t)) }); });
    for (const [key, tl] of tiles) {
      const info = TL.tiles.get(key);
      let r = 0, iv = 0;
      if (info) {
        r = info.bloom ? 100 * Math.min(1.02, step(t - info.appear, SP.bloom)) : (t >= info.appear - 0.02 ? 100 : 0);
        iv = info.iconBlur ? win(t, info.appear, null, { din: 0.06 }) : (t >= info.appear - 0.02 ? 1 : 0);
      }
      r += 42 * step(t - TL.fuse, SP.fuse);
      tl.clip.setAttribute('r', Math.max(0, r).toFixed(2));
      const rest = info && !info.bloom ? smooth((t - info.appear - 0.5) / 0.4) * (1 - smooth((t - (TL.F + 0.25)) / 0.35)) : 0;
      let under = 0;
      for (const c of cards) {
        if (c.key === key) continue;
        const dx = Math.max(0, Math.abs(tl.cx - c.x) - c.w / 2), dy = Math.max(0, Math.abs(tl.cy - c.y) - c.h / 2);
        under = Math.max(under, 1 - smooth((Math.hypot(dx, dy) - 70) / 90));
      }
      const dim = 1 - (1 - 0.8 * rest) * (1 - 0.9 * under);
      tl.veil.setAttribute('opacity', dim.toFixed(3));
      tl.veil.setAttribute('r', dim > 0.001 && r > 0 ? (Math.min(r, 100) + 1.5).toFixed(2) : 0);
      tl.iconEl.style.opacity = iv.toFixed(3);
      tl.iconEl.style.filter = iv < 0.98 && iv > 0.01 ? `blur(${((1 - iv) * 6).toFixed(2)}px)` : 'none';
    }
    for (const { st: s, t: ts } of TL.stars) {
      const k = step(t - ts, SP.fuse);
      s.el.setAttribute('transform', `translate(${s.vx} ${s.vy}) scale(${Math.max(0, k).toFixed(4)}) translate(${-s.vx} ${-s.vy})`);
    }

    // Actors (the shape that plays each chapter).
    TL.actors.forEach((A, i) => {
      const el = actors[i].el, vis = A.vis.some(([a, b]) => t >= a && t < b);
      el.style.display = vis ? 'block' : 'none';
      let w = Math.max(0, A.w.at(t)), h = Math.max(0, A.h.at(t)), r = A.r.at(t);
      const x = A.x.at(t), y = A.y.at(t);
      if (TL.dsDrag?.actor === i) r = dsRadius(t, r);
      const L0 = x - w / 2, T0 = y - h / 2;
      Object.assign(el.style, { left: L0 + 'px', top: T0 + 'px', width: w + 'px', height: h + 'px', borderRadius: Math.min(r, w / 2, h / 2) + 'px', background: rgb(A.col.at(t)) });
      const bright = A.col.at(t).reduce((a, b) => a + b, 0) / 765;
      el.style.boxShadow = TL.codeWin && t >= TL.codeWin[0] && t < TL.codeWin[1] + 0.2 ? 'inset 0 0 0 1px #303034' : bright > 0.6 ? `0 18px 48px -18px rgba(0,0,0,${(0.55 * bright).toFixed(3)})` : 'none';
      actors[i].inner.style.left = -L0 + 'px'; actors[i].inner.style.top = -T0 + 'px';
    });
    for (const ly of TL.layers) {
      const v = win(t, ly.tin, ly.tout, ly.o);
      fx(ly.el, v, ly.o.blur ?? 8);
    }
    for (const f of TL.updates) f(t);

    // Knob: toggle knob → tab indicator → the arc's head.
    const K = TL.knob, kv = K.vis.some(([a, b]) => t >= a && (b == null || t < b));
    knobEl.style.visibility = kv ? 'visible' : 'hidden';
    if (kv) {
      const [l, r, tp, bt] = K.e.map(tr => tr.at(t)), kw = Math.max(0, r - l), kh = Math.max(0, bt - tp);
      Object.assign(knobEl.style, { left: l + 'px', top: tp + 'px', width: kw + 'px', height: kh + 'px', borderRadius: Math.min(kw, kh) / 2 + 'px', background: rgb(K.col.at(t)) });
      knobEl.style.opacity = (1 - smooth((t - (K.vis[K.vis.length - 1][1] - 0.12)) / 0.1)).toFixed(3);
      knobEl.style.boxShadow = K.shadow && t < K.shadow[1] + 0.2 ? '0 1px 3px rgba(0,0,0,.2)' : 'none';
      const ti = TL.tabInk;
      if (ti && t >= ti.win[0] - 0.05 && t < ti.win[1]) {
        const rr = Math.min(kw, kh) / 2;
        ti.el.style.clipPath = `inset(${tp - ti.y0}px ${ti.x0 + 420 - r}px ${ti.y0 + 72 - bt}px ${l - ti.x0}px round ${rr}px)`;
      }
    }

    // Design-system chrome: Figma-like selection around the card.
    const selv = TL.selWin ? win(t, TL.selWin[0], TL.selWin[1], { din: 0.02, dout: 0.08 }) : 0;
    fx(selEl, selv, 3);
    if (selv > 0) {
      const A = TL.actors[TL.dsDrag.actor], w = A.w.at(t), h = A.h.at(t), x0 = A.x.at(t) - w / 2, y0 = A.y.at(t) - h / 2, rr = Math.min(dsRadius(t, A.r.at(t)), w / 2, h / 2);
      const ol = selEl.querySelector('.zi__selol').style;
      Object.assign(ol, { left: x0 - 0.75 + 'px', top: y0 - 0.75 + 'px', width: w + 1.5 + 'px', height: h + 1.5 + 'px', borderRadius: rr + 0.75 + 'px' });
      [[x0, y0], [x0 + w, y0], [x0, y0 + h], [x0 + w, y0 + h]].forEach(([x, y], k) => { const s = selEl.querySelectorAll('.zi__selh')[k].style; s.left = x + 'px'; s.top = y + 'px'; });
      const dd = 12 + 1.2 * rr, rh = selEl.querySelector('.zi__selr').style; rh.left = x0 + w - dd + 'px'; rh.top = y0 + dd + 'px';
      const nm = selEl.querySelector('.zi__selname').style; nm.left = x0 + 'px'; nm.top = y0 - 20 + 'px';
      const bd = selEl.querySelector('.zi__selbadge'); bd.style.left = x0 + w / 2 + 'px'; bd.style.top = y0 + h + 10 + 'px';
      bd.textContent = `${Math.round(w)} × ${Math.round(h)}`;
    }

    // HUD and cursor live in screen space.
    const hv = win(t, 0.3, F + 0.72, { din: 0.1, dout: 0.22 });
    fx(hud, hv, 4); fx(skipEl, win(t, 0.6, F + 0.72, { dout: 0.22 }), 4);
    soundBtn.style.opacity = hv.toFixed(3); soundBtn.style.visibility = hv < 0.01 ? 'hidden' : 'visible';
    capYear(t); capText(t);
    let p = 0; const S = TL.starts;
    for (let i = 0; i < S.length - 1; i++) if (t >= S[i]) p = i + clamp((t - S[i]) / (S[i + 1] - S[i]));
    if (t >= S[S.length - 1]) p = S.length - 1;
    const pct = p / (S.length - 1) * 100;
    hudFill.style.width = pct + '%'; hudHead.style.left = pct + '%';
    Q('.zi__line').querySelectorAll('.zi__tick').forEach((n, i) => n.classList.toggle('is-on', p >= i - 0.001));
    const bars = soundBtn.querySelectorAll('i'), beatEnv = Math.exp(-((t % BEAT) / 0.14));
    bars.forEach((b, i) => { b.style.height = (soundOn ? 3 + 9 * beatEnv * (0.55 + 0.45 * Math.abs(Math.sin(t * 7.3 + i * 1.9))) : 3) + 'px'; });

    const cs = cursorAt(t, cam), cv = clamp((t - (TL.cursorIn ?? 1.8)) / 0.2) * (1 - clamp((t - (F + 0.3)) / 0.25));
    cursorEl.style.opacity = cv.toFixed(3);
    cursorEl.style.transform = `translate(${(cs[0] - 6.4).toFixed(2)}px,${(cs[1] - 3.7).toFixed(2)}px) scale(${(1 - 0.14 * pressAt(t)).toFixed(4)})`;
    TL.cam.now = cam;

    // After the swap the real hero card is on screen; bring its content in.
    heroReveal(t);
  }

  /* Radius handle: direct manipulation while held, springs to the token on release. */
  function dsRadius(t, base) {
    const D = TL.dsDrag;
    if (!D) return base;
    const rOf = t2 => { const [x, y] = cursorWorld(t2); return clamp(((D.x1 - x) + (y - D.y0)) / 2 - 12, 0, 130) / 1.2; };
    if (t >= D.grab && t < D.rel) return (TL.rNow = rOf(t));
    if (t >= D.rel && t < D.rel + 1.4) return base + (rOf(D.rel - 1e-4) - D.rFrom) * decay(t - D.rel, SP.snap);
    return base;
  }
  function cursorWorld(t) { const cam = camAt(t), [x, y] = cursorAt(t, cam); return [cam.x + (x - M.vw / 2) / cam.s, cam.y + (y - M.vh / 2) / cam.s]; }

  function heroReveal(t) {
    const F = TL.F;
    const set = (el, v, dy = 14) => {
      if (!el) return;
      el.style.opacity = v.toFixed(3);
      el.style.filter = v < 0.99 ? `blur(${((1 - v) * 10).toFixed(2)}px)` : 'none';
      el.style.translate = `0 ${((1 - v) * dy).toFixed(2)}px`;
    };
    set(heroH1, win(t, F + 1.5, null, { din: 0 }), 18);
    set(heroLede, win(t, F + 1.62, null, { din: 0 }));
    // The first dot comes back as the Resume button.
    const bv = t < F + 1.7 ? 0 : 1;
    heroBtnWrap.style.opacity = bv;
    if (bv) {
      const b = M.btn, g = step(t - (F + 1.72), SP.shape), pop = step(t - (F + 1.7), SP.pop);
      const dw = 14 * pop, cx = 20 + 7;
      const iw = lerp(dw, b.w, g), ih = lerp(dw, b.h, g), left = lerp(cx - dw / 2, 0, g), top = (b.h - ih) / 2;
      heroBtn.style.clipPath = g > 0.999 && pop > 0.999 ? 'none' : `inset(${top.toFixed(2)}px ${(b.w - left - iw).toFixed(2)}px ${top.toFixed(2)}px ${left.toFixed(2)}px round ${lerp(dw / 2, 12, g).toFixed(2)}px)`;
      heroBtn.style.background = rgb(WHITE.map((c, i) => lerp(c, ACC[i], smooth((t - (F + 1.74)) / 0.18))));
      const label = heroBtn.querySelector('.roll');
      if (label) { const lv = win(t, F + 1.8, null, { din: 0 }); label.style.opacity = lv; label.style.filter = lv < 0.99 ? `blur(${((1 - lv) * 6).toFixed(2)}px)` : 'none'; }
    }
  }
  function clearHero() {
    for (const el of [heroH1, heroLede, heroBtnWrap, heroBtn, heroBtn.querySelector('.roll')]) {
      if (!el) continue;
      for (const p of ['opacity', 'filter', 'translate', 'clipPath', 'background']) el.style[p] = '';
    }
  }

  /* ---------- driver ---------- */
  let playing = false, raf = 0, t = 0, rate = 1, warping = false, last = 0, soundOn = false;
  const audio = { ctx: null, buf: null, src: null, loading: null };
  const SEEN = 'zijiez-intro';

  async function startAudio() {
    try {
      audio.ctx ||= new (window.AudioContext || window.webkitAudioContext)();
      await audio.ctx.resume();
      audio.loading ||= fetch('assets/audio/intro.mp3').then(r => r.arrayBuffer()).then(b => audio.ctx.decodeAudioData(b));
      audio.buf = await audio.loading;
      if (!soundOn || !playing) return;
      audio.src = audio.ctx.createBufferSource();
      audio.src.buffer = audio.buf; audio.src.connect(audio.ctx.destination);
      audio.src.playbackRate.value = rate;
      audio.src.start(0, Math.min(t, audio.buf.duration - 0.05));
    } catch { soundOn = false; soundBtn.setAttribute('aria-pressed', 'false'); }
  }
  function stopAudio() { try { audio.src?.stop(); } catch {} audio.src = null; }
  soundBtn.addEventListener('click', e => {
    e.stopPropagation();
    soundOn = !soundOn;
    soundBtn.setAttribute('aria-pressed', String(soundOn));
    soundBtn.classList.toggle('is-on', soundOn);
    if (soundOn) startAudio(); else stopAudio();
  });
  ['pointerdown', 'touchstart'].forEach(ev => soundBtn.addEventListener(ev, e => e.stopPropagation(), { passive: true }));

  // Skipping warps time: accelerate through the remaining tiles, land at a calm pace.
  function warp() { if (playing && !warping && t < TL.END - 0.3) warping = true; }
  function enterNow() {
    if (!playing) return;
    playing = false; cancelAnimationFrame(raf);
    overlay.classList.add('zi--leave');
    t = TL.END; seek(TL.END);
    setTimeout(finish, 320);
  }
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (warping) {
      const target = t < TL.F - 0.1 ? 9 : 1.6;
      rate += (target - rate) * (1 - Math.exp(-dt / 0.07));
      if (audio.src) audio.src.playbackRate.value = rate;
    }
    t += dt * rate;
    seek(Math.min(t, TL.END));
    if (t >= TL.END) return finish();
    raf = requestAnimationFrame(frame);
  }
  const onKey = e => {
    if (!playing) return;
    if (e.key === 'Escape') { e.preventDefault(); enterNow(); return; }
    if (e.target === soundBtn && (e.key === 'Enter' || e.key === ' ')) return;
    e.preventDefault(); warp();
  };
  const onWheel = e => { if (playing) { e.preventDefault(); warp(); } };
  const onDown = () => warp();
  const onResize = () => { if (playing) { build(); } };
  function finish() {
    playing = false; cancelAnimationFrame(raf);
    overlay.remove(); clearHero();
    root.classList.remove('intro-play', 'intro-live');
    removeEventListener('keydown', onKey, true); removeEventListener('wheel', onWheel, { capture: true });
    removeEventListener('touchmove', onWheel, { capture: true }); overlay.removeEventListener('pointerdown', onDown);
    removeEventListener('resize', onResize);
    if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
    try { sessionStorage.setItem(SEEN, 'seen'); } catch {}
    document.dispatchEvent(new CustomEvent('zijiez:introdone'));
  }

  async function start() {
    window.__zijiezIntroStarted = true;
    document.body.appendChild(overlay);
    overlay.classList.remove('zi--leave');
    if (!tiles.size) await loadTiles();
    await Promise.race([document.fonts?.ready, new Promise(r => setTimeout(r, 1200))]);
    scrollTo(0, 0);
    build();
    t = 0; rate = 1; warping = false;
    seek(0);
    root.classList.add('intro-live', 'intro-play');
    if (SEEK) return;
    playing = true;
    addEventListener('keydown', onKey, true);
    addEventListener('wheel', onWheel, { passive: false, capture: true });
    addEventListener('touchmove', onWheel, { passive: false, capture: true });
    overlay.addEventListener('pointerdown', onDown);
    addEventListener('resize', onResize);
    if (soundOn) startAudio();
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  // Frame-exact access for rendering and review: ?intro=seek&t=3.5
  window.ZijiezIntroEngine = {
    seek: x => seek(x), get end() { return TL?.END; }, get cues() { return TL?.cues; }, get beats() { return TL && { F: TL.F, starts: TL.starts }; },
    ready: null,
  };

  // The logo replays the intro on the home page.
  document.querySelector('.nav__brand')?.addEventListener('click', e => {
    if (playing || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    e.preventDefault();
    start();
  });

  if (root.classList.contains('intro-play')) {
    window.ZijiezIntroEngine.ready = start().then(() => {
      if (SEEK && params.has('t')) seek(parseFloat(params.get('t')));
    }).catch(() => { root.classList.remove('intro-play', 'intro-live'); overlay.remove(); clearHero(); });
  }
})();
