/* Home intro content. Chapters are oldest first. Each one claims a tile of
   assets/img/hero-graphic.svg ([col, row] on its 200-unit grid) and plays three
   beats: a badge with the logo (who), a UI scene (what), then it folds into its
   tile while the takeaway names what that tile stands for. Tiles no chapter
   claims bloom in the finale. To add an experience: append a chapter, pick a
   free tile and a scene (hello, token, toast, toggle, payments); timing, the
   camera path and the HUD reflow. Every figure below comes from the resume.
   logo.ratio is the logo's width / height. */
window.ZijiezIntro = {
  bpm: 120,
  chapters: [
    {
      id: 'cca', year: '2019', cell: [1, 0], scene: 'hello', beats: 4,
      logo: { src: 'assets/img/intro/cca.png', ratio: 1000 / 293, w: 250 },
      caption: { en: 'California College of the Arts — BFA, Human-Computer Interaction', zh: '加州艺术学院 — 人机交互 学士' },
      takeaway: { en: 'Human-centered · HCI', zh: '以人为本 · 人机交互' },
    },
    {
      id: 'jci', year: '2022', cell: [1, 1], scene: 'token', beats: 5,
      logo: { src: 'assets/img/intro/jci.svg', ratio: 250 / 126, w: 190 },
      caption: { en: 'Johnson Controls — Element Design System, 0 → 1', zh: '江森自控 — Element 设计系统，从 0 到 1' },
      takeaway: { en: 'Design systems', zh: '设计系统' },
      copy: {
        tag: { en: 'Component · Card', zh: '组件 · 卡片' },
        title: 'Element DS',
        sub: { en: '27 components · 6 patterns', zh: '27 个组件 · 6 种模式' },
        tokenFrom: ['radius-md', 12], tokenTo: ['radius-lg', 16],
        stat: '$800K+', statSub: { en: 'saved · 35+ teams', zh: '节省 · 35+ 团队采用' },
      },
    },
    {
      id: 'cornell', year: '2024', cell: [2, 0], scene: 'toast', beats: 3,
      logo: { src: 'assets/img/intro/cornell.svg', ratio: 539.1 / 137.2, w: 270 },
      caption: { en: 'Cornell University — MS, Design & Technology', zh: '康奈尔大学 — 设计与技术 硕士' },
      takeaway: { en: 'AI × Design', zh: 'AI × 设计' },
      copy: {
        mark: 'assets/img/intro/neurips.svg',
        title: { en: 'Paper accepted', zh: '论文被接收' },
        sub: { en: 'NeurIPS 2025 · Cornell', zh: 'NeurIPS 2025 · 康奈尔' },
      },
    },
    {
      id: 'tiktok-intern', year: '2025', cell: [2, 1], scene: 'toggle', beats: 3,
      logo: { src: 'assets/img/intro/tiktok-wordmark.png', ratio: 1209 / 354, w: 220 },
      caption: { en: 'TikTok Global Payment — Product Design Intern', zh: 'TikTok 国际支付 — 产品设计实习生' },
      takeaway: { en: 'UX research & audit', zh: '用户研究与体验走查' },
      copy: {
        brand: 'assets/img/intro/tiktok-wordmark.png', brandW: 72,
        context: { en: 'Checkout · Insurance', zh: '结账页 · 保险' },
        title: { en: 'Shipping protection', zh: '运费保障' },
        sub: { en: 'Separate from seller warranty', zh: '与商家保修明确区分' },
        price: '$0.99',
        foot: { en: 'UX audit', zh: '体验走查' },
        footValue: { en: '5 markets · 800+ screens', zh: '5 个市场 · 800+ 页面' },
      },
    },
    {
      // Same team as the internship: the toggle's knob carries straight over.
      id: 'tiktok', year: '2026', cell: [0, 1], scene: 'payments', beats: 4,
      caption: { en: 'TikTok Global Payment — Product Designer', zh: 'TikTok 国际支付 — 产品设计师' },
      takeaway: { en: 'Ships to code · AI-native', zh: 'AI 原生 · 设计直达代码' },
      copy: {
        brand: 'assets/img/intro/tiktok-wordmark-white.png', brandW: 84,
        tabs: [{ en: 'Checkout', zh: '聚合收银' }, { en: 'Refund', zh: '退款' }, { en: 'Withdraw', zh: '提现' }],
        ringLabel: { en: 'Payment conversion', zh: '支付转化率' },
        ringFrom: 70, ringTo: 80,
        ringSub: { en: 'Agentic Commerce · US', zh: 'Agentic Commerce · 美国' },
        file: 'Hero.tsx',
        code: ['<Hero', '  name="Zijie Zhou"', '  role="Product Designer" />'],
        chip: { en: 'AI-native workflow · dev cycle', zh: 'AI 原生工作流 · 开发周期' },
        chipValue: '−93%',
      },
    },
  ],
  // Skill tiles that bloom in the finale, in order (unclaimed tiles only).
  finale: [[3, 0], [3, 1], [2, 2], [1, 2]],
  // Peripheral text around the stage. Off for now; set any of these to true to bring it back.
  //   caption: year + chapter line (top-left) · timeline: the 2019 → Now ruler (bottom)
  //   skipText: "Click anywhere to skip" (the Esc hint and the sound toggle always show)
  //   collect: takeaways fly into a list in the corner; when off they show briefly beside their tile
  hud: { caption: false, timeline: false, skipText: false, collect: false },
  now: { en: 'Now — zijiez.me', zh: '现在 — zijiez.me' },
  ui: {
    skip: { en: 'Click anywhere to skip', zh: '点击任意处快进' },
    skipTouch: { en: 'Tap to skip', zh: '轻点快进' },
    esc: { en: 'Esc to enter', zh: 'Esc 直接进入' },
    sound: { en: 'Sound', zh: '声音' },
  },
};
