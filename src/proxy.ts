import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from '@/lib/i18n'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Negotiator expects a mutable string array.
  const locales: string[] = [...i18n.locales]
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

  return matchLocale(languages, locales, i18n.defaultLocale)
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/app-ads.txt',
      '/google944bef3c8668483d.html',
      '/robots.txt',
      '/sitemap.xml',
    ].includes(pathname)
  ) {
    return
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}
