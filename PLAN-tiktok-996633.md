# TikTok 996633 内容替换与密码锁优化计划

> 状态：隐藏正文内容、组件复用、样式与间距已对齐 Framer 原版并在本地验证；**12 个本地提交尚未推送到 origin/main**；正式访问密码仍是占位值，未确认前不要推送。

## 0. 2026-09-07/08 这两轮做的事（Handoff）

**背景**：`all-projects/tiktok-shop/index.html` 解锁后的完整正文（`#tiktok-full-content`）之前是照抄 Framer 视觉自己写的一套 `tt-*` 专属类（`tt-overview`、`tt-pair`、`tt-card`、`tt-duo`、`tt-bluecard`、`tt-impacts`…），和 amazon/element 两个 case 页的组件体系是两套东西，样式和间距也有不少和 Framer 原版对不上的地方。用户明确要求：**只改隐藏正文这部分，别的 page 不要动**；并且要求"能复用别的页面的东西就直接复用，别自己发明"。

**做了两件事，共 5 个提交（`c2c84bc` 到 `f1f8ad2`，均只改了 `all-projects/tiktok-shop/index.html` 和 `assets/css/tiktok-gate.css`，没碰 amazon/element 页面或它们用到的 `site.css` 通用规则）**：

### 第一件事：组件复用重构（commit `c2c84bc`、`fe56e60`）

把隐藏正文里的自造类换成 amazon/element 页已经在用的同一套组件，做法是照抄这两个页面的模式，不是发明新东西：

| 原来的自造类 | 换成 |
| --- | --- |
| `.tt-overview` + `__media`/`__body` | `.overview-grid` + `.split__body`（跟 Work Overview 结构一致） |
| `.tt-pair` + `.tt-card` + `.tt-arrow` | `.two-col` + `.block` + 新增极小的 `.tt-pair-arrow`（箭头，Framer 里这里没有描边/底色） |
| `.tt-duo` + `.tt-bluecard` | `.two-groups` + `.col-group` + `.block`（蓝底通过 `#tiktok-full-content .col-group .block` 补色） |
| `.tt-impacts` | `.plain-stack` + `.plain-block` |
| `.tt-kicker` | `.tt-card-pill`（纯居中粗体文字，没有边框，之前误抄了 amazon 的描边药丸样式） |
| `.pullquote` 自定义装饰 | 删除，改用 `site.css` 里通用的 `.pullquote`（后来发现 tiktok 这里比其它地方留白更大，见下） |
| `.case-continue__mouse` 自定义动画 | 复用 element 页同款 `.mouse-cue` + `mouse-wheel` 关键帧 |
| `.tt-figure` | 删除，普通 `.figure` 已经够用 |
| `.wrap.tt-inset` 1152/1200 宽度 hack | 删除，统一用普通 `.wrap`（和其它 case 页一致） |

只保留了三个确实没有现成对应物的自定义类：`.tt-band`（通栏灰底/白底切换）、`.tt-sectionbar`（Project Timeline 的"标题+右侧 pill"表头）、Design Proposals 轮播（`.tt-carousel` 一整套，其它 case 页都没有轮播这种组件）。

验证方法：写 Playwright 脚本同源挂载 Framer 原版到 `/__orig/`（用的是 `tools/serve_with_original.py`），对隐藏正文和原版做逐元素的 computed style diff（font-size / font-weight / color），揪出这些真实 bug 并修掉：

- 灰卡标题颜色反了（应为 `ink-2` 浅灰，写成了 `ink` 深黑）
- 卡片顶部标签样式抄错了（原版没有描边药丸，就是纯居中粗体 18px）
- 蓝卡标题字号错了（应 24px，写成 20px）
- 轮播 Pros/Cons 标签字重错了（应 700，写成 500）
- Project Timeline 步骤序号字号错了（应 24px，继承了站点默认 16px）
- 对照卡箭头太小（应 60px，写成 40px）
- Context 正文段落颜色继承错了（应该是深色 `ink`，被卡片场景的浅灰规则带偏成 `ink-2`）
- 两处 `*Note` 提示文字样式不一样（Framer 原版本来就不统一，加了 `case-note--muted` 区分）

