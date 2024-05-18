import CardGrid from "@/components/player/card-grid";
import { getPlayers } from "@/lib/getPlayers";
export const revalidate = 3600; // revalidate the data at most every hour

export default async function Page() {
  const data = await getPlayers();

  return (
    <main>
      <CardGrid players={data} />
    </main>
  );
}
