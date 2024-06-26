import PlayerCard from "./player-card";
import PlayerSearch from "./player-search";

interface Player {
  twitch_username: string;
  twitch_avatar: string;
  followers: string;
}

interface CardGridProps {
  players: Player[];
}

const sortPlayers = (playerObj: Player[]) => {
  const players = [...playerObj];
  let sortedPlayers = players.sort((a, b) =>
    a.twitch_username.localeCompare(b.twitch_username)
  );
  return sortedPlayers;
};

const CardGrid: React.FC<CardGridProps> = ({ players }) => {
  let sortedPlayers = sortPlayers(players);

  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <h1 className="text-4xl font-bold mb-14 bg-gradient-to-b from-sky-400 to-sky-900 bg-clip-text text-transparent">
        Players
      </h1>
      <div className="flex flex-col sm:flex-row">
        <PlayerSearch />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-14 gap-4">
        {sortedPlayers.map((player) => (
          <PlayerCard
            key={player.twitch_username}
            username={player.twitch_username}
            avatar={player.twitch_avatar}
            followers={player.followers}
          />
        ))}
      </div>
    </section>
  );
};
export default CardGrid;
