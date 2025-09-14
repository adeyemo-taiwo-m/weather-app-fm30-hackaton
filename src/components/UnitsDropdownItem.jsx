import List from "./List";

export default function UnitDropdownItem({ stateName, stateOne, stateTwo }) {
  return (
    <div className="space-y-2">
      <p className="text-preset-8 px-2  text-neutral-300">
        {stateName || `Temprature`}
      </p>
      <ul className="space-y-1">
        <List checked={true}>{stateOne || `Celsius (°C)`}</List>
        <List>{stateTwo || `Fahrenheit (°F)`}</List>
      </ul>
    </div>
  );
}
