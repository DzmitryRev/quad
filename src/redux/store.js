import { combineReducers, createStore } from 'redux';
import mainReducer from './mainReducer';

const rootReducers = combineReducers({
  main: mainReducer,
});

export const store = createStore(rootReducers);
