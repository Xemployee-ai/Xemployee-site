import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { PageTransitionProvider } from "@/components/page-transition-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Xemployee - AI Employees for Business",
  description: "Replace 90% of office work with battle-tested AI employees.",
  generator: 'v0.app'
}

import { SiteHeader } from "@/components/site-header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <SiteHeader />
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  )
}
