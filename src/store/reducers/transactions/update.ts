import { findIndex } from 'lodash';
import { DateTime } from 'luxon';
import ITransaction from '../../../types/Transaction';
import { TRANSACTION_EDIT } from './';

export interface TransactionEditAction {
	type: typeof TRANSACTION_EDIT;
	payload: Pick<ITransaction, Exclude<keyof ITransaction, 'date' | 'amount'>> & { date: Date; amount: string };
}

function update(state: ITransaction[], action: TransactionEditAction) {
	const trx = action.payload;
	const oldTrxIndex = findIndex(state, (trx: ITransaction) => trx.id === trx.id);
	const oldTrx = state[oldTrxIndex];
	const newState = [ ...state ];
	newState.splice(oldTrxIndex, 1, {
		...oldTrx,
		...trx,
		id: oldTrx.id,
		amount: trx.type === 'outcome' ? -Number(trx.amount) : Number(trx.amount),
		date: DateTime.fromJSDate(trx.date)
	});
	return newState;
}

export default update;
