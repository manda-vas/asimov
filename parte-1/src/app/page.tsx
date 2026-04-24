import { Nav } from "@/components/layout/nav/nav";
import { Hero } from "@/components/sections/hero/hero";
import { LogosCarousel } from "@/components/sections/logos-carousel/logos-carousel";
import { Services } from "@/components/sections/services/services";
import { CTA } from "@/components/sections/cta/cta";
import { CaseStudies } from "@/components/sections/case-studies/case-studies";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-positivus-white flex flex-col gap-70">
      <Nav />
      <main className="max-w-1440 mx-auto w-full flex flex-col gap-70">
        <Hero />
        <LogosCarousel />
        <Services />
        <CTA />
        <CaseStudies />

      </main>
    </div>
  );
}
