import modalTypes from './modal.types';
import { openSignUpModal, closeModals } from './modal.actions';

type ModalAction = ReturnType<typeof openSignUpModal | typeof closeModals>;

const initialState = {
  isSignUpModalOpen: false,
  isLoginModalOpen: false,
};

const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case modalTypes.OPEN_SIGN_UP_MODAL:
      return {
        ...state,
        isSignUpModalOpen: true,
        isLoginModalOpen: false,
      };
    case modalTypes.OPEN_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: true,
        isSignUpModalOpen: false,
      };
    case modalTypes.CLOSE_MODALS:
      return {
        ...state,
        isSignUpModalOpen: false,
        isLoginModalOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
