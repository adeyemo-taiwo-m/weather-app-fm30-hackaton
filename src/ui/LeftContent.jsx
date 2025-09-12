import DailyForecast from "./DailyForecast";
import WeatherInfoContainer from "./WeatherInfoContainer";

export default function LeftContent() {
  return (
    <div>
      <WeatherInfoContainer />
      <DailyForecast />
    </div>
  );
}
