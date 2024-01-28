import { ModalAction } from "../utils/digitModalAction";

// modalReducer.ts
interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

const digitModalodalReducer = (
  state: ModalState = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case "OPEN_MODAL":
    case "CLOSE_MODAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default digitModalodalReducer;
