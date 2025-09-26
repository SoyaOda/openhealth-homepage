import { type Locale } from '@/lib/i18n'

export interface PageParams {
  lang: Locale
}

export interface PageProps {
  params: Promise<PageParams>
}