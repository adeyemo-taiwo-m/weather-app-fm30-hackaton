import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContexts";

export default function DailyForecastItem({ day, code, minTemp, maxTemp }) {
  const { isPending, weatherMap } = useContext(WeatherContext) || {};

  return (
    <div
      className={`bg-neutral-800  px-[10px] py-4  shadow-[inset_0_0_0_1px_#3c3b5e] rounded-md`}
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
