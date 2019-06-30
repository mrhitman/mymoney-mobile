import { DateTime } from "luxon";

export type ITransactionType = 'income' | 'outcome' | 'transfer';

interface ITransaction {
	id: string;
	category_id: string;
	date: DateTime;
	from_wallet_id: string;
	to_wallet_id: string;
	amount: number;
	type: ITransactionType;
	currency_id: string;
	description: string;
}

export default ITransaction;
