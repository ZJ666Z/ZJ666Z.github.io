var e=`/* Toast family */
.z-toast {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  max-width: 100%;
  padding: 12px 12px 12px 20px;
  border-radius: var(--z-radius-tile);
  background: var(--z-color-surface);
  box-shadow: inset 0 0 0 1px var(--z-color-line), var(--z-shadow-raised);
  animation: z-toast-in 420ms var(--z-ease-out) both;
}

.z-toast p {
  flex: 1;
  min-width: 0;
  margin: 0;
  overflow-wrap: anywhere;
  font: 400 14px/22px var(--z-font-interface);
}

.z-toast__symbol {
  display: grid;
  flex: none;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--z-color-accent-soft);
  color: var(--z-color-blue-action);
}

.z-toast--error .z-toast__symbol {
  background: color-mix(in srgb, var(--z-color-danger) 9%, var(--z-color-surface));
  color: var(--z-color-danger);
}

.z-toast .z-icon-button {
  width: 32px;
  height: 32px;
  box-shadow: none;
}

.z-toast__action {
  min-height: 44px;
  padding: 4px;
  border: 0;
  background: transparent;
  color: var(--z-color-blue-ink);
  font: 500 var(--z-type-label) / var(--z-type-label-leading) var(--z-font-interface);
  text-decoration: underline;
  cursor: pointer;
}

/* Touch: Dismiss and the action are 44px targets. */
@media (pointer: coarse) {
  .z-toast .z-icon-button {
    width: 44px;
    height: 44px;
  }

  .z-toast__action { min-width: 44px; }
}

@keyframes z-toast-in {
  from { opacity: 0; transform: translateY(20px) scale(.97); }
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .z-toast { animation: none !important; }
}
`;export{e as t};