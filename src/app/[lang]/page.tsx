import { type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen flex flex-col">
      <Header dict={dict} lang={lang} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 py-32 px-4 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                    {dict.company.nameShort}
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-white mx-auto rounded-full"></div>
              </div>

              <p className="text-2xl md:text-3xl text-cyan-50 font-light max-w-4xl mx-auto leading-relaxed">
                {dict.company.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <button className="group relative inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-2xl hover:shadow-cyan-200/50 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">{lang === 'ja' ? 'サービスについて' : 'Our Services'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group relative inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  <span>{lang === 'ja' ? 'お問い合わせ' : 'Contact Us'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {lang === 'ja' ? '私たちについて' : 'About Us'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {lang === 'ja'
                  ? '最先端のテクノロジーで医療・健康分野の未来を創造します'
                  : 'Creating the future of healthcare with cutting-edge technology'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Business Card */}
              <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {dict.company.business}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {dict.company.businessDescription}
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {dict.company.mission}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {dict.company.missionDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={dict} lang={lang} />
    </div>
  )
}