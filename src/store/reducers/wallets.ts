import uuid from 'uuid';

const initialState = [
	{
		id: uuid(),
		name: 'Credit card',
		color: 'rgba(255,0,0,0.5)',
		icon: {
			name: 'cc-mastercard',
			type: 'FontAwesome'
		},
		pockets: [ { id: uuid(), currency: 'UAH', amount: 5322 } ]
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
			{ id: uuid(), currency: 'UAH', amount: 3020 },
			{ id: uuid(), currency: 'USD', amount: 18123 },
			{ id: uuid(), currency: 'EUR', amount: 405 }
		]
	}
];

export const defaultWallets = initialState;
export default (state = initialState) => state;
