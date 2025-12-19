import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | 24-Karat Gold Bullion Coin Guide`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Discover everything about American Gold Buffalo coins, America's purest gold bullion coin. 24-karat, .9999 fine gold, U.S. Mint legal tender. Expert insights on pricing, premiums, and investing.",
  keywords: [
    "American Gold Buffalo",
    "Gold Buffalo coin",
    "1 oz gold coin",
    "24 karat gold coin",
    ".9999 fine gold",
    "US Mint gold coin",
    "gold bullion coin",
    "buy Gold Buffalo",
    "gold coin prices",
    "gold coin investment",
    "IRA eligible gold",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | 24-Karat Gold Bullion Coin Guide`,
    description:
      "Discover everything about American Gold Buffalo coins, America's purest gold bullion coin. 24-karat, .9999 fine gold, U.S. Mint legal tender.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "American Gold Buffalo Coin - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | 24-Karat Gold Bullion Coin Guide`,
    description:
      "Discover everything about American Gold Buffalo coins, America's purest gold bullion coin. 24-karat, .9999 fine gold, U.S. Mint legal tender.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bullion-darker text-gray-100 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
