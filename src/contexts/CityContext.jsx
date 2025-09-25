import { createContext, useState } from "react";
import useCity from "../hooks/useCity";

const CityContext = createContext();
export default function CityProvider({ children }) {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const { cityData, isPendingCityData } = useCity(query);

  const [cityName, setCityName] = useState("");
  console.log(cityName);
  return (
    <CityContext.Provider
      value={{
        cityData,
        isPendingCityData,
        query,
        setQuery,
        selectedCity,
        setSelectedCity,
        cityName,
        setCityName,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
export { CityContext };
