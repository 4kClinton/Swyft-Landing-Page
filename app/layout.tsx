import type React from "react"
import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteLd, SITE_URL } from "../lib/seo"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Swyft — Find a Home & Book a Mover in Nairobi | All in One App",
  description:
    "Swyft is the housing + moving app for Nairobi. Swipe a video feed of Scout-verified homes, unlock the details, and book trusted movers — all in one app.",
  keywords: [
    "houses for rent in Nairobi",
    "verified rentals Nairobi",
    "movers in Nairobi",
    "house moving app Kenya",
    "find a house Nairobi",
    "book a mover Nairobi",
    "relocation services Nairobi",
    "Swyft app",
  ],
  applicationName: "Swyft",
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo-white-border.png",
    shortcut: "/logo-white-border.png",
    apple: "/logo-white-border.png",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Swyft",
    title: "Swyft — Find a Home & Book a Mover in Nairobi",
    description:
      "Swipe a video feed of Scout-verified homes, unlock the details, and book trusted movers — all in one app. Across Nairobi.",
    images: [
      {
        url: "/young-couple.jpg",
        width: 1200,
        height: 630,
        alt: "A couple moving into their new Nairobi apartment with Swyft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swyft — Find a Home & Book a Mover in Nairobi",
    description:
      "Swipe a video feed of Scout-verified homes, unlock the details, and book trusted movers — all in one app.",
    images: ["/young-couple.jpg"],
  },
  other: {
    "geo.region": "KE-110",
    "geo.placename": "Nairobi",
    "geo.position": "-1.286389;36.817223",
    ICBM: "-1.286389, 36.817223",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
