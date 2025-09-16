import SearchDropdown from "../../ui/DropdownSearch";

export default function SearchLoader() {
  return (
    <SearchDropdown>
      <img
        src="/images/icon-loading.svg"
        alt="search icon"
        className="loader-spin w-4"
      />
      <p>Search for a place</p>
    </SearchDropdown>
  );
}
