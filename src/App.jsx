import Header from "./ui/Header";
import Title from "./ui/Title";
import MainContent from "./ui/MainContent";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  return (
    <>
      <ReactQueryDevtools />
      <main className="p-4 tab:p-6 flex flex-col gap-12">
        <Header />
        <Title />
        <MainContent />
      </main>
    </>
  );
}
