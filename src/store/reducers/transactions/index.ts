import ITransaction from '../../../types/Transaction';
import create, { TransactionAddAction } from './create';
import destroy, { TransactionDeleteAction } from './destroy';
import initialState from './initial';
import update, { TransactionEditAction } from './update';

export const TRANSACTION_ADD = 'TRANSACTION_ADD';
export const TRANSACTION_EDIT = 'TRANSACTION_EDIT';
export const TRANSACTION_DELETE = 'TRANSACTION_DELETE';

export type TransactionTypes = TransactionAddAction | TransactionEditAction | TransactionDeleteAction;

export default (state: ITransaction[] = initialState, action: TransactionTypes) => {
	switch (action.type) {
		case TRANSACTION_ADD:
			return create(state, action);
		case TRANSACTION_EDIT:
			return update(state, action);
		case TRANSACTION_DELETE:
			return destroy(state, action);
		default:
			return state;
	}
};
