import { useState } from "react";
import List from "./List";

export default function Day({ children, selected }) {
  const [selectedDay, setSelectedDay] = useState(selected);
  return (
    <List
      onClick={() => {
        setSelectedDay((day) => !day);
      }}
      otherClass={`   ${selectedDay ? "bg-neutral-700" : ""} `}
    >
      {children}
    </List>
  );
}
