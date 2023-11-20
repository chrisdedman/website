import '@styles/globals.css'
import '@styles/themes/dark.css'
import '@styles/themes/light.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Per Aspera Ad Astra',
  description: 'Chris Dedman\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-w-[350px]">
          {children}
      </body>
    </html>
  )
}
