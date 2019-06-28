import uuid from 'uuid';

const initialState = [
	{ id: uuid(), name: 'Food', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Entertainments', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Education', type: 'outcome', parent_id: '0' },
	{ id: uuid(), name: 'Salary', type: 'income', parent_id: '0' },
	{ id: uuid(), name: 'Deposit', type: 'income', parent_id: '0' }
];

initialState.push({
	id: uuid(),
	name: 'Coffee',
	type: 'outcome',
	parent_id: initialState[0].id
});

export const defaultCategories = initialState;
export default (state = initialState) => state;
