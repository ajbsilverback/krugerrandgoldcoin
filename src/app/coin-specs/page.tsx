import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gold Krugerrand Coin Specifications | Technical Details & Investor Facts",
  description:
    "Complete technical specifications for the 1 oz Gold Krugerrand coin: .9167 fine purity, weight, dimensions, IRA eligibility, and premium factors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/coin-specs`,
  },
  openGraph: {
    title: "Gold Krugerrand Coin Specifications | Technical Details",
    description:
      "Complete technical specifications for the 1 oz Gold Krugerrand: .9167 purity, 1 troy oz gold content, South African Mint origin, and IRA eligibility.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gold Krugerrand Coin Specifications",
    description:
      "Complete technical specifications for the 1 oz Gold Krugerrand: .9167 purity, 1 troy oz gold content, and IRA eligibility.",
  },
};

const specsData = [
  { label: "Purity", value: ".9167 fine gold (22-karat)", highlight: true },
  { label: "Gold Content", value: "1.0000 troy ounce (31.1035 grams)" },
  { label: "Gross Weight", value: "1.0909 troy ounces (33.93 grams)" },
  { label: "Diameter", value: "32.77 mm (1.29 inches)" },
  { label: "Thickness", value: "2.84 mm (0.112 inches)" },
  { label: "Face Value", value: "None (legal tender based on gold content)" },
  { label: "Mint", value: "South African Mint" },
  { label: "First Minted", value: "1967" },
  { label: "Edge", value: "Reeded (160 serrations)" },
  { label: "IRA Eligible", value: "Yes", highlight: true },
];

const faqData = [
  {
    question: "What is the purity of the Gold Krugerrand?",
    answer:
      "The Gold Krugerrand is .9167 fine gold, meaning it is 22-karat gold alloyed with copper. This alloy makes the coin more durable and scratch-resistant than pure 24-karat coins while still containing exactly 1 troy ounce of pure gold.",
  },
  {
    question: "How much gold is in a 1 oz Krugerrand?",
    answer:
      "Each 1 oz Gold Krugerrand contains exactly 1.0000 troy ounce (31.1035 grams) of pure gold. The coin weighs 1.0909 troy ounces (33.93 grams) total because the copper alloy adds additional weight.",
  },
  {
    question: "Does the Krugerrand have a face value?",
    answer:
      "Unlike most modern gold coins, the Krugerrand does not have a face value printed on it. It is legal tender in South Africa, with its value based directly on its gold content. This was intentional to allow the coin's value to fluctuate with gold prices.",
  },
  {
    question: "Can I hold Krugerrand coins in an IRA?",
    answer:
      "Yes, Gold Krugerrand coins meet IRS requirements for inclusion in a Precious Metals IRA. The .9167 purity meets the IRS minimum fineness requirement of .995 for gold because Krugerrands are specifically listed as acceptable IRA investments. You'll need a qualified custodian and approved depository to hold IRA-owned coins.",
  },
  {
    question: "Why does the Krugerrand have a premium over spot price?",
    answer:
      "Premiums reflect minting costs, dealer margins, and supply/demand dynamics. The Krugerrand's premium accounts for South African Mint production costs, distribution, and its status as the world's most recognized gold bullion coin. Premiums vary based on market conditions.",
  },
  {
    question: "How does the Krugerrand compare to the Gold Eagle in purity?",
    answer:
      "The Krugerrand and Gold Eagle have the same purity: .9167 fine (22-karat gold alloyed with copper). Both coins contain 1 troy ounce of gold and weigh approximately 1.09 oz total. The main differences are their designs, issuing mints, and that the Eagle has a face value while the Krugerrand does not.",
  },
  {
    question: "What affects Krugerrand premiums?",
    answer:
      "Key premium drivers include: mint production capacity, dealer inventory levels, overall demand for physical gold, the coin's recognition and liquidity, and broader precious metals market conditions. Krugerrands often have lower premiums than other coins due to high production volumes.",
  },
];

