import uuid from 'uuid';

const initialState = [
	{
		id: '1',
		name: 'Credit card',
		color: 'rgba(255,0,0,0.5)',
		icon: { name: 'cc-mastercard', type: 'FontAwesome' },
		pockets: [ { id: uuid(), currency_id: '1', amount: 5322 } ]
	},
	{
		id: '2',
		name: 'Money savings',
		color: 'rgba(150,200,100,0.6)',
		icon: { name: 'piggy-bank', type: 'FontAwesome5' },
		pockets: [
			{ id: uuid(), currency_id: '1', amount: 3020 },
			{ id: uuid(), currency_id: '2', amount: 18123 },
			{ id: uuid(), currency_id: '3', amount: 405 }
		]
	}
];

export const WALLET_ADD = 'WALLET_ADD';
export const WALLET_EDIT = 'WALLET_EDIT';
export const WALLET_DELETE = 'WALLET_DELETE';

export interface WalletAddAction {
	type: typeof WALLET_ADD;
	payload: {
		name: string;
		color: string;
		icon: any;
		pockets: any[];
	};
}
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
export interface WalletDeleteAction {
	type: typeof WALLET_DELETE;
	payload: {
		id: string;
	};
}

export type WalletTypes = WalletAddAction | WalletEditAction | WalletDeleteAction;

export const defaultWallets = initialState;
export default (state = initialState, action: WalletTypes) => {
	switch (action.type) {
		case WALLET_ADD:
			return [
				...state,
				{
					id: uuid(),
					...action.payload
				}
			];
		case WALLET_DELETE:
			return state.filter((wallet) => wallet.id !== action.payload.id);
		default:
			return state;
	}
};
