import { useEffect, useRef } from "react";
import Button from "../ui/Button";

export default function useOutSideClick(handleCloseModal, buttonRef) {
  const modalRef = useRef(null);

  useEffect(
    function () {
      function handleClick(e) {
        if (
          modalRef.current &&
          !modalRef.current?.contains(e.target) &&
          buttonRef.current &&
          !buttonRef.current?.contains(e.target)
        ) {
          handleCloseModal();
        }
      }

      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handleCloseModal, buttonRef]
  );
  return modalRef;
}
