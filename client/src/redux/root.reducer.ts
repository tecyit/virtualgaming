import { combineReducers } from 'redux';
import modalReducer from './modals/modal.reducer';

const rootReducer = combineReducers({
  modals: modalReducer,
});

export default rootReducer;
