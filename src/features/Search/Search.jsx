import Button from "../../ui/Button";
import SearchLoader from "./SearchLoader";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useContext } from "react";
import { CityContext } from "../../contexts/CityContext";
import SearchDropdownList from "./SearchDropdownList";

export default function Search() {
  const { cityData, isPendingCityData, query, setQuery } =
    useContext(CityContext);
  console.log(query);
  console.log(cityData);
  function handleClick(e) {
    console.log("tAIWO");
    if (!query.trim()) return null;
    e?.preventDefault();~
  }

  return (
    <form
      onSubmit={handleClick}
      className="flex flex-col tab-desk:w-9/20 w-full mx-auto tab:flex-row gap-[12px] tab:gap-4"
    >
      <div className="flex-grow gap-[14px] cursor-pointer flex flex-col">
        <div className="bg-neutral-800 w-full focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-4 focus-within:ring-offset-neutral-900 text-xl gap-4 relative text-neutral-200 px-6 py-4 rounded-md flex items-center">
          <span>
            <HiMagnifyingGlass />
          </span>
          <input
            type="search"
            placeholder="Search for a place..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-full focus:outline-none bg-transparent placeholder:text-neutral-200"
          />
        </div>

        {/* loader for city */}
        {isPendingCityData && query.length >= 3 && (
          <div className="relative w-full">
            <SearchLoader />
          </div>
        )}
        {/* display results */}
        {!isPendingCityData && query && query.length >= 3 && (
          <div className="relative w-full">
            <SearchDropdownList />
          </div>
        )}
      </div>

      <Button disabled={isPendingCityData}>Search</Button>
    </form>
  );
}
``;
