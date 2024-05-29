import { supabase } from "./supabaseClient";

const getPostfxSettings = async (username) => {
  const { data, error } = await supabase.rpc(
    "fetch_post_fx_by_twitch_username",
    {
      username: `${username}`,
    }
  );

  if (error) {
    console.error("Error executing query:", error);
    return null;
  } else {
    if (data && data.length > 0) {
      let postfxSettings = data[0].game;

      if (typeof postfxSettings === "string") {
        try {
          postfxSettings = JSON.parse(postfxSettings);
        } catch (parseError) {
          console.error("Error parsing game settings:", parseError);
          return null;
        }
      }
      return postfxSettings;
    } else {
      console.log("No data found");
      return null;
    }
  }
};

export default getPostfxSettings;
