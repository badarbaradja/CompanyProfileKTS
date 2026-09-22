"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonClasses } from "@/components/ui/Button";

interface MobileNavProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  pathname: string;
  shopUrl?: string;
}

export function MobileNav({
  id,
  isOpen,
  onClose,
  links,
  pathname,
  shopUrl,
}: MobileNavProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Trap focus inside drawer when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus the close button on open
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape; trap Tab/Shift+Tab within the drawer's focusable elements
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !drawerRef.current) return;

      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-[var(--color-text)]/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer panel */}
      <div
        id={id}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[min(340px,90vw)] bg-[var(--color-surface)] shadow-2xl flex flex-col transition-transform duration-300 ease-[var(--ease-out)] lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-border)]">
          <Link
            href="/"
            onClick={onClose}
            className="font-display text-lg font-medium text-[var(--color-text)]"
          >
            KTS
          </Link>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            id="mobile-nav-close"
            aria-label="Close navigation menu"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors duration-150"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-1" role="list">
            {links.map((link) => {
              const active =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors duration-150",
                      active
                        ? "text-[var(--color-accent)] bg-[var(--color-accent-light)]"
                        : "text-[var(--color-text)] hover:bg-[var(--color-border)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA at bottom */}
        <div className="px-4 pb-8 pt-4 border-t border-[var(--color-border)]">
          {shopUrl && (
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              id="mobile-nav-cta"
              className={cn(buttonClasses("primary", "md"), "w-full")}
            >
              Online Shop
            </a>
          )}
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-2 flex items-center justify-center w-full px-4 py-3 rounded-full text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors duration-150"
          >
            Contact PT KTS
          </Link>
        </div>
      </div>
    </>
  );
}
