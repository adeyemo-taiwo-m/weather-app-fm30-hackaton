import { useState } from "react";

export default function Day({ children, selected }) {
  const [selectedDay, setSelectedDay] = useState(selected);
  return (
    <li
      onClick={() => {
        setSelectedDay((day) => !day);
      }}
      className={`  px-2 py-[10px] rounded-base hover:bg-neutral-700 w-full cursor-pointer   ${
        selectedDay ? "bg-neutral-700" : ""
      } `}
    >
      {children}
    </li>
  );
}
