import { applyMiddleware, combineReducers, createStore } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import mainReducer from './mainReducer';

const rootReducers = combineReducers({
  main: mainReducer,
});

export const store = createStore(
  rootReducers,
  applyMiddleware(ThunkMiddleware)
);
