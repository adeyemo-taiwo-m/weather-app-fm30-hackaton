export default function WeatherInfo() {
  return (
    <div className="text-center px-6 py-[41px] flex flex-col gap-4  bg-[url(/images/bg-today-small.svg)] mob-tab:bg-[url(/images/bg-today-large.svg)] md:items-center  bg-no-repeat bg-cover bg-center md:flex-row md:justify-between  rounded-xl w-full ">
      <div className="md:text-left">
        <h3 className="text-[28px] font-bold">Berlin, Germany</h3>
        <p className="text-[18px] opacity-80">Tuesday, Aug 5 , 2025</p>
      </div>
      <div className="flex gap-5 justify-center ">
        <img
          src="/images/icon-sunny.webp"
          alt=" hero icon"
          className="h-[120px]"
        />
        <h1 className="text-8xl italic font-semibold">20°</h1>
      </div>
    </div>
  );
}
