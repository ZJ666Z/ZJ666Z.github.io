/* Home intro content. Chapters are oldest first; each one claims a tile of
   assets/img/hero-graphic.svg ([col, row] on its 200-unit grid) and plays one
   scene template before folding into that tile. Tiles no chapter claims bloom in
   the finale. To add an experience: append a chapter, pick a free tile and a
   scene (hello, token, toast, toggle, payments); timing and the HUD reflow.
   Every figure below comes from the resume. */
window.ZijiezIntro = {
  bpm: 120,
  chapters: [
    {
      id: 'cca', year: '2019', cell: [1, 0], scene: 'hello', beats: 4,
      caption: { en: 'California College of the Arts — BFA, Human-Computer Interaction', zh: '加州艺术学院 — 人机交互 学士' },
    },
    {
      id: 'jci', year: '2022', cell: [1, 1], scene: 'token', beats: 4,
      caption: { en: 'Johnson Controls — Element Design System, 0 → 1', zh: '江森自控 — Element 设计系统，从 0 到 1' },
      copy: {
        tag: { en: 'Component · Card', zh: '组件 · 卡片' },
        title: 'Element DS',
        sub: { en: '27 components · 6 patterns', zh: '27 个组件 · 6 种模式' },
        tokenFrom: ['radius-md', 12], tokenTo: ['radius-lg', 16],
        stat: '$800K+', statSub: { en: 'saved · 35+ teams', zh: '节省 · 35+ 团队采用' },
      },
    },
    {
      id: 'cornell', year: '2024', cell: [2, 0], scene: 'toast', beats: 2,
      caption: { en: 'Cornell University — MS, Design & Technology', zh: '康奈尔大学 — 设计与技术 硕士' },
      copy: {
        first: [{ en: 'Cornell University', zh: '康奈尔大学' }, { en: 'MS · Design & Technology', zh: '设计与技术 硕士' }],
        second: [{ en: 'Paper accepted', zh: '论文被接收' }, 'NeurIPS 2025'],
      },
    },
    {
      id: 'tiktok-intern', year: '2025', cell: [2, 1], scene: 'toggle', beats: 2,
      caption: { en: 'TikTok Global Payment — Product Design Intern', zh: 'TikTok 国际支付 — 产品设计实习生' },
      copy: {
        title: { en: 'Shipping protection', zh: '运费保障' },
        sub: { en: 'Separate from seller warranty', zh: '与商家保修明确区分' },
        price: '$0.99',
        foot: { en: 'UX audit', zh: '体验走查' },
        footValue: { en: '5 markets · 800+ screens', zh: '5 个市场 · 800+ 页面' },
      },
    },
    {
      id: 'tiktok', year: '2026', cell: [0, 1], scene: 'payments', beats: 4,
      caption: { en: 'TikTok Global Payment — Product Designer', zh: 'TikTok 国际支付 — 产品设计师' },
      copy: {
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
  now: { en: 'Now — zijiez.me', zh: '现在 — zijiez.me' },
  ui: {
    skip: { en: 'Click anywhere to skip', zh: '点击任意处快进' },
    skipTouch: { en: 'Tap to skip', zh: '轻点快进' },
    esc: { en: 'Esc to enter', zh: 'Esc 直接进入' },
    sound: { en: 'Sound', zh: '声音' },
  },
};
