/* eslint-disable no-undef */
import expect from 'expect';
import { store } from './store';

describe('store', () => {
  it('should initialize', () => {
    const actual = store.getState();
    const expected = {
      risk: 0,
    };
    expect(actual).toEqual(expected);
  });
});
