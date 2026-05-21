import type { ComponentType } from 'react'
import HappinessCleanDemo from './HappinessCleanDemo'
import CleaningPhotoEstimateTemplateDemo from './CleaningPhotoEstimateTemplateDemo'
import ReformInteriorTemplateDemo from './ReformInteriorTemplateDemo'
import SakuraiCleanDemo from './SakuraiCleanDemo'
import GreenExteriorDemo from './GreenExteriorDemo'
import SokichiKirikoDemo from './SokichiKirikoDemo'
import WorldAirconDemo from './WorldAirconDemo'
import {
  MarketInboundDirectBookDemo,
  MarketReformPhotoQuoteDemo,
  MarketUsHomeMissedCallDemo,
} from './MarketResponseImagePackDemo'

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
    slug: 'greenexterior-setagaya',
    projectId: 'maps_demo_greenexterior_setagaya',
    title: 'Green Exterior様向け 写真付き外構相談デモ',
    description:
      '外構・エクステリアの初回相談を、写真・図面・予算感・現地調査希望つきで整理するOpenHealthの候補別デモです。',
    component: GreenExteriorDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/greenexterior-setagaya',
    previewImagePath: '/assets/local-funnels/greenexterior/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/greenexterior/greenexterior-demo-preview.pdf',
    outreachUse: 'first_send_visual_url_and_pdf_attachment',
  },
  {
    slug: 'sokichi-kiriko',
    projectId: 'inbound_sokichi_kiriko',
    title: '創吉 切子体験教室様向け 多言語予約前確認デモ',
    description:
      '浅草の体験予約前に、言語希望・人数・年齢・コース・連絡先を整理して既存予約/メールへ流すOpenHealthの候補別デモです。',
    component: SokichiKirikoDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/sokichi-kiriko',
    previewImagePath: '/assets/local-funnels/sokichi-kiriko/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/sokichi-kiriko/sokichi-kiriko-demo-preview.pdf',
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
  {
    slug: 'market-reform-photoquote',
    projectId: 'market_response_reform_photoquote_001',
    title: '外構・リフォーム向け 5画面写真相談MVP',
    description:
      '外構/リフォームの初回相談を、写真・予算・希望時期・現調前メモつきで見せるOpenHealthの市場反応検証用ミニLPです。',
    component: MarketReformPhotoQuoteDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/market-reform-photoquote',
    previewImagePath: '/assets/local-funnels/market-reform-photoquote/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/market-reform-photoquote/market-reform-photoquote-preview.pdf',
    outreachUse: 'market_response_image_mvp_internal_until_chatgpt_image_asset_accepted',
  },
  {
    slug: 'market-inbound-directbook',
    projectId: 'market_response_inbound_directbook_001',
    title: 'インバウンド店舗向け 多言語予約前確認MVP',
    description:
      '訪日客の言語・人数・日時・注意事項を整理して直接問い合わせへつなげるOpenHealthの市場反応検証用ミニLPです。',
    component: MarketInboundDirectBookDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/market-inbound-directbook',
    previewImagePath: '/assets/local-funnels/market-inbound-directbook/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/market-inbound-directbook/market-inbound-directbook-preview.pdf',
    outreachUse: 'market_response_image_mvp_internal_until_official_routes_and_assets_ready',
  },
  {
    slug: 'market-us-home-missedcall',
    projectId: 'market_response_us_home_missedcall_001',
    title: 'US Home Services Missed-Call Recovery MVP',
    description:
      'Missed calls become structured callback and quote requests for HVAC, plumbing, roofing, landscaping, and cleaning companies.',
    component: MarketUsHomeMissedCallDemo,
    noindex: true,
    publicUrlPath: '/ja/local-funnels/demo/market-us-home-missedcall',
    previewImagePath: '/assets/local-funnels/market-us-home-missedcall/demo-desktop1440.png',
    previewPdfPath: '/assets/local-funnels/market-us-home-missedcall/market-us-home-missedcall-preview.pdf',
    outreachUse: 'market_response_image_mvp_internal_until_us_channel_review',
  },
]

export function getLocalFunnelDemo(slug: string): LocalFunnelDemo | undefined {
  return localFunnelDemos.find((demo) => demo.slug === slug)
}
