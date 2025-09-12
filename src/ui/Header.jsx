import Logo from "./Logo";
import Settings from "./Settings";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />
      <Settings />
    </header>
  );
}
