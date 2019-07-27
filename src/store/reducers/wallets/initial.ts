import uuid from 'uuid';
import IWallet from '../../../types/Wallet';

const initialState: IWallet[] = [
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

export default initialState;
