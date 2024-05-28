export async function getGameSettings(username) {
  const { data, error } = await supabase.rpc("fetch_game_by_twitch_username", {
    username: `${username}`,
  });

  if (error) {
    console.error("Error executing query:", error);
    return null;
  } else {
    console.log("Query result:", data);
    return data;
  }
}
