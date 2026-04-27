import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider, type Theme } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n/dictionaries";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.aioncover.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AION Cover — Global Protection for Luxury Products",
    template: "%s · AION Cover",
  },
  description:
    "AION is the white-label embedded protection platform that lets luxury brands safeguard their customers' treasures from theft and accidental damage — turning aftersales into loyalty.",
  keywords: [
    "luxury insurance",
    "embedded insurance",
    "white-label",
    "aftersales",
    "B2B insurance",
    "luxury protection",
  ],
  openGraph: {
    title: "AION Cover — Global Protection for Luxury Products",
    description:
      "Empowering brands to safeguard customers' treasures from theft and accidental damages with a B2B white-label service.",
    url: siteUrl,
    siteName: "AION Cover",
    type: "website",
    images: [{ url: "/aion_dark_logo.png", width: 1200, height: 630, alt: "AION Cover" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AION Cover — Global Protection for Luxury Products",
    description:
      "Empowering brands to safeguard customers' treasures from theft and accidental damages.",
  },
  icons: { icon: "/favicon.ico" },
};

const noFlashScript = `(function(){try{var t=document.cookie.match(/(?:^|; )aion_theme=(light|dark)/);var s=t?t[1]:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(s==='dark')document.documentElement.classList.add('dark');document.documentElement.style.colorScheme=s;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const store = cookies();
  const themeCookie = store.get("aion_theme")?.value;
  const initialTheme: Theme = themeCookie === "dark" ? "dark" : "light";
  const localeCookie = store.get("aion_locale")?.value;
  const initialLocale: Locale = localeCookie === "it" ? "it" : "en";

  return (
    <html
      lang={initialLocale}
      className={`${display.variable} ${body.variable}${initialTheme === "dark" ? " dark" : ""}`}
      style={{ colorScheme: initialTheme }}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider initialTheme={initialTheme}>
          <LanguageProvider initialLocale={initialLocale}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
