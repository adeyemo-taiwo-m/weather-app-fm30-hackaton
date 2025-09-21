import { createContext } from "react";
import { useWeatherDetails } from "../hooks/useWeatherDetails";
import useCity from "../hooks/useCity";

const WeatherContext = createContext();
export default function WeatherProvider({ children }) {
  const { cityData } = useCity();
  const { weatherDetails: weatherData, isPending } =
    useWeatherDetails(cityData);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        isPending,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export { WeatherContext };
