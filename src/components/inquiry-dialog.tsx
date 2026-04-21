"use client";

import Link from "next/link";
import {
  createContext,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type InquiryDialogContextValue = {
  openDialog: (triggerElement?: HTMLElement | null) => void;
  closeDialog: () => void;
};

const InquiryDialogContext = createContext<InquiryDialogContextValue | null>(null);

type InquiryDialogProviderProps = {
  children: ReactNode;
  contactEmail: string;
};

type InquiryFormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  privacyConsent: boolean;
  offersConsent: boolean;
};

const defaultFormState: InquiryFormState = {
  name: "",
  email: "",
  phone: "",
  interest: "Konkrétní dům",
  message: "",
  privacyConsent: false,
  offersConsent: false,
};

const fieldClassName =
  "mt-2 w-full rounded-[18px] border border-[#5885b626] bg-white px-4 py-3 text-sm text-[#153252] outline-none transition placeholder:text-[#89a0b9] focus:border-[#4d82c6] focus:ring-4 focus:ring-[#4d82c61f]";

export function InquiryDialogProvider({
  children,
  contactEmail,
}: InquiryDialogProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(defaultFormState);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const resetForm = () => {
    setForm(defaultFormState);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        resetForm();
        setIsOpen(false);
        lastTriggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const openDialog = (triggerElement?: HTMLElement | null) => {
    lastTriggerRef.current = triggerElement ?? null;
    setIsOpen(true);
  };

  const closeDialog = () => {
    resetForm();
    setIsOpen(false);
    lastTriggerRef.current?.focus();
  };

  const handleFieldChange =
    (field: keyof InquiryFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue =
        event.target instanceof HTMLInputElement && event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;

      setForm((current) => ({
        ...current,
        [field]: nextValue,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Mám zájem o dům | Střítež Living`;
    const body = [
      "Dobrý den,",
      "",
      "mám zájem o bližší informace k projektu Střítež Living.",
      "",
      `Jméno: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefon: ${form.phone || "-"}`,
      `Téma: ${form.interest}`,
      `Souhlas se zpracováním osobních údajů: ${form.privacyConsent ? "ano" : "ne"}`,
      `Souhlas se zasíláním nabídek: ${form.offersConsent ? "ano" : "ne"}`,
      "",
      "Zpráva:",
      form.message || "-",
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setForm(defaultFormState);
    setIsOpen(false);
  };

  return (
    <InquiryDialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}

      {isOpen ? (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-[90] flex items-end justify-center bg-[#12304f66] px-4 py-4 backdrop-blur-[6px] sm:items-center sm:px-6"
          role="dialog"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeDialog();
            }
          }}
        >
          <div
            className="w-full max-w-[640px] overflow-hidden rounded-[32px] border border-[#5885b633] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(244,249,255,0.97))] shadow-[0_36px_120px_-70px_rgba(20,46,78,0.65)]"
            ref={dialogRef}
          >
            <div className="border-b border-[#5885b61f] px-6 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                    Mám zájem
                  </p>
                  <h2
                    className="display-font mt-3 text-3xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-4xl"
                    id={titleId}
                  >
                    Napište nám, o jaký dům máte zájem.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5d7691]">
                    Stačí několik základních údajů. Připravíme pro vás přehled dostupných
                    domů, cenovou orientaci i další postup.
                  </p>
                </div>

                <button
                  aria-label="Zavřít formulář"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#5885b626] bg-white text-xl text-[#5d7691] transition hover:border-[#5885b64d] hover:text-[#153252]"
                  type="button"
                  onClick={closeDialog}
                >
                  ×
                </button>
              </div>
            </div>

            <form className="grid gap-5 px-6 py-6 sm:px-8" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[#153252]">
                  Jméno a příjmení
                  <input
                    autoFocus
                    className={fieldClassName}
                    name="name"
                    placeholder="Např. Jan Novák"
                    required
                    type="text"
                    value={form.name}
                    onChange={handleFieldChange("name")}
                  />
                </label>

                <label className="text-sm font-semibold text-[#153252]">
                  E-mail
                  <input
                    className={fieldClassName}
                    name="email"
                    placeholder="vas@email.cz"
                    required
                    type="email"
                    value={form.email}
                    onChange={handleFieldChange("email")}
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[#153252]">
                  Telefon
                  <input
                    className={fieldClassName}
                    name="phone"
                    placeholder="+420 123 456 789"
                    type="tel"
                    value={form.phone}
                    onChange={handleFieldChange("phone")}
                  />
                </label>

                <label className="text-sm font-semibold text-[#153252]">
                  Co vás zajímá
                  <select
                    className={fieldClassName}
                    name="interest"
                    value={form.interest}
                    onChange={handleFieldChange("interest")}
                  >
                    <option>Konkrétní dům</option>
                    <option>Dostupnost domů</option>
                    <option>Financování</option>
                    <option>Osobní schůzka</option>
                  </select>
                </label>
              </div>

              <label className="text-sm font-semibold text-[#153252]">
                Zpráva
                <textarea
                  className={`${fieldClassName} min-h-32 resize-y`}
                  name="message"
                  placeholder="Napište nám, jaký dům vás zaujal nebo co byste chtěli upřesnit."
                  value={form.message}
                  onChange={handleFieldChange("message")}
                />
              </label>

              <div className="grid gap-3 border-t border-[#5885b61f] pt-5">
                <label className="flex items-start gap-3 rounded-[18px] border border-[#5885b61f] bg-white/72 px-4 py-3.5 text-sm leading-7 text-[#5d7691]">
                  <input
                    checked={form.privacyConsent}
                    className="mt-1 h-4 w-4 rounded border-[#5885b64d] text-[#4d82c6] focus:ring-[#4d82c63d]"
                    name="privacyConsent"
                    required
                    type="checkbox"
                    onChange={handleFieldChange("privacyConsent")}
                  />
                  <span>
                    Souhlasím se{" "}
                    <Link
                      className="font-semibold text-[#153252] underline decoration-[#87b4e1] underline-offset-4 transition hover:text-[#4d82c6]"
                      href="/gdpr"
                      target="_blank"
                    >
                      zpracováním osobních údajů
                    </Link>{" "}
                    za účelem vyřízení poptávky.
                  </span>
                </label>

                <label className="flex items-start gap-3 rounded-[18px] border border-[#5885b61f] bg-white/72 px-4 py-3.5 text-sm leading-7 text-[#5d7691]">
                  <input
                    checked={form.offersConsent}
                    className="mt-1 h-4 w-4 rounded border-[#5885b64d] text-[#4d82c6] focus:ring-[#4d82c63d]"
                    name="offersConsent"
                    type="checkbox"
                    onChange={handleFieldChange("offersConsent")}
                  />
                  <span>
                    Souhlasím se zasíláním obchodních nabídek a novinek k projektu.
                  </span>
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    className="rounded-full border border-[#5885b62e] bg-white px-5 py-3 text-sm font-extrabold text-[#153252] transition hover:bg-[#f8fbff]"
                    type="button"
                    onClick={closeDialog}
                  >
                    Zavřít
                  </button>
                  <button
                    className={`rounded-full px-5 py-3 text-sm font-extrabold text-white transition ${
                      form.privacyConsent
                        ? "bg-[linear-gradient(135deg,#4d82c6,#6cabec)] shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)] hover:brightness-105"
                        : "cursor-not-allowed bg-[#b6c6d8] shadow-none"
                    }`}
                    disabled={!form.privacyConsent}
                    type="submit"
                  >
                    Odeslat poptávku
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </InquiryDialogContext.Provider>
  );
}

type InquiryDialogTriggerProps = {
  children: ReactNode;
  className?: string;
};

export function InquiryDialogTrigger({
  children,
  className = "",
}: InquiryDialogTriggerProps) {
  const context = useContext(InquiryDialogContext);

  if (!context) {
    throw new Error("InquiryDialogTrigger must be used within InquiryDialogProvider.");
  }

  return (
    <button
      className={className}
      type="button"
      onClick={(event) => {
        context.openDialog(event.currentTarget);
      }}
    >
      {children}
    </button>
  );
}
