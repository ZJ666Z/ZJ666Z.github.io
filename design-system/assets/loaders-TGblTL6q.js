import{N as e,P as t,Zt as n,an as r,cn as i,gt as a,kn as o,p as s,vt as c}from"./route-DiUIWQAn.js";import{t as l}from"./tokens--8wjVqaD.js";import{c as u,l as d}from"./docs-C3rBO14N.js";import{A as f,O as p,a as m,c as h,f as g,g as _,h as v,i as y,k as b,l as x,n as S,o as C,r as w,s as T,t as E}from"./kit-CylDtrmy.js";import{t as D}from"./loader-sOTrbkB4.js";var O=o(),k={agent:[`converge`,`scan`,`helix`,`ripple`,`word`],general:[`orbit`,`dots`,`line`,`skeleton`]},A=e=>k.agent.includes(e)?`agent`:`general`,j={group:`agent`,variant:`converge`,size:`xl`,tempo:`natural`,outcome:`success`,length:`short`},M={instant:40,short:1600,long:6e3,stalled:12e3},N={converge:{name:`Converge`,component:`ComparePlans`,work:`compare`,action:`Compare plans`,pending:`Comparing plans…`,still:`Still comparing plans…`,success:`Three plans compared.`,error:`Couldn’t compare plans. Try again.`,description:`Options drawing to one answer, for an agent weighing quotes.`},scan:{name:`Scan`,component:`CheckEligibility`,work:`check`,action:`Check eligibility`,pending:`Checking eligibility…`,still:`Still checking eligibility…`,success:`You’re eligible.`,error:`Couldn’t check eligibility. Try again.`,description:`A light passing through a field, for an agent reading the rules.`},helix:{name:`Helix`,component:`PrepareQuote`,work:`prepare`,action:`Get a quote`,pending:`Preparing your quote…`,still:`Still preparing your quote…`,success:`Your quote is ready.`,error:`Couldn’t prepare the quote. Try again.`,description:`A traveling wave, for an agent putting something long together.`},ripple:{name:`Ripple`,component:`ContactBank`,work:`contact`,action:`Contact bank`,pending:`Contacting your bank…`,still:`Still waiting for your bank…`,success:`Your bank answered.`,error:`Your bank didn’t answer. Try again.`,description:`Signals going out, for an agent waiting on another party.`},word:{name:`Word`,component:`ReviewCart`,work:`review`,action:`Review cart`,pending:`Reviewing your cart…`,still:`Still reviewing your cart…`,success:`Cart reviewed.`,error:`Couldn’t review the cart. Try again.`,description:`The words are the loader, inside an agent’s reply.`},orbit:{name:`Orbit`,component:`VerifyPayment`,work:`verify`,action:`Verify payment`,pending:`Verifying payment…`,still:`Still verifying payment…`,success:`Payment verified.`,error:`Payment not verified. Try again.`,description:`An arc that closes into a ring, for short and certain actions.`},dots:{name:`Dots`,component:`SecureCheck`,work:`confirm`,action:`Confirm payment`,pending:`Waiting for 3-D Secure…`,still:`Still waiting for 3-D Secure…`,success:`Approved in your banking app.`,error:`3-D Secure timed out. Try again.`,description:`Three beats, for waiting on someone else.`},line:{name:`Line`,component:`PaymentMethods`,work:`load`,action:`Load methods`,pending:`Loading payment methods…`,still:`Still loading payment methods…`,success:`Payment methods loaded.`,error:`Payment methods didn’t load. Try again.`,description:`A region is loading. It fills when the work is done.`},skeleton:{name:`Skeleton`,component:`OrderSummary`,work:`load`,action:`Load order`,pending:`Loading your order…`,still:`Still loading your order…`,success:`Order loaded.`,error:`Your order didn’t load. Try again.`,description:`The shape arrives before the data, then becomes it.`}},P=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Loader, useLoaderTask } from '@zijie/ui';
`,F=e=>e<1e3?`${Math.round(e)}ms`:`${Number((e/1e3).toFixed(2))}s`,I=e=>`'${e.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)}'`,L=(e,t)=>`${e}="${t}"`;function R({variant:e,size:t,tempo:n}){let r=[];return e!==`orbit`&&r.push(L(`variant`,e)),t!==`md`&&r.push(L(`size`,t)),n!==`natural`&&r.push(L(`tempo`,n)),r}function ee(e,t){let n=M[e.length],r=e.outcome===`error`,i=`simulatedTask(${n}${r?`, 'error'`:``})`,a=r?`failing`:`succeeding`;return e.length===`instant`?`  // Preview: ${i} stands in for ${t}, ${a} after ${F(n)}: too fast to show a mark.`:e.length===`long`?`  // Preview: ${i} stands in for ${t}, ${a} after ${F(n)}; the words change at 4s.`:e.length===`stalled`?`  // Preview: ${i} stands in for ${t}, ${a} after ${F(n)}; at 10s it offers Cancel.`:`  // Preview: ${i} stands in for ${t}, ${a} after ${F(n)}.`}function te(e){let t=N[e.variant],n=e.variant===`skeleton`,r=[`task={task}`,...R(e)],i=n?`      <Loader ${r.join(` `)}>\n        {summary}\n      </Loader>`:`      <Loader ${r.join(` `)} />`,a=n?`{ ${t.work}, summary }: { ${t.work}: (signal: AbortSignal) => Promise<void>; summary: ReactNode }`:`{ ${t.work} }: { ${t.work}: (signal: AbortSignal) => Promise<void> }`;return[`import { Button, Loader, useLoaderTask } from '@zijie/ui';`,...n?[`import type { ReactNode } from 'react';`]:[],``,`export function ${t.component}(${a}) {`,`  // Nothing for 160ms, then the mark; once seen it stays 320ms. The words change at 4s and 10s.`,`  const task = useLoaderTask({`,`    labels: {`,`      pending: ${I(t.pending)},`,`      still: ${I(t.still)},`,`      success: ${I(t.success)},`,`      error: ${I(t.error)},`,`    },`,`  });`,ee(e,t.work),`  const start = () => task.run(({ signal }) => ${t.work}(signal));`,`  return (`,`    <>`,i,`      {task.state === 'error'`,`        ? <Button onClick={() => task.retry()}>Retry</Button>`,`        : <Button onClick={start}>${t.action}</Button>}`,`      {task.busy && <Button variant="ghost" onClick={task.cancel}>Cancel</Button>}`,`    </>`,`  );`,`}`,``].join(`
`)}function z(e){let t=R({variant:e.variant,size:e.size??`md`,tempo:e.tempo??`natural`});e.layout&&e.layout!==`stack`&&t.push(L(`layout`,e.layout)),e.state&&t.push(L(`state`,e.state)),e.visible===!1&&t.push(`visible={false}`),e.label!==void 0&&t.push(`label=${JSON.stringify(e.label)}`),e.progress!==void 0&&t.push(`progress={${e.progress}}`),e.still&&t.push(`still`);let n=t.length?`<Loader ${t.join(` `)} />`:`<Loader />`;return n.length<=72?`${n}\n`:`<Loader\n${t.map(e=>`  ${e}`).join(`
`)}\n/>\n`}var B=7e3,V=e=>Math.sqrt(Math.min(B,Math.max(0,e))/B),ne=[0,160,480,1e3,2e3,4e3,7e3];function H(e,t=160,n=320){let{startedAt:r,shownAt:i,doneAt:a,settledAt:o}=e;if(r===null)return{phases:[],hidden:null,visible:null,held:null,total:null,mayLeave:null};let s=e=>e===null?null:Math.max(0,e-r),c=s(i),l=s(a),u=s(o),d=u??l,f=[{kind:`hidden`,from:0,to:V(c??(d===null?t:Math.min(d,t)))}];if(c!==null){let e=l??u;f.push({kind:`visible`,from:V(c),to:e===null?1:V(e)}),l!==null&&f.push({kind:`held`,from:V(l),to:u===null?1:V(u)})}return{phases:f,hidden:c??(d===null?null:d),visible:c!==null&&l!==null?l-c:null,held:l!==null&&u!==null?u-l:c!==null&&u!==null&&l===null?0:null,total:u,mayLeave:c===null?null:c+n}}function re(e,t=160,n=320){let r=H(e,t,n),i=t=>t===null||e.startedAt===null?null:t-e.startedAt,a=i(e.shownAt),o=i(e.doneAt),s=i(e.settledAt);switch(e.state){case`idle`:return`Pick a task. The bar draws the real run.`;case`pending`:return a===null?`Pending. Nothing on screen yet.`:o===null?e.waitStep>=1?`Shown at ${F(a)}. At 4s the words changed, not the tempo.`:`Shown at ${F(a)}. Waiting on the task.`:`Done at ${F(o)}. Holding to ${F(r.mayLeave??0)} so it never blinks.`;case`success`:return a===null?`Finished in ${F(s??0)}. Nothing was shown.`:o!==null&&s!==null&&s>o?`Shown at ${F(a)}, done at ${F(o)}, held to ${F(s)} so it never blinks.`:e.waitStep>=1?`Shown at ${F(a)}; the words changed at 4s. Arrived at ${F(s??0)}, never saying almost.`:`Shown at ${F(a)}. Arrived at ${F(s??0)}.`;case`error`:return`Failed at ${F(s??0)}. The words say what to do next.`;case`cancelled`:return`Canceled at ${F(s??0)}. The request was aborted.`;default:return``}}function U(e){if(e.showcase||e.startedAt===null)return``;let t=t=>t===null?null:t-e.startedAt,n=t(e.shownAt),r=t(e.settledAt);switch(e.state){case`pending`:return n===null?``:e.waitStep>=2?`at 10s`:e.waitStep===1?`at 4s`:`at ${F(n)}`;case`success`:case`error`:case`cancelled`:return r===null?``:`at ${F(r)}`;default:return``}}function W(e){return e.state===`pending`?e.shownAt===null?`pending`:e.waitStep>=1?`still`:`visible`:e.state===`idle`?`idle`:`done`}var G=r(),K=[{id:`instant`,ms:40,label:`40ms`,note:`Too fast to show`},{id:`brief`,ms:200,label:`200ms`,note:`Shown, then held`},{id:`normal`,ms:1600,label:`1.6s`,note:`An honest wait`},{id:`long`,ms:6e3,label:`6s`,note:`The words change`}],q=[{title:`Under 160ms, nothing.`,text:`A fast answer never flashes a mark.`},{title:`Once seen, 320ms.`,text:`Counted from the moment it appeared.`},{title:`4s, new words. 10s, a way out.`,text:`The tempo stays the same.`}],J=e=>e===0?`0`:F(e),Y=e=>e===null?`—`:F(e),X=()=>typeof performance<`u`?performance.now():Date.now();function ie(){let r=(0,O.useRef)(null),o=(0,O.useRef)(null),s=_(r,{page:`loaders`}),c=i(),l=e({labels:{idle:`Ready to verify.`,pending:`Verifying payment…`,still:`Still verifying with your bank…`,success:`Payment verified.`,cancelled:`Payment cancelled.`}}),{reset:u,state:d,startedAt:f,settledAt:p,doneAt:m,shownAt:h}=l,[g,v]=(0,O.useState)(null),y=(0,O.useRef)({}),b=(0,O.useRef)(s);(0,O.useEffect)(()=>{b.current&&!s&&(u(),v(null)),b.current=s},[s,u]),(0,O.useEffect)(()=>{let e=o.current;if(!e)return;let t=t=>e.style.setProperty(`--now`,String(V(t)));if(f===null){t(0);return}if(d!==`pending`){t((p??f)-f);return}if(c){t(Math.max(h??f,m??0)-f);return}let n=0,r=()=>{t(X()-f),n=requestAnimationFrame(r)};return r(),()=>cancelAnimationFrame(n)},[d,f,p,m,h,c]);let x=(0,O.useRef)(null),S=(0,O.useRef)(!1);(0,O.useLayoutEffect)(()=>{d!==`pending`&&((document.activeElement===x.current||S.current)&&g&&y.current[g]?.focus(),S.current=!1)},[d,g]);let C=(e,t)=>{v(e),l.run(n(t))},w=()=>{l.cancel(),g&&y.current[g]?.focus()},T=H(l),E=re(l),D=d===`pending`;return(0,G.jsxs)(`div`,{ref:r,className:`loaders-contract`,"data-playback":s?`running`:`paused`,children:[(0,G.jsxs)(`div`,{className:`loaders-contract__intro`,children:[(0,G.jsx)(`h3`,{className:`loaders-contract__title`,children:`One contract, measured`}),(0,G.jsx)(`p`,{className:`loaders-contract__lead`,children:`Run a task. The lane draws what really happened: the quiet first 160ms, the mark, the hold that stops it blinking.`}),(0,G.jsx)(`div`,{className:`loaders-contract__specimen`,children:(0,G.jsx)(`div`,{className:`loaders-slot`,"data-empty":!l.visible&&(!l.shown||d!==`success`&&d!==`error`)||void 0,children:(0,G.jsx)(t,{task:l,variant:`orbit`,size:`lg`,announce:!1})})}),(0,G.jsx)(`div`,{className:`loaders-contract__runs`,role:`group`,"aria-label":`Run a task`,children:K.map(e=>(0,G.jsxs)(`button`,{ref:t=>{y.current[e.id]=t},type:`button`,className:`loaders-preset`,"data-current":g===e.id||void 0,onClick:()=>C(e.id,e.ms),children:[(0,G.jsx)(`span`,{className:`loaders-preset__time`,children:`Run ${e.label}`}),(0,G.jsx)(`span`,{className:`loaders-preset__note`,children:e.note})]},e.id))}),(0,G.jsx)(a,{ref:x,className:`loaders-contract__cancel`,variant:`ghost`,size:`sm`,disabled:!D,onFocus:()=>{S.current=!0},onBlur:()=>{S.current=!1},onClick:w,children:`Cancel`})]}),(0,G.jsxs)(`div`,{className:`loaders-contract__chart`,children:[(0,G.jsxs)(`div`,{className:`loaders-contract__legend`,"aria-hidden":`true`,children:[(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`i`,{"data-kind":`hidden`}),` Hidden`]}),(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`i`,{"data-kind":`visible`}),` Visible`]}),(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`i`,{"data-kind":`held`}),` Held`]})]}),(0,G.jsxs)(`div`,{ref:o,className:`loaders-lane`,"data-state":d,"data-running":D||void 0,"aria-hidden":`true`,children:[(0,G.jsxs)(`div`,{className:`loaders-lane__marks`,children:[(0,G.jsx)(`span`,{className:`loaders-lane__mark`,style:{"--at":V(160)},children:`may appear`}),T.mayLeave!==null&&T.mayLeave<7e3&&(0,G.jsx)(`span`,{className:`loaders-lane__mark loaders-lane__mark--leave`,style:{"--at":V(T.mayLeave)},children:`may leave`}),(0,G.jsx)(`span`,{className:`loaders-lane__mark`,style:{"--at":V(4e3)},children:`words change`})]}),(0,G.jsxs)(`div`,{className:`loaders-lane__track`,children:[(0,G.jsx)(`div`,{className:`loaders-lane__phases`,children:T.phases.map(e=>(0,G.jsx)(`span`,{className:`loaders-lane__phase`,"data-kind":e.kind,style:{"--from":e.from,"--to":e.to}},e.kind))}),f!==null&&(0,G.jsx)(`span`,{className:`loaders-lane__head`})]}),(0,G.jsx)(`div`,{className:`loaders-lane__axis`,children:ne.map(e=>(0,G.jsx)(`span`,{style:{"--at":V(e)},children:J(e)},e))})]}),(0,G.jsxs)(`dl`,{className:`loaders-contract__stats`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:`Hidden`}),(0,G.jsx)(`dd`,{children:Y(T.hidden)})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:`Visible`}),(0,G.jsx)(`dd`,{children:Y(T.visible)})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:`Held`}),(0,G.jsx)(`dd`,{children:Y(T.held)})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:`Total`}),(0,G.jsx)(`dd`,{children:Y(T.total)})]})]}),(0,G.jsx)(`p`,{className:`loaders-contract__sentence`,role:`status`,children:D&&h===null?``:E}),(0,G.jsx)(`p`,{className:`loaders-contract__scale`,children:`Square-root time, so 40ms and 6s both read on one line.`}),(0,G.jsx)(`ol`,{className:`loaders-contract__rules`,children:q.map((e,t)=>(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`span`,{className:`kit-num`,"aria-hidden":`true`,children:String(t+1).padStart(2,`0`)}),(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`b`,{children:e.title}),` `,e.text]})]},e.title))})]})]})}var ae=[{name:`Basic`,detail:`Loss and theft in transit`,price:`$0.99`},{name:`Plus`,detail:`Adds accidental damage, 1 year`,price:`$2.49`,pick:!0},{name:`Complete`,detail:`Adds repairs at home, 2 years`,price:`$4.99`}];function oe({active:r}){let i=e({labels:{idle:`Ready when you are.`,pending:`Comparing 3 protection plans…`,still:`Still comparing plans…`,success:`Plus covers the most for the price.`,cancelled:`Comparison stopped.`}}),{reset:o}=i,s=(0,O.useRef)(r);(0,O.useEffect)(()=>{s.current&&!r&&o(),s.current=r},[r,o]);let l=i.state===`success`;return(0,G.jsxs)(`article`,{className:`loaders-scene`,"aria-label":`Agent comparing protection plans`,children:[(0,G.jsxs)(`header`,{className:`loaders-scene__head`,children:[(0,G.jsx)(`p`,{className:`loaders-scene__title`,children:`Protection for your laptop`}),(0,G.jsx)(`span`,{className:`loaders-scene__badge`,children:`Simulated`})]}),(0,G.jsxs)(`div`,{className:`loaders-scene__turn`,children:[(0,G.jsx)(`span`,{className:`loaders-scene__agent`,"aria-hidden":`true`,children:(0,G.jsx)(c,{name:`spark`,size:16})}),(0,G.jsxs)(`div`,{className:`loaders-scene__message`,children:[(0,G.jsx)(`p`,{className:`loaders-scene__text`,children:`I’ll compare shipping protection for your $1,240 laptop and pick the one that fits.`}),(0,G.jsx)(t,{task:i,variant:`converge`,size:`sm`,layout:`inline`,className:`loaders-scene__status`})]})]}),(0,G.jsx)(`ol`,{className:`loaders-plans`,"data-shown":l||void 0,"aria-label":`Protection plans`,children:ae.map((e,t)=>(0,G.jsxs)(`li`,{className:`loaders-plan`,"data-pick":l&&e.pick||void 0,style:{"--n":t},children:[(0,G.jsx)(`span`,{className:`loaders-plan__icon`,"aria-hidden":`true`,children:(0,G.jsx)(c,{name:`shield-check`,size:16})}),(0,G.jsxs)(`span`,{className:`loaders-plan__copy`,children:[(0,G.jsxs)(`span`,{className:`loaders-plan__name`,children:[e.name,e.pick&&(0,G.jsx)(`span`,{className:`loaders-plan__pick`,"aria-hidden":!l||void 0,children:`Recommended`})]}),(0,G.jsx)(`span`,{className:`loaders-plan__detail`,children:e.detail})]}),(0,G.jsxs)(`span`,{className:`loaders-plan__price`,children:[(0,G.jsx)(`span`,{className:`loaders-plan__unknown`,"aria-hidden":l||void 0,children:`—`}),(0,G.jsx)(`span`,{className:`loaders-plan__value`,"aria-hidden":!l||void 0,children:e.price})]})]},e.name))}),(0,G.jsxs)(`div`,{className:`loaders-scene__actions`,children:[i.busy&&(0,G.jsx)(a,{variant:`ghost`,onClick:i.cancel,children:`Stop`}),(0,G.jsx)(a,{variant:`dark`,onClick:()=>{i.run(n(1800))},children:l?`Compare again`:`Compare plans`})]})]})}function se({active:r}){let[i,o]=(0,O.useState)(!0),l=e({labels:{idle:`Your bank may ask you to approve this.`,pending:`Waiting for your bank…`,still:`Still waiting. Approve it in your banking app.`,success:`Approved. Your order is placed.`,error:`Your bank declined it. Try another card.`,cancelled:`Stopped. Nothing was charged.`},escalation:[{after:3e3,label:`Still waiting. Approve it in your banking app.`,cancel:!0}]}),{reset:u}=l,d=(0,O.useRef)(null),f=(0,O.useRef)(r);return(0,O.useEffect)(()=>{f.current&&!r&&u(),f.current=r},[r,u]),(0,G.jsxs)(`article`,{className:`loaders-scene`,"aria-label":`Bank verification`,children:[(0,G.jsxs)(`header`,{className:`loaders-scene__head`,children:[(0,G.jsx)(`p`,{className:`loaders-scene__title`,children:`Confirm with your bank`}),(0,G.jsx)(`span`,{className:`loaders-scene__badge`,children:`Simulated`})]}),(0,G.jsxs)(`dl`,{className:`loaders-scene__rows`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`dt`,{children:[(0,G.jsx)(c,{name:`credit-card`,size:16}),` Visa ending 4242`]}),(0,G.jsx)(`dd`,{children:`$48.00`})]}),(0,G.jsxs)(`div`,{className:`loaders-scene__switch`,children:[(0,G.jsx)(`dt`,{children:(0,G.jsx)(s,{label:`Slow bank`,checked:i,onChange:o,disabled:l.busy})}),(0,G.jsx)(`dd`,{children:i?`7s`:`1.2s`})]})]}),(0,G.jsx)(`div`,{className:`loaders-scene__wait`,children:(0,G.jsx)(t,{task:l,variant:`dots`,size:`md`})}),(0,G.jsxs)(`div`,{className:`loaders-scene__actions`,children:[l.offerCancel&&(0,G.jsx)(a,{variant:`ghost`,onClick:()=>{l.cancel(),d.current?.focus()},children:`Use another card`}),(0,G.jsx)(a,{ref:d,"aria-disabled":l.busy||void 0,onClick:()=>{l.busy||l.run(n(i?7e3:1200))},children:`Confirm $48.00`})]})]})}function ce(){let e=(0,O.useRef)(null),t=_(e,{page:`loaders`});return(0,G.jsxs)(`div`,{ref:e,className:`loaders-context`,"data-playback":t?`running`:`paused`,children:[(0,G.jsx)(oe,{active:t}),(0,G.jsx)(se,{active:t})]})}var le=[{name:`Loader.tsx`,code:`import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { canUseDOM } from '../../motion/env';
import { loaderDelay } from '../../motion/asyncAction';
import { useActivity } from '../../motion/useActivity';
import { useReducedMotion } from '../../motion/useReducedMotion';
import { loaderLabels, shimmerTiming, splitGlyphs, stripEllipsis, type LoaderSnapshot, type LoaderState } from './loaderController';
import type { UseLoaderTask } from './useLoaderTask';

