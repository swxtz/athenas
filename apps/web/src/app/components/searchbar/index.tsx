import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";

export function Searchbar() {
  return (
    // Removendo searchbar
    <div className="hidden flex-row bg-black py-1 rounded-xl">
      <SearchIcon />
      <input type="text" className="w-2/3" />
      <Separator orientation="vertical" />
      <button><SearchIcon/></button>
    </div>
  );
}
