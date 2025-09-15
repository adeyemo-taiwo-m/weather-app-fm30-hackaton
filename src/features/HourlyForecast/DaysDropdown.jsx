import Day from "./Day";

export default function DaysDropdown() {
  return (
    <ul className="space-y-1">
      <Day selected={true}>Monday</Day>
      <Day>Tuesday</Day>
      <Day>Wednesday</Day>
      <Day>Thurday</Day>
      <Day>Friday</Day>
      <Day>Saturday</Day>
      <Day>Sunrday</Day>
    </ul>
  );
}
