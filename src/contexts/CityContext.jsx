import { createContext } from "react";
import useCity from "../hooks/useCity";

const CityContext = createContext();
export default function CityProvider({ children }) {
  const { city, isLoadingCity } = useCity();

  return (
    <CityContext.Provider
      value={{
        city,
        isLoadingCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
export { CityContext };
