import { useContext } from "react";
import WeatherDetailItem from "./WeatherDetailItem";
import { WeatherContext } from "../../contexts/WeatherContexts";

export default function WeatherDetails() {
  const { weatherData, isPending } = useContext(WeatherContext) || {};

  console.log(weatherData);
  const {
    apparent_temperature: feelsLike,
    relative_humidity_2m: humidy,
    wind_speed_10m: wind,
    precipitation,
  } = (weatherData && weatherData.current) || {};

  const fmt = (v, unit = "") =>
    v === undefined || v === null || Number.isNaN(v)
      ? `-`
      : `${Math.round(v)}${unit}`;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(163.5px,1fr))] gap-4 w-full ">
      <WeatherDetailItem
        weatherDetailValue={isPending ? `-` : fmt(feelsLike, "°")}
        weatherDetailTitle="Feels Like"
      />
      <WeatherDetailItem
        weatherDetailValue={isPending ? `-` : fmt(humidy, "%")}
        weatherDetailTitle="Humidity"
      />
      <WeatherDetailItem
        weatherDetailValue={isPending ? `-` : fmt(wind, " km/h")}
        weatherDetailTitle="Wind"
      />
      <WeatherDetailItem
        weatherDetailValue={isPending ? `-` : fmt(precipitation, " mm")}
        weatherDetailTitle="Precipitation"
      />
    </div>
  );
}
