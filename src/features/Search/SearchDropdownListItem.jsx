export default function SearchDropdownListItem({
  children,
  selected,
  onClick,
}) {
  return (
    <li
      onClick={onClick}
      className={` w-full bg-neutral-800 text-xl  gap-4 relative text-neutal-200 px-2 py-2.5 rounded-base flex flex-col  ${
        selected && "shadow-[inset_0_0_0_1px_#3c3b5e]"
      } `}
    >
      {children}
    </li>
  );
}
