import{Fn as e,Ft as t,Mt as n,Rn as r,g as i,i as a,mn as o,mt as s,o as c,pn as l,yn as u}from"./route-D8V-RcHq.js";import{n as d,t as f}from"./docs-Dv2yWw9W.js";import{A as p,C as m,D as h,T as g,k as _}from"./kit-CGiBTmcs.js";import{i as v,n as y,o as b,r as x,s as S}from"./Prose-9T4IfjXr.js";var C=r(),w=o(),T=`guidance-reader`,E=[{value:`read`,label:`Read`},{value:`markdown`,label:`Markdown`}];function D({doc:e}){let t=(0,C.useMemo)(()=>({head:x(e.text),body:h(S(e.text).body,`md`)}),[e.text]);return(0,w.jsxs)(`div`,{className:`guidance-raw`,children:[(0,w.jsxs)(`div`,{className:`guidance-raw__bar`,children:[(0,w.jsx)(`span`,{className:`guidance-raw__title`,children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Markdown`})})}),(0,w.jsx)(`span`,{className:`guidance-raw__file`,children:(0,w.jsx)(n,{en:e.filename})})]}),(0,w.jsx)(`pre`,{className:`guidance-raw__body`,role:`region`,tabIndex:0,"aria-label":`${e.filename} Markdown source`,children:(0,w.jsxs)(`code`,{children:[t.head.map((e,t)=>{let n=/^([A-Za-z][\w-]*:)(\s*)(.*)$/.exec(e);return n?(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`syn-attribute`,children:n[1]}),n[2],(0,w.jsx)(`span`,{className:`syn-string`,children:n[3]}),`
`]},t):(0,w.jsxs)(`span`,{className:`syn-punctuation`,children:[e,`
`]},t)}),t.body.map((e,t)=>e.type===`text`?e.text:(0,w.jsx)(`span`,{className:`syn-${e.type}`,children:e.text},`b${t}`))]})})]})}function O({doc:e,mode:r,onModeChange:a}){let o=t(),s=(0,C.useRef)(null),d=(0,C.useRef)(null),f=(0,C.useMemo)(()=>b(e.text),[e.text]);return(0,C.useLayoutEffect)(()=>{let t=d.current;if(d.current={id:e.id,mode:r},!t||t.id===e.id&&t.mode===r)return;let n=s.current;t.id===e.id?l(n,[{opacity:0},{opacity:1}],{duration:160,easing:u}):l(n,[{opacity:0,translate:`0 8px`},{opacity:1,translate:`0 0`}],{duration:240,easing:u})},[e.id,r]),(0,w.jsxs)(`section`,{id:T,className:`guidance-reader`,"aria-label":o({en:`${e.filename} reader`}),children:[(0,w.jsxs)(`div`,{className:`guidance-reader__bar`,children:[(0,w.jsx)(`div`,{className:`guidance-reader__modes`,children:(0,w.jsx)(i,{label:o({en:`${e.filename} view`}),value:r,options:E.map(e=>({...e,label:o({en:e.label})})),onChange:a})}),(0,w.jsxs)(`div`,{className:`guidance-reader__tools`,children:[(0,w.jsx)(g,{text:e.text,label:o({en:`Copy ${e.filename}`}),showLabel:!0,tone:`light`,className:`guidance-reader__copy`}),(0,w.jsxs)(`a`,{className:`guidance-reader__download`,href:v(e.text),download:e.filename,children:[(0,w.jsx)(c,{name:`download`,size:16}),(0,w.jsxs)(`span`,{children:[(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Download `})}),(0,w.jsx)(n,{en:e.filename})]})]})]})]}),(0,w.jsx)(`div`,{ref:s,className:`guidance-reader__body`,"data-mode":r,children:(0,w.jsx)(n,{en:r===`read`?(0,w.jsx)(y,{blocks:f,label:o({en:e.title})}):(0,w.jsx)(D,{doc:e})})})]})}var k=(e,t)=>t>0?Math.max(0,Math.min(t-1,Math.round(e)||0)):0;function A(e,t,n){return n>0?e===`ArrowRight`||e===`ArrowDown`?k(t+1,n):e===`ArrowLeft`||e===`ArrowUp`?k(t-1,n):e===`Home`?0:e===`End`?n-1:-1:-1}function j(e,t){let n=0,r=1/0;return e.forEach((e,i)=>{let a=Math.abs(e-t);a<r&&(n=i,r=a)}),n}var M=(e,t,n,r=0)=>Math.max(0,Math.round(e-t+n-r)),N=(e,t=6)=>Math.abs(e)>t,P=(e,t)=>`${k(e,t)+1} / ${t}`,F=(e,t,n)=>`${e} ${k(t,n)+1} of ${n}`;function I({count:t,active:n,onSelect:r}){let i=(0,C.useRef)(null),a=(0,C.useRef)([]),o=(0,C.useRef)(n);o.current=n;let s=(0,C.useRef)(r);s.current=r;let c=(0,C.useRef)(!1),l=(0,C.useRef)(null),u=(0,C.useCallback)(()=>{let e=i.current;if(!e)return[];let t=Number.parseFloat(getComputedStyle(e).scrollPaddingLeft)||0,n=e.getBoundingClientRect().left;return a.current.map(r=>r?M(r.getBoundingClientRect().left,n,e.scrollLeft,t):0)},[]),d=(0,C.useCallback)((t,n=`smooth`)=>{let r=i.current,a=u()[t];r&&a!==void 0&&r.clientWidth&&r.scrollTo({left:a,behavior:e()?`auto`:n})},[u]),f=(0,C.useCallback)((e,{focus:n=!1}={})=>{e<0||e>=t||(l.current=e,s.current(e),d(e),n&&a.current[e]?.focus({preventScroll:!0}))},[t,d]),p=(0,C.useCallback)(e=>{if(e.altKey||e.ctrlKey||e.metaKey)return;let n=A(e.key,o.current,t);n<0||(e.preventDefault(),f(n,{focus:!0}))},[t,f]);return(0,C.useEffect)(()=>{l.current!==n&&(l.current=n,d(n,`auto`))},[n,d]),(0,C.useEffect)(()=>{let e=i.current;if(!e)return;let t=0,n=()=>{if(c.current||!e.clientWidth)return;let t=j(u(),e.scrollLeft);t!==o.current&&(l.current=t,s.current(t))},r=()=>{window.clearTimeout(t),t=window.setTimeout(n,120)};return`onscrollend`in window?e.addEventListener(`scrollend`,n):e.addEventListener(`scroll`,r,{passive:!0}),()=>{window.clearTimeout(t),e.removeEventListener(`scrollend`,n),e.removeEventListener(`scroll`,r)}},[u]),(0,C.useEffect)(()=>{let t=i.current;if(!t)return;let n=null,r=!1,a=0,o=i=>{if(!n||i.pointerId!==n.id)return;let o=c.current;n=null,c.current=!1;try{t.releasePointerCapture(i.pointerId)}catch{}if(!o)return;r=!0,window.setTimeout(()=>{r=!1},0);let f=j(u(),t.scrollLeft);l.current=f,s.current(f),d(f),window.clearTimeout(a),a=window.setTimeout(()=>t.removeAttribute(`data-dragging`),e()?0:420)},f=e=>{e.pointerType===`mouse`&&e.button===0&&(window.clearTimeout(a),n={x:e.clientX,left:t.scrollLeft,id:e.pointerId})},p=e=>{if(!n||e.pointerId!==n.id)return;let r=e.clientX-n.x;if(!c.current){if(!N(r,6))return;c.current=!0,t.setAttribute(`data-dragging`,``);try{t.setPointerCapture(e.pointerId)}catch{}}t.scrollLeft=n.left-r},m=e=>{r&&(e.preventDefault(),e.stopPropagation())},h=()=>{n&&(n=null,c.current=!1,t.removeAttribute(`data-dragging`))};return t.addEventListener(`pointerdown`,f),t.addEventListener(`pointermove`,p),t.addEventListener(`pointerup`,o),t.addEventListener(`pointercancel`,o),t.addEventListener(`lostpointercapture`,h),t.addEventListener(`click`,m,!0),()=>{window.clearTimeout(a),t.removeEventListener(`pointerdown`,f),t.removeEventListener(`pointermove`,p),t.removeEventListener(`pointerup`,o),t.removeEventListener(`pointercancel`,o),t.removeEventListener(`lostpointercapture`,h),t.removeEventListener(`click`,m,!0),t.removeAttribute(`data-dragging`),c.current=!1}},[u,d]),{trackRef:i,cardRef:(0,C.useCallback)(e=>t=>{a.current[e]=t},[]),go:f,onKeyDown:p,scrollToIndex:d}}var L={"design-md":(0,w.jsxs)(`span`,{className:`guidance-art guidance-art--design`,"aria-hidden":`true`,children:[(0,w.jsx)(`b`,{children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Aa`})})}),(0,w.jsx)(`span`,{className:`guidance-art__bars`,children:(0,w.jsx)(n,{en:[0,1,2].map(e=>(0,w.jsx)(`i`,{style:{"--i":e}},e))})})]}),"motion-md":(0,w.jsx)(`span`,{className:`guidance-art guidance-art--motion`,"aria-hidden":`true`,children:(0,w.jsx)(n,{en:[0,1,2,3,4].map(e=>(0,w.jsx)(`i`,{style:{"--i":e}},e))})}),"writing-md":(0,w.jsxs)(`span`,{className:`guidance-art guidance-art--writing`,"aria-hidden":`true`,children:[(0,w.jsx)(`i`,{style:{"--i":0}}),(0,w.jsx)(`i`,{style:{"--i":1}}),(0,w.jsx)(`i`,{style:{"--i":2},children:(0,w.jsx)(`u`,{})})]}),"skill-md":(0,w.jsxs)(`span`,{className:`guidance-art guidance-art--skill`,"aria-hidden":`true`,children:[(0,w.jsx)(`b`,{style:{"--i":0},children:(0,w.jsx)(n,{en:`{`})}),(0,w.jsx)(`b`,{style:{"--i":1},className:`guidance-art__z`,children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`z`})})}),(0,w.jsx)(`b`,{style:{"--i":2},children:(0,w.jsx)(n,{en:`}`})})]})};function R({documents:e,active:r,onSelect:i}){let a=t(),o=e.length,{trackRef:c,cardRef:l,go:u,onKeyDown:d}=I({count:o,active:r,onSelect:i}),f=e[r];return(0,w.jsxs)(`section`,{className:`guidance-shelf`,"aria-roledescription":`carousel`,"aria-label":a({en:`Guidance documents`}),children:[(0,w.jsx)(`div`,{ref:c,className:`guidance-track`,onKeyDown:d,children:(0,w.jsx)(n,{en:e.map((e,t)=>(0,w.jsxs)(`button`,{ref:l(t),type:`button`,className:`guidance-card`,"aria-pressed":t===r,"aria-controls":T,tabIndex:t===r?0:-1,onClick:()=>u(t),children:[(0,w.jsx)(`span`,{className:`guidance-card__art`,children:(0,w.jsx)(n,{en:L[e.id]})}),(0,w.jsxs)(`span`,{className:`guidance-card__copy`,children:[(0,w.jsx)(`span`,{className:`guidance-card__file`,children:(0,w.jsx)(n,{en:e.filename})}),(0,w.jsx)(`span`,{className:`guidance-card__title`,children:(0,w.jsx)(n,{en:e.title})}),(0,w.jsx)(`span`,{className:`guidance-card__blurb`,children:(0,w.jsx)(n,{en:e.blurb})})]})]},e.id))})}),(0,w.jsxs)(`div`,{className:`guidance-nav`,children:[(0,w.jsx)(`span`,{className:`guidance-nav__rail`,"aria-hidden":`true`,style:{"--count":o,"--index":r},children:(0,w.jsx)(`span`,{className:`guidance-nav__thumb`})}),(0,w.jsx)(`span`,{className:`guidance-nav__count`,"aria-hidden":`true`,children:(0,w.jsx)(n,{en:P(r,o)})}),(0,w.jsx)(s,{label:a({en:`Previous document`}),icon:`arrow-left`,className:`guidance-nav__button`,"aria-disabled":r===0||void 0,onClick:()=>{r>0&&u(r-1)}}),(0,w.jsx)(s,{label:a({en:`Next document`}),icon:`arrow-right`,className:`guidance-nav__button`,"aria-disabled":r===o-1||void 0,onClick:()=>{r<o-1&&u(r+1)}}),(0,w.jsx)(`span`,{className:`kit-sr-only`,role:`status`,children:(0,w.jsx)(n,{en:f?F(f.title,r,o):``})})]})]})}var z=f({"design-md":`---
name: zijie-design
description: Surface, type and hierarchy in the Zijie Design System. Read before you lay out a screen.
---

# Make room for the work.

A calm interface makes the next move obvious. The work gets the attention. The interface only holds it.

> Grey to rest on. White to hold. Blue to act.

## Build depth with tone

Tone separates. Lines do not. Every container sits one step lighter or darker than the one around it.

- **Canvas** (\`--z-color-canvas\`) is the quiet ground under every page.
- **Surface** (\`--z-color-surface\`) is white. Cards take \`--z-radius-card\`, panels take \`--z-radius-panel\`.
- **Inset** goes back to canvas inside a white panel, so a field or a specimen reads as set into it.
- **Action** is \`--z-color-blue-action\`. It marks the one next step and nothing else.

Shadows are for things that float: a raised card, a menu, a dialog. Everything else stays flat. A hairline (\`--z-color-line\`) divides list rows or rings a pill. It is never a box around every box.

Corners nest. An inner radius is the outer radius minus the padding between them, so a card with 8px of padding holds a tile, not another card.

\`\`\`css
.pay-card {
  padding: var(--z-space-2);
  border-radius: var(--z-radius-card); /* 24 */
  background: var(--z-color-surface);
}

.pay-card__inset {
  border-radius: var(--z-radius-tile); /* 24 - 8 = 16 */
  background: var(--z-color-canvas);
}
\`\`\`

## Let type set the hierarchy

Montserrat speaks. Inter works. Code stays in monospace.

- **Montserrat** (\`--z-font-body\`) sets headings and body copy.
- **Inter** (\`--z-font-interface\`) sets labels, controls and numbers. Prices use tabular figures, so a total never dances while it changes.
- **Monospace** (\`--z-font-code\`) is for code and nothing else.

Size, weight and space say what matters before a single word is read.

| Token | Value | Phone | Role |
| --- | --- | --- | --- |
| \`--z-type-display\` | \`60px\` | \`36px\` | Page title |
| \`--z-type-section\` | \`36px\` | \`28px\` | Section title |
| \`--z-type-title\` | \`24px\` | \`24px\` | Card title |
| \`--z-type-body\` | \`18px\` | \`16px\` | Reading text |
| \`--z-type-small\` | \`14px\` | \`14px\` | Meta and labels |
| \`--z-type-eyebrow\` | \`12px\` | \`12px\` | Uppercase label |

- One headline gives a screen its purpose. One primary action gives it a next step. Detail appears when it is asked for.
- Reading text is 14px or larger and nothing is set below 12px. Shrink the copy before you shrink the type.
- Montserrat never takes negative tracking. Tracking (\`--z-tracking-eyebrow\`) belongs to uppercase Inter eyebrows.

## Let the work lead

- A project card leads with its cover. The title sits beneath it, then one line of description, then the tags.
- A demo gets a spacious stage: the specimen centred on \`--z-color-canvas-deep\`, with code and settings one deliberate reveal away.
- Navigation stays quiet. Grey at rest, one white pill for where you are.
- Space is hierarchy. Sections breathe at \`--z-space-section\`. A title sits \`--z-space-title-copy\` above its copy.

## Make every state visible

- Focus is always visible: a 2px ring in \`--z-color-blue\`, offset by 3px.
- Caption text uses \`--z-color-caption\`, the lightest grey that still passes AA on white and canvas. \`--z-color-muted-legacy\` is decorative only.
- Touch targets are 44px or larger.
- Color never carries meaning alone. An error says what is wrong in words. \`--z-color-danger\` and \`--z-color-success\` only repeat it.

## Carry the values into code

Use tokens, never a per-page palette. Ownership stays the same everywhere:

- \`tokens.css\` owns values.
- Component CSS owns appearance.
- App code owns state, requests and storage.

> The screen feels clear before anyone reads a word.
`,"motion-md":"---\nname: zijie-motion\ndescription: Rhythm, response and waiting in the Zijie Design System. Read before you animate anything.\n---\n\n# Make change feel natural.\n\nMotion connects an action to its result. A press feels immediate. A new surface arrives gently. Waiting stays honest.\n\n> Respond fast. Travel a little. Settle without a bounce.\n\n## Use one spring and one ease\n\nSpace changes on the spring (`--z-ease-spring`): stiffness 300, damping 60, mass 1. It is overdamped, so it never overshoots. Feedback and entrances use expo-out (`--z-ease-out`). Only exits use ease-in (`--z-ease-in`), and they leave faster than they arrive.\n\n| Token | Value | Phone | Role |\n| --- | --- | --- | --- |\n| `--z-motion-press` | `120ms` | `120ms` | Scale to `--z-press-scale` under a finger or a key |\n| `--z-motion-feedback` | `200ms` | `200ms` | Color, opacity, focus, small icon swaps |\n| `--z-motion-control` | `360ms` | `360ms` | Spring: segmented indicator, switch thumb, glide pill |\n| `--z-motion-layout` | `520ms` | `520ms` | Spring: morphs, lifts and size changes |\n| `--z-motion-hover` | `700ms` | `700ms` | Spring: roll label and hover arrows |\n| `--z-motion-enter` | `600ms` | `520ms` | Scroll entrance |\n| `--z-motion-exit` | `180ms` | `180ms` | Dialogs, toasts and sheets leaving |\n\n## Answer the finger first\n\n- A press scales to `--z-press-scale` over `--z-motion-press`. Release returns at feedback speed.\n- Space and Enter press a button the same way a pointer does.\n- Hover belongs to fine pointers: `@media (hover: hover) and (pointer: fine)`. Touch gets an `:active` equivalent.\n- The magnetic pull is at most 2px and the roll label rolls once on hover-enter. Ghost buttons skip both, and so does reduced motion.\n\n## Travel a little\n\nAn entrance moves `--z-motion-travel` (28px, or 20px on phones) over `--z-motion-enter`. Siblings stagger by `--z-motion-stagger` and stop at `--z-motion-delay-cap`. A reveal plays once. It replays only when the reader scrolls back into it from below, starting at `--z-motion-replay-from` opacity over `--z-motion-replay`.\n\nAnimate transform, translate, scale, rotate, opacity, filter, clip-path, stroke-dashoffset and color. Never animate width, height, inset or margin. Layout belongs to the browser.\n\n```css\n.sheet {\n  transition:\n    translate var(--z-motion-control) var(--z-ease-spring),\n    opacity var(--z-motion-feedback) var(--z-ease-out);\n}\n```\n\n## Show waiting honestly\n\nA pay button is bound to a task, not to a timer. `useAsyncAction` supplies the timing.\n\n- Nothing spins for the first 160ms, so an instant task never flashes.\n- Once shown, the loader stays for 320ms, so it never blinks.\n- Success holds for 1600ms and then the button rests. An error stays until the next try.\n- The button keeps its width. Passing any `state` reserves the feedback slot.\n- While loading it stays focusable, carries `aria-busy` and ignores repeat presses.\n- Success appears only after the server confirms. A timer cannot prove a payment landed.\n- No fake progress. A bar moves only when something was counted.\n- Talk about time, never about closeness. \"Still confirming with your bank…\" is honest. \"Almost there\" is a guess. Offer a way out when the wait runs long. The library supplies the timing. The escalation copy is yours.\n\n```tsx\nimport { Button, useAsyncAction } from '@zijie/ui';\n\nexport function OrderButton() {\n  const pay = useAsyncAction();\n  return (\n    <>\n      <Button state={pay.visibleState} onClick={() => pay.run(({ signal }) => charge(signal))}>\n        Pay $48.00\n      </Button>\n      <p role=\"status\">{pay.state === 'success' ? 'Payment confirmed.' : ''}</p>\n    </>\n  );\n}\n```\n\n## Keep the meaning without the movement\n\nReduced motion keeps every word, every focus ring and every result. It only removes the travel.\n\n- Content is visible at once, with no entrance.\n- Loops stop. `useReducedMotion()` and `prefersReducedMotion()` say when.\n- State stays legible: a still pose for a spinner, the same words for a result.\n- Anything continuous also pauses when it is offscreen or the tab is hidden. `useActivity` handles it.\n\n```css\n@media (prefers-reduced-motion: reduce) {\n  .sheet {\n    transition: none;\n  }\n}\n```\n\n> The interface still makes sense with every animation stopped.\n","writing-md":`---
name: zijie-writing
description: How copy works in the Zijie Design System: labels, errors, money and waiting. Read before you write a string.
---

# Say it once, plainly.

Good interface copy is short and specific. It says what happens, what it costs and what to do next. Then it stops.

> Name the outcome. Show the price. Say the next step.

## Name the outcome

- Labels are verbs. "Pay $48.00", not "Submit". When money moves, the amount is on the button.
- Sentence case everywhere. No exclamation marks.
- One idea per sentence. Two short beats beat one long one: "One clear action." "Say what's wrong. Say how to fix it."
- The accessible name equals the visible label. An icon-only control carries a label, so a screen reader and a sighted reader hear the same word.

| Not this | This |
| --- | --- |
| Submit | Pay $48.00 |
| Something went wrong. | Card declined. Try another card. |
| Almost there! | Still confirming with your bank… |
| Your payment was successfully processed. | Payment confirmed. A receipt is on its way. |

## Say what is wrong, then how to fix it

- An error names the problem and the next move: "Enter a 16-digit card number."
- Errors sit beside the field they belong to and are announced with \`role="alert"\`. A hint is quieter and never alerts.
- Never blame the person. Never apologise in place of an answer. No "Oops".
- Keep what they typed. A wrong digit is not a reason to start over.

## Make money plain

- The total, with its currency, is visible before the last tap.
- Add-ons are opt-in and priced: "Shipping protection +$0.99". Never pre-checked.
- A promo shows its effect as a line in the summary, not as a surprise at the end.
- Numbers use Inter with tabular figures, so totals do not shift while they change.
- Insurance copy says what is covered, what is not and what it costs. Terms of art stay out of the interface.

## Wait out loud, briefly

- While loading, say what is being confirmed: "Confirming with your bank…".
- After 4 seconds say that it is still working. After 10 seconds offer a way out. Time is honest. "Almost" is not.
- A result lands where the eye already is. A status line says the same for screen readers: "Payment confirmed."
- A demo that simulates something says so, with one small label: "Simulated".

## Write only what matters

- Show the title, the current state and the action. Let the component show the rest.
- Remove repeated captions, decorative taglines and descriptions of what is already visible.
- Put API tables, timings and notes behind a reveal or in the docs. Always keep errors, permission reasons, essential instructions, accessible names and announcements.

## Leave room for another language

A component never hard-codes a language. Every string it owns is a \`labels\` prop with English defaults, so a page can pass 中文 without touching the library.

\`\`\`tsx
import { Toast } from '@zijie/ui';

export const saved = <Toast message="已保存" labels={{ dismiss: '关闭' }} onDismiss={close} />;
\`\`\`

> Read it aloud once. If it needs a second pass, cut a word.
`,"skill-md":'---\nname: zijie-ui\ndescription: Build interfaces with the Zijie Design System (@zijie/ui): React components, --z-* tokens, motion hooks and the docs conventions around them. Use when adding or changing UI in the design-system workspace or in an app that consumes @zijie/ui, especially checkout, payments, insurance and agentic-commerce screens.\n---\n\n# Build with Zijie UI.\n\nReuse the foundations. Compose for the task. Verify the experience.\n\n> Tokens first. Components second. Custom CSS last.\n\n## Start with the real screen\n\nInspect the target page and the components it already uses before you write anything. Read these, in order:\n\n- `packages/ui/src/tokens.css` holds every value. It is the single source.\n- `packages/ui/src/index.tsx` is the barrel. Everything importable lives behind it.\n- `packages/ui/src/components/` holds one folder per family, each with its component and its CSS.\n- `packages/ui/src/motion/` holds press, reveal, roll label, async timing and reduced motion.\n- `apps/studio/src/pages/` holds one docs page per component, with its props, keys, generated code and live specimens.\n\nIn another repo, map the equivalents explicitly. Never assume a class or a token exists. The docs are served at `/design-system/`.\n\n## Import the package, not its files\n\n```tsx\nimport \'@zijie/ui/styles.css\';\nimport { Button, ProjectCard, useAsyncAction } from \'@zijie/ui\';\n```\n\n- Load `@zijie/ui/styles.css` once, at the entry. It carries tokens, base, motion and every component.\n- Load `@zijie/ui/tokens.css` alone when plain CSS only needs the values.\n- Import motion primitives from `@zijie/ui/motion` and registry helpers from `@zijie/ui/tokens`.\n- Load `@zijie/ui/portfolio.css` only for the legacy `skin="portfolio"` DOM on the live site.\n\n## Reach for the component that exists\n\n| Need | Use |\n| --- | --- |\n| An action | `Button`, `ButtonLink`, `IconButton`, `PayButton` |\n| A field | `Input` |\n| A choice | `Switch`, `Segmented` |\n| Content | `ProjectCard`, `Tag`, `Surface`, `Stat`, `SectionHeading`, `Text`, `MediaFrame` |\n| Layout | `Container`, `Stack`, `Grid` |\n| Waiting | `Loader`, `Presence`, `AnimatedNumber`, `useAsyncAction` |\n| Feedback | `Toast`, `Dialog` |\n| Motion | `Reveal`, `Stagger`, `RollLabel`, `useReducedMotion`, `useActivity` |\n\nIf nothing fits, extend a component with a typed variant. Do not restyle it from a page.\n\n## Keep the visual language consistent\n\n- Values come from `--z-*` tokens. No raw hex, and no one-off sizes for color, space, radius or type.\n- Variants are typed props. State lives in `data-state` and `aria-*`. JavaScript never sets a color.\n- Fills are solid. A gradient is allowed only for a dot grid, a mask or an edge fade.\n- Separate by tone and radius: white cards (`--z-radius-card`) and panels (`--z-radius-panel`) on `--z-color-canvas`. No 1px border around every box. Shadows only when something floats.\n- Montserrat sets headings and body, Inter sets labels and numbers, monospace is for code only.\n- Focus is a 2px ring in `--z-color-blue`, offset by 3px. Touch targets are 44px or larger. No text under 12px, and reading text is 14px or larger. No negative letter-spacing on Montserrat.\n\n## Connect movement to meaning\n\n- Durations and easings are tokens: `--z-motion-*` and `--z-ease-*`. Never a literal.\n- Animate transform, translate, scale, rotate, opacity, filter, clip-path, stroke-dashoffset and colors. Never width, height, inset or margin.\n- Hover effects sit behind `(hover: hover) and (pointer: fine)`. Touch gets `:active`.\n- Every animation has a reduced-motion path. Loops pause offscreen and in hidden tabs. Put `data-playback="paused"` on an ancestor to hold library loops still.\n- Async work goes through `useAsyncAction`: a 160ms delay, a 320ms minimum, a 1600ms success hold and abort support. Never a bare timer. Never fake progress.\n- Pass `state={action.visibleState}` to `Button` so the box keeps its width, and announce the result in a `role="status"` line.\n\n```tsx\nimport { Button, useAsyncAction } from \'@zijie/ui\';\n\nexport function OrderButton() {\n  const pay = useAsyncAction();\n  return (\n    <Button state={pay.visibleState} onClick={() => pay.run(({ signal }) => charge(signal))}>\n      Pay $48.00\n    </Button>\n  );\n}\n```\n\n## Write only what matters\n\n- Labels are verbs, and the amount is on the button when money moves.\n- An error says what is wrong and how to fix it.\n- A string a component owns is a `labels` prop with English defaults.\n- A demo that simulates something says "Simulated".\n\n## Know the domain\n\n- **Checkout.** Use `PayButton` for the pay action. It takes the full `action.state`, closes into a circle while the payment runs, draws a check and re-opens as "Try again" after a failure. Pass `confirm="hold"` when a payment is large or made by an agent. Show the total with its currency before the last tap. Add-ons are opt-in and priced, never pre-checked. A promo is a line in the summary. Let the total animate with `AnimatedNumber`, and announce the settled total in a status line.\n- **Insurance.** Say what is covered, what is not and what it costs, in plain words.\n- **Agentic commerce.** The state is a word first and the picture confirms it. Nothing opens a microphone or camera without a press.\n- **Design systems.** One source for values, parity tests at the edges and docs generated from real files.\n\n## Keep the docs true\n\nWhen you add or change a component or a token:\n\n- Values live only in `packages/ui/src/tokens.css`. Add metadata for a new `--z-*` token in `packages/ui/src/tokens.ts`. A parity test enforces it.\n- Update the component\'s page in `apps/studio/src/pages/`: `meta.ts` for props, keys and tokens, `codegen.ts` for the Code view and `sources.ts` for real files.\n- Add or update a Node test in `tests/`.\n- The barrel re-exports each family with `export *`. Do not maintain export lists by hand.\n\n## Stay inside the boundaries\n\n- Never write to `zijiez-portfolio/`. It is the live site\'s source. The portfolio build reads it and writes `dist-portfolio/`.\n- Pin dependency versions exactly. Add no runtime dependency, CDN or analytics unless asked.\n- Never install, publish, push or message anyone without authorization.\n\n## Build, then read the result\n\n1. Check a desktop width and 390px. Nothing scrolls sideways.\n2. Check default, hover, focus, pressed, disabled, loading, error and long text. Use the keyboard. Turn on reduced motion.\n3. Run these in order and report what they print.\n\n```bash\nnpm run typecheck\nnpm test\nnpm run build\nnpm run build:portfolio\n```\n\nRun `build` for docs changes and `build:portfolio` when portfolio-facing code changed. Both rebuild their own output folder.\n\n> Describe the result, not the plan.\n'}),B=`Read .claude/skills/zijie-ui/SKILL.md first.

Build the order summary for checkout: line items, an opt-in shipping protection add-on, an animated total and a Pay button bound to the request. Announce the result in a status line.

Verify before you report.
`,V=Object.fromEntries(z.map(e=>[e.id,`read`]));function H(){let e=t(),r=a(),i=d(r.sub),[o,s]=(0,C.useState)(Math.max(0,i)),[c,l]=(0,C.useState)(V);(0,C.useEffect)(()=>{i>=0&&s(i)},[i]);let u=i>=0?i:o,f=z[u];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{id:`guidance`,children:(0,w.jsx)(`p`,{children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Four short documents with numbers in them. Read one here, copy it, or hand it to an agent.`})})})}),(0,w.jsxs)(`div`,{id:f.id,className:`guidance`,children:[(0,w.jsx)(R,{documents:z,active:u,onSelect:e=>{s(e),r.setSub(z[e].id)}}),(0,w.jsx)(O,{doc:f,mode:c[f.id],onModeChange:e=>l(t=>({...t,[f.id]:e}))})]}),(0,w.jsx)(_,{id:`agents`,title:e({en:`Hand it to an agent`}),lead:e({en:`SKILL.md is written for coding agents. Give it to one and the next screen starts from your tokens instead of a guess.`}),children:(0,w.jsxs)(`div`,{className:`guidance-agents`,children:[(0,w.jsxs)(`ol`,{className:`guidance-steps`,children:[(0,w.jsxs)(`li`,{children:[(0,w.jsx)(`span`,{className:`kit-num kit-num--dark`,"aria-hidden":`true`,children:`1`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`guidance-steps__title`,children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Save the skill`})})}),(0,w.jsxs)(`p`,{className:`guidance-steps__text`,children:[(0,w.jsx)(`a`,{href:`#guidance/skill-md`,children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Open SKILL.md`})})}),(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:` and download it. In Claude Code it lives at `})}),(0,w.jsx)(`code`,{className:`kit-code-inline`,children:`.claude/skills/zijie-ui/SKILL.md`}),(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`. Other agents can take it as an instructions file.`})})]})]})]}),(0,w.jsxs)(`li`,{children:[(0,w.jsx)(`span`,{className:`kit-num kit-num--dark`,"aria-hidden":`true`,children:`2`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`guidance-steps__title`,children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Ask for the moment`})})}),(0,w.jsx)(`p`,{className:`guidance-steps__text`,children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Describe a screen the way a customer meets it: a checkout summary, a declined card, a claim. Skip the pixels.`})})})]})]}),(0,w.jsxs)(`li`,{children:[(0,w.jsx)(`span`,{className:`kit-num kit-num--dark`,"aria-hidden":`true`,children:`3`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`guidance-steps__title`,children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Read what it ran`})})}),(0,w.jsx)(`p`,{className:`guidance-steps__text`,children:(0,w.jsx)(n,{en:(0,w.jsx)(w.Fragment,{children:`Every task ends with the same checks: types, tests and a build. Ask the agent to report what they printed.`})})})]})]})]}),(0,w.jsx)(m,{className:`guidance-prompt`,title:e({en:`Prompt`}),code:B,language:`md`,label:e({en:`Example prompt`}),maxHeight:360})]})})]})}export{H as default};