/** Two curated groups. Agent: an agent at work. General: everyday waits, one action to a whole page. */
export const loaderGroups = Object.freeze({
  agent: Object.freeze(['converge', 'scan', 'helix', 'ripple', 'word'] as const),
  general: Object.freeze(['orbit', 'dots', 'line', 'skeleton'] as const),
});
export type LoaderGroup = keyof typeof loaderGroups;
export const loaderVariants = Object.freeze([...loaderGroups.agent, ...loaderGroups.general]);
export type LoaderVariant = typeof loaderVariants[number];

export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl';
export type LoaderTempo = 'slow' | 'natural' | 'fast';
export type LoaderLayout = 'stack' | 'inline' | 'bare';

/** Mark size in px: rows and buttons, cards, pages, an agent's whole turn. */
export const loaderSizes: Readonly<Record<LoaderSize, number>> = Object.freeze({ sm: 20, md: 36, lg: 52, xl: 96 });
/** One beat in ms. Slow for ambient waits, natural by default, fast for short and certain ones. */
export const loaderTempos: Readonly<Record<LoaderTempo, number>> = Object.freeze({ slow: 1800, natural: 1200, fast: 800 });

export const loaderGroupOf = (variant: LoaderVariant): LoaderGroup => ((loaderGroups.agent as readonly string[]).includes(variant) ? 'agent' : 'general');

