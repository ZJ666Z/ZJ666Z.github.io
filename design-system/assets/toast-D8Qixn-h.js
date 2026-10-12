import{Fn as e,Mn as t,_n as n,d as r,dn as i,gt as a,hn as o,mn as s,vt as c}from"./route-UEzl4zy4.js";import{t as l}from"./tokens--8wjVqaD.js";import{o as u}from"./docs-CRxPR9PY.js";import{f as d,i as f,l as p,m,r as h,u as g}from"./kit-B_zmQpOy.js";import{t as _}from"./toast-CVOh6NPX.js";var v=e(),y={tone:`success`,action:!0,lifetime:`auto`,long:!1},b=4e3,x={success:{message:`Card ending 4242 saved.`,longMessage:`Card ending 4242 saved. It is your default for checkout and Shipping protection renewals.`,action:`Undo`,trigger:`Save card`,component:`SaveCardToast`,scene:{title:`Visa ending 4242`,meta:`Expires 08/29`,result:{title:`Card removed`,meta:`Undone. Nothing was saved.`}}},error:{message:`Card declined. Try another method.`,longMessage:`Card declined. Your bank did not approve $48.00. Try another method or ask them to allow it.`,action:`Retry`,trigger:`Pay $48.00`,component:`DeclinedToast`,scene:{title:`Order #4821`,meta:`$48.00 · Visa ending 4242`,result:null}},info:{message:`Claim submitted. We'll email you within 24 hours.`,longMessage:`Claim #4821 submitted. We'll email you within 24 hours and ask for photos only if we need them.`,action:`View`,trigger:`Submit claim`,component:`ClaimToast`,scene:{title:`Claim #4821`,meta:`Shipping protection`,result:{title:`Claim #4821`,meta:`Under review. Reply within 24 hours.`}}}},S={tone:`success`,message:`Paid $48.00. The receipt is in your email.`},C=({tone:e,long:t})=>t?x[e].longMessage:x[e].message,w=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Button, Toast } from '@zijie/ui';
`;function T(e){let{tone:t,action:n,lifetime:r}=e,i=x[t],a=r===`auto`,o=[...t===`success`?[]:[`tone="${t}"`],`message="${C(e)}"`,...n?[`action={{ label: '${i.action}', onClick: () => setOpen(false) }}`]:[],`onDismiss={() => setOpen(false)}`];return[`import { ${a?`useEffect, useState`:`useState`} } from 'react';`,`import { Button, Toast } from '@zijie/ui';`,``,`export function ${i.component}() {`,`  const [open, setOpen] = useState(false);`,...a?[`  // The caller owns the lifetime: step aside after four seconds.`,`  useEffect(() => {`,`    if (!open) return;`,`    const timer = setTimeout(() => setOpen(false), ${b});`,`    return () => clearTimeout(timer);`,`  }, [open]);`]:[`  // The caller owns the lifetime: it stays until the person dismisses it.`],`  return (`,`    <>`,`      <Button onClick={() => setOpen(true)}>${i.trigger}</Button>`,`      {open && (`,`        <Toast`,...o.map(e=>`          ${e}`),`        />`,`      )}`,`    </>`,`  );`,`}`,``].join(`
`)}var E=[{name:`Toast.tsx`,code:`import { useEffect, useState } from 'react';
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
`},{name:`toast.css`,code:_},{name:`tokens.css`,code:l}],D=i(),O=[{value:`success`,label:`Success`},{value:`error`,label:`Error`},{value:`info`,label:`Info`}],k=[{value:`auto`,label:`Auto 4s`},{value:`stays`,label:`Stays`}],A=2200;function j({demo:e,active:i}){let l=x[e.tone],u=s(),[d,f]=(0,v.useState)({key:0,pinned:!0}),[p,m]=(0,v.useState)(null),h=(0,v.useRef)(null),g=(0,v.useRef)(null),_=(0,v.useRef)(!1),y=(0,v.useRef)(0);y.current=d?.key??null;let w=(0,v.useRef)(0);(0,v.useEffect)(()=>()=>window.clearTimeout(w.current),[]);let T=(0,v.useCallback)(()=>{h.current?.contains(document.activeElement)&&g.current?.focus({preventScroll:!0});let e=y.current,r=()=>f(t=>t&&t.key===e?null:t),i=h.current?.firstElementChild;!i||t()||typeof i.animate!=`function`?r():_.current||(_.current=!0,i.animate([{opacity:1,translate:`0 0`},{opacity:0,translate:`0 8px`}],{duration:n.exit,easing:o,fill:`forwards`}).finished.then(()=>{_.current=!1,r()},()=>{_.current=!1}))},[]),E=(e,t)=>{window.clearTimeout(w.current),m(n=>({key:(n?.key??0)+1,title:e,meta:t})),w.current=window.setTimeout(()=>m(null),A)},O=()=>{if(e.tone===`error`){h.current?.contains(document.activeElement)&&g.current?.focus({preventScroll:!0}),_.current=!1,f(e=>({key:(e?.key??0)+1,pinned:!1,follow:S}));return}let t=l.scene.result;T(),t&&E(t.title,t.meta)},k=(0,v.useRef)(!0);(0,v.useEffect)(()=>{k.current?k.current=!1:(_.current=!1,window.clearTimeout(w.current),m(null),f(e=>({key:(e?.key??0)+1,pinned:!0})))},[e.tone,e.action,e.long]);let[j,M]=(0,v.useState)(!1),N=(0,v.useRef)(b);(0,v.useEffect)(()=>{N.current=b},[d]),(0,v.useEffect)(()=>{if(!d||d.pinned)return;if(!i&&!u){f(null);return}if(j||e.lifetime===`stays`)return;let t=performance.now(),n=window.setTimeout(T,N.current);return()=>{window.clearTimeout(n),N.current=Math.max(600,N.current-(performance.now()-t))}},[d,i,u,j,e.lifetime,T]);let P=p??l.scene,F=d?.follow?.tone??e.tone,I=e.action&&!d?.follow;return(0,D.jsxs)(`div`,{className:`toast-scene`,children:[(0,D.jsxs)(`div`,{className:`toast-scene__stack`,children:[(0,D.jsxs)(`div`,{className:`toast-scene__card`,"data-tone":e.tone,children:[(0,D.jsxs)(`div`,{className:`toast-scene__row`,children:[e.tone===`info`?(0,D.jsx)(`span`,{className:`toast-scene__tile`,"aria-hidden":`true`,children:(0,D.jsx)(c,{name:`shield-check`,size:20})}):(0,D.jsxs)(`svg`,{className:`toast-scene__card-mark`,viewBox:`0 0 48 32`,width:`48`,height:`32`,"aria-hidden":`true`,children:[(0,D.jsx)(`rect`,{width:`48`,height:`32`,rx:`7`}),(0,D.jsx)(`rect`,{className:`toast-scene__card-stripe`,x:`0`,y:`8`,width:`48`,height:`5`}),(0,D.jsx)(`rect`,{className:`toast-scene__card-chip`,x:`7`,y:`18`,width:`10`,height:`7`,rx:`2`})]}),(0,D.jsxs)(`span`,{className:`toast-scene__text`,"data-flash":p?``:void 0,children:[(0,D.jsx)(`span`,{className:`toast-scene__title`,children:P.title}),(0,D.jsx)(`span`,{className:`toast-scene__meta`,children:P.meta})]},p?`flash-${p.key}`:`${e.tone}`),(0,D.jsx)(`span`,{className:`toast-scene__badge`,children:`Simulated`})]}),(0,D.jsx)(a,{ref:g,variant:e.tone===`error`?`blue`:`dark`,onClick:()=>{_.current=!1,f(e=>({key:(e?.key??0)+1,pinned:!1}))},children:l.trigger})]}),(0,D.jsxs)(`p`,{className:`toast-scene__hint`,children:[`Press ${l.trigger}. `,e.lifetime===`auto`?`The toast steps aside after four seconds.`:`The toast stays until you dismiss it.`]})]}),(0,D.jsx)(`div`,{ref:h,className:`toast-scene__region`,onPointerEnter:e=>{e.pointerType!==`touch`&&M(!0)},onPointerLeave:()=>M(!1),onFocus:()=>M(!0),onBlur:e=>{e.relatedTarget instanceof Node&&e.currentTarget.contains(e.relatedTarget)||M(!1)},children:d&&(0,D.jsx)(r,{tone:F,message:d.follow?d.follow.message:C(e),action:I?{label:l.action,onClick:O}:void 0,onDismiss:T},d.key)})]})}function M(){let[e,t]=(0,v.useState)(y);return(0,D.jsx)(g,{page:`toast`,name:`Toast`,code:{setup:w,usage:T(e),usageFile:`${x[e.tone].component}.tsx`,sources:E},controls:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(d,{label:`Tone`,value:e.tone,options:O,onChange:e=>t(t=>({...t,tone:e}))}),(0,D.jsx)(d,{label:`Lifetime`,value:e.lifetime,options:k,onChange:e=>t(t=>({...t,lifetime:e}))}),(0,D.jsx)(m,{label:`Action button`,checked:e.action,onChange:e=>t(t=>({...t,action:e}))}),(0,D.jsx)(m,{label:`Long message`,checked:e.long,onChange:e=>t(t=>({...t,long:e}))})]}),details:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(p,{tokens:u.tokens??[]}),(0,D.jsx)(f,{props:u.props??[]}),(0,D.jsx)(h,{keys:u.keys??[]})]}),children:({active:t})=>(0,D.jsx)(j,{demo:e,active:t})})}export{M as default};