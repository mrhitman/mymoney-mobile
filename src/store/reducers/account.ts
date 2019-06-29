import { TRANSACTION_ADD } from './transactions';
import { defaultCurrencies } from './currencies';

const initialState = {
	totalAmount: 32557,
	primaryCurrency: 'UAH',
	primaryCurrencyId: defaultCurrencies[0].id,
	secondaryCurrency: 'UAH',
	language: 'UA'
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TRANSACTION_ADD:
			const trx = action.payload;
			return {
				...state,
				totalAmount: state.totalAmount + trx.type === 'outcome' ? -trx.amount : trx.amount
			};
		default:
			return state;
	}
};
