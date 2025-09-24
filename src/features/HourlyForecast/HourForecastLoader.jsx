export default function HourlyForecastLoader() {
  return Array.from({ length: 24 }).map((_, i) => (
    <div
      key={i}
      className="flex justify-between  items-center pl-3 pr-4 py-[10px] bg-neutral-700 shadow-[inset_0_0_0_1px_#3c3b5e]  rounded-base"
    >
      <div className={`flex gap-2  opacity-0 items-center`}>
        <img src={`/images/icon-fog.webp`} alt={`Fog icon`} className="w-10" />
        <p className="text-preset-5 font-medium">2 </p>
      </div>
      <p className={` text-preset-7 opacity-0  font-light`}>40°</p>
    </div>
  ));
}
