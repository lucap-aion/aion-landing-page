"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export function Logo({ light = false }: { light?: boolean }) {
  const { theme } = useTheme();
  // Render white when explicitly forced (light prop, e.g. on dark footers) OR
  // when the active theme is dark and we're rendering on the page chrome.
  const inverted = light || theme === "dark";
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="AION Cover home"
    >
      <Image
        src="/aion_dark_logo.png"
        alt="AION"
        width={1197}
        height={344}
        priority
        className={`h-7 w-auto lg:h-8 ${
          inverted
            ? "brightness-0 invert-[.94]"
            : "brightness-0 invert-[.14]"
        }`}
      />
    </Link>
  );
}
