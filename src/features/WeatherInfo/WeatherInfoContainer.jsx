import WeatherDetails from "../WeatherDetails/WeatherDetails";
import WeatherInfo from "./WeatherInfo";

export default function WeatherInfoContainer() {
  return (
    <div className="space-y-5">
      <WeatherInfo />
      <WeatherDetails />
    </div>
  );
}
