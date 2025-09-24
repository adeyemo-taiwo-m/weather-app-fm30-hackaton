import HourlyForecast from "../features/HourlyForecast/HourlyForecast";
import LeftContent from "./LeftContent";

export default function Content() {
  return (
    <div className="flex flex-col   desk:flex-row desk:h-180 h-[685px] gap-8">
      <LeftContent />
      <HourlyForecast />
    </div>
  );
}
