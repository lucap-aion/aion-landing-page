import { Logo } from "./Logo";

const legal = [
  {
    label: "Terms & Conditions",
    href: "https://www.app.aioncover.com/terms-and-conditions",
  },
  {
    label: "Privacy Policy",
    href: "https://www.iubenda.com/privacy-policy/37243599",
  },
  {
    label: "Cookie Policy",
    href: "https://www.iubenda.com/privacy-policy/37243599/cookie-policy",
  },
];

const nav = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Solution", href: "#solution" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 pt-20 pb-10">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm text-white/60 leading-relaxed">
              Global protection for luxury products. The white-label platform
              powering aftersales for iconic brands.
            </p>
            <a
              href="mailto:hello@aioncover.com"
              className="mt-6 inline-block font-serif text-2xl text-white hover:text-primary-light transition-colors"
            >
              hello@aioncover.com
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="text-xs uppercase tracking-[0.18em] text-white/40">
              Explore
            </div>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-primary-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://app.aioncover.com"
                  className="hover:text-primary-light transition-colors"
                >
                  Go to Platform
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-white/40">
              Legal
            </div>
            <ul className="mt-5 space-y-3">
              {legal.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} AION Cover. All rights reserved.
          </span>
          <span>Crafted for the world&apos;s most considered brands.</span>
        </div>
      </div>
    </footer>
  );
}
