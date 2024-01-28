import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./utils/modalActions";

const ModalComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, text } = useSelector((state) => state.modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isOpen && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <p>{text}</p>
            <button onClick={handleCloseModal}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