### 第二件事：间距系统性审计与修复（commit `257e292`、`0142afc`、`f1f8ad2`）

用户反馈"间距不对"后，没有再靠肉眼调，而是写脚本在 Framer 原版和隐藏正文之间选 26 个关键节点（每个 section 的过渡、标题前后、卡片到图片、引言前后……），用"最小匹配元素 + 找最近的合理配对"的方式量出真实像素间距，逐一比对修复。踩过的坑：

- **标题到标题的间距不可靠**：如果两个标题之间夹着一段 `<ul><li>` 内容，量出来的"间距"其实包含了列表文字的高度，不是真的空白。后来改成直接量卡片/图片的 **盒子边缘**（`getBoundingClientRect`），才拿到干净的数字。
- **`.tt-band` 曾经上下 padding 都是 112px，紧接着的下一个 section 自己又加了 96px 顶部 padding**，两个叠加导致 Opportunity/Goal 卡片到"Design Proposals"标题之间凭空多出 270px 空白（原版只有 80px）。改成 `.tt-band` 只留顶部 padding，底部交给下一个 section 自己的顶部 padding，不再双重叠加。
- 进入 `.tt-band` 的顶部间距反而不够（原版比当时的实现多出 ~100px），加大了 `.tt-band` 自己的顶部 padding；但第二个 `.tt-band` 前面已经有"滚动继续"提示（`.case-continue`）自带的间距，同样加大顶部 padding 会导致这里间距过大，所以另外加了 `:has(.case-continue) + section.tt-band` 的例外规则，只在紧跟 `case-continue` 时用较小的顶部 padding。
- **"Problem"/"Impact" 这两个小节标题的顶部留白不够**（比原版少 77px）——它们是分段的起点，需要比普通 h2 更大的顶部间距，加了 `case-subhead` 修饰类，用在 4 处（P1 和 P2 各一对 Problem/Impact）。
- **引言（pullquote）上下完全没有额外留白**，只靠 32px 的通用网格间距，比原版分别少 100px（上）和 57px（下），补了 `margin-block`。
- **"Context" 紧跟在 case-title 后面时留白反而太多**（比原版多 41px），是因为叠加了 section 的 32px 网格间距 + Context 标题自己的 24px `margin-bottom`；加了 `.case-head + h2 { margin-top: -41px }` 抵消。

修完之后重新跑全部 26 个节点，真实存在的间距差异全部归零或只差 1-3px；还剩下几个"看起来差很多"的节点，逐个用直接量盒子边缘的方式复核后，确认是文字锚点跨过了一张很高的图片（比如 500-1000px 高的长图）导致测量失真，实际盒子间距本来就是标准的 32px 网格间距，不是 bug。

**结论**：隐藏正文的结构、样式、间距目前应该已经和 Framer 原版对得很齐了。如果之后还要继续挑，建议还是用同一套"挂载原版到 `/__orig/` + Playwright 量盒子边缘"的方法，比纯肉眼对着截图猜快得多、也准得多，脚本本身在这个会话里没有保留（写在 `/tmp` 下，会话结束会清掉），下次要用需要重新写。

## 1. 已核对的现状

### 996633 是否已经还原

已经有本地 Framer 参考；当前站点已在本地把完整草稿迁入原 TikTok URL，并加上访问门槛：

- Framer 参考：`../framer-reference/all-projects/tiktok-shop996633/index.html`
- 当前公开页面（本地第一版）：`all-projects/tiktok-shop/index.html`
- 本地完整草稿：`private/tiktok-shop-full/index.html`

三者的关系目前是：

| 页面 | 当前内容 | 结论 |
| --- | --- | --- |
| Framer 996633 | 完整长案例，包含完整研究、问题、方案和影响 | 作为视觉与内容参考源 |
| 公开 TikTok 页 | 封面、Context、Timeline、4 个工作成果、推荐语 | 目前仍是摘要页 |
| `private/tiktok-shop-full` | 已有大部分完整案例结构与本地图片 | 可作为迁移底稿，但要继续对照 Framer |

