import useCity from "../../hooks/useCity";
import Button from "../../ui/Button";
import SearchLoader from "./SearchLoader";
import { useContext, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useWeatherDetails } from "../../hooks/useWeatherDetails";
import { CityContext } from "../../contexts/CityContext";
import { WeatherContext } from "../../contexts/WeatherContexts";

export default function Search() {
  const [query, setQuery] = useState("");
  const { fetchCity, city, isPendingCity } = useCity();
  const { setCityData } = useContext(CityContext);
  const { setWeatherData, setIsPending } = useContext(WeatherContext);

  const { fetchWeatherDetails, isPending } = useWeatherDetails(city);

  function handleClick(e) {
    e?.preventDefault();

    if (!query && typeof query !== "string") return null;

    fetchCity(query, {
      onSettled: () => {
        setQuery("");
      },
      onSuccess: (data) => {
        setCityData(data);
      },
    });

    if (!city) return null;
    fetchWeatherDetails(city, {
      onSettled: () => {
        setQuery("");
      },
      onSuccess: (data) => {
        setWeatherData(data);
      },
    });
  }
  setIsPending(isPending);
  return (
    <>
      <form
        onSubmit={handleClick}
        className="flex flex-col  tab-desk:w-9/20  w-full mx-auto  tab:flex-row gap-[12px] tab:gap-4 "
      >
        <div className="flex-grow gap-[14px] cursor-pointer flex flex-col">
          <div className="bg-neutral-800 w-full focus-within:ring-2 focus-within:ring-white  focus-within:ring-offset-4 focus-within:ring-offset-neutral-900   text-xl  gap-4 relative text-neutal-200 px-6 py-4 rounded-md flex items-center">
            <span>
              <HiMagnifyingGlass />
            </span>
            <input
              type="text"
              placeholder="Search for a place..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-full focus:outline-none bg-transparent placeholder:text-neutral-200"
            />
          </div>
          {isPendingCity && (
            <div className="relative">
              {" "}
              <SearchLoader />{" "}
            </div>
          )}
        </div>
        <Button disabled={isPendingCity || isPending}>Search</Button>
      </form>
    </>
  );
}
