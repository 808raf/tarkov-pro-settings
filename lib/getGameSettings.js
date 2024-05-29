import { supabase } from "./supabaseClient";

const getGameSettings = async (username) => {
  const { data, error } = await supabase.rpc("fetch_game_by_twitch_username", {
    username: `${username}`,
  });

  if (error) {
    console.error("Error executing query:", error);
    return null;
  } else {
    if (data && data.length > 0) {
      let gameSettings = data[0].game;

      if (typeof gameSettings === "string") {
        try {
          gameSettings = JSON.parse(gameSettings);
        } catch (parseError) {
          console.error("Error parsing game settings:", parseError);
          return null;
        }
      }
      return gameSettings;
    } else {
      console.log("No data found");
      return null;
    }
  }
};

export default getGameSettings;
