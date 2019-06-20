import { types } from 'mobx-state-tree';

export const Currency = types.model({
  id: types.identifier,
  name: types.string,
  description: '',
  icon: '',
  symbol: types.string,
  buyToUSD: 0,
  sellToUSD: 0
});
