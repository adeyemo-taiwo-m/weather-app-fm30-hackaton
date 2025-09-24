import List from "../../ui/List";

export default function Day({ children, selected, onClick }) {
  return (
    <List
      onClick={onClick}
      otherClass={`   ${selected ? "bg-neutral-700" : ""} `}
    >
      {children}
    </List>
  );
}
