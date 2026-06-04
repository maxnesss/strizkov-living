"use client";

import { type FormEvent } from "react";

export function FinancingContactForm({ contactEmail }: { contactEmail: string }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const body = [
      "Dobrý den,",
      "",
      "mám zájem o nezávaznou konzultaci k projektu Střítež Living.",
      "",
      `Jméno: ${form.get("name") || "-"}`,
      `Telefon: ${form.get("phone") || "-"}`,
      `E-mail: ${form.get("email") || "-"}`,
      "",
      "Zpráva:",
      form.get("message") || "-",
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Nezávazná konzultace | Střítež Living"
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClassName =
    "w-full rounded-[14px] border border-[#b89a7c33] bg-white/76 px-4 py-3.5 text-sm text-[#3f3125] outline-none transition placeholder:text-[#9c8a7a] focus:border-[#a88362] focus:ring-4 focus:ring-[#a883621f]";

  return (
    <form
      className="rounded-[28px] border border-white/70 bg-white/88 p-5 shadow-[0_30px_90px_-58px_rgba(48,36,26,0.38)] backdrop-blur sm:p-7"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-3">
        <input
          className={fieldClassName}
          name="name"
          placeholder="Jméno a příjmení"
          required
          type="text"
        />
        <input
          className={fieldClassName}
          name="phone"
          placeholder="Telefon"
          type="tel"
        />
        <input
          className={fieldClassName}
          name="email"
          placeholder="E-mail"
          required
          type="email"
        />
        <textarea
          className={`${fieldClassName} min-h-28 resize-y`}
          name="message"
          placeholder="Napište nám, co hledáte..."
        />
      </div>

      <button
        className="mt-4 inline-flex w-full items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#a88362,#c9a57e)] px-5 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_18px_42px_-26px_rgba(76,52,32,0.55)] transition hover:brightness-105"
        type="submit"
      >
        Odeslat poptávku →
      </button>
    </form>
  );
}
