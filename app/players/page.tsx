import CardGrid from "@/components/player/card-grid";
import getPlayers from "@/lib/getPlayers";

export default async function Page() {
  const data = await getPlayers();

  return (
    <main>
      <CardGrid players={data} />
    </main>
  );
}
