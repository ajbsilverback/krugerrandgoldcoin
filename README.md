# AmericanBuffaloGoldCoin.com

An educational microsite about 1 oz American Gold Buffalo coins built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Comprehensive overview of American Gold Buffalo coins, including benefits, who buys them, key specifications, and coin comparisons
- **Gold Prices Page**: Live gold pricing with AB (American Buffalo) and GBXSPOT data, plus educational content about premiums
- **Coin Specs Page**: Technical specifications, purity details, IRA eligibility, and premium drivers with FAQ
- **Design & History Page**: James Earle Fraser's design origins, obverse/reverse themes, and cultural backdrop
- **Resources**: 12 in-depth educational articles covering:
  - Understanding Gold Buffalo Premiums
  - Coin Comparison (Buffalo vs Eagle vs Maple Leaf)
  - Storage Options for Gold Coins
  - Mint & Design Differences
  - Liquidity Considerations
  - Market Dynamics
  - Bid-Ask Spreads
  - Authentication Guide
  - Institutional vs Retail Markets
  - Portfolio Allocation
  - First-Time Buyer's Guide
  - Tax Considerations
- **Where to Buy**: Independent dealer guide with multiple sources and neutrality disclaimer
- **About**: Site mission and editorial independence

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── live-gold-prices/
│   │   └── page.tsx        # Gold prices page
│   ├── coin-specs/
│   │   └── page.tsx        # Technical specifications
│   ├── design-history/
│   │   └── page.tsx        # Design origins & history
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── where-to-buy/
│   │   └── page.tsx        # Buying guide
│   └── resources/
│       ├── page.tsx        # Resources index
│       └── [slug]/
│           └── page.tsx    # Dynamic resource pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LiveGoldSpotCard.tsx        # American Buffalo price card
│   ├── LiveGoldSpotIndexCard.tsx  # Gold spot index card
│   └── MonexWidgets.tsx
├── lib/
│   ├── siteConfig.ts       # ⭐ SINGLE SOURCE OF TRUTH
│   └── monexSpot.ts        # Pricing API utilities
└── data/
    ├── resources.ts        # Resource metadata
    ├── qa-content.ts       # Q&A content
    └── article-content.ts  # Article content
```

## API Configuration

This site uses the Monex API for pricing data:

- **Product Symbol**: AB (American Gold Buffalo)
- **Spot Symbol**: GBXSPOT (Gold spot index)

API endpoints:
- `https://api.monex.com/api/v2/Metals/spot/summary?metals=AB`
- `https://api.monex.com/api/v2/Metals/spot/summary?metals=GBXSPOT`

Prices are fetched once per page load (no polling/intervals).

## SEO Features

- Schema.org markup on all pages (WebPage, Product, Article, FAQPage)
- OpenGraph and Twitter meta tags
- Semantic HTML structure
- Canonical URLs
- Robots.txt and sitemap.xml
- llms.txt for AI crawlers

## Deployment

This site is configured for deployment on Vercel.

## License

All rights reserved.
