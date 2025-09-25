// import { useContext, useEffect, useState } from "react";
import SearchDropdownListItem from "./SearchDropdownListItem";
import { useContext, useEffect, useState } from "react";
import { CityContext } from "../../contexts/CityContext";
import { WeatherContext } from "../../contexts/WeatherContexts";

export default function SearchDropdownList() {
  const { cityData, selectedCity, setSelectedCity, setQuery, setCityName } =
    useContext(CityContext) || {};
  const { refetch, setLocation } = useContext(WeatherContext);
  const [results, setResults] = useState([]);
  useEffect(() => {
    cityData?.results &&
      setResults((cityNames) => {
        return [...cityNames, cityData?.results];
      });
  }, [cityData]);

  const unqueResults = results?.filter(
    (city, i, self) =>
      i ===
      self.findIndex((c) => c.name === city.name && c.country === city.country)
  );

  return (
    <>
      <ul className="space-y-1  p-2 absolute  bg-neutral-800 w-full  text-xl  gap-4  text-neutal-200 px-6 py-4 z-80 rounded-md   shadow-[inset_0_0_0_1px_#3c3b5e]">
        {unqueResults?.map((city, i) => {
          const name = city[i].name;
          const countryName = city[i].country;
          return (
            <SearchDropdownListItem
              key={i}
              selected={selectedCity === city}
              onClick={() => {
                const { latitude, longitude } = city[0];
                const location = { latitude, longitude };
                console.log(location);
                setSelectedCity(city);
                console.log(city);
                setCityName(`${city[0]?.name} , ${city[0]?.country}`);
                setLocation(location);

                refetch();
                setQuery("");
              }}
            >{`${name}, ${countryName}`}</SearchDropdownListItem>
          );
        })}
      </ul>
    </>
  );
}
