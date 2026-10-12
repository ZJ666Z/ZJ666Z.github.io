var e=`/* Segmented family.
   The indicator is one white shape clipped out of a full-size layer: its left and right edges are
   registered custom properties, measured from the chosen option and animated on two spring
   timings. The leading edge (the one travelling toward the new option) arrives first and the
   trailing edge catches up, so the shape stretches and settles. Every option carries a second,
   ink-coloured copy of its label clipped to the same edges, so text lights up exactly where the
   indicator covers it, mid-glide and mid-drag included. Only clip-path, scale, opacity, filter and
   colours change; no layout property ever animates. */

@property --z-segmented-l { syntax: '<length>'; inherits: true; initial-value: 0px; }
@property --z-segmented-r { syntax: '<length>'; inherits: true; initial-value: 0px; }
@property --z-segmented-gl { syntax: '<length>'; inherits: false; initial-value: 0px; }
@property --z-segmented-gr { syntax: '<length>'; inherits: false; initial-value: 0px; }

.z-segmented {
  /* Theme hooks: override them on a wrapper (a dark track, a pill) instead of restyling parts. */
  --z-segmented-trough: var(--z-color-wash);
  --z-segmented-thumb: var(--z-color-surface);
  --z-segmented-rest: var(--z-color-caption);
  --z-segmented-hover: var(--z-color-ink-secondary);
  --z-segmented-ink: var(--z-color-ink);
  --z-segmented-ghost: var(--z-color-wash);
  --z-segmented-bar: var(--z-color-blue-action);
  --z-segmented-radius: var(--z-radius-button);
  --z-segmented-inset: var(--z-space-1);
  /* Filter twin of --z-shadow-current, so the shadow follows the clipped shape. */
  --z-segmented-shadow: drop-shadow(0 1px 2px rgb(26 26 26 / 8%)) drop-shadow(0 3px 8px rgb(26 26 26 / 6%));
  /* One spring, two timings: the leading edge lands first, the trailing edge settles the shape. */
  --z-segmented-lead: calc(var(--z-motion-control) * .7);
  --z-segmented-trail: var(--z-motion-control);
  --z-segmented-glide: calc(var(--z-motion-control) * .7);
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: stretch;
  /* A set that cannot fit gives way inside itself (labels ellipsize), never by widening the page. */
  min-width: 0;
  max-width: 100%;
  padding: var(--z-segmented-inset);
  border-radius: var(--z-segmented-radius);
  background: var(--z-segmented-trough);
  vertical-align: middle;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    --z-segmented-l var(--z-segmented-trail) var(--z-ease-spring),
    --z-segmented-r var(--z-segmented-lead) var(--z-ease-spring);
}

/* Travelling left, the left edge leads. */
.z-segmented[data-dir='back'] {
  transition:
    --z-segmented-l var(--z-segmented-lead) var(--z-ease-spring),
    --z-segmented-r var(--z-segmented-trail) var(--z-ease-spring);
}

/* Under a dragging pointer the same stretch plays faster, so the indicator keeps up with the hand. */
.z-segmented[data-dragging] {
  --z-segmented-lead: calc(var(--z-motion-control) * .36);
  --z-segmented-trail: calc(var(--z-motion-control) * .56);
  cursor: grabbing;
}

.z-segmented[data-instant] {
  transition: none;
}

.z-segmented[data-drag] {
  touch-action: pan-y;
}

.z-segmented--sm {
  --z-segmented-h: 36px;
  --z-segmented-pad: 12px;
  --z-segmented-font: var(--z-type-caption);
  --z-segmented-leading: var(--z-type-caption-leading);
}

.z-segmented--md {
  --z-segmented-h: 40px;
  --z-segmented-pad: 16px;
  --z-segmented-font: var(--z-type-label);
  --z-segmented-leading: var(--z-type-label-leading);
}

.z-segmented--lg {
  --z-segmented-h: 48px;
  --z-segmented-pad: 20px;
  --z-segmented-font: 16px;
  --z-segmented-leading: 24px;
}

.z-segmented--fill {
  display: flex;
  width: 100%;
}

@media (max-width: 809.98px) {
  .z-segmented--lg { --z-segmented-pad: 14px; }
}

/* Indicator and ghost: full-size layers, clipped to the measured edges. */
.z-segmented__thumb,
.z-segmented__ghost {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.z-segmented__thumb {
  filter: var(--z-segmented-shadow);
  transform-origin: calc((var(--z-segmented-l) + var(--z-segmented-r)) / 2) 50%;
  transition:
    scale var(--z-motion-feedback) var(--z-ease-out),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}

.z-segmented__fill {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: var(--z-segmented-thumb);
  clip-path: inset(
    var(--z-segmented-inset) calc(100% - var(--z-segmented-r)) var(--z-segmented-inset) var(--z-segmented-l)
    round calc(var(--z-segmented-radius) - var(--z-segmented-inset))
  );
  transition: background-color var(--z-motion-feedback) var(--z-ease-out);
}

/* Busy: a soft blue sheen crosses the chosen option; the choice itself holds still. */
.z-segmented__fill::after {
  content: '';
  position: absolute;
  inset-block: 0;
  left: var(--z-segmented-l);
  width: calc(var(--z-segmented-r) - var(--z-segmented-l));
  background: linear-gradient(105deg, transparent 20%, color-mix(in srgb, var(--z-color-blue-action) 22%, transparent) 50%, transparent 80%);
  opacity: 0;
  translate: -100% 0;
}

/* Like every loader, it waits 160ms before it shows. */
.z-segmented[aria-busy='true'] .z-segmented__fill::after {
  opacity: 1;
  animation: z-segmented-sheen 1400ms linear 160ms infinite;
}

.z-segmented__ghost {
  background: var(--z-segmented-ghost);
  clip-path: inset(
    var(--z-segmented-inset) calc(100% - var(--z-segmented-gr)) var(--z-segmented-inset) var(--z-segmented-gl)
    round calc(var(--z-segmented-radius) - var(--z-segmented-inset))
  );
  opacity: 0;
  transition:
    --z-segmented-gl var(--z-segmented-glide) var(--z-ease-spring),
    --z-segmented-gr var(--z-segmented-glide) var(--z-ease-spring),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}

.z-segmented__ghost[data-snap] {
  transition: opacity var(--z-motion-feedback) var(--z-ease-out);
}

.z-segmented[data-ghost='on'] .z-segmented__ghost {
  opacity: 1;
}

/* Options */
.z-segmented__option {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  min-width: 0;
  min-height: var(--z-segmented-h);
  margin: 0;
  padding: 0 var(--z-segmented-pad);
  border: 0;
  border-radius: calc(var(--z-segmented-radius) - var(--z-segmented-inset));
  background: transparent;
  color: var(--z-segmented-rest);
  font: 500 var(--z-segmented-font) / var(--z-segmented-leading) var(--z-font-interface);
  white-space: nowrap;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.z-segmented--fill .z-segmented__option {
  flex: 1 1 0;
}

.z-segmented__content,
.z-segmented__lit {
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 0;
  max-width: 100%;
  transition:
    scale var(--z-motion-feedback) var(--z-ease-out),
    color var(--z-motion-feedback) var(--z-ease-out),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}

.z-segmented__content {
  display: inline-flex;
}

/* The lit copy sits exactly over the label (same padding, same centring) and shows only inside
   the indicator's edges, which reach it through inheritance. */
.z-segmented__lit {
  position: absolute;
  inset: 0;
  display: flex;
  padding: inherit;
  color: var(--z-segmented-ink);
  pointer-events: none;
  clip-path: inset(
    0 clamp(0px, calc(var(--z-segmented-x, 0px) + var(--z-segmented-w, 0px) - var(--z-segmented-r)), var(--z-segmented-w, 0px))
    0 clamp(0px, calc(var(--z-segmented-l) - var(--z-segmented-x, 0px)), var(--z-segmented-w, 0px))
  );
}

.z-segmented__text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.z-segmented__icon {
  display: inline-flex;
  flex: none;
}

.z-segmented__badge {
  flex: none;
  padding: 0 6px;
  border-radius: var(--z-radius-pill);
  background: var(--z-color-wash-strong);
  color: var(--z-color-ink-secondary);
  font: 600 var(--z-type-eyebrow) / var(--z-type-eyebrow-leading) var(--z-font-interface);
  font-variant-numeric: tabular-nums;
}

.z-segmented__lit .z-segmented__badge {
  background: var(--z-color-accent-soft);
  color: var(--z-color-blue-ink);
}

@media (hover: hover) and (pointer: fine) {
  .z-segmented:not([aria-busy='true']) .z-segmented__option:not(:disabled):hover .z-segmented__content {
    color: var(--z-segmented-hover);
  }
}

/* Press: the label gives under the finger; on the chosen option the indicator gives with it. */
@media (prefers-reduced-motion: no-preference) {
  .z-segmented[data-pressed] .z-segmented__thumb {
    scale: var(--z-press-scale);
    transition-duration: var(--z-motion-press);
  }

  .z-segmented--underline[data-pressed] .z-segmented__thumb {
    scale: var(--z-press-scale) 1;
  }

  .z-segmented:not([data-dragging], [aria-busy='true']) .z-segmented__option:not(:disabled):active :is(.z-segmented__content, .z-segmented__lit) {
    scale: var(--z-press-scale);
    transition-duration: var(--z-motion-press);
  }
}

.z-segmented__option:focus-visible {
  outline: 2px solid var(--z-color-blue);
  outline-offset: 2px;
}

.z-segmented__option:disabled {
  cursor: not-allowed;
}

.z-segmented__option:disabled :is(.z-segmented__content, .z-segmented__lit) {
  opacity: .45;
}

.z-segmented[aria-disabled='true'] .z-segmented__thumb {
  opacity: .6;
}

.z-segmented[aria-busy='true'],
.z-segmented[aria-busy='true'] .z-segmented__option {
  cursor: progress;
}

/* Before the first measurement (server render, no script yet) the chosen option paints itself. */
.z-segmented:not([data-measured]) .z-segmented__option[aria-checked='true'] {
  background: var(--z-segmented-thumb);
  box-shadow: var(--z-shadow-current);
  color: var(--z-segmented-ink);
}

.z-segmented:not([data-measured]) :is(.z-segmented__lit, .z-segmented__thumb, .z-segmented__ghost),
.z-segmented[data-empty] :is(.z-segmented__lit, .z-segmented__thumb) {
  visibility: hidden;
}

/* Underline: a 2px bar under the label travels with the same two-edge stretch. */
.z-segmented--underline {
  --z-segmented-trough: transparent;
  --z-segmented-ghost: color-mix(in srgb, var(--z-color-ink) 20%, transparent);
  --z-segmented-radius: 0px;
  --z-segmented-inset: 0px;
  box-shadow: inset 0 -1px 0 var(--z-color-line);
}

.z-segmented--underline.z-segmented--sm { --z-segmented-pad: 10px; }
.z-segmented--underline.z-segmented--md { --z-segmented-pad: 12px; }
.z-segmented--underline.z-segmented--lg { --z-segmented-pad: 16px; }

.z-segmented--underline .z-segmented__thumb {
  filter: none;
}

.z-segmented--underline :is(.z-segmented__fill, .z-segmented__ghost) {
  border-radius: 1px;
}

.z-segmented--underline .z-segmented__fill {
  background: var(--z-segmented-bar);
  clip-path: inset(calc(100% - 2px) calc(100% - var(--z-segmented-r)) 0 var(--z-segmented-l) round 1px);
}

.z-segmented--underline .z-segmented__ghost {
  clip-path: inset(calc(100% - 2px) calc(100% - var(--z-segmented-gr)) 0 var(--z-segmented-gl) round 1px);
}

.z-segmented--underline .z-segmented__fill::after {
  display: none;
}

.z-segmented--underline[aria-busy='true'] .z-segmented__fill {
  animation: z-segmented-pulse 1200ms ease-in-out infinite;
}

.z-segmented--underline:not([data-measured]) .z-segmented__option[aria-checked='true'] {
  background: transparent;
  box-shadow: inset 0 -2px 0 var(--z-segmented-bar);
}

/* Icon: square options; the name shows as a tooltip and is the accessible name. */
.z-segmented--icon .z-segmented__option {
  flex: none;
  width: var(--z-segmented-h);
  padding: 0;
}

.z-segmented--icon.z-segmented--fill .z-segmented__option {
  flex: 1 1 0;
  width: auto;
}

.z-segmented__tip {
  position: absolute;
  bottom: calc(100% + var(--z-segmented-inset) + 8px);
  left: 50%;
  padding: 3px 8px;
  border-radius: var(--z-radius-media);
  background: var(--z-color-ink);
  color: var(--z-color-on-dark);
  font: 600 var(--z-type-eyebrow) / var(--z-type-eyebrow-leading) var(--z-font-interface);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  translate: -50% 4px;
  transition:
    opacity 180ms var(--z-ease-out),
    translate 180ms var(--z-ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .z-segmented--icon:not([data-dragging]) .z-segmented__option:hover {
    z-index: 2;
  }

  .z-segmented--icon:not([data-dragging], [data-tips='off']) .z-segmented__option:hover .z-segmented__tip {
    opacity: 1;
    translate: -50% 0;
  }
}

.z-segmented--icon:not([data-dragging], [data-tips='off']) .z-segmented__option:focus-visible .z-segmented__tip {
  opacity: 1;
  translate: -50% 0;
}

/* Coarse pointers: every option is a 44px target, reaching into the trough if it must. */
@media (pointer: coarse) {
  .z-segmented__option::before {
    content: '';
    position: absolute;
    inset: calc(-1 * var(--z-segmented-inset)) 0;
  }

  .z-segmented--underline .z-segmented__option {
    min-height: max(44px, var(--z-segmented-h));
  }
}

/* Playback contract: a paused ancestor holds the busy loop still, the sheen resting mid-way. */
[data-playback='paused'] .z-segmented__fill {
  animation-play-state: paused;
}

[data-playback='paused'] .z-segmented[aria-busy='true'] .z-segmented__fill::after {
  animation: none;
  translate: 0 0;
}

@keyframes z-segmented-sheen {
  0% { translate: -100% 0; }
  70%, 100% { translate: 100% 0; }
}

@keyframes z-segmented-pulse {
  50% { opacity: .45; }
}

@media (prefers-reduced-motion: reduce) {
  .z-segmented,
  .z-segmented__thumb,
  .z-segmented__content,
  .z-segmented__lit {
    transition: none;
  }

  .z-segmented__ghost {
    transition: opacity var(--z-motion-feedback) var(--z-ease-out);
  }

  /* Busy reads from a still tint instead of a moving sheen. */
  .z-segmented[aria-busy='true'] .z-segmented__fill::after {
    animation: none;
    opacity: 0;
  }

  .z-segmented[aria-busy='true'] .z-segmented__fill {
    background: color-mix(in srgb, var(--z-color-blue-action) 10%, var(--z-segmented-thumb));
  }

  .z-segmented--underline[aria-busy='true'] .z-segmented__fill {
    animation: none;
    opacity: .5;
  }
}
`;export{e as t};