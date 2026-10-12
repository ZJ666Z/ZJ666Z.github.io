import{Dt as e,Et as t,Fn as n,St as r,Tn as i,_n as a,bt as o,dn as s,gn as c,gt as l,mt as u,p as d,un as f,vn as p,vt as m,xt as h,yt as g}from"./route-UEzl4zy4.js";import{C as _,S as v}from"./docs-CRxPR9PY.js";import{A as y,O as b,b as x,c as S,f as C,i as w,k as T,l as E,n as D,r as O,t as k,x as A,y as j}from"./kit-B_zmQpOy.js";import{t as ee}from"./lab-qa9ZWVji.js";import{t as te}from"./icon-peF3XBIK.js";var M=n(),N=[{id:`interface`,label:`Interface`,note:`Controls, navigation and everyday actions.`},{id:`arrows`,label:`Arrows`,note:`Direction, disclosure and movement.`},{id:`commerce`,label:`Commerce & payments`,note:`Checkout, money, orders and delivery.`},{id:`trust`,label:`Insurance & trust`,note:`Protection, coverage, identity and proof.`},{id:`status`,label:`Status`,note:`Outcomes, warnings and waiting.`},{id:`design`,label:`Design & code`,note:`Tools, type, layout and components.`},{id:`media`,label:`Media`,note:`Playback and capture.`}],P=[{name:`list`,group:`interface`,keywords:[`hamburger menu`,`overflow menu`,`sidebar`,`unordered list`,`ordered list`,`checklist`,`lines`]},{name:`x`,group:`interface`,keywords:[`close`,`dismiss`,`cancel`,`cross`,`closed`,`cancelled`,`dismissed`,`times`,`multiply`,`mulitplication`,`product`,`mathematics`,`arithmetic`,`calculator`]},{name:`plus`,group:`interface`,keywords:[`addition`,`sum`,`mathematics`,`arithmetic`,`calculator`]},{name:`minus`,group:`interface`,keywords:[`subtraction`,`difference`,`mathematics`,`arithmetic`,`calculator`,`line`,`horizontal`,`divider`]},{name:`check`,group:`interface`,keywords:[`done`,`confirm`,`tick`,`todo`,`task`,`list`,`checkbox`]},{name:`magnifying-glass`,group:`interface`,keywords:[`search`,`find`,`locate`,`query`,`inspect`]},{name:`funnel`,group:`interface`,keywords:[`filter`,`filters`,`refine`,`sorting`]},{name:`sliders-horizontal`,group:`interface`,keywords:[`music`,`audio`,`faders`,`filters`,`equalizer`,`volume`,`settings`,`preferences`]},{name:`dots-three`,group:`interface`,keywords:[`more`,`overflow`,`menu`,`circles`,`shapes`,`polygons`,`ellipsis`,`ellipses`]},{name:`gear`,group:`interface`,keywords:[`settings`,`preferences`,`setup`,`cogs`,`gears`,`machinery`,`mechanical`]},{name:`house`,group:`interface`,keywords:[`homes`,`buildings`,`places`,`locations`]},{name:`user`,group:`interface`,keywords:[`person`,`users`,`profile`,`account`,`contact`,`login`]},{name:`bell`,group:`interface`,keywords:[`alarm`,`notifications`,`times`,`timer`,`clock`,`schedule`,`events`,`ringer`,`calls`]},{name:`eye`,group:`interface`,keywords:[`visible`,`hidden`,`show`,`hide`,`visibility`,`view`]},{name:`eye-slash`,group:`interface`,keywords:[`visible`,`hidden`,`show`,`hide`,`visibility`,`view`,`invisible`,`eyelashes`,`disabled`,`private`]},{name:`copy`,group:`interface`,keywords:[`duplicated`,`copied`,`clipboard`]},{name:`download-simple`,group:`interface`,keywords:[`saved`,`saving`,`archived`,`archiving`,`archival`,`downloaded`,`downloading`,`hard drive`,`disk`,`import`]},{name:`upload-simple`,group:`interface`,keywords:[`saved`,`saving`,`archived`,`archiving`,`archival`,`uploaded`,`uploading`,`hard drive`,`disk`]},{name:`link`,group:`interface`,keywords:[`anchor`,`hyperlink`,`hypertext`,`chains`,`chained`]},{name:`trash`,group:`interface`,keywords:[`garbage`,`remove`,`delete`,`destroy`,`recycle`,`recycling`]},{name:`pencil-simple`,group:`interface`,keywords:[`edit`,`write`,`writing`,`editing`,`sign`,`signature`]},{name:`arrows-out-simple`,group:`interface`,keywords:[`directional`,`pointer`,`pointing`,`arrowhead`,`expand`,`fullscreen`,`resize`]},{name:`arrows-in-simple`,group:`interface`,keywords:[`directional`,`pointer`,`pointing`,`arrowhead`,`collapse`,`minimize`,`resize`]},{name:`cursor-click`,group:`interface`,keywords:[`press`,`button`,`pointer`,`arrowhead`,`mouse`]},{name:`calendar-blank`,group:`interface`,keywords:[`dates`,`times`,`events`,`schedule`,`none`]},{name:`envelope`,group:`interface`,keywords:[`mail`,`email`,`send`,`sent`,`message`,`post`,`letter`]},{name:`chat-circle`,group:`interface`,keywords:[`send`,`sent`,`messages`,`messaging`,`sms`,`texting`,`comment`,`round`,`bubble`]},{name:`bag`,group:`interface`,keywords:[`work`,`experience`,`job`,`portfolio`,`suitcase`,`valise`,`baggage`,`folders`]},{name:`thumbs-up`,group:`interface`,keywords:[`recommendation`,`like`,`approve`,`love`,`favorited`,`favorites`,`emoji`,`yes`]},{name:`arrow-up`,group:`arrows`,keywords:[`directional`,`pointer`,`pointing`,`arrowhead`]},{name:`arrow-down`,group:`arrows`,keywords:[`directional`,`pointer`,`pointing`,`arrowhead`]},{name:`arrow-left`,group:`arrows`,keywords:[`directional`,`pointer`,`pointing`,`arrowhead`]},{name:`arrow-right`,group:`arrows`,keywords:[`directional`,`pointer`,`pointing`,`arrowhead`]},{name:`arrow-up-right`,group:`arrows`,keywords:[`external`,`open`,`link`,`directional`,`pointer`,`pointing`,`arrowhead`]},{name:`arrow-down-right`,group:`arrows`,keywords:[`directional`,`pointer`,`pointing`,`arrowhead`]},{name:`arrow-clockwise`,group:`arrows`,keywords:[`refresh`,`retry`,`reload`,`directional`,`pointer`,`pointing`,`arrowhead`,`redo`,`refreshing`,`rotate`,`spin`,`flip`]},{name:`arrow-counter-clockwise`,group:`arrows`,keywords:[`undo`,`reset`,`directional`,`pointer`,`pointing`,`arrowhead`,`refreshing`,`rotate`,`spin`,`flip`]},{name:`arrows-left-right`,group:`arrows`,keywords:[`directional`,`pointer`,`pointing`,`arrowhead`]},{name:`caret-up`,group:`arrows`,keywords:[`chevron`,`directional`,`pointer`,`pointing`,`arrowhead`,`triangle`]},{name:`caret-down`,group:`arrows`,keywords:[`chevron`,`disclosure`,`directional`,`pointer`,`pointing`,`arrowhead`,`triangle`]},{name:`caret-left`,group:`arrows`,keywords:[`chevron`,`back`,`directional`,`pointer`,`pointing`,`arrowhead`,`triangle`]},{name:`caret-right`,group:`arrows`,keywords:[`chevron`,`next`,`directional`,`pointer`,`pointing`,`arrowhead`,`triangle`]},{name:`arrow-square-out`,group:`arrows`,keywords:[`external`,`open`,`new`,`window`,`export`,`directional`,`pointer`,`pointing`,`arrowhead`]},{name:`credit-card`,group:`commerce`,keywords:[`checkout`,`pay`,`payment`,`method`,`debit`,`visa`,`mastercard`,`money`,`paying`,`purchase`,`swipe`]},{name:`wallet`,group:`commerce`,keywords:[`pay`,`balance`,`stored`,`value`,`money`,`payment`,`paying`,`purchase`]},{name:`bank`,group:`commerce`,keywords:[`transfer`,`ach`,`debit`,`banking`,`checking`,`money`,`savings`,`deposit`,`withdraw`,`places`,`locations`]},{name:`receipt`,group:`commerce`,keywords:[`order`,`invoice`,`total`,`purchase`,`money`,`clipping`,`expense`]},{name:`shopping-cart`,group:`commerce`,keywords:[`basket`,`checkout`,`ecommerce`,`market`,`buying`,`groceries`,`places`,`locations`]},{name:`shopping-bag`,group:`commerce`,keywords:[`order`,`checkout`,`ecommerce`,`market`,`basket`,`cart`,`buying`,`places`,`locations`]},{name:`tag`,group:`commerce`,keywords:[`price`,`label`,`promo`,`tags`,`hashtag`,`labels`,`sale`,`sell`,`discount`]},{name:`storefront`,group:`commerce`,keywords:[`merchant`,`seller`,`shop`,`shops`,`shopping`,`markets`,`stores`,`buildings`,`places`,`locations`]},{name:`package`,group:`commerce`,keywords:[`order`,`parcel`,`shipment`,`packages`,`boxes`,`delivery`,`mail`,`postal service`,`bundles`,`library`,`libraries`,`shipping`]},{name:`truck`,group:`commerce`,keywords:[`shipping`,`delivery`,`trucks`,`cars`,`vehicles`,`automobile`]},{name:`coins`,group:`commerce`,keywords:[`rewards`,`points`,`cash`,`back`,`cents`,`change`,`money`,`currency`,`payment`,`paying`,`purchase`,`price`,`sell`]},{name:`currency-dollar`,group:`commerce`,keywords:[`price`,`amount`,`usd`,`money`,`payment`,`paying`,`purchase`]},{name:`barcode`,group:`commerce`,keywords:[`upc`,`products`,`shopping`,`scanner`]},{name:`qr-code`,group:`commerce`,keywords:[`scan`,`pay`,`upc`,`barcode`,`products`,`shopping`,`scanner`]},{name:`percent`,group:`commerce`,keywords:[`discount`,`promo`,`sale`,`percentage`,`percentile`,`ratio`,`delta`,`mathematics`,`arithmetic`,`calculator`]},{name:`gift`,group:`commerce`,keywords:[`presents`,`holiday`,`birthday`]},{name:`ticket`,group:`commerce`,keywords:[`coupon`,`promo`,`code`,`voucher`,`ticketstub`,`movie ticket`,`entry`,`admissions`,`events`]},{name:`hand-coins`,group:`commerce`,keywords:[`refund`,`payout`,`donation`,`payment`,`money`,`paying`,`purchase`]},{name:`handshake`,group:`commerce`,keywords:[`emoji`,`deal`,`agreement`]},{name:`map-pin`,group:`commerce`,keywords:[`address`,`shipping`,`location`,`maps`,`places`,`markers`,`pins`,`locations`,`poi`,`point of interest`]},{name:`device-mobile`,group:`commerce`,keywords:[`pay`,`wallet`,`app`,`phone`,`cellphone`,`cellular`]},{name:`shield`,group:`trust`,keywords:[`protection`,`safe`,`badge`,`security`,`secured`,`defense`,`defended`,`authentication`,`authenticated`,`guarded`,`locked`,`encrypted`,`encryption`]},{name:`shield-check`,group:`trust`,keywords:[`protection`,`verified`,`secure`,`checkout`,`3ds`,`badge`,`security`,`defense`,`authentication`,`authenticated`,`guarded`,`locked`,`encrypted`,`encryption`]},{name:`shield-warning`,group:`trust`,keywords:[`risk`,`fraud`,`alert`,`badge`,`security`,`unsecured`,`defense`,`undefended`,`authentication`,`unauthenticated`,`unguarded`,`unlocked`,`unencrypted`,`encryption`,`errors`]},{name:`umbrella`,group:`trust`,keywords:[`insurance`,`coverage`,`protection`,`raining`,`rainy`]},{name:`heartbeat`,group:`trust`,keywords:[`health`,`insurance`,`claim`,`wellness`,`healthy`,`ecg`,`ekg`,`vitals`,`monitor`]},{name:`first-aid-kit`,group:`trust`,keywords:[`medical`,`claim`,`coverage`,`bandages`,`medicine`,`injury`,`safety`,`emergency`,`doctor`]},{name:`lock`,group:`trust`,keywords:[`secure`,`private`,`encrypted`,`pci`,`padlock`,`security`,`secured`,`authentication`,`authenticated`,`login`,`locked`,`encryption`,`privacy`]},{name:`lock-open`,group:`trust`,keywords:[`unlock`,`unlocked`,`padlock`,`security`,`unsecured`,`authentication`,`unauthenticated`,`login`,`unencrypted`,`encryption`,`privacy`]},{name:`key`,group:`trust`,keywords:[`padlock`,`security`,`secured`,`authentication`,`authenticated`,`login`,`locked`,`encrypted`,`encryption`]},{name:`fingerprint`,group:`trust`,keywords:[`biometric`,`passkey`,`authentication`,`security`,`secured`,`authenticated`,`login`,`locked`,`biometrics`,`encrypted`,`encryption`]},{name:`identification-card`,group:`trust`,keywords:[`kyc`,`identity`,`verify`,`id`,`license`,`badge`,`credentials`,`nametag`,`user`,`verification`]},{name:`file-text`,group:`trust`,keywords:[`policy`,`document`,`terms`,`documents`,`files`,`save`,`write`]},{name:`seal-check`,group:`trust`,keywords:[`approved`,`verified`,`trust`,`badge`,`verification`,`shapes`,`polygons`,`circle-wavy`]},{name:`certificate`,group:`trust`,keywords:[`policy`,`license`,`award`,`awards`,`certification`,`degree`,`diploma`]},{name:`clipboard-text`,group:`trust`,keywords:[`claim`,`form`,`policy`,`copy`,`copied`,`checklist`]},{name:`car`,group:`trust`,keywords:[`auto`,`insurance`,`vehicle`,`cars`,`vehicles`,`automobile`,`transit`,`transportation`,`traveling`]},{name:`house-line`,group:`trust`,keywords:[`home`,`insurance`,`property`,`homes`,`buildings`,`places`,`locations`]},{name:`check-circle`,group:`status`,keywords:[`success`,`done`,`confirmed`,`todo`,`task`,`list`,`checkbox`,`round`]},{name:`x-circle`,group:`status`,keywords:[`error`,`failed`,`declined`,`closed`,`cancelled`,`dismissed`,`round`]},{name:`warning`,group:`status`,keywords:[`alert`,`caution`,`danger`,`dangerous`,`errors`]},{name:`warning-circle`,group:`status`,keywords:[`error`,`alert`,`problem`,`danger`,`dangerous`,`caution`,`errors`,`round`]},{name:`info`,group:`status`,keywords:[`help`,`note`,`information`,`support`]},{name:`question`,group:`status`,keywords:[`help`,`unknown`,`information`,`support`,`questions`]},{name:`clock`,group:`status`,keywords:[`time`,`pending`,`times`,`timer`,`alarm`,`schedule`,`events`,`watch`]},{name:`hourglass`,group:`status`,keywords:[`waiting`,`wait`,`times`,`timer`,`alarms`,`clock`,`schedule`,`events`,`progress`]},{name:`timer`,group:`status`,keywords:[`clock`,`alarm`,`schedule`,`events`,`stopwatch`,`sports`]},{name:`prohibit`,group:`status`,keywords:[`blocked`,`disabled`,`not`,`allowed`,`forbidden`,`prohibited`,`cancelled`,`prevent`,`stop`,`do not enter`]},{name:`circle-notch`,group:`status`,keywords:[`loading`,`spinner`,`progress`,`round`,`shapes`,`loader`,`waiting`]},{name:`flag`,group:`status`,keywords:[`country`,`countries`,`finished`,`completed`,`flags`]},{name:`lightning`,group:`status`,keywords:[`fast`,`instant`,`meteorology`,`stormy`,`thunderstorm`,`thunderbolt`,`charged`,`charger`,`charging`,`power`,`electricity`,`flash`]},{name:`circle`,group:`status`,keywords:[`round`,`shapes`,`polygons`]},{name:`palette`,group:`design`,keywords:[`color`,`theme`,`paint`,`colors`,`color picker`,`arts`]},{name:`text-aa`,group:`design`,keywords:[`type`,`font`,`typography`,`typeface`,`print`]},{name:`stack`,group:`design`,keywords:[`layers`,`cards`]},{name:`squares-four`,group:`design`,keywords:[`grid`,`layout`,`apps`,`shapes`,`polygons`,`applications`,`table`,`microsoft`,`logos`]},{name:`ruler`,group:`design`,keywords:[`measure`,`scale`,`distance`]},{name:`code`,group:`design`,keywords:[`developer`,`source`,`angle brackets`,`angle braces`,`snippets`]},{name:`terminal-window`,group:`design`,keywords:[`command line`,`cli`,`bash`,`shell`,`caret`,`console`]},{name:`bounding-box`,group:`design`,keywords:[`space`,`frame`,`selection`,`polygon`,`shapes`,`outline`,`corners`,`rectangle`]},{name:`pen-nib`,group:`design`,keywords:[`ink`,`write`,`writing`,`editing`,`sign`,`signature`,`fountain pen`,`illustrator`]},{name:`eyedropper`,group:`design`,keywords:[`pick`,`color`,`colors`,`color picker`,`sample`,`arts`]},{name:`shapes`,group:`design`,keywords:[`primitives`,`geometry`,`square`,`circle`,`triangle`]},{name:`sparkle`,group:`design`,keywords:[`ai`,`agent`,`magic`,`spark`,`star`,`rate`,`ratings`,`favorites`,`favorited`]},{name:`app-window`,group:`design`,keywords:[`dialog`,`modal`,`windows`,`software`,`programs`,`applications`]},{name:`textbox`,group:`design`,keywords:[`input`,`field`,`cursor`]},{name:`toggle-left`,group:`design`,keywords:[`switch`,`controls`,`settings`,`preferences`]},{name:`columns`,group:`design`,keywords:[`segmented`,`split`,`shapes`,`polygons`,`box`,`stack`,`list`,`table`,`cards`]},{name:`image-square`,group:`design`,keywords:[`card`,`media`,`project`,`pictures`,`photographs`,`photography`,`wallpapers`,`gallery`,`landscape`]},{name:`book-open`,group:`design`,keywords:[`guide`,`docs`,`reading`,`reader`,`novel`,`story`,`library`]},{name:`wave-sine`,group:`design`,keywords:[`motion`,`easing`,`curve`,`synth`,`synthesizer`,`sound`,`audio`,`music`,`waveform`]},{name:`frame-corners`,group:`design`,keywords:[`space`,`shape`,`expand`,`fullscreen`,`maximized`,`resize`,`windowed`,`capture`]},{name:`play`,group:`media`,keywords:[`music`,`audio`,`resume`,`start`]},{name:`pause`,group:`media`,keywords:[`music`,`audio`,`resume`,`start`,`stop`]},{name:`image`,group:`media`,keywords:[`pictures`,`photographs`,`photography`,`wallpapers`,`gallery`,`landscape`]},{name:`video-camera`,group:`media`,keywords:[`videography`,`films`,`movies`,`recording`]},{name:`microphone`,group:`media`,keywords:[`audio`,`recording`,`music`,`sound`,`podcast`,`studio`]},{name:`speaker-high`,group:`media`,keywords:[`volume`,`sound`,`audio`,`music`]},{name:`waveform`,group:`media`,keywords:[`voice`,`listening`,`audio`,`sound`,`spectrum`,`spectrograph`,`music`]}],F=e=>e.normalize(`NFKC`).toLowerCase().replace(/[-_/\\–—]+/g,` `).replace(/\s+/g,` `).trim(),I=e=>F(e).split(` `).filter(Boolean),ne=new Map(N.map(e=>[e.id,F(e.label.replace(`&`,` `)).split(` `).filter(Boolean)]));function re(e,t){let n=e.name;if(n===t)return{rank:0,range:[0,n.length]};let r=0,i=n.split(`-`);for(let e=0;e<i.length;e++){if(i[e].startsWith(t))return{rank:e===0?1:2,range:[r,r+t.length]};r+=i[e].length+1}let a=n.indexOf(t);if(a>=0)return{rank:3,range:[a,a+t.length]};for(let n of e.keywords)if(n===t||n.split(` `).some(e=>e.startsWith(t)))return{rank:4,via:n};return ne.get(e.group)?.some(e=>e.startsWith(t))?{rank:5,via:N.find(t=>t.id===e.group)?.label}:null}function ie(e){let t=[...e].sort((e,t)=>e[0]-t[0]),n=[];for(let[e,r]of t){let t=n[n.length-1];t&&e<=t[1]?t[1]=Math.max(t[1],r):n.push([e,r])}return n}function L(e,t){if(!t.length)return{entry:e,rank:0,ranges:[]};let n=[],r=0,i;for(let a of t){let t=re(e,a);if(!t)return null;r+=t.rank,t.range?n.push(t.range):i??=t.via}return t.join(`-`)===e.name&&(r=-1),{entry:e,rank:r,ranges:ie(n),via:i}}function ae(e,{query:t,group:n=`all`}){let r=I(t),i=[];return e.forEach((e,t)=>{if(n!==`all`&&e.group!==n)return;let a=L(e,r);a&&i.push({match:a,order:t})}),r.length&&i.sort((e,t)=>e.match.rank-t.match.rank||e.order-t.order),i.map(e=>e.match)}function oe(e,t){let n={all:0};for(let e of N)n[e.id]=0;let r=I(t);for(let t of e)L(t,r)&&(n.all+=1,n[t.group]+=1);return n}function se(e,t){let n=[],r=0;for(let[i,a]of t)i>r&&n.push({text:e.slice(r,i),mark:!1}),n.push({text:e.slice(i,a),mark:!0}),r=a;return r<e.length&&n.push({text:e.slice(r),mark:!1}),n}function ce(e,t){return e===0?t.trim()?`No icons match “${t.trim()}”.`:`No icons.`:`${e} ${e===1?`icon`:`icons`}`}var le=(e,t)=>e===t?`${t} icons`:`${e} of ${t}`;function R(e,t,n,r){if(n<=0)return-1;let i=Math.max(1,Math.floor(r)),a=n-1;switch(e){case`ArrowRight`:return Math.min(a,t+1);case`ArrowLeft`:return Math.max(0,t-1);case`ArrowDown`:{let e=t+i;return e<=a?e:Math.floor(a/i)>Math.floor(t/i)?a:t}case`ArrowUp`:return t-i>=0?t-i:t;case`Home`:return 0;case`End`:return a;default:return-1}}var z=e=>e.split(/\s+/).filter(e=>/^[\d.]+px$/.test(e)).length||1,B=e=>String(Math.round(e*100)/100),V=e=>`${B(h(e))} px`,H={16:`Navigation`,20:`Controls`,24:`Standalone actions`,32:`Feature tiles`},U={16:`Sidebar rows, pills, tags and dense tables.`,20:`Inside buttons, inputs and menus.`,24:`Icon buttons and toolbars on their own.`,32:`Feature tiles and empty states.`},W=e=>{let t=e.replace(/-/g,` `);return t.charAt(0).toUpperCase()+t.slice(1)},G=(e,t)=>`${e}${t===`duotone`?`-duotone`:``}.svg`;function ue(e){return e.replace(/></g,`>
  <`).replace(/\n {2}<\/svg>$/,`
</svg>`)}var de=20,fe=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Icon, IconButton } from '@zijie/ui';
`;function K({name:e,size:t,weight:n},r=[]){let i=[`name="${e}"`];return t!==de&&i.push(`size={${t}}`),n!==`regular`&&i.push(`weight="${n}"`),i.push(...r),`<Icon ${i.join(` `)} />`}function pe(e){let t=W(e.name);return[`import { Icon, IconButton } from '@zijie/ui';`,``,`export function ${J(e.name)}Examples() {`,`  return (`,`    <>`,`      {/* Decorative: it sits inside a control that already has a name. */}`,`      ${K(e)}`,``,`      {/* Standalone: give it its own name. */}`,`      ${K(e,[`label="${t}"`])}`,``,`      {/* An icon-only button always carries a label. */}`,`      <IconButton icon="${e.name}" label="${t}" />`,`    </>`,`  );`,`}`,``].join(`
`)}var me=e=>K(e),q=e=>o(e.name,{size:e.size,weight:e.weight}),he=e=>`${ue(q(e))}\n`,ge=(e,t)=>t===`svg`?G(e.name,e.weight):`${J(e.name)}Examples.tsx`,_e=(e,t=`react`)=>t===`svg`?he(e):pe(e),J=e=>e.split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(``),Y=s(),X=[{id:`all`,label:`All`},...N.map(e=>({id:e.id,label:e.label}))];function ve({value:e,counts:t,onChange:n}){let r=(0,M.useRef)(null),a=(0,M.useRef)(null),o=(0,M.useRef)(new Map),s=(0,M.useRef)(e);s.current=e;let c=(0,M.useCallback)(e=>{let t=a.current,n=o.current.get(s.current),c=r.current;if(!t||!n||!c||!n.offsetWidth)return;let l=n.offsetLeft,u=n.offsetTop,d={x:Number(t.dataset.left??NaN),y:Number(t.dataset.top??NaN)},f=e||Number.isNaN(d.x);f&&(t.dataset.snap=``),t.style.setProperty(`--l`,`${l}px`),t.style.setProperty(`--r`,`${Math.max(0,c.clientWidth-l-n.offsetWidth)}px`),t.style.setProperty(`--t`,`${u}px`),t.style.setProperty(`--b`,`${Math.max(0,c.clientHeight-u-n.offsetHeight)}px`),t.style.setProperty(`--glide`,`${i(Number.isNaN(d.x)?0:Math.hypot(l-d.x,u-d.y))}ms`),t.dataset.left=String(l),t.dataset.top=String(u),f&&(t.offsetWidth,delete t.dataset.snap)},[]);(0,M.useLayoutEffect)(()=>{c(!1)},[e,c]),(0,M.useEffect)(()=>{let e=r.current;if(!e)return;let t=``,n=new ResizeObserver(([e])=>{let n=`${Math.round(e.contentRect.width)}x${Math.round(e.contentRect.height)}`,r=t!==``&&t!==n;t=n,r&&c(!0)});n.observe(e);let i=!0;return document.fonts?.ready.then(()=>{i&&c(!0)}),()=>{i=!1,n.disconnect()}},[c]);let l=X.map(e=>t[e.id]).join(`,`);(0,M.useLayoutEffect)(()=>{c(!0)},[l,c]);let u=(e,t)=>{let r=t;if(e.key===`ArrowRight`||e.key===`ArrowDown`)r=Math.min(X.length-1,t+1);else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)r=Math.max(0,t-1);else if(e.key===`Home`)r=0;else if(e.key===`End`)r=X.length-1;else return;if(e.preventDefault(),r===t)return;n(X[r].id);let i=o.current.get(X[r].id);i?.focus(),i?.scrollIntoView({block:`nearest`,inline:`nearest`})};return(0,Y.jsx)(`div`,{className:`icons-cats`,role:`radiogroup`,"aria-label":`Category`,children:(0,Y.jsxs)(`div`,{ref:r,className:`icons-cats__track`,children:[X.map((r,i)=>(0,Y.jsxs)(`button`,{ref:e=>{e?o.current.set(r.id,e):o.current.delete(r.id)},type:`button`,role:`radio`,className:`icons-cat`,"aria-checked":r.id===e,tabIndex:r.id===e?0:-1,onClick:()=>{n(r.id),o.current.get(r.id)?.scrollIntoView({block:`nearest`,inline:`nearest`})},onKeyDown:e=>u(e,i),children:[(0,Y.jsx)(`span`,{children:r.label}),(0,Y.jsx)(`span`,{className:`icons-cat__count`,children:t[r.id]})]},r.id)),(0,Y.jsx)(`div`,{ref:a,className:`icons-cats__lens`,"aria-hidden":`true`,"data-snap":``,children:X.map(e=>(0,Y.jsxs)(`span`,{className:`icons-cat`,children:[(0,Y.jsx)(`span`,{children:e.label}),(0,Y.jsx)(`span`,{className:`icons-cat__count`,children:t[e.id]})]},e.id))})]})})}var ye=40,be=15,xe=8;function Se({name:e,ranges:t}){return(0,Y.jsx)(`span`,{className:`icons-tile__label`,children:se(e,t).map((e,t)=>{let n=e.text.split(/(?<=-)/).map((e,t)=>(0,Y.jsxs)(M.Fragment,{children:[e,e.endsWith(`-`)?(0,Y.jsx)(`wbr`,{}):null]},t));return e.mark?(0,Y.jsx)(`mark`,{children:n},t):(0,Y.jsx)(M.Fragment,{children:n},t)})})}function Ce({matches:e,selected:t,size:n,weight:r,onSelect:o,onType:s,gridRef:l}){let u=(0,M.useRef)(null),d=(0,M.useRef)(new Map),h=(0,M.useRef)(null),g=(0,M.useRef)(1),_=e.map(e=>e.entry.name),v=_.join(`|`),y=_.includes(t)?t:_[0],b=(0,M.useRef)(t);b.current=t;let x=(0,M.useCallback)(()=>{let e=new Map;return d.current.forEach((t,n)=>e.set(n,{x:t.offsetLeft,y:t.offsetTop})),e},[]),S=(0,M.useCallback)((e,{snap:t=!1,glide:n}={})=>{let r=u.current;if(!r)return;let a=d.current.get(e);if(!a){r.dataset.hidden=``;return}let o=a.offsetLeft,s=a.offsetTop,c={x:Number(r.dataset.x??NaN),y:Number(r.dataset.y??NaN)},l=t||Number.isNaN(c.x)||r.dataset.hidden!==void 0;l&&(r.dataset.snap=``),r.style.setProperty(`--x`,`${o}px`),r.style.setProperty(`--y`,`${s}px`),r.style.setProperty(`--w`,`${a.offsetWidth}px`),r.style.setProperty(`--h`,`${a.offsetHeight}px`),r.style.setProperty(`--glide`,`${n??i(Number.isNaN(c.x)?0:Math.hypot(o-c.x,s-c.y))}ms`),r.dataset.x=String(o),r.dataset.y=String(s),l&&r.offsetWidth,delete r.dataset.hidden,l&&delete r.dataset.snap},[]),C=(0,M.useRef)(null);(0,M.useLayoutEffect)(()=>{let e=h.current,n=x();h.current=n;let r=C.current!==null&&C.current!==v;if(C.current=v,S(t,{glide:r?a.control:void 0}),!r||!e)return;let i=0;if(n.forEach((t,n)=>{let r=e.get(n);(!r||r.x!==t.x||r.y!==t.y)&&(i+=1)}),i>ye)return;let o=0;n.forEach((t,n)=>{let r=d.current.get(n),i=e.get(n);if(r){if(i){if(i.x===t.x&&i.y===t.y)return;f(r,[{translate:`${i.x-t.x}px ${i.y-t.y}px`},{translate:`0px 0px`}],{duration:a.control,easing:p})}else f(r,[{opacity:0,scale:.96},{opacity:1,scale:1}],{duration:a.feedback,easing:c,delay:Math.min(o,xe)*be}),o+=1}})},[v,t,S,x]),(0,M.useEffect)(()=>{let e=l.current;if(!e)return;let t=()=>{g.current=z(getComputedStyle(e).gridTemplateColumns),h.current=x()};t();let n=e.clientWidth,r=new ResizeObserver(()=>{e.clientWidth!==n&&(n=e.clientWidth,t(),S(b.current,{snap:!0}))});r.observe(e);let i=!0;return document.fonts?.ready.then(()=>{i&&(t(),S(b.current,{snap:!0}))}),()=>{i=!1,r.disconnect()}},[l,S,x]);let w=(e,t)=>{if(e.altKey||e.ctrlKey||e.metaKey)return;let n=R(e.key,t,_.length,g.current);n>=0?(e.preventDefault(),n!==t&&(o(_[n]),d.current.get(_[n])?.focus())):e.key.length===1&&/\S/.test(e.key)&&(e.preventDefault(),s(e.key))};return(0,Y.jsxs)(`div`,{ref:l,className:`icons-grid`,role:`radiogroup`,"aria-label":`Icons`,"data-weight":r,children:[(0,Y.jsx)(`span`,{ref:u,className:`icons-plate`,"aria-hidden":`true`,"data-hidden":``,"data-snap":``}),e.map(({entry:e,ranges:r},i)=>{let a=e.name;return(0,Y.jsxs)(`button`,{ref:e=>{e?d.current.set(a,e):d.current.delete(a)},type:`button`,role:`radio`,className:`icons-tile`,"aria-checked":a===t,tabIndex:a===y?0:-1,"data-name":a,onClick:()=>o(a),onKeyDown:e=>w(e,i),children:[(0,Y.jsx)(`span`,{className:`icons-tile__glyph`,"aria-hidden":`true`,children:(0,Y.jsx)(m,{name:a,size:32,weight:`duotone`,style:{scale:n/32}})}),(0,Y.jsx)(Se,{name:a,ranges:r})]},a)})]})}function we(){let e=[];for(let t=32;t<256;t+=32)e.push(`M${t} 0V256M0 ${t}H256`);return(0,Y.jsxs)(`svg`,{className:`icons-keylines`,viewBox:`0 0 256 256`,"aria-hidden":`true`,focusable:`false`,children:[(0,Y.jsx)(`path`,{className:`icons-keylines__lattice`,d:e.join(``)}),(0,Y.jsx)(`rect`,{className:`icons-keylines__live`,x:`16`,y:`16`,width:`224`,height:`224`,rx:`8`}),(0,Y.jsx)(`path`,{className:`icons-keylines__center`,d:`M128 0V256M0 128H256`})]})}var Te=1600;function Ee({entry:n,size:r,weight:i,visible:o,onShowAll:s}){let u={name:n.name,size:r,weight:i},[d,h]=(0,M.useState)(!1),[g,_]=(0,M.useState)(null),[v,y]=(0,M.useState)(!1),[b,x]=(0,M.useState)(``),S=(0,M.useRef)(0),C=(0,M.useRef)(null),w=(0,M.useRef)(null),T=(0,M.useRef)(!0),E=N.find(e=>e.id===n.group)?.label??``;(0,M.useEffect)(()=>()=>window.clearTimeout(S.current),[]),(0,M.useLayoutEffect)(()=>{T.current?T.current=!1:(f(C.current,[{scale:.86,opacity:0},{scale:1,opacity:1}],{duration:a.control,easing:p}),f(w.current,[{opacity:0,translate:`0 4px`},{opacity:1,translate:`0 0`}],{duration:a.feedback,easing:c}))},[n.name]);let D=(e,t,n)=>{window.clearTimeout(S.current),y(!t),_(t?e:null),x(t?n:`Select the code to copy.`),S.current=window.setTimeout(()=>{_(null),y(!1)},Te)},O=async e=>{let r=e===`jsx`?me(u):q(u);D(e,await t(r),e===`jsx`?`Copied JSX for ${n.name}.`:`Copied SVG for ${n.name}.`)},k=()=>{let t=G(n.name,i);e(t,`${q(u)}\n`,`image/svg+xml`),D(`download`,!0,`Downloaded ${t}.`)},A=n.keywords.slice(0,8);return(0,Y.jsxs)(`aside`,{className:`icons-inspector`,"aria-label":`Selected icon`,"data-weight":i,children:[(0,Y.jsxs)(`div`,{className:`icons-preview`,"data-keylines":d?``:void 0,children:[(0,Y.jsx)(`div`,{ref:C,className:`icons-preview__glyph`,children:(0,Y.jsx)(m,{name:n.name,size:128,weight:`duotone`})}),(0,Y.jsx)(we,{}),(0,Y.jsx)(`button`,{type:`button`,className:`icons-preview__toggle`,"aria-pressed":d,onClick:()=>h(e=>!e),children:`Keylines`})]}),(0,Y.jsxs)(`div`,{className:`icons-inspector__text`,children:[(0,Y.jsx)(`h3`,{ref:w,className:`icons-inspector__name`,children:n.name}),(0,Y.jsxs)(`p`,{className:`icons-inspector__meta`,children:[r,` px · `,i]}),!o&&(0,Y.jsxs)(`p`,{className:`icons-inspector__note`,children:[`Hidden by the current filter. `,(0,Y.jsx)(`button`,{type:`button`,onClick:s,children:`Show all`})]})]}),(0,Y.jsxs)(`dl`,{className:`icons-facts`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`dt`,{children:`Group`}),(0,Y.jsx)(`dd`,{children:E})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`dt`,{children:`Size`}),(0,Y.jsxs)(`dd`,{children:[r,` px`]})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`dt`,{children:`Line`}),(0,Y.jsxs)(`dd`,{children:[V(r),` at `,r,` px`]})]})]}),(0,Y.jsxs)(`div`,{className:`icons-inspector__actions`,children:[(0,Y.jsx)(l,{variant:`blue`,size:`sm`,reserveFeedback:!1,state:g===`jsx`?`success`:`idle`,onClick:()=>{O(`jsx`)},children:g===`jsx`?`Copied`:`Copy JSX`}),(0,Y.jsxs)(`div`,{className:`icons-inspector__secondary`,children:[(0,Y.jsx)(l,{variant:`light`,size:`sm`,reserveFeedback:!1,state:g===`svg`?`success`:`idle`,onClick:()=>{O(`svg`)},children:g===`svg`?`Copied`:`Copy SVG`}),(0,Y.jsx)(l,{variant:`ghost`,size:`sm`,reserveFeedback:!1,state:g===`download`?`success`:`idle`,onClick:k,children:g===`download`?`Saved`:`Download`})]}),v&&(0,Y.jsx)(`p`,{className:`icons-inspector__failed`,children:`Select the code to copy.`})]}),A.length>0&&(0,Y.jsxs)(`div`,{className:`icons-keywords`,children:[(0,Y.jsx)(`p`,{className:`icons-keywords__label`,children:`Also found as`}),(0,Y.jsx)(`ul`,{className:`icons-keywords__list`,children:A.map(e=>(0,Y.jsx)(`li`,{children:e},e))})]}),(0,Y.jsx)(`p`,{className:`kit-sr-only`,role:`status`,children:b})]})}function De({value:e,onChange:t,onSubmit:n,onEnterGrid:r,inputRef:i,count:a}){let o=(0,M.useId)();return(0,Y.jsxs)(`div`,{className:`icons-field`,children:[(0,Y.jsxs)(`div`,{className:`icons-field__head`,children:[(0,Y.jsx)(`label`,{htmlFor:o,className:`kit-control__label`,children:`Search`}),(0,Y.jsx)(`p`,{className:`icons-count`,children:a})]}),(0,Y.jsxs)(`div`,{className:`icons-search`,"data-filled":e?``:void 0,children:[(0,Y.jsx)(`span`,{className:`icons-search__icon`,"aria-hidden":`true`,children:(0,Y.jsx)(m,{name:`magnifying-glass`,size:20})}),(0,Y.jsx)(`input`,{id:o,ref:i,className:`icons-search__input`,type:`search`,value:e,placeholder:`Try card, shield, arrow`,autoComplete:`off`,autoCapitalize:`off`,spellCheck:!1,enterKeyHint:`search`,onChange:e=>t(e.target.value),onKeyDown:i=>{i.key===`Escape`?(i.preventDefault(),e?t(``):r()):i.key===`Enter`?(i.preventDefault(),n()):i.key===`ArrowDown`&&(i.preventDefault(),r())}}),(0,Y.jsx)(`button`,{type:`button`,className:`icons-search__clear`,"aria-label":`Clear search`,inert:!e,onClick:()=>{t(``),i.current?.focus()},children:(0,Y.jsx)(m,{name:`x`,size:16})})]})]})}var Oe={query:``,group:`all`,size:24,weight:`regular`,selected:`credit-card`},ke=g.map(e=>({value:String(e),label:String(e)})),Ae=[{value:`regular`,label:`Regular`},{value:`duotone`,label:`Duotone`}],je=[`card`,`shield`,`receipt`,`arrow`],Me=e=>P.find(t=>t.name===e)??P[0];function Ne({state:e,setState:t}){let{query:n,group:r,size:i,weight:a,selected:o}=e,s=(0,M.useRef)(null),c=(0,M.useRef)(null),l=(0,M.useMemo)(()=>ae(P,{query:n,group:r}),[n,r]),u=(0,M.useMemo)(()=>oe(P,n),[n]),d=l.some(e=>e.entry.name===o),f=e=>t(t=>({...t,...e})),p=Pe(l.length,n,r),h=e=>{let t=c.current;t&&(e&&l.length&&f({selected:l[0].entry.name}),requestAnimationFrame(()=>(t.querySelector(`[role="radio"][tabindex="0"]`)??t.querySelector(`[role="radio"]`))?.focus()))},g=e=>{f({query:n+e});let t=s.current;t&&(t.focus(),requestAnimationFrame(()=>t.setSelectionRange(t.value.length,t.value.length)))},_=()=>f({query:``,group:`all`}),v=r!==`all`&&u.all>0;return(0,Y.jsxs)(`div`,{className:`icons-browser`,children:[(0,Y.jsxs)(`div`,{className:`icons-toolbar`,children:[(0,Y.jsx)(De,{value:n,onChange:e=>f({query:e}),onSubmit:()=>h(!0),onEnterGrid:()=>h(!1),inputRef:s,count:le(l.length,P.length)}),(0,Y.jsx)(C,{label:`Weight`,value:a,options:Ae,onChange:e=>f({weight:e})}),(0,Y.jsx)(C,{label:`Size`,value:String(i),options:ke,onChange:e=>f({size:Number(e)})})]}),(0,Y.jsx)(`div`,{className:`icons-filters`,children:(0,Y.jsx)(ve,{value:r,counts:u,onChange:e=>f({group:e})})}),(0,Y.jsxs)(`div`,{className:`icons-layout`,children:[(0,Y.jsx)(`div`,{className:`icons-gridwrap`,children:l.length>0?(0,Y.jsx)(Ce,{matches:l,selected:o,size:i,weight:a,onSelect:e=>f({selected:e}),onType:g,gridRef:c}):(0,Y.jsxs)(`div`,{className:`icons-empty`,children:[(0,Y.jsx)(`span`,{className:`icons-empty__mark`,"aria-hidden":`true`,children:(0,Y.jsx)(m,{name:`magnifying-glass`,size:32,weight:`duotone`})}),(0,Y.jsxs)(`p`,{className:`icons-empty__title`,children:[`No icons match “`,n.trim(),`”.`]}),v?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(`p`,{className:`icons-empty__text`,children:[u.all,` `,u.all===1?`icon matches`:`icons match`,` in other categories.`]}),(0,Y.jsx)(`button`,{type:`button`,className:`icons-empty__action`,onClick:()=>f({group:`all`}),children:`Show all categories`})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`p`,{className:`icons-empty__text`,children:`Try a shorter word, or one of these.`}),(0,Y.jsx)(`ul`,{className:`icons-empty__list`,role:`list`,children:je.map(e=>(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`button`,{type:`button`,onClick:()=>f({query:e,group:`all`}),children:e})},e))}),(0,Y.jsx)(`button`,{type:`button`,className:`icons-empty__action`,onClick:_,children:`Clear search`})]})]})}),(0,Y.jsx)(Ee,{entry:Me(o),size:i,weight:a,visible:d,onShowAll:_})]}),(0,Y.jsx)(`p`,{className:`kit-sr-only`,role:`status`,children:p})]})}function Pe(e,t,n){let[r,i]=(0,M.useState)(``),a=(0,M.useRef)(!0);return(0,M.useEffect)(()=>{if(a.current){a.current=!1;return}let n=window.setTimeout(()=>i(ce(e,t)),400);return()=>window.clearTimeout(n)},[e,t,n]),r}function Fe({name:e}){return(0,Y.jsx)(`div`,{className:`icons-sizes`,children:(0,Y.jsxs)(`table`,{className:`icons-sizes__table`,children:[(0,Y.jsx)(`caption`,{className:`kit-sr-only`,children:`Icon sizes, with both weights and the rendered line`}),(0,Y.jsx)(`thead`,{children:(0,Y.jsxs)(`tr`,{children:[(0,Y.jsx)(`th`,{scope:`col`,children:`Size`}),(0,Y.jsx)(`th`,{scope:`col`,children:`Role`}),(0,Y.jsx)(`th`,{scope:`col`,children:`Regular`}),(0,Y.jsx)(`th`,{scope:`col`,children:`Duotone`}),(0,Y.jsx)(`th`,{scope:`col`,children:`Line`})]})}),(0,Y.jsx)(`tbody`,{children:g.map(t=>(0,Y.jsxs)(`tr`,{children:[(0,Y.jsxs)(`th`,{scope:`row`,"data-label":`Size`,children:[(0,Y.jsx)(`span`,{className:`icons-sizes__px`,children:t}),(0,Y.jsx)(`span`,{className:`icons-sizes__unit`,children:` px`})]}),(0,Y.jsxs)(`td`,{"data-label":`Role`,children:[(0,Y.jsx)(`span`,{className:`icons-sizes__role`,children:H[t]}),(0,Y.jsx)(`span`,{className:`icons-sizes__use`,children:U[t]})]}),(0,Y.jsx)(`td`,{"data-label":`Regular`,children:(0,Y.jsx)(`span`,{className:`icons-sizes__glyph`,children:(0,Y.jsx)(m,{name:e,size:t,weight:`regular`})})}),(0,Y.jsx)(`td`,{"data-label":`Duotone`,children:(0,Y.jsx)(`span`,{className:`icons-sizes__glyph`,children:(0,Y.jsx)(m,{name:e,size:t,weight:`duotone`})})}),(0,Y.jsx)(`td`,{"data-label":`Line`,children:(0,Y.jsxs)(`span`,{className:`icons-line`,style:{"--line":`${h(t)}px`},children:[(0,Y.jsx)(`span`,{className:`icons-line__bar`,"aria-hidden":`true`}),(0,Y.jsx)(`span`,{className:`icons-line__value`,children:V(t)})]})})]},t))})]})})}function Ie({name:e,weight:t}){return(0,Y.jsx)(`div`,{className:`icons-optical`,children:[{id:`raw`,title:`Line only`,value:`0.75 px`,note:`Thin enough to vanish beside text.`,optical:!1},{id:`optical`,title:`Optical`,value:`1 px`,note:`The outline grows. The line holds.`,optical:!0}].map(n=>(0,Y.jsxs)(`figure`,{className:`icons-optical__case`,"data-case":n.id,children:[(0,Y.jsx)(`div`,{className:`icons-optical__zoom`,"aria-hidden":`true`,children:(0,Y.jsx)(m,{name:e,size:12,weight:t,optical:n.optical,className:`icons-optical__glyph`})}),(0,Y.jsxs)(`figcaption`,{children:[(0,Y.jsx)(`span`,{className:`icons-optical__title`,children:n.title}),(0,Y.jsx)(`span`,{className:`icons-optical__value`,children:n.value}),(0,Y.jsx)(`span`,{className:`icons-optical__note`,children:n.note})]}),(0,Y.jsxs)(`span`,{className:`icons-optical__actual`,"aria-hidden":`true`,children:[(0,Y.jsx)(m,{name:e,size:12,weight:t,optical:n.optical}),` 12 px, actual size`]})]},n.id))})}var Z=[{icon:`bag`,label:`My Experiences`},{icon:`thumbs-up`,label:`Recommendations I received`},{icon:`shield-check`,label:`Secure checkout`}];function Le(){return(0,Y.jsx)(`div`,{className:`icons-pills`,children:(0,Y.jsx)(`ul`,{className:`icons-pills__list`,role:`list`,children:Z.map(e=>(0,Y.jsxs)(`li`,{className:`icons-pill`,children:[(0,Y.jsx)(m,{name:e.icon,size:16,weight:`duotone`}),e.label]},e.label))})})}var Re=[{id:`card`,icon:`credit-card`,title:`Visa ending 4242`,note:`Expires 08/29`},{id:`wallet`,icon:`wallet`,title:`Wallet balance`,note:`$120.00 available`},{id:`bank`,icon:`bank`,title:`Bank transfer`,note:`Arrives in 1 to 2 days`}];function ze(){let e=(0,M.useId)(),[t,n]=(0,M.useState)(`card`),[r,i]=(0,M.useState)(!0),a=r?`$48.00`:`$47.01`;return(0,Y.jsxs)(`section`,{className:`icons-scene`,"aria-label":`Checkout`,children:[(0,Y.jsxs)(`div`,{className:`icons-card`,children:[(0,Y.jsxs)(`div`,{className:`icons-card__head`,children:[(0,Y.jsx)(`h3`,{className:`icons-card__title`,children:`Payment method`}),(0,Y.jsxs)(`span`,{className:`icons-pill`,children:[(0,Y.jsx)(m,{name:`lock`,size:16,weight:`duotone`}),`Secure checkout`]})]}),(0,Y.jsxs)(`fieldset`,{className:`icons-methods`,children:[(0,Y.jsx)(`legend`,{className:`kit-sr-only`,children:`Payment method`}),Re.map(r=>(0,Y.jsxs)(`label`,{className:`icons-method`,children:[(0,Y.jsx)(`input`,{type:`radio`,name:e,value:r.id,checked:t===r.id,onChange:()=>n(r.id)}),(0,Y.jsx)(`span`,{className:`icons-method__tile`,"aria-hidden":`true`,children:(0,Y.jsx)(m,{name:r.icon,size:24,weight:`duotone`})}),(0,Y.jsxs)(`span`,{className:`icons-method__text`,children:[(0,Y.jsx)(`span`,{className:`icons-method__title`,children:r.title}),(0,Y.jsx)(`span`,{className:`icons-method__note`,children:r.note})]}),(0,Y.jsx)(`span`,{className:`icons-method__mark`,"aria-hidden":`true`,children:(0,Y.jsx)(m,{name:`check`,size:16})})]},r.id))]}),(0,Y.jsxs)(`div`,{className:`icons-protect`,children:[(0,Y.jsx)(`span`,{className:`icons-protect__icon`,"aria-hidden":`true`,children:(0,Y.jsx)(m,{name:`shield-check`,size:20,weight:`duotone`})}),(0,Y.jsx)(d,{label:`Shipping protection`,checked:r,onChange:i}),(0,Y.jsx)(`span`,{className:`icons-method__note`,children:`+$0.99`})]}),(0,Y.jsxs)(l,{variant:`blue`,size:`lg`,icon:`arrow-right`,children:[`Pay `,a]})]}),(0,Y.jsx)(j,{className:`icons-scene__tag`})]})}var Be=[{icon:`check-circle`,tone:`done`,title:`Claim submitted`,note:`Today, 9:41`},{icon:`check-circle`,tone:`done`,title:`Photos received`,note:`Today, 9:44`},{icon:`warning-circle`,tone:`attention`,title:`One document missing`,note:`Add the repair estimate`},{icon:`clock`,tone:`now`,title:`Review`,note:`Usually within 24 hours`},{icon:`circle`,tone:`next`,title:`Payout to Visa ending 4242`,note:`After approval`}];function Ve(){return(0,Y.jsx)(`section`,{className:`icons-scene`,"aria-label":`Insurance claim`,children:(0,Y.jsxs)(`div`,{className:`icons-card`,children:[(0,Y.jsxs)(`div`,{className:`icons-card__head`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h3`,{className:`icons-card__title`,children:`Claim CL-20931`}),(0,Y.jsx)(`p`,{className:`icons-card__sub`,children:`Cracked screen, protection plan`})]}),(0,Y.jsx)(u,{icon:`download-simple`,label:`Download summary`})]}),(0,Y.jsx)(`ol`,{className:`icons-steps`,children:Be.map(e=>(0,Y.jsxs)(`li`,{className:`icons-step`,"data-tone":e.tone,children:[(0,Y.jsx)(`span`,{className:`icons-step__icon`,"aria-hidden":`true`,children:(0,Y.jsx)(m,{name:e.icon,size:24,weight:e.tone===`next`?`regular`:`duotone`})}),(0,Y.jsxs)(`span`,{className:`icons-step__text`,children:[(0,Y.jsx)(`span`,{className:`icons-method__title`,children:e.title}),(0,Y.jsx)(`span`,{className:`icons-method__note`,children:e.note})]})]},e.title))}),(0,Y.jsx)(l,{variant:`dark`,icon:`arrow-up-right`,children:`Add document`})]})})}var He=[{name:`Icon.tsx`,code:`import type { SVGProps } from 'react';
import { GLYPH_GRID } from './glyphs';
import { iconLayers, resolveIconName, type IconName, type IconWeight } from './svg';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'children' | 'viewBox' | 'fill' | 'width' | 'height'> {
  /** A Phosphor glyph name, or one of the older names in \`iconAliases\` (menu, close, chevron-down…). */
  name: IconName;
  /** Pixels. The system uses 16, 20, 24 and 32; the default is 20. */
  size?: number;
  /** \`regular\` for interface, \`duotone\` for pills and illustration. */
  weight?: IconWeight;
  /** Accessible name. Without it the icon is decorative and hidden from assistive tech. */
  label?: string;
  /** Below 16px, grow the outline so the line never falls under 1px. On by default. */
  optical?: boolean;
  /**
   * Duotone only. \`always\` (default) draws the tone layer. \`current\` draws it only while the control around the icon
   * is current: \`aria-current\`, \`aria-selected="true"\`, \`aria-pressed="true"\` or \`aria-checked="true"\`. The tone fades in.
   */
  tone?: 'always' | 'current';
}

/**
 * Phosphor glyphs on a 256 grid, drawn as filled outlines in \`currentColor\`.
 * Decorative by default: name the control that contains it, or pass \`label\` for a standalone icon.
 * Below 16px the outline is grown so the line never falls under 1px (see \`opticalOutline\`).
 */
export function Icon({ name, size = 20, weight = 'regular', label, optical = true, tone = 'always', className, ...props }: IconProps) {
  const layers = iconLayers(name, weight, size, optical);
  return (
    <svg
      {...props}
      className={className ? \`z-icon \${className}\` : 'z-icon'}
      width={size}
      height={size}
      viewBox={\`0 0 \${GLYPH_GRID} \${GLYPH_GRID}\`}
      fill="currentColor"
      data-icon={resolveIconName(name)}
      data-weight={weight}
      data-tone={tone === 'current' ? 'current' : undefined}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {layers?.tone.map((d, index) => <path key={index} className="z-icon__tone" d={d} opacity=".2" />)}
      {layers && (
        <path
          className="z-icon__line"
          d={layers.line}
          {...(layers.outline ? { stroke: 'currentColor', strokeWidth: layers.outline, strokeLinejoin: 'round' as const } : null)}
        />
      )}
    </svg>
  );
}
`},{name:`svg.ts`,code:`/* Pure icon geometry and a string renderer. No DOM, no React: runs in Node, so the same
   glyph data drives the component, copy-able SVG on the docs page and the tests. */
import { iconAliases, type IconAlias } from './aliases';
import { GLYPH_GRID, glyphs, type GlyphName } from './glyphs';

export type IconWeight = 'regular' | 'duotone';
export type IconName = GlyphName | IconAlias;

export const iconWeights: readonly IconWeight[] = Object.freeze(['regular', 'duotone']);

/** The four sizes the system uses: navigation, controls, standalone actions, feature tiles. */
export const ICON_SIZES = Object.freeze([16, 20, 24, 32] as const);
export type IconSize = (typeof ICON_SIZES)[number];

/** Phosphor's regular line is 16 of 256 units wide, so it renders at size/16 px. */
export const LINE_UNITS = 16;
/** Below this width the line stops reading as a line. */
export const MIN_LINE_PX = 1;

/** Canonical names, alphabetical. */
export const iconNames = Object.freeze(Object.keys(glyphs).sort()) as readonly GlyphName[];

export const isGlyphName = (value: string): value is GlyphName => Object.hasOwn(glyphs, value);
export const isIconAlias = (value: string): value is IconAlias => Object.hasOwn(iconAliases, value);
export const isIconName = (value: string): value is IconName => isGlyphName(value) || isIconAlias(value);

/** An alias or a Phosphor name, resolved to the glyph it draws. Undefined if it is neither. */
export function resolveIconName(name: string): GlyphName | undefined {
  if (isGlyphName(name)) return name;
  return isIconAlias(name) ? iconAliases[name] : undefined;
}

/** Rendered width of the regular line at a size, in px. */
export const linePx = (size: number) => (size * LINE_UNITS) / GLYPH_GRID;

/**
 * Optical size: below 16px the regular line would drop under 1px, so the outline is grown by the
 * missing amount (in glyph units). 16px and up are untouched. 12px → 5.33 units → a 1px line.
 */
export function opticalOutline(size: number): number {
  const missing = MIN_LINE_PX - linePx(size);
  return missing > 0 ? Math.round(((missing * GLYPH_GRID) / size) * 100) / 100 : 0;
}

export interface IconLayers {
  name: GlyphName;
  /** Duotone tone paths, drawn first at 20% opacity. Empty for regular. */
  tone: readonly string[];
  /** The outline: Phosphor's line path. */
  line: string;
  /** Extra outline width in glyph units (see opticalOutline). */
  outline: number;
}

/** The paths to draw for a name, weight and size; undefined for a name the set does not have. \`optical: false\` skips the small-size outline. */
export function iconLayers(name: string, weight: IconWeight = 'regular', size = 24, optical = true): IconLayers | undefined {
  const resolved = resolveIconName(name);
  if (!resolved) return undefined;
  const glyph = glyphs[resolved];
  const duotone = weight === 'duotone';
  return {
    name: resolved,
    tone: duotone ? glyph.t : [],
    line: duotone ? (glyph.d ?? glyph.r) : glyph.r,
    outline: optical ? opticalOutline(size) : 0,
  };
}

const escapeAttribute = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export interface IconSvgOptions {
  /** Pixel size, default 24. */
  size?: number;
  weight?: IconWeight;
  /** Accessible name. Without it the SVG is decorative (aria-hidden). */
  label?: string;
  /** Adds a class attribute; the SVG needs none to render. */
  className?: string;
  /** Add xmlns (needed for a standalone .svg file; harmless inline). Default true. */
  xmlns?: boolean;
  /** Grow the outline below 16px so the line stays at 1px. Default true. */
  optical?: boolean;
}

/**
 * A self-contained SVG string: presentation attributes only, so it renders correctly pasted into
 * any markup, Figma or a .svg file. Throws RangeError for an unknown name, weight or size.
 */
export function iconSvg(name: string, { size = 24, weight = 'regular', label, className, xmlns = true, optical = true }: IconSvgOptions = {}): string {
  if (!(typeof size === 'number' && Number.isFinite(size) && size > 0)) throw new RangeError(\`Icon size must be a positive number, got \${String(size)}\`);
  if (!iconWeights.includes(weight)) throw new RangeError(\`Unknown icon weight: \${String(weight)}\`);
  const layers = iconLayers(name, weight, size, optical);
  if (!layers) throw new RangeError(\`Unknown icon: \${name}\`);
  const attributes = [
    ...(xmlns ? ['xmlns="http://www.w3.org/2000/svg"'] : []),
    ...(className ? [\`class="\${escapeAttribute(className)}"\`] : []),
    \`width="\${size}"\`,
    \`height="\${size}"\`,
    \`viewBox="0 0 \${GLYPH_GRID} \${GLYPH_GRID}"\`,
    'fill="currentColor"',
    ...(label ? ['role="img"', \`aria-label="\${escapeAttribute(label)}"\`] : ['aria-hidden="true"', 'focusable="false"']),
  ];
  const outline = layers.outline ? \` stroke="currentColor" stroke-width="\${layers.outline}" stroke-linejoin="round"\` : '';
  return \`<svg \${attributes.join(' ')}>\${layers.tone.map(d => \`<path d="\${d}" opacity="0.2"/>\`).join('')}<path d="\${layers.line}"\${outline}/></svg>\`;
}
`},{name:`aliases.ts`,code:`import type { GlyphName } from './glyphs';

/* Older and shorter names, mapped onto the Phosphor glyph set so call sites never have to change.
   Keys that already are Phosphor names (arrow-right, check, copy, play, pause, code, circle) need no entry.
   The docs list these under "Legacy names"; the tests keep every target real. */
export const iconAliases = {
  // The original sixteen
  'chevron-down': 'caret-down',
  menu: 'list',
  close: 'x',
  grid: 'squares-four',
  type: 'text-aa',
  layers: 'stack',
  spark: 'sparkle',
  // Direction
  'chevron-up': 'caret-up',
  'chevron-left': 'caret-left',
  'chevron-right': 'caret-right',
  external: 'arrow-square-out',
  refresh: 'arrow-clockwise',
  retry: 'arrow-clockwise',
  undo: 'arrow-counter-clockwise',
  expand: 'arrows-out-simple',
  collapse: 'arrows-in-simple',
  // Interface
  search: 'magnifying-glass',
  filter: 'funnel',
  more: 'dots-three',
  settings: 'gear',
  sliders: 'sliders-horizontal',
  download: 'download-simple',
  upload: 'upload-simple',
  edit: 'pencil-simple',
  delete: 'trash',
  home: 'house',
  person: 'user',
  mail: 'envelope',
  'eye-off': 'eye-slash',
  // Status
  success: 'check-circle',
  error: 'warning-circle',
  alert: 'warning',
  help: 'question',
  loading: 'circle-notch',
  // Commerce and trust
  card: 'credit-card',
  cart: 'shopping-cart',
  coupon: 'ticket',
  delivery: 'truck',
  protection: 'shield-check',
  insurance: 'umbrella',
  security: 'lock',
  sparkles: 'sparkle',
} as const satisfies Record<string, GlyphName>;

export type IconAlias = keyof typeof iconAliases;
`},{name:`icon.css`,code:te},{name:`gen-icons.mjs`,code:`#!/usr/bin/env node
/* Generates the Zijie icon set from Phosphor (MIT).

   Reads a curated list of names from @phosphor-icons/core (the devDependency), takes the regular and
   duotone SVGs, and writes two typed modules:

     packages/ui/src/components/Icon/glyphs.ts   the library's glyph data (paths only, MIT header)
     apps/studio/src/pages/icons/catalog.ts      groups and search keywords for the docs page

   Usage:  node tools/gen-icons.mjs           write both files
           node tools/gen-icons.mjs --check   exit 1 if either file is out of date (used by the tests)

   Edit CURATED below, then run it. Nothing else in the repo lists glyph names by hand: the Icon
   component, the aliases and the Icons page all derive from the generated modules. */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const phosphor = \`\${root}node_modules/@phosphor-icons/core/\`;

export const OUTPUTS = Object.freeze({
  glyphs: 'packages/ui/src/components/Icon/glyphs.ts',
  catalog: 'apps/studio/src/pages/icons/catalog.ts',
});

/** Display groups, in page order. */
export const GROUPS = Object.freeze([
  { id: 'interface', label: 'Interface', note: 'Controls, navigation and everyday actions.' },
  { id: 'arrows', label: 'Arrows', note: 'Direction, disclosure and movement.' },
  { id: 'commerce', label: 'Commerce & payments', note: 'Checkout, money, orders and delivery.' },
  { id: 'trust', label: 'Insurance & trust', note: 'Protection, coverage, identity and proof.' },
  { id: 'status', label: 'Status', note: 'Outcomes, warnings and waiting.' },
  { id: 'design', label: 'Design & code', note: 'Tools, type, layout and components.' },
  { id: 'media', label: 'Media', note: 'Playback and capture.' },
]);

/* name, or [name, 'extra search words']. Phosphor's own tags are always searchable too;
   the extra words add Zijie's domain (checkout, insurance, agentic commerce, design systems). */
export const CURATED = Object.freeze({
  interface: [
    'list', ['x', 'close dismiss cancel cross'], 'plus', 'minus', ['check', 'done confirm tick'],
    ['magnifying-glass', 'search find'], ['funnel', 'filter'], 'sliders-horizontal', ['dots-three', 'more overflow menu'],
    ['gear', 'settings preferences'], 'house', 'user', 'bell', 'eye', 'eye-slash', 'copy',
    'download-simple', 'upload-simple', 'link', 'trash', ['pencil-simple', 'edit'], 'arrows-out-simple', 'arrows-in-simple',
    ['cursor-click', 'press button'], 'calendar-blank', 'envelope', 'chat-circle',
    ['bag', 'work experience job portfolio'], ['thumbs-up', 'recommendation like approve'],
  ],
  arrows: [
    'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', ['arrow-up-right', 'external open link'], 'arrow-down-right',
    ['arrow-clockwise', 'refresh retry reload'], ['arrow-counter-clockwise', 'undo reset'], 'arrows-left-right',
    'caret-up', ['caret-down', 'chevron disclosure'], ['caret-left', 'chevron back'], ['caret-right', 'chevron next'],
    ['arrow-square-out', 'external open new window'],
  ],
  commerce: [
    ['credit-card', 'checkout pay payment method card'], ['wallet', 'pay balance stored value'], ['bank', 'bank transfer ach debit'],
    ['receipt', 'order invoice total'], ['shopping-cart', 'cart basket checkout'], ['shopping-bag', 'order bag checkout'],
    ['tag', 'price label promo'], ['storefront', 'merchant seller shop'], ['package', 'order parcel shipment'],
    ['truck', 'shipping delivery'], ['coins', 'rewards points cash back'], ['currency-dollar', 'price amount usd'],
    'barcode', ['qr-code', 'scan pay qr'], ['percent', 'discount promo sale'], 'gift',
    ['ticket', 'coupon promo code voucher'], ['hand-coins', 'refund payout'], 'handshake',
    ['map-pin', 'address shipping location'], ['device-mobile', 'mobile pay wallet app phone'],
  ],
  trust: [
    ['shield', 'protection safe'], ['shield-check', 'protection verified secure checkout 3ds'], ['shield-warning', 'risk fraud alert'],
    ['umbrella', 'insurance coverage protection'], ['heartbeat', 'health insurance claim'], ['first-aid-kit', 'medical claim coverage'],
    ['lock', 'secure private encrypted pci'], ['lock-open', 'unlock unlocked'], 'key', ['fingerprint', 'biometric passkey authentication'],
    ['identification-card', 'kyc identity verify id'], ['file-text', 'policy document terms'], ['seal-check', 'approved verified trust badge'],
    ['certificate', 'policy license award'], ['clipboard-text', 'claim form policy'], ['car', 'auto insurance vehicle'],
    ['house-line', 'home insurance property'],
  ],
  status: [
    ['check-circle', 'success done confirmed'], ['x-circle', 'error failed declined'], ['warning', 'alert caution'],
    ['warning-circle', 'error alert problem'], ['info', 'help note'], ['question', 'help unknown'], ['clock', 'time pending'],
    ['hourglass', 'waiting wait'], 'timer', ['prohibit', 'blocked disabled not allowed'], ['circle-notch', 'loading spinner progress'],
    'flag', ['lightning', 'fast instant'], 'circle',
  ],
  design: [
    ['palette', 'color theme'], ['text-aa', 'type font typography'], ['stack', 'layers'], ['squares-four', 'grid layout apps'],
    'ruler', ['code', 'developer source'], 'terminal-window', ['bounding-box', 'space frame selection'], 'pen-nib',
    ['eyedropper', 'pick color'], ['shapes', 'primitives'], ['sparkle', 'ai agent magic spark'], ['app-window', 'dialog window modal'],
    ['textbox', 'input field'], ['toggle-left', 'switch toggle'], ['columns', 'segmented split'], ['image-square', 'card media project'],
    ['book-open', 'guide docs'], ['wave-sine', 'motion easing curve'], ['frame-corners', 'space shape'],
  ],
  media: [
    'play', 'pause', 'image', 'video-camera', 'microphone', ['speaker-high', 'volume sound audio'], ['waveform', 'voice listening audio'],
  ],
});

const entries = group => CURATED[group].map(item => (Array.isArray(item) ? item : [item, '']));
export const curatedList = () => GROUPS.flatMap(group => entries(group.id).map(([name, words]) => ({ name, group: group.id, words: words.split(/\\s+/).filter(Boolean) })));

const pathElement = /<path\\b([^>]*?)\\/>/g;
const attribute = (source, name) => new RegExp(\`\\\\s\${name}="([^"]*)"\`).exec(\` \${source}\`)?.[1];

/** Parse a Phosphor SVG into its path layers. Fails loudly on anything but plain paths. */
function layers(svg, label) {
  const body = svg.replace(/^<svg\\b[^>]*>/, '').replace(/<\\/svg>\\s*$/, '');
  const stripped = body.replace(pathElement, '');
  if (stripped.trim()) throw new Error(\`\${label}: expected only <path> elements, found "\${stripped.trim().slice(0, 60)}"\`);
  const found = [...body.matchAll(pathElement)].map(match => {
    const d = attribute(match[1], 'd');
    const opacity = attribute(match[1], 'opacity');
    if (!d) throw new Error(\`\${label}: a path has no d attribute\`);
    if (opacity !== undefined && opacity !== '0.2') throw new Error(\`\${label}: unexpected opacity \${opacity}\`);
    const extra = match[1].replace(/\\s(d|opacity)="[^"]*"/g, '').trim();
    if (extra) throw new Error(\`\${label}: unexpected attributes "\${extra}"\`);
    return { d, tone: opacity === '0.2' };
  });
  if (!found.length) throw new Error(\`\${label}: no paths\`);
  return found;
}

async function readGlyph(name) {
  const regular = layers(await readFile(\`\${phosphor}assets/regular/\${name}.svg\`, 'utf8'), \`\${name} regular\`);
  const duotone = layers(await readFile(\`\${phosphor}assets/duotone/\${name}-duotone.svg\`, 'utf8'), \`\${name} duotone\`);
  if (regular.length !== 1 || regular[0].tone) throw new Error(\`\${name}: the regular weight is not a single path\`);
  const tone = duotone.filter(layer => layer.tone).map(layer => layer.d);
  const lines = duotone.filter(layer => !layer.tone).map(layer => layer.d);
  if (!tone.length) throw new Error(\`\${name}: duotone has no tone layer\`);
  if (lines.length !== 1) throw new Error(\`\${name}: duotone has \${lines.length} line paths\`);
  const glyph = { r: regular[0].d, t: tone };
  // Phosphor re-rounds a few duotone outlines. Keep them exact; store the line path only when it differs.
  if (lines[0] !== glyph.r) glyph.d = lines[0];
  return glyph;
}

const quote = text => \`'\${text.replace(/\\\\/g, '\\\\\\\\').replace(/'/g, "\\\\'")}'\`;

async function header(version, note = '') {
  const license = (await readFile(\`\${phosphor}LICENSE\`, 'utf8')).trim();
  return [
    '/* GENERATED by tools/gen-icons.mjs from @phosphor-icons/core. Do not edit; change the curated list and run the tool.',
    ' *',
    ...(note ? [\` * \${note}\`] : []),
    \` * Glyph outlines: Phosphor Icons \${version}, https://phosphoricons.com\`,
    ' *',
    ...license.split('\\n').map(line => (line.trim() ? \` * \${line.trimEnd()}\` : ' *')),
    ' */',
  ].join('\\n');
}

/** Build both modules in memory: { [relative path]: contents }. */
export async function build() {
  const version = JSON.parse(await readFile(\`\${phosphor}package.json\`, 'utf8')).version;
  const meta = new Map((await import(pathToFileURL(\`\${phosphor}dist/index.mjs\`).href)).icons.map(icon => [icon.name, icon]));
  const list = curatedList();
  const names = list.map(item => item.name);
  const duplicate = names.find((name, index) => names.indexOf(name) !== index);
  if (duplicate) throw new Error(\`"\${duplicate}" is listed twice\`);
  const missing = names.filter(name => !meta.has(name));
  if (missing.length) throw new Error(\`Not in Phosphor \${version}: \${missing.join(', ')}\`);

  const data = new Map();
  for (const name of names) data.set(name, await readGlyph(name));
  const sorted = [...names].sort();
  const banner = await header(version);
  const catalogBanner = await header(version, "Search keywords: Phosphor's tags plus Zijie's domain words.");

  const glyphs = [
    banner,
    '',
    \`export const PHOSPHOR_VERSION = '\${version}';\`,
    '',
    '/** The glyph grid: every outline is drawn on a 256-unit square. */',
    'export const GLYPH_GRID = 256;',
    '',
    \`export type GlyphName =\\n\${sorted.map(name => \`  | \${quote(name)}\`).join('\\n')};\`,
    '',
    '/** r: the regular outline. t: duotone tone layer(s), drawn first at 20% opacity. d: the duotone line path, only where Phosphor draws it differently from r. */',
    'export interface GlyphData {',
    '  readonly r: string;',
    '  readonly t: readonly string[];',
    '  readonly d?: string;',
    '}',
    '',
    'export const glyphs: Readonly<Record<GlyphName, GlyphData>> = {',
    ...sorted.map(name => {
      const glyph = data.get(name);
      const parts = [\`r: \${quote(glyph.r)}\`, \`t: [\${glyph.t.map(quote).join(', ')}]\`];
      if (glyph.d) parts.push(\`d: \${quote(glyph.d)}\`);
      return \`  \${quote(name)}: { \${parts.join(', ')} },\`;
    }),
    '};',
    '',
  ].join('\\n');

  const catalog = [
    catalogBanner,
    '',
    "import type { GlyphName } from '@zijie/ui';",
    '',
    \`export type IconGroupId = \${GROUPS.map(group => quote(group.id)).join(' | ')};\`,
    '',
    'export interface IconGroup {',
    '  readonly id: IconGroupId;',
    '  readonly label: string;',
    '  readonly note: string;',
    '}',
    '',
    'export interface CatalogEntry {',
    '  readonly name: GlyphName;',
    '  readonly group: IconGroupId;',
    '  /** Lowercase search words: Zijie domain words first, then Phosphor tags. */',
    '  readonly keywords: readonly string[];',
    '}',
    '',
    'export const iconGroups: readonly IconGroup[] = [',
    ...GROUPS.map(group => \`  { id: \${quote(group.id)}, label: \${quote(group.label)}, note: \${quote(group.note)} },\`),
    '];',
    '',
    '/** In page order: by group, then in the curated order. */',
    'export const catalog: readonly CatalogEntry[] = [',
    ...list.map(item => {
      // Phosphor marks entries it revised with a literal "*updated*" tag. It is bookkeeping, not a search word.
      const tags = meta.get(item.name).tags.map(tag => tag.toLowerCase()).filter(tag => /[a-z]{3}/.test(tag) && !/^\\*.*\\*$/.test(tag));
      const inName = item.name.split('-');
      const words = [...new Set([...item.words, ...tags])].filter(word => !inName.includes(word));
      return \`  { name: \${quote(item.name)}, group: \${quote(item.group)}, keywords: [\${words.map(quote).join(', ')}] },\`;
    }),
    '];',
    '',
  ].join('\\n');

  return { [OUTPUTS.glyphs]: glyphs, [OUTPUTS.catalog]: catalog };
}

async function main() {
  const files = await build();
  if (process.argv.includes('--check')) {
    const stale = [];
    for (const [file, contents] of Object.entries(files)) {
      const current = await readFile(\`\${root}\${file}\`, 'utf8').catch(() => null);
      if (current !== contents) stale.push(file);
    }
    if (stale.length) {
      console.error(\`Out of date: \${stale.join(', ')}. Run: node tools/gen-icons.mjs\`);
      process.exit(1);
    }
    console.log(\`Icons are up to date (\${Object.keys(files).length} files).\`);
    return;
  }
  for (const [file, contents] of Object.entries(files)) {
    await writeFile(\`\${root}\${file}\`, contents);
    console.log(\`wrote \${file} (\${(contents.length / 1024).toFixed(1)} KB)\`);
  }
  console.log(\`\${curatedList().length} glyphs from Phosphor, regular + duotone.\`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.message); process.exit(1); });
}
`,language:`ts`}],Ue=[{value:`react`,label:`React`},{value:`svg`,label:`SVG`}];function Q({weights:e}){let t=[`credit-card`,`shield-check`,`receipt`];return(0,Y.jsx)(`span`,{className:`icons-row`,children:e.map((e,n)=>(0,Y.jsx)(m,{name:t[n],size:32,weight:e},n))})}function $({sizes:e}){return(0,Y.jsx)(`span`,{className:`icons-row icons-row--baseline`,children:e.map(e=>(0,Y.jsx)(m,{name:`credit-card`,size:e},e))})}var We=Object.entries(r);function Ge(){let[t,n]=(0,M.useState)(Oe),[r,i]=(0,M.useState)(`react`),a={name:t.selected,size:t.size,weight:t.weight};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(y,{id:`icons`,children:[P.length,` glyphs from Phosphor. Regular for interface, duotone for pills and illustration. One grid, one line, one name each.`]}),(0,Y.jsxs)(ee,{tabs:v,label:`Icon sections`,children:[(0,Y.jsx)(T,{id:`library`,eyebrow:`Library`,title:`Find it. Copy it.`,lead:`Search, pick one, copy it. The grid shows every icon at the size and weight you choose.`,children:(0,Y.jsx)(Ne,{state:t,setState:n})}),(0,Y.jsx)(b,{title:`One set. Two weights. One grid.`,lead:`An icon says in a glance what a label needs a line for. It earns that by being predictable.`,reasons:[{title:`The site’s own weight`,text:`Duotone is what the portfolio’s pills already use. Regular carries controls. There is no third voice.`},{title:`One grid, one line`,text:`Every glyph is drawn on a 256 unit grid with a 16 unit line, so a mixed row keeps one rhythm at any size.`},{title:`Never under a pixel`,text:`Below 16px the outline grows so the line holds at 1px. From 16px up it scales with the size.`}]}),(0,Y.jsx)(T,{id:`use-it`,eyebrow:`Code`,title:`Use it`,lead:`Code for the icon you picked. It follows the size and weight above.`,children:(0,Y.jsx)(x,{setup:fe,usage:_e(a,r),usageFile:ge(a,r),usageActions:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(A,{label:`Format`,value:r,options:Ue,onChange:i}),r===`svg`&&(0,Y.jsxs)(`button`,{type:`button`,className:`icons-codebutton`,onClick:()=>e(G(a.name,a.weight),`${q(a)}\n`,`image/svg+xml`),children:[(0,Y.jsx)(m,{name:`download-simple`,size:16}),(0,Y.jsx)(`span`,{children:`Download`})]})]}),sources:He})}),(0,Y.jsx)(T,{id:`size-weight`,eyebrow:`Size and weight`,title:`Four sizes. Two weights.`,lead:`Sizes follow role. The line is size ÷ 16, so it scales with the icon and never needs a stroke setting.`,children:(0,Y.jsxs)(`div`,{className:`icons-rules`,children:[(0,Y.jsx)(Fe,{name:t.selected}),(0,Y.jsxs)(`div`,{className:`icons-rules__pair`,children:[(0,Y.jsxs)(`section`,{className:`icons-note`,"aria-labelledby":`icons-optical-title`,children:[(0,Y.jsx)(`h3`,{id:`icons-optical-title`,className:`icons-note__title`,children:`Below 16 px`}),(0,Y.jsx)(`p`,{className:`icons-note__text`,children:`At 12 px the regular line would be 0.75 px. Icon adds the missing width to the outline so it holds at 1 px.`}),(0,Y.jsx)(Ie,{name:t.selected,weight:t.weight})]}),(0,Y.jsxs)(`section`,{className:`icons-note`,"aria-labelledby":`icons-pills-title`,children:[(0,Y.jsx)(`h3`,{id:`icons-pills-title`,className:`icons-note__title`,children:`Duotone pills`}),(0,Y.jsx)(`p`,{className:`icons-note__text`,children:`The same markup as the portfolio: 16 px, a 14 px label, a hairline ring. The tone layer is 20% of the ink.`}),(0,Y.jsx)(Le,{})]})]})]})})]}),(0,Y.jsx)(T,{id:`in-context`,title:`In context`,lead:`A checkout and an insurance claim, drawn with the real components. Size follows role; color follows meaning.`,children:(0,Y.jsxs)(`div`,{className:`icons-scenes`,children:[(0,Y.jsx)(ze,{}),(0,Y.jsx)(Ve,{})]})}),(0,Y.jsx)(T,{id:`reference`,title:`Reference`,children:(0,Y.jsxs)(`div`,{className:`kit-folds`,children:[(0,Y.jsx)(S,{title:`Properties & states`,children:(0,Y.jsx)(w,{props:_.props??[]})}),(0,Y.jsx)(S,{title:`Usage & keyboard`,children:(0,Y.jsxs)(`div`,{className:`kit-stack`,children:[(0,Y.jsx)(D,{number:1,title:`Name icon-only buttons`,do:{text:`Give the button a label. The icon stays decorative.`,example:(0,Y.jsx)(u,{icon:`x`,label:`Close`})},dont:{text:`Leave a control with nothing to announce.`,example:(0,Y.jsx)(`span`,{className:`icons-bare`,children:(0,Y.jsx)(m,{name:`x`,size:20})})}}),(0,Y.jsx)(D,{number:2,title:`One weight per row`,do:{text:`Keep a row in one weight: regular in controls, duotone in pills.`,example:(0,Y.jsx)(Q,{weights:[`regular`,`regular`,`regular`]})},dont:{text:`Mix weights where the eye compares them.`,example:(0,Y.jsx)(Q,{weights:[`regular`,`duotone`,`regular`]})}}),(0,Y.jsx)(D,{number:3,title:`Stay on the scale`,do:{text:`16 for navigation, 20 for controls, 24 on their own, 32 for features.`,example:(0,Y.jsx)($,{sizes:[16,20,24,32]})},dont:{text:`Pick sizes in between. They drift off the line scale.`,example:(0,Y.jsx)($,{sizes:[14,18,22,30]})}}),(0,Y.jsx)(O,{keys:_.keys??[]})]})}),(0,Y.jsx)(S,{title:`Tokens`,children:(0,Y.jsxs)(`div`,{className:`kit-stack`,children:[(0,Y.jsx)(E,{tokens:_.tokens??[]}),(0,Y.jsx)(k,{tokens:[..._.tokens??[],`--z-color-success`,`--z-color-warning`,`--z-color-danger`]})]})}),(0,Y.jsxs)(S,{title:`Legacy names`,children:[(0,Y.jsx)(`p`,{className:`icons-legacy__lead`,children:`These names still work and draw the glyph on the right. New code should use the Phosphor name.`}),(0,Y.jsx)(`ul`,{className:`icons-legacy`,role:`list`,children:We.map(([e,t])=>(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(m,{name:t,size:20}),(0,Y.jsx)(`code`,{className:`kit-code-inline`,children:e}),(0,Y.jsx)(`span`,{className:`icons-legacy__arrow`,"aria-hidden":`true`,children:`→`}),(0,Y.jsx)(`code`,{className:`kit-code-inline`,children:t})]},e))})]})]})})]})}export{Ge as default};