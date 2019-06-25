const initialState = {
  totalAmount: 32557,
  primaryCurrency: 'UAH',
  secondaryCurrency: 'UAH',
  language: 'UA'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTION_ADD':
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload.amount
      };
    default:
      return state;
  }
};
