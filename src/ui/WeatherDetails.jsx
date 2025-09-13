import WeatherDetailItem from "../components/WeatherDetailItem";

export default function WeatherDetails() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(163.5px,1fr))] gap-4 w-full ">
      <WeatherDetailItem />
      <WeatherDetailItem />
      <WeatherDetailItem />
      <WeatherDetailItem />
    </div>
  );
}
