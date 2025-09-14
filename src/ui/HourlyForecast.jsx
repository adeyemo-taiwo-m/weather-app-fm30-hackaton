import DaysDropdown from "../components/DaysDropdown";
import HourlyForecastItem from "../components/HourlyForecastItem";
import Modal from "../components/Modal";

export default function HourlyForecast() {
  return (
    <div className="flex desk:min-w-96 flex-col tab:p-6 px-4 py-5 gap-4  bg-neutral-800 rounded-xl">
      <div className="flex justify-between items-center   ">
        <p className="text-preset-5 font-semibold ">Hourly forecast</p>
        <Modal.ModalButton name="day">Tuesday</Modal.ModalButton>
        <Modal.ModalDayContent name="day">
          <DaysDropdown />
        </Modal.ModalDayContent>
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
