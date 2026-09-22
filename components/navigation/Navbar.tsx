"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { KTSLogo } from "@/components/brand/Logo";
import { buttonClasses } from "@/components/ui/Button";
import { site } from "@/content/site";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Training", href: "/training" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shopUrl = site.contact.shopUrl;

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
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

  const solid = scrolled || mobileOpen;

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "bg-[var(--color-canvas)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_1px_20px_rgba(15,36,56,0.06)]"
            : "bg-transparent"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="container-kts h-full flex items-center justify-between gap-8">
          {/* Wordmark */}
          <Link
            href="/"
            aria-label="PT Kappa Technology Solution, home"
            className="flex items-center gap-2.5 shrink-0 group"
            id="navbar-logo"
          >
            <KTSLogo variant="mark" priority className="h-8" />
            <span
              className="font-display text-[1.375rem] font-medium tracking-[0.01em] text-[var(--color-text)]"
              aria-hidden="true"
            >
              KTS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150",
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
            {shopUrl && (
              <a
                href={shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-cta"
                className={cn(buttonClasses("primary", "sm"), "hidden lg:inline-flex")}
              >
                Shop online
              </a>
            )}

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-[var(--color-border)] transition-colors duration-150"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span className="w-5 h-px bg-[var(--color-text)] block mb-1.5" />
              <span className="w-5 h-px bg-[var(--color-text)] block mb-1.5" />
              <span className="w-3.5 h-px bg-[var(--color-text)] block" />
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
        shopUrl={shopUrl}
      />
    </>
  );
}
