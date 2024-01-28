import { ModalAction } from "../utils/modalActions";

// modalReducer.ts
interface ModalState {
  isOpen: boolean;
  text: string;
}

const initialState: ModalState = {
  isOpen: false,
  text: "",
};

const modalReducer = (state: ModalState = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case "OPEN_MODAL":
    case "CLOSE_MODAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default modalReducer;
