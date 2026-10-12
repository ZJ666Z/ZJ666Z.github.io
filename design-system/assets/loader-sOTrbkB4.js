var e=`/* Loader family.
   Loops live on the leaves and animate only opacity and the individual scale / translate / rotate
   properties (plus the orbit's stroke dash), so a pose can be frozen and released. They match only
   [data-state='pending'][data-visible]. Enter and exit live on .z-loader__visual. Solid fills only. */

.z-loader {
  --loader-size: 36px;
  --loader-beat: 1200ms;
  --loader-rest: .26;
  --loader-ink: var(--z-color-ink);
  --loader-gap: 12px;
  --loader-glyph-stroke: 2.8;
  --loader-orbit-stroke: 3;
  --loader-settle: 240ms;
  position: relative;
  display: inline-grid;
  grid-template-areas: 'slot' 'status';
  justify-items: center;
  align-content: center;
  gap: var(--loader-gap);
  min-width: 0;
  color: var(--loader-ink);
}

.z-loader[data-size='sm'] {
  --loader-size: 20px;
  --loader-gap: 8px;
  --loader-glyph-stroke: 4;
  --loader-orbit-stroke: 3.6;
}

.z-loader[data-size='lg'] {
  --loader-size: 52px;
  --loader-gap: 16px;
  --loader-glyph-stroke: 2.3;
  --loader-orbit-stroke: 2.6;
}

.z-loader[data-size='xl'] {
  --loader-size: 96px;
  --loader-gap: 24px;
  --loader-glyph-stroke: 1.7;
  --loader-orbit-stroke: 2;
}

.z-loader[data-tempo='slow'] { --loader-beat: 1800ms; }
.z-loader[data-tempo='fast'] { --loader-beat: 800ms; }
.z-loader[data-tone='blue'] { --loader-ink: var(--z-color-blue-action); }

.z-loader[data-layout='inline'] {
  grid-template-areas: 'slot status';
  grid-template-columns: auto minmax(0, 1fr);
  justify-items: start;
  align-items: center;
  gap: 12px;
}

.z-loader[data-layout='bare'] { gap: 0; }

/* ---------- Lifecycle: nothing for 160ms, then the mark; the layout is reserved throughout ---------- */

.z-loader__visual {
  position: relative;
  display: grid;
  grid-area: slot;
  place-items: center;
  width: var(--loader-size);
  height: var(--loader-size);
  opacity: 0;
  scale: .92;
  transition:
    opacity var(--z-motion-exit) var(--z-ease-in),
    scale var(--z-motion-exit) var(--z-ease-in);
}

.z-loader:is([data-visible], [data-shown]):not([data-state='cancelled'], [data-state='idle']) .z-loader__visual {
  opacity: 1;
  scale: 1;
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out),
    scale var(--loader-settle) var(--z-ease-out);
}

.z-loader__status {
  grid-area: status;
  max-width: 100%;
  min-height: var(--z-type-caption-leading);
  color: var(--z-color-caption);
  font: 500 var(--z-type-caption) / var(--z-type-caption-leading) var(--z-font-interface);
  text-align: center;
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out) 60ms,
    color var(--z-motion-feedback) var(--z-ease-out);
}

.z-loader:is([data-size='lg'], [data-size='xl']) .z-loader__status {
  font-size: var(--z-type-small);
  line-height: var(--z-type-small-leading);
}

.z-loader[data-layout='inline'] .z-loader__status { text-align: left; }
.z-loader[data-state='pending']:not([data-visible]) .z-loader__status { opacity: 0; transition: none; }
.z-loader[data-state='success'] .z-loader__status { color: var(--z-color-ink-secondary); }
.z-loader[data-state='error'] .z-loader__status { color: var(--z-color-danger); }

/* Escalation changes the words, never the tempo; each step fades the new words in. */
.z-loader[data-state='pending'][data-visible][data-wait='1'] .z-loader__status { animation: z-loader-say var(--loader-settle) var(--z-ease-out); }
.z-loader[data-state='pending'][data-visible][data-wait='2'] .z-loader__status { animation: z-loader-say-again var(--loader-settle) var(--z-ease-out); }

.z-loader:is([data-layout='bare'], [data-variant='word']) .z-loader__status,
.z-loader__progress {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Paused: offscreen, hidden tab, reduced motion or a paused ancestor. The loop resumes where it stopped. */
.z-loader[data-active='false'] :is(.z-loader__mark, .z-loader__mark *) { animation-play-state: paused; }

/* ---------- Leaves ---------- */

.z-loader__mark {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.z-loader__mark i {
  position: absolute;
  display: block;
  background: currentColor;
  font-style: normal;
  opacity: var(--loader-rest);
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out),
    scale var(--loader-settle) var(--z-ease-out),
    translate var(--loader-settle) var(--z-ease-out),
    rotate var(--loader-settle) var(--z-ease-out);
}

.z-loader__mark svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: none;
}

/* Converge (Agent): four options drawing to one answer, the group turning a quarter each beat. */
.z-loader[data-variant='converge'] .z-loader__mark i {
  inset: 39%;
  border-radius: 50%;
  scale: .7;
  translate: calc(var(--dx) * 130%) calc(var(--dy) * 130%);
}

.z-loader[data-variant='converge'][data-state='pending'][data-visible] .z-loader__mark {
  animation: z-loader-quarter calc(var(--loader-beat) * 2) var(--z-ease-spring) infinite;
}

.z-loader[data-variant='converge'][data-state='pending'][data-visible] .z-loader__mark i {
  animation: z-loader-converge calc(var(--loader-beat) * 2) ease-in-out infinite;
  animation-delay: calc(var(--i) * var(--loader-beat) / -16);
}

/* Scan (Agent): a light passes diagonally through a field of possibilities. */
.z-loader[data-variant='scan'] .z-loader__mark {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--loader-size) / 9);
}

.z-loader[data-variant='scan'] .z-loader__mark i {
  position: static;
  border-radius: 22%;
  scale: .86;
}

.z-loader[data-variant='scan'][data-state='pending'][data-visible] .z-loader__mark i {
  animation: z-loader-glint calc(var(--loader-beat) * 2) ease-in-out infinite;
  animation-delay: calc(var(--d) * var(--loader-beat) / 6 - var(--loader-beat) * 2);
}

/* Helix (Agent): a travelling wave, for something long being put together. */
.z-loader[data-variant='helix'] .z-loader__visual { width: calc(var(--loader-size) * 1.5); }

.z-loader[data-variant='helix'] .z-loader__mark {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.z-loader[data-variant='helix'] .z-loader__mark i {
  position: static;
  width: 7%;
  height: 64%;
  border-radius: var(--z-radius-pill);
  scale: 1 .3;
}

.z-loader[data-variant='helix'][data-state='pending'][data-visible] .z-loader__mark i {
  animation: z-loader-helix calc(var(--loader-beat) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--i) * var(--loader-beat) / -8);
}

/* Ripple (Agent): signals going out to another party, from a steady source. */
.z-loader[data-variant='ripple'] .z-loader__mark i {
  inset: 0;
  border: calc(var(--loader-size) / 24 + .5px) solid currentColor;
  border-radius: 50%;
  background: none;
  opacity: 0;
  scale: .15;
}

.z-loader[data-variant='ripple'] .z-loader__mark i[data-part='core'] {
  inset: 39%;
  border: 0;
  background: currentColor;
  opacity: 1;
  scale: 1;
}

.z-loader[data-variant='ripple'][data-state='pending'][data-visible] .z-loader__mark i:not([data-part]) {
  animation: z-loader-ripple calc(var(--loader-beat) * 2) var(--z-ease-out) infinite;
  animation-delay: calc(var(--i) * var(--loader-beat) * -2 / 3);
}

.z-loader[data-variant='ripple'][data-state='pending'][data-visible] .z-loader__mark i[data-part='core'] {
  animation: z-loader-breathe-core calc(var(--loader-beat) * 2) ease-in-out infinite;
}

/* Word (Agent): the words are the loader. A per-glyph opacity glint, never a moving fill. */
.z-loader[data-variant='word'] { --loader-rest: .4; }

.z-loader[data-variant='word'] .z-loader__visual {
  width: auto;
  height: auto;
  min-height: 20px;
}

.z-loader[data-variant='word'] .z-loader__mark {
  width: auto;
  height: auto;
  font: 500 var(--z-type-small) / var(--z-type-small-leading) var(--z-font-interface);
}

.z-loader[data-variant='word'][data-size='sm'] .z-loader__mark { font-size: var(--z-type-caption); }

.z-loader[data-variant='word'][data-size='lg'] .z-loader__mark {
  font: 600 18px / 28px var(--z-font-body);
}

.z-loader[data-variant='word'][data-size='xl'] .z-loader__mark {
  font: 600 var(--z-type-variant) / var(--z-type-variant-leading) var(--z-font-body);
}

.z-loader__word {
  display: inline-block;
  white-space: pre;
}

.z-loader[data-variant='word'] .z-loader__mark i {
  position: static;
  display: inline;
  background: none;
}

.z-loader[data-variant='word'][data-state='pending'] .z-loader__word::after {
  content: '…';
  opacity: var(--loader-rest);
}

.z-loader[data-variant='word'][data-state='pending'][data-visible] .z-loader__mark i {
  animation: z-loader-glint-word var(--cycle) cubic-bezier(.4, 0, .6, 1) infinite;
  animation-delay: calc(var(--i) / var(--n) * var(--pass) - var(--cycle));
}

.z-loader[data-variant='word']:not([data-state='pending']) .z-loader__mark i { opacity: 1; }
.z-loader[data-variant='word'][data-state='success'] .z-loader__mark { color: var(--z-color-ink); }
.z-loader[data-variant='word'][data-state='error'] .z-loader__mark { color: var(--z-color-danger); }

/* Orbit (General): an arc chasing itself. Measured, it counts from 12 o'clock; done, the ring closes. */
.z-loader__track,
.z-loader__arc {
  stroke-width: var(--loader-orbit-stroke);
  transition:
    opacity var(--z-motion-feedback) var(--z-ease-out),
    stroke var(--z-motion-feedback) var(--z-ease-out);
}

.z-loader__track { stroke: color-mix(in srgb, currentColor 14%, transparent); }

.z-loader__spin {
  transform-box: view-box;
  transform-origin: 50% 50%;
  rotate: 0deg;
  transition: rotate var(--z-motion-replay) var(--z-ease-out);
}

.z-loader__arc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-dasharray: 0 100;
  stroke-dashoffset: 0;
  transition:
    stroke-dasharray var(--loader-settle) var(--z-ease-out),
    stroke-dashoffset var(--loader-settle) var(--z-ease-out),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}

.z-loader[data-variant='orbit'][data-state='pending'][data-visible]:not([data-measured]) .z-loader__spin {
  animation: z-loader-spin var(--loader-beat) linear infinite;
}

.z-loader[data-variant='orbit'][data-state='pending'][data-visible]:not([data-measured]) .z-loader__arc {
  animation: z-loader-arc calc(var(--loader-beat) * 1.5) cubic-bezier(.45, 0, .55, 1) infinite;
}

.z-loader[data-variant='orbit'][data-measured] .z-loader__arc { stroke-dasharray: calc(var(--loader-progress) * 100) 100; }
.z-loader[data-variant='orbit'][data-state='success'] .z-loader__arc { stroke-dasharray: 100 0; }

.z-loader[data-variant='orbit']:is([data-state='error'], [data-state='cancelled'], [data-state='idle']) .z-loader__arc {
  stroke-dasharray: 0 100;
  opacity: 0;
}

/* Dots (General): three beats, half of every cycle at rest. For waiting on someone else. */
.z-loader[data-variant='dots'] { --loader-rest: .3; }

.z-loader[data-variant='dots'] .z-loader__mark {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: calc(var(--loader-size) / 7);
}

.z-loader[data-variant='dots'] .z-loader__mark i {
  position: static;
  aspect-ratio: 1;
  border-radius: 50%;
}

.z-loader[data-variant='dots'][data-state='pending'][data-visible] .z-loader__mark i {
  animation: z-loader-dots var(--loader-beat) infinite;
  animation-delay: calc(var(--i) * var(--loader-beat) / 6 - var(--loader-beat));
}

/* Line (General): a region is loading. It travels, grows when measured, fills when done. */
.z-loader[data-variant='line'] .z-loader__visual {
  width: calc(var(--loader-size) * 3.4);
  max-width: 100%;
  height: auto;
  scale: 1;
}

.z-loader[data-variant='line'] .z-loader__mark {
  height: 3px;
  overflow: hidden;
  border-radius: var(--z-radius-pill);
  background: color-mix(in srgb, var(--z-color-ink) 10%, transparent);
  transition: background-color var(--z-motion-feedback) var(--z-ease-out);
}

.z-loader[data-variant='line'][data-size='sm'] .z-loader__mark { height: 2px; }
.z-loader[data-variant='line']:is([data-size='lg'], [data-size='xl']) .z-loader__mark { height: 4px; }
.z-loader[data-variant='line'][data-size='xl'] .z-loader__visual { width: calc(var(--loader-size) * 2.6); }

.z-loader[data-variant='line'] .z-loader__mark i {
  inset: 0;
  border-radius: var(--z-radius-pill);
  background: var(--z-color-blue-action);
  opacity: 0;
  scale: 0 1;
  transform-origin: left center;
}

.z-loader[data-variant='line'][data-state='pending'][data-visible]:not([data-measured]) .z-loader__mark i {
  animation: z-loader-travel var(--loader-beat) cubic-bezier(.45, 0, .55, 1) infinite;
}

.z-loader[data-variant='line'][data-measured] .z-loader__mark i {
  opacity: 1;
  scale: var(--loader-progress) 1;
}

.z-loader[data-variant='line'][data-state='success'] .z-loader__mark i {
  opacity: 1;
  translate: 0 0;
  scale: 1 1;
}

.z-loader[data-variant='line'][data-state='error'] .z-loader__mark { background: color-mix(in srgb, var(--z-color-danger) 24%, transparent); }
.z-loader[data-variant='line']:is([data-state='error'], [data-state='cancelled']) .z-loader__mark i { opacity: 0; }

/* Skeleton (General): the shape arrives before the data. It only breathes, so the layout never moves. */
.z-loader[data-variant='skeleton'] { --loader-rest: 1; }

.z-loader[data-variant='skeleton'] .z-loader__visual {
  width: calc(var(--loader-size) * 6);
  max-width: 100%;
  height: auto;
  scale: 1;
}

.z-loader[data-variant='skeleton'][data-size='lg'] .z-loader__visual { width: calc(var(--loader-size) * 5.4); }
.z-loader[data-variant='skeleton'][data-size='xl'] .z-loader__visual { width: calc(var(--loader-size) * 3.6); }
.z-loader[data-variant='skeleton'][data-size='sm'] .z-loader__visual { width: calc(var(--loader-size) * 8); }

.z-loader[data-variant='skeleton'] .z-loader__mark {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) 20%;
  align-items: center;
  gap: 14px 12px;
}

.z-loader[data-variant='skeleton'] .z-loader__mark i {
  position: static;
  background: color-mix(in srgb, var(--z-color-ink) 9%, transparent);
}

.z-loader__mark [data-part='icon'] {
  width: 24px;
  height: 24px;
  border-radius: var(--z-radius-media);
}

.z-loader__mark [data-part='line'] {
  width: var(--w);
  height: 10px;
  border-radius: var(--z-radius-pill);
}

.z-loader__mark [data-part='value'] {
  justify-self: end;
  width: 100%;
  height: 10px;
  border-radius: var(--z-radius-pill);
}

.z-loader[data-variant='skeleton'][data-size='sm'] .z-loader__mark { gap: 10px 8px; }
.z-loader[data-variant='skeleton'][data-size='sm'] [data-part='icon'] { width: 16px; height: 16px; }
.z-loader[data-variant='skeleton'][data-size='sm'] :is([data-part='line'], [data-part='value']) { height: 8px; }
.z-loader[data-variant='skeleton'][data-size='xl'] .z-loader__mark { gap: 18px 14px; }
.z-loader[data-variant='skeleton'][data-size='xl'] [data-part='icon'] { width: 32px; height: 32px; }
.z-loader[data-variant='skeleton'][data-size='xl'] :is([data-part='line'], [data-part='value']) { height: 12px; }

.z-loader[data-variant='skeleton'][data-state='pending'][data-visible] .z-loader__mark i {
  animation: z-loader-breathe 1800ms ease-in-out infinite;
  animation-delay: calc((var(--col) * .18 + var(--row) * .12) * -1800ms);
}

/* ---------- Hand-off: the check or the cross takes the mark's place ---------- */

.z-loader__glyph {
  position: absolute;
  top: 20%;
  left: 50%;
  width: auto;
  height: 60%;
  aspect-ratio: 1;
  overflow: visible;
  fill: none;
  translate: -50% 0;
  pointer-events: none;
}

.z-loader[data-variant='orbit'] .z-loader__glyph {
  top: 26%;
  height: 48%;
}

.z-loader__glyph path {
  stroke: currentColor;
  stroke-width: var(--loader-glyph-stroke);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  opacity: 0;
}

.z-loader[data-glyph][data-state='success'] .z-loader__glyph { color: var(--z-color-success); }
.z-loader[data-glyph][data-state='error'] .z-loader__glyph { color: var(--z-color-danger); }

.z-loader[data-glyph][data-state='success'] .z-loader__check,
.z-loader[data-glyph][data-state='error'] .z-loader__cross {
  opacity: 1;
  stroke-dashoffset: 0;
  transition:
    stroke-dashoffset var(--z-motion-replay) var(--z-ease-out) 120ms,
    opacity 0s linear 120ms;
}

/* The leaves let go as the glyph draws: converge closes on one point, the others settle and fade. */
.z-loader[data-glyph]:is([data-state='success'], [data-state='error']) .z-loader__mark i {
  opacity: 0;
  scale: .5;
}

.z-loader[data-variant='converge'][data-state='success'] .z-loader__mark i { translate: 0 0; }
.z-loader[data-variant='converge'][data-state='error'] .z-loader__mark i { translate: calc(var(--dx) * 190%) calc(var(--dy) * 190%); }
.z-loader[data-variant='scan']:is([data-state='success'], [data-state='error']) .z-loader__mark i { transition-delay: calc(var(--d) * 28ms); }
.z-loader[data-variant='helix']:is([data-state='success'], [data-state='error']) .z-loader__mark i { scale: 1 .1; transition-delay: calc(var(--i) * 18ms); }
.z-loader[data-variant='dots']:is([data-state='success'], [data-state='error']) .z-loader__mark i { translate: 0 0; }
.z-loader[data-variant='ripple']:is([data-state='success'], [data-state='error']) .z-loader__mark i { scale: .3; }

/* The orbit's ring closes before its check draws, so the track stays as the frame. */
.z-loader[data-variant='orbit'][data-state='success'] .z-loader__arc { stroke: var(--z-color-success); }

/* ---------- Swap: the wait becomes the thing, in the same cell; height never animates ---------- */

.z-loader[data-handoff='swap'] { justify-items: stretch; }

.z-loader__content {
  grid-area: slot;
  min-width: 0;
  opacity: 0;
  visibility: hidden;
  translate: 0 4px;
}

.z-loader[data-handoff='swap'] .z-loader__visual { justify-self: center; }

.z-loader[data-handoff='swap'][data-state='success'] .z-loader__content {
  opacity: 1;
  visibility: visible;
  translate: 0 0;
  transition:
    opacity var(--loader-settle) var(--z-ease-out) 120ms,
    translate var(--loader-settle) var(--z-ease-out) 120ms,
    visibility 0s linear 120ms;
}

.z-loader[data-handoff='swap'][data-state='success'] .z-loader__visual {
  opacity: 0;
  transition: opacity var(--z-motion-feedback) var(--z-ease-out);
}

/* ---------- Still pose: reduced motion (set by the component) or a preview ---------- */

.z-loader[data-still],
.z-loader[data-still] * {
  animation: none !important;
  transition: none !important;
}

.z-loader[data-still][data-state='pending'] .z-loader__mark i { opacity: .5; }
.z-loader[data-still][data-variant='converge'][data-state='pending'] .z-loader__mark i { scale: .85; translate: calc(var(--dx) * 90%) calc(var(--dy) * 90%); }
.z-loader[data-still][data-variant='scan'][data-state='pending'] .z-loader__mark i { opacity: calc(.9 - var(--d) * .14); scale: 1; }
.z-loader[data-still][data-variant='helix'][data-state='pending'] .z-loader__mark i { scale: 1 calc(.35 + var(--i) * .08); }
.z-loader[data-still][data-variant='ripple'][data-state='pending'] .z-loader__mark i:not([data-part]) { opacity: calc(.6 - var(--i) * .18); scale: calc(.45 + var(--i) * .25); }
.z-loader[data-still][data-variant='ripple'][data-state='pending'] .z-loader__mark i[data-part='core'] { opacity: 1; }
.z-loader[data-still][data-variant='dots'][data-state='pending'] .z-loader__mark i { opacity: calc(.4 + var(--i) * .25); }
.z-loader[data-still][data-variant='word'] .z-loader__mark i,
.z-loader[data-still][data-variant='word'][data-state='pending'] .z-loader__word::after { opacity: 1; }
.z-loader[data-still][data-variant='orbit'][data-state='pending']:not([data-measured]) .z-loader__arc { stroke-dasharray: 75 25; }
.z-loader[data-still][data-variant='line'][data-state='pending']:not([data-measured]) .z-loader__mark i { opacity: 1; scale: .4 1; }
.z-loader[data-still][data-variant='skeleton'][data-state='pending'] .z-loader__mark i { opacity: .8; }
.z-loader[data-still] .z-loader__glyph path { stroke-dasharray: none; }

/* ---------- Keyframes ---------- */

@keyframes z-loader-quarter {
  0%, 30% { rotate: 0deg; }
  80%, 100% { rotate: 90deg; }
}

@keyframes z-loader-converge {
  0%, 100% { opacity: var(--loader-rest); scale: .7; translate: calc(var(--dx) * 130%) calc(var(--dy) * 130%); }
  50% { opacity: 1; scale: 1; translate: calc(var(--dx) * 40%) calc(var(--dy) * 40%); }
}

@keyframes z-loader-glint {
  0% { opacity: var(--loader-rest); scale: .86; }
  15% { opacity: 1; scale: 1; }
  40%, 100% { opacity: var(--loader-rest); scale: .86; }
}

@keyframes z-loader-helix {
  0%, 100% { opacity: .3; scale: 1 .3; translate: 0 -12%; }
  50% { opacity: 1; scale: 1 1; translate: 0 12%; }
}

@keyframes z-loader-ripple {
  0% { opacity: 0; scale: .15; }
  20% { opacity: .8; }
  100% { opacity: 0; scale: 1; }
}

@keyframes z-loader-breathe-core {
  0%, 100% { scale: .9; }
  15% { scale: 1.12; }
}

@keyframes z-loader-glint-word {
  0% { opacity: var(--loader-rest); }
  14% { opacity: 1; }
  28%, 100% { opacity: var(--loader-rest); }
}

@keyframes z-loader-spin {
  to { rotate: 360deg; }
}

@keyframes z-loader-arc {
  0% { stroke-dasharray: 22 78; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 64 36; stroke-dashoffset: -29; }
  100% { stroke-dasharray: 22 78; stroke-dashoffset: -100; }
}

@keyframes z-loader-dots {
  0% { opacity: var(--loader-rest); translate: 0 0; animation-timing-function: var(--z-ease-out); }
  20% { opacity: 1; translate: 0 calc(var(--loader-size) / -8); animation-timing-function: cubic-bezier(.4, 0, .6, 1); }
  50%, 100% { opacity: var(--loader-rest); translate: 0 0; }
}

@keyframes z-loader-travel {
  0% { opacity: 0; scale: .4 1; translate: -40% 0; }
  12%, 88% { opacity: 1; }
  100% { opacity: 0; scale: .4 1; translate: 100% 0; }
}

@keyframes z-loader-breathe {
  0%, 100% { opacity: .55; }
  50% { opacity: 1; }
}

@keyframes z-loader-say {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes z-loader-say-again {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Before hydration a reduced-motion reader gets no loop either. */
@media (prefers-reduced-motion: reduce) {
  .z-loader,
  .z-loader * {
    animation: none !important;
    transition: none !important;
  }
}

@media (prefers-contrast: more) {
  .z-loader { --loader-rest: .5; }
  .z-loader[data-variant='word'] { --loader-rest: 1; }
  .z-loader__track { stroke: color-mix(in srgb, currentColor 40%, transparent); }
}

@media (forced-colors: active) {
  .z-loader { color: CanvasText; }

  .z-loader__mark i,
  .z-loader[data-variant='line'] .z-loader__mark i {
    background: CanvasText;
    forced-color-adjust: none;
  }

  .z-loader[data-variant='word'] .z-loader__mark i { background: none; }

  .z-loader[data-variant='line'] .z-loader__mark,
  .z-loader[data-variant='skeleton'] .z-loader__mark i {
    background: GrayText;
    forced-color-adjust: none;
  }

  .z-loader__track { stroke: GrayText; }
  .z-loader__arc,
  .z-loader__glyph path { stroke: CanvasText; }
}
`;export{e as t};