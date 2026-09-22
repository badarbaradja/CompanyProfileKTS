"use client";

import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/utils";

interface InquiryFormProps {
  whatsapp: string;
  email: string;
}

/**
 * Client-side-only inquiry "form" — see REVISION_V0.2.md section 4.7.
 * No backend: it composes a message and opens WhatsApp/mailto. Nothing
 * is stored or transmitted anywhere else.
 */
export function InquiryForm({ whatsapp, email }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const composed = message.trim()
    ? `Halo PT KTS, saya ${name.trim() || "..."}.\n\n${message.trim()}`
    : "";

  const canSubmit = message.trim().length > 0;
  const whatsappHref = whatsapp && composed ? buildWhatsAppUrl(whatsapp, composed) : undefined;
  const mailtoHref = email
    ? `mailto:${email}?subject=${encodeURIComponent("Pertanyaan dari website PT KTS")}&body=${encodeURIComponent(composed)}`
    : undefined;

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => e.preventDefault()}
      aria-describedby="inquiry-form-note"
    >
      <div>
        <label htmlFor="inquiry-name" className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          Nama
        </label>
        <input
          id="inquiry-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          placeholder="Nama Anda"
        />
      </div>

      <div>
        <label htmlFor="inquiry-message" className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          Pesan
        </label>
        <textarea
          id="inquiry-message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          placeholder="Tuliskan pertanyaan atau kebutuhan Anda"
        />
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href={canSubmit ? whatsappHref : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!canSubmit || !whatsappHref}
          onClick={(e) => {
            if (!canSubmit || !whatsappHref) e.preventDefault();
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150 aria-disabled:opacity-40 aria-disabled:pointer-events-none"
        >
          Kirim via WhatsApp
        </a>
        <a
          href={canSubmit ? mailtoHref : undefined}
          aria-disabled={!canSubmit || !mailtoHref}
          onClick={(e) => {
            if (!canSubmit || !mailtoHref) e.preventDefault();
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-[var(--color-border-strong)] text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors duration-150 aria-disabled:opacity-40 aria-disabled:pointer-events-none"
        >
          Kirim via Email
        </a>
      </div>

      <p id="inquiry-form-note" className="text-xs text-[var(--color-text-faint)] pt-1">
        Pesan tidak disimpan di server kami — tombol di atas hanya membuka WhatsApp atau aplikasi email Anda.
      </p>
    </form>
  );
}
