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

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: {
      default: dict.company.name,
      template: `%s | ${dict.company.nameShort}`
    },
    description: dict.company.description,
    keywords: params.lang === 'ja'
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
      locale: params.lang,
      url: `https://openhealth.co.jp/${params.lang}`,
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
      canonical: `/${params.lang}`,
      languages: {
        'ja': '/ja',
        'en': '/en',
      },
    },
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}