import { createContext, useState } from "react";
import { useWeatherDetails } from "../hooks/useWeatherDetails";
import useCity from "../hooks/useCity";

const WeatherContext = createContext();
export default function WeatherProvider({ children }) {
  const { cityData } = useCity();
  const [selectedDay, setSelectedDay] = useState("Tuesday");

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const weatherMap = {
    0: "",
    1: "partly-cloudy",
    2: "partly-cloudy",
    3: "overcast",
    45: "fog",
    48: "fog",
    51: "drizzle",
    53: "drizzle",
    55: "drizzle",
    56: "drizzle",
    57: "drizzle",
    61: "rain",
    63: "rain",
    65: "rain",
    66: "rain",
    67: "rain",
    71: "snow",
    73: "snow",
    75: "snow",
    77: "snow",
    80: "rain",
    81: "rain",
    82: "rain",
    85: "snow",
    86: "snow",
    95: "storm",
    96: "storm",
    99: "storm",
  };
  const {
    weatherDetails: weatherData,
    refetch,
    isPending,
  } = useWeatherDetails(cityData);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        refetch,
        isPending,
        weatherMap,
        dayNames,
        selectedDay,
        setSelectedDay,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export { WeatherContext };
