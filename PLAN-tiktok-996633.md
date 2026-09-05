# TikTok 996633 内容上线与密码锁优化计划

## 目标

用 Framer 原版隐藏页 `tiktok-shop996633` 的完整内容替换当前公开的 TikTok Shop 案例页，并为该案例页加上访问密码，同时保证全站视觉/交互与 v1.0 统一。

## 当前状态

- 本地站点没有还原 996633 页面：`all-projects/` 下只有 `tiktok-shop`。
- Framer 原版有 `framer-reference/all-projects/tiktok-shop996633/index.html`，内容完整度明显高于当前 TikTok 页。
- 996633 原版页面结构约为：
  - Work Overview / Context / Project Timeline
  - 三阶段流程（Competitor Research / UX Audit / Problem Alignment）
  - P0 Problem 1：Pre-purchase，区分 insurance 与 warranty
  - P0 Problem 2：Post-purchase，区分 Protection Policy 与 Insurance Claim
  - 每段都包含 Context / Problem / Impact / HMW / Opportunity / Goal / Design Proposals / Potential Impacts
- 页面高度约 15834px，属于完整长案例，不是当前 TikTok 的摘要页。

## 约束与关键决策

1. **GitHub Pages 无法做到真正安全的内容保护**。凡是放在 public 仓库、静态托管的 HTML/图片，用户都能从源码拿到。
2. 当前站点目标是作品集展示，建议采用“UI 密码锁 + 内容不进搜索引擎”的轻量方案；如确实需要保密，应改到私有仓库/私有部署或授权访问。
3. 需要你确认最终密码；计划中先用变量 `TIKTOK_PASSWORD` 占位。

## Phase 1：996633 页面还原

- [ ] 新建本地页面目录 `all-projects/tiktok-shop996633/`，按 Framer 原版逐段重建。
- [ ] 对照原版检查所有 section：
  - Work Overview 首屏与 Context
  - 三阶段流程卡
  - P0 Problem 1 / Problem 2
  - Impact 两栏卡 + 箭头
  - HMW 引号与间距
  - Opportunity / Goal 蓝色等高卡
  - Design Proposals 与 A/B/C 方案对比
  - Potential Solution Impacts
- [ ] 图片、图注、横屏全景图位置与原版一致；先导出原图再压缩部署版本。
- [ ] 使用现有 `QA-CHECKLIST.md` 全项过一遍：
  - 卡片间距/圆角/背景
  - bullet 缩进
  - reveal 动画不卡隐藏
  - 390/834/1440 无横向溢出
- [ ] 页面标题/description/canonical 与当前 TikTok 项目保持一致。

## Phase 2：密码锁

### 推荐方案（静态站友好）

- [ ] TikTok 案例入口继续指向 `all-projects/tiktok-shop/`。
- [ ] 在该路径入口页只显示封面/简介 + 密码输入。
- [ ] 密码校验成功后：
  - `sessionStorage.setItem('tiktok_unlocked','1')`
  - 页面显示 996633 完整内容或跳转内容页。
- [ ] 正确密码使用 hash/非明文写在 `site.js` 中，至少避免肉眼直接看到明文。
- [ ] 页面 `<meta name="robots" content="noindex,nofollow">`。
- [ ] 失败提示统一，不做暴力尝试反馈。

### 可选加强

- [ ] 把完整内容独立成私有文件路由，不参与首页/项目列表爬虫。
- [ ] 如需要分享，使用带 token 的 URL 而非固定密码。
- [ ] 未来若要真正保密：私有仓库 + 私有静态托管/鉴权中间层。

## Phase 3：替换与回归

- [ ] 当前公开 TikTok 页面不再保留旧内容副本；旧完整内容迁移到 996633 结构。
- [ ] 首页和 All Projects 的 TikTok 卡片点击仍进入带锁页面。
- [ ] 全站导航 “TikTok” 相关路径无死链。
- [ ] 运行全站自动化检查：
  - bullet
  - body/document height 与原版差值
  - reveal 元素无卡 hidden
  - mobile nav capsule
  - 390/834/1440 overflow
- [ ] 验收后打 tag，例如 `v1.1-tiktok-locked`。

## 待确认

- 最终访问密码
- 未解锁时首页/All Projects 是否显示完整项目标题和封面
- 分享对象是否需要一次性链接，而不是固定密码
