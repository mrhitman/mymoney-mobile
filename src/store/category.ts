import { types } from 'mobx-state-tree';

export const Category = types.model({
  id: types.identifier,
  name: types.string,
  type: types.enumeration(['income', 'outcome']),
  parent_id: '0',
  created_at: types.number,
  updated_at: types.maybe(types.number)
});
