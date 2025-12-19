import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gold Buffalo Design & History | James Earle Fraser's Iconic Design",
  description:
    "Explore the history and design of the American Gold Buffalo coin: James Earle Fraser's iconic 1913 Buffalo Nickel design, the Native American portrait, and what the design signals to gold investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Gold Buffalo Design & History | James Earle Fraser's Iconic Design",
    description:
      "The story behind the American Gold Buffalo: James Earle Fraser's 1913 design, cultural significance, and what the iconic imagery means for modern gold investors.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gold Buffalo Design & History",
    description:
      "The story behind America's purest gold coin: James Earle Fraser's iconic 1913 design brought to 24-karat gold.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "American Gold Buffalo Design & History",
    description:
      "The history and design origins of the American Gold Buffalo coin, featuring James Earle Fraser's iconic 1913 Buffalo Nickel artwork.",
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
              The story behind America&apos;s most iconic gold coin, from the 1913 Buffalo Nickel to the modern .9999 fine bullion program.
            </p>
          </div>

          {/* James Earle Fraser Section - Editorial Pairing: Image Left, Text Right */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Image Column */}
              <div className="md:col-span-4 flex justify-center items-center">
                <div className="relative w-full max-w-[240px] aspect-[3/4]">
                  <Image
                    src="/James_Earle_Fraser.jpg"
                    alt="James Earle Fraser, sculptor and coin designer"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 240px, 240px"
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className="md:col-span-8">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  James Earle Fraser: The Artist Behind the Design
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  James Earle Fraser (1876–1953) was one of America&apos;s most celebrated sculptors. Born in Winona, Minnesota, Fraser grew up in the Dakota Territory during the final years of the American frontier, an experience that profoundly influenced his artistic vision.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Fraser studied at the{" "}
                  <a
                    href="https://www.artic.edu/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-bullion-gold hover:underline"
                  >
                    Art Institute of Chicago
                  </a>{" "}
                  and the{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/%C3%89cole_des_Beaux-Arts"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-bullion-gold hover:underline"
                  >
                    École des Beaux-Arts
                  </a>{" "}
                  in Paris. He became known for monumental works including &ldquo;End of the Trail,&rdquo; a poignant sculpture depicting a weary Native American on horseback that became one of the most reproduced images in American art.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  In 1911, the U.S. Mint commissioned Fraser to design a new five-cent piece. The result, the Buffalo Nickel (also known as the Indian Head Nickel), entered circulation in 1913 and became one of the most beloved coin designs in American numismatic history.
                </p>
              </div>
            </div>
          </section>

          {/* Obverse Design - Editorial Pairing: Text Left, Image Right */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Text Column */}
              <div className="md:col-span-7 order-2 md:order-1">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Obverse: The Native American Portrait
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The obverse (front) of the Gold Buffalo features a composite portrait of a Native American in profile, facing right. Fraser stated that he used three Native American models as inspiration:
                </p>
                <ul className="space-y-3 text-gray-300 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Iron Tail</strong>, an Oglala Lakota chief who participated in Buffalo Bill&apos;s Wild West show</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Two Moons</strong>, a Northern Cheyenne chief who fought at the Battle of Little Bighorn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">John Big Tree</strong>, an Onondaga/Seneca actor (though some historians debate his involvement)</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  The portrait captures a dignified, timeless quality that Fraser intended as a tribute to indigenous peoples. The word &ldquo;LIBERTY&rdquo; appears above the portrait, with the year of minting below.
                </p>
              </div>
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
                <div className="relative w-full max-w-[320px] aspect-square">
                  <Image
                    src="/american-gold-buffalo-obverse.png"
                    alt="American Gold Buffalo obverse"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Reverse Design - Editorial Pairing: Image Left, Text Right */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[320px] aspect-square">
                  <Image
                    src="/american-gold-buffalo-reverse.png"
                    alt="American Gold Buffalo reverse"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Reverse: Black Diamond the Buffalo
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The reverse (back) features an American bison standing on a mound of earth. Fraser reportedly used &ldquo;Black Diamond,&rdquo; a bison residing at the{" "}
                  <a
                    href="https://centralparkzoo.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-bullion-gold hover:underline"
                  >
                    Central Park Zoo
                  </a>{" "}
                  in New York City, as his primary model.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The bison, often called a buffalo in American vernacular, represents the American frontier and the natural heritage of the Great Plains. The animal stands in a powerful, grounded stance that conveys strength and permanence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Inscriptions include &ldquo;UNITED STATES OF AMERICA,&rdquo; &ldquo;E PLURIBUS UNUM,&rdquo; &ldquo;IN GOD WE TRUST,&rdquo; and the face value of &ldquo;$50.&rdquo; The purity &ldquo;.9999 FINE GOLD&rdquo; and weight &ldquo;1 OZ.&rdquo; also appear on the reverse.
                </p>
              </div>
            </div>
          </section>

          {/* Historical Context */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Cultural &amp; Historical Backdrop
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fraser created the original Buffalo Nickel design during a period of reflection on America&apos;s westward expansion. By the early 1900s, the frontier era had ended, Native American populations had been decimated, and the American bison had been brought to the brink of extinction.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The design was Fraser&apos;s deliberate tribute to a vanishing America. He later wrote: &ldquo;My purpose was to create a coin which would be truly American, one that could not be confused with the coinage of any other country.&rdquo;
            </p>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <p className="text-gray-300 italic">
                &ldquo;I did not intend the Indian to represent any one individual, but rather a type that I hoped embodied the genuine American character of the original Americans.&rdquo;
              </p>
              <p className="text-gray-500 text-sm mt-2">— James Earle Fraser</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The Buffalo Nickel circulated from 1913 to 1938, and its imagery became deeply embedded in American culture. When the U.S. Mint sought a design for its first 24-karat gold bullion coin in 2006, Fraser&apos;s century-old artwork was the natural choice.
            </p>
          </section>

          {/* Modern Bullion Program */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              The Modern Bullion Program
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The American Gold Buffalo was authorized by the Presidential $1 Coin Act of 2005 and first minted in 2006. It was created to compete with other .9999 fine gold coins, particularly the Canadian Gold Maple Leaf.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">2006 Launch</h3>
                <p className="text-gray-400 text-sm">
                  First .9999 fine gold coin produced by the U.S. Mint, meeting demand for a pure 24-karat American gold coin.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Bullion &amp; Proof</h3>
                <p className="text-gray-400 text-sm">
                  Available in both bullion (investment) and proof (collector) versions, each year featuring the classic Fraser design.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">West Point Mint</h3>
                <p className="text-gray-400 text-sm">
                  Gold Buffalos are struck at the West Point Mint in New York, one of the U.S. Mint&apos;s four production facilities.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Ongoing Production</h3>
                <p className="text-gray-400 text-sm">
                  Minted annually since 2006, the Gold Buffalo has become a cornerstone of the U.S. Mint&apos;s bullion program.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Learn more about the Gold Buffalo&apos;s history at{" "}
              <a
                href="https://www.monex.com/knowledge/historical-backdrop-gold-buffalo-coin-iconic-design/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex Knowledge Base
              </a>
            </p>
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
                <h3 className="text-white font-semibold">American Heritage</h3>
                <p className="text-gray-400 text-sm">
                  The iconic imagery connects to over a century of American numismatic tradition. Investors recognize the design instantly, a factor that supports liquidity and trust.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Government Authority</h3>
                <p className="text-gray-400 text-sm">
                  The design&apos;s official U.S. Mint provenance signals authenticity and weight/purity guarantees backed by the federal government.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Timeless Value</h3>
                <p className="text-gray-400 text-sm">
                  Fraser&apos;s 1913 design has endured for over a century. Its continued use on modern bullion suggests permanence, a quality investors seek in store-of-value assets.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Global Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The Buffalo design is recognized by dealers and investors worldwide, facilitating transactions across borders and markets.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Collector Crossover</h3>
                <p className="text-gray-400 text-sm">
                  The design&apos;s artistic merit appeals to both bullion investors and numismatists, potentially broadening the buyer pool when selling.
                </p>
              </div>
            </div>
          </section>

          {/* Design Comparison */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Buffalo vs. Eagle: Design Philosophy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The U.S. Mint produces two gold bullion coins with distinct design philosophies:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Buffalo</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Historical 1913 design by James Earle Fraser</li>
                  <li>• Native American and bison imagery</li>
                  <li>• Celebrates American frontier heritage</li>
                  <li>• Artistic, collectible aesthetic</li>
                  <li>• Single consistent design since 2006</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Eagle</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Augustus Saint-Gaudens&apos; 1907 Liberty design</li>
                  <li>• Lady Liberty and eagle family imagery</li>
                  <li>• Symbolizes freedom and national ideals</li>
                  <li>• Classic patriotic aesthetic</li>
                  <li>• Reverse redesigned in 2021</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Compare Buffalo and Eagle coins in detail at{" "}
              <a
                href="https://www.monex.com/knowledge/gold-buffalo-coins-vs-american-eagle-gold-coins/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex: Buffalo vs. Eagle
              </a>
            </p>
          </section>

          {/* Timeline */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Key Dates in Buffalo Design History
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1876</div>
                <p className="text-gray-300">James Earle Fraser born in Winona, Minnesota</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1911</div>
                <p className="text-gray-300">Fraser commissioned to design new five-cent coin</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1913</div>
                <p className="text-gray-300">Buffalo Nickel enters circulation</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1938</div>
                <p className="text-gray-300">Buffalo Nickel production ends (replaced by Jefferson Nickel)</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1953</div>
                <p className="text-gray-300">James Earle Fraser passes away</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2005</div>
                <p className="text-gray-300">Presidential $1 Coin Act authorizes Gold Buffalo program</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2006</div>
                <p className="text-gray-300">First American Gold Buffalo coins minted</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">Today</div>
                <p className="text-gray-300">Gold Buffalo remains U.S. Mint&apos;s premier 24-karat bullion coin</p>
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