已确认的差异：

- Framer 参考包含约 22 张图片、1 段视频、9 个主要 section；公开页只有摘要结构。
- 完整内容包含两个 P0 问题：
  - Pre-purchase：区分付费 Insurance 与免费 Seller Warranty。
  - Post-purchase：区分 Protection Policy 与 Insurance Claim。
- 完整内容还包含 Context、Problem、Impact、HMW、Opportunity、Goal、Design Proposals、Potential Solution Impacts 等分析链路。
- 本地 `private/tiktok-shop-full` 已经覆盖主要完整内容；本地第一版已迁入主要 section，并将新增媒体复制为 `tiktok-996633-*` 命名，避免覆盖既有公共资产。图片比例、文字、段落顺序和 Framer 视觉仍需要逐项校验。

## 2. 推荐产品方案

### 目标

保留当前 TikTok 项目入口和封面识别，把用户点击后的内容升级为 996633 完整案例，同时让访问门槛看起来像作品集的一部分，而不是突兀的后台登录页。

### 推荐路径

1. 保留 `all-projects/tiktok-shop/` 作为唯一对外入口，不新增一个容易被猜到的公开完整路径。
2. 未解锁时显示：TikTok 封面、项目标题、角色/时间/团队信息、简短 NDA 说明、密码输入框。
3. 解锁成功后，在同一路径展示完整案例，避免用户在跳转后丢失上下文。
4. 完整案例沿用当前站点的长页面视觉语言，但恢复 996633 的内容层级和图片节奏：
   - Summary / Work Overview
   - Context
   - Project Timeline
   - P0 Problem 1：Pre-purchase
   - Design Proposals 与 Option A/B/C
   - P0 Problem 2：Post-purchase
   - Design Rationale & Strategy
   - Potential Solution Impacts
5. 首页和 All Projects 仍然只展示项目卡片，不泄露完整案例内部标题、指标和方案细节。

## 3. 密码锁方案与安全边界

### 第一阶段：适配当前静态站

- 使用 `sessionStorage` 保存当前浏览会话的解锁状态，刷新页面不需要反复输入，但关闭浏览器后自动失效。
- 密码校验逻辑不保存明文密码，代码中只保留占位配置或不可逆校验值。
- 未解锁状态不渲染完整案例 DOM，也不加载完整案例图片和视频，减少误展示与首屏负担。
- 错误提示保持统一，不暴露密码长度、匹配位置或尝试次数。
- 页面加入 `noindex,nofollow`，并检查 canonical、Open Graph 和站内链接，避免完整内容被搜索引擎收录。
- 解锁页面支持回车提交、焦点管理、键盘操作和移动端输入，不改变现有导航和 footer 体验。

### 必须明确的安全限制

GitHub Pages 是静态公开托管。只要完整版 HTML、图片或视频随站点部署，熟悉网页源码的人仍然可能绕过前端密码锁拿到资源。因此这个方案是“作品集访问门槛”，不是 NDA 级别的真正保密。

如果内容需要真正限制为指定面试官或同事可见，第二阶段应迁移到带服务端鉴权的私有部署，例如：

- 私有仓库 + 带访问控制的部署平台；或
- 认证中间层 / 受保护对象存储；或
- 一次性 token / 邀请链接，并在服务端验证。

不把真实密码、token、内部链接或私有原图提交进公开 Git 历史。

## 4. 实施顺序

### Phase 0：内容与资产审计

- [x] 以 Framer 996633 为结构基准，逐段对照 `private/tiktok-shop-full`。
- [x] 建立 section、标题、正文、图片、视频的初版映射。
- [x] 标记仍需确认的文案、数字、内部链接和可能不适合公开展示的图片。
- [ ] 确认最终密码及其分享范围；未确认前只使用占位配置，不写入正式版本。

### Phase 1：内容迁移