/** Forms whose mark gives way to a drawn check (success) or cross (error). */
const GLYPH_FORMS: readonly LoaderVariant[] = ['converge', 'scan', 'helix', 'ripple', 'orbit', 'dots'];
const LEAVES: Partial<Record<LoaderVariant, number>> = { converge: 4, scan: 9, helix: 8, ripple: 4, dots: 3, line: 1 };
/** Converge: each dot travels along its own axis (individual \`translate\`, so a pose can be frozen). */
const AXES = [[0, -1], [1, 0], [0, 1], [-1, 0]] as const;

/** Skeleton rows: a known shape (an icon, a line, a trailing value), widths varied so it reads as content. */
export function skeletonRows(lines = 3) {
  const widths = [0.62, 0.48, 0.56, 0.44, 0.6, 0.5];
  return Array.from({ length: Math.min(6, Math.max(1, Math.round(lines) || 1)) }, (_, row) => ({ row, width: widths[row] }));
}

export interface LoaderProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  tempo?: LoaderTempo;
  /** Bind to a task: the result of useLoaderTask. State, words, delay and hold come from it. */
  task?: UseLoaderTask;
  /** Pin a state instead (specimens, server render). Without \`task\` or \`state\`, the mark waits \`delay\` ms after mount. */
  state?: LoaderState;
  /** Pinned only: whether the mark is on screen (pending) or was shown (terminal). Default true. */
  visible?: boolean;
  /** Pinned only: the words. Defaults follow the state. With \`task\`, the task's labels speak. */
  label?: string;
  /** Pinned only: measured progress 0..1 (orbit and line draw it). */
  progress?: number | null;
  layout?: LoaderLayout;
  /** \`blue\` for an agent's signal; marks are ink otherwise. Default: blue for Agent forms. */
  tone?: 'ink' | 'blue';
  /** Polite announcements (default). Turn off only when a visible status line elsewhere says the same. */
  announce?: boolean;
  /** The reduced-motion still pose, for previews. Reduced motion turns it on by itself. */
  still?: boolean;
  /** Hold the loop still. It also holds offscreen, in a hidden tab and under a paused ancestor. */
  paused?: boolean;
  /** Unbound only: ms after mount before the mark appears. Default 160. */
  delay?: number;
  /** Skeleton rows, 1 to 6. */
  lines?: number;
  className?: string;
  /** What the wait becomes: shown in the mark's place on success (skeleton → content), inert until then. */
  children?: ReactNode;
}

const FROZEN = ['opacity', 'scale', 'translate', 'rotate'] as const;
const FROZEN_ARC = ['stroke-dasharray', 'stroke-dashoffset'] as const;
type Pose = Map<HTMLElement | SVGElement, [string, string][]>;

const useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect;

function leavesOf(root: HTMLElement): (HTMLElement | SVGElement)[] {
  return [...root.querySelectorAll<HTMLElement | SVGElement>('.z-loader__mark, .z-loader__mark *')];
}

