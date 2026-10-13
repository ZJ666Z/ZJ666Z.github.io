import{Ft as e,Mt as t,Rn as n,an as r,g as i,mn as a,on as o,wt as s}from"./route-D8V-RcHq.js";import{t as c}from"./tokens--8wjVqaD.js";import{f as l}from"./docs-Dv2yWw9W.js";import{A as u,O as d,_ as f,a as p,c as m,f as h,g,h as _,i as v,k as y,l as b,m as x,n as S,o as C,r as w,s as T,t as ee,v as E}from"./kit-CGiBTmcs.js";import{t as D}from"./segmented-C5Fr5viM.js";var O=n(),k={raised:{component:`PaymentFlowPicker`,label:`Payment flow`,type:`Flow`,state:`flow`,list:`flows`,initial:`checkout`,options:[{value:`checkout`,label:`Checkout`,done:`Checkout. One flow, one clear status.`},{value:`refund`,label:`Refund`,done:`Refund. Money returns to the original method.`},{value:`withdraw`,label:`Withdraw`,done:`Withdraw. The seller balance lands in the bank.`}]},underline:{component:`BillingPeriod`,label:`Billing`,type:`Period`,state:`period`,list:`periods`,initial:`annual`,options:[{value:`monthly`,label:`Monthly`,done:`Monthly. $12.00 a month, cancel anytime.`},{value:`annual`,label:`Annual`,badge:`−20%`,done:`Annual. $115.20 a year, $28.80 saved.`}]},icon:{component:`CatalogView`,label:`Catalog view`,type:`View`,state:`view`,list:`views`,initial:`grid`,options:[{value:`grid`,label:`Grid`,icon:`grid`,done:`Grid. Photos first, for browsing.`},{value:`list`,label:`List`,icon:`menu`,done:`List. Prices and ratings side by side.`},{value:`picks`,label:`Agent picks`,icon:`spark`,done:`Agent picks. Three matches, each with a reason.`}]},fill:{component:`DeliverySpeed`,label:`Delivery`,type:`Speed`,state:`speed`,list:`speeds`,initial:`express`,options:[{value:`standard`,label:`Standard`,badge:`Free`,done:`Standard. Free, arrives Oct 14–16.`},{value:`express`,label:`Express`,badge:`+$9.00`,done:`Express. $9.00, arrives tomorrow.`}]}},te={variant:`raised`,size:`md`,state:`rest`,drag:!0,value:`checkout`},ne=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Segmented, type SegmentedOption } from '@zijie/ui';
`,A=e=>`'${e.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)}'`,j=e=>`set${e[0].toUpperCase()}${e.slice(1)}`,M=(e,t)=>t===`option-off`?e.options.length-1:-1;function N(e,t,n){let r=M(e,t),i=e.options.findIndex(e=>e.value===n);return i<0?e.initial:i===r?e.options[0].value:n}function P({variant:e,size:t,state:n,drag:r}){let i=[];return(e===`underline`||e===`icon`)&&i.push(`variant="${e}"`),t!==`md`&&i.push(`size="${t}"`),e===`fill`&&i.push(`fill`),n===`busy`&&i.push(`busy`),n===`disabled`&&i.push(`disabled`),r||i.push(`drag={false}`),i}function F(e,t){let n=[`value: ${A(e.value)}`,`label: ${A(e.label)}`];return e.icon&&n.push(`icon: ${A(e.icon)}`),e.badge&&n.push(`badge: ${A(e.badge)}`),t&&n.push(`disabled: true`),`{ ${n.join(`, `)} },`}function re(e){let t=k[e.variant],n=M(t,e.state),r=N(t,e.state,e.value),i=j(t.state),a=[`label=${JSON.stringify(t.label)}`,`value={${t.state}}`,`onChange={${i}}`,`options={${t.list}}`,...P(e)];return[`import { useState } from 'react';`,`import { Segmented, type SegmentedOption } from '@zijie/ui';`,``,`type ${t.type} = ${t.options.map(e=>A(e.value)).join(` | `)};`,``,`const ${t.list}: SegmentedOption<${t.type}>[] = [`,...t.options.map((e,t)=>`  ${F(e,t===n)}`),`];`,``,`export function ${t.component}() {`,`  const [${t.state}, ${i}] = useState<${t.type}>(${A(r)});`,`  return (`,`    <Segmented`,...a.map(e=>`      ${e}`),`    />`,`  );`,`}`,``].join(`
`)}function ie(e,t={}){let n=k[e],r={variant:e,size:t.size??`md`,state:t.state??`rest`,drag:t.drag??!0},i=M(n,r.state);return`${[`<Segmented`,`  label=${JSON.stringify(n.label)}`,`  value={${n.state}}`,`  onChange={${j(n.state)}}`,`  options={[`,...n.options.map((e,t)=>`    ${F(e,t===i)}`),`  ]}`,...P(r).map(e=>`  ${e}`),`/>`].join(`
`)}\n`}var ae=[{name:`Segmented.tsx`,code:`import {
  useCallback, useEffect, useLayoutEffect, useRef, useState,
  type KeyboardEvent, type PointerEvent, type ReactNode,
} from 'react';
import { Icon, type IconName } from '../Icon';
import { useReducedMotion } from '../../motion/useReducedMotion';
import { segmentedDirection, segmentedHit, segmentedStep, segmentedTabStop } from './segmentedModel';

