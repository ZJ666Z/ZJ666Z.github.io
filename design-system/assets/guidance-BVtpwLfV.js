import{Fn as e,Mn as t,dn as n,g as r,gn as i,i as a,mt as o,o as s,un as c}from"./route-UEzl4zy4.js";import{n as l,t as u}from"./docs-CRxPR9PY.js";import{A as d,C as f,D as p,T as m,k as h}from"./kit-B_zmQpOy.js";import{i as g,n as _,o as v,r as y,s as b}from"./Prose-BAnNpw3c.js";var x=e(),S=n(),C=`guidance-reader`,w=[{value:`read`,label:`Read`},{value:`markdown`,label:`Markdown`}];function T({doc:e}){let t=(0,x.useMemo)(()=>({head:y(e.text),body:p(b(e.text).body,`md`)}),[e.text]);return(0,S.jsxs)(`div`,{className:`guidance-raw`,children:[(0,S.jsxs)(`div`,{className:`guidance-raw__bar`,children:[(0,S.jsx)(`span`,{className:`guidance-raw__title`,children:`Markdown`}),(0,S.jsx)(`span`,{className:`guidance-raw__file`,children:e.filename})]}),(0,S.jsx)(`pre`,{className:`guidance-raw__body`,role:`region`,tabIndex:0,"aria-label":`${e.filename} Markdown source`,children:(0,S.jsxs)(`code`,{children:[t.head.map((e,t)=>{let n=/^([A-Za-z][\w-]*:)(\s*)(.*)$/.exec(e);return n?(0,S.jsxs)(`span`,{children:[(0,S.jsx)(`span`,{className:`syn-attribute`,children:n[1]}),n[2],(0,S.jsx)(`span`,{className:`syn-string`,children:n[3]}),`
`]},t):(0,S.jsxs)(`span`,{className:`syn-punctuation`,children:[e,`
`]},t)}),t.body.map((e,t)=>e.type===`text`?e.text:(0,S.jsx)(`span`,{className:`syn-${e.type}`,children:e.text},`b${t}`))]})})]})}function E({doc:e,mode:t,onModeChange:n}){let a=(0,x.useRef)(null),o=(0,x.useRef)(null),l=(0,x.useMemo)(()=>v(e.text),[e.text]);return(0,x.useLayoutEffect)(()=>{let n=o.current;if(o.current={id:e.id,mode:t},!n||n.id===e.id&&n.mode===t)return;let r=a.current;n.id===e.id?c(r,[{opacity:0},{opacity:1}],{duration:160,easing:i}):c(r,[{opacity:0,translate:`0 8px`},{opacity:1,translate:`0 0`}],{duration:240,easing:i})},[e.id,t]),(0,S.jsxs)(`section`,{id:C,className:`guidance-reader`,"aria-label":`${e.filename} reader`,children:[(0,S.jsxs)(`div`,{className:`guidance-reader__bar`,children:[(0,S.jsx)(`div`,{className:`guidance-reader__modes`,children:(0,S.jsx)(r,{label:`${e.filename} view`,value:t,options:w,onChange:n})}),(0,S.jsxs)(`div`,{className:`guidance-reader__tools`,children:[(0,S.jsx)(m,{text:e.text,label:`Copy ${e.filename}`,showLabel:!0,tone:`light`,className:`guidance-reader__copy`}),(0,S.jsxs)(`a`,{className:`guidance-reader__download`,href:g(e.text),download:e.filename,children:[(0,S.jsx)(s,{name:`download`,size:16}),(0,S.jsxs)(`span`,{children:[`Download `,e.filename]})]})]})]}),(0,S.jsx)(`div`,{ref:a,className:`guidance-reader__body`,"data-mode":t,children:t===`read`?(0,S.jsx)(_,{blocks:l,label:e.title}):(0,S.jsx)(T,{doc:e})})]})}var D=(e,t)=>t>0?Math.max(0,Math.min(t-1,Math.round(e)||0)):0;function O(e,t,n){return n>0?e===`ArrowRight`||e===`ArrowDown`?D(t+1,n):e===`ArrowLeft`||e===`ArrowUp`?D(t-1,n):e===`Home`?0:e===`End`?n-1:-1:-1}function k(e,t){let n=0,r=1/0;return e.forEach((e,i)=>{let a=Math.abs(e-t);a<r&&(n=i,r=a)}),n}var A=(e,t,n,r=0)=>Math.max(0,Math.round(e-t+n-r)),j=(e,t=6)=>Math.abs(e)>t,M=(e,t)=>`${D(e,t)+1} / ${t}`,N=(e,t,n)=>`${e} ${D(t,n)+1} of ${n}`;function P({count:e,active:n,onSelect:r}){let i=(0,x.useRef)(null),a=(0,x.useRef)([]),o=(0,x.useRef)(n);o.current=n;let s=(0,x.useRef)(r);s.current=r;let c=(0,x.useRef)(!1),l=(0,x.useRef)(null),u=(0,x.useCallback)(()=>{let e=i.current;if(!e)return[];let t=Number.parseFloat(getComputedStyle(e).scrollPaddingLeft)||0,n=e.getBoundingClientRect().left;return a.current.map(r=>r?A(r.getBoundingClientRect().left,n,e.scrollLeft,t):0)},[]),d=(0,x.useCallback)((e,n=`smooth`)=>{let r=i.current,a=u()[e];r&&a!==void 0&&r.clientWidth&&r.scrollTo({left:a,behavior:t()?`auto`:n})},[u]),f=(0,x.useCallback)((t,{focus:n=!1}={})=>{t<0||t>=e||(l.current=t,s.current(t),d(t),n&&a.current[t]?.focus({preventScroll:!0}))},[e,d]),p=(0,x.useCallback)(t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;let n=O(t.key,o.current,e);n<0||(t.preventDefault(),f(n,{focus:!0}))},[e,f]);return(0,x.useEffect)(()=>{l.current!==n&&(l.current=n,d(n,`auto`))},[n,d]),(0,x.useEffect)(()=>{let e=i.current;if(!e)return;let t=0,n=()=>{if(c.current||!e.clientWidth)return;let t=k(u(),e.scrollLeft);t!==o.current&&(l.current=t,s.current(t))},r=()=>{window.clearTimeout(t),t=window.setTimeout(n,120)};return`onscrollend`in window?e.addEventListener(`scrollend`,n):e.addEventListener(`scroll`,r,{passive:!0}),()=>{window.clearTimeout(t),e.removeEventListener(`scrollend`,n),e.removeEventListener(`scroll`,r)}},[u]),(0,x.useEffect)(()=>{let e=i.current;if(!e)return;let n=null,r=!1,a=0,o=i=>{if(!n||i.pointerId!==n.id)return;let o=c.current;n=null,c.current=!1;try{e.releasePointerCapture(i.pointerId)}catch{}if(!o)return;r=!0,window.setTimeout(()=>{r=!1},0);let f=k(u(),e.scrollLeft);l.current=f,s.current(f),d(f),window.clearTimeout(a),a=window.setTimeout(()=>e.removeAttribute(`data-dragging`),t()?0:420)},f=t=>{t.pointerType===`mouse`&&t.button===0&&(window.clearTimeout(a),n={x:t.clientX,left:e.scrollLeft,id:t.pointerId})},p=t=>{if(!n||t.pointerId!==n.id)return;let r=t.clientX-n.x;if(!c.current){if(!j(r,6))return;c.current=!0,e.setAttribute(`data-dragging`,``);try{e.setPointerCapture(t.pointerId)}catch{}}e.scrollLeft=n.left-r},m=e=>{r&&(e.preventDefault(),e.stopPropagation())},h=()=>{n&&(n=null,c.current=!1,e.removeAttribute(`data-dragging`))};return e.addEventListener(`pointerdown`,f),e.addEventListener(`pointermove`,p),e.addEventListener(`pointerup`,o),e.addEventListener(`pointercancel`,o),e.addEventListener(`lostpointercapture`,h),e.addEventListener(`click`,m,!0),()=>{window.clearTimeout(a),e.removeEventListener(`pointerdown`,f),e.removeEventListener(`pointermove`,p),e.removeEventListener(`pointerup`,o),e.removeEventListener(`pointercancel`,o),e.removeEventListener(`lostpointercapture`,h),e.removeEventListener(`click`,m,!0),e.removeAttribute(`data-dragging`),c.current=!1}},[u,d]),{trackRef:i,cardRef:(0,x.useCallback)(e=>t=>{a.current[e]=t},[]),go:f,onKeyDown:p,scrollToIndex:d}}var F={"design-md":(0,S.jsxs)(`span`,{className:`guidance-art guidance-art--design`,"aria-hidden":`true`,children:[(0,S.jsx)(`b`,{children:`Aa`}),(0,S.jsx)(`span`,{className:`guidance-art__bars`,children:[0,1,2].map(e=>(0,S.jsx)(`i`,{style:{"--i":e}},e))})]}),"motion-md":(0,S.jsx)(`span`,{className:`guidance-art guidance-art--motion`,"aria-hidden":`true`,children:[0,1,2,3,4].map(e=>(0,S.jsx)(`i`,{style:{"--i":e}},e))}),"writing-md":(0,S.jsxs)(`span`,{className:`guidance-art guidance-art--writing`,"aria-hidden":`true`,children:[(0,S.jsx)(`i`,{style:{"--i":0}}),(0,S.jsx)(`i`,{style:{"--i":1}}),(0,S.jsx)(`i`,{style:{"--i":2},children:(0,S.jsx)(`u`,{})})]}),"skill-md":(0,S.jsxs)(`span`,{className:`guidance-art guidance-art--skill`,"aria-hidden":`true`,children:[(0,S.jsx)(`b`,{style:{"--i":0},children:`{`}),(0,S.jsx)(`b`,{style:{"--i":1},className:`guidance-art__z`,children:`z`}),(0,S.jsx)(`b`,{style:{"--i":2},children:`}`})]})};function I({documents:e,active:t,onSelect:n}){let r=e.length,{trackRef:i,cardRef:a,go:s,onKeyDown:c}=P({count:r,active:t,onSelect:n}),l=e[t];return(0,S.jsxs)(`section`,{className:`guidance-shelf`,"aria-roledescription":`carousel`,"aria-label":`Guidance documents`,children:[(0,S.jsx)(`div`,{ref:i,className:`guidance-track`,onKeyDown:c,children:e.map((e,n)=>(0,S.jsxs)(`button`,{ref:a(n),type:`button`,className:`guidance-card`,"aria-pressed":n===t,"aria-controls":C,tabIndex:n===t?0:-1,onClick:()=>s(n),children:[(0,S.jsx)(`span`,{className:`guidance-card__art`,children:F[e.id]}),(0,S.jsxs)(`span`,{className:`guidance-card__copy`,children:[(0,S.jsx)(`span`,{className:`guidance-card__file`,children:e.filename}),(0,S.jsx)(`span`,{className:`guidance-card__title`,children:e.title}),(0,S.jsx)(`span`,{className:`guidance-card__blurb`,children:e.blurb})]})]},e.id))}),(0,S.jsxs)(`div`,{className:`guidance-nav`,children:[(0,S.jsx)(`span`,{className:`guidance-nav__rail`,"aria-hidden":`true`,style:{"--count":r,"--index":t},children:(0,S.jsx)(`span`,{className:`guidance-nav__thumb`})}),(0,S.jsx)(`span`,{className:`guidance-nav__count`,"aria-hidden":`true`,children:M(t,r)}),(0,S.jsx)(o,{label:`Previous document`,icon:`arrow-left`,className:`guidance-nav__button`,"aria-disabled":t===0||void 0,onClick:()=>{t>0&&s(t-1)}}),(0,S.jsx)(o,{label:`Next document`,icon:`arrow-right`,className:`guidance-nav__button`,"aria-disabled":t===r-1||void 0,onClick:()=>{t<r-1&&s(t+1)}}),(0,S.jsx)(`span`,{className:`kit-sr-only`,role:`status`,children:l?N(l.title,t,r):``})]})]})}var L=u({"design-md":`---
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
`,"skill-md":'---\nname: zijie-ui\ndescription: Build interfaces with the Zijie Design System (@zijie/ui): React components, --z-* tokens, motion hooks and the docs conventions around them. Use when adding or changing UI in the design-system workspace or in an app that consumes @zijie/ui, especially checkout, payments, insurance and agentic-commerce screens.\n---\n\n# Build with Zijie UI.\n\nReuse the foundations. Compose for the task. Verify the experience.\n\n> Tokens first. Components second. Custom CSS last.\n\n## Start with the real screen\n\nInspect the target page and the components it already uses before you write anything. Read these, in order:\n\n- `packages/ui/src/tokens.css` holds every value. It is the single source.\n- `packages/ui/src/index.tsx` is the barrel. Everything importable lives behind it.\n- `packages/ui/src/components/` holds one folder per family, each with its component and its CSS.\n- `packages/ui/src/motion/` holds press, reveal, roll label, async timing and reduced motion.\n- `apps/studio/src/pages/` holds one docs page per component, with its props, keys, generated code and live specimens.\n\nIn another repo, map the equivalents explicitly. Never assume a class or a token exists. The docs are served at `/design-system/`.\n\n## Import the package, not its files\n\n```tsx\nimport \'@zijie/ui/styles.css\';\nimport { Button, ProjectCard, useAsyncAction } from \'@zijie/ui\';\n```\n\n- Load `@zijie/ui/styles.css` once, at the entry. It carries tokens, base, motion and every component.\n- Load `@zijie/ui/tokens.css` alone when plain CSS only needs the values.\n- Import motion primitives from `@zijie/ui/motion` and registry helpers from `@zijie/ui/tokens`.\n- Load `@zijie/ui/portfolio.css` only for the legacy `skin="portfolio"` DOM on the live site.\n\n## Reach for the component that exists\n\n| Need | Use |\n| --- | --- |\n| An action | `Button`, `ButtonLink`, `IconButton`, `PayButton` |\n| A field | `Input` |\n| A choice | `Switch`, `Segmented` |\n| Content | `ProjectCard`, `Tag`, `Surface`, `Stat`, `SectionHeading`, `Text`, `MediaFrame` |\n| Layout | `Container`, `Stack`, `Grid` |\n| Waiting | `Loader`, `Presence`, `AnimatedNumber`, `useAsyncAction` |\n| Feedback | `Toast`, `Dialog` |\n| Motion | `Reveal`, `Stagger`, `RollLabel`, `useReducedMotion`, `useActivity` |\n\nIf nothing fits, extend a component with a typed variant. Do not restyle it from a page.\n\n## Keep the visual language consistent\n\n- Values come from `--z-*` tokens. No raw hex, and no one-off sizes for color, space, radius or type.\n- Variants are typed props. State lives in `data-state` and `aria-*`. JavaScript never sets a color.\n- Fills are solid. A gradient is allowed only for a dot grid, a mask or an edge fade.\n- Separate by tone and radius: white cards (`--z-radius-card`) and panels (`--z-radius-panel`) on `--z-color-canvas`. No 1px border around every box. Shadows only when something floats.\n- Montserrat sets headings and body, Inter sets labels and numbers, monospace is for code only.\n- Focus is a 2px ring in `--z-color-blue`, offset by 3px. Touch targets are 44px or larger. No text under 12px, and reading text is 14px or larger. No negative letter-spacing on Montserrat.\n\n## Connect movement to meaning\n\n- Durations and easings are tokens: `--z-motion-*` and `--z-ease-*`. Never a literal.\n- Animate transform, translate, scale, rotate, opacity, filter, clip-path, stroke-dashoffset and colors. Never width, height, inset or margin.\n- Hover effects sit behind `(hover: hover) and (pointer: fine)`. Touch gets `:active`.\n- Every animation has a reduced-motion path. Loops pause offscreen and in hidden tabs. Put `data-playback="paused"` on an ancestor to hold library loops still.\n- Async work goes through `useAsyncAction`: a 160ms delay, a 320ms minimum, a 1600ms success hold and abort support. Never a bare timer. Never fake progress.\n- Pass `state={action.visibleState}` to `Button` so the box keeps its width, and announce the result in a `role="status"` line.\n\n```tsx\nimport { Button, useAsyncAction } from \'@zijie/ui\';\n\nexport function OrderButton() {\n  const pay = useAsyncAction();\n  return (\n    <Button state={pay.visibleState} onClick={() => pay.run(({ signal }) => charge(signal))}>\n      Pay $48.00\n    </Button>\n  );\n}\n```\n\n## Write only what matters\n\n- Labels are verbs, and the amount is on the button when money moves.\n- An error says what is wrong and how to fix it.\n- A string a component owns is a `labels` prop with English defaults.\n- A demo that simulates something says "Simulated".\n\n## Know the domain\n\n- **Checkout.** Use `PayButton` for the pay action. It takes the full `action.state`, closes into a circle while the payment runs, draws a check and re-opens as "Try again" after a failure. Pass `confirm="hold"` when a payment is large or made by an agent. Show the total with its currency before the last tap. Add-ons are opt-in and priced, never pre-checked. A promo is a line in the summary. Let the total animate with `AnimatedNumber`, and announce the settled total in a status line.\n- **Insurance.** Say what is covered, what is not and what it costs, in plain words.\n- **Agentic commerce.** The state is a word first and the picture confirms it. Nothing opens a microphone or camera without a press.\n- **Design systems.** One source for values, parity tests at the edges and docs generated from real files.\n\n## Keep the docs true\n\nWhen you add or change a component or a token:\n\n- Values live only in `packages/ui/src/tokens.css`. Add metadata for a new `--z-*` token in `packages/ui/src/tokens.ts`. A parity test enforces it.\n- Update the component\'s page in `apps/studio/src/pages/`: `meta.ts` for props, keys and tokens, `codegen.ts` for the Code view and `sources.ts` for real files.\n- Add or update a Node test in `tests/`.\n- The barrel re-exports each family with `export *`. Do not maintain export lists by hand.\n\n## Stay inside the boundaries\n\n- Never write to `zijiez-portfolio/`. It is the live site\'s source. The portfolio build reads it and writes `dist-portfolio/`.\n- Pin dependency versions exactly. Add no runtime dependency, CDN or analytics unless asked.\n- Never install, publish, push or message anyone without authorization.\n\n## Build, then read the result\n\n1. Check a desktop width and 390px. Nothing scrolls sideways.\n2. Check default, hover, focus, pressed, disabled, loading, error and long text. Use the keyboard. Turn on reduced motion.\n3. Run these in order and report what they print.\n\n```bash\nnpm run typecheck\nnpm test\nnpm run build\nnpm run build:portfolio\n```\n\nRun `build` for docs changes and `build:portfolio` when portfolio-facing code changed. Both rebuild their own output folder.\n\n> Describe the result, not the plan.\n'}),R=`Read .claude/skills/zijie-ui/SKILL.md first.

Build the order summary for checkout: line items, an opt-in shipping protection add-on, an animated total and a Pay button bound to the request. Announce the result in a status line.

Verify before you report.
`,z=Object.fromEntries(L.map(e=>[e.id,`read`]));function B(){let e=a(),t=l(e.sub),[n,r]=(0,x.useState)(Math.max(0,t)),[i,o]=(0,x.useState)(z);(0,x.useEffect)(()=>{t>=0&&r(t)},[t]);let s=t>=0?t:n,c=L[s];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d,{id:`guidance`,children:(0,S.jsx)(`p`,{children:`Four short documents with numbers in them. Read one here, copy it, or hand it to an agent.`})}),(0,S.jsxs)(`div`,{id:c.id,className:`guidance`,children:[(0,S.jsx)(I,{documents:L,active:s,onSelect:t=>{r(t),e.setSub(L[t].id)}}),(0,S.jsx)(E,{doc:c,mode:i[c.id],onModeChange:e=>o(t=>({...t,[c.id]:e}))})]}),(0,S.jsx)(h,{id:`agents`,title:`Hand it to an agent`,lead:`SKILL.md is written for coding agents. Give it to one and the next screen starts from your tokens instead of a guess.`,children:(0,S.jsxs)(`div`,{className:`guidance-agents`,children:[(0,S.jsxs)(`ol`,{className:`guidance-steps`,children:[(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`span`,{className:`kit-num kit-num--dark`,"aria-hidden":`true`,children:`1`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`guidance-steps__title`,children:`Save the skill`}),(0,S.jsxs)(`p`,{className:`guidance-steps__text`,children:[(0,S.jsx)(`a`,{href:`#guidance/skill-md`,children:`Open SKILL.md`}),` and download it. In Claude Code it lives at `,(0,S.jsx)(`code`,{className:`kit-code-inline`,children:`.claude/skills/zijie-ui/SKILL.md`}),`. Other agents can take it as an instructions file.`]})]})]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`span`,{className:`kit-num kit-num--dark`,"aria-hidden":`true`,children:`2`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`guidance-steps__title`,children:`Ask for the moment`}),(0,S.jsx)(`p`,{className:`guidance-steps__text`,children:`Describe a screen the way a customer meets it: a checkout summary, a declined card, a claim. Skip the pixels.`})]})]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`span`,{className:`kit-num kit-num--dark`,"aria-hidden":`true`,children:`3`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`guidance-steps__title`,children:`Read what it ran`}),(0,S.jsx)(`p`,{className:`guidance-steps__text`,children:`Every task ends with the same checks: types, tests and a build. Ask the agent to report what they printed.`})]})]})]}),(0,S.jsx)(f,{className:`guidance-prompt`,title:`Prompt`,code:R,language:`md`,label:`Example prompt`,maxHeight:360})]})})]})}export{B as default};