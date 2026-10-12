import{B as e,Ft as t,I as n,J as r,Ln as i,Mt as a,Pn as o,V as ee,W as te,Y as ne,Z as re,an as s,at as c,gt as l,in as u,l as ie,mt as ae,pn as d,q as oe,tt as se,vt as f,z as ce}from"./route-BgL1hPyq.js";import{t as p}from"./tokens--8wjVqaD.js";import{a as le,i as ue,j as m,r as h}from"./docs-iOkxmiGt.js";import{f as g,i as de,l as fe,m as pe,r as _,u as me}from"./kit-BEe8VZ0Y.js";import{n as v,t as y}from"./tooltip-vQHjbDFg.js";var b=i(),x=m(),he=`your original payment method`,S=Object.freeze({"remove-card":{label:`Remove card`,component:`RemoveCardDialog`,trigger:`Remove card`,title:`Remove this card?`,description:`Visa ending 4242 leaves your wallet. Orders already placed still use it.`,icon:`trash`,task:`removal`,duration:900,keep:{value:`keep`,label:`Keep card`},confirm:{value:`remove`,label:`Remove card`,tone:`danger`},error:`We couldn't remove the card. Try again.`},"cancel-coverage":{label:`Cancel coverage`,component:`CancelCoverageDialog`,trigger:`Cancel coverage`,title:`Cancel insurance coverage?`,description:`Shipping protection for order #4821 ends as soon as you confirm.`,icon:`umbrella`,task:`cancellation`,duration:1100,keep:{value:`keep`,label:`Keep coverage`},confirm:{value:`cancel`,label:`Cancel coverage`,tone:`danger`},error:`We couldn't cancel the coverage. Try again.`,consequences:e=>[`Loss, theft and damage in transit are no longer covered.`,`Your $2.99 premium returns to ${e} in 5–7 days.`,`Coverage can't be added back once the parcel ships.`]},"add-card":{label:`Add card`,component:`AddCardSheet`,trigger:`Add payment method`,title:`Add payment method`,description:`Saved to your wallet for faster checkout. Nothing is charged today.`,task:`saving`,duration:1200,keep:{value:`cancel`,label:`Cancel`},confirm:{value:`save`,label:`Save card`,tone:`primary`},error:`We couldn't save the card. Try again.`}}),ge=Object.freeze({"remove-card":{layout:`center`,dismissible:!0,closeOnBackdrop:!1,outcome:`success`},"cancel-coverage":{layout:`center`,dismissible:!1,closeOnBackdrop:!1,outcome:`success`},"add-card":{layout:`sheet`,dismissible:!0,closeOnBackdrop:!1,outcome:`success`}});({...ge[`remove-card`]});var C={numberHint:`Try 4242 4242 4242 4242.`,cvcHelp:`Where to find the security code`,cvcBack:`Three digits on the back of the card.`,cvcFront:`Four digits on the front of the card.`,nameError:`Enter the name as it appears on the card.`},_e=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Dialog, useAsyncAction } from '@zijie/ui';
`,w=e=>e.includes(`'`)?JSON.stringify(e):`'${e}'`,T=e=>e.includes(`"`)?`{${JSON.stringify(e)}}`:`"${e}"`;function E(e,t){return[`open={open}`,...e.layout===`sheet`?[`layout="sheet"`]:[],...t.icon?[`icon="${t.icon}"`,`tone="danger"`]:[],`title=${T(t.title)}`,`description=${T(t.description)}`,...e.dismissible?[]:[`dismissible={false}`],...e.dismissible&&e.closeOnBackdrop?[`closeOnBackdrop`]:[]]}function D(e,t){return`simulatedTask(${t.duration}${e.outcome===`error`?`, 'error'`:``})`}var O=e=>[`  // Let the check land, then step aside.`,`  useEffect(() => {`,`    if (${e}.state !== 'success') return;`,`    const timer = setTimeout(() => setOpen(false), 600);`,`    return () => clearTimeout(timer);`,`  }, [${e}.state]);`];function k(e,t){let{task:n}=t,r=t.consequences?.(e.refundTo??`Visa ending 4242`),i=[...E(e,t),`actions={[`,`  { value: '${t.keep.value}', label: ${w(t.keep.label)} },`,`  { value: '${t.confirm.value}', label: ${w(t.confirm.label)}, tone: '${t.confirm.tone}', state: ${n}.visibleState },`,`]}`,`error={${n}.state === 'error' ? ${JSON.stringify(t.error)} : undefined}`,`onAction={value => {`,`  if (value === '${t.keep.value}') setOpen(false);`,`  else void ${n}.run(${D(e,t)}); // Your request goes here.`,`}}`,`onClose={() => setOpen(false)}`],a=r?[`      >`,`        <ul>`,...r.map(e=>`          <li>${e}</li>`),`        </ul>`,`      </Dialog>`]:[`      />`];return[`import { useEffect, useState } from 'react';`,`import { Button, Dialog, simulatedTask, useAsyncAction } from '@zijie/ui';`,``,`export function ${t.component}() {`,`  const [open, setOpen] = useState(false);`,`  const ${n} = useAsyncAction();`,``,...O(n),``,`  return (`,`    <>`,`      <Button variant="light" onClick={() => { ${n}.reset(); setOpen(true); }}>`,`        ${t.trigger}`,`      </Button>`,`      <Dialog`,...i.map(e=>`        ${e}`),...a,`    </>`,`  );`,`}`,``].join(`
`)}function ve(e,t){let{task:n}=t,r=[...E(e,t),`actions={[`,`  { value: '${t.keep.value}', label: ${w(t.keep.label)} },`,`  { value: '${t.confirm.value}', label: ${w(t.confirm.label)}, tone: '${t.confirm.tone}', type: 'submit', state: ${n}.visibleState },`,`]}`,`error={${n}.state === 'error' ? ${JSON.stringify(t.error)} : undefined}`,`onSubmit={save}`,`onAction={() => setOpen(false)}`,`onClose={() => setOpen(false)}`,`onClosed={() => fields.forEach(field => field.reset())}`];return[`import { useEffect, useState, type FormEvent } from 'react';`,`import {`,`  Button, CardNumberField, CvcField, Dialog, ExpiryField, Icon, TextField, Tooltip,`,`  simulatedTask, useAsyncAction, useField, validateCardNumber, validateCvc, validateExpiry,`,`  type CardBrand,`,`} from '@zijie/ui';`,``,`const nameRequired = (value: string) => (value.trim() ? null : ${JSON.stringify(C.nameError)});`,``,`export function ${t.component}() {`,`  const [open, setOpen] = useState(false);`,`  const [brand, setBrand] = useState<CardBrand | null>(null);`,`  const number = useField({ validate: validateCardNumber, showValid: true });`,`  const expiry = useField({ validate: value => validateExpiry(value) });`,`  const cvc = useField({ validate: value => validateCvc(value, brand) });`,`  const name = useField({ validate: nameRequired });`,`  const fields = [number, expiry, cvc, name];`,`  const ${n} = useAsyncAction();`,``,...O(n),``,`  // Check every field; focus the first that needs attention.`,`  const save = (event: FormEvent<HTMLFormElement>) => {`,`    event.preventDefault();`,`    const first = fields.map(field => field.check()).findIndex(error => error !== null);`,`    if (first >= 0) { fields[first].focus(); return; }`,`    void ${n}.run(${D(e,t)}); // Send it to your vault here.`,`  };`,``,`  return (`,`    <>`,`      <Button variant="light" icon="plus" onClick={() => { ${n}.reset(); setOpen(true); }}>`,`        ${t.trigger}`,`      </Button>`,`      <Dialog`,...r.map(e=>`        ${e}`),`      >`,`        <CardNumberField label="Card number" hint="${C.numberHint}" onBrandChange={setBrand} {...number.fieldProps} />`,`        <div className="z-dialog__row">`,`          <ExpiryField label="Expiry" {...expiry.fieldProps} />`,`          <CvcField`,`            label="Security code"`,`            brand={brand}`,`            end={(`,`              <Tooltip content={brand?.id === 'amex' ? ${w(C.cvcFront)} : ${w(C.cvcBack)}}>`,`                <button type="button" className="cvc-help" aria-label="${C.cvcHelp}">`,`                  <Icon name="question" size={18} />`,`                </button>`,`              </Tooltip>`,`            )}`,`            {...cvc.fieldProps}`,`          />`,`        </div>`,`        <TextField label="Name on card" autoComplete="cc-name" {...name.fieldProps} />`,`      </Dialog>`,`    </>`,`  );`,`}`,``].join(`
`)}function ye(e){let t=S[e.example];return e.example===`add-card`?ve(e,t):k(e,t)}var be=[{name:`Dialog.tsx`,code:`import { useEffect, useId, useRef, type FormEvent, type MouseEvent, type ReactNode, type RefObject } from 'react';
import { Button, IconButton, type ButtonState } from '../Button';
import { Icon, type IconName } from '../Icon';
import { EASE_IN, EASE_OUT, MOTION, SPRING } from '../../motion/easing';
import { isPhoneWidth, prefersReducedMotion } from '../../motion/env';
import {
  dismissOutcome, initialFocus as resolveInitialFocus, isDialogBusy,
  type DialogActionTone, type DialogDismissReason,
} from './dialogModel';

export interface DialogLabels {
  close: string;
}

export interface DialogAction {
  value: string;
  /** Name the outcome: "Keep card" / "Remove card", never OK / Cancel. */
  label: string;
  tone?: DialogActionTone;
  /** Async feedback (\`useAsyncAction().visibleState\`). While one action loads, nothing dismisses. */
  state?: ButtonState;
  disabled?: boolean;
  /** \`submit\` sends the dialog's form (\`onSubmit\`) instead of calling \`onAction\`. */
  type?: 'button' | 'submit';
}

export interface DialogProps {
  open: boolean;
  /** A dismissal (Escape, the close button, the backdrop when allowed). Not a choice. */
  onClose: (reason: DialogDismissReason) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Safe action first, the consequential one last. */
  actions?: readonly DialogAction[];
  /** A choice was made. Close the dialog here, or keep it open while the action runs. */
  onAction?: (value: string) => void;
  /** Wraps the body and actions in a form; \`type: 'submit'\` actions and Enter send it. */
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  /** An action's value, or an element. Default: the first field of a form, else the safe action. */
  initialFocus?: string | RefObject<HTMLElement | null>;
  /** Escape and the close button cancel. Turn off when a choice is required: the panel nudges instead. */
  dismissible?: boolean;
  /** A click outside cancels too. For dialogs with nothing to lose. */
  closeOnBackdrop?: boolean;
  /** \`sheet\` rises from below and docks to the bottom edge on phones; header and actions stay put. */
  layout?: 'center' | 'sheet';
  /** A 44px glyph tile above the title. */
  icon?: IconName;
  /** \`danger\` tints the glyph tile for destructive decisions. */
  tone?: 'neutral' | 'danger';
  /** What went wrong with the last action, said inline above the actions (role=alert). */
  error?: ReactNode;
  /** After the exit has played and the dialog has closed: reset its content here. */
  onClosed?: () => void;
  className?: string;
  labels?: Partial<DialogLabels>;
}

let modalLocks = 0;
let previousOverflow = '';

const FOCUSABLE = 'input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled])';

type Motion = { panel: Keyframe[][]; timing: KeyframeAnimationOptions[]; backdrop: KeyframeAnimationOptions; leaving?: boolean };

/** Enter: the panel settles from .965 on the spring while it fades in; a sheet rises from its edge. */
function enterMotion(sheet: boolean, phone: boolean, reduced: boolean): Motion {
  const fade: KeyframeAnimationOptions = { duration: MOTION.feedback, easing: EASE_OUT };
  const backdrop = { duration: MOTION.feedback, easing: EASE_OUT };
  if (reduced) return { panel: [[{ opacity: 0 }, { opacity: 1 }]], timing: [fade], backdrop };
  const spring: KeyframeAnimationOptions = { duration: MOTION.layout, easing: SPRING };
  if (sheet) {
    return {
      panel: [[{ translate: phone ? '0 100%' : '0 24px' }, { translate: '0 0' }], [{ opacity: 0 }, { opacity: 1 }]],
      timing: [spring, phone ? { duration: 120, easing: EASE_OUT } : fade],
      backdrop,
    };
  }
  return { panel: [[{ scale: '.965' }, { scale: '1' }], [{ opacity: 0 }, { opacity: 1 }]], timing: [spring, fade], backdrop };
}

/** Exit: short and ease-in, so leaving never competes with what comes next. */
function exitMotion(sheet: boolean, phone: boolean, reduced: boolean): Motion {
  const out: KeyframeAnimationOptions = { duration: MOTION.exit, easing: EASE_IN, fill: 'forwards' };
  const backdrop = out;
  if (reduced) return { panel: [[{ opacity: 1 }, { opacity: 0 }]], timing: [out], backdrop, leaving: true };
  if (sheet && phone) return { panel: [[{ translate: '0 0' }, { translate: '0 100%' }]], timing: [{ ...out, duration: 220 }], backdrop: { ...out, duration: 220 }, leaving: true };
  const moved = sheet ? [{ translate: '0 0', opacity: 1 }, { translate: '0 16px', opacity: 0 }] : [{ scale: '1', opacity: 1 }, { scale: '.98', opacity: 0 }];
  return { panel: [moved], timing: [out], backdrop, leaving: true };
}

function play(dialog: HTMLDialogElement, motion: Motion): Animation[] {
  if (typeof dialog.animate !== 'function') return [];
  const animations = motion.panel.map((frames, index) => dialog.animate(frames, motion.timing[index]));
  try {
    const frames = [{ opacity: 0 }, { opacity: 1 }];
    animations.push(dialog.animate(motion.leaving ? frames.reverse() : frames, { ...motion.backdrop, pseudoElement: '::backdrop' }));
  } catch { /* no pseudo-element animation: the backdrop simply appears */ }
  return animations;
}

/**
 * A native modal: the platform supplies the top layer, an inert page and a focus trap. On top of it:
 * focus starts on the safe action (or a form's first field, never the close icon); the panel settles in
 * from .965 on the spring and leaves in 180ms ease-in before close(); a dialog that requires a choice
 * nudges instead of closing; a backdrop click counts only when the press also began outside; nothing
 * dismisses while an action loads; focus returns to the opener once.
 */
export function Dialog({
  open, onClose, title, description, children, actions, onAction, onSubmit, initialFocus, dismissible = true,
  closeOnBackdrop = false, layout = 'center', icon, tone = 'neutral', error, onClosed, className = '', labels,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const motion = useRef<{ phase: 'enter' | 'exit'; animations: Animation[] } | null>(null);
  const pressedOutside = useRef(false);
  const id = useId();
  const text = { close: 'Close dialog', ...labels };
  const busy = isDialogBusy(actions);
  const sheet = layout === 'sheet';

  // Handlers read the latest props without re-running the open/close effect.
  const latest = useRef({ open, onClose, onClosed, initialFocus, actions, form: !!onSubmit, dismissible, closeOnBackdrop, busy, sheet });
  latest.current = { open, onClose, onClosed, initialFocus, actions, form: !!onSubmit, dismissible, closeOnBackdrop, busy, sheet };

  const focusInitial = (dialog: HTMLDialogElement) => {
    const { initialFocus: target, actions: list, form } = latest.current;
    let element: HTMLElement | null = null;
    if (target && typeof target === 'object') element = target.current;
    else {
      const plan = resolveInitialFocus({ actions: list, form, target: typeof target === 'string' ? target : undefined });
      if (plan.kind === 'action') element = [...dialog.querySelectorAll<HTMLElement>('[data-dialog-action]')].find(node => node.dataset.dialogAction === plan.value) ?? null;
      else if (plan.kind === 'field') element = dialog.querySelector<HTMLElement>(\`.z-dialog__body :is(\${FOCUSABLE})\`);
    }
    (element ?? dialog).focus({ preventScroll: true });
  };

  const stop = () => {
    for (const animation of motion.current?.animations ?? []) animation.cancel();
    motion.current = null;
  };

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const reduced = prefersReducedMotion();
    const phone = isPhoneWidth();
    if (open) {
      // Reopened mid-exit: play the exit back instead of starting over.
      if (motion.current?.phase === 'exit') {
        const reversing = motion.current.animations;
        motion.current = { phase: 'enter', animations: reversing };
        for (const animation of reversing) animation.reverse();
        Promise.all(reversing.map(animation => animation.finished)).then(() => {
          if (motion.current?.animations === reversing) stop();
        }, () => {});
        return;
      }
      if (dialog.open) return;
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
      focusInitial(dialog);
      const animations = play(dialog, enterMotion(latest.current.sheet, phone, reduced));
      motion.current = { phase: 'enter', animations };
      return;
    }
    if (!dialog.open || motion.current?.phase === 'exit') return;
    stop();
    const finish = () => {
      motion.current = null;
      if (!latest.current.open && dialog.open) dialog.close();
    };
    const animations = play(dialog, exitMotion(latest.current.sheet, phone, reduced));
    if (!animations.length) { finish(); return; }
    motion.current = { phase: 'exit', animations };
    animations[0].finished.then(() => {
      if (motion.current?.animations !== animations || motion.current.phase !== 'exit') return;
      finish();
      for (const animation of animations) animation.cancel();
    }, () => {});
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (modalLocks++ === 0) {
      previousOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      if (--modalLocks === 0) document.documentElement.style.overflow = previousOverflow;
    };
  }, [open]);

  // Unmounting while open (e.g. a route change) closes it and returns focus once.
  useEffect(() => () => {
    for (const animation of motion.current?.animations ?? []) animation.cancel();
    motion.current = null;
    if (!ref.current?.open) return;
    ref.current.close();
    const target = returnFocus.current;
    returnFocus.current = null;
    if (target?.isConnected) target.focus();
  }, []);

  /** One pulse that says "choose here". Under reduced motion a ring flashes instead (see CSS). */
  const nudge = () => {
    const dialog = ref.current;
    if (!dialog) return;
    dialog.removeAttribute('data-nudge');
    void dialog.offsetWidth;
    dialog.setAttribute('data-nudge', '');
  };

  const request = (reason: DialogDismissReason) => {
    const { dismissible: canDismiss, closeOnBackdrop: lightDismiss, busy: inFlight } = latest.current;
    const outcome = dismissOutcome(reason, { dismissible: canDismiss, closeOnBackdrop: lightDismiss, busy: inFlight });
    if (outcome === 'close') latest.current.onClose(reason);
    else if (outcome === 'nudge') nudge();
  };

  const outside = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target !== event.currentTarget) return false;
    const box = event.currentTarget.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  };

  const hasError = error !== undefined && error !== null && error !== false && error !== '';

  const content = (
    <>
      <div className="z-dialog__head" data-icon={icon ? '' : undefined}>
        {icon && <span className="z-dialog__icon" aria-hidden="true"><Icon name={icon} size={22} /></span>}
        <div className="z-dialog__titles">
          <h2 id={\`\${id}-title\`} className="z-dialog__title">{title}</h2>
          {description && <p id={\`\${id}-description\`} className="z-dialog__description">{description}</p>}
        </div>
        {dismissible && (
          <IconButton className="z-dialog__close" label={text.close} icon="close" variant="ghost" size="sm" disabled={busy} onClick={() => request('close-button')} />
        )}
      </div>
      {children !== undefined && children !== null && <div className="z-dialog__body">{children}</div>}
      {!!actions?.length && (
        <div className="z-dialog__foot">
          <p className="z-dialog__error" role="alert">{hasError ? error : null}</p>
          <div className="z-dialog__actions">
            {actions.map(action => {
              const actionTone = action.tone ?? 'neutral';
              return (
                <Button
                  key={action.value}
                  type={action.type ?? 'button'}
                  variant={actionTone === 'primary' ? 'blue' : actionTone === 'danger' ? 'dark' : 'light'}
                  className={\`z-dialog__action z-dialog__action--\${actionTone}\`}
                  state={action.state}
                  disabled={action.disabled || (busy && action.state !== 'loading')}
                  data-dialog-action={action.value}
                  onClick={() => { if (action.type !== 'submit') onAction?.(action.value); }}
                >
                  {action.label}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );

  return (
    <dialog
      ref={ref}
      className={\`z-dialog z-dialog--\${layout}\${className ? \` \${className}\` : ''}\`}
      data-tone={tone}
      aria-labelledby={\`\${id}-title\`}
      aria-describedby={description ? \`\${id}-description\` : undefined}
      aria-busy={busy || undefined}
      tabIndex={-1}
      onKeyDown={event => {
        if (event.key !== 'Escape' || event.nativeEvent.isComposing) return;
        // Handled here so a dialog that requires a choice can refuse; the native cancel never runs.
        event.preventDefault();
        request('escape');
      }}
      onCancel={event => { event.preventDefault(); request('escape'); }}
      onClose={() => {
        const target = returnFocus.current;
        returnFocus.current = null;
        if (target?.isConnected) target.focus();
        // The browser closed it on its own (a repeated close request): follow it.
        if (latest.current.open) latest.current.onClose('escape');
        latest.current.onClosed?.();
      }}
      onPointerDown={event => { pressedOutside.current = outside(event); }}
      onClick={event => {
        const began = pressedOutside.current;
        pressedOutside.current = false;
        if (began && outside(event)) request('backdrop');
      }}
      onAnimationEnd={event => { if (event.target === event.currentTarget) event.currentTarget.removeAttribute('data-nudge'); }}
    >
      {onSubmit
        ? <form className="z-dialog__panel" noValidate onSubmit={onSubmit}>{content}</form>
        : <div className="z-dialog__panel">{content}</div>}
    </dialog>
  );
}
`},{name:`dialogModel.ts`,code:`/* Dialog rules: who may close it, and where focus starts. Pure: no DOM, no React. Tested in Node. */

/** neutral: the safe choice (focused first). primary: blue. danger: red, for what cannot be undone. */
export type DialogActionTone = 'neutral' | 'primary' | 'danger';

/** How a dialog was dismissed. Dismissal is never a choice: it reaches \`onClose\`, never \`onAction\`. */
export type DialogDismissReason = 'escape' | 'close-button' | 'backdrop';

export interface DialogRules {
  /** Escape and the close button cancel. Off when a choice is required. */
  dismissible: boolean;
  /** A click on the backdrop cancels too. Off by default: a stray click never decides. */
  closeOnBackdrop: boolean;
  /** An action is in flight: nothing dismisses until it lands. */
  busy: boolean;
}

/**
 * What a dismissal attempt does: \`close\` (call onClose), \`nudge\` (the panel pulses once: "choose
 * here"), or \`ignore\` (there is nothing to press: a hidden close button).
 */
export function dismissOutcome(reason: DialogDismissReason, { dismissible, closeOnBackdrop, busy }: DialogRules): 'close' | 'nudge' | 'ignore' {
  if (busy) return reason === 'close-button' ? 'ignore' : 'nudge';
  if (!dismissible) return reason === 'close-button' ? 'ignore' : 'nudge';
  if (reason === 'backdrop' && !closeOnBackdrop) return 'nudge';
  return 'close';
}

export interface DialogActionLike {
  value: string;
  tone?: DialogActionTone;
  state?: string;
  disabled?: boolean;
}

/** Any action still loading keeps the dialog open. */
export const isDialogBusy = (actions: readonly DialogActionLike[] = []) => actions.some(action => action.state === 'loading');

/** The safe action: the first neutral, enabled one. Never the close icon, never the destructive one. */
export function safeAction(actions: readonly DialogActionLike[] = []): string | null {
  return actions.find(action => (action.tone ?? 'neutral') === 'neutral' && !action.disabled)?.value ?? null;
}

export type InitialFocus =
  | { kind: 'action'; value: string }
  | { kind: 'field' }
  | { kind: 'panel' };

/**
 * Where focus lands on open, unless the caller names a target: a form starts at its first field, a
 * decision at its safe action, anything else at the panel itself (so Tab starts at the top).
 */
export function initialFocus({ actions = [], form = false, target }: { actions?: readonly DialogActionLike[]; form?: boolean; target?: string }): InitialFocus {
  if (target) return { kind: 'action', value: target };
  if (form) return { kind: 'field' };
  const safe = safeAction(actions);
  return safe ? { kind: 'action', value: safe } : { kind: 'panel' };
}
`},{name:`dialog.css`,code:v},{name:`Tooltip.tsx`,code:`import {
  Children, cloneElement, isValidElement, useCallback, useEffect, useId, useLayoutEffect, useRef, useState,
  type CSSProperties, type FocusEvent, type KeyboardEvent, type PointerEvent, type ReactElement, type ReactNode,
} from 'react';
import { canUseDOM } from '../../motion/env';
import { TOOLTIP_DELAY, TOOLTIP_GRACE, placeTooltip, tooltipDelay, type TooltipPlacement, type TooltipPosition } from './tooltipModel';

export interface TooltipProps {
  /** A few words. Never the only place something essential is said: touch has no hover. */
  content: ReactNode;
  /** One focusable element (a button, a link). It is described by the tooltip. */
  children: ReactElement<{ 'aria-describedby'?: string }>;
  /** Preferred side; it flips when only the other side has room. */
  placement?: TooltipPlacement;
  /** Hover intent in ms. Keyboard focus never waits. */
  delay?: number;
  /** Pin it open (true) or shut (false), for documentation and design review. */
  open?: boolean;
  disabled?: boolean;
  className?: string;
}

/** When the last tooltip anywhere closed: the next one shows at once while the reader is moving along. */
let lastClosed = Number.NEGATIVE_INFINITY;
const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

/**
 * A short description above (or below) its trigger, in the site's ink style: the same bubble as
 * IconButton's \`tooltip\`, for anything that is not an icon button. Hover waits 320ms (no wait when
 * another tooltip just closed), keyboard focus shows it at once, a tap toggles it on touch, Escape or
 * a press outside hides it, and the pointer may move onto it. It describes (\`aria-describedby\`), it
 * never names.
 */
export function Tooltip({ content, children, placement = 'top', delay = TOOLTIP_DELAY, open, disabled = false, className = '' }: TooltipProps) {
  const id = useId();
  const [shown, setShown] = useState(false);
  const [place, setPlace] = useState<TooltipPosition>({ placement, left: 0, top: 0, shift: 0 });
  const root = useRef<HTMLSpanElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const timer = useRef(0);
  const hovering = useRef(false);
  const visible = !disabled && (open ?? shown);
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  const clear = () => window.clearTimeout(timer.current);
  const hide = useCallback(() => {
    window.clearTimeout(timer.current);
    if (visibleRef.current) lastClosed = now();
    setShown(false);
  }, []);
  const show = (wait: number) => {
    clear();
    if (disabled) return;
    if (wait <= 0) setShown(true);
    else timer.current = window.setTimeout(() => setShown(true), wait);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => { if (disabled) hide(); }, [disabled, hide]);

  // Escape anywhere hides it, even when focus is elsewhere (WCAG 1.4.13); so does a press outside.
  // Listening only while shown.
  useEffect(() => {
    if (!visible || open !== undefined) return;
    const onKey = (event: globalThis.KeyboardEvent) => { if (event.key === 'Escape') hide(); };
    const onPress = (event: globalThis.PointerEvent) => {
      if (!(event.target instanceof Node && root.current?.contains(event.target))) hide();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPress);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPress);
    };
  }, [visible, open, hide]);

  // Placed in viewport coordinates before it paints (a fixed layer, so a scrolling dialog body or a
  // clipped card never cuts it off); it follows its trigger while anything scrolls or resizes.
  useLayoutEffect(() => {
    if (!visible || !canUseDOM()) return;
    const measure = () => {
      const anchor = root.current?.getBoundingClientRect();
      const tip = bubble.current;
      if (!anchor || !tip) return;
      const next = placeTooltip({
        anchor,
        bubble: { width: tip.offsetWidth, height: tip.offsetHeight },
        viewport: { width: document.documentElement.clientWidth, height: window.innerHeight },
        placement,
      });
      setPlace(previous => (previous.placement === next.placement && previous.left === next.left && previous.top === next.top ? previous : next));
    };
    measure();
    let frame = 0;
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    window.addEventListener('scroll', schedule, true);
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule, true);
      window.removeEventListener('resize', schedule);
    };
  }, [visible, placement, content]);

  const onPointerEnter = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === 'touch') return;
    hovering.current = true;
    show(visibleRef.current ? 0 : tooltipDelay(now(), lastClosed, delay));
  };
  const onPointerLeave = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === 'touch') return;
    hovering.current = false;
    clear();
    if (!visibleRef.current) return;
    timer.current = window.setTimeout(hide, TOOLTIP_GRACE);
  };
  // Touch has no hover: a tap on the trigger toggles the tooltip instead (a toggletip).
  const lastPointer = useRef('');
  const onPointerDown = (event: PointerEvent<HTMLSpanElement>) => { lastPointer.current = event.pointerType; };
  const onClick = () => {
    if (lastPointer.current !== 'touch' || open !== undefined) return;
    lastPointer.current = '';
    if (visibleRef.current) hide(); else show(0);
  };
  const onFocus = (event: FocusEvent<HTMLSpanElement>) => {
    let keyboard = true;
    try { keyboard = (event.target as Element).matches(':focus-visible'); } catch { /* old engines: treat as keyboard */ }
    if (keyboard) show(0);
  };
  const onBlur = (event: FocusEvent<HTMLSpanElement>) => {
    if (event.relatedTarget instanceof Node && event.currentTarget.contains(event.relatedTarget)) return;
    if (!hovering.current) hide();
  };
  const onKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key !== 'Escape' || !visibleRef.current || open !== undefined) return;
    // Consumed: the Escape that hides a tooltip must not also close the dialog around it.
    event.preventDefault();
    event.stopPropagation();
    hide();
  };

  const child = Children.only(children);
  const trigger = isValidElement(child)
    ? cloneElement(child, { 'aria-describedby': [child.props['aria-describedby'], id].filter(Boolean).join(' ') })
    : child;

  return (
    <span
      ref={root}
      className={\`z-tooltip\${className ? \` \${className}\` : ''}\`}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      {trigger}
      <span
        ref={bubble}
        id={id}
        role="tooltip"
        className="z-tooltip__bubble"
        data-placement={place.placement}
        data-open={visible || undefined}
        style={{ '--z-tooltip-x': \`\${place.left}px\`, '--z-tooltip-y': \`\${place.top}px\` } as CSSProperties}
      >
        {content}
      </span>
    </span>
  );
}
`},{name:`tooltip.css`,code:y},{name:`tokens.css`,code:p}],A=d(),j=[{id:`visa-4242`,brand:`Visa`,last4:`4242`,expiry:`08/29`,isDefault:!0},{id:`mastercard-5454`,brand:`Mastercard`,last4:`5454`,expiry:`11/27`}],xe=[{value:`remove-card`,label:S[`remove-card`].label},{value:`cancel-coverage`,label:S[`cancel-coverage`].label},{value:`add-card`,label:S[`add-card`].label}],Se=[{value:`center`,label:`Center`},{value:`sheet`,label:`Sheet`}],Ce=[{value:`success`,label:`Succeeds`},{value:`error`,label:`Fails`}],M=e=>`${e.brand} ending ${e.last4}`,we=`visa-4242`,Te={escape:`Dismissed with Escape. Nothing changed.`,"close-button":`Closed. Nothing changed.`,backdrop:`Closed from outside. Nothing changed.`},Ee=e=>e.trim()?null:C.nameError;function De({brand:e}){return(0,A.jsxs)(`svg`,{className:`dialog-wallet__mark`,"data-brand":e.toLowerCase().replace(/\s+/g,`-`),viewBox:`0 0 40 28`,width:`40`,height:`28`,"aria-hidden":`true`,children:[(0,A.jsx)(`rect`,{width:`40`,height:`28`,rx:`6`}),(0,A.jsx)(`rect`,{className:`dialog-wallet__mark-stripe`,y:`7`,width:`40`,height:`4`}),(0,A.jsx)(`rect`,{className:`dialog-wallet__mark-chip`,x:`6`,y:`16`,width:`9`,height:`6`,rx:`1.5`})]})}function N(e){let t=document;typeof t.startViewTransition!=`function`||o()?e():t.startViewTransition(()=>(0,x.flushSync)(e))}function P(){let i=t(),[o,d]=(0,b.useState)(`remove-card`),[p,m]=(0,b.useState)(()=>({...ge})),v=p[o],y=e=>t=>m(n=>({...n,[o]:{...n[o],[e]:t}})),[x,w]=(0,b.useState)(null),[T,E]=(0,b.useState)(j),[D,O]=(0,b.useState)(`active`),[k,ve]=(0,b.useState)(null),[P,F]=(0,b.useState)(``),Oe=T!==j||D!==`active`,I=T.find(e=>e.id===we),L=I?M(I):he,ke={example:o,...v,refundTo:L},Ae=u(),R=u(),z=u(),B={"remove-card":Ae,"cancel-coverage":R,"add-card":z},[V,je]=(0,b.useState)(null),H=n({validate:oe,showValid:!0}),U=n({validate:e=>ne(e)}),Me=n({validate:e=>r(e,V)}),Ne=n({validate:Ee}),W=[H,U,Me,Ne],Pe=(0,b.useRef)(null),Fe=(0,b.useRef)(null),G=(0,b.useRef)(null),K=(0,b.useRef)(null),q=(0,b.useRef)(null),J=(e,t)=>{B[e].reset(),e===`remove-card`&&ve(t??T[0]??null),K.current=null,F(``),d(e),w(e)},Y=e=>{K.current={say:e},w(null)},X=x&&B[x].state===`success`?x:null;(0,b.useEffect)(()=>{if(!X)return;let e=window.setTimeout(()=>{if(X===`remove-card`&&k){let e=k.id;K.current={say:`${M(k)} removed.`,commit:()=>{let t=T.findIndex(t=>t.id===e),n=T[t+1]??T[t-1];G.current=n?`[data-remove="${n.id}"]`:`.dialog-wallet__add`,N(()=>E(t=>t.filter(t=>t.id!==e)))}}}else if(X===`cancel-coverage`)K.current={say:`Coverage canceled. $2.99 returns to ${L}.`,commit:()=>{G.current=`coverage`,N(()=>O(`cancelled`))}};else if(X===`add-card`&&q.current){let e=q.current;K.current={say:`${M(e)} added.`,commit:()=>N(()=>E(t=>[...t,e]))}}w(null)},600);return()=>window.clearTimeout(e)},[X,k,T,L]);let Ie=()=>{let e=K.current;K.current=null,e&&(e.commit?.(),F(e.say))};(0,b.useLayoutEffect)(()=>{let e=G.current;e&&(G.current=null,(e===`coverage`?Fe.current:Pe.current?.querySelector(e))?.focus({preventScroll:!0}))});let Le=e=>{e.preventDefault();let t=W.map(e=>e.check()).findIndex(e=>e!==null);if(t>=0){W[t].focus();return}let n=te(H.value);q.current={id:`card-${Date.now()}`,brand:n?.name??`Card`,last4:re(H.value).slice(-4),expiry:U.value},z.run(s(S[`add-card`].duration,p[`add-card`].outcome))},Re=()=>{N(()=>{E(j),O(`active`)}),F(`Wallet restored.`)},Z=e=>{let t=p[e];return{layout:t.layout,dismissible:t.dismissible,closeOnBackdrop:t.dismissible&&t.closeOnBackdrop}},ze=e=>{let t=S[e],n=B[e];return{...Z(e),open:x===e,icon:t.icon,tone:`danger`,actions:[{value:t.keep.value,label:t.keep.label},{value:t.confirm.value,label:t.confirm.label,tone:t.confirm.tone,state:n.visibleState}],error:n.state===`error`?t.error:void 0,onClose:e=>Y(Te[e]),onClosed:Ie}},Q=S[`remove-card`],$=o!==`remove-card`||T.length>0;return(0,A.jsx)(me,{page:`dialog`,name:`Dialog`,code:{setup:_e,usage:ye(ke),usageFile:`${S[o].component}.tsx`,sources:be},controls:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(g,{label:i({en:`Example`}),value:o,options:xe,onChange:d}),(0,A.jsxs)(`div`,{className:`dialog-layout`,children:[(0,A.jsx)(g,{label:i({en:`Layout`}),value:v.layout,options:Se,onChange:y(`layout`)}),(0,A.jsx)(`p`,{className:`dialog-try__note`,children:(0,A.jsx)(a,{en:v.layout===`sheet`?`Keeps its header and actions in view while the body scrolls. Docks to the bottom edge on phones.`:`One panel, centered. It scrolls as a whole when it is taller than the screen.`})})]}),(0,A.jsx)(pe,{label:i({en:`Escape and close button`}),checked:v.dismissible,onChange:y(`dismissible`)}),(0,A.jsx)(pe,{label:i({en:`Click outside closes`}),checked:v.dismissible&&v.closeOnBackdrop,disabled:!v.dismissible,onChange:y(`closeOnBackdrop`)}),(0,A.jsx)(g,{label:i({en:`Request`}),value:v.outcome,options:Ce,onChange:y(`outcome`)}),(0,A.jsxs)(`div`,{className:`dialog-try`,children:[(0,A.jsx)(l,{variant:`dark`,disabled:!$,onClick:()=>J(o),children:i({en:`Try it`})}),(0,A.jsx)(`p`,{className:`dialog-try__note`,children:(0,A.jsx)(a,{en:$?`Opens over this panel. Closing brings you back here.`:`No cards left to remove. Reset the wallet first.`})})]})]}),details:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(fe,{tokens:h.tokens??[]}),(0,A.jsx)(de,{props:h.props??[],caption:i({en:`Dialog properties`})}),(0,A.jsx)(_,{keys:h.keys??[],caption:i({en:`Dialog keyboard`})}),(0,A.jsxs)(`section`,{className:`dialog-details`,"aria-labelledby":`dialog-details-tooltip`,children:[(0,A.jsx)(`h3`,{id:`dialog-details-tooltip`,className:`dialog-details__title`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Tooltip`})})}),(0,A.jsxs)(`p`,{className:`dialog-details__lead`,children:[(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`A few words about a trigger, in the same ink bubble as IconButton's `})}),(0,A.jsx)(`code`,{className:`kit-code-inline`,children:`tooltip`}),(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:` prop. Use that prop for an icon button's name; use Tooltip for everything else.`})})]}),(0,A.jsx)(de,{props:le,caption:i({en:`Tooltip properties`})}),(0,A.jsx)(_,{keys:ue,caption:i({en:`Tooltip keyboard`})})]})]}),children:()=>(0,A.jsxs)(`div`,{className:`dialog-scene`,children:[(0,A.jsxs)(`section`,{ref:Pe,className:`dialog-wallet`,"aria-labelledby":`dialog-wallet-title`,children:[(0,A.jsxs)(`header`,{className:`dialog-wallet__head`,children:[(0,A.jsxs)(`div`,{className:`dialog-wallet__heading`,children:[(0,A.jsx)(`h2`,{id:`dialog-wallet-title`,className:`dialog-wallet__title`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Wallet`})})}),(0,A.jsx)(`p`,{className:`dialog-wallet__lead`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Cards and order protection.`})})})]}),(0,A.jsxs)(`div`,{className:`dialog-wallet__meta`,children:[(0,A.jsx)(a,{en:Oe&&(0,A.jsx)(l,{variant:`ghost`,size:`sm`,onClick:Re,children:i({en:`Reset`})})}),(0,A.jsx)(`span`,{className:`dialog-wallet__badge`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Simulated`})})})]})]}),(0,A.jsxs)(`div`,{className:`dialog-wallet__group`,children:[(0,A.jsx)(`h3`,{className:`dialog-wallet__eyebrow dialog-wallet__eyebrow--cards`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Payment methods`})})}),(0,A.jsxs)(`div`,{className:`dialog-wallet__inset dialog-wallet__cards`,children:[(0,A.jsx)(a,{en:T.length>0&&(0,A.jsx)(`ul`,{className:`dialog-wallet__list`,children:(0,A.jsx)(a,{en:T.map(e=>(0,A.jsxs)(`li`,{className:`dialog-wallet__row dialog-wallet__card`,style:{viewTransitionName:`dialog-card-${e.id}`},children:[(0,A.jsx)(De,{brand:e.brand}),(0,A.jsxs)(`span`,{className:`dialog-wallet__text`,children:[(0,A.jsx)(`span`,{className:`dialog-wallet__name`,children:(0,A.jsx)(a,{en:M(e)})}),(0,A.jsxs)(`span`,{className:`dialog-wallet__detail`,children:[(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Expires `})}),(0,A.jsx)(a,{en:e.expiry}),(0,A.jsx)(a,{en:e.isDefault&&(0,A.jsx)(`span`,{className:`dialog-wallet__default`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Default`})})})})]})]}),(0,A.jsx)(ae,{icon:`trash`,label:i({en:`Remove ${M(e)}`}),variant:`ghost`,size:`sm`,tooltip:!0,"aria-haspopup":`dialog`,"data-remove":e.id,onClick:()=>J(`remove-card`,e)})]},e.id))})})}),(0,A.jsx)(l,{variant:`light`,size:`sm`,icon:`plus`,className:`dialog-wallet__add`,"aria-haspopup":`dialog`,onClick:()=>J(`add-card`),children:i({en:`Add payment method`})})]})]}),(0,A.jsxs)(`div`,{className:`dialog-wallet__group`,children:[(0,A.jsx)(`h3`,{className:`dialog-wallet__eyebrow dialog-wallet__eyebrow--protection`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Protection`})})}),(0,A.jsxs)(`div`,{className:`dialog-wallet__inset dialog-wallet__coverage`,"data-state":D,children:[(0,A.jsxs)(`div`,{className:`dialog-wallet__row dialog-wallet__row--coverage`,children:[(0,A.jsx)(`span`,{className:`dialog-wallet__tile`,"aria-hidden":`true`,children:(0,A.jsx)(f,{name:`umbrella`,size:20})}),(0,A.jsxs)(`span`,{className:`dialog-wallet__text`,children:[(0,A.jsxs)(`span`,{className:`dialog-wallet__name-row`,children:[(0,A.jsx)(`span`,{ref:Fe,tabIndex:-1,className:`dialog-wallet__name`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Shipping protection`})})}),(0,A.jsx)(ie,{content:`Covers loss, theft and damage in transit, up to $200.`,children:(0,A.jsx)(`button`,{type:`button`,className:`dialog-help`,"aria-label":i({en:`What's covered`}),children:(0,A.jsx)(f,{name:`info`,size:16})})})]}),(0,A.jsx)(`span`,{className:`dialog-wallet__detail`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Order #4821 · $2.99`})})})]}),(0,A.jsx)(`span`,{className:`dialog-wallet__pill`,children:(0,A.jsx)(a,{en:D===`active`?`Active`:`Canceled`})})]}),(0,A.jsx)(a,{en:D===`active`?(0,A.jsx)(l,{variant:`light`,size:`sm`,className:`dialog-wallet__add dialog-wallet__coverage-action`,"aria-haspopup":`dialog`,onClick:()=>J(`cancel-coverage`),children:i({en:`Cancel coverage`})}):(0,A.jsx)(`p`,{className:`dialog-wallet__note dialog-wallet__coverage-action`,children:(0,A.jsx)(a,{en:(0,A.jsx)(A.Fragment,{children:`Ended today. The $2.99 refund is on its way.`})})})})]})]})]}),(0,A.jsx)(`p`,{className:`dialog-status`,role:`status`,children:(0,A.jsx)(a,{en:P})}),(0,A.jsx)(c,{...ze(`remove-card`),title:i({en:Q.title}),description:i({en:k?`${M(k)} leaves your wallet. Orders already placed still use it.`:Q.description}),onAction:e=>{e===Q.keep.value?Y(`Kept ${k?M(k):`the card`}. Nothing changed.`):Ae.run(s(Q.duration,p[`remove-card`].outcome))}}),(0,A.jsx)(c,{...ze(`cancel-coverage`),title:i({en:S[`cancel-coverage`].title}),description:i({en:S[`cancel-coverage`].description}),onAction:e=>{e===S[`cancel-coverage`].keep.value?Y(`Kept the coverage. Nothing changed.`):R.run(s(S[`cancel-coverage`].duration,p[`cancel-coverage`].outcome))},children:(0,A.jsx)(`ul`,{children:(0,A.jsx)(a,{en:S[`cancel-coverage`].consequences?.(L).map(e=>(0,A.jsx)(`li`,{children:(0,A.jsx)(a,{en:e})},e))})})}),(0,A.jsxs)(c,{...Z(`add-card`),open:x===`add-card`,title:i({en:S[`add-card`].title}),description:i({en:S[`add-card`].description}),actions:[{value:`cancel`,label:`Cancel`},{value:`save`,label:`Save card`,tone:`primary`,type:`submit`,state:z.visibleState}],error:z.state===`error`?S[`add-card`].error:void 0,onSubmit:Le,onAction:()=>Y(`Canceled. Nothing saved.`),onClose:e=>Y(e===`escape`?`Dismissed with Escape. Nothing saved.`:`Closed. Nothing saved.`),onClosed:()=>{Ie(),W.forEach(e=>e.reset()),je(null)},children:[(0,A.jsx)(ce,{label:i({en:`Card number`}),hint:i({en:C.numberHint}),onBrandChange:je,...H.fieldProps}),(0,A.jsxs)(`div`,{className:`z-dialog__row`,children:[(0,A.jsx)(ee,{label:i({en:`Expiry`}),...U.fieldProps}),(0,A.jsx)(e,{label:i({en:`Security code`}),brand:V,end:(0,A.jsx)(ie,{content:V?.id===`amex`?C.cvcFront:C.cvcBack,children:(0,A.jsx)(`button`,{type:`button`,className:`dialog-help`,"aria-label":i({en:C.cvcHelp}),children:(0,A.jsx)(f,{name:`question`,size:18})})}),...Me.fieldProps})]}),(0,A.jsx)(se,{label:i({en:`Name on card`}),autoComplete:`cc-name`,...Ne.fieldProps})]})]})})}export{P as default};