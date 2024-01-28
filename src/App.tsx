import React from "react";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "./utils/modalActions";
// import ModalComponent from "./Modal";
import "./App.css";
// import AddServerModal from "./components/digit-Modal";
// import PinEntryComponent from "./components/digit-Modal";
import PinEntryModal from "./components/digit-Modal";

const MyComponent: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal("عملیات برداشت شما تا لحظاتی دیگر نهایی خواهد شد"));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <button onClick={handleCloseModal}>Close Modal</button>
      {/* <ModalComponent /> */}
      {/* <AddServerModal /> */}
      <PinEntryModal />
    </div>
  );
};

export default MyComponent;
