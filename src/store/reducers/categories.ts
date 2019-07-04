
const initialState = [
	{ id: '1', name: 'Food', type: 'outcome', parent_id: '0' },
	{ id: '2', name: 'Items', type: 'outcome', parent_id: '0' },
	{ id: '3', name: 'Transport', type: 'outcome', parent_id: '0' },
	{ id: '4', name: 'Car', type: 'outcome', parent_id: '0' },
	{ id: '5', name: 'Traveling', type: 'outcome', parent_id: '0' },
	{ id: '6', name: 'Sport', type: 'outcome', parent_id: '0' },
	{ id: '7', name: 'Medecine', type: 'outcome', parent_id: '0' },
	{ id: '8', name: 'Child', type: 'outcome', parent_id: '0' },
	{ id: '9', name: 'Pets', type: 'outcome', parent_id: '0' },
	{ id: '10', name: 'Entertainments', type: 'outcome', parent_id: '0' },
	{ id: '11', name: 'Education', type: 'outcome', parent_id: '0' },
	{ id: '12', name: 'Salary', type: 'income', parent_id: '0' },
	{ id: '13', name: 'Deposit', type: 'income', parent_id: '0' },
	{ id: '14', name: 'Gift', type: 'income', parent_id: '0' },
	{ id: '15', name: 'Premial', type: 'income', parent_id: '0' },
	{ id: '16', name: 'Coffee', type: 'outcome', parent_id: '1' }
];

export const defaultCategories = initialState;
export default (state = initialState) => state;
