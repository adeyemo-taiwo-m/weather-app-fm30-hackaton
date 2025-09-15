import { useState } from "react";

export default function List({
  children,
  checked = false,
  otherClass = "",
  onClick = () => {},
}) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <li
      onClick={() => {
        {
          if (!otherClass)
            if (isChecked) {
              setIsChecked(false);
              checked = false;
            } else {
              setIsChecked((check) => !check);
            }
          // isChecked ? setIsChecked(false) : setIsChecked((check) => !check);

          onClick();
        }
      }}
      className={
        ` px-2 py-[10px] rounded-base hover:bg-neutral-700 w-full cursor-pointer ${
          isChecked ? " flex  items-center justify-between" : ""
        }` +
        " " +
        otherClass
      }
    >
      {children}{" "}
      {isChecked && (
        <span>
          <img src="/images/icon-checkmark.svg" alt="check icon" />
        </span>
      )}
    </li>
  );
}
