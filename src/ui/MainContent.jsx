import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

export default function MainContent() {
  return (
    <section className="space-y-8 ">
      <Search />
      <div>
        <WeatherInfo />
      </div>
    </section>
  );
}
