import uuid from 'uuid';

const initialState = [
	{ id: uuid(), name: 'Ukrainian Grivna', country: 'Ukraine', short: 'UAH', symbol: '₴' },
	{ id: uuid(), name: 'American Dollar', country: 'USA', short: 'USD', symbol: '$' },
	{ id: uuid(), name: 'Pounds sterling', country: 'United Kindom', short: 'GBR', symbol: '£' },
	{ id: uuid(), name: 'Euro area countries', country: 'Ukraine', short: 'EUR', symbol: '€' }
];

export const defaultCurrencies = initialState;
export default (state = initialState) => state;
