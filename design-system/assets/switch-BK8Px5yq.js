var e=`/* Switch family.
   One number, --z-switch-p (0 off, 1 on), drives everything: the thumb's travel, the fill, the glyph,
   a tile's wash. It is registered, so one transition on the root moves them all together on the brand
   spring, and a drag writes it straight from the pointer. Only translate, scale, opacity and colours
   change; no layout property ever animates. */

@property --z-switch-p { syntax: '<number>'; inherits: true; initial-value: 0; }

.z-switch {
  /* Geometry. JS reads --z-switch-inset (a literal length) to measure a drag, so keep it literal. */
  --z-switch-track-w: 48px;
  --z-switch-track-h: 28px;
  --z-switch-thumb: 22px;
  --z-switch-inset: 3px;
  --z-switch-rail-h: var(--z-switch-track-h);
  --z-switch-travel: calc(var(--z-switch-track-w) - var(--z-switch-thumb) - 2 * var(--z-switch-inset));
  --z-switch-dir: 1;
  /* Colour hooks. */
  --z-switch-off: var(--z-color-control-off);
  --z-switch-off-hover: color-mix(in srgb, var(--z-color-control-off) 86%, var(--z-color-ink));
  --z-switch-on: var(--z-color-blue-action);
  --z-switch-on-hover: var(--z-color-blue-ink);
  --z-switch-soft: var(--z-color-accent-soft);
  --z-switch-ring: color-mix(in srgb, var(--z-switch-on) 45%, var(--z-color-surface));
  --z-switch-squash: 1.22 .88;
  position: relative;
  display: inline-grid;
  justify-items: start;
  min-width: 0;
  max-width: 100%;
  vertical-align: middle;
  color: var(--z-color-ink);
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: --z-switch-p var(--z-motion-control) var(--z-ease-spring);
}

.z-switch[data-on] { --z-switch-p: 1; }

.z-switch:dir(rtl) { --z-switch-dir: -1; }
[dir='rtl'] .z-switch { --z-switch-dir: -1; }

/* A dragged thumb keeps up with the hand: a 60ms smoothing instead of the spring. */
.z-switch[data-dragging] {
  transition-duration: 60ms;
  transition-timing-function: linear;
}

/* ---------- Tone: only the on fill changes ---------- */

.z-switch--neutral {
  --z-switch-on: var(--z-color-ink);
  --z-switch-on-hover: var(--z-color-ink-secondary);
  --z-switch-soft: var(--z-color-wash-strong);
}

.z-switch--danger {
  --z-switch-on: var(--z-color-danger);
  --z-switch-on-hover: color-mix(in srgb, var(--z-color-danger) 84%, black);
  --z-switch-soft: color-mix(in srgb, var(--z-color-danger) 9%, var(--z-color-surface));
}

@media (hover: hover) and (pointer: fine) {
  .z-switch:not([data-disabled], [data-pending]):hover {
    --z-switch-off: var(--z-switch-off-hover);
    --z-switch-on: var(--z-switch-on-hover);
  }
}

/* ---------- Sizes ---------- */

.z-switch--sm { --z-switch-track-w: 40px; --z-switch-track-h: 24px; --z-switch-thumb: 18px; }
.z-switch--lg { --z-switch-track-w: 56px; --z-switch-track-h: 32px; --z-switch-thumb: 26px; }

/* The icon form: a larger thumb, so the glyph can breathe. */
.z-switch--icon { --z-switch-track-w: 52px; --z-switch-track-h: 30px; --z-switch-thumb: 24px; }
.z-switch--icon.z-switch--sm { --z-switch-track-w: 44px; --z-switch-track-h: 26px; --z-switch-thumb: 20px; }
.z-switch--icon.z-switch--lg { --z-switch-track-w: 60px; --z-switch-track-h: 34px; --z-switch-thumb: 28px; }

/* Slim: a thin rail, and a thumb that overhangs it. The thumb is flush with the rail's ends. */
.z-switch--slim {
  --z-switch-track-w: 44px;
  --z-switch-track-h: 22px;
  --z-switch-thumb: 22px;
  --z-switch-inset: 0px;
  --z-switch-rail-h: 12px;
  --z-switch-fill: color-mix(in srgb, var(--z-switch-on) 40%, var(--z-color-surface));
}

.z-switch--slim.z-switch--sm { --z-switch-track-w: 36px; --z-switch-track-h: 18px; --z-switch-thumb: 18px; --z-switch-rail-h: 8px; }
.z-switch--slim.z-switch--lg { --z-switch-track-w: 52px; --z-switch-track-h: 26px; --z-switch-thumb: 26px; --z-switch-rail-h: 14px; }

/* ---------- Control ---------- */

.z-switch__control {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  max-width: 100%;
  min-height: 44px;
  margin: 0;
  padding: 4px 0;
  border: 0;
  border-radius: var(--z-radius-button);
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
  appearance: none;
}

.z-switch--sm .z-switch__control { min-height: 32px; }

@media (pointer: coarse) {
  .z-switch--sm .z-switch__control { min-height: 44px; }
}

/* A label before the switch fills the row; the switch sits at its end. */
.z-switch[data-placement='start'] .z-switch__control {
  justify-content: space-between;
  width: 100%;
}

.z-switch__control:focus-visible {
  outline: 2px solid var(--z-color-blue);
  outline-offset: 3px;
}

.z-switch[data-pending] .z-switch__control { cursor: progress; }
.z-switch[data-disabled] { opacity: .6; }
.z-switch[data-disabled] .z-switch__control { cursor: not-allowed; }

/* ---------- Text ---------- */

.z-switch__text {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.z-switch__label {
  color: var(--z-color-ink);
  font: 500 var(--z-type-label) / var(--z-type-label-leading) var(--z-font-interface);
  overflow-wrap: anywhere;
}

.z-switch--sm .z-switch__label {
  font-size: var(--z-type-caption);
  line-height: var(--z-type-caption-leading);
}

.z-switch--lg .z-switch__label {
  font-size: 16px;
  line-height: 24px;
}

.z-switch__description {
  color: var(--z-color-caption);
  font: 400 var(--z-type-small) / var(--z-type-small-leading) var(--z-font-body);
  overflow-wrap: anywhere;
}

/* ---------- Track ---------- */

.z-switch__track {
  position: relative;
  flex: none;
  display: block;
  width: var(--z-switch-track-w);
  height: var(--z-switch-track-h);
  border-radius: var(--z-radius-pill);
}

.z-switch[data-drag] .z-switch__track { touch-action: pan-y; }

@media (hover: hover) and (pointer: fine) {
  .z-switch[data-drag]:not([data-pending], [data-disabled], [data-holding]) .z-switch__track { cursor: grab; }
  .z-switch[data-dragging] .z-switch__track { cursor: grabbing; }
}

.z-switch__rail {
  position: absolute;
  inset-inline: 0;
  inset-block: calc((var(--z-switch-track-h) - var(--z-switch-rail-h)) / 2);
  overflow: hidden;
  border-radius: var(--z-radius-pill);
  /* ≥3:1 against white, canvas and stage, so the off state's boundary is visible (WCAG 1.4.11). */
  background-color: var(--z-switch-off);
  transition: background-color var(--z-motion-feedback) var(--z-ease-out);
}

/* The on fill fades in as the thumb arrives: its opacity is the same number as its position. */
.z-switch__fill {
  position: absolute;
  inset: 0;
  background-color: var(--z-switch-fill, var(--z-switch-on));
  opacity: var(--z-switch-p);
  transition: background-color var(--z-motion-feedback) var(--z-ease-out);
}

/* A soft inner shadow gives the rail depth without a border. */
.z-switch__rail::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 1px 2px rgb(26 26 26 / 14%);
  pointer-events: none;
}

/* Hold: the press fills the rail toward the other side. Letting go early drains it. */
.z-switch__hold {
  position: absolute;
  inset: 0;
  background-color: var(--z-switch-on);
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition: transform var(--z-motion-feedback) var(--z-ease-out);
}

.z-switch[data-on] .z-switch__hold {
  background-color: var(--z-switch-off);
  transform-origin: 100% 50%;
}

.z-switch:dir(rtl) .z-switch__hold { transform-origin: 100% 50%; }
.z-switch:dir(rtl)[data-on] .z-switch__hold { transform-origin: 0 50%; }

.z-switch[data-holding] .z-switch__hold {
  transform: scaleX(1);
  transition: transform var(--z-switch-hold, 600ms) linear;
}

/* ---------- Thumb ---------- */

.z-switch__thumb {
  position: absolute;
  inset-block-start: calc((var(--z-switch-track-h) - var(--z-switch-thumb)) / 2);
  inset-inline-start: var(--z-switch-inset);
  width: var(--z-switch-thumb);
  height: var(--z-switch-thumb);
  translate: calc(var(--z-switch-p) * var(--z-switch-travel) * var(--z-switch-dir)) 0;
}

/* The knob squashes while pressed, anchored on the side it rests on: its origin follows the thumb. */
.z-switch__knob {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--z-color-surface);
  box-shadow: 0 1px 2px rgb(26 26 26 / 22%), 0 2px 6px rgb(26 26 26 / 12%);
  transform-origin: calc((var(--z-switch-p) * var(--z-switch-dir) + (1 - var(--z-switch-dir)) / 2) * 100%) 50%;
  transition: scale var(--z-motion-feedback) var(--z-ease-out);
}

.z-switch[data-pressed] .z-switch__knob {
  scale: var(--z-switch-squash);
  transition-duration: var(--z-motion-press);
}

/* Slim: the thumb takes the on colour as it arrives. */
.z-switch--slim .z-switch__knob::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: var(--z-switch-on);
  opacity: var(--z-switch-p);
  transition: background-color var(--z-motion-feedback) var(--z-ease-out);
}

.z-switch--slim .z-switch__knob {
  box-shadow: 0 0 0 1px rgb(26 26 26 / 8%), 0 1px 3px rgb(26 26 26 / 24%), 0 3px 8px rgb(26 26 26 / 12%);
}

/* Icon: a check and a cross trade places inside the thumb, on the same number. */
.z-switch__glyph {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.z-switch__glyph--off {
  --z-switch-seen: clamp(0, calc((.7 - var(--z-switch-p)) * 3.5), 1);
  color: var(--z-color-caption);
  opacity: var(--z-switch-seen);
  scale: calc(.55 + .45 * var(--z-switch-seen));
}

.z-switch__glyph--on {
  --z-switch-seen: clamp(0, calc((var(--z-switch-p) - .3) * 3.5), 1);
  color: var(--z-switch-on);
  opacity: var(--z-switch-seen);
  scale: calc(.55 + .45 * var(--z-switch-seen));
}

/* Pending: the thumb keeps its new side and breathes. Focus never leaves. */
.z-switch[data-pending] .z-switch__knob { animation: z-switch-pulse 1200ms ease-in-out infinite; }

[data-playback='paused'] .z-switch[data-pending] .z-switch__knob {
  animation-play-state: paused !important;
}

@keyframes z-switch-pulse {
  50% { opacity: .5; }
}

/* ---------- Tile: a settings row ---------- */

.z-switch--tile {
  --z-switch-rest: var(--z-color-surface);
  display: grid;
  width: 100%;
  isolation: isolate;
  border-radius: var(--z-radius-tile);
  background-color: var(--z-switch-rest);
  transition:
    --z-switch-p var(--z-motion-control) var(--z-ease-spring),
    background-color var(--z-motion-feedback) var(--z-ease-out),
    scale var(--z-motion-feedback) var(--z-ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .z-switch--tile:not([data-disabled], [data-pending]):hover { --z-switch-rest: var(--z-color-hover-tint); }
}

.z-switch--tile[data-dragging] {
  transition-duration: 60ms;
}

.z-switch--tile[data-pressed] {
  scale: .985;
  transition-duration: var(--z-motion-control), var(--z-motion-feedback), var(--z-motion-press);
}

.z-switch--tile::before,
.z-switch--tile::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  pointer-events: none;
}

/* The wash arrives with the thumb... */
.z-switch--tile::before {
  background-color: var(--z-switch-soft);
  opacity: var(--z-switch-p);
}

/* ...and the hairline ring turns from line grey to tone. */
.z-switch--tile::after {
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--z-color-line) calc((1 - var(--z-switch-p)) * 100%), var(--z-switch-ring));
}

.z-switch--tile .z-switch__control {
  gap: 14px;
  width: 100%;
  min-height: 64px;
  padding: 12px 16px;
  border-radius: inherit;
}

.z-switch--tile .z-switch__text {
  flex: 1;
  gap: 2px;
}

.z-switch--tile .z-switch__message {
  padding-inline: 16px;
  padding-block: 0 12px;
}

.z-switch__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--z-radius-button);
  background-color: color-mix(in srgb, var(--z-switch-on) calc(var(--z-switch-p) * 14%), var(--z-color-canvas));
  color: color-mix(in srgb, var(--z-switch-on) calc(var(--z-switch-p) * 100%), var(--z-color-ink-secondary));
}

/* ---------- Message: failure and hints are shown; saving and holding are only announced ---------- */

.z-switch__message {
  display: block;
  position: relative;
  z-index: 1;
  max-width: 100%;
  padding-block-start: 4px;
  color: var(--z-color-caption);
  font: 500 var(--z-type-caption) / var(--z-type-caption-leading) var(--z-font-interface);
}

.z-switch[data-placement='end']:not(.z-switch--tile) .z-switch__message {
  padding-inline-start: calc(var(--z-switch-track-w) + 12px);
}

.z-switch__message:is(:empty, [data-kind='saving'], [data-kind='holding']) {
  height: 0;
  padding: 0;
  overflow: hidden;
}

.z-switch__message[data-kind='failed'] { color: var(--z-color-danger); }

.z-switch__note {
  display: inline-block;
  animation: z-switch-note var(--z-motion-feedback) var(--z-ease-out);
}

@keyframes z-switch-note {
  from { opacity: 0; translate: 0 -4px; }
}

/* ---------- Forced colors: the system palette draws the rail, the fill and the thumb ---------- */

@media (forced-colors: active) {
  .z-switch__rail { outline: 1px solid CanvasText; outline-offset: -1px; }
  .z-switch__fill { forced-color-adjust: none; background-color: Highlight; }
  .z-switch__knob { forced-color-adjust: none; background-color: ButtonText; box-shadow: none; }
  .z-switch--tile::after { box-shadow: inset 0 0 0 1px CanvasText; }
}

/* ---------- Reduced motion: no travel, squash, pulse or sweep. The fill and the glyph still say which side. ---------- */

@media (prefers-reduced-motion: reduce) {
  .z-switch,
  .z-switch *,
  .z-switch::before,
  .z-switch::after {
    transition: none !important;
    animation: none !important;
  }

  .z-switch[data-pressed] .z-switch__knob { scale: none; }
  .z-switch--tile[data-pressed] { scale: none; }
  .z-switch[data-pending] .z-switch__knob { opacity: .6; }
  .z-switch[data-holding] .z-switch__hold { transform: scaleX(.5); }
}
`;export{e as t};