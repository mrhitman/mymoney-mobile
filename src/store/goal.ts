import { types } from 'mobx-state-tree';
import { Currency } from './currency';

export const Goal = types.model({
  id: types.identifier,
  name: types.string,
  amount: types.number,
  currency_id: types.reference(Currency),
  deadline: types.Date,
  created_at: types.number,
  updated_at: types.number
});