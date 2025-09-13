import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useOutSideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();
export default function Modal({ children }) {
  const [isOpenModal, setIsOpenModal] = useState("");
  const open = setIsOpenModal;
  const close = () => setIsOpenModal("");

  return (
    <ModalContext.Provider value={{ isOpenModal, open, close }}>
      <div className={` relative  w-full h-screen`}>{children}</div>
    </ModalContext.Provider>
  );
}

function ModalButton({ iconName, children, name }) {
  const { open } = useContext(ModalContext);
  return (
    <button
      onClick={() => open(name)}
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
  const { isOpenModal, close } = useContext(ModalContext);
  const modalRef = useOutSideClick(close);
  if (isOpenModal !== name) return null;
  return createPortal(
    <div
      ref={modalRef}
      className="flex flex-col w-[214px] absolute   shadow-[inset_0_0_0_1px_#3c3b5e] p-2 gap-1   bg-neutral-800 rounded-md right-4 tab:right-6 desk:right-28  top-16 "
    >
      {children}
    </div>,
    document.body
  );
}

Modal.ModalButton = ModalButton;
Modal.ModalDayContent = ModalDayContent;
