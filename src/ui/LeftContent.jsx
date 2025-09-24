import DailyForecast from "../features/DailyForecast/DailyForecast";
import WeatherInfoContainer from "../features/WeatherInfo/WeatherInfoContainer";

export default function LeftContent() {
  return (
    <div className="flex flex-col gap-8 flex-1  ">
      <WeatherInfoContainer />

      <DailyForecast />
    </div>
  );
}