export default function CoinSpecsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gold Krugerrand Coin Specifications",
    description:
      "Complete technical specifications and investor facts for the 1 oz Gold Krugerrand coin.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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

      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gold-text">Krugerrand</span> Specifications
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technical details and investor-facing facts for the 1 oz Gold Krugerrand, the world&apos;s original gold bullion coin.
            </p>
          </div>

          {/* Specifications Table */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-bullion-gold/10">
                  {specsData.map((spec, index) => (
                    <tr key={index} className={spec.highlight ? "bg-bullion-gold/5" : ""}>
                      <td className="py-4 pr-4 text-gray-400 font-medium w-1/3">
                        {spec.label}
                      </td>
                      <td className={`py-4 ${spec.highlight ? "text-bullion-gold font-semibold" : "text-white"}`}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Alloy Advantage */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              The 22-Karat Alloy Advantage
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At .9167 fineness (22-karat), the Krugerrand uses a copper alloy that provides significant practical benefits.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Enhanced durability</strong>: The copper alloy makes Krugerrands more resistant to scratching and wear than pure 24-karat coins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Full gold content</strong>: Despite the alloy, each coin contains exactly 1 troy ounce of pure gold</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">IRS compliance</strong>: Krugerrands are specifically listed as acceptable for Precious Metals IRAs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Distinctive color</strong>: The copper gives Krugerrands their characteristic orange-gold hue</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Learn more about Krugerrand composition at{" "}
              <a
                href="https://www.monex.com/gold-south-african-krugerrands-for-sale/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex Knowledge Base
              </a>
            </p>
          </section>

          {/* Legal Tender Status */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Legal Tender Status
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Krugerrand is legal tender in South Africa, though uniquely it has <strong className="text-white">no fixed face value</strong>. Its legal tender value equals its gold content value.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Authenticity Assurance</h3>
                <p className="text-gray-400 text-sm">
                  Produced by the South African Mint with strict quality controls and anti-counterfeiting measures.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Government Guarantee</h3>
                <p className="text-gray-400 text-sm">
                  Weight and purity backed by the South African government and Rand Refinery.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Market Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The most recognized gold bullion coin worldwide, supporting exceptional liquidity.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">IRA Eligibility</h3>
                <p className="text-gray-400 text-sm">
                  Specifically listed in IRS guidelines as acceptable for Precious Metals IRAs.
                </p>
              </div>
            </div>
          </section>

          {/* IRA Considerations */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              IRA Eligibility Considerations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Gold Krugerrand coins qualify for inclusion in a Precious Metals IRA (Self-Directed IRA). Key considerations:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Specifically listed as acceptable in IRS Publication 590</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Produced by an approved national mint (South African Mint)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Must be held by an IRS-approved custodian and depository</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Cannot be stored at home for IRA purposes</span>
              </li>
            </ul>
            <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                <strong className="text-bullion-gold">Note:</strong> This is general information, not tax or investment advice. Consult a qualified tax professional or IRA custodian for guidance specific to your situation.
              </p>
            </div>
          </section>

          {/* Premium Drivers */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Understanding Premium Drivers
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Krugerrand coins trade at a premium above the spot price of gold. Factors that influence premiums include:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Minting Costs</h3>
                <p className="text-gray-400 text-sm">
                  South African Mint production, quality control, and distribution expenses.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Dealer Margins</h3>
                <p className="text-gray-400 text-sm">
                  Wholesale and retail markups that fund dealer operations.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Supply & Demand</h3>
                <p className="text-gray-400 text-sm">
                  High Krugerrand production volumes typically result in lower premiums than scarcer coins.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Market Conditions</h3>
                <p className="text-gray-400 text-sm">
                  Economic uncertainty, inflation concerns, and safe-haven demand can increase premiums.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Product Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The Krugerrand&apos;s global recognition and liquidity support competitive spreads.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              View current Krugerrand pricing at{" "}
              <a
                href="https://www.monex.com/gold-south-african-krugerrand-price-charts/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex Price Charts
              </a>
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-bullion-gold/10">
            <p className="text-gray-400 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-gold-prices" className="btn-primary">
                View Gold Prices
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
