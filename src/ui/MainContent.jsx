import Search from "../features/Search/Search";
import Content from "./Content";

export default function MainContent() {
  return (
    <section className="space-y-8 ">
      <Search />
      <Content />
    </section>
  );
}
