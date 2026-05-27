import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Demo } from "@/components/sections/Demo";
import { CTA } from "@/components/sections/CTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-page">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <Demo />
      <CTA />
      <Footer />
    </main>
  );
}
