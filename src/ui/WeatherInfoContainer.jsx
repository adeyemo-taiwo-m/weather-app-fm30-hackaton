import WeatherDetails from "../components/WeatherDetails";
import WeatherInfo from "../components/WeatherInfo";

export default function WeatherInfoContainer() {
  return (
    <div>
      <WeatherInfo />
      <WeatherDetails />
    </div>
  );
}
