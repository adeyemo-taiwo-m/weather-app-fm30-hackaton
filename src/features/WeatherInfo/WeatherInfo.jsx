import { useContext } from "react";
import { formatDate } from "../../utils/helpers";
import { WeatherContext } from "../../contexts/WeatherContexts";
import Loader from "../../ui/Loader";

export default function WeatherInfo() {
  // const { cityData } = useContext(CityContext);
  const { weatherData, isPending, userCity, isPendingUserCity } =
    useContext(WeatherContext) || {};
  const { city, countryName } = userCity || {};
  const { temperature_2m } = (weatherData && weatherData?.current) || {};

  return (
    <div
      className={`text-center relative px-6 py-20 flex flex-col gap-4  ${
        isPending
          ? "bg-neutral-800"
          : `bg-[url(/images/bg-today-small.svg)] mob-tab:bg-[url(/images/bg-today-large.svg)]`
      }  md:items-center  bg-no-repeat bg-cover bg-center md:flex-row md:justify-between  rounded-xl w-full`}
    >
      <div className={`md:text-left ${isPending && `opacity-0`} `}>
        <h3 className="text-preset-4 font-bold">
          {isPendingUserCity ? <Loader size={20} /> : `${city}, ${countryName}`}
        </h3>
        <p className="text-preset-6 opacity-80">{formatDate(new Date())}</p>
      </div>
      <div
        className={`flex gap-5 justify-center items-center ${
          isPending && `opacity-0`
        }`}
      >
        <img
          src="/images/icon-sunny.webp"
          alt=" hero icon"
          className="h-[120px]"
        />
        <h1 className="text-preset-1 italic font-semibold">
          {weatherData ? Math.round(temperature_2m) : "20"}°
        </h1>
      </div>
      {isPending && (
        <div className="flex absolute right-1/2 translate-x-1/2  justify-center items-center h-full ">
          <img src="/images/loading-container.svg" alt="Loading Container" />
        </div>
      )}
    </div>
  );
}
