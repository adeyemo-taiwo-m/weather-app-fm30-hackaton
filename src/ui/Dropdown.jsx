import { useState } from "react";
import useOutSideClick from "../hooks/useOutsideClick";

export default function DropdownMenu({ iconName, dropdownTitle, children }) {
  const [open, setOpen] = useState(false);
  const modalRef = useOutSideClick(() => setOpen(false));

  return (
    <div className="relative inline-block text-left space-y-[10px]">
      {/* Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex text-[14px]  cursor-pointer  justify-center tab:px-4 tab:py-3   px-[10px]   gap-[6px] tab:gap-[10px] items-center rounded-sm  ${
          iconName ? `py-2 bg-neutral-800` : `py-3 bg-neutral-600`
        }`}
      >
        {iconName && (
          <img className="h-[14px]" src={iconName} alt={`${iconName} icon`} />
        )}
        <span>{dropdownTitle}</span>
        <img
          className="h-[14px] w-[9px]"
          src="/images/icon-dropdown.svg"
          alt="svg icon dropdown"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={modalRef}
          className={`flex flex-col w-[214px] right-0 absolute shadow-[inset_0_0_0_1px_#3c3b5e] p-2 gap-1  bg-neutral-800 rounded-md `}
        >
          {children}
        </div>
      )}
    </div>
  );
}
