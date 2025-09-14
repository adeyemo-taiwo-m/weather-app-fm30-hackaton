import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useOutSideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();
export default function Modal({ children }) {
  const [isOpenModal, setIsOpenModal] = useState("");
  const [position, setPosition] = useState({});
  const open = setIsOpenModal;
  const close = () => setIsOpenModal("");

  return (
    <ModalContext.Provider
      value={{ isOpenModal, open, close, position, setPosition }}
    >
      <div className={` relative  w-full h-screen`}>{children}</div>
    </ModalContext.Provider>
  );
}

function ModalButton({ iconName, children, name }) {
  const { setPosition, isOpenModal, open, position } = useContext(ModalContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e?.target.closest("button").getBoundingClientRect();
    // console.log(rect, window.innerWidth);
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: [rect.height + rect.y + 8, rect.y - 8, rect.y],
    });
    // Reset Name
    if (isOpenModal === "") open(name);
    else if (isOpenModal === name) open("");
    // set name
    console.log(rect, position);
  }
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`flex text-[14px]  cursor-pointer  justify-center tab:px-4 tab:py-3   px-[10px]   gap-[6px] tab:gap-[10px] items-center rounded-sm  ${
        iconName ? `py-2 bg-neutral-800` : `py-3 bg-neutral-600`
      }`}
    >
      {iconName && (
        <img className="h-[14px]" src={iconName} alt={`${iconName} icon`} />
      )}
      <span>{children}</span>
      <img
        className="h-[14px] w-[9px]"
        src="/images/icon-dropdown.svg"
        alt="svg icon dropdown"
      />
    </button>
  );
}

function ModalDayContent({ children, name }) {
  const { isOpenModal, close, position } = useContext(ModalContext);
  const modalRef = useOutSideClick(close);
  if (isOpenModal !== name) return null;
  console.log(position);
  return createPortal(
    <div
      ref={modalRef}
      style={{ top: position.y.at(0) }}
      className={`flex flex-col w-[214px] absolute   shadow-[inset_0_0_0_1px_#3c3b5e] p-2 gap-1 desk:right-28 tab:right-6  right-4   bg-neutral-800 rounded-md  z-50`}
    >
      {children}
    </div>,
    document.body
  );
}

Modal.ModalButton = ModalButton;
Modal.ModalDayContent = ModalDayContent;
