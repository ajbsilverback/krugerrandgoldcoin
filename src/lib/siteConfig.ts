/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for AmericanBuffaloGoldCoin.com
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * GUARDRAILS - Do Not Modify Without Intentional Review
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROTECTED ELEMENTS:
 * - Pricing symbols (GBXSPOT vs AB)
 * - Monex API endpoints
 * - Monex chart embed script
 * - Navigation IA
 * 
 * PRICING RULES:
 * - GBXSPOT: live gold spot price per troy ounce (market reference ONLY)
 * - AB: American Buffalo Gold Coin product pricing (product cards + charts ONLY)
 * - Do NOT interchange these symbols
 * 
 * DEPLOYMENT:
 * - main branch is protected
 * - No force-pushes
 * - Vercel auto-deploys from main only
 * 
 * CONTENT:
 * - This site is strictly about American Gold Buffalo coins
 * - Focus on: minting, legal tender status, purity (.9999 fine), premiums, 
 *   liquidity, IRA eligibility, obverse/reverse designs
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.americanbuffalogoldcoin.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.americanbuffalogoldcoin.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "American Buffalo Gold Coins",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "American Gold Buffalo coins",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "gold",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "coins",
  
  /** Size or series identifier */
  sizeOrSeries: "1 oz",

  /** Troy ounce equivalent */
  troyOunces: 1,

  // ============================================================
  // MONEX API SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * AB = American Buffalo Gold Coin (product cards + charts ONLY)
   */
  productSymbol: "AB",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price)
   * GBXSPOT = Gold Spot Index (market reference ONLY)
   */
  spotSymbol: "GBXSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "investors seeking U.S. Mint legal tender gold bullion with .9999 fine purity and strong liquidity",

  /** Array of relevant Monex.com links for citations */
  monexLinks: [
    "https://www.monex.com/american-buffalo-gold-coins-for-sale/",
    "https://www.monex.com/gold-american-buffalo-price-charts/",
    "https://www.monex.com/gold-prices/",
    "https://www.monex.com/investing-in-gold/",
    "https://www.monex.com/knowledge-base/gold-investing/gold-coins/american-gold-buffalo-coins/",
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/**
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}
