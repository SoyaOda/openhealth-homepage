'use client'

type StaticHtmlDemoFrameProps = {
  title: string
  rawPath: string
}

export default function StaticHtmlDemoFrame({ title, rawPath }: StaticHtmlDemoFrameProps) {
  return (
    <iframe
      title={title}
      src={rawPath}
      className="h-screen w-full border-0 bg-white"
      loading="eager"
    />
  )
}
