import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { HowItWorks } from "@/components/HowItWorks";
import { Solution } from "@/components/Solution";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Brands />
      <HowItWorks />
      <Solution />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
