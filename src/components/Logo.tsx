import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
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
        className={`h-7 w-auto lg:h-8 ${light ? "invert brightness-0" : ""}`}
      />
    </Link>
  );
}
