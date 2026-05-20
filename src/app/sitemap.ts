import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.openhealth.co.jp'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: `${baseUrl}/ja`,
      lastModified: now,
      alternates: { languages: { ja: `${baseUrl}/ja`, en: `${baseUrl}/en` } },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      alternates: { languages: { ja: `${baseUrl}/ja`, en: `${baseUrl}/en` } },
    },
    {
      url: `${baseUrl}/ja/local-funnels`,
      lastModified: now,
      alternates: { languages: { ja: `${baseUrl}/ja/local-funnels`, en: `${baseUrl}/en/local-funnels` } },
    },
    {
      url: `${baseUrl}/en/local-funnels`,
      lastModified: now,
      alternates: { languages: { ja: `${baseUrl}/ja/local-funnels`, en: `${baseUrl}/en/local-funnels` } },
    },
    {
      url: `${baseUrl}/ja/privacy-policy`,
      lastModified: now,
      alternates: { languages: { ja: `${baseUrl}/ja/privacy-policy`, en: `${baseUrl}/en/privacy-policy` } },
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: now,
      alternates: { languages: { ja: `${baseUrl}/ja/privacy-policy`, en: `${baseUrl}/en/privacy-policy` } },
    },
  ]
}
