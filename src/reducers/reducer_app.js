

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_RISK':
      return {
        risk: action.risk,
      };
    default:
      return state;
  }
};

export default reducer;
