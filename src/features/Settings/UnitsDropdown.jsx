import UnitDropdownItem from "./UnitsDropdownItem";

export default function UnitsDropdown() {
  return (
    <ul className="space-y-1">
      <p
        className="  px-2 py-[10px]  rounded-base hover:bg-neutral-700 w-full cursor-pointer 
        "
      >
        Switch to Metric
      </p>

      <UnitDropdownItem />
      <UnitDropdownItem
        stateName={"Wind Speed"}
        stateOne={"km/h"}
        stateTwo={"mph"}
      />
      <UnitDropdownItem
        stateName={"Precipitation"}
        stateOne={"Millimeters (mm)"}
        stateTwo={"Inches (in)"}
      />
    </ul>
  );
}
