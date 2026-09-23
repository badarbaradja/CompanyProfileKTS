"use client";

import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface InquiryFormProps {
  whatsapp: string;
  email: string;
}

/**
 * Client-side-only inquiry "form" — see REVISION_V0.2.md section 4.7.
 * No backend: it composes a message and opens WhatsApp/mailto. Nothing
 * is stored or transmitted anywhere else.
 *
 * The composed message stays in Indonesian (both WhatsApp and email
 * route to the PT KTS team) — see REVISION_V0.3.md part A.4. Only the
 * surrounding form UI is in English.
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
          Name
        </label>
        <input
          id="inquiry-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="inquiry-message" className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          Message
        </label>
        <textarea
          id="inquiry-message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          placeholder="Write your question or what you need"
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
          className={cn(buttonClasses("primary", "md"), "aria-disabled:opacity-40 aria-disabled:pointer-events-none")}
        >
          Send via WhatsApp
        </a>
        <a
          href={canSubmit ? mailtoHref : undefined}
          aria-disabled={!canSubmit || !mailtoHref}
          onClick={(e) => {
            if (!canSubmit || !mailtoHref) e.preventDefault();
          }}
          className={cn(buttonClasses("outline", "md"), "aria-disabled:opacity-40 aria-disabled:pointer-events-none")}
        >
          Send via Email
        </a>
      </div>

      <p id="inquiry-form-note" className="text-xs text-[var(--color-text-faint)] pt-1">
        Your message isn&apos;t stored on our server. The buttons above only open WhatsApp or your email app.
      </p>
    </form>
  );
}
