import CardGrid from "@/components/player/card-grid";
import { supabase } from "@/lib/supabaseClient";

export default async function Page() {
  async function getPlayers() {
    const { data, error } = await supabase.from("players").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  const data = await getPlayers();
  console.log(data);

  return (
    <main>
      <CardGrid players={data} />
    </main>
  );
}
