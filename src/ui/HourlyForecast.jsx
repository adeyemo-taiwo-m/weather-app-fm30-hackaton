import HourlyForecastItem from "../components/HourlyForecastItem";
import Modal from "../components/Modal";

export default function HourlyForecast() {
  return (
    <div className="flex flex-col tab:p-6 px-4 py-5 gap-4  bg-neutral-800 rounded-xl">
      <div className="flex justify-between items-center   ">
        <p className="text-preset-5 font-semibold ">Hourly forecast</p>
        <Modal.ModalButton>Tuesday</Modal.ModalButton>
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
