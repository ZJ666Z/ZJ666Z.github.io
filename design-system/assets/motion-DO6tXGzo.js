import{Cn as e,Dn as t,En as n,Et as r,Sn as i,Tn as a,Tt as o,Xt as s,Zt as c,_n as l,an as u,bn as d,dn as f,en as p,fn as m,g as h,gt as g,hn as _,in as v,jt as y,kn as ee,ln as te,mn as ne,mt as b,nn as x,on as re,p as S,pn as C,pt as w,rn as ie,sn as ae,st as oe,un as se,vn as ce,wn as le,wt as T,xn as ue}from"./route-DiUIWQAn.js";import{t as de}from"./tokens--8wjVqaD.js";import{b as fe,v as pe,x as me,y as he}from"./docs-C3rBO14N.js";import{A as ge,C as E,E as _e,O as ve,c as D,d as ye,f as be,g as O,i as xe,k,l as Se,n as A,o as j,r as Ce,s as we,t as Te,x as Ee,y as De}from"./kit-CylDtrmy.js";import{t as Oe}from"./lab-CCWSxnSa.js";import{t as ke}from"./projects-B499T4Vf.js";import{t as Ae}from"./usePress-jGC2oW5J.js";var M=ee(),N=Object.freeze({spring:{label:`Spring`,token:`--z-ease-spring`,css:`var(--z-ease-spring)`,word:`Space and shape`},out:{label:`Expo-out`,token:`--z-ease-out`,css:`var(--z-ease-out)`,word:`Feedback and entrances`},in:{label:`Ease-in`,token:`--z-ease-in`,css:`var(--z-ease-in)`,word:`Exits only`}}),P=Object.freeze([{id:`press`,title:`Press`,token:`--z-motion-press`,ms:f.press,ease:`out`,role:`Scale to .96 under a finger or a key.`,demo:`Press the button, or hold Space.`},{id:`exit`,title:`Exit`,token:`--z-motion-exit`,ms:f.exit,ease:`in`,role:`Dialogs, toasts and sheets leave faster than they arrive.`,demo:`Dismiss the confirmation.`},{id:`feedback`,title:`Feedback`,token:`--z-motion-feedback`,ms:f.feedback,ease:`out`,role:`Color, opacity, focus and small icon swaps.`,demo:`Copy the order ID.`},{id:`control`,title:`Control`,token:`--z-motion-control`,ms:f.control,ease:`spring`,role:`Indicators and thumbs: the segmented glide, the switch.`,demo:`Choose a payment method.`},{id:`layout`,title:`Layout`,token:`--z-motion-layout`,ms:f.layout,ease:`spring`,role:`Morphs, lifts and size changes: the Pay button, a rolling total.`,demo:`Pay, or change the total.`},{id:`enter`,title:`Entrance`,token:`--z-motion-enter`,ms:f.enter,phoneMs:f.enterPhone,ease:`out`,role:`Scroll entrances: travel 28px, then rest.`,demo:`Replay the entrance.`},{id:`hover`,title:`Hover`,token:`--z-motion-hover`,ms:f.hover,ease:`spring`,role:`The label roll and the hover arrows.`,demo:`Hover the button.`},{id:`media`,title:`Media`,token:`--z-motion-media`,ms:f.media,ease:`spring`,role:`Card image zoom. The slowest tempo there is.`,demo:`Hover the image.`}]),F=Math.max(...P.map(e=>e.ms)),je=e=>P.find(t=>t.id===e),Me=e=>e.ms/F,I=Object.freeze([{id:`spring`,label:`Spring`,at:d},{id:`out`,label:`Expo-out`,at:ce},{id:`in`,label:`Ease-in`,at:l}]),L=e=>I.find(t=>t.id===e),R=Object.freeze({width:640,height:340,left:48,top:24,right:20,bottom:54}),z=(e,t=R)=>t.left+e*(t.width-t.left-t.right),B=(e,t=R)=>t.top+(1-e)*(t.height-t.top-t.bottom),V=e=>Math.round(e*100)/100;function H(e,t=120,n=R){let r=[];for(let i=0;i<=t;i++){let a=i/t;r.push(`${i===0?`M`:`L`}${V(z(a,n))} ${V(B(e(a),n))}`)}return r.join(` `)}function Ne(e=R){return _.map((t,n)=>{let r=n/(_.length-1);return{x:V(z(r,e)),y:V(B(t,e)),t:r,value:t}})}var Pe=e=>e>=1?1:ue(e*ne);function Fe(){let e=0;for(let t=0;t<_.length-1;t++){let n=t/(_.length-1);e=Math.max(e,Math.abs(_[t]-Pe(n)))}return e}function Ie(e){return{half:i(e,.5),most:i(e,.9),almost:i(e,.99)}}var U=e=>`${Math.round(e*100)}%`,Le=e=>e.toFixed(3),W=(e,t)=>Math.round(e*t);function Re({bank:e=1400,hold:t=1600,delay:n=160}={}){let r=e,i=r+120;return[{id:`press`,label:`Pay presses in`,detail:`Scale .96, 120ms`,tier:`press`,ease:`out`,start:0,duration:f.press},{id:`wait`,label:`Nothing moves`,detail:`The first 160ms stay still`,tier:null,ease:null,start:0,duration:n},{id:`close`,label:`Pay closes to a circle`,detail:`Width and radius, 520ms spring`,tier:`layout`,ease:`spring`,start:n,duration:f.layout},{id:`wave`,label:`Dots wave while the bank answers`,detail:`A loop, only while it waits`,tier:null,ease:null,start:n+f.layout,duration:Math.max(0,r-n-f.layout),loop:!0},{id:`land`,label:`Pay lands green, the check draws`,detail:`Color 200ms, check 420ms`,tier:`feedback`,ease:`out`,start:r,duration:420},{id:`status`,label:`The status line says Paid`,detail:`Opacity, 200ms`,tier:`feedback`,ease:`out`,start:i,duration:f.feedback},{id:`receipt`,label:`The receipt rises`,detail:`28px travel, 600ms`,tier:`enter`,ease:`out`,start:i,duration:f.enter},{id:`rows`,label:`Its rows follow, 40ms apart`,detail:`Stagger, capped at 160ms`,tier:`enter`,ease:`out`,start:i+f.stagger,duration:f.enter+f.stagger*2},{id:`open`,label:`Pay opens to its label`,detail:`Width and radius, 520ms spring`,tier:`layout`,ease:`spring`,start:r+t,duration:f.layout}]}var ze=e=>Math.max(...e.map(e=>e.start+e.duration)),Be=Object.freeze([[`Cart reviewed`,`Two items, one promo.`],[`Address confirmed`,`Brooklyn, NY.`],[`Shipping protection added`,`$0.99 for 30 days.`],[`Card verified`,`Visa ending 4242.`],[`Payment authorized`,`Held by your bank.`],[`Order placed`,`ZJ-2048.`],[`Packed`,`At the Reno warehouse.`],[`Label created`,`Standard shipping.`],[`Picked up`,`By the carrier.`],[`In transit`,`Arrives Oct 16.`],[`Out for delivery`,`Today by 9 pm.`],[`Delivered`,`Left at the door.`]].map(([e,t],n)=>({id:`row-${n+1}`,title:e,detail:t,delay:ie(n%6)})));function Ve(e,t){let n=`${t?`Replay`:`First play`} · ${e.distance}px · ${e.duration}ms`;return e.delay>0?`${n} · +${e.delay}ms`:n}function He(e=!1){return{first:x({mobile:e}),title:x({type:`title`,mobile:e}),image:x({type:`image`,mobile:e}),replay:x({replay:!0,mobile:e})}}var Ue=Object.freeze([{what:`Press`,normal:`Scales to .96 in 120ms.`,reduced:`No scale. The state still changes.`},{what:`Hover`,normal:`The label rolls; filled buttons lean ±2px.`,reduced:`Neither. Focus rings stay.`},{what:`Controls`,normal:`The indicator glides on the spring.`,reduced:`It lands at once. The choice reads the same.`},{what:`Entrances`,normal:`Rise 28px over 600ms.`,reduced:`The content is simply there.`},{what:`Pay`,normal:`Closes to a circle and waves.`,reduced:`A still circle, the middle dot leading. Same words.`},{what:`Numbers`,normal:`Digits roll on their own reels.`,reduced:`The number changes.`},{what:`Loops`,normal:`Run only while seen.`,reduced:`Stop. A still pose says what they said.`}]),G=(e,t=`transition: none;`)=>`
@media (prefers-reduced-motion: reduce) {
  ${e} {
    ${t}
  }
}
`;Object.freeze({press:`.pay {
  transition: scale var(--z-motion-feedback) var(--z-ease-out);
}

.pay:active,
.pay[data-pressed] {
  scale: var(--z-press-scale);
  transition-duration: var(--z-motion-press);
}
${G(`.pay`,`transition: none;
    scale: none;`)}`,exit:`.toast {
  transition:
    opacity var(--z-motion-exit) var(--z-ease-in),
    translate var(--z-motion-exit) var(--z-ease-in);
}

.toast[data-leaving] {
  opacity: 0;
  translate: 0 8px;
}
${G(`.toast`)}`,feedback:`.copy {
  transition:
    color var(--z-motion-feedback) var(--z-ease-out),
    background-color var(--z-motion-feedback) var(--z-ease-out),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}
${G(`.copy`)}`,control:`.thumb {
  transition: translate var(--z-motion-control) var(--z-ease-spring);
}

.segmented[data-value='annual'] .thumb {
  translate: 100% 0;
}
${G(`.thumb`)}`,layout:`.total {
  transition: translate var(--z-motion-layout) var(--z-ease-spring);
}

.summary[data-protected] .total {
  translate: 0 -4px;
}
${G(`.total`)}`,enter:`import { Reveal, Stagger } from '@zijie/ui';

/* Plays once, 28px over 600ms (20px and 520ms on phones).
   Siblings follow 40ms apart, capped at 160ms. */
export function Receipt() {
  return (
    <Stagger>
      <Reveal as="h2">Paid</Reveal>
      <Reveal as="p">A receipt is on its way.</Reveal>
      <Reveal as="dl">…</Reveal>
    </Stagger>
  );
}`,hover:`@media (hover: hover) and (pointer: fine) {
  .link:hover .arrow {
    translate: 4px 0;
    transition: translate var(--z-motion-hover) var(--z-ease-spring);
  }
}
${G(`.link .arrow`,`translate: none;
    transition: none;`)}`,media:`.card img {
  transition: scale var(--z-motion-media) var(--z-ease-spring);
}

@media (hover: hover) and (pointer: fine) {
  .card:hover img {
    scale: 1.1;
  }
}
${G(`.card img`,`scale: none;
    transition: none;`)}`});var We=`:root {
  /* Stiffness 300, damping 60, mass 1, sampled into 26 stops. */
  --z-ease-spring: ${m};
  --z-ease-out: cubic-bezier(.16, 1, .3, 1);
}

.sheet {
  transition: translate var(--z-motion-layout) var(--z-ease-spring);
}
`,Ge=`import { SPRING, animate } from '@zijie/ui/motion';

animate(panel, [{ translate: '0 12px', opacity: 0 }, { translate: '0 0', opacity: 1 }], {
  duration: 520,
  easing: SPRING,
});
`,Ke=`import { Button, RollLabel } from '@zijie/ui';

export function Examples() {
  return (
    <>
      {/* Text labels roll by default. */}
      <Button>Pay $48.00</Button>

      {/* Your own control: any <button>, <a> or [data-roll-host]. */}
      <button className="chip"><RollLabel>View receipt</RollLabel></button>
    </>
  );
}
`,qe=`import { useRef } from 'react';
import { useMagnetic } from '@zijie/ui';

export function Chip() {
  const ref = useRef<HTMLButtonElement>(null);
  useMagnetic(ref); // at most ±2px, fine pointers only
  return <button ref={ref} className="chip z-magnetic">Pay</button>;
}
`,Je=`import { composeHandlers, usePress } from '@zijie/ui';

export function Chip({ onKeyDown, ...props }) {
  const { pressProps } = usePress();
  return (
    <button
      {...props}
      className="chip z-pressable"
      {...pressProps}
      onKeyDown={composeHandlers(pressProps.onKeyDown, onKeyDown)}
    />
  );
}
`,Ye=`import { ProjectCard } from '@zijie/ui';

/* The image zooms to 1.1 over 800ms; the arrow flies out over 500ms.
   Touch gets the same on :active. Only links zoom. */
export function Work() {
  return (
    <ProjectCard
      href="/work/amazon-checkout"
      title="Amazon Checkout & Pay"
      description="Rebalancing checkout to protect long-term retention."
      image="/assets/img/cover-amazon-checkout.png"
      tags={['UX/UI Design', 'B2C']}
    />
  );
}
`,Xe=`.nav a {
  position: relative;
}

/* Covers the link, so translate percentages are the link's own width. */
.nav a::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  filter: blur(3px);
  translate: calc(-50% - 10px) 0;
  background: radial-gradient(circle, #8e8e8e 1.5px, transparent 1.6px) 50% 30px / 100% 3px no-repeat;
  pointer-events: none;
}

@media (hover: hover) and (pointer: fine) {
  .nav a:hover::after,
  .nav a[aria-current='page']::after {
    opacity: 1;
    filter: none;
    translate: 0 0;
    transition:
      translate var(--z-motion-hover) var(--z-ease-spring),
      opacity var(--z-motion-hover) var(--z-ease-spring),
      filter var(--z-motion-hover) var(--z-ease-spring);
  }
}
`,Ze=`import { Reveal, Stagger, createRevealController } from '@zijie/ui';

/* The page: a Reveal per block, a Stagger per group. */
export function Orders({ orders }) {
  return (
    <Stagger>
      {orders.map(order => <Reveal key={order.id}>{order.title}</Reveal>)}
    </Stagger>
  );
}

/* A scroll container (a sheet, a panel): its own controller, its own viewport. */
const reveal = createRevealController({ root: scroller });
const stop = reveal.register(row, { type: 'rise', delay: 40 });
// stop(), or reveal.dispose() when the container goes.
`,Qe=`import { useEffect, useRef } from 'react';
import {
  PayButton, animate, staggerOffset, useAsyncAction,
} from '@zijie/ui';

export function Confirmation() {
  const pay = useAsyncAction();
  const receipt = useRef<HTMLDivElement>(null);

  // A state change is not a scroll: use animate().
  useEffect(() => {
    if (pay.state !== 'success') return;
    const rows = receipt.current?.children ?? [];
    [...rows].forEach((row, index) => {
      animate(
        row,
        [
          { opacity: 0, translate: '0 28px' },
          { opacity: 1, translate: '0 0' },
        ],
        { delay: 120 + staggerOffset(index) },
      );
    });
  }, [pay.state]);

  return (
    <>
      <PayButton
        state={pay.state}
        onConfirm={() => pay.run(charge)}
      >
        Pay $48.00
      </PayButton>
      <div ref={receipt}>…</div>
    </>
  );
}
`,$e=`import { prefersReducedMotion, useReducedMotion } from '@zijie/ui';

/* Read it where you animate, not once at load: it can change mid-session. */
if (!prefersReducedMotion()) element.animate(frames, timing);

/* In React, the live value. */
const reduced = useReducedMotion();
`,et=`/* Animate: transform, translate, scale, rotate, opacity, filter,
   clip-path, stroke-dashoffset, colors and shadows. */
.sheet {
  transition:
    translate var(--z-motion-control) var(--z-ease-spring),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}

/* Never: width, height, inset, margin. Layout belongs to the browser. */
`,tt=e=>e.group===`Motion`;function nt(e){let t=e.filter(tt),n=(e,t)=>e.flatMap(e=>{let n=t(e);return n===void 0?[]:[`  ${e.variable}: ${n};`]}),r=[{title:`Curves: one spring for space, expo-out for feedback, ease-in for exits`,test:e=>e.variable.startsWith(`--z-ease`)},{title:`Tempos`,test:e=>/^--z-(motion-(press|feedback|control|layout|hover|media|exit|enter|title|replay)|press-scale)$/.test(e.variable)},{title:`Entrance travel and stagger`,test:e=>/travel|replay-from|stagger|delay-cap/.test(e.variable)}],i=new Set,a=r.flatMap(e=>{let r=t.filter(t=>!i.has(t.variable)&&e.test(t));r.forEach(e=>i.add(e.variable));let a=n(r,e=>e.value);return a.length?[`  /* ${e.title} */\n${a.join(`
`)}`]:[]}),o=t.filter(e=>!i.has(e.variable));o.length&&a.push(`  /* Other */\n${n(o,e=>e.value).join(`
`)}`);let s=n(t,e=>e.mobile),c=s.length?`\n\n@media (max-width: 809.98px) {\n  :root {\n${s.map(e=>`  ${e}`).join(`
`)}\n  }\n}`:``;return`:root {\n${a.join(`

`)}\n}${c}\n`}var K=u(),rt=(0,M.createContext)({system:!1,preview:!1,reduced:!1,setPreview:()=>{}}),q=()=>(0,M.useContext)(rt);function it(t){let n=window.matchMedia?.(e);return n?.addEventListener(`change`,t),()=>n?.removeEventListener(`change`,t)}var at=()=>window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1;function ot({children:e}){let[n,r]=(0,M.useState)(!1),i=(0,M.useSyncExternalStore)(it,at,()=>!1);(0,M.useEffect)(()=>(t(n),()=>t(!1)),[n]);let a=(0,M.useMemo)(()=>({system:i,preview:n,reduced:i||n,setPreview:r}),[i,n]);return(0,K.jsx)(rt.Provider,{value:a,children:e})}function st(){let{system:e,preview:t,setPreview:n}=q();return(0,K.jsx)(`div`,{className:`motion-preview`,children:(0,K.jsx)(S,{label:`Reduced motion preview`,description:e?`On in your system settings.`:`Try the page without movement.`,checked:e||t,disabled:e,onChange:n})})}var ct=1400,lt=Re({bank:ct}),J=Math.ceil(ze(lt)/400)*400,ut=[0,1e3,2e3,3e3],Y={style:`currency`,currency:`USD`};function dt({total:e,shown:t}){let n=(0,M.useRef)(null);return(0,M.useEffect)(()=>{let e=n.current;if(!t||!e)return;let r=[...e.querySelectorAll(`[data-rise]`)],i=a(),o=r.map((e,t)=>{let n=x({mobile:i,delay:t*f.stagger});return v(e,[{opacity:0,translate:`0 ${n.distance}px`},{opacity:1,translate:`0 0`}],{duration:n.duration,delay:n.delay})});return()=>o.forEach(e=>e?.cancel())},[t]),(0,K.jsx)(`div`,{ref:n,className:`motion-receipt-slot`,"data-shown":t||void 0,children:t?(0,K.jsxs)(`div`,{className:`motion-receipt-card`,children:[(0,K.jsx)(`p`,{className:`motion-receipt-card__title`,"data-rise":!0,children:`Receipt ZJ-2048`}),(0,K.jsxs)(`p`,{className:`motion-receipt-card__line`,"data-rise":!0,children:[(0,K.jsx)(`span`,{children:`Visa ending 4242`}),(0,K.jsx)(`span`,{children:`Paid`})]}),(0,K.jsxs)(`p`,{className:`motion-receipt-card__line`,"data-rise":!0,children:[(0,K.jsx)(`span`,{children:`Total`}),(0,K.jsx)(`span`,{children:e.toLocaleString(`en-US`,Y)})]})]}):(0,K.jsx)(`p`,{className:`motion-receipt-slot__empty`,children:`The receipt arrives here.`})})}function ft(){let{reduced:e}=q(),t=(0,M.useRef)(null),n=O(t,{page:`motion`}),{run:r,reset:i,state:a}=s(),[o,l]=(0,M.useState)(!0),[u,d]=(0,M.useState)(0),[f,p]=(0,M.useState)(!1),m=Math.round((47.01+(o?.99:0))*100)/100,h=(0,M.useRef)(0);(0,M.useEffect)(()=>{n||(i(),p(!1),d(0))},[n,i]),(0,M.useEffect)(()=>()=>window.clearTimeout(h.current),[]),(0,M.useEffect)(()=>{if(a===`success`)return h.current=window.setTimeout(()=>p(!0),e?0:120),()=>window.clearTimeout(h.current)},[a,e]);let g=()=>{p(!1),d(e=>e+1),r(c(ct))},_=a===`waiting`||a===`loading`?`Confirming with your bank…`:a===`success`||f?`Paid. A receipt is on its way.`:``,v=u>0,y=(0,M.useMemo)(()=>[`spring`,`out`].map(e=>N[e].label),[]);return(0,K.jsxs)(`div`,{ref:t,className:`motion-seq`,"data-playback":n?`running`:`paused`,children:[(0,K.jsxs)(`div`,{className:`motion-seq__left`,children:[(0,K.jsxs)(`div`,{className:`motion-seq__scene`,children:[(0,K.jsxs)(`header`,{className:`motion-seq__head`,children:[(0,K.jsx)(`p`,{className:`motion-seq__title`,children:`Order summary`}),(0,K.jsx)(De,{})]}),(0,K.jsxs)(`dl`,{className:`motion-seq__rows`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Linen overshirt`}),(0,K.jsx)(`dd`,{children:`$42.00`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Standard shipping`}),(0,K.jsx)(`dd`,{children:`$5.01`})]}),(0,K.jsxs)(`div`,{className:`motion-seq__switch`,children:[(0,K.jsx)(`dt`,{children:(0,K.jsx)(S,{label:`Shipping protection`,checked:o,onChange:l,disabled:a!==`idle`})}),(0,K.jsx)(`dd`,{children:(0,K.jsx)(T,{value:o?.99:0,format:Y})})]}),(0,K.jsxs)(`div`,{className:`motion-seq__total`,children:[(0,K.jsx)(`dt`,{children:`Total`}),(0,K.jsx)(`dd`,{children:(0,K.jsx)(T,{value:m,format:Y})})]})]}),(0,K.jsx)(`div`,{className:`motion-seq__actions`,children:(0,K.jsxs)(w,{size:`lg`,state:a,announce:!1,onConfirm:g,children:[`Pay `,(0,K.jsx)(T,{value:m,format:Y})]})}),(0,K.jsx)(`p`,{className:`motion-seq__status`,role:`status`,children:_}),(0,K.jsx)(dt,{total:m,shown:f})]}),(0,K.jsx)(`div`,{className:`motion-seq__code`,children:(0,K.jsx)(E,{title:`Confirmation`,filename:`Confirmation.tsx`,code:Qe,language:`tsx`,label:`Confirmation code`,maxHeight:320})})]}),(0,K.jsxs)(`div`,{className:`motion-seq__timeline`,children:[(0,K.jsxs)(`div`,{className:`motion-seq__intro`,children:[(0,K.jsx)(`h3`,{className:`motion-seq__heading`,children:`The sequence`}),(0,K.jsx)(`p`,{className:`motion-seq__lead`,children:`Press Pay. Each beat lights when it plays, and names its tempo. Only one spring moves at a time.`}),(0,K.jsxs)(`p`,{className:`motion-legend`,"aria-hidden":`true`,children:[(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`i`,{"data-ease":`spring`}),y[0]]}),(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`i`,{"data-ease":`out`}),y[1]]}),(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`i`,{"data-ease":`none`}),`Waiting`]})]})]}),(0,K.jsx)(`ol`,{className:`motion-beats`,"aria-label":`Confirmation sequence`,children:lt.map(e=>{let t=e.tier?je(e.tier):null;return(0,K.jsxs)(`li`,{className:`motion-beat`,"data-beat":e.id,children:[(0,K.jsxs)(`span`,{className:`motion-beat__label`,children:[(0,K.jsx)(`span`,{className:`motion-beat__name`,children:e.label}),(0,K.jsx)(`span`,{className:`motion-beat__detail`,children:e.detail})]}),(0,K.jsx)(`span`,{className:`motion-beat__tier`,"data-empty":!t||void 0,children:t?t.title:`—`}),(0,K.jsxs)(`span`,{className:`motion-beat__track`,"aria-hidden":`true`,"data-ease":e.ease??`none`,"data-loop":e.loop||void 0,style:{"--start":e.start/J,"--length":e.duration/J,"--span":J},children:[(0,K.jsx)(`i`,{className:`motion-beat__span`}),v&&(0,K.jsx)(`i`,{className:`motion-beat__bar`},u),v&&(0,K.jsx)(`i`,{className:`motion-beat__playhead`},`head-${u}`)]})]},e.id)})}),(0,K.jsx)(`p`,{className:`motion-beats__axis`,"aria-hidden":`true`,children:ut.map(e=>(0,K.jsx)(`span`,{style:{"--at":e/J},children:e===0?`0`:`${e/1e3}s`},e))})]})]})}var pt=[{value:`360`,label:`360ms`},{value:`520`,label:`520ms`},{value:`700`,label:`700ms`},{value:`800`,label:`800ms`}],mt={360:`Control`,520:`Layout`,700:`Hover`,800:`Media`},ht={spring:m,out:se,in:te},gt=20,_t=[0,.25,.5,.75,1],vt=[0,.5,1];function yt(e,t){let[n,r]=(0,M.useState)(t);return(0,M.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let n=()=>r(Math.max(240,Math.round(t.clientWidth)));n();let i=new ResizeObserver(n);return i.observe(t),()=>i.disconnect()},[e]),n}function bt({t:e,shown:t,summary:n,onScrub:r}){let i=(0,M.useRef)(null),a=yt(i,R.width),o=(0,M.useMemo)(()=>({...R,width:a,height:Math.min(340,Math.max(250,Math.round(a*.52)))}),[a]),s=(0,M.useMemo)(()=>({spring:H(L(`spring`).at,120,o),out:H(L(`out`).at,120,o),in:H(L(`in`).at,120,o),ideal:H(Pe,160,o)}),[o]),c=(0,M.useMemo)(()=>Ne(o),[o]),l=z(e,o),u=o.width-o.right,d=(0,M.useRef)(!1),f=e=>{let t=i.current?.getBoundingClientRect().left??0;return Math.min(1,Math.max(0,(e-t-o.left)/(o.width-o.left-o.right)))},p=o.height-o.bottom;return(0,K.jsx)(`div`,{ref:i,className:`motion-plot-holder`,children:(0,K.jsxs)(`svg`,{className:`motion-plot`,width:o.width,height:o.height,viewBox:`0 0 ${o.width} ${o.height}`,role:`img`,"aria-label":n,onPointerDown:e=>{d.current=!0,e.currentTarget.setPointerCapture(e.pointerId),r(f(e.clientX))},onPointerMove:e=>{d.current&&r(f(e.clientX))},onPointerUp:()=>{d.current=!1},onPointerCancel:()=>{d.current=!1},children:[vt.map(e=>(0,K.jsxs)(`g`,{children:[(0,K.jsx)(`line`,{className:`motion-plot__grid`,x1:o.left,x2:u,y1:B(e,o),y2:B(e,o)}),(0,K.jsx)(`text`,{className:`motion-plot__tick`,x:o.left-10,y:B(e,o)+4,textAnchor:`end`,children:e===0?`0`:e===1?`1`:`.5`})]},e)),_t.map(e=>(0,K.jsxs)(`g`,{children:[(0,K.jsx)(`line`,{className:`motion-plot__grid`,x1:z(e,o),x2:z(e,o),y1:o.top,y2:p}),(0,K.jsx)(`text`,{className:`motion-plot__tick`,x:z(e,o),y:p+22,textAnchor:e===0?`start`:e===1?`end`:`middle`,children:e===0?`0`:U(e)})]},e)),(0,K.jsx)(`text`,{className:`motion-plot__axis`,x:o.left,y:o.top-8,children:`Progress`}),(0,K.jsx)(`text`,{className:`motion-plot__axis`,x:u,y:o.height-4,textAnchor:`end`,children:`Share of the duration`}),(0,K.jsx)(`path`,{className:`motion-plot__curve motion-plot__curve--ideal`,d:s.ideal}),t.in&&(0,K.jsx)(`path`,{className:`motion-plot__curve motion-plot__curve--in`,d:s.in}),t.out&&(0,K.jsx)(`path`,{className:`motion-plot__curve motion-plot__curve--out`,d:s.out}),t.spring&&(0,K.jsx)(`path`,{className:`motion-plot__curve motion-plot__curve--spring`,d:s.spring}),t.spring&&c.map(e=>(0,K.jsx)(`circle`,{className:`motion-plot__stop`,cx:e.x,cy:e.y,r:`3`},e.t)),(0,K.jsx)(`line`,{className:`motion-plot__playhead`,x1:l,x2:l,y1:o.top,y2:p}),I.filter(e=>t[e.id]).map(t=>(0,K.jsx)(`circle`,{className:`motion-plot__marker motion-plot__marker--${t.id}`,cx:l,cy:B(t.at(e),o),r:t.id===`spring`?7:6},t.id))]})})}function xt({t:e,duration:t,shown:n}){let r=(0,M.useRef)({}),i=(0,M.useRef)({}),a=(0,M.useRef)(e);return a.current=e,(0,M.useEffect)(()=>{let e=[];for(let n of I){let o=r.current[n.id];if(!o||typeof o.animate!=`function`)continue;let s=o.animate([{translate:`0 0`},{translate:`calc(100cqw - ${gt}px) 0`}],{duration:t,easing:ht[n.id],fill:`both`});s.pause(),s.currentTime=a.current*t,i.current[n.id]=s,e.push(s)}return()=>e.forEach(e=>e.cancel())},[t,n.spring,n.out,n.in]),(0,M.useEffect)(()=>{for(let n of Object.values(i.current))n&&(n.currentTime=e*t)},[e,t]),(0,K.jsx)(`div`,{className:`motion-lanes`,"aria-hidden":`true`,children:I.filter(e=>n[e.id]).map(e=>(0,K.jsxs)(`div`,{className:`motion-lane`,"data-curve":e.id,children:[(0,K.jsx)(`span`,{className:`motion-lane__label`,children:e.label}),(0,K.jsx)(`span`,{className:`motion-lane__track`,children:(0,K.jsx)(`i`,{ref:t=>{r.current[e.id]=t},className:`motion-lane__dot`})})]},e.id))})}function St(){let{reduced:e}=q(),t=(0,M.useRef)(null),n=O(t,{page:`motion`}),[r,i]=(0,M.useState)(.18),[a,o]=(0,M.useState)(`520`),[s,c]=(0,M.useState)(!1),[l,u]=(0,M.useState)({spring:!0,out:!0,in:!1}),d=(0,M.useRef)(0),f=Number(a),p=(0,M.useCallback)(()=>{cancelAnimationFrame(d.current),d.current=0,c(!1)},[]);(0,M.useEffect)(()=>p,[p]),(0,M.useEffect)(()=>{n||p()},[n,p]);let m=()=>{if(p(),e){i(1);return}c(!0),i(0);let t=performance.now(),n=e=>{let r=Math.min(1,(e-t)/f);i(r),r<1?d.current=requestAnimationFrame(n):c(!1)};d.current=requestAnimationFrame(n)},h=(0,M.useMemo)(()=>Object.fromEntries(I.map(e=>[e.id,Ie(e.at)])),[]),v=(0,M.useMemo)(()=>Fe(),[]),y=`Progress against time for the spring, expo-out and ease-in curves. The spring covers 90% of the distance by ${U(h.spring.most)} of the duration; expo-out by ${U(h.out.most)}.`,ee=e=>u(t=>({...t,[e]:!t[e]}));return(0,K.jsxs)(`div`,{ref:t,className:`motion-curves`,children:[(0,K.jsxs)(`div`,{className:`motion-curves__plot`,children:[(0,K.jsx)(`div`,{className:`motion-curves__chips`,role:`group`,"aria-label":`Curves`,children:I.map(e=>(0,K.jsxs)(`button`,{type:`button`,className:`motion-curve-chip`,"data-curve":e.id,"aria-pressed":l[e.id],onClick:()=>ee(e.id),children:[(0,K.jsx)(`i`,{"aria-hidden":`true`}),e.label]},e.id))}),(0,K.jsx)(bt,{t:r,shown:l,summary:y,onScrub:e=>{p(),i(e)}}),(0,K.jsx)(xt,{t:r,duration:f,shown:l})]}),(0,K.jsxs)(`div`,{className:`motion-curves__side`,children:[(0,K.jsxs)(`div`,{className:`motion-curves__controls`,children:[(0,K.jsx)(ye,{label:`Time`,value:Math.round(r*1e3),min:0,max:1e3,step:5,onChange:e=>{p(),i(e/1e3)},format:e=>`${(e/10).toFixed(1)}%`}),(0,K.jsx)(be,{label:`Tempo`,value:a,options:pt,onChange:e=>{p(),o(e)}}),(0,K.jsxs)(`div`,{className:`motion-curves__play`,children:[(0,K.jsx)(g,{variant:`dark`,icon:`play`,onClick:m,"aria-describedby":`motion-curves-tempo`,children:s?`Playing`:`Play`}),(0,K.jsxs)(`p`,{id:`motion-curves-tempo`,className:`motion-curves__tempo`,children:[mt[a],` · `,f,`ms`]})]})]}),(0,K.jsx)(`dl`,{className:`motion-readout`,"aria-live":`off`,children:I.filter(e=>l[e.id]).map(e=>(0,K.jsxs)(`div`,{className:`motion-readout__row`,"data-curve":e.id,children:[(0,K.jsxs)(`dt`,{children:[(0,K.jsx)(`i`,{"aria-hidden":`true`}),e.label]}),(0,K.jsxs)(`dd`,{children:[(0,K.jsx)(`span`,{className:`motion-readout__value`,children:Le(e.at(r))}),(0,K.jsxs)(`span`,{className:`motion-readout__at`,children:[W(r,f),`ms`]})]})]},e.id))}),(0,K.jsxs)(`table`,{className:`motion-facts`,children:[(0,K.jsxs)(`caption`,{children:[`Time to cover the distance, at `,f,`ms`]}),(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:(0,K.jsx)(`span`,{className:`kit-sr-only`,children:`Curve`})}),(0,K.jsx)(`th`,{scope:`col`,children:`50%`}),(0,K.jsx)(`th`,{scope:`col`,children:`90%`}),(0,K.jsx)(`th`,{scope:`col`,children:`99%`})]})}),(0,K.jsx)(`tbody`,{children:I.filter(e=>e.id!==`in`).map(e=>(0,K.jsxs)(`tr`,{"data-curve":e.id,children:[(0,K.jsx)(`th`,{scope:`row`,children:e.label}),(0,K.jsxs)(`td`,{children:[W(h[e.id].half,f),`ms`]}),(0,K.jsxs)(`td`,{children:[W(h[e.id].most,f),`ms`]}),(0,K.jsxs)(`td`,{children:[W(h[e.id].almost,f),`ms`]})]},e.id))})]})]}),(0,K.jsxs)(`div`,{className:`motion-curves__note`,children:[(0,K.jsxs)(`p`,{children:[`The spring is Framer's stiffness `,C.stiffness,`, damping `,C.damping,`, mass `,C.mass,`: damping ratio 1.73, so it never overshoots. CSS cannot hold a spring, so the site samples it into `,_.length,` stops and the browser draws straight lines between them. The dashed line is the ideal spring; the largest gap is `,v.toFixed(4),`.`]}),(0,K.jsxs)(`p`,{children:[`Expo-out starts at full speed and brakes: 90% of the way by `,U(h.out.most),` of the time, 99% by `,U(h.out.almost),`. The spring eases in for a moment and carries on longer: 90% by `,U(h.spring.most),`, 99% by `,U(h.spring.almost),`. A big change settles instead of stopping.`]})]}),(0,K.jsxs)(`div`,{className:`motion-curves__code`,children:[(0,K.jsx)(E,{title:`Curves`,filename:`tokens.css`,code:We,language:`css`,label:`Spring and expo-out tokens`,maxHeight:260}),(0,K.jsx)(E,{title:`From script`,filename:`panel.ts`,code:Ge,language:`ts`,label:`Using the spring from script`,maxHeight:200})]})]})}function Ct(e,t){if(!e||typeof PointerEvent>`u`)return()=>{};let n={bubbles:!0,button:0,pointerType:`mouse`,isPrimary:!0};e.dispatchEvent(new PointerEvent(`pointerdown`,n));let r=!1,i=()=>{r||(r=!0,e.dispatchEvent(new PointerEvent(`pointerup`,n)))},a=window.setTimeout(i,t);return()=>{window.clearTimeout(a),i()}}function wt(e,t=1){let n=[...e?.querySelectorAll(`.z-roll__in`)??[]].map(e=>v(e,[{transform:`translateY(-100%)`},{transform:`none`}],{duration:f.hover*t,easing:m}));return()=>n.forEach(e=>e?.cancel())}var Tt={style:`currency`,currency:`USD`};function Et({run:e,factor:t}){let n=(0,M.useRef)(null);return(0,M.useEffect)(()=>e?Ct(n.current,700*t):void 0,[e,t]),(0,K.jsx)(g,{ref:n,children:`Pay $48.00`})}function Dt({run:e,factor:t}){let n=(0,M.useRef)(null),[r,i]=(0,M.useState)(!1),a=(0,M.useRef)(0),o=(0,M.useRef)(t);o.current=t,(0,M.useEffect)(()=>()=>window.clearTimeout(a.current),[]);let s=(0,M.useCallback)(()=>{let e=n.current;if(!e||e.dataset.gone!==void 0)return;let t=o.current,r=v(e,[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 8px`}],{duration:f.exit*t,easing:te,fill:`forwards`}),s=()=>{i(!0),window.clearTimeout(a.current),a.current=window.setTimeout(()=>{r?.cancel(),i(!1),v(e,[{opacity:0},{opacity:1}],{duration:f.feedback*t})},900)};r?r.finished.then(s,()=>{}):s()},[]);return(0,M.useEffect)(()=>{e&&s()},[e,s]),(0,K.jsxs)(`div`,{ref:n,className:`motion-chip`,"data-gone":r||void 0,children:[(0,K.jsx)(`span`,{className:`motion-chip__text`,children:`Saved to wishlist`}),(0,K.jsx)(b,{label:`Dismiss`,icon:`close`,size:`sm`,variant:`ghost`,onClick:s})]})}function Ot({run:e,factor:t}){let[n,i]=(0,M.useState)(!1),a=(0,M.useRef)(0);(0,M.useEffect)(()=>()=>window.clearTimeout(a.current),[]);let o=(0,M.useCallback)(()=>{i(!0),window.clearTimeout(a.current),a.current=window.setTimeout(()=>i(!1),1400*t)},[t]);return(0,M.useEffect)(()=>{e&&o()},[e,o]),(0,K.jsxs)(`span`,{className:`motion-order`,children:[(0,K.jsx)(`span`,{className:`motion-order__id`,children:`ZJ-2048`}),(0,K.jsx)(b,{label:`Copy order ID`,icon:n?`check`:`copy`,tooltip:!0,onClick:()=>{r(`ZJ-2048`),o()}}),(0,K.jsx)(`span`,{className:`kit-sr-only`,role:`status`,children:n?`Order ID copied`:``})]})}var kt=[{value:`card`,label:`Card`},{value:`apple`,label:`Apple Pay`},{value:`bank`,label:`Bank`}],At={card:`apple`,apple:`bank`,bank:`card`};function jt({run:e}){let[t,n]=(0,M.useState)(`card`),[r,i]=(0,M.useState)(!1);return(0,M.useEffect)(()=>{e&&(n(e=>At[e]),i(e=>!e))},[e]),(0,K.jsxs)(`div`,{className:`motion-demo-stack`,children:[(0,K.jsx)(h,{label:`Payment method`,value:t,options:kt,onChange:n,size:`sm`}),(0,K.jsx)(S,{label:`Shipping protection`,checked:r,onChange:i})]})}function Mt({run:e,active:t}){let n=s(),{run:r,reset:i}=n,[a,l]=(0,M.useState)(!1);(0,M.useEffect)(()=>{t||i()},[t,i]),(0,M.useEffect)(()=>{e&&(l(e=>!e),r(c(1100)))},[e,r]);let u=48+(a?.99:0);return(0,K.jsxs)(`div`,{className:`motion-demo-pair`,children:[(0,K.jsx)(w,{state:n.state,announce:!1,onConfirm:()=>{r(c(1100))},children:`Pay ${o(u,Tt)}`}),(0,K.jsx)(`span`,{className:`motion-total`,"aria-label":`Total`,children:(0,K.jsx)(T,{value:u,format:Tt})})]})}function Nt({run:e,factor:t}){let n=(0,M.useRef)(null),[r,i]=(0,M.useState)(`28px · 600ms`);return(0,M.useEffect)(()=>{if(!e)return;let r=x({mobile:a()});i(`${r.distance}px · ${r.duration}ms`);let o=v(n.current,[{opacity:0,translate:`0 ${r.distance}px`},{opacity:1,translate:`0 0`}],{duration:r.duration*t});return()=>o?.cancel()},[e,t]),(0,K.jsxs)(`div`,{ref:n,className:`motion-receipt`,children:[(0,K.jsx)(`p`,{className:`motion-receipt__title`,children:`Receipt ZJ-2048`}),(0,K.jsx)(`p`,{className:`motion-receipt__line`,children:`Visa ending 4242`}),(0,K.jsx)(`p`,{className:`motion-receipt__fact`,children:r})]})}function Pt({run:e,factor:t}){let n=(0,M.useRef)(null);return(0,M.useEffect)(()=>e?wt(n.current,t):void 0,[e,t]),(0,K.jsx)(g,{ref:n,variant:`dark`,icon:`arrow-right`,children:`View receipt`})}function Ft({run:e,factor:t}){let[n,r]=(0,M.useState)(!1);return(0,M.useEffect)(()=>{if(!e)return;r(!0);let n=window.setTimeout(()=>r(!1),(f.media+600)*t);return()=>{window.clearTimeout(n),r(!1)}},[e,t]),(0,K.jsx)(`div`,{className:`motion-zoom`,"data-zoom":n||void 0,children:(0,K.jsx)(`img`,{src:ke[1].image,alt:``,width:`532`,height:`322`,loading:`lazy`})})}var It={press:Et,exit:Dt,feedback:Ot,control:jt,layout:Mt,enter:Nt,hover:Pt,media:Ft},Lt=[{value:`1`,label:`Normal`},{value:`4`,label:`Slow ×4`}],Rt=[0,200,400,600,800],zt=()=>Object.fromEntries(P.map(e=>[e.id,0]));function Bt({tier:e,run:t}){let n={"--share":Me(e),"--tier-time":`var(${e.token})`,"--tier-ease":N[e.ease].css};return(0,K.jsxs)(`span`,{className:`motion-bar`,"data-ease":e.ease,style:n,"aria-hidden":`true`,children:[(0,K.jsx)(`span`,{className:`motion-bar__span`}),t>0&&(0,K.jsx)(`span`,{className:`motion-bar__fill`},t)]})}function Vt({tier:e,run:t,factor:n,active:r,valueOf:i,onPlay:a}){let o=It[e.id],s=i(e.token),c=parseInt(s?.desktop??`${e.ms}`,10),l=s?.phone?parseInt(s.phone,10):e.phoneMs,u=e.ease;return(0,K.jsxs)(`li`,{className:`motion-tier`,"data-tier":e.id,children:[(0,K.jsxs)(`div`,{className:`motion-tier__head`,children:[(0,K.jsx)(`h3`,{className:`motion-tier__name`,children:e.title}),(0,K.jsxs)(`p`,{className:`motion-tier__ms`,children:[(0,K.jsx)(`span`,{className:`motion-tier__number`,children:c}),(0,K.jsx)(`span`,{className:`motion-tier__unit`,children:`ms`}),l!==void 0&&l!==c&&(0,K.jsxs)(`span`,{className:`motion-tier__phone`,children:[l,`ms on phones`]})]}),(0,K.jsx)(`p`,{className:`motion-tier__role`,children:e.role}),(0,K.jsxs)(`div`,{className:`motion-tier__tokens`,children:[(0,K.jsx)(Se,{tokens:[e.token],label:`Token`}),(0,K.jsx)(`span`,{className:`motion-ease`,"data-ease":u,children:N[u].label})]})]}),(0,K.jsxs)(`div`,{className:`motion-tier__time`,children:[(0,K.jsx)(Bt,{tier:e,run:t}),(0,K.jsxs)(`div`,{className:`motion-tier__foot`,children:[(0,K.jsx)(`p`,{className:`motion-tier__demo-note`,children:e.demo}),(0,K.jsx)(b,{label:`Play ${e.title.toLowerCase()}`,icon:`play`,variant:`ghost`,size:`sm`,tooltip:!0,onClick:a})]})]}),(0,K.jsx)(`div`,{className:`motion-tier__stage`,children:(0,K.jsx)(`div`,{className:`motion-tier__demo`,children:(0,K.jsx)(o,{run:t,factor:n,active:r})})})]})}function Ht(){let e=y(),{reduced:t}=q(),n=(0,M.useRef)(null),r=(0,M.useRef)(null),i=O(n,{page:`motion`}),a=ae(r),[o,s]=(0,M.useState)(`1`),[c,l]=(0,M.useState)(zt),u=o===`4`?4:1,d=(0,M.useRef)(!1),f=()=>l(e=>Object.fromEntries(P.map(t=>[t.id,e[t.id]+1]))),p=e=>l(t=>({...t,[e]:t[e]+1}));(0,M.useEffect)(()=>{if(!a||d.current||t)return;let e=window.setTimeout(()=>{d.current=!0,f()},500);return()=>window.clearTimeout(e)},[a,t]);let m=t=>{let n=e.find(e=>e.variable===t);return n?{desktop:n.resolved,phone:n.resolvedMobile}:null};return(0,K.jsxs)(`div`,{ref:n,className:`motion-ladder`,"data-speed":o,"data-playback":i?`running`:`paused`,children:[(0,K.jsxs)(`div`,{ref:r,className:`motion-ladder__bar`,children:[(0,K.jsxs)(`div`,{className:`motion-ladder__actions`,children:[(0,K.jsx)(g,{icon:`play`,onClick:f,children:`Play all`}),(0,K.jsx)(be,{label:`Speed`,value:o,options:Lt,onChange:s})]}),(0,K.jsx)(`p`,{className:`motion-legend`,"aria-hidden":`true`,children:Object.keys(N).map(e=>(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`i`,{"data-ease":e}),N[e].label]},e))})]}),(0,K.jsx)(`p`,{className:`motion-ladder__axis`,"aria-hidden":`true`,children:Rt.map(e=>(0,K.jsxs)(`span`,{style:{"--at":e/F},children:[e===0?`0`:e,e===F?`ms`:``]},e))}),(0,K.jsx)(`ol`,{className:`motion-tiers`,"aria-label":`Tempo tiers`,children:P.map(e=>(0,K.jsx)(Vt,{tier:e,run:c[e.id],factor:u,active:i,valueOf:m,onPlay:()=>p(e.id)},e.id))}),(0,K.jsx)(`p`,{className:`kit-sr-only`,role:`status`,children:o===`4`?`Slow motion on: every tempo runs four times slower here.`:``})]})}function Ut(){let{reduced:e}=q(),t=(0,M.useRef)(null),n=O(t,{page:`motion`}),{run:r,reset:i,state:a}=s();(0,M.useEffect)(()=>{n||i()},[n,i]);let o=()=>{r(c(1500))};return(0,K.jsxs)(`div`,{ref:t,className:`motion-reduce`,"data-playback":n?`running`:`paused`,children:[(0,K.jsxs)(`div`,{className:`motion-compare`,children:[(0,K.jsxs)(`figure`,{className:`motion-pane`,children:[(0,K.jsx)(`div`,{className:`motion-pane__stage`,children:(0,K.jsx)(w,{size:`lg`,state:a,announce:!1,onConfirm:o,children:`Pay $48.00`})}),(0,K.jsxs)(`figcaption`,{className:`motion-pane__caption`,children:[(0,K.jsx)(`b`,{children:`Normal`}),(0,K.jsx)(`span`,{children:e?`Reduced motion is on, so this one holds still too.`:`Closes to a circle, waves, draws the check, opens.`})]})]}),(0,K.jsxs)(`figure`,{className:`motion-pane motion-reduced`,children:[(0,K.jsx)(`div`,{className:`motion-pane__stage`,children:(0,K.jsx)(w,{size:`lg`,state:a,announce:!1,onConfirm:o,children:`Pay $48.00`})}),(0,K.jsxs)(`figcaption`,{className:`motion-pane__caption`,children:[(0,K.jsx)(`b`,{children:`Reduced`}),(0,K.jsx)(`span`,{children:`A still circle, the middle dot leading. The same words.`})]})]})]}),(0,K.jsxs)(`div`,{className:`motion-compare__bar`,children:[(0,K.jsx)(g,{variant:`dark`,icon:`play`,onClick:o,children:`Pay on both`}),(0,K.jsx)(`p`,{className:`motion-compare__hint`,children:`Turn on Reduced motion preview at the top of the page to see all of it without movement.`}),(0,K.jsx)(`p`,{className:`motion-compare__status`,role:`status`,children:a===`waiting`||a===`loading`?`Processing payment…`:a===`success`?`Paid.`:``})]}),(0,K.jsx)(`div`,{className:`kit-table-wrap`,children:(0,K.jsxs)(`table`,{className:`kit-table motion-reduced-table`,children:[(0,K.jsx)(`caption`,{className:`kit-sr-only`,children:`What changes under reduced motion`}),(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:`What`}),(0,K.jsx)(`th`,{scope:`col`,children:`Normal`}),(0,K.jsx)(`th`,{scope:`col`,children:`Reduced`})]})}),(0,K.jsx)(`tbody`,{children:Ue.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`row`,"data-label":`What`,children:e.what}),(0,K.jsx)(`td`,{"data-label":`Normal`,children:e.normal}),(0,K.jsx)(`td`,{"data-label":`Reduced`,children:e.reduced})]},e.what))})]})}),(0,K.jsx)(E,{title:`Reading the preference`,filename:`reduced.ts`,code:$e,language:`tsx`,label:`Reduced motion code`,maxHeight:220})]})}var X=[{name:`easing.ts`,code:`/* JS counterparts of the motion tokens, for rAF tweens and WAAPI. Pure. */

export const EASE_OUT = 'cubic-bezier(.16, 1, .3, 1)';
export const EASE_IN = 'cubic-bezier(.4, 0, 1, 1)';
/** Site --fx-spring: Framer stiffness 300, damping 60, mass 1, sampled into linear(). Overdamped. */
export const SPRING = 'linear(0, .1272, .2981, .4411, .5556, .6467, .7191, .7767, .8225, .8588, .8878, .9108, .9291, .9436, .9552, .9644, .9717, .9775, .9821, .9858, .9887, .9910, .9928, .9943, .9955, 1)';

/** The physics behind SPRING: Framer's stiffness 300, damping 60, mass 1. ζ ≈ 1.73, so it never overshoots. */
export const SPRING_PHYSICS = Object.freeze({ stiffness: 300, damping: 60, mass: 1 });

/** Seconds of that spring the 26 samples cover: 25 equal steps of 41.65ms, then snapped to 1. */
export const SPRING_SPAN = 1.0413;

/** Numbers inside a \`linear(…)\` easing, in order (stops without positions only). Pure. */
export function parseLinearStops(easing: string): number[] {
  const match = /^\\s*linear\\(([^)]*)\\)\\s*$/.exec(easing);
  if (!match) return [];
  return match[1].split(',').map(part => Number(part.trim())).filter(Number.isFinite);
}

/** The samples of SPRING, ready to draw or interpolate. */
export const SPRING_STOPS: readonly number[] = Object.freeze(parseLinearStops(SPRING));

/** Millisecond values of the duration tokens (desktop). CSS stays the source; these mirror it. */
export const MOTION = Object.freeze({
  press: 120,
  feedback: 200,
  control: 360,
  layout: 520,
  hover: 700,
  media: 800,
  exit: 180,
  enter: 600,
  enterPhone: 520,
  title: 640,
  replay: 420,
  stagger: 40,
  groupStagger: 50,
  delayCap: 160,
  delayCapPhone: 80,
});

/** A cubic-bezier timing function as a JS function of progress (0..1). */
export function cubicBezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  const slopeX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
  const solve = (x: number) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const error = sampleX(t) - x;
      if (Math.abs(error) < 1e-6) return t;
      const slope = slopeX(t);
      if (Math.abs(slope) < 1e-6) break;
      t -= error / slope;
    }
    let lo = 0, hi = 1;
    t = x;
    while (lo < hi) {
      const value = sampleX(t);
      if (Math.abs(value - x) < 1e-6) return t;
      if (x > value) lo = t; else hi = t;
      t = (lo + hi) / 2;
      if (hi - lo < 1e-7) break;
    }
    return t;
  };
  return (progress: number) => {
    if (progress <= 0) return 0;
    if (progress >= 1) return 1;
    return sampleY(solve(progress));
  };
}

export const easeOut = cubicBezier(0.16, 1, 0.3, 1);
export const easeIn = cubicBezier(0.4, 0, 1, 1);

/** Progress of a \`linear()\` easing at \`t\` (0..1): straight lines between equally spaced stops, as CSS draws it. */
export function linearAt(stops: readonly number[], t: number): number {
  if (!stops.length) return t;
  if (t <= 0) return stops[0];
  if (t >= 1) return stops[stops.length - 1];
  const position = t * (stops.length - 1);
  const index = Math.floor(position);
  return stops[index] + (stops[index + 1] - stops[index]) * (position - index);
}

/** The site spring (SPRING) at \`t\` (0..1) of its duration. */
export const springAt = (t: number) => linearAt(SPRING_STOPS, t);

/** The ideal spring behind SPRING at \`seconds\`: the closed-form overdamped step response. */
export function springPhysicsAt(seconds: number, { stiffness, damping, mass }: { stiffness: number; damping: number; mass: number } = SPRING_PHYSICS): number {
  if (seconds <= 0) return 0;
  const w0 = Math.sqrt(stiffness / mass);
  const zeta = damping / (2 * Math.sqrt(stiffness * mass));
  if (zeta <= 1) throw new RangeError('springPhysicsAt models overdamped springs only');
  const root = Math.sqrt(zeta * zeta - 1);
  const fast = -w0 * (zeta + root);
  const slow = -w0 * (zeta - root);
  return 1 - (fast * Math.exp(slow * seconds) - slow * Math.exp(fast * seconds)) / (fast - slow);
}

/** Smallest progress \`t\` at which \`ease(t) >= value\`, by bisection (ease must rise). */
export function timeTo(ease: (t: number) => number, value: number): number {
  let low = 0;
  let high = 1;
  for (let step = 0; step < 40; step++) {
    const mid = (low + high) / 2;
    if (ease(mid) < value) low = mid; else high = mid;
  }
  return high;
}

/** Interpolated value of a tween at \`elapsed\` ms. */
export function tweenAt(from: number, to: number, elapsed: number, duration: number, ease: (t: number) => number = easeOut) {
  if (duration <= 0 || elapsed >= duration) return to;
  if (elapsed <= 0) return from;
  return from + (to - from) * ease(elapsed / duration);
}

/** Parse a CSS time (\`520ms\`, \`.52s\`) into milliseconds. */
export function parseDuration(value: string | null | undefined, fallback: number): number {
  const text = String(value ?? '').trim();
  const match = /^(-?\\d*\\.?\\d+)(ms|s)$/.exec(text);
  if (!match) return fallback;
  const amount = Number(match[1]);
  return match[2] === 's' ? amount * 1000 : amount;
}

/** Distance-scaled glide used by indicators: a short hop settles fast, a long jump never drags. */
export function glideDuration(px: number, min = 180, max = 320) {
  return Math.round(Math.min(max, Math.max(min, 150 + 0.15 * Math.abs(px))));
}
`},{name:`Reveal.tsx`,code:`import { createContext, useContext, useEffect, useRef, Children, createElement, type ElementType, type ReactNode, type RefObject, type HTMLAttributes } from 'react';
import { canUseDOM, isPhoneWidth, prefersReducedMotion, subscribeReducedMotion } from './env';
import { animate } from './animate';
import { revealTiming, rowDelay, staggerOffset, type RevealTiming, type RevealType } from './revealTiming';

/* A reveal controller mirrors the site's motion.js: a reset observer (96px outer boundary) re-arms
   items that leave below the viewport; an entrance observer (40px early) plays them while scrolling
   down. Leaf-most items only. Entrances cancel on focusin, a hidden tab and reduced motion.
   Listeners attach with the first registered item and detach with the last.
   The page shares one controller; a scroll container (a sheet, a panel, a demo) can own another. */

interface Item { type: RevealType; delay: number; played: boolean; ready: boolean; animation?: Animation }

/** What a controller reports each time an entrance starts. */
export interface RevealPlay {
  element: Element;
  type: RevealType;
  /** Re-entering from below after a first play: the quiet one. */
  replay: boolean;
  timing: RevealTiming;
}

export interface RevealControllerOptions {
  /** A scroll container whose own viewport decides what is visible. Default: the page. */
  root?: HTMLElement | null;
  /** Called after an entrance starts. Never called under reduced motion (nothing plays). */
  onPlay?: (event: RevealPlay) => void;
}

export interface RevealController {
  register(element: Element, config?: { type?: RevealType; delay?: number }): () => void;
  /** Forget what has played and look again, so every item enters as new. */
  rearm(): void;
  /** Direction of the latest scroll: entrances play only going down. */
  direction(): 'up' | 'down';
  /** Unregister everything and detach every listener. */
  dispose(): void;
}

export function createRevealController({ root = null, onPlay }: RevealControllerOptions = {}): RevealController {
  const items = new Map<Element, Item>();
  let resetObserver: IntersectionObserver | null = null;
  let enterObserver: IntersectionObserver | null = null;
  let lastY = 0;
  let direction: 'up' | 'down' = 'down';
  let stopReduced: (() => void) | null = null;
  let attached = false;

  const scrollTop = () => (root ? root.scrollTop : canUseDOM() ? Math.max(window.scrollY, 0) : 0);
  const scroller: Pick<EventTarget, 'addEventListener' | 'removeEventListener'> | null = canUseDOM() ? (root ?? window) : null;

  const onScroll = () => {
    const y = Math.max(scrollTop(), 0);
    if (Math.abs(y - lastY) > 1) {
      direction = y > lastY ? 'down' : 'up';
      lastY = y;
    }
  };
  const cancelItem = (item: Item) => { item.animation?.cancel(); item.animation = undefined; };
  const onFocusIn = (event: FocusEvent) => {
    for (const [element, item] of items) if (event.target instanceof Node && element.contains(event.target)) cancelItem(item);
  };
  const onVisibility = () => { if (document.hidden) items.forEach(cancelItem); };
  const onReduce = () => { if (prefersReducedMotion()) items.forEach(cancelItem); };

  const isLeaf = (element: Element) => {
    for (const other of items.keys()) if (other !== element && element.contains(other)) return false;
    return true;
  };

  function play(element: Element, item: Item, extraDelay: number) {
    const previous = item.animation;
    if (previous && (previous.playState === 'running' || previous.playState === 'paused')) return;
    const rect = element.getBoundingClientRect();
    const top = root ? root.getBoundingClientRect().top : 0;
    if (rect.bottom <= top || !rect.width || !rect.height || prefersReducedMotion() || document.hidden || element.contains(document.activeElement)) return;
    const replay = item.played;
    const timing = revealTiming({ type: item.type, mobile: isPhoneWidth(), replay, delay: item.delay, rowDelay: extraDelay });
    const animation = animate(element, [
      { opacity: timing.fromOpacity, translate: \`0 \${timing.distance}px\` },
      { opacity: 1, translate: '0 0' },
    ], { duration: timing.duration, delay: timing.delay });
    if (animation) {
      item.animation = animation;
      item.played = true;
      onPlay?.({ element, type: item.type, replay, timing });
    }
  }

  function attach() {
    if (attached || !canUseDOM()) return;
    attached = true;
    lastY = Math.max(scrollTop(), 0);
    direction = 'down';
    scroller?.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('visibilitychange', onVisibility);
    stopReduced = subscribeReducedMotion(onReduce);
    if (!('IntersectionObserver' in window)) return;
    resetObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const item = items.get(entry.target);
        if (!item || entry.isIntersecting) continue;
        cancelItem(item);
        const edge = entry.rootBounds ? entry.rootBounds.bottom : null;
        const above = entry.rootBounds ? entry.rootBounds.top : 0;
        if (edge !== null && entry.boundingClientRect.height > 0 && entry.boundingClientRect.top >= edge) item.ready = true;
        else if (entry.boundingClientRect.bottom < above) item.ready = false;
      }
    }, { root, rootMargin: '96px 0px 96px 0px' });
    enterObserver = new IntersectionObserver(entries => {
      const entering = entries.filter(entry => entry.isIntersecting && items.get(entry.target)?.ready && direction === 'down' && isLeaf(entry.target));
      const geometry = entering.map(entry => ({ parent: entry.target.parentElement, top: entry.boundingClientRect.top }));
      entering.forEach((entry, index) => play(entry.target, items.get(entry.target)!, rowDelay(geometry, index)));
      for (const entry of entries) if (entry.isIntersecting) { const item = items.get(entry.target); if (item) item.ready = false; }
    }, { root, threshold: 0, rootMargin: '0px 0px 40px 0px' });
  }

  function detach() {
    resetObserver?.disconnect();
    enterObserver?.disconnect();
    resetObserver = enterObserver = null;
    if (!attached || !canUseDOM()) return;
    attached = false;
    scroller?.removeEventListener('scroll', onScroll);
    document.removeEventListener('focusin', onFocusIn);
    document.removeEventListener('visibilitychange', onVisibility);
    stopReduced?.();
    stopReduced = null;
  }

  function register(element: Element, { type = 'rise', delay = 0 }: { type?: RevealType; delay?: number } = {}) {
    attach();
    items.set(element, { type, delay, played: false, ready: true });
    if (resetObserver && enterObserver) {
      resetObserver.observe(element);
      enterObserver.observe(element);
    }
    return () => {
      const item = items.get(element);
      if (item) cancelItem(item);
      items.delete(element);
      resetObserver?.unobserve(element);
      enterObserver?.unobserve(element);
      if (!items.size) detach();
    };
  }

  return {
    register,
    rearm() {
      lastY = Math.max(scrollTop(), 0);
      direction = 'down';
      for (const [element, item] of items) {
        cancelItem(item);
        item.played = false;
        item.ready = true;
        // Observing again reports the element's current state, so what is in view enters at once.
        resetObserver?.unobserve(element);
        enterObserver?.unobserve(element);
        resetObserver?.observe(element);
        enterObserver?.observe(element);
      }
    },
    direction: () => direction,
    dispose() {
      for (const item of items.values()) cancelItem(item);
      items.clear();
      detach();
    },
  };
}

const page = createRevealController();

const StaggerContext = createContext(0);

export interface UseRevealOptions {
  type?: RevealType;
  delay?: number;
  disabled?: boolean;
  /** Reveal inside a scroll container instead of the page. */
  controller?: RevealController;
}

/** Scroll entrance on any element, exactly as the portfolio plays it. Content is never hidden before JS. */
export function useReveal(ref: RefObject<Element | null>, { type = 'rise', delay = 0, disabled = false, controller = page }: UseRevealOptions = {}) {
  const offset = useContext(StaggerContext);
  useEffect(() => {
    const element = ref.current;
    if (!element || disabled) return;
    return controller.register(element, { type, delay: delay + offset });
  }, [ref, type, delay, offset, disabled, controller]);
}

export type RevealProps = HTMLAttributes<HTMLElement> & { as?: ElementType; type?: RevealType; delay?: number; children?: ReactNode };

export function Reveal({ as = 'div', type = 'rise', delay = 0, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, { type, delay });
  return createElement(as, { ...rest, ref }, children);
}

/** Gives each direct child an extra entrance delay (40ms steps, capped at 160ms by default). */
export function Stagger({ step = 40, cap = 160, children }: { step?: number; cap?: number; children: ReactNode }) {
  const parent = useContext(StaggerContext);
  return <>{Children.toArray(children).map((child, index) => (
    <StaggerContext.Provider key={(child as { key?: string }).key ?? index} value={parent + staggerOffset(index, step, cap)}>{child}</StaggerContext.Provider>
  ))}</>;
}
`},{name:`revealTiming.ts`,code:`/* Pure timing rules of the portfolio's scroll entrances (assets/js/motion.js), so React islands
   and documentation move exactly like the site. Tested in Node. */

export type RevealType = 'rise' | 'title' | 'image' | 'photo' | 'card' | 'intro' | 'identity' | 'number' | 'arrow' | 'quote' | 'signature';

export interface RevealTiming {
  /** Travel in px on the independent \`translate\` property. */
  distance: number;
  delay: number;
  duration: number;
  fromOpacity: number;
}

/**
 * First play: 28px (20 on phones, 16 for image/photo), 600ms (640 title, 520 phones),
 * delay capped at 160 (80 on phones). Replay: opacity .45 → 1, 10px, 420ms, no delay.
 */
export function revealTiming({ type = 'rise', mobile = false, replay = false, delay = 0, rowDelay = 0 }: {
  type?: RevealType; mobile?: boolean; replay?: boolean; delay?: number; rowDelay?: number;
}): RevealTiming {
  const distance = replay ? 10 : type === 'image' || type === 'photo' ? 16 : mobile ? 20 : 28;
  const wait = replay ? 0 : Math.min(Math.max(0, delay + rowDelay), mobile ? 80 : 160);
  const duration = replay ? 420 : mobile ? 520 : type === 'title' ? 640 : 600;
  return { distance, delay: wait, duration, fromOpacity: replay ? 0.45 : 0 };
}

/**
 * Row peers entering in the same batch: earlier entries with the same parent whose tops are
 * within 24px add 40ms each, at most 80ms.
 */
export function rowDelay(entering: readonly { parent: unknown; top: number }[], index: number) {
  const current = entering[index];
  if (!current) return 0;
  const peers = entering.slice(0, index).filter(other => other.parent === current.parent && Math.abs(other.top - current.top) < 24).length;
  return Math.min(peers * 40, 80);
}

/** Group stagger offset for the i-th child (sibling 40ms, group 50ms), capped. */
export const staggerOffset = (index: number, step = 40, cap = 160) => Math.min(Math.max(0, index) * step, cap);
`},{name:`animate.ts`,code:`/* WAAPI helper that tracks running animations, so reduced motion switched on mid-session,
   focus moving inside an element, or a hidden tab can cancel them. No listeners stay attached
   once nothing is running. */
import { prefersReducedMotion, subscribeReducedMotion } from './env';
import { EASE_OUT } from './easing';

const running = new Set<Animation>();
let detach: (() => void) | null = null;

function attach() {
  if (detach) return;
  const stop = subscribeReducedMotion(() => { if (prefersReducedMotion()) cancelAll(); });
  detach = () => { stop(); detach = null; };
}

function track(animation: Animation) {
  running.add(animation);
  attach();
  const done = () => {
    running.delete(animation);
    if (!running.size) detach?.();
  };
  animation.finished.then(done, done);
  // A cancelled animation rejects \`finished\`; oncancel covers engines that never settle it.
  animation.addEventListener?.('cancel', done);
}

export interface AnimateOptions extends KeyframeAnimationOptions {
  /** Run even under reduced motion (for essential, non-spatial feedback such as opacity). */
  essential?: boolean;
}

/**
 * Animate with the house defaults (600ms, expo-out, fill backwards). Returns undefined when
 * the element cannot animate or reduced motion is on, so callers can treat "no animation" as done.
 */
export function animate(element: Element | null | undefined, keyframes: Keyframe[] | PropertyIndexedKeyframes, options: AnimateOptions = {}): Animation | undefined {
  const { essential = false, ...timing } = options;
  if (!element || typeof (element as HTMLElement).animate !== 'function') return undefined;
  if (!essential && prefersReducedMotion()) return undefined;
  const animation = element.animate(keyframes, { duration: 600, easing: EASE_OUT, fill: 'backwards', ...timing });
  track(animation);
  return animation;
}

/** Cancel every tracked animation whose target is \`root\` or inside it. */
export function cancelWithin(root: Node) {
  for (const animation of [...running]) {
    const target = (animation.effect as KeyframeEffect | null)?.target;
    if (target && (target === root || root.contains(target))) animation.cancel();
  }
}

export function cancelAll() {
  for (const animation of [...running]) animation.cancel();
}

export const runningAnimations = () => running.size;
`},{name:`useActivity.ts`,code:`import { useEffect, useState, type RefObject } from 'react';
import { canUseDOM, prefersReducedMotion, subscribeReducedMotion } from './env';

export interface ActivityInput {
  visible: boolean;
  hidden: boolean;
  reduced: boolean;
  paused: boolean;
  /** \`html.motion-background\` (portfolio: tab hidden) or \`html.intro-play\` (intro still running). */
  held: boolean;
}

/** Continuous motion runs only when every gate is open. Pure. */
export const isActive = ({ visible, hidden, reduced, paused, held }: ActivityInput) => visible && !hidden && !reduced && !paused && !held;

const heldByPage = () => {
  if (!canUseDOM()) return false;
  const list = document.documentElement.classList;
  return list.contains('motion-background') || list.contains('intro-play');
};

export interface ActivityOptions {
  paused?: boolean;
  /** Minimum visible fraction. Default 5%. */
  threshold?: number;
}

/**
 * True while the element is at least 5% on screen, the tab is visible, reduced motion is off,
 * the caller has not paused it, and the portfolio is not holding motion (intro or background).
 * Starts false so a first render never animates before it is seen.
 */
export function useActivity(ref: RefObject<Element | null>, { paused = false, threshold = 0.05 }: ActivityOptions = {}): boolean {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || !canUseDOM()) return;
    let visible = false;
    const sync = () => setActive(isActive({ visible, hidden: document.hidden, reduced: prefersReducedMotion(), paused, held: heldByPage() }));
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        // A batch lists changes oldest first; the last one is what is on screen now.
        const entry = entries[entries.length - 1];
        if (!entry) return;
        visible = entry.isIntersecting && entry.intersectionRatio >= Math.min(threshold, 0.999);
        sync();
      }, { threshold: [0, threshold] });
      observer.observe(node);
    } else {
      visible = true;
      sync();
    }
    const classes = new MutationObserver(sync);
    classes.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    document.addEventListener('visibilitychange', sync);
    const stopReduced = subscribeReducedMotion(sync);
    return () => {
      observer?.disconnect();
      classes.disconnect();
      document.removeEventListener('visibilitychange', sync);
      stopReduced();
    };
  }, [ref, paused, threshold]);
  return active;
}
`},{name:`usePress.ts`,code:Ae},{name:`useMagnetic.ts`,code:`import { useEffect, type RefObject } from 'react';
import { hasFinePointer, prefersReducedMotion } from './env';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** Pointer position mapped to an offset of at most ±strength/2 px on each axis (site: ±2px). Pure. */
export function magnetOffset(clientX: number, clientY: number, rect: { left: number; top: number; width: number; height: number }, strength = 4) {
  if (!(rect.width > 0) || !(rect.height > 0)) return { x: 0, y: 0 };
  const x = clamp((clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
  const y = clamp((clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);
  return { x: x * strength, y: y * strength };
}

/**
 * The site's magnetic pull: writes \`--z-magnet-x/y\` (rAF-throttled) for an element that applies
 * \`translate: var(--z-magnet-x) var(--z-magnet-y)\` (class \`z-magnetic\`). Fine pointers only,
 * never under reduced motion; resets on leave, cancel and blur.
 */
export function useMagnetic(ref: RefObject<HTMLElement | null>, { strength = 4, disabled = false }: { strength?: number; disabled?: boolean } = {}) {
  useEffect(() => {
    const node = ref.current;
    if (!node || disabled) return;
    let frame = 0;
    let next = { x: 0, y: 0 };
    const paint = () => {
      frame = 0;
      node.style.setProperty('--z-magnet-x', \`\${next.x}px\`);
      node.style.setProperty('--z-magnet-y', \`\${next.y}px\`);
    };
    const reset = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      next = { x: 0, y: 0 };
      node.style.removeProperty('--z-magnet-x');
      node.style.removeProperty('--z-magnet-y');
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !hasFinePointer() || prefersReducedMotion()) return;
      next = magnetOffset(event.clientX, event.clientY, node.getBoundingClientRect(), strength);
      if (!frame) frame = requestAnimationFrame(paint);
    };
    node.addEventListener('pointermove', move);
    node.addEventListener('pointerleave', reset);
    node.addEventListener('pointercancel', reset);
    node.addEventListener('blur', reset);
    return () => {
      node.removeEventListener('pointermove', move);
      node.removeEventListener('pointerleave', reset);
      node.removeEventListener('pointercancel', reset);
      node.removeEventListener('blur', reset);
      reset();
    };
  }, [ref, strength, disabled]);
}
`},{name:`RollLabel.tsx`,code:`import type { ReactNode } from 'react';
import { cx } from './env';

/**
 * The site's button label roll: a duplicate (aria-hidden) label waits one label-height below; on
 * hover-enter of the nearest enabled link, button or \`[data-roll-host]\`, both copies travel from
 * translateY(-100%) back to rest over \`--z-motion-hover\` on the spring, so the label rolls in from
 * above. Nothing plays on leave, on touch, or under reduced motion.
 */
export function RollLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cx('z-roll', className)}>
      <span className="z-roll__in">{children}</span>
      <span className="z-roll__in" aria-hidden="true">{children}</span>
    </span>
  );
}
`},{name:`env.ts`,code:`/* Environment probes shared by the motion primitives. Safe at import time on the server. */
export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
export const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';

export const canUseDOM = () => typeof window !== 'undefined' && typeof document !== 'undefined';

export function mediaQuery(query: string): MediaQueryList | null {
  return canUseDOM() && typeof window.matchMedia === 'function' ? window.matchMedia(query) : null;
}

/* A documentation preview can pretend reduced motion is on, so every primitive and component takes
   its reduced path without touching the operating system setting. Off unless a page turns it on. */
let preview = false;
const previewListeners = new Set<() => void>();

/** Is the reduced-motion preview on? (The OS setting is separate: see \`prefersReducedMotion\`.) */
export const reducedMotionPreview = () => preview;

/** Turn the preview on or off. Also marks \`<html data-reduced-preview>\` so stylesheets can follow. */
export function setReducedMotionPreview(on: boolean) {
  if (preview === on) return;
  preview = on;
  if (canUseDOM()) document.documentElement.toggleAttribute('data-reduced-preview', on);
  for (const listener of [...previewListeners]) listener();
}

/** Read at the moment of use: a preference can change mid-session. True for the OS setting or the preview. */
export const prefersReducedMotion = () => preview || (mediaQuery(REDUCED_MOTION_QUERY)?.matches ?? false);

/** Listen for the OS setting or the preview changing. Read \`prefersReducedMotion()\` inside the listener. */
export function subscribeReducedMotion(listener: () => void): () => void {
  const query = mediaQuery(REDUCED_MOTION_QUERY);
  query?.addEventListener('change', listener);
  previewListeners.add(listener);
  return () => {
    query?.removeEventListener('change', listener);
    previewListeners.delete(listener);
  };
}
export const hasFinePointer = () => mediaQuery(FINE_POINTER_QUERY)?.matches ?? false;
export const isPhoneWidth = () => canUseDOM() && window.innerWidth < 810;

export const cx = (...names: (string | false | null | undefined)[]) => names.filter(Boolean).join(' ');
`},{name:`motion.css`,code:`/* Shared motion primitives. Values come from tokens.css. */

/* Roll label: the duplicate sits just below the visible copy, inside a window the visible copy
   sizes (so a wrapped label rolls by its full height). On hover-enter both travel from one label
   height up back to rest, so the label rolls in from above; leaving plays nothing. */
.z-roll {
  position: relative;
  display: block;
  overflow: hidden;
}

.z-roll__in {
  display: block;
}

.z-roll__in[aria-hidden='true'] {
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
}

@media (hover: hover) and (pointer: fine) {
  :is(a, button, [data-roll-host]):not(:disabled, [aria-disabled='true']):hover .z-roll__in {
    animation: z-roll var(--z-motion-hover) var(--z-ease-spring);
  }
}

@keyframes z-roll {
  from { transform: translateY(-100%); }
  to { transform: none; }
}

/* Magnetic pull, written by useMagnetic on fine pointers only. */
.z-magnetic {
  translate: var(--z-magnet-x, 0px) var(--z-magnet-y, 0px);
  transition: translate 250ms var(--z-ease-out);
}

/* Press feedback, from usePress (\`data-pressed\`) or :active. */
.z-pressable {
  transition: scale var(--z-motion-feedback) var(--z-ease-out);
}

.z-pressable:active:not(:disabled),
.z-pressable[data-pressed] {
  scale: var(--z-press-scale);
  transition-duration: var(--z-motion-press);
}

@media (prefers-reduced-motion: reduce) {
  :is(a, button, [data-roll-host]):hover .z-roll__in {
    animation: none !important;
  }

  .z-magnetic {
    translate: none;
  }

  .z-pressable,
  .z-magnetic {
    transition: none;
  }
}
`},{name:`tokens.css`,code:de}];function Wt(){let[e,t]=(0,M.useState)(X[0].name),n=X.find(t=>t.name===e)??X[0];return(0,K.jsxs)(`div`,{className:`kit-folds`,children:[(0,K.jsx)(D,{title:`Properties & states`,children:(0,K.jsx)(`div`,{className:`motion-ref`,children:me.map(e=>(0,K.jsxs)(`div`,{className:`motion-ref__item`,children:[(0,K.jsx)(`h3`,{className:`motion-ref__name`,children:(0,K.jsx)(`code`,{children:e.name})}),(0,K.jsx)(xe,{props:e.props,caption:`${e.name} options`})]},e.name))})}),(0,K.jsx)(D,{title:`Usage & keyboard`,children:(0,K.jsx)(`div`,{className:`kit-stack`,children:(0,K.jsx)(Ce,{keys:pe})})}),(0,K.jsx)(D,{title:`Source`,children:(0,K.jsx)(E,{title:`Source`,code:n.code,language:n.language??_e(n.name),label:`Source code, ${n.name}`,actions:(0,K.jsx)(Ee,{label:`Source file`,hideLabel:!0,mono:!0,value:n.name,options:X.map(e=>({value:e.name,label:e.name})),onChange:t})})})]})}var Gt=240,Z=He(!1),Kt=He(!0),qt=[{title:`First play`,text:`${Z.first.distance}px over ${Z.first.duration}ms, opacity and translate only. Siblings follow 40ms apart, capped at 160ms.`,phone:`Phones: ${Kt.first.distance}px, ${Kt.first.duration}ms, capped at 80ms.`},{title:`Replay from below`,text:`Leave through the bottom and return while scrolling down: opacity from .45, ${Z.replay.distance}px, ${Z.replay.duration}ms, no wait.`,phone:`Leaving through the top never replays.`},{title:`Never in the way`,text:`Nothing plays while scrolling up, while focus is inside, in a hidden tab, or under reduced motion.`,phone:`Content is never hidden before it plays.`}];function Jt(){let{reduced:e}=q(),t=(0,M.useRef)(null),n=(0,M.useRef)(null),r=(0,M.useRef)(new Map),i=(0,M.useRef)(0),[a,o]=(0,M.useState)({}),[s,c]=(0,M.useState)(`down`);(0,M.useEffect)(()=>{let e=t.current;if(!e)return;let i=p({root:e,onPlay:({element:e,replay:t,timing:n})=>{let r=e.dataset.row;r&&o(e=>({...e,[r]:{label:Ve(n,t),replay:t,count:(e[r]?.count??0)+1}}))}});for(let e of Be){let t=r.current.get(e.id);t&&i.register(t,{type:`rise`,delay:e.delay})}return n.current=i,()=>{i.dispose(),n.current=null}},[]);let l=()=>{let e=t.current?.scrollTop??0;Math.abs(e-i.current)>1&&(c(e>i.current?`down`:`up`),i.current=e)},u=n=>t.current?.scrollBy({top:n,behavior:e?`auto`:`smooth`}),d=()=>{let e=t.current;e&&(e.scrollTo({top:0,behavior:`auto`}),i.current=0,c(`down`),o({}),n.current?.rearm())},f=Object.keys(a).length;return(0,K.jsxs)(`div`,{className:`motion-reveal`,children:[(0,K.jsxs)(`div`,{className:`motion-reveal__rules`,children:[(0,K.jsx)(`ol`,{className:`motion-rules`,children:qt.map((e,t)=>(0,K.jsxs)(`li`,{children:[(0,K.jsx)(`span`,{className:`kit-num`,"aria-hidden":`true`,children:String(t+1).padStart(2,`0`)}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h3`,{className:`motion-rules__title`,children:e.title}),(0,K.jsx)(`p`,{className:`motion-rules__text`,children:e.text}),(0,K.jsx)(`p`,{className:`motion-rules__phone`,children:e.phone})]})]},e.title))}),(0,K.jsxs)(`div`,{className:`motion-reveal__actions`,children:[(0,K.jsx)(g,{icon:`refresh`,onClick:d,children:`Replay`}),(0,K.jsxs)(`span`,{className:`motion-reveal__scrolls`,children:[(0,K.jsx)(b,{label:`Scroll down`,icon:`arrow-down`,tooltip:!0,onClick:()=>u(Gt)}),(0,K.jsx)(b,{label:`Scroll up`,icon:`arrow-up`,tooltip:!0,onClick:()=>u(-240)})]})]}),e&&(0,K.jsx)(`p`,{className:`motion-reveal__reduced`,children:`Reduced motion: every row is simply there. The labels stay empty because nothing plays.`})]}),(0,K.jsxs)(`div`,{className:`motion-reveal__box`,children:[(0,K.jsxs)(`div`,{className:`motion-reveal__box-head`,children:[(0,K.jsx)(`p`,{className:`motion-reveal__box-title`,children:`Order timeline`}),(0,K.jsxs)(`p`,{className:`motion-direction`,"data-direction":s,children:[(0,K.jsx)(`span`,{"aria-hidden":`true`,children:s===`down`?`↓`:`↑`}),` Scrolling `,s]})]}),(0,K.jsx)(`div`,{ref:t,className:`motion-reveal__scroller`,role:`region`,"aria-label":`Order timeline. Scroll to see entrances.`,tabIndex:0,onScroll:l,children:(0,K.jsx)(`ul`,{className:`motion-timeline`,children:Be.map((t,n)=>{let i=a[t.id];return(0,K.jsxs)(`li`,{ref:e=>{e?r.current.set(t.id,e):r.current.delete(t.id)},className:`motion-row`,"data-row":t.id,"data-group":Math.floor(n/6)+1,children:[(0,K.jsx)(`span`,{className:`motion-row__index`,"aria-hidden":`true`,children:String(n+1).padStart(2,`0`)}),(0,K.jsxs)(`span`,{className:`motion-row__copy`,children:[(0,K.jsx)(`span`,{className:`motion-row__title`,children:t.title}),(0,K.jsx)(`span`,{className:`motion-row__detail`,children:t.detail})]}),(0,K.jsxs)(`span`,{className:`motion-row__badge`,"data-kind":i?i.replay?`replay`:`first`:`waiting`,children:[i?i.label:f||e?`—`:`Waiting`,i&&i.count>1&&(0,K.jsxs)(`b`,{children:[` ×`,i.count]})]})]},t.id)})})})]}),(0,K.jsx)(`div`,{className:`motion-reveal__code`,children:(0,K.jsx)(E,{title:`Reveal`,filename:`Receipt.tsx`,code:Ze,language:`tsx`,label:`Reveal code`,maxHeight:300})})]})}function Q({kind:e}){return(0,K.jsxs)(`div`,{className:`motion-ex motion-ex--slide`,"data-kind":e,"aria-hidden":`true`,children:[(0,K.jsx)(`span`,{className:`motion-ex__label`,children:e===`good`?`translate`:`width`}),(0,K.jsxs)(`span`,{className:`motion-ex__row`,children:[(0,K.jsx)(`i`,{className:`motion-ex__pill`}),(0,K.jsx)(`span`,{className:`motion-ex__text`,children:`Pay $48.00`})]})]})}function Yt({kind:e}){return e===`good`?(0,K.jsx)(w,{size:`sm`,state:`loading`,announce:!1,children:`Pay $48.00`}):(0,K.jsx)(`span`,{className:`motion-ex__pulse`,children:(0,K.jsx)(g,{size:`sm`,tabIndex:-1,children:`Buy now`})})}function Xt({kind:e}){return(0,K.jsxs)(`div`,{className:`motion-ex motion-ex--viewport`,"data-kind":e,"aria-hidden":`true`,children:[(0,K.jsxs)(`span`,{className:`motion-ex__frame`,children:[(0,K.jsx)(`i`,{className:`motion-ex__dot`}),(0,K.jsx)(`b`,{children:`On screen`})]}),(0,K.jsxs)(`span`,{className:`motion-ex__outside`,children:[(0,K.jsx)(`i`,{className:`motion-ex__dot`}),(0,K.jsx)(`b`,{children:e===`good`?`Paused`:`Running`})]})]})}function Zt({kind:e}){return(0,K.jsxs)(`div`,{className:`motion-ex motion-ex--leave`,"data-kind":e,"aria-hidden":`true`,children:[(0,K.jsx)(`span`,{className:`motion-ex__toast`,children:`Order saved`}),(0,K.jsx)(`span`,{className:`motion-ex__label`,children:e===`good`?`in 600ms · out 180ms`:`in 180ms · out 600ms`})]})}function Qt({kind:e}){return(0,K.jsxs)(`div`,{className:`motion-ex motion-ex--bounce`,"data-kind":e,"aria-hidden":`true`,children:[(0,K.jsx)(`span`,{className:`motion-ex__track`,children:(0,K.jsx)(`i`,{className:`motion-ex__ball`})}),(0,K.jsx)(`span`,{className:`motion-ex__label`,children:e===`good`?`spring`:`overshoot`})]})}function $t({kind:e}){return(0,K.jsx)(`p`,{className:`motion-ex motion-ex--words`,"data-kind":e,"aria-hidden":`true`,children:e===`good`?`Still confirming with your bank…`:`Almost there!`})}function $({children:e}){let t=(0,M.useRef)(null),n=O(t,{page:`motion`});return(0,K.jsx)(`div`,{ref:t,"data-playback":n?`running`:`paused`,children:e})}function en(){return(0,K.jsxs)(`div`,{className:`motion-rules-list`,children:[(0,K.jsx)($,{children:(0,K.jsx)(A,{number:1,title:`Animate transform and opacity`,do:{text:`Move things with translate, scale and opacity. The browser composites them without touching layout.`,example:(0,K.jsx)(Q,{kind:`good`})},dont:{text:`Animate width, height or margin. Every neighbor reflows on every frame.`,example:(0,K.jsx)(Q,{kind:`bad`})}})}),(0,K.jsx)($,{children:(0,K.jsx)(A,{number:2,title:`Loop only while something waits`,do:{text:`A loop answers a wait: a payment the bank has not confirmed. It stops when the answer arrives.`,example:(0,K.jsx)(Yt,{kind:`good`})},dont:{text:`A loop that decorates. A pulsing button asks for attention it has not earned.`,example:(0,K.jsx)(Yt,{kind:`bad`})}})}),(0,K.jsx)($,{children:(0,K.jsx)(A,{number:3,title:`Pause what nobody sees`,do:{text:`Stop loops offscreen, in a hidden tab and under reduced motion. useActivity covers all three.`,example:(0,K.jsx)(Xt,{kind:`good`})},dont:{text:`Leave them running. They cost battery and attention for nothing.`,example:(0,K.jsx)(Xt,{kind:`bad`})}})}),(0,K.jsx)($,{children:(0,K.jsx)(A,{number:4,title:`Leave faster than you arrive`,do:{text:`Enter on 600ms. Exit on 180ms with ease-in, so the next thing is not kept waiting.`,example:(0,K.jsx)(Zt,{kind:`good`})},dont:{text:`Let a dialog linger on the way out. The task has moved on; the interface has not.`,example:(0,K.jsx)(Zt,{kind:`bad`})}})}),(0,K.jsx)($,{children:(0,K.jsx)(A,{number:5,title:`Settle without a bounce`,do:{text:`Use the overdamped spring: a fast start and a soft landing, no second beat.`,example:(0,K.jsx)(Qt,{kind:`good`})},dont:{text:`Overshoot. A bounce adds a beat the task does not need, and money is not playful.`,example:(0,K.jsx)(Qt,{kind:`bad`})}})}),(0,K.jsx)($,{children:(0,K.jsx)(A,{number:6,title:`Name the wait, never fake it`,do:{text:`Say what is happening, and offer a way out when it runs long.`,example:(0,K.jsx)($t,{kind:`good`})},dont:{text:`Guess at progress. "Almost there" is a promise the bank has not made.`,example:(0,K.jsx)($t,{kind:`bad`})}})}),(0,K.jsx)(E,{title:`What may animate`,filename:`sheet.css`,code:et,language:`css`,label:`What may animate`,maxHeight:260})]})}var tn=e=>`${e<0?`−`:`+`}${Math.abs(e).toFixed(1)}`;function nn(){let e=(0,M.useRef)(null),t=(0,M.useRef)(()=>{});return(0,M.useEffect)(()=>()=>t.current(),[]),(0,K.jsxs)(`div`,{className:`motion-sig`,children:[(0,K.jsx)(g,{ref:e,children:`Pay $48.00`}),(0,K.jsx)(b,{label:`Replay roll`,icon:`refresh`,variant:`ghost`,size:`sm`,tooltip:!0,onClick:()=>{t.current(),t.current=wt(e.current)}})]})}function rn(){let[e,t]=(0,M.useState)({x:0,y:0});return(0,K.jsxs)(`div`,{className:`motion-sig motion-sig--magnet`,children:[(0,K.jsx)(g,{size:`lg`,onPointerMove:e=>{e.pointerType===`touch`||!le()||n()?t({x:0,y:0}):t(re(e.clientX,e.clientY,e.currentTarget.getBoundingClientRect()))},onPointerLeave:()=>t({x:0,y:0}),children:`Place order`}),(0,K.jsxs)(`div`,{className:`motion-gauge`,"aria-hidden":`true`,children:[(0,K.jsx)(`span`,{className:`motion-gauge__box`,children:(0,K.jsx)(`i`,{style:{translate:`${e.x*12}px ${e.y*12}px`}})}),(0,K.jsxs)(`span`,{className:`motion-gauge__text`,children:[`x `,tn(e.x),`px · y `,tn(e.y),`px`]})]})]})}function an(){let e=(0,M.useRef)(null),[t,n]=(0,M.useState)(1),r=(0,M.useRef)(0);(0,M.useEffect)(()=>()=>cancelAnimationFrame(r.current),[]);let i=(0,M.useCallback)(()=>{cancelAnimationFrame(r.current);let t=performance.now()+700,i=a=>{let o=Number.parseFloat(getComputedStyle(e.current).scale);n(Number.isFinite(o)?o:1),a<t&&(r.current=requestAnimationFrame(i))};r.current=requestAnimationFrame(i)},[]);return(0,K.jsxs)(`div`,{className:`motion-sig motion-sig--press`,children:[(0,K.jsx)(g,{ref:e,variant:`dark`,onPointerDown:i,onPointerUp:i,onKeyDown:e=>{!e.repeat&&(e.key===` `||e.key===`Enter`)&&i()},onKeyUp:i,children:`Hold me`}),(0,K.jsxs)(`p`,{className:`motion-readout-chip`,"aria-hidden":`true`,children:[(0,K.jsx)(`span`,{children:`scale`}),(0,K.jsx)(`b`,{children:t.toFixed(3)})]})]})}function on(){let[e,t]=(0,M.useState)(!1),n=(0,M.useRef)(0);(0,M.useEffect)(()=>()=>window.clearTimeout(n.current),[]);let r=ke[1];return(0,K.jsxs)(`div`,{className:`motion-sig motion-sig--card`,children:[(0,K.jsx)(`div`,{className:`motion-sig-card`,"data-play":e||void 0,onClick:e=>{e.target.closest(`a`)&&e.preventDefault()},children:(0,K.jsx)(oe,{href:`#motion/signatures`,layout:`horizontal`,tone:`white`,title:r.title,description:r.description,image:r.image,tags:r.tags,imageLoading:`eager`})}),(0,K.jsx)(b,{className:`motion-sig__replay`,label:`Replay hover`,icon:`refresh`,variant:`ghost`,size:`sm`,tooltip:!0,onClick:()=>{window.clearTimeout(n.current),t(!0),n.current=window.setTimeout(()=>t(!1),1800)}})]})}var sn=[`Work`,`About`,`Systems`];function cn(){let[e,t]=(0,M.useState)(0),[n,r]=(0,M.useState)(null),i=(0,M.useRef)([]),a=()=>{i.current.forEach(window.clearTimeout),i.current=[]};return(0,M.useEffect)(()=>a,[]),(0,K.jsxs)(`div`,{className:`motion-sig motion-sig--nav`,children:[(0,K.jsx)(`nav`,{className:`motion-nav`,"aria-label":`Example navigation`,children:sn.map((r,i)=>(0,K.jsx)(`a`,{href:`#motion/signatures`,"aria-current":e===i?`page`:void 0,"data-visiting":n===i||void 0,onClick:e=>{e.preventDefault(),t(i)},children:r},r))}),(0,K.jsx)(b,{label:`Replay dot`,icon:`refresh`,variant:`ghost`,size:`sm`,tooltip:!0,onClick:()=>{a();let t=sn.map((e,t)=>t).filter(t=>t!==e);t.forEach((e,t)=>{i.current.push(window.setTimeout(()=>r(e),t*1100))}),i.current.push(window.setTimeout(()=>r(null),t.length*1100))}})]})}function ln(){return(0,K.jsxs)(we,{columns:3,children:[(0,K.jsx)(j,{title:`Roll label`,note:`Rolls in from above, once, on hover-enter. 700ms spring.`,interactive:!0,inspect:{code:Ke},children:(0,K.jsx)(nn,{})}),(0,K.jsx)(j,{title:`Magnetic pull`,note:`Filled buttons lean at most ±2px toward the pointer. 250ms expo-out.`,interactive:!0,inspect:{code:qe},children:(0,K.jsx)(rn,{})}),(0,K.jsx)(j,{title:`Nav dot`,note:`Flies in from the left and comes into focus. 700ms spring.`,interactive:!0,inspect:{code:Xe,language:`css`},children:(0,K.jsx)(cn,{})}),(0,K.jsx)(j,{title:`Card zoom and arrow`,note:`The image zooms to 1.1 over 800ms; the arrow flies out over 500ms.`,span:2,interactive:!0,inspect:{code:Ye},children:(0,K.jsx)(on,{})}),(0,K.jsx)(j,{title:`Press`,note:`Scale .96 in 120ms. Release returns in 200ms.`,interactive:!0,inspect:{code:Je},children:(0,K.jsx)(an,{})})]})}function un(){let e=y(),t=(0,M.useMemo)(()=>e.filter(e=>e.group===`Motion`).map(e=>e.variable),[e]),n=(0,M.useMemo)(()=>nt(e),[e]);return(0,K.jsxs)(`div`,{className:`kit-stack`,children:[(0,K.jsx)(Se,{tokens:fe.tokens??[]}),(0,K.jsx)(Te,{tokens:t,caption:`Motion tokens`}),(0,K.jsx)(E,{title:`Motion tokens`,filename:`tokens.css`,code:n,language:`css`,label:`Motion tokens CSS`,maxHeight:420})]})}function dn(){let{reduced:e}=q();return(0,K.jsxs)(`div`,{className:`motion-page`,"data-reduced":e||void 0,children:[(0,K.jsx)(ge,{id:`motion`,actions:(0,K.jsx)(st,{}),children:`Motion explains change. It answers the finger, shows where things went and settles. Eight tempos, one spring, read live from the tokens.`}),(0,K.jsxs)(Oe,{tabs:he,label:`Motion sections`,children:[(0,K.jsx)(k,{id:`tempo`,eyebrow:`Tempo`,title:`Eight tempos. One ladder.`,lead:`Each tempo is a token with a job, drawn against one axis. Play them together, then slow them down: every component here reads its timing from the same tokens.`,children:(0,K.jsx)(Ht,{})}),(0,K.jsx)(ve,{title:`One spring for space. Expo-out for feedback.`,lead:`Everything that moves on the portfolio runs on two curves. We kept them, named the tempos and gave each tempo a job.`,reasons:[{title:`Space gets the spring`,text:`Indicators, thumbs, morphs and zooms ride one overdamped spring. It starts fast, never overshoots and settles softly.`},{title:`Feedback gets expo-out`,text:`Color, press and entrances answer at once, so they spend their change early. Exits use ease-in and leave faster than they arrive.`},{title:`Eight tempos, no more`,text:`A tempo is a token with a job. If a change fits none of them, it probably should not animate.`}]}),(0,K.jsx)(k,{id:`curves`,eyebrow:`Curves`,title:`A spring that never bounces.`,lead:`Spring for space, expo-out for feedback. Drag the scrubber to read both curves at any moment, then play them over a real tempo.`,children:(0,K.jsx)(St,{})}),(0,K.jsx)(k,{id:`signatures`,eyebrow:`Signatures`,title:`Five small things the site does.`,lead:`Roll, pull, fly in, zoom and press. Four ship as library primitives; none of them travels far.`,children:(0,K.jsx)(ln,{})}),(0,K.jsx)(k,{id:`reveal`,eyebrow:`Reveal`,title:`Arrive once. Replay only from below.`,lead:`Scroll the box. The first play travels 28px; coming back from below replays quietly. Scrolling up never replays.`,children:(0,K.jsx)(Jt,{})}),(0,K.jsx)(k,{id:`choreography`,eyebrow:`Choreography`,title:`A confirmation, one beat at a time.`,lead:`Press, wait, close, land, rise. Each beat names its tempo, and only one spring moves at a time.`,children:(0,K.jsx)(ft,{})}),(0,K.jsx)(k,{id:`reduced`,eyebrow:`Reduced motion`,title:`Same words. No travel.`,lead:`Reduced motion keeps every word, every focus ring and every result. It removes the movement between them.`,children:(0,K.jsx)(Ut,{})}),(0,K.jsx)(k,{id:`rules`,eyebrow:`Rules`,title:`What may move, and when.`,lead:`Six rules, each with the version that breaks it.`,children:(0,K.jsx)(en,{})})]}),(0,K.jsx)(k,{id:`reference`,title:`Reference`,children:(0,K.jsx)(Wt,{})}),(0,K.jsx)(k,{id:`tokens`,title:`Tokens`,lead:`Every motion token, read from the live registry. Press one to copy var().`,children:(0,K.jsx)(un,{})})]})}function fn(){return(0,K.jsx)(ot,{children:(0,K.jsx)(dn,{})})}export{fn as default};