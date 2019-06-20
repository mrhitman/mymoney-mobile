import { types } from 'mobx-state-tree';
import { Wallet } from './wallet';

export const Transfer = types.model({
  id: types.identifier,
  type: types.enumeration(['income', 'outcome', 'transfer']),
  amount: types.number,
  category: types.string,
  from_wallet_id: types.maybe(types.reference(Wallet)),
  to_wallet_id: types.maybe(types.reference(Wallet)),
  created_at: types.number,
  updated_at: types.number
});
