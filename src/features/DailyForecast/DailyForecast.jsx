import DailyForecastItem from "./DailyForecastItem";

import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContexts";
import DailyForecastLoader from "./DailyForecastLoader";

export default function DailyForecast() {
  const { weatherData, isPending } = useContext(WeatherContext) || {};
  const { time, weather_code, temperature_2m_min, temperature_2m_max } =
    weatherData?.daily || {};

  return (
    <div className="flex flex-col gap-5">
      <p className="text-preset-5 font-semibold">Daily forecast</p>
      <div className="grid  grid-cols-[repeat(auto-fit,minmax(103.66px,1fr))] tab:grid-cols-[repeat(auto-fit,minmax(89.14px,1fr))] desk:grid-cols-[repeat(auto-fit,minmax(100.57px,1fr))] gap-4 overflow-x-auto">
        {isPending ? (
          <DailyForecastLoader />
        ) : (
          time?.map((date, i) => {
            const daysOfWeek = new Date(date).toLocaleDateString("en-US", {
              weekday: "short",
            });
            return (
              <DailyForecastItem
                key={i}
                day={daysOfWeek}
                code={weather_code[i]}
                minTemp={temperature_2m_min[i]}
                maxTemp={temperature_2m_max[i]}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
