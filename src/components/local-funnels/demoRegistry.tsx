import type { ComponentType } from 'react'
import HappinessCleanDemo from './HappinessCleanDemo'
import CleaningPhotoEstimateTemplateDemo from './CleaningPhotoEstimateTemplateDemo'
import ReformInteriorTemplateDemo from './ReformInteriorTemplateDemo'
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
  {
    slug: 'cleaning-photo-estimate-template',
    projectId: 'photo_estimate_cleaning_template',
    title: '清掃業向け 写真見積もり導線デモ',
    description:
      '清掃業のGoogleマップ/検索流入を、写真・希望日・返信方法つきの直接問い合わせに変えるOpenHealthの再利用デモです。',
    component: CleaningPhotoEstimateTemplateDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/cleaning-photo-estimate-template',
    previewImagePath: '/assets/local-funnels/cleaning-template/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/cleaning-template/cleaning-template-demo-preview.pdf',
    outreachUse: 'list_wave_template_demo_plus_specific_observation',
  },
  {
    slug: 'reform-interior-photo-estimate-template',
    projectId: 'photo_estimate_reform_interior_template',
    title: 'リフォーム・内装向け 写真初回相談デモ',
    description:
      'リフォーム/内装/外構の初回相談を、写真・予算・希望時期・現地調査条件つきで整理するOpenHealthの再利用デモです。',
    component: ReformInteriorTemplateDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/reform-interior-photo-estimate-template',
    previewImagePath: '/assets/local-funnels/reform-template/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/reform-template/reform-template-demo-preview.pdf',
    outreachUse: 'list_wave_template_demo_plus_specific_observation',
  },
]

export function getLocalFunnelDemo(slug: string): LocalFunnelDemo | undefined {
  return localFunnelDemos.find((demo) => demo.slug === slug)
}
