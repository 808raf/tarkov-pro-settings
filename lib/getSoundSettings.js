import { supabase } from "./supabaseClient";

const getSoundSettings = async (username) => {
  const { data, error } = await supabase.rpc("fetch_sound_by_twitch_username", {
    username: `${username}`,
  });

  if (error) {
    console.error("Error executing query:", error);
    return null;
  } else {
    if (data && data.length > 0) {
      let soundSettings = data[0].sound;

      if (typeof soundSettings === "string") {
        try {
          soundSettings = JSON.parse(soundSettings);
        } catch (parseError) {
          console.error("Error parsing sound settings:", parseError);
          return null;
        }
      }
      return soundSettings;
    } else {
      console.log("No data found");
      return null;
    }
  }
};

export default getSoundSettings;
