import PlayerPage from "@/components/player/player-page";
import { getPlayers } from "@/lib/getPlayers";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <PlayerPage params={params} />
    </main>
  );
};

export default Page;

export async function generateStaticParams() {
  const players = await getPlayers();

  return players.map((player) => ({
    id: player.twitch_username.toLowerCase(),
  }));
}
