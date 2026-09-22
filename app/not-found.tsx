import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="section-padding">
      <Container>
        <div className="max-w-xl mx-auto text-center py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4">
            404
          </p>
          <h1
            className="font-bold leading-tight tracking-tight mb-4"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Halaman tidak ditemukan
          </h1>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
            Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </Container>
    </section>
  );
}
