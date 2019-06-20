import { types } from 'mobx-state-tree';
import { Currency } from './currency';

export const Config = types.model({
  pin: types.string,
  mainCurrency: types.reference(Currency),
  server: types.string
});
