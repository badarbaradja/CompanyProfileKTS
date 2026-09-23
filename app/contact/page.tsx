import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pending } from "@/components/ui/Pending";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { LocationMap } from "@/components/contact/LocationMap";
import { site } from "@/content/site";
import { buildWhatsAppUrl, formatPhoneDisplay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.legalName}.`,
};

export default function ContactPage() {
  const { contact } = site;

  return (
    <section className="section-padding">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Contact"
              title="Contact PT KTS"
              description="PT KTS can help with consultations, product questions, and training."
            />

            <div className="mt-10 space-y-5">
              <ContactRow
                label="WhatsApp (contact person)"
                value={contact.whatsapp ? formatPhoneDisplay(contact.whatsapp) : ""}
                href={
                  contact.whatsapp
                    ? buildWhatsAppUrl(contact.whatsapp, "Halo PT KTS, saya ingin bertanya.")
                    : undefined
                }
                missingLabel="Official WhatsApp number"
              />
              <ContactRow
                label="Email"
                value={contact.email}
                href={contact.email ? `mailto:${contact.email}` : undefined}
                missingLabel="Official email address"
              />
              <ContactRow label="Address" value={contact.address} missingLabel="Official office address" />

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                  Instagram
                </span>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-accent)] hover:underline w-fit"
                >
                  {contact.instagramHandle}
                </a>
              </div>

              {contact.shopUrl && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                    Online Shop
                  </span>
                  <a
                    href={contact.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-accent)] hover:underline w-fit"
                  >
                    Visit the shop
                  </a>
                  {contact.shopIsPersonalAccount && (
                    <span className="text-xs text-[var(--color-text-faint)]">
                      Currently a personal account, not yet an official PT KTS store.
                    </span>
                  )}
                </div>
              )}

              <div className="pt-2">
                <LocationMap
                  lat={contact.coordinates.lat}
                  lng={contact.coordinates.lng}
                  companyName={site.legalName}
                  address={contact.address}
                  className="shadow-[var(--shadow-sm)]"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] p-6 sm:p-8">
              <h2 className="font-display font-medium text-[var(--color-text)] mb-1" style={{ fontSize: "var(--text-h4)" }}>
                Send a question
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                Write your message, then send it via WhatsApp or email.
              </p>
              <InquiryForm whatsapp={contact.whatsapp} email={contact.email} />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  missingLabel,
}: {
  label: string;
  value: string;
  href?: string;
  missingLabel: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
        {label}
      </span>
      {value && href ? (
        <a
          href={href}
          target={href.startsWith("https://wa.me/") ? "_blank" : undefined}
          rel={href.startsWith("https://wa.me/") ? "noopener noreferrer" : undefined}
          className="text-sm text-[var(--color-accent)] hover:underline w-fit"
        >
          {value}
        </a>
      ) : value ? (
        <span className="text-sm text-[var(--color-text)]">{value}</span>
      ) : (
        <Pending label={missingLabel} />
      )}
    </div>
  );
}
