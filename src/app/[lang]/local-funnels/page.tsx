import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrackedCtaLink from '@/components/TrackedCtaLink'
import { getDictionary } from '@/lib/dictionary'
import { type Locale } from '@/lib/i18n'

const offers = {
  ja: [
    {
      title: '写真付き見積もり導線パック',
      description: 'エアコン、外構、ハウスクリーニングなどで、電話前に写真・希望日・住所エリア・連絡先を整理して受け取る導線を作ります。',
      proof: '初期55,000円〜 / 月額11,000円〜',
    },
    {
      title: '個別デモHP・問い合わせシステム',
      description: '公開情報から弱い導線を診断し、候補企業ごとに実際に触れるデモLP、フォーム、通知プレビューを作ります。',
      proof: '1候補ずつ個別診断',
    },
    {
      title: 'インバウンド店舗向け多言語予約前確認',
      description: '観光客が言語、人数、希望時間、注意事項を整理してから既存予約やメールへ進めるミニ導線を作ります。',
      proof: 'JP / EN / ZH から開始',
    },
  ],
  en: [
    {
      title: 'Photo estimate funnel',
      description: 'For AC cleaning, exterior work, house cleaning, and repairs, visitors send photos, preferred dates, area, and contact details before a call.',
      proof: 'From JPY 55,000 setup / JPY 11,000 monthly',
    },
    {
      title: 'Custom demo site and inquiry system',
      description: 'We diagnose weak public inquiry routes and build a clickable demo LP, form, and operator notification preview for each prospect.',
      proof: 'One candidate at a time',
    },
    {
      title: 'Inbound multilingual booking pre-check',
      description: 'Tourists clarify language, party size, time, and notes before moving to the existing booking or email route.',
      proof: 'Start with JP / EN / ZH',
    },
  ],
}

const workflow = {
  ja: ['候補診断', '個別デモ作成', '視覚/機能レビュー', '1件ずつ送信', '返信と有料化を記録'],
  en: ['Diagnose candidates', 'Build a custom demo', 'Review visuals and function', 'Send one by one', 'Log replies and paid pilots'],
}

const channels = {
  ja: [
    ['Web写真フォーム', '緊急性が低く、写真で状況確認が必要な業種'],
    ['LINE', '既にLINEで写真受付や顧客対応をしている事業者'],
    ['電話', '緊急客や即時相談が多い業種'],
    ['メール/フォーム', '法人/施工/予約前確認の整理が必要な業種'],
    ['Instagram DM', '店舗・観光・美容などSNS更新が強い事業者'],
  ],
  en: [
    ['Web photo form', 'Services where photos clarify the job before a call'],
    ['LINE', 'Operators who already use LINE for customer support'],
    ['Phone', 'Urgent or same-day service categories'],
    ['Email/form', 'B2B, construction, or pre-booking clarification'],
    ['Instagram DM', 'Stores and tourism businesses with active social accounts'],
  ],
}

const lineUrl = 'https://line.me/R/ti/p/@447lunpz'

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params
  const dict = await getDictionary(lang as Locale)
  const title = lang === 'ja'
    ? '地域サービス向け問い合わせ導線'
    : 'Local Business Conversion Funnels'
  const description = dict.company.localAi.subtitle

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/local-funnels`,
      languages: {
        ja: '/ja/local-funnels',
        en: '/en/local-funnels',
      },
    },
    openGraph: {
      type: 'website',
      url: `https://www.openhealth.co.jp/${lang}/local-funnels`,
      title,
      description,
      siteName: dict.company.nameShort,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@openhealth',
    },
  }
}

