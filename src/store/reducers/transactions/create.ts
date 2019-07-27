import { DateTime } from 'luxon';
import uuid from 'uuid';
import ITransaction from '../../../types/Transaction';
import { TRANSACTION_ADD } from './';

export interface TransactionAddAction {
	type: typeof TRANSACTION_ADD;
	payload: Pick<ITransaction, Exclude<keyof ITransaction, 'date' | 'amount'>> & { date: Date; amount: string };
}

function create(state: ITransaction[], action: TransactionAddAction) {
	const trx = action.payload;
	return [
		...state,
		{
			...trx,
			id: uuid(),
			currency: '$',
			amount: trx.type === 'outcome' ? -Number(trx.amount) : Number(trx.amount),
			date: DateTime.fromJSDate(action.payload.date)
		}
	];
}

export default create;
