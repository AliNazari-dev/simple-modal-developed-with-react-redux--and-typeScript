import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../utils/digitModalAction";

// interface RootState {
//   modal: {
//     isOpen: boolean;
//   };
// }

// const AddServerModal: React.FC = () => {
//   const dispatch = useDispatch();
//   const { isOpen } = useSelector((state: RootState) => state.modal);

//   const [serverCode, setServerCode] = useState<string>("");

//   const handleCloseModal = () => {
//     dispatch(closeModal());
//     setServerCode("");
//   };

//   const handleAddServer = () => {
//     console.log("Server Code:", serverCode);
//     handleCloseModal();
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className='modal-overlay'>
//           <div className='modal-content'>
//             <span className='close-button' onClick={handleCloseModal}>
//               &times;
//             </span>
//             <h2>Add Server</h2>
//             <input
//               type='text'
//               className='code-input'
//               placeholder='Enter 6-digit server code'
//               maxLength={6}
//               value={serverCode}
//               onChange={(e) => setServerCode(e.target.value)}
//             />
//             <button className='add-server-button' onClick={handleAddServer}>
//               Add Server
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AddServerModal;

interface RootState {
  modal: {
    isOpen: boolean;
  };
}

interface PinInputModalProps {
  onComplete: (pin: string) => void;
}

const PinInputModal: React.FC<PinInputModalProps> = ({ onComplete }) => {
  const [pinDigits, setPinDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null, null, null]);

  const handleInputChange = (index: number, value: string) => {
    const newPinDigits = [...pinDigits];
    newPinDigits[index] = value;
    setPinDigits(newPinDigits);

    // Check if all inputs have values
    if (newPinDigits.every((digit) => digit !== "")) {
      onComplete(newPinDigits.join(""));
    }

    // If a digit is added and there is a next input, focus on the next input
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    const newPinDigits = [...pinDigits];
    newPinDigits[index] = "";

    setPinDigits(newPinDigits);

    // If the backspace is pressed on the first input and there is a previous input, focus on the previous input
    if (index > 0 && newPinDigits[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    // Focus on the first input when the component mounts
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div>
      <h2>Enter PIN:</h2>
      <div className='pin-input-container'>
        {pinDigits.map((digit, index) => (
          <input
            key={index}
            type='text'
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                e.preventDefault();
                handleBackspace(index);
              }
            }}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage in a parent modal component
const PinEntryModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.modal);

  const handlePinComplete = (pin: string) => {
    console.log("Complete PIN:", pin);
    // You can perform any action with the complete PIN, like making an API call, etc.
    dispatch(closeModal());
  };

  return (
    <>
      {isOpen && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <span className='close-button' onClick={() => dispatch(closeModal())}>
              &times;
            </span>
            <PinInputModal onComplete={handlePinComplete} />
          </div>
        </div>
      )}
    </>
  );
};

export default PinEntryModal;
