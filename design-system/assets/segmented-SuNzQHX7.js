import{Xt as e,Zt as t,an as n,g as r,kn as i,wt as a}from"./route-DiUIWQAn.js";import{t as o}from"./tokens--8wjVqaD.js";import{f as s}from"./docs-C3rBO14N.js";import{A as c,O as l,_ as u,a as d,c as f,f as p,g as m,h,i as g,k as _,l as v,m as y,n as b,o as x,r as S,s as C,t as w,v as ee}from"./kit-CylDtrmy.js";import{t as T}from"./segmented-C5Fr5viM.js";var E=i(),D={raised:{component:`PaymentFlowPicker`,label:`Payment flow`,type:`Flow`,state:`flow`,list:`flows`,initial:`checkout`,options:[{value:`checkout`,label:`Checkout`,done:`Checkout. One flow, one clear status.`},{value:`refund`,label:`Refund`,done:`Refund. Money returns to the original method.`},{value:`withdraw`,label:`Withdraw`,done:`Withdraw. The seller balance lands in the bank.`}]},underline:{component:`BillingPeriod`,label:`Billing`,type:`Period`,state:`period`,list:`periods`,initial:`annual`,options:[{value:`monthly`,label:`Monthly`,done:`Monthly. $12.00 a month, cancel anytime.`},{value:`annual`,label:`Annual`,badge:`−20%`,done:`Annual. $115.20 a year, $28.80 saved.`}]},icon:{component:`CatalogView`,label:`Catalog view`,type:`View`,state:`view`,list:`views`,initial:`grid`,options:[{value:`grid`,label:`Grid`,icon:`grid`,done:`Grid. Photos first, for browsing.`},{value:`list`,label:`List`,icon:`menu`,done:`List. Prices and ratings side by side.`},{value:`picks`,label:`Agent picks`,icon:`spark`,done:`Agent picks. Three matches, each with a reason.`}]},fill:{component:`DeliverySpeed`,label:`Delivery`,type:`Speed`,state:`speed`,list:`speeds`,initial:`express`,options:[{value:`standard`,label:`Standard`,badge:`Free`,done:`Standard. Free, arrives Oct 14–16.`},{value:`express`,label:`Express`,badge:`+$9.00`,done:`Express. $9.00, arrives tomorrow.`}]}},O={variant:`raised`,size:`md`,state:`rest`,drag:!0,value:`checkout`},te=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Segmented, type SegmentedOption } from '@zijie/ui';
`,k=e=>`'${e.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)}'`,A=e=>`set${e[0].toUpperCase()}${e.slice(1)}`,j=(e,t)=>t===`option-off`?e.options.length-1:-1;function M(e,t,n){let r=j(e,t),i=e.options.findIndex(e=>e.value===n);return i<0?e.initial:i===r?e.options[0].value:n}function N({variant:e,size:t,state:n,drag:r}){let i=[];return(e===`underline`||e===`icon`)&&i.push(`variant="${e}"`),t!==`md`&&i.push(`size="${t}"`),e===`fill`&&i.push(`fill`),n===`busy`&&i.push(`busy`),n===`disabled`&&i.push(`disabled`),r||i.push(`drag={false}`),i}function P(e,t){let n=[`value: ${k(e.value)}`,`label: ${k(e.label)}`];return e.icon&&n.push(`icon: ${k(e.icon)}`),e.badge&&n.push(`badge: ${k(e.badge)}`),t&&n.push(`disabled: true`),`{ ${n.join(`, `)} },`}function F(e){let t=D[e.variant],n=j(t,e.state),r=M(t,e.state,e.value),i=A(t.state),a=[`label=${JSON.stringify(t.label)}`,`value={${t.state}}`,`onChange={${i}}`,`options={${t.list}}`,...N(e)];return[`import { useState } from 'react';`,`import { Segmented, type SegmentedOption } from '@zijie/ui';`,``,`type ${t.type} = ${t.options.map(e=>k(e.value)).join(` | `)};`,``,`const ${t.list}: SegmentedOption<${t.type}>[] = [`,...t.options.map((e,t)=>`  ${P(e,t===n)}`),`];`,``,`export function ${t.component}() {`,`  const [${t.state}, ${i}] = useState<${t.type}>(${k(r)});`,`  return (`,`    <Segmented`,...a.map(e=>`      ${e}`),`    />`,`  );`,`}`,``].join(`
`)}function I(e,t={}){let n=D[e],r={variant:e,size:t.size??`md`,state:t.state??`rest`,drag:t.drag??!0},i=j(n,r.state);return`${[`<Segmented`,`  label=${JSON.stringify(n.label)}`,`  value={${n.state}}`,`  onChange={${A(n.state)}}`,`  options={[`,...n.options.map((e,t)=>`    ${P(e,t===i)}`),`  ]}`,...N(r).map(e=>`  ${e}`),`/>`].join(`
`)}\n`}var ne=[{name:`Segmented.tsx`,code:`import {
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
`},{name:`segmented.css`,code:T},{name:`segmentedModel.ts`,code:`/* Pure model for Segmented: keyboard stepping, pointer hit-testing, the tab stop and the indicator's
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
`},{name:`tokens.css`,code:o}],L=n();function R({variant:e}){return(0,L.jsx)(`svg`,{className:`segmented-thumb segmented-thumb--${e}`,viewBox:`0 0 40 24`,width:`40`,height:`24`,"aria-hidden":`true`,children:e===`underline`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`rect`,{className:`segmented-thumb__tick segmented-thumb__tick--on`,x:`4`,y:`9.5`,width:`10`,height:`2.5`,rx:`1.25`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`19`,y:`9.5`,width:`8`,height:`2.5`,rx:`1.25`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`31`,y:`9.5`,width:`6`,height:`2.5`,rx:`1.25`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__line`,x:`1`,y:`18.5`,width:`38`,height:`1`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__bar`,x:`3`,y:`17.5`,width:`12`,height:`2.5`,rx:`1.25`})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`rect`,{className:`segmented-thumb__trough`,x:e===`fill`?1:4,y:`4`,width:e===`fill`?38:32,height:`16`,rx:`5`}),e===`raised`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`rect`,{className:`segmented-thumb__knob`,x:`6`,y:`6`,width:`11`,height:`12`,rx:`3.5`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`20.5`,y:`11`,width:`5`,height:`2`,rx:`1`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`28`,y:`11`,width:`5`,height:`2`,rx:`1`})]}),e===`icon`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`rect`,{className:`segmented-thumb__knob`,x:`6`,y:`6`,width:`9`,height:`12`,rx:`3.5`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__glyph segmented-thumb__glyph--on`,x:`8.5`,y:`9.5`,width:`4`,height:`5`,rx:`1`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__glyph`,x:`18.5`,y:`9.5`,width:`4`,height:`5`,rx:`1`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__glyph`,x:`27.5`,y:`9.5`,width:`4`,height:`5`,rx:`1`})]}),e===`fill`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`rect`,{className:`segmented-thumb__knob`,x:`3`,y:`6`,width:`17`,height:`12`,rx:`3.5`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__tick segmented-thumb__tick--on`,x:`8`,y:`11`,width:`7`,height:`2`,rx:`1`}),(0,L.jsx)(`rect`,{className:`segmented-thumb__tick`,x:`25`,y:`11`,width:`7`,height:`2`,rx:`1`})]})]})})}var z=[{id:`raised`,label:`Raised`,description:`The default. A white indicator rises out of a soft trough.`,thumb:(0,L.jsx)(R,{variant:`raised`})},{id:`underline`,label:`Underline`,description:`For a header or a pricing table. A bar travels under the label.`,thumb:(0,L.jsx)(R,{variant:`underline`})},{id:`icon`,label:`Icon`,description:`Square options for a toolbar. The name shows on hover and is read aloud.`,thumb:(0,L.jsx)(R,{variant:`icon`})},{id:`fill`,label:`Fill width`,description:`Options share the width of a card, so prices line up.`,thumb:(0,L.jsx)(R,{variant:`fill`})}],B=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],V=[{value:`rest`,label:`Rest`},{value:`busy`,label:`Busy`},{value:`option-off`,label:`Option off`},{value:`disabled`,label:`Disabled`}];function H(e,t=`rest`){let n=D[e],r=j(n,t);return n.options.map((e,t)=>({value:e.value,label:e.label,icon:e.icon,badge:e.badge,disabled:t===r||void 0}))}var U=e=>e===`fill`?`raised`:e,W=[{id:`rest`,label:`Rest`},{id:`preview`,label:`Preview`},{id:`drag`,label:`Drag`},{id:`chosen`,label:`Chosen`}],G={raised:D.raised.initial,underline:D.underline.initial,icon:D.icon.initial,fill:D.fill.initial};function K(){let[e,t]=(0,E.useState)(O),[n,i]=(0,E.useState)(G),[a,o]=(0,E.useState)(`rest`),s=(0,E.useRef)(`rest`),[c,l]=(0,E.useState)(null),u=(0,E.useRef)(0);(0,E.useEffect)(()=>()=>window.clearTimeout(u.current),[]);let f=e=>n=>t(t=>({...t,[e]:n})),m=D[e.variant],g=M(m,e.state,n[e.variant]),_=(0,E.useCallback)(e=>{s.current=e,o(e)},[]),v=(0,E.useCallback)((e,t)=>{i(n=>({...n,[e]:t})),l(null),_(`chosen`),window.clearTimeout(u.current),u.current=window.setTimeout(()=>_(`rest`),1400)},[_]),b=(0,E.useCallback)((e,t)=>{(s.current!==`chosen`||t!==`hover`)&&(l(e===null?null:{value:e,source:t}),e===null?s.current!==`chosen`&&_(`rest`):(window.clearTimeout(u.current),_(t===`drag`?`drag`:`preview`)))},[_]),x=e=>m.options.find(t=>t.value===e)?.label??e,S=e.state===`disabled`?`${m.label} is locked while the order is processing.`:e.state===`busy`?`Saving ${x(g)}… The choice holds until it lands.`:c?c.source===`drag`?`Release to choose ${x(c.value)}.`:`Previewing ${x(c.value)}. Click to choose it.`:m.options.find(e=>e.value===g)?.done??``;return(0,L.jsx)(h,{page:`segmented`,name:`Segmented`,variants:z,variant:e.variant,onVariantChange:e=>{window.clearTimeout(u.current),l(null),_(`rest`),f(`variant`)(e)},status:S,animated:e.state===`busy`,trail:(0,L.jsx)(d,{states:W,active:a,label:`Segmented states`}),code:{setup:te,usage:F({...e,value:g}),usageFile:`${m.component}.tsx`,sources:ne},controls:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(p,{label:`Size`,value:e.size,options:B,onChange:f(`size`)}),(0,L.jsx)(p,{label:`State`,value:e.state,options:V,onChange:f(`state`)}),(0,L.jsx)(y,{label:`Drag to choose`,checked:e.drag,onChange:f(`drag`)})]}),children:({variant:t})=>(0,L.jsx)(`div`,{className:`segmented-stage segmented-stage--${t}`,children:(0,L.jsx)(r,{label:D[t].label,value:M(D[t],e.state,n[t]),options:H(t,e.state),onChange:e=>v(t,e),variant:U(t),size:e.size,fill:t===`fill`,busy:e.state===`busy`,disabled:e.state===`disabled`,drag:e.drag,onPreview:b})})})}var q={style:`currency`,currency:`USD`},J=e=>e.toLocaleString(`en-US`,q),Y={monthly:{perMonth:12,note:`Billed monthly. Cancel anytime.`},annual:{perMonth:9.6,note:`Billed $115.20 a year. You save $28.80.`}},X=[{value:`monthly`,label:`Monthly`},{value:`annual`,label:`Annual`,badge:`−20%`}];function re(){let e=(0,E.useId)(),[t,n]=(0,E.useState)(`monthly`),[i,o]=(0,E.useState)(null),s=Y[t];return(0,L.jsxs)(u,{className:`segmented-card`,title:`Shop Pro`,label:`Shop Pro plan`,children:[(0,L.jsxs)(`div`,{className:`segmented-card__field`,children:[(0,L.jsx)(`p`,{id:e,className:`segmented-card__label`,children:`Billing`}),(0,L.jsx)(r,{label:`Billing`,labelledBy:e,value:t,options:X,onChange:n,onPreview:e=>o(e),fill:!0})]}),(0,L.jsxs)(`div`,{className:`segmented-plan`,children:[(0,L.jsxs)(`p`,{className:`segmented-plan__price`,children:[(0,L.jsx)(a,{value:s.perMonth,format:q}),(0,L.jsx)(`span`,{className:`segmented-plan__unit`,children:`/ month`})]}),(0,L.jsx)(`p`,{className:`segmented-plan__peek`,"data-on":i?``:void 0,"aria-hidden":`true`,children:i?`${i===`annual`?`Annual`:`Monthly`} ${J(Y[i].perMonth)}`:``})]}),(0,L.jsx)(`p`,{className:`segmented-card__note`,children:s.note})]})}var Z=[{value:`standard`,label:`Standard`,badge:`Free`},{value:`express`,label:`Express`,badge:`+$9.00`}],ie={standard:`Arrives Oct 14–16`,express:`Arrives tomorrow by 9 pm`},Q=42;function ae({active:n}){let i=(0,E.useId)(),o=e(),{reset:s}=o,[c,l]=(0,E.useState)(`standard`),[d,f]=(0,E.useState)(`standard`);(0,E.useEffect)(()=>{n||(s(),l(d))},[n,d,s]);let p=e=>{o.busy||(l(e),o.run(async({signal:n})=>{await t(900)({signal:n}),f(e)}))},m=d===`express`?9:0,h=o.busy?`Updating your total…`:o.state===`success`?`Total updated: ${J(Q+m)}.`:``;return(0,L.jsxs)(u,{className:`segmented-card`,title:`Delivery`,status:h,children:[(0,L.jsxs)(`div`,{className:`segmented-card__field`,children:[(0,L.jsx)(`p`,{id:i,className:`segmented-card__label`,children:`Speed`}),(0,L.jsx)(r,{label:`Speed`,labelledBy:i,value:c,options:Z,onChange:p,busy:o.busy,fill:!0})]}),(0,L.jsxs)(`dl`,{className:`segmented-rows`,"data-busy":o.busy||void 0,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`dt`,{children:`Subtotal`}),(0,L.jsx)(`dd`,{children:J(Q)})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`dt`,{children:`Delivery`}),(0,L.jsx)(`dd`,{children:m?J(m):`Free`})]}),(0,L.jsxs)(`div`,{className:`segmented-rows__total`,children:[(0,L.jsx)(`dt`,{children:`Total`}),(0,L.jsx)(`dd`,{children:(0,L.jsx)(a,{value:Q+m,format:q})})]})]}),(0,L.jsx)(`p`,{className:`segmented-card__note`,children:ie[d]})]})}var $=[{value:`checkout`,label:`Checkout`},{value:`refund`,label:`Refund`},{value:`withdraw`,label:`Withdraw`}],oe={checkout:{ring:80,headline:`Payment conversion`,note:`Up from 70% on Agentic Commerce · US.`},refund:{headline:`Back where it came from`,note:`Money returns to the original method, with a clear status.`},withdraw:{headline:`In the bank as promised`,note:`Seller balances reach the bank when promised.`}};function se(){let[e,t]=(0,E.useState)(`checkout`),n=oe[e];return(0,L.jsxs)(u,{className:`segmented-card segmented-flows`,title:`Payment flow`,label:`Payment flows`,children:[(0,L.jsx)(r,{label:`Payment flow`,value:e,options:$,onChange:t,size:`lg`,fill:!0}),(0,L.jsxs)(`div`,{className:`segmented-flows__body`,children:[(0,L.jsxs)(`svg`,{className:`segmented-ring`,viewBox:`0 0 120 120`,width:`120`,height:`120`,"aria-hidden":`true`,"data-ring":n.ring?``:void 0,children:[(0,L.jsx)(`circle`,{className:`segmented-ring__track`,cx:`60`,cy:`60`,r:`50`,pathLength:`100`}),(0,L.jsx)(`circle`,{className:`segmented-ring__arc`,cx:`60`,cy:`60`,r:`50`,pathLength:`100`,style:{strokeDashoffset:100-(n.ring??0)}}),(0,L.jsx)(`path`,{className:`segmented-ring__check`,d:`m42 62 13 13 25-28`,pathLength:`100`})]}),(0,L.jsxs)(`div`,{className:`segmented-flows__copy`,children:[n.ring!==void 0&&(0,L.jsx)(`p`,{className:`segmented-flows__value`,children:(0,L.jsx)(a,{value:n.ring/100,format:{style:`percent`}})}),(0,L.jsx)(`p`,{className:n.ring===void 0?`segmented-flows__headline`:`segmented-flows__metric`,children:n.headline}),(0,L.jsx)(`p`,{className:`segmented-card__note`,children:n.note})]})]})]})}function ce(){let e=(0,E.useRef)(null),t=m(e,{page:`segmented`});return(0,L.jsx)(`div`,{ref:e,"data-playback":t?`running`:`paused`,children:(0,L.jsxs)(ee,{children:[(0,L.jsx)(re,{}),(0,L.jsx)(ae,{active:t}),(0,L.jsx)(se,{})]})})}var le=[`United States`,`United Kingdom`,`Germany`,`France`,`Japan`,`Singapore`].map(e=>({value:e,label:e})),ue=[{title:`Rest`,note:`The choice rises out of the trough. The rest wait.`,variant:`raised`},{title:`Hover`,note:`A ghost previews the option under the pointer. Try it.`,variant:`raised`,interactive:!0},{title:`Drag`,note:`Press and sweep across. It commits once, on release.`,variant:`raised`,interactive:!0},{title:`Option off`,note:`Skipped by arrows and by a drag.`,variant:`raised`,state:`option-off`},{title:`Busy`,note:`The choice holds while it saves. Focus stays put.`,variant:`raised`,state:`busy`},{title:`Disabled`,note:`The whole group rests. The choice stays visible.`,variant:`raised`,state:`disabled`}];function de({variant:e,state:t=`rest`}){let n=D[e],[i,a]=(0,E.useState)(()=>M(n,t,n.initial));return(0,L.jsx)(`div`,{className:`segmented-specimen segmented-specimen--${e}`,children:(0,L.jsx)(r,{label:n.label,value:i,options:H(e,t),onChange:a,variant:U(e),size:`sm`,fill:e===`fill`,busy:t===`busy`,disabled:t===`disabled`})})}function fe(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(c,{id:`segmented`}),(0,L.jsx)(K,{}),(0,L.jsx)(l,{title:`One choice, always in view.`,lead:`Every option stays on screen. The indicator moves the way a hand would move it.`,reasons:[{title:`The set is the control`,text:`Two to four options, all visible, so the choice reads at a glance. Longer lists belong in a select.`},{title:`Motion that follows`,text:`The leading edge springs first and the trailing edge catches up. Drag across and it keeps pace; let go and it commits once.`},{title:`One stop, every input`,text:`Tab lands on the choice, arrows move it and stop at the ends. Busy holds the choice and keeps focus where it was.`}]}),(0,L.jsx)(_,{id:`states`,title:`States`,lead:`Every state a segmented control can be in. Try Hover and Drag. Inspect any of them for its code.`,children:(0,L.jsx)(C,{columns:3,children:ue.map(e=>(0,L.jsx)(x,{title:e.title,note:e.note,interactive:e.interactive,inspect:{code:I(e.variant,{size:`sm`,state:e.state})},children:(0,L.jsx)(de,{variant:e.variant,state:e.state})},e.title))})}),(0,L.jsx)(_,{id:`in-context`,title:`In context`,lead:`A plan, a delivery speed and the three flows of a payments team. Each choice answers on the spot.`,children:(0,L.jsx)(ce,{})}),(0,L.jsx)(_,{id:`reference`,title:`Reference`,children:(0,L.jsxs)(`div`,{className:`kit-folds`,children:[(0,L.jsx)(f,{title:`Properties & states`,children:(0,L.jsx)(g,{props:s.props??[]})}),(0,L.jsx)(f,{title:`Usage & keyboard`,children:(0,L.jsxs)(`div`,{className:`kit-stack`,children:[(0,L.jsx)(b,{number:1,title:`Two to four options`,do:{text:`Keep the whole set in view, each label a word or two.`,example:(0,L.jsx)(r,{label:`Payment flow`,value:`refund`,options:$,onChange:()=>{},size:`sm`})},dont:{text:`Squeeze a long list in; labels truncate and nothing reads.`,example:(0,L.jsx)(`span`,{className:`segmented-example segmented-example--squeezed`,children:(0,L.jsx)(r,{label:`Ship to`,value:`United States`,options:le,onChange:()=>{},size:`sm`})})}}),(0,L.jsx)(b,{number:2,title:`Name the choice, not the action`,do:{text:`Options are states the user picks between.`,example:(0,L.jsx)(r,{label:`Billing`,value:`annual`,options:X,onChange:()=>{},size:`sm`})},dont:{text:`Verbs belong on buttons; a segment is not a command.`,example:(0,L.jsx)(r,{label:`Plan`,value:`keep`,options:[{value:`keep`,label:`Keep plan`},{value:`upgrade`,label:`Upgrade`}],onChange:()=>{},size:`sm`})}}),(0,L.jsx)(b,{number:3,title:`Show what a choice costs`,do:{text:`Put the price change on the option, before anyone chooses.`,example:(0,L.jsx)(r,{label:`Delivery`,value:`standard`,options:Z,onChange:()=>{},size:`sm`})},dont:{text:`Hide the fee until the total; it feels like a trap.`,example:(0,L.jsx)(r,{label:`Delivery`,value:`standard`,options:[{value:`standard`,label:`Standard`},{value:`express`,label:`Express`}],onChange:()=>{},size:`sm`})}}),(0,L.jsx)(b,{number:4,title:`Name the group`,do:{text:`A visible label says what the choice is about.`,example:(0,L.jsxs)(`span`,{className:`segmented-example`,children:[(0,L.jsx)(`span`,{className:`segmented-example__label`,children:`Billing`}),(0,L.jsx)(r,{label:`Billing`,value:`annual`,options:X,onChange:()=>{},size:`sm`})]})},dont:{text:`A bare control makes people guess what they are choosing.`,example:(0,L.jsx)(r,{label:`Billing`,value:`annual`,options:X,onChange:()=>{},size:`sm`})}}),(0,L.jsx)(S,{keys:s.keys??[]})]})}),(0,L.jsx)(f,{title:`Tokens`,children:(0,L.jsxs)(`div`,{className:`kit-stack`,children:[(0,L.jsx)(v,{tokens:s.tokens??[]}),(0,L.jsx)(w,{tokens:[...s.tokens??[],`--z-color-wash`,`--z-color-surface`,`--z-color-blue-action`,`--z-press-scale`,`--z-radius-media`]})]})})]})})]})}export{fe as default};