import DaysDropdown from "./DaysDropdown";
import DropdownMenu from "../../ui/DropdownMenu";
import HourlyForecastItem from "./HourlyForecastItem";

export default function HourlyForecast() {
  return (
    <div className="flex desk:min-w-96 flex-col tab:p-6 px-4 py-5 gap-4  bg-neutral-800 rounded-xl">
      <div className="flex justify-between items-center   ">
        <p className="text-preset-5 font-semibold ">Hourly forecast</p>

        <DropdownMenu dropdownTitle={"Tuesday"}>
          <DaysDropdown />
        </DropdownMenu>
      </div>
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
    </div>
  );
}
