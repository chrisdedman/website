import '@styles/globals.css'
import '@styles/themes/dark.css'
import '@styles/themes/light.css'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Fraunces, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { siteDescription, siteImage, siteName, siteTitle, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: 'Chris Dedman | %s',
  },
  description: siteDescription,
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Chris Dedman',
    'software engineer',
    'computer scientist',
    'portfolio',
    'projects',
    'resume',
  ],
  authors: [{ name: 'Chris Dedman', url: siteUrl }],
  creator: 'Chris Dedman',
  publisher: 'Chris Dedman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
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
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      description: siteDescription,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Chris Dedman',
      url: siteUrl,
      description: siteDescription,
      jobTitle: 'Software Engineer',
      image: siteImage,
    },
  ];

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-w-[350px]" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
