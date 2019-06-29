import Store from '../../types/Store';
import IPocket from '../../types/Pocket';
import IWallet from '../../types/Wallet';

export const totalAmount = (state: Store) => {
	return state.wallets.reduce((acc: number, wallet: IWallet) => acc + totalAmountWallet(wallet), 0);
};

export const totalAmountWallet = (wallet: IWallet) => {
	return wallet.pockets.reduce((accP: number, pocket: IPocket) => pocket.amount + accP, 0);
};
