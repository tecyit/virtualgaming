import modalTypes from './modal.types';

export const closeModals = () => {
  return {
    type: modalTypes.CLOSE_MODALS,
  };
};

export const openSignUpModal = () => {
  return {
    type: modalTypes.OPEN_SIGN_UP_MODAL,
  };
};

export const openLoginModal = () => {
  return {
    type: modalTypes.OPEN_LOGIN_MODAL,
  };
};
