export default function WeatherInfoLoader() {
  return (
    <div className="text-center px-6 py-20 flex flex-col gap-4  bg-neutral-800  md:items-center  bg-no-repeat bg-cover bg-center md:flex-row md:justify-between  rounded-xl w-full ">
      <div className="flex relative justify-center items-center h-full w-full">
        <img
          src="/images/loading-container.svg"
          className="absolute"
          alt="Loading Container"
        />
      </div>
      <div className="flex opacity-0 gap-5 justify-center items-center">
        <img
          src="/images/icon-sunny.webp"
          alt=" hero icon"
          className="h-[120px]"
        />
        <h1 className="text-preset-1 italic font-semibold">"20"°</h1>
      </div>
    </div>
  );
}
