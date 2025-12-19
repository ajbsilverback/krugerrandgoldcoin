"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/siteConfig";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const navLinks = [
    { href: "/live-gold-prices", label: "Gold Prices" },
    { href: "/coin-specs", label: "Coin Specs" },
    { href: "/design-history", label: "Design & History" },
    { href: "/where-to-buy", label: "Where to Buy" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
  ];

  // Check if a nav link is active
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Determine header styling based on scroll state and page
  const headerBg = scrolled
    ? "bg-bullion-darker/95 backdrop-blur-md"
    : "bg-gradient-to-b from-black/40 to-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBg}`}
    >
      {/* Subtle bottom separation - gold hairline */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-30"
        }`}
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(202, 164, 58, 0.3) 20%, rgba(202, 164, 58, 0.3) 80%, transparent 100%)" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[108px]">
          {/* Brand Lockup - Text Only */}
          <Link href="/" className="group">
            <span className="text-[1.65rem] font-display font-semibold gold-text tracking-tight leading-none">
              {SITE_CONFIG.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-colors duration-200 font-medium text-[15px] tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-bullion-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm ${
                    isActive
                      ? "text-bullion-gold"
                      : scrolled
                        ? "text-gray-300 hover:text-white"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active indicator - subtle gold underline */}
                  {isActive && (
                    <span 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg, transparent 0%, var(--gold-primary) 20%, var(--gold-primary) 80%, transparent 100%)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-bullion-gold ${
              scrolled
                ? "text-gray-300 hover:text-bullion-gold hover:bg-white/5"
                : "text-white hover:text-white/80 hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - always solid background for usability */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-5 border-t border-bullion-gold/15 bg-bullion-darker/98 backdrop-blur-md -mx-4 px-4 sm:-mx-6 sm:px-6">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-2 rounded-lg transition-colors duration-200 font-medium ${
                      isActive
                        ? "text-bullion-gold bg-bullion-gold/10"
                        : "text-gray-300 hover:text-bullion-gold hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
