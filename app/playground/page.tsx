import HeroPage from "@/components/hero-page";
import Navbar from "@/components/navbar";
import Game from "@/components/settings/game";
import Graphics from "@/components/settings/graphics";
import PostFx from "@/components/settings/postfx";
import Sound from "@/components/settings/sound";
import { Gamepad2, Monitor, SlidersHorizontal, Volume2 } from "lucide-react";
import Header from "@/components/header";
import getGameSettings from "@/lib/getGameSettings";
import convertGameSettings from "@/lib/convertGameSettings";

const Page = async () => {
  const username = "Tigz";
  const gameSettings = await getGameSettings(username);
  const convertedGameSettings = convertGameSettings(gameSettings);
  return (
    <main>
      <Navbar />
      <HeroPage />

      <hr className="border-2 border-b-blue-950" />
      <hr className="border-2 border-b-blue-950" />
      <Header title={"Settings"} />
      <Game
        title="Game"
        icon={<Gamepad2 size={48} color="#00a0f0" />}
        gameSettings={convertedGameSettings}
      />
      <Graphics title="Graphics" icon={<Monitor size={48} color="#00a0f0" />} />
      <PostFx
        title="PostFx"
        icon={<SlidersHorizontal size={48} color="#00a0f0" />}
      />
      <Sound title="Sound" icon={<Volume2 size={48} color="#00a0f0" />} />
    </main>
  );
};

export default Page;
