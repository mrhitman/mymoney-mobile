import IRates from '../../../types/Rates';
import fetch, { FetchRatesAction } from './fetch';
import initialState from './initial';

export const RATES_FETCHED = 'RATES_FETCHED';

export type RatesActions = FetchRatesAction;
export default (state: IRates = initialState, action: RatesActions) => {
	switch (action.type) {
		case RATES_FETCHED:
			return fetch(state, action);
		default:
			return state;
	}
};
