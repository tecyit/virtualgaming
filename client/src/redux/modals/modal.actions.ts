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

export const openSelectDateModal = (playerId: number | null) => {
  return {
    type: modalTypes.OPEN_SELECT_DATE_MODAL,
    payload: playerId,
  };
};

export const openPlayerGameProjectionStatsModal = (selectedDate: string | null) => {
  console.log('Selected redux date is: ', selectedDate);
  return {
    type: modalTypes.OPEN_PLAYER_GAME_PROJECTION_STATS_MODAL,
    payload: selectedDate,
  };
};
