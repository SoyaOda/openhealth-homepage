import type { ComponentType } from 'react'
import HappinessCleanDemo from './HappinessCleanDemo'

export type LocalFunnelDemo = {
  slug: string
  projectId: string
  title: string
  description: string
  component: ComponentType
  noindex: boolean
  publicUrlPath: string
  previewImagePath: string
  previewPdfPath: string
  outreachUse: string
}

export const localFunnelDemos: LocalFunnelDemo[] = [
  {
    slug: 'happinessclean-aircon',
    projectId: 'photo_estimate_happinessclean_aircon',
    title: 'ハピネスクリーン様向け 写真見積もり相談デモ',
    description:
      'エアコンクリーニングの電話前確認を、写真・型番・住所エリア・希望日つきで整理するOpenHealthの候補別デモです。',
    component: HappinessCleanDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/happinessclean-aircon',
    previewImagePath: '/assets/local-funnels/happinessclean/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/happinessclean/happinessclean-demo-preview.pdf',
    outreachUse: 'first_send_visual_url_and_pdf_attachment',
  },
]

export function getLocalFunnelDemo(slug: string): LocalFunnelDemo | undefined {
  return localFunnelDemos.find((demo) => demo.slug === slug)
}
