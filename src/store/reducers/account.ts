const initialState = {
  totalAmount: '32,5557',
  primaryCurrency: 'UAH',
  secondaryCurrency: 'UAH',
  language: 'UA'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTION_ADD':
      return { ...state, totalAmount: action.payload.amount };
    default:
      return state;
  }
};
