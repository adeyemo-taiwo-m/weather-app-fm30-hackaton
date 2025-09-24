export default function HourlyForecastItem({ imageName, time, temp }) {
  console.log(imageName);
  return (
    <div className="flex justify-between  items-center pl-3 pr-4 py-[10px] bg-neutral-700 shadow-[inset_0_0_0_1px_#3c3b5e]  rounded-base">
      {
        <>
          <div className={`flex gap-2  items-center`}>
            <img
              src={`/images/icon-${imageName}.webp`}
              alt={`${imageName} icon`}
              className="w-10"
            />
            <p className="text-preset-5 font-medium">{time} </p>
          </div>
          <p className={` text-preset-7  font-light`}>{temp}°</p>
        </>
      }
    </div>
  );
}
