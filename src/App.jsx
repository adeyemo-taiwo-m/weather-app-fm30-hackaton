import Header from "./ui/Header";
import Title from "./ui/Title";
import MainContent from "./ui/MainContent";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  const mainClassName = `p-4 tab:p-6 mb-20 desk:px-28 desk:pt-12 flex flex-col gap-12 desk:gap-16`;
  return (
    <>
      <main className={mainClassName}>
        <Header />
        <Title />
        <MainContent />
      </main>{" "}
    </>
  );
}
