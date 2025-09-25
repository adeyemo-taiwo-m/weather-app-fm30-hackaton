import { useContext } from "react";
import { formatDate } from "../../utils/helpers";
import { WeatherContext } from "../../contexts/WeatherContexts";
import Loader from "../../ui/Loader";
import { CityContext } from "../../contexts/CityContext";

export default function WeatherInfo() {
  const { weatherData, isPending, isPendingUserCity } =
    useContext(WeatherContext) || {};
  const { cityName } = useContext(CityContext);
  // const { city, countryName } = userCity || {};
  // const { name, country } = (cityData && cityData?.results?.at(0)) || {};
  const { temperature_2m } = (weatherData && weatherData?.current) || {};
  // console.log(cityData, name, city, countryName, country);
  // useEffect(() => {
  //   if (!cityData) {
  //     setCityName(`${city}, ${countryName}`);
  //   }
  // }, [cityData, name, city, countryName, country, setCityName]);
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
          {isPendingUserCity ? <Loader size={20} /> : cityName}
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
          {weatherData && Math.round(temperature_2m)}°
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