- [x] 用完整草稿替换当前 TikTok 摘要内容，同时保留现有 URL、站点导航、footer 和 SEO 基础结构。
- [x] 复用已有公共封面/视频/时间线资产，并补齐 996633 参考中的新增图片映射。
- [x] 恢复完整的两条问题分析链路和方案比较，不再压缩成“工作成果”四张卡。
- [x] 对横向长图保留可滚动容器，并保留移动端横向查看提示。
- [x] 未解锁入口不保留原摘要页中的内部文档链接。

### Phase 2：访问门槛

- [x] 在现有 TikTok 入口加入轻量密码锁 UI。
- [x] 未解锁时不显示完整案例，并将新增图片改为解锁后才加载。
- [x] 正确密码进入完整内容；错误密码保持页面布局稳定并给出可访问提示。
- [x] 处理直接访问、刷新和当前浏览会话的解锁状态。
- [x] 公开入口不保留可直接点击的内部文档地址。

### Phase 3：动效与响应式

- [x] 完整案例沿用当前已经推送的动效基础：标题有节奏、图片轻量 reveal、卡片不过度 3D 化。
- [ ] 不恢复已明确移除的首页右上角图形错峰展开、首页文字/装饰图形不同速退场、重卡片倾斜和重图片遮罩。
- [ ] 完整案例中的长图、数据卡和方案对比使用轻微进入动效，重点突出叙事层级，而不是让每个模块都抢注意力。
- [ ] 检查 `prefers-reduced-motion`，减少动效用户仍可完整阅读和解锁。
- [ ] 在 390、834、1280、1440 宽度检查长图、表格、导航、密码框和 footer。

### Phase 4：验收与发布

- [x] 静态验证未解锁页面：完整正文隐藏，新增媒体不加载。
- [x] 正确密码解锁验证过（提交后 `#tiktok-full-content` 正常显示、图片正常加载、轮播左右切换正常）；**错误密码、回车提交、刷新后 session 保持、清除 session 这几个分支这两轮没有重新验证**，早前阶段做过一次，建议正式推送前再过一遍。
- [x] 对照 Framer 逐 section、逐标题、逐间距做了系统性 diff（见上面 0 节），样式和间距目前对得很齐。
- [x] 检查过无横向溢出、无控制台报错、图片全部正常加载（0 张 broken image）；没有专门跑全站死链检查。
- [ ] 对公开仓库做隐私扫描：不得出现 `private/`、真实密码、token、内部文档 URL 或未授权原图。
- [ ] 先给你看本地预览；确认后再提交并推送——**当前 12 个提交还在本地，没有推到 origin/main**。
- [ ] 内容替换获得确认后，再单独创建版本标签，例如 `v1.1-tiktok-996633-locked`；不移动现有 `v1.0`。

## 5. 最终验收标准

### 内容

- [x] 公开入口仍是原来的 TikTok 项目卡片和 URL。
- [x] 解锁后内容与 996633 Framer 参考在结构上对应，且不再是摘要页；组件也换成了跟 amazon/element 一致的复用体系。
- [x] 关键信息链路完整：研究 → UX 审计 → 问题 → 数据影响 → HMW → 机会 → 目标 → 方案 → 预期影响。

### 体验

- [ ] 密码锁不会破坏作品集的视觉表达，用户知道为什么需要密码以及如何继续。
- [ ] 首屏、长图和方案卡的动效服务于叙事，不制造新的等待和干扰。
- [ ] 桌面端和移动端都能正常阅读、横向查看长图并完成解锁。**这两轮的验证都在 1440px 桌面视口下做的，没有回归测过移动端断点**（`tt-band`/`case-subhead`/pullquote 这些新加的间距规则理论上没有响应式副作用，但建议推送前用手机宽度实际点一遍）。

### 隐私

- [ ] 轻量密码锁只被描述为访问门槛，不对外宣称为真正安全保护。
- [ ] 真正需要保密的内容最终放到带服务端鉴权的私有部署中。

## 待你确认的两个决策

1. 访问密码：正式密码是什么，是否只给面试官/特定同事使用？
2. 保密等级：接受 GitHub Pages 的轻量密码锁，还是需要把完整版迁移到真正受保护的私有托管？
