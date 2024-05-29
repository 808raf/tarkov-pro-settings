import { supabase } from "./supabaseClient";

const getGraphicsSettings = async (username) => {
  const { data, error } = await supabase.rpc(
    "fetch_graphics_by_twitch_username",
    {
      username: `${username}`,
    }
  );

  if (error) {
    console.error("Error executing query:", error);
    return null;
  } else {
    if (data && data.length > 0) {
      let graphicsSettings = data[0].graphics;

      if (typeof graphicsSettings === "string") {
        try {
          graphicsSettings = JSON.parse(graphicsSettings);
        } catch (parseError) {
          console.error("Error parsing graphics settings:", parseError);
          return null;
        }
      }
      return graphicsSettings;
    } else {
      console.log("No data found");
      return null;
    }
  }
};

export default getGraphicsSettings;
