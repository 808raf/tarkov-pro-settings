import {
  Gamepad2,
  Monitor,
  PcCase,
  SlidersHorizontal,
  Volume2,
} from "lucide-react";
import Header from "../header";
import Game from "../settings/game";
import Graphics from "../settings/graphics";
import PostFx from "../settings/postfx";
import Sound from "../settings/sound";
import PlayerSection from "./player-section";
import getPlayers from "@/lib/getPlayers";
import Equipment from "../equipment/player-equipment";
import Mouse from "../settings/mouse";
import { Mouse as MouseIcon } from "lucide-react";
import getGameSettings from "@/lib/getGameSettings";
import getGraphicsSettings from "@/lib/getGraphicsSettings";
import convertGameSettings from "@/lib/convertGameSettings";

interface Params {
  params: {
    id: string;
  };
}

const PlayerPage = async ({ params }: Params) => {
  const players = await getPlayers();
  const username = params.id;
  const gameSettings = await getGameSettings(username);
  const graphicsSettings = await getGraphicsSettings(username);
  const convertedGameSettings = convertGameSettings(gameSettings);

  return (
    <main>
      <PlayerSection players={players} params={params} />
      <Header title={"Settings"} />
      <Mouse title={"Mouse"} icon={<MouseIcon size={48} color="#00a0f0" />} />
      <Game
        title="Game"
        icon={<Gamepad2 size={48} color="#00a0f0" />}
        gameSettings={convertedGameSettings}
      />
      <Graphics
        title="Graphics"
        icon={<Monitor size={48} color="#00a0f0" />}
        graphicsSettings={graphicsSettings}
      />
      {/* Removed sound and postfx for now as its of little importance */}
      {/* <PostFx
        title="PostFx"
        icon={<SlidersHorizontal size={48} color="#00a0f0" />}
      />
      <Sound title="Sound" icon={<Volume2 size={48} color="#00a0f0" />} /> */}
      <Header title={"Equipment"} />
      <Equipment title={"Gear"} icon={<PcCase size={48} color="#00a0f0" />} />
    </main>
  );
};
export default PlayerPage;
