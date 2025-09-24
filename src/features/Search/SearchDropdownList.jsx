// import { useContext, useEffect, useState } from "react";
import SearchDropdownListItem from "./SearchDropdownListItem";
import DropdownMenu from "../../ui/DropdownMenu";
import { useContext, useEffect, useState } from "react";
import { CityContext } from "../../contexts/CityContext";
export default function SearchDropdownList() {
  const { cityData } = useContext(CityContext) || {};
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (cityData?.results)
      setSearchResults((prev) => [...prev, cityData?.results.at(0).name]);
  }, [cityData]);
  // const a = [`taiwo` , `kenny` , `Olashile`]
  console.log(searchResults);
  return (
    <>
      <ul className="space-y-1 w-full p-2">
        {searchResults?.map((item) => {
          <SearchDropdownListItem>{item}</SearchDropdownListItem>;
        })}
      </ul>
    </>
  );
}
