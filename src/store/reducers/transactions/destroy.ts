import ITransaction from '../../../types/Transaction';
import { TRANSACTION_DELETE } from './';

export interface TransactionDeleteAction {
	type: typeof TRANSACTION_DELETE;
	payload: string;
}

function destroy(state: ITransaction[], action: TransactionDeleteAction) {
	return state.filter((trx: ITransaction) => trx.id !== action.payload);
}

export default destroy;
