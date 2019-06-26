import { find } from 'lodash';
import { DateTime } from 'luxon';
import uuid from 'uuid';
import { defaultCategories } from './categories';
import { defaultWallets } from './wallets';

const initialState = [
  {
    id: uuid(),
    category_id: find(
      defaultCategories,
      category => category.name === 'Coffee'
    )!.id,
    date: DateTime.local(),
    from_wallet_id: defaultWallets[0].id,
    amount: -368,
    currency: '$'
  },
  {
    id: uuid(),
    category_id: find(
      defaultCategories,
      category => category.name === 'Salary'
    )!.id,
    date: DateTime.local(),
    from_wallet_id: defaultWallets[0].id,
    amount: 2342,
    currency: '$'
  },
  {
    id: uuid(),
    category_id: find(
      defaultCategories,
      category => category.name === 'Coffee'
    )!.id,
    date: DateTime.local().minus({ day: 1 }),
    from_wallet_id: defaultWallets[0].id,
    amount: -389,
    currency: '$'
  },
  {
    id: uuid(),
    category_id: find(
      defaultCategories,
      category => category.name === 'Coffee'
    )!.id,
    date: DateTime.local().minus({ day: 1 }),
    from_wallet_id: defaultWallets[0].id,
    amount: -389,
    currency: '$'
  },
  {
    id: uuid(),
    category_id: find(
      defaultCategories,
      category => category.name === 'Salary'
    )!.id,
    date: DateTime.local().minus({ day: 1 }),
    from_wallet_id: defaultWallets[0].id,
    amount: 2356,
    currency: '$'
  }
];

export default (state = initialState, action) => {
  global.console.log(action.payload)
  switch (action.type) {
    case 'TRANSACTION_ADD':
      return [
        ...state,
        {
          ...action.payload,
          id: uuid(),
          currency: '$',
          date: DateTime.fromJSDate(action.payload.date)
        }
      ];
    default:
      return state;
  }
};