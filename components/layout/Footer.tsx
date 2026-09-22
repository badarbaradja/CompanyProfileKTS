import Link from "next/link";
import { KTSLogo } from "@/components/brand/Logo";
import { Pending } from "@/components/ui/Pending";
import { site } from "@/content/site";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Training", href: "/training" },
  ],
  Connect: [
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
    {
      label: "Instagram",
      href: site.contact.instagram,
      external: true,
    },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hasContact = site.contact.whatsapp || site.contact.email || site.contact.address;

  return (
    <footer
      role="contentinfo"
      className="bg-[var(--color-dark)] text-[var(--color-canvas)] pt-16 pb-8"
    >
      <div className="container-kts">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-4"
              aria-label="PT Kappa Technology Solution — Home"
            >
              <KTSLogo variant="mark" className="h-7" />
              <span className="font-display text-xl font-medium text-[var(--color-canvas)]">
                KTS
              </span>
            </Link>
            <p className="text-sm text-[var(--color-dark-muted)] max-w-xs leading-relaxed mt-2">
              {site.description}
            </p>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PT KTS on Instagram (opens in new tab)"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[var(--color-dark-muted)] hover:text-[var(--color-canvas)] transition-colors duration-150"
            >
              <InstagramIcon />
              {site.contact.instagramHandle}
            </a>

            {!hasContact && (
              <Pending
                label="Official contact details (WhatsApp, email, address)"
                variant="dark"
                className="mt-5 max-w-xs"
              />
            )}
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([groupName, links]) => (
            <div key={groupName}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-muted)] mb-4">
                {groupName}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-dark-muted)] hover:text-[var(--color-canvas)] transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-dark-muted)] hover:text-[var(--color-canvas)] transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                {site.contact.shopUrl && (
                  <li>
                    <a
                      href={site.contact.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-dark-muted)] hover:text-[var(--color-canvas)] transition-colors duration-150"
                    >
                      Online Shop
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-dark-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-dark-muted)]">
            &copy; {currentYear} PT Kappa Technology Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
