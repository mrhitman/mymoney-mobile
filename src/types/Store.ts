import ICategory from './Category';
import ICurrency from './Currency';
import ITransaction from './Transaction';
import IWallet from './Wallet';

interface Store {
	account: {
		primaryCurrency: 'UAH';
		primaryCurrencyId: string;
		secondaryCurrency: 'UAH';
		language: 'UA';
	};
	categories: ICategory[];
	wallets: IWallet[];
	transactions: ITransaction[];
	currencies: ICurrency[];
}

export default Store;
