import CardGrid from "@/components/card-grid";
import HeroPage from "@/components/hero-page";
import Navbar from "@/components/navbar";
import PlayerSection from "@/components/player-section";
import Game from "@/components/settings/game";
import Graphics from "@/components/settings/graphics";
import PostFx from "@/components/settings/postfx";
import SettingsSection from "@/components/settings/settings-section";
import Sound from "@/components/settings/sound";

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
      <SettingsSection />
      <Game />
      <Graphics />
      <PostFx />
      <Sound />
    </main>
  );
};
export default Page;
