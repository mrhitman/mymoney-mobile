import uuid from 'uuid';

const initialState = [
  { id: uuid(), name: 'Food', type: 'outcome' },
  { id: uuid(), name: 'Entertainments', type: 'outcome' },
  { id: uuid(), name: 'Education', type: 'outcome' },
  { id: uuid(), name: 'Salary', type: 'income' },
  { id: uuid(), name: 'Deposit', type: 'income' }
];

export default (state = initialState) => state;
