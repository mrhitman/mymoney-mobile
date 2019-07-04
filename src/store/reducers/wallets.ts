import uuid from 'uuid';
import { defaultCurrencies } from './currencies';

const initialState = [
	{
		id: uuid(),
		name: 'Credit card',
		color: 'rgba(255,0,0,0.5)',
		icon: {
			name: 'cc-mastercard',
			type: 'FontAwesome'
		},
		pockets: [ { id: uuid(), currency_id: defaultCurrencies[1].id, amount: 5322 } ]
	},
	{
		id: uuid(),
		name: 'Money savings',
		color: 'rgba(150,200,100,0.6)',
		icon: {
			name: 'piggy-bank',
			type: 'FontAwesome5'
		},
		pockets: [
			{ id: uuid(), currency_id: defaultCurrencies[0].id, amount: 3020 },
			{ id: uuid(), currency_id: defaultCurrencies[1].id, amount: 18123 },
			{ id: uuid(), currency_id: defaultCurrencies[2].id, amount: 405 }
		]
	}
];

export const defaultWallets = initialState;
export default (state = initialState, action) => {
	switch (action.type) {
		case 'WALLET_ADD':
			return [
				...state,
				{
					id: uuid(),
					...action.payload
				}
			];
		default:
			return state;
	}
};
