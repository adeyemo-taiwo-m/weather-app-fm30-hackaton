import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../../ui/Button";

export default function Search() {
  return (
    <div className="flex flex-col tab:flex-row gap-[12px] tab-desk:w-9/20 mx-auto">
      <div className="bg-neutral-800 w-full text-xl  gap-4 relative text-neutal-200 px-6 py-4 rounded-md flex items-center">
        <span>
          <HiMagnifyingGlass />
        </span>
        <input
          type="text"
          placeholder="Search for a place..."
          className="w-full h-full focus:outline-none"
        />
      </div>
      <Button>Search</Button>
    </div>
  );
}
