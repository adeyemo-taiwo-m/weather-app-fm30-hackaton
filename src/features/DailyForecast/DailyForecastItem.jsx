export default function DailyForecastItem() {
  return (
    <div className="flex flex-col items-center w-full  gap-4 bg-neutral-800 px-[10px] py-4 shadow-[inset_0_0_0_1px_#3c3b5e] rounded-md">
      <p className="text-preset-6 font-medium">Tue</p>
      <img
        src="/images/icon-drizzle.webp"
        alt="Drizzle icon"
        className="w-[60px]"
      />
      <div className="flex flex-1 items-center justify-around w-full">
        <p>20°</p>
        <p className="opacity-80">14°</p>
      </div>
    </div>
  );
}
