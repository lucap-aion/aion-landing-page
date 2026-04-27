"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "./LanguageProvider";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.error || t.contactForm.errorGeneric);
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : t.contactForm.errorGeneric
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-border bg-cream p-10 lg:p-14 text-center"
      >
        <div className="mx-auto w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary-dark">
          <Check size={22} strokeWidth={2} />
        </div>
        <h3 className="mt-6 font-serif text-3xl text-ink">
          {t.contactForm.successTitle}
        </h3>
        <p className="mt-3 text-ink-soft leading-relaxed max-w-md mx-auto">
          {t.contactForm.successBody}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-cream p-8 lg:p-12 shadow-card"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={t.contactForm.name} name="name" required />
        <Field label={t.contactForm.email} name="email" type="email" required />
      </div>
      <div className="mt-5">
        <Field label={t.contactForm.company} name="company" />
      </div>
      <div className="mt-5">
        <Field
          label={t.contactForm.message}
          name="message"
          required
          textarea
        />
      </div>

      {status === "error" ? (
        <p className="mt-5 text-sm text-[hsl(0_60%_45%)]">{errorMsg}</p>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-ink-soft max-w-sm">
          {t.contactForm.privacyNote}
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium bg-primary-dark text-white hover:bg-primary hover:shadow-elev transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? t.contactForm.submitting : t.contactForm.submit}
          {status !== "submitting" && <ArrowRight size={16} />}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const baseClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  return (
    <label className="block">
      <span className="block text-xs font-medium text-ink-soft tracking-wider uppercase mb-2">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className={baseClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={baseClass}
        />
      )}
    </label>
  );
}
