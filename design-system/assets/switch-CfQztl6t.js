import{an as e,gt as t,kn as n,m as r,p as i,wt as a}from"./route-DiUIWQAn.js";import{t as o}from"./tokens--8wjVqaD.js";import{p as s}from"./docs-C3rBO14N.js";import{A as c,O as l,_ as u,a as d,c as f,f as p,g as m,h,i as g,k as _,l as ee,m as v,n as y,o as b,r as te,s as x,t as ne,v as S}from"./kit-CylDtrmy.js";import{t as re}from"./usePress-jGC2oW5J.js";import{t as ie}from"./switch-BK8Px5yq.js";var C=n(),w={variant:`pill`,size:`md`,tone:`accent`,state:`rest`,hold:!1},ae=1200,T={pill:{label:`Save card for future purchases`,name:`Card saving`,component:`SaveCardSwitch`,done:{on:`Card saved for the next checkout.`,off:`Card will not be saved.`}},slim:{label:`Order updates by SMS`,name:`SMS updates`,component:`OrderUpdatesSwitch`,done:{on:`You will get a text when it ships.`,off:`No texts. Updates stay in the app.`}},icon:{label:`Auto-renew coverage`,name:`Auto-renew`,component:`AutoRenewSwitch`,done:{on:`Coverage renews on 12 Mar.`,off:`Coverage ends on 12 Mar.`}},tile:{label:`Shipping protection +$0.99`,name:`Shipping protection`,description:`Covers loss and damage for 90 days.`,icon:`shield-check`,component:`ShippingProtectionSwitch`,done:{on:`Protected. $0.99 added to the total.`,off:`Not protected. $0.99 removed.`}}},oe=(e,t)=>`${e.name} ${t?`on`:`off`}.`,se=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Switch } from '@zijie/ui';
`,E=(e,t)=>`${e}="${t}"`;function D(e){let t=[];return e.description&&t.push(E(`description`,e.description)),e.variant&&e.variant!==`pill`&&t.push(E(`variant`,e.variant)),e.size&&e.size!==`md`&&t.push(E(`size`,e.size)),e.tone&&e.tone!==`accent`&&t.push(E(`tone`,e.tone)),e.icon&&t.push(E(`icon`,e.icon)),e.labelPlacement&&e.labelPlacement!==(e.variant===`tile`?`start`:`end`)&&t.push(E(`labelPlacement`,e.labelPlacement)),e.hold&&t.push(`hold={600}`),e.pending&&t.push(`pending`),e.error&&t.push(E(`error`,e.error)),e.disabled&&t.push(`disabled`),e.drag===!1&&t.push(`drag={false}`),t}var O=(e,t)=>e?[`${t}onChange={async next => {`,`${t}  await save(next);`,`${t}  setOn(next);`,`${t}}}`]:[`${t}onChange={setOn}`];function k(e){return`${[`<Switch`,`  label="${e.label}"`,`  checked={on}`,...O(e.async,`  `),...D(e).map(e=>`  ${e}`),`/>`].join(`
`)}\n`}function ce(e){let t=T[e.variant],n=e.state===`saving`||e.state===`fails`,r=D({description:t.description,variant:e.variant,size:e.size,tone:e.tone,icon:t.icon,hold:e.hold,disabled:e.state===`disabled`}),i=[`    <Switch`,`      label="${t.label}"`,`      checked={on}`,...O(n,`      `),...r.map(e=>`      ${e}`),`    />`],a=e.state===`saving`?["  // The thumb moves at once and holds while the promise runs. Commit `on` when it resolves."]:e.state===`fails`?["  // If save rejects the thumb rolls back to `on` and the switch says why:",'  // "Couldn’t save. Try again." Pass `error` to say it yourself.']:e.hold?[`  // Hold 600ms to switch; letting go early says "Hold to switch".`]:[];return[`import { useState } from 'react';`,`import { Switch } from '@zijie/ui';`,``,n?`export function ${t.component}({ save }: { save: (value: boolean) => Promise<void> }) {`:`export function ${t.component}() {`,...a,`  const [on, setOn] = useState(false);`,`  return (`,...i,`  );`,`}`,``].join(`
`)}function A(){let e=(0,C.useRef)(new Set),t=(0,C.useCallback)(()=>{for(let t of[...e.current])window.clearTimeout(t.timer),t.stop();e.current.clear()},[]);return(0,C.useEffect)(()=>t,[t]),{save:(0,C.useCallback)((t=`success`,n=ae)=>new Promise((r,i)=>{let a={timer:0,stop:()=>r(!1)};a.timer=window.setTimeout(()=>{e.current.delete(a),t===`success`?r(!0):i(Error(`Simulated failure`))},n),e.current.add(a)}),[]),cancel:t}}var j=e(),M=5e3;function N({status:e,saving:t=!1,children:n}){return(0,j.jsxs)(`div`,{className:`switch-live`,children:[n,(0,j.jsxs)(`p`,{className:`switch-live__status`,children:[(0,j.jsx)(`span`,{role:`status`,children:e}),t&&(0,j.jsx)(`span`,{className:`switch-live__saving`,"aria-hidden":`true`,children:`Saving…`})]})]})}function P({active:e}){let[t,n]=(0,C.useState)(!0);return(0,C.useEffect)(()=>{e||n(!0)},[e]),(0,j.jsx)(N,{status:`Email receipts ${t?`on`:`off`}.`,children:(0,j.jsx)(i,{label:`Email receipts`,checked:t,onChange:n})})}function F({active:e}){let{save:t,cancel:n}=A(),[r,a]=(0,C.useState)(!1),[o,s]=(0,C.useState)(!1),[c,l]=(0,C.useState)(`Changes land after a short save.`);return(0,C.useEffect)(()=>{e||(n(),a(!1),s(!1),l(`Changes land after a short save.`))},[e,n]),(0,j.jsx)(N,{status:c,saving:o,children:(0,j.jsx)(i,{label:`Save card for future purchases`,checked:r,onChange:async e=>{s(!0),l(``);try{await t()&&(a(e),l(e?`Card saved for the next checkout.`:`Card will not be saved.`))}finally{s(!1)}}})})}function I({active:e}){let{save:t,cancel:n}=A(),r=(0,C.useRef)(0),[a,o]=(0,C.useState)(!1),[s,c]=(0,C.useState)(!1),[l,u]=(0,C.useState)(`The first save fails. Try again.`);return(0,C.useEffect)(()=>{e||(n(),r.current=0,o(!1),c(!1),u(`The first save fails. Try again.`))},[e,n]),(0,j.jsx)(N,{status:l,saving:s,children:(0,j.jsx)(i,{label:`Auto-pay premium`,checked:a,onChange:async e=>{r.current+=1,c(!0),u(``);try{await t(r.current%2==1?`error`:`success`)&&(o(e),u(e?`Auto-pay on. The next premium is paid for you.`:`Auto-pay off.`))}catch(e){throw u(`Still ${a?`on`:`off`}. Nothing was changed.`),e}finally{c(!1)}}})})}function L({active:e}){let[t,n]=(0,C.useState)(!1);return(0,C.useEffect)(()=>{e||n(!1)},[e]),(0,j.jsx)(N,{status:t?`Card frozen. Payments are blocked.`:`Hold to freeze. Payments stop at once.`,children:(0,j.jsx)(i,{label:`Freeze card`,tone:`danger`,hold:600,checked:t,onChange:n})})}function R({active:e}){let[t,n]=(0,C.useState)(!0),[r,a]=(0,C.useState)(!1);return(0,C.useEffect)(()=>{e||(n(!0),a(!1))},[e]),(0,j.jsx)(N,{status:r?`Round up ${t?`on`:`off`}.`:`Drag the thumb, or tap.`,children:(0,j.jsx)(i,{label:`Round up purchases`,checked:t,onChange:e=>{n(e),a(!0)}})})}function z({active:e}){let[n,r]=(0,C.useState)(!0),[a,o]=(0,C.useState)(!1),s=(0,C.useRef)(0),c=(0,C.useRef)(null),l=(0,C.useCallback)(()=>{window.clearTimeout(s.current),o(!1)},[]);return(0,C.useEffect)(()=>{e||(l(),r(!0))},[e,l]),(0,C.useEffect)(()=>()=>window.clearTimeout(s.current),[]),(0,j.jsx)(N,{status:(0,j.jsxs)(j.Fragment,{children:[`Gift wrap ${n?`on`:`off`}.`,a&&(0,j.jsxs)(j.Fragment,{children:[` `,(0,j.jsx)(t,{variant:`ghost`,size:`sm`,roll:!1,onClick:()=>{l(),r(e=>!e),c.current?.querySelector(`[role="switch"]`)?.focus({preventScroll:!0})},children:`Undo`})]})]}),children:(0,j.jsx)(`span`,{ref:c,children:(0,j.jsx)(i,{label:`Gift wrap all items`,checked:n,onChange:e=>{r(e),o(!0),window.clearTimeout(s.current),s.current=window.setTimeout(()=>o(!1),M)}})})})}var B=[{title:`Immediate`,note:`Nothing to confirm. It changes on release.`,code:k({label:`Email receipts`}),render:e=>(0,j.jsx)(P,{active:e})},{title:`Saving`,note:`The thumb holds its new side, keeps focus and pulses until the save lands.`,code:k({label:`Save card for future purchases`,async:!0}),render:e=>(0,j.jsx)(F,{active:e})},{title:`Rolls back`,note:`A failed save returns the thumb and says why. Try twice.`,code:k({label:`Auto-pay premium`,async:!0}),render:e=>(0,j.jsx)(I,{active:e})},{title:`Hold`,note:`For a setting that should not flip by accident. The track fills.`,code:k({label:`Freeze card`,tone:`danger`,hold:!0}),render:e=>(0,j.jsx)(L,{active:e})},{title:`Drag`,note:`The thumb follows the pointer and settles on the nearer side. Esc takes it back.`,code:k({label:`Round up purchases`}),render:e=>(0,j.jsx)(R,{active:e})},{title:`Undo`,note:`Five seconds to take it back, with focus returned to the switch.`,code:k({label:`Gift wrap all items`}),render:e=>(0,j.jsx)(z,{active:e})}];function V(){let e=(0,C.useRef)(null),t=m(e,{page:`switch`});return(0,j.jsx)(`div`,{ref:e,"data-playback":t?`running`:`paused`,children:(0,j.jsx)(x,{columns:3,children:B.map(e=>(0,j.jsx)(b,{title:e.title,note:e.note,interactive:!0,inspect:{code:e.code},children:e.render(t)},e.title))})})}var H={style:`currency`,currency:`USD`},U=e=>Math.round(e*100)/100,W=5e3;function G({active:e}){let{save:t,cancel:n}=A(),[r,o]=(0,C.useState)(!1),[s,c]=(0,C.useState)(!0),[l,d]=(0,C.useState)(``);(0,C.useEffect)(()=>{e||(n(),o(!1),c(!0),d(``))},[e,n]);let f=U(47.01+(s?.99:0));return(0,j.jsxs)(u,{title:`Checkout`,status:l,children:[(0,j.jsxs)(`div`,{className:`switch-scene__tiles`,children:[(0,j.jsx)(i,{variant:`tile`,icon:`credit-card`,label:`Save card for future purchases`,description:`Stored by your payment provider, never on this site.`,checked:r,onChange:async e=>{d(``),await t(`success`,900)&&(o(e),d(e?`Card saved for the next checkout.`:`Card will not be saved.`))}}),(0,j.jsx)(i,{variant:`tile`,icon:`shield-check`,label:`Shipping protection +$0.99`,description:`Covers loss and damage for 90 days.`,checked:s,onChange:e=>{c(e),d(e?`Shipping protection added. $0.99 on the total.`:`Shipping protection removed.`)}})]}),(0,j.jsxs)(`dl`,{className:`switch-scene__rows`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`dt`,{children:`Linen overshirt`}),(0,j.jsx)(`dd`,{children:`$42.00`})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`dt`,{children:`Standard shipping`}),(0,j.jsx)(`dd`,{children:`$5.01`})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`dt`,{children:`Shipping protection`}),(0,j.jsx)(`dd`,{children:(0,j.jsx)(a,{value:s?.99:0,format:H})})]}),(0,j.jsxs)(`div`,{className:`switch-scene__total`,children:[(0,j.jsx)(`dt`,{children:`Total`}),(0,j.jsx)(`dd`,{children:(0,j.jsx)(a,{value:f,format:H})})]})]})]})}function K({active:e}){let[n,r]=(0,C.useState)(!0),[o,s]=(0,C.useState)(!1),[c,l]=(0,C.useState)(!0),[d,f]=(0,C.useState)(!1),p=(0,C.useRef)(0),m=(0,C.useRef)(null),h=(0,C.useCallback)(()=>{window.clearTimeout(p.current),f(!1)},[]);(0,C.useEffect)(()=>{e||(h(),r(!0),s(!1),l(!0))},[e,h]),(0,C.useEffect)(()=>()=>window.clearTimeout(p.current),[]);let g=U(7+(o?2:0)+(c?1.5:0));return(0,j.jsxs)(u,{title:`Phone coverage`,status:(0,j.jsx)(`span`,{className:`switch-scene__undo`,children:d?(0,j.jsxs)(j.Fragment,{children:[`Coverage ends on 12 Mar. `,(0,j.jsx)(t,{variant:`ghost`,size:`sm`,roll:!1,onClick:()=>{h(),r(!0),m.current?.querySelector(`[role="switch"]`)?.focus({preventScroll:!0})},children:`Undo`})]}):``}),children:[(0,j.jsx)(`p`,{className:`switch-scene__note`,children:`Covers drops, spills and theft, up to $1,200.`}),(0,j.jsxs)(`ul`,{ref:m,className:`switch-list`,role:`list`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(i,{className:`switch-row`,label:`Auto-renew coverage`,description:n?`Renews on 12 Mar. Cancel anytime.`:`Ends on 12 Mar.`,labelPlacement:`start`,checked:n,onChange:e=>{r(e),window.clearTimeout(p.current),f(!e),e||(p.current=window.setTimeout(()=>f(!1),W))}})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(i,{className:`switch-row`,label:`Roadside assistance`,description:`+$2.00 a month`,labelPlacement:`start`,checked:o,onChange:s})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(i,{className:`switch-row`,label:`Theft and loss`,description:`+$1.50 a month`,labelPlacement:`start`,checked:c,onChange:l})})]}),(0,j.jsxs)(`dl`,{className:`switch-scene__rows`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`dt`,{children:`Next payment`}),(0,j.jsx)(`dd`,{children:n?`12 Mar`:`None`})]}),(0,j.jsxs)(`div`,{className:`switch-scene__total`,children:[(0,j.jsx)(`dt`,{children:`Per month`}),(0,j.jsx)(`dd`,{children:(0,j.jsx)(a,{value:g,format:H})})]})]})]})}function le(){let e=(0,C.useRef)(null),t=m(e,{page:`switch`});return(0,j.jsx)(`div`,{ref:e,"data-playback":t?`running`:`paused`,children:(0,j.jsxs)(S,{children:[(0,j.jsx)(G,{active:t}),(0,j.jsx)(K,{active:t})]})})}var q=()=>{},J=`Save card for future purchases`,ue=[{title:`Off`,note:`A grey track that stays visible on white and on grey.`,checked:!1,code:{label:J}},{title:`On`,note:`The fill arrives with the thumb. The label never changes.`,checked:!0,code:{label:J}},{title:`Hover`,note:`The track deepens a little. Fine pointers only.`,preview:`hover`,checked:!1,code:{label:J}},{title:`Focus`,note:`A blue ring around the whole row, so the target is clear.`,preview:`focus`,checked:!0,code:{label:J}},{title:`Pressed`,note:`The thumb squashes toward the side it rests on.`,preview:`pressed`,checked:!1,code:{label:J}},{title:`Pending`,note:`The new side shows. The thumb pulses and focus stays put.`,checked:!0,props:{pending:!0},code:{label:J,pending:!0}},{title:`Rolled back`,note:`A failed save returns the thumb and says why.`,checked:!1,props:{error:r.failed},code:{label:J,error:r.failed}},{title:`Disabled`,note:`Unavailable and out of the tab order. Say why nearby.`,checked:!1,props:{disabled:!0},code:{label:J,disabled:!0}},{title:`Disabled on`,note:`The value stays readable.`,checked:!0,props:{disabled:!0},code:{label:J,disabled:!0}}];function Y({kind:e,children:t}){return(0,j.jsx)(`div`,{className:e?`switch-preview switch-preview--${e}`:`switch-preview`,children:t})}function de(){return(0,j.jsx)(x,{columns:3,children:ue.map(e=>(0,j.jsx)(b,{title:e.title,note:e.note,inspect:{code:k(e.code)},children:(0,j.jsx)(Y,{kind:e.preview,children:(0,j.jsx)(i,{label:J,checked:e.checked,onChange:q,...e.props})})},e.title))})}function fe(){return(0,j.jsxs)(x,{columns:3,children:[(0,j.jsx)(b,{title:`Pill`,note:`The default. One thumb, one spring.`,inspect:{code:k({label:`Save card for future purchases`})},children:(0,j.jsx)(Y,{children:(0,j.jsx)(i,{label:`Save card for future purchases`,checked:!0,onChange:q})})}),(0,j.jsx)(b,{title:`Slim`,note:`A thin rail and a thumb that overhangs it.`,inspect:{code:k({label:`Order updates by SMS`,variant:`slim`})},children:(0,j.jsx)(Y,{children:(0,j.jsx)(i,{label:`Order updates by SMS`,variant:`slim`,checked:!0,onChange:q})})}),(0,j.jsx)(b,{title:`Icon`,note:`A check and a cross, so state never rests on color.`,inspect:{code:k({label:`Auto-renew coverage`,variant:`icon`})},children:(0,j.jsx)(Y,{children:(0,j.jsx)(i,{label:`Auto-renew coverage`,variant:`icon`,checked:!0,onChange:q})})}),(0,j.jsx)(b,{title:`Tile`,note:`A settings row. The wash and the ring arrive with the thumb.`,span:2,inspect:{code:k({label:`Shipping protection +$0.99`,description:`Covers loss and damage for 90 days.`,variant:`tile`,icon:`shield-check`})},children:(0,j.jsx)(`div`,{className:`switch-wide`,children:(0,j.jsx)(i,{label:`Shipping protection +$0.99`,description:`Covers loss and damage for 90 days.`,variant:`tile`,icon:`shield-check`,checked:!0,onChange:q})})}),(0,j.jsx)(b,{title:`Label first`,note:`The switch sits at the row's end, like a settings list.`,inspect:{code:k({label:`Order updates by SMS`,labelPlacement:`start`})},children:(0,j.jsx)(`div`,{className:`switch-wide`,children:(0,j.jsx)(i,{className:`switch-row`,label:`Order updates by SMS`,labelPlacement:`start`,checked:!1,onChange:q})})}),(0,j.jsx)(b,{title:`Sizes`,note:`Small, medium and large. Every one stays easy to hit.`,inspect:{code:k({label:`Gift receipt`,size:`lg`})},children:(0,j.jsxs)(`div`,{className:`switch-stack`,children:[(0,j.jsx)(i,{label:`Small`,size:`sm`,checked:!0,onChange:q}),(0,j.jsx)(i,{label:`Medium`,checked:!0,onChange:q}),(0,j.jsx)(i,{label:`Large`,size:`lg`,checked:!0,onChange:q})]})}),(0,j.jsx)(b,{title:`Tones`,note:`Only the on fill changes. Red is for what exposes or removes.`,inspect:{code:k({label:`Public wishlist`,tone:`danger`})},children:(0,j.jsxs)(`div`,{className:`switch-stack`,children:[(0,j.jsx)(i,{label:`Save card`,checked:!0,onChange:q}),(0,j.jsx)(i,{label:`Gift receipt`,tone:`neutral`,checked:!0,onChange:q}),(0,j.jsx)(i,{label:`Public wishlist`,tone:`danger`,checked:!0,onChange:q})]})}),(0,j.jsx)(b,{title:`Long label`,note:`The text wraps; the switch stays put.`,inspect:{code:k({label:`Email me a receipt and a delivery update for every order I place`})},children:(0,j.jsx)(`div`,{className:`switch-wide`,children:(0,j.jsx)(i,{label:`Email me a receipt and a delivery update for every order I place`,checked:!1,onChange:q})})})]})}var pe=[{name:`Switch.tsx`,code:`import {
  useCallback, useEffect, useId, useRef, useState,
  type CSSProperties, type KeyboardEvent, type MouseEvent, type PointerEvent, type ReactNode,
} from 'react';
import { Icon, type IconName } from '../Icon';
import { usePress } from '../../motion/usePress';
import { dragProgress, dragSettles, invokeChange, isDragGesture, isToggleKey, switchTravel } from './switchModel';

