import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group"
      aria-label="AION Cover home"
    >
      <span className="relative h-8 w-8 overflow-hidden">
        <Image
          src="/aion_dark_icon.png"
          alt=""
          fill
          sizes="32px"
          className={light ? "invert brightness-0 contrast-200" : ""}
          priority
        />
      </span>
      <span
        className={`font-serif text-xl tracking-tighter ${
          light ? "text-white" : "text-ink"
        }`}
      >
        AION
      </span>
    </Link>
  );
}
