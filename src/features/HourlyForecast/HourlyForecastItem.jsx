import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContexts";

export default function HourlyForecastItem({ imageName, time, temp }) {
  const { isPending } = useContext(WeatherContext);
  console.log(imageName);
  return (
    <div className="flex justify-between  items-center pl-3 pr-4 py-[10px] bg-neutral-700 shadow-[inset_0_0_0_1px_#3c3b5e]  rounded-base">
      {
        <>
          <div
            className={`flex gap-2 ${isPending && `opacity-0`}  items-center`}
          >
            <img
              src={`/images/icon-${imageName}.webp`}
              alt={`${imageName} icon`}
              className="w-10"
            />
            <p className="text-preset-5 font-medium">{time} </p>
          </div>
          <p
            className={` text-preset-7 ${isPending && `opacity-0`} font-light`}
          >
            {temp}°
          </p>
        </>
      }
    </div>
  );
}
