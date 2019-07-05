const initialState = [
	{ id: '1', name: 'Ukrainian Grivna', country: 'Ukraine', short: 'UAH', symbol: '₴' },
	{ id: '2', name: 'American Dollar', country: 'USA', short: 'USD', symbol: '$' },
	{ id: '3', name: 'Pounds sterling', country: 'United Kindom', short: 'GBR', symbol: '£' },
	{ id: '4', name: 'Euro area countries', country: 'Ukraine', short: 'EUR', symbol: '€' }
];

export const defaultCurrencies = initialState;
export default (state = initialState) => state;
