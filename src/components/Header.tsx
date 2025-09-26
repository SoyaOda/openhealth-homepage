import Link from 'next/link'
import { type Locale } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  dict: any
  lang: Locale
}

export default function Header({ dict, lang }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Company Name */}
        <div className="flex items-center">
          <Link
            href={`/${lang}`}
            className="group flex items-center space-x-3 text-gray-900 text-2xl font-black hover:text-blue-600 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="tracking-tight">{dict.company.nameShort}</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href={`/${lang}`}
            className="relative text-gray-700 hover:text-blue-600 transition-colors font-semibold group py-2"
          >
            <span>{dict.navigation.home}</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            href={`/${lang}/privacy-policy`}
            className="relative text-gray-700 hover:text-blue-600 transition-colors font-semibold group py-2"
          >
            <span>{dict.navigation.privacyPolicy}</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center">
          <LanguageSwitcher currentLang={lang} />
        </div>

        {/* Mobile Menu Button (for future implementation) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 transition-colors p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}