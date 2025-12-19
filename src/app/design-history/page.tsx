import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Krugerrand Design & History | The World's First Gold Bullion Coin",
  description:
    "Explore the history and design of the Gold Krugerrand coin: Paul Kruger portrait, the Springbok antelope, and how it became the world's most recognized gold coin since 1967.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Krugerrand Design & History | The World's First Gold Bullion Coin",
    description:
      "The story behind the Gold Krugerrand: Paul Kruger's legacy, the Springbok symbol, and how this 1967 coin revolutionized gold investing.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Krugerrand Design & History",
    description:
      "The story behind the world's first and most traded gold bullion coin, minted since 1967.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gold Krugerrand Design & History",
    description:
      "The history and design origins of the Gold Krugerrand coin, featuring Paul Kruger and the Springbok antelope.",
    url: `${SITE_CONFIG.domain}/design-history`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Design <span className="gold-text">&amp; History</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The story behind the world&apos;s first modern gold bullion coin, from its 1967 debut to its status as the most traded gold coin in history.
            </p>
          </div>

          {/* The Birth of the Bullion Coin */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              The Birth of the Modern Bullion Coin
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In 1967, the South African Mint created something revolutionary: the first gold coin designed specifically for investment rather than circulation. The Krugerrand was created to market South African gold to private investors worldwide.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before the Krugerrand, buying gold meant dealing with bars that required assaying, or collecting numismatic coins with premiums based on rarity. The Krugerrand changed everything by offering a simple proposition: one coin equals one ounce of gold.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The concept was so successful that it spawned an entire industry. The Canadian Maple Leaf (1979), American Gold Eagle (1986), and many others followed the template the Krugerrand established.
            </p>
          </section>

          {/* Coin Design Cards - Consistent Layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Obverse Card */}
            <div className="card p-6 flex flex-col bg-bullion-gold/5 border-bullion-gold/30">
              <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                <Image
                  src="/gold-krugerrand-obverse.png"
                  alt="Gold Krugerrand obverse showing Paul Kruger portrait"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Obverse: Paul Kruger
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                Portrait of Paul Kruger (1825-1904), president of the South African Republic. Designed by Otto Schultz, first appearing on coinage in 1892.
              </p>
            </div>

            {/* Reverse Card */}
            <div className="card p-6 flex flex-col">
              <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                <Image
                  src="/gold-krugerrand-reverse.png"
                  alt="Gold Krugerrand reverse showing Springbok antelope"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Reverse: Springbok
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                Springbok antelope in mid-stride, designed by sculptor Coert Steynberg. South Africa&apos;s national animal symbolizing natural heritage.
              </p>
            </div>

            {/* Designer Card */}
            <div className="card p-6 flex flex-col">
              <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                <Image
                  src="/Portrait_otto_schulz.jpg"
                  alt="Otto Schultz, designer of the Paul Kruger portrait"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Otto Schultz
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                German-born engraver who created the Paul Kruger portrait in 1892. Coert Steynberg designed the Springbok reverse for the 1967 launch.
              </p>
            </div>
          </div>

          {/* Detailed Design Information */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Design Details
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-bullion-gold mb-3">Obverse: Paul Kruger Portrait</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The obverse features Stephanus Johannes Paulus Kruger (1825-1904), who served as president of the South African Republic (Transvaal) from 1883 to 1900.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The coin&apos;s name combines &ldquo;Kruger&rdquo; with &ldquo;Rand,&rdquo; the South African currency unit (named after the Witwatersrand gold-bearing ridge).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-bullion-gold mb-3">Reverse: Springbok Antelope</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The reverse depicts a Springbok in mid-stride, capturing the animal&apos;s grace and energy. Steynberg was one of South Africa&apos;s most prominent sculptors.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The reverse shows the year of minting and gold content: &ldquo;FYNGOUD 1 OZ FINE GOLD&rdquo; (in Afrikaans and English).
                </p>
              </div>
            </div>
          </section>

          {/* Historical Context */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Historical Context
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Krugerrand was created during a complex period in South African history. The coin served a practical purpose: to create a legal way for private individuals worldwide to own South African gold during a time when many countries restricted private gold ownership.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              In the United States, private gold ownership was restricted from 1933 until 1974. When restrictions lifted, the Krugerrand was perfectly positioned. By 1980, Krugerrands accounted for 90% of the global gold coin market.
            </p>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <p className="text-gray-300 italic">
                &ldquo;The Krugerrand made gold ownership simple and accessible for ordinary investors around the world.&rdquo;
              </p>
              <p className="text-gray-500 text-sm mt-2">- Industry historians</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              During the apartheid era, many countries imposed sanctions that included the Krugerrand. After apartheid ended in 1994, the coin regained its international standing and remains one of the world&apos;s most popular gold coins.
            </p>
          </section>

          {/* Modern Production */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Modern Production
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Today, Krugerrands are produced by the South African Mint in partnership with Rand Refinery, which supplies the gold. The coin is available in multiple sizes: 1 oz, 1/2 oz, 1/4 oz, and 1/10 oz.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Over 50 Million Minted</h3>
                <p className="text-gray-400 text-sm">
                  Since 1967, more than 50 million ounces of gold have been minted as Krugerrands, making it the most widely held gold bullion coin.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Bullion &amp; Proof</h3>
                <p className="text-gray-400 text-sm">
                  Available in both bullion (investment) and proof (collector) finishes, with special anniversary editions since 2017.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Silver Version Added</h3>
                <p className="text-gray-400 text-sm">
                  In 2017, for the 50th anniversary, the South African Mint introduced silver Krugerrands for the first time.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Ongoing Production</h3>
                <p className="text-gray-400 text-sm">
                  The South African Mint continues annual production, maintaining the Krugerrand&apos;s availability and liquidity.
                </p>
              </div>
            </div>
          </section>

          {/* What the Design Signals */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              What the Design Signals to Investors
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For investors, the design conveys more than visual appeal:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Proven History</h3>
                <p className="text-gray-400 text-sm">
                  The unchanged design since 1967 signals stability and continuity. Investors recognize a coin that has maintained its value proposition for over 50 years.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Global Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The Paul Kruger portrait and Springbok are instantly recognizable worldwide. This recognition supports liquidity and trust in transactions.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">South African Gold Heritage</h3>
                <p className="text-gray-400 text-sm">
                  South Africa&apos;s history as a major gold producer lends credibility. The coin connects to the legendary Witwatersrand gold deposits.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Market Standard</h3>
                <p className="text-gray-400 text-sm">
                  As the original gold bullion coin, the Krugerrand established the standard others follow. Its design represents the template for the entire industry.
                </p>
              </div>
            </div>
          </section>

          {/* Design Comparison */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Krugerrand vs. Other Designs
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Different gold coins reflect different design philosophies:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Krugerrand</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Historic Paul Kruger portrait (1892 design)</li>
                  <li>• Springbok national symbol</li>
                  <li>• No face value (gold-backed legal tender)</li>
                  <li>• Distinctive orange-gold copper alloy color</li>
                  <li>• Unchanged design since 1967</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">American Gold Eagle</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Saint-Gaudens&apos; 1907 Liberty design</li>
                  <li>• Eagle family reverse imagery</li>
                  <li>• $50 face value (U.S. legal tender)</li>
                  <li>• Similar 22K alloy and color</li>
                  <li>• Reverse redesigned in 2021</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Key Dates in Krugerrand History
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1886</div>
                <p className="text-gray-300">Gold discovered on the Witwatersrand, launching South African gold mining</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1892</div>
                <p className="text-gray-300">Paul Kruger portrait first appears on South African coins</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1967</div>
                <p className="text-gray-300">First Krugerrand minted, creating the modern gold bullion coin category</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1974</div>
                <p className="text-gray-300">U.S. legalizes private gold ownership; Krugerrand sales surge</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1980</div>
                <p className="text-gray-300">Krugerrands represent 90% of global gold coin market</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1980</div>
                <p className="text-gray-300">Fractional sizes (1/2, 1/4, 1/10 oz) introduced</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1994</div>
                <p className="text-gray-300">End of apartheid restores international Krugerrand trading</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2017</div>
                <p className="text-gray-300">50th anniversary; first silver Krugerrands minted</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">Today</div>
                <p className="text-gray-300">Krugerrand remains one of the world&apos;s most popular gold coins</p>
              </div>
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-bullion-gold/10">
            <p className="text-gray-400 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources" className="btn-primary">
                Browse Resources
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
              <Link href="/coin-specs" className="btn-secondary">
                Coin Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
