import { createStore } from 'redux';
import reducer from '../reducers/reducer_app';

const initialState = {
  risk: 0,
};

const store = createStore(reducer, initialState);

export default store;
