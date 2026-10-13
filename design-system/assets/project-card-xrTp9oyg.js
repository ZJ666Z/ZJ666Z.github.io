import{Fn as e,Ft as t,Mt as n,Rn as r,bn as i,mn as a,mt as o,pn as s,st as c}from"./route-D8V-RcHq.js";import{t as l}from"./tokens--8wjVqaD.js";import{d as u,j as d,u as f}from"./docs-Dv2yWw9W.js";import{f as p,i as m,l as h,m as g,r as _,u as v}from"./kit-CGiBTmcs.js";import{t as y}from"./projects-B499T4Vf.js";import{t as b}from"./card-BhD8k76I.js";var x=r(),S={skin:`system`,layout:`stacked`,tone:`white`,tags:!0,linked:!0},C={width:532,height:322};function w(e){return e===`portfolio`?`// The live site's skin: its legacy DOM and stylesheet.
// zijiez.me supplies the base rules and --fx-spring it expects.
import '@zijie/ui/portfolio.css';

import { ProjectCard } from '@zijie/ui';
`:`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { ProjectCard } from '@zijie/ui';
`}var T=e=>e.includes(`'`)?JSON.stringify(e):`'${e}'`;function E({skin:e,layout:t,tone:n,tags:r,linked:i}){let a=e===`portfolio`,o=y.map(e=>[`  {`,`    title: ${T(e.title)},`,`    description: ${T(e.description)},`,`    image: ${T(e.image)},`,...r?[`    tags: [${e.tags.map(T).join(`, `)}],`]:[],...i?[`    url: ${T(e.url)},`]:[],`  },`].join(`
`)),s=[`key={project.${i?`url`:`title`}}`,...i?[`href={project.url}`]:[],`title={project.title}`,`description={project.description}`,`image={project.image}`,...r?[`tags={project.tags}`]:[],...a?[`skin="portfolio"`,`imageWidth={${C.width}}`,`imageHeight={${C.height}}`]:[...t===`horizontal`?[`layout="horizontal"`]:[],...n===`subtle`?[]:[`tone="${n}"`]]];return[`import { ProjectCard } from '@zijie/ui';`,``,`const projects = [`,...o,`];`,``,`/** The page owns the grid; each card is one link with nothing nested inside. */`,`export function SelectedProjects() {`,`  return (`,`    <div className="${t===`horizontal`&&!a?`project-list`:`project-grid`}">`,`      {projects.map(project => (`,`        <ProjectCard`,...s.map(e=>`          ${e}`),`        />`,`      ))}`,`    </div>`,`  );`,`}`,``].join(`
`)}var D=d(),O=a(),k=new Map;function A(e){try{let t=k.get(e);return t||(t=new CSSStyleSheet,t.replaceSync(e),k.set(e,t)),t}catch{return null}}function j({css:e,className:t,children:r}){let i=(0,x.useRef)(null),[a,o]=(0,x.useState)(null);return(0,x.useLayoutEffect)(()=>{let t=i.current;if(!t)return;let n=t.shadowRoot??t.attachShadow({mode:`open`}),r=`adoptedStyleSheets`in n?A(e):null;r&&(n.adoptedStyleSheets=[r]),o({root:n,inline:!r})},[e]),(0,O.jsx)(`div`,{ref:i,className:t,children:(0,O.jsx)(n,{en:a&&(0,D.createPortal)((0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(n,{en:a.inline&&(0,O.jsx)(`style`,{children:e})}),(0,O.jsx)(n,{en:r})]}),a.root)})})}function M({label:r,layout:a,motionKey:c,focusable:l,children:u}){let d=t(),f=(0,x.useRef)(null),p=x.Children.toArray(u),m=p.length,[h,g]=(0,x.useState)({overflow:!1,index:0}),_=()=>{let e=f.current,t=e?.firstElementChild;return!e||!t?1:t.offsetWidth+(parseFloat(getComputedStyle(e).columnGap)||0)},v=(0,x.useCallback)(()=>{let e=f.current;if(!e)return;let t=e.scrollWidth-e.clientWidth,n=t>1,r=e.scrollLeft>=t-1,i=n?r?m-1:Math.min(m-1,Math.round(e.scrollLeft/_())):0;g(e=>e.overflow===n&&e.index===i?e:{overflow:n,index:i})},[m]);(0,x.useLayoutEffect)(()=>{let e=f.current;if(!e)return;v();let t=0,n=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(v)};e.addEventListener(`scroll`,n,{passive:!0});let r=typeof ResizeObserver==`function`?new ResizeObserver(n):null;return r?.observe(e),()=>{cancelAnimationFrame(t),e.removeEventListener(`scroll`,n),r?.disconnect()}},[v,a]);let y=(0,x.useRef)(!0);(0,x.useLayoutEffect)(()=>{if(y.current){y.current=!1;return}let e=f.current;e&&(e.scrollLeft=0,[...e.children].forEach((e,t)=>{s(e,[{opacity:0,translate:`0 16px`},{opacity:1,translate:`0 0`}],{duration:i.layout,delay:Math.min(t*i.stagger,i.delayCap)})}))},[c]);let b=t=>{let n=f.current;if(!n)return;let r=e()?`auto`:`smooth`,i=h.index+t;i>=m?n.scrollTo({left:0,behavior:r}):i<0?n.scrollTo({left:n.scrollWidth,behavior:r}):n.scrollBy({left:t*_(),behavior:r})};return(0,O.jsxs)(`div`,{className:`project-card-shelf`,"data-layout":a,"data-overflow":h.overflow||void 0,children:[(0,O.jsx)(`div`,{ref:f,className:`project-card-shelf__track`,role:`region`,"aria-label":d({en:r}),tabIndex:l&&h.overflow?0:void 0,children:(0,O.jsx)(n,{en:p.map((e,t)=>(0,O.jsx)(`div`,{className:`project-card-shelf__slide`,children:(0,O.jsx)(n,{en:e})},t))})}),(0,O.jsx)(n,{en:h.overflow&&(0,O.jsxs)(`div`,{className:`project-card-shelf__nav`,children:[(0,O.jsx)(o,{icon:`arrow-left`,label:d({en:`Previous project`}),variant:`light`,size:`sm`,shape:`circle`,tooltip:!0,onClick:()=>b(-1)}),(0,O.jsxs)(`span`,{className:`project-card-shelf__dots`,"aria-hidden":`true`,style:{"--shelf-index":h.index},children:[(0,O.jsx)(n,{en:p.map((e,t)=>(0,O.jsx)(`span`,{className:`project-card-shelf__dot`,"data-current":t===h.index||void 0},t))}),(0,O.jsx)(`span`,{className:`project-card-shelf__pill`})]}),(0,O.jsx)(o,{icon:`arrow-right`,label:d({en:`Next project`}),variant:`light`,size:`sm`,shape:`circle`,tooltip:!0,onClick:()=>b(1)})]})})]})}var N=`import type { ReactNode } from 'react';
import { Tag } from './Tag';
import { Text } from './Text';

export type ProjectCardProps = {
  /** Text, or bilingual markup where a page carries both languages (the portfolio's dual spans). */
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt?: string;
  tags?: ReactNode[];
  href?: string;
  layout?: 'stacked' | 'horizontal';
  tone?: 'white' | 'subtle';
  /** \`portfolio\` emits the exact legacy DOM the live site and its parity tests expect. */
  skin?: 'system' | 'portfolio';
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageLoading?: 'lazy' | 'eager';
  /** Extra data-* attributes on the root (the portfolio marks its cards \`data-ui="ProjectCard"\`). */
  rootAttributes?: Record<\`data-\${string}\`, string>;
};

export function ProjectCard({ title, description, image, imageAlt = '', tags = [], href, layout = 'stacked', tone = 'subtle', skin = 'system', className: extraClass = '', imageWidth, imageHeight, imageLoading = 'lazy', rootAttributes }: ProjectCardProps) {
  const original = skin === 'portfolio';
  const part = (name: string) => original ? (name === 'tags' ? 'tags' : \`card__\${name}\`) : \`z-project-card__\${name}\`;
  const contents = <>
    <div className={part('media')}><img src={image} alt={imageAlt} loading={imageLoading} width={imageWidth} height={imageHeight} /></div>
    <div className={part('body')}>
      <div className={part('copy')}>
        {original
          ? <><h3>{title}</h3><p>{description}</p></>
          : <><Text as="h3" role="title">{title}</Text><Text tone="secondary">{description}</Text></>}
      </div>
      <div className={part('tags')}>{tags.map((tag, index) => <Tag key={typeof tag === 'string' ? \`\${tag}-\${index}\` : index} variant="project" skin={skin}>{tag}</Tag>)}</div>
    </div>
  </>;
  const className = \`\${original ? 'card' : \`z-project-card z-project-card--\${layout} z-project-card--\${tone}\`}\${extraClass ? \` \${extraClass}\` : ''}\`;
  // One interactive root; tags and text must not introduce nested actions.
  if (href) return <a className={className} href={href} {...rootAttributes}>{contents}</a>;
  return <article className={className} {...rootAttributes}>{contents}</article>;
}
`,P="import type { HTMLAttributes } from 'react';\n\nexport type TagProps = HTMLAttributes<HTMLSpanElement> & {\n  tone?: 'outline' | 'soft' | 'dark';\n  variant?: 'section' | 'project' | 'problem' | 'solution';\n  /** `portfolio` emits the live site's legacy classes (`.tag` / `.pill`). */\n  skin?: 'system' | 'portfolio';\n};\n\nexport function Tag({ children, tone = 'outline', variant = 'section', skin = 'system', className = '', ...props }: TagProps) {\n  const classes = skin === 'portfolio' ? (variant === 'project' ? 'tag' : 'pill') : `z-tag z-tag--${variant} z-tag--${tone}`;\n  return <span className={`${classes}${className ? ` ${className}` : ''}`} {...props}>{children}</span>;\n}\n",F=`/* Existing portfolio skin. Kept separate from documentation and new controls. */
@import './tokens.css';
:root {
  --bg: var(--z-color-canvas); --white: var(--z-color-surface);
  --dark: var(--z-color-ink); --ink: var(--z-color-ink); --ink-2: var(--z-color-ink-secondary);
  --ink-3: var(--z-color-line); --muted: var(--z-color-muted-legacy); --line: var(--z-color-line);
  --blue: var(--z-color-blue); --blue-btn: var(--z-color-blue-action); --font: var(--z-font-body);
  --page: var(--z-container); --pad: var(--z-gutter);
  --r-card: var(--z-radius-card); --r-block: var(--z-radius-panel);
  --r-btn: var(--z-radius-button); --r-pill: var(--z-radius-pill);
}
.card {
  display: flex; flex-direction: column; gap: 32px;
  background: var(--bg); border-radius: var(--r-card); padding: 16px; overflow: hidden;
}
.sec--white .card { background: var(--bg); }
.card__media { border-radius: 8px; overflow: hidden; aspect-ratio: 532 / 322; background: #fff; }
.card__media img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .7s var(--fx-spring);
}
.card__body { padding: 0 16px 16px; display: grid; gap: 16px; }
.card__copy { display: grid; gap: 10px; }
.card__body h3 { position: relative; font-size: 24px; line-height: 32px; font-weight: 600; }
.card__body h3::after {
  content: ""; position: absolute; right: 8px; top: 8px;
  width: 32px; height: 32px; opacity: 0; pointer-events: none;
  background: center / 18px 18px no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M4 14L14 4M6 4h8v8' stroke='%231A1A1A' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  transition: opacity .7s var(--fx-spring), transform .7s var(--fx-spring);
}
.card:hover .card__media img,
.card:focus-visible .card__media img { transform: scale(1.1); }
.card:hover .card__body h3::after,
.card:focus-visible .card__body h3::after { opacity: 1; transform: translate(8px, -8px); }
.card__body p { color: var(--ink-2); }
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  padding: 6px 14px 6px 12px; border-radius: var(--r-pill);
  background: var(--bg); box-shadow: inset 0 0 0 1px var(--dark);
  font-size: 12px; line-height: 18px; font-weight: 500; color: var(--ink);
}
`,I=[{name:`ProjectCard.tsx`,code:N},{name:`Tag.tsx`,code:P},{name:`card.css`,code:b},{name:`portfolio.css`,code:F},{name:`tokens.css`,code:l}],L=[l.replace(/:root/g,`:host`),`
:host {
  --fx-spring: var(--z-ease-spring);
  display: block;
  color: var(--ink);
  font-family: var(--font);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
}
*, *::before, *::after { box-sizing: border-box; }
img, svg { max-width: 100%; display: block; }
img { height: auto; }
a { color: inherit; text-decoration: none; }
p, h1, h2, h3 { margin: 0; }
h1, h2, h3 { font-weight: 600; letter-spacing: 0; }
:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; border-radius: 4px; }
@media (max-width: 809.98px) { :host { font-size: 16px; line-height: 26px; } }
`,F.replace(/@import[^;]+;/g,``).replace(/:root/g,`:host`),`
.card { height: 100%; -webkit-tap-highlight-color: transparent; }
`].join(`
`),R=[{value:`system`,label:`System`},{value:`portfolio`,label:`Portfolio`}],z=[{value:`stacked`,label:`Stacked`},{value:`horizontal`,label:`Horizontal`}],B=[{value:`white`,label:`White`},{value:`subtle`,label:`Subtle`}],V=`The live site's card, exactly as it ships.`;function H(){let e=t(),[r,i]=(0,x.useState)(S),[a,o]=(0,x.useState)(``),s=e=>t=>{o(``),i(n=>({...n,[e]:t}))},l=r.skin===`portfolio`,d=l||r.tone===`subtle`,b=e=>{let t=e.nativeEvent.composedPath().find(e=>e instanceof HTMLAnchorElement);if(!t||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();let n=t.querySelector(`h3`)?.textContent??`The case study`;o(`“${n}” opens on zijiez.me. Cmd- or Ctrl-click to visit it.`)},T=y.map((t,i)=>{let a=(0,O.jsx)(c,{title:e({en:t.title}),description:e({en:t.description}),image:t.image,imageAlt:``,tags:r.tags?[...t.tags]:[],href:r.linked?t.url:void 0,layout:l?void 0:r.layout,tone:l?void 0:r.tone,skin:r.skin,imageWidth:C.width,imageHeight:C.height,imageLoading:i===0?`eager`:`lazy`});return l?(0,O.jsx)(j,{css:L,className:`project-card-frame`,children:(0,O.jsx)(n,{en:a})},t.url):(0,O.jsx)(`div`,{className:`project-card-fill`,children:(0,O.jsx)(n,{en:a})},t.url)});return(0,O.jsx)(v,{page:`project-card`,name:`Project card`,code:{setup:w(r.skin),usage:E(r),usageFile:`SelectedProjects.tsx`,sources:I},controls:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(p,{label:e({en:`Skin`}),value:r.skin,options:R,onChange:e=>s(`skin`)(e)}),(0,O.jsx)(n,{en:l?(0,O.jsx)(`p`,{className:`project-card-note`,children:(0,O.jsx)(n,{en:(0,O.jsx)(O.Fragment,{children:`Layout and tone belong to the system skin. The portfolio skin draws the live card exactly, so it has neither.`})})}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(p,{label:e({en:`Layout`}),value:r.layout,options:z,onChange:e=>s(`layout`)(e)}),(0,O.jsx)(p,{label:e({en:`Tone`}),value:r.tone,options:B,onChange:e=>s(`tone`)(e)})]})}),(0,O.jsx)(g,{label:e({en:`Tags`}),checked:r.tags,onChange:s(`tags`)}),(0,O.jsx)(g,{label:e({en:`Link to the case study`}),checked:r.linked,onChange:s(`linked`)})]}),details:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(h,{tokens:f.tokens??[]}),(0,O.jsx)(`div`,{className:`project-card-skins`,children:(0,O.jsx)(n,{en:u.map(e=>(0,O.jsxs)(`section`,{className:`project-card-skin`,"data-current":e.id===r.skin||void 0,"aria-labelledby":`project-card-skin-${e.id}`,children:[(0,O.jsx)(`h3`,{id:`project-card-skin-${e.id}`,className:`project-card-skin__title`,children:(0,O.jsx)(n,{en:e.title})}),(0,O.jsx)(`code`,{className:`project-card-skin__markup`,children:e.markup}),(0,O.jsx)(`ul`,{className:`project-card-skin__points`,children:(0,O.jsx)(n,{en:e.points.map(e=>(0,O.jsx)(`li`,{children:(0,O.jsx)(n,{en:e})},e))})})]},e.id))})}),(0,O.jsx)(m,{props:f.props??[]}),(0,O.jsx)(_,{keys:f.keys??[]})]}),children:()=>(0,O.jsxs)(`div`,{className:`project-card-scene`,onClick:b,children:[(0,O.jsx)(`div`,{className:`project-card-stage`,"data-panel":d||void 0,children:(0,O.jsx)(M,{label:e({en:`Selected projects`}),layout:l?`stacked`:r.layout,motionKey:`${r.skin}-${r.layout}-${r.tone}`,focusable:!r.linked,children:(0,O.jsx)(n,{en:T})})}),(0,O.jsxs)(`p`,{className:`project-card-status`,role:`status`,children:[(0,O.jsx)(n,{en:a&&(0,O.jsx)(`span`,{className:`project-card-chip`,children:(0,O.jsx)(n,{en:(0,O.jsx)(O.Fragment,{children:`Simulated`})})})}),(0,O.jsx)(n,{en:a||(l?V:``)})]})]})})}export{H as default};