import CardGrid from "@/components/card-grid";
import Navbar from "@/components/navbar";

const Page = () => {
  return (
    <main>
      <Navbar />
      <CardGrid />
      <hr className="border-2 border-b-blue-950" />
    </main>
  );
};
export default Page;
