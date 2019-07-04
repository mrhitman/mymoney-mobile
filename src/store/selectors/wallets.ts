import Store from '../../types/Store';

export const getWallet = (state: Store, id: string) => {
	return state.wallets.find((wallet) => wallet.id === id);
};
