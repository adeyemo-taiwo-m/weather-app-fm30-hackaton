import DailyForecast from "./DailyForecast";
import WeatherInfoContainer from "./WeatherInfoContainer";

export default function LeftContent() {
  return (
    <div className="flex flex-col gap-8 ">
      <WeatherInfoContainer />
      <DailyForecast />
    </div>
  );
}
