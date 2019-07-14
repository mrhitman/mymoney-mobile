import Store from '../../types/Store';

export const getWalletById = (state: Store, id: string) => {
	return state.wallets.find((wallet) => wallet.id === id);
};
