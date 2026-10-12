var e=`/* AnimatedNumber family: tabular figures; digits roll on reels (default) or the value counts. */
.z-animated-number {
  --z-number-duration: var(--z-motion-layout);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.z-animated-number__glyphs {
  user-select: none;
}

/* A digit window: the invisible ghost gives width and baseline, the reel slides behind a clip. */
.z-animated-number__digit {
  position: relative;
  display: inline-block;
  clip-path: inset(0);
}

.z-animated-number__ghost {
  visibility: hidden;
}

.z-animated-number__reel {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  translate: 0 calc(var(--z-digit, 0) * -10%);
  transition: translate var(--z-number-duration) var(--z-ease-spring);
  transition-delay: calc(min(var(--z-digit-order, 0), 6) * 24ms);
}

.z-animated-number__reel > span {
  display: block;
  text-align: center;
}

/* While digits travel, their edges soften so a passing figure never reads as clipped. */
.z-animated-number[data-rolling] .z-animated-number__digit {
  -webkit-mask-image: linear-gradient(transparent, black 16%, black 84%, transparent);
  mask-image: linear-gradient(transparent, black 16%, black 84%, transparent);
}

/* Characters that arrive later (a new thousands digit, a minus sign) fade up into place. */
.z-animated-number[data-ready] :is(.z-animated-number__digit, .z-animated-number__char) {
  display: inline-block;
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out),
    translate var(--z-number-duration) var(--z-ease-spring);
}

@starting-style {
  .z-animated-number[data-ready] :is(.z-animated-number__digit, .z-animated-number__char) {
    opacity: 0;
    translate: 0 .4em;
  }
}

@media (prefers-reduced-motion: reduce) {
  .z-animated-number__reel,
  .z-animated-number[data-ready] :is(.z-animated-number__digit, .z-animated-number__char) {
    transition: none;
  }
}
`;export{e as t};