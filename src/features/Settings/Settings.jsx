import DropdownMenu from "../../ui/Dropdown";
import UnitsDropdown from "./UnitsDropdown";

export default function Settings() {
  return (
    <>
      <DropdownMenu dropdownTitle="Units" iconName="/images/icon-units.svg">
        <UnitsDropdown />
      </DropdownMenu>
    </>
  );
}
