import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveGoldSpotCard from "@/components/LiveGoldSpotCard";
import CapitalRequirementsCard from "@/components/CapitalRequirementsCard";
import { homeQA } from "@/data/qa-content";
import { fetchProductSpot, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "American Gold Buffalo | Expert Guide to 24-Karat Gold Bullion Coins",
  description:
    "Comprehensive guide to American Gold Buffalo coins, America's purest gold bullion coin. 24-karat, .9999 fine gold, U.S. Mint legal tender. Learn about pricing, premiums, IRA eligibility, and investing.",
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
  openGraph: {
    title: "American Gold Buffalo | Expert Guide to 24-Karat Gold Bullion Coins",
    description:
      "Comprehensive guide to American Gold Buffalo coins. 24-karat, .9999 fine gold, U.S. Mint legal tender bullion.",
    url: SITE_CONFIG.domain,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "American Gold Buffalo | Expert Guide to 24-Karat Gold Bullion Coins",
    description:
      "Comprehensive guide to American Gold Buffalo coins. 24-karat, .9999 fine gold, U.S. Mint legal tender.",
  },
};

export default async function HomePage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  
  // Helper to format price as approximate (rounded to nearest $10)
  const formatApproxPrice = (price: number): string => {
    const rounded = Math.round(price / 10) * 10;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rounded);
  };
  
  // Get approximate coin price for display
  const approxCoinPrice = priceData ? formatApproxPrice(priceData.ask) : "~$2,700";
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_CONFIG.brandName} - Your Guide to American Gold Buffalo Coins`,
    description:
      "Comprehensive educational resource about American Gold Buffalo coins, America's purest gold bullion coin with 24-karat, .9999 fine purity.",
    url: SITE_CONFIG.domain,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "American Gold Buffalo Coin",
    description:
      "One troy ounce 24-karat gold bullion coin, .9999 fine purity, minted by the U.S. Mint and recognized as legal tender.",
    brand: {
      "@type": "Brand",
      name: "U.S. Mint",
    },
    category: "Gold Coins",
    material: "Gold",
    weight: {
      "@type": "QuantitativeValue",
      value: 1,
      unitCode: "ONT",
      unitText: "troy ounce",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Full-Bleed Hero Section */}
      <section className="hero-fullbleed relative min-h-[100vh] flex items-center overflow-hidden -mt-20">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/american-buffalo-2025-proof-coins.png')",
              backgroundPosition: "75% center",
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          {/* Top gradient for nav readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" style={{ height: '200px' }} />
          {/* Bottom gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bullion-darker" />
        </div>

        {/* Subtle coin motif accent */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-bullion-gold/10 opacity-30 hidden lg:block" />
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-bullion-gold/5 opacity-20 hidden lg:block" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-24">
          <div className="max-w-2xl">
            {/* Certificate line - typographic treatment */}
            <p className="text-[13px] text-gray-400 tracking-[0.2em] uppercase mb-6">
              24-Karat&ensp;·&ensp;.9999 Fine Gold&ensp;·&ensp;U.S. Legal Tender
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8 tracking-tight">
              <span className="gold-text">American</span>
              <br />
              <span className="gold-text">Gold Buffalo</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              America&apos;s first and purest 24-karat gold bullion coin. 
              Minted by the U.S. Mint with .9999 fine purity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/live-gold-prices" className="btn-primary text-base">
                View Current Prices
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link href="/resources" className="btn-secondary text-base">
                Explore Resources
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:flex items-center mt-20 text-gray-500">
              <div className="w-px h-12 bg-gradient-to-b from-bullion-gold/50 to-transparent mr-4" />
              <span className="text-sm tracking-widest uppercase">Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Gold Price Section */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="gold-text">Live Gold Buffalo Pricing</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Current market data for the 1 oz American Gold Buffalo.
            </p>
          </div>
          <LiveGoldSpotCard />
        </div>
      </section>

      {/* Why American Gold Buffalo Section */}
      <section className="py-16 md:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why <span className="gold-text">American Gold Buffalo</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The first 24-karat gold bullion coin from the U.S. Mint, with .9999 fine purity and full government backing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                .9999 Fine Purity
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Minted from 24-karat gold at .9999 fineness. Unlike the Gold Eagle (.9167 fine), the Buffalo contains one full troy ounce of pure gold with no alloys.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                U.S. Legal Tender
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Produced by the U.S. Mint with a $50 face value. Weight and purity are guaranteed by the federal government, ensuring worldwide dealer recognition.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                IRA Eligible
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Qualifies for Precious Metals IRAs under IRS rules. The .9999 purity exceeds the .995 fineness minimum required for tax-advantaged retirement accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys Gold Buffalo Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gold-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Who Buys <span className="gold-text">Gold Buffalo Coins</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                The American Gold Buffalo appeals to investors who prioritize 
                purity, government backing, and strong liquidity.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Purity-Focused Investors
                    </h3>
                    <p className="text-gray-400">
                      Investors who want maximum gold content choose the Buffalo&apos;s 
                      .9999 fine purity over alloyed coins. Each coin contains exactly 
                      one troy ounce of pure 24-karat gold.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      IRA Investors
                    </h3>
                    <p className="text-gray-400">
                      Those building Precious Metals IRAs value the Buffalo&apos;s 
                      IRS-approved status, government guarantee, and strong 
                      secondary market for eventual distributions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Collectors & Investors
                    </h3>
                    <p className="text-gray-400">
                      The James Earle Fraser design, with its Native American profile 
                      and American bison, appeals to collectors and bullion investors alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <CapitalRequirementsCard priceData={priceData} />
            </div>
          </div>
        </div>
      </section>

      {/* Coin Comparison Section */}
      <section className="py-16 md:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Comparing <span className="gold-text">Gold Bullion Coins</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Understanding how the American Gold Buffalo compares to other 
              leading gold bullion coins helps you make informed decisions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bullion-gold/30">
                  <th className="text-left py-4 px-6 text-bullion-gold font-display">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-bullion-gold font-display">
                    Gold Buffalo
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    Gold Eagle
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    Maple Leaf
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Gold Purity</td>
                  <td className="py-4 px-6 text-center text-green-400">
                    .9999 (24K)
                  </td>
                  <td className="py-4 px-6 text-center">.9167 (22K)</td>
                  <td className="py-4 px-6 text-center">.9999 (24K)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Issuing Mint</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">
                    U.S. Mint
                  </td>
                  <td className="py-4 px-6 text-center">U.S. Mint</td>
                  <td className="py-4 px-6 text-center">Royal Canadian</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Face Value</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">$50 USD</td>
                  <td className="py-4 px-6 text-center">$50 USD</td>
                  <td className="py-4 px-6 text-center">$50 CAD</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">IRA Eligible</td>
                  <td className="py-4 px-6 text-center text-green-400">Yes</td>
                  <td className="py-4 px-6 text-center text-green-400">Yes</td>
                  <td className="py-4 px-6 text-center text-green-400">Yes</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Typical Premium</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">3-5%</td>
                  <td className="py-4 px-6 text-center">3-5%</td>
                  <td className="py-4 px-6 text-center">2-4%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">
                    Purity + U.S. Legal Tender
                  </td>
                  <td className="py-4 px-6 text-center">Durability</td>
                  <td className="py-4 px-6 text-center">Purity + Low Premium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design & History Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Iconic <span className="gold-text">Design & Heritage</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The American Gold Buffalo features one of the most celebrated 
              coin designs in U.S. history.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Obverse: Native American Portrait
              </h3>
              <p className="text-gray-400 mb-4">
                The obverse features a composite portrait of three Native American 
                chiefs, Iron Tail (Lakota), Big Tree (Kiowa), and Two Moons (Cheyenne),
                designed by James Earle Fraser for the original 1913 Buffalo Nickel.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Historical Note:</strong> Fraser 
                wanted to create a &ldquo;truly American&rdquo; coin design, distinct from 
                European influences.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Reverse: American Bison
              </h3>
              <p className="text-gray-400 mb-4">
                The reverse depicts &ldquo;Black Diamond,&rdquo; an American bison who 
                lived in New York&apos;s Central Park Zoo in the early 1900s. This 
                powerful image symbolizes the American frontier and natural heritage.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">First Minted:</strong> The Gold Buffalo 
                debuted in 2006 as the U.S. Mint&apos;s first .9999 fine gold 
                bullion coin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} priceData={priceData} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Further Reading
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            View{" "}
            <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
              current pricing
            </Link>
            {" "}or browse the{" "}
            <Link href="/resources" className="text-bullion-gold hover:underline">
              resource library
            </Link>
            {" "}for detailed guides on premiums, storage, and IRA eligibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/live-gold-prices" className="btn-primary">
              View Current Gold Prices
            </Link>
            <Link href="/resources" className="btn-secondary">
              Explore Educational Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
