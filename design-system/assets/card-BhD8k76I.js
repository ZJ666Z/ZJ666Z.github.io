var e=`/* Card family: ProjectCard, Tag, Surface, Stat, MediaFrame, SectionHeading, Text, layout primitives.
   The portfolio skin (.card / .tag) lives in portfolio.css, a separate contract. */

/* Layout */
.z-container {
  width: 100%;
  max-width: var(--z-container);
  margin-inline: auto;
  padding-inline: var(--z-gutter);
}

.z-stack {
  display: flex;
  gap: var(--z-stack-gap);
  min-width: 0;
}

.z-stack--column { flex-direction: column; }
.z-stack--row { flex-direction: row; flex-wrap: wrap; align-items: center; }

.z-grid {
  display: grid;
  grid-template-columns: repeat(var(--z-grid-columns), minmax(0, 1fr));
  gap: var(--z-grid-gap);
  min-width: 0;
}

.z-grid > *,
.z-stack > * { min-width: 0; }

/* Text */
.z-text {
  min-width: 0;
  margin: 0;
  font-family: var(--z-font-body);
  overflow-wrap: anywhere;
}

.z-text--display { font-size: var(--z-type-display); line-height: var(--z-type-display-leading); font-weight: 600; letter-spacing: normal; }
.z-text--heading { font-size: var(--z-type-heading); line-height: var(--z-type-heading-leading); font-weight: 700; letter-spacing: normal; }
.z-text--title { font-size: var(--z-type-title); line-height: var(--z-type-title-leading); font-weight: 600; letter-spacing: normal; }
.z-text--body { font-size: var(--z-type-body); line-height: var(--z-type-body-leading); font-weight: 400; }
.z-text--label { font-size: var(--z-type-label); line-height: var(--z-type-label-leading); font-weight: 500; }
.z-text--caption { font: 400 14px/22px var(--z-font-interface); }
.z-text--secondary { color: var(--z-color-ink-secondary); }
.z-text--caption.z-text--caption { color: var(--z-color-caption); }

/* Tag */
.z-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: max-content;
  max-width: 100%;
  padding: 6px 16px 6px 14px;
  border: 0;
  border-radius: var(--z-radius-pill);
  background: var(--z-color-surface);
  box-shadow: inset 0 0 0 1px var(--z-color-line);
  color: var(--z-color-ink);
  font: 500 14px/20px var(--z-font-body);
  text-align: center;
  overflow-wrap: anywhere;
}

.z-tag--project {
  gap: normal;
  padding: 6px 14px 6px 12px;
  background: var(--z-color-canvas);
  box-shadow: inset 0 0 0 1px var(--z-color-ink);
  font-size: 12px;
  line-height: 18px;
}

.z-tag--problem {
  padding: 6px 16px;
  background: var(--z-color-canvas);
  box-shadow: none;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
}

.z-tag--solution { box-shadow: none; }
.z-tag--soft { background: var(--z-color-accent-soft); box-shadow: none; color: var(--z-color-ink); }
.z-tag--dark { background: var(--z-color-ink); box-shadow: none; color: var(--z-color-on-dark); }

/* Surface */
.z-surface {
  min-width: 0;
  padding: var(--z-surface-padding);
  border-radius: var(--z-surface-radius);
}

.z-surface--white { background: var(--z-color-surface); }
.z-surface--subtle { background: var(--z-color-canvas); }
.z-surface--dark { background: var(--z-color-ink); color: var(--z-color-on-dark); }

/* Section heading */
.z-section-heading {
  display: grid;
  gap: var(--z-space-title-copy);
  min-width: 0;
}

.z-section-heading .z-tag { justify-self: start; }

.z-section-heading--center {
  width: 100%;
  max-width: 720px;
  margin-inline: auto;
  text-align: center;
}

.z-section-heading--center .z-tag { justify-self: center; }

/* Project card (system skin). The site's hover, plus a press: the image zooms to 1.1 on the media
   spring (800ms) while the arrow lifts out on the hover spring (700ms); a press sinks the card in
   120ms and lets it settle back on the spring. One link per card, nothing nested inside it. */
.z-project-card {
  --z-project-press: .985;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--z-space-6);
  min-width: 0;
  overflow: hidden;
  padding: var(--z-project-padding, var(--z-space-4));
  border: 0;
  border-radius: var(--z-project-radius, var(--z-radius-card));
  color: var(--z-color-ink);
  font: 400 var(--z-type-body) / var(--z-type-body-leading) var(--z-font-body);
  text-align: left;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: scale var(--z-motion-layout) var(--z-ease-spring);
}

button.z-project-card,
a.z-project-card { cursor: pointer; }

.z-project-card--subtle { background: var(--z-color-canvas); }
.z-project-card--white { background: var(--z-color-surface); }

.z-project-card__media {
  min-width: 0;
  aspect-ratio: 532 / 322;
  overflow: hidden;
  border-radius: var(--z-radius-media);
  background: var(--z-color-surface);
}

.z-project-card--white .z-project-card__media { background: var(--z-color-canvas); }

.z-project-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--z-motion-media) var(--z-ease-spring);
}

.z-project-card__body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--z-space-4);
  min-width: 0;
  padding: 0 var(--z-space-4) var(--z-space-4);
}

.z-project-card__copy { display: grid; gap: 10px; }

.z-project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--z-space-2);
}

.z-project-card__tags:empty { display: none; }

/* The arrow sits in the title's corner; the title keeps clear of it. */
.z-project-card:is(a) h3 {
  position: relative;
  padding-right: 40px;
}

.z-project-card:is(a) h3::after {
  content: '';
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  opacity: 0;
  pointer-events: none;
  background: center / 18px 18px no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M4 14L14 4M6 4h8v8' stroke='%231A1A1A' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  transition:
    opacity var(--z-motion-hover) var(--z-ease-spring),
    transform var(--z-motion-hover) var(--z-ease-spring);
}

.z-project-card--horizontal {
  flex-flow: row wrap;
  align-items: center;
  gap: var(--z-space-5);
}

.z-project-card--horizontal .z-project-card__media { flex: 1.25 1 300px; }

.z-project-card--horizontal .z-project-card__body {
  flex: 1 1 240px;
  padding: var(--z-space-2) var(--z-space-4);
}

.z-project-card:focus-visible {
  outline: 2px solid var(--z-color-blue);
  outline-offset: 3px;
}

.z-project-card:focus-visible .z-project-card__media img { transform: scale(1.1); }
.z-project-card:focus-visible h3::after { opacity: 1; transform: translate(8px, -8px); }

/* Press: in fast, out on the spring. */
a.z-project-card:active {
  scale: var(--z-project-press);
  transition-duration: var(--z-motion-press);
  transition-timing-function: var(--z-ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .z-project-card:is(a):hover .z-project-card__media img { transform: scale(1.1); }
  .z-project-card:is(a):hover h3::after { opacity: 1; transform: translate(8px, -8px); }
}

@media (hover: none) {
  .z-project-card:is(a):active .z-project-card__media img { transform: scale(1.06); }
}

/* Stat */
.z-stat { display: grid; gap: var(--z-space-1); }
.z-stat__label { color: var(--z-color-caption); text-align: center; }

/* Media frame */
.z-media-frame {
  display: grid;
  gap: var(--z-space-3);
  min-width: 0;
  margin: 0;
}

.z-media-frame img {
  display: block;
  width: 100%;
  border-radius: var(--z-radius-card);
}

.z-media-frame figcaption {
  color: var(--z-color-caption);
  font: 400 14px/20px var(--z-font-body);
  text-align: center;
}

@media (max-width: 809.98px) {
  .z-grid { grid-template-columns: minmax(0, 1fr); }
  .z-tag--problem { font-size: 18px; line-height: 26px; }
  .z-stat__value { font-size: 36px; line-height: 44px; }
}

/* Reduced motion: nothing zooms, lifts or sinks; the arrow still appears, so the state reads. */
@media (prefers-reduced-motion: reduce) {
  .z-project-card,
  .z-project-card__media img { transition: none; }
  a.z-project-card:active { scale: none; }
  .z-project-card:is(a) h3::after { transition: opacity var(--z-motion-feedback) var(--z-ease-out); }
  .z-project-card:is(a):hover .z-project-card__media img,
  .z-project-card:is(a):active .z-project-card__media img,
  .z-project-card:focus-visible .z-project-card__media img { transform: none; }
  .z-project-card:is(a):hover h3::after,
  .z-project-card:focus-visible h3::after { transform: none; }
}
`;export{e as t};