import DailyForecastItem from "./DailyForecastItem";

export default function DailyForecast() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-preset-5 font-semibold">Daily forecast</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(103.66px,1fr))] tab:grid-cols-[repeat(auto-fit,minmax(89.14px,1fr))] desk:grid-cols-[repeat(auto-fit,minmax(100.57px,1fr))] gap-4 overflow-x-auto">
        <DailyForecastItem />
        <DailyForecastItem />
        <DailyForecastItem />
        <DailyForecastItem />
        <DailyForecastItem />
        <DailyForecastItem />
        <DailyForecastItem />
      </div>
    </div>
  );
}
