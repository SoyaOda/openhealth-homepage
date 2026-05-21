'use client'

import { useMemo, useState } from 'react'
import TrackedCtaLink from '@/components/TrackedCtaLink'

const publicAssetBase = '/assets/local-funnels/cleaning-template'

type FormState = {
  service: string
  area: string
  timing: string
  photos: string
  contact: string
  route: string
}

const initialForm: FormState = {
  service: 'エアコン',
  area: '',
  timing: '',
  photos: '写真あり',
  contact: '',
  route: 'LINE',
}

export default function CleaningPhotoEstimateTemplateDemo() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const filledCount = useMemo(
    () => [form.service, form.area, form.timing, form.contact].filter(Boolean).length,
    [form],
  )

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
    setSubmitted(false)
    setError('')
  }

  function submitDemo() {
    if (!form.area || !form.timing || !form.contact) {
      setError('エリア、希望日、連絡先を入れると送信後の体験まで確認できます。')
      setSubmitted(false)
      return
    }
    setSubmitted(true)
    setError('')
  }

  return (
    <div className="min-h-screen bg-[#f6f9fb] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">OpenHealth preview</p>
            <h1 className="text-base font-black sm:text-xl">清掃業向け 写真見積もり導線資料</h1>
          </div>
          <div className="hidden items-center gap-2 text-sm font-bold text-slate-600 sm:flex">
            <span className="rounded-full bg-teal-100 px-3 py-1 text-teal-800">写真相談</span>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-800">LINE/電話対応</span>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:py-12">
          <div className="min-w-0 space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-teal-950/10">
              <div className="relative min-h-[330px] overflow-hidden bg-[#102526] p-5 text-white sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-teal-300" />
                <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
                  <div className="space-y-5">
                    <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-black text-teal-50 ring-1 ring-white/15">
                      Googleマップ流入を、写真つき相談へ
                    </span>
                    <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-6xl">
                      電話前の確認を、スマホ1分で整理
                    </h2>
                    <p className="max-w-xl text-base leading-8 text-teal-50/85">
                      料金、対応エリア、写真、希望日、返信方法を一画面で受け取り、繁忙期の聞き返しと取りこぼしを減らす清掃業向けの再利用導入イメージです。
                    </p>
                    <div className="grid max-w-xl gap-3 sm:grid-cols-3">
                      {[
                        ['入力', '写真・希望日'],
                        ['通知', 'LINE/メール'],
                        ['集計', '月次レポート'],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                          <span className="text-xs font-bold text-teal-100">{label}</span>
                          <strong className="mt-1 block text-sm font-black text-white">{value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] bg-white p-3 text-slate-950 shadow-2xl">
                    <div className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-black text-slate-900">本日の相談</strong>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">3件</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          ['エアコン', '型番写真あり / 今週希望', 'LINE返信'],
                          ['水回り', '浴室写真あり / 見積もり希望', '電話返信'],
                          ['空室清掃', '間取り写真あり / 月末希望', 'メール返信'],
                        ].map(([title, detail, route]) => (
                          <div key={title} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center justify-between gap-3">
                              <strong className="text-sm font-black">{title}</strong>
                              <span className="text-xs font-bold text-teal-700">{route}</span>
                            </div>
                            <p className="mt-2 text-xs leading-5 text-slate-600">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8" data-demo-feature="owner-proof">
                <p className="text-sm font-black text-teal-700">清掃・エアコン・空室清掃向け</p>
                <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  既存の電話導線を残したまま、写真つき相談だけを追加
                </h2>
                <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  LP制作ではなく、今あるGoogleマップ/検索/紹介流入を、必要情報が揃った直接問い合わせに変える小さな導線です。
                  価格表、対応エリア、注意事項、返信先は事業者ごとに差し替えます。
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ['初回確認', '写真・作業箇所・希望日'],
                    ['事業者通知', 'LINE / メール / 電話メモ'],
                    ['継続根拠', '問い合わせ数・電話クリック・改善点'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
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
                    href={`${publicAssetBase}/cleaning-template-demo-preview.pdf`}
                    eventName="cleaning_template_preview_pdf"
                    className="rounded-full border border-slate-300 bg-white px-5 py-3 text-center font-black text-slate-950 hover:bg-slate-50"
                  >
                    PDFで見る
                  </TrackedCtaLink>
                </div>
              </div>
            </div>

            <section className="grid gap-4 sm:grid-cols-3">
              {[
                ['候補ごとに差し替え', '業種、地域、価格表、注意事項、返信先を1社ごとに反映します。'],
                ['チャネル検証', 'Web、LINE、電話、メールのうち、事業者が本当に見ている導線を試します。'],
                ['送信前に見せる', 'URLとPDFで直感的に触れる状態にしてから接触します。'],
              ].map(([title, detail]) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </article>
              ))}
            </section>
          </div>

          <aside id="try" className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-teal-950/10 lg:sticky lg:top-24" data-demo-feature="interactive-form">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-teal-700">体験フォーム</p>
                <h2 className="text-2xl font-black">写真つき相談</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">{filledCount}/4 入力</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="mb-2 block text-sm font-bold text-slate-700">相談内容</span>
                <div className="grid grid-cols-2 gap-2">
                  {['エアコン', '水回り', '空室清掃', '定期清掃'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update('service', value)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-black ${form.service === value ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">写真</span>
                <div className="grid grid-cols-2 gap-3">
                  {['全体', '詳細', '型番/寸法', '周辺'].map((label) => (
                    <span key={label} className="rounded-2xl border border-dashed border-teal-300 bg-teal-50 px-3 py-5 text-center text-sm font-black text-teal-800">
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
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">希望日・状況</span>
                <input
                  value={form.timing}
                  onChange={(event) => update('timing', event.target.value)}
                  placeholder="例: 今週末 / 急ぎ / 見積もりだけ"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">連絡先</span>
                <input
                  value={form.contact}
                  onChange={(event) => update('contact', event.target.value)}
                  placeholder="電話 / メール / LINE"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                />
              </label>

              <div>
                <span className="mb-2 block text-sm font-bold text-slate-700">返信しやすい導線</span>
                <div className="grid grid-cols-3 gap-2">
                  {['LINE', '電話', 'メール'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update('route', value)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-black ${form.route === value ? 'border-indigo-700 bg-indigo-700 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
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
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">相談</dt><dd className="font-black">{form.service}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">写真</dt><dd className="font-black">{form.photos}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">エリア</dt><dd className="font-black">{form.area}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">希望</dt><dd className="font-black">{form.timing}</dd></div>
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
