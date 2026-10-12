import{Et as e,Xt as t,Zt as n,an as r,gt as i,ht as a,kn as o,mt as s,p as c,pt as l,vt as u,wt as d}from"./route-DiUIWQAn.js";import{t as f}from"./tokens--8wjVqaD.js";import{_ as p,g as m}from"./docs-C3rBO14N.js";import{A as h,O as ee,_ as g,a as _,c as v,f as y,g as b,h as te,i as ne,k as x,l as S,n as C,o as w,r as re,s as T,t as ie,v as ae}from"./kit-CylDtrmy.js";import{t as oe}from"./button-x1rMhjJL.js";import{t as E}from"./asyncAction-DTai14V3.js";var D=o(),se={variant:`blue`,size:`md`,state:`live`,icon:`none`,outcome:`approved`,network:`normal`,hold:`standard`},O=e=>e===`pay`||e===`hold`,ce={fast:120,normal:1200,slow:3200},k={short:800,standard:1200,long:1800},A={blue:{label:`Pay $48.00`,component:`PayNowButton`,done:`Payment confirmed.`},dark:{label:`Place order`,component:`PlaceOrderButton`,done:`Order placed.`},light:{label:`Save for later`,component:`SaveForLaterButton`,done:`Saved for later.`},ghost:{label:`Add promo code`,component:`PromoCodeButton`,done:`Promo code field opened.`},pay:{label:`Pay $48.00`,component:`CheckoutPayButton`,done:`Payment confirmed.`},hold:{label:`Pay $1,240.00`,component:`HoldToPayButton`,done:`Payment approved.`}},le=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Button, ButtonLink, IconButton, PayButton, useAsyncAction } from '@zijie/ui';
`,j=(e,t)=>`${e}="${t}"`;function M(e,t,n,r){let i=`${r}  ${n}`;if(!t.length)return`${r}<${e}>\n${i}\n${r}</${e}>`;let a=`${r}<${e} ${t.join(` `)}>`;return a.length<=72?`${a}\n${i}\n${r}</${e}>`:`${r}<${e}\n${t.map(e=>`${r}  ${e}`).join(`
`)}\n${r}>\n${i}\n${r}</${e}>`}function N({variant:e,size:t,state:n,icon:r}){let i=[];return e!==`blue`&&i.push(j(`variant`,e)),t!==`md`&&i.push(j(`size`,t)),r!==`none`&&i.push(j(`icon`,r)),n!==`live`&&n!==`idle`&&i.push(j(`state`,n)),i}function P({variant:e,size:t,hold:n}){let r=[];return t!==`md`&&r.push(j(`size`,t)),e===`hold`&&(r.push(j(`confirm`,`hold`)),n!==`standard`&&r.push(`holdDuration={${k[n]}}`)),r}function F(e){let t=A[e.variant],n=[...P(e),`state={pay.state}`,`onConfirm={() => pay.run(({ signal }) => charge(signal))}`];return[`import { PayButton, useAsyncAction } from '@zijie/ui';`,``,`export function ${t.component}({ charge }: { charge: (signal: AbortSignal) => Promise<void> }) {`,e.variant===`hold`?`  // A large amount asks for a hold; letting go early shows "Hold to confirm".`:`  // Closes after 160ms, waves at least 320ms, holds the check for 1.6s.`,`  const pay = useAsyncAction();`,`  return (`,M(`PayButton`,n,t.label,`    `),`  );`,`}`,``].join(`
`)}function I(e){let{variant:t}=e;if(O(t))return F({...e,variant:t});let n=A[t];if(e.state===`live`){let r=[...N({...e,variant:t,state:`idle`}),`state={action.visibleState}`,`onClick={() => action.run(({ signal }) => submit(signal))}`];return[`import { Button, useAsyncAction } from '@zijie/ui';`,``,`export function ${n.component}({ submit }: { submit: (signal: AbortSignal) => Promise<void> }) {`,`  // Waits 160ms before showing a loader, keeps it at least 320ms, ignores repeat presses.`,`  const action = useAsyncAction();`,`  return (`,`    <Button\n${r.map(e=>`      ${e}`).join(`
`)}\n    >\n      ${n.label}\n    </Button>`,`  );`,`}`,``].join(`
`)}return[`import { Button } from '@zijie/ui';`,``,`export function ${n.component}() {`,`  return (`,M(`Button`,N({...e,variant:t}),n.label,`    `),`  );`,`}`,``].join(`
`)}function L(e){let t=N({variant:e.variant??`blue`,size:e.size??`md`,icon:e.icon??`none`,state:e.state??`idle`});return e.disabled&&t.push(`disabled`),`${M(`Button`,t,e.label,``)}\n`}function R({label:e,state:t,size:n=`md`,hold:r=!1}){let i=P({variant:r?`hold`:`pay`,size:n,hold:`standard`});return t!==`idle`&&i.push(j(`state`,t)),`${M(`PayButton`,i,e,``)}\n`}function z({label:e,href:t,variant:n=`blue`,icon:r=`none`,external:i=!1}){let a=[j(`href`,t)];return n!==`blue`&&a.push(j(`variant`,n)),r!==`none`&&a.push(j(`icon`,r)),i&&a.push(`external`),`${M(`ButtonLink`,a,e,``)}\n`}function B({label:e,icon:t,variant:n=`light`,size:r=`md`,shape:i=`square`,pressed:a,tooltip:o=!1}){let s=[j(`label`,e),j(`icon`,t)];n!==`light`&&s.push(j(`variant`,n)),r!==`md`&&s.push(j(`size`,r)),i!==`square`&&s.push(j(`shape`,i)),a===`state`?s.push(`pressed={on}`,`onClick={() => setOn(value => !value)}`):a!==void 0&&s.push(a?`pressed`:`pressed={false}`),o&&s.push(`tooltip`);let c=`<IconButton ${s.join(` `)} />`;return c.length<=72?`${c}\n`:`<IconButton\n${s.map(e=>`  ${e}`).join(`
`)}\n/>\n`}var V=`import type { ComponentPropsWithRef, MouseEvent } from 'react';
import { Icon, type IconName } from '../Icon';
import { RollLabel } from '../../motion/RollLabel';
import { useMagnetic } from '../../motion/useMagnetic';
import { composeHandlers, usePress } from '../../motion/usePress';
import { useReducedMotion } from '../../motion/useReducedMotion';
import { buttonTone, isTextLabel, useOwnRef, type ButtonSize, type ButtonVariant } from './shared';

export type { ButtonSize, ButtonVariant } from './shared';
export type ButtonState = 'idle' | 'loading' | 'success' | 'error';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Feedback shown in place. Passing it (even \`idle\`) reserves the feedback slot, so the box never resizes. */
  state?: ButtonState;
  /** Trailing icon. Arrows nudge forward on hover. */
  icon?: IconName;
  /** The site's label roll on hover-enter. On for text labels; ghost buttons never roll. */
  roll?: boolean;
  /** Keep the trailing feedback slot at rest. Defaults to true whenever \`state\` is passed. */
  reserveFeedback?: boolean;
};

/**
 * The site's button. While loading it stays focusable (\`aria-disabled\`, \`aria-busy\`) and ignores
 * presses, so keyboard and screen-reader users keep their place; only \`disabled\` removes it from
 * the tab order. Hover rolls the label and pulls ±2px toward the pointer (fine pointers, no
 * reduced motion, never on ghost); Space/Enter press it in like a pointer does.
 */
export function Button({
  children, variant = 'blue', size = 'md', state, icon, roll = true, reserveFeedback, className = '', disabled, ref,
  onClick, onPointerDown, onPointerUp, onPointerLeave, onPointerCancel, onKeyDown, onKeyUp, onBlur, ...props
}: ButtonProps) {
  const current = state ?? 'idle';
  const loading = current === 'loading';
  const tone = buttonTone[variant];
  const reduced = useReducedMotion();
  const [node, setRef] = useOwnRef(ref);
  useMagnetic(node, { disabled: tone === 'ghost' || !!disabled || reduced });
  const { pressProps } = usePress({ disabled: !!disabled || loading });

  const reserve = reserveFeedback ?? state !== undefined;
  const rolls = roll && tone !== 'ghost' && isTextLabel(children);
  const feedback = loading
    ? <span className="z-spinner" />
    : current === 'success'
      ? <Icon name="check" />
      : current === 'error'
        ? <Icon name="close" />
        : icon
          ? <Icon name={icon} />
          : null;

  return (
    <button
      type="button"
      {...props}
      ref={setRef}
      className={\`z-button z-button--\${tone} z-button--\${size}\${className ? \` \${className}\` : ''}\`}
      disabled={disabled}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
      data-state={current}
      data-feedback={reserve && !icon ? 'reserved' : undefined}
      data-pressed={pressProps['data-pressed']}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        // Loading ignores repeat presses (and never submits a form twice) without losing focus.
        if (loading) { event.preventDefault(); return; }
        onClick?.(event);
      }}
      onPointerDown={composeHandlers(pressProps.onPointerDown, onPointerDown)}
      onPointerUp={composeHandlers(pressProps.onPointerUp, onPointerUp)}
      onPointerLeave={composeHandlers(pressProps.onPointerLeave, onPointerLeave)}
      onPointerCancel={composeHandlers(pressProps.onPointerCancel, onPointerCancel)}
      onKeyDown={composeHandlers(pressProps.onKeyDown, onKeyDown)}
      onKeyUp={composeHandlers(pressProps.onKeyUp, onKeyUp)}
      onBlur={composeHandlers(pressProps.onBlur, onBlur)}
    >
      <span className="z-button__label">{rolls ? <RollLabel>{children}</RollLabel> : children}</span>
      {(reserve || icon || current !== 'idle') && (
        <span className="z-button__feedback" aria-hidden="true">
          {feedback && (
            <span key={current} className="z-button__state-icon" data-icon={current === 'idle' ? icon : undefined}>{feedback}</span>
          )}
        </span>
      )}
    </button>
  );
}
`,H=`import { useId, type ComponentPropsWithRef, type KeyboardEvent } from 'react';
import { Icon, type IconName } from '../Icon';
import { RollLabel } from '../../motion/RollLabel';
import { useMagnetic } from '../../motion/useMagnetic';
import { composeHandlers, usePress } from '../../motion/usePress';
import { useReducedMotion } from '../../motion/useReducedMotion';
import { buttonTone, isTextLabel, useOwnRef, type ButtonSize, type ButtonVariant } from './shared';

export interface ButtonLinkLabels {
  /** Described (not named) on links that open a new tab. */
  newTab: string;
}

export type ButtonLinkProps = ComponentPropsWithRef<'a'> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing icon. External links default to \`arrow-up-right\`. */
  icon?: IconName;
  /** The label roll on hover-enter, as on Button. */
  roll?: boolean;
  /** Opens in a new tab: sets target and rel, shows ↗ and tells screen readers. */
  external?: boolean;
  labels?: Partial<ButtonLinkLabels>;
};

/**
 * Buttons act, links go: a real \`<a href>\` that looks like a Button, so open-in-new-tab, history and
 * the status bar keep working. Same roll, magnet and press; Enter presses it in (Space scrolls, as
 * on any link). Links never load, so there is no \`state\`.
 */
export function ButtonLink({
  children, href, variant = 'blue', size = 'md', icon, roll = true, external = false, labels, className = '', ref,
  target, rel, onPointerDown, onPointerUp, onPointerLeave, onPointerCancel, onKeyDown, onKeyUp, onBlur, ...props
}: ButtonLinkProps) {
  const tone = buttonTone[variant];
  const reduced = useReducedMotion();
  const hintId = useId();
  const [node, setRef] = useOwnRef(ref);
  useMagnetic(node, { disabled: tone === 'ghost' || reduced });
  const { pressProps } = usePress();
  const trailing = icon ?? (external ? 'arrow-up-right' : undefined);
  const rolls = roll && tone !== 'ghost' && isTextLabel(children);
  // Links activate on Enter only; Space must keep scrolling the page.
  const pressKey = (handler: (event: KeyboardEvent<HTMLElement>) => void) => (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Enter') handler(event);
  };

  return (
    <a
      {...props}
      ref={setRef}
      href={href}
      target={external ? '_blank' : target}
      rel={external ? 'noopener noreferrer' : rel}
      aria-describedby={external ? [props['aria-describedby'], hintId].filter(Boolean).join(' ') : props['aria-describedby']}
      className={\`z-button z-button--\${tone} z-button--\${size} z-button--link\${className ? \` \${className}\` : ''}\`}
      data-pressed={pressProps['data-pressed']}
      onPointerDown={composeHandlers(pressProps.onPointerDown, onPointerDown)}
      onPointerUp={composeHandlers(pressProps.onPointerUp, onPointerUp)}
      onPointerLeave={composeHandlers(pressProps.onPointerLeave, onPointerLeave)}
      onPointerCancel={composeHandlers(pressProps.onPointerCancel, onPointerCancel)}
      onKeyDown={composeHandlers(pressKey(pressProps.onKeyDown), onKeyDown)}
      onKeyUp={composeHandlers(pressKey(pressProps.onKeyUp), onKeyUp)}
      onBlur={composeHandlers(pressProps.onBlur, onBlur)}
    >
      <span className="z-button__label">{rolls ? <RollLabel>{children}</RollLabel> : children}</span>
      {trailing && (
        <span className="z-button__feedback" aria-hidden="true">
          <span className="z-button__state-icon" data-icon={trailing}><Icon name={trailing} /></span>
        </span>
      )}
      {/* Hidden from the name (it stays the visible label) but read as the description. */}
      {external && <span id={hintId} hidden>{labels?.newTab ?? 'Opens in a new tab'}</span>}
    </a>
  );
}
`,U=`import { useState, type ComponentPropsWithRef, type KeyboardEvent } from 'react';
import { Icon, type IconName } from '../Icon';
import { composeHandlers, usePress } from '../../motion/usePress';

export type IconButtonVariant = 'light' | 'ghost' | 'dark' | 'blue';
/** 36 (44 on touch), 44, 48: \`lg\` lines up with a medium Button. */
export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonProps = ComponentPropsWithRef<'button'> & {
  /** Accessible name; required because the button shows no text. Also the tooltip text. */
  label: string;
  icon: IconName;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  shape?: 'square' | 'circle';
  /** A toggle: sets aria-pressed. Keep \`label\` stable while it flips; swap the icon if you like. */
  pressed?: boolean;
  /** Shows \`label\` above the button on hover and keyboard focus. Escape hides it. */
  tooltip?: boolean;
};

/**
 * A square or round button that shows only an icon and is named by \`label\`. Presses in on pointer
 * and Space/Enter alike; a changed \`icon\` (copy → check) crossfades in. Toggles use \`pressed\`.
 */
export function IconButton({
  label, icon, variant = 'light', size = 'md', shape = 'square', pressed, tooltip = false, className = '',
  onPointerDown, onPointerUp, onPointerLeave, onPointerCancel, onKeyDown, onKeyUp, onBlur, ...props
}: IconButtonProps) {
  const { pressProps } = usePress({ disabled: !!props.disabled });
  // Only an icon that changes after mount animates in; the first one is simply there.
  const [glyph, setGlyph] = useState({ icon, swapped: false });
  if (glyph.icon !== icon) setGlyph({ icon, swapped: true });
  const [tipHidden, setTipHidden] = useState(false);
  const onEscape = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (tooltip && event.key === 'Escape' && !tipHidden) { setTipHidden(true); event.stopPropagation(); }
  };
  const showTip = () => setTipHidden(false);

  const classes = ['z-icon-button', \`z-icon-button--\${variant}\`];
  if (size !== 'md') classes.push(\`z-icon-button--\${size}\`);
  if (shape === 'circle') classes.push('z-icon-button--circle');
  if (className) classes.push(className);

  return (
    <button
      type="button"
      {...props}
      className={classes.join(' ')}
      aria-label={label}
      aria-pressed={pressed}
      data-pressed={pressProps['data-pressed']}
      data-tooltip={tooltip ? (tipHidden ? 'hidden' : '') : undefined}
      onPointerDown={composeHandlers(pressProps.onPointerDown, onPointerDown)}
      onPointerUp={composeHandlers(pressProps.onPointerUp, onPointerUp)}
      onPointerLeave={composeHandlers(pressProps.onPointerLeave, showTip, onPointerLeave)}
      onPointerCancel={composeHandlers(pressProps.onPointerCancel, onPointerCancel)}
      onKeyDown={composeHandlers(pressProps.onKeyDown, onEscape, onKeyDown)}
      onKeyUp={composeHandlers(pressProps.onKeyUp, onKeyUp)}
      onBlur={composeHandlers(pressProps.onBlur, showTip, onBlur)}
    >
      <span key={icon} className="z-icon-button__icon" data-swap={glyph.swapped || undefined}>
        <Icon name={icon} />
      </span>
      {tooltip && <span className="z-icon-button__tip" aria-hidden="true">{label}</span>}
    </button>
  );
}
`,W=`import {
  useEffect, useId, useRef, useState,
  type ComponentPropsWithRef, type KeyboardEvent, type MouseEvent, type PointerEvent, type ReactNode,
} from 'react';
import type { AsyncState } from '../../motion/asyncAction';
import { EASE_OUT } from '../../motion/easing';
import { RollLabel } from '../../motion/RollLabel';
import { useMagnetic } from '../../motion/useMagnetic';
import { composeHandlers, usePress } from '../../motion/usePress';
import { useReducedMotion } from '../../motion/useReducedMotion';
import { isTextLabel, useOwnRef, type ButtonSize } from './shared';

/** What the button looks like: the label, the closed circle while working, the check, or "Try again". */
export type PayButtonPhase = 'rest' | 'busy' | 'done' | 'retry';
/** Hold mode only: at rest, holding (the fill grows), or the "Hold to confirm" hint after an early release. */
export type HoldState = 'idle' | 'holding' | 'hint';

export interface PayButtonLabels {
  /** Visible after a failure; pressing it pays again. */
  retry: string;
  /** Shown in place after an early release in hold mode. */
  holdHint: string;
  /** Read as the description in hold mode. */
  holdDescription: string;
  /** Announced (not shown) while the payment runs, when it lands and when it fails. */
  busy: string;
  success: string;
  error: string;
}

export const payButtonLabels: Readonly<PayButtonLabels> = Object.freeze({
  retry: 'Try again',
  holdHint: 'Hold to confirm',
  holdDescription: 'Press and hold to confirm.',
  busy: 'Processing payment',
  success: 'Payment confirmed',
  error: 'Payment failed',
});

/** Default hold length (ms) and how long the hint stays after an early release. */
export const HOLD_DURATION = 1200;
export const HOLD_HINT_MS = 1800;

/**
 * The visible phase for an async state. \`waiting\` (the first 160ms) keeps whatever is on screen, so a
 * fast payment never flashes and a retry never blinks back to the resting label. Pure.
 */
export function payPhase(state: AsyncState, previous: PayButtonPhase): PayButtonPhase {
  if (state === 'waiting') return previous;
  if (state === 'loading') return 'busy';
  if (state === 'success') return 'done';
  if (state === 'error') return 'retry';
  return 'rest';
}

export type PayButtonProps = Omit<ComponentPropsWithRef<'button'>, 'children'> & {
  /** The resting label: a verb and the amount, "Pay $48.00". */
  children: ReactNode;
  /** Pass \`action.state\` from useAsyncAction (the full state, so the first 160ms stay still). */
  state?: AsyncState;
  variant?: 'blue' | 'dark';
  size?: ButtonSize;
  /** \`hold\` asks for a press-and-hold (large or agent-made payments); a short press explains itself. */
  confirm?: 'press' | 'hold';
  /** ms the hold takes to fill. */
  holdDuration?: number;
  /** Starts the payment: a click in \`press\` mode, a completed hold in \`hold\` mode. */
  onConfirm?: () => void;
  onHoldChange?: (hold: HoldState) => void;
  labels?: Partial<PayButtonLabels>;
  /** Announce progress and results politely. Turn off only when a visible status line already says it. */
  announce?: boolean;
};

const busyStates: readonly AsyncState[] = ['waiting', 'loading', 'success'];

interface HoldRun { animation: Animation | null; timer: ReturnType<typeof setTimeout> | null }

/**
 * The pay button. On confirm the label lifts away and the button closes into a circle in its own
 * reserved slot (the one width transition in the system), waves while the payment runs, draws a
 * check, then opens back to its label. A failure re-opens it as "Try again" in a danger tint. Focus
 * never leaves it: while working it is \`aria-disabled\` and \`aria-busy\`, and presses are ignored.
 * \`className\` goes on the slot; \`ref\` on the button.
 */
export function PayButton({
  children, state = 'idle', variant = 'blue', size = 'md', confirm = 'press', holdDuration = HOLD_DURATION,
  onConfirm, onHoldChange, labels, announce = true, className = '', disabled, ref,
  onClick, onPointerDown, onPointerUp, onPointerLeave, onPointerCancel, onPointerMove, onKeyDown, onKeyUp, onBlur, onContextMenu,
  ...props
}: PayButtonProps) {
  const text = { ...payButtonLabels, ...labels };
  const hold = confirm === 'hold';
  const engaged = busyStates.includes(state);
  const reduced = useReducedMotion();
  const descriptionId = useId();
  const [node, setRef] = useOwnRef(ref);
  const fill = useRef<HTMLSpanElement>(null);

  // Derived, sticky phase (setState during render is React's pattern for state that follows props).
  const [shownPhase, setShownPhase] = useState<PayButtonPhase>(() => payPhase(state, 'rest'));
  const phase = payPhase(state, shownPhase);
  if (phase !== shownPhase) setShownPhase(phase);

  useMagnetic(node, { disabled: !!disabled || reduced || phase === 'busy' || phase === 'done' });
  const { pressProps } = usePress({ disabled: !!disabled || engaged });

  // ---- Hold to confirm ----
  const [holdState, setHoldState] = useState<HoldState>('idle');
  const run = useRef<HoldRun | null>(null);
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const confirmRef = useRef(onConfirm);
  const holdChangeRef = useRef(onHoldChange);
  useEffect(() => { confirmRef.current = onConfirm; holdChangeRef.current = onHoldChange; });

  const clearHint = () => {
    if (hintTimer.current) clearTimeout(hintTimer.current);
    hintTimer.current = null;
  };

  /** Stop a hold in progress. \`release\` (let go early) shows the hint; \`cancel\` (Esc, blur, drag away) does not. */
  const endHold = (reason: 'release' | 'cancel') => {
    const current = run.current;
    if (!current) return;
    run.current = null;
    if (current.timer) clearTimeout(current.timer);
    const progress = Number(current.animation?.effect?.getComputedTiming().progress ?? 0);
    current.animation?.cancel();
    const element = fill.current;
    if (progress > 0 && element && typeof element.animate === 'function') {
      element.animate([{ transform: \`scaleX(\${progress})\` }, { transform: 'scaleX(0)' }], { duration: 240, easing: EASE_OUT });
    }
    clearHint();
    if (reason === 'release') {
      setHoldState('hint');
      hintTimer.current = setTimeout(() => { hintTimer.current = null; setHoldState('idle'); }, HOLD_HINT_MS);
    } else {
      setHoldState('idle');
    }
  };

  const startHold = () => {
    if (!hold || disabled || engaged || run.current) return;
    clearHint();
    const element = fill.current;
    // The fill is the progress itself, so it runs under reduced motion too (it never moves the layout).
    const animation = element && typeof element.animate === 'function'
      ? element.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: holdDuration, easing: 'linear', fill: 'forwards' })
      : null;
    const current: HoldRun = { animation, timer: null };
    const complete = () => {
      if (run.current !== current) return;
      run.current = null;
      setHoldState('idle');
      // Full: the fill lets go as the payment starts.
      if (element && animation && typeof element.animate === 'function') {
        const fade = element.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 280, easing: EASE_OUT, fill: 'forwards' });
        fade.finished.then(() => { animation.cancel(); fade.cancel(); }, () => animation.cancel());
      }
      confirmRef.current?.();
    };
    if (animation) animation.onfinish = complete;
    else current.timer = setTimeout(complete, holdDuration);
    run.current = current;
    setHoldState('holding');
  };

  // Anything that takes the button away mid-hold ends the hold quietly.
  useEffect(() => { if (engaged || disabled || !hold) endHold('cancel'); });
  useEffect(() => { holdChangeRef.current?.(holdState); }, [holdState]);
  useEffect(() => () => {
    clearHint();
    const current = run.current;
    run.current = null;
    if (current?.timer) clearTimeout(current.timer);
    current?.animation?.cancel();
  }, []);

  const holdKey = (event: KeyboardEvent<HTMLButtonElement>) => event.key === ' ' || event.key === 'Enter';
  const handlers = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => {
      // Working: ignore repeat presses without dropping focus (and never submit a form twice).
      if (engaged) { event.preventDefault(); return; }
      onClick?.(event);
      if (hold) { event.preventDefault(); return; }
      if (!event.defaultPrevented) onConfirm?.();
    },
    onPointerDown: (event: PointerEvent<HTMLButtonElement>) => {
      if (!hold || event.button !== 0 || !event.isPrimary) return;
      try { event.currentTarget.setPointerCapture(event.pointerId); } catch { /* capture is a nicety */ }
      startHold();
    },
    onPointerUp: () => { if (hold) endHold('release'); },
    onPointerCancel: () => { if (hold) endHold('cancel'); },
    onPointerMove: (event: PointerEvent<HTMLButtonElement>) => {
      if (!run.current) return;
      // Dragging well off the button is a change of mind, like a native button.
      const rect = event.currentTarget.getBoundingClientRect();
      const slop = 16;
      if (event.clientX < rect.left - slop || event.clientX > rect.right + slop || event.clientY < rect.top - slop || event.clientY > rect.bottom + slop) endHold('cancel');
    },
    onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => {
      if (!hold) return;
      if (holdKey(event)) {
        event.preventDefault();
        if (!event.repeat) startHold();
      } else if (event.key === 'Escape' && (run.current || holdState === 'hint')) {
        event.stopPropagation();
        endHold('cancel');
        clearHint();
        setHoldState('idle');
      }
    },
    onKeyUp: (event: KeyboardEvent<HTMLButtonElement>) => {
      if (!hold || !holdKey(event)) return;
      event.preventDefault();
      endHold('release');
    },
    onBlur: () => { if (hold) endHold('cancel'); },
    onContextMenu: (event: MouseEvent<HTMLButtonElement>) => { if (hold) event.preventDefault(); },
  };

  // ---- Label ----
  const hinting = hold && holdState === 'hint' && (phase === 'rest' || phase === 'retry');
  const faceKey = hinting ? 'hint' : phase === 'retry' ? 'retry' : 'rest';
  const [face, setFace] = useState({ key: faceKey, swapped: false });
  if (face.key !== faceKey) setFace({ key: faceKey, swapped: true });
  const faceLabel = faceKey === 'hint' ? text.holdHint : faceKey === 'retry' ? text.retry : children;
  const rolls = faceKey === 'rest' && isTextLabel(children);

  const message = !announce ? ''
    : hinting ? text.holdHint
      : phase === 'busy' ? text.busy
        : phase === 'done' ? text.success
          : phase === 'retry' ? text.error
            : '';
  const describedBy = [props['aria-describedby'], hold ? descriptionId : ''].filter(Boolean).join(' ') || undefined;

  return (
    <span className={\`z-pay z-pay--\${size}\${className ? \` \${className}\` : ''}\`} data-phase={phase}>
      {/* Every label this button can show, stacked and invisible: the slot is as wide as the widest. */}
      <span className="z-pay__reserve" aria-hidden="true">
        <span>{children}</span>
        <span>{text.retry}</span>
        {hold && <span>{text.holdHint}</span>}
      </span>
      <button
        type="button"
        {...props}
        ref={setRef}
        className={\`z-pay-button z-pay-button--\${variant}\`}
        disabled={disabled}
        aria-disabled={engaged || undefined}
        aria-busy={state === 'waiting' || state === 'loading' || undefined}
        aria-describedby={describedBy}
        data-phase={phase}
        data-confirm={hold ? 'hold' : undefined}
        data-hold={hold && holdState !== 'idle' ? holdState : undefined}
        data-pressed={pressProps['data-pressed']}
        onClick={handlers.onClick}
        onPointerDown={composeHandlers(pressProps.onPointerDown, handlers.onPointerDown, onPointerDown)}
        onPointerUp={composeHandlers(pressProps.onPointerUp, handlers.onPointerUp, onPointerUp)}
        onPointerLeave={composeHandlers(pressProps.onPointerLeave, onPointerLeave)}
        onPointerCancel={composeHandlers(pressProps.onPointerCancel, handlers.onPointerCancel, onPointerCancel)}
        onPointerMove={composeHandlers(handlers.onPointerMove, onPointerMove)}
        onKeyDown={composeHandlers(pressProps.onKeyDown, handlers.onKeyDown, onKeyDown)}
        onKeyUp={composeHandlers(pressProps.onKeyUp, handlers.onKeyUp, onKeyUp)}
        onBlur={composeHandlers(pressProps.onBlur, handlers.onBlur, onBlur)}
        onContextMenu={composeHandlers(handlers.onContextMenu, onContextMenu)}
      >
        {hold && <span ref={fill} className="z-pay-button__fill" aria-hidden="true" />}
        <span className="z-pay-button__face">
          <span key={faceKey} className="z-pay-button__label" data-swap={face.swapped || undefined}>
            {rolls ? <RollLabel>{children}</RollLabel> : faceLabel}
          </span>
        </span>
        <span className="z-pay-button__wave" aria-hidden="true"><i /><i /><i /></span>
        <svg className="z-pay-button__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M5.5 12.6 9.9 17 18.5 7.6" pathLength={1} />
        </svg>
      </button>
      {hold && <span id={descriptionId} hidden>{text.holdDescription}</span>}
      {announce && <span className="z-sr-only" role="status">{message}</span>}
    </span>
  );
}
`,ue=`/* Internal to the Button family: not re-exported by index.ts. */
import { useCallback, useRef, type Ref, type RefObject } from 'react';

/** \`blue\` and \`light\` are the site's names; \`primary\` and \`secondary\` remain as aliases. */
export type ButtonVariant = 'blue' | 'dark' | 'light' | 'ghost' | 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonTone = 'primary' | 'dark' | 'secondary' | 'ghost';

export const buttonTone: Record<ButtonVariant, ButtonTone> = {
  blue: 'primary',
  primary: 'primary',
  dark: 'dark',
  light: 'secondary',
  secondary: 'secondary',
  ghost: 'ghost',
};

/** A plain string or number label can roll; anything richer (an icon, a live total) stays still. */
export const isTextLabel = (children: unknown): children is string | number => typeof children === 'string' || typeof children === 'number';

/** Keep a local handle on the element while honouring the caller's ref (object or callback). */
export function useOwnRef<T>(ref: Ref<T> | undefined): [RefObject<T | null>, (element: T | null) => void] {
  const node = useRef<T | null>(null);
  const setRef = useCallback((element: T | null) => {
    node.current = element;
    if (typeof ref === 'function') ref(element);
    else if (ref) (ref as { current: T | null }).current = element;
  }, [ref]);
  return [node, setRef];
}
`,de=`import { useEffect, useLayoutEffect, useRef, type CSSProperties, type HTMLAttributes } from 'react';
import { easeOut, parseDuration, tweenAt } from '../../motion/easing';
import { prefersReducedMotion } from '../../motion/env';

export type NumberFormat = Intl.NumberFormatOptions | ((value: number) => string);

export type AnimatedNumberProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  value: number;
  /** Intl options (e.g. \`{ style: 'currency', currency: 'USD' }\`) or a formatter. */
  format?: NumberFormat;
  locale?: string;
  /** ms; defaults to --z-motion-layout (520ms). */
  duration?: number;
  /** Off by default: announce the settled total from a separate status line instead. */
  live?: 'off' | 'polite';
  /**
   * \`roll\` (default): every digit turns on its own reel, like a till, and only changed digits move.
   * \`count\`: the whole number counts through the values in between.
   */
  motion?: 'roll' | 'count';
};

export function formatNumber(value: number, format: NumberFormat | undefined, locale = 'en-US') {
  if (typeof format === 'function') return format(value);
  return new Intl.NumberFormat(locale, format ?? { maximumFractionDigits: 2 }).format(value);
}

export interface NumberGlyph {
  /** Stable across value changes: digits keep their place counted from the right (units stay units). */
  key: string;
  char: string;
  /** 0–9 for a digit that rolls, -1 for a static character ($ . , −). */
  digit: number;
}

/** Split a formatted number into reels and static characters, keyed from the right. Pure. */
export function numberGlyphs(text: string): NumberGlyph[] {
  const chars = [...text];
  return chars.map((char, index) => {
    const place = chars.length - index;
    const digit = char >= '0' && char <= '9' ? char.charCodeAt(0) - 48 : -1;
    return { key: digit >= 0 ? \`d\${place}\` : \`c\${place}\${char}\`, char, digit };
  });
}

const reel = Array.from({ length: 10 }, (_, digit) => <span key={digit}>{digit}</span>);

/**
 * A number that moves when it changes, in tabular figures. Screen readers get the settled value once
 * (the moving glyphs are aria-hidden); under reduced motion it simply changes. A first render never
 * animates, and the server renders the settled value.
 */
export function AnimatedNumber({ value, format, locale = 'en-US', duration, live = 'off', motion = 'roll', className, style, ...props }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const shown = useRef(value);
  const text = formatNumber(value, format, locale);

  // Roll: digits added after the first paint fade up (CSS @starting-style, gated by data-ready);
  // data-rolling softens the reel edges only while something moves.
  useEffect(() => {
    const node = ref.current;
    if (node) node.dataset.ready = '';
  }, []);
  const lastText = useRef(text);
  useEffect(() => {
    const node = ref.current;
    if (motion !== 'roll' || !node || lastText.current === text) return;
    lastText.current = text;
    if (prefersReducedMotion()) return;
    const total = duration ?? parseDuration(getComputedStyle(node).getPropertyValue('--z-motion-layout'), 520);
    node.dataset.rolling = '';
    const timer = setTimeout(() => { delete node.dataset.rolling; }, total + 24 * text.length + 60);
    return () => { clearTimeout(timer); delete node.dataset.rolling; };
  }, [text, motion, duration]);

  // Count: React renders the settled text; the tween rewrites that same text node frame by frame, so
  // nothing re-renders and an interrupted tween continues from the number on screen.
  const formatting = useRef({ format, locale });
  useEffect(() => { formatting.current = { format, locale }; });
  useLayoutEffect(() => {
    const from = shown.current;
    const textNode = counter.current?.firstChild;
    shown.current = value;
    if (motion !== 'count' || from === value || !textNode || !counter.current) return;
    const total = duration ?? parseDuration(getComputedStyle(counter.current).getPropertyValue('--z-motion-layout'), 520);
    if (prefersReducedMotion() || total <= 0 || typeof requestAnimationFrame !== 'function') return;
    const paint = (next: number) => {
      shown.current = next;
      textNode.nodeValue = formatNumber(next, formatting.current.format, formatting.current.locale);
    };
    paint(from);
    const start = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const elapsed = now - start;
      paint(tweenAt(from, value, elapsed, total, easeOut));
      if (elapsed < total) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, motion, duration]);

  const glyphs = motion === 'roll' ? numberGlyphs(text) : [];
  const vars = duration === undefined ? style : { ...style, '--z-number-duration': \`\${duration}ms\` } as CSSProperties;
  return (
    <span
      ref={ref}
      className={\`z-animated-number\${className ? \` \${className}\` : ''}\`}
      data-motion={motion}
      aria-live={live === 'off' ? undefined : live}
      style={vars}
      {...props}
    >
      <span className="z-sr-only">{text}</span>
      {motion === 'roll'
        ? (
          <span className="z-animated-number__glyphs" aria-hidden="true">
            {glyphs.map((glyph, index) => (glyph.digit < 0
              ? <span key={glyph.key} className="z-animated-number__char">{glyph.char}</span>
              : (
                <span key={glyph.key} className="z-animated-number__digit" style={{ '--z-digit': glyph.digit, '--z-digit-order': index } as CSSProperties}>
                  <span className="z-animated-number__ghost">{glyph.char}</span>
                  <span className="z-animated-number__reel">{reel}</span>
                </span>
              )))}
          </span>
        )
        : <span ref={counter} className="z-animated-number__count" aria-hidden="true">{text}</span>}
    </span>
  );
}
`,G={name:`Button.tsx`,code:V},K={name:`PayButton.tsx`,code:W},q=[{name:`button.css`,code:oe},{name:`asyncAction.ts`,code:E},{name:`ButtonLink.tsx`,code:H},{name:`IconButton.tsx`,code:U},{name:`AnimatedNumber.tsx`,code:de},{name:`shared.ts`,code:ue}],J={name:`tokens.css`,code:f},fe=[G,...q,K,J],pe=[K,...q,G,J];function me(e){return O(e)?pe:fe}var Y=r();function X({variant:e}){return e===`pay`?(0,Y.jsxs)(`svg`,{className:`button-thumb button-thumb--pay`,viewBox:`0 0 40 24`,width:`40`,height:`24`,"aria-hidden":`true`,children:[(0,Y.jsx)(`circle`,{className:`button-thumb__body`,cx:`20`,cy:`12`,r:`11`}),[15,20,25].map((e,t)=>(0,Y.jsx)(`circle`,{className:`button-thumb__dot`,cx:e,cy:t===1?10.5:12,r:`1.7`},e))]}):(0,Y.jsxs)(`svg`,{className:`button-thumb button-thumb--${e}`,viewBox:`0 0 40 24`,width:`40`,height:`24`,"aria-hidden":`true`,children:[(0,Y.jsx)(`rect`,{className:`button-thumb__body`,x:`.75`,y:`.75`,width:`38.5`,height:`22.5`,rx:`7`}),e===`hold`&&(0,Y.jsx)(`rect`,{className:`button-thumb__fill`,x:`.75`,y:`.75`,width:`22`,height:`22.5`,rx:`7`}),(0,Y.jsx)(`rect`,{className:`button-thumb__label`,x:`11`,y:`10.5`,width:`18`,height:`3`,rx:`1.5`})]})}var he=[{id:`blue`,label:`Blue`,description:`The one action that moves the flow forward.`,thumb:(0,Y.jsx)(X,{variant:`blue`})},{id:`dark`,label:`Dark`,description:`Strong and neutral, for flows that are not about money.`,thumb:(0,Y.jsx)(X,{variant:`dark`})},{id:`light`,label:`Light`,description:`Holds its own on grey surfaces without competing.`,thumb:(0,Y.jsx)(X,{variant:`light`})},{id:`ghost`,label:`Ghost`,description:`A low-commitment action that sits beside the main one.`,thumb:(0,Y.jsx)(X,{variant:`ghost`})},{id:`pay`,label:`Pay`,description:`Becomes its own progress: it closes, waits, confirms and opens.`,thumb:(0,Y.jsx)(X,{variant:`pay`})},{id:`hold`,label:`Hold`,description:`For large amounts, a deliberate hold instead of a tap.`,thumb:(0,Y.jsx)(X,{variant:`hold`})}],ge=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],_e=[{value:`live`,label:`Rest`},{value:`loading`,label:`Loading`},{value:`success`,label:`Success`},{value:`error`,label:`Error`}],ve=[{value:`none`,label:`None`},{value:`arrow-right`,label:`Arrow`},{value:`arrow-up-right`,label:`Link`}],ye=[{value:`approved`,label:`Approved`},{value:`declined`,label:`Declined`}],be=[{value:`fast`,label:`Fast`},{value:`normal`,label:`Normal`},{value:`slow`,label:`Slow`}],xe=[{value:`short`,label:`Short`},{value:`standard`,label:`Standard`},{value:`long`,label:`Long`}],Se=e=>[{id:`idle`,label:`Rest`},{id:`waiting`,label:`Delay`},{id:`loading`,label:`Loading`},{id:`done`,label:e?`Error`:`Success`}],Ce=e=>e===`waiting`||e===`loading`?e:e===`success`||e===`error`?`done`:`idle`;function we(e,t,n){return e===`waiting`||e===`loading`?`Processing…`:e===`success`?A[t].done:e===`error`?`Card declined. Try another method.`:n?`Press it.`:``}function Te({demo:e,variant:r,active:a,onState:o}){let s=t(),{reset:c}=s;(0,D.useEffect)(()=>{a||c()},[a,c]),(0,D.useEffect)(()=>{c()},[r,e.state,c]),(0,D.useEffect)(()=>{o(s.state)},[s.state,o]);let l=e.state===`live`;return(0,Y.jsx)(i,{variant:r,size:e.size,icon:e.icon===`none`?void 0:e.icon,state:l?s.visibleState:e.state,onClick:l?()=>{s.run(n(1200))}:void 0,children:A[r].label})}var Ee={state:`idle`,hold:`idle`,slow:!1},De=2400,Oe=`Hold to confirm. A tap is not enough for this amount.`,ke=(e,t)=>[{id:`idle`,label:`Rest`},e===`hold`?{id:`holding`,label:`Holding`}:{id:`waiting`,label:`Delay`},{id:`loading`,label:`Processing`},{id:`done`,label:t?`Declined`:`Paid`}];function Ae({state:e,hold:t},n){return t===`holding`?`holding`:e===`waiting`?n===`hold`?`loading`:`waiting`:e===`loading`?`loading`:e===`success`||e===`error`?`done`:`idle`}function je({state:e,hold:t,slow:n},r){return e===`waiting`||e===`loading`?n?`Still confirming with your bank…`:`Processing payment…`:e===`success`?A[r].done:t===`holding`?`Keep holding…`:t===`hint`?Oe:e===`error`?`Card declined. Try again, or use another card.`:r===`hold`?`Press and hold.`:`Press it.`}function Me({demo:e,variant:r,active:i,onReport:a}){let o=t(),{reset:s}=o,[c,u]=(0,D.useState)(`idle`),[d,f]=(0,D.useState)(!1);return(0,D.useEffect)(()=>{i||s()},[i,s]),(0,D.useEffect)(()=>{s()},[r,e.outcome,e.network,e.hold,s]),(0,D.useEffect)(()=>{if(f(!1),o.state!==`loading`)return;let e=setTimeout(()=>f(!0),De);return()=>clearTimeout(e)},[o.state]),(0,D.useEffect)(()=>{a({state:o.state,hold:c,slow:d})},[o.state,c,d,a]),(0,Y.jsx)(l,{size:e.size,confirm:r===`hold`?`hold`:`press`,holdDuration:k[e.hold],state:o.state,announce:!1,onHoldChange:u,onConfirm:()=>{o.run(n(ce[e.network],e.outcome===`declined`?`error`:`success`))},children:A[r].label})}function Ne(){let[e,t]=(0,D.useState)(se),[n,r]=(0,D.useState)(`idle`),[i,a]=(0,D.useState)(Ee),o=e=>n=>t(t=>({...t,[e]:n})),s=e.state===`live`,c=s?n:e.state,l=O(e.variant)?e.variant:null,u=(0,Y.jsx)(y,{label:`Size`,value:e.size,options:ge,onChange:o(`size`)}),d=l?(0,Y.jsxs)(Y.Fragment,{children:[u,(0,Y.jsx)(y,{label:`Outcome`,value:e.outcome,options:ye,onChange:o(`outcome`)}),l===`pay`?(0,Y.jsx)(y,{label:`Network`,value:e.network,options:be,onChange:o(`network`)}):(0,Y.jsx)(y,{label:`Hold`,value:e.hold,options:xe,onChange:o(`hold`)})]}):(0,Y.jsxs)(Y.Fragment,{children:[u,(0,Y.jsx)(y,{label:`State`,value:e.state,options:_e,onChange:o(`state`)}),(0,Y.jsx)(y,{label:`Icon`,value:e.icon,options:ve,onChange:o(`icon`)})]});return(0,Y.jsx)(te,{page:`button`,name:`Button`,variants:he,variant:e.variant,onVariantChange:o(`variant`),status:l?je(i,l):we(c,e.variant,s),animated:!l&&e.state===`loading`,simulated:!!l||s,trail:l?(0,Y.jsx)(_,{states:ke(l,i.state===`error`),active:Ae(i,l),label:`Pay states`}):(0,Y.jsx)(_,{states:Se(c===`error`),active:Ce(c),label:`Button states`}),code:{setup:le,usage:I(e),usageFile:`${A[e.variant].component}.tsx`,sources:me(e.variant)},controls:d,children:({variant:t,active:n})=>O(t)?(0,Y.jsx)(Me,{demo:e,variant:t,active:n,onReport:a}):(0,Y.jsx)(Te,{demo:e,variant:t,active:n,onState:r})})}var Pe=[{title:`Rest`,note:`One outcome, named as a verb.`,demo:{label:`Pay $48.00`,state:`idle`}},{title:`Loading`,note:`Appears after 160ms; repeat presses are ignored.`,demo:{label:`Pay $48.00`,state:`loading`}},{title:`Success`,note:`Confirms in place, then returns to rest.`,demo:{label:`Pay $48.00`,state:`success`}},{title:`Error`,note:`Pair it with the reason in a status line.`,demo:{label:`Pay $48.00`,state:`error`}},{title:`Disabled`,note:`Say why nearby, or keep it enabled.`,demo:{label:`Pay $48.00`,state:`idle`,disabled:!0}},{title:`With icon`,note:`A trailing arrow that leans forward on hover.`,demo:{label:`Continue to shipping`,variant:`dark`,icon:`arrow-right`}}],Fe=[{title:`Ready`,note:`Verb and amount, in a reserved slot.`,state:`idle`},{title:`Processing`,note:`A circle after 160ms; dots wave.`,state:`loading`},{title:`Paid`,note:`Green, with a drawn check.`,state:`success`},{title:`Declined`,note:`Reopens tinted, asking again.`,state:`error`}],Z=700,Q=[{id:`close`,title:`Close`,when:`After 160ms of waiting`,steps:[{name:`Label lifts away`,detail:`Opacity and blur, 120ms`,start:0,duration:120},{name:`Box closes to a circle`,detail:`Width and radius, 520ms spring`,start:0,duration:520,spring:!0},{name:`Dots wave in`,detail:`From 200ms, a 1s wave`,start:200,duration:200},{name:`Circle breathes`,detail:`From 520ms, a 1.6s loop`,start:520,duration:180,loop:!0}]},{id:`land`,title:`Land`,when:`When the bank answers`,steps:[{name:`Turns success green`,detail:`Background, 200ms`,start:0,duration:200},{name:`Pops once`,detail:`Scale 1.08, 480ms from 120ms`,start:120,duration:480},{name:`Check draws`,detail:`One stroke, 420ms from 160ms`,start:160,duration:420}]},{id:`open`,title:`Open`,when:`After a 1.6s hold`,steps:[{name:`Box opens to the label`,detail:`Width and radius, 520ms spring`,start:0,duration:520,spring:!0},{name:`Label rises in`,detail:`Opacity, blur and scale, 420ms from 140ms`,start:140,duration:420,spring:!0}]}],Ie=(e,t)=>e===`loading`?`close`:e===`success`?`land`:e===`idle`&&t===`land`?`open`:e===`waiting`?t===`open`?null:t:e===`idle`?t:null;function Le(){let e=(0,D.useRef)(null),r=b(e,{page:`button`}),i=t(),{reset:a}=i,[o,s]=(0,D.useState)({id:null,serial:0}),c=Ie(i.state,o.id);return c!==o.id&&s({id:c,serial:o.serial+1}),(0,D.useEffect)(()=>{r||a()},[r,a]),(0,D.useEffect)(()=>{if(o.id!==`open`)return;let e=setTimeout(()=>s(e=>e.id===`open`?{id:null,serial:e.serial+1}:e),1100);return()=>clearTimeout(e)},[o]),(0,Y.jsxs)(`div`,{ref:e,className:`button-timeline`,"data-playback":r?`running`:`paused`,children:[(0,Y.jsxs)(`div`,{className:`button-timeline__intro`,children:[(0,Y.jsx)(`h3`,{className:`button-timeline__title`,children:`Choreography`}),(0,Y.jsx)(`p`,{className:`button-timeline__lead`,children:`Content first, then shape, then the signal. Press Pay and each moment lights up as it plays.`}),(0,Y.jsx)(`div`,{className:`button-timeline__specimen`,children:(0,Y.jsx)(l,{size:`lg`,state:i.state,onConfirm:()=>{i.run(n(1600))},children:`Pay $48.00`})}),(0,Y.jsxs)(`p`,{className:`button-timeline__legend`,"aria-hidden":`true`,children:[(0,Y.jsxs)(`span`,{children:[(0,Y.jsx)(`i`,{"data-ease":`spring`}),` Spring, for shape`]}),(0,Y.jsxs)(`span`,{children:[(0,Y.jsx)(`i`,{"data-ease":`out`}),` Expo-out, for feedback`]})]})]}),(0,Y.jsxs)(`div`,{className:`button-timeline__groups`,children:[Q.map(e=>{let t=o.id===e.id;return(0,Y.jsxs)(`section`,{className:`button-timeline__group`,"data-playing":t||void 0,"aria-label":`${e.title}: ${e.when}`,children:[(0,Y.jsxs)(`header`,{className:`button-timeline__head`,children:[(0,Y.jsx)(`span`,{className:`button-timeline__name`,children:e.title}),(0,Y.jsx)(`span`,{className:`button-timeline__when`,children:e.when})]}),(0,Y.jsx)(`ol`,{className:`button-timeline__steps`,children:e.steps.map(e=>(0,Y.jsxs)(`li`,{className:`button-timeline__step`,children:[(0,Y.jsxs)(`span`,{className:`button-timeline__label`,children:[(0,Y.jsx)(`span`,{className:`button-timeline__step-name`,children:e.name}),(0,Y.jsx)(`span`,{className:`button-timeline__detail`,children:e.detail})]}),(0,Y.jsxs)(`span`,{className:`button-timeline__track`,"aria-hidden":`true`,children:[(0,Y.jsx)(`span`,{className:`button-timeline__bar`,"data-ease":e.spring?`spring`:`out`,"data-loop":e.loop||void 0,style:{"--start":e.start/Z,"--length":e.duration/Z}}),t&&(0,Y.jsx)(`span`,{className:`button-timeline__playhead`},o.serial)]})]},e.name))})]},e.id)}),(0,Y.jsx)(`p`,{className:`button-timeline__axis`,"aria-hidden":`true`,children:[0,200,400,600].map(e=>(0,Y.jsxs)(`span`,{style:{"--at":e/Z},children:[e,`ms`]},e))})]})]})}function Re(){let[t,n]=(0,D.useState)(!1);return(0,D.useEffect)(()=>{if(!t)return;let e=setTimeout(()=>n(!1),1600);return()=>clearTimeout(e)},[t]),(0,Y.jsxs)(`span`,{className:`button-order`,children:[(0,Y.jsx)(`span`,{className:`button-order__id`,children:`ZJ-2048`}),(0,Y.jsx)(s,{label:`Copy order ID`,icon:t?`check`:`copy`,tooltip:!0,onClick:()=>{e(`ZJ-2048`),n(!0)}}),(0,Y.jsx)(`span`,{className:`kit-sr-only`,role:`status`,children:t?`Order ID copied`:``})]})}function ze(){let[e,t]=(0,D.useState)(!0);return(0,Y.jsxs)(`span`,{className:`button-pair`,children:[(0,Y.jsx)(s,{label:`Grid view`,icon:`grid`,pressed:e,tooltip:!0,onClick:()=>t(e=>!e)}),(0,Y.jsx)(`span`,{className:`button-toggle-state`,"aria-hidden":`true`,children:e?`On`:`Off`})]})}var $={style:`currency`,currency:`USD`},Be=e=>Math.round(e*100)/100;function Ve({active:e}){let r=t(),{reset:a}=r,[o,s]=(0,D.useState)(!1),[u,f]=(0,D.useState)(!0);(0,D.useEffect)(()=>{e||a()},[e,a]);let p=Be(47.01+(u?.99:0)-(o?4.2:0)),m=r.busy||r.state===`success`,h=r.state===`waiting`||r.state===`loading`?`Confirming with your bank…`:r.state===`success`?`Paid. A receipt is on its way.`:``;return(0,Y.jsxs)(g,{className:`button-scene`,title:`Order summary`,label:`Checkout`,status:h,children:[(0,Y.jsxs)(`dl`,{className:`button-scene__rows`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`dt`,{children:`Linen overshirt`}),(0,Y.jsx)(`dd`,{children:`$42.00`})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`dt`,{children:`Standard shipping`}),(0,Y.jsx)(`dd`,{children:`$5.01`})]}),(0,Y.jsxs)(`div`,{className:`button-scene__switch`,children:[(0,Y.jsx)(`dt`,{children:(0,Y.jsx)(c,{label:`Shipping protection`,checked:u,onChange:f,disabled:m})}),(0,Y.jsx)(`dd`,{children:(0,Y.jsx)(d,{value:u?.99:0,format:$})})]}),(0,Y.jsxs)(`div`,{className:`button-scene__promo`,"data-empty":!o||void 0,"aria-hidden":!o,children:[(0,Y.jsx)(`dt`,{children:`Promo WELCOME10`}),(0,Y.jsx)(`dd`,{children:`−$4.20`})]}),(0,Y.jsxs)(`div`,{className:`button-scene__total`,children:[(0,Y.jsx)(`dt`,{children:`Total`}),(0,Y.jsx)(`dd`,{children:(0,Y.jsx)(d,{value:p,format:$})})]})]}),(0,Y.jsxs)(`div`,{className:`button-scene__actions`,children:[(0,Y.jsx)(i,{className:`button-scene__promo-toggle`,variant:`ghost`,disabled:m,onClick:()=>s(e=>!e),children:o?`Remove promo`:`Add promo code`}),(0,Y.jsxs)(l,{size:`lg`,state:r.state,announce:!1,onConfirm:()=>{r.run(n(1400))},children:[`Pay `,(0,Y.jsx)(d,{value:p,format:$})]})]})]})}function He({active:e}){let r=t(),{reset:i}=r,[a,o]=(0,D.useState)(`idle`);(0,D.useEffect)(()=>{e||i()},[e,i]);let s=r.state===`waiting`||r.state===`loading`?`Placing the order…`:r.state===`success`?`Approved. Your agent is placing the order.`:a===`holding`?`Keep holding…`:a===`hint`?`Hold to confirm. A tap is not enough here.`:``;return(0,Y.jsxs)(g,{className:`button-scene`,title:`Agent proposal`,status:s,children:[(0,Y.jsxs)(`p`,{className:`button-scene__note`,children:[(0,Y.jsx)(`span`,{className:`button-scene__agent`,"aria-hidden":`true`,children:(0,Y.jsx)(u,{name:`spark`,size:16})}),`Your shopping agent found a laptop under your $1,300 budget.`]}),(0,Y.jsxs)(`dl`,{className:`button-scene__rows`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`dt`,{children:`14-inch laptop, 16 GB`}),(0,Y.jsx)(`dd`,{children:`$1,199.00`})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`dt`,{children:`Two-year protection plan`}),(0,Y.jsx)(`dd`,{children:`$41.00`})]}),(0,Y.jsxs)(`div`,{className:`button-scene__total`,children:[(0,Y.jsx)(`dt`,{children:`Total`}),(0,Y.jsx)(`dd`,{children:`$1,240.00`})]})]}),(0,Y.jsx)(`div`,{className:`button-scene__actions`,children:(0,Y.jsx)(l,{size:`lg`,confirm:`hold`,state:r.state,announce:!1,onHoldChange:o,onConfirm:()=>{r.run(n(1400))},children:`Approve $1,240.00`})})]})}function Ue(){let e=(0,D.useRef)(null),t=b(e,{page:`button`});return(0,Y.jsx)(`div`,{ref:e,"data-playback":t?`running`:`paused`,children:(0,Y.jsxs)(ae,{children:[(0,Y.jsx)(Ve,{active:t}),(0,Y.jsx)(He,{active:t})]})})}function We(){let e=(0,D.useCallback)(()=>{},[]);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(h,{id:`button`}),(0,Y.jsx)(Ne,{}),(0,Y.jsx)(ee,{title:`One clear action per view.`,lead:`A button promises an outcome. It names it, waits honestly and confirms where the eye already is.`,reasons:[{title:`Blue means go`,text:`One blue action per view. Dark and light carry secondary weight; ghost sits beside them without competing.`},{title:`Feedback in place`,text:`Loading, success and error appear inside the button; a pay button becomes the progress itself. A status line says the same for screen readers.`},{title:`Honest waiting`,text:`Nothing moves for the first 160ms. Once shown, the wait stays 320ms so it never flickers. No fake progress.`}]}),(0,Y.jsx)(x,{id:`states`,title:`States`,lead:`Every state a button can be in, on the surface it usually sits on. Inspect any of them for its code.`,children:(0,Y.jsx)(T,{columns:3,children:Pe.map(e=>(0,Y.jsx)(w,{title:e.title,note:e.note,inspect:{code:L(e.demo)},children:(0,Y.jsx)(i,{variant:e.demo.variant??`blue`,state:e.demo.state===`live`?`idle`:e.demo.state,icon:e.demo.icon===`none`?void 0:e.demo.icon,disabled:e.demo.disabled,children:e.demo.label})},e.title))})}),(0,Y.jsx)(x,{id:`pay`,title:`Pay button`,lead:`The whole button becomes the progress. It closes into a circle in its own slot, waves while the bank answers, draws a check and opens again. Nothing around it moves.`,children:(0,Y.jsxs)(`div`,{className:`kit-stack`,children:[(0,Y.jsx)(T,{columns:4,children:Fe.map(t=>(0,Y.jsx)(w,{title:t.title,note:t.note,inspect:{code:R({label:`Pay $48.00`,state:t.state,size:`lg`})},children:(0,Y.jsx)(l,{size:`lg`,state:t.state,announce:!1,onConfirm:e,children:`Pay $48.00`})},t.title))}),(0,Y.jsx)(Le,{})]})}),(0,Y.jsx)(x,{id:`links`,title:`Links and icon buttons`,lead:`Buttons act, links go. A ButtonLink is a real link in a button's clothes; an icon button carries its name even when it shows none.`,children:(0,Y.jsxs)(T,{columns:3,children:[(0,Y.jsx)(w,{title:`ButtonLink`,note:`Goes somewhere. The arrow leans the way it points.`,interactive:!0,inspect:{code:z({label:`See it in checkout`,href:`#button/in-context`,variant:`dark`,icon:`arrow-right`})},children:(0,Y.jsx)(a,{href:`#button/in-context`,variant:`dark`,icon:`arrow-right`,children:`See it in checkout`})}),(0,Y.jsx)(w,{title:`External link`,note:`A new tab: ↗, and screen readers hear it.`,interactive:!0,inspect:{code:z({label:`Open portfolio`,href:`/`,variant:`light`,external:!0})},children:(0,Y.jsx)(a,{href:`/`,variant:`light`,external:!0,children:`Open portfolio`})}),(0,Y.jsx)(w,{title:`Beside a button`,note:`A large icon button is 48px, the height of a medium Button.`,inspect:{code:B({label:`More options`,icon:`menu`,size:`lg`})},children:(0,Y.jsxs)(`span`,{className:`button-pair`,children:[(0,Y.jsx)(i,{variant:`light`,children:`Save for later`}),(0,Y.jsx)(s,{label:`More options`,icon:`menu`,size:`lg`})]})}),(0,Y.jsx)(w,{title:`Copy`,note:`The icon turns to a check; the name stays put.`,interactive:!0,inspect:{code:B({label:`Copy order ID`,icon:`copy`,tooltip:!0})},children:(0,Y.jsx)(Re,{})}),(0,Y.jsx)(w,{title:`Toggle`,note:`aria-pressed carries the state; the label never changes.`,interactive:!0,inspect:{code:B({label:`Grid view`,icon:`grid`,pressed:`state`,tooltip:!0})},children:(0,Y.jsx)(ze,{})}),(0,Y.jsx)(w,{title:`Variants`,note:`Light, ghost, dark and blue; square or round.`,inspect:{code:B({label:`Open receipt`,icon:`arrow-up-right`,variant:`blue`,shape:`circle`})},children:(0,Y.jsxs)(`span`,{className:`button-pair`,children:[(0,Y.jsx)(s,{label:`Copy link`,icon:`copy`}),(0,Y.jsx)(s,{label:`Close`,icon:`close`,variant:`ghost`}),(0,Y.jsx)(s,{label:`Next photo`,icon:`arrow-right`,variant:`dark`,shape:`circle`}),(0,Y.jsx)(s,{label:`Open receipt`,icon:`arrow-up-right`,variant:`blue`,shape:`circle`})]})})]})}),(0,Y.jsx)(x,{id:`in-context`,title:`In context`,lead:`A checkout and an agent's proposal. The total rolls as it changes, the wait is honest, and the larger, agent-made payment asks for a hold.`,children:(0,Y.jsx)(Ue,{})}),(0,Y.jsx)(x,{id:`reference`,title:`Reference`,children:(0,Y.jsxs)(`div`,{className:`kit-folds`,children:[(0,Y.jsx)(v,{title:`Properties & states`,children:(0,Y.jsx)(`div`,{className:`button-ref`,children:m.map(e=>(0,Y.jsxs)(`div`,{className:`button-ref__item`,children:[(0,Y.jsx)(`h3`,{className:`button-ref__name`,children:(0,Y.jsx)(`code`,{children:e.name})}),(0,Y.jsx)(ne,{props:e.props,caption:`${e.name} properties`})]},e.name))})}),(0,Y.jsx)(v,{title:`Usage & keyboard`,children:(0,Y.jsxs)(`div`,{className:`kit-stack`,children:[(0,Y.jsx)(C,{number:1,title:`One blue action per view`,do:{text:`Pair the blue action with a ghost or light one.`,example:(0,Y.jsxs)(`span`,{className:`button-pair`,children:[(0,Y.jsx)(i,{variant:`ghost`,size:`sm`,children:`Back`}),(0,Y.jsx)(i,{size:`sm`,children:`Pay $48.00`})]})},dont:{text:`Stack several blue buttons; nothing reads as next.`,example:(0,Y.jsxs)(`span`,{className:`button-pair`,children:[(0,Y.jsx)(i,{size:`sm`,children:`Save`}),(0,Y.jsx)(i,{size:`sm`,children:`Pay`})]})}}),(0,Y.jsx)(C,{number:2,title:`Name the outcome`,do:{text:`Say what happens, with the amount when money moves.`,example:(0,Y.jsx)(i,{size:`sm`,children:`Pay $48.00`})},dont:{text:`Use a generic verb that hides the commitment.`,example:(0,Y.jsx)(i,{size:`sm`,children:`Submit`})}}),(0,Y.jsx)(C,{number:3,title:`Buttons act, links go`,do:{text:`Use ButtonLink to go to another page: open in new tab and Back keep working.`,example:(0,Y.jsx)(a,{href:`#button/links`,variant:`light`,icon:`arrow-right`,size:`sm`,children:`View order`})},dont:{text:`Navigate from a Button’s onClick. It looks the same and breaks both.`,example:(0,Y.jsx)(i,{variant:`light`,icon:`arrow-right`,size:`sm`,children:`View order`})}}),(0,Y.jsx)(C,{number:4,title:`Hold for weight, tap for speed`,do:{text:`Ask for a hold when the amount is large or an agent made the choice.`,example:(0,Y.jsx)(l,{size:`sm`,confirm:`hold`,announce:!1,children:`Approve $1,240.00`})},dont:{text:`Make everyday actions wait for a hold; it reads as broken.`,example:(0,Y.jsx)(l,{size:`sm`,confirm:`hold`,variant:`dark`,announce:!1,children:`Add to cart`})}}),(0,Y.jsx)(re,{keys:p.keys??[]})]})}),(0,Y.jsx)(v,{title:`Tokens`,children:(0,Y.jsxs)(`div`,{className:`kit-stack`,children:[(0,Y.jsx)(S,{tokens:p.tokens??[]}),(0,Y.jsx)(ie,{tokens:[...p.tokens??[],`--z-ease-spring`,`--z-shadow-glow`,`--z-color-success`,`--z-color-danger`,`--z-motion-press`,`--z-motion-feedback`]})]})})]})})]})}export{We as default};