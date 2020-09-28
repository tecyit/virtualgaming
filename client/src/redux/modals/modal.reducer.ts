import modalTypes from './modal.types';
import { openSignUpModal, closeModals, openSelectDateModal } from './modal.actions';

type ModalAction = ReturnType<typeof openSelectDateModal>;

const initialState = {
  isSignUpModalOpen: false,
  isLoginModalOpen: false,
  isSelectDateModalOpen: false,
  isOpenPlayerGameProjectionStatsModalOpen: false,
  activePlayerId: null,
  projectionDate: null,
};

const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case modalTypes.OPEN_SIGN_UP_MODAL:
      return {
        ...state,
        isSignUpModalOpen: true,
        isLoginModalOpen: false,
        isSelectDateModalOpen: false,
        isOpenPlayerGameProjectionStatsModalOpen: false,
      };
    case modalTypes.OPEN_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: true,
        isSignUpModalOpen: false,
        isSelectDateModalOpen: false,
        isOpenPlayerGameProjectionStatsModalOpen: false,
      };
    case modalTypes.OPEN_SELECT_DATE_MODAL:
      return {
        ...state,
        isLoginModalOpen: false,
        isSignUpModalOpen: false,
        isSelectDateModalOpen: true,
        isOpenPlayerGameProjectionStatsModalOpen: false,
        activePlayerId: action.payload,
      };
    case modalTypes.OPEN_PLAYER_GAME_PROJECTION_STATS_MODAL:
      return {
        ...state,
        isLoginModalOpen: false,
        isSignUpModalOpen: false,
        isSelectDateModalOpen: false,
        isOpenPlayerGameProjectionStatsModalOpen: true,
        projectionDate: action.payload,
      };

    case modalTypes.CLOSE_MODALS:
      return {
        ...state,
        isSignUpModalOpen: false,
        isLoginModalOpen: false,
        isSelectDateModalOpen: false,
        isOpenPlayerGameProjectionStatsModalOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
