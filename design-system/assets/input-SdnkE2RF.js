import{$ as e,B as t,Ft as n,G as r,H as i,I as a,J as o,K as s,L as c,Mt as l,Q as u,R as d,Rn as f,U as p,V as m,W as h,X as g,Y as _,Z as v,an as y,et as b,gt as x,mn as S,nt as ee,on as te,p as ne,pt as re,q as C,rt as ie,tt as w,vt as T,wt as E,z as D}from"./route-D8V-RcHq.js";import{t as O}from"./tokens--8wjVqaD.js";import{h as k,m as ae}from"./docs-Dv2yWw9W.js";import{A,O as oe,_ as j,a as M,c as N,f as se,g as ce,h as le,i as ue,k as P,l as de,m as fe,n as F,o as I,p as pe,r as me,s as he,t as ge,v as _e}from"./kit-CGiBTmcs.js";import{t as ve}from"./asyncAction-DTai14V3.js";import{t as ye}from"./input-BM8UefE0.js";var L=f(),be={WELCOME10:{ok:!0,discount:{code:`WELCOME10`,label:`10% off`}},FREESHIP:{ok:!0,discount:{code:`FREESHIP`,label:`Free shipping`}},SPRING:{ok:!1,reason:`This code expired on March 31. Try a newer one, or remove it.`},ONCE5:{ok:!1,reason:`You have already used this code. Each code works once per account.`}};function xe(e){return be[e.trim().toUpperCase()]||{ok:!1,reason:`We could not find ${e.trim().toUpperCase()}. Check the spelling, or try WELCOME10.`}}function R(e){return(t,{signal:n})=>new Promise((r,i)=>{let a=()=>Object.assign(Error(`Aborted`),{name:`AbortError`});if(n.aborted){i(a());return}let o=setTimeout(()=>r(xe(t)),e);n.addEventListener(`abort`,()=>{clearTimeout(o),i(a())},{once:!0})})}var z=e=>Math.round(e*100)/100;function Se(e,{items:t=42,shipping:n=5.01,protection:r=.99,withProtection:i=!0}={}){let a=i?r:0,o=e?e.code===`FREESHIP`?n:e.code===`WELCOME10`?z(t*.1):0:0;return{items:t,shipping:n,protection:a,discount:o,total:z(t+n+a-o)}}var Ce=e=>z(Math.max(1,e*.008)),we=[{label:`Visa`,number:`4242 4242 4242 4242`},{label:`Mastercard`,number:`5555 5555 5555 4444`},{label:`American Express`,number:`3782 822463 10005`},{label:`One digit off`,number:`4242 4242 4242 4241`}],Te=[{id:`quiet`,label:`Quiet`},{id:`checked`,label:`Checked`},{id:`live`,label:`Live`},{id:`clear`,label:`Clear`}];function Ee(e,t){return e.error===null?e.armed||e.valid?`clear`:`quiet`:t===`change`?`live`:`checked`}var De={quiet:`Quiet while you type. Nothing is checked until you leave the field.`,checked:`Checked as you left. From now on every key re-checks it.`,live:`Live. The message updates as you type.`,clear:`Fixed. The message cleared the moment the value was right.`},Oe={quiet:`Type freely. Nothing is flagged yet.`,checked:`Checked as you left the field.`,live:`Live. The message follows each key.`,clear:`Fixed. The message cleared.`},ke=e=>{let t=e.trim();return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t)?null:t.includes(`@`)?`Finish the address after the @, like name@example.com.`:`Add an @ and a domain, like name@example.com.`},Ae=e=>e.trim()===``?null:ke(e),je=e=>`“${e}”`;function Me(e,t,n){switch(t.type){case`change`:{let t=`Type ${je(n.value)}`;return e.armed?n.error?{kind:`change`,event:t,result:`Re-checked: still wrong.`,tone:`error`}:{kind:`change`,event:t,result:`Re-checked: fixed, message cleared.`,tone:`ok`}:{kind:`change`,event:t,result:`Nothing said yet.`,tone:`quiet`}}case`blur`:return e===n?{kind:`blur`,event:`Leave the field`,result:`Nothing to check yet.`,tone:`quiet`}:n.error?{kind:`blur`,event:`Leave the field`,result:`Checked: message shown.`,tone:`error`}:{kind:`blur`,event:`Leave the field`,result:`Checked: all good.`,tone:`ok`};case`submit`:return n.error?{kind:`submit`,event:`Submit`,result:`Checked: message shown.`,tone:`error`}:{kind:`submit`,event:`Submit`,result:`Checked: all good.`,tone:`ok`};default:return null}}function Ne(e,t,n=5){let[r,...i]=e;if(r&&t.kind===`change`&&r.kind===`change`&&r.tone===t.tone&&r.result===t.result)return[{...r,event:t.event},...i];let a=(r?.id??0)+1;return[{...t,id:a},...e].slice(0,n)}function Pe(e=1){let t=[],n=0,r=(r,i,a)=>{for(let o=r.length+1;o<=i.length;o+=1)n+=a*e,t.push({at:n,event:{type:`change`,value:i.slice(0,o)}})};return t.push({at:0,event:{type:`reset`}}),r(``,`alex@`,140),n+=900*e,t.push({at:n,event:{type:`blur`}}),n+=1100*e,r(`alex@`,`alex@example.com`,120),n+=800*e,t.push({at:n,event:{type:`blur`}}),t}function B(e){let t=a(e),[n,r]=(0,L.useState)({last:`none`,serial:0}),i=e=>r(t=>({last:e,serial:t.serial+1}));return{field:t,props:{...t.fieldProps,onChange:e=>{i(`change`),t.fieldProps.onChange(e)},onBlur:()=>{i(`blur`),t.fieldProps.onBlur()}},phase:Ee(t.state,n.last),last:n.last,serial:n.serial,check:e=>(i(`submit`),t.check(e))}}var V=S();function Fe(e,t){let n=[],r=e;for(let e of t){if(r<=0)break;n.push(Math.min(e,r)),r-=e}return r>0&&n.push(r),n}var Ie={pending:`Waits for the last digit`,pass:`Passes`,fail:`Does not add up`};function Le(){let e=n(),{field:t,props:a}=B({validate:C,showValid:!0}),[o,c]=(0,L.useState)(null),u=v(t.value),d=h(u),f=p(d),m=Math.max(f,u.length),_=d?d.gaps:[4,4,4,4,3],y=u.length<f?`pending`:s(u)?`pass`:`fail`,b=Fe(m,_),x=0,S=e=>{let t=e.currentTarget;c(document.activeElement===t?g(t.value,t.selectionStart??0):null)},ee=e=>{a.onChange(r(e)),t.focus()};return(0,V.jsxs)(`div`,{className:`input-card`,children:[(0,V.jsxs)(`div`,{className:`input-card__field`,children:[(0,V.jsx)(D,{label:e({en:`Card number`}),hint:e({en:`Checked on this device. Nothing is sent.`}),reserve:!0,...a,onSelect:S,onFocus:S,onKeyUp:S,onBlur:()=>{c(null),a.onBlur()}}),(0,V.jsxs)(`div`,{className:`input-card__tests`,children:[(0,V.jsx)(`p`,{className:`input-card__label`,id:`input-card-tests`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Test numbers`})})}),(0,V.jsx)(`ul`,{className:`input-card__chips`,"aria-labelledby":`input-card-tests`,children:(0,V.jsx)(l,{en:we.map(e=>(0,V.jsx)(`li`,{children:(0,V.jsxs)(`button`,{type:`button`,className:`input-chip`,onClick:()=>ee(e.number),children:[(0,V.jsx)(`span`,{className:`input-chip__name`,children:(0,V.jsx)(l,{en:e.label})}),(0,V.jsx)(`span`,{className:`input-chip__number`,children:(0,V.jsx)(l,{en:e.number})})]})},e.label))})})]}),(0,V.jsxs)(`p`,{className:`input-card__try`,children:[(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Type `})}),(0,V.jsx)(`kbd`,{children:`4242 4242`}),(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`, move the caret between the second and third digit, and type `})}),(0,V.jsx)(`kbd`,{children:`9`}),(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`. The digits regroup around the caret; it stays put.`})})]})]}),(0,V.jsxs)(`section`,{className:`input-card__readout`,"aria-label":e({en:`What the field knows`}),children:[(0,V.jsxs)(`dl`,{className:`input-readout`,children:[(0,V.jsxs)(`div`,{className:`input-readout__row`,children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Network`})})}),(0,V.jsx)(`dd`,{children:(0,V.jsx)(`span`,{className:`input-readout__value`,children:(0,V.jsx)(l,{en:d?d.name:`Not yet`})},d?.id??`none`)})]}),(0,V.jsxs)(`div`,{className:`input-readout__row`,children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Grouping`})})}),(0,V.jsx)(`dd`,{children:(0,V.jsx)(`span`,{className:`input-readout__value`,children:(0,V.jsx)(l,{en:Fe(f,_).join(`-`)})})})]}),(0,V.jsxs)(`div`,{className:`input-readout__row`,children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Digits`})})}),(0,V.jsx)(`dd`,{children:(0,V.jsxs)(`span`,{className:`input-readout__value`,children:[(0,V.jsx)(l,{en:u.length}),(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:` of `})}),(0,V.jsx)(l,{en:f})]})})]}),(0,V.jsxs)(`div`,{className:`input-readout__row`,children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Check digit`})})}),(0,V.jsx)(`dd`,{children:(0,V.jsx)(`span`,{className:`input-readout__value`,"data-check":y,children:(0,V.jsx)(l,{en:Ie[y]})})})]}),(0,V.jsxs)(`div`,{className:`input-readout__row`,children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Caret`})})}),(0,V.jsx)(`dd`,{children:(0,V.jsx)(`span`,{className:`input-readout__value`,children:(0,V.jsx)(l,{en:o===null?`Not in the field`:o===0?`Before the first digit`:`After digit ${o}`})})})]})]}),(0,V.jsx)(`div`,{className:`input-pips`,role:`img`,"aria-label":e({en:`${u.length} of ${f} digits entered. Check digit: ${Ie[y].toLowerCase()}.`}),"data-check":y,children:(0,V.jsx)(l,{en:b.map((e,t)=>(0,V.jsx)(`span`,{className:`input-pips__group`,children:(0,V.jsx)(l,{en:Array.from({length:e},()=>{let e=x;x+=1;let t=e<u.length,n=e===f-1;return(0,V.jsx)(`span`,{className:`input-pip`,"data-filled":t||void 0,"data-last":n||void 0,"data-caret":o!==null&&o===e+1?``:void 0,children:(0,V.jsx)(l,{en:t?u[e]:``})},e)})})},t))})}),(0,V.jsx)(`p`,{className:`input-card__note`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`The last digit is a checksum of the others. A single typo, or two swapped neighbours, no longer adds up, so the field can say so before anything is sent.`})})}),(0,V.jsxs)(`p`,{className:`input-card__note input-card__note--quiet`,children:[(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Networks: `})}),(0,V.jsx)(l,{en:Object.values(i).map(e=>e.name).join(`, `)}),`.`]})]})]})}var Re={variant:`text`,state:`default`,size:`md`,hint:!0,lookup:`normal`},ze={fast:120,normal:1200,slow:3200};function Be(e){return e===`promo`||e===`code`?[`default`,`focus`,`error`,`disabled`]:[`default`,`focus`,`error`,`disabled`,`readonly`]}var Ve=(e,t)=>Be(e).includes(t)?t:`default`,He=e=>e.trim().split(/\s+/).filter(Boolean).length>=2?null:`Add your last name, as it appears on the card.`,Ue=e=>e.length>=8?null:`Use at least 8 characters. A short phrase works well.`,We=e=>e.length===6?null:`Enter the 6-digit code we sent to •••• 2048.`,H=e=>{let t=Number(e.replace(/,/g,``));return Number.isFinite(t)&&t>=50&&t<=5e3?null:`Enter an amount between $50 and $5,000.`},U={text:{label:`Full name`,component:`TextField`,name:`ShippingName`,hint:`As it appears on your card.`,placeholder:`Alex Morgan`,bad:`Alex`,error:He(`Alex`)??``,good:`Alex Morgan`,validate:He},password:{label:`Password`,component:`PasswordField`,name:`CreateAccount`,hint:`Use at least 8 characters.`,bad:`short`,error:Ue(`short`)??``,good:`correct-horse-battery`,validate:Ue},card:{label:`Card number`,component:`CardNumberField`,name:`CardNumber`,hint:`Checked on this device. Nothing is sent.`,bad:`4242 4242 4242 4241`,error:C(`4242424242424241`)??``,good:`4242 4242 4242 4242`,validate:C},promo:{label:`Promo code`,component:`PromoField`,name:`PromoCode`,hint:`Try WELCOME10, FREESHIP or SPRING.`,bad:`SPRING`,error:`This code expired on March 31. Try a newer one, or remove it.`,good:`WELCOME10`,validate:()=>null},code:{label:`Verification code`,component:`OtpField`,name:`VerifyIdentity`,hint:`Sent to •••• 2048.`,bad:`2468`,error:We(`2468`)??``,good:`246810`,validate:We},amount:{label:`Coverage amount`,component:`TextField`,name:`CoverageAmount`,hint:`Between $50 and $5,000.`,placeholder:`1,200`,bad:`20`,error:H(`20`)??``,good:`1,200`,validate:H},message:{label:`Note to the seller`,component:`TextField`,name:`OrderNote`,hint:`They see this with your order.`,placeholder:`Leave it at the front desk.`,bad:`Please leave the parcel with the neighbour.`,error:`Keep the note under 160 characters.`,good:`Please leave it at the front desk.`,validate:()=>null}},Ge=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { CardNumberField, OtpField, PasswordField, PromoField, TextField, useField } from '@zijie/ui';
`,Ke=e=>`'${e.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)}'`,W=e=>e.includes(`"`)?`{${JSON.stringify(e)}}`:`"${e}"`;function qe(e,t,n){let r=`${n}<${e} ${t.join(` `)} />`;return r.length<=76?r:`${n}<${e}\n${t.map(e=>`${n}  ${e}`).join(`
`)}\n${n}/>`}function Je(e){let t=U[e.variant],n=[`label=${W(t.label)}`];return e.hint&&n.push(`hint=${W(t.hint)}`),e.size!==`md`&&n.push(`size="${e.size}"`),n}var Ye={text:[`clearable`,`autoComplete="name"`],password:[`autoComplete="new-password"`],card:[],promo:[],code:[],amount:[`prefix="$"`,`suffix="USD"`,`format={wholeNumber(5)}`],message:[`multiline`,`counter`,`maxLength={160}`,`optional`]};function Xe(e){return e===`focus`?[`pinned="focus"`]:e===`disabled`?[`disabled`]:e===`readonly`?[`readOnly`]:[]}var Ze={amount:[`wholeNumber`],card:[`validateCardNumber`]},Qe={text:[`  const field = useField({`,`    validate: value => (`,`      value.trim().includes(' ') ? null : 'Add your last name, as it appears on the card.'`,`    ),`,`  });`],password:[`  const field = useField({`,`    validate: value => (`,`      value.length >= 8 ? null : 'Use at least 8 characters. A short phrase works well.'`,`    ),`,`  });`],card:[`  const field = useField({ validate: validateCardNumber, showValid: true });`],code:[`  const field = useField({`,`    validate: value => (`,`      value.length === 6 ? null : 'Enter the 6-digit code we sent to •••• 2048.'`,`    ),`,`    showValid: true,`,`  });`],amount:[`  const field = useField({`,`    validate: value => {`,`      const amount = Number(value.replace(/,/g, ''));`,`      return amount >= 50 && amount <= 5000 ? null : 'Enter an amount between $50 and $5,000.';`,`    },`,`  });`]};function G({react:e,ui:t,name:n,args:r=``,lines:i,tag:a,props:o}){let s=[...new Set(t)],c=e=>e.startsWith(`type `)?2:+!/^[A-Z]/.test(e);return s.sort((e,t)=>c(e)-c(t)||e.localeCompare(t)),[...e.length?[`import { ${e.join(`, `)} } from 'react';`]:[],`import { ${s.join(`, `)} } from '@zijie/ui';`,``,`export function ${n}(${r}) {`,...i,`  return (`,qe(a,o,`    `),`  );`,`}`,``].join(`
`)}function $e(e){let t=U[e.variant],n=e.state==="default"||e.state===`focus`,r=[...Je(e),...Ye[e.variant],...Xe(e.state)],i=e.state===`error`;if(e.variant===`promo`){let e=[...r];return i&&e.push(`error=${W(t.error)}`),e.push(`check={checkCode}`),n&&e.push(`onAppliedChange={setDiscount}`),G({react:n?[`useState`]:[],ui:[`PromoField`,`type PromoCheck`,...n?[`type PromoDiscount`]:[]],name:t.name,args:`{ checkCode }: { checkCode: PromoCheck }`,lines:n?[`  // Waits 160ms before a spinner, keeps it 320ms, and aborts a lookup that went stale.`,`  const [discount, setDiscount] = useState<PromoDiscount | null>(null);`]:[],tag:`PromoField`,props:e})}if(e.variant===`message`||!n){let n=e.state===`disabled`||e.state===`readonly`,a=[...r];if(n)return a.push(`value=${W(t.good)}`),G({react:[],ui:[t.component,...e.variant===`amount`?[`wholeNumber`]:[]],name:t.name,lines:[],tag:t.component,props:a});let o=e.variant===`message`?`setNote`:`setValue`,s=e.variant===`message`?`note`:`value`;return a.push(`value={${s}}`,`onChange={${o}}`),i&&a.push(`error=${W(t.error)}`),G({react:[`useState`],ui:[t.component,...e.variant===`amount`?[`wholeNumber`]:[]],name:t.name,lines:[`  const [${s}, ${o}] = useState(${i?Ke(t.bad):`''`});`],tag:t.component,props:a})}let a=[...r];return e.variant===`code`&&a.push(`onComplete={verify}`),a.push(`{...field.fieldProps}`),G({react:[],ui:[t.component,`useField`,...Ze[e.variant]??[]],name:t.name,args:e.variant===`code`?`{ verify }: { verify: (code: string) => void }`:``,lines:[`  // Quiet while typing. Checked on blur and submit. Live once it has failed.`,...Qe[e.variant]??[]],tag:t.component,props:a})}function K({component:e=`TextField`,label:t,props:n=[],value:r,error:i}){let a=[`label=${W(t)}`,...n];return r!==void 0&&a.push(`value=${W(r)}`),i&&a.push(`error=${W(i)}`),`${qe(e,a,``)}\n`}var q={style:`currency`,currency:`USD`},et=e=>new Intl.NumberFormat(`en-US`,q).format(e),tt=R(1100),nt=`246810`;function rt(e){let[n,r]=(0,L.useState)(null),i=a({validate:C,showValid:!0}),s=a({validate:e=>_(e),showValid:!0}),c=a({validate:e=>o(e,n),showValid:!0}),[u,f]=(0,L.useState)(null),[p,h]=(0,L.useState)(!0),[g,v]=(0,L.useState)(!1),[b,x]=(0,L.useState)(0),S=y(),{reset:w}=S,T=(0,L.useRef)(!1),O=Se(u,{withProtection:p}),k=[{label:`Card number`,field:i},{label:`Expiry`,field:s},{label:`CVC`,field:c}],ae=g?ie(k.map(({label:e,field:t})=>({label:e,error:t.error}))):``,A=S.busy||S.state===`success`;(0,L.useEffect)(()=>{e||w()},[e,w]),(0,L.useEffect)(()=>{S.state===`success`?T.current=!0:S.state===`idle`&&T.current&&(T.current=!1,i.reset(),s.reset(),c.reset(),f(null),v(!1),x(e=>e+1))},[S.state]);let oe=e=>{if(e.preventDefault(),A)return;let t=k.map(({label:e,field:t})=>({label:e,error:t.check()})),n=ee(t);n>=0?(k[n].field.focus(),v(!0)):(v(!1),S.run(te(1400)))},M=S.state===`waiting`||S.state===`loading`?`Confirming with your bank…`:S.state===`success`?`Paid. A receipt is on its way.`:ae;return{paymentCard:(0,V.jsx)(j,{className:`input-scene`,title:`Payment`,status:(0,V.jsx)(`span`,{className:`input-scene__line`,"data-tone":ae&&S.state===`idle`?`error`:void 0,children:(0,V.jsx)(l,{en:M})}),children:(0,V.jsxs)(`form`,{className:`input-scene__form`,noValidate:!0,onSubmit:oe,children:[(0,V.jsx)(D,{label:`Card number`,reserve:!0,readOnly:A,onBrandChange:r,...i.fieldProps}),(0,V.jsxs)(`div`,{className:`input-scene__pair`,children:[(0,V.jsx)(m,{label:`Expiry`,reserve:!0,readOnly:A,...s.fieldProps}),(0,V.jsx)(t,{label:`CVC`,brand:n,reserve:!0,readOnly:A,...c.fieldProps})]}),(0,V.jsx)(d,{label:`Promo code`,hint:`Try WELCOME10 or FREESHIP.`,reserve:!0,disabled:A,check:tt,applied:u,onAppliedChange:f},b),(0,V.jsx)(`div`,{className:`input-scene__actions`,children:(0,V.jsxs)(re,{type:`submit`,size:`lg`,state:S.state,announce:!1,children:[(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Pay `})}),(0,V.jsx)(E,{value:O.total,format:q})]})})]})}),summaryCard:(0,V.jsxs)(j,{className:`input-scene`,title:`Order summary`,children:[(0,V.jsxs)(`dl`,{className:`input-scene__rows`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Linen overshirt`})})}),(0,V.jsx)(`dd`,{children:(0,V.jsx)(l,{en:et(O.items)})})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Standard shipping`})})}),(0,V.jsx)(`dd`,{className:O.discount&&u?.code===`FREESHIP`?`input-scene__struck`:void 0,children:(0,V.jsx)(l,{en:et(O.shipping)})})]}),(0,V.jsxs)(`div`,{className:`input-scene__switch`,children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(ne,{label:`Shipping protection`,checked:p,onChange:h,disabled:A})}),(0,V.jsx)(`dd`,{children:(0,V.jsx)(E,{value:O.protection,format:q})})]}),(0,V.jsx)(l,{en:u&&O.discount>0&&(0,V.jsxs)(`div`,{className:`input-scene__promo`,children:[(0,V.jsxs)(`dt`,{children:[(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Promo `})}),(0,V.jsx)(l,{en:u.code})]}),(0,V.jsx)(`dd`,{children:(0,V.jsx)(E,{value:O.discount,format:e=>`−${et(e)}`})})]},u.code)}),(0,V.jsxs)(`div`,{className:`input-scene__total`,children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Total`})})}),(0,V.jsx)(`dd`,{children:(0,V.jsx)(E,{value:O.total,format:q})})]})]}),(0,V.jsx)(`p`,{className:`input-scene__note`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`The total follows the form. Apply a code and the row appears; remove it and the total settles back.`})})})]})}}function it({active:e}){let t=n(),r=a({validate:We,showValid:!0}),i=y({holdSuccess:0}),{reset:o}=i,[s,u]=(0,L.useState)(``),d=i.state===`error`,f=i.state===`success`,p=(0,L.useRef)(e);(0,L.useEffect)(()=>{p.current&&!e&&(o(),r.reset(),u(``)),p.current=e},[e,o]);let m=e=>{u(``),i.run(async({signal:t})=>{if(await te(900)({signal:t}),e!==nt)throw Error(`wrong code`)})},h=e=>{i.state!==`idle`&&o(),u(``),r.fieldProps.onChange(e)},g=e=>{e.preventDefault(),!(i.busy||f)&&(r.check()===null?m(r.value):r.focus())},_=()=>{o(),r.reset(),r.focus(),u(`A new code is on its way.`)},v=d?`That code is not right. Check the 6 digits we sent to •••• 2048, or send a new one.`:r.error??void 0,b=i.busy?`Checking the code…`:f?`Verified. Taking you back to checkout.`:s;return(0,V.jsx)(j,{className:`input-scene`,title:t({en:`Verify it’s you`}),label:t({en:`Verification`}),status:b,children:(0,V.jsxs)(`form`,{className:`input-scene__form`,noValidate:!0,onSubmit:g,children:[(0,V.jsx)(`p`,{className:`input-scene__note`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Your bank texted a 6-digit code. Paste it, or type it; the last digit sends it.`})})}),(0,V.jsx)(c,{label:t({en:`Verification code`}),hint:t({en:`Sent to •••• 2048. Try 246810.`}),group:3,reserve:!0,disabled:f,...r.fieldProps,error:v,valid:f,onChange:h,onComplete:m}),(0,V.jsxs)(`div`,{className:`input-scene__actions`,children:[(0,V.jsx)(x,{variant:`ghost`,type:`button`,onClick:_,disabled:f,children:t({en:`Send a new code`})}),(0,V.jsx)(x,{type:`submit`,state:i.visibleState===`error`?`idle`:i.visibleState,children:t({en:`Verify`})})]})]})})}function at(){let t=n(),r=a({initial:`1,200`,validate:H}),i=Number(r.value.replace(/,/g,``)),o=H(r.value)===null,s=o?Ce(i):null;return(0,V.jsx)(j,{className:`input-scene`,title:t({en:`Protect this order`}),label:t({en:`Coverage quote`}),children:(0,V.jsxs)(`div`,{className:`input-scene__form`,children:[(0,V.jsx)(w,{label:t({en:`Coverage amount`}),hint:t({en:`Between $50 and $5,000.`}),prefix:`$`,suffix:`USD`,inputMode:`numeric`,format:e(5),reserve:!0,...r.fieldProps}),(0,V.jsxs)(`div`,{className:`input-quote`,"data-ready":o||void 0,children:[(0,V.jsx)(`p`,{className:`input-quote__label`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Monthly premium`})})}),(0,V.jsx)(`p`,{className:`input-quote__value`,"aria-live":`polite`,children:(0,V.jsx)(l,{en:s===null?(0,V.jsx)(`span`,{className:`input-quote__empty`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Enter an amount`})})}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(E,{value:s,format:q}),(0,V.jsx)(`span`,{className:`input-quote__unit`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:` / month`})})})]})})})]})]})})}function ot(){let e=(0,L.useRef)(null),t=ce(e,{page:`input`}),{paymentCard:n,summaryCard:r}=rt(t);return(0,V.jsx)(`div`,{ref:e,"data-playback":t?`running`:`paused`,children:(0,V.jsxs)(_e,{children:[(0,V.jsxs)(`div`,{className:`input-context__column`,children:[(0,V.jsx)(l,{en:n}),(0,V.jsx)(at,{})]}),(0,V.jsxs)(`div`,{className:`input-context__column`,children:[(0,V.jsx)(l,{en:r}),(0,V.jsx)(it,{active:t})]})]})})}function st(){let e=n(),[t,r]=(0,L.useState)(``),i=[`Linen overshirt`,`Canvas tote bag`,`Gift card`].filter(e=>e.toLowerCase().includes(t.trim().toLowerCase())),a=t.trim()?i.length?`${i.length} ${i.length===1?`product`:`products`} to browse.`:`No matches. Try bag, shirt or gift card.`:``;return(0,V.jsxs)(`div`,{className:`input-live`,children:[(0,V.jsx)(w,{label:e({en:`Search products`}),placeholder:e({en:`Bag, shirt, gift card`}),prefix:(0,V.jsx)(T,{name:`search`,size:20}),clearable:!0,value:t,onChange:r,type:`search`,reserve:!0}),(0,V.jsx)(`p`,{className:`input-live__status`,role:`status`,children:(0,V.jsx)(l,{en:a})})]})}function ct(){let t=n(),[r,i]=(0,L.useState)(`1,200`);return(0,V.jsx)(w,{label:t({en:`Coverage amount`}),hint:t({en:`Between $50 and $5,000.`}),prefix:`$`,suffix:`USD`,inputMode:`numeric`,format:e(5),value:r,onChange:i,reserve:!0})}function lt(){let e=n(),[t,r]=(0,L.useState)(``);return(0,V.jsx)(w,{label:e({en:`ZIP code`}),hint:e({en:`Five digits.`}),inputMode:`numeric`,autoComplete:`postal-code`,format:u(5),value:t,onChange:r,placeholder:e({en:`94105`}),reserve:!0})}function ut(){let e=n(),[t,r]=(0,L.useState)(``);return(0,V.jsx)(w,{label:e({en:`Note to the seller`}),optional:!0,multiline:!0,rows:3,counter:!0,maxLength:160,value:t,onChange:r,placeholder:e({en:`Leave it at the front desk.`})})}function dt(){let e=n(),[r,i]=(0,L.useState)(``),[a,o]=(0,L.useState)(``),[s,c]=(0,L.useState)(``),[l,u]=(0,L.useState)(null);return(0,V.jsxs)(`div`,{className:`input-pair`,children:[(0,V.jsx)(`div`,{className:`input-pair__wide`,children:(0,V.jsx)(D,{label:e({en:`Card number`}),value:r,onChange:i,onBrandChange:u,reserve:!0})}),(0,V.jsx)(m,{label:e({en:`Expiry`}),value:a,onChange:o,reserve:!0}),(0,V.jsx)(t,{label:e({en:`CVC`}),brand:l,value:s,onChange:c,reserve:!0})]})}var ft=R(1200);function pt(){let e=n();return(0,V.jsxs)(he,{columns:3,children:[(0,V.jsx)(I,{title:e({en:`Search`}),interactive:!0,note:`The clear button appears only while there is something to clear.`,inspect:{code:K({label:`Search products`,props:[`prefix={<Icon name="search" />}`,`clearable`,`type="search"`,`value={query}`,`onChange={setQuery}`]})},children:(0,V.jsx)(st,{})}),(0,V.jsx)(I,{title:e({en:`Amount`}),interactive:!0,note:`Separators appear as you type. The caret stays after the same digit.`,inspect:{code:K({label:`Coverage amount`,props:[`hint="Between $50 and $5,000."`,`prefix="$"`,`suffix="USD"`,`format={wholeNumber(5)}`,`value={value}`,`onChange={setValue}`]})},children:(0,V.jsx)(ct,{})}),(0,V.jsx)(I,{title:e({en:`ZIP code`}),interactive:!0,note:`Digits only, five long. Letters never land.`,inspect:{code:K({label:`ZIP code`,props:[`hint="Five digits."`,`inputMode="numeric"`,`autoComplete="postal-code"`,`format={digitsOnly(5)}`,`value={zip}`,`onChange={setZip}`]})},children:(0,V.jsx)(lt,{})}),(0,V.jsx)(I,{title:e({en:`Password`}),interactive:!0,note:`One steady name, “Show password”. aria-pressed says whether it is on.`,inspect:{code:K({component:`PasswordField`,label:`Password`,props:[`hint="Use at least 8 characters."`,`autoComplete="new-password"`,`{...password.fieldProps}`]})},children:(0,V.jsx)(b,{label:e({en:`Password`}),hint:e({en:`Use at least 8 characters.`}),autoComplete:`new-password`,defaultValue:`correct-horse`,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Message`}),interactive:!0,note:`The count is read out after a pause, not on every key.`,inspect:{code:K({label:`Note to the seller`,props:[`optional`,`multiline`,`counter`,`maxLength={160}`,`value={note}`,`onChange={setNote}`]})},children:(0,V.jsx)(ut,{})}),(0,V.jsx)(I,{title:e({en:`Card details`}),interactive:!0,note:`Number, expiry and code. The code follows the network.`,inspect:{code:`${K({component:`CardNumberField`,label:`Card number`,props:[`onBrandChange={setBrand}`,`{...card.fieldProps}`]})}${K({component:`ExpiryField`,label:`Expiry`,props:[`{...expiry.fieldProps}`]})}${K({component:`CvcField`,label:`CVC`,props:[`brand={brand}`,`{...cvc.fieldProps}`]})}`},children:(0,V.jsx)(dt,{})}),(0,V.jsx)(I,{title:e({en:`Promo code`}),interactive:!0,span:2,note:`Try WELCOME10, FREESHIP or SPRING.`,inspect:{code:K({component:`PromoField`,label:`Promo code`,props:[`hint="Try WELCOME10."`,`check={checkCode}`,`onAppliedChange={setDiscount}`]})},children:(0,V.jsx)(d,{hint:e({en:`Try WELCOME10.`}),check:ft,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Verification code`}),interactive:!0,note:`Paste all six digits at once.`,inspect:{code:K({component:`OtpField`,label:`Verification code`,props:[`hint="Sent to •••• 2048."`,`onComplete={verify}`,`{...code.fieldProps}`]})},children:(0,V.jsx)(c,{label:e({en:`Verification code`}),hint:e({en:`Sent to •••• 2048.`}),group:3,reserve:!0})})]})}var mt=`import {
  useEffect, useLayoutEffect, useRef, useState,
  type ChangeEvent, type ComponentPropsWithoutRef, type CSSProperties, type FocusEvent, type ReactNode, type Ref,
} from 'react';
import { Icon } from '../Icon';
import { remainingAnnouncement } from './validation';
import type { Formatter } from './format';
import {
  CheckMark, FieldLabel, FieldMessage, FieldTool, describedBy, useFieldIds, useMergedRef,
  type FieldChrome,
} from './chrome';

export interface TextFieldLabels {
  clear: string;
  optional: string;
}

export const textFieldLabels: Readonly<TextFieldLabels> = Object.freeze({ clear: 'Clear', optional: 'Optional' });

type NativeInput = Omit<
  ComponentPropsWithoutRef<'input'>,
  'size' | 'prefix' | 'value' | 'defaultValue' | 'onChange' | 'onBlur' | 'children' | 'style' | 'className' | 'id' | 'aria-invalid'
>;

export type TextFieldProps = NativeInput & FieldChrome & {
  id?: string;
  value?: string;
  defaultValue?: string;
  /** The new value. Controlled or not, this fires once per change, formatted if \`format\` is set. */
  onChange?: (value: string) => void;
  /** The focus has left the whole field (not just moved to its clear button). Validate here. */
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
  ref?: Ref<HTMLInputElement | HTMLTextAreaElement>;
  /** Text before the value: "$", "zijiez.com/". Read as part of the field's description. */
  prefix?: ReactNode;
  /** Text after the value: "USD", "/ month". */
  suffix?: ReactNode;
  /** A button that empties the field. It appears only while there is something to clear. */
  clearable?: boolean;
  /** Show "n / maxLength" and announce the remaining count after a pause. Needs \`maxLength\`. */
  counter?: boolean;
  /** A textarea. Pair it with \`counter\`. */
  multiline?: boolean;
  rows?: number;
  /** Caret-preserving formatter: see formatCardNumberEdit, formatExpiry, digitsOnly. */
  format?: Formatter;
  /** Content for the end of the shell, before the clear button (a brand badge, a custom action). */
  end?: ReactNode;
  /** A quiet progress line along the bottom edge, 0 to 1 (the card number). */
  progress?: number;
  labels?: Partial<TextFieldLabels>;
};

/** Pause before the remaining count is read out, so a screen reader is not told every keystroke. */
const COUNT_PAUSE = 1000;

/**
 * A labelled text field. The label is always visible; the message line is one persistent live
 * region that turns from hint to error without moving \`aria-describedby\`. The focus ring settles
 * around the whole shell, so prefix, value, suffix and tools read as one control.
 */
export function TextField({
  label, hint, error, success, valid, optional, size = 'md', reserve, pinned, className = '', style, id,
  value, defaultValue, onChange, onBlur, ref, prefix, suffix, clearable = false, counter = false, multiline = false,
  rows = 4, format, end, progress, labels, disabled, readOnly, maxLength, type = 'text', ...rest
}: TextFieldProps) {
  const ids = useFieldIds(id);
  const text = { ...textFieldLabels, ...labels };
  const controlled = value !== undefined;
  const [inner, setInner] = useState(defaultValue ?? '');
  const current = controlled ? value : inner;
  const node = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const setRef = useMergedRef(node, ref);
  const pendingCaret = useRef<number | null>(null);

  const applyCaret = () => {
    const element = node.current;
    const at = pendingCaret.current;
    pendingCaret.current = null;
    if (at === null || !element || document.activeElement !== element) return;
    try { element.setSelectionRange(at, at); } catch { /* some input types have no selection */ }
  };
  // The new value lands in the DOM during this render; put the caret back before it paints.
  useLayoutEffect(applyCaret);

  const commit = (next: string) => {
    if (!controlled) setInner(next);
    onChange?.(next);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    let next = target.value;
    // An input method mid-composition owns the text; format it once the composition lands.
    if (format && !(event.nativeEvent as InputEvent).isComposing) {
      const kind = (event.nativeEvent as InputEvent).inputType ?? '';
      const result = format({
        previous: current,
        next,
        caret: target.selectionStart ?? next.length,
        deleting: kind === 'deleteContentBackward' ? 'backward' : kind === 'deleteContentForward' ? 'forward' : null,
      });
      next = result.value;
      pendingCaret.current = result.caret;
      // When the formatted value equals the old one nothing re-renders; React restores the DOM
      // value after this handler, so set the caret once that has happened.
      queueMicrotask(applyCaret);
    }
    commit(next);
  };

  // An uncontrolled field follows its form's reset, like a native input.
  useEffect(() => {
    const form = node.current?.form;
    if (!form || controlled) return;
    const reset = () => queueMicrotask(() => setInner(defaultValue ?? ''));
    form.addEventListener('reset', reset);
    return () => form.removeEventListener('reset', reset);
  }, [controlled, defaultValue]);

  const length = current.length;
  const showCounter = counter && typeof maxLength === 'number';
  const [spoken, setSpoken] = useState('');
  useEffect(() => {
    if (!showCounter) return;
    const timer = setTimeout(() => setSpoken(remainingAnnouncement(length, maxLength)), COUNT_PAUSE);
    return () => clearTimeout(timer);
  }, [showCounter, length, maxLength]);

  const invalid = !!error;
  const filled = current !== '';
  const canClear = clearable && !disabled && !readOnly;
  const message = error || success || hint;
  const stringAffix = (node: ReactNode) => typeof node === 'string' || typeof node === 'number';
  const described = describedBy(
    rest['aria-describedby'],
    stringAffix(prefix) && ids.prefix,
    stringAffix(suffix) && ids.suffix,
    !!message && ids.message,
  );

  const clear = () => {
    commit('');
    node.current?.focus();
  };

  const controlProps = {
    ...rest,
    id: ids.id,
    className: 'z-field__input',
    value: current,
    disabled,
    readOnly,
    maxLength,
    'aria-invalid': invalid || undefined,
    'aria-describedby': described,
    onChange: handleChange,
  };
  const control = multiline
    ? <textarea {...(controlProps as ComponentPropsWithoutRef<'textarea'>)} ref={setRef as Ref<HTMLTextAreaElement>} rows={rows} />
    : <input {...controlProps} ref={setRef as Ref<HTMLInputElement>} type={type} />;

  return (
    <div
      className={\`z-field\${className ? \` \${className}\` : ''}\`}
      style={style}
      data-size={size}
      data-invalid={invalid || undefined}
      data-valid={(valid && !invalid) || undefined}
      data-success={(!!success && !invalid) || undefined}
      data-disabled={disabled || undefined}
      data-readonly={readOnly || undefined}
      data-filled={filled || undefined}
      data-multiline={multiline || undefined}
      data-pinned={pinned}
    >
      <FieldLabel htmlFor={ids.id} label={label} optional={optional} optionalLabel={text.optional} />
      <div
        className="z-field__shell"
        style={progress === undefined ? undefined : ({ '--z-field-progress': Math.min(1, Math.max(0, progress)) } as CSSProperties)}
        onMouseDown={event => {
          // A press on the padding, prefix or suffix lands in the field, as a label would.
          const target = event.target as HTMLElement;
          if (target === node.current || target.closest('button')) return;
          event.preventDefault();
          node.current?.focus();
        }}
        onBlur={event => {
          if (event.relatedTarget instanceof Node && event.currentTarget.contains(event.relatedTarget)) return;
          onBlur?.(event);
        }}
      >
        {prefix !== undefined && prefix !== null && <span id={ids.prefix} className="z-field__affix z-field__affix--start">{prefix}</span>}
        {control}
        {((suffix !== undefined && suffix !== null) || end || valid || readOnly || canClear) && (
          <span className="z-field__end">
            {suffix !== undefined && suffix !== null && <span id={ids.suffix} className="z-field__affix z-field__affix--end">{suffix}</span>}
            {end}
            {valid && !invalid && <CheckMark key="valid" />}
            {readOnly && !disabled && !success && <span className="z-field__lock" aria-hidden="true"><Icon name="lock" size={16} /></span>}
            {canClear && (
              <FieldTool label={\`\${text.clear} \${label}\`} icon="x-circle" hidden={!filled} onClick={clear} />
            )}
          </span>
        )}
        {progress !== undefined && <span className="z-field__progress" aria-hidden="true" />}
      </div>
      <FieldMessage id={ids.message} hint={hint} error={error} success={success} reserve={reserve}>
        {showCounter && (
          <>
            <span
              className="z-field__counter"
              aria-hidden="true"
              data-near={length >= maxLength * 0.9 || undefined}
              data-full={length >= maxLength || undefined}
            >
              {length} / {maxLength}
            </span>
            <span className="z-sr-only" role="status">{spoken}</span>
          </>
        )}
      </FieldMessage>
    </div>
  );
}
`,ht=`import { useEffect, useRef, useState } from 'react';
import { FieldTool, useMergedRef } from './chrome';
import { TextField, type TextFieldProps } from './TextField';

export interface PasswordFieldLabels {
  /** The toggle's accessible name. It never changes; \`aria-pressed\` carries the state. */
  reveal: string;
}

export const passwordFieldLabels: Readonly<PasswordFieldLabels> = Object.freeze({ reveal: 'Show password' });

export type PasswordFieldProps = Omit<TextFieldProps, 'type' | 'multiline' | 'format' | 'clearable' | 'labels'> & {
  /** Reveal state, if you want to control it. */
  revealed?: boolean;
  onRevealedChange?: (revealed: boolean) => void;
  labels?: Partial<PasswordFieldLabels> & TextFieldProps['labels'];
};

/**
 * A password field with a show/hide toggle. The toggle keeps one accessible name ("Show password")
 * and reports its state with \`aria-pressed\`, so a screen reader hears "pressed" rather than a new
 * button. The password is masked again when the form resets.
 */
export function PasswordField({ revealed, onRevealedChange, labels, ref, end, ...props }: PasswordFieldProps) {
  const text = { ...passwordFieldLabels, ...labels };
  const [inner, setInner] = useState(false);
  const shown = revealed ?? inner;
  const node = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const setRef = useMergedRef(node, ref);
  const set = (next: boolean) => {
    if (revealed === undefined) setInner(next);
    onRevealedChange?.(next);
  };

  useEffect(() => {
    const form = node.current?.form;
    if (!form) return;
    const mask = () => queueMicrotask(() => { if (revealed === undefined) setInner(false); onRevealedChange?.(false); });
    form.addEventListener('reset', mask);
    return () => form.removeEventListener('reset', mask);
  }, [revealed, onRevealedChange]);

  return (
    <TextField
      autoComplete="current-password"
      autoCapitalize="none"
      spellCheck={false}
      {...props}
      ref={setRef}
      type={shown ? 'text' : 'password'}
      labels={labels}
      end={(
        <>
          {end}
          <FieldTool
            label={text.reveal}
            icon={shown ? 'eye-slash' : 'eye'}
            pressed={shown}
            disabled={props.disabled}
            onClick={() => set(!shown)}
          />
        </>
      )}
    />
  );
}
`,gt=`import { useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import { cardLength, cvcLength, detectCardBrand, formatCardNumberEdit, type CardBrand } from './card';
import { digitsOf, digitsOnly, formatExpiry } from './format';
import { TextField, type TextFieldProps } from './TextField';

type Preset = 'type' | 'inputMode' | 'autoComplete' | 'format' | 'multiline' | 'clearable' | 'prefix' | 'suffix' | 'counter' | 'progress';

/** The card's network, as a small chip that turns in when it is recognised. */
function BrandBadge({ brand }: { brand: CardBrand | null }) {
  return (
    <span className="z-field__brand" data-brand={brand?.id ?? 'none'}>
      <span key={brand?.id ?? 'none'} className="z-field__brand-mark" aria-hidden="true">
        {brand ? <span className="z-field__brand-name">{brand.name}</span> : <Icon name="credit-card" size={20} />}
      </span>
      {/* Announced once when the network is recognised; the chip itself is decorative. */}
      <span className="z-sr-only" role="status">{brand ? \`\${brand.name} card\` : ''}</span>
    </span>
  );
}

export type CardNumberFieldProps = Omit<TextFieldProps, Preset | 'end' | 'defaultValue'> & {
  defaultValue?: string;
  /** Fires when the recognised network changes, so a sibling security-code field can follow it. */
  onBrandChange?: (brand: CardBrand | null) => void;
};

/**
 * Card number: grouped as you type (4-4-4-4, or 4-6-5 for American Express) with the caret kept
 * after the digit it was after, the network recognised from the first digits, and a quiet progress
 * line toward the full length. It formats and checks; it never sends the number anywhere.
 */
export function CardNumberField({ onBrandChange, value, defaultValue, onChange, error, ...props }: CardNumberFieldProps) {
  // The badge and the progress line follow the value, so this field always holds it itself.
  const [inner, setInner] = useState(defaultValue ?? '');
  const current = value ?? inner;
  const brand = detectCardBrand(current);
  const previous = useRef<string | null>(brand?.id ?? null);
  useEffect(() => {
    if ((brand?.id ?? null) === previous.current) return;
    previous.current = brand?.id ?? null;
    onBrandChange?.(brand);
  }, [brand, onBrandChange]);
  const digits = digitsOf(current).length;
  return (
    <TextField
      placeholder="1234 1234 1234 1234"
      {...props}
      value={current}
      error={error}
      type="text"
      inputMode="numeric"
      autoComplete="cc-number"
      spellCheck={false}
      format={formatCardNumberEdit}
      progress={error ? 0 : Math.min(1, digits / cardLength(brand))}
      onChange={next => { if (value === undefined) setInner(next); onChange?.(next); }}
      end={<BrandBadge brand={brand} />}
    />
  );
}

export type ExpiryFieldProps = Omit<TextFieldProps, Preset>;

/** Expiry as MM/YY: "4" becomes "04/", the slash appears when the month is done. */
export function ExpiryField(props: ExpiryFieldProps) {
  return (
    <TextField
      placeholder="MM/YY"
      {...props}
      type="text"
      inputMode="numeric"
      autoComplete="cc-exp"
      spellCheck={false}
      format={formatExpiry}
    />
  );
}

export type CvcFieldProps = Omit<TextFieldProps, Preset> & {
  /** The card's network: American Express codes have four digits, the rest three. */
  brand?: CardBrand | null;
};

/** The security code. Digits only, as long as the card's network says. */
export function CvcField({ brand = null, ...props }: CvcFieldProps) {
  const length = cvcLength(brand);
  return (
    <TextField
      placeholder={length === 4 ? '1234' : '123'}
      {...props}
      type="text"
      inputMode="numeric"
      autoComplete="cc-csc"
      spellCheck={false}
      format={digitsOnly(length)}
    />
  );
}

`,_t=`import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { usePress } from '../../motion/usePress';
import { useAsyncAction } from '../../motion/useAsyncAction';
import { Icon } from '../Icon';
import { useMergedRef } from './chrome';
import { formatPromoCode } from './format';
import { TextField, type TextFieldProps } from './TextField';

export interface PromoDiscount {
  code: string;
  /** What the code is worth, in a few words: "10% off", "Free shipping". */
  label: string;
}

export type PromoOutcome = { ok: true; discount: PromoDiscount } | { ok: false; reason: string };

/** Checks a code with your backend. Honour \`signal\`: editing the code or leaving the page aborts it. */
export type PromoCheck = (code: string, context: { signal: AbortSignal }) => Promise<PromoOutcome>;

export type PromoPhase = 'idle' | 'applying' | 'applied' | 'invalid';

export interface PromoFieldLabels {
  apply: string;
  remove: string;
  /** Said after the code: "WELCOME10 applied". */
  applied: string;
  removed: string;
  checking: string;
  placeholder: string;
  /** Shown when Apply is pressed with nothing typed. */
  empty: string;
  /** A failed request, as opposed to a code that was refused. */
  failed: string;
  optional: string;
}

export const promoFieldLabels: Readonly<PromoFieldLabels> = Object.freeze({
  apply: 'Apply',
  remove: 'Remove',
  applied: 'applied',
  removed: 'Promo code removed.',
  checking: 'Checking',
  placeholder: 'Enter code',
  empty: 'Enter a promo code, then press Apply.',
  failed: 'We could not check that code. Check your connection and try again.',
  optional: 'Optional',
});

/** A refusal with a reason a person can act on. */
class PromoRejected extends Error {}

export type PromoFieldProps = Omit<
  TextFieldProps,
  'value' | 'defaultValue' | 'onChange' | 'end' | 'readOnly' | 'format' | 'clearable' | 'type' | 'multiline' | 'success' | 'valid' | 'prefix' | 'suffix' | 'counter' | 'progress' | 'labels' | 'label'
> & {
  label?: string;
  /** Looks the code up. It is the only async part: the field owns waiting, refusing and applying. */
  check: PromoCheck;
  /** The typed code, if you want to control it (a "try this code" chip). */
  value?: string;
  onChange?: (code: string) => void;
  /** The applied discount, if you want to control it. */
  applied?: PromoDiscount | null;
  onAppliedChange?: (discount: PromoDiscount | null) => void;
  onPhaseChange?: (phase: PromoPhase) => void;
  labels?: Partial<PromoFieldLabels>;
};

function ApplyButton({ applied, busy, labels, onClick, disabled }: { applied: boolean; busy: boolean; labels: PromoFieldLabels; onClick: () => void; disabled?: boolean }) {
  const { pressProps } = usePress({ disabled: busy || disabled });
  return (
    <button
      type="button"
      className="z-field__action"
      data-phase={busy ? 'busy' : applied ? 'applied' : 'idle'}
      data-pressed={pressProps['data-pressed']}
      disabled={disabled}
      aria-disabled={busy || undefined}
      aria-busy={busy || undefined}
      onClick={() => { if (!busy) onClick(); }}
      onPointerDown={pressProps.onPointerDown}
      onPointerUp={pressProps.onPointerUp}
      onPointerLeave={pressProps.onPointerLeave}
      onPointerCancel={pressProps.onPointerCancel}
      onKeyDown={pressProps.onKeyDown}
      onKeyUp={pressProps.onKeyUp}
      onBlur={pressProps.onBlur}
    >
      {/* Both labels sit in one grid cell, so the button keeps the width of the longer one. */}
      <span className="z-field__action-label">
        <span aria-hidden={applied || undefined} data-on={!applied || undefined}>{labels.apply}</span>
        <span aria-hidden={!applied || undefined} data-on={applied || undefined}>{labels.remove}</span>
      </span>
      <span className="z-field__action-busy" aria-hidden="true"><span className="z-spinner" /></span>
    </button>
  );
}

/**
 * A promo code field with an honest check. Apply waits through \`useAsyncAction\` (nothing for 160ms,
 * then a spinner for at least 320ms), then either the code is applied (the field turns to a receipt
 * with the discount, and Apply becomes Remove) or it is refused with the reason. Editing a refused
 * code clears the stale reason at once.
 */
export function PromoField({
  label = 'Promo code', check, value, onChange, applied, onAppliedChange, onPhaseChange, labels, error, hint, disabled, ref, ...props
}: PromoFieldProps) {
  const text = { ...promoFieldLabels, ...labels };
  const [typed, setTyped] = useState('');
  const code = value ?? typed;
  const [kept, setKept] = useState<PromoDiscount | null>(null);
  const discount = applied === undefined ? kept : applied;
  const [empty, setEmpty] = useState(false);
  const [removedNote, setRemovedNote] = useState(false);
  const action = useAsyncAction({ holdSuccess: 0 });
  const { reset } = action;
  const result = useRef<PromoDiscount | null>(null);
  const input = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const setRef = useMergedRef(input, ref);

  const setCode = (next: string) => {
    if (value === undefined) setTyped(next);
    onChange?.(next);
  };
  const setDiscount = (next: PromoDiscount | null) => {
    if (applied === undefined) setKept(next);
    onAppliedChange?.(next);
  };

  // The code was edited: whatever was said about the old one is stale.
  const edit = (next: string) => {
    setCode(next);
    setEmpty(false);
    setRemovedNote(false);
    reset();
  };

  const apply = () => {
    if (!code) { setEmpty(true); input.current?.focus(); return; }
    setEmpty(false);
    void action.run(async ({ signal }) => {
      const outcome = await check(code, { signal });
      if (!outcome.ok) throw new PromoRejected(outcome.reason);
      result.current = outcome.discount;
    });
  };

  // The loader has been honest for its minimum: now the receipt appears.
  useEffect(() => {
    if (action.state !== 'success' || !result.current) return;
    const next = result.current;
    result.current = null;
    setDiscount(next);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action.state]);

  const remove = () => {
    setDiscount(null);
    setCode('');
    setRemovedNote(true);
    input.current?.focus();
  };

  const refused = action.state === 'error'
    ? (action.error instanceof PromoRejected ? action.error.message : text.failed)
    : null;
  const shownError = error ?? refused ?? (empty ? text.empty : null);
  const applying = action.busy;
  const phase: PromoPhase = discount ? 'applied' : applying ? 'applying' : shownError ? 'invalid' : 'idle';
  const lastPhase = useRef<PromoPhase>(phase);
  useEffect(() => {
    if (lastPhase.current === phase) return;
    lastPhase.current = phase;
    onPhaseChange?.(phase);
  }, [phase, onPhaseChange]);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    // Enter applies the code; it never submits the payment form around it.
    event.preventDefault();
    if (!discount && !applying) apply();
  };

  return (
    <TextField
      autoComplete="off"
      autoCapitalize="characters"
      spellCheck={false}
      placeholder={text.placeholder}
      {...props}
      ref={setRef}
      label={label}
      hint={applying ? \`\${text.checking} \${code}…\` : removedNote ? text.removed : hint}
      error={discount ? null : shownError}
      success={discount ? \`\${discount.code} \${text.applied}: \${discount.label}.\` : undefined}
      value={discount ? discount.code : code}
      readOnly={!!discount}
      disabled={disabled}
      format={formatPromoCode}
      onChange={edit}
      onKeyDown={onKeyDown}
      end={(
        <>
          {discount && <span key={discount.code} className="z-promo__chip"><Icon name="ticket" size={16} />{discount.label}</span>}
          <ApplyButton applied={!!discount} busy={applying} labels={text} disabled={disabled} onClick={discount ? remove : apply} />
        </>
      )}
    />
  );
}
`,vt=`import { useEffect, useRef, useState, type ChangeEvent, type CSSProperties, type FocusEvent, type KeyboardEvent, type Ref } from 'react';
import { animate } from '../../motion/animate';
import { EASE_OUT } from '../../motion/easing';
import { CheckMark, FieldLabel, FieldMessage, describedBy, useFieldIds, useMergedRef, type FieldChrome } from './chrome';
import { digitsOf } from './format';

export interface OtpFieldLabels {
  optional: string;
}

export type OtpFieldProps = Omit<FieldChrome, 'success'> & {
  id?: string;
  name?: string;
  /** Digits in the code. */
  length?: number;
  /** Start a new group of cells after this many (3 for 123 456). 0 keeps one row. */
  group?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Fires once, when the last digit lands (typed or pasted). */
  onComplete?: (value: string) => void;
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  ref?: Ref<HTMLInputElement>;
  'aria-describedby'?: string;
  labels?: Partial<OtpFieldLabels>;
};

/**
 * A one-time code. One real input carries the value, autofill (\`one-time-code\`) and paste; the
 * cells are a picture of it. The caret stays after the last digit, the active cell shows where the
 * next digit lands, and a wrong code nudges the row once.
 */
export function OtpField({
  label, hint, error, valid, optional, size = 'md', reserve, pinned, className = '', style, id, name, length = 6,
  group = 0, value, defaultValue, onChange, onComplete, onBlur, disabled, autoFocus, ref, labels, ...rest
}: OtpFieldProps) {
  const ids = useFieldIds(id);
  const optionalLabel = labels?.optional ?? 'Optional';
  const controlled = value !== undefined;
  const [inner, setInner] = useState(digitsOf(defaultValue ?? '').slice(0, length));
  const current = (controlled ? value : inner).slice(0, length);
  const node = useRef<HTMLInputElement | null>(null);
  const setRef = useMergedRef(node, ref);
  const cells = useRef<HTMLDivElement>(null);

  const toEnd = () => {
    const input = node.current;
    if (!input || input.selectionStart !== input.selectionEnd || input.selectionStart === input.value.length) return;
    input.setSelectionRange(input.value.length, input.value.length);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = digitsOf(event.target.value).slice(0, length);
    if (!controlled) setInner(next);
    onChange?.(next);
    if (next.length === length && current.length !== length) onComplete?.(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // The caret lives after the last digit; the cells have no arrow-key positions.
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key) && !event.shiftKey) event.preventDefault();
  };

  // A wrong code nudges the row once. Reduced motion shows the error without it.
  const hadError = useRef(!!error);
  useEffect(() => {
    if (error && !hadError.current) {
      animate(cells.current, [
        { translate: '0 0' }, { translate: '-6px 0', offset: .2 }, { translate: '5px 0', offset: .45 },
        { translate: '-3px 0', offset: .7 }, { translate: '0 0' },
      ], { duration: 320, easing: EASE_OUT, fill: 'none' });
    }
    hadError.current = !!error;
  }, [error]);

  // Form reset empties an uncontrolled code.
  useEffect(() => {
    const form = node.current?.form;
    if (!form || controlled) return;
    const reset = () => queueMicrotask(() => setInner(digitsOf(defaultValue ?? '').slice(0, length)));
    form.addEventListener('reset', reset);
    return () => form.removeEventListener('reset', reset);
  }, [controlled, defaultValue, length]);

  const message = error || hint;
  const complete = current.length === length;
  const active = Math.min(current.length, length - 1);
  const gapAfter = group > 0 && group < length ? group : 0;

  return (
    <div
      className={\`z-field z-otp\${className ? \` \${className}\` : ''}\`}
      style={{ ...style, '--z-otp-length': length, '--z-otp-group': gapAfter > 0 ? '12px' : '0px' } as CSSProperties}
      data-size={size}
      data-invalid={!!error || undefined}
      data-valid={(valid && !error) || undefined}
      data-disabled={disabled || undefined}
      data-complete={complete || undefined}
      data-pinned={pinned}
    >
      <FieldLabel htmlFor={ids.id} label={label} optional={optional} optionalLabel={optionalLabel} />
      <div
        ref={cells}
        className="z-otp__cells"
        onMouseDown={event => {
          if (event.target !== node.current) { event.preventDefault(); node.current?.focus(); }
        }}
        onBlur={event => {
          if (event.relatedTarget instanceof Node && event.currentTarget.contains(event.relatedTarget)) return;
          onBlur?.(event);
        }}
      >
        <input
          aria-describedby={describedBy(rest['aria-describedby'], !!message && ids.message)}
          ref={setRef}
          id={ids.id}
          name={name}
          className="z-otp__input"
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9]*"
          spellCheck={false}
          autoCapitalize="none"
          autoFocus={autoFocus}
          disabled={disabled}
          value={current}
          aria-invalid={!!error || undefined}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onSelect={toEnd}
          onFocus={toEnd}
        />
        {Array.from({ length }, (_, index) => {
          const digit = current[index] ?? '';
          return (
            <span
              key={index}
              className="z-otp__cell"
              aria-hidden="true"
              data-filled={digit ? '' : undefined}
              data-active={index === active || undefined}
              data-gap={gapAfter > 0 && index === gapAfter - 1 || undefined}
            >
              {digit
                ? <span key={digit} className="z-otp__digit" style={{ '--z-otp-i': index } as CSSProperties}>{digit}</span>
                : index === active && <span className="z-otp__caret" />}
            </span>
          );
        })}
      </div>
      <FieldMessage id={ids.message} hint={hint} error={error} reserve={reserve}>
        {valid && !error && <CheckMark key="valid" className="z-field__check z-otp__check" />}
      </FieldMessage>
    </div>
  );
}
`,yt=`/* Internal to the Input family: the label, message, tools and ids every field shares.
   Not re-exported by index.ts. */
import { useCallback, useId, useState, type CSSProperties, type ReactNode, type Ref, type MouseEvent } from 'react';
import { Icon, type IconName } from '../Icon';
import { usePress } from '../../motion/usePress';

export type FieldSize = 'sm' | 'md' | 'lg';

/** What every field in the family accepts, so a form reads the same wherever it is used. */
export interface FieldChrome {
  label: string;
  /** Guidance shown under the field until there is something to say about the value. */
  hint?: string;
  /** What is wrong and how to fix it. Replaces the hint; announced politely. */
  error?: string | null;
  /** A positive message ("WELCOME10 applied"). Lower priority than an error. */
  success?: string;
  /** Checked clean: a drawn check at the end of the field. */
  valid?: boolean;
  /** Marks the label "Optional". Required is the default; do not mark it. */
  optional?: boolean;
  size?: FieldSize;
  /** Keep the message line's height even when it is empty, so an error never moves the form. */
  reserve?: boolean;
  /** Draw a state without interaction (docs and design review). */
  pinned?: 'focus' | 'hover';
  className?: string;
  style?: CSSProperties;
}

export function useFieldIds(id?: string) {
  const generated = useId();
  const base = id || generated;
  return { id: base, message: \`\${base}-message\`, prefix: \`\${base}-prefix\`, suffix: \`\${base}-suffix\`, count: \`\${base}-count\` };
}

/** Keep a local handle on an element while honouring the caller's ref (object or callback). */
export function useMergedRef<T>(own: { current: T | null }, forwarded: Ref<T> | undefined) {
  return useCallback((element: T | null) => {
    own.current = element;
    if (typeof forwarded === 'function') forwarded(element);
    else if (forwarded) (forwarded as { current: T | null }).current = element;
  }, [own, forwarded]);
}

export function describedBy(...ids: (string | false | null | undefined)[]): string | undefined {
  const value = ids.filter(Boolean).join(' ');
  return value || undefined;
}

/** A check that draws itself. Remount (key) to draw it again. */
export function CheckMark({ className = 'z-field__check' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
      <circle className="z-field__check-disc" cx="10" cy="10" r="9" />
      <path className="z-field__check-path" d="M6 10.4 8.9 13.2 14 7.4" pathLength="1" />
    </svg>
  );
}

export function FieldLabel({ htmlFor, id, label, optional, optionalLabel }: { htmlFor: string; id?: string; label: string; optional?: boolean; optionalLabel: string }) {
  return (
    <label className="z-field__label" id={id} htmlFor={htmlFor}>
      {label}
      {optional && <span className="z-field__optional"> {optionalLabel}</span>}
    </label>
  );
}

/**
 * The message line under a field: one persistent polite live region, so a hint turning into an error
 * is announced and \`aria-describedby\` never has to change. The text remounts when it changes, which
 * replays the small entrance.
 */
export function FieldMessage({ id, hint, error, success, reserve, children }: {
  id: string;
  hint?: string;
  error?: string | null;
  success?: string;
  reserve?: boolean;
  children?: ReactNode;
}) {
  const tone = error ? 'error' : success ? 'success' : 'hint';
  const text = error || success || hint || '';
  return (
    <div className="z-field__foot" data-reserve={reserve || undefined}>
      <p id={id} className="z-field__message" data-tone={tone} aria-live="polite">
        {text && (
          <span key={\`\${tone}:\${text}\`} className="z-field__message-text">
            {tone === 'error' && <Icon name="warning-circle" size={16} />}
            {tone === 'success' && <Icon name="check-circle" size={16} />}
            <span>{text}</span>
          </span>
        )}
      </p>
      {children}
    </div>
  );
}

/**
 * A small button inside a field's shell (clear, show password). It never takes focus on mouse
 * down, so the field keeps its caret and its blur validation stays quiet.
 */
export function FieldTool({ label, icon, pressed, hidden, className = '', onClick, ...props }: {
  label: string;
  icon: IconName;
  pressed?: boolean;
  /** Not available right now: invisible, unfocusable, ignored by assistive tech. */
  hidden?: boolean;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  const { pressProps } = usePress({ disabled: !!props.disabled || hidden });
  // Only an icon that changes after mount turns in; the first one is simply there.
  const [glyph, setGlyph] = useState({ icon, swapped: false });
  if (glyph.icon !== icon) setGlyph({ icon, swapped: true });
  return (
    <button
      type="button"
      {...props}
      className={\`z-field__tool\${className ? \` \${className}\` : ''}\`}
      aria-label={label}
      aria-pressed={pressed}
      data-hidden={hidden || undefined}
      data-pressed={pressProps['data-pressed']}
      inert={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      onMouseDown={(event: MouseEvent<HTMLButtonElement>) => event.preventDefault()}
      onClick={onClick}
      onPointerDown={pressProps.onPointerDown}
      onPointerUp={pressProps.onPointerUp}
      onPointerLeave={pressProps.onPointerLeave}
      onPointerCancel={pressProps.onPointerCancel}
      onKeyDown={pressProps.onKeyDown}
      onKeyUp={pressProps.onKeyUp}
      onBlur={pressProps.onBlur}
    >
      <span key={icon} className="z-field__tool-icon" data-swap={glyph.swapped || undefined}><Icon name={icon} size={20} /></span>
    </button>
  );
}
`,bt=`import { useCallback, useReducer, useRef, type RefObject } from 'react';
import { initialFieldState, reduceField, type FieldState, type Validator } from './validation';

export interface UseFieldOptions {
  initial?: string;
  /** Returns the message to show, or null when the value is fine. Say what is wrong and how to fix it. */
  validate: Validator;
  /** Show a quiet check once the field has been checked clean. Off by default: not every field earns one. */
  showValid?: boolean;
}

export interface FieldBinding {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error: string | undefined;
  valid: boolean;
  ref: RefObject<HTMLInputElement | null>;
}

export interface UseField {
  /** The whole timing state: dirty, armed, error, valid. Read it to explain what the field is doing. */
  state: FieldState;
  value: string;
  error: string | null;
  valid: boolean;
  /** Spread onto a TextField, PasswordField, CardNumberField, ExpiryField or CvcField. */
  fieldProps: FieldBinding;
  setValue: (value: string) => void;
  /** Submit-time check: shows the error if there is one and returns it. Pass a value to set it first. */
  check: (value?: string) => string | null;
  focus: () => void;
  reset: (value?: string) => void;
}

/**
 * Validation timing for one field. Quiet while typing, checked on blur and submit, live once an
 * error has shown (see validation.ts). The returned \`fieldProps\` plug straight into the field.
 *
 *   const card = useField({ validate: validateCardNumber, showValid: true });
 *   <CardNumberField label="Card number" {...card.fieldProps} />
 */
export function useField({ initial = '', validate, showValid = false }: UseFieldOptions): UseField {
  const validateRef = useRef(validate);
  validateRef.current = validate;
  const [state, dispatch] = useReducer(
    (current: FieldState, event: Parameters<typeof reduceField>[1]) => reduceField(current, event, value => validateRef.current(value)),
    initial,
    initialFieldState,
  );
  const latest = useRef(state);
  latest.current = state;
  const input = useRef<HTMLInputElement | null>(null);

  const onChange = useCallback((value: string) => dispatch({ type: 'change', value }), []);
  const onBlur = useCallback(() => dispatch({ type: 'blur' }), []);
  const check = useCallback((value?: string) => {
    if (value !== undefined) dispatch({ type: 'change', value });
    const error = validateRef.current(value ?? latest.current.value);
    dispatch({ type: 'submit' });
    return error;
  }, []);
  const focus = useCallback(() => input.current?.focus(), []);
  const reset = useCallback((value?: string) => dispatch({ type: 'reset', value: value ?? initial }), [initial]);

  return {
    state,
    value: state.value,
    error: state.error,
    valid: showValid && state.valid,
    fieldProps: { value: state.value, onChange, onBlur, error: state.error ?? undefined, valid: showValid && state.valid, ref: input },
    setValue: onChange,
    check,
    focus,
    reset,
  };
}
`,xt=`/* Validation timing for fields. Pure: no DOM, no React. Tested in Node.

   The rule is Aspen's, tightened for payments:
   - Never shout while someone is still typing. A pristine field stays quiet.
   - Check when they leave the field (blur) and when they submit.
   - Once a field has shown an error it is "armed": every keystroke re-checks it, so the message
     updates and clears the moment the value is fixed.
   - The field disarms when it is checked clean on blur or submit, so a fixed field is quiet again.
   - Tabbing through an empty field says nothing; the empty check belongs to submit. */

export type Validator = (value: string) => string | null;

export interface FieldState {
  value: string;
  /** The person has edited this field at least once. */
  dirty: boolean;
  /** An error has been shown and is still outstanding: re-check on every change. */
  armed: boolean;
  error: string | null;
  /** Checked clean and non-empty. Hidden again as soon as the value changes (unless armed). */
  valid: boolean;
}

export type FieldEvent =
  | { type: 'change'; value: string }
  | { type: 'blur' }
  | { type: 'submit' }
  | { type: 'reset'; value?: string };

export const initialFieldState = (value = ''): FieldState => ({ value, dirty: false, armed: false, error: null, valid: false });

function settle(state: FieldState, validate: Validator): FieldState {
  const error = validate(state.value);
  return { ...state, error, armed: error !== null, valid: error === null && state.value !== '' };
}

/** The whole timing model in one reducer. */
export function reduceField(state: FieldState, event: FieldEvent, validate: Validator): FieldState {
  switch (event.type) {
    case 'change': {
      const next = { ...state, value: event.value, dirty: true };
      // Quiet while typing: no error appears, and a stale "valid" mark is hidden.
      if (!state.armed) return { ...next, error: null, valid: false };
      const error = validate(event.value);
      return { ...next, error, valid: error === null && event.value !== '' };
    }
    case 'blur':
      // Tabbing through an untouched, empty field says nothing.
      if (state.value === '' && !state.dirty) return state;
      return settle(state, validate);
    case 'submit':
      return settle(state, validate);
    case 'reset':
      return initialFieldState(event.value);
  }
}

/** The error to show, if any. Kept as a function so callers read one name for the rule. */
export const visibleError = (state: FieldState): string | null => state.error;

export interface FieldIssue {
  label: string;
  error: string | null;
}

/** First issue in reading order, or -1. Used to move focus on a failed submit. */
export const firstInvalid = (issues: readonly FieldIssue[]): number => issues.findIndex(issue => issue.error !== null);

/**
 * One line for the form's status region after a failed submit:
 * "2 fields need attention: Card number, CVC."
 */
export function summarizeErrors(issues: readonly FieldIssue[]): string {
  const bad = issues.filter(issue => issue.error !== null);
  if (!bad.length) return '';
  const names = bad.map(issue => issue.label);
  const list = names.length > 2 ? \`\${names.slice(0, -1).join(', ')} and \${names[names.length - 1]}\` : names.join(' and ');
  return \`\${bad.length} \${bad.length === 1 ? 'field needs' : 'fields need'} attention: \${list}.\`;
}

/** "12 characters left", "1 character left", "Limit reached" for the debounced screen-reader count. */
export function remainingAnnouncement(length: number, max: number): string {
  if (!Number.isFinite(max) || max <= 0) return '';
  const left = max - length;
  if (left < 0) return \`\${-left} \${-left === 1 ? 'character' : 'characters'} over the limit\`;
  if (left === 0) return 'Limit reached';
  return \`\${left} \${left === 1 ? 'character' : 'characters'} left\`;
}
`,St=`/* Caret-preserving input formatting. Pure: the DOM is only touched by TextField.

   The idea: the caret's real position is "how many digits are before it". Strip the raw value to
   digits, format them, then put the caret after the same number of digits. Typing, pasting and
   deleting in the middle of "4242 4242" keep the caret where the person expects.
   Deleting a separator that would otherwise change nothing (the space in "4242 |4242") removes the
   neighbouring digit, so Backspace never appears to do nothing. */

export interface FormatEdit {
  /** The formatted value before this edit. */
  previous: string;
  /** The raw value the browser produced. */
  next: string;
  /** Caret position in \`next\`. */
  caret: number;
  /** Which way the edit deleted, from \`inputType\`; null for typing or pasting. */
  deleting?: 'backward' | 'forward' | null;
}

export interface FormatResult {
  value: string;
  caret: number;
}

export type Formatter = (edit: FormatEdit) => FormatResult;

const DIGIT = /\\d/;

export const digitsOf = (text: string): string => text.replace(/\\D+/g, '');

/** Number of digits in \`text\` before index \`caret\`. */
export function digitsBefore(text: string, caret: number): number {
  let count = 0;
  for (let index = 0; index < Math.min(caret, text.length); index += 1) if (DIGIT.test(text[index])) count += 1;
  return count;
}

/** Index in \`text\` just after its \`count\`-th digit (0 when count is 0). */
export function caretAfterDigits(text: string, count: number): number {
  if (count <= 0) return 0;
  let seen = 0;
  for (let index = 0; index < text.length; index += 1) {
    if (DIGIT.test(text[index])) {
      seen += 1;
      if (seen === count) return index + 1;
    }
  }
  return text.length;
}

export interface DigitFormat {
  /** Format a string of digits: "4242424242424242" → "4242 4242 4242 4242". */
  group: (digits: string) => string;
  /** Most digits the field accepts. */
  max: number;
  /** Optional rewrite of the typed digits before grouping (the expiry's "4" → "04"). */
  normalize?: (digits: string, context: { typed: number }) => string;
}

/**
 * Format an edit of a digits-only field and say where the caret goes.
 * - Letters, spaces and punctuation are dropped, so paste works from anywhere.
 * - Removing a separator that changes nothing visible also removes the digit on that side.
 * - The caret stays after the same digit it was after.
 */
export function editDigitGroups(edit: FormatEdit, format: DigitFormat): FormatResult {
  const { previous, next, caret, deleting = null } = edit;
  const typed = digitsOf(next).length - digitsOf(previous).length;

  const finish = (raw: string, rawBefore: number): FormatResult => {
    let digits = raw;
    let before = rawBefore;
    if (format.normalize) {
      const normalized = format.normalize(digits, { typed });
      // A digit added in front of the caret moves the caret with it.
      before += Math.max(0, normalized.length - digits.length);
      digits = normalized;
    }
    if (digits.length > format.max) {
      digits = digits.slice(0, format.max);
      before = Math.min(before, format.max);
    }
    const value = format.group(digits);
    return { value, caret: caretAfterDigits(value, before) };
  };

  const digits = digitsOf(next);
  const before = digitsBefore(next, caret);
  const result = finish(digits, before);

  if (deleting && digits === digitsOf(previous) && result.value === previous) {
    // Only a separator went away and nothing visible changed: take the neighbouring digit with it.
    if (deleting === 'backward' && before > 0) return finish(digits.slice(0, before - 1) + digits.slice(before), before - 1);
    if (deleting === 'forward' && before < digits.length) return finish(digits.slice(0, before) + digits.slice(before + 1), before);
  }
  return result;
}

/* ---------- Expiry: MM/YY ---------- */

const groupExpiry = (digits: string) => (digits.length > 2 ? \`\${digits.slice(0, 2)}/\${digits.slice(2)}\` : digits);

/** A first digit above 1 can only be a month from 02 to 09: it gets its leading zero ("4" → "04"). */
const normalizeExpiry = (digits: string, { typed }: { typed: number }) => (
  typed > 0 && digits.length === 1 && digits > '1' ? \`0\${digits}\` : digits
);

export const expiryFormat: DigitFormat = { group: groupExpiry, max: 4, normalize: normalizeExpiry };

/** Format the expiry as MM/YY. Finishing the month by typing or pasting shows the slash at once. */
export const formatExpiry: Formatter = edit => {
  const result = editDigitGroups(edit, expiryFormat);
  if (!edit.deleting && digitsOf(edit.previous).length < 2 && digitsOf(result.value).length === 2) {
    return { value: \`\${result.value}/\`, caret: result.value.length + 1 };
  }
  return result;
};

/* ---------- Digits only: security code, verification code ---------- */

/** A digits-only formatter capped at \`max\`. */
export const digitsOnly = (max: number): Formatter => edit => editDigitGroups(edit, { group: digits => digits, max });

/* ---------- Whole numbers with thousands separators ---------- */

/** "1200" → "1,200" as you type, the caret kept after the same digit. Whole numbers up to \`max\` digits. */
export const wholeNumber = (max: number): Formatter => edit => editDigitGroups(edit, {
  group: digits => digits.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ','),
  max,
});

/* ---------- Promo codes ---------- */

/** Upper case, letters, digits, hyphen and underscore only; the caret stays after the same character. */
export const formatPromoCode: Formatter = ({ next, caret }) => {
  const keep = (char: string) => /[A-Za-z0-9_-]/.test(char);
  const before = [...next.slice(0, caret)].filter(keep).length;
  const value = [...next].filter(keep).join('').toUpperCase().slice(0, 24);
  return { value, caret: Math.min(before, value.length) };
};
`,Ct=`/* Card number, expiry and security-code logic. Pure functions, tested in Node.
   Nothing here sends a number anywhere; the checks run on the device. */
import { digitsOf, editDigitGroups, type DigitFormat, type Formatter } from './format';

export type CardBrandId = 'visa' | 'mastercard' | 'amex' | 'discover' | 'diners' | 'jcb' | 'unionpay';

export interface CardBrand {
  id: CardBrandId;
  name: string;
  /** Digit counts this brand issues. */
  lengths: readonly number[];
  /** Group sizes, in order: Visa 4-4-4-4, American Express 4-6-5. */
  gaps: readonly number[];
  /** Digits in the security code. */
  cvcLength: number;
}

export const cardBrands: Readonly<Record<CardBrandId, CardBrand>> = Object.freeze({
  visa: { id: 'visa', name: 'Visa', lengths: [16], gaps: [4, 4, 4, 4], cvcLength: 3 },
  mastercard: { id: 'mastercard', name: 'Mastercard', lengths: [16], gaps: [4, 4, 4, 4], cvcLength: 3 },
  amex: { id: 'amex', name: 'American Express', lengths: [15], gaps: [4, 6, 5], cvcLength: 4 },
  discover: { id: 'discover', name: 'Discover', lengths: [16, 19], gaps: [4, 4, 4, 4, 3], cvcLength: 3 },
  diners: { id: 'diners', name: 'Diners Club', lengths: [14, 16], gaps: [4, 6, 4], cvcLength: 3 },
  jcb: { id: 'jcb', name: 'JCB', lengths: [16, 19], gaps: [4, 4, 4, 4, 3], cvcLength: 3 },
  unionpay: { id: 'unionpay', name: 'UnionPay', lengths: [16, 17, 18, 19], gaps: [4, 4, 4, 4, 3], cvcLength: 3 },
});

/** Grouping for a number we cannot place yet. */
const defaultGaps: readonly number[] = [4, 4, 4, 4, 3];
const defaultLengths: readonly number[] = [16];
/** Longest card number in use. */
export const CARD_MAX_DIGITS = 19;

const prefix = (digits: string, length: number) => Number(digits.slice(0, length));
const between = (value: number, low: number, high: number) => value >= low && value <= high;

/**
 * The brand a (partial) number belongs to, from its leading digits, or null while it is too short or
 * unknown. Pure; the ranges follow the networks' public IIN ranges.
 */
export function detectCardBrand(input: string): CardBrand | null {
  const digits = digitsOf(input);
  if (!digits) return null;
  const long = digits.length;
  const two = prefix(digits, 2);
  const three = prefix(digits, 3);
  const four = prefix(digits, 4);
  const six = prefix(digits, 6);

  if (digits[0] === '4') return cardBrands.visa;
  if (two === 34 || two === 37) return cardBrands.amex;
  if (long >= 2 && between(two, 51, 55)) return cardBrands.mastercard;
  if (long >= 4 && between(four, 2221, 2720)) return cardBrands.mastercard;
  if (two === 36 || two === 38 || two === 39 || (long >= 3 && between(three, 300, 305))) return cardBrands.diners;
  if (long >= 4 && between(four, 3528, 3589)) return cardBrands.jcb;
  if (four === 6011 || two === 65 || (long >= 3 && between(three, 644, 649)) || (long >= 6 && between(six, 622126, 622925))) return cardBrands.discover;
  if (two === 62) return cardBrands.unionpay;
  return null;
}

const groupBy = (digits: string, gaps: readonly number[]) => {
  const parts: string[] = [];
  let at = 0;
  for (const gap of gaps) {
    if (at >= digits.length) break;
    parts.push(digits.slice(at, at + gap));
    at += gap;
  }
  if (at < digits.length) parts.push(digits.slice(at));
  return parts.join(' ');
};

/** Digits to display groups: 4-4-4-4 by default, 4-6-5 for American Express. */
export function formatCardNumber(input: string, brand: CardBrand | null = detectCardBrand(input)): string {
  const digits = digitsOf(input).slice(0, CARD_MAX_DIGITS);
  return groupBy(digits, brand ? brand.gaps : defaultGaps);
}

/** Digits a card of this brand carries when complete (the longest it issues). */
export function cardLength(brand: CardBrand | null): number {
  return Math.max(...(brand ? brand.lengths : defaultLengths));
}

/** Luhn check: the checksum every card number carries. */
export function luhn(input: string): boolean {
  const digits = digitsOf(input);
  if (digits.length < 2) return false;
  let sum = 0;
  let double = false;
  for (let index = digits.length - 1; index >= 0; index -= 1) {
    let value = digits.charCodeAt(index) - 48;
    if (double) {
      value *= 2;
      if (value > 9) value -= 9;
    }
    sum += value;
    double = !double;
  }
  return sum % 10 === 0;
}

/** The format for the card number field: brand-aware groups, at most 19 digits. */
export const cardNumberFormat: DigitFormat = {
  group: digits => formatCardNumber(digits),
  max: CARD_MAX_DIGITS,
};

/** Caret-preserving card number formatter for TextField's \`format\`. */
export const formatCardNumberEdit: Formatter = edit => editDigitGroups(edit, cardNumberFormat);

/* ---------- Validation messages: what is wrong, and how to fix it ---------- */

const plural = (count: number, word: string) => \`\${count} \${word}\${count === 1 ? '' : 's'}\`;

export function validateCardNumber(value: string): string | null {
  const digits = digitsOf(value);
  if (!digits) return 'Enter the card number. It is on the front of your card.';
  const brand = detectCardBrand(digits);
  // An unknown brand accepts any length a card is issued in; a known one only its own.
  const accepted = brand ? brand.lengths : null;
  const shortest = accepted ? Math.min(...accepted) : 13;
  if (digits.length < shortest) {
    const who = brand ? \`\${brand.name} numbers have \${shortest} digits\` : 'Card numbers have 13 to 19 digits';
    return \`That number is too short. \${who}, and you have entered \${digits.length}.\`;
  }
  if (accepted && !accepted.includes(digits.length)) {
    return \`That number has \${plural(digits.length, 'digit')}. \${brand?.name} cards use \${accepted.join(' or ')}. Check for a missing or extra digit.\`;
  }
  if (!luhn(digits)) return 'That number does not look right. Check each digit, or try another card.';
  return null;
}

/* ---------- Expiry ---------- */

export interface ParsedExpiry {
  month: number;
  /** Four-digit year. */
  year: number;
}

/** "08/28" → { month: 8, year: 2028 }; null while incomplete. */
export function parseExpiry(value: string): ParsedExpiry | null {
  const digits = digitsOf(value);
  if (digits.length !== 4) return null;
  return { month: Number(digits.slice(0, 2)), year: 2000 + Number(digits.slice(2)) };
}

const pad = (month: number) => String(month).padStart(2, '0');

/** A card is good through the last day of its expiry month. \`now\` is injectable for tests. */
export function validateExpiry(value: string, now: Date = new Date()): string | null {
  const digits = digitsOf(value);
  if (!digits) return 'Enter the expiry date as MM/YY, like 08/28.';
  if (digits.length < 4) return 'Enter the month and year, like 08/28.';
  const expiry = parseExpiry(value);
  if (!expiry) return 'Enter the month and year, like 08/28.';
  if (expiry.month < 1 || expiry.month > 12) return 'The month must be between 01 and 12.';
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  if (expiry.year < year || (expiry.year === year && expiry.month < month)) {
    return \`This card expired in \${pad(expiry.month)}/\${String(expiry.year).slice(2)}. Use a card that is still valid.\`;
  }
  if (expiry.year > year + 20) return 'That year looks too far ahead. Check the year on your card.';
  return null;
}

/* ---------- Security code ---------- */

export function cvcLength(brand: CardBrand | null): number {
  return brand ? brand.cvcLength : 3;
}

export function validateCvc(value: string, brand: CardBrand | null = null): string | null {
  const digits = digitsOf(value);
  const length = cvcLength(brand);
  if (!digits) return brand?.id === 'amex' ? 'Enter the 4-digit code on the front of your card.' : 'Enter the 3-digit code on the back of your card.';
  if (digits.length < length) {
    return brand?.id === 'amex'
      ? 'American Express codes have 4 digits, on the front of the card.'
      : \`The security code has \${length} digits. Check the back of your card.\`;
  }
  return null;
}
`,J={text:{name:`TextField.tsx`,code:mt},password:{name:`PasswordField.tsx`,code:ht},card:{name:`CardFields.tsx`,code:gt},promo:{name:`PromoField.tsx`,code:_t},code:{name:`OtpField.tsx`,code:vt}},wt=[{name:`input.css`,code:ye},{name:`chrome.tsx`,code:yt},{name:`useField.ts`,code:bt},{name:`validation.ts`,code:xt},{name:`format.ts`,code:St},{name:`card.ts`,code:Ct},{name:`tokens.css`,code:O}];function Tt(e){let t=e===`amount`||e===`message`?J.text:J[e],n=[J.text,J.password,J.card,J.promo,J.code].filter(e=>e!==t),r=e===`promo`?[{name:`asyncAction.ts`,code:ve}]:[];return[t,...wt.slice(0,1),...r,...n,...wt.slice(1)]}function Y({variant:e}){let t=e===`message`;return(0,V.jsxs)(`svg`,{className:`input-thumb input-thumb--${e}`,viewBox:`0 0 40 24`,width:`40`,height:`24`,"aria-hidden":`true`,children:[(0,V.jsx)(`rect`,{className:`input-thumb__body`,x:`.75`,y:`.75`,width:`38.5`,height:`22.5`,rx:`6.5`}),(0,V.jsx)(l,{en:e===`text`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`rect`,{className:`input-thumb__mark`,x:`6`,y:`10.5`,width:`14`,height:`3`,rx:`1.5`}),(0,V.jsx)(`rect`,{className:`input-thumb__caret`,x:`23`,y:`8`,width:`1.6`,height:`8`,rx:`.8`})]})}),(0,V.jsx)(l,{en:e===`password`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(l,{en:[7,12,17,22].map(e=>(0,V.jsx)(`circle`,{className:`input-thumb__mark`,cx:e,cy:`12`,r:`1.9`},e))}),(0,V.jsx)(`rect`,{className:`input-thumb__tool`,x:`28.5`,y:`7`,width:`7`,height:`10`,rx:`3`})]})}),(0,V.jsx)(l,{en:e===`card`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(l,{en:[5,12.5,20,27.5].map(e=>(0,V.jsx)(`rect`,{className:`input-thumb__mark`,x:e,y:`10.5`,width:`5`,height:`3`,rx:`1.5`},e))}),(0,V.jsx)(`rect`,{className:`input-thumb__tool`,x:`33`,y:`9`,width:`4`,height:`6`,rx:`1.6`})]})}),(0,V.jsx)(l,{en:e===`promo`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`rect`,{className:`input-thumb__mark`,x:`6`,y:`10.5`,width:`12`,height:`3`,rx:`1.5`}),(0,V.jsx)(`rect`,{className:`input-thumb__action`,x:`24`,y:`5.5`,width:`11.5`,height:`13`,rx:`4`})]})}),(0,V.jsx)(l,{en:e===`code`&&[0,1,2,3,4,5].map(e=>(0,V.jsx)(`rect`,{className:`input-thumb__cell`,x:3.4+e*5.9,y:`6.5`,width:`4.6`,height:`11`,rx:`1.8`},e))}),(0,V.jsx)(l,{en:e===`amount`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`rect`,{className:`input-thumb__tool`,x:`4`,y:`8.5`,width:`4`,height:`7`,rx:`1.6`}),(0,V.jsx)(`rect`,{className:`input-thumb__mark`,x:`12`,y:`10.5`,width:`10`,height:`3`,rx:`1.5`}),(0,V.jsx)(`rect`,{className:`input-thumb__tool`,x:`29`,y:`8.5`,width:`7`,height:`7`,rx:`1.6`})]})}),(0,V.jsx)(l,{en:t&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`rect`,{className:`input-thumb__mark`,x:`6`,y:`7`,width:`22`,height:`2.6`,rx:`1.3`}),(0,V.jsx)(`rect`,{className:`input-thumb__mark`,x:`6`,y:`12`,width:`28`,height:`2.6`,rx:`1.3`}),(0,V.jsx)(`rect`,{className:`input-thumb__mark`,x:`6`,y:`17`,width:`14`,height:`2.6`,rx:`1.3`})]})})]})}var Et=[{id:`text`,label:`Text`,description:`A label that stays put, and a hint that turns into the error.`,thumb:(0,V.jsx)(Y,{variant:`text`})},{id:`password`,label:`Password`,description:`Show or hide it with one steady name.`,thumb:(0,V.jsx)(Y,{variant:`password`})},{id:`card`,label:`Card number`,description:`Groups as you type. The caret stays where you left it.`,thumb:(0,V.jsx)(Y,{variant:`card`})},{id:`promo`,label:`Promo code`,description:`Checks honestly, then becomes a receipt.`,thumb:(0,V.jsx)(Y,{variant:`promo`})},{id:`code`,label:`Verification code`,description:`One real input. Paste and autofill just work.`,thumb:(0,V.jsx)(Y,{variant:`code`})},{id:`amount`,label:`Amount`,description:`A unit on each side, and a range in the hint.`,thumb:(0,V.jsx)(Y,{variant:`amount`})},{id:`message`,label:`Message`,description:`A counter that counts quietly.`,thumb:(0,V.jsx)(Y,{variant:`message`})}],Dt={trail:`timing`,step:`quiet`,failed:!1,line:Oe.quiet},Ot=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`}],kt=[{value:`fast`,label:`Fast`},{value:`normal`,label:`Normal`},{value:`slow`,label:`Slow`}],At={default:`Default`,focus:`Focus`,error:`Error`,disabled:`Disabled`,readonly:`Read only`},jt=e=>[{id:`idle`,label:`Ready`},{id:`applying`,label:`Checking`},{id:`result`,label:e?`Refused`:`Applied`}],Mt=e=>e===`applied`||e===`invalid`?`result`:e,Nt={idle:`Enter a code, then Apply.`,applying:`Checking the code…`,applied:`Applied. Remove it any time.`,invalid:`That code did not apply.`},Pt={disabled:`Disabled. Skipped by Tab.`,readonly:`Read only. Select it to copy.`};function X(e,t){return{label:t.label,hint:e.hint?t.hint:void 0,size:e.size,pinned:e.state===`focus`?`focus`:void 0,disabled:e.state===`disabled`,reserve:!0}}function Z(e,{demo:t,active:n,onReport:r}){let i=U[e],a=B({validate:i.validate,showValid:e===`card`||e===`code`}),{field:o}=a,{phase:s}=a;(0,L.useEffect)(()=>{n?t.state===`error`?a.check(i.bad):t.state===`disabled`||t.state===`readonly`?o.reset(i.good):o.reset():o.reset()},[n,t.state,e]);let c=Pt[t.state]??Oe[s];return(0,L.useEffect)(()=>{r({trail:`timing`,step:t.state===`disabled`||t.state===`readonly`?`quiet`:s,failed:!1,line:c})},[s,c,t.state,r]),a}function Ft(e){let t=n(),r=U.text,{props:i}=Z(`text`,e);return(0,V.jsx)(w,{...X(e.demo,r),...i,readOnly:e.demo.state===`readonly`,clearable:!0,autoComplete:`name`,placeholder:t({en:r.placeholder})})}function It(e){let{props:t}=Z(`password`,e);return(0,V.jsx)(b,{...X(e.demo,U.password),...t,readOnly:e.demo.state===`readonly`,autoComplete:`new-password`})}function Lt(e){let{props:t}=Z(`card`,e);return(0,V.jsx)(D,{...X(e.demo,U.card),...t,readOnly:e.demo.state===`readonly`})}function Rt(e){let{props:t,check:n}=Z(`code`,e);return(0,V.jsx)(c,{...X(e.demo,U.code),...t,group:3,onComplete:()=>n()})}function zt(t){let r=n(),i=U.amount,{props:a}=Z(`amount`,t);return(0,V.jsx)(w,{...X(t.demo,i),...a,readOnly:t.demo.state===`readonly`,prefix:`$`,suffix:`USD`,inputMode:`numeric`,placeholder:r({en:i.placeholder}),format:e(5)})}function Bt({demo:e,active:t,onReport:r}){let i=n(),a=U.message,[o,s]=(0,L.useState)(``);(0,L.useEffect)(()=>{t?e.state===`error`?s(a.bad):e.state===`disabled`||e.state===`readonly`?s(a.good):s(``):s(``)},[t,e.state,a]);let c=160-o.length,l=Pt[e.state]??(o?`${c} ${c===1?`character`:`characters`} left.`:`Write a note. The count follows.`);return(0,L.useEffect)(()=>{r({trail:`timing`,step:`quiet`,failed:!1,line:l})},[l,r]),(0,V.jsx)(w,{...X(e,a),value:o,onChange:s,error:e.state===`error`?a.error:void 0,readOnly:e.state===`readonly`,multiline:!0,rows:3,counter:!0,maxLength:160,optional:!0,placeholder:i({en:a.placeholder})})}function Vt({demo:e,active:t,onReport:r}){let i=n(),a=U.promo,o=(0,L.useMemo)(()=>R(ze[e.lookup]),[e.lookup]),s=(0,L.useCallback)(e=>{r({trail:`promo`,step:Mt(e),failed:e===`invalid`,line:Nt[e]})},[r]);return(0,L.useEffect)(()=>{r({trail:`promo`,step:`idle`,failed:!1,line:Pt[e.state]??Nt.idle})},[e.state,e.lookup,r]),(0,V.jsx)(d,{...X(e,a),error:e.state===`error`?a.error:void 0,check:o,onPhaseChange:s,placeholder:i({en:`WELCOME10`})},`${t}-${e.state}-${e.lookup}`)}function Ht({variant:e,...t}){switch(e){case`password`:return(0,V.jsx)(It,{...t});case`card`:return(0,V.jsx)(Lt,{...t});case`promo`:return(0,V.jsx)(Vt,{...t});case`code`:return(0,V.jsx)(Rt,{...t});case`amount`:return(0,V.jsx)(zt,{...t});case`message`:return(0,V.jsx)(Bt,{...t});default:return(0,V.jsx)(Ft,{...t})}}function Ut(){let e=n(),[t,r]=(0,L.useState)(Re),[i,a]=(0,L.useState)(Dt),o=e=>t=>r(n=>({...n,[e]:t})),s=e=>r(t=>({...t,variant:e,state:Ve(e,t.state)})),c=U[t.variant],u=t.variant===`promo`,d=Be(t.variant).map(e=>({value:e,label:At[e]})),f=(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(se,{label:e({en:`Size`}),value:t.size,options:Ot,onChange:o(`size`)}),(0,V.jsx)(pe,{label:e({en:`State`}),value:t.state,options:d,onChange:o(`state`)}),(0,V.jsx)(l,{en:u&&(0,V.jsx)(se,{label:e({en:`Lookup`}),value:t.lookup,options:kt,onChange:o(`lookup`)})}),(0,V.jsx)(fe,{label:e({en:`Hint`}),checked:t.hint,onChange:o(`hint`)})]});return(0,V.jsx)(le,{page:`input`,name:`Input`,variants:Et,variant:t.variant,onVariantChange:s,status:i.line,animated:u,simulated:u,trail:i.trail===`promo`?(0,V.jsx)(M,{states:jt(i.failed),active:i.step,label:e({en:`Promo states`})}):(0,V.jsx)(M,{states:Te,active:i.step,label:e({en:`Validation states`})}),code:{setup:Ge,usage:$e(t),usageFile:`${c.name}.tsx`,sources:Tt(t.variant)},controls:f,children:({variant:e,active:n})=>(0,V.jsx)(`div`,{className:`input-stage-field`,"data-size":t.size,children:(0,V.jsx)(Ht,{variant:e,demo:{...t,variant:e,state:Ve(e,t.state)},active:n,onReport:a})})})}function Wt(){let e=n();return(0,V.jsx)(`div`,{className:`input-bare`,children:(0,V.jsx)(`input`,{className:`input-bare__input`,placeholder:e({en:`Card number`}),"aria-label":e({en:`Card number`}),tabIndex:-1,readOnly:!0})})}function Gt(){let e=n();return(0,V.jsxs)(`div`,{className:`kit-folds`,children:[(0,V.jsx)(N,{title:e({en:`Properties & states`}),children:(0,V.jsx)(`div`,{className:`input-ref`,children:(0,V.jsx)(l,{en:ae.map(t=>(0,V.jsxs)(`div`,{className:`input-ref__item`,children:[(0,V.jsx)(`h3`,{className:`input-ref__name`,children:(0,V.jsx)(`code`,{children:t.name})}),(0,V.jsx)(ue,{props:t.props,caption:e({en:`${t.name} properties`})})]},t.name))})})}),(0,V.jsx)(N,{title:e({en:`Usage & keyboard`}),children:(0,V.jsxs)(`div`,{className:`kit-stack`,children:[(0,V.jsx)(F,{number:1,title:e({en:`Keep the label`}),do:{text:`Put the label above the field. It stays when the field is full.`,example:(0,V.jsx)(w,{label:e({en:`Card number`}),defaultValue:`4242 4242`,reserve:!0})},dont:{text:`Use the placeholder as the label. It disappears when you need it most.`,example:(0,V.jsx)(Wt,{})}}),(0,V.jsx)(F,{number:2,title:e({en:`Say what is wrong and how to fix it`}),do:{text:`Name the problem and the next step.`,example:(0,V.jsx)(w,{label:e({en:`Receipt email`}),defaultValue:`alex@example`,error:`Finish the address after the @, like name@example.com.`,reserve:!0})},dont:{text:`Say “Invalid input”. It names nothing and fixes nothing.`,example:(0,V.jsx)(w,{label:e({en:`Receipt email`}),defaultValue:`alex@example`,error:`Invalid input.`,reserve:!0})}}),(0,V.jsx)(F,{number:3,title:e({en:`Wait until they leave`}),do:{text:`Stay quiet while someone types. Check on blur and on submit.`,example:(0,V.jsx)(w,{label:e({en:`Receipt email`}),defaultValue:`alex@exa`,reserve:!0})},dont:{text:`Flag a half-typed address on the first keystroke.`,example:(0,V.jsx)(w,{label:e({en:`Receipt email`}),defaultValue:`a`,error:`Enter a valid email.`,reserve:!0})}}),(0,V.jsx)(F,{number:4,title:e({en:`Take their format`}),do:{text:`Accept spaces, dashes and pasted text, and group the digits for them.`,example:(0,V.jsx)(D,{label:e({en:`Card number`}),value:`4242 4242 4242 4242`,onChange:()=>{},reserve:!0})},dont:{text:`Ask for “digits only, no spaces” and reject the rest.`,example:(0,V.jsx)(w,{label:e({en:`Card number`}),hint:e({en:`Digits only, no spaces.`}),defaultValue:`4242424242424242`,reserve:!0})}}),(0,V.jsx)(me,{keys:k.keys??[]})]})}),(0,V.jsx)(N,{title:e({en:`Tokens`}),children:(0,V.jsxs)(`div`,{className:`kit-stack`,children:[(0,V.jsx)(de,{tokens:k.tokens??[]}),(0,V.jsx)(ge,{tokens:[...k.tokens??[],`--z-color-success`,`--z-color-blue-action`,`--z-ease-spring`,`--z-motion-feedback`,`--z-motion-control`]})]})})]})}var Q=`Receipt email`,$=`We send the receipt here.`,Kt=`alex@example`,qt=`Finish the address after the @, like name@example.com.`;function Jt(){let e=n();return(0,V.jsxs)(he,{columns:3,children:[(0,V.jsx)(I,{title:e({en:`Rest`}),note:`A visible label and a hint. The placeholder only shows the shape.`,inspect:{code:K({label:Q,props:[`hint="${$}"`,`placeholder="you@example.com"`]})},children:(0,V.jsx)(w,{label:e({en:Q}),hint:e({en:$}),placeholder:e({en:`you@example.com`}),reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Hover`}),note:`The ring darkens a step, on fine pointers only.`,inspect:{code:K({label:Q,props:[`hint="${$}"`]})},children:(0,V.jsx)(w,{label:e({en:Q}),hint:e({en:$}),placeholder:e({en:`you@example.com`}),pinned:`hover`,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Focus`}),note:`A blue ring settles just outside the whole control.`,inspect:{code:K({label:Q,props:[`hint="${$}"`,`pinned="focus"`]})},children:(0,V.jsx)(w,{label:e({en:Q}),hint:e({en:$}),placeholder:e({en:`you@example.com`}),pinned:`focus`,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Filled`}),note:`Text is ink; the hint stays out of the way.`,inspect:{code:K({label:Q,props:[`hint="${$}"`],value:`alex@example.com`})},children:(0,V.jsx)(w,{label:e({en:Q}),hint:e({en:$}),defaultValue:`alex@example.com`,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Valid`}),note:`A check draws itself once the value has been checked.`,inspect:{code:K({label:Q,props:[`valid`],value:`alex@example.com`})},children:(0,V.jsx)(w,{label:e({en:Q}),defaultValue:`alex@example.com`,valid:!0,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Error`}),note:`An icon and words, never color alone. It says how to fix it.`,inspect:{code:K({label:Q,value:Kt,error:qt})},children:(0,V.jsx)(w,{label:e({en:Q}),defaultValue:Kt,error:qt,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Disabled`}),note:`Skipped by Tab. Say why nearby, or leave it enabled.`,inspect:{code:K({label:`Promo code`,props:[`disabled`],value:`WELCOME10`})},children:(0,V.jsx)(w,{label:e({en:`Promo code`}),defaultValue:`WELCOME10`,disabled:!0,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Read only`}),note:`Focusable and selectable, so it can be copied.`,inspect:{code:K({label:`Order ID`,props:[`readOnly`],value:`ZJ-2048`})},children:(0,V.jsx)(w,{label:e({en:`Order ID`}),defaultValue:`ZJ-2048`,readOnly:!0,reserve:!0})}),(0,V.jsx)(I,{title:e({en:`Optional`}),note:`Mark the exception. Required is the default.`,inspect:{code:K({label:`Gift message`,props:[`optional`,`hint="Leave it blank to skip."`]})},children:(0,V.jsx)(w,{label:e({en:`Gift message`}),hint:e({en:`Leave it blank to skip.`}),optional:!0,placeholder:e({en:`Happy birthday`}),reserve:!0})})]})}function Yt(){let e=n(),t=(0,L.useRef)(null),r=ce(t,{page:`input`}),{field:i,props:a,phase:o,serial:s,last:c}=B({validate:ke}),[u,d]=(0,L.useState)([]),[f,p]=(0,L.useState)(!1),m=(0,L.useRef)([]),h=(0,L.useRef)(i.state);(0,L.useEffect)(()=>{if(s===0)return;let e=c===`change`?{type:`change`,value:i.state.value}:{type:c===`blur`?`blur`:`submit`},t=Me(h.current,e,i.state);h.current=i.state,t&&d(e=>Ne(e,t))},[s]);let g=(0,L.useCallback)(()=>{for(let e of m.current)window.clearTimeout(e);m.current=[],p(!1)},[]),_=(0,L.useCallback)(()=>{i.reset(),h.current={value:``,dirty:!1,armed:!1,error:null,valid:!1},d([])},[i]),v=()=>{g(),_(),p(!0);let e=Pe();for(let{at:t,event:n}of e)n.type!==`reset`&&m.current.push(window.setTimeout(()=>{n.type===`change`?a.onChange(n.value):n.type===`blur`&&a.onBlur()},t));let t=e[e.length-1].at+500;m.current.push(window.setTimeout(()=>{m.current=[],p(!1)},t))};(0,L.useEffect)(()=>{r||g()},[r,g]),(0,L.useEffect)(()=>g,[g]);let y=e=>{f&&g(),a.onChange(e)},b=Ae(i.value);return(0,V.jsxs)(`div`,{ref:t,className:`input-timing`,"data-playback":r?`running`:`paused`,children:[(0,V.jsxs)(`div`,{className:`input-timing__main`,children:[(0,V.jsxs)(`header`,{className:`input-timing__intro`,children:[(0,V.jsx)(`h3`,{className:`input-timing__title`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Try it`})})}),(0,V.jsx)(`p`,{className:`input-timing__lead`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Type half an address. Leave the field. Come back and finish it. Or let it play.`})})}),(0,V.jsx)(x,{variant:`dark`,size:`sm`,icon:f?`pause`:`play`,onClick:f?g:v,children:(0,V.jsx)(l,{en:f?`Stop`:`Show me`})})]}),(0,V.jsxs)(`div`,{className:`input-timing__stage`,children:[(0,V.jsxs)(`div`,{className:`input-timing__col`,children:[(0,V.jsx)(`p`,{className:`input-timing__tag`,"data-tone":`ours`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`This system`})})}),(0,V.jsx)(w,{label:e({en:`Receipt email`}),hint:e({en:`We send the receipt here.`}),placeholder:e({en:`name@example.com`}),autoComplete:`email`,inputMode:`email`,reserve:!0,...a,onChange:y})]}),(0,V.jsxs)(`div`,{className:`input-timing__col`,"aria-hidden":`true`,inert:!0,children:[(0,V.jsx)(`p`,{className:`input-timing__tag`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Checks every key`})})}),(0,V.jsx)(w,{label:e({en:`Receipt email`}),hint:e({en:`We send the receipt here.`}),placeholder:e({en:`name@example.com`}),value:i.value,error:b,reserve:!0,onChange:()=>{},tabIndex:-1})]})]}),(0,V.jsxs)(`div`,{className:`input-timing__state`,children:[(0,V.jsx)(M,{states:Te,active:o,label:e({en:`Validation states`})}),(0,V.jsx)(`p`,{className:`input-timing__line`,role:`status`,children:(0,V.jsx)(l,{en:De[o]})})]})]}),(0,V.jsxs)(`aside`,{className:`input-timing__log`,"aria-label":e({en:`What the field did`}),children:[(0,V.jsx)(`p`,{className:`input-timing__log-title`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`What the field did`})})}),(0,V.jsx)(l,{en:u.length===0&&(0,V.jsx)(`p`,{className:`input-timing__empty`,children:(0,V.jsx)(l,{en:(0,V.jsx)(V.Fragment,{children:`Events appear here as they happen.`})})})}),(0,V.jsx)(`ol`,{className:`input-timing__entries`,children:(0,V.jsx)(l,{en:u.map(e=>(0,V.jsxs)(`li`,{className:`input-timing__entry`,"data-tone":e.tone,children:[(0,V.jsx)(`span`,{className:`input-timing__dot`,"aria-hidden":`true`}),(0,V.jsx)(`span`,{className:`input-timing__event`,children:(0,V.jsx)(l,{en:e.event})}),(0,V.jsx)(`span`,{className:`input-timing__result`,children:(0,V.jsx)(l,{en:e.result})})]},e.id))})})]})]})}function Xt(){let e=n();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(A,{id:`input`}),(0,V.jsx)(Ut,{}),(0,V.jsx)(oe,{title:e({en:`Quiet until it matters.`}),lead:e({en:`A field earns trust by staying out of the way while you type, then being specific when it speaks.`}),reasons:[{title:`Quiet while you type`,text:`A half-typed value is not a mistake. Nothing is flagged until you leave the field or submit.`},{title:`Live once it matters`,text:`After the first message, every key re-checks. The message updates, then clears the moment the value is right.`},{title:`Errors that explain`,text:`What is wrong, and how to fix it, in words and an icon, never color alone. Submit takes you to the first problem.`}]}),(0,V.jsx)(P,{id:`states`,title:e({en:`States`}),lead:e({en:`Every state a field can be in, on the surface it usually sits on. Inspect any of them for its code.`}),children:(0,V.jsx)(Jt,{})}),(0,V.jsx)(P,{id:`fields`,title:e({en:`Field types`}),lead:e({en:`One shell, many fields. Type, paste and clear in these.`}),children:(0,V.jsx)(pt,{})}),(0,V.jsx)(P,{id:`timing`,title:e({en:`Validation timing`}),lead:e({en:`Quiet while you type. Specific when you leave. Live until it is fixed. Alongside, the same value in a form that checks every key.`}),children:(0,V.jsx)(Yt,{})}),(0,V.jsx)(P,{id:`card`,title:e({en:`Card number`}),lead:e({en:`Group the digits, keep the caret, name the network, and check the checksum. All on the device.`}),children:(0,V.jsx)(Le,{})}),(0,V.jsx)(P,{id:`in-context`,title:e({en:`In context`}),lead:e({en:`A payment whose total follows the form, a one-time code, and an insurance quote. Submit with a field empty and watch where focus goes.`}),children:(0,V.jsx)(ot,{})}),(0,V.jsx)(P,{id:`reference`,title:e({en:`Reference`}),children:(0,V.jsx)(Gt,{})})]})}export{Xt as default};