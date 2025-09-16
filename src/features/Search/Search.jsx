import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../../ui/Button";
import SearchDropdown from "./SearchDropdown";

export default function Search() {
  return (
    // <div className="tab-desk:w-9/20  w-full mx-auto">
    <>
      <div className="flex flex-col  tab-desk:w-9/20  w-full mx-auto  tab:flex-row gap-[12px] tab:gap-4 ">
        <div className="flex-grow gap-[14px] cursor-pointer flex flex-col">
          <div className="bg-neutral-800 w-full focus-within:ring-2 focus-within:ring-white  focus-within:ring-offset-4 focus-within:ring-offset-neutral-900   text-xl  gap-4 relative text-neutal-200 px-6 py-4 rounded-md flex items-center">
            <span>
              <HiMagnifyingGlass />
            </span>
            <input
              type="text"
              placeholder="Search for a place..."
              className="w-full h-full focus:outline-none bg-transparent placeholder:text-neutral-200"
            />
          </div>
          <div className="relative">{/* <SearchDropdown /> */}</div>
        </div>
        <Button>Search</Button>
      </div>
    </>
    // </div>
  );
}
