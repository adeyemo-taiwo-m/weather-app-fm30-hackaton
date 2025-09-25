import { createContext, useEffect, useState } from "react";
import { useWeatherDetails } from "../hooks/useWeatherDetails";
import useUserCity from "../hooks/useUserCity";

const WeatherContext = createContext();
export default function WeatherProvider({ children }) {
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

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [location, setLocation] = useState(null);
  console.log(location);
  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        throw new Error(err.message);
      }
    );
  }, []);

  const today = dayNames[new Date().getDay() - 1];
  const [selectedDay, setSelectedDay] = useState(today);
  const { userCity, isPendingUserCity } = useUserCity(location);

  const {
    weatherDetails: weatherData,
    refetch,
    isPending,
  } = useWeatherDetails(location);
  console.log(location, weatherData);
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
        location,
        setLocation,
        userCity,
        isPendingUserCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export { WeatherContext };
