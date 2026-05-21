type Screen = {
  id: string
  label: string
  title: string
  description: string
  tags: string[]
}

type Variant = {
  slug: 'market-reform-photoquote' | 'market-inbound-directbook' | 'market-us-home-missedcall'
  eyebrow: string
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
  accent: string
  bg: string
  text: string
  visualTitle: string
  visualMeta: string[]
  buyerProof: string[]
  screens: Screen[]
  pilot: {
    title: string
    price: string
    terms: string
  }
}

const variants: Record<Variant['slug'], Variant> = {
  'market-reform-photoquote': {
    slug: 'market-reform-photoquote',
    eyebrow: 'OpenHealth 導入イメージ',
    title: '写真・予算・希望時期がそろう外構/リフォーム初回相談',
    subtitle:
      '電話やざっくりフォームだけでは分かりにくい現場状況を、生活者がスマホで写真つき相談として送れる導線に変えます。',
    primaryCta: '5画面を見る',
    secondaryCta: 'パイロット相談',
    accent: 'emerald',
    bg: 'from-[#13251d] via-[#1e3b31] to-[#f6f3ea]',
    text: 'text-emerald-950',
    visualTitle: '現調前の情報不足を減らす相談導線',
    visualMeta: ['写真6枚', '予算感', '現調希望', '返信メモ'],
    buyerProof: ['現調前に写真・寸法・希望時期を確認', '優先度と返信メモを事業者側で確認', '月次で相談数と電話クリックを見える化'],
    screens: [
      {
        id: 'entry',
        label: 'Screen 1',
        title: '生活者が写真つきで相談',
        description: '門まわり、庭、室内補修などの写真、住所エリア、希望時期、予算感をスマホでまとめて送れます。',
        tags: ['写真追加', '住所エリア', '予算感'],
      },
      {
        id: 'before-after',
        label: 'Screen 2',
        title: '電話だけの聞き返しを減らす',
        description: '電話では伝わりにくい寸法・状態・時期を、現調前にそろえて営業側の判断材料に変えます。',
        tags: ['電話依存', '現調前整理', '離脱防止'],
      },
      {
        id: 'console',
        label: 'Screen 3',
        title: '事業者側の相談ボード',
        description: '写真、工事種別、希望時期、返信方法、見込み度を一覧で確認できます。',
        tags: ['相談一覧', '優先度', '返信先'],
      },
      {
        id: 'memo',
        label: 'Screen 4',
        title: '返信メモと確認事項を作る',
        description: '現地調査前に聞くべきこと、概算に必要な不足情報、次の返信文面を整理します。',
        tags: ['不足情報', '返信メモ', '現調準備'],
      },
      {
        id: 'pilot',
        label: 'Screen 5',
        title: '低コストで2週間だけ試す',
        description: '既存サイトやGoogleマップ導線を大きく変えず、まず1ページと通知だけで反応を見ます。',
        tags: ['2週間', '月次レポート', '直接相談'],
      },
    ],
    pilot: {
      title: '外構/リフォーム向け初回パイロット',
      price: '初期15万円から / 月3万円から',
      terms: '写真相談ページ、通知、返信メモ、月次レポートまでを小さく開始。',
    },
  },
  'market-inbound-directbook': {
    slug: 'market-inbound-directbook',
    eyebrow: 'OpenHealth 導入イメージ',
    title: '訪日客が迷わず送れる多言語予約前確認',
    subtitle:
      '言語、人数、日時、注意事項、アクセス不安を先に整理し、体験店舗や小規模宿泊の直接問い合わせへつなげます。',
    primaryCta: '5画面を見る',
    secondaryCta: 'パイロット相談',
    accent: 'rose',
    bg: 'from-[#2f1720] via-[#643646] to-[#f7efe7]',
    text: 'text-rose-950',
    visualTitle: 'OTA/DM前の不安を減らす予約前確認',
    visualMeta: ['JP/EN', '人数', '時間', '注意事項'],
    buyerProof: ['訪日客が言語と条件を先に整理', '店側は翻訳済みの予約前メモで確認', 'OTAだけに寄せず直接問い合わせを蓄積'],
    screens: [
      {
        id: 'entry',
        label: 'Screen 1',
        title: '旅行者が言語と希望日時を選ぶ',
        description: '人数、言語、希望時間、体験内容、連絡先を、スマホで迷わず入力できる入口です。',
        tags: ['language', 'date', 'party size'],
      },
      {
        id: 'before-after',
        label: 'Screen 2',
        title: '日本語ページ/DMの不安を減らす',
        description: 'キャンセル、支払い、集合場所、アレルギーなど、予約前に詰まりやすい確認をまとめます。',
        tags: ['access', 'payment', 'notes'],
      },
      {
        id: 'console',
        label: 'Screen 3',
        title: '店舗側の予約前インボックス',
        description: '日本語で確認できる要約、返信先、予約確度、注意事項を一覧で見られます。',
        tags: ['translated summary', 'readiness', 'reply'],
      },
      {
        id: 'reply',
        label: 'Screen 4',
        title: '旅行者への確認返信を整える',
        description: '集合場所、持ち物、支払い、キャンセル条件を短く返すプレビューです。',
        tags: ['confirmation', 'FAQ', 'directions'],
      },
      {
        id: 'pilot',
        label: 'Screen 5',
        title: '直接問い合わせの反応を見る',
        description: 'まずは1店舗1導線で、外国語問い合わせが増えるかをOpenHealth上で検証します。',
        tags: ['direct inquiry', 'mini LP', 'report'],
      },
    ],
    pilot: {
      title: 'インバウンド店舗向け初回パイロット',
      price: '初期8万円から / 月2万円から',
      terms: '多言語予約前確認ページ、メール/LINE導線、問い合わせレポートを小さく開始。',
    },
  },
  'market-us-home-missedcall': {
    slug: 'market-us-home-missedcall',
    eyebrow: 'OpenHealth workflow preview',
    title: 'Missed calls become structured callback requests',
    subtitle:
      'For HVAC, plumbing, roofing, landscaping, and cleaning companies, homeowners can leave issue details, photos, urgency, and preferred callback time in one mobile flow.',
    primaryCta: 'View the 5 screens',
    secondaryCta: 'Pilot inquiry',
    accent: 'sky',
    bg: 'from-[#102033] via-[#17435f] to-[#eef6f8]',
    text: 'text-sky-950',
    visualTitle: 'Recover quote intent after missed calls',
    visualMeta: ['issue type', 'ZIP', 'urgency', 'callback window'],
    buyerProof: ['Capture structured leads after hours', 'Prioritize callbacks by urgency and location', 'Track recovered calls and quote-ready requests'],
    screens: [
      {
        id: 'entry',
        label: 'Screen 1',
        title: 'Homeowner requests a callback',
        description: 'The mobile flow captures issue type, urgency, ZIP, photos, and preferred callback window.',
        tags: ['callback', 'photos', 'ZIP'],
      },
      {
        id: 'before-after',
        label: 'Screen 2',
        title: 'Voicemail becomes a quote-ready request',
        description: 'Instead of a forgotten voicemail, the business receives a structured request with enough context to respond fast.',
        tags: ['missed call', 'after hours', 'quote intent'],
      },
      {
        id: 'console',
        label: 'Screen 3',
        title: 'Owner lead queue',
        description: 'Urgency, category, location, and next follow-up action are visible in a prioritized board.',
        tags: ['priority', 'route', 'next action'],
      },
      {
        id: 'followup',
        label: 'Screen 4',
        title: 'SMS/email follow-up template',
        description: 'A short reply confirms callback timing, missing info, and next appointment options.',
        tags: ['SMS', 'email', 'appointment'],
      },
      {
        id: 'pilot',
        label: 'Screen 5',
        title: 'Measure recovered lead value',
        description: 'The beta report shows captured requests, callback completion, and quote-ready opportunities.',
        tags: ['beta', 'report', 'recovered leads'],
      },
    ],
    pilot: {
      title: 'US home-services beta',
      price: 'Setup $500 to $1,500 / monthly $99 to $299',
      terms: 'Callback request page, owner queue preview, follow-up template, and weekly missed-call recovery report.',
    },
  },
}

