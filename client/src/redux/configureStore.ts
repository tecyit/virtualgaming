import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root.reducer';

const configureStore = (persistedState: any) => {
  let middlewares = [thunkMiddleware];

  const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(...middlewares)));

  return store;
};

export default configureStore;
