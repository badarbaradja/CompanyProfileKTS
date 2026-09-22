import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pending } from "@/components/ui/Pending";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${site.legalName}.`,
};

export default function KontakPage() {
  const { contact } = site;

  return (
    <section className="section-padding">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Kontak"
              title="Punya kebutuhan yang bisa kami bantu?"
              description="Hubungi PT KTS untuk konsultasi, pertanyaan produk/layanan, atau kerja sama pelatihan."
            />

            <div className="mt-10 space-y-5">
              <ContactRow label="WhatsApp" value={contact.whatsapp} missingLabel="Nomor WhatsApp resmi" />
              <ContactRow label="Email" value={contact.email} missingLabel="Alamat email resmi" />
              <ContactRow label="Alamat" value={contact.address} missingLabel="Alamat kantor resmi" />

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
                    Toko Online
                  </span>
                  <a
                    href={contact.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-accent)] hover:underline w-fit"
                  >
                    Kunjungi toko
                  </a>
                  {contact.shopIsPersonalAccount && (
                    <span className="text-xs text-[var(--color-text-faint)]">
                      Sementara menggunakan akun pribadi, bukan akun resmi PT KTS.
                    </span>
                  )}
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <h2 className="font-semibold text-[var(--color-text)] mb-1" style={{ fontSize: "var(--text-h4)" }}>
                Kirim pertanyaan
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                Isi pesan Anda, lalu kirim melalui WhatsApp atau email.
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
  missingLabel,
}: {
  label: string;
  value: string;
  missingLabel: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
        {label}
      </span>
      {value ? (
        <span className="text-sm text-[var(--color-text)]">{value}</span>
      ) : (
        <Pending label={missingLabel} />
      )}
    </div>
  );
}
