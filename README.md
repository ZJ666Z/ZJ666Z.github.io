# zijiez.me — portfolio

Zijie Zhou 的作品集网站。纯静态：手写 HTML + CSS + 一点 JS，**没有构建步骤、没有依赖、没有框架**。
改完提交就上线。

视觉按原 Framer 站 1:1 复刻（容器 1200/1152、标题 60/72 与 48/56、正文 18/28、卡片 #F5F4F6 圆角 24、深色页脚圆角 32）。

当前版本：**V0.5**（2026-09-04）— 主页、About 与公开案例已按 Framer 原站复刻到当前进度；完整版/未上线内容仍只保留在本地 `private/`。

## 本地预览

```bash
python3 -m http.server 4000
```

打开 <http://localhost:4000>。

## 目录结构

```
.
├── index.html                首页
├── about/                    About
├── all-projects/             案例列表
│   ├── tiktok-shop/                    TikTok Shop 保险（公开版）
│   ├── amazon-checkout-experience/     Amazon Checkout
│   └── element-design-system/          Element Design System
├── 404.html                  GitHub Pages 自动使用
├── private/                  未上线内容，已 gitignore，不会进仓库
├── assets/
│   ├── css/site.css          全站样式，设计令牌在文件顶部
│   ├── css/fonts.css         自托管字体声明
│   ├── fonts/                Montserrat + Inter（latin 子集）
│   ├── js/site.js            吸顶导航 + 滚动淡入
│   ├── img/                  图片，文件名即用途
│   └── video/                案例首屏背景视频
└── .nojekyll                 让 GitHub Pages 原样发布
```

## 改东西看哪里

| 想改什么 | 去哪 |
|---|---|
| 颜色、圆角、字号、容器宽度 | `assets/css/site.css` 顶部 `:root` |
| 导航、页脚 | 每个 HTML 各有一份（没有模板引擎，改了要同步所有页面） |
| 新增案例 | 复制 `all-projects/tiktok-shop/` 整个目录改内容，再去首页和 `all-projects/index.html` 加卡片 |
| 图片 / 视频 | 放进 `assets/img/`、`assets/video/`，用有意义的文件名 |

## 可复用的排版类

`.panel` 白卡 · `.block` 小白卡 · `.step` 编号步骤 · `.stats`/`.stat` 数字 ·
`.figure`（加 `.figure--scroll` 支持横向滚动长图）· `.grid-2`/`.grid-3` ·
`.pullquote` 大引言 · `.notice`（加 `--dark`）提示条 · `.pill` 胶囊标签 ·
`.tag` 小标签 · `.reveal` 滚动淡入 · `.case-hero` 视频首屏

## private/ 是什么

`private/tiktok-shop-full/` 是 TikTok Shop 保险项目的**完整真实版本**。项目尚未上线，
内容不可公开，因此整个 `private/` 目录写在 `.gitignore` 里，**不会被提交、不会部署**。
本地跑 server 时可以正常访问 <http://localhost:4000/private/tiktok-shop-full/>。

## 部署

推到 `main`，GitHub Pages 自动发布（Settings → Pages → Source: `main` / `/ (root)`）。

## 无障碍

每页有 skip link、语义标题层级、图片 alt；尊重 `prefers-reduced-motion`；
字体自托管，无第三方请求。
