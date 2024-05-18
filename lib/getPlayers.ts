import { supabase } from "./supabaseClient";
import { cache } from "react";

export const getPlayers = cache(async () => {
  const { data, error } = await supabase.from("players").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
});