export type SwitchVariant = 'pill' | 'slim' | 'tile' | 'icon';
export type SwitchSize = 'sm' | 'md' | 'lg';
/** Only the on-state fill changes with tone. */
export type SwitchTone = 'accent' | 'neutral' | 'danger';

export interface SwitchLabels {
  /** Announced (not shown) while a change is saving. */
  saving: string;
  /** Shown under the switch when a change fails and the thumb rolls back. */
  failed: string;
  /** Shown after a hold is let go too early. */
  holdHint: string;
  /** Announced while a hold is in progress. */
  holding: string;
}

export const switchLabels: Readonly<SwitchLabels> = Object.freeze({
  saving: 'Saving…',
  failed: 'Couldn’t save. Try again.',
  holdHint: 'Hold to switch',
  holding: 'Keep holding…',
});

export interface SwitchProps {
  /** Names the setting, never the action: "Shipping protection", not "Turn on shipping protection". */
  label: string;
  /** A second line under the label. Wired to the switch as its description. */
  description?: ReactNode;
  checked: boolean;
  /**
   * Called once per change with the new value. May return a promise: the thumb moves at once and
   * holds there while it settles; if it rejects (or throws), the thumb rolls back to \`checked\` and
   * the switch says why. Commit \`checked\` when the promise resolves.
   */
  onChange: (value: boolean) => void | Promise<unknown>;
  disabled?: boolean;
  /** A save is in flight (yours). Reported with aria-busy; focus stays and input is ignored. */
  pending?: boolean;
  /** A failure you are handling yourself: shown under the switch, in the danger colour. Roll \`checked\` back too. */
  error?: ReactNode;
  variant?: SwitchVariant;
  size?: SwitchSize;
  tone?: SwitchTone;
  /** Where the label sits: after the switch (default; tiles default to before it). */
  labelPlacement?: 'start' | 'end';
  /** Tile only: a duotone icon before the text. It lights when the switch is on. */
  icon?: IconName;
  /** Drag the thumb with a pointer; it settles on the nearer side. On by default, off while \`hold\` is set. */
  drag?: boolean;
  /** Milliseconds the press must be held to change it, for settings that should not flip by accident. */
  hold?: number;
  /** English defaults; pass any to translate. */
  labels?: Partial<SwitchLabels>;
  /** A rejected change: what it rejected with. */
  onError?: (error: unknown) => void;
  id?: string;
  className?: string;
}

