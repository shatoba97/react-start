import { createStore } from 'redux';
import initialState from './initial-state';
import reducer from './reducers/root-reducer';

const store = createStore(reducer, initialState);

export default store;