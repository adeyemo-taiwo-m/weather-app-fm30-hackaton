import WeatherDetailItem from "./WeatherDetailItem";

export default function WeatherDetails() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(163.5px,1fr))] gap-4 w-full ">
      <WeatherDetailItem
        weatherDetailValue={`${7}°`}
        weatherDetailTitle="Feels Like"
      />
      <WeatherDetailItem
        weatherDetailValue={`${24}%`}
        weatherDetailTitle="Humidity"
      />
      <WeatherDetailItem
        weatherDetailValue={`${64} km/h`}
        weatherDetailTitle="Wind"
      />
      <WeatherDetailItem
        weatherDetailValue={`${64} mm`}
        weatherDetailTitle="Precipitation"
      />
    </div>
  );
}
