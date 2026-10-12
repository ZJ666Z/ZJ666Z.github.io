var e=`/* Button family: Button, ButtonLink, IconButton, PayButton. */

/* ---------- Button and ButtonLink ---------- */

.z-button {
  --z-button-pad: 20px;
  /* Trailing feedback slot: 20px icon + 8px gap. */
  --z-button-slot: 28px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  max-width: 100%;
  padding: 14px var(--z-button-pad);
  border: 0;
  border-radius: var(--z-radius-button);
  font: 500 var(--z-type-label) / var(--z-type-label-leading) var(--z-font-body);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  /* Magnetic pull, written by useMagnetic (fine pointers only). */
  translate: var(--z-magnet-x, 0px) var(--z-magnet-y, 0px);
  transition:
    background-color var(--z-motion-feedback) var(--z-ease-out),
    box-shadow var(--z-motion-feedback) var(--z-ease-out),
    scale var(--z-motion-feedback) var(--z-ease-out),
    translate 250ms var(--z-ease-out);
}

.z-button--primary { background: var(--z-color-blue-action); color: var(--z-color-on-dark); }
.z-button--dark { background: var(--z-color-ink); color: var(--z-color-on-dark); }
.z-button--secondary { background: var(--z-color-surface); color: var(--z-color-ink); }
.z-button--ghost { background: transparent; color: var(--z-color-ink); }

.z-button--sm { --z-button-pad: 16px; min-height: 44px; padding-block: 10px; }
.z-button--lg { --z-button-pad: 24px; min-height: 56px; padding-block: 16px; font-size: 16px; }

/* A button used for async work keeps its box: the empty trailing slot is balanced by the same space
   on the leading side, so the label stays centred and nothing moves when feedback appears. */
.z-button[data-feedback='reserved'] {
  padding-left: calc(var(--z-button-pad) + var(--z-button-slot));
}

.z-button__label {
  min-width: 0;
  overflow-wrap: anywhere;
}

.z-button__feedback {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.z-button__state-icon {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  animation: z-state-in 240ms var(--z-ease-out) both;
}

/* Arrows lean the way they point on hover, on the same spring as the label roll. */
.z-button__state-icon[data-icon] .z-icon {
  transition: translate var(--z-motion-hover) var(--z-ease-spring);
}

.z-button:active:not(:disabled, [aria-disabled='true']),
.z-button[data-pressed] {
  scale: var(--z-press-scale);
  transition-duration: var(--z-motion-feedback), var(--z-motion-feedback), var(--z-motion-press), 250ms;
}

.z-button:disabled,
.z-button[aria-disabled='true'] { cursor: default; }
.z-button:disabled { opacity: .6; }

.z-button:focus-visible {
  outline: 2px solid var(--z-color-blue);
  outline-offset: 3px;
}

@keyframes z-state-in {
  from { opacity: 0; transform: scale(.7) rotate(-12deg); }
  to { opacity: 1; transform: none; }
}

/* ---------- IconButton ---------- */

.z-icon-button {
  --z-icon-button-size: 44px;
  position: relative;
  display: inline-grid;
  flex: none;
  place-items: center;
  width: var(--z-icon-button-size);
  height: var(--z-icon-button-size);
  padding: 0;
  border: 0;
  border-radius: var(--z-radius-button);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    background-color var(--z-motion-feedback) var(--z-ease-out),
    color var(--z-motion-feedback) var(--z-ease-out),
    box-shadow var(--z-motion-feedback) var(--z-ease-out),
    scale var(--z-motion-feedback) var(--z-ease-out);
}

.z-icon-button--light {
  background: var(--z-color-surface);
  color: var(--z-color-ink);
  box-shadow: inset 0 0 0 1px var(--z-color-line);
}

.z-icon-button--ghost { background: transparent; color: var(--z-color-ink); }
.z-icon-button--dark { background: var(--z-color-ink); color: var(--z-color-on-dark); }
.z-icon-button--blue { background: var(--z-color-blue-action); color: var(--z-color-on-dark); }

.z-icon-button--sm { --z-icon-button-size: 36px; }
.z-icon-button--lg { --z-icon-button-size: 48px; }
.z-icon-button--circle { border-radius: var(--z-radius-pill); }

/* A toggle that is on: the soft accent, whatever its resting variant. */
.z-icon-button[aria-pressed='true'] {
  background: var(--z-color-accent-soft);
  color: var(--z-color-blue-ink);
  box-shadow: inset 0 0 0 1px transparent;
}

.z-icon-button__icon {
  display: grid;
  place-items: center;
}

/* A new icon (copy → check) arrives with the same turn as a button's state icon. */
.z-icon-button__icon[data-swap] {
  animation: z-state-in 240ms var(--z-ease-out) both;
}

.z-icon-button:active:not(:disabled),
.z-icon-button[data-pressed] {
  scale: var(--z-press-scale);
  transition-duration: var(--z-motion-feedback), var(--z-motion-feedback), var(--z-motion-feedback), var(--z-motion-press);
}

.z-icon-button:disabled {
  cursor: default;
  opacity: .5;
}

.z-icon-button:focus-visible {
  outline: 2px solid var(--z-color-blue);
  outline-offset: 3px;
}

/* Tooltip: the accessible name, shown above. Hover waits a beat; keyboard focus shows it at once. */
.z-icon-button__tip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  z-index: 2;
  padding: 5px 10px;
  border-radius: var(--z-radius-media);
  background: var(--z-color-ink);
  color: var(--z-color-on-dark);
  font: 500 var(--z-type-eyebrow) / var(--z-type-eyebrow-leading) var(--z-font-interface);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  translate: -50% 4px;
  transition:
    opacity var(--z-motion-exit) var(--z-ease-out),
    translate var(--z-motion-exit) var(--z-ease-out);
}

.z-icon-button[data-tooltip='']:focus-visible .z-icon-button__tip {
  opacity: 1;
  translate: -50% 0;
}

@media (pointer: coarse) {
  .z-icon-button--sm { --z-icon-button-size: 44px; }
}

/* ---------- PayButton ---------- */

/* The slot reserves the widest label, so neighbours never move while the button closes and opens. */
.z-pay {
  --z-pay-size: 48px;
  --z-pay-pad: 20px;
  position: relative;
  display: inline-grid;
  max-width: 100%;
  vertical-align: middle;
}

.z-pay--sm { --z-pay-size: 44px; --z-pay-pad: 16px; }
.z-pay--lg { --z-pay-size: 56px; --z-pay-pad: 24px; }

.z-pay > .z-pay__reserve,
.z-pay > .z-pay-button {
  grid-area: 1 / 1;
}

.z-pay__reserve {
  display: grid;
  align-self: center;
  height: 0;
  padding-inline: var(--z-pay-pad);
  overflow: hidden;
  visibility: hidden;
  white-space: nowrap;
  pointer-events: none;
}

.z-pay__reserve > span { grid-area: 1 / 1; }

.z-pay__reserve,
.z-pay-button {
  font: 500 var(--z-type-label) / var(--z-type-label-leading) var(--z-font-body);
}

.z-pay--lg :is(.z-pay__reserve, .z-pay-button) { font-size: 16px; }

.z-pay-button {
  position: relative;
  justify-self: center;
  box-sizing: border-box;
  width: 100%;
  min-width: var(--z-pay-size);
  height: var(--z-pay-size);
  padding: 0;
  overflow: hidden;
  isolation: isolate;
  border: 0;
  border-radius: var(--z-radius-button);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  translate: var(--z-magnet-x, 0px) var(--z-magnet-y, 0px);
  /* The one width transition in the system: the box closes to a circle inside its reserved slot. */
  transition-property: width, border-radius, background-color, color, box-shadow, scale, translate;
  transition-duration:
    var(--z-motion-layout), var(--z-motion-layout), var(--z-motion-feedback), var(--z-motion-feedback),
    var(--z-motion-feedback), var(--z-motion-feedback), 250ms;
  transition-timing-function:
    var(--z-ease-spring), var(--z-ease-spring), var(--z-ease-out), var(--z-ease-out),
    var(--z-ease-out), var(--z-ease-out), var(--z-ease-out);
}

.z-pay-button--blue { background: var(--z-color-blue-action); color: var(--z-color-on-dark); }
.z-pay-button--dark { background: var(--z-color-ink); color: var(--z-color-on-dark); }

.z-pay-button[data-phase='busy'],
.z-pay-button[data-phase='done'] {
  width: var(--z-pay-size);
  border-radius: calc(var(--z-pay-size) / 2);
}

/* Working: once the circle has closed, it breathes. */
.z-pay-button[data-phase='busy'] {
  animation: z-pay-breathe 1600ms ease-in-out var(--z-motion-layout) infinite;
}

.z-pay-button[data-phase='done'] {
  background: var(--z-color-success);
  color: var(--z-color-on-dark);
  animation: z-pay-pop 480ms var(--z-ease-out) 120ms;
}

/* Declined: open again, tinted, asking for another try. */
.z-pay-button[data-phase='retry'] {
  background: color-mix(in srgb, var(--z-color-danger) 10%, var(--z-color-surface));
  color: var(--z-color-danger);
}

.z-pay-button:active:not(:disabled, [aria-disabled='true']),
.z-pay-button[data-pressed] {
  scale: var(--z-press-scale);
  transition-duration:
    var(--z-motion-layout), var(--z-motion-layout), var(--z-motion-feedback), var(--z-motion-feedback),
    var(--z-motion-feedback), var(--z-motion-press), 250ms;
}

.z-pay-button[aria-disabled='true'] { cursor: default; }

.z-pay-button:disabled {
  cursor: default;
  opacity: .6;
}

.z-pay-button:focus-visible {
  outline: 2px solid var(--z-color-blue);
  outline-offset: 3px;
}

/* Label: lifts away (blur, 120ms) as the box starts to close; rises back in once it has reopened. */
.z-pay-button__face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: var(--z-pay-pad);
  white-space: nowrap;
  transition:
    opacity 240ms var(--z-ease-out) 140ms,
    transform var(--z-motion-replay) var(--z-ease-spring) 140ms,
    filter 240ms var(--z-ease-out) 140ms;
}

.z-pay-button:is([data-phase='busy'], [data-phase='done']) .z-pay-button__face {
  opacity: 0;
  transform: scale(.9);
  filter: blur(4px);
  transition:
    opacity var(--z-motion-press) var(--z-ease-out),
    transform 240ms var(--z-ease-out),
    filter var(--z-motion-press) var(--z-ease-out);
}

.z-pay-button__label {
  display: block;
}

/* A label that changes in view ("Hold to confirm", "Try again") rises in. */
.z-pay-button__label[data-swap] {
  animation: z-pay-label-in var(--z-motion-replay) var(--z-ease-spring) both;
}

/* Wave: three dots that appear once the circle has mostly closed. */
.z-pay-button__wave {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  opacity: 0;
  transition: opacity var(--z-motion-press) var(--z-ease-out);
}

.z-pay-button__wave i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  opacity: .45;
}

.z-pay-button[data-phase='busy'] .z-pay-button__wave {
  opacity: 1;
  transition: opacity var(--z-motion-feedback) var(--z-ease-out) var(--z-motion-feedback);
}

.z-pay-button[data-phase='busy'] .z-pay-button__wave i {
  animation: z-pay-wave 1000ms ease-in-out infinite;
}

/* Negative delays: the wave is already travelling, so even a still frame reads as motion. */
.z-pay-button[data-phase='busy'] .z-pay-button__wave i:nth-child(1) { animation-delay: -360ms; }
.z-pay-button[data-phase='busy'] .z-pay-button__wave i:nth-child(2) { animation-delay: -240ms; }
.z-pay-button[data-phase='busy'] .z-pay-button__wave i:nth-child(3) { animation-delay: -120ms; }

/* Check: drawn as one stroke after the circle settles; it fades (never undraws) on the way out. */
.z-pay-button__check {
  position: absolute;
  inset: 0;
  width: 24px;
  height: 24px;
  margin: auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0;
  transition: opacity var(--z-motion-press) var(--z-ease-out);
}

.z-pay-button__check path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 0s linear var(--z-motion-feedback);
}

.z-pay-button[data-phase='done'] .z-pay-button__check {
  opacity: 1;
  transition: opacity var(--z-motion-press) var(--z-ease-out) 100ms;
}

.z-pay-button[data-phase='done'] .z-pay-button__check path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset var(--z-motion-replay) var(--z-ease-out) 160ms;
}

/* Hold progress: a lighter wash that fills from the leading edge (scaleX only). */
.z-pay-button__fill {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: color-mix(in srgb, var(--z-color-on-dark) 22%, transparent);
  transform: scaleX(0);
  transform-origin: left center;
  pointer-events: none;
}

.z-pay-button:dir(rtl) .z-pay-button__fill { transform-origin: right center; }

.z-pay-button[data-phase='retry'] .z-pay-button__fill {
  background: color-mix(in srgb, var(--z-color-danger) 16%, transparent);
}

/* Long-press must not open the touch callout or select the label. */
.z-pay-button[data-confirm='hold'] {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

@keyframes z-pay-breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(.94); }
}

@keyframes z-pay-pop {
  0%, 100% { transform: scale(1); }
  40% { transform: scale(1.08); }
}

@keyframes z-pay-wave {
  0%, 70%, 100% { opacity: .45; translate: 0 0; }
  35% { opacity: 1; translate: 0 -5px; }
}

@keyframes z-pay-label-in {
  from { opacity: 0; transform: translateY(45%); filter: blur(4px); }
  to { opacity: 1; transform: none; filter: none; }
}

/* Offscreen, hidden tab, paused stage, still specimen: loops hold their frame. */
[data-playback='paused'] :is(.z-pay-button, .z-pay-button__wave i) {
  animation-play-state: paused !important;
}

/* ---------- Hover (fine pointers) ---------- */

@media (hover: hover) and (pointer: fine) {
  /* The glow lifts a filled button; a ghost has no box to lift, so it takes a quiet fill instead. */
  .z-button:not(.z-button--ghost, :disabled, [aria-disabled='true']):hover { box-shadow: var(--z-shadow-glow); }
  .z-button--ghost:not(:disabled, [aria-disabled='true']):hover { background: var(--z-color-wash); }

  .z-button:not(:disabled, [aria-disabled='true']):hover .z-button__state-icon[data-icon='arrow-right'] .z-icon { translate: 3px 0; }
  .z-button:not(:disabled, [aria-disabled='true']):hover .z-button__state-icon[data-icon='arrow-left'] .z-icon { translate: -3px 0; }
  .z-button:not(:disabled, [aria-disabled='true']):hover .z-button__state-icon[data-icon='arrow-up-right'] .z-icon { translate: 2px -2px; }

  .z-icon-button--light:hover:not(:disabled, [aria-pressed='true']) { background: var(--z-color-hover-tint); }
  .z-icon-button--ghost:hover:not(:disabled, [aria-pressed='true']) { background: var(--z-color-wash); }
  .z-icon-button:is(.z-icon-button--dark, .z-icon-button--blue):hover:not(:disabled, [aria-pressed='true']) { box-shadow: var(--z-shadow-glow); }

  .z-icon-button[data-tooltip='']:hover .z-icon-button__tip {
    opacity: 1;
    translate: -50% 0;
    transition-delay: 320ms;
  }

  .z-pay-button:not(:disabled, [aria-disabled='true'], [data-phase='retry']):hover { box-shadow: var(--z-shadow-glow); }
  .z-pay-button[data-phase='retry']:not(:disabled, [aria-disabled='true']):hover {
    background: color-mix(in srgb, var(--z-color-danger) 15%, var(--z-color-surface));
  }
}

/* ---------- Reduced motion: every state still reads, nothing travels ---------- */

@media (prefers-reduced-motion: reduce) {
  .z-button__state-icon,
  .z-icon-button__icon[data-swap] { animation: none; }

  .z-button,
  .z-icon-button,
  .z-pay-button { transition: none; translate: none; }

  .z-button:active:not(:disabled, [aria-disabled='true']),
  .z-button[data-pressed],
  .z-icon-button:active:not(:disabled),
  .z-icon-button[data-pressed],
  .z-pay-button:active:not(:disabled, [aria-disabled='true']),
  .z-pay-button[data-pressed] { scale: none; }

  .z-button__state-icon[data-icon] .z-icon,
  .z-icon-button__tip,
  .z-pay-button__face,
  .z-pay-button__wave,
  .z-pay-button__check,
  .z-pay-button__check path { transition: none !important; }

  .z-pay-button,
  .z-pay-button__label,
  .z-pay-button__wave i { animation: none !important; }

  /* A still wave: the middle dot leads. */
  .z-pay-button__wave i:nth-child(2) { opacity: 1; }

  .z-pay-button:is([data-phase='busy'], [data-phase='done']) .z-pay-button__face { filter: none; transform: none; }
}
`;export{e as t};