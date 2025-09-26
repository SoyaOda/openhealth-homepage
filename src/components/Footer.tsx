import Link from 'next/link'
import { type Locale } from '@/lib/i18n'

interface FooterProps {
  dict: any
  lang: Locale
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{dict.company.nameShort}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {lang === 'ja'
                ? '最先端のテクノロジーで医療・健康分野の課題解決に貢献します。'
                : 'Contributing to solving healthcare challenges with cutting-edge technology.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{lang === 'ja' ? 'クイックリンク' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}`}
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  {dict.navigation.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/privacy-policy`}
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  {dict.navigation.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{lang === 'ja' ? 'お問い合わせ' : 'Contact'}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-mono">{dict.privacyPolicy.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}