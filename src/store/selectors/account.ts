import IPocket from '../../types/Pocket';
import Store from '../../types/Store';
import IWallet from '../../types/Wallet';
import { exchange } from './currencies';

export const totalAmount = (state: Store, toCurrency?: string) => {
	return state.wallets.reduce((acc: number, wallet: IWallet) => acc + totalAmountWallet(state, wallet, toCurrency), 0);
};

export const totalAmountWallet = (state: Store, wallet: IWallet, toCurrency?: string) => {
	return wallet.pockets.reduce((acc: number, pocket: IPocket) => {
		if (toCurrency) {
			return acc + exchange(state, pocket.amount, toCurrency);
		}
		return acc + pocket.amount;
	}, 0);
};
