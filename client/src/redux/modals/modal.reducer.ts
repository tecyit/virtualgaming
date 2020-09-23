import modalTypes from './modal.types';
import { openSignUpModal, closeModals } from './modal.actions';

type ModalAction = ReturnType<typeof openSignUpModal | typeof closeModals>;

const initialState = {
  isSignUpModalOpen: false,
};

const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case modalTypes.OPEN_SIGN_UP_MODAL:
      return {
        ...state,
        isSignUpModalOpen: true,
      };

    case modalTypes.CLOSE_MODALS:
      return {
        ...state,
        isSignUpModalOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
