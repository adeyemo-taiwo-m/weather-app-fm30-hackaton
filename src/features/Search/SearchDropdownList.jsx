import SearchDropdownListItem from "./SearchDropdownListItem";

export default function SearchDropdownList() {
  return (
    <ul className="space-y-1 w-full p-2">
      <SearchDropdownListItem selected={true}>Taiwo</SearchDropdownListItem>
      <SearchDropdownListItem>Taiwo</SearchDropdownListItem>
      <SearchDropdownListItem>Taiwo</SearchDropdownListItem>
      <SearchDropdownListItem>Taiwo</SearchDropdownListItem>
    </ul>
  );
}
