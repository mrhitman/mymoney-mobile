interface ITransaction {
  id: string;
  category_id: string;
  date: any;
  from_wallet_id: string;
  to_wallet_id: string;
  amount: number;
  currency: string;
}
export default ITransaction;
