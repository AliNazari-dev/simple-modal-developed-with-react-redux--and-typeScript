// modalActions.ts
interface OpenModalAction {
  type: 'OPEN_MODAL';
  payload: { isOpen: boolean; text: string };
}

interface CloseModalAction {
  type: 'CLOSE_MODAL';
  payload: { isOpen: boolean; text: string };
}

export type ModalAction = OpenModalAction | CloseModalAction;

export const openModal = (text: string): OpenModalAction => ({
  type: 'OPEN_MODAL',
  payload: { isOpen: true, text },
});

export const closeModal = (): CloseModalAction => ({
  type: 'CLOSE_MODAL',
  payload: { isOpen: false, text: '' },
});
