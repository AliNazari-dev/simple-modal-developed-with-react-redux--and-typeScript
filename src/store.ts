// store.ts
import { createStore, combineReducers } from "redux";
import modalReducer from "./reducer/reducer";
import digitModalodalReducer from "./reducer/digitModalReducer";

export interface RootState {
  modal: ReturnType<typeof modalReducer>;
}

const rootReducer = combineReducers({
  modal: modalReducer,
  digitModal: digitModalodalReducer,
});

const store = createStore(rootReducer);

export default store;
