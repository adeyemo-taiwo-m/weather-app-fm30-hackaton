export default function WeatherDetailItem() {
  return (
    <div className="flex flex-col gap-6   p-5 bg-neutral-800 shadow-[inset_0_0_0_1px_#3c3b5e] bordr-r-neutral-600 rounded-md">
      <p className="text-preset-6">Feels Like</p>
      <h3 className="text-preset-3 font-light">18°</h3>
    </div>
  );
}
