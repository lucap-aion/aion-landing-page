"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { dictionaries, type Dictionary, type Locale } from "@/lib/i18n/dictionaries";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const COOKIE = "aion_locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function persist(locale: Locale) {
  try {
    document.cookie = `${COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    localStorage.setItem(COOKIE, locale);
    document.documentElement.lang = locale;
  } catch {
    /* noop */
  }
}

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    persist(l);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: dictionaries[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
