import { createContext, useState } from "react";

const WeatherContext = createContext();
export default function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        isPending,
        setIsPending,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export { WeatherContext };
