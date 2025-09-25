export default function SearchDropdown({ children }) {
  return (
    <div className="space-y-1 absolute  bg-neutral-800 w-full  text-xl  gap-4  text-neutal-200 px-6 py-4 rounded-md z-80 flex items-center shadow-[inset_0_0_0_1px_#3c3b5e]">
      {children}
    </div>
  );
}