export default async function LocalAiPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params
  const locale = lang as Locale
  const dict = await getDictionary(locale)
  const localAi = dict.company.localAi
  const isJa = locale === 'ja'
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isJa ? '地域サービス向け問い合わせ導線' : 'Local Business Conversion Funnels',
    provider: {
      '@type': 'Organization',
      name: dict.company.name,
      url: 'https://www.openhealth.co.jp/ja',
      email: dict.privacyPolicy.email,
      telephone: dict.company.phone,
      address: dict.company.address,
    },
    areaServed: isJa ? '日本' : 'Japan',
    serviceType: isJa ? '問い合わせ・見積もり・予約導線構築' : 'Inquiry, estimate, and booking funnel setup',
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-950 text-white">
      <Header dict={dict} lang={locale} />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <section className="relative overflow-hidden px-4 py-20 md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(14,116,144,0.35),_rgba(15,23,42,0)_42%),linear-gradient(90deg,_rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(0deg,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:100%_100%,48px_48px,48px_48px]" />
          <div className="relative mx-auto grid max-w-7xl min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="min-w-0 space-y-8">
              <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                {localAi.badge}
              </div>
              <div className="space-y-6">
                <h1 className="max-w-4xl break-all text-4xl font-black leading-tight tracking-tight md:break-normal md:text-6xl">
                  {localAi.title}
                </h1>
                <p className="max-w-3xl break-words text-lg leading-8 text-slate-200 md:text-xl">
                  {localAi.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <TrackedCtaLink href="mailto:info@openhealth.co.jp?subject=問い合わせ導線の相談" eventName="local_funnels_email_cta" className="rounded-full bg-white px-6 py-3 text-center font-bold text-slate-950 shadow-xl shadow-cyan-950/30 hover:-translate-y-0.5">
                  {localAi.primaryCta}
                </TrackedCtaLink>
                <TrackedCtaLink href="tel:08068271623" eventName="local_funnels_phone_cta" className="rounded-full border border-white/30 px-6 py-3 text-center font-bold text-white hover:bg-white/10">
                  {localAi.secondaryCta}
                </TrackedCtaLink>
                <TrackedCtaLink href={lineUrl} eventName="local_funnels_line_cta" className="rounded-full border border-cyan-200/50 bg-cyan-300/10 px-6 py-3 text-center font-bold text-cyan-50 hover:bg-cyan-300/20">
                  {localAi.lineCta}
                </TrackedCtaLink>
              </div>
              <p className="text-sm font-semibold text-cyan-100">{localAi.proofLabel}</p>
            </div>

            <div className="min-w-0 rounded-[2rem] border border-white/12 bg-white/10 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
              <div className="rounded-[1.4rem] bg-slate-900 p-5">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-400">OpenHealth inquiry desk</p>
                    <h2 className="text-2xl font-black">{isJa ? '問い合わせ導線の司令塔' : 'Conversion command center'}</h2>
                  </div>
                  <span className="w-fit rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">live demo ready</span>
                </div>
                <div className="grid gap-3">
                  {workflow[locale].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/7 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-amber-200/20 bg-amber-200/10 p-4 text-sm text-amber-50">
                  {localAi.lineReady}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demos" className="bg-white px-4 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-black md:text-5xl">{localAi.offersTitle}</h2>
              <p className="text-lg leading-8 text-slate-600">{localAi.offersSubtitle}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {offers[locale].map((offer) => (
                <article key={offer.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                  <h3 className="mb-4 text-2xl font-black">{offer.title}</h3>
                  <p className="mb-6 leading-7 text-slate-600">{offer.description}</p>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">{offer.proof}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-black">{localAi.workflowTitle}</h2>
              <p className="mt-4 leading-8 text-slate-600">{localAi.workflowSubtitle}</p>
              <div className="mt-8 space-y-3">
                {workflow[locale].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                    <span className="text-sm font-black text-blue-600">0{index + 1}</span>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
              <h2 className="text-3xl font-black">{localAi.channelsTitle}</h2>
              <p className="mt-4 leading-8 text-slate-300">{localAi.channelsSubtitle}</p>
              <div className="mt-8 space-y-3">
                {channels[locale].map(([name, detail]) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-white/7 p-4">
                    <strong className="block text-cyan-100">{name}</strong>
                    <span className="text-sm leading-6 text-slate-300">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white px-4 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-black md:text-5xl">{localAi.pricingTitle}</h2>
              <p className="text-lg leading-8 text-slate-600">{localAi.pricingSubtitle}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [isJa ? '初期費' : 'Setup', isJa ? '55,000円〜' : 'From JPY 55,000'],
                [isJa ? '月額' : 'Monthly', isJa ? '11,000円〜' : 'From JPY 11,000'],
                [isJa ? '検証単位' : 'Pilot', isJa ? '2週間 / 1業種' : '2 weeks / 1 category'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-slate-200 p-6">
                  <span className="text-sm font-bold text-slate-500">{label}</span>
                  <strong className="mt-3 block text-2xl font-black">{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-700 to-cyan-700 px-4 py-20 text-white">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl md:p-12">
            <h2 className="text-3xl font-black md:text-5xl">{localAi.contactTitle}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-cyan-50">{localAi.contactSubtitle}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackedCtaLink href="mailto:info@openhealth.co.jp?subject=問い合わせ導線の相談" eventName="local_funnels_email_cta_bottom" className="rounded-full bg-white px-6 py-3 font-bold text-blue-700">
                info@openhealth.co.jp
              </TrackedCtaLink>
              <TrackedCtaLink href="tel:08068271623" eventName="local_funnels_phone_cta_bottom" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white">
                {dict.company.phone}
              </TrackedCtaLink>
              <TrackedCtaLink href={lineUrl} eventName="local_funnels_line_cta_bottom" className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-bold text-white">
                {localAi.lineCta}
              </TrackedCtaLink>
            </div>
            <p className="mt-6 text-sm text-cyan-100">{dict.company.address}</p>
          </div>
        </section>
      </main>
      <Footer dict={dict} lang={locale} />
    </div>
  )
}