export interface SegmentedOption<T extends string> {
  value: T;
  /** Visible label and accessible name. The icon variant shows it as a tooltip and an aria-label. */
  label: string;
  /** A library icon name, or your own decorative SVG. */
  icon?: IconName | ReactNode;
  /** A short fact after the label: "−20%", "+$9.00". Part of the accessible name. */
  badge?: string;
  disabled?: boolean;
}

export type SegmentedVariant = 'raised' | 'underline' | 'icon';
export type SegmentedSize = 'sm' | 'md' | 'lg';
export type SegmentedPreviewSource = 'hover' | 'drag';

export interface SegmentedProps<T extends string> {
  /** Accessible name of the group ("Billing"). Ignored when \`labelledBy\` points at a visible heading. */
  label: string;
  labelledBy?: string;
  value: T;
  options: readonly SegmentedOption<T>[];
  /** Called once per change: on click, on each arrow step, and once on release after a drag. */
  onChange: (value: T) => void;
  variant?: SegmentedVariant;
  size?: SegmentedSize;
  /** Options share the full width of the container instead of fitting their labels. */
  fill?: boolean;
  /** A change is being saved: aria-busy, the choice holds, focus stays where it is. */
  busy?: boolean;
  disabled?: boolean;
  /** Drag across the options with the pointer; the change is reported once, on release. */
  drag?: boolean;
  /** A faint ghost indicator previews the option under a mouse pointer. */
  ghost?: boolean;
  /** The option the pointer is previewing (hover ghost or drag), or null when it settles back. */
  onPreview?: (value: T | null, source: SegmentedPreviewSource) => void;
  className?: string;
}

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const iconSize: Record<SegmentedSize, number> = { sm: 16, md: 18, lg: 20 };
const DRAG_SLOP = 4;
const GHOST_LEAVE_DELAY = 60;

/** The indicator's span for an option: the whole option, or just its label for the underline. */
function spanOf(button: HTMLElement, underline: boolean): [number, number] {
  if (underline) {
    const content = button.querySelector<HTMLElement>('.z-segmented__content');
    if (content) {
      const left = button.offsetLeft + content.offsetLeft;
      return [left, left + content.offsetWidth];
    }
  }
  return [button.offsetLeft, button.offsetLeft + button.offsetWidth];
}

const segmentIndex = (target: EventTarget | null) => {
  const option = (target as Element | null)?.closest?.('[data-segment]');
  return option ? Number(option.getAttribute('data-segment')) : -1;
};

/**
 * A few options, one choice: a radio group with a single tab stop. The indicator is measured, so
 * options can fit their labels; its two edges ride the brand spring on different timings (the
 * leading edge first, the trailing edge catching up), so it stretches toward the new option and
 * settles. Labels light up exactly where the indicator covers them. A mouse pointer gets a ghost
 * preview; a pointer can drag across the options and commits once on release. Arrows, Home and End
 * move the choice and stop at the ends. Busy keeps the choice and the focus; reduced motion snaps.
 */
