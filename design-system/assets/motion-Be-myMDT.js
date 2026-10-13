import{An as e,Cn as t,Dn as n,En as r,Et as i,Fn as a,Ft as o,In as s,Mn as c,Mt as l,Nn as u,Pn as d,Rn as f,Sn as p,Tt as m,an as h,bn as g,dn as _,fn as v,g as y,gn as b,gt as x,hn as ee,jn as S,jt as te,kn as ne,ln as re,mn as ie,mt as C,on as w,p as ae,pn as T,pt as E,st as oe,vn as se,wn as D,wt as O,xn as k,yn as ce}from"./route-D8V-RcHq.js";import{t as le}from"./tokens--8wjVqaD.js";import{b as ue,v as de,x as fe,y as pe}from"./docs-Dv2yWw9W.js";import{A as me,C as A,E as he,O as ge,c as _e,d as ve,f as ye,g as j,i as be,k as M,l as xe,n as N,o as P,r as Se,s as Ce,t as we,x as Te,y as Ee}from"./kit-CGiBTmcs.js";import{t as De}from"./lab-blx5hVF7.js";import{t as Oe}from"./projects-B499T4Vf.js";import{t as ke}from"./usePress-jGC2oW5J.js";var F=f(),I=Object.freeze({spring:{label:`Spring`,token:`--z-ease-spring`,css:`var(--z-ease-spring)`,word:`Space and shape`},out:{label:`Expo-out`,token:`--z-ease-out`,css:`var(--z-ease-out)`,word:`Feedback and entrances`},in:{label:`Ease-in`,token:`--z-ease-in`,css:`var(--z-ease-in)`,word:`Exits only`}}),L=Object.freeze([{id:`press`,title:`Press`,token:`--z-motion-press`,ms:g.press,ease:`out`,role:`Scale to .96 under a finger or a key.`,demo:`Press the button, or hold Space.`},{id:`exit`,title:`Exit`,token:`--z-motion-exit`,ms:g.exit,ease:`in`,role:`Dialogs, toasts and sheets leave faster than they arrive.`,demo:`Dismiss the confirmation.`},{id:`feedback`,title:`Feedback`,token:`--z-motion-feedback`,ms:g.feedback,ease:`out`,role:`Color, opacity, focus and small icon swaps.`,demo:`Copy the order ID.`},{id:`control`,title:`Control`,token:`--z-motion-control`,ms:g.control,ease:`spring`,role:`Indicators and thumbs: the segmented glide, the switch.`,demo:`Choose a payment method.`},{id:`layout`,title:`Layout`,token:`--z-motion-layout`,ms:g.layout,ease:`spring`,role:`Morphs, lifts and size changes: the Pay button, a rolling total.`,demo:`Pay, or change the total.`},{id:`enter`,title:`Entrance`,token:`--z-motion-enter`,ms:g.enter,phoneMs:g.enterPhone,ease:`out`,role:`Scroll entrances: travel 28px, then rest.`,demo:`Replay the entrance.`},{id:`hover`,title:`Hover`,token:`--z-motion-hover`,ms:g.hover,ease:`spring`,role:`The label roll and the hover arrows.`,demo:`Hover the button.`},{id:`media`,title:`Media`,token:`--z-motion-media`,ms:g.media,ease:`spring`,role:`Card image zoom. The slowest tempo there is.`,demo:`Hover the image.`}]),Ae=Math.max(...L.map(e=>e.ms)),je=e=>L.find(t=>t.id===e),Me=e=>e.ms/Ae,R=Object.freeze([{id:`spring`,label:`Spring`,at:ne},{id:`out`,label:`Expo-out`,at:n},{id:`in`,label:`Ease-in`,at:r}]),Ne=e=>R.find(t=>t.id===e),z=Object.freeze({width:640,height:340,left:48,top:24,right:20,bottom:54}),B=(e,t=z)=>t.left+e*(t.width-t.left-t.right),V=(e,t=z)=>t.top+(1-e)*(t.height-t.top-t.bottom),H=e=>Math.round(e*100)/100;function U(e,t=120,n=z){let r=[];for(let i=0;i<=t;i++){let a=i/t;r.push(`${i===0?`M`:`L`}${H(B(a,n))} ${H(V(e(a),n))}`)}return r.join(` `)}function Pe(e=z){return D.map((t,n)=>{let r=n/(D.length-1);return{x:H(B(r,e)),y:H(V(t,e)),t:r,value:t}})}var Fe=n=>n>=1?1:e(n*t);function Ie(){let e=0;for(let t=0;t<D.length-1;t++){let n=t/(D.length-1);e=Math.max(e,Math.abs(D[t]-Fe(n)))}return e}function Le(e){return{half:S(e,.5),most:S(e,.9),almost:S(e,.99)}}var W=e=>`${Math.round(e*100)}%`,Re=e=>e.toFixed(3),G=(e,t)=>Math.round(e*t);function ze({bank:e=1400,hold:t=1600,delay:n=160}={}){let r=e,i=r+120;return[{id:`press`,label:`Pay presses in`,detail:`Scale .96, 120ms`,tier:`press`,ease:`out`,start:0,duration:g.press},{id:`wait`,label:`Nothing moves`,detail:`The first 160ms stay still`,tier:null,ease:null,start:0,duration:n},{id:`close`,label:`Pay closes to a circle`,detail:`Width and radius, 520ms spring`,tier:`layout`,ease:`spring`,start:n,duration:g.layout},{id:`wave`,label:`Dots wave while the bank answers`,detail:`A loop, only while it waits`,tier:null,ease:null,start:n+g.layout,duration:Math.max(0,r-n-g.layout),loop:!0},{id:`land`,label:`Pay lands green, the check draws`,detail:`Color 200ms, check 420ms`,tier:`feedback`,ease:`out`,start:r,duration:420},{id:`status`,label:`The status line says Paid`,detail:`Opacity, 200ms`,tier:`feedback`,ease:`out`,start:i,duration:g.feedback},{id:`receipt`,label:`The receipt rises`,detail:`28px travel, 600ms`,tier:`enter`,ease:`out`,start:i,duration:g.enter},{id:`rows`,label:`Its rows follow, 40ms apart`,detail:`Stagger, capped at 160ms`,tier:`enter`,ease:`out`,start:i+g.stagger,duration:g.enter+g.stagger*2},{id:`open`,label:`Pay opens to its label`,detail:`Width and radius, 520ms spring`,tier:`layout`,ease:`spring`,start:r+t,duration:g.layout}]}var Be=e=>Math.max(...e.map(e=>e.start+e.duration)),Ve=Object.freeze([[`Cart reviewed`,`Two items, one promo.`],[`Address confirmed`,`Brooklyn, NY.`],[`Shipping protection added`,`$0.99 for 30 days.`],[`Card verified`,`Visa ending 4242.`],[`Payment authorized`,`Held by your bank.`],[`Order placed`,`ZJ-2048.`],[`Packed`,`At the Reno warehouse.`],[`Label created`,`Standard shipping.`],[`Picked up`,`By the carrier.`],[`In transit`,`Arrives Oct 16.`],[`Out for delivery`,`Today by 9 pm.`],[`Delivered`,`Left at the door.`]].map(([e,t],n)=>({id:`row-${n+1}`,title:e,detail:t,delay:v(n%6)})));function He(e,t){let n=`${t?`Replay`:`First play`} · ${e.distance}px · ${e.duration}ms`;return e.delay>0?`${n} · +${e.delay}ms`:n}function Ue(e=!1){return{first:_({mobile:e}),title:_({type:`title`,mobile:e}),image:_({type:`image`,mobile:e}),replay:_({replay:!0,mobile:e})}}var We=Object.freeze([{what:`Press`,normal:`Scales to .96 in 120ms.`,reduced:`No scale. The state still changes.`},{what:`Hover`,normal:`The label rolls; filled buttons lean ±2px.`,reduced:`Neither. Focus rings stay.`},{what:`Controls`,normal:`The indicator glides on the spring.`,reduced:`It lands at once. The choice reads the same.`},{what:`Entrances`,normal:`Rise 28px over 600ms.`,reduced:`The content is simply there.`},{what:`Pay`,normal:`Closes to a circle and waves.`,reduced:`A still circle, the middle dot leading. Same words.`},{what:`Numbers`,normal:`Digits roll on their own reels.`,reduced:`The number changes.`},{what:`Loops`,normal:`Run only while seen.`,reduced:`Stop. A still pose says what they said.`}]),K=(e,t=`transition: none;`)=>`
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
${K(`.pay`,`transition: none;
    scale: none;`)}`,exit:`.toast {
  transition:
    opacity var(--z-motion-exit) var(--z-ease-in),
    translate var(--z-motion-exit) var(--z-ease-in);
}

.toast[data-leaving] {
  opacity: 0;
  translate: 0 8px;
}
${K(`.toast`)}`,feedback:`.copy {
  transition:
    color var(--z-motion-feedback) var(--z-ease-out),
    background-color var(--z-motion-feedback) var(--z-ease-out),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}
${K(`.copy`)}`,control:`.thumb {
  transition: translate var(--z-motion-control) var(--z-ease-spring);
}

.segmented[data-value='annual'] .thumb {
  translate: 100% 0;
}
${K(`.thumb`)}`,layout:`.total {
  transition: translate var(--z-motion-layout) var(--z-ease-spring);
}

.summary[data-protected] .total {
  translate: 0 -4px;
}
${K(`.total`)}`,enter:`import { Reveal, Stagger } from '@zijie/ui';

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
${K(`.link .arrow`,`translate: none;
    transition: none;`)}`,media:`.card img {
  transition: scale var(--z-motion-media) var(--z-ease-spring);
}

@media (hover: hover) and (pointer: fine) {
  .card:hover img {
    scale: 1.1;
  }
}
${K(`.card img`,`scale: none;
    transition: none;`)}`});var Ge=`:root {
  /* Stiffness 300, damping 60, mass 1, sampled into 26 stops. */
  --z-ease-spring: ${k};
  --z-ease-out: cubic-bezier(.16, 1, .3, 1);
}

.sheet {
  transition: translate var(--z-motion-layout) var(--z-ease-spring);
}
`,Ke=`import { SPRING, animate } from '@zijie/ui/motion';

animate(panel, [{ translate: '0 12px', opacity: 0 }, { translate: '0 0', opacity: 1 }], {
  duration: 520,
  easing: SPRING,
});
`,qe=`import { Button, RollLabel } from '@zijie/ui';

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
`,Je=`import { useRef } from 'react';
import { useMagnetic } from '@zijie/ui';

export function Chip() {
  const ref = useRef<HTMLButtonElement>(null);
  useMagnetic(ref); // at most ±2px, fine pointers only
  return <button ref={ref} className="chip z-magnetic">Pay</button>;
}
`,Ye=`import { composeHandlers, usePress } from '@zijie/ui';

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
`,Xe=`import { ProjectCard } from '@zijie/ui';

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
`,Ze=`.nav a {
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
`,Qe=`import { Reveal, Stagger, createRevealController } from '@zijie/ui';

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
`,$e=`import { useEffect, useRef } from 'react';
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
`,et=`import { prefersReducedMotion, useReducedMotion } from '@zijie/ui';

/* Read it where you animate, not once at load: it can change mid-session. */
if (!prefersReducedMotion()) element.animate(frames, timing);

/* In React, the live value. */
const reduced = useReducedMotion();
`,tt=`/* Animate: transform, translate, scale, rotate, opacity, filter,
   clip-path, stroke-dashoffset, colors and shadows. */
.sheet {
  transition:
    translate var(--z-motion-control) var(--z-ease-spring),
    opacity var(--z-motion-feedback) var(--z-ease-out);
}

/* Never: width, height, inset, margin. Layout belongs to the browser. */
`,nt=e=>e.group===`Motion`;function rt(e){let t=e.filter(nt),n=(e,t)=>e.flatMap(e=>{let n=t(e);return n===void 0?[]:[`  ${e.variable}: ${n};`]}),r=[{title:`Curves: one spring for space, expo-out for feedback, ease-in for exits`,test:e=>e.variable.startsWith(`--z-ease`)},{title:`Tempos`,test:e=>/^--z-(motion-(press|feedback|control|layout|hover|media|exit|enter|title|replay)|press-scale)$/.test(e.variable)},{title:`Entrance travel and stagger`,test:e=>/travel|replay-from|stagger|delay-cap/.test(e.variable)}],i=new Set,a=r.flatMap(e=>{let r=t.filter(t=>!i.has(t.variable)&&e.test(t));r.forEach(e=>i.add(e.variable));let a=n(r,e=>e.value);return a.length?[`  /* ${e.title} */\n${a.join(`
`)}`]:[]}),o=t.filter(e=>!i.has(e.variable));o.length&&a.push(`  /* Other */\n${n(o,e=>e.value).join(`
`)}`);let s=n(t,e=>e.mobile),c=s.length?`\n\n@media (max-width: 809.98px) {\n  :root {\n${s.map(e=>`  ${e}`).join(`
`)}\n  }\n}`:``;return`:root {\n${a.join(`

`)}\n}${c}\n`}var q=ie(),it=(0,F.createContext)({system:!1,preview:!1,reduced:!1,setPreview:()=>{}}),J=()=>(0,F.useContext)(it);function at(e){let t=window.matchMedia?.(c);return t?.addEventListener(`change`,e),()=>t?.removeEventListener(`change`,e)}var ot=()=>window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1;function st({children:e}){let[t,n]=(0,F.useState)(!1),r=(0,F.useSyncExternalStore)(at,ot,()=>!1);(0,F.useEffect)(()=>(s(t),()=>s(!1)),[t]);let i=(0,F.useMemo)(()=>({system:r,preview:t,reduced:r||t,setPreview:n}),[r,t]);return(0,q.jsx)(it.Provider,{value:i,children:(0,q.jsx)(l,{en:e})})}function ct(){let e=o(),{system:t,preview:n,setPreview:r}=J();return(0,q.jsx)(`div`,{className:`motion-preview`,children:(0,q.jsx)(ae,{label:e({en:`Reduced motion preview`}),description:e({en:t?`On in your system settings.`:`Try the page without movement.`}),checked:t||n,disabled:t,onChange:r})})}var lt=1400,ut=ze({bank:lt}),Y=Math.ceil(Be(ut)/400)*400,dt=[0,1e3,2e3,3e3],X={style:`currency`,currency:`USD`};function ft({total:e,shown:t}){let n=(0,F.useRef)(null);return(0,F.useEffect)(()=>{let e=n.current;if(!t||!e)return;let r=[...e.querySelectorAll(`[data-rise]`)],i=d(),a=r.map((e,t)=>{let n=_({mobile:i,delay:t*g.stagger});return T(e,[{opacity:0,translate:`0 ${n.distance}px`},{opacity:1,translate:`0 0`}],{duration:n.duration,delay:n.delay})});return()=>a.forEach(e=>e?.cancel())},[t]),(0,q.jsx)(`div`,{ref:n,className:`motion-receipt-slot`,"data-shown":t||void 0,children:(0,q.jsx)(l,{en:t?(0,q.jsxs)(`div`,{className:`motion-receipt-card`,children:[(0,q.jsx)(`p`,{className:`motion-receipt-card__title`,"data-rise":!0,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Receipt ZJ-2048`})})}),(0,q.jsxs)(`p`,{className:`motion-receipt-card__line`,"data-rise":!0,children:[(0,q.jsx)(`span`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Visa ending 4242`})})}),(0,q.jsx)(`span`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Paid`})})})]}),(0,q.jsxs)(`p`,{className:`motion-receipt-card__line`,"data-rise":!0,children:[(0,q.jsx)(`span`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Total`})})}),(0,q.jsx)(`span`,{children:(0,q.jsx)(l,{en:e.toLocaleString(`en-US`,X)})})]})]}):(0,q.jsx)(`p`,{className:`motion-receipt-slot__empty`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`The receipt arrives here.`})})})})})}function pt(){let e=o(),{reduced:t}=J(),n=(0,F.useRef)(null),r=j(n,{page:`motion`}),{run:i,reset:a,state:s}=h(),[c,u]=(0,F.useState)(!0),[d,f]=(0,F.useState)(0),[p,m]=(0,F.useState)(!1),g=Math.round((47.01+(c?.99:0))*100)/100,_=(0,F.useRef)(0);(0,F.useEffect)(()=>{r||(a(),m(!1),f(0))},[r,a]),(0,F.useEffect)(()=>()=>window.clearTimeout(_.current),[]),(0,F.useEffect)(()=>{if(s===`success`)return _.current=window.setTimeout(()=>m(!0),t?0:120),()=>window.clearTimeout(_.current)},[s,t]);let v=()=>{m(!1),f(e=>e+1),i(w(lt))},y=s===`waiting`||s===`loading`?`Confirming with your bank…`:s===`success`||p?`Paid. A receipt is on its way.`:``,b=d>0,x=(0,F.useMemo)(()=>[`spring`,`out`].map(e=>I[e].label),[]);return(0,q.jsxs)(`div`,{ref:n,className:`motion-seq`,"data-playback":r?`running`:`paused`,children:[(0,q.jsxs)(`div`,{className:`motion-seq__left`,children:[(0,q.jsxs)(`div`,{className:`motion-seq__scene`,children:[(0,q.jsxs)(`header`,{className:`motion-seq__head`,children:[(0,q.jsx)(`p`,{className:`motion-seq__title`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Order summary`})})}),(0,q.jsx)(Ee,{})]}),(0,q.jsxs)(`dl`,{className:`motion-seq__rows`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Linen overshirt`})})}),(0,q.jsx)(`dd`,{children:`$42.00`})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Standard shipping`})})}),(0,q.jsx)(`dd`,{children:`$5.01`})]}),(0,q.jsxs)(`div`,{className:`motion-seq__switch`,children:[(0,q.jsx)(`dt`,{children:(0,q.jsx)(ae,{label:e({en:`Shipping protection`}),checked:c,onChange:u,disabled:s!==`idle`})}),(0,q.jsx)(`dd`,{children:(0,q.jsx)(O,{value:c?.99:0,format:X})})]}),(0,q.jsxs)(`div`,{className:`motion-seq__total`,children:[(0,q.jsx)(`dt`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Total`})})}),(0,q.jsx)(`dd`,{children:(0,q.jsx)(O,{value:g,format:X})})]})]}),(0,q.jsx)(`div`,{className:`motion-seq__actions`,children:(0,q.jsxs)(E,{size:`lg`,state:s,announce:!1,onConfirm:v,children:[e({en:`Pay`}),(0,q.jsx)(O,{value:g,format:X})]})}),(0,q.jsx)(`p`,{className:`motion-seq__status`,role:`status`,children:(0,q.jsx)(l,{en:y})}),(0,q.jsx)(ft,{total:g,shown:p})]}),(0,q.jsx)(`div`,{className:`motion-seq__code`,children:(0,q.jsx)(A,{title:e({en:`Confirmation`}),filename:`Confirmation.tsx`,code:$e,language:`tsx`,label:e({en:`Confirmation code`}),maxHeight:320})})]}),(0,q.jsxs)(`div`,{className:`motion-seq__timeline`,children:[(0,q.jsxs)(`div`,{className:`motion-seq__intro`,children:[(0,q.jsx)(`h3`,{className:`motion-seq__heading`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`The sequence`})})}),(0,q.jsx)(`p`,{className:`motion-seq__lead`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Press Pay. Each beat lights when it plays, and names its tempo. Only one spring moves at a time.`})})}),(0,q.jsxs)(`p`,{className:`motion-legend`,"aria-hidden":`true`,children:[(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`i`,{"data-ease":`spring`}),(0,q.jsx)(l,{en:x[0]})]}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`i`,{"data-ease":`out`}),(0,q.jsx)(l,{en:x[1]})]}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`i`,{"data-ease":`none`}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Waiting`})})]})]})]}),(0,q.jsx)(`ol`,{className:`motion-beats`,"aria-label":e({en:`Confirmation sequence`}),children:(0,q.jsx)(l,{en:ut.map(e=>{let t=e.tier?je(e.tier):null;return(0,q.jsxs)(`li`,{className:`motion-beat`,"data-beat":e.id,children:[(0,q.jsxs)(`span`,{className:`motion-beat__label`,children:[(0,q.jsx)(`span`,{className:`motion-beat__name`,children:(0,q.jsx)(l,{en:e.label})}),(0,q.jsx)(`span`,{className:`motion-beat__detail`,children:(0,q.jsx)(l,{en:e.detail})})]}),(0,q.jsx)(`span`,{className:`motion-beat__tier`,"data-empty":!t||void 0,children:(0,q.jsx)(l,{en:t?t.title:`—`})}),(0,q.jsxs)(`span`,{className:`motion-beat__track`,"aria-hidden":`true`,"data-ease":e.ease??`none`,"data-loop":e.loop||void 0,style:{"--start":e.start/Y,"--length":e.duration/Y,"--span":Y},children:[(0,q.jsx)(`i`,{className:`motion-beat__span`}),(0,q.jsx)(l,{en:b&&(0,q.jsx)(`i`,{className:`motion-beat__bar`},d)}),(0,q.jsx)(l,{en:b&&(0,q.jsx)(`i`,{className:`motion-beat__playhead`},`head-${d}`)})]})]},e.id)})})}),(0,q.jsx)(`p`,{className:`motion-beats__axis`,"aria-hidden":`true`,children:(0,q.jsx)(l,{en:dt.map(e=>(0,q.jsx)(`span`,{style:{"--at":e/Y},children:(0,q.jsx)(l,{en:e===0?`0`:`${e/1e3}s`})},e))})})]})]})}var mt=[{value:`360`,label:`360ms`},{value:`520`,label:`520ms`},{value:`700`,label:`700ms`},{value:`800`,label:`800ms`}],ht={360:`Control`,520:`Layout`,700:`Hover`,800:`Media`},gt={spring:k,out:ce,in:se},_t=20,vt=[0,.25,.5,.75,1],yt=[0,.5,1];function bt(e,t){let[n,r]=(0,F.useState)(t);return(0,F.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let n=()=>r(Math.max(240,Math.round(t.clientWidth)));n();let i=new ResizeObserver(n);return i.observe(t),()=>i.disconnect()},[e]),n}function xt({t:e,shown:t,summary:n,onScrub:r}){let i=o(),a=(0,F.useRef)(null),s=bt(a,z.width),c=(0,F.useMemo)(()=>({...z,width:s,height:Math.min(340,Math.max(250,Math.round(s*.52)))}),[s]),u=(0,F.useMemo)(()=>({spring:U(Ne(`spring`).at,120,c),out:U(Ne(`out`).at,120,c),in:U(Ne(`in`).at,120,c),ideal:U(Fe,160,c)}),[c]),d=(0,F.useMemo)(()=>Pe(c),[c]),f=B(e,c),p=c.width-c.right,m=(0,F.useRef)(!1),h=e=>{let t=a.current?.getBoundingClientRect().left??0;return Math.min(1,Math.max(0,(e-t-c.left)/(c.width-c.left-c.right)))},g=c.height-c.bottom;return(0,q.jsx)(`div`,{ref:a,className:`motion-plot-holder`,children:(0,q.jsxs)(`svg`,{className:`motion-plot`,width:c.width,height:c.height,viewBox:`0 0 ${c.width} ${c.height}`,role:`img`,"aria-label":i({en:n}),onPointerDown:e=>{m.current=!0,e.currentTarget.setPointerCapture(e.pointerId),r(h(e.clientX))},onPointerMove:e=>{m.current&&r(h(e.clientX))},onPointerUp:()=>{m.current=!1},onPointerCancel:()=>{m.current=!1},children:[(0,q.jsx)(l,{en:yt.map(e=>(0,q.jsxs)(`g`,{children:[(0,q.jsx)(`line`,{className:`motion-plot__grid`,x1:c.left,x2:p,y1:V(e,c),y2:V(e,c)}),(0,q.jsx)(`text`,{className:`motion-plot__tick`,x:c.left-10,y:V(e,c)+4,textAnchor:`end`,children:(0,q.jsx)(l,{en:e===0?`0`:e===1?`1`:`.5`})})]},e))}),(0,q.jsx)(l,{en:vt.map(e=>(0,q.jsxs)(`g`,{children:[(0,q.jsx)(`line`,{className:`motion-plot__grid`,x1:B(e,c),x2:B(e,c),y1:c.top,y2:g}),(0,q.jsx)(`text`,{className:`motion-plot__tick`,x:B(e,c),y:g+22,textAnchor:e===0?`start`:e===1?`end`:`middle`,children:(0,q.jsx)(l,{en:e===0?`0`:W(e)})})]},e))}),(0,q.jsx)(`text`,{className:`motion-plot__axis`,x:c.left,y:c.top-8,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Progress`})})}),(0,q.jsx)(`text`,{className:`motion-plot__axis`,x:p,y:c.height-4,textAnchor:`end`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Share of the duration`})})}),(0,q.jsx)(`path`,{className:`motion-plot__curve motion-plot__curve--ideal`,d:u.ideal}),(0,q.jsx)(l,{en:t.in&&(0,q.jsx)(`path`,{className:`motion-plot__curve motion-plot__curve--in`,d:u.in})}),(0,q.jsx)(l,{en:t.out&&(0,q.jsx)(`path`,{className:`motion-plot__curve motion-plot__curve--out`,d:u.out})}),(0,q.jsx)(l,{en:t.spring&&(0,q.jsx)(`path`,{className:`motion-plot__curve motion-plot__curve--spring`,d:u.spring})}),(0,q.jsx)(l,{en:t.spring&&d.map(e=>(0,q.jsx)(`circle`,{className:`motion-plot__stop`,cx:e.x,cy:e.y,r:`3`},e.t))}),(0,q.jsx)(`line`,{className:`motion-plot__playhead`,x1:f,x2:f,y1:c.top,y2:g}),(0,q.jsx)(l,{en:R.filter(e=>t[e.id]).map(t=>(0,q.jsx)(`circle`,{className:`motion-plot__marker motion-plot__marker--${t.id}`,cx:f,cy:V(t.at(e),c),r:t.id===`spring`?7:6},t.id))})]})})}function St({t:e,duration:t,shown:n}){let r=(0,F.useRef)({}),i=(0,F.useRef)({}),a=(0,F.useRef)(e);return a.current=e,(0,F.useEffect)(()=>{let e=[];for(let n of R){let o=r.current[n.id];if(!o||typeof o.animate!=`function`)continue;let s=o.animate([{translate:`0 0`},{translate:`calc(100cqw - ${_t}px) 0`}],{duration:t,easing:gt[n.id],fill:`both`});s.pause(),s.currentTime=a.current*t,i.current[n.id]=s,e.push(s)}return()=>e.forEach(e=>e.cancel())},[t,n.spring,n.out,n.in]),(0,F.useEffect)(()=>{for(let n of Object.values(i.current))n&&(n.currentTime=e*t)},[e,t]),(0,q.jsx)(`div`,{className:`motion-lanes`,"aria-hidden":`true`,children:(0,q.jsx)(l,{en:R.filter(e=>n[e.id]).map(e=>(0,q.jsxs)(`div`,{className:`motion-lane`,"data-curve":e.id,children:[(0,q.jsx)(`span`,{className:`motion-lane__label`,children:(0,q.jsx)(l,{en:e.label})}),(0,q.jsx)(`span`,{className:`motion-lane__track`,children:(0,q.jsx)(`i`,{ref:t=>{r.current[e.id]=t},className:`motion-lane__dot`})})]},e.id))})})}function Ct(){let e=o(),{reduced:t}=J(),n=(0,F.useRef)(null),r=j(n,{page:`motion`}),[i,a]=(0,F.useState)(.18),[s,c]=(0,F.useState)(`520`),[u,d]=(0,F.useState)(!1),[f,m]=(0,F.useState)({spring:!0,out:!0,in:!1}),h=(0,F.useRef)(0),g=Number(s),_=(0,F.useCallback)(()=>{cancelAnimationFrame(h.current),h.current=0,d(!1)},[]);(0,F.useEffect)(()=>_,[_]),(0,F.useEffect)(()=>{r||_()},[r,_]);let v=()=>{if(_(),t){a(1);return}d(!0),a(0);let e=performance.now(),n=t=>{let r=Math.min(1,(t-e)/g);a(r),r<1?h.current=requestAnimationFrame(n):d(!1)};h.current=requestAnimationFrame(n)},y=(0,F.useMemo)(()=>Object.fromEntries(R.map(e=>[e.id,Le(e.at)])),[]),b=(0,F.useMemo)(()=>Ie(),[]),ee=`Progress against time for the spring, expo-out and ease-in curves. The spring covers 90% of the distance by ${W(y.spring.most)} of the duration; expo-out by ${W(y.out.most)}.`,S=e=>m(t=>({...t,[e]:!t[e]}));return(0,q.jsxs)(`div`,{ref:n,className:`motion-curves`,children:[(0,q.jsxs)(`div`,{className:`motion-curves__plot`,children:[(0,q.jsx)(`div`,{className:`motion-curves__chips`,role:`group`,"aria-label":e({en:`Curves`}),children:(0,q.jsx)(l,{en:R.map(e=>(0,q.jsxs)(`button`,{type:`button`,className:`motion-curve-chip`,"data-curve":e.id,"aria-pressed":f[e.id],onClick:()=>S(e.id),children:[(0,q.jsx)(`i`,{"aria-hidden":`true`}),(0,q.jsx)(l,{en:e.label})]},e.id))})}),(0,q.jsx)(xt,{t:i,shown:f,summary:ee,onScrub:e=>{_(),a(e)}}),(0,q.jsx)(St,{t:i,duration:g,shown:f})]}),(0,q.jsxs)(`div`,{className:`motion-curves__side`,children:[(0,q.jsxs)(`div`,{className:`motion-curves__controls`,children:[(0,q.jsx)(ve,{label:e({en:`Time`}),value:Math.round(i*1e3),min:0,max:1e3,step:5,onChange:e=>{_(),a(e/1e3)},format:e=>`${(e/10).toFixed(1)}%`}),(0,q.jsx)(ye,{label:e({en:`Tempo`}),value:s,options:mt,onChange:e=>{_(),c(e)}}),(0,q.jsxs)(`div`,{className:`motion-curves__play`,children:[(0,q.jsx)(x,{variant:`dark`,icon:`play`,onClick:v,"aria-describedby":`motion-curves-tempo`,children:(0,q.jsx)(l,{en:u?`Playing`:`Play`})}),(0,q.jsxs)(`p`,{id:`motion-curves-tempo`,className:`motion-curves__tempo`,children:[(0,q.jsx)(l,{en:ht[s]}),` · `,(0,q.jsx)(l,{en:g}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ms`})})]})]})]}),(0,q.jsx)(`dl`,{className:`motion-readout`,"aria-live":`off`,children:(0,q.jsx)(l,{en:R.filter(e=>f[e.id]).map(e=>(0,q.jsxs)(`div`,{className:`motion-readout__row`,"data-curve":e.id,children:[(0,q.jsxs)(`dt`,{children:[(0,q.jsx)(`i`,{"aria-hidden":`true`}),(0,q.jsx)(l,{en:e.label})]}),(0,q.jsxs)(`dd`,{children:[(0,q.jsx)(`span`,{className:`motion-readout__value`,children:(0,q.jsx)(l,{en:Re(e.at(i))})}),(0,q.jsxs)(`span`,{className:`motion-readout__at`,children:[(0,q.jsx)(l,{en:G(i,g)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ms`})})]})]})]},e.id))})}),(0,q.jsxs)(`table`,{className:`motion-facts`,children:[(0,q.jsxs)(`caption`,{children:[(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Time to cover the distance, at `})}),(0,q.jsx)(l,{en:g}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ms`})})]}),(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:(0,q.jsx)(`span`,{className:`kit-sr-only`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Curve`})})})}),(0,q.jsx)(`th`,{scope:`col`,children:`50%`}),(0,q.jsx)(`th`,{scope:`col`,children:`90%`}),(0,q.jsx)(`th`,{scope:`col`,children:`99%`})]})}),(0,q.jsx)(`tbody`,{children:(0,q.jsx)(l,{en:R.filter(e=>e.id!==`in`).map(e=>(0,q.jsxs)(`tr`,{"data-curve":e.id,children:[(0,q.jsx)(`th`,{scope:`row`,children:(0,q.jsx)(l,{en:e.label})}),(0,q.jsxs)(`td`,{children:[(0,q.jsx)(l,{en:G(y[e.id].half,g)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ms`})})]}),(0,q.jsxs)(`td`,{children:[(0,q.jsx)(l,{en:G(y[e.id].most,g)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ms`})})]}),(0,q.jsxs)(`td`,{children:[(0,q.jsx)(l,{en:G(y[e.id].almost,g)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ms`})})]})]},e.id))})})]})]}),(0,q.jsxs)(`div`,{className:`motion-curves__note`,children:[(0,q.jsxs)(`p`,{children:[(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`The spring is Framer's stiffness `})}),(0,q.jsx)(l,{en:p.stiffness}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`, damping `})}),(0,q.jsx)(l,{en:p.damping}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`, mass `})}),(0,q.jsx)(l,{en:p.mass}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`: damping ratio 1.73, so it never overshoots. CSS cannot hold a spring, so the site samples it into `})}),(0,q.jsx)(l,{en:D.length}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:` stops and the browser draws straight lines between them. The dashed line is the ideal spring; the largest gap is `})}),(0,q.jsx)(l,{en:b.toFixed(4)}),`.`]}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Expo-out starts at full speed and brakes: 90% of the way by `})}),(0,q.jsx)(l,{en:W(y.out.most)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:` of the time, 99% by `})}),(0,q.jsx)(l,{en:W(y.out.almost)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`. The spring eases in for a moment and carries on longer: 90% by `})}),(0,q.jsx)(l,{en:W(y.spring.most)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`, 99% by `})}),(0,q.jsx)(l,{en:W(y.spring.almost)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`. A big change settles instead of stopping.`})})]})]}),(0,q.jsxs)(`div`,{className:`motion-curves__code`,children:[(0,q.jsx)(A,{title:e({en:`Curves`}),filename:`tokens.css`,code:Ge,language:`css`,label:e({en:`Spring and expo-out tokens`}),maxHeight:260}),(0,q.jsx)(A,{title:e({en:`From script`}),filename:`panel.ts`,code:Ke,language:`ts`,label:e({en:`Using the spring from script`}),maxHeight:200})]})]})}function wt(e,t){if(!e||typeof PointerEvent>`u`)return()=>{};let n={bubbles:!0,button:0,pointerType:`mouse`,isPrimary:!0};e.dispatchEvent(new PointerEvent(`pointerdown`,n));let r=!1,i=()=>{r||(r=!0,e.dispatchEvent(new PointerEvent(`pointerup`,n)))},a=window.setTimeout(i,t);return()=>{window.clearTimeout(a),i()}}function Tt(e,t=1){let n=[...e?.querySelectorAll(`.z-roll__in`)??[]].map(e=>T(e,[{transform:`translateY(-100%)`},{transform:`none`}],{duration:g.hover*t,easing:k}));return()=>n.forEach(e=>e?.cancel())}var Et={style:`currency`,currency:`USD`};function Dt({run:e,factor:t}){let n=o(),r=(0,F.useRef)(null);return(0,F.useEffect)(()=>e?wt(r.current,700*t):void 0,[e,t]),(0,q.jsx)(x,{ref:r,children:n({en:`Pay $48.00`})})}function Ot({run:e,factor:t}){let n=o(),r=(0,F.useRef)(null),[i,a]=(0,F.useState)(!1),s=(0,F.useRef)(0),c=(0,F.useRef)(t);c.current=t,(0,F.useEffect)(()=>()=>window.clearTimeout(s.current),[]);let u=(0,F.useCallback)(()=>{let e=r.current;if(!e||e.dataset.gone!==void 0)return;let t=c.current,n=T(e,[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 8px`}],{duration:g.exit*t,easing:se,fill:`forwards`}),i=()=>{a(!0),window.clearTimeout(s.current),s.current=window.setTimeout(()=>{n?.cancel(),a(!1),T(e,[{opacity:0},{opacity:1}],{duration:g.feedback*t})},900)};n?n.finished.then(i,()=>{}):i()},[]);return(0,F.useEffect)(()=>{e&&u()},[e,u]),(0,q.jsxs)(`div`,{ref:r,className:`motion-chip`,"data-gone":i||void 0,children:[(0,q.jsx)(`span`,{className:`motion-chip__text`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Saved to wishlist`})})}),(0,q.jsx)(C,{label:n({en:`Dismiss`}),icon:`close`,size:`sm`,variant:`ghost`,onClick:u})]})}function kt({run:e,factor:t}){let n=o(),[r,a]=(0,F.useState)(!1),s=(0,F.useRef)(0);(0,F.useEffect)(()=>()=>window.clearTimeout(s.current),[]);let c=(0,F.useCallback)(()=>{a(!0),window.clearTimeout(s.current),s.current=window.setTimeout(()=>a(!1),1400*t)},[t]);return(0,F.useEffect)(()=>{e&&c()},[e,c]),(0,q.jsxs)(`span`,{className:`motion-order`,children:[(0,q.jsx)(`span`,{className:`motion-order__id`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ZJ-2048`})})}),(0,q.jsx)(C,{label:n({en:`Copy order ID`}),icon:r?`check`:`copy`,tooltip:!0,onClick:()=>{i(`ZJ-2048`),c()}}),(0,q.jsx)(`span`,{className:`kit-sr-only`,role:`status`,children:(0,q.jsx)(l,{en:r?`Order ID copied`:``})})]})}var At=[{value:`card`,label:`Card`},{value:`apple`,label:`Apple Pay`},{value:`bank`,label:`Bank`}],jt={card:`apple`,apple:`bank`,bank:`card`};function Mt({run:e}){let t=o(),[n,r]=(0,F.useState)(`card`),[i,a]=(0,F.useState)(!1);return(0,F.useEffect)(()=>{e&&(r(e=>jt[e]),a(e=>!e))},[e]),(0,q.jsxs)(`div`,{className:`motion-demo-stack`,children:[(0,q.jsx)(y,{label:t({en:`Payment method`}),value:n,options:At,onChange:r,size:`sm`}),(0,q.jsx)(ae,{label:t({en:`Shipping protection`}),checked:i,onChange:a})]})}function Nt({run:e,active:t}){let n=o(),r=h(),{run:i,reset:a}=r,[s,c]=(0,F.useState)(!1);(0,F.useEffect)(()=>{t||a()},[t,a]),(0,F.useEffect)(()=>{e&&(c(e=>!e),i(w(1100)))},[e,i]);let u=48+(s?.99:0);return(0,q.jsxs)(`div`,{className:`motion-demo-pair`,children:[(0,q.jsx)(E,{state:r.state,announce:!1,onConfirm:()=>{i(w(1100))},children:(0,q.jsx)(l,{en:`Pay ${m(u,Et)}`})}),(0,q.jsx)(`span`,{className:`motion-total`,"aria-label":n({en:`Total`}),children:(0,q.jsx)(O,{value:u,format:Et})})]})}function Pt({run:e,factor:t}){let n=(0,F.useRef)(null),[r,i]=(0,F.useState)(`28px · 600ms`);return(0,F.useEffect)(()=>{if(!e)return;let r=_({mobile:d()});i(`${r.distance}px · ${r.duration}ms`);let a=T(n.current,[{opacity:0,translate:`0 ${r.distance}px`},{opacity:1,translate:`0 0`}],{duration:r.duration*t});return()=>a?.cancel()},[e,t]),(0,q.jsxs)(`div`,{ref:n,className:`motion-receipt`,children:[(0,q.jsx)(`p`,{className:`motion-receipt__title`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Receipt ZJ-2048`})})}),(0,q.jsx)(`p`,{className:`motion-receipt__line`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Visa ending 4242`})})}),(0,q.jsx)(`p`,{className:`motion-receipt__fact`,children:(0,q.jsx)(l,{en:r})})]})}function Ft({run:e,factor:t}){let n=o(),r=(0,F.useRef)(null);return(0,F.useEffect)(()=>e?Tt(r.current,t):void 0,[e,t]),(0,q.jsx)(x,{ref:r,variant:`dark`,icon:`arrow-right`,children:n({en:`View receipt`})})}function It({run:e,factor:t}){let[n,r]=(0,F.useState)(!1);return(0,F.useEffect)(()=>{if(!e)return;r(!0);let n=window.setTimeout(()=>r(!1),(g.media+600)*t);return()=>{window.clearTimeout(n),r(!1)}},[e,t]),(0,q.jsx)(`div`,{className:`motion-zoom`,"data-zoom":n||void 0,children:(0,q.jsx)(`img`,{src:Oe[1].image,alt:``,width:`532`,height:`322`,loading:`lazy`})})}var Lt={press:Dt,exit:Ot,feedback:kt,control:Mt,layout:Nt,enter:Pt,hover:Ft,media:It},Rt=[{value:`1`,label:`Normal`},{value:`4`,label:`Slow ×4`}],zt=[0,200,400,600,800],Bt=()=>Object.fromEntries(L.map(e=>[e.id,0]));function Vt({tier:e,run:t}){let n={"--share":Me(e),"--tier-time":`var(${e.token})`,"--tier-ease":I[e.ease].css};return(0,q.jsxs)(`span`,{className:`motion-bar`,"data-ease":e.ease,style:n,"aria-hidden":`true`,children:[(0,q.jsx)(`span`,{className:`motion-bar__span`}),(0,q.jsx)(l,{en:t>0&&(0,q.jsx)(`span`,{className:`motion-bar__fill`},t)})]})}function Ht({tier:e,run:t,factor:n,active:r,valueOf:i,onPlay:a}){let s=o(),c=Lt[e.id],u=i(e.token),d=parseInt(u?.desktop??`${e.ms}`,10),f=u?.phone?parseInt(u.phone,10):e.phoneMs,p=e.ease;return(0,q.jsxs)(`li`,{className:`motion-tier`,"data-tier":e.id,children:[(0,q.jsxs)(`div`,{className:`motion-tier__head`,children:[(0,q.jsx)(`h3`,{className:`motion-tier__name`,children:(0,q.jsx)(l,{en:e.title})}),(0,q.jsxs)(`p`,{className:`motion-tier__ms`,children:[(0,q.jsx)(`span`,{className:`motion-tier__number`,children:(0,q.jsx)(l,{en:d})}),(0,q.jsx)(`span`,{className:`motion-tier__unit`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ms`})})}),(0,q.jsx)(l,{en:f!==void 0&&f!==d&&(0,q.jsxs)(`span`,{className:`motion-tier__phone`,children:[(0,q.jsx)(l,{en:f}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`ms on phones`})})]})})]}),(0,q.jsx)(`p`,{className:`motion-tier__role`,children:(0,q.jsx)(l,{en:e.role})}),(0,q.jsxs)(`div`,{className:`motion-tier__tokens`,children:[(0,q.jsx)(xe,{tokens:[e.token],label:s({en:`Token`})}),(0,q.jsx)(`span`,{className:`motion-ease`,"data-ease":p,children:(0,q.jsx)(l,{en:I[p].label})})]})]}),(0,q.jsxs)(`div`,{className:`motion-tier__time`,children:[(0,q.jsx)(Vt,{tier:e,run:t}),(0,q.jsxs)(`div`,{className:`motion-tier__foot`,children:[(0,q.jsx)(`p`,{className:`motion-tier__demo-note`,children:(0,q.jsx)(l,{en:e.demo})}),(0,q.jsx)(C,{label:s({en:`Play ${e.title.toLowerCase()}`}),icon:`play`,variant:`ghost`,size:`sm`,tooltip:!0,onClick:a})]})]}),(0,q.jsx)(`div`,{className:`motion-tier__stage`,children:(0,q.jsx)(`div`,{className:`motion-tier__demo`,children:(0,q.jsx)(c,{run:t,factor:n,active:r})})})]})}function Ut(){let e=o(),t=te(),{reduced:n}=J(),r=(0,F.useRef)(null),i=(0,F.useRef)(null),a=j(r,{page:`motion`}),s=b(i),[c,u]=(0,F.useState)(`1`),[d,f]=(0,F.useState)(Bt),p=c===`4`?4:1,m=(0,F.useRef)(!1),h=()=>f(e=>Object.fromEntries(L.map(t=>[t.id,e[t.id]+1]))),g=e=>f(t=>({...t,[e]:t[e]+1}));(0,F.useEffect)(()=>{if(!s||m.current||n)return;let e=window.setTimeout(()=>{m.current=!0,h()},500);return()=>window.clearTimeout(e)},[s,n]);let _=e=>{let n=t.find(t=>t.variable===e);return n?{desktop:n.resolved,phone:n.resolvedMobile}:null};return(0,q.jsxs)(`div`,{ref:r,className:`motion-ladder`,"data-speed":c,"data-playback":a?`running`:`paused`,children:[(0,q.jsxs)(`div`,{ref:i,className:`motion-ladder__bar`,children:[(0,q.jsxs)(`div`,{className:`motion-ladder__actions`,children:[(0,q.jsx)(x,{icon:`play`,onClick:h,children:e({en:`Play all`})}),(0,q.jsx)(ye,{label:e({en:`Speed`}),value:c,options:Rt,onChange:u})]}),(0,q.jsx)(`p`,{className:`motion-legend`,"aria-hidden":`true`,children:(0,q.jsx)(l,{en:Object.keys(I).map(e=>(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`i`,{"data-ease":e}),(0,q.jsx)(l,{en:I[e].label})]},e))})})]}),(0,q.jsx)(`p`,{className:`motion-ladder__axis`,"aria-hidden":`true`,children:(0,q.jsx)(l,{en:zt.map(e=>(0,q.jsxs)(`span`,{style:{"--at":e/Ae},children:[(0,q.jsx)(l,{en:e===0?`0`:e}),(0,q.jsx)(l,{en:e===Ae?`ms`:``})]},e))})}),(0,q.jsx)(`ol`,{className:`motion-tiers`,"aria-label":e({en:`Tempo tiers`}),children:(0,q.jsx)(l,{en:L.map(e=>(0,q.jsx)(Ht,{tier:e,run:d[e.id],factor:p,active:a,valueOf:_,onPlay:()=>g(e.id)},e.id))})}),(0,q.jsx)(`p`,{className:`kit-sr-only`,role:`status`,children:(0,q.jsx)(l,{en:c===`4`?`Slow motion on: every tempo runs four times slower here.`:``})})]})}function Wt(){let e=o(),{reduced:t}=J(),n=(0,F.useRef)(null),r=j(n,{page:`motion`}),{run:i,reset:a,state:s}=h();(0,F.useEffect)(()=>{r||a()},[r,a]);let c=()=>{i(w(1500))},u=s===`waiting`||s===`loading`?`Processing payment…`:s===`success`?`Paid.`:``;return(0,q.jsxs)(`div`,{ref:n,className:`motion-reduce`,"data-playback":r?`running`:`paused`,children:[(0,q.jsxs)(`div`,{className:`motion-compare`,children:[(0,q.jsxs)(`figure`,{className:`motion-pane`,children:[(0,q.jsx)(`div`,{className:`motion-pane__stage`,children:(0,q.jsx)(E,{size:`lg`,state:s,announce:!1,onConfirm:c,children:e({en:`Pay $48.00`})})}),(0,q.jsxs)(`figcaption`,{className:`motion-pane__caption`,children:[(0,q.jsx)(`b`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Normal`})})}),(0,q.jsx)(`span`,{children:(0,q.jsx)(l,{en:t?`Reduced motion is on, so this one holds still too.`:`Closes to a circle, waves, draws the check, opens.`})})]})]}),(0,q.jsxs)(`figure`,{className:`motion-pane motion-reduced`,children:[(0,q.jsx)(`div`,{className:`motion-pane__stage`,children:(0,q.jsx)(E,{size:`lg`,state:s,announce:!1,onConfirm:c,children:e({en:`Pay $48.00`})})}),(0,q.jsxs)(`figcaption`,{className:`motion-pane__caption`,children:[(0,q.jsx)(`b`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Reduced`})})}),(0,q.jsx)(`span`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`A still circle, the middle dot leading. The same words.`})})})]})]})]}),(0,q.jsxs)(`div`,{className:`motion-compare__bar`,children:[(0,q.jsx)(x,{variant:`dark`,icon:`play`,onClick:c,children:e({en:`Pay on both`})}),(0,q.jsx)(`p`,{className:`motion-compare__hint`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Turn on Reduced motion preview at the top of the page to see all of it without movement.`})})}),(0,q.jsx)(`p`,{className:`motion-compare__status`,role:`status`,children:(0,q.jsx)(l,{en:u})})]}),(0,q.jsx)(`div`,{className:`kit-table-wrap`,children:(0,q.jsxs)(`table`,{className:`kit-table motion-reduced-table`,children:[(0,q.jsx)(`caption`,{className:`kit-sr-only`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`What changes under reduced motion`})})}),(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`What`})})}),(0,q.jsx)(`th`,{scope:`col`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Normal`})})}),(0,q.jsx)(`th`,{scope:`col`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Reduced`})})})]})}),(0,q.jsx)(`tbody`,{children:(0,q.jsx)(l,{en:We.map(t=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,"data-label":e({en:`What`}),children:(0,q.jsx)(l,{en:t.what})}),(0,q.jsx)(`td`,{"data-label":e({en:`Normal`}),children:(0,q.jsx)(l,{en:t.normal})}),(0,q.jsx)(`td`,{"data-label":e({en:`Reduced`}),children:(0,q.jsx)(l,{en:t.reduced})})]},t.what))})})]})}),(0,q.jsx)(A,{title:e({en:`Reading the preference`}),filename:`reduced.ts`,code:et,language:`tsx`,label:e({en:`Reduced motion code`}),maxHeight:220})]})}var Z=[{name:`easing.ts`,code:`/* JS counterparts of the motion tokens, for rAF tweens and WAAPI. Pure. */

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
`},{name:`usePress.ts`,code:ke},{name:`useMagnetic.ts`,code:`import { useEffect, type RefObject } from 'react';
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
`},{name:`tokens.css`,code:le}];function Gt(){let e=o(),[t,n]=(0,F.useState)(Z[0].name),r=Z.find(e=>e.name===t)??Z[0];return(0,q.jsxs)(`div`,{className:`kit-folds`,children:[(0,q.jsx)(_e,{title:e({en:`Properties & states`}),children:(0,q.jsx)(`div`,{className:`motion-ref`,children:(0,q.jsx)(l,{en:fe.map(t=>(0,q.jsxs)(`div`,{className:`motion-ref__item`,children:[(0,q.jsx)(`h3`,{className:`motion-ref__name`,children:(0,q.jsx)(`code`,{children:t.name})}),(0,q.jsx)(be,{props:t.props,caption:e({en:`${t.name} options`})})]},t.name))})})}),(0,q.jsx)(_e,{title:e({en:`Usage & keyboard`}),children:(0,q.jsx)(`div`,{className:`kit-stack`,children:(0,q.jsx)(Se,{keys:de})})}),(0,q.jsx)(_e,{title:e({en:`Source`}),children:(0,q.jsx)(A,{title:e({en:`Source`}),code:r.code,language:r.language??he(r.name),label:e({en:`Source code, ${r.name}`}),actions:(0,q.jsx)(Te,{label:e({en:`Source file`}),hideLabel:!0,mono:!0,value:r.name,options:Z.map(e=>({value:e.name,label:e.name})),onChange:n})})})]})}var Kt=240,Q=Ue(!1),qt=Ue(!0),Jt=[{title:`First play`,text:`${Q.first.distance}px over ${Q.first.duration}ms, opacity and translate only. Siblings follow 40ms apart, capped at 160ms.`,phone:`Phones: ${qt.first.distance}px, ${qt.first.duration}ms, capped at 80ms.`},{title:`Replay from below`,text:`Leave through the bottom and return while scrolling down: opacity from .45, ${Q.replay.distance}px, ${Q.replay.duration}ms, no wait.`,phone:`Leaving through the top never replays.`},{title:`Never in the way`,text:`Nothing plays while scrolling up, while focus is inside, in a hidden tab, or under reduced motion.`,phone:`Content is never hidden before it plays.`}];function Yt(){let e=o(),{reduced:t}=J(),n=(0,F.useRef)(null),r=(0,F.useRef)(null),i=(0,F.useRef)(new Map),a=(0,F.useRef)(0),[s,c]=(0,F.useState)({}),[u,d]=(0,F.useState)(`down`);(0,F.useEffect)(()=>{let e=n.current;if(!e)return;let t=re({root:e,onPlay:({element:e,replay:t,timing:n})=>{let r=e.dataset.row;r&&c(e=>({...e,[r]:{label:He(n,t),replay:t,count:(e[r]?.count??0)+1}}))}});for(let e of Ve){let n=i.current.get(e.id);n&&t.register(n,{type:`rise`,delay:e.delay})}return r.current=t,()=>{t.dispose(),r.current=null}},[]);let f=()=>{let e=n.current?.scrollTop??0;Math.abs(e-a.current)>1&&(d(e>a.current?`down`:`up`),a.current=e)},p=e=>n.current?.scrollBy({top:e,behavior:t?`auto`:`smooth`}),m=()=>{let e=n.current;e&&(e.scrollTo({top:0,behavior:`auto`}),a.current=0,d(`down`),c({}),r.current?.rearm())},h=Object.keys(s).length;return(0,q.jsxs)(`div`,{className:`motion-reveal`,children:[(0,q.jsxs)(`div`,{className:`motion-reveal__rules`,children:[(0,q.jsx)(`ol`,{className:`motion-rules`,children:(0,q.jsx)(l,{en:Jt.map((e,t)=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(`span`,{className:`kit-num`,"aria-hidden":`true`,children:(0,q.jsx)(l,{en:String(t+1).padStart(2,`0`)})}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h3`,{className:`motion-rules__title`,children:(0,q.jsx)(l,{en:e.title})}),(0,q.jsx)(`p`,{className:`motion-rules__text`,children:(0,q.jsx)(l,{en:e.text})}),(0,q.jsx)(`p`,{className:`motion-rules__phone`,children:(0,q.jsx)(l,{en:e.phone})})]})]},e.title))})}),(0,q.jsxs)(`div`,{className:`motion-reveal__actions`,children:[(0,q.jsx)(x,{icon:`refresh`,onClick:m,children:e({en:`Replay`})}),(0,q.jsxs)(`span`,{className:`motion-reveal__scrolls`,children:[(0,q.jsx)(C,{label:e({en:`Scroll down`}),icon:`arrow-down`,tooltip:!0,onClick:()=>p(Kt)}),(0,q.jsx)(C,{label:e({en:`Scroll up`}),icon:`arrow-up`,tooltip:!0,onClick:()=>p(-240)})]})]}),(0,q.jsx)(l,{en:t&&(0,q.jsx)(`p`,{className:`motion-reveal__reduced`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Reduced motion: every row is simply there. The labels stay empty because nothing plays.`})})})})]}),(0,q.jsxs)(`div`,{className:`motion-reveal__box`,children:[(0,q.jsxs)(`div`,{className:`motion-reveal__box-head`,children:[(0,q.jsx)(`p`,{className:`motion-reveal__box-title`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Order timeline`})})}),(0,q.jsxs)(`p`,{className:`motion-direction`,"data-direction":u,children:[(0,q.jsx)(`span`,{"aria-hidden":`true`,children:(0,q.jsx)(l,{en:u===`down`?`↓`:`↑`})}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:` Scrolling `})}),(0,q.jsx)(l,{en:u})]})]}),(0,q.jsx)(`div`,{ref:n,className:`motion-reveal__scroller`,role:`region`,"aria-label":e({en:`Order timeline. Scroll to see entrances.`}),tabIndex:0,onScroll:f,children:(0,q.jsx)(`ul`,{className:`motion-timeline`,children:(0,q.jsx)(l,{en:Ve.map((e,n)=>{let r=s[e.id];return(0,q.jsxs)(`li`,{ref:t=>{t?i.current.set(e.id,t):i.current.delete(e.id)},className:`motion-row`,"data-row":e.id,"data-group":Math.floor(n/6)+1,children:[(0,q.jsx)(`span`,{className:`motion-row__index`,"aria-hidden":`true`,children:(0,q.jsx)(l,{en:String(n+1).padStart(2,`0`)})}),(0,q.jsxs)(`span`,{className:`motion-row__copy`,children:[(0,q.jsx)(`span`,{className:`motion-row__title`,children:(0,q.jsx)(l,{en:e.title})}),(0,q.jsx)(`span`,{className:`motion-row__detail`,children:(0,q.jsx)(l,{en:e.detail})})]}),(0,q.jsxs)(`span`,{className:`motion-row__badge`,"data-kind":r?r.replay?`replay`:`first`:`waiting`,children:[(0,q.jsx)(l,{en:r?r.label:h||t?`—`:`Waiting`}),(0,q.jsx)(l,{en:r&&r.count>1&&(0,q.jsxs)(`b`,{children:[` ×`,(0,q.jsx)(l,{en:r.count})]})})]})]},e.id)})})})})]}),(0,q.jsx)(`div`,{className:`motion-reveal__code`,children:(0,q.jsx)(A,{title:e({en:`Reveal`}),filename:`Receipt.tsx`,code:Qe,language:`tsx`,label:e({en:`Reveal code`}),maxHeight:300})})]})}function Xt({kind:e}){return(0,q.jsxs)(`div`,{className:`motion-ex motion-ex--slide`,"data-kind":e,"aria-hidden":`true`,children:[(0,q.jsx)(`span`,{className:`motion-ex__label`,children:(0,q.jsx)(l,{en:e===`good`?`translate`:`width`})}),(0,q.jsxs)(`span`,{className:`motion-ex__row`,children:[(0,q.jsx)(`i`,{className:`motion-ex__pill`}),(0,q.jsx)(`span`,{className:`motion-ex__text`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Pay $48.00`})})})]})]})}function Zt({kind:e}){let t=o();return e===`good`?(0,q.jsx)(E,{size:`sm`,state:`loading`,announce:!1,children:t({en:`Pay $48.00`})}):(0,q.jsx)(`span`,{className:`motion-ex__pulse`,children:(0,q.jsx)(x,{size:`sm`,tabIndex:-1,children:t({en:`Buy now`})})})}function Qt({kind:e}){return(0,q.jsxs)(`div`,{className:`motion-ex motion-ex--viewport`,"data-kind":e,"aria-hidden":`true`,children:[(0,q.jsxs)(`span`,{className:`motion-ex__frame`,children:[(0,q.jsx)(`i`,{className:`motion-ex__dot`}),(0,q.jsx)(`b`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`On screen`})})})]}),(0,q.jsxs)(`span`,{className:`motion-ex__outside`,children:[(0,q.jsx)(`i`,{className:`motion-ex__dot`}),(0,q.jsx)(`b`,{children:(0,q.jsx)(l,{en:e===`good`?`Paused`:`Running`})})]})]})}function $t({kind:e}){return(0,q.jsxs)(`div`,{className:`motion-ex motion-ex--leave`,"data-kind":e,"aria-hidden":`true`,children:[(0,q.jsx)(`span`,{className:`motion-ex__toast`,children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Order saved`})})}),(0,q.jsx)(`span`,{className:`motion-ex__label`,children:(0,q.jsx)(l,{en:e===`good`?`in 600ms · out 180ms`:`in 180ms · out 600ms`})})]})}function en({kind:e}){return(0,q.jsxs)(`div`,{className:`motion-ex motion-ex--bounce`,"data-kind":e,"aria-hidden":`true`,children:[(0,q.jsx)(`span`,{className:`motion-ex__track`,children:(0,q.jsx)(`i`,{className:`motion-ex__ball`})}),(0,q.jsx)(`span`,{className:`motion-ex__label`,children:(0,q.jsx)(l,{en:e===`good`?`spring`:`overshoot`})})]})}function tn({kind:e}){return(0,q.jsx)(`p`,{className:`motion-ex motion-ex--words`,"data-kind":e,"aria-hidden":`true`,children:(0,q.jsx)(l,{en:e===`good`?`Still confirming with your bank…`:`Almost there!`})})}function $({children:e}){let t=(0,F.useRef)(null),n=j(t,{page:`motion`});return(0,q.jsx)(`div`,{ref:t,"data-playback":n?`running`:`paused`,children:(0,q.jsx)(l,{en:e})})}function nn(){let e=o();return(0,q.jsxs)(`div`,{className:`motion-rules-list`,children:[(0,q.jsx)($,{children:(0,q.jsx)(N,{number:1,title:e({en:`Animate transform and opacity`}),do:{text:`Move things with translate, scale and opacity. The browser composites them without touching layout.`,example:(0,q.jsx)(Xt,{kind:`good`})},dont:{text:`Animate width, height or margin. Every neighbor reflows on every frame.`,example:(0,q.jsx)(Xt,{kind:`bad`})}})}),(0,q.jsx)($,{children:(0,q.jsx)(N,{number:2,title:e({en:`Loop only while something waits`}),do:{text:`A loop answers a wait: a payment the bank has not confirmed. It stops when the answer arrives.`,example:(0,q.jsx)(Zt,{kind:`good`})},dont:{text:`A loop that decorates. A pulsing button asks for attention it has not earned.`,example:(0,q.jsx)(Zt,{kind:`bad`})}})}),(0,q.jsx)($,{children:(0,q.jsx)(N,{number:3,title:e({en:`Pause what nobody sees`}),do:{text:`Stop loops offscreen, in a hidden tab and under reduced motion. useActivity covers all three.`,example:(0,q.jsx)(Qt,{kind:`good`})},dont:{text:`Leave them running. They cost battery and attention for nothing.`,example:(0,q.jsx)(Qt,{kind:`bad`})}})}),(0,q.jsx)($,{children:(0,q.jsx)(N,{number:4,title:e({en:`Leave faster than you arrive`}),do:{text:`Enter on 600ms. Exit on 180ms with ease-in, so the next thing is not kept waiting.`,example:(0,q.jsx)($t,{kind:`good`})},dont:{text:`Let a dialog linger on the way out. The task has moved on; the interface has not.`,example:(0,q.jsx)($t,{kind:`bad`})}})}),(0,q.jsx)($,{children:(0,q.jsx)(N,{number:5,title:e({en:`Settle without a bounce`}),do:{text:`Use the overdamped spring: a fast start and a soft landing, no second beat.`,example:(0,q.jsx)(en,{kind:`good`})},dont:{text:`Overshoot. A bounce adds a beat the task does not need, and money is not playful.`,example:(0,q.jsx)(en,{kind:`bad`})}})}),(0,q.jsx)($,{children:(0,q.jsx)(N,{number:6,title:e({en:`Name the wait, never fake it`}),do:{text:`Say what is happening, and offer a way out when it runs long.`,example:(0,q.jsx)(tn,{kind:`good`})},dont:{text:`Guess at progress. "Almost there" is a promise the bank has not made.`,example:(0,q.jsx)(tn,{kind:`bad`})}})}),(0,q.jsx)(A,{title:e({en:`What may animate`}),filename:`sheet.css`,code:tt,language:`css`,label:e({en:`What may animate`}),maxHeight:260})]})}var rn=e=>`${e<0?`−`:`+`}${Math.abs(e).toFixed(1)}`;function an(){let e=o(),t=(0,F.useRef)(null),n=(0,F.useRef)(()=>{});return(0,F.useEffect)(()=>()=>n.current(),[]),(0,q.jsxs)(`div`,{className:`motion-sig`,children:[(0,q.jsx)(x,{ref:t,children:e({en:`Pay $48.00`})}),(0,q.jsx)(C,{label:e({en:`Replay roll`}),icon:`refresh`,variant:`ghost`,size:`sm`,tooltip:!0,onClick:()=>{n.current(),n.current=Tt(t.current)}})]})}function on(){let e=o(),[t,n]=(0,F.useState)({x:0,y:0});return(0,q.jsxs)(`div`,{className:`motion-sig motion-sig--magnet`,children:[(0,q.jsx)(x,{size:`lg`,onPointerMove:e=>{e.pointerType===`touch`||!u()||a()?n({x:0,y:0}):n(ee(e.clientX,e.clientY,e.currentTarget.getBoundingClientRect()))},onPointerLeave:()=>n({x:0,y:0}),children:e({en:`Place order`})}),(0,q.jsxs)(`div`,{className:`motion-gauge`,"aria-hidden":`true`,children:[(0,q.jsx)(`span`,{className:`motion-gauge__box`,children:(0,q.jsx)(`i`,{style:{translate:`${t.x*12}px ${t.y*12}px`}})}),(0,q.jsxs)(`span`,{className:`motion-gauge__text`,children:[(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`x `})}),(0,q.jsx)(l,{en:rn(t.x)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`px · y `})}),(0,q.jsx)(l,{en:rn(t.y)}),(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`px`})})]})]})]})}function sn(){let e=o(),t=(0,F.useRef)(null),[n,r]=(0,F.useState)(1),i=(0,F.useRef)(0);(0,F.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]);let a=(0,F.useCallback)(()=>{cancelAnimationFrame(i.current);let e=performance.now()+700,n=a=>{let o=Number.parseFloat(getComputedStyle(t.current).scale);r(Number.isFinite(o)?o:1),a<e&&(i.current=requestAnimationFrame(n))};i.current=requestAnimationFrame(n)},[]);return(0,q.jsxs)(`div`,{className:`motion-sig motion-sig--press`,children:[(0,q.jsx)(x,{ref:t,variant:`dark`,onPointerDown:a,onPointerUp:a,onKeyDown:e=>{!e.repeat&&(e.key===` `||e.key===`Enter`)&&a()},onKeyUp:a,children:e({en:`Hold me`})}),(0,q.jsxs)(`p`,{className:`motion-readout-chip`,"aria-hidden":`true`,children:[(0,q.jsx)(`span`,{children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`scale`})})}),(0,q.jsx)(`b`,{children:(0,q.jsx)(l,{en:n.toFixed(3)})})]})]})}function cn(){let e=o(),[t,n]=(0,F.useState)(!1),r=(0,F.useRef)(0);(0,F.useEffect)(()=>()=>window.clearTimeout(r.current),[]);let i=Oe[1];return(0,q.jsxs)(`div`,{className:`motion-sig motion-sig--card`,children:[(0,q.jsx)(`div`,{className:`motion-sig-card`,"data-play":t||void 0,onClick:e=>{e.target.closest(`a`)&&e.preventDefault()},children:(0,q.jsx)(oe,{href:`#motion/signatures`,layout:`horizontal`,tone:`white`,title:e({en:i.title}),description:e({en:i.description}),image:i.image,tags:i.tags,imageLoading:`eager`})}),(0,q.jsx)(C,{className:`motion-sig__replay`,label:e({en:`Replay hover`}),icon:`refresh`,variant:`ghost`,size:`sm`,tooltip:!0,onClick:()=>{window.clearTimeout(r.current),n(!0),r.current=window.setTimeout(()=>n(!1),1800)}})]})}var ln=[`Work`,`About`,`Systems`];function un(){let e=o(),[t,n]=(0,F.useState)(0),[r,i]=(0,F.useState)(null),a=(0,F.useRef)([]),s=()=>{a.current.forEach(window.clearTimeout),a.current=[]};return(0,F.useEffect)(()=>s,[]),(0,q.jsxs)(`div`,{className:`motion-sig motion-sig--nav`,children:[(0,q.jsx)(`nav`,{className:`motion-nav`,"aria-label":e({en:`Example navigation`}),children:(0,q.jsx)(l,{en:ln.map((e,i)=>(0,q.jsx)(`a`,{href:`#motion/signatures`,"aria-current":t===i?`page`:void 0,"data-visiting":r===i||void 0,onClick:e=>{e.preventDefault(),n(i)},children:(0,q.jsx)(l,{en:e})},e))})}),(0,q.jsx)(C,{label:e({en:`Replay dot`}),icon:`refresh`,variant:`ghost`,size:`sm`,tooltip:!0,onClick:()=>{s();let e=ln.map((e,t)=>t).filter(e=>e!==t);e.forEach((e,t)=>{a.current.push(window.setTimeout(()=>i(e),t*1100))}),a.current.push(window.setTimeout(()=>i(null),e.length*1100))}})]})}function dn(){let e=o();return(0,q.jsxs)(Ce,{columns:3,children:[(0,q.jsx)(P,{title:e({en:`Roll label`}),note:`Rolls in from above, once, on hover-enter. 700ms spring.`,interactive:!0,inspect:{code:qe},children:(0,q.jsx)(an,{})}),(0,q.jsx)(P,{title:e({en:`Magnetic pull`}),note:`Filled buttons lean at most ±2px toward the pointer. 250ms expo-out.`,interactive:!0,inspect:{code:Je},children:(0,q.jsx)(on,{})}),(0,q.jsx)(P,{title:e({en:`Nav dot`}),note:`Flies in from the left and comes into focus. 700ms spring.`,interactive:!0,inspect:{code:Ze,language:`css`},children:(0,q.jsx)(un,{})}),(0,q.jsx)(P,{title:e({en:`Card zoom and arrow`}),note:`The image zooms to 1.1 over 800ms; the arrow flies out over 500ms.`,span:2,interactive:!0,inspect:{code:Xe},children:(0,q.jsx)(cn,{})}),(0,q.jsx)(P,{title:e({en:`Press`}),note:`Scale .96 in 120ms. Release returns in 200ms.`,interactive:!0,inspect:{code:Ye},children:(0,q.jsx)(sn,{})})]})}function fn(){let e=o(),t=te(),n=(0,F.useMemo)(()=>t.filter(e=>e.group===`Motion`).map(e=>e.variable),[t]),r=(0,F.useMemo)(()=>rt(t),[t]);return(0,q.jsxs)(`div`,{className:`kit-stack`,children:[(0,q.jsx)(xe,{tokens:ue.tokens??[]}),(0,q.jsx)(we,{tokens:n,caption:e({en:`Motion tokens`})}),(0,q.jsx)(A,{title:e({en:`Motion tokens`}),filename:`tokens.css`,code:r,language:`css`,label:e({en:`Motion tokens CSS`}),maxHeight:420})]})}function pn(){let e=o(),{reduced:t}=J();return(0,q.jsxs)(`div`,{className:`motion-page`,"data-reduced":t||void 0,children:[(0,q.jsx)(me,{id:`motion`,actions:(0,q.jsx)(ct,{}),children:(0,q.jsx)(l,{en:(0,q.jsx)(q.Fragment,{children:`Motion explains change. It answers the finger, shows where things went and settles. Eight tempos, one spring, read live from the tokens.`})})}),(0,q.jsxs)(De,{tabs:pe,label:e({en:`Motion sections`}),children:[(0,q.jsx)(M,{id:`tempo`,eyebrow:e({en:`Tempo`}),title:e({en:`Eight tempos. One ladder.`}),lead:e({en:`Each tempo is a token with a job, drawn against one axis. Play them together, then slow them down: every component here reads its timing from the same tokens.`}),children:(0,q.jsx)(Ut,{})}),(0,q.jsx)(ge,{title:e({en:`One spring for space. Expo-out for feedback.`}),lead:e({en:`Everything that moves on the portfolio runs on two curves. We kept them, named the tempos and gave each tempo a job.`}),reasons:[{title:`Space gets the spring`,text:`Indicators, thumbs, morphs and zooms ride one overdamped spring. It starts fast, never overshoots and settles softly.`},{title:`Feedback gets expo-out`,text:`Color, press and entrances answer at once, so they spend their change early. Exits use ease-in and leave faster than they arrive.`},{title:`Eight tempos, no more`,text:`A tempo is a token with a job. If a change fits none of them, it probably should not animate.`}]}),(0,q.jsx)(M,{id:`curves`,eyebrow:e({en:`Curves`}),title:e({en:`A spring that never bounces.`}),lead:e({en:`Spring for space, expo-out for feedback. Drag the scrubber to read both curves at any moment, then play them over a real tempo.`}),children:(0,q.jsx)(Ct,{})}),(0,q.jsx)(M,{id:`signatures`,eyebrow:e({en:`Signatures`}),title:e({en:`Five small things the site does.`}),lead:e({en:`Roll, pull, fly in, zoom and press. Four ship as library primitives; none of them travels far.`}),children:(0,q.jsx)(dn,{})}),(0,q.jsx)(M,{id:`reveal`,eyebrow:e({en:`Reveal`}),title:e({en:`Arrive once. Replay only from below.`}),lead:e({en:`Scroll the box. The first play travels 28px; coming back from below replays quietly. Scrolling up never replays.`}),children:(0,q.jsx)(Yt,{})}),(0,q.jsx)(M,{id:`choreography`,eyebrow:e({en:`Choreography`}),title:e({en:`A confirmation, one beat at a time.`}),lead:e({en:`Press, wait, close, land, rise. Each beat names its tempo, and only one spring moves at a time.`}),children:(0,q.jsx)(pt,{})}),(0,q.jsx)(M,{id:`reduced`,eyebrow:e({en:`Reduced motion`}),title:e({en:`Same words. No travel.`}),lead:e({en:`Reduced motion keeps every word, every focus ring and every result. It removes the movement between them.`}),children:(0,q.jsx)(Wt,{})}),(0,q.jsx)(M,{id:`rules`,eyebrow:e({en:`Rules`}),title:e({en:`What may move, and when.`}),lead:e({en:`Six rules, each with the version that breaks it.`}),children:(0,q.jsx)(nn,{})})]}),(0,q.jsx)(M,{id:`reference`,title:e({en:`Reference`}),children:(0,q.jsx)(Gt,{})}),(0,q.jsx)(M,{id:`tokens`,title:e({en:`Tokens`}),lead:e({en:`Every motion token, read from the live registry. Press one to copy var().`}),children:(0,q.jsx)(fn,{})})]})}function mn(){return(0,q.jsx)(st,{children:(0,q.jsx)(pn,{})})}export{mn as default};