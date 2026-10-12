import{Fn as e,Mn as t,_n as n,dn as r,mt as i,st as a,un as o}from"./route-UEzl4zy4.js";import{t as s}from"./tokens--8wjVqaD.js";import{d as c,j as l,u}from"./docs-CRxPR9PY.js";import{f as d,i as f,l as p,m,r as h,u as g}from"./kit-B_zmQpOy.js";import{t as _}from"./projects-B499T4Vf.js";import{t as v}from"./card-BhD8k76I.js";var y=e(),b={skin:`system`,layout:`stacked`,tone:`white`,tags:!0,linked:!0},x={width:532,height:322};function S(e){return e===`portfolio`?`// The live site's skin: its legacy DOM and stylesheet.
// zijiez.me supplies the base rules and --fx-spring it expects.
import '@zijie/ui/portfolio.css';

import { ProjectCard } from '@zijie/ui';
`:`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { ProjectCard } from '@zijie/ui';
`}var C=e=>e.includes(`'`)?JSON.stringify(e):`'${e}'`;function w({skin:e,layout:t,tone:n,tags:r,linked:i}){let a=e===`portfolio`,o=_.map(e=>[`  {`,`    title: ${C(e.title)},`,`    description: ${C(e.description)},`,`    image: ${C(e.image)},`,...r?[`    tags: [${e.tags.map(C).join(`, `)}],`]:[],...i?[`    url: ${C(e.url)},`]:[],`  },`].join(`
`)),s=[`key={project.${i?`url`:`title`}}`,...i?[`href={project.url}`]:[],`title={project.title}`,`description={project.description}`,`image={project.image}`,...r?[`tags={project.tags}`]:[],...a?[`skin="portfolio"`,`imageWidth={${x.width}}`,`imageHeight={${x.height}}`]:[...t===`horizontal`?[`layout="horizontal"`]:[],...n===`subtle`?[]:[`tone="${n}"`]]];return[`import { ProjectCard } from '@zijie/ui';`,``,`const projects = [`,...o,`];`,``,`/** The page owns the grid; each card is one link with nothing nested inside. */`,`export function SelectedProjects() {`,`  return (`,`    <div className="${t===`horizontal`&&!a?`project-list`:`project-grid`}">`,`      {projects.map(project => (`,`        <ProjectCard`,...s.map(e=>`          ${e}`),`        />`,`      ))}`,`    </div>`,`  );`,`}`,``].join(`
`)}var T=l(),E=r(),D=new Map;function O(e){try{let t=D.get(e);return t||(t=new CSSStyleSheet,t.replaceSync(e),D.set(e,t)),t}catch{return null}}function k({css:e,className:t,children:n}){let r=(0,y.useRef)(null),[i,a]=(0,y.useState)(null);return(0,y.useLayoutEffect)(()=>{let t=r.current;if(!t)return;let n=t.shadowRoot??t.attachShadow({mode:`open`}),i=`adoptedStyleSheets`in n?O(e):null;i&&(n.adoptedStyleSheets=[i]),a({root:n,inline:!i})},[e]),(0,E.jsx)(`div`,{ref:r,className:t,children:i&&(0,T.createPortal)((0,E.jsxs)(E.Fragment,{children:[i.inline&&(0,E.jsx)(`style`,{children:e}),n]}),i.root)})}function A({label:e,layout:r,motionKey:a,focusable:s,children:c}){let l=(0,y.useRef)(null),u=y.Children.toArray(c),d=u.length,[f,p]=(0,y.useState)({overflow:!1,index:0}),m=()=>{let e=l.current,t=e?.firstElementChild;return!e||!t?1:t.offsetWidth+(parseFloat(getComputedStyle(e).columnGap)||0)},h=(0,y.useCallback)(()=>{let e=l.current;if(!e)return;let t=e.scrollWidth-e.clientWidth,n=t>1,r=e.scrollLeft>=t-1,i=n?r?d-1:Math.min(d-1,Math.round(e.scrollLeft/m())):0;p(e=>e.overflow===n&&e.index===i?e:{overflow:n,index:i})},[d]);(0,y.useLayoutEffect)(()=>{let e=l.current;if(!e)return;h();let t=0,n=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(h)};e.addEventListener(`scroll`,n,{passive:!0});let r=typeof ResizeObserver==`function`?new ResizeObserver(n):null;return r?.observe(e),()=>{cancelAnimationFrame(t),e.removeEventListener(`scroll`,n),r?.disconnect()}},[h,r]);let g=(0,y.useRef)(!0);(0,y.useLayoutEffect)(()=>{if(g.current){g.current=!1;return}let e=l.current;e&&(e.scrollLeft=0,[...e.children].forEach((e,t)=>{o(e,[{opacity:0,translate:`0 16px`},{opacity:1,translate:`0 0`}],{duration:n.layout,delay:Math.min(t*n.stagger,n.delayCap)})}))},[a]);let _=e=>{let n=l.current;if(!n)return;let r=t()?`auto`:`smooth`,i=f.index+e;i>=d?n.scrollTo({left:0,behavior:r}):i<0?n.scrollTo({left:n.scrollWidth,behavior:r}):n.scrollBy({left:e*m(),behavior:r})};return(0,E.jsxs)(`div`,{className:`project-card-shelf`,"data-layout":r,"data-overflow":f.overflow||void 0,children:[(0,E.jsx)(`div`,{ref:l,className:`project-card-shelf__track`,role:`region`,"aria-label":e,tabIndex:s&&f.overflow?0:void 0,children:u.map((e,t)=>(0,E.jsx)(`div`,{className:`project-card-shelf__slide`,children:e},t))}),f.overflow&&(0,E.jsxs)(`div`,{className:`project-card-shelf__nav`,children:[(0,E.jsx)(i,{icon:`arrow-left`,label:`Previous project`,variant:`light`,size:`sm`,shape:`circle`,tooltip:!0,onClick:()=>_(-1)}),(0,E.jsxs)(`span`,{className:`project-card-shelf__dots`,"aria-hidden":`true`,style:{"--shelf-index":f.index},children:[u.map((e,t)=>(0,E.jsx)(`span`,{className:`project-card-shelf__dot`,"data-current":t===f.index||void 0},t)),(0,E.jsx)(`span`,{className:`project-card-shelf__pill`})]}),(0,E.jsx)(i,{icon:`arrow-right`,label:`Next project`,variant:`light`,size:`sm`,shape:`circle`,tooltip:!0,onClick:()=>_(1)})]})]})}var j=`import { Tag } from './Tag';
import { Text } from './Text';

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  tags?: string[];
  href?: string;
  layout?: 'stacked' | 'horizontal';
  tone?: 'white' | 'subtle';
  /** \`portfolio\` emits the exact legacy DOM the live site and its parity tests expect. */
  skin?: 'system' | 'portfolio';
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageLoading?: 'lazy' | 'eager';
};

export function ProjectCard({ title, description, image, imageAlt = '', tags = [], href, layout = 'stacked', tone = 'subtle', skin = 'system', className: extraClass = '', imageWidth, imageHeight, imageLoading = 'lazy' }: ProjectCardProps) {
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
      <div className={part('tags')}>{tags.map((tag, index) => <Tag key={\`\${tag}-\${index}\`} variant="project" skin={skin}>{tag}</Tag>)}</div>
    </div>
  </>;
  const className = \`\${original ? 'card' : \`z-project-card z-project-card--\${layout} z-project-card--\${tone}\`}\${extraClass ? \` \${extraClass}\` : ''}\`;
  // One interactive root; tags and text must not introduce nested actions.
  if (href) return <a className={className} href={href}>{contents}</a>;
  return <article className={className}>{contents}</article>;
}
`,M="import type { HTMLAttributes } from 'react';\n\nexport type TagProps = HTMLAttributes<HTMLSpanElement> & {\n  tone?: 'outline' | 'soft' | 'dark';\n  variant?: 'section' | 'project' | 'problem' | 'solution';\n  /** `portfolio` emits the live site's legacy classes (`.tag` / `.pill`). */\n  skin?: 'system' | 'portfolio';\n};\n\nexport function Tag({ children, tone = 'outline', variant = 'section', skin = 'system', className = '', ...props }: TagProps) {\n  const classes = skin === 'portfolio' ? (variant === 'project' ? 'tag' : 'pill') : `z-tag z-tag--${variant} z-tag--${tone}`;\n  return <span className={`${classes}${className ? ` ${className}` : ''}`} {...props}>{children}</span>;\n}\n",N=`/* Existing portfolio skin. Kept separate from documentation and new controls. */
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
`,P=[{name:`ProjectCard.tsx`,code:j},{name:`Tag.tsx`,code:M},{name:`card.css`,code:v},{name:`portfolio.css`,code:N},{name:`tokens.css`,code:s}],F=[s.replace(/:root/g,`:host`),`
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
`,N.replace(/@import[^;]+;/g,``).replace(/:root/g,`:host`),`
.card { height: 100%; -webkit-tap-highlight-color: transparent; }
`].join(`
`),I=[{value:`system`,label:`System`},{value:`portfolio`,label:`Portfolio`}],L=[{value:`stacked`,label:`Stacked`},{value:`horizontal`,label:`Horizontal`}],R=[{value:`white`,label:`White`},{value:`subtle`,label:`Subtle`}],z=`The live site's card, exactly as it ships.`;function B(){let[e,t]=(0,y.useState)(b),[n,r]=(0,y.useState)(``),i=e=>n=>{r(``),t(t=>({...t,[e]:n}))},o=e.skin===`portfolio`,s=o||e.tone===`subtle`,l=e=>{let t=e.nativeEvent.composedPath().find(e=>e instanceof HTMLAnchorElement);if(!t||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();let n=t.querySelector(`h3`)?.textContent??`The case study`;r(`“${n}” opens on zijiez.me. Cmd- or Ctrl-click to visit it.`)},v=_.map((t,n)=>{let r=(0,E.jsx)(a,{title:t.title,description:t.description,image:t.image,imageAlt:``,tags:e.tags?[...t.tags]:[],href:e.linked?t.url:void 0,layout:o?void 0:e.layout,tone:o?void 0:e.tone,skin:e.skin,imageWidth:x.width,imageHeight:x.height,imageLoading:n===0?`eager`:`lazy`});return o?(0,E.jsx)(k,{css:F,className:`project-card-frame`,children:r},t.url):(0,E.jsx)(`div`,{className:`project-card-fill`,children:r},t.url)});return(0,E.jsx)(g,{page:`project-card`,name:`Project card`,code:{setup:S(e.skin),usage:w(e),usageFile:`SelectedProjects.tsx`,sources:P},controls:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Skin`,value:e.skin,options:I,onChange:e=>i(`skin`)(e)}),o?(0,E.jsx)(`p`,{className:`project-card-note`,children:`Layout and tone belong to the system skin. The portfolio skin draws the live card exactly, so it has neither.`}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Layout`,value:e.layout,options:L,onChange:e=>i(`layout`)(e)}),(0,E.jsx)(d,{label:`Tone`,value:e.tone,options:R,onChange:e=>i(`tone`)(e)})]}),(0,E.jsx)(m,{label:`Tags`,checked:e.tags,onChange:i(`tags`)}),(0,E.jsx)(m,{label:`Link to the case study`,checked:e.linked,onChange:i(`linked`)})]}),details:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{tokens:u.tokens??[]}),(0,E.jsx)(`div`,{className:`project-card-skins`,children:c.map(t=>(0,E.jsxs)(`section`,{className:`project-card-skin`,"data-current":t.id===e.skin||void 0,"aria-labelledby":`project-card-skin-${t.id}`,children:[(0,E.jsx)(`h3`,{id:`project-card-skin-${t.id}`,className:`project-card-skin__title`,children:t.title}),(0,E.jsx)(`code`,{className:`project-card-skin__markup`,children:t.markup}),(0,E.jsx)(`ul`,{className:`project-card-skin__points`,children:t.points.map(e=>(0,E.jsx)(`li`,{children:e},e))})]},t.id))}),(0,E.jsx)(f,{props:u.props??[]}),(0,E.jsx)(h,{keys:u.keys??[]})]}),children:()=>(0,E.jsxs)(`div`,{className:`project-card-scene`,onClick:l,children:[(0,E.jsx)(`div`,{className:`project-card-stage`,"data-panel":s||void 0,children:(0,E.jsx)(A,{label:`Selected projects`,layout:o?`stacked`:e.layout,motionKey:`${e.skin}-${e.layout}-${e.tone}`,focusable:!e.linked,children:v})}),(0,E.jsxs)(`p`,{className:`project-card-status`,role:`status`,children:[n&&(0,E.jsx)(`span`,{className:`project-card-chip`,children:`Simulated`}),n||(o?z:``)]})]})})}export{B as default};