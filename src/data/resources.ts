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
    title: "Understanding Gold Krugerrand Coin Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why Krugerrand coins have premiums over spot, and how to evaluate costs when purchasing Gold Krugerrand coins.",
    excerpt:
      "Discover why Gold Krugerrand coins carry premiums over spot and how to maximize your gold buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/knowledge/price-value-trends-gold-krugerrand-coins/",
  },
  {
    slug: "coin-comparison",
    title: "Krugerrand vs Gold Eagle vs Maple Leaf: Comparing Gold Coins",
    description:
      "A detailed comparison of major gold bullion coins to help you choose the right coin for your investment goals.",
    excerpt:
      "Compare Gold Krugerrand, Gold Eagle, and Canadian Maple Leaf coins across purity, premiums, and liquidity.",
    category: "Investment",
    monexLink: "https://www.monex.com/knowledge/gold-krugerrands-vs-top-gold-coins/",
  },
  {
    slug: "storage-options",
    title: "Storing Your Krugerrand Coins: Options and Best Practices",
    description:
      "Compare storage solutions for Gold Krugerrand coins from home safes to bank safe deposit boxes and professional vaults.",
    excerpt:
      "A comprehensive guide to securing your gold coin investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/gold-coins/gold-krugerrands/",
  },
  {
    slug: "purity-advantages",
    title: "The 22-Karat Advantage: Why the Krugerrand's Alloy Matters",
    description:
      "Understanding the significance of the Krugerrand's .9167 fine purity and copper alloy, and how it compares to pure gold coins.",
    excerpt:
      "Learn why the Krugerrand's 22-karat composition provides durability advantages for investors.",
    category: "Products",
    monexLink: "https://www.monex.com/knowledge/gold-krugerrand-coins-purity-history-enduring-value/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for Gold Krugerrand Coins",
    description:
      "Understanding the liquidity of Gold Krugerrand coins and how to plan for buying and selling.",
    excerpt:
      "Explore the liquidity dynamics of Krugerrand coins and strategies for efficient transactions.",
    category: "Investment",
    monexLink: "https://www.monex.com/gold-south-african-krugerrands-for-sale/",
  },
  {
    slug: "market-dynamics",
    title: "Gold Market Dynamics: What Moves Gold Coin Prices",
    description:
      "Understanding the economic factors, geopolitical events, and market forces that influence gold prices.",
    excerpt:
      "Explore the key drivers behind gold price movements and what they mean for Krugerrand investors.",
    category: "Market",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Krugerrand Coins",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling Krugerrand coins.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your Krugerrand trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-south-african-krugerrand-price-charts/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Krugerrand Coins: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on Gold Krugerrand coins.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge/gold-krugerrand-coins-purity-history-enduring-value/",
  },
  {
    slug: "ira-eligibility",
    title: "Krugerrand IRA Eligibility: Adding Coins to Your Retirement Account",
    description:
      "Understanding how Gold Krugerrand coins qualify for Precious Metals IRAs and the requirements for IRA ownership.",
    excerpt:
      "Learn how Krugerrand coins meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to Krugerrand Coins in Your Portfolio",
    description:
      "Strategic considerations for incorporating Gold Krugerrand coins into a diversified investment portfolio.",
    excerpt:
      "Discover how Krugerrand coins fit into portfolio diversification strategies for serious investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Krugerrand Coins: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing Gold Krugerrand coins.",
    excerpt:
      "Learn what to expect when purchasing your first Krugerrand coin, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/gold-south-african-krugerrands-for-sale/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling Krugerrand Coins",
    description:
      "A high-level overview of tax considerations related to physical gold coin ownership, including capital gains and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical gold investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/knowledge/krugerrand-history-south-african-gold-coin/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
