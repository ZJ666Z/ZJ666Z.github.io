import{Ht as e}from"./route-BgL1hPyq.js";var t=`{
  "name": "@zijie/ui",
  "version": "0.2.0",
  "private": true,
  "type": "module",
  "exports": {
    ".": "./src/index.tsx",
    "./catalog": "./src/catalog.ts",
    "./motion": "./src/motion/index.ts",
    "./site": "./src/site.ts",
    "./site.css": "./src/site.css",
    "./styles.css": "./src/styles.css",
    "./portfolio.css": "./src/portfolio.css",
    "./tokens.css": "./src/tokens.css",
    "./tokens": "./src/tokens.ts",
    "./tokens/registry": "./src/tokens.registry.ts",
    "./source/*": "./src/*"
  },
  "peerDependencies": { "react": "19.3.0", "react-dom": "19.3.0" }
}
`,n=Object.freeze({Button:{title:`Button`,page:`button`,glyph:`cursor-click`},Input:{title:`Input`,page:`input`,glyph:`textbox`},Switch:{title:`Switch`,page:`switch`,glyph:`toggle-left`},Segmented:{title:`Segmented`,page:`segmented`,glyph:`columns`},Card:{title:`Project card`,page:`project-card`,glyph:`image-square`},Loader:{title:`Loaders`,page:`loaders`,glyph:`circle-notch`},Presence:{title:`Presence`,page:`presence`,glyph:`waveform`},Toast:{title:`Toast`,page:`toast`,glyph:`bell`},Dialog:{title:`Dialog`,page:`dialog`,glyph:`app-window`},Tooltip:{title:`Tooltip`,page:null,glyph:`chat-circle`},Icon:{title:`Icon`,page:`icons`,glyph:`shapes`},AnimatedNumber:{title:`Animated number`,page:`button`,glyph:`coins`}}),r=e=>n[e]?.glyph??`squares-four`;Object.keys(n).length;var i=e.length,a=Object.freeze({tokens:`tokens`,families:`component families`,exports:`component exports`,pages:`docs pages`}),o=e=>a[e].replace(/^./,e=>e.toUpperCase());export{r as a,n as i,i as n,t as o,o as r,a as t};