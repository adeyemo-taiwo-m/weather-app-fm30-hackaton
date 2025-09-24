export default function DailyForecastLoader() {
  return (
    <>
      {" "}
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className={`bg-neutral-800   h-[165px] shadow-[inset_0_0_0_1px_#3c3b5e] rounded-md`}
        />
      ))}
    </>
  );
}
