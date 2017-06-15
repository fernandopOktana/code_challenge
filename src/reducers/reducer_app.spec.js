/* eslint-disable no-undef */
import expect from 'expect';
import reducer from './reducer_app';

describe('reducer', () => {
  function stateBefore() {
    return {
      risk: 0,
    };
  }
  it('update the risk', () => {
    const action = {
      type: 'UPDATE_RISK',
      risk: 1,
    };
    const actual = reducer(stateBefore(), action);
    const expected = {
      risk: 1,
    };
    expect(actual).toEqual(expected);
  });
});
