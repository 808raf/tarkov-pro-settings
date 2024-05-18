import { Gamepad2, Monitor, SlidersHorizontal, Volume2 } from "lucide-react";
import Header from "../header";
import Game from "../settings/game";
import Graphics from "../settings/graphics";
import PostFx from "../settings/postfx";
import Sound from "../settings/sound";
import PlayerSection from "./player-section";
import { getPlayers } from "@/lib/getPlayers";

interface Params {
  params: {
    id: string;
  };
}

const PlayerPage = async ({ params }: Params) => {
  const players = await getPlayers();

  return (
    <main>
      <PlayerSection players={players} params={params} />
      <Header title={"Settings"} />
      <Game title="Game" icon={<Gamepad2 size={48} color="#00a0f0" />} />
      <Graphics title="Graphics" icon={<Monitor size={48} color="#00a0f0" />} />
      <PostFx
        title="PostFx"
        icon={<SlidersHorizontal size={48} color="#00a0f0" />}
      />
      <Sound title="Sound" icon={<Volume2 size={48} color="#00a0f0" />} />
    </main>
  );
};
export default PlayerPage;
