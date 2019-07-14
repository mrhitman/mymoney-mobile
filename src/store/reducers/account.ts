import { TRANSACTION_ADD } from './transactions';
import { defaultCurrencies } from './currencies';
import i18n from '../../i18n/i18n';

export enum Languages {
	ru,
	en
}

const initialState = {
	totalAmount: 32557,
	primaryCurrency: 'UAH',
	primaryCurrencyId: defaultCurrencies[0].id,
	secondaryCurrency: 'UAH',
<<<<<<< HEAD
	language: Languages.ru
=======
	language: 'en'
>>>>>>> 195900c5fb15cfe1befdcd4da6fa550ffd996f53
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TRANSACTION_ADD:
			const trx = action.payload;
			return {
				...state,
				totalAmount: state.totalAmount + trx.type === 'outcome' ? -trx.amount : trx.amount
			};
		case 'LANGUAGE_CHANGE':
<<<<<<< HEAD
			return {
				...state,
				language: action.payload
			};
=======
			i18n.locale = action.payload;
			return {
				...state,
				language: action.payload
			}
>>>>>>> 195900c5fb15cfe1befdcd4da6fa550ffd996f53
		default:
			return state;
	}
};
