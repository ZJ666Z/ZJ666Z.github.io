var e=`/* Icon family. Glyphs are filled outlines in currentColor, so colour, size and weight never fight a stroke. */
.z-icon {
  display: inline-block;
  flex: none;
  vertical-align: middle;
  /* Clicks always land on the control around the icon, never on a path. */
  pointer-events: none;
}

/* Duotone tone layer: 20% of the ink. A parent can fade it (the docs nav lights it for the current page). */
.z-icon__tone {
  transition: opacity var(--z-motion-feedback) var(--z-ease-out);
}

/* tone="current": the tone layer is off until the control around the icon is current. */
.z-icon[data-tone='current'] .z-icon__tone {
  opacity: 0;
}

:is([aria-current]:not([aria-current='false']), [aria-selected='true'], [aria-pressed='true'], [aria-checked='true']) .z-icon[data-tone='current'] .z-icon__tone {
  opacity: 0.2;
}

@media (prefers-reduced-motion: reduce) {
  .z-icon__tone { transition: none; }
}
`;export{e as t};