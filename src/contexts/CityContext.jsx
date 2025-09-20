import { createContext, useState } from "react";
// import useCity from "../hooks/useCity";

const CityContext = createContext();
export default function CityProvider({ children }) {
  const [cityData, setCityData] = useState(null);
  // const { city, isLoadingCity } = useCity();
  // console.log(city);

  return (
    <CityContext.Provider
      value={{
        cityData,
        setCityData,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
export { CityContext };
