import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Gobi - Cyberpunk Portfolio | Computer & Communication Engineering",
  description:
    "Innovative Computer & Communication Engineering student portfolio showcasing cutting-edge projects in web development, cybersecurity, AI/ML, and IoT solutions.",
  keywords:
    "Computer Engineering, Communication Engineering, Web Development, Cybersecurity, AI, Machine Learning, IoT, Portfolio",
  authors: [{ name: "Gobi" }],
  creator: "Gobi",
  publisher: "Gobi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gobi-portfolio.vercel.app",
    title: "Gobi - Cyberpunk Portfolio",
    description: "Innovative Computer & Communication Engineering student portfolio",
    siteName: "Gobi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gobi - Cyberpunk Portfolio",
    description: "Innovative Computer & Communication Engineering student portfolio",
    creator: "@gobi",
  },
  generator: 'v0.app'
}
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00f7ff", // themeColor goes here now
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased bg-cyber-black text-cyber-blue overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
