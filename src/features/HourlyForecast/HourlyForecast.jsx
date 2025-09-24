import DaysDropdown from "./DaysDropdown";
import DropdownMenu from "../../ui/DropdownMenu";
import HourlyForecastItem from "./HourlyForecastItem";
import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContexts";
import { formatTo12Hour } from "../../utils/helpers";

export default function HourlyForecast() {
  const { weatherData, weatherMap, dayNames, selectedDay } =
    useContext(WeatherContext);
  const { time, temperature_2m, weather_code } = weatherData?.hourly || {};
  const days = dayNames.map((day, i) => {
    return {
      day,
      time: time?.slice(i * 24, (i + 1) * 24),
      temperature: temperature_2m?.slice(i * 24, (i + 1) * 24),
      weatherCode: weather_code?.slice(i * 24, (i + 1) * 24),
    };
  });
  const currentDay = days.find((dayObj) => dayObj.day === selectedDay);
  return (
    <div className="flex desk:min-w-96 h-full   flex-col tab:p-6 px-4 py-5 gap-4  bg-neutral-800 rounded-xl">
      <div className="flex justify-between items-center   ">
        <p className="text-preset-5 font-semibold ">Hourly forecast</p>

        <DropdownMenu dropdownTitle={selectedDay}>
          <DaysDropdown />
        </DropdownMenu>
      </div>
      <div className="overflow-y-auto flex flex-col gap-4   scrollbar-hide  ">
        {currentDay?.time?.map((_, i) => (
          <HourlyForecastItem
            key={i}
            imageName={weatherMap[currentDay?.weatherCode?.[i]]}
            time={formatTo12Hour(currentDay?.time?.[i])}
            temp={Math.round(currentDay?.temperature?.[i])}
          />
        ))}
      </div>
    </div>
  );
}
