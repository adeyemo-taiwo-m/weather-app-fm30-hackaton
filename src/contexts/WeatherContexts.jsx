import { createContext } from "react";
import { useWeatherDetails } from "../hooks/useWeatherDetails";

const WeatherContext = createContext();
export default function WeatherProvider({ children }) {
  const { weatherDetails, isLoading } = useWeatherDetails();

  return (
    <WeatherContext.Provider
      value={{
        weatherDetails,
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export { WeatherContext };
