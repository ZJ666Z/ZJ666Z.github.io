var e=`/* Dialog family. Motion lives in Dialog.tsx (WAAPI, so a reopened dialog can play its exit back);
   the nudge is CSS so it composes with whatever is running. */

.z-dialog {
  width: min(480px, calc(100vw - 32px));
  max-width: none;
  max-height: calc(100dvh - 48px);
  padding: 0;
  overflow: hidden auto;
  overscroll-behavior: contain;
  border: 0;
  border-radius: var(--z-radius-card);
  background: var(--z-color-surface);
  color: var(--z-color-ink);
  box-shadow: var(--z-shadow-overlay);
}

.z-dialog:focus-visible { outline: none; }

.z-dialog::backdrop {
  background: var(--z-color-scrim);
  backdrop-filter: blur(4px);
}

.z-dialog__panel {
  display: grid;
  gap: 24px;
  min-width: 0;
  padding: 32px;
}

/* Head: glyph tile and close button share the first row; the title spans below the tile. */
.z-dialog__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 16px 12px;
  min-width: 0;
}

.z-dialog__head[data-icon] .z-dialog__titles { grid-column: 1 / -1; }

.z-dialog__icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: var(--z-radius-button);
  background: var(--z-color-accent-soft);
  color: var(--z-color-blue-ink);
}

.z-dialog[data-tone='danger'] .z-dialog__icon {
  background: color-mix(in srgb, var(--z-color-danger) 9%, var(--z-color-surface));
  color: var(--z-color-danger);
}

.z-dialog__close {
  grid-row: 1;
  grid-column: 2;
  margin: -6px -10px 0 0;
}

.z-dialog__titles {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.z-dialog__title {
  margin: 0;
  font: 600 var(--z-type-title) / var(--z-type-title-leading) var(--z-font-body);
  overflow-wrap: anywhere;
}

.z-dialog__description {
  margin: 0;
  color: var(--z-color-ink-secondary);
  font: 400 16px/26px var(--z-font-body);
}

.z-dialog__body {
  display: grid;
  gap: 16px;
  min-width: 0;
}

/* Consequences read as one grey inset inside the white panel. */
.z-dialog__body ul {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 16px 20px;
  border-radius: var(--z-radius-tile);
  background: var(--z-color-canvas);
  list-style: none;
}

.z-dialog__body li {
  position: relative;
  padding-left: 20px;
  color: var(--z-color-ink-secondary);
  font: 400 15px/24px var(--z-font-body);
}

.z-dialog__body li::before {
  content: '';
  position: absolute;
  top: 9px;
  left: 2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--z-color-caption);
}

/* Two short fields side by side (expiry and security code). */
.z-dialog__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.z-dialog__foot {
  display: grid;
  gap: 12px;
  min-width: 0;
}

.z-dialog__error {
  margin: 0;
  color: var(--z-color-danger);
  font: 500 var(--z-type-label) / var(--z-type-label-leading) var(--z-font-interface);
}

.z-dialog__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
}

/* The safe action is one step darker than the white panel; danger is red, never blue. */
.z-dialog .z-dialog__action--neutral { background: var(--z-color-canvas); }
.z-dialog .z-dialog__action--danger { background: var(--z-color-danger); }

/* A nudge: the dialog asks for a choice instead of closing. */
.z-dialog[data-nudge] { animation: z-dialog-nudge 320ms var(--z-ease-out); }

@keyframes z-dialog-nudge {
  40% { scale: 1.02; }
}

@keyframes z-dialog-nudge-sheet {
  40% { translate: 0 -8px; }
}

@keyframes z-dialog-attention {
  35% { box-shadow: var(--z-shadow-overlay), 0 0 0 4px color-mix(in srgb, var(--z-color-blue) 45%, transparent); }
}

/* Sheet: header and actions stay put while the body scrolls between soft edges. */
.z-dialog--sheet {
  width: min(520px, calc(100vw - 32px));
  overflow: hidden;
}

.z-dialog--sheet .z-dialog__panel {
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 0;
  max-height: calc(100dvh - 48px);
  padding: 0;
}

.z-dialog--sheet .z-dialog__head {
  position: relative;
  z-index: 1;
  padding: 28px 28px 20px 32px;
}

.z-dialog--sheet .z-dialog__body {
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 4px 32px 24px;
}

.z-dialog--sheet .z-dialog__foot {
  position: relative;
  padding: 16px 32px 32px;
  background: var(--z-color-surface);
}

.z-dialog--sheet .z-dialog__foot::before {
  content: '';
  position: absolute;
  inset: -20px 0 100%;
  background: linear-gradient(to top, var(--z-color-surface), transparent);
  pointer-events: none;
}

@media (hover: hover) and (pointer: fine) {
  .z-dialog .z-dialog__action--neutral:not(:disabled, [aria-disabled='true']):hover {
    background: var(--z-color-canvas-deep);
    box-shadow: none;
  }

  .z-dialog .z-dialog__action--danger:not(:disabled, [aria-disabled='true']):hover {
    box-shadow: 0 8px 24px color-mix(in srgb, var(--z-color-danger) 22%, transparent);
  }
}

@media (max-width: 809.98px) {
  .z-dialog__panel { padding: 24px; }
  .z-dialog__actions .z-button { flex: 1 1 auto; }

  /* On phones the sheet docks to the bottom edge, within thumb reach. */
  .z-dialog--sheet {
    width: 100%;
    max-height: calc(100dvh - 16px);
    margin: auto 0 0;
    border-radius: var(--z-radius-card) var(--z-radius-card) 0 0;
  }

  .z-dialog--sheet .z-dialog__panel { max-height: calc(100dvh - 16px); }
  .z-dialog--sheet .z-dialog__head { padding: 20px 16px 16px 20px; }
  .z-dialog--sheet .z-dialog__body { padding: 4px 20px 20px; }
  .z-dialog--sheet .z-dialog__foot { padding: 12px 20px max(20px, env(safe-area-inset-bottom)); }
  .z-dialog--sheet[data-nudge] { animation-name: z-dialog-nudge-sheet; }
}

@media (max-width: 359.98px) {
  .z-dialog__row { grid-template-columns: minmax(0, 1fr); }
}

@media (prefers-reduced-motion: reduce) {
  .z-dialog[data-nudge],
  .z-dialog--sheet[data-nudge] { animation: z-dialog-attention 480ms var(--z-ease-out); }
}
`,t=`/* Tooltip family. The bubble matches IconButton's label tip (.z-icon-button__tip): ink, Inter 12/18,
   radius 8, 8px above, a 4px rise. It sits in a fixed layer at viewport coordinates measured by
   Tooltip.tsx, so clipped and scrolling containers never cut it off. Hidden tooltips stay in the tree
   so aria-describedby resolves. */
.z-tooltip {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.z-tooltip__bubble {
  position: fixed;
  top: var(--z-tooltip-y, 0px);
  left: var(--z-tooltip-x, 0px);
  z-index: 20;
  width: max-content;
  max-width: min(240px, calc(100vw - 32px));
  padding: 5px 10px;
  border-radius: var(--z-radius-media);
  background: var(--z-color-ink);
  color: var(--z-color-on-dark);
  font: 500 var(--z-type-eyebrow) / var(--z-type-eyebrow-leading) var(--z-font-interface);
  text-align: left;
  overflow-wrap: break-word;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  translate: 0 4px;
  transition:
    opacity var(--z-motion-exit) var(--z-ease-out),
    translate var(--z-motion-exit) var(--z-ease-out),
    visibility 0s linear var(--z-motion-exit);
}

.z-tooltip__bubble[data-placement='bottom'] { translate: 0 -4px; }

/* A bridge over the 8px gap, so the pointer can travel onto the tooltip (WCAG 1.4.13). */
.z-tooltip__bubble::before {
  content: '';
  position: absolute;
  inset: -8px 0;
}

.z-tooltip__bubble[data-open] {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  translate: 0 0;
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out),
    translate var(--z-motion-feedback) var(--z-ease-out),
    visibility 0s;
}

@media (prefers-reduced-motion: reduce) {
  .z-tooltip__bubble,
  .z-tooltip__bubble[data-placement='bottom'],
  .z-tooltip__bubble[data-open] {
    translate: 0 0;
  }
}
`;export{e as n,t};