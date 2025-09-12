export default function Button({ children }) {
  return (
    <button className="px-6 py-4 bg-blue-primary-500 w-full tab:w-fit  rounded-md text-xl">
      {children}
    </button>
  );
}
