import CardGrid from "@/components/card-grid";
import Navbar from "@/components/navbar";
import PlayerSection from "@/components/player-section";

const Page = () => {
  return (
    <main>
      <Navbar />
      <CardGrid />
      <hr className="border-2 border-b-blue-950" />
      <PlayerSection />
      <hr className="border-2 border-b-blue-950" />
    </main>
  );
};
export default Page;
