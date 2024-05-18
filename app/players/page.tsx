import CardGrid from "@/components/player/card-grid";
import { supabase } from "@/lib/supabaseClient";

async function getPlayers() {
  const { data, error } = await supabase.from("players").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default async function Page() {
  const data = await getPlayers();
  console.log(data);

  return (
    <main>
      <CardGrid players={data} />
    </main>
  );
}
