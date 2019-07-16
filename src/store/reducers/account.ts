import { TRANSACTION_ADD } from './transactions';
import { defaultCurrencies } from './currencies';
import i18n from '../../i18n/i18n';

export enum Languages {
	ru,
	en
}

const initialState = {
	primaryCurrency: 'UAH',
	primaryCurrencyId: defaultCurrencies[0].id,
	secondaryCurrency: 'UAH',
	language: Languages.ru
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LANGUAGE_CHANGE':
			i18n.locale = action.payload;
			return {
				...state,
				language: action.payload
			}
		default:
			return state;
	}
};
