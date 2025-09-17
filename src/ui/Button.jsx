export default function Button({
  children,
  otherStyle,
  onClick,
  disabled,

  type = "primary",
}) {
  const style = {
    primary: `px-6 py-4 cursor-pointer bg-blue-primary-500 hover:bg-blue-primary-700 w-full tab:w-fit h-fit  rounded-md text-xl  ${otherStyle}
      `,
    secondary: `px-6 py-4 cursor-pointer bg-neutral-800 w-full tab:w-fit  rounded-md text-xl ${otherStyle}`,
  };
  return (
    <button disabled={disabled} onClick={onClick} className={style[type]}>
      {children}
    </button>
  );
}
