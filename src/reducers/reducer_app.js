

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_RISK':    
        return{
            risk:action.risk
        }
      
  }
  return state
};

export default reducer;