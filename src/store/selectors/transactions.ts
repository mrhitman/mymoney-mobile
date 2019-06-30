import { groupBy } from 'lodash';
import { DateTime } from 'luxon';
import Store from '../../types/Store';
import ITransaction, { ITransactionType } from '../../types/Transaction';

export const getAmountForPeriod = (transactions: ITransaction[], to: DateTime, from?: DateTime) => {
	return getForPeriod(transactions, to, from).reduce((acc, trx) => trx.amount + acc, 0);
};

export const getForPeriod = (transactions: ITransaction[], to: DateTime, from?: DateTime) => {
	return transactions.filter((trx: ITransaction) => {
		return trx.date > to && (from || DateTime.local()) < to;
	});
};

export const groupByCategory = (state: Store, type: ITransactionType) => {
	return groupBy(state.transactions.filter((trx) => trx.type === type), 'category_id');
};
