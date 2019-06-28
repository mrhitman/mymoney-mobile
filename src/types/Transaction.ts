export type ITransactionType = 'income' | 'outcome' | 'transfer';

interface ITransaction {
  id: string;
  category_id: string;
  date: any;
  from_wallet_id: string;
  to_wallet_id: string;
  amount: number;
  type: ITransactionType,
  currency_id: string;
  description: string;
}

export default ITransaction;
