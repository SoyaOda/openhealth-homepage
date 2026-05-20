'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Locale } from '@/lib/i18n'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname()

  const getOtherLanguage = () => {
    return currentLang === 'ja' ? 'en' : 'ja'
  }

  const getOtherLanguageLabel = () => {
    return currentLang === 'ja' ? 'English' : '日本語'
  }

  const getPathInOtherLanguage = (): string => {
    const otherLang = getOtherLanguage()
    // Remove current language prefix and add new one
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || ''
    return `/${otherLang}${pathWithoutLang}`
  }

  return (
    <div className="flex items-center">
      <Link
        href={getPathInOtherLanguage() as `/${string}`}
        className="group flex items-center space-x-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-teal-600 hover:shadow-xl sm:space-x-2 sm:px-4"
      >
        <span className="text-sm">{currentLang === 'ja' ? '🇺🇸' : '🇯🇵'}</span>
        <span className="text-sm">{getOtherLanguageLabel()}</span>
        <svg className="hidden h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
