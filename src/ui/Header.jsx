import Logo from "./Logo";
import Settings from "../features/Settings/Settings";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />
      <Settings />
    </header>
  );
}
