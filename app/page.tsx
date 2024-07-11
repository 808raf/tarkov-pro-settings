import HeroPage from "@/components/hero-page";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <section className="flex justify-center items-center flex-col">
      <HeroPage />
      <HeroSection />
    </section>
  );
}
