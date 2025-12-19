import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | The Original Gold Bullion Coin`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Discover everything about Gold Krugerrand coins, the world's first and most traded gold bullion coin. 22-karat, .9167 fine gold, minted by South African Mint since 1967. Expert insights on pricing, premiums, and investing.",
  keywords: [
    "Gold Krugerrand",
    "Krugerrand coin",
    "1 oz gold coin",
    "22 karat gold coin",
    ".9167 fine gold",
    "South African gold coin",
    "gold bullion coin",
    "buy Krugerrand",
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
    title: `${SITE_CONFIG.brandName} | The Original Gold Bullion Coin`,
    description:
      "Discover everything about Gold Krugerrand coins, the world's first and most traded gold bullion coin. 22-karat, .9167 fine gold, minted by South African Mint.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Gold Krugerrand Coin - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | The Original Gold Bullion Coin`,
    description:
      "Discover everything about Gold Krugerrand coins, the world's first and most traded gold bullion coin. 22-karat, .9167 fine gold, minted by South African Mint.",
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
