// modalActions.ts
export interface OpenModalAction {
    type: 'OPEN_MODAL';
    payload: { isOpen: boolean };
  }
  
  export interface CloseModalAction {
    type: 'CLOSE_MODAL';
    payload: { isOpen: boolean };
  }
  
  export type ModalAction = OpenModalAction | CloseModalAction;
  
  export const openModal = (): OpenModalAction => ({
    type: 'OPEN_MODAL',
    payload: { isOpen: true },
  });
  
  export const closeModal = (): CloseModalAction => ({
    type: 'CLOSE_MODAL',
    payload: { isOpen: false },
  });
  