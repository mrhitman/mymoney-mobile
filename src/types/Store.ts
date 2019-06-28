import ICategory from './Category';
import ITransaction from './Transaction';
import IWallet from './Wallet';

interface Store {
	account: {
		totalAmount: number;
		primaryCurrency: 'UAH';
		secondaryCurrency: 'UAH';
		language: 'UA';
	};
	categories: ICategory[];
	wallets: IWallet[];
	transactions: ITransaction[];
}

export default Store;
