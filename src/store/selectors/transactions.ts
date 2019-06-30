import { DateTime } from 'luxon';
import Store from '../../types/Store';

export const getAmountForPeriod = (state: Store, to: DateTime, from?: DateTime) => {
	return getForPeriod(state, to, from).reduce((acc, trx) => trx.amount + acc, 0);
};

export const getForPeriod = (state: Store, to: DateTime, from?: DateTime) => {
	return state.transactions.filter((trx) => {
		const date = DateTime.fromJSDate(trx.date);
		return date.diff(to).seconds > 0 && (from ? date.diff(from) : date.diffNow()).seconds < 0;
	});
};