/** Freeze: read every leaf's computed pose and write it inline, before the state flips and the loop stops matching. */
function freeze(root: HTMLElement): Pose | null {
  if (typeof getComputedStyle !== 'function' || typeof requestAnimationFrame !== 'function') return null;
  const pose: Pose = new Map();
  const leaves = leavesOf(root);
  const reads = leaves.map(leaf => {
    const style = getComputedStyle(leaf);
    const names = leaf.classList.contains('z-loader__arc') ? [...FROZEN, ...FROZEN_ARC] : FROZEN;
    return names.map(name => [name, style.getPropertyValue(name)] as [string, string]).filter(([, value]) => value !== '');
  });
  leaves.forEach((leaf, index) => {
    for (const [name, value] of reads[index]) leaf.style.setProperty(name, value);
    pose.set(leaf, reads[index]);
  });
  return pose;
}

/** Release: drop the inline pose so each leaf's transition carries it into the terminal pose. The ring keeps its angle. */
function release(pose: Pose, aim: boolean) {
  for (const [leaf, values] of pose) {
    const spin = leaf.classList.contains('z-loader__spin');
    for (const [name] of values) if (!(spin && name === 'rotate')) leaf.style.removeProperty(name);
    if (spin && aim) {
      // Measured: the ring turns on to 12 o'clock, never back.
      const angle = Number.parseFloat(values.find(([name]) => name === 'rotate')?.[1] ?? '0') || 0;
      leaf.style.setProperty('rotate', \`\${angle + ((360 - (angle % 360)) % 360)}deg\`);
    }
  }
}

function thaw(root: HTMLElement) {
  for (const leaf of leavesOf(root)) for (const name of [...FROZEN, ...FROZEN_ARC]) leaf.style.removeProperty(name);
}

function Mark({ variant, label, lines }: { variant: LoaderVariant; label: string; lines: number }) {
  if (variant === 'orbit') {
    return (
      <span className="z-loader__mark">
        <svg viewBox="0 0 36 36" focusable="false">
          <circle className="z-loader__track" cx="18" cy="18" r="15" />
          <g className="z-loader__spin">
            <path className="z-loader__arc" d="M18 3a15 15 0 1 1 0 30a15 15 0 1 1 0-30" pathLength={100} />
          </g>
        </svg>
      </span>
    );
  }
  if (variant === 'word') {
    const glyphs = splitGlyphs(stripEllipsis(label) || ' ');
    const timing = shimmerTiming(glyphs.length);
    return (
      <span className="z-loader__mark">
        <span className="z-loader__word" style={{ '--n': glyphs.length, '--pass': \`\${timing.pass}ms\`, '--cycle': \`\${timing.cycle}ms\` } as CSSProperties}>
          {glyphs.map((glyph, index) => <i key={\`\${index}-\${glyph}\`} style={{ '--i': index } as CSSProperties}>{glyph}</i>)}
        </span>
      </span>
    );
  }
  if (variant === 'skeleton') {
    return (
      <span className="z-loader__mark">
        {skeletonRows(lines).flatMap(({ row, width }) => {
          const style = (column: number) => ({ '--row': row, '--col': column, '--w': \`\${Math.round(width * 100)}%\` } as CSSProperties);
          return [
            <i key={\`\${row}-icon\`} data-part="icon" style={style(0)} />,
            <i key={\`\${row}-line\`} data-part="line" style={style(1)} />,
            <i key={\`\${row}-value\`} data-part="value" style={style(2)} />,
          ];
        })}
      </span>
    );
  }
  const count = LEAVES[variant] ?? 4;
  return (
    <span className="z-loader__mark">
      {Array.from({ length: count }, (_, index) => {
        const style: Record<string, number> = { '--i': index };
        if (variant === 'converge') { style['--dx'] = AXES[index][0]; style['--dy'] = AXES[index][1]; }
        if (variant === 'scan') { style['--d'] = (index % 3) + Math.floor(index / 3); }
        return <i key={index} data-part={variant === 'ripple' && index === count - 1 ? 'core' : undefined} style={style as CSSProperties} />;
      })}
    </span>
  );
}

/**
 * The loader. Bound to a task (useLoaderTask), it follows the contract: nothing for 160ms, then the mark;
 * a hold of 320ms once seen; words that change at 4s and 10s; a finish only the task decides. When the
 * wait ends, every leaf is frozen where the loop left it and eases into the terminal pose: the mark
 * gives way to a drawn check or cross, the ring closes, the line fills, the skeleton becomes the
 * content. Loops animate only opacity and the individual scale/translate/rotate properties, solid fills
 * only, and hold still offscreen, in a hidden tab, under reduced motion or a paused ancestor.
 */
export function Loader({
  variant = 'orbit', size = 'md', tempo = 'natural', task, state: pinnedState, visible: pinnedVisible, label: pinnedLabel,
  progress: pinnedProgress = null, layout = 'stack', tone, announce = true, still: stillProp = false, paused = false,
  delay = loaderDelay, lines = 3, className = '', children,
}: LoaderProps) {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const still = stillProp || reduced;
  const active = useActivity(root, { paused: paused || still });

  // Unbound: the mark honours the delay by itself, so \`{loading && <Loader />}\` never flashes.
  const unbound = !task && pinnedState === undefined;
  const [arrived, setArrived] = useState(false);
  useEffect(() => {
    if (!unbound) return;
    const timer = setTimeout(() => setArrived(true), delay);
    return () => clearTimeout(timer);
  }, [unbound, delay]);

  const state: LoaderState = task ? task.state : pinnedState ?? 'pending';
  const visible = task ? task.visible : state === 'pending' && (unbound ? arrived : pinnedVisible ?? true);
  const shown = task ? task.shown : state === 'pending' ? visible : state !== 'idle' && (pinnedVisible ?? true);
  const label = task ? task.label : pinnedLabel ?? (state === 'pending' ? loaderLabels.pending : loaderLabels[state]);
  const progress = task ? task.progress : pinnedProgress;
  const waitStep = task?.waitStep ?? 0;
  const glyph = GLYPH_FORMS.includes(variant);

  // Freeze before flip: the controller calls this synchronously, before the new snapshot is published.
  const pose = useRef<{ pose: Pose; aim: boolean } | null>(null);
  const stillRef = useRef(still);
  stillRef.current = still;
  const controller = task?.controller;
  useEffect(() => {
    if (!controller) return;
    return controller.onBeforeChange((next: LoaderSnapshot, previous: LoaderSnapshot) => {
      const node = root.current;
      if (!node || stillRef.current || !previous.visible) return;
      const settling = next.state !== 'pending';
      const measuring = next.state === 'pending' && previous.progress === null && next.progress !== null;
      if (!settling && !measuring) return;
      if (pose.current) release(pose.current.pose, false);
      const frozen = freeze(node);
      pose.current = frozen ? { pose: frozen, aim: measuring } : null;
    });
  }, [controller]);

  // After the commit (new data-state, inline pose still on): flush styles once, then release next frame.
  useIsomorphicLayoutEffect(() => {
    const held = pose.current;
    if (!held) return;
    pose.current = null;
    for (const leaf of held.pose.keys()) void getComputedStyle(leaf).opacity;
    const frame = requestAnimationFrame(() => release(held.pose, held.aim));
    return () => { cancelAnimationFrame(frame); release(held.pose, false); };
  });

  // A new run starts from the loop, not from the last frozen pose.
  const runId = task?.runId ?? 0;
  useIsomorphicLayoutEffect(() => {
    if (root.current && runId > 0) thaw(root.current);
  }, [runId]);

  const swap = children !== undefined;
  return (
    <div
      ref={root}
      className={\`z-loader\${className ? \` \${className}\` : ''}\`}
      data-variant={variant}
      data-size={size}
      data-tempo={tempo}
      data-layout={layout}
      data-tone={tone ?? (loaderGroupOf(variant) === 'agent' ? 'blue' : 'ink')}
      data-state={state}
      data-visible={visible || undefined}
      data-shown={shown || undefined}
      data-wait={waitStep || undefined}
      data-measured={progress !== null || undefined}
      data-glyph={glyph || undefined}
      data-handoff={swap ? 'swap' : undefined}
      data-still={still || undefined}
      data-active={active}
      aria-busy={state === 'pending'}
      style={progress !== null ? { '--loader-progress': progress } as CSSProperties : undefined}
    >
      <span className="z-loader__visual" aria-hidden="true">
        <Mark variant={variant} label={label} lines={lines} />
        {glyph && (
          <svg className="z-loader__glyph" viewBox="0 0 24 24" focusable="false">
            <path className="z-loader__check" d="M5.5 12.5 10 17l8.5-9.5" pathLength={1} />
            <path className="z-loader__cross" d="M7.5 7.5l9 9M16.5 7.5l-9 9" pathLength={1} />
          </svg>
        )}
      </span>
      {swap && (
        <div className="z-loader__content" inert={state !== 'success'} aria-hidden={state !== 'success' || undefined}>{children}</div>
      )}
      <span className="z-loader__status" role={announce ? 'status' : undefined} aria-live={announce ? 'polite' : undefined} aria-atomic={announce ? 'true' : undefined}>{label}</span>
      {progress !== null && state === 'pending' && (
        <progress className="z-loader__progress" max={1} value={progress} aria-label="Progress" />
      )}
    </div>
  );
}
`},{name:`loaderController.ts`,code:`/* Loader controller: a wait bound to a task, never to a timer. Pure: no DOM, no React, an injectable
   clock, so the whole lifecycle is tested in Node.

   The contract every loader form shares:
   - Nothing for \`delay\` (160ms). A task that finishes sooner never shows a mark.
   - Once shown, the mark stays at least \`minVisible\` (320ms), counted from when it appeared.
   - Escalation changes the words (4s, then 10s with a way out), never the tempo.
   - Only the task decides the end: success, error or cancelled. Errors are returned, not thrown.
   - A result that arrives after cancel, reset, a newer run or destroy is ignored, even if the task
     ignored its signal. */
import { loaderDelay, minimumLoaderTime, realScheduler, type Scheduler } from '../../motion/asyncAction';

export type LoaderState = 'idle' | 'pending' | 'success' | 'error' | 'cancelled';

/** The words a loader says. English defaults; pass your own per task. */
export interface LoaderLabels {
  idle: string;
  pending: string;
  /** First escalation step (4s). */
  still: string;
  /** Second escalation step (10s); the step that offers Cancel. */
  stalled: string;
  success: string;
  error: string;
  cancelled: string;
}

export const loaderLabels: Readonly<LoaderLabels> = Object.freeze({
  idle: '',
  pending: 'Loading…',
  still: 'Still working…',
  stalled: 'This is taking longer than usual.',
  success: 'Done.',
  error: 'Couldn’t load. Try again.',
  cancelled: 'Canceled.',
});

export interface EscalationStep {
  /** ms after the run started. */
  after: number;
  label: string;
  /** From this step on, offer a way out (snapshot.offerCancel). */
  cancel?: boolean;
}

/** When the default escalation speaks: words at 4s, words and a way out at 10s. */
export const ESCALATE_STILL = 4000;
export const ESCALATE_STALLED = 10000;

export function defaultEscalation(labels: Pick<LoaderLabels, 'still' | 'stalled'> = loaderLabels): EscalationStep[] {
  return [{ after: ESCALATE_STILL, label: labels.still }, { after: ESCALATE_STALLED, label: labels.stalled, cancel: true }];
}

/** How many escalation steps a wait of \`elapsed\` ms has passed. Pure. */
export function escalationFor(elapsed: number, steps: readonly EscalationStep[] = defaultEscalation()): number {
  return steps.filter(step => elapsed >= step.after).length;
}

export interface LoaderSnapshot {
  state: LoaderState;
  /** The mark is on screen: pending and past the delay. */
  visible: boolean;
  /** The mark appeared during the current or last run. Terminal poses draw only if it did. */
  shown: boolean;
  /** What the loader says now. */
  label: string;
  /** Escalation steps passed (0 before the first). */
  waitStep: number;
  /** The current escalation step asks for a way out. */
  offerCancel: boolean;
  /** Measured progress 0..1 from \`report\`, or null when the size is unknown. Never invented. */
  progress: number | null;
  /** 1 for a fresh run, +1 for each retry. 0 before any run. */
  attempt: number;
  /** Clock times (ms) of the current or last run; null until reached. */
  startedAt: number | null;
  shownAt: number | null;
  /** When the task itself finished (a shown mark may still be holding). */
  doneAt: number | null;
  settledAt: number | null;
  error: unknown;
  /** Increments on every run, so a view can tell one run from the next. */
  runId: number;
}

export interface LoaderTaskContext {
  signal: AbortSignal;
  /** Report measured progress (0..1), or null when the size is unknown. Ignored once the run is over. */
  report: (value: number | null) => void;
}

export type LoaderTask<T> = (context: LoaderTaskContext) => Promise<T> | T;

export type LoaderResult<T> =
  | { status: 'success'; value: T }
  | { status: 'error'; error: unknown }
  | { status: 'cancelled' };

export interface LoaderControllerOptions {
  /** ms of nothing before the mark appears. Default 160. */
  delay?: number;
  /** ms a shown mark stays at least, from when it appeared. Default 320. */
  minVisible?: number;
  /** true (default): the words change at 4s and 10s. false: never. Or your own steps. */
  escalation?: boolean | readonly EscalationStep[];
  labels?: Partial<LoaderLabels>;
  /** Injectable clock (\`set\` + \`now\`), for tests. */
  clock?: Scheduler;
}

/** The options that may change between runs (copy follows the product, not the instance). */
export type LoaderConfig = Omit<LoaderControllerOptions, 'clock'>;

export type LoaderListener = (snapshot: LoaderSnapshot) => void;
/** Runs synchronously before a snapshot is published: the moment to freeze a pose. */
export type LoaderChangeListener = (next: LoaderSnapshot, previous: LoaderSnapshot) => void;

export interface LoaderController {
  getSnapshot(): LoaderSnapshot;
  subscribe(listener: LoaderListener): () => void;
  onBeforeChange(listener: LoaderChangeListener): () => void;
  /** Start a task. A run already in flight is superseded and resolves \`cancelled\`. */
  run<T>(task: LoaderTask<T>): Promise<LoaderResult<T>>;
  /** The last task again, with a fresh signal and attempt + 1. Rejects before any run. */
  retry<T = unknown>(): Promise<LoaderResult<T>>;
  /** Abort the task in flight and settle as \`cancelled\`. No-op unless pending. */
  cancel(): void;
  /** Abort anything in flight and return to idle. */
  reset(): void;
  /** Change the words now (identical text does not notify). */
  setLabel(text: string): void;
  /** Update labels, timing or escalation for later transitions. */
  configure(config: LoaderConfig): void;
  /** Abort, clear every timer and stop notifying. Later calls do nothing; runs resolve \`cancelled\`. */
  destroy(): void;
}

const CANCELLED = Symbol('cancelled');
type Outcome = { ok: true; value: unknown } | { ok: false; error: unknown } | typeof CANCELLED;

function checkTiming(name: string, value: number | undefined) {
  if (value !== undefined && !(Number.isFinite(value) && value >= 0)) throw new RangeError(\`\${name} must be a finite, nonnegative number of milliseconds.\`);
}

function checkSteps(steps: LoaderConfig['escalation']) {
  if (!Array.isArray(steps)) return;
  for (const step of steps) {
    if (!step || !Number.isFinite(step.after) || step.after < 0 || typeof step.label !== 'string') {
      throw new TypeError('Escalation steps need a nonnegative \`after\` and a \`label\`.');
    }
  }
}

const initial = (label: string): LoaderSnapshot => ({
  state: 'idle', visible: false, shown: false, label, waitStep: 0, offerCancel: false, progress: null,
  attempt: 0, startedAt: null, shownAt: null, doneAt: null, settledAt: null, error: undefined, runId: 0,
});

interface Job {
  controller: AbortController;
  timers: Set<() => void>;
  finish: (outcome: Outcome) => void;
}

export function createLoaderController(options: LoaderControllerOptions = {}): LoaderController {
  const clock = options.clock ?? realScheduler;
  let delay = loaderDelay;
  let minVisible = minimumLoaderTime;
  let escalation: LoaderConfig['escalation'] = true;
  let labels: LoaderLabels = { ...loaderLabels };

  const configure = (config: LoaderConfig) => {
    checkTiming('delay', config.delay);
    checkTiming('minVisible', config.minVisible);
    checkSteps(config.escalation);
    if (config.delay !== undefined) delay = config.delay;
    if (config.minVisible !== undefined) minVisible = config.minVisible;
    if (config.escalation !== undefined) escalation = config.escalation;
    if (config.labels) labels = { ...loaderLabels, ...config.labels };
  };
  configure(options);

  let snapshot = initial(labels.idle);
  let current: Job | null = null;
  let lastTask: LoaderTask<unknown> | null = null;
  let destroyed = false;
  const listeners = new Set<LoaderListener>();
  const before = new Set<LoaderChangeListener>();

  const steps = (): readonly EscalationStep[] => (escalation === true ? defaultEscalation(labels) : escalation === false || escalation === undefined ? [] : escalation);

  const publish = (patch: Partial<LoaderSnapshot>) => {
    if (destroyed) return;
    const next = { ...snapshot, ...patch };
    const changed = (Object.keys(patch) as (keyof LoaderSnapshot)[]).some(key => !Object.is(next[key], snapshot[key]));
    if (!changed) return;
    const previous = snapshot;
    for (const listener of [...before]) listener(next, previous);
    snapshot = next;
    for (const listener of [...listeners]) listener(snapshot);
  };

  const later = (job: Job, callback: () => void, ms: number) => {
    const cancel = clock.set(() => { job.timers.delete(cancel); callback(); }, ms);
    job.timers.add(cancel);
  };

  /** End the job in flight without publishing; its run resolves \`cancelled\`. */
  const stop = () => {
    const job = current;
    if (!job) return;
    current = null;
    for (const cancel of job.timers) cancel();
    job.timers.clear();
    job.controller.abort();
    job.finish(CANCELLED);
  };

  const execute = <T,>(task: LoaderTask<T>, retrying: boolean): Promise<LoaderResult<T>> => {
    if (destroyed) return Promise.resolve({ status: 'cancelled' });
    if (typeof task !== 'function') throw new TypeError('Pass an async task function.');
    stop();
    lastTask = task as LoaderTask<unknown>;
    let finish!: (outcome: Outcome) => void;
    const outcome = new Promise<Outcome>(resolve => { finish = resolve; });
    const job: Job = { controller: new AbortController(), timers: new Set(), finish };
    current = job;
    const startedAt = clock.now();
    publish({
      state: 'pending', visible: false, shown: false, label: labels.pending, waitStep: 0, offerCancel: false, progress: null,
      attempt: retrying ? snapshot.attempt + 1 : 1, startedAt, shownAt: null, doneAt: null, settledAt: null, error: undefined, runId: snapshot.runId + 1,
    });

    later(job, () => { if (current === job) publish({ visible: true, shown: true, shownAt: clock.now() }); }, delay);
    steps().forEach((step, index) => later(job, () => {
      if (current !== job) return;
      publish({ waitStep: index + 1, label: step.label, offerCancel: snapshot.offerCancel || !!step.cancel });
    }, step.after));

    const report = (value: number | null) => {
      if (current !== job || snapshot.state !== 'pending') return;
      if (value === null) { publish({ progress: null }); return; }
      if (!Number.isFinite(value)) throw new TypeError('Progress must be a finite number or null.');
      publish({ progress: Math.min(1, Math.max(0, value)) });
    };

    // Race the task against the abort signal: a late result after cancel is ignored.
    Promise.resolve()
      .then(() => task({ signal: job.controller.signal, report }))
      .then(value => finish({ ok: true, value }), error => finish({ ok: false, error }));

    return outcome.then(result => {
      if (result === CANCELLED || current !== job) return { status: 'cancelled' } as const;
      for (const cancel of job.timers) cancel();
      job.timers.clear();
      const doneAt = clock.now();
      const settle = (): LoaderResult<T> => {
        current = null;
        if (result.ok) {
          publish({ state: 'success', visible: false, label: labels.success, offerCancel: false, doneAt, settledAt: clock.now() });
          return { status: 'success', value: result.value as T };
        }
        publish({ state: 'error', visible: false, label: labels.error, offerCancel: false, error: result.error, doneAt, settledAt: clock.now() });
        return { status: 'error', error: result.error };
      };
      const hold = snapshot.shownAt === null ? 0 : Math.max(0, snapshot.shownAt + minVisible - doneAt);
      if (hold === 0) return settle();
      // Shown: hold until the minimum has passed, so the mark never blinks. Cancel still wins.
      publish({ doneAt });
      let release!: (outcome: Outcome) => void;
      const held = new Promise<Outcome>(resolve => { release = resolve; });
      job.finish = release;
      later(job, () => release(result), hold);
      return held.then(next => (next === CANCELLED || current !== job ? { status: 'cancelled' } as const : settle()));
    });
  };

  return {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener);
      return () => { listeners.delete(listener); };
    },
    onBeforeChange(listener) {
      before.add(listener);
      return () => { before.delete(listener); };
    },
    run: task => execute(task, false),
    retry<T = unknown>() {
      if (!lastTask) return Promise.reject(new TypeError('Nothing to retry: call run(task) first.'));
      return execute(lastTask as LoaderTask<T>, true);
    },
    cancel() {
      if (destroyed || snapshot.state !== 'pending') return;
      stop();
      publish({ state: 'cancelled', visible: false, label: labels.cancelled, offerCancel: false, settledAt: clock.now() });
    },
    reset() {
      if (destroyed) return;
      stop();
      publish({ ...initial(labels.idle), attempt: snapshot.attempt, runId: snapshot.runId });
    },
    setLabel(text) {
      if (destroyed) return;
      publish({ label: String(text) });
    },
    configure(config) {
      if (destroyed) return;
      configure(config);
      if (snapshot.state === 'idle') publish({ label: labels.idle });
    },
    destroy() {
      if (destroyed) return;
      stop();
      destroyed = true;
      listeners.clear();
      before.clear();
    },
  };
}

/** One glyph per grapheme, so a Chinese character or an emoji glints whole. Long labels fall back to words. Pure. */
export function splitGlyphs(label: string, max = 24): string[] {
  const text = String(label);
  const Segmenter = (Intl as { Segmenter?: new (locale?: string, options?: { granularity: 'grapheme' }) => { segment(input: string): Iterable<{ segment: string }> } }).Segmenter;
  let glyphs = Segmenter ? [...new Segmenter(undefined, { granularity: 'grapheme' }).segment(text)].map(part => part.segment) : Array.from(text);
  if (glyphs.length > max) glyphs = text.split(/(\\s+)/).filter(Boolean);
  if (glyphs.length > max) glyphs = [...glyphs.slice(0, max - 1), glyphs.slice(max - 1).join('')];
  return glyphs;
}

/** The glint's pass scales with the text (one width in letters); every cycle ends in a 500ms rest. Pure. */
export function shimmerTiming(glyphs: number) {
  const pass = Math.min(3600, Math.max(2000, glyphs * 90));
  return { pass, cycle: pass + 500 };
}

/** Trailing ellipsis is drawn by CSS while pending, so screen readers never hear the dots. */
export const stripEllipsis = (text: string) => text.replace(/\\s*(…|\\.{3})\\s*$/, '');
`},{name:`useLoaderTask.ts`,code:`import { useCallback, useEffect, useLayoutEffect, useState, useSyncExternalStore } from 'react';
import { canUseDOM } from '../../motion/env';
import {
  createLoaderController,
  type LoaderController, type LoaderControllerOptions, type LoaderResult, type LoaderSnapshot, type LoaderTask,
} from './loaderController';

export interface UseLoaderTask extends LoaderSnapshot {
  /** The controller itself; pass the whole hook result to <Loader task>. */
  controller: LoaderController;
  /** Pending (hidden or visible). */
  busy: boolean;
  run: <T>(task: LoaderTask<T>) => Promise<LoaderResult<T>>;
  retry: <T = unknown>() => Promise<LoaderResult<T>>;
  cancel: () => void;
  reset: () => void;
  setLabel: (text: string) => void;
}

const useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect;

/**
 * React binding for createLoaderController. Defaults: 160ms delay, 320ms minimum once shown, words
 * that change at 4s and 10s. Labels and escalation may change between renders; they apply to the next
 * transition. Unmounting aborts the task in flight and clears every timer.
 */
export function useLoaderTask(options: LoaderControllerOptions = {}): UseLoaderTask {
  const [controller] = useState(() => createLoaderController(options));
  const snapshot = useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getSnapshot);
  const { delay, minVisible, escalation, labels } = options;
  const config = JSON.stringify({ delay, minVisible, escalation, labels });
  useIsomorphicLayoutEffect(() => {
    controller.configure(JSON.parse(config));
  }, [controller, config]);
  // reset, not destroy: React may mount an effect twice in development, and the controller must survive it.
  useEffect(() => () => controller.reset(), [controller]);
  const run = useCallback(<T,>(task: LoaderTask<T>) => controller.run(task), [controller]);
  const retry = useCallback(<T = unknown,>() => controller.retry<T>(), [controller]);
  const cancel = useCallback(() => controller.cancel(), [controller]);
  const reset = useCallback(() => controller.reset(), [controller]);
  const setLabel = useCallback((text: string) => controller.setLabel(text), [controller]);
  return { ...snapshot, controller, busy: snapshot.state === 'pending', run, retry, cancel, reset, setLabel };
}
`},{name:`loader.css`,code:D},{name:`tokens.css`,code:l}],ue={converge:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`5.5`,r:`2.6`}),(0,G.jsx)(`circle`,{cx:`18.5`,cy:`12`,r:`2.6`,opacity:`.55`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`18.5`,r:`2.6`,opacity:`.35`}),(0,G.jsx)(`circle`,{cx:`5.5`,cy:`12`,r:`2.6`,opacity:`.75`})]}),scan:(0,G.jsx)(G.Fragment,{children:[0,1,2].flatMap(e=>[0,1,2].map(t=>(0,G.jsx)(`rect`,{x:3+t*6.5,y:3+e*6.5,width:`5`,height:`5`,rx:`1.4`,opacity:[1,.7,.4,.26,.26][e+t]},`${e}${t}`)))}),helix:(0,G.jsx)(G.Fragment,{children:[0,1,2,3,4,5,6,7].map(e=>{let t=4+12*Math.abs(Math.sin(e/7*Math.PI));return(0,G.jsx)(`rect`,{x:2.2+e*2.65,y:12-t/2,width:`1.6`,height:t,rx:`.8`,opacity:.35+.65*(t-4)/12},e)})}),ripple:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,opacity:`.3`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`6`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,opacity:`.7`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`})]}),word:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`rect`,{x:`2`,y:`8`,width:`3.5`,height:`8`,rx:`1.2`,opacity:`.4`}),(0,G.jsx)(`rect`,{x:`6.5`,y:`8`,width:`3.5`,height:`8`,rx:`1.2`}),(0,G.jsx)(`rect`,{x:`11`,y:`8`,width:`3.5`,height:`8`,rx:`1.2`,opacity:`.55`}),(0,G.jsx)(`circle`,{cx:`17`,cy:`15`,r:`1`,opacity:`.4`}),(0,G.jsx)(`circle`,{cx:`19.5`,cy:`15`,r:`1`,opacity:`.4`}),(0,G.jsx)(`circle`,{cx:`22`,cy:`15`,r:`1`,opacity:`.4`})]}),orbit:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,opacity:`.14`}),(0,G.jsx)(`path`,{d:`M12 3.5a8.5 8.5 0 0 1 8.5 8.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`})]}),dots:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`circle`,{cx:`5`,cy:`13`,r:`2.5`,opacity:`.35`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`10.5`,r:`2.5`}),(0,G.jsx)(`circle`,{cx:`19`,cy:`13`,r:`2.5`,opacity:`.35`})]}),line:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`rect`,{x:`2`,y:`11`,width:`20`,height:`2.5`,rx:`1.25`,opacity:`.14`}),(0,G.jsx)(`rect`,{className:`loaders-thumb__accent`,x:`6`,y:`11`,width:`9`,height:`2.5`,rx:`1.25`})]}),skeleton:(0,G.jsx)(G.Fragment,{children:[0,1,2].map(e=>(0,G.jsxs)(`g`,{opacity:[1,.7,.45][e],children:[(0,G.jsx)(`rect`,{x:`2`,y:3.5+e*6.5,width:`4`,height:`4`,rx:`1.2`}),(0,G.jsx)(`rect`,{x:`8`,y:4.5+e*6.5,width:[9,7,8][e],height:`2`,rx:`1`}),(0,G.jsx)(`rect`,{x:`18.5`,y:4.5+e*6.5,width:`3.5`,height:`2`,rx:`1`})]},e))})};function de({variant:e}){return(0,G.jsx)(`svg`,{className:`loaders-thumb`,"data-group":A(e),"data-form":e,viewBox:`0 0 24 24`,width:`24`,height:`24`,"aria-hidden":`true`,focusable:`false`,children:ue[e]})}var fe=e=>k[e].map(e=>({id:e,label:N[e].name,description:N[e].description,thumb:(0,G.jsx)(de,{variant:e})})),pe=[{value:`agent`,label:`Agent`},{value:`general`,label:`General`}],me=[{value:`sm`,label:`20px`},{value:`md`,label:`36px`},{value:`lg`,label:`52px`},{value:`xl`,label:`96px`}],he=[{value:`slow`,label:`Slow`},{value:`natural`,label:`Natural`},{value:`fast`,label:`Fast`}],ge=[{value:`instant`,label:`40ms`},{value:`short`,label:`1.6s`},{value:`long`,label:`6s`},{value:`stalled`,label:`12s`}],_e=[{value:`success`,label:`Success`},{value:`error`,label:`Error`}],ve=({signal:e})=>new Promise(t=>e.addEventListener(`abort`,()=>t(),{once:!0}));function ye(){return(0,G.jsxs)(`ul`,{className:`loaders-order`,children:[(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`span`,{className:`loaders-order__icon`,"aria-hidden":`true`}),` `,(0,G.jsx)(`span`,{children:`Linen overshirt`}),` `,(0,G.jsx)(`b`,{children:`$42.00`})]}),(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`span`,{className:`loaders-order__icon`,"aria-hidden":`true`}),` `,(0,G.jsx)(`span`,{children:`Shipping`}),` `,(0,G.jsx)(`b`,{children:`$5.01`})]}),(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`span`,{className:`loaders-order__icon`,"aria-hidden":`true`}),` `,(0,G.jsx)(`span`,{children:`Protection`}),` `,(0,G.jsx)(`b`,{children:`$0.99`})]})]})}var be={state:`idle`,startedAt:null,shownAt:null,doneAt:null,settledAt:null,waitStep:0,attempt:0,showcase:!0,label:``};function xe({demo:r,variant:i,active:o,onReport:s}){let c=N[i],l=e({labels:{pending:c.pending,still:c.still,success:c.success,error:c.error}}),{controller:u}=l,[d,f]=(0,O.useState)(!0),p=(0,O.useRef)(null),m=(0,O.useRef)(null),h=(0,O.useRef)(!1),g=(0,O.useCallback)(()=>{f(!0),u.configure({escalation:!1}),u.run(ve)},[u]);(0,O.useEffect)(()=>{g()},[i,g]);let _=(0,O.useRef)(o);(0,O.useEffect)(()=>{_.current&&!o&&g(),_.current=o},[o,g]);let v=(0,O.useRef)(!1);v.current=!d&&l.state!==`pending`;let y=(0,O.useRef)(!0);(0,O.useEffect)(()=>{y.current?y.current=!1:v.current&&g()},[r.outcome,r.length,g]),(0,O.useEffect)(()=>{s({state:l.state,startedAt:l.startedAt,shownAt:l.shownAt,doneAt:l.doneAt,settledAt:l.settledAt,waitStep:l.waitStep,attempt:l.attempt,showcase:d,label:l.label})},[l.state,l.startedAt,l.shownAt,l.doneAt,l.settledAt,l.waitStep,l.attempt,l.label,d,s]),(0,O.useLayoutEffect)(()=>{l.state!==`pending`&&((document.activeElement===m.current||h.current)&&p.current?.focus(),h.current=!1)},[l.state]);let b=!d,x=b&&l.state===`error`;return(0,G.jsxs)(`div`,{className:`loaders-stage`,"data-size":r.size,children:[(0,G.jsx)(t,{task:l,variant:i,size:r.size,tempo:r.tempo,announce:!1,children:i===`skeleton`?(0,G.jsx)(ye,{}):void 0}),(0,G.jsxs)(`div`,{className:`loaders-stage__actions`,children:[(0,G.jsx)(a,{ref:p,size:`sm`,onClick:()=>{f(!1),u.configure({escalation:!0}),x?u.retry():u.run(n(M[r.length],r.outcome))},children:x?`Retry`:`Run task`}),(0,G.jsx)(a,{ref:m,size:`sm`,variant:`ghost`,disabled:!(b&&l.state===`pending`),onFocus:()=>{h.current=!0},onBlur:()=>{h.current=!1},onClick:()=>{u.cancel(),p.current?.focus()},children:`Cancel`})]})]})}var Se=(e,t)=>[{id:`idle`,label:`Idle`},{id:`pending`,label:`Pending`},{id:`visible`,label:`Visible`},...t?[{id:`still`,label:`Still working`}]:[],{id:`done`,label:e===`error`?`Error`:e===`cancelled`?`Canceled`:`Success`}];function Z(){return(0,G.jsxs)(`span`,{className:`loaders-hint`,"aria-live":`off`,children:[(0,G.jsx)(`span`,{className:`loaders-chip`,children:`Simulated`}),`Run the task to see it arrive.`]})}function Ce(){let[e,t]=(0,O.useState)(j),[n,r]=(0,O.useState)(be),i=e=>n=>t(t=>({...t,[e]:n})),a=(0,O.useMemo)(()=>fe(e.group),[e.group]),o=e=>t(t=>t.group===e?t:{...t,group:e,variant:k[e][0]}),s=e=>t(t=>({...t,group:A(e),variant:e})),c=n.waitStep>0||M[e.length]>=4e3;return(0,G.jsx)(v,{page:`loaders`,name:`Loader`,variants:a,variant:e.variant,onVariantChange:s,status:n.showcase?(0,G.jsx)(Z,{}):n.label,animated:!0,trail:(0,G.jsxs)(`div`,{className:`loaders-trail`,"data-escalates":c||void 0,children:[(0,G.jsx)(m,{states:Se(n.state,c),active:W(n),label:`Loader states`}),(0,G.jsx)(`p`,{className:`loaders-trail__timing`,children:U(n)})]}),code:{setup:P,usage:te(e),usageFile:`${N[e.variant].component}.tsx`,sources:le},controls:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(g,{label:`Group`,value:e.group,options:pe,onChange:o}),(0,G.jsx)(g,{label:`Size`,value:e.size,options:me,onChange:i(`size`)}),(0,G.jsx)(g,{label:`Tempo`,value:e.tempo,options:he,onChange:i(`tempo`)}),(0,G.jsx)(g,{label:`Task`,value:e.length,options:ge,onChange:i(`length`)}),(0,G.jsx)(g,{label:`Outcome`,value:e.outcome,options:_e,onChange:i(`outcome`)})]}),children:({variant:t,active:n})=>(0,G.jsx)(xe,{demo:e,variant:t,active:n,onReport:r})})}var Q=e=>({variant:e,size:`lg`,state:`pending`,label:N[e].pending}),we=[{title:`Idle`,note:`Nothing to wait for. Nothing shown.`,demo:{variant:`orbit`,size:`lg`,state:`idle`,label:``}},{title:`Hidden`,note:`The first 160ms: still nothing.`,demo:{variant:`orbit`,size:`lg`,state:`pending`,visible:!1,label:`Verifying payment…`}},{title:`Visible`,note:`The mark arrives, then the words.`,demo:{variant:`orbit`,size:`lg`,state:`pending`,label:`Verifying payment…`}},{title:`Still working`,note:`At 4s the words change. The tempo doesn’t.`,demo:{variant:`orbit`,size:`lg`,state:`pending`,label:`Still verifying payment…`}},{title:`Measured`,note:`Only what was counted. From 12 o’clock.`,demo:{variant:`orbit`,size:`lg`,state:`pending`,progress:.62,label:`Uploading 3 of 5 claim photos…`}},{title:`Success`,note:`The ring closes; a check draws.`,demo:{variant:`orbit`,size:`lg`,state:`success`,label:`Payment verified.`}},{title:`Error`,note:`A cross, and words that say what next.`,demo:{variant:`orbit`,size:`lg`,state:`error`,label:`Payment not verified. Try again.`}},{title:`Canceled`,note:`The mark leaves. The request is aborted.`,demo:{variant:`orbit`,size:`lg`,state:`cancelled`,label:`Payment canceled.`}}];function $({demo:e}){return(0,G.jsx)(t,{variant:e.variant,size:e.size,state:e.state,visible:e.visible,label:e.label,progress:e.progress??null,still:e.still,announce:!1})}function Te(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(f,{id:`loaders`}),(0,G.jsx)(Ce,{}),(0,G.jsx)(p,{title:`Every wait, accounted for.`,lead:`Nothing for a moment. Then motion. Then the thing itself.`,reasons:[{title:`One contract, nine shapes`,text:`Every form runs the same task: 160ms of nothing, a 320ms hold once seen, and a finish only the task decides.`},{title:`Words, never tempo`,text:`At 4s the words change; at 10s they offer a way out. The beat never speeds up to look busy, and nothing fills unless it was measured.`},{title:`A clear arrival`,text:`The loop freezes where it is and eases into a check, a cross, a closed ring or the content itself. Nothing snaps.`}]}),(0,G.jsx)(b,{id:`states`,title:`States`,lead:`Five states and the two moments inside pending, on one form. Terminal poses draw only if the mark was ever shown.`,children:(0,G.jsx)(T,{columns:4,children:we.map(e=>(0,G.jsx)(C,{title:e.title,note:e.note,inspect:{code:z(e.demo)},children:(0,G.jsx)(`div`,{className:`loaders-slot`,"data-empty":e.demo.visible===!1||void 0,children:(0,G.jsx)($,{demo:e.demo})})},e.title))})}),(0,G.jsx)(b,{id:`contract`,title:`Contract`,lead:`A wait is a promise to a task, not a decoration. Press a length and watch the controller keep it, in real milliseconds.`,children:(0,G.jsx)(ie,{})}),(0,G.jsx)(b,{id:`forms`,title:`Forms`,lead:`Nine forms in two groups, each with the sentence it was made for. Fewer shapes, each with a reason.`,children:(0,G.jsxs)(`div`,{className:`loaders-groups`,children:[(0,G.jsxs)(`section`,{className:`loaders-group`,"aria-labelledby":`loaders-group-agent`,children:[(0,G.jsxs)(`header`,{className:`loaders-group__head`,children:[(0,G.jsx)(`h3`,{id:`loaders-group-agent`,className:`loaders-group__title`,children:`Agent`}),(0,G.jsx)(`p`,{className:`loaders-group__lead`,children:`A quiet blue signal while an agent works for you. Activity, never invented progress.`})]}),(0,G.jsx)(T,{columns:3,children:k.agent.map(e=>(0,G.jsx)(C,{title:N[e].name,note:`“${N[e].pending}” ${N[e].description}`,span:e===`word`?2:1,inspect:{code:z(Q(e))},children:(0,G.jsx)($,{demo:Q(e)})},e))})]}),(0,G.jsxs)(`section`,{className:`loaders-group`,"aria-labelledby":`loaders-group-general`,children:[(0,G.jsxs)(`header`,{className:`loaders-group__head`,children:[(0,G.jsx)(`h3`,{id:`loaders-group-general`,className:`loaders-group__title`,children:`General`}),(0,G.jsx)(`p`,{className:`loaders-group__lead`,children:`Everyday waits in ink, from one button to a whole page.`})]}),(0,G.jsxs)(T,{columns:3,children:[k.general.map(e=>(0,G.jsx)(C,{title:N[e].name,note:`“${N[e].pending}” ${N[e].description}`,span:e===`skeleton`?2:1,inspect:{code:z(Q(e))},children:(0,G.jsx)($,{demo:Q(e)})},e)),(0,G.jsx)(C,{title:`Line, measured`,note:`“Uploading claim photos…” It grows only when the task reports.`,inspect:{code:z({variant:`line`,size:`lg`,state:`pending`,progress:.4,label:`Uploading claim photos…`})},children:(0,G.jsx)($,{demo:{variant:`line`,size:`lg`,state:`pending`,progress:.4,label:`Uploading claim photos…`}})})]})]})]})}),(0,G.jsx)(b,{id:`in-context`,title:`In context`,lead:`An agent comparing protection plans, and a bank that takes its time. The words change, a way out appears, and the answer lands where the wait was.`,children:(0,G.jsx)(ce,{})}),(0,G.jsx)(b,{id:`reference`,title:`Reference`,children:(0,G.jsxs)(`div`,{className:`kit-folds`,children:[(0,G.jsx)(h,{title:`Properties & states`,children:(0,G.jsx)(`div`,{className:`loaders-ref`,children:u.map(e=>(0,G.jsxs)(`div`,{className:`loaders-ref__item`,children:[(0,G.jsx)(`h3`,{className:`loaders-ref__name`,children:(0,G.jsx)(`code`,{children:e.name})}),(0,G.jsx)(y,{props:e.props,caption:`${e.name} properties`})]},e.name))})}),(0,G.jsx)(h,{title:`Usage & keyboard`,children:(0,G.jsxs)(`div`,{className:`kit-stack`,children:[(0,G.jsx)(S,{number:1,title:`Say what is happening`,do:{text:`Name the work in a few words. The mark is decoration; the words are the message.`,example:(0,G.jsx)(t,{variant:`orbit`,size:`md`,layout:`inline`,state:`pending`,label:`Verifying payment…`,still:!0,announce:!1})},dont:{text:`A bare spinner, or "Loading…" for every wait. Nobody knows what they are waiting for.`,example:(0,G.jsx)(t,{variant:`orbit`,size:`md`,layout:`bare`,state:`pending`,label:`Loading…`,still:!0,announce:!1})}}),(0,G.jsx)(S,{number:2,title:`Change the words, not the tempo`,do:{text:`At 4s say what is still happening; at 10s offer a way out.`,example:(0,G.jsx)(t,{variant:`dots`,size:`sm`,layout:`inline`,state:`pending`,label:`Still waiting for your bank…`,still:!0,announce:!1})},dont:{text:`Speed the loop up, or promise "almost done". Never say almost.`,example:(0,G.jsx)(t,{variant:`dots`,size:`sm`,layout:`inline`,state:`pending`,label:`Almost there…`,still:!0,announce:!1})}}),(0,G.jsx)(S,{number:3,title:`Measure, or stay indeterminate`,do:{text:`Report progress only for counted work: 3 of 5 photos.`,example:(0,G.jsx)(t,{variant:`line`,size:`md`,state:`pending`,progress:.6,label:`Uploading 3 of 5 photos…`,still:!0,announce:!1})},dont:{text:`Trickle a bar toward 90% on a timer. It is a guess dressed as a fact.`,example:(0,G.jsx)(t,{variant:`line`,size:`md`,state:`pending`,progress:.9,label:`90%`,still:!0,announce:!1})}}),(0,G.jsx)(S,{number:4,title:`One loader per wait`,do:{text:`Let the region or the action own the wait: one mark, one sentence.`,example:(0,G.jsx)(t,{variant:`skeleton`,size:`sm`,state:`pending`,lines:2,label:`Loading your order…`,still:!0,announce:!1})},dont:{text:`Stack a page spinner on a skeleton on a busy button.`,example:(0,G.jsxs)(`span`,{className:`loaders-pile`,children:[(0,G.jsx)(t,{variant:`orbit`,size:`sm`,state:`pending`,layout:`bare`,still:!0,announce:!1}),(0,G.jsx)(t,{variant:`skeleton`,size:`sm`,lines:2,state:`pending`,layout:`bare`,still:!0,announce:!1})]})}}),(0,G.jsx)(w,{keys:d.keys??[]})]})}),(0,G.jsx)(h,{title:`Tokens`,children:(0,G.jsxs)(`div`,{className:`kit-stack`,children:[(0,G.jsx)(x,{tokens:d.tokens??[]}),(0,G.jsx)(E,{tokens:[...d.tokens??[],`--z-color-ink`,`--z-color-danger`,`--z-ease-in`,`--z-motion-exit`,`--z-motion-replay`,`--z-ease-spring`]})]})})]})})]})}export{Te as default};