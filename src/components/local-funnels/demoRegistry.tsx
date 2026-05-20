import type { ComponentType } from 'react'
import HappinessCleanDemo from './HappinessCleanDemo'
import SakuraiCleanDemo from './SakuraiCleanDemo'
import WorldAirconDemo from './WorldAirconDemo'

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
  {
    slug: 'sakuraiclean-aircon',
    projectId: 'photo_estimate_sakuraiclean_aircon',
    title: 'サクライクリーン様向け 写真相談デモ',
    description:
      'エアコンクリーニングの電話前確認を、写真・メーカー・高さ・住所エリア・希望日つきで整理するOpenHealthの候補別デモです。',
    component: SakuraiCleanDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/sakuraiclean-aircon',
    previewImagePath: '/assets/local-funnels/sakuraiclean/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/sakuraiclean/sakuraiclean-demo-preview.pdf',
    outreachUse: 'first_send_visual_url_and_pdf_attachment',
  },
  {
    slug: 'worldaircon-install',
    projectId: 'photo_estimate_worldaircon_install',
    title: 'ワールドエアコン様向け 機器写真相談デモ',
    description:
      '取付・修理・保守点検の電話/メール前確認を、室内機・室外機・型番・設置環境の写真つきで整理するOpenHealthの候補別デモです。',
    component: WorldAirconDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/worldaircon-install',
    previewImagePath: '/assets/local-funnels/worldaircon/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/worldaircon/worldaircon-demo-preview.pdf',
    outreachUse: 'first_send_visual_url_and_pdf_attachment',
  },
]

export function getLocalFunnelDemo(slug: string): LocalFunnelDemo | undefined {
  return localFunnelDemos.find((demo) => demo.slug === slug)
}
