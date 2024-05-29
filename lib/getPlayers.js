import { supabase } from "./supabaseClient";

const getPlayers = async () => {
  const { data, error } = await supabase.from("players").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default getPlayers;
