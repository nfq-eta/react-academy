import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../reducers';

export default function configureStore(history, initialState) {
  const middlewares = [];

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
    initialState,
  );

  return store;
}
