var e=`/* Agent presence. Solid fills on the light canvas; every atom moves by its own translate, scale,
   rotate and opacity (bars and the line by a rounded clip), written by one shared frame loop.
   Colour follows the state's tone and morphs with it. */

.z-presence {
  --z-presence-ink: var(--z-color-blue);
  --z-presence-mid: color-mix(in srgb, var(--z-presence-ink) 40%, var(--z-color-surface));
  --z-presence-skin: color-mix(in srgb, var(--z-presence-ink) 15%, var(--z-color-surface));
  --z-presence-fade: var(--z-motion-layout) var(--z-ease-out);
  display: inline-flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 100%;
  vertical-align: middle;
}

.z-presence[data-tone='active'],
.z-presence[data-tone='busy'] { --z-presence-ink: var(--z-color-blue-action); }
.z-presence[data-tone='success'] { --z-presence-ink: var(--z-color-success); }
.z-presence[data-tone='danger'] { --z-presence-ink: var(--z-color-danger); }

.z-presence__body {
  position: relative;
  width: var(--z-presence-size, 160px);
  max-width: 100%;
  aspect-ratio: 1;
  container-type: inline-size;
  pointer-events: none;
  transition: scale 240ms var(--z-ease-out);
}

/* Every atom is centred in the body; the frame loop moves it from there. */
.z-presence__body :is(.z-presence__disc, .z-presence__dot, .z-presence__ring, .z-presence__petal, .z-presence__cell) {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  margin: auto;
  border-radius: 50%;
  background-color: var(--z-presence-ink);
  transition: background-color var(--z-presence-fade);
}

/* Halo orb: skin, middle and core, with a ring of particles. */
.z-presence__body .z-presence__disc--skin { width: 86%; height: 86%; background-color: var(--z-presence-skin); }
.z-presence__body .z-presence__disc--mid { width: 62%; height: 62%; background-color: var(--z-presence-mid); }
.z-presence__disc--core { width: 38%; height: 38%; }
.z-presence__dot { width: 4.6%; height: 4.6%; }

/* Ripple: rings traveling in (listening) or out (answering) around a core. */
.z-presence__body .z-presence__ring {
  width: 100%;
  height: 100%;
  border: 1.2cqi solid var(--z-presence-ink);
  background-color: color-mix(in srgb, var(--z-presence-ink) 7%, transparent);
  transition: border-color var(--z-presence-fade), background-color var(--z-presence-fade);
}
.z-presence--ripple .z-presence__disc--core { width: 34%; height: 34%; }

/* Bloom: six petals around a bud. */
.z-presence__body .z-presence__petal {
  width: 26%;
  height: 44%;
  border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;
  background-color: var(--z-presence-mid);
}
.z-presence__disc--bud { width: 30%; height: 30%; }

/* Signal bars and the activity line: rounded clips over full-height pills. */
.z-presence__row {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4cqi;
}

.z-presence__bar,
.z-presence__tick {
  flex: none;
  border-radius: 999px;
  background-color: var(--z-presence-ink);
  transition: background-color var(--z-presence-fade);
}

.z-presence__bar { width: 3.6cqi; height: 56cqi; }

.z-presence--line .z-presence__body {
  mask-image: linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent);
}

.z-presence__track {
  inset: 0 auto 0 -1cqi;
  justify-content: flex-start;
  gap: 1cqi;
}

.z-presence__tick { width: 1.5cqi; height: 50cqi; }

/* Status matrix: 7 × 7 dots, a 56% dot on a one-seventh pitch. */
.z-presence__cell { width: 8cqi; height: 8cqi; }

/* Done and error write a mark into the core once the body has settled. */
.z-presence__glyph {
  position: absolute;
  inset: 0;
  width: 58%;
  height: 58%;
  margin: auto;
  fill: none;
  stroke: var(--z-color-on-dark);
  stroke-width: 2.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z-presence__glyph path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset var(--z-motion-feedback) var(--z-ease-out);
}

.z-presence[data-state='done'] .z-presence__check,
.z-presence[data-state='error'] .z-presence__close {
  stroke-dashoffset: 0;
  transition-duration: 240ms;
  transition-delay: 120ms;
}

/* At rest the loop sleeps and idle breathes in CSS instead. */
.z-presence[data-active='true'][data-resting][data-state='idle'] .z-presence__body {
  animation: z-presence-breathe 4800ms ease-in-out infinite;
}

@keyframes z-presence-breathe {
  50% { scale: 1.03; }
}

/* The sentence, when shown: a tone dot and one line of Inter. */
.z-presence__sentence {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  max-width: min(280px, 100vw - 48px);
  margin: 0;
  color: var(--z-color-ink-secondary);
  font: 500 var(--z-type-small) / var(--z-type-small-leading) var(--z-font-interface);
  text-align: center;
}

.z-presence__sentence::before {
  content: '';
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--z-presence-ink);
  translate: 0 -1px;
  transition: background-color var(--z-presence-fade);
}

@media (prefers-reduced-motion: reduce) {
  .z-presence__body,
  .z-presence__body *,
  .z-presence__sentence::before {
    animation: none !important;
    transition: none !important;
  }
}

@media (forced-colors: active) {
  .z-presence {
    forced-color-adjust: none;
    --z-presence-ink: CanvasText;
    --z-presence-mid: GrayText;
    --z-presence-skin: Canvas;
  }

  .z-presence__glyph { stroke: Canvas; }
}
`;export{e as t};