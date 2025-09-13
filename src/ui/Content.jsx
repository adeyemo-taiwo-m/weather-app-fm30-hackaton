import HourlyForecast from "./HourlyForecast";
import LeftContent from "./LeftContent";

export default function Content() {
  return (
    <div className="flex flex-col gap-8">
      <LeftContent />
      <HourlyForecast />
    </div>
  );
}
