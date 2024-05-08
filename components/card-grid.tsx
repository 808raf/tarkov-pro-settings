import PlayerCard from "./player-card";

const CardGrid = () => {
  return (
    <section className="container mt-10 max-w-7xl">
      <h1 className="text-4xl font-bold mb-14">Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 mb-14">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </section>
  );
};
export default CardGrid;
