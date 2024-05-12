import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const PlayerSearch = () => {
  return (
    <Command className="mb-7 shadow-md ">
      <CommandInput placeholder="Search players..." />
      <CommandList>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
};
export default PlayerSearch;
