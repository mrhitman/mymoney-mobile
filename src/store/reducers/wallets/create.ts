import uuid from 'uuid';
import { WALLET_ADD } from '.';
import IWallet from '../../../types/Wallet';

export interface WalletAddAction {
	type: typeof WALLET_ADD;
	payload: {
		name: string;
		color: string;
		icon: any;
		pockets: any[];
	};
}

function create(state, action: WalletAddAction): IWallet[] {
	return [
		...state,
		{
			id: uuid(),
			...action.payload
		}
	];
}

export default create;
