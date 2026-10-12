var e=`/* Input family: TextField, PasswordField, CardNumberField, ExpiryField, CvcField, PromoField, OtpField.

   One shell carries the ring: a 1px hairline (inset box-shadow, so it never changes the size), the
   fill, and a focus ring that settles around the whole control. Prefix, value, suffix and tools read
   as one field. State is data-*; nothing here animates a layout property. */

.z-field {
  --z-field-height: 48px;
  --z-field-pad-x: 16px;
  --z-field-pad-y: 12px;
  --z-field-font: 16px;
  --z-field-ring: var(--z-color-line);
  --z-field-fill: var(--z-color-surface);
  --z-field-tool: 36px;
  display: grid;
  align-content: start;
  width: 100%;
  min-width: 0;
}

.z-field[data-size='sm'] {
  --z-field-height: 44px;
  --z-field-pad-x: 14px;
  --z-field-pad-y: 10px;
  --z-field-tool: 32px;
}

.z-field[data-size='lg'] {
  --z-field-height: 56px;
  --z-field-pad-x: 20px;
  --z-field-pad-y: 16px;
  --z-field-font: 18px;
  --z-field-tool: 40px;
}

/* ---------- Label ---------- */

.z-field__label {
  color: var(--z-color-ink);
  font: 500 var(--z-type-label) / var(--z-type-label-leading) var(--z-font-interface);
}

.z-field__optional {
  color: var(--z-color-caption);
  font-weight: 400;
}

/* ---------- Shell: the ring, the fill, the focus ---------- */

.z-field__shell {
  position: relative;
  display: flex;
  align-items: stretch;
  min-width: 0;
  margin-top: 8px;
  border-radius: var(--z-radius-button);
  background: var(--z-field-fill);
  box-shadow: inset 0 0 0 1px var(--z-field-ring);
  cursor: text;
  transition:
    background-color var(--z-motion-feedback) var(--z-ease-out),
    box-shadow var(--z-motion-feedback) var(--z-ease-out);
}

/* The focus ring: 2px blue, 3px off the shell (the site's rule). It does not use outline-offset,
   which cannot animate: it eases in and settles, on the same spring as the system's indicators. */
.z-field__shell::after {
  content: '';
  position: absolute;
  inset: -5px;
  border: 2px solid var(--z-color-blue);
  border-radius: 17px;
  opacity: 0;
  scale: .985;
  pointer-events: none;
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out),
    scale var(--z-motion-control) var(--z-ease-spring);
}

.z-field__shell:has(.z-field__input:focus-visible)::after,
.z-field[data-pinned='focus'] .z-field__shell::after {
  opacity: 1;
  scale: 1;
}

.z-field__input {
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  min-height: var(--z-field-height);
  padding: var(--z-field-pad-y) var(--z-field-pad-x);
  border: 0;
  border-radius: inherit;
  outline: none;
  background: transparent;
  color: var(--z-color-ink);
  caret-color: var(--z-color-blue-action);
  font: 400 var(--z-field-font) / 24px var(--z-font-body);
  -webkit-appearance: none;
  appearance: none;
}

/* The shell carries the ring; a global :focus-visible rule must not draw a second one on the input. */
.z-field__input:focus-visible,
.z-otp__input:focus-visible { outline: none; }

.z-field__input::placeholder {
  color: var(--z-color-caption);
  opacity: 1;
}

.z-field__input::-webkit-search-cancel-button,
.z-field__input::-webkit-search-decoration { display: none; }

.z-field__input:-webkit-autofill {
  -webkit-text-fill-color: var(--z-color-ink);
  box-shadow: 0 0 0 100px var(--z-field-fill) inset;
  transition: background-color 9999s;
}

textarea.z-field__input {
  display: block;
  min-height: 112px;
  resize: vertical;
}

/* Prefix and suffix sit inside the shell. */
.z-field__affix {
  display: flex;
  align-items: center;
  color: var(--z-color-caption);
  font: 400 var(--z-field-font) / 24px var(--z-font-body);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  user-select: none;
}

.z-field__affix--start { padding-left: var(--z-field-pad-x); }
.z-field__affix--start + .z-field__input { padding-left: 4px; }
.z-field__affix--end { padding-right: 4px; }

.z-field[data-multiline] :is(.z-field__affix, .z-field__end) {
  align-items: flex-start;
  align-self: flex-start;
}

.z-field[data-multiline] .z-field__affix { padding-top: var(--z-field-pad-y); }

.z-field__end {
  display: flex;
  flex: none;
  align-items: center;
  gap: 4px;
  min-height: var(--z-field-height);
  padding-right: 8px;
}

.z-field__shell:has(.z-field__end) .z-field__input { padding-right: 4px; }

/* ---------- States ---------- */

.z-field[data-invalid] {
  --z-field-ring: var(--z-color-danger);
  --z-field-fill: color-mix(in srgb, var(--z-color-danger) 4%, var(--z-color-surface));
}

.z-field[data-success] {
  --z-field-ring: var(--z-color-success);
  --z-field-fill: color-mix(in srgb, var(--z-color-success) 5%, var(--z-color-surface));
}

.z-field[data-readonly] {
  --z-field-ring: var(--z-color-line);
  --z-field-fill: transparent;
}

.z-field[data-readonly]:not([data-success]) .z-field__input { color: var(--z-color-ink-secondary); }

/* A wash, not a flat grey: it reads as unavailable on white and on grey alike. */
.z-field[data-disabled] {
  --z-field-ring: transparent;
  --z-field-fill: var(--z-color-wash);
}

.z-field[data-disabled] .z-field__shell { cursor: not-allowed; }
.z-field[data-disabled] .z-field__input { color: var(--z-color-caption); cursor: not-allowed; }
.z-field[data-disabled] .z-field__label { color: var(--z-color-caption); }
.z-field[data-disabled] :is(.z-field__affix, .z-field__tool, .z-field__action, .z-field__brand) { opacity: .6; }

@media (hover: hover) and (pointer: fine) {
  .z-field:not([data-disabled], [data-readonly], [data-invalid], [data-success]) .z-field__shell:hover,
  .z-field[data-pinned='hover']:not([data-invalid], [data-success]) .z-field__shell {
    --z-field-ring: color-mix(in srgb, var(--z-color-ink) 26%, var(--z-color-line));
  }
}

/* Tools and actions answer the pointer; touch gets the press feedback above. */
@media (hover: hover) and (pointer: fine) {
  .z-field__tool:hover:not(:disabled, [aria-pressed='true'], [data-hidden]) {
    background: var(--z-color-wash);
    color: var(--z-color-ink);
  }

  .z-field__action:hover:not(:disabled, [aria-disabled='true']) {
    background: var(--z-color-accent-soft);
    color: var(--z-color-blue-ink);
  }

  .z-field__action[data-phase='applied']:hover:not(:disabled) {
    background: color-mix(in srgb, var(--z-color-danger) 8%, transparent);
    color: var(--z-color-danger);
  }
}

/* ---------- Message, counter ---------- */

.z-field__foot {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.z-field__foot[data-reserve] { min-height: 28px; }

.z-field__message {
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
  color: var(--z-color-caption);
  font: 400 var(--z-type-small) / var(--z-type-small-leading) var(--z-font-interface);
}

.z-field__message-text {
  display: inline-flex;
  align-items: flex-start;
  gap: 6px;
  padding-top: 8px;
  animation: z-field-message-in var(--z-motion-feedback) var(--z-ease-out) both;
}

.z-field__message-text > svg { flex: none; margin-top: 2px; }

.z-field__message[data-tone='error'] { color: var(--z-color-danger); font-weight: 500; }
.z-field__message[data-tone='success'] { color: var(--z-color-success); font-weight: 500; }

.z-field__counter {
  flex: none;
  padding-top: 8px;
  color: var(--z-color-caption);
  font: 500 var(--z-type-caption) / var(--z-type-small-leading) var(--z-font-interface);
  font-variant-numeric: tabular-nums;
  transition: color var(--z-motion-feedback) var(--z-ease-out);
}

.z-field__counter[data-near] { color: var(--z-color-warning); }
.z-field__counter[data-full] { color: var(--z-color-danger); }

/* ---------- Tools: clear, show password ---------- */

.z-field__tool {
  position: relative;
  display: grid;
  flex: none;
  place-items: center;
  width: var(--z-field-tool);
  height: var(--z-field-tool);
  padding: 0;
  border: 0;
  border-radius: var(--z-radius-media);
  background: transparent;
  color: var(--z-color-caption);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    background-color var(--z-motion-feedback) var(--z-ease-out),
    color var(--z-motion-feedback) var(--z-ease-out),
    opacity var(--z-motion-feedback) var(--z-ease-out),
    scale var(--z-motion-feedback) var(--z-ease-out);
}

/* The hit area grows to 44px without growing the control. */
.z-field__tool::before,
.z-field__action::before {
  content: '';
  position: absolute;
  inset: -4px;
}

.z-field__tool[aria-pressed='true'] {
  background: var(--z-color-accent-soft);
  color: var(--z-color-blue-ink);
}

.z-field__tool[data-hidden] {
  opacity: 0;
  scale: .8;
  pointer-events: none;
}

.z-field__tool:active:not(:disabled),
.z-field__tool[data-pressed] {
  scale: var(--z-press-scale);
  transition-duration: var(--z-motion-feedback), var(--z-motion-feedback), var(--z-motion-feedback), var(--z-motion-press);
}

.z-field__tool:focus-visible,
.z-field__action:focus-visible {
  outline: 2px solid var(--z-color-blue);
  outline-offset: 0;
}

.z-field__tool-icon {
  display: grid;
  place-items: center;
}

.z-field__tool-icon[data-swap] { animation: z-field-icon-in 240ms var(--z-ease-out) both; }

.z-field__lock {
  display: grid;
  place-items: center;
  width: 28px;
  color: var(--z-color-caption);
}

/* ---------- Valid: a check that draws ---------- */

.z-field__check { flex: none; }

.z-field__check-disc {
  fill: color-mix(in srgb, var(--z-color-success) 14%, transparent);
  transform-box: fill-box;
  transform-origin: center;
  animation: z-field-disc 360ms var(--z-ease-spring) both;
}

.z-field__check-path {
  fill: none;
  stroke: var(--z-color-success);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: z-field-draw 420ms var(--z-ease-out) 120ms forwards;
}

/* ---------- Card number: network chip and progress line ---------- */

.z-field__brand {
  display: inline-flex;
  align-items: center;
}

.z-field__brand-mark {
  display: inline-grid;
  place-items: center;
  min-width: 28px;
  min-height: 28px;
  color: var(--z-color-caption);
  animation: z-field-brand-in 360ms var(--z-ease-spring) both;
}

.z-field__brand-name {
  padding: 3px 10px;
  border-radius: var(--z-radius-media);
  background: var(--z-color-canvas);
  color: var(--z-color-ink-secondary);
  font: 600 var(--z-type-eyebrow) / var(--z-type-eyebrow-leading) var(--z-font-interface);
  white-space: nowrap;
}

.z-field__progress {
  position: absolute;
  right: 14px;
  bottom: 0;
  left: 14px;
  height: 2px;
  border-radius: 2px;
  background: var(--z-color-blue-action);
  transform: scaleX(var(--z-field-progress, 0));
  transform-origin: left center;
  pointer-events: none;
  transition:
    transform var(--z-motion-control) var(--z-ease-spring),
    background-color var(--z-motion-feedback) var(--z-ease-out),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}

.z-field[data-valid] .z-field__progress { background: var(--z-color-success); }
.z-field[data-invalid] .z-field__progress { opacity: 0; }

/* ---------- Promo: the action and the receipt ---------- */

.z-field__action {
  position: relative;
  display: inline-grid;
  flex: none;
  place-items: center;
  height: var(--z-field-tool);
  min-width: 72px;
  padding: 0 14px;
  border: 0;
  border-radius: var(--z-radius-media);
  background: var(--z-color-canvas);
  color: var(--z-color-ink);
  font: 500 var(--z-type-label) / var(--z-type-label-leading) var(--z-font-interface);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    background-color var(--z-motion-feedback) var(--z-ease-out),
    color var(--z-motion-feedback) var(--z-ease-out),
    scale var(--z-motion-feedback) var(--z-ease-out);
}

.z-field__action[aria-disabled='true'] { cursor: default; }
.z-field__action:disabled { cursor: not-allowed; }

.z-field__action[data-phase='applied'] {
  background: transparent;
  color: var(--z-color-ink-secondary);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--z-color-success) 30%, transparent);
}

.z-field__action:active:not(:disabled, [aria-disabled='true']),
.z-field__action[data-pressed] {
  scale: var(--z-press-scale);
  transition-duration: var(--z-motion-feedback), var(--z-motion-feedback), var(--z-motion-press);
}

/* Apply and Remove share one cell, so the button keeps the width of the longer word. */
.z-field__action-label {
  display: grid;
  place-items: center;
  transition: opacity var(--z-motion-feedback) var(--z-ease-out), scale var(--z-motion-control) var(--z-ease-spring);
}

.z-field__action-label > span {
  grid-area: 1 / 1;
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out),
    translate var(--z-motion-control) var(--z-ease-spring);
}

.z-field__action-label > span:not([data-on]) { opacity: 0; }
.z-field__action-label > span:first-child:not([data-on]) { translate: 0 -8px; }
.z-field__action-label > span:last-child:not([data-on]) { translate: 0 8px; }

.z-field__action[data-phase='busy'] .z-field__action-label { opacity: 0; scale: .9; }

.z-field__action-busy {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  scale: .7;
  transition: opacity var(--z-motion-feedback) var(--z-ease-out), scale var(--z-motion-control) var(--z-ease-spring);
}

.z-field__action[data-phase='busy'] .z-field__action-busy { opacity: 1; scale: 1; }
.z-field__action-busy .z-spinner { width: 16px; height: 16px; }

.z-promo__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 12px 3px 8px;
  border-radius: var(--z-radius-pill);
  background: color-mix(in srgb, var(--z-color-success) 12%, var(--z-color-surface));
  color: var(--z-color-success);
  font: 600 var(--z-type-caption) / var(--z-type-small-leading) var(--z-font-interface);
  white-space: nowrap;
  animation: z-promo-chip-in var(--z-motion-layout) var(--z-ease-spring) both;
}

/* ---------- One-time code ---------- */

.z-otp {
  --z-otp-cell: 56px;
  --z-otp-font: 24px;
  --z-otp-gap: 8px;
  --z-otp-group: 0px;
  /* The field is as wide as its cells, so the message and the check line up with them. */
  max-width: calc(var(--z-otp-length) * var(--z-otp-cell) + (var(--z-otp-length) - 1) * var(--z-otp-gap) + var(--z-otp-group));
}

.z-otp[data-size='sm'] { --z-otp-cell: 48px; --z-otp-font: 20px; }
.z-otp[data-size='lg'] { --z-otp-cell: 64px; --z-otp-font: 28px; }

.z-otp__cells {
  position: relative;
  display: flex;
  gap: var(--z-otp-gap);
  margin-top: 8px;
  cursor: text;
}

.z-otp__input {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: transparent;
  caret-color: transparent;
  font-size: 16px;
  opacity: 0;
  cursor: text;
}

.z-otp__cell {
  position: relative;
  display: grid;
  flex: 1 1 0;
  place-items: center;
  min-width: 0;
  max-width: var(--z-otp-cell);
  height: var(--z-otp-cell);
  border-radius: var(--z-radius-button);
  background: var(--z-field-fill);
  box-shadow: inset 0 0 0 1px var(--z-field-ring);
  transition:
    background-color var(--z-motion-feedback) var(--z-ease-out),
    box-shadow var(--z-motion-feedback) var(--z-ease-out);
}

.z-otp__cell[data-gap] { margin-right: var(--z-otp-group); }

.z-otp__cell::after {
  content: '';
  position: absolute;
  inset: -5px;
  border: 2px solid var(--z-color-blue);
  border-radius: 17px;
  opacity: 0;
  scale: .94;
  pointer-events: none;
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out),
    scale var(--z-motion-control) var(--z-ease-spring);
}

.z-otp__cells:has(.z-otp__input:focus-visible) .z-otp__cell[data-active]::after,
.z-otp[data-pinned='focus'] .z-otp__cell[data-active]::after {
  opacity: 1;
  scale: 1;
}

.z-otp__digit {
  color: var(--z-color-ink);
  font: 500 var(--z-otp-font) / 32px var(--z-font-body);
  font-variant-numeric: tabular-nums;
  animation: z-otp-in 280ms var(--z-ease-out) both;
}

.z-otp__caret {
  width: 2px;
  height: 24px;
  border-radius: 1px;
  background: var(--z-color-blue-action);
  opacity: 0;
  transition: opacity var(--z-motion-feedback) var(--z-ease-out);
}

.z-otp__cells:has(.z-otp__input:focus-visible) .z-otp__caret,
.z-otp[data-pinned='focus'] .z-otp__caret { opacity: 1; }

.z-otp[data-valid] { --z-field-ring: var(--z-color-success); }
.z-otp__check { margin-top: 8px; }

.z-otp[data-disabled] .z-otp__cells { cursor: not-allowed; }
.z-otp[data-disabled] .z-otp__cell { opacity: .6; }

@media (hover: hover) and (pointer: fine) {
  .z-otp:not([data-disabled], [data-invalid], [data-valid]) .z-otp__cells:hover .z-otp__cell {
    --z-field-ring: color-mix(in srgb, var(--z-color-ink) 26%, var(--z-color-line));
  }
}

/* ---------- Motion ---------- */

@keyframes z-field-message-in {
  from { opacity: 0; translate: 0 -4px; }
  to { opacity: 1; translate: 0 0; }
}

@keyframes z-field-icon-in {
  from { opacity: 0; transform: scale(.7) rotate(-12deg); }
  to { opacity: 1; transform: none; }
}

@keyframes z-field-draw {
  to { stroke-dashoffset: 0; }
}

@keyframes z-field-disc {
  from { opacity: 0; scale: .6; }
  to { opacity: 1; scale: 1; }
}

@keyframes z-field-brand-in {
  from { opacity: 0; translate: 0 6px; scale: .9; }
  to { opacity: 1; translate: 0 0; scale: 1; }
}

@keyframes z-promo-chip-in {
  from { opacity: 0; translate: 10px 0; scale: .88; }
  to { opacity: 1; translate: 0 0; scale: 1; }
}

@keyframes z-otp-in {
  from { opacity: 0; translate: 0 8px; scale: .9; }
  to { opacity: 1; translate: 0 0; scale: 1; }
}

@media (max-width: 809.98px) {
  .z-field { --z-field-font: 16px; }
  .z-otp {
    --z-otp-cell: 48px;
    --z-otp-font: 22px;
    --z-otp-gap: 6px;
  }

  .z-otp[data-size='sm'] { --z-otp-cell: 44px; }
  .z-otp[data-size='lg'] { --z-otp-cell: 56px; }
}

@media (forced-colors: active) {
  .z-field__shell,
  .z-otp__cell { outline: 1px solid CanvasText; }
  .z-field__shell::after,
  .z-otp__cell::after { border-color: Highlight; }
  .z-field__progress { background: Highlight; }
}

@media (prefers-reduced-motion: reduce) {
  .z-field__shell::after,
  .z-otp__cell::after { scale: 1; transition: opacity var(--z-motion-feedback) var(--z-ease-out); }
  .z-field__message-text,
  .z-field__tool-icon[data-swap],
  .z-field__check-disc,
  .z-field__brand-mark,
  .z-promo__chip,
  .z-otp__digit { animation: none; }
  .z-field__check-path { animation: none; stroke-dashoffset: 0; }
  .z-field__tool,
  .z-field__action,
  .z-field__action-label,
  .z-field__action-label > span,
  .z-field__action-busy { transition-property: background-color, color, opacity; }
  .z-field__action-label > span { translate: none !important; }
  .z-field__action[data-phase='busy'] .z-field__action-label { scale: 1; }
  .z-field__action-busy { scale: 1; }
  .z-field__tool[data-hidden] { scale: 1; }
  .z-field__progress { transition-property: background-color, opacity; }
}
`;export{e as t};