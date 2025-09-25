import Button from "../../ui/Button";
import SearchLoader from "./SearchLoader";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useContext } from "react";
import { CityContext } from "../../contexts/CityContext";
import SearchDropdownList from "./SearchDropdownList";
import { WeatherContext } from "../../contexts/WeatherContexts";
import { useWeatherDetails } from "../../hooks/useWeatherDetails";

export default function Search() {
  const { query, setQuery, cityData, isPendingCityData, selectedCity } =
    useContext(CityContext);

  const { setLocation } = useContext(WeatherContext);

  const location =
    cityData?.results?.length > 0 && selectedCity
      ? {
          latitude: selectedCity?.latitude,
          longitude: selectedCity?.longitude,
        }
      : null;
  const {
    weatherDetails: weatherData,
    refetch,
    isPending,
  } = useWeatherDetails(location);
  console.log(weatherData);

  function handleSubmit(e) {
    e?.preventDefault();
    setLocation(location);
    refetch();
    setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
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
        {query.length > 3 && isPending && (
          <div className="relative w-full">
            <SearchDropdownList />
          </div>
        )}
        {/* display results */}
        {/* {isPending && isPendingCityData && (
          <div className="relative w-full">
            <SearchLoader />
          </div>
        )} */}
      </div>

      <Button disabled={isPending || isPendingCityData}>Search</Button>
    </form>
  );
}
