import defaultWallets from './initial';
import create, { WalletAddAction } from './create';
import destroy, { WalletDeleteAction } from './destroy';
import { WalletEditAction } from './update';
import IWallet from '../../../types/Wallet';

export const WALLET_ADD = 'WALLET_ADD';
export const WALLET_EDIT = 'WALLET_EDIT';
export const WALLET_DELETE = 'WALLET_DELETE';

export type WalletActions = WalletAddAction | WalletEditAction | WalletDeleteAction;

export default (state = defaultWallets, action: WalletActions): IWallet[] => {
	switch (action.type) {
		case WALLET_ADD:
			return create(state, action);
		case WALLET_DELETE:
			return destroy(state, action);
		default:
			return state;
	}
};
