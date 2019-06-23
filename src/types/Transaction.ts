interface ITransaction {
  id: string;
  category_id: string;
  date: any;
  wallet_id: string;
  amount: number;
  currency: string;
}
export default ITransaction;
