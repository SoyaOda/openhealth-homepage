'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import TrackedCtaLink from '@/components/TrackedCtaLink'

const publicAssetBase = '/assets/local-funnels/sakuraiclean'

type FormState = {
  machine: string
  area: string
  timing: string
  contact: string
  route: string
}

const initialForm: FormState = {
  machine: '',
  area: '',
  timing: '',
  contact: '',
  route: '電話前整理',
}

export default function SakuraiCleanDemo() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const filledCount = useMemo(
    () => [form.machine, form.area, form.timing, form.contact].filter(Boolean).length,
    [form],
  )

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
    setError('')
    setSubmitted(false)
  }

  function submitDemo() {
    if (!form.area || !form.timing || !form.contact) {
      setError('町名、希望日、連絡先を入れると送信体験を確認できます。')
      setSubmitted(false)
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#f3f8fb] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">OpenHealth demo</p>
            <h1 className="text-base font-black sm:text-xl">サクライクリーン様向け 写真相談デモ</h1>
          </div>
          <div className="hidden items-center gap-2 text-sm font-bold text-slate-600 sm:flex">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">電話前に整理</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">スマホ対応</span>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:py-12">
          <div className="min-w-0 space-y-6">
            <div className="min-w-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-blue-950/10">
              <div className="relative">
                <Image
                  src={`${publicAssetBase}/ac-cleaning-inquiry-hero.png`}
                  alt="エアコン清掃の写真相談デモ"
                  width={1672}
                  height={941}
                  priority
                  className="h-[260px] w-full object-cover sm:h-[360px]"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-slate-900 shadow-lg">
                  機種・高さ・作業スペースを先に確認
                </div>
              </div>
              <div className="space-y-5 p-6 sm:p-8">
                <div className="space-y-3">
                  <p className="text-sm font-black text-blue-700">電話受付の前に情報が揃う導線</p>
                  <h2 className="break-words text-3xl font-black leading-tight sm:text-5xl">
                    メーカー・高さ・駐車条件を写真で整理する相談ページ
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    公開サイトの料金・対応エリア・注意事項を活かし、電話前に必要な写真と条件をスマホで整理して送れるデモです。
                    今の電話導線は残したまま、写真付きの事前確認だけを追加できます。
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ['料金目安', '9,800円〜'],
                    ['主導線', '電話前の条件整理'],
                    ['確認項目', '機種・高さ・駐車条件'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <span className="text-xs font-bold text-slate-500">{label}</span>
                      <strong className="mt-1 block text-base font-black">{value}</strong>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="#try" className="rounded-full bg-slate-950 px-5 py-3 text-center font-black text-white shadow-lg hover:-translate-y-0.5">
                    デモを試す
                  </a>
                  <TrackedCtaLink
                    href={`${publicAssetBase}/sakuraiclean-demo-preview.pdf`}
                    eventName="sakuraiclean_preview_pdf"
                    className="rounded-full border border-slate-300 bg-white px-5 py-3 text-center font-black text-slate-950 hover:bg-slate-50"
                  >
                    PDFで見る
                  </TrackedCtaLink>
                </div>
              </div>
            </div>

            <section className="grid gap-4 sm:grid-cols-3">
              {[
                ['電話導線を残す', '今の電話受付は残し、事前に写真と条件だけ受け取ります。'],
                ['対応不可を早めに判断', 'メーカー、高さ、作業スペース、駐車条件を先に確認します。'],
                ['繁忙期の確認を減らす', '何度も聞く内容を最初の相談時にまとめます。'],
              ].map(([title, detail]) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </article>
              ))}
            </section>
          </div>

          <aside id="try" className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 lg:sticky lg:top-24">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-blue-700">体験フォーム</p>
                <h2 className="text-2xl font-black">写真つき事前相談</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">{filledCount}/4 入力</span>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">写真</span>
                <div className="grid grid-cols-2 gap-3">
                  {['室内機', '型番', '下部スペース', '駐車場'].map((label) => (
                    <span key={label} className="rounded-2xl border border-dashed border-blue-300 bg-blue-50 px-3 py-5 text-center text-sm font-black text-blue-800">
                      {label}を追加
                    </span>
                  ))}
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">機種・メーカー</span>
                <input
                  value={form.machine}
                  onChange={(event) => update('machine', event.target.value)}
                  placeholder="例: お掃除機能付き / メーカー不明"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">町名・最寄り</span>
                <input
                  value={form.area}
                  onChange={(event) => update('area', event.target.value)}
                  placeholder="例: 世田谷区経堂"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">希望日</span>
                <input
                  value={form.timing}
                  onChange={(event) => update('timing', event.target.value)}
                  placeholder="例: 今週土曜 午前"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">連絡先</span>
                <input
                  value={form.contact}
                  onChange={(event) => update('contact', event.target.value)}
                  placeholder="電話 / メール"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <div>
                <span className="mb-2 block text-sm font-bold text-slate-700">返信しやすい導線</span>
                <div className="grid grid-cols-3 gap-2">
                  {['電話前整理', 'メール', 'SMS'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update('route', value)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-black ${form.route === value ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
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
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-sm font-black text-emerald-800">事業者側の通知イメージ</p>
                  <dl className="mt-3 grid gap-2 text-sm">
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">作業</dt><dd className="font-black">エアコン清掃 / {form.machine || 'メーカー確認'}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">エリア</dt><dd className="font-black">{form.area}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">希望</dt><dd className="font-black">{form.timing}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">返信</dt><dd className="font-black">{form.route}</dd></div>
                  </dl>
                </div>
              )}
            </div>
          </aside>
        </section>

        <section className="bg-slate-950 px-4 py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-blue-200">OpenHealth</p>
              <h2 className="text-2xl font-black">この導線を実装する場合のご相談</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">公開情報だけで作った仮デモです。実装時は御社確認済みの写真・文言・返信先に合わせて調整します。</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <TrackedCtaLink href="mailto:info@openhealth.co.jp?subject=写真相談デモについて" eventName="sakuraiclean_demo_email" className="rounded-full bg-white px-5 py-3 text-center font-black text-slate-950">
                メールで相談
              </TrackedCtaLink>
              <TrackedCtaLink href="https://line.me/R/ti/p/@447lunpz" eventName="sakuraiclean_demo_line" className="rounded-full border border-white/20 px-5 py-3 text-center font-black text-white">
                LINEで相談
              </TrackedCtaLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
