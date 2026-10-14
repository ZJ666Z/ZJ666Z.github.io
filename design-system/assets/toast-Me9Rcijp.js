import{Fn as e,Ft as t,Mt as n,Rn as r,_n as i,bn as a,d as o,gt as s,mn as c,vn as l,vt as u}from"./route-D8V-RcHq.js";import{t as d}from"./tokens--8wjVqaD.js";import{o as f}from"./docs-CCM0Joka.js";import{f as p,i as m,l as h,m as g,r as _,u as v}from"./kit-CGiBTmcs.js";import{t as y}from"./toast-CVOh6NPX.js";var b=r(),x={tone:`success`,action:!0,lifetime:`auto`,long:!1},S=4e3,C={success:{message:`Card ending 4242 saved.`,longMessage:`Card ending 4242 saved. It is your default for checkout and Shipping protection renewals.`,action:`Undo`,trigger:`Save card`,component:`SaveCardToast`,scene:{title:`Visa ending 4242`,meta:`Expires 08/29`,result:{title:`Card removed`,meta:`Undone. Nothing was saved.`}}},error:{message:`Card declined. Try another method.`,longMessage:`Card declined. Your bank did not approve $48.00. Try another method or ask them to allow it.`,action:`Retry`,trigger:`Pay $48.00`,component:`DeclinedToast`,scene:{title:`Order #4821`,meta:`$48.00 · Visa ending 4242`,result:null}},info:{message:`Claim submitted. We'll email you within 24 hours.`,longMessage:`Claim #4821 submitted. We'll email you within 24 hours and ask for photos only if we need them.`,action:`View`,trigger:`Submit claim`,component:`ClaimToast`,scene:{title:`Claim #4821`,meta:`Shipping protection`,result:{title:`Claim #4821`,meta:`Under review. Reply within 24 hours.`}}}},w={tone:`success`,message:`Paid $48.00. The receipt is in your email.`},T=({tone:e,long:t})=>t?C[e].longMessage:C[e].message,E=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Button, Toast } from '@zijie/ui';
`;function D(e){let{tone:t,action:n,lifetime:r}=e,i=C[t],a=r===`auto`,o=[...t===`success`?[]:[`tone="${t}"`],`message="${T(e)}"`,...n?[`action={{ label: '${i.action}', onClick: () => setOpen(false) }}`]:[],`onDismiss={() => setOpen(false)}`];return[`import { ${a?`useEffect, useState`:`useState`} } from 'react';`,`import { Button, Toast } from '@zijie/ui';`,``,`export function ${i.component}() {`,`  const [open, setOpen] = useState(false);`,...a?[`  // The caller owns the lifetime: step aside after four seconds.`,`  useEffect(() => {`,`    if (!open) return;`,`    const timer = setTimeout(() => setOpen(false), ${S});`,`    return () => clearTimeout(timer);`,`  }, [open]);`]:[`  // The caller owns the lifetime: it stays until the person dismisses it.`],`  return (`,`    <>`,`      <Button onClick={() => setOpen(true)}>${i.trigger}</Button>`,`      {open && (`,`        <Toast`,...o.map(e=>`          ${e}`),`        />`,`      )}`,`    </>`,`  );`,`}`,``].join(`
`)}var O=[{name:`Toast.tsx`,code:`import { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../Button';

export interface ToastLabels {
  dismiss: string;
}

export interface ToastProps {
  message: string;
  tone?: 'success' | 'error' | 'info';
  onDismiss: () => void;
  action?: { label: string; onClick: () => void };
  labels?: Partial<ToastLabels>;
  className?: string;
}

/**
 * Caller owns lifetime; no auto-dismiss timer hidden inside a presentational component.
 * Announcement: a live region inserted together with its text is often not read, so the region
 * mounts empty and receives the message on the next frame (the visible copy is aria-hidden).
 * A ToastProvider should own one persistent region for the whole app.
 */
export function Toast({ message, tone = 'success', onDismiss, action, labels, className }: ToastProps) {
  const text = { dismiss: 'Dismiss', ...labels };
  const [spoken, setSpoken] = useState('');
  useEffect(() => {
    const frame = requestAnimationFrame(() => setSpoken(message));
    return () => cancelAnimationFrame(frame);
  }, [message]);
  return (
    <div className={\`z-toast z-toast--\${tone}\${className ? \` \${className}\` : ''}\`}>
      <span className="z-toast__symbol" aria-hidden="true">
        <Icon name={tone === 'success' ? 'check' : tone === 'error' ? 'close' : 'info'} size={18} />
      </span>
      <p className="z-toast__message" aria-hidden="true">{message}</p>
      <span className="z-sr-only" role={tone === 'error' ? 'alert' : 'status'}>{spoken}</span>
      {action && <button type="button" className="z-toast__action" onClick={action.onClick}>{action.label}</button>}
      <IconButton label={text.dismiss} icon="close" onClick={onDismiss} />
    </div>
  );
}
`},{name:`toast.css`,code:y},{name:`tokens.css`,code:d}],k=c(),A=[{value:`success`,label:`Success`},{value:`error`,label:`Error`},{value:`info`,label:`Info`}],j=[{value:`auto`,label:`Auto 4s`},{value:`stays`,label:`Stays`}],M=2200;function N({demo:t,active:r}){let c=C[t.tone],d=i(),[f,p]=(0,b.useState)({key:0,pinned:!0}),[m,h]=(0,b.useState)(null),g=(0,b.useRef)(null),_=(0,b.useRef)(null),v=(0,b.useRef)(!1),y=(0,b.useRef)(0);y.current=f?.key??null;let x=(0,b.useRef)(0);(0,b.useEffect)(()=>()=>window.clearTimeout(x.current),[]);let E=(0,b.useCallback)(()=>{g.current?.contains(document.activeElement)&&_.current?.focus({preventScroll:!0});let t=y.current,n=()=>p(e=>e&&e.key===t?null:e),r=g.current?.firstElementChild;!r||e()||typeof r.animate!=`function`?n():v.current||(v.current=!0,r.animate([{opacity:1,translate:`0 0`},{opacity:0,translate:`0 8px`}],{duration:a.exit,easing:l,fill:`forwards`}).finished.then(()=>{v.current=!1,n()},()=>{v.current=!1}))},[]),D=(e,t)=>{window.clearTimeout(x.current),h(n=>({key:(n?.key??0)+1,title:e,meta:t})),x.current=window.setTimeout(()=>h(null),M)},O=()=>{if(t.tone===`error`){g.current?.contains(document.activeElement)&&_.current?.focus({preventScroll:!0}),v.current=!1,p(e=>({key:(e?.key??0)+1,pinned:!1,follow:w}));return}let e=c.scene.result;E(),e&&D(e.title,e.meta)},A=(0,b.useRef)(!0);(0,b.useEffect)(()=>{A.current?A.current=!1:(v.current=!1,window.clearTimeout(x.current),h(null),p(e=>({key:(e?.key??0)+1,pinned:!0})))},[t.tone,t.action,t.long]);let[j,N]=(0,b.useState)(!1),P=(0,b.useRef)(S);(0,b.useEffect)(()=>{P.current=S},[f]),(0,b.useEffect)(()=>{if(!f||f.pinned)return;if(!r&&!d){p(null);return}if(j||t.lifetime===`stays`)return;let e=performance.now(),n=window.setTimeout(E,P.current);return()=>{window.clearTimeout(n),P.current=Math.max(600,P.current-(performance.now()-e))}},[f,r,d,j,t.lifetime,E]);let F=m??c.scene,I=f?.follow?.tone??t.tone,L=t.action&&!f?.follow;return(0,k.jsxs)(`div`,{className:`toast-scene`,children:[(0,k.jsxs)(`div`,{className:`toast-scene__stack`,children:[(0,k.jsxs)(`div`,{className:`toast-scene__card`,"data-tone":t.tone,children:[(0,k.jsxs)(`div`,{className:`toast-scene__row`,children:[(0,k.jsx)(n,{en:t.tone===`info`?(0,k.jsx)(`span`,{className:`toast-scene__tile`,"aria-hidden":`true`,children:(0,k.jsx)(u,{name:`shield-check`,size:20})}):(0,k.jsxs)(`svg`,{className:`toast-scene__card-mark`,viewBox:`0 0 48 32`,width:`48`,height:`32`,"aria-hidden":`true`,children:[(0,k.jsx)(`rect`,{width:`48`,height:`32`,rx:`7`}),(0,k.jsx)(`rect`,{className:`toast-scene__card-stripe`,x:`0`,y:`8`,width:`48`,height:`5`}),(0,k.jsx)(`rect`,{className:`toast-scene__card-chip`,x:`7`,y:`18`,width:`10`,height:`7`,rx:`2`})]})}),(0,k.jsxs)(`span`,{className:`toast-scene__text`,"data-flash":m?``:void 0,children:[(0,k.jsx)(`span`,{className:`toast-scene__title`,children:(0,k.jsx)(n,{en:F.title})}),(0,k.jsx)(`span`,{className:`toast-scene__meta`,children:(0,k.jsx)(n,{en:F.meta})})]},m?`flash-${m.key}`:`${t.tone}`),(0,k.jsx)(`span`,{className:`toast-scene__badge`,children:(0,k.jsx)(n,{en:(0,k.jsx)(k.Fragment,{children:`Simulated`})})})]}),(0,k.jsx)(s,{ref:_,variant:t.tone===`error`?`blue`:`dark`,onClick:()=>{v.current=!1,p(e=>({key:(e?.key??0)+1,pinned:!1}))},children:(0,k.jsx)(n,{en:c.trigger})})]}),(0,k.jsxs)(`p`,{className:`toast-scene__hint`,children:[(0,k.jsx)(n,{en:`Press ${c.trigger}. `}),(0,k.jsx)(n,{en:t.lifetime===`auto`?`The toast steps aside after four seconds.`:`The toast stays until you dismiss it.`})]})]}),(0,k.jsx)(`div`,{ref:g,className:`toast-scene__region`,onPointerEnter:e=>{e.pointerType!==`touch`&&N(!0)},onPointerLeave:()=>N(!1),onFocus:()=>N(!0),onBlur:e=>{e.relatedTarget instanceof Node&&e.currentTarget.contains(e.relatedTarget)||N(!1)},children:(0,k.jsx)(n,{en:f&&(0,k.jsx)(o,{tone:I,message:f.follow?f.follow.message:T(t),action:L?{label:c.action,onClick:O}:void 0,onDismiss:E},f.key)})})]})}function P(){let e=t(),[n,r]=(0,b.useState)(x);return(0,k.jsx)(v,{page:`toast`,name:`Toast`,code:{setup:E,usage:D(n),usageFile:`${C[n.tone].component}.tsx`,sources:O},controls:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{label:e({en:`Tone`}),value:n.tone,options:A,onChange:e=>r(t=>({...t,tone:e}))}),(0,k.jsx)(p,{label:e({en:`Lifetime`}),value:n.lifetime,options:j,onChange:e=>r(t=>({...t,lifetime:e}))}),(0,k.jsx)(g,{label:e({en:`Action button`}),checked:n.action,onChange:e=>r(t=>({...t,action:e}))}),(0,k.jsx)(g,{label:e({en:`Long message`}),checked:n.long,onChange:e=>r(t=>({...t,long:e}))})]}),details:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h,{tokens:f.tokens??[]}),(0,k.jsx)(m,{props:f.props??[]}),(0,k.jsx)(_,{keys:f.keys??[]})]}),children:({active:e})=>(0,k.jsx)(N,{demo:n,active:e})})}export{P as default};