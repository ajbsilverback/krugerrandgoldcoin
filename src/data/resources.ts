export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding Gold Buffalo Coin Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why Gold Buffalo coins have premiums over spot, and how to evaluate costs when purchasing American Gold Buffalo coins.",
    excerpt:
      "Discover why American Gold Buffalo coins carry premiums over spot and how to maximize your gold buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "coin-comparison",
    title: "Gold Buffalo vs Gold Eagle vs Maple Leaf: Comparing Gold Coins",
    description:
      "A detailed comparison of major gold bullion coins to help you choose the right coin for your investment goals.",
    excerpt:
      "Compare American Gold Buffalo, Gold Eagle, and Canadian Maple Leaf coins across purity, premiums, and liquidity.",
    category: "Investment",
    monexLink: "https://www.monex.com/knowledge/gold-buffalo-coins-vs-american-eagle-gold-coins/",
  },
  {
    slug: "storage-options",
    title: "Storing Your Gold Buffalo Coins: Options and Best Practices",
    description:
      "Compare storage solutions for American Gold Buffalo coins from home safes to bank safe deposit boxes and professional vaults.",
    excerpt:
      "A comprehensive guide to securing your gold coin investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/gold-coins/american-gold-buffalo-coins/",
  },
  {
    slug: "purity-advantages",
    title: "The .9999 Purity Advantage: Why 24-Karat Gold Matters",
    description:
      "Understanding the significance of the Gold Buffalo's .9999 fine purity and how it compares to other gold bullion coins.",
    excerpt:
      "Learn why the American Gold Buffalo's 24-karat purity makes it unique among U.S. gold bullion coins.",
    category: "Products",
    monexLink: "https://www.monex.com/knowledge/composition-purity-1-oz-gold-buffalo-coins/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for Gold Buffalo Coins",
    description:
      "Understanding the liquidity of American Gold Buffalo coins and how to plan for buying and selling.",
    excerpt:
      "Explore the liquidity dynamics of Gold Buffalo coins and strategies for efficient transactions.",
    category: "Investment",
    monexLink: "https://www.monex.com/knowledge/investment-economics-of-gold-buffalo-coins/",
  },
  {
    slug: "market-dynamics",
    title: "Gold Market Dynamics: What Moves Gold Coin Prices",
    description:
      "Understanding the economic factors, geopolitical events, and market forces that influence gold prices.",
    excerpt:
      "Explore the key drivers behind gold price movements and what they mean for Gold Buffalo investors.",
    category: "Market",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Gold Buffalo Coins",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling Gold Buffalo coins.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your Gold Buffalo trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Gold Buffalo Coins: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on American Gold Buffalo coins.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/gold-coins/american-gold-buffalo-coins/",
  },
  {
    slug: "ira-eligibility",
    title: "Gold Buffalo IRA Eligibility: Adding Coins to Your Retirement Account",
    description:
      "Understanding how American Gold Buffalo coins qualify for Precious Metals IRAs and the requirements for IRA ownership.",
    excerpt:
      "Learn how Gold Buffalo coins meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: "https://www.monex.com/knowledge/choosing-gold-american-buffalo-coins-for-wealth-preservation/",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to Gold Buffalo Coins in Your Portfolio",
    description:
      "Strategic considerations for incorporating American Gold Buffalo coins into a diversified investment portfolio.",
    excerpt:
      "Discover how Gold Buffalo coins fit into portfolio diversification strategies for serious investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Gold Buffalo Coins: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing American Gold Buffalo coins.",
    excerpt:
      "Learn what to expect when purchasing your first Gold Buffalo coin, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/american-buffalo-gold-coins-for-sale/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling Gold Buffalo Coins",
    description:
      "A high-level overview of tax considerations related to physical gold coin ownership, including capital gains and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical gold investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/gold-coins/american-gold-buffalo-coins/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
