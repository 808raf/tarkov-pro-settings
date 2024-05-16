import { Command, CommandInput, CommandList } from "@/components/ui/command";

const PlayerSearch = () => {
  return (
    <Command className="mb-7 shadow-sm">
      <CommandInput placeholder="Search players..." />
      <CommandList></CommandList>
    </Command>
  );
};
export default PlayerSearch;
