import { redirect } from 'next/navigation'

export default async function LegacyLocalAiPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params
  redirect(`/${lang}/local-funnels`)
}
