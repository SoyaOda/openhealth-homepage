import Link from 'next/link'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'
import { type Dictionary } from '@/types/dictionary'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  dict: Dictionary
  lang: Locale
}

export default function Header({ dict, lang }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
        {/* Logo/Company Name */}
        <div className="flex items-center">
          <Link
            href={`/${lang}`}
            className="group flex items-center space-x-3 text-xl font-black text-gray-900 transition-all duration-300 hover:text-blue-600 sm:text-2xl"
          >
            <Image
              src="/assets/openhealth/openhealth-logo-icon.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-contain transition-transform duration-300 group-hover:scale-110"
            />
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
            href={`/${lang}/local-funnels`}
            className="relative text-gray-700 hover:text-blue-600 transition-colors font-semibold group py-2"
          >
            <span>{dict.navigation.localAi}</span>
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

      </div>
    </header>
  )
}
