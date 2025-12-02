import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        <div className="flex flex-col">
          <Header />
          <Hero />
          <CategorySection />
          <PricingSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
