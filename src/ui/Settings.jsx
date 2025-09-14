import Modal from "../components/Modal";
import UnitsDropdown from "../components/UnitsDropdown";

export default function Settings() {
  return (
    <>
      <Modal.ModalButton iconName="/images/icon-units.svg" name="unit">
        Units
      </Modal.ModalButton>
      <Modal.ModalDayContent name="unit">
        <UnitsDropdown />
      </Modal.ModalDayContent>
    </>
  );
}
