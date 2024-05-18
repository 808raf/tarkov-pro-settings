import PlayerPage from "@/components/player/player-page";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <PlayerPage params={params} />
    </main>
  );
};
export default Page;
