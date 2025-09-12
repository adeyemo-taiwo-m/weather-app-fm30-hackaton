import WeatherDetailItem from "../components/WeatherDetailItem";

export default function WeatherDetails() {
  return (
    <div className="flex flex-wrap gap-4 w-full ">
      <WeatherDetailItem />
      <WeatherDetailItem />
      <WeatherDetailItem />
      <WeatherDetailItem />
    </div>
  );
}
