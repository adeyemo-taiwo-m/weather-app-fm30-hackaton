import DropdownMenu from "../../ui/DropdownMenu";
import UnitsDropdown from "./UnitsDropdown";

export default function Settings() {
  return (
    <>
      <DropdownMenu
        dropdownTitle="Units"
        iconName="/images/icon-units.svg"
        otherButtonStyle=" focus-within:ring-2 focus-within:ring-white  focus-within:ring-offset-4 focus-within:ring-offset-neutral-900"
      >
        <UnitsDropdown />
      </DropdownMenu>
    </>
  );
}
