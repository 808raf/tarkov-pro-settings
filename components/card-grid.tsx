import PlayerCard from "./player-card";
import PlayerSearch from "./player-search";

const CardGrid = () => {
  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <h1 className="text-4xl font-bold mb-14">Players</h1>
      <div className="flex flex-col sm:flex-row">
        <PlayerSearch />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-14 gap-4">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
      <h1>Pagination</h1>
    </section>
  );
};
export default CardGrid;
