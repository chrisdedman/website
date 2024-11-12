import '@styles/globals.css'
import '@styles/themes/dark.css'
import '@styles/themes/light.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Chris Dedman\'s Portfolio',
  description: 'Chris Dedman\'s Portfolio showcasing projects, skills, and experiences.',
  openGraph: {
    title: 'Chris Dedman\'s Portfolio',
    description: 'Explore the work and projects of Chris Dedman, Software Engineer.',
    url: 'https://chrisdedman.vercel.app',
    type: 'website',
    images: [
      {
        url: '/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Chris Dedman\'s Portfolio'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-w-[350px]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
