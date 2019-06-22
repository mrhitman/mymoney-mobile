import uuid from 'uuid';

const initialState = [
  {
    id: uuid(),
    name: 'Credit card',
    pockets: [{ id: uuid(), currency: 'UAH', amount: 0 }]
  },
  {
    id: uuid(),
    name: 'Money savings',
    pockets: [
      { id: uuid(), currency: 'UAH', amount: 0 },
      { id: uuid(), currency: 'USD', amount: 0 }
    ]
  }
];

export default (state = initialState) => state;
