import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { GoldPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveGoldSpotCard from "@/components/LiveGoldSpotCard";
import LiveGoldSpotIndexCard from "@/components/LiveGoldSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot, fetchMetalSpotIndex, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Live Gold Krugerrand Prices & Gold Spot Price Charts",
  description:
    "Track live Gold Krugerrand prices and gold spot prices with interactive charts. Understand premiums, bid-ask spreads, and market dynamics for informed gold coin investing.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-gold-prices`,
  },
  openGraph: {
    title: "Live Gold Krugerrand Prices & Gold Spot Price Charts",
    description:
      "Track live Gold Krugerrand prices and gold spot prices with interactive charts. Understand premiums and market dynamics.",
    url: `${SITE_CONFIG.domain}/live-gold-prices`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Gold Krugerrand Prices & Gold Spot Price Charts",
    description:
      "Track live Gold Krugerrand prices and gold spot prices with interactive charts and market data.",
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const spotData = await fetchMetalSpotIndex();
  
  // Get spot price per oz for examples (rounded to nearest dollar)
  const spotPerOz = spotData ? Math.round(spotData.last) : 2700;
  const formatSpotPrice = (price: number) => formatUSD(price).replace(".00", "");
  
  // Calculate example prices based on current spot
  const eaglePrice = Math.round(spotPerOz * 1.04);  // 4% premium
  const krugerrandPrice = Math.round(spotPerOz * 1.03); // 3% premium
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gold Krugerrand Price & Live Gold Spot Prices",
    description:
      "Track live Gold Krugerrand prices and gold spot prices. Real-time charts and market data for gold coin investors.",
    url: `${SITE_CONFIG.domain}/live-gold-prices`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What determines the price of a Gold Krugerrand?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a Gold Krugerrand consists of the gold spot price plus a premium that covers minting, distribution, and dealer margins. Krugerrand premiums typically range from 2-4% over spot.",
        },
      },
      {
        "@type": "Question",
        name: "Why does the Krugerrand have a premium over spot price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The premium covers South African Mint production costs, distribution costs, dealer margins, and reflects the coin's status as the world's most recognized gold bullion coin. Government-minted coins carry premiums for their guaranteed authenticity and liquidity.",
        },
      },
      {
        "@type": "Question",
        name: "How often do gold prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gold prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, central bank policies, geopolitical events, and supply and demand dynamics.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "This page displays live Gold Krugerrand prices via Monex data",
    "Track gold spot prices per troy ounce for reference",
    "Understand how spot prices relate to Krugerrand retail pricing",
    "Learn about premium structures: Krugerrand coins have 2-4% premiums",
    "Compare Krugerrand pricing to other gold bullion coins",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 gold-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="gold-text">Krugerrand Price</span>
              <br />
              <span className="text-white">& Live Gold Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 text-left">
              Track live gold prices and understand how spot pricing affects 
              the cost of Gold Krugerrand coins. Use these tools to make 
              informed decisions about your precious metals investments. Return 
              to our{" "}
              <Link href="/" className="text-bullion-gold hover:underline">
                Krugerrand overview
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-bullion-gold hover:underline">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live Krugerrand Price Card */}
          <LiveGoldSpotCard showCta={false} />

          {/* Live Gold Spot Index Card */}
          <LiveGoldSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-white text-center">
              Gold Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <GoldPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Krugerrand Pricing */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="gold-text">Krugerrand Pricing</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Spot Price vs. Krugerrand Price
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When purchasing a Gold Krugerrand, you&apos;ll pay a premium 
                  above the spot price. The spot price represents the current market 
                  rate for gold traded in bulk on commodities exchanges.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Krugerrand coins typically carry <strong className="text-white">2-4% 
                  premiums over spot</strong>, which covers South African Mint production costs, 
                  distribution, and dealer margins. This is often lower than other coins 
                  due to high Krugerrand production volumes.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Why Government Coins Carry Premiums
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Minting Costs:</strong> The South African 
                      Mint uses precision manufacturing to achieve .9167 fine purity with 
                      exact weight specifications.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Distribution Chain:</strong> Coins 
                      flow from the Mint to distributors to dealers, each adding 
                      margin for their services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Government Guarantee:</strong> Sovereign 
                      mint origin and legal tender status provide authenticity assurance 
                      that commands value.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Strong Liquidity:</strong> Recognized 
                      worldwide, Krugerrands are easy to sell, which supports their 
                      pricing power.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Premium Comparison: Krugerrand vs. Other Coins
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Krugerrand premiums are often among the lowest for major government 
                  gold bullion coins:
                </p>
                <div className="bg-bullion-darker/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">
                    <strong className="text-bullion-gold">Example at {formatSpotPrice(spotPerOz)}/oz spot:</strong>
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• <strong className="text-white">Krugerrand (~3% premium):</strong> ~{formatSpotPrice(krugerrandPrice)}</li>
                    <li>• <strong className="text-white">Gold Eagle (~4% premium):</strong> ~{formatSpotPrice(eaglePrice)}</li>
                    <li>• <strong className="text-white">Canadian Maple (~3% premium):</strong> ~{formatSpotPrice(Math.round(spotPerOz * 1.03))}</li>
                    <li className="pt-2 border-t border-bullion-gold/20">
                      <strong className="text-bullion-gold">Krugerrand advantage:</strong> Often lower premiums due to high production volumes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} priceData={priceData} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6">
            For detailed market analysis and pricing information:
          </p>
          <a
            href="https://www.monex.com/gold-south-african-krugerrand-price-charts/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
          >
            <span>Research Krugerrand prices at Monex</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Krugerrand Resources
          </h2>
          <p className="text-gray-400 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-bullion-gold hover:underline">
              educational resources
            </Link>{" "}
            to deepen your understanding of Krugerrand investing, or return to our{" "}
            <Link href="/" className="text-bullion-gold hover:underline">
              Gold Krugerrand overview
            </Link>.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      </section>
    </>
  );
}
