import uuid from 'uuid';

const initialState = [
	{ id: uuid(), name: 'Food', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Items', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Transport', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Car', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Traveling', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Sport', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Medecine', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Child', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Pets', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Entertainments', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Education', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Salary', type: 'income', parent_id: '0' },
	{ id: uuid(), name: 'Deposit', type: 'income', parent_id: '0' },
	{ id: uuid(), name: 'Gift', type: 'income', parent_id: '0' },
	{ id: uuid(), name: 'Premial', type: 'income', parent_id: '0' }
];

initialState.push({
	id: uuid(),
	name: 'Coffee',
	type: 'outcome',
	parent_id: initialState[0].id
});

export const defaultCategories = initialState;
export default (state = initialState) => state;
