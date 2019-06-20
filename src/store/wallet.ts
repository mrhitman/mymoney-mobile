import { types } from 'mobx-state-tree';
import { Currency } from './currency';

export const WalletPocket = types.model({
  currency: types.reference(Currency),
  amount: types.number
});

export const Wallet = types.model({
  id: types.identifier,
  name: types.string,
  type: types.enumeration(['cash', 'debit', 'credit']),
  colour: types.string,
  pockets: types.array(WalletPocket),
  created_at: types.number,
  updated_at: types.maybe(types.number)
});
