import { useEffect, useRef } from "react";

export default function useOutSideClick(handleCloseModal) {
  const modalRef = useRef(null);
  useEffect(
    function () {
      function handleClick(e) {
        if (modalRef.current && !modalRef.current?.contains(e.target)) {
          handleCloseModal();
        }
      }

      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handleCloseModal]
  );
  return modalRef;
}
