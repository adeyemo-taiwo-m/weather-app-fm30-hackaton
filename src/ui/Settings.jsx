import Modal from "../components/Modal";
import DaysDropdown from "../components/DaysDropdown";

export default function Settings() {
  return (
    <>
      <Modal.ModalButton iconName="/images/icon-units.svg" name={"day"}>
        Units
      </Modal.ModalButton>
      <Modal.ModalDayContent name="day">
        <DaysDropdown />
      </Modal.ModalDayContent>
    </>
  );
}
