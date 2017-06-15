import {createStore} from 'redux';
import reducer from '../reducers/reducer_app';

const initialState={
  risk:0
}

export const store = createStore(reducer, initialState);
