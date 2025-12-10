import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import PhilosophySection from "@/components/PhilosophySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PhilosophySection />
      <FAQSection />
      <Footer />
    </main>
  );
}
