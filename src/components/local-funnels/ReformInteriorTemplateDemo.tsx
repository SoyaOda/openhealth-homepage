'use client'

import { useMemo, useState } from 'react'
import TrackedCtaLink from '@/components/TrackedCtaLink'

const publicAssetBase = '/assets/local-funnels/reform-template'

type FormState = {
  project: string
  area: string
  budget: string
  timing: string
  contact: string
  route: string
}

const initialForm: FormState = {
  project: '内装補修',
  area: '',
  budget: '',
  timing: '',
  contact: '',
  route: '電話相談',
}

export default function ReformInteriorTemplateDemo() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const filledCount = useMemo(
    () => [form.project, form.area, form.budget, form.timing, form.contact].filter(Boolean).length,
    [form],
  )

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
    setSubmitted(false)
    setError('')
  }

  function submitDemo() {
    if (!form.area || !form.timing || !form.contact) {
      setError('エリア、希望時期、連絡先を入れると送信後の体験まで確認できます。')
      setSubmitted(false)
      return
    }
    setSubmitted(true)
    setError('')
  }

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">OpenHealth preview</p>
            <h1 className="text-base font-black sm:text-xl">リフォーム・内装向け 写真初回相談資料</h1>
          </div>
          <div className="hidden items-center gap-2 text-sm font-bold text-slate-600 sm:flex">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900">写真・予算</span>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-900">現調前整理</span>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:py-12">
          <div className="min-w-0 space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-2xl shadow-emerald-950/10">
              <div className="relative min-h-[340px] overflow-hidden bg-[#17251f] p-5 text-white sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-rose-300" />
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className="space-y-5">
                    <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-black text-emerald-50 ring-1 ring-white/15">
                      現地調査前の情報不足を減らす
                    </span>
                    <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-6xl">
                      写真・寸法・予算感を先に受け取る
                    </h2>
                    <p className="max-w-xl text-base leading-8 text-emerald-50/85">
                      内装、外構、小規模リフォームの初回相談を、写真・希望時期・予算・現地調査条件つきで整理する高単価業種向けの再利用導入イメージです。
                    </p>
                  </div>
                  <div className="grid gap-3 rounded-[1.75rem] bg-white p-4 text-slate-950 shadow-2xl">
                    <div className="grid grid-cols-[1fr_0.8fr] gap-3">
                      <div className="rounded-2xl bg-emerald-50 p-4">
                        <span className="text-xs font-bold text-emerald-800">写真</span>
                        <strong className="mt-2 block text-xl font-black">6枚</strong>
                        <p className="mt-2 text-xs leading-5 text-slate-600">全体、傷み、寸法、図面</p>
                      </div>
                      <div className="rounded-2xl bg-rose-50 p-4">
                        <span className="text-xs font-bold text-rose-800">予算</span>
                        <strong className="mt-2 block text-xl font-black">相談可</strong>
                        <p className="mt-2 text-xs leading-5 text-slate-600">目安と上限を分離</p>
                      </div>
                    </div>
                    {[
                      ['場所', '店舗入口 / 戸建て外構 / 室内補修'],
                      ['時期', '今月中 / 入居前 / 相見積もり'],
                      ['返信', '電話相談またはメールで現調調整'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-stone-200 bg-white px-4 py-3">
                        <span className="text-xs font-bold text-slate-500">{label}</span>
                        <p className="mt-1 text-sm font-black text-slate-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8" data-demo-feature="owner-proof">
                <p className="text-sm font-black text-emerald-800">外構・内装・小規模リフォーム向け</p>
                <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  現地調査前に、写真・予算・希望時期をそろえる相談ページ
                </h2>
                <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  「まず電話」だけでは伝わりにくい状態写真、寸法、希望予算、工事時期を先に受け取り、現地調査の優先度を判断しやすくします。
                  施工事例と対応エリアを組み合わせ、紹介やGoogleマップ流入の取りこぼしを直接相談へ変えます。
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ['相談品質', '写真・予算・時期を先に整理'],
                    ['営業効率', '見込み度で折り返しを優先'],
                    ['資産化', '施工事例・相談履歴を蓄積'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                      <span className="text-xs font-bold text-slate-500">{label}</span>
                      <strong className="mt-1 block text-base font-black">{value}</strong>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="#try" className="rounded-full bg-slate-950 px-5 py-3 text-center font-black text-white shadow-lg hover:-translate-y-0.5">
                    画面を確認する
                  </a>
                  <TrackedCtaLink
                    href={`${publicAssetBase}/reform-template-demo-preview.pdf`}
                    eventName="reform_template_preview_pdf"
                    className="rounded-full border border-stone-300 bg-white px-5 py-3 text-center font-black text-slate-950 hover:bg-stone-50"
                  >
                    PDFで見る
                  </TrackedCtaLink>
                </div>
              </div>
            </div>
          </div>

          <aside id="try" className="min-w-0 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-2xl shadow-emerald-950/10 lg:sticky lg:top-24" data-demo-feature="interactive-form">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-emerald-800">体験フォーム</p>
                <h2 className="text-2xl font-black">写真つき初回相談</h2>
              </div>
              <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-black text-slate-700">{filledCount}/5 入力</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="mb-2 block text-sm font-bold text-slate-700">相談内容</span>
                <div className="grid grid-cols-2 gap-2">
                  {['内装補修', '外構', '水回り', '店舗改装'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update('project', value)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-black ${form.project === value ? 'border-emerald-800 bg-emerald-800 text-white' : 'border-stone-200 bg-stone-50 text-slate-700'}`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">写真</span>
                <div className="grid grid-cols-2 gap-3">
                  {['全体', '気になる箇所', '寸法', '図面/資料'].map((label) => (
                    <span key={label} className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 px-3 py-5 text-center text-sm font-black text-emerald-900">
                      {label}を追加
                    </span>
                  ))}
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">住所エリア</span>
                <input
                  value={form.area}
                  onChange={(event) => update('area', event.target.value)}
                  placeholder="例: 世田谷区 / 大阪市北区"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">予算感</span>
                <input
                  value={form.budget}
                  onChange={(event) => update('budget', event.target.value)}
                  placeholder="例: 30万円前後 / まず概算"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">希望時期</span>
                <input
                  value={form.timing}
                  onChange={(event) => update('timing', event.target.value)}
                  placeholder="例: 来月中 / 入居前 / 未定"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">連絡先</span>
                <input
                  value={form.contact}
                  onChange={(event) => update('contact', event.target.value)}
                  placeholder="電話 / メール / LINE"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <div>
                <span className="mb-2 block text-sm font-bold text-slate-700">返信しやすい導線</span>
                <div className="grid grid-cols-3 gap-2">
                  {['電話相談', 'メール', 'LINE'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update('route', value)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-black ${form.route === value ? 'border-rose-700 bg-rose-700 text-white' : 'border-stone-200 bg-stone-50 text-slate-700'}`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              {error && <p className="rounded-2xl bg-amber-50 p-3 text-sm font-bold text-amber-800">{error}</p>}

              <button
                type="button"
                onClick={submitDemo}
                className="w-full rounded-2xl bg-slate-950 px-5 py-4 text-base font-black text-white shadow-lg shadow-slate-950/20 hover:-translate-y-0.5"
              >
                相談内容を送信してみる
              </button>

              {submitted && (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4" data-demo-feature="owner-notification">
                  <p className="text-sm font-black text-emerald-800">事業者側の通知イメージ</p>
                  <dl className="mt-3 grid gap-2 text-sm">
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">工事</dt><dd className="font-black">{form.project}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">エリア</dt><dd className="font-black">{form.area}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">予算</dt><dd className="font-black">{form.budget || '未定'}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">時期</dt><dd className="font-black">{form.timing}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">返信</dt><dd className="font-black">{form.route}</dd></div>
                  </dl>
                </div>
              )}
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}
