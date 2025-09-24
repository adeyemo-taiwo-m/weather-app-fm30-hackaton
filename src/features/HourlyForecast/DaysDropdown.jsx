import { useContext } from "react";
import Day from "./Day";
import { WeatherContext } from "../../contexts/WeatherContexts";

export default function DaysDropdown({ onClick }) {
  const { dayNames, selectedDay, setSelectedDay } = useContext(WeatherContext);

  return (
    <ul className="space-y-1 ">
      {dayNames?.map((day) => (
        <Day
          key={day}
          onClick={() => {
            setSelectedDay(day);
            onClick();
          }}
          selected={selectedDay === day}
        >
          {day}
        </Day>
      ))}
    </ul>
  );
}
