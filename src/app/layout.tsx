import '@styles/globals.css'
import '@styles/themes/dark.css'
import '@styles/themes/light.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  openGraph: {
    title: 'Chris Dedman | Software Engineer, Computer Scientist',
    description: 'Software Engineer, Chris Dedman\'s Portfolio showcasing projects, skills, and experiences.',
    url: 'https://chrisdedman.vercel.app',
    siteName: 'Chris Dedman\'s Portfolio',
    images: [
      {
        url: 'https://chrisdedman.vercel.app/website.jpeg',
        width: 1200,
        height: 630,
        alt: 'Chris Dedman\'s Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website',
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
        <title>Chris Dedman | Software Engineer, Computer Scientist</title>
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