interface Drag {
  pointerId: number;
  x: number;
  startOn: boolean;
  travel: number;
  rtl: boolean;
  moved: boolean;
  cancelled: boolean;
}

type Notice = { kind: 'failed' | 'hint'; text: string } | null;
/** \`saving\` and \`holding\` are announced only; \`failed\` and \`hint\` are shown. */
type Message = { kind: 'saving' | 'holding' | 'failed' | 'hint'; text: ReactNode } | null;

const glyphSize: Record<SwitchSize, number> = { sm: 12, md: 14, lg: 16 };
const HINT_MS = 2000;

/**
 * A setting that changes the moment you choose. One button (\`role="switch"\`), many bodies: the thumb
 * travels on the control spring; a press squashes it, a drag carries it (and Esc takes it back); a
 * pending change holds the new position, keeps focus and pulses the thumb. Space and Enter toggle.
 * Reduced motion removes the travel, the squash and the pulse: the fill and the glyph still say which side.
 */
export function Switch({
  label, description, checked, onChange, disabled = false, pending = false, error, variant = 'pill', size = 'md', tone = 'accent',
  labelPlacement, icon, drag = true, hold, labels, onError, id, className,
}: SwitchProps) {
  const uid = useId();
  const labelId = \`\${uid}-label\`;
  const descriptionId = \`\${uid}-description\`;
  const messageId = \`\${uid}-message\`;
  const root = useRef<HTMLSpanElement>(null);
  const track = useRef<HTMLSpanElement>(null);
  const thumb = useRef<HTMLSpanElement>(null);

  const text = { ...switchLabels, ...labels };
  const [optimistic, setOptimistic] = useState<boolean | null>(null);
  const [saving, setSaving] = useState(false);
  const [holding, setHolding] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);

  const shown = optimistic ?? checked;
  const busy = pending || saving;
  const locked = disabled || busy;
  const holdMs = hold && hold > 0 ? hold : 0;
  const draggable = drag && !holdMs;
  const placement = labelPlacement ?? (variant === 'tile' ? 'start' : 'end');
  const { pressed, pressProps } = usePress({ disabled: locked });

  // Imperative handlers (pointer gestures, timers, promises) read the latest render through this ref.
  const latest = useRef({ shown, locked, holdMs, draggable, onChange, onError, text });
  latest.current = { shown, locked, holdMs, draggable, onChange, onError, text };

  const mounted = useRef(true);
  const run = useRef(0);
  const noticeTimer = useRef(0);
  const suppressTimer = useRef(0);
  const suppressClick = useRef(false);
  const session = useRef<Drag | null>(null);
  const holdSession = useRef<{ timer: number; done: boolean } | null>(null);

  const say = useCallback((next: Notice, ms = 0) => {
    window.clearTimeout(noticeTimer.current);
    setNotice(next);
    if (next && ms) noticeTimer.current = window.setTimeout(() => setNotice(null), ms);
  }, []);

  const commit = useCallback((next: boolean) => {
    const now = latest.current;
    if (now.locked) return;
    say(null);
    const change = invokeChange(now.onChange, next);
    if (change.kind === 'sync') return;
    if (change.kind === 'failed') {
      say({ kind: 'failed', text: now.text.failed });
      now.onError?.(change.error);
      return;
    }
    const mine = ++run.current;
    setOptimistic(next);
    setSaving(true);
    void change.settled.then(result => {
      if (!mounted.current || mine !== run.current) return;
      setSaving(false);
      setOptimistic(null);
      if (!result.ok) {
        say({ kind: 'failed', text: latest.current.text.failed });
        latest.current.onError?.(result.error);
      }
    });
  }, [say]);

  /* ---------- Drag ---------- */

  const clearDrag = useCallback(() => {
    const node = root.current;
    if (!node) return;
    node.style.removeProperty('--z-switch-p');
    delete node.dataset.dragging;
  }, []);

  // Esc takes the thumb back. It is listened for only while a drag is under way.
  const onEscape = useCallback((event: globalThis.KeyboardEvent) => {
    const current = session.current;
    if (event.key !== 'Escape' || !current?.moved || current.cancelled) return;
    event.preventDefault();
    event.stopPropagation();
    current.cancelled = true;
    clearDrag();
  }, [clearDrag]);

  const endDrag = useCallback((releaseAt: number | null) => {
    const current = session.current;
    if (!current) return;
    session.current = null;
    window.removeEventListener('keydown', onEscape, true);
    try { track.current?.releasePointerCapture(current.pointerId); } catch { /* already released */ }
    if (!current.moved) return;
    clearDrag();
    // The click that follows a drag belongs to the drag, not to a second toggle.
    suppressClick.current = true;
    window.clearTimeout(suppressTimer.current);
    suppressTimer.current = window.setTimeout(() => { suppressClick.current = false; }, 80);
    if (releaseAt === null || current.cancelled) return;
    const next = dragSettles(dragProgress(current.startOn, releaseAt - current.x, current.travel, current.rtl), current.startOn);
    if (next !== current.startOn) commit(next);
  }, [clearDrag, commit, onEscape]);

  const onTrackDown = (event: PointerEvent<HTMLSpanElement>) => {
    const now = latest.current;
    const node = track.current;
    const knob = thumb.current;
    if (!now.draggable || now.locked || event.button !== 0 || !event.isPrimary || !node || !knob) return;
    const style = getComputedStyle(node);
    const inset = Number.parseFloat(style.getPropertyValue('--z-switch-inset')) || 0;
    session.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      startOn: now.shown,
      travel: switchTravel(node.offsetWidth, knob.offsetWidth, inset),
      rtl: style.direction === 'rtl',
      moved: false,
      cancelled: false,
    };
  };

  const onTrackMove = (event: PointerEvent<HTMLSpanElement>) => {
    const current = session.current;
    const node = root.current;
    if (!current || !node || current.pointerId !== event.pointerId || current.cancelled) return;
    const dx = event.clientX - current.x;
    if (!current.moved) {
      if (!isDragGesture(dx)) return;
      current.moved = true;
      try { track.current?.setPointerCapture(event.pointerId); } catch { /* the pointer is gone */ }
      node.dataset.dragging = '';
      window.addEventListener('keydown', onEscape, true);
    }
    node.style.setProperty('--z-switch-p', dragProgress(current.startOn, dx, current.travel, current.rtl).toFixed(3));
  };

  const onTrackUp = (event: PointerEvent<HTMLSpanElement>) => {
    if (session.current?.pointerId === event.pointerId) endDrag(event.clientX);
  };

  const onTrackCancel = (event: PointerEvent<HTMLSpanElement>) => {
    if (session.current?.pointerId === event.pointerId) endDrag(null);
  };

  /* ---------- Hold ---------- */

  const endHold = useCallback(() => {
    const current = holdSession.current;
    if (!current) return;
    window.clearTimeout(current.timer);
    holdSession.current = null;
    setHolding(false);
    if (!current.done) say({ kind: 'hint', text: latest.current.text.holdHint }, HINT_MS);
  }, [say]);

  const beginHold = useCallback(() => {
    const now = latest.current;
    if (!now.holdMs || now.locked || holdSession.current) return;
    say(null);
    const current = { timer: 0, done: false };
    current.timer = window.setTimeout(() => {
      current.done = true;
      setHolding(false);
      commit(!latest.current.shown);
    }, now.holdMs);
    holdSession.current = current;
    setHolding(true);
  }, [commit, say]);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      window.clearTimeout(noticeTimer.current);
      window.clearTimeout(suppressTimer.current);
      window.clearTimeout(holdSession.current?.timer);
      holdSession.current = null;
      session.current = null;
      window.removeEventListener('keydown', onEscape, true);
    };
  }, [onEscape]);

  // A hold that is still counting when the switch locks (or the prop is dropped) must not fire.
  const cancelHold = useCallback(() => {
    const current = holdSession.current;
    if (!current || current.done) return;
    window.clearTimeout(current.timer);
    holdSession.current = null;
    setHolding(false);
  }, []);
  useEffect(() => { if (locked || !holdMs) cancelHold(); }, [locked, holdMs, cancelHold]);

  /* ---------- Button ---------- */

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (suppressClick.current) { suppressClick.current = false; event.preventDefault(); return; }
    // A held switch never changes on a tap or a stray click.
    if (latest.current.holdMs) { event.preventDefault(); return; }
    commit(!latest.current.shown);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    pressProps.onKeyDown(event);
    if (event.key === 'Escape') { endHold(); return; }
    if (!isToggleKey(event.key)) return;
    // Holding Enter must not flip the setting back and forth.
    if (event.repeat) { event.preventDefault(); return; }
    if (latest.current.holdMs) { event.preventDefault(); beginHold(); }
  };

  const onKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    pressProps.onKeyUp(event);
    if (latest.current.holdMs && isToggleKey(event.key)) { event.preventDefault(); endHold(); }
  };

  const message: Message = holding
    ? { kind: 'holding', text: text.holding }
    : busy
      ? { kind: 'saving', text: text.saving }
      : error
        ? { kind: 'failed', text: error }
        : notice;
  const visible = message?.kind === 'failed' || message?.kind === 'hint';
  const describedBy = [description ? descriptionId : '', visible ? messageId : ''].filter(Boolean).join(' ') || undefined;

  const trackNode = (
    <span
      ref={track}
      className="z-switch__track"
      aria-hidden="true"
      onPointerDown={onTrackDown}
      onPointerMove={onTrackMove}
      onPointerUp={onTrackUp}
      onPointerCancel={onTrackCancel}
    >
      <span className="z-switch__rail">
        <span className="z-switch__fill" />
        {holdMs > 0 && <span className="z-switch__hold" style={{ '--z-switch-hold': \`\${holdMs}ms\` } as CSSProperties} />}
      </span>
      <span ref={thumb} className="z-switch__thumb">
        <span className="z-switch__knob" />
        {variant === 'icon' && (
          <>
            <span className="z-switch__glyph z-switch__glyph--off"><Icon name="x" size={glyphSize[size]} /></span>
            <span className="z-switch__glyph z-switch__glyph--on"><Icon name="check" size={glyphSize[size]} /></span>
          </>
        )}
      </span>
    </span>
  );

  const textNode = (
    <span className="z-switch__text">
      <span id={labelId} className="z-switch__label">{label}</span>
      {description ? <span id={descriptionId} className="z-switch__description">{description}</span> : null}
    </span>
  );

  const iconNode = variant === 'tile' && icon
    ? <span className="z-switch__icon" aria-hidden="true"><Icon name={icon} size={24} weight="duotone" tone="current" /></span>
    : null;

  return (
    <span
      ref={root}
      className={\`z-switch z-switch--\${variant} z-switch--\${size} z-switch--\${tone}\${className ? \` \${className}\` : ''}\`}
      data-on={shown || undefined}
      data-pending={busy || undefined}
      data-disabled={disabled || undefined}
      data-pressed={pressed || undefined}
      data-holding={holding || undefined}
      data-drag={draggable || undefined}
      data-placement={placement}
    >
      <button
        type="button"
        role="switch"
        id={id}
        className="z-switch__control"
        aria-checked={shown}
        aria-labelledby={labelId}
        aria-describedby={describedBy}
        aria-busy={busy || undefined}
        aria-disabled={busy && !disabled ? true : undefined}
        disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onPointerDown={event => { pressProps.onPointerDown(event); if (latest.current.holdMs && event.button === 0) beginHold(); }}
        onPointerUp={() => { pressProps.onPointerUp(); endHold(); }}
        onPointerLeave={() => { pressProps.onPointerLeave(); endHold(); }}
        onPointerCancel={() => { pressProps.onPointerCancel(); endHold(); }}
        onBlur={() => { pressProps.onBlur(); endHold(); }}
      >
        {placement === 'start' ? <>{iconNode}{textNode}{trackNode}</> : <>{trackNode}{iconNode}{textNode}</>}
      </button>
      <span id={messageId} className="z-switch__message" role="status" data-kind={message?.kind}>
        {message ? (
          <span key={typeof message.text === 'string' ? \`\${message.kind}:\${message.text}\` : message.kind} className={visible ? 'z-switch__note' : 'z-switch__note z-sr-only'}>{message.text}</span>
        ) : null}
      </span>
    </span>
  );
}
`},{name:`switch.css`,code:ie},{name:`switchModel.ts`,code:`/* Pure model for Switch: drag geometry, the settle rule, hold progress and how a change that may be
   asynchronous is run. No DOM and no React, so Node tests cover every rule the component leans on. */

/** Pixels the pointer must travel before a press becomes a drag. Below it, the press is a plain tap. */
export const DRAG_SLOP = 4;

const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));

/**
 * How far the thumb can move: the track, minus the thumb, minus the gap on both sides. \`inset\` may be
 * zero (slim) or negative (a thumb that overhangs). Never below 0.
 */
export function switchTravel(trackWidth: number, thumbWidth: number, inset: number): number {
  return Math.max(0, trackWidth - thumbWidth - 2 * inset);
}

/** True once a pointer has moved far enough to count as a drag (the slop itself is still a tap). */
export function isDragGesture(dx: number, slop = DRAG_SLOP): boolean {
  return Math.abs(dx) > slop;
}

/**
 * Where the thumb is while dragging, from 0 (off side) to 1 (on side). The thumb starts where the
 * switch rests and follows the pointer by \`dx\`; right-to-left text mirrors the direction.
 */
export function dragProgress(startOn: boolean, dx: number, travel: number, rtl = false): number {
  if (!(travel > 0)) return startOn ? 1 : 0;
  const start = startOn ? travel : 0;
  return clamp((start + (rtl ? -dx : dx)) / travel, 0, 1);
}

/**
 * The state a released thumb settles to: whichever side it is nearer. Exactly halfway keeps the
 * state it started from, so a drag that goes nowhere changes nothing.
 */
export function dragSettles(progress: number, startOn: boolean): boolean {
  if (progress === 0.5) return startOn;
  return progress > 0.5;
}

/** How much of a hold has elapsed, 0 to 1. A hold of 0 or less is already complete. */
export function holdProgress(elapsed: number, hold: number): number {
  if (!(hold > 0)) return 1;
  return clamp(elapsed / hold, 0, 1);
}

/** Space and Enter are the keys that toggle a switch (and start a hold). */
export const isToggleKey = (key: string) => key === ' ' || key === 'Spacebar' || key === 'Enter';

export type SwitchSettled = { ok: true } | { ok: false; error: unknown };

export type SwitchChange =
  /** The handler returned at once: the change is done. */
  | { kind: 'sync' }
  /** The handler threw. */
  | { kind: 'failed'; error: unknown }
  /** The handler returned a promise: hold the new position and wait. \`settled\` never rejects. */
  | { kind: 'async'; settled: Promise<SwitchSettled> };

export const isThenable = (value: unknown): value is PromiseLike<unknown> =>
  (typeof value === 'object' || typeof value === 'function') && value !== null && typeof (value as { then?: unknown }).then === 'function';

/**
 * Run a change handler that may be asynchronous. A thrown error and a rejected promise are both a
 * failure: the switch rolls back to what the caller last committed and says why.
 */
export function invokeChange(onChange: (next: boolean) => unknown, next: boolean): SwitchChange {
  let result: unknown;
  try {
    result = onChange(next);
  } catch (error) {
    return { kind: 'failed', error };
  }
  if (!isThenable(result)) return { kind: 'sync' };
  return {
    kind: 'async',
    settled: Promise.resolve(result).then<SwitchSettled, SwitchSettled>(() => ({ ok: true }), error => ({ ok: false, error })),
  };
}
`},{name:`usePress.ts`,code:re},{name:`tokens.css`,code:o}];function X({variant:e}){return(0,j.jsxs)(`svg`,{className:`switch-thumb switch-thumb--${e}`,viewBox:`0 0 40 24`,width:`40`,height:`24`,"aria-hidden":`true`,children:[e===`pill`&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`rect`,{className:`switch-thumb__track`,x:`4`,y:`5`,width:`32`,height:`14`,rx:`7`}),(0,j.jsx)(`circle`,{className:`switch-thumb__knob`,cx:`29`,cy:`12`,r:`5`})]}),e===`slim`&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`rect`,{className:`switch-thumb__rail`,x:`4`,y:`9.5`,width:`32`,height:`5`,rx:`2.5`}),(0,j.jsx)(`circle`,{className:`switch-thumb__knob switch-thumb__knob--ring`,cx:`28`,cy:`12`,r:`6.5`})]}),e===`icon`&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`rect`,{className:`switch-thumb__track`,x:`4`,y:`4`,width:`32`,height:`16`,rx:`8`}),(0,j.jsx)(`circle`,{className:`switch-thumb__knob`,cx:`28`,cy:`12`,r:`6`}),(0,j.jsx)(`path`,{className:`switch-thumb__check`,d:`m25.2 12.2 2 2 3.6-4`})]}),e===`tile`&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`rect`,{className:`switch-thumb__card`,x:`1`,y:`3`,width:`38`,height:`18`,rx:`6`}),(0,j.jsx)(`rect`,{className:`switch-thumb__line`,x:`6`,y:`8`,width:`14`,height:`2.4`,rx:`1.2`}),(0,j.jsx)(`rect`,{className:`switch-thumb__line switch-thumb__line--short`,x:`6`,y:`13`,width:`9`,height:`2.4`,rx:`1.2`}),(0,j.jsx)(`rect`,{className:`switch-thumb__track`,x:`25`,y:`8`,width:`10`,height:`8`,rx:`4`}),(0,j.jsx)(`circle`,{className:`switch-thumb__knob`,cx:`31`,cy:`12`,r:`2.8`})]})]})}var me=[{id:`pill`,label:`Pill`,description:`The default. One thumb on one spring.`,thumb:(0,j.jsx)(X,{variant:`pill`})},{id:`slim`,label:`Slim`,description:`A thin rail and a thumb that overhangs it. For dense lists.`,thumb:(0,j.jsx)(X,{variant:`slim`})},{id:`icon`,label:`Icon`,description:`A check and a cross trade places, so the state reads without color.`,thumb:(0,j.jsx)(X,{variant:`icon`})},{id:`tile`,label:`Tile`,description:`A whole settings row: the name, the reason and the switch.`,thumb:(0,j.jsx)(X,{variant:`tile`})}],he=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],ge=[{value:`accent`,label:`Accent`},{value:`neutral`,label:`Neutral`},{value:`danger`,label:`Danger`}],_e=[{value:`rest`,label:`Instant`},{value:`saving`,label:`Saving`},{value:`fails`,label:`Fails`},{value:`disabled`,label:`Disabled`}],ve=[{id:`off`,label:`Off`},{id:`saving`,label:`Saving`},{id:`on`,label:`On`},{id:`failed`,label:`Rolled back`}],Z={phase:`off`,status:`Press it, drag the thumb, or use Space.`},Q={pill:!1,slim:!1,icon:!0,tile:!1};function ye({demo:e,variant:t,active:n,onReport:r}){let a=T[t],{save:o,cancel:s}=A(),[c,l]=(0,C.useState)(Q),[u,d]=(0,C.useState)(`rest`),[f,p]=(0,C.useState)(!1),m=c[t],h=(0,C.useRef)(0),g=(0,C.useCallback)(()=>{h.current+=1,s(),l(Q),d(`rest`),p(!1)},[s]);(0,C.useEffect)(()=>{n||g()},[n,g]),(0,C.useEffect)(()=>{h.current+=1,s(),d(`rest`),p(!1)},[t,e.state,e.hold,s]);let _=e=>{l(n=>({...n,[t]:e})),p(!0),d(`rest`)};return(0,C.useEffect)(()=>{let t=m?`on`:`off`;u===`saving`?r({phase:`saving`,status:`Saving…`}):u===`failed`?r({phase:`failed`,status:`Could not save. The thumb rolled back.`}):e.state===`disabled`?r({phase:t,status:`Locked while the order is processing.`}):r(f?{phase:t,status:e.state===`rest`?oe(a,m):a.done[m?`on`:`off`]}:{phase:t,status:e.hold?`Press and hold. A tap is not enough for this setting.`:Z.status})},[u,m,f,e.state,e.hold,a,r]),(0,j.jsx)(`div`,{className:`switch-stage switch-stage--${t}`,children:(0,j.jsx)(i,{label:a.label,description:a.description,icon:a.icon,variant:t,size:e.size,tone:e.tone,checked:m,onChange:async t=>{if(e.state===`saving`||e.state===`fails`){let n=h.current;d(`saving`);try{if(!await o(e.state===`fails`?`error`:`success`)||n!==h.current)return;_(t)}catch(e){throw n===h.current&&d(`failed`),e}}else _(t)},disabled:e.state===`disabled`,hold:e.hold?600:void 0},`${t}-${e.state}-${e.hold}`)})}function be(){let[e,t]=(0,C.useState)(w),[n,r]=(0,C.useState)(Z),i=e=>n=>t(t=>({...t,[e]:n})),a=T[e.variant];return(0,j.jsx)(h,{page:`switch`,name:`Switch`,variants:me,variant:e.variant,onVariantChange:i(`variant`),status:n.status,simulated:e.state===`saving`||e.state===`fails`,trail:(0,j.jsx)(d,{states:ve,active:n.phase,label:`Switch states`}),code:{setup:se,usage:ce(e),usageFile:`${a.component}.tsx`,sources:pe},controls:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p,{label:`Size`,value:e.size,options:he,onChange:i(`size`)}),(0,j.jsx)(p,{label:`Tone`,value:e.tone,options:ge,onChange:i(`tone`)}),(0,j.jsx)(p,{label:`State`,value:e.state,options:_e,onChange:i(`state`)}),(0,j.jsx)(v,{label:`Hold to switch`,checked:e.hold,onChange:i(`hold`)})]}),children:({variant:t,active:n})=>(0,j.jsx)(ye,{demo:e,variant:t,active:n,onReport:r})})}var $=()=>{};function xe(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{id:`switch`}),(0,j.jsx)(be,{}),(0,j.jsx)(l,{title:`One setting. One immediate answer.`,lead:`A switch applies the moment it moves. It never waits for a Save button, and it never lies about what happened.`,reasons:[{title:`Named by the setting`,text:`The label says what is on, never the action, and it stays the same in both states. The whole row is the target.`},{title:`A thumb with weight`,text:`It travels on the brand spring, squashes under your finger and follows a drag. Let go and it settles on the nearer side.`},{title:`Honest while it saves`,text:`The new side shows at once. Saving keeps focus, pulses the thumb and ignores repeat input. A failure rolls back and says why.`}]}),(0,j.jsx)(_,{id:`states`,title:`States`,lead:`Every state a switch can be in. Hover, focus and press are the real control, held still. Inspect any of them for its code.`,children:(0,j.jsx)(de,{})}),(0,j.jsx)(_,{id:`forms`,title:`Forms and sizes`,lead:`Four forms for one state. Pick by where the setting lives: a form, a dense list, a row of marks or a settings board.`,children:(0,j.jsx)(fe,{})}),(0,j.jsx)(_,{id:`interaction`,title:`The change fits the risk`,lead:`Tap, wait for a save, hold, drag or take it back. The setting decides. Every switch here is live.`,children:(0,j.jsx)(V,{})}),(0,j.jsx)(_,{id:`in-context`,title:`In context`,lead:`Two add-ons at checkout and a coverage list. The total rolls as it changes, a save keeps its place, and turning coverage off can be undone.`,children:(0,j.jsx)(le,{})}),(0,j.jsx)(_,{id:`reference`,title:`Reference`,children:(0,j.jsxs)(`div`,{className:`kit-folds`,children:[(0,j.jsx)(f,{title:`Properties & states`,children:(0,j.jsx)(g,{props:s.props??[]})}),(0,j.jsx)(f,{title:`Usage & keyboard`,children:(0,j.jsxs)(`div`,{className:`kit-stack`,children:[(0,j.jsx)(y,{number:1,title:`Name the setting, not the action`,do:{text:`The label stays put when the state changes.`,example:(0,j.jsx)(i,{label:`Shipping protection`,checked:!0,onChange:$})},dont:{text:`A verb flips meaning with the state, so "on" reads as "off".`,example:(0,j.jsx)(i,{label:`Turn on shipping protection`,checked:!0,onChange:$})}}),(0,j.jsx)(y,{number:2,title:`A switch applies at once`,do:{text:`Use it for a setting that takes effect the moment it moves.`,example:(0,j.jsx)(i,{label:`Save card for future purchases`,checked:!0,onChange:$})},dont:{text:`A choice collected by a form and sent with Save is a checkbox.`,example:(0,j.jsxs)(`span`,{className:`switch-example`,children:[(0,j.jsx)(i,{label:`Subscribe to updates`,checked:!1,onChange:$}),(0,j.jsx)(t,{size:`sm`,children:`Save`})]})}}),(0,j.jsx)(y,{number:3,title:`Match the weight to the risk`,do:{text:`Ask for a hold when a change stops payments or exposes something.`,example:(0,j.jsx)(i,{label:`Freeze card`,tone:`danger`,hold:600,checked:!1,onChange:$})},dont:{text:`A hold on an everyday setting reads as broken.`,example:(0,j.jsx)(i,{label:`Email receipts`,hold:600,checked:!0,onChange:$})}}),(0,j.jsx)(y,{number:4,title:`Say why it is unavailable`,do:{text:`Name what unlocks it, right beside the switch.`,example:(0,j.jsxs)(`span`,{className:`switch-why`,children:[(0,j.jsx)(i,{label:`Auto-pay premium`,checked:!1,disabled:!0,onChange:$}),(0,j.jsx)(`span`,{className:`switch-why__note`,children:`Add a card to turn this on.`})]})},dont:{text:`Leave a dimmed switch with no reason; people tap it again.`,example:(0,j.jsx)(i,{label:`Auto-pay premium`,checked:!1,disabled:!0,onChange:$})}}),(0,j.jsx)(te,{keys:s.keys??[]})]})}),(0,j.jsx)(f,{title:`Tokens`,children:(0,j.jsxs)(`div`,{className:`kit-stack`,children:[(0,j.jsx)(ee,{tokens:s.tokens??[]}),(0,j.jsx)(ne,{tokens:[...s.tokens??[],`--z-color-surface`,`--z-color-danger`,`--z-color-ink`,`--z-motion-press`,`--z-motion-feedback`]})]})})]})})]})}export{xe as default};