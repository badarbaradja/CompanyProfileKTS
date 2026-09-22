"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Innovation", href: "/innovation" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile nav on route change (stored during render to avoid effect cascades)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--color-canvas)]/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-[0_1px_12px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <div
          className="container-kts h-full flex items-center justify-between gap-8"
        >
          {/* Wordmark */}
          <Link
            href="/"
            aria-label="PT Kappa Technology Solution — Home"
            className="flex items-center gap-2.5 shrink-0 group"
            id="navbar-logo"
          >
            <KTSMark />
            <span
              className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200"
              aria-hidden="true"
            >
              KTS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                    active
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-light)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              id="navbar-cta"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
            >
              Explore Products
            </Link>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md hover:bg-[var(--color-border)] transition-colors duration-150"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span className="w-5 h-px bg-[var(--color-text)] block mb-1.5 transition-all" />
              <span className="w-5 h-px bg-[var(--color-text)] block mb-1.5 transition-all" />
              <span className="w-3.5 h-px bg-[var(--color-text)] block transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't hide under fixed nav */}
      <div style={{ height: "var(--nav-height)" }} aria-hidden="true" />

      <MobileNav
        id="mobile-nav"
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}

/** KTS geometric monogram mark */
function KTSMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Square base */}
      <rect width="28" height="28" rx="6" fill="var(--color-accent)" />
      {/* K letterform */}
      <path
        d="M8 7.5V20.5M8 14H15.5L20 7.5M15.5 14L20 20.5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
