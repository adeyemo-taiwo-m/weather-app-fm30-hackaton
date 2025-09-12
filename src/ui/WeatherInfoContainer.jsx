import WeatherDetails from "./WeatherDetails";
import WeatherInfo from "../components/WeatherInfo";

export default function WeatherInfoContainer() {
  return (
    <div className="space-y-5">
      <WeatherInfo />
      <WeatherDetails />
    </div>
  );
}
