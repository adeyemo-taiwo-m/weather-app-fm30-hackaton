import SearchDropdown from "../../ui/DropdownSearch";
import Loader from "../../ui/Loader";

export default function SearchLoader() {
  return (
    <SearchDropdown>
      <Loader />
      <p>Search for a place</p>
    </SearchDropdown>
  );
}
