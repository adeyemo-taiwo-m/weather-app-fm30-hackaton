import { useContext } from "react";
import Search from "../features/Search/Search";
import Content from "./Content";
import { WeatherContext } from "../contexts/WeatherContexts";

export default function MainContent() {
  const { weatherDetails } = useContext(WeatherContext);
  console.log(weatherDetails);
  return (
    <section className="space-y-8 ">
      <Search />
      <Content />
    </section>
  );
}
