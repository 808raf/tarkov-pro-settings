import CardGrid from "@/components/card-grid";
import HeroPage from "@/components/hero-page";
import Navbar from "@/components/navbar";
import PlayerSection from "@/components/player-section";

const Page = () => {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <hr className="border-2 border-b-blue-950" />
      <CardGrid />
      <hr className="border-2 border-b-blue-950" />
      <PlayerSection />
      <hr className="border-2 border-b-blue-950" />
    </main>
  );
};
export default Page;
