import { DateTime } from 'luxon';
import Store from '../../types/Store';
import { groupBy } from 'lodash';
import ITransaction, { ITransactionType } from '../../types/Transaction';

export const getAmountForPeriod = (state: Store, to: DateTime, from?: DateTime) => {
	return getForPeriod(state, to, from).reduce((acc, trx) => trx.amount + acc, 0);
};

export const getForPeriod = (state: Store, to: DateTime, from?: DateTime) => {
	return state.transactions.filter((trx: ITransaction) => {
		return trx.date > to && (from || DateTime.local()) < to;
	});
};

export const groupByCategory = (state: Store, type: ITransactionType) => {
	return groupBy(state.transactions.filter((trx) => trx.type === type), 'category_id');
};
