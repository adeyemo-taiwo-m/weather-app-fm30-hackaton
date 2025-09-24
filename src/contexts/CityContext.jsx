import { createContext, useState } from "react";
import useCity from "../hooks/useCity";

const CityContext = createContext();
export default function CityProvider({ children }) {
  const [query, setQuery] = useState("Berlin");
  const { cityData, isPendingCityData } = useCity(query);
  return (
    <CityContext.Provider
      value={{
        cityData,
        isPendingCityData,
        query,
        setQuery,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
export { CityContext };
