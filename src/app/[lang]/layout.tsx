import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params
  const dict = await getDictionary(lang as Locale)

  return {
    title: {
      default: dict.company.name,
      template: `%s | ${dict.company.nameShort}`
    },
    description: dict.company.description,
    keywords: lang === 'ja'
      ? ['ヘルスケア', 'ソフトウェア開発', '医療技術', 'OpenHealth', 'デジタルヘルス']
      : ['healthcare', 'software development', 'medical technology', 'OpenHealth', 'digital health'],
    authors: [{ name: dict.company.name }],
    creator: dict.company.name,
    publisher: dict.company.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang,
      url: `https://openhealth.co.jp/${lang}`,
      siteName: dict.company.nameShort,
      title: dict.company.name,
      description: dict.company.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.company.name,
      description: dict.company.description,
      creator: '@openhealth',
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    metadataBase: new URL('https://openhealth.co.jp'),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'ja': '/ja',
        'en': '/en',
      },
    },
    verification: {
      google: '8Ulvam-iWRhxlQt-ykP9Qhoozw8eHMgvtiuErX6cn-I',
    },
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await props.params
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {props.children}
      </body>
    </html>
  );
}