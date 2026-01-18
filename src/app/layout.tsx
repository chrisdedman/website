import '@styles/globals.css'
import '@styles/themes/dark.css'
import '@styles/themes/light.css'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Fraunces, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const siteTitle = 'Chris Dedman | Software Engineer, Computer Scientist';
const siteDescription = 'Software Engineer, Chris Dedman\'s Portfolio showcasing projects, skills, and experiences.';
const siteUrl = 'https://chrisdedman.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Chris Dedman',
  },
  description: siteDescription,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Chris Dedman\'s Portfolio',
    images: [
      {
        url: `${siteUrl}/website.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Chris Dedman\'s Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/website.jpeg`],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const displayFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
});

const bodyFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-w-[350px]" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
