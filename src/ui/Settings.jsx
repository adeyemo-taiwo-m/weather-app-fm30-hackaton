import { HiChevronDown } from "react-icons/hi";

export default function Settings() {
  return (
    <button className="flex text-[14px]  justify-center tab:px-4 tab:py-3   px-[10px] py-2 gap-[6px] tab:gap-[10px] items-center rounded-sm bg-neutral-800  ">
      <img
        className="h-[14px]"
        src="/images/icon-units.svg"
        alt="svg icon units"
      />
      <span> Units</span>
      {/* <HiChevronDown /> */}
      <img
        className="h-[14px] w-[9px]"
        src="/images/icon-dropdown.svg"
        alt="svg icon search"
      />
    </button>
  );
}
