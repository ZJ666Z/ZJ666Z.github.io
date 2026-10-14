import{Ft as e,Mt as t,Rn as n,gt as r,m as i,mn as a,p as o,wt as s}from"./route-D8V-RcHq.js";import{t as c}from"./tokens--8wjVqaD.js";import{p as l}from"./docs-CCM0Joka.js";import{A as u,O as d,_ as f,a as p,c as m,f as h,g,h as _,i as v,k as y,l as ee,m as te,n as b,o as x,r as S,s as C,t as ne,v as re}from"./kit-CGiBTmcs.js";import{t as ie}from"./usePress-jGC2oW5J.js";import{t as ae}from"./switch-BK8Px5yq.js";var w=n(),T={variant:`pill`,size:`md`,tone:`accent`,state:`rest`,hold:!1},E=1200,D={pill:{label:`Save card for future purchases`,name:`Card saving`,component:`SaveCardSwitch`,done:{on:`Card saved for the next checkout.`,off:`Card will not be saved.`}},slim:{label:`Order updates by SMS`,name:`SMS updates`,component:`OrderUpdatesSwitch`,done:{on:`You will get a text when it ships.`,off:`No texts. Updates stay in the app.`}},icon:{label:`Auto-renew coverage`,name:`Auto-renew`,component:`AutoRenewSwitch`,done:{on:`Coverage renews on 12 Mar.`,off:`Coverage ends on 12 Mar.`}},tile:{label:`Shipping protection +$0.99`,name:`Shipping protection`,description:`Covers loss and damage for 90 days.`,icon:`shield-check`,component:`ShippingProtectionSwitch`,done:{on:`Protected. $0.99 added to the total.`,off:`Not protected. $0.99 removed.`}}},oe=(e,t)=>`${e.name} ${t?`on`:`off`}.`,se=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Switch } from '@zijie/ui';
`,O=(e,t)=>`${e}="${t}"`;function k(e){let t=[];return e.description&&t.push(O(`description`,e.description)),e.variant&&e.variant!==`pill`&&t.push(O(`variant`,e.variant)),e.size&&e.size!==`md`&&t.push(O(`size`,e.size)),e.tone&&e.tone!==`accent`&&t.push(O(`tone`,e.tone)),e.icon&&t.push(O(`icon`,e.icon)),e.labelPlacement&&e.labelPlacement!==(e.variant===`tile`?`start`:`end`)&&t.push(O(`labelPlacement`,e.labelPlacement)),e.hold&&t.push(`hold={600}`),e.pending&&t.push(`pending`),e.error&&t.push(O(`error`,e.error)),e.disabled&&t.push(`disabled`),e.drag===!1&&t.push(`drag={false}`),t}var A=(e,t)=>e?[`${t}onChange={async next => {`,`${t}  await save(next);`,`${t}  setOn(next);`,`${t}}}`]:[`${t}onChange={setOn}`];function j(e){return`${[`<Switch`,`  label="${e.label}"`,`  checked={on}`,...A(e.async,`  `),...k(e).map(e=>`  ${e}`),`/>`].join(`
`)}\n`}function ce(e){let t=D[e.variant],n=e.state===`saving`||e.state===`fails`,r=k({description:t.description,variant:e.variant,size:e.size,tone:e.tone,icon:t.icon,hold:e.hold,disabled:e.state===`disabled`}),i=[`    <Switch`,`      label="${t.label}"`,`      checked={on}`,...A(n,`      `),...r.map(e=>`      ${e}`),`    />`],a=e.state===`saving`?["  // The thumb moves at once and holds while the promise runs. Commit `on` when it resolves."]:e.state===`fails`?["  // If save rejects the thumb rolls back to `on` and the switch says why:",'  // "Couldn’t save. Try again." Pass `error` to say it yourself.']:e.hold?[`  // Hold 600ms to switch; letting go early says "Hold to switch".`]:[];return[`import { useState } from 'react';`,`import { Switch } from '@zijie/ui';`,``,n?`export function ${t.component}({ save }: { save: (value: boolean) => Promise<void> }) {`:`export function ${t.component}() {`,...a,`  const [on, setOn] = useState(false);`,`  return (`,...i,`  );`,`}`,``].join(`
`)}function M(){let e=(0,w.useRef)(new Set),t=(0,w.useCallback)(()=>{for(let t of[...e.current])window.clearTimeout(t.timer),t.stop();e.current.clear()},[]);return(0,w.useEffect)(()=>t,[t]),{save:(0,w.useCallback)((t=`success`,n=E)=>new Promise((r,i)=>{let a={timer:0,stop:()=>r(!1)};a.timer=window.setTimeout(()=>{e.current.delete(a),t===`success`?r(!0):i(Error(`Simulated failure`))},n),e.current.add(a)}),[]),cancel:t}}var N=a(),P=5e3;function F({status:e,saving:n=!1,children:r}){return(0,N.jsxs)(`div`,{className:`switch-live`,children:[(0,N.jsx)(t,{en:r}),(0,N.jsxs)(`p`,{className:`switch-live__status`,children:[(0,N.jsx)(`span`,{role:`status`,children:(0,N.jsx)(t,{en:e})}),(0,N.jsx)(t,{en:n&&(0,N.jsx)(`span`,{className:`switch-live__saving`,"aria-hidden":`true`,children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Saving…`})})})})]})]})}function I({active:t}){let n=e(),[r,i]=(0,w.useState)(!0);return(0,w.useEffect)(()=>{t||i(!0)},[t]),(0,N.jsx)(F,{status:`Email receipts ${r?`on`:`off`}.`,children:(0,N.jsx)(o,{label:n({en:`Email receipts`}),checked:r,onChange:i})})}function L({active:t}){let n=e(),{save:r,cancel:i}=M(),[a,s]=(0,w.useState)(!1),[c,l]=(0,w.useState)(!1),[u,d]=(0,w.useState)(`Changes land after a short save.`);return(0,w.useEffect)(()=>{t||(i(),s(!1),l(!1),d(`Changes land after a short save.`))},[t,i]),(0,N.jsx)(F,{status:u,saving:c,children:(0,N.jsx)(o,{label:n({en:`Save card for future purchases`}),checked:a,onChange:async e=>{l(!0),d(``);try{await r()&&(s(e),d(e?`Card saved for the next checkout.`:`Card will not be saved.`))}finally{l(!1)}}})})}function R({active:t}){let n=e(),{save:r,cancel:i}=M(),a=(0,w.useRef)(0),[s,c]=(0,w.useState)(!1),[l,u]=(0,w.useState)(!1),[d,f]=(0,w.useState)(`The first save fails. Try again.`);return(0,w.useEffect)(()=>{t||(i(),a.current=0,c(!1),u(!1),f(`The first save fails. Try again.`))},[t,i]),(0,N.jsx)(F,{status:d,saving:l,children:(0,N.jsx)(o,{label:n({en:`Auto-pay premium`}),checked:s,onChange:async e=>{a.current+=1,u(!0),f(``);try{await r(a.current%2==1?`error`:`success`)&&(c(e),f(e?`Auto-pay on. The next premium is paid for you.`:`Auto-pay off.`))}catch(e){throw f(`Still ${s?`on`:`off`}. Nothing was changed.`),e}finally{u(!1)}}})})}function z({active:t}){let n=e(),[r,i]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{t||i(!1)},[t]),(0,N.jsx)(F,{status:r?`Card frozen. Payments are blocked.`:`Hold to freeze. Payments stop at once.`,children:(0,N.jsx)(o,{label:n({en:`Freeze card`}),tone:`danger`,hold:600,checked:r,onChange:i})})}function B({active:t}){let n=e(),[r,i]=(0,w.useState)(!0),[a,s]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{t||(i(!0),s(!1))},[t]),(0,N.jsx)(F,{status:a?`Round up ${r?`on`:`off`}.`:`Drag the thumb, or tap.`,children:(0,N.jsx)(o,{label:n({en:`Round up purchases`}),checked:r,onChange:e=>{i(e),s(!0)}})})}function V({active:n}){let i=e(),[a,s]=(0,w.useState)(!0),[c,l]=(0,w.useState)(!1),u=(0,w.useRef)(0),d=(0,w.useRef)(null),f=(0,w.useCallback)(()=>{window.clearTimeout(u.current),l(!1)},[]);return(0,w.useEffect)(()=>{n||(f(),s(!0))},[n,f]),(0,w.useEffect)(()=>()=>window.clearTimeout(u.current),[]),(0,N.jsx)(F,{status:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(t,{en:`Gift wrap ${a?`on`:`off`}.`}),(0,N.jsx)(t,{en:c&&(0,N.jsxs)(N.Fragment,{children:[` `,(0,N.jsx)(r,{variant:`ghost`,size:`sm`,roll:!1,onClick:()=>{f(),s(e=>!e),d.current?.querySelector(`[role="switch"]`)?.focus({preventScroll:!0})},children:i({en:`Undo`})})]})})]}),children:(0,N.jsx)(`span`,{ref:d,children:(0,N.jsx)(o,{label:i({en:`Gift wrap all items`}),checked:a,onChange:e=>{s(e),l(!0),window.clearTimeout(u.current),u.current=window.setTimeout(()=>l(!1),P)}})})})}var H=[{title:`Immediate`,note:`Nothing to confirm. It changes on release.`,code:j({label:`Email receipts`}),render:e=>(0,N.jsx)(I,{active:e})},{title:`Saving`,note:`The thumb holds its new side, keeps focus and pulses until the save lands.`,code:j({label:`Save card for future purchases`,async:!0}),render:e=>(0,N.jsx)(L,{active:e})},{title:`Rolls back`,note:`A failed save returns the thumb and says why. Try twice.`,code:j({label:`Auto-pay premium`,async:!0}),render:e=>(0,N.jsx)(R,{active:e})},{title:`Hold`,note:`For a setting that should not flip by accident. The track fills.`,code:j({label:`Freeze card`,tone:`danger`,hold:!0}),render:e=>(0,N.jsx)(z,{active:e})},{title:`Drag`,note:`The thumb follows the pointer and settles on the nearer side. Esc takes it back.`,code:j({label:`Round up purchases`}),render:e=>(0,N.jsx)(B,{active:e})},{title:`Undo`,note:`Five seconds to take it back, with focus returned to the switch.`,code:j({label:`Gift wrap all items`}),render:e=>(0,N.jsx)(V,{active:e})}];function U(){let n=e(),r=(0,w.useRef)(null),i=g(r,{page:`switch`});return(0,N.jsx)(`div`,{ref:r,"data-playback":i?`running`:`paused`,children:(0,N.jsx)(C,{columns:3,children:(0,N.jsx)(t,{en:H.map(e=>(0,N.jsx)(x,{title:n({en:e.title}),note:e.note,interactive:!0,inspect:{code:e.code},children:(0,N.jsx)(t,{en:e.render(i)})},e.title))})})})}var W={style:`currency`,currency:`USD`},G=e=>Math.round(e*100)/100,le=5e3;function ue({active:n}){let r=e(),{save:i,cancel:a}=M(),[c,l]=(0,w.useState)(!1),[u,d]=(0,w.useState)(!0),[p,m]=(0,w.useState)(``);(0,w.useEffect)(()=>{n||(a(),l(!1),d(!0),m(``))},[n,a]);let h=G(47.01+(u?.99:0));return(0,N.jsxs)(f,{title:r({en:`Checkout`}),status:p,children:[(0,N.jsxs)(`div`,{className:`switch-scene__tiles`,children:[(0,N.jsx)(o,{variant:`tile`,icon:`credit-card`,label:r({en:`Save card for future purchases`}),description:r({en:`Stored by your payment provider, never on this site.`}),checked:c,onChange:async e=>{m(``),await i(`success`,900)&&(l(e),m(e?`Card saved for the next checkout.`:`Card will not be saved.`))}}),(0,N.jsx)(o,{variant:`tile`,icon:`shield-check`,label:r({en:`Shipping protection +$0.99`}),description:r({en:`Covers loss and damage for 90 days.`}),checked:u,onChange:e=>{d(e),m(e?`Shipping protection added. $0.99 on the total.`:`Shipping protection removed.`)}})]}),(0,N.jsxs)(`dl`,{className:`switch-scene__rows`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`dt`,{children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Linen overshirt`})})}),(0,N.jsx)(`dd`,{children:`$42.00`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`dt`,{children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Standard shipping`})})}),(0,N.jsx)(`dd`,{children:`$5.01`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`dt`,{children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Shipping protection`})})}),(0,N.jsx)(`dd`,{children:(0,N.jsx)(s,{value:u?.99:0,format:W})})]}),(0,N.jsxs)(`div`,{className:`switch-scene__total`,children:[(0,N.jsx)(`dt`,{children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Total`})})}),(0,N.jsx)(`dd`,{children:(0,N.jsx)(s,{value:h,format:W})})]})]})]})}function de({active:n}){let i=e(),[a,c]=(0,w.useState)(!0),[l,u]=(0,w.useState)(!1),[d,p]=(0,w.useState)(!0),[m,h]=(0,w.useState)(!1),g=(0,w.useRef)(0),_=(0,w.useRef)(null),v=(0,w.useCallback)(()=>{window.clearTimeout(g.current),h(!1)},[]);(0,w.useEffect)(()=>{n||(v(),c(!0),u(!1),p(!0))},[n,v]),(0,w.useEffect)(()=>()=>window.clearTimeout(g.current),[]);let y=G(7+(l?2:0)+(d?1.5:0));return(0,N.jsxs)(f,{title:i({en:`Phone coverage`}),status:(0,N.jsx)(`span`,{className:`switch-scene__undo`,children:(0,N.jsx)(t,{en:m?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Coverage ends on 12 Mar. `})}),(0,N.jsx)(r,{variant:`ghost`,size:`sm`,roll:!1,onClick:()=>{v(),c(!0),_.current?.querySelector(`[role="switch"]`)?.focus({preventScroll:!0})},children:i({en:`Undo`})})]}):``})}),children:[(0,N.jsx)(`p`,{className:`switch-scene__note`,children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Covers drops, spills and theft, up to $1,200.`})})}),(0,N.jsxs)(`ul`,{ref:_,className:`switch-list`,role:`list`,children:[(0,N.jsx)(`li`,{children:(0,N.jsx)(o,{className:`switch-row`,label:i({en:`Auto-renew coverage`}),description:i({en:a?`Renews on 12 Mar. Cancel anytime.`:`Ends on 12 Mar.`}),labelPlacement:`start`,checked:a,onChange:e=>{c(e),window.clearTimeout(g.current),h(!e),e||(g.current=window.setTimeout(()=>h(!1),le))}})}),(0,N.jsx)(`li`,{children:(0,N.jsx)(o,{className:`switch-row`,label:i({en:`Roadside assistance`}),description:i({en:`+$2.00 a month`}),labelPlacement:`start`,checked:l,onChange:u})}),(0,N.jsx)(`li`,{children:(0,N.jsx)(o,{className:`switch-row`,label:i({en:`Theft and loss`}),description:i({en:`+$1.50 a month`}),labelPlacement:`start`,checked:d,onChange:p})})]}),(0,N.jsxs)(`dl`,{className:`switch-scene__rows`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`dt`,{children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Next payment`})})}),(0,N.jsx)(`dd`,{children:(0,N.jsx)(t,{en:a?`12 Mar`:`None`})})]}),(0,N.jsxs)(`div`,{className:`switch-scene__total`,children:[(0,N.jsx)(`dt`,{children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Per month`})})}),(0,N.jsx)(`dd`,{children:(0,N.jsx)(s,{value:y,format:W})})]})]})]})}function fe(){let e=(0,w.useRef)(null),t=g(e,{page:`switch`});return(0,N.jsx)(`div`,{ref:e,"data-playback":t?`running`:`paused`,children:(0,N.jsxs)(re,{children:[(0,N.jsx)(ue,{active:t}),(0,N.jsx)(de,{active:t})]})})}var K=()=>{},q=`Save card for future purchases`,pe=[{title:`Off`,note:`A grey track that stays visible on white and on grey.`,checked:!1,code:{label:q}},{title:`On`,note:`The fill arrives with the thumb. The label never changes.`,checked:!0,code:{label:q}},{title:`Hover`,note:`The track deepens a little. Fine pointers only.`,preview:`hover`,checked:!1,code:{label:q}},{title:`Focus`,note:`A blue ring around the whole row, so the target is clear.`,preview:`focus`,checked:!0,code:{label:q}},{title:`Pressed`,note:`The thumb squashes toward the side it rests on.`,preview:`pressed`,checked:!1,code:{label:q}},{title:`Pending`,note:`The new side shows. The thumb pulses and focus stays put.`,checked:!0,props:{pending:!0},code:{label:q,pending:!0}},{title:`Rolled back`,note:`A failed save returns the thumb and says why.`,checked:!1,props:{error:i.failed},code:{label:q,error:i.failed}},{title:`Disabled`,note:`Unavailable and out of the tab order. Say why nearby.`,checked:!1,props:{disabled:!0},code:{label:q,disabled:!0}},{title:`Disabled on`,note:`The value stays readable.`,checked:!0,props:{disabled:!0},code:{label:q,disabled:!0}}];function J({kind:e,children:n}){return(0,N.jsx)(`div`,{className:e?`switch-preview switch-preview--${e}`:`switch-preview`,children:(0,N.jsx)(t,{en:n})})}function me(){let n=e();return(0,N.jsx)(C,{columns:3,children:(0,N.jsx)(t,{en:pe.map(e=>(0,N.jsx)(x,{title:n({en:e.title}),note:e.note,inspect:{code:j(e.code)},children:(0,N.jsx)(J,{kind:e.preview,children:(0,N.jsx)(o,{label:n({en:q}),checked:e.checked,onChange:K,...e.props})})},e.title))})})}function he(){let t=e();return(0,N.jsxs)(C,{columns:3,children:[(0,N.jsx)(x,{title:t({en:`Pill`}),note:`The default. One thumb, one spring.`,inspect:{code:j({label:`Save card for future purchases`})},children:(0,N.jsx)(J,{children:(0,N.jsx)(o,{label:t({en:`Save card for future purchases`}),checked:!0,onChange:K})})}),(0,N.jsx)(x,{title:t({en:`Slim`}),note:`A thin rail and a thumb that overhangs it.`,inspect:{code:j({label:`Order updates by SMS`,variant:`slim`})},children:(0,N.jsx)(J,{children:(0,N.jsx)(o,{label:t({en:`Order updates by SMS`}),variant:`slim`,checked:!0,onChange:K})})}),(0,N.jsx)(x,{title:t({en:`Icon`}),note:`A check and a cross, so state never rests on color.`,inspect:{code:j({label:`Auto-renew coverage`,variant:`icon`})},children:(0,N.jsx)(J,{children:(0,N.jsx)(o,{label:t({en:`Auto-renew coverage`}),variant:`icon`,checked:!0,onChange:K})})}),(0,N.jsx)(x,{title:t({en:`Tile`}),note:`A settings row. The wash and the ring arrive with the thumb.`,span:2,inspect:{code:j({label:`Shipping protection +$0.99`,description:`Covers loss and damage for 90 days.`,variant:`tile`,icon:`shield-check`})},children:(0,N.jsx)(`div`,{className:`switch-wide`,children:(0,N.jsx)(o,{label:t({en:`Shipping protection +$0.99`}),description:t({en:`Covers loss and damage for 90 days.`}),variant:`tile`,icon:`shield-check`,checked:!0,onChange:K})})}),(0,N.jsx)(x,{title:t({en:`Label first`}),note:`The switch sits at the row's end, like a settings list.`,inspect:{code:j({label:`Order updates by SMS`,labelPlacement:`start`})},children:(0,N.jsx)(`div`,{className:`switch-wide`,children:(0,N.jsx)(o,{className:`switch-row`,label:t({en:`Order updates by SMS`}),labelPlacement:`start`,checked:!1,onChange:K})})}),(0,N.jsx)(x,{title:t({en:`Sizes`}),note:`Small, medium and large. Every one stays easy to hit.`,inspect:{code:j({label:`Gift receipt`,size:`lg`})},children:(0,N.jsxs)(`div`,{className:`switch-stack`,children:[(0,N.jsx)(o,{label:t({en:`Small`}),size:`sm`,checked:!0,onChange:K}),(0,N.jsx)(o,{label:t({en:`Medium`}),checked:!0,onChange:K}),(0,N.jsx)(o,{label:t({en:`Large`}),size:`lg`,checked:!0,onChange:K})]})}),(0,N.jsx)(x,{title:t({en:`Tones`}),note:`Only the on fill changes. Red is for what exposes or removes.`,inspect:{code:j({label:`Public wishlist`,tone:`danger`})},children:(0,N.jsxs)(`div`,{className:`switch-stack`,children:[(0,N.jsx)(o,{label:t({en:`Save card`}),checked:!0,onChange:K}),(0,N.jsx)(o,{label:t({en:`Gift receipt`}),tone:`neutral`,checked:!0,onChange:K}),(0,N.jsx)(o,{label:t({en:`Public wishlist`}),tone:`danger`,checked:!0,onChange:K})]})}),(0,N.jsx)(x,{title:t({en:`Long label`}),note:`The text wraps; the switch stays put.`,inspect:{code:j({label:`Email me a receipt and a delivery update for every order I place`})},children:(0,N.jsx)(`div`,{className:`switch-wide`,children:(0,N.jsx)(o,{label:t({en:`Email me a receipt and a delivery update for every order I place`}),checked:!1,onChange:K})})})]})}var ge=[{name:`Switch.tsx`,code:`import {
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
`},{name:`switch.css`,code:ae},{name:`switchModel.ts`,code:`/* Pure model for Switch: drag geometry, the settle rule, hold progress and how a change that may be
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
`},{name:`usePress.ts`,code:ie},{name:`tokens.css`,code:c}];function Y({variant:e}){return(0,N.jsxs)(`svg`,{className:`switch-thumb switch-thumb--${e}`,viewBox:`0 0 40 24`,width:`40`,height:`24`,"aria-hidden":`true`,children:[(0,N.jsx)(t,{en:e===`pill`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`rect`,{className:`switch-thumb__track`,x:`4`,y:`5`,width:`32`,height:`14`,rx:`7`}),(0,N.jsx)(`circle`,{className:`switch-thumb__knob`,cx:`29`,cy:`12`,r:`5`})]})}),(0,N.jsx)(t,{en:e===`slim`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`rect`,{className:`switch-thumb__rail`,x:`4`,y:`9.5`,width:`32`,height:`5`,rx:`2.5`}),(0,N.jsx)(`circle`,{className:`switch-thumb__knob switch-thumb__knob--ring`,cx:`28`,cy:`12`,r:`6.5`})]})}),(0,N.jsx)(t,{en:e===`icon`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`rect`,{className:`switch-thumb__track`,x:`4`,y:`4`,width:`32`,height:`16`,rx:`8`}),(0,N.jsx)(`circle`,{className:`switch-thumb__knob`,cx:`28`,cy:`12`,r:`6`}),(0,N.jsx)(`path`,{className:`switch-thumb__check`,d:`m25.2 12.2 2 2 3.6-4`})]})}),(0,N.jsx)(t,{en:e===`tile`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`rect`,{className:`switch-thumb__card`,x:`1`,y:`3`,width:`38`,height:`18`,rx:`6`}),(0,N.jsx)(`rect`,{className:`switch-thumb__line`,x:`6`,y:`8`,width:`14`,height:`2.4`,rx:`1.2`}),(0,N.jsx)(`rect`,{className:`switch-thumb__line switch-thumb__line--short`,x:`6`,y:`13`,width:`9`,height:`2.4`,rx:`1.2`}),(0,N.jsx)(`rect`,{className:`switch-thumb__track`,x:`25`,y:`8`,width:`10`,height:`8`,rx:`4`}),(0,N.jsx)(`circle`,{className:`switch-thumb__knob`,cx:`31`,cy:`12`,r:`2.8`})]})})]})}var X=[{id:`pill`,label:`Pill`,description:`The default. One thumb on one spring.`,thumb:(0,N.jsx)(Y,{variant:`pill`})},{id:`slim`,label:`Slim`,description:`A thin rail and a thumb that overhangs it. For dense lists.`,thumb:(0,N.jsx)(Y,{variant:`slim`})},{id:`icon`,label:`Icon`,description:`A check and a cross trade places, so the state reads without color.`,thumb:(0,N.jsx)(Y,{variant:`icon`})},{id:`tile`,label:`Tile`,description:`A whole settings row: the name, the reason and the switch.`,thumb:(0,N.jsx)(Y,{variant:`tile`})}],_e=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],ve=[{value:`accent`,label:`Accent`},{value:`neutral`,label:`Neutral`},{value:`danger`,label:`Danger`}],ye=[{value:`rest`,label:`Instant`},{value:`saving`,label:`Saving`},{value:`fails`,label:`Fails`},{value:`disabled`,label:`Disabled`}],be=[{id:`off`,label:`Off`},{id:`saving`,label:`Saving`},{id:`on`,label:`On`},{id:`failed`,label:`Rolled back`}],Z={phase:`off`,status:`Press it, drag the thumb, or use Space.`},Q={pill:!1,slim:!1,icon:!0,tile:!1};function xe({demo:t,variant:n,active:r,onReport:i}){let a=e(),s=D[n],{save:c,cancel:l}=M(),[u,d]=(0,w.useState)(Q),[f,p]=(0,w.useState)(`rest`),[m,h]=(0,w.useState)(!1),g=u[n],_=(0,w.useRef)(0),v=(0,w.useCallback)(()=>{_.current+=1,l(),d(Q),p(`rest`),h(!1)},[l]);(0,w.useEffect)(()=>{r||v()},[r,v]),(0,w.useEffect)(()=>{_.current+=1,l(),p(`rest`),h(!1)},[n,t.state,t.hold,l]);let y=e=>{d(t=>({...t,[n]:e})),h(!0),p(`rest`)};return(0,w.useEffect)(()=>{let e=g?`on`:`off`;f===`saving`?i({phase:`saving`,status:`Saving…`}):f===`failed`?i({phase:`failed`,status:`Could not save. The thumb rolled back.`}):t.state===`disabled`?i({phase:e,status:`Locked while the order is processing.`}):i(m?{phase:e,status:t.state===`rest`?oe(s,g):s.done[g?`on`:`off`]}:{phase:e,status:t.hold?`Press and hold. A tap is not enough for this setting.`:Z.status})},[f,g,m,t.state,t.hold,s,i]),(0,N.jsx)(`div`,{className:`switch-stage switch-stage--${n}`,children:(0,N.jsx)(o,{label:a({en:s.label}),description:a({en:s.description}),icon:s.icon,variant:n,size:t.size,tone:t.tone,checked:g,onChange:async e=>{if(t.state===`saving`||t.state===`fails`){let n=_.current;p(`saving`);try{if(!await c(t.state===`fails`?`error`:`success`)||n!==_.current)return;y(e)}catch(e){throw n===_.current&&p(`failed`),e}}else y(e)},disabled:t.state===`disabled`,hold:t.hold?600:void 0},`${n}-${t.state}-${t.hold}`)})}function Se(){let t=e(),[n,r]=(0,w.useState)(T),[i,a]=(0,w.useState)(Z),o=e=>t=>r(n=>({...n,[e]:t})),s=D[n.variant];return(0,N.jsx)(_,{page:`switch`,name:`Switch`,variants:X,variant:n.variant,onVariantChange:o(`variant`),status:i.status,simulated:n.state===`saving`||n.state===`fails`,trail:(0,N.jsx)(p,{states:be,active:i.phase,label:t({en:`Switch states`})}),code:{setup:se,usage:ce(n),usageFile:`${s.component}.tsx`,sources:ge},controls:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(h,{label:t({en:`Size`}),value:n.size,options:_e,onChange:o(`size`)}),(0,N.jsx)(h,{label:t({en:`Tone`}),value:n.tone,options:ve,onChange:o(`tone`)}),(0,N.jsx)(h,{label:t({en:`State`}),value:n.state,options:ye,onChange:o(`state`)}),(0,N.jsx)(te,{label:t({en:`Hold to switch`}),checked:n.hold,onChange:o(`hold`)})]}),children:({variant:e,active:t})=>(0,N.jsx)(xe,{demo:n,variant:e,active:t,onReport:a})})}var $=()=>{};function Ce(){let n=e();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u,{id:`switch`}),(0,N.jsx)(Se,{}),(0,N.jsx)(d,{title:n({en:`One setting. One immediate answer.`}),lead:n({en:`A switch applies the moment it moves. It never waits for a Save button, and it never lies about what happened.`}),reasons:[{title:`Named by the setting`,text:`The label says what is on, never the action, and it stays the same in both states. The whole row is the target.`},{title:`A thumb with weight`,text:`It travels on the brand spring, squashes under your finger and follows a drag. Let go and it settles on the nearer side.`},{title:`Honest while it saves`,text:`The new side shows at once. Saving keeps focus, pulses the thumb and ignores repeat input. A failure rolls back and says why.`}]}),(0,N.jsx)(y,{id:`states`,title:n({en:`States`}),lead:n({en:`Every state a switch can be in. Hover, focus and press are the real control, held still. Inspect any of them for its code.`}),children:(0,N.jsx)(me,{})}),(0,N.jsx)(y,{id:`forms`,title:n({en:`Forms and sizes`}),lead:n({en:`Four forms for one state. Pick by where the setting lives: a form, a dense list, a row of marks or a settings board.`}),children:(0,N.jsx)(he,{})}),(0,N.jsx)(y,{id:`interaction`,title:n({en:`The change fits the risk`}),lead:n({en:`Tap, wait for a save, hold, drag or take it back. The setting decides. Every switch here is live.`}),children:(0,N.jsx)(U,{})}),(0,N.jsx)(y,{id:`in-context`,title:n({en:`In context`}),lead:n({en:`Two add-ons at checkout and a coverage list. The total rolls as it changes, a save keeps its place, and turning coverage off can be undone.`}),children:(0,N.jsx)(fe,{})}),(0,N.jsx)(y,{id:`reference`,title:n({en:`Reference`}),children:(0,N.jsxs)(`div`,{className:`kit-folds`,children:[(0,N.jsx)(m,{title:n({en:`Properties & states`}),children:(0,N.jsx)(v,{props:l.props??[]})}),(0,N.jsx)(m,{title:n({en:`Usage & keyboard`}),children:(0,N.jsxs)(`div`,{className:`kit-stack`,children:[(0,N.jsx)(b,{number:1,title:n({en:`Name the setting, not the action`}),do:{text:`The label stays put when the state changes.`,example:(0,N.jsx)(o,{label:n({en:`Shipping protection`}),checked:!0,onChange:$})},dont:{text:`A verb flips meaning with the state, so "on" reads as "off".`,example:(0,N.jsx)(o,{label:n({en:`Turn on shipping protection`}),checked:!0,onChange:$})}}),(0,N.jsx)(b,{number:2,title:n({en:`A switch applies at once`}),do:{text:`Use it for a setting that takes effect the moment it moves.`,example:(0,N.jsx)(o,{label:n({en:`Save card for future purchases`}),checked:!0,onChange:$})},dont:{text:`A choice collected by a form and sent with Save is a checkbox.`,example:(0,N.jsxs)(`span`,{className:`switch-example`,children:[(0,N.jsx)(o,{label:n({en:`Subscribe to updates`}),checked:!1,onChange:$}),(0,N.jsx)(r,{size:`sm`,children:n({en:`Save`})})]})}}),(0,N.jsx)(b,{number:3,title:n({en:`Match the weight to the risk`}),do:{text:`Ask for a hold when a change stops payments or exposes something.`,example:(0,N.jsx)(o,{label:n({en:`Freeze card`}),tone:`danger`,hold:600,checked:!1,onChange:$})},dont:{text:`A hold on an everyday setting reads as broken.`,example:(0,N.jsx)(o,{label:n({en:`Email receipts`}),hold:600,checked:!0,onChange:$})}}),(0,N.jsx)(b,{number:4,title:n({en:`Say why it is unavailable`}),do:{text:`Name what unlocks it, right beside the switch.`,example:(0,N.jsxs)(`span`,{className:`switch-why`,children:[(0,N.jsx)(o,{label:n({en:`Auto-pay premium`}),checked:!1,disabled:!0,onChange:$}),(0,N.jsx)(`span`,{className:`switch-why__note`,children:(0,N.jsx)(t,{en:(0,N.jsx)(N.Fragment,{children:`Add a card to turn this on.`})})})]})},dont:{text:`Leave a dimmed switch with no reason; people tap it again.`,example:(0,N.jsx)(o,{label:n({en:`Auto-pay premium`}),checked:!1,disabled:!0,onChange:$})}}),(0,N.jsx)(S,{keys:l.keys??[]})]})}),(0,N.jsx)(m,{title:n({en:`Tokens`}),children:(0,N.jsxs)(`div`,{className:`kit-stack`,children:[(0,N.jsx)(ee,{tokens:l.tokens??[]}),(0,N.jsx)(ne,{tokens:[...l.tokens??[],`--z-color-surface`,`--z-color-danger`,`--z-color-ink`,`--z-motion-press`,`--z-motion-feedback`]})]})})]})})]})}export{Ce as default};