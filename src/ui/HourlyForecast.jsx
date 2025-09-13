import HourlyForecastItem from "../components/HourlyForecastItem";

export default function HourlyForecast() {
  return (
    <div>
      <div className="flex justify-between items-center  ">
        <p className="text-preset-5 font-semibold ">Hourly forecast</p>
        <select
          id="day"
          name="day"
          className="bg-neutral-800  px-4 py-2 rounded-base  border-r-neutral-600 "
        >
          <option value="tuesday">Tuesday</option>
        </select>
      </div>
      <HourlyForecastItem />
    </div>
  );
}
