import { find, findIndex } from 'lodash';
import { DateTime } from 'luxon';
import uuid from 'uuid';
import ITransaction, { ITransactionType } from '../../types/Transaction';
import { defaultCategories } from './categories';
import { defaultCurrencies } from './currencies';
import { defaultWallets } from './wallets';

const initialState = [
	{
		id: uuid(),
		category_id: find(defaultCategories, (category) => category.name === 'Coffee')!.id,
		date: DateTime.local(),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'outcome',
		amount: -368,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: uuid(),
		category_id: find(defaultCategories, (category) => category.name === 'Salary')!.id,
		date: DateTime.local(),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'income',
		amount: 2342,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: uuid(),
		category_id: find(defaultCategories, (category) => category.name === 'Coffee')!.id,
		date: DateTime.local().minus({ day: 1 }),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'outcome',
		amount: -389,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: uuid(),
		category_id: find(defaultCategories, (category) => category.name === 'Coffee')!.id,
		date: DateTime.local().minus({ day: 1 }),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'outcome',
		amount: -389,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: uuid(),
		category_id: find(defaultCategories, (category) => category.name === 'Salary')!.id,
		date: DateTime.local().minus({ day: 1 }),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'income',
		amount: 2356,
		currency_id: defaultCurrencies[0].id,
		description: ''
	}
];

export const TRANSACTION_ADD = 'TRANSACTION_ADD';
export const TRANSACTION_EDIT = 'TRANSACTION_EDIT';
export const TRANSACTION_DELETE = 'TRANSACTION_DELETE';

export interface TransactionAddAction {
	type: typeof TRANSACTION_ADD;
	payload: ITransaction;
}

export interface TransactionEditAction {
	type: typeof TRANSACTION_EDIT;
	payload: ITransaction;
}

export interface TransactionDeleteAction {
	type: typeof TRANSACTION_DELETE;
	payload: number;
}

export type TransactionTypes = TransactionAddAction | TransactionEditAction | TransactionDeleteAction;

export default (state: ITransaction[] = initialState, action) => {
	switch (action.type) {
		case TRANSACTION_ADD:
			return [
				...state,
				{
					...action.payload,
					id: uuid(),
					currency: '$',
					date: DateTime.fromJSDate(action.payload.date)
				}
			];
		case TRANSACTION_EDIT:
			const transaction = action.payload;
			const oldTrxIndex = findIndex(state, (trx: ITransaction) => trx.id === transaction.id);
			const newState = [ ...state ];
			newState.splice(oldTrxIndex, 1, {
				...transaction,
				amount: Number(transaction.amount),
				date: DateTime.fromJSDate(transaction.date)
			});
			return newState;
		case TRANSACTION_DELETE:
			return state.filter((trx: ITransaction) => trx.id !== action.payload);
		default:
			return state;
	}
};
