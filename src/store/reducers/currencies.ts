const initialState = [
	{ id: '1', name: 'Ukrainian Grivna', country: 'Ukraine', short: 'UAH', code: 'UA', symbol: '₴' },
	{ id: '2', name: 'American Dollar', country: 'USA', short: 'USD', code: 'US', symbol: '$' },
	{ id: '3', name: 'Pounds sterling', country: 'United Kindom', short: 'GBR', code: 'UK', symbol: '£' },
	{ id: '4', name: 'Euro area countries', country: 'Europa', short: 'EUR', code: 'EU', symbol: '€' }
];

export const defaultCurrencies = initialState;
export default (state = initialState) => state;
