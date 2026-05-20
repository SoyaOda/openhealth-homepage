'use client'

import { track } from '@vercel/analytics'
import type { ReactNode } from 'react'

interface TrackedCtaLinkProps {
  href: string
  eventName: string
  className?: string
  children: ReactNode
}

export default function TrackedCtaLink({
  href,
  eventName,
  className,
  children,
}: TrackedCtaLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track(eventName)}
    >
      {children}
    </a>
  )
}
