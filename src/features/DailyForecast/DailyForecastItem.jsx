import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContexts";

export default function DailyForecastItem({ day, code, minTemp, maxTemp }) {
  const { isPending } = useContext(WeatherContext);
  const weatherMap = {
    0: "",
    1: "-partly-cloudy",
    2: "-partly-cloudy",
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
  return (
    <div
      className={`bg-neutral-800 px-[10px] py-4  shadow-[inset_0_0_0_1px_#3c3b5e] rounded-md`}
    >
      <div
        className={`${
          isPending && "opacity-0"
        }  h-full flex flex-col items-center w-full  gap-4 `}
      >
        <p className="text-preset-6 font-medium">{day}</p>
        <img
          src={`/images/icon-${weatherMap[code]}.webp`}
          alt={`${weatherMap[code]} icon`}
          className="w-[60px]"
        />
        <div className="flex flex-1 items-center justify-around w-full">
          <p>{Math.round(minTemp)}°</p>
          <p className="opacity-80">{Math.round(maxTemp)}°</p>
        </div>
      </div>
    </div>
  );
}
