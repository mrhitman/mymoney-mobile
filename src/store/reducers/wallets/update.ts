import { WALLET_EDIT } from '.';

export interface WalletEditAction {
	type: typeof WALLET_EDIT;
	payload: {
		id: string;
		name: string;
		color: string;
		icon: any;
		pockets: any[];
	};
}

function update(state, action: WalletEditAction) {
	return state.filter((wallet) => wallet.id !== action.payload.id);
}

export default update;