export function Segmented<T extends string>({
  label, labelledBy, value, options, onChange, variant = 'raised', size = 'md', fill = false,
  busy = false, disabled = false, drag = true, ghost = true, onPreview, className,
}: SegmentedProps<T>) {
  const root = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLSpanElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion();
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [pressed, setPressed] = useState(false);

  buttons.current.length = options.length;
  const selected = options.findIndex(option => option.value === value);
  const off = options.map(option => disabled || !!option.disabled);
  const tabStop = segmentedTabStop(selected, off);
  const shown = dragIndex ?? selected;
  const locked = busy || disabled;
  const underline = variant === 'underline';

  // Imperative handlers (observers, timers, pointer gestures) read the latest render through this ref.
  const latest = useRef({ selected, shown, off, options, onChange, onPreview, locked, drag, ghost, underline, reduced });
  latest.current = { selected, shown, off, options, onChange, onPreview, locked, drag, ghost, underline, reduced };

  const lastLeft = useRef<number | null>(null);
  const place = useCallback((snap: boolean) => {
    const group = root.current;
    if (!group || (!group.offsetWidth && !group.offsetHeight)) return;
    const now = latest.current;
    for (const button of buttons.current) {
      if (!button) continue;
      button.style.setProperty('--z-segmented-x', \`\${button.offsetLeft}px\`);
      button.style.setProperty('--z-segmented-w', \`\${button.offsetWidth}px\`);
    }
    const target = buttons.current[now.shown];
    if (!target) {
      group.dataset.empty = '';
      lastLeft.current = null;
      group.dataset.measured = '';
      return;
    }
    delete group.dataset.empty;
    const [left, right] = spanOf(target, now.underline);
    const instant = snap || now.reduced || !('measured' in group.dataset);
    const direction = segmentedDirection(lastLeft.current, left);
    if (!instant && direction) group.dataset.dir = direction;
    if (instant) group.dataset.instant = '';
    group.style.setProperty('--z-segmented-l', \`\${left}px\`);
    group.style.setProperty('--z-segmented-r', \`\${right}px\`);
    lastLeft.current = left;
    if (instant) {
      void group.offsetWidth;
      delete group.dataset.instant;
    }
    group.dataset.measured = '';
  }, []);

  // Anything that changes the options' boxes snaps the indicator; a new choice glides.
  const layoutKey = [variant, size, fill, ...options.map(option => (
    \`\${option.value}:\${option.label}:\${option.badge ?? ''}:\${typeof option.icon === 'string' ? option.icon : option.icon ? '*' : ''}:\${option.disabled ? 1 : 0}\`
  ))].join('|');
  const lastLayout = useRef<string | null>(null);
  useIsoLayoutEffect(() => {
    const snap = lastLayout.current !== null && lastLayout.current !== layoutKey;
    lastLayout.current = layoutKey;
    place(snap);
  }, [shown, layoutKey, place]);

  // Real size changes (container, fonts, a sheet opening from display:none) snap rather than glide.
  useEffect(() => {
    const group = root.current;
    if (!group) return;
    let alive = true;
    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      const sizes = new WeakMap<Element, string>();
      observer = new ResizeObserver(entries => {
        let changed = !('measured' in group.dataset);
        for (const entry of entries) {
          const next = \`\${Math.round(entry.contentRect.width)}x\${Math.round(entry.contentRect.height)}\`;
          const before = sizes.get(entry.target);
          if (before !== undefined && before !== next) changed = true;
          sizes.set(entry.target, next);
        }
        if (changed) place(true);
      });
      observer.observe(group);
      for (const button of buttons.current) if (button) observer.observe(button);
    }
    document.fonts?.ready.then(() => { if (alive) place(true); }, () => {});
    return () => {
      alive = false;
      observer?.disconnect();
    };
  }, [place, options.length]);

  /* Preview: one callback per change of the previewed option, never per pointer move. */
  const previewed = useRef<{ index: number; source: SegmentedPreviewSource | null }>({ index: -1, source: null });
  const preview = useCallback((index: number, source: SegmentedPreviewSource) => {
    const now = latest.current;
    const next = index >= 0 && index !== now.selected ? index : -1;
    const last = previewed.current;
    if (last.index === next && (next < 0 || last.source === source)) return;
    previewed.current = { index: next, source: next < 0 ? null : source };
    now.onPreview?.(next < 0 ? null : now.options[next].value, source);
  }, []);

  /* Ghost: a faint indicator under the mouse. It snaps into place when it first appears, then
     glides between options; over the chosen option it slides under the indicator and fades. */
  const hovered = useRef(-1);
  const ghostPlaced = useRef(false);
  const leaveTimer = useRef(0);
  const placeGhost = useCallback((index: number) => {
    const group = root.current;
    const pill = ghostRef.current;
    const button = buttons.current[index];
    if (!group || !pill || !button) return;
    const [left, right] = spanOf(button, latest.current.underline);
    const snap = !ghostPlaced.current || latest.current.reduced;
    if (snap) pill.dataset.snap = '';
    pill.style.setProperty('--z-segmented-gl', \`\${left}px\`);
    pill.style.setProperty('--z-segmented-gr', \`\${right}px\`);
    if (snap) {
      void pill.offsetWidth;
      delete pill.dataset.snap;
    }
    ghostPlaced.current = true;
  }, []);
  const syncGhost = useCallback(() => {
    const group = root.current;
    if (!group) return;
    const now = latest.current;
    const index = hovered.current;
    const visible = index >= 0 && index !== now.selected && !now.off[index] && !now.locked && now.ghost && !('dragging' in group.dataset);
    group.dataset.ghost = visible ? 'on' : 'off';
  }, []);
  const hideGhost = useCallback(() => {
    window.clearTimeout(leaveTimer.current);
    hovered.current = -1;
    ghostPlaced.current = false;
    if (root.current) root.current.dataset.ghost = 'off';
  }, []);

  useEffect(() => {
    syncGhost();
    if (hovered.current >= 0 && !locked) preview(hovered.current, 'hover');
    else if (previewed.current.source === 'hover') preview(-1, 'hover');
  }, [selected, locked, ghost, syncGhost, preview]);
  useEffect(() => () => window.clearTimeout(leaveTimer.current), []);

  /* Drag: past a 4px slop the pointer is captured and the indicator follows the option under it.
     One onChange on release; cancel (or Escape) puts it back. */
  const gesture = useRef<{ id: number; x: number; dragging: boolean } | null>(null);
  const suppressClick = useRef(false);
  const dragTarget = useRef<number | null>(null);

  const endDrag = (commit: boolean) => {
    const group = root.current;
    const target = dragTarget.current;
    gesture.current = null;
    dragTarget.current = null;
    setPressed(false);
    setDragIndex(null);
    if (group) delete group.dataset.dragging;
    preview(-1, 'drag');
    if (!commit || target === null) return;
    suppressClick.current = true;
    const now = latest.current;
    if (group?.contains(document.activeElement)) buttons.current[target]?.focus({ preventScroll: true });
    if (target !== now.selected) now.onChange(now.options[target].value);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    suppressClick.current = false;
    if (event.button !== 0 || locked) return;
    const index = segmentIndex(event.target);
    if (index < 0 || off[index]) return;
    gesture.current = { id: event.pointerId, x: event.clientX, dragging: false };
    if (index === selected) setPressed(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const current = gesture.current;
    const group = root.current;
    if (!current || current.id !== event.pointerId || !group) return;
    if (!current.dragging) {
      if (!drag || Math.abs(event.clientX - current.x) < DRAG_SLOP) return;
      current.dragging = true;
      try { group.setPointerCapture(event.pointerId); } catch { /* the pointer is already gone */ }
      group.dataset.dragging = '';
      group.dataset.ghost = 'off';
      setPressed(true);
    }
    const spans = buttons.current.map(button => {
      const rect = button?.getBoundingClientRect();
      return { left: rect?.left ?? 0, right: rect?.right ?? 0 };
    });
    const hit = segmentedHit(event.clientX, spans, off);
    if (hit < 0 || hit === dragTarget.current) return;
    dragTarget.current = hit;
    setDragIndex(hit);
    preview(hit, 'drag');
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const current = gesture.current;
    if (!current || current.id !== event.pointerId) return;
    if (current.dragging) endDrag(true);
    else {
      gesture.current = null;
      setPressed(false);
    }
  };

  const onPointerCancel = () => {
    if (gesture.current?.dragging) endDrag(false);
    else {
      gesture.current = null;
      setPressed(false);
    }
  };

  const onPointerOver = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !ghost) return;
    const index = segmentIndex(event.target);
    if (index < 0) return;
    window.clearTimeout(leaveTimer.current);
    if (off[index]) {
      hovered.current = -1;
      syncGhost();
      preview(-1, 'hover');
      return;
    }
    placeGhost(index);
    hovered.current = index;
    syncGhost();
    if (!gesture.current?.dragging && !locked) preview(index, 'hover');
  };

  const onPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    delete root.current?.dataset.tips;
    if (event.pointerType !== 'mouse') return;
    window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => {
      hideGhost();
      if (previewed.current.source === 'hover') preview(-1, 'hover');
    }, GHOST_LEAVE_DELAY);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    suppressClick.current = false;
    const group = root.current;
    if (event.key === 'Escape') {
      if (gesture.current?.dragging) { event.preventDefault(); endDrag(false); return; }
      if (group && variant === 'icon') group.dataset.tips = 'off';
      return;
    }
    const from = segmentIndex(event.target);
    const rtl = !!group && getComputedStyle(group).direction === 'rtl';
    const next = segmentedStep(event.key, from >= 0 ? from : selected, off, rtl);
    if (next < 0) return;
    event.preventDefault();
    if (busy || gesture.current?.dragging) return;
    if (next !== from) buttons.current[next]?.focus();
    if (next !== selected) onChange(options[next].value);
  };

  const content = (option: SegmentedOption<T>) => (
    <>
      {option.icon !== undefined && option.icon !== null && (
        typeof option.icon === 'string'
          ? <Icon name={option.icon as IconName} size={iconSize[size]} className="z-segmented__icon" />
          : <span className="z-segmented__icon" aria-hidden="true">{option.icon}</span>
      )}
      {variant !== 'icon' && <span className="z-segmented__text">{option.label}</span>}
      {variant !== 'icon' && option.badge && <span className="z-segmented__badge">{option.badge}</span>}
    </>
  );

  return (
    <div
      ref={root}
      role="radiogroup"
      aria-label={labelledBy ? undefined : label}
      aria-labelledby={labelledBy}
      aria-busy={busy || undefined}
      aria-disabled={disabled || undefined}
      className={\`z-segmented z-segmented--\${variant} z-segmented--\${size}\${fill ? ' z-segmented--fill' : ''}\${className ? \` \${className}\` : ''}\`}
      data-state={disabled ? 'disabled' : busy ? 'busy' : 'rest'}
      data-drag={drag && !locked ? '' : undefined}
      data-pressed={pressed || undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onLostPointerCapture={() => { if (gesture.current?.dragging) endDrag(false); }}
      onPointerOver={onPointerOver}
      onPointerLeave={onPointerLeave}
      onKeyDown={onKeyDown}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) delete event.currentTarget.dataset.tips;
      }}
    >
      <span ref={ghostRef} className="z-segmented__ghost" aria-hidden="true" />
      <span className="z-segmented__thumb" aria-hidden="true"><span className="z-segmented__fill" /></span>
      {options.map((option, index) => (
        <button
          key={option.value}
          ref={node => { buttons.current[index] = node; }}
          type="button"
          role="radio"
          className="z-segmented__option"
          aria-checked={index === selected}
          aria-label={variant === 'icon' ? option.label : undefined}
          tabIndex={index === tabStop ? 0 : -1}
          disabled={off[index]}
          data-segment={index}
          onClick={() => {
            if (suppressClick.current) { suppressClick.current = false; return; }
            if (locked || off[index] || index === selected) return;
            onChange(option.value);
          }}
        >
          <span className="z-segmented__content">{content(option)}</span>
          <span className="z-segmented__lit" aria-hidden="true">{content(option)}</span>
          {variant === 'icon' && <span className="z-segmented__tip" aria-hidden="true">{option.label}</span>}
        </button>
      ))}
    </div>
  );
}
`},{name:`segmented.css`,code:D},{name:`segmentedModel.ts`,code:`/* Pure model for Segmented: keyboard stepping, pointer hit-testing, the tab stop and the indicator's
   travel direction. No DOM, so Node tests cover every rule the component depends on. */

/** The keys a segmented group answers to. Anything else is left to the page. */
export const SEGMENTED_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'] as const;

const enabledIndices = (disabled: readonly boolean[]) => disabled.flatMap((off, index) => (off ? [] : [index]));

/**
 * Where an arrow, Home or End moves the choice. Arrows step over disabled options and stop at the
 * ends: they never wrap, so holding a key settles on the last option instead of cycling.
 * Up/Down follow reading order; Left/Right follow the screen, so they swap in right-to-left text.
 * Returns -1 for a key that is not ours, or when every option is disabled.
 */
export function segmentedStep(key: string, index: number, disabled: readonly boolean[], rtl = false): number {
  const enabled = enabledIndices(disabled);
  if (!enabled.length) return -1;
  const first = enabled[0];
  const last = enabled[enabled.length - 1];
  if (key === 'Home') return first;
  if (key === 'End') return last;
  const forward = key === 'ArrowDown' || key === (rtl ? 'ArrowLeft' : 'ArrowRight');
  const backward = key === 'ArrowUp' || key === (rtl ? 'ArrowRight' : 'ArrowLeft');
  if (!forward && !backward) return -1;
  const here = enabled.includes(index);
  if (forward) return enabled.find(candidate => candidate > index) ?? (here ? index : last);
  return [...enabled].reverse().find(candidate => candidate < index) ?? (here ? index : first);
}

/**
 * The one option Tab lands on: the chosen option when it can take focus, otherwise the first
 * enabled one. -1 when the whole group is disabled.
 */
export function segmentedTabStop(index: number, disabled: readonly boolean[]): number {
  if (index >= 0 && index < disabled.length && !disabled[index]) return index;
  return disabled.findIndex(off => !off);
}

export interface SegmentSpan {
  left: number;
  right: number;
}

/**
 * The enabled option under a pointer at \`x\` while it drags across the group. Between options or
 * past either end, the nearest enabled option wins, so a drag never falls off the control.
 */
export function segmentedHit(x: number, spans: readonly SegmentSpan[], disabled: readonly boolean[]): number {
  let best = -1;
  let distance = Number.POSITIVE_INFINITY;
  spans.forEach((span, index) => {
    if (disabled[index]) return;
    const gap = x < span.left ? span.left - x : x > span.right ? x - span.right : 0;
    if (gap < distance) { best = index; distance = gap; }
  });
  return best;
}

/**
 * Which edge leads when the indicator travels from \`from\` to \`to\` (left edges, in px). The leading
 * edge springs on the shorter timing and the trailing edge catches up, so the indicator stretches
 * toward the new option and settles to its width. Null when it does not move.
 */
export function segmentedDirection(from: number | null, to: number): 'forward' | 'back' | null {
  if (from === null || from === to) return null;
  return to > from ? 'forward' : 'back';
}
`},{name:`tokens.css`,code:c}],I=a();function L({variant:e}){return(0,I.jsx)(`svg`,{className:`segmented-thumb segmented-thumb--${e}`,viewBox:`0 0 40 24`,width:`40`,height:`24`,"aria-hidden":`true`,children:(0,I.jsx)(t,{en:e===`underline`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`rect`,{className:`segmented-thumb__tick segmented-thumb__tick--on`,x:`4`,y:`9.5`,width:`10`,height:`2.5`,rx:`1.25`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`19`,y:`9.5`,width:`8`,height:`2.5`,rx:`1.25`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`31`,y:`9.5`,width:`6`,height:`2.5`,rx:`1.25`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__line`,x:`1`,y:`18.5`,width:`38`,height:`1`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__bar`,x:`3`,y:`17.5`,width:`12`,height:`2.5`,rx:`1.25`})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`rect`,{className:`segmented-thumb__trough`,x:e===`fill`?1:4,y:`4`,width:e===`fill`?38:32,height:`16`,rx:`5`}),(0,I.jsx)(t,{en:e===`raised`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`rect`,{className:`segmented-thumb__knob`,x:`6`,y:`6`,width:`11`,height:`12`,rx:`3.5`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`20.5`,y:`11`,width:`5`,height:`2`,rx:`1`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`28`,y:`11`,width:`5`,height:`2`,rx:`1`})]})}),(0,I.jsx)(t,{en:e===`icon`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`rect`,{className:`segmented-thumb__knob`,x:`6`,y:`6`,width:`9`,height:`12`,rx:`3.5`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__glyph segmented-thumb__glyph--on`,x:`8.5`,y:`9.5`,width:`4`,height:`5`,rx:`1`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__glyph`,x:`18.5`,y:`9.5`,width:`4`,height:`5`,rx:`1`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__glyph`,x:`27.5`,y:`9.5`,width:`4`,height:`5`,rx:`1`})]})}),(0,I.jsx)(t,{en:e===`fill`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`rect`,{className:`segmented-thumb__knob`,x:`3`,y:`6`,width:`17`,height:`12`,rx:`3.5`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__tick segmented-thumb__tick--on`,x:`8`,y:`11`,width:`7`,height:`2`,rx:`1`}),(0,I.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`25`,y:`11`,width:`7`,height:`2`,rx:`1`})]})})]})})})}var R=[{id:`raised`,label:`Raised`,description:`The default. A white indicator rises out of a soft trough.`,thumb:(0,I.jsx)(L,{variant:`raised`})},{id:`underline`,label:`Underline`,description:`For a header or a pricing table. A bar travels under the label.`,thumb:(0,I.jsx)(L,{variant:`underline`})},{id:`icon`,label:`Icon`,description:`Square options for a toolbar. The name shows on hover and is read aloud.`,thumb:(0,I.jsx)(L,{variant:`icon`})},{id:`fill`,label:`Fill width`,description:`Options share the width of a card, so prices line up.`,thumb:(0,I.jsx)(L,{variant:`fill`})}],z=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],B=[{value:`rest`,label:`Rest`},{value:`busy`,label:`Busy`},{value:`option-off`,label:`Option off`},{value:`disabled`,label:`Disabled`}];function V(e,t=`rest`){let n=k[e],r=M(n,t);return n.options.map((e,t)=>({value:e.value,label:e.label,icon:e.icon,badge:e.badge,disabled:t===r||void 0}))}var H=e=>e===`fill`?`raised`:e,U=[{id:`rest`,label:`Rest`},{id:`preview`,label:`Preview`},{id:`drag`,label:`Drag`},{id:`chosen`,label:`Chosen`}],W={raised:k.raised.initial,underline:k.underline.initial,icon:k.icon.initial,fill:k.fill.initial};function G(){let t=e(),[n,r]=(0,O.useState)(te),[a,o]=(0,O.useState)(W),[s,c]=(0,O.useState)(`rest`),l=(0,O.useRef)(`rest`),[u,d]=(0,O.useState)(null),f=(0,O.useRef)(0);(0,O.useEffect)(()=>()=>window.clearTimeout(f.current),[]);let m=e=>t=>r(n=>({...n,[e]:t})),g=k[n.variant],v=N(g,n.state,a[n.variant]),y=(0,O.useCallback)(e=>{l.current=e,c(e)},[]),b=(0,O.useCallback)((e,t)=>{o(n=>({...n,[e]:t})),d(null),y(`chosen`),window.clearTimeout(f.current),f.current=window.setTimeout(()=>y(`rest`),1400)},[y]),S=(0,O.useCallback)((e,t)=>{(l.current!==`chosen`||t!==`hover`)&&(d(e===null?null:{value:e,source:t}),e===null?l.current!==`chosen`&&y(`rest`):(window.clearTimeout(f.current),y(t===`drag`?`drag`:`preview`)))},[y]),C=e=>g.options.find(t=>t.value===e)?.label??e,w=n.state===`disabled`?`${g.label} is locked while the order is processing.`:n.state===`busy`?`Saving ${C(v)}… The choice holds until it lands.`:u?u.source===`drag`?`Release to choose ${C(u.value)}.`:`Previewing ${C(u.value)}. Click to choose it.`:g.options.find(e=>e.value===v)?.done??``;return(0,I.jsx)(_,{page:`segmented`,name:`Segmented`,variants:R,variant:n.variant,onVariantChange:e=>{window.clearTimeout(f.current),d(null),y(`rest`),m(`variant`)(e)},status:w,animated:n.state===`busy`,trail:(0,I.jsx)(p,{states:U,active:s,label:t({en:`Segmented states`})}),code:{setup:ne,usage:re({...n,value:v}),usageFile:`${g.component}.tsx`,sources:ae},controls:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(h,{label:t({en:`Size`}),value:n.size,options:z,onChange:m(`size`)}),(0,I.jsx)(h,{label:t({en:`State`}),value:n.state,options:B,onChange:m(`state`)}),(0,I.jsx)(x,{label:t({en:`Drag to choose`}),checked:n.drag,onChange:m(`drag`)})]}),children:({variant:e})=>(0,I.jsx)(`div`,{className:`segmented-stage segmented-stage--${e}`,children:(0,I.jsx)(i,{label:t({en:k[e].label}),value:N(k[e],n.state,a[e]),options:V(e,n.state),onChange:t=>b(e,t),variant:H(e),size:n.size,fill:e===`fill`,busy:n.state===`busy`,disabled:n.state===`disabled`,drag:n.drag,onPreview:S})})})}var K={style:`currency`,currency:`USD`},q=e=>e.toLocaleString(`en-US`,K),J={monthly:{perMonth:12,note:`Billed monthly. Cancel anytime.`},annual:{perMonth:9.6,note:`Billed $115.20 a year. You save $28.80.`}},Y=[{value:`monthly`,label:`Monthly`},{value:`annual`,label:`Annual`,badge:`−20%`}];function oe(){let n=e(),r=(0,O.useId)(),[a,o]=(0,O.useState)(`monthly`),[c,l]=(0,O.useState)(null),u=J[a];return(0,I.jsxs)(f,{className:`segmented-card`,title:n({en:`Shop Pro`}),label:n({en:`Shop Pro plan`}),children:[(0,I.jsxs)(`div`,{className:`segmented-card__field`,children:[(0,I.jsx)(`p`,{id:r,className:`segmented-card__label`,children:(0,I.jsx)(t,{en:(0,I.jsx)(I.Fragment,{children:`Billing`})})}),(0,I.jsx)(i,{label:n({en:`Billing`}),labelledBy:r,value:a,options:Y,onChange:o,onPreview:e=>l(e),fill:!0})]}),(0,I.jsxs)(`div`,{className:`segmented-plan`,children:[(0,I.jsxs)(`p`,{className:`segmented-plan__price`,children:[(0,I.jsx)(s,{value:u.perMonth,format:K}),(0,I.jsx)(`span`,{className:`segmented-plan__unit`,children:(0,I.jsx)(t,{en:(0,I.jsx)(I.Fragment,{children:`/ month`})})})]}),(0,I.jsx)(`p`,{className:`segmented-plan__peek`,"data-on":c?``:void 0,"aria-hidden":`true`,children:(0,I.jsx)(t,{en:c?`${c===`annual`?`Annual`:`Monthly`} ${q(J[c].perMonth)}`:``})})]}),(0,I.jsx)(`p`,{className:`segmented-card__note`,children:(0,I.jsx)(t,{en:u.note})})]})}var X=[{value:`standard`,label:`Standard`,badge:`Free`},{value:`express`,label:`Express`,badge:`+$9.00`}],se={standard:`Arrives Oct 14–16`,express:`Arrives tomorrow by 9 pm`},Z=42;function Q({active:n}){let a=e(),c=(0,O.useId)(),l=r(),{reset:u}=l,[d,p]=(0,O.useState)(`standard`),[m,h]=(0,O.useState)(`standard`);(0,O.useEffect)(()=>{n||(u(),p(m))},[n,m,u]);let g=e=>{l.busy||(p(e),l.run(async({signal:t})=>{await o(900)({signal:t}),h(e)}))},_=m===`express`?9:0,v=l.busy?`Updating your total…`:l.state===`success`?`Total updated: ${q(Z+_)}.`:``;return(0,I.jsxs)(f,{className:`segmented-card`,title:a({en:`Delivery`}),status:v,children:[(0,I.jsxs)(`div`,{className:`segmented-card__field`,children:[(0,I.jsx)(`p`,{id:c,className:`segmented-card__label`,children:(0,I.jsx)(t,{en:(0,I.jsx)(I.Fragment,{children:`Speed`})})}),(0,I.jsx)(i,{label:a({en:`Speed`}),labelledBy:c,value:d,options:X,onChange:g,busy:l.busy,fill:!0})]}),(0,I.jsxs)(`dl`,{className:`segmented-rows`,"data-busy":l.busy||void 0,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:(0,I.jsx)(t,{en:(0,I.jsx)(I.Fragment,{children:`Subtotal`})})}),(0,I.jsx)(`dd`,{children:(0,I.jsx)(t,{en:q(Z)})})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:(0,I.jsx)(t,{en:(0,I.jsx)(I.Fragment,{children:`Delivery`})})}),(0,I.jsx)(`dd`,{children:(0,I.jsx)(t,{en:_?q(_):`Free`})})]}),(0,I.jsxs)(`div`,{className:`segmented-rows__total`,children:[(0,I.jsx)(`dt`,{children:(0,I.jsx)(t,{en:(0,I.jsx)(I.Fragment,{children:`Total`})})}),(0,I.jsx)(`dd`,{children:(0,I.jsx)(s,{value:Z+_,format:K})})]})]}),(0,I.jsx)(`p`,{className:`segmented-card__note`,children:(0,I.jsx)(t,{en:se[m]})})]})}var $=[{value:`checkout`,label:`Checkout`},{value:`refund`,label:`Refund`},{value:`withdraw`,label:`Withdraw`}],ce={checkout:{ring:80,headline:`Payment conversion`,note:`Up from 70% on Agentic Commerce · US.`},refund:{headline:`Back where it came from`,note:`Money returns to the original method, with a clear status.`},withdraw:{headline:`In the bank as promised`,note:`Seller balances reach the bank when promised.`}};function le(){let n=e(),[r,a]=(0,O.useState)(`checkout`),o=ce[r];return(0,I.jsxs)(f,{className:`segmented-card segmented-flows`,title:n({en:`Payment flow`}),label:n({en:`Payment flows`}),children:[(0,I.jsx)(i,{label:n({en:`Payment flow`}),value:r,options:$,onChange:a,size:`lg`,fill:!0}),(0,I.jsxs)(`div`,{className:`segmented-flows__body`,children:[(0,I.jsxs)(`svg`,{className:`segmented-ring`,viewBox:`0 0 120 120`,width:`120`,height:`120`,"aria-hidden":`true`,"data-ring":o.ring?``:void 0,children:[(0,I.jsx)(`circle`,{className:`segmented-ring__track`,cx:`60`,cy:`60`,r:`50`,pathLength:`100`}),(0,I.jsx)(`circle`,{className:`segmented-ring__arc`,cx:`60`,cy:`60`,r:`50`,pathLength:`100`,style:{strokeDashoffset:100-(o.ring??0)}}),(0,I.jsx)(`path`,{className:`segmented-ring__check`,d:`m42 62 13 13 25-28`,pathLength:`100`})]}),(0,I.jsxs)(`div`,{className:`segmented-flows__copy`,children:[(0,I.jsx)(t,{en:o.ring!==void 0&&(0,I.jsx)(`p`,{className:`segmented-flows__value`,children:(0,I.jsx)(s,{value:o.ring/100,format:{style:`percent`}})})}),(0,I.jsx)(`p`,{className:o.ring===void 0?`segmented-flows__headline`:`segmented-flows__metric`,children:(0,I.jsx)(t,{en:o.headline})}),(0,I.jsx)(`p`,{className:`segmented-card__note`,children:(0,I.jsx)(t,{en:o.note})})]})]})]})}function ue(){let e=(0,O.useRef)(null),t=g(e,{page:`segmented`});return(0,I.jsx)(`div`,{ref:e,"data-playback":t?`running`:`paused`,children:(0,I.jsxs)(E,{children:[(0,I.jsx)(oe,{}),(0,I.jsx)(Q,{active:t}),(0,I.jsx)(le,{})]})})}var de=[`United States`,`United Kingdom`,`Germany`,`France`,`Japan`,`Singapore`].map(e=>({value:e,label:e})),fe=[{title:`Rest`,note:`The choice rises out of the trough. The rest wait.`,variant:`raised`},{title:`Hover`,note:`A ghost previews the option under the pointer. Try it.`,variant:`raised`,interactive:!0},{title:`Drag`,note:`Press and sweep across. It commits once, on release.`,variant:`raised`,interactive:!0},{title:`Option off`,note:`Skipped by arrows and by a drag.`,variant:`raised`,state:`option-off`},{title:`Busy`,note:`The choice holds while it saves. Focus stays put.`,variant:`raised`,state:`busy`},{title:`Disabled`,note:`The whole group rests. The choice stays visible.`,variant:`raised`,state:`disabled`}];function pe({variant:t,state:n=`rest`}){let r=e(),a=k[t],[o,s]=(0,O.useState)(()=>N(a,n,a.initial));return(0,I.jsx)(`div`,{className:`segmented-specimen segmented-specimen--${t}`,children:(0,I.jsx)(i,{label:r({en:a.label}),value:o,options:V(t,n),onChange:s,variant:H(t),size:`sm`,fill:t===`fill`,busy:n===`busy`,disabled:n===`disabled`})})}function me(){let n=e();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u,{id:`segmented`}),(0,I.jsx)(G,{}),(0,I.jsx)(d,{title:n({en:`One choice, always in view.`}),lead:n({en:`Every option stays on screen. The indicator moves the way a hand would move it.`}),reasons:[{title:`The set is the control`,text:`Two to four options, all visible, so the choice reads at a glance. Longer lists belong in a select.`},{title:`Motion that follows`,text:`The leading edge springs first and the trailing edge catches up. Drag across and it keeps pace; let go and it commits once.`},{title:`One stop, every input`,text:`Tab lands on the choice, arrows move it and stop at the ends. Busy holds the choice and keeps focus where it was.`}]}),(0,I.jsx)(y,{id:`states`,title:n({en:`States`}),lead:n({en:`Every state a segmented control can be in. Try Hover and Drag. Inspect any of them for its code.`}),children:(0,I.jsx)(T,{columns:3,children:(0,I.jsx)(t,{en:fe.map(e=>(0,I.jsx)(C,{title:n({en:e.title}),note:e.note,interactive:e.interactive,inspect:{code:ie(e.variant,{size:`sm`,state:e.state})},children:(0,I.jsx)(pe,{variant:e.variant,state:e.state})},e.title))})})}),(0,I.jsx)(y,{id:`in-context`,title:n({en:`In context`}),lead:n({en:`A plan, a delivery speed and the three flows of a payments team. Each choice answers on the spot.`}),children:(0,I.jsx)(ue,{})}),(0,I.jsx)(y,{id:`reference`,title:n({en:`Reference`}),children:(0,I.jsxs)(`div`,{className:`kit-folds`,children:[(0,I.jsx)(m,{title:n({en:`Properties & states`}),children:(0,I.jsx)(v,{props:l.props??[]})}),(0,I.jsx)(m,{title:n({en:`Usage & keyboard`}),children:(0,I.jsxs)(`div`,{className:`kit-stack`,children:[(0,I.jsx)(S,{number:1,title:n({en:`Two to four options`}),do:{text:`Keep the whole set in view, each label a word or two.`,example:(0,I.jsx)(i,{label:n({en:`Payment flow`}),value:`refund`,options:$,onChange:()=>{},size:`sm`})},dont:{text:`Squeeze a long list in; labels truncate and nothing reads.`,example:(0,I.jsx)(`span`,{className:`segmented-example segmented-example--squeezed`,children:(0,I.jsx)(i,{label:n({en:`Ship to`}),value:`United States`,options:de,onChange:()=>{},size:`sm`})})}}),(0,I.jsx)(S,{number:2,title:n({en:`Name the choice, not the action`}),do:{text:`Options are states the user picks between.`,example:(0,I.jsx)(i,{label:n({en:`Billing`}),value:`annual`,options:Y,onChange:()=>{},size:`sm`})},dont:{text:`Verbs belong on buttons; a segment is not a command.`,example:(0,I.jsx)(i,{label:n({en:`Plan`}),value:`keep`,options:[{value:`keep`,label:`Keep plan`},{value:`upgrade`,label:`Upgrade`}],onChange:()=>{},size:`sm`})}}),(0,I.jsx)(S,{number:3,title:n({en:`Show what a choice costs`}),do:{text:`Put the price change on the option, before anyone chooses.`,example:(0,I.jsx)(i,{label:n({en:`Delivery`}),value:`standard`,options:X,onChange:()=>{},size:`sm`})},dont:{text:`Hide the fee until the total; it feels like a trap.`,example:(0,I.jsx)(i,{label:n({en:`Delivery`}),value:`standard`,options:[{value:`standard`,label:`Standard`},{value:`express`,label:`Express`}],onChange:()=>{},size:`sm`})}}),(0,I.jsx)(S,{number:4,title:n({en:`Name the group`}),do:{text:`A visible label says what the choice is about.`,example:(0,I.jsxs)(`span`,{className:`segmented-example`,children:[(0,I.jsx)(`span`,{className:`segmented-example__label`,children:(0,I.jsx)(t,{en:(0,I.jsx)(I.Fragment,{children:`Billing`})})}),(0,I.jsx)(i,{label:n({en:`Billing`}),value:`annual`,options:Y,onChange:()=>{},size:`sm`})]})},dont:{text:`A bare control makes people guess what they are choosing.`,example:(0,I.jsx)(i,{label:n({en:`Billing`}),value:`annual`,options:Y,onChange:()=>{},size:`sm`})}}),(0,I.jsx)(w,{keys:l.keys??[]})]})}),(0,I.jsx)(m,{title:n({en:`Tokens`}),children:(0,I.jsxs)(`div`,{className:`kit-stack`,children:[(0,I.jsx)(b,{tokens:l.tokens??[]}),(0,I.jsx)(ee,{tokens:[...l.tokens??[],`--z-color-wash`,`--z-color-surface`,`--z-color-blue-action`,`--z-press-scale`,`--z-radius-media`]})]})})]})})]})}export{me as default};