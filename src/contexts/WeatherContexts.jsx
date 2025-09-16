import { createContext } from "react";
import { useFetchWeatherDetails } from "../hooks/useFetchWeatherDetails";

const WeatherContext = createContext();
export default function WeatherProvider({ children }) {
  const { weatherDetails, error, isLoading } = useFetchWeatherDetails();
  //   console.log(weatherDetails);

  return (
    <WeatherContext.Provider value={{ weatherDetails, isLoading, error }}>
      {children}
    </WeatherContext.Provider>
  );
}
export { WeatherContext };
