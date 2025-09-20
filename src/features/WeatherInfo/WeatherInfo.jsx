import { useContext } from "react";
import { CityContext } from "../../contexts/CityContext";
import formatDate from "../../utils/helpers";
import { WeatherContext } from "../../contexts/WeatherContexts";

export default function WeatherInfo() {
  const { cityData } = useContext(CityContext);
  const { weatherData } = useContext(WeatherContext);
  const { name, country } = (cityData && cityData.results?.at(0)) || {};
  const { temperature_2m } = (weatherData && weatherData?.current) || {};
  console.log(weatherData);

  return (
    <div className="text-center px-6 py-20 flex flex-col gap-4  bg-[url(/images/bg-today-small.svg)] mob-tab:bg-[url(/images/bg-today-large.svg)] md:items-center  bg-no-repeat bg-cover bg-center md:flex-row md:justify-between  rounded-xl w-full ">
      <div className="md:text-left">
        <h3 className="text-preset-4 font-bold">
          {cityData ? `${name}, ${country}` : "Berlin, Germany"}
        </h3>
        <p className="text-preset-6 opacity-80">{formatDate(new Date())}</p>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <img
          src="/images/icon-sunny.webp"
          alt=" hero icon"
          className="h-[120px]"
        />
        <h1 className="text-preset-1 italic font-semibold">
          {weatherData ? Math.round(temperature_2m) : "20"}°
        </h1>
      </div>
    </div>
  );
}
