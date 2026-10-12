var e=`/* Canonical token values. Extracted from the existing portfolio, not a new theme.
   Every --z-* custom property here is parsed into the token registry (tokens.ts);
   a test keeps this file and the registry metadata in sync. */
:root {
  /* Color: grey to rest on, white to hold, blue to act. */
  --z-color-canvas: #f5f4f6;
  --z-color-canvas-deep: #efeef2;
  --z-color-surface: #ffffff;
  --z-color-ink: #1a1a1a;
  --z-color-ink-secondary: #383838;
  --z-color-caption: #66666e;
  --z-color-muted-legacy: #8e8e8e;
  --z-color-line: #e6e6e6;
  --z-color-blue: #6488ff;
  --z-color-blue-action: #4b6bf3;
  --z-color-blue-ink: #3f5ad9;
  --z-color-accent-soft: #edf1ff;
  --z-color-hover-tint: #f3f5ff;
  --z-color-on-dark: #ffffff;
  --z-color-success: #1b7a4f;
  --z-color-danger: #c2362a;
  --z-color-warning: #a05800;
  --z-color-wash: rgb(26 26 26 / 4%);
  --z-color-wash-strong: rgb(26 26 26 / 7%);
  --z-color-scrim: rgb(26 26 26 / 32%);
  --z-color-control-off: #85858d;

  /* Typography */
  --z-font-body: 'Montserrat', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
  --z-font-interface: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
  --z-font-code: ui-monospace, 'SF Mono', 'SFMono-Regular', Menlo, Monaco, 'Cascadia Mono', Consolas, 'Roboto Mono', monospace;
  --z-type-display: 60px;
  --z-type-display-leading: 72px;
  --z-type-heading: 48px;
  --z-type-heading-leading: 56px;
  --z-type-section: 36px;
  --z-type-section-leading: 44px;
  --z-type-variant: 28px;
  --z-type-variant-leading: 36px;
  --z-type-title: 24px;
  --z-type-title-leading: 32px;
  --z-type-body: 18px;
  --z-type-body-leading: 28px;
  --z-type-small: 14px;
  --z-type-small-leading: 20px;
  --z-type-label: 14px;
  --z-type-label-leading: 20px;
  --z-type-caption: 13px;
  --z-type-caption-leading: 20px;
  --z-type-eyebrow: 12px;
  --z-type-eyebrow-leading: 18px;
  --z-type-code: 13px;
  --z-type-code-leading: 22px;
  --z-tracking-eyebrow: .08em;

  /* Space */
  --z-space-1: 4px;
  --z-space-2: 8px;
  --z-space-3: 12px;
  --z-space-4: 16px;
  --z-space-5: 24px;
  --z-space-6: 32px;
  --z-space-7: 48px;
  --z-space-8: 64px;
  --z-space-section: 96px;
  --z-space-title-copy: var(--z-space-4);
  --z-space-content-media: var(--z-space-6);

  /* Shape: inner radius = outer radius - padding. */
  --z-radius-media: 8px;
  --z-radius-button: 12px;
  --z-radius-tile: 16px;
  --z-radius-card: 24px;
  --z-radius-panel: 32px;
  --z-radius-pill: 999px;

  /* Layout */
  --z-container: 1200px;
  --z-gutter: 24px;

  /* Shadow: only when something floats. */
  --z-shadow-raised: 0 8px 24px rgb(26 26 26 / 6%);
  --z-shadow-overlay: 0 24px 64px rgb(26 26 26 / 16%);
  --z-shadow-current: 0 1px 2px rgb(26 26 26 / 6%), 0 4px 12px rgb(26 26 26 / 4%);
  --z-shadow-glow: 0 8px 24px #4b6bf32b;

  /* Motion: one overdamped spring for space, expo-out for feedback. */
  --z-ease-out: cubic-bezier(.16, 1, .3, 1);
  --z-ease-spring: linear(0, .1272, .2981, .4411, .5556, .6467, .7191, .7767, .8225, .8588, .8878, .9108, .9291, .9436, .9552, .9644, .9717, .9775, .9821, .9858, .9887, .9910, .9928, .9943, .9955, 1);
  --z-ease-in: cubic-bezier(.4, 0, 1, 1);
  --z-ease-enter: var(--z-ease-out);
  --z-ease-original: var(--z-ease-spring);
  --z-motion-press: 120ms;
  --z-press-scale: .96;
  --z-motion-feedback: 200ms;
  --z-motion-control: 360ms;
  --z-motion-layout: 520ms;
  --z-motion-hover: 700ms;
  --z-motion-media: 800ms;
  --z-motion-exit: 180ms;
  --z-motion-enter: 600ms;
  --z-motion-title: 640ms;
  --z-motion-replay: 420ms;
  --z-motion-travel: 28px;
  --z-motion-travel-media: 16px;
  --z-motion-travel-replay: 10px;
  --z-motion-replay-from: .45;
  --z-motion-stagger: 40ms;
  --z-motion-group-stagger: 50ms;
  --z-motion-delay-cap: 160ms;
}

@media (max-width: 809.98px) {
  :root {
    --z-gutter: 24px;
    --z-type-display: 36px;
    --z-type-display-leading: 44px;
    --z-type-heading: 32px;
    --z-type-heading-leading: 40px;
    --z-type-section: 28px;
    --z-type-section-leading: 36px;
    --z-type-body: 16px;
    --z-type-body-leading: 26px;
    --z-space-section: 64px;
    --z-motion-enter: 520ms;
    --z-motion-travel: 20px;
    --z-motion-delay-cap: 80ms;
  }
}
`;export{e as t};