export function MarketResponseImagePackDemo({ slug }: { slug: Variant['slug'] }) {
  const variant = variants[slug]
  const isEnglish = slug === 'market-us-home-missedcall'
  const projectIdBySlug: Record<Variant['slug'], string> = {
    'market-reform-photoquote': 'market_response_reform_photoquote_001',
    'market-inbound-directbook': 'market_response_inbound_directbook_001',
    'market-us-home-missedcall': 'market_response_us_home_missedcall_001',
  }
  const hallmarkBySlug: Record<Variant['slug'], { skeleton: string; genre: string }> = {
    'market-reform-photoquote': {
      skeleton: 'narrative-proof-stack-operator-command-center',
      genre: 'modern-minimal',
    },
    'market-inbound-directbook': {
      skeleton: 'travel-concierge-split-journey-owner-inbox',
      genre: 'editorial',
    },
    'market-us-home-missedcall': {
      skeleton: 'after-hours-recovery-console-homeowner-callback',
      genre: 'modern-minimal',
    },
  }
  const projectId = projectIdBySlug[variant.slug]
  const hallmark = hallmarkBySlug[variant.slug]
  const accentClass = {
    emerald: 'bg-emerald-500 text-emerald-950 border-emerald-200',
    rose: 'bg-rose-400 text-rose-950 border-rose-200',
    sky: 'bg-sky-400 text-sky-950 border-sky-200',
  }[variant.accent]

  return (
    <div
      className="min-h-screen bg-slate-950 text-white"
      data-rich-design-os="v1"
      data-composition-source={variant.slug}
      data-hero-asset="custom-css-visual-fallback-pending-chatgpt-images"
      data-motion-plan="css-scroll-reveal-ready-remotion-storyboard"
      data-remotion-storyboard={`artifacts/rich_design/${projectId}/remotion_storyboard.md`}
      data-hallmark-skeleton={hallmark.skeleton}
      data-hallmark-genre={hallmark.genre}
    >
      <main>
        <section className={`relative overflow-hidden bg-gradient-to-br ${variant.bg} px-4 py-7 text-white sm:py-10 lg:py-14`}>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,.08)_1px,_transparent_1px),linear-gradient(0deg,_rgba(255,255,255,.07)_1px,_transparent_1px)] bg-[length:42px_42px]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
            <div className="min-w-0 space-y-6">
              <p className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-black uppercase tracking-[.14em] text-white/85">
                {variant.eyebrow}
              </p>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  {variant.title}
                </h1>
                <p className="max-w-3xl text-base leading-8 text-white/82 sm:text-xl">{variant.subtitle}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#screens" className="rounded-full bg-white px-6 py-3 text-center font-black text-slate-950 shadow-xl shadow-slate-950/25">
                  {variant.primaryCta}
                </a>
                <a href="#pilot" className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center font-black text-white backdrop-blur">
                  {variant.secondaryCta}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.4rem] bg-white/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/20 bg-slate-950/75 p-4 shadow-2xl backdrop-blur-xl">
                <div className="grid gap-4 lg:grid-cols-[.88fr_1.12fr]">
                  <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5">
                    <p className="text-sm font-bold text-white/62">{isEnglish ? 'Visual promise' : '完成イメージ'}</p>
                    <h2 className="mt-3 text-3xl font-black leading-tight">{variant.visualTitle}</h2>
                    <div className="mt-5 grid gap-2">
                      {variant.visualMeta.map((item) => (
                        <span key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.6rem] bg-white p-4 text-slate-950">
                    <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <strong className="text-sm font-black">{isEnglish ? 'Operator inbox' : '事業者側通知'}</strong>
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${accentClass}`}>ready</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {variant.buyerProof.map((item, index) => (
                          <div key={item} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                            <span className="text-xs font-black text-slate-400">0{index + 1}</span>
                            <p className="mt-1 text-sm font-black leading-6">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="screens" className="bg-[#f8fafc] px-4 py-16 text-slate-950">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="grid gap-5 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
              <div>
                <p className={`text-sm font-black uppercase tracking-[.16em] ${variant.text}`}>
                  {isEnglish ? 'workflow preview pack' : '導入イメージ資料'}
                </p>
                <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
                  {isEnglish ? 'A ready-to-review workflow in 30 seconds.' : '30秒で伝わる5枚の導入イメージ'}
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {isEnglish
                  ? 'The OpenHealth URL and preview PDF show the finished workflow shape, including the customer entry point, operator queue, reply flow, and pilot setup path.'
                  : 'OpenHealthのURLとプレビューPDFで、生活者側の入口、事業者側の確認画面、返信導線、導入時の進め方まで確認できます。'}
              </p>
            </div>

            <div className="grid gap-5">
              {variant.screens.map((screen, index) => (
                <article
                  key={screen.id}
                  className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/5 lg:grid-cols-[.82fr_1.18fr]"
                  data-demo-feature={`workflow-preview-${screen.id}`}
                >
                  <div className="flex min-h-[260px] flex-col justify-between bg-slate-950 p-6 text-white sm:p-8">
                    <div>
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${accentClass}`}>{screen.label}</span>
                      <h3 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">{screen.title}</h3>
                    </div>
                    <p className="mt-8 max-w-xl text-base leading-7 text-white/75">{screen.description}</p>
                  </div>
                  <div className="relative min-h-[300px] bg-[radial-gradient(circle_at_20%_20%,rgba(15,23,42,.08),transparent_28%),linear-gradient(135deg,#ffffff,#eef2f7)] p-5 sm:p-8">
                    <div className="absolute right-5 top-5 text-8xl font-black text-slate-900/[.035]">0{index + 1}</div>
                    <div className="relative mx-auto max-w-2xl rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">
                      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[.16em] text-slate-400">OpenHealth</p>
                          <p className="mt-1 text-lg font-black">{screen.title}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${accentClass}`}>{isEnglish ? 'preview' : 'プレビュー'}</span>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {screen.tags.map((tag) => (
                          <div key={tag} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <span className="text-xs font-bold text-slate-500">{isEnglish ? 'field' : '項目'}</span>
                            <strong className="mt-1 block text-base font-black">{tag}</strong>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
                        <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                        <div className="mt-3 h-3 w-5/6 rounded-full bg-slate-200" />
                        <div className="mt-3 h-3 w-1/2 rounded-full bg-slate-200" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="bg-white px-4 py-16 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-950/5 lg:grid-cols-[1fr_.72fr] lg:p-10">
            <div>
              <p className={`text-sm font-black uppercase tracking-[.16em] ${variant.text}`}>pilot offer</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">{variant.pilot.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{variant.pilot.terms}</p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold text-white/60">{isEnglish ? 'Price anchor' : '価格アンカー'}</p>
              <strong className="mt-3 block text-3xl font-black leading-tight">{variant.pilot.price}</strong>
              <a
                href="mailto:info@openhealth.co.jp?subject=OpenHealth%20workflow%20preview%20pilot"
                className="mt-6 block rounded-full bg-white px-5 py-3 text-center font-black text-slate-950"
              >
                {isEnglish ? 'Ask about pilot setup' : 'パイロットについて相談する'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export function MarketReformPhotoQuoteDemo() {
  return <MarketResponseImagePackDemo slug="market-reform-photoquote" />
}

export function MarketInboundDirectBookDemo() {
  return <MarketResponseImagePackDemo slug="market-inbound-directbook" />
}

export function MarketUsHomeMissedCallDemo() {
  return <MarketResponseImagePackDemo slug="market-us-home-missedcall" />
}
