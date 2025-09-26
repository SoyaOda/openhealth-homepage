import { type Metadata } from "next";
import { type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: dict.privacyPolicy.title,
    description: lang === 'ja'
      ? '株式会社OpenHealthのプライバシーポリシーです。個人情報の取扱いについて詳しく説明しています。'
      : 'OpenHealth Inc. Privacy Policy. Detailed information about how we handle personal information.',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: dict.privacyPolicy.title,
      description: lang === 'ja'
        ? '株式会社OpenHealthのプライバシーポリシー'
        : 'OpenHealth Inc. Privacy Policy',
    },
    alternates: {
      canonical: `/${lang}/privacy-policy`,
    },
  }
}

export default async function PrivacyPolicy({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen flex flex-col">
      <Header dict={dict} lang={lang} />

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {dict.privacyPolicy.title}
          </h1>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {dict.privacyPolicy.intro}
            </p>

            {/* Article 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {dict.privacyPolicy.article1.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {dict.privacyPolicy.article1.content}
              </p>
            </section>

            {/* Article 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {dict.privacyPolicy.article2.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {dict.privacyPolicy.article2.content}
              </p>
            </section>

            {/* Article 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {dict.privacyPolicy.article3.title}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {dict.privacyPolicy.article3.content}
              </p>
              <ul className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                {dict.privacyPolicy.article3.purposes.map((purpose: string, index: number) => (
                  <li key={index} className="leading-relaxed">{purpose}</li>
                ))}
              </ul>
            </section>

            {/* Article 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {dict.privacyPolicy.article10.title}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {dict.privacyPolicy.article10.content}
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">
                  {dict.privacyPolicy.contact}
                </p>
                <p className="text-blue-600 font-mono">
                  {dict.privacyPolicy.email}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer dict={dict} lang={lang} />
    </div>
  )
}