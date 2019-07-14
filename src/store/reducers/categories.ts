const initialState = [
	{ id: '1', name: 'food', type: 'outcome', parent_id: '0' },
	{ id: '2', name: 'items', type: 'outcome', parent_id: '0' },
	{ id: '3', name: 'transport', type: 'outcome', parent_id: '0' },
	{ id: '4', name: 'car', type: 'outcome', parent_id: '0' },
	{ id: '5', name: 'traveling', type: 'outcome', parent_id: '0' },
	{ id: '6', name: 'sport', type: 'outcome', parent_id: '0' },
	{ id: '7', name: 'medecine', type: 'outcome', parent_id: '0' },
	{ id: '8', name: 'child', type: 'outcome', parent_id: '0' },
	{ id: '9', name: 'pets', type: 'outcome', parent_id: '0' },
	{ id: '10', name: 'entertainments', type: 'outcome', parent_id: '0' },
	{ id: '11', name: 'education', type: 'outcome', parent_id: '0' },
	{ id: '12', name: 'salary', type: 'income', parent_id: '0' },
	{ id: '13', name: 'deposit', type: 'income', parent_id: '0' },
	{ id: '14', name: 'gift', type: 'income', parent_id: '0' },
	{ id: '15', name: 'premial', type: 'income', parent_id: '0' },
	{ id: '16', name: 'coffee', type: 'outcome', parent_id: '1' }
];

export const defaultCategories = initialState;
export default (state = initialState) => state;
