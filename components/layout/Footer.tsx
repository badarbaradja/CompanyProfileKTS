import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Innovation", href: "/innovation" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
  ],
  Connect: [
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/kappasolution/",
      external: true,
    },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="container-kts py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group mb-4"
              aria-label="PT Kappa Technology Solution — Home"
            >
              <FooterMark />
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                KTS
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] max-w-xs leading-relaxed mt-2">
              PT Kappa Technology Solution develops practical technology
              originating from research, experimentation, and engineering
              innovation.
            </p>
            <a
              href="https://www.instagram.com/kappasolution/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PT KTS on Instagram (opens in new tab)"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
            >
              <InstagramIcon />
              @kappasolution
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([groupName, links]) => (
            <div key={groupName}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-4">
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
                        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-text-faint)]">
            &copy; {currentYear} PT Kappa Technology Solution. All rights
            reserved.
          </p>
          <p className="text-xs text-[var(--color-text-faint)]">
            {/* Contact details placeholder — to be updated */}
            Contact information to be updated.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="var(--color-accent)" />
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
