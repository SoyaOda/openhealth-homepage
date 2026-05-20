import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocalFunnelDemo, localFunnelDemos } from '@/components/local-funnels/demoRegistry'

export function generateStaticParams() {
  return localFunnelDemos.flatMap((demo) => [
    { lang: 'ja', demoSlug: demo.slug },
    { lang: 'en', demoSlug: demo.slug },
  ])
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; demoSlug: string }>
}): Promise<Metadata> {
  const { lang, demoSlug } = await props.params
  const demo = getLocalFunnelDemo(demoSlug)
  if (!demo) {
    return {}
  }

  return {
    title: demo.title,
    description: demo.description,
    robots: {
      index: !demo.noindex,
      follow: !demo.noindex,
    },
    alternates: {
      canonical: `/${lang}/local-funnels/demo/${demo.slug}`,
    },
    openGraph: {
      type: 'website',
      url: `https://www.openhealth.co.jp/${lang}/local-funnels/demo/${demo.slug}`,
      title: demo.title,
      description: demo.description,
      siteName: 'OpenHealth',
      images: [
        {
          url: demo.previewImagePath,
          width: 1440,
          height: 1100,
          alt: demo.title,
        },
      ],
    },
  }
}

export default async function LocalFunnelDemoPage(props: {
  params: Promise<{ demoSlug: string }>
}) {
  const { demoSlug } = await props.params
  const demo = getLocalFunnelDemo(demoSlug)
  if (!demo) {
    notFound()
  }

  const DemoComponent = demo.component
  return <DemoComponent />
}
