import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$2,700" (ask price rounded to $10)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$2,600-$2,800" (ask +/- 5% band)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$2,700+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$2,700+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the Gold Krugerrand coin?",
    answer: "The Gold Krugerrand is the world's first modern gold bullion coin, minted by the South African Mint since 1967. It contains exactly 1 troy ounce of pure gold alloyed with copper to achieve .9167 fine (22-karat) purity, making it more durable than pure gold coins. The coin features Paul Kruger on the obverse and a Springbok antelope on the reverse.",
  },
  {
    question: "Why does the Krugerrand use 22-karat gold instead of pure gold?",
    answer: "The Krugerrand uses a copper alloy (.9167 fine, 22-karat) for durability. Pure 24-karat gold is soft and scratches easily. The copper alloy makes Krugerrands more resistant to wear while still containing exactly 1 troy ounce of pure gold. This same alloy approach is used by the American Gold Eagle.",
  },
  {
    question: "How much does a Gold Krugerrand cost?",
    answer: "At current gold prices, a Gold Krugerrand costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. The price consists of the gold spot value plus a premium typically ranging from 2-4% for standard bullion coins.",
  },
  {
    question: "Are Krugerrand coins easy to sell?",
    answer: "Yes, Gold Krugerrand coins are extremely liquid. As the world's most recognized gold bullion coin with over 50 million ounces minted since 1967, they're accepted by dealers everywhere. Most established dealers will buy Krugerrand coins at competitive prices, typically within 2-3% of spot.",
  },
  {
    question: "Can I hold Krugerrand coins in my IRA?",
    answer: "Yes, Gold Krugerrand coins are specifically listed in IRS guidelines as approved for Precious Metals IRAs. They meet all eligibility requirements for tax-advantaged retirement accounts. Coins must be held by an approved custodian in an approved depository while in your IRA.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and Krugerrand prices?",
    answer: "The Krugerrand price equals the gold spot price (per troy ounce) plus a premium typically ranging from 2-4%. The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This premium covers South African Mint production, distribution, and dealer margins.",
  },
  {
    question: "Why do Krugerrand premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Some dealers may have better sourcing relationships. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my Krugerrand investment?",
    answer: "The bid-ask spread on Krugerrand coins is typically 2-4% for standard bullion coins. With a {{CAPITAL_REQUIREMENT}} coin, this represents about $50-$100. Your gold must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do Krugerrand coins have different premiums than Gold Eagles?",
    answer: "Krugerrands often have slightly lower premiums than Gold Eagles (2-4% vs 3-5%) due to higher production volumes. Both are 22-karat coins with the same gold content. The premium difference is modest, and availability can affect pricing at any given time.",
  },
  {
    question: "When is the best time to buy Krugerrand coins based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (2-4% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 8-10% or higher. Patient buying during normal markets secures better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your Krugerrand resources cover?",
    answer: "Our educational library covers all aspects of Krugerrand investing including: understanding premiums, coin comparisons (Krugerrand vs Eagle vs Maple Leaf), storage options, the 22-karat alloy advantage, IRA eligibility, market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "How does the Krugerrand compare to the Gold Eagle?",
    answer: "Both are excellent 22-karat gold coins. The Krugerrand (1967) predates the Eagle (1986) and has higher production volumes, often resulting in lower premiums. Both contain 1 oz of gold, use similar copper alloys for durability, and are IRA-eligible. The Eagle has a U.S. face value while the Krugerrand does not.",
  },
  {
    question: "Is the Krugerrand better than other gold coins?",
    answer: "No coin is universally better; each serves different investor needs. The Krugerrand is ideal for investors prioritizing liquidity, lower premiums, and proven track record. The Maple Leaf offers higher purity (.9999). The Eagle provides U.S. legal tender status. Choose based on your priorities.",
  },
  {
    question: "What should I look for when buying my first Krugerrand?",
    answer: "For first-time Krugerrand buyers: purchase from reputable dealers, verify the dealer's credentials, compare premiums across multiple sources, ensure full documentation, and plan your storage solution before purchasing. The Krugerrand's global recognition means authentication is straightforward with established dealers.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a Gold Krugerrand?",
      answer: "Typical premiums for Gold Krugerrand coins range from 2-4% over spot under normal market conditions. This is often lower than Gold Eagles and comparable to Canadian Maple Leafs. During supply constraints, premiums can temporarily rise to 8-10% or more.",
    },
    {
      question: "Why do Krugerrand premiums exist?",
      answer: "Premiums cover South African Mint minting costs, distribution margins, dealer margins, and reflect the value of the coin's status as the world's most recognized gold bullion coin. Government-minted coins command premiums for their guaranteed authenticity and worldwide recognition.",
    },
    {
      question: "Do I recover the premium when I sell my Krugerrand?",
      answer: "You typically don't recover the full premium on resale, but Krugerrand coins have competitive bid-ask spreads (2-4%) due to their exceptional liquidity. Their strong global recognition supports good buyback prices. The combination of low purchase premiums and competitive spreads makes Krugerrands economically efficient.",
    },
  ],
  "coin-comparison": [
    {
      question: "What's the main difference between Krugerrand and Gold Eagle?",
      answer: "Both are 22-karat (.9167 fine) gold coins containing 1 troy ounce of pure gold. The main differences: Krugerrands have been minted longer (1967 vs 1986), often have lower premiums, and have no face value. Eagles have a $50 face value and U.S. legal tender status. Both are equally durable.",
    },
    {
      question: "Which gold coin has the lowest premium?",
      answer: "Among major gold bullion coins, Krugerrands typically have among the lowest premiums (2-4%) due to high production volumes. Canadian Maple Leafs are similar. Gold Eagles typically carry slightly higher premiums (3-5%). Premium differences are modest among major government coins.",
    },
    {
      question: "Are all these coins IRA eligible?",
      answer: "Yes, Gold Krugerrand, Gold Eagle, and Canadian Maple Leaf are all IRS-approved for Precious Metals IRAs. Krugerrands are specifically listed in IRS guidelines. All are government-minted coins meeting eligibility requirements.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for Krugerrand coins?",
      answer: "Krugerrand coins are practical for multiple storage options. A quality home safe works well for modest holdings. Bank safe deposit boxes provide institutional security. For larger holdings or IRA coins, professional vault storage with approved depositories is available.",
    },
    {
      question: "Can I store Krugerrand coins at home?",
      answer: "Yes, Krugerrand coins are well-suited for home storage. Their 22-karat alloy makes them more durable than pure gold coins. A quality fireproof safe (ideally bolted down) provides reasonable security for several coins. Consider insurance coverage for high-value holdings.",
    },
    {
      question: "Do IRA Krugerrand coins have special storage requirements?",
      answer: "Yes, IRA gold must be stored at an IRS-approved depository by an approved custodian. You cannot take personal possession of IRA gold while it remains in the account. The custodian handles storage arrangements and maintains records for IRS compliance.",
    },
  ],
  "purity-advantages": [
    {
      question: "Why is the Krugerrand 22-karat instead of 24-karat?",
      answer: "The Krugerrand's 22-karat (.9167 fine) composition includes copper alloy for durability. Pure 24-karat gold is soft and scratches easily. The alloy makes Krugerrands more resistant to wear and handling damage while containing exactly 1 troy ounce of pure gold.",
    },
    {
      question: "Is 22-karat gold less valuable than 24-karat gold?",
      answer: "No. Spot value is based on gold content, not purity. A 1 oz Krugerrand (.9167) and 1 oz Maple Leaf (.9999) both contain exactly 1 troy ounce of gold and have the same gold value. The Krugerrand simply weighs more because of its copper content.",
    },
    {
      question: "Does the alloy affect resale value?",
      answer: "No. Krugerrands are among the most liquid gold coins despite their 22-karat composition. Their global recognition ensures strong demand. The durability provided by the alloy is actually valued by many investors and dealers.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a Krugerrand coin?",
      answer: "Krugerrand coins can typically be sold within 1-2 business days through established dealers. As the world's most recognized gold bullion coin, they're instantly accepted everywhere. Same-day transactions are often possible at local coin shops with cash payment.",
    },
    {
      question: "Do Krugerrands trade as well as Gold Eagles?",
      answer: "Yes, Krugerrands have exceptional liquidity, arguably better than any other gold coin due to their longer history and higher production volumes. Both Krugerrands and Eagles have strong dealer demand, but Krugerrands' global recognition is unmatched.",
    },
    {
      question: "What documentation helps with Krugerrand resale?",
      answer: "Maintain purchase receipts showing dealer, date, and price. Coins in protective holders present better than loose coins. Documentation speeds transactions and supports pricing. Krugerrands' standardized specifications make authentication straightforward.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes gold prices to rise or fall?",
      answer: "Gold prices respond to multiple factors: interest rates (higher rates typically pressure gold), dollar strength (inverse relationship), inflation expectations (gold as hedge), geopolitical uncertainty (safe haven demand), central bank buying/selling, and investment flows. No single factor dominates.",
    },
    {
      question: "How do Federal Reserve decisions affect Krugerrand values?",
      answer: "Fed policy significantly influences gold through interest rates and inflation expectations. Rate hikes increase gold's opportunity cost, typically pressuring prices. Rate cuts or quantitative easing tend to support gold. Krugerrand values move with spot prices regardless of coin type.",
    },
    {
      question: "Do Krugerrand premiums change with market conditions?",
      answer: "Yes, premiums fluctuate with demand. During market crises or uncertainty, demand for physical gold often spikes, pushing premiums to 8-10% or higher. During calm markets, premiums settle to normal 2-4% levels. Patient buyers secure better premiums.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for Krugerrand coins?",
      answer: "Under normal market conditions, spreads of 2-4% for Krugerrand coins represent competitive pricing. This is comparable to other major government bullion coins. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a Krugerrand?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 3% over spot and expect to receive 2% below spot when selling, you need 5% gold appreciation to break even. On a {{CAPITAL_REQUIREMENT}} Krugerrand, that's roughly $130-$150 in gold price movement.",
    },
    {
      question: "Do spreads vary by coin type?",
      answer: "Spreads are similar among major government bullion coins (Krugerrand, Eagle, Maple Leaf). Krugerrands often have slightly tighter spreads due to higher recognition. Lesser-known coins or private mint products may face wider spreads.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a Krugerrand coin is authentic?",
      answer: "Key verification methods: confirm correct weight (1.0909 oz or 33.93g total), verify diameter (32.77mm) and thickness (2.84mm), check design details against known specimens, note the distinctive orange-gold color from copper alloy. Purchase from reputable dealers for best assurance.",
    },
    {
      question: "What security features do Krugerrand coins have?",
      answer: "Krugerrand coins include precise specifications, detailed design elements (Paul Kruger portrait and Springbok are intricately detailed), consistent weight/dimensions, and distinctive color. South African Mint quality control ensures consistency across all coins. The reeded edge has 160 serrations.",
    },
    {
      question: "Should I have Krugerrand coins professionally authenticated?",
      answer: "For purchases from reputable primary dealers, authentication is typically unnecessary because dealers stake their reputation on authenticity. For secondary market purchases, estate finds, or coins without clear provenance, professional authentication provides peace of mind.",
    },
  ],
  "ira-eligibility": [
    {
      question: "Why are Krugerrand coins IRA-eligible?",
      answer: "Krugerrands are specifically listed in IRS guidelines as acceptable for Precious Metals IRAs. They're produced by a recognized national mint (South African Mint) and have a long track record. This explicit listing means there's no question about their eligibility.",
    },
    {
      question: "Can I take physical possession of my IRA Krugerrands?",
      answer: "Not while in the IRA. IRS rules require IRA precious metals to be held by an approved custodian at an approved depository. Taking possession triggers a distribution with tax consequences. When you take a distribution, you can receive the physical coins.",
    },
    {
      question: "What are the costs of holding Krugerrands in an IRA?",
      answer: "IRA costs include: custodian setup fees ($50-$300), annual custodian fees ($75-$300), storage fees ($100-$300/year), and any transaction fees. These costs should be weighed against the tax advantages of IRA ownership.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in gold coins?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. The specific allocation depends on your risk tolerance, investment horizon, and overall financial situation. Krugerrands are appropriate for any gold allocation.",
    },
    {
      question: "Should I buy Krugerrands all at once or over time?",
      answer: "Both approaches have merit. Purchasing multiple coins at once may secure better per-coin pricing. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple transaction costs. Your approach should align with your investment timeline.",
    },
    {
      question: "How do Krugerrand coins fit with other gold investments?",
      answer: "Krugerrands and gold ETFs serve different purposes. Physical coins provide direct ownership with no counterparty risk. ETFs offer liquidity and easy trading but represent claims on gold held by third parties. Many investors use both for different purposes.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a Krugerrand coin?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment, and receiving insured delivery. The process usually spans 3-7 business days depending on payment method.",
    },
    {
      question: "What payment methods are accepted for Krugerrand purchases?",
      answer: "Wire transfer is common for precious metals transactions. Many dealers also accept credit cards (often with a fee), personal checks (with clearing periods), and ACH transfers. Some dealers accept cryptocurrency. Credit cards often work for single-coin purchases.",
    },
    {
      question: "Why do Krugerrand prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Some dealers have better wholesale access than others. Always compare prices from multiple sources. Krugerrands' high liquidity means pricing should be competitive.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical gold taxed when sold?",
      answer: "Physical gold is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates and rules depend on holding period, income level, and current tax legislation. Consult a tax professional for your situation.",
    },
    {
      question: "Do I pay sales tax when buying a Krugerrand coin?",
      answer: "Sales tax treatment varies significantly by state. Many states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules affects your total cost.",
    },
    {
      question: "What are the tax advantages of holding Krugerrands in an IRA?",
      answer: "IRA ownership provides tax-advantaged treatment: Traditional IRA contributions may be tax-deductible with taxes deferred until distribution; Roth IRA growth and qualified distributions are tax-free. However, IRA ownership involves custodian fees and prevents personal possession.",
    },
  ],
};
