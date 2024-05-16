import CardGrid from "@/components/player/card-grid";
import HeroPage from "@/components/hero-page";
import Navbar from "@/components/navbar";
import PlayerSection from "@/components/player/player-section";
import Game from "@/components/settings/game";
import Graphics from "@/components/settings/graphics";
import PostFx from "@/components/settings/postfx";
import SettingsSection from "@/components/settings/settings-section";
import Sound from "@/components/settings/sound";
import { Gamepad2, Monitor, SlidersHorizontal, Volume2 } from "lucide-react";

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
      <Game title="Game" icon={<Gamepad2 size={48} />} />
      <Graphics title="Graphics" icon={<Monitor size={48} />} />
      <PostFx title="PostFx" icon={<SlidersHorizontal size={48} />} />
      <Sound title="Sound" icon={<Volume2 size={48} />} />
    </main>
  );
};
export default Page;
