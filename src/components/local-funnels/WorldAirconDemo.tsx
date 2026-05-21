'use client'

import { useMemo, useState } from 'react'
import TrackedCtaLink from '@/components/TrackedCtaLink'

const publicAssetBase = '/assets/local-funnels/worldaircon'

type FormState = {
  service: string
  model: string
  area: string
  timing: string
  contact: string
  route: string
}

const initialForm: FormState = {
  service: '修理相談',
  model: '',
  area: '',
  timing: '',
  contact: '',
  route: 'メール',
}

export default function WorldAirconDemo() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const filledCount = useMemo(
    () => [form.service, form.model, form.area, form.timing, form.contact].filter(Boolean).length,
    [form],
  )

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
    setError('')
    setSubmitted(false)
  }

  function submitDemo() {
    if (!form.area || !form.timing || !form.contact) {
      setError('エリア、希望日、連絡先を入れると送信体験を確認できます。')
      setSubmitted(false)
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#f1f6f9] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">OpenHealth preview</p>
            <h1 className="text-base font-black sm:text-xl">ワールドエアコン様向け 機器写真相談導入イメージ</h1>
          </div>
          <div className="hidden items-center gap-2 text-sm font-bold text-slate-600 sm:flex">
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-cyan-800">型番を先に確認</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">電話/メール対応</span>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:py-12">
          <div className="min-w-0 space-y-6">
            <div className="min-w-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-cyan-950/10">
              <div className="relative min-h-[260px] overflow-hidden bg-slate-950 p-5 text-white sm:min-h-[360px] sm:p-8">
                <div className="absolute inset-0 bg-slate-950" />
                <div className="absolute inset-x-0 top-0 h-1 bg-cyan-400" />
                <div className="relative grid h-full gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className="space-y-4">
                    <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-black text-cyan-100 ring-1 ring-white/15">
                      取付・修理・保守点検の電話前確認
                    </span>
                    <h2 className="text-3xl font-black leading-tight sm:text-5xl">室内機・室外機・型番を写真で整理</h2>
                    <p className="max-w-xl text-sm leading-7 text-cyan-50/85 sm:text-base">
                      型番、設置環境、故障内容、入替希望を電話/メール前にまとめ、対応可否や追加確認を減らすための候補別導入イメージです。
                    </p>
                  </div>
                  <div className="grid gap-3 rounded-[1.75rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
                    {[
                      ['室内機', 'メーカー・型番・設置高さ'],
                      ['室外機', '設置場所・配管・周辺スペース'],
                      ['症状', '冷えない / 異音 / 入替相談'],
                      ['返信', '電話またはメールで折り返し'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-4 rounded-2xl bg-white/90 px-4 py-3 text-slate-950">
                        <span className="text-sm font-black text-cyan-800">{label}</span>
                        <span className="text-right text-sm font-bold text-slate-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="space-y-3">
                  <p className="text-sm font-black text-cyan-700">取付・修理相談を構造化</p>
                  <h2 className="break-words text-3xl font-black leading-tight sm:text-5xl">
                    写真と型番で、問い合わせ前の確認を短くする相談ページ
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    公開サイトの取付・修理・保守点検案内を活かし、室内機/室外機/型番/設置環境をスマホで整理して送れる導入イメージです。
                    今の電話・メール導線は残したまま、初回確認だけを先に揃えます。
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ['主導線', '機器写真相談'],
                    ['返信', '電話 / メール'],
                    ['価格', '写真確認後に案内'],
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
                    href={`${publicAssetBase}/worldaircon-demo-preview.pdf`}
                    eventName="worldaircon_preview_pdf"
                    className="rounded-full border border-slate-300 bg-white px-5 py-3 text-center font-black text-slate-950 hover:bg-slate-50"
                  >
                    PDFで見る
                  </TrackedCtaLink>
                </div>
              </div>
            </div>

            <section className="grid gap-4 sm:grid-cols-3">
              {[
                ['型番確認を先に', 'メーカー、型番、付属品、互換性確認に必要な情報を最初に受け取ります。'],
                ['現場条件を整理', '室外機、配管、設置場所、建物条件を写真で共有できます。'],
                ['電話/メールを残す', '既存の問い合わせ方法は変えず、確認事項だけを構造化します。'],
              ].map(([title, detail]) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </article>
              ))}
            </section>
          </div>

          <aside id="try" className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-cyan-950/10 lg:sticky lg:top-24">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-cyan-700">体験フォーム</p>
                <h2 className="text-2xl font-black">機器写真相談</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">{filledCount}/5 入力</span>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">写真</span>
                <div className="grid grid-cols-2 gap-3">
                  {['室内機', '室外機', '型番', '設置環境'].map((label) => (
                    <span key={label} className="rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 px-3 py-5 text-center text-sm font-black text-cyan-800">
                      {label}を追加
                    </span>
                  ))}
                </div>
              </label>

              <div>
                <span className="mb-2 block text-sm font-bold text-slate-700">相談内容</span>
                <div className="grid grid-cols-2 gap-2">
                  {['取付工事', '修理相談', '保守点検', '入替・更新'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update('service', value)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-black ${form.service === value ? 'border-cyan-600 bg-cyan-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">機種・型番</span>
                <input
                  value={form.model}
                  onChange={(event) => update('model', event.target.value)}
                  placeholder="例: 室内機型番 / メーカー不明"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">住所エリア</span>
                <input
                  value={form.area}
                  onChange={(event) => update('area', event.target.value)}
                  placeholder="例: 世田谷区代田"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">希望日・状況</span>
                <input
                  value={form.timing}
                  onChange={(event) => update('timing', event.target.value)}
                  placeholder="例: 今週中 / 冷えない / 入替希望"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">連絡先</span>
                <input
                  value={form.contact}
                  onChange={(event) => update('contact', event.target.value)}
                  placeholder="電話 / メール"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <div>
                <span className="mb-2 block text-sm font-bold text-slate-700">返信しやすい導線</span>
                <div className="grid grid-cols-3 gap-2">
                  {['メール', '電話', 'SMS'].map((value) => (
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
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">相談</dt><dd className="font-black">{form.service}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-slate-500">型番</dt><dd className="font-black">{form.model || '写真で確認'}</dd></div>
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
              <p className="text-sm font-black text-cyan-200">OpenHealth</p>
              <h2 className="text-2xl font-black">この導線を実装する場合のご相談</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">OpenHealthの導入イメージ資料です。導入時は御社確認済みの写真・文言・返信先に合わせて調整します。</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <TrackedCtaLink href="mailto:info@openhealth.co.jp?subject=機器写真相談導入イメージについて" eventName="worldaircon_demo_email" className="rounded-full bg-white px-5 py-3 text-center font-black text-slate-950">
                メールで相談
              </TrackedCtaLink>
              <TrackedCtaLink href="https://line.me/R/ti/p/@447lunpz" eventName="worldaircon_demo_line" className="rounded-full border border-white/20 px-5 py-3 text-center font-black text-white">
                LINEで相談
              </TrackedCtaLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
