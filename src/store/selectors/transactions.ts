import { DateTime } from 'luxon';
import Store from '../../types/Store';
import { groupBy } from 'lodash';
import ITransaction from '../../types/Transaction';

export const getAmountForPeriod = (state: Store, to: DateTime, from?: DateTime) => {
	return getForPeriod(state, to, from).reduce((acc, trx) => trx.amount + acc, 0);
};

export const getForPeriod = (state: Store, to: DateTime, from?: DateTime) => {
	return state.transactions.filter((trx: ITransaction) => {
		const date = DateTime.fromJSDate(trx.date);
		return date.diff(to).seconds > 0 && (from ? date.diff(from) : date.diffNow()).seconds < 0;
	});
};

export const groupByCategory = (state: Store) => {
	return groupBy(state.transactions, 'category_id');
};
