export default function WeatherDetailItem() {
  return (
    <div className="flex flex-col gap-6 flex-1  max-w-[165px] min-w-[163.5px]  p-5 bg-neutral-600 rounded-md">
      <p className="text-preset-6">Feels Like</p>
      <h3 className="text-preset-3 font-light">18°</h3>
    </div>
  );
}
