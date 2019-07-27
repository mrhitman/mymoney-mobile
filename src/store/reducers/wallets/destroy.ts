import { WALLET_DELETE } from '.';
import IWallet from '../../../types/Wallet';

export interface WalletDeleteAction {
	type: typeof WALLET_DELETE;
	payload: IWallet;
}

function destroy(state, action: WalletDeleteAction): IWallet[] {
	return state.filter((wallet) => wallet.id !== action.payload.id);
}

export default destroy;
