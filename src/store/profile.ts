import { types } from 'mobx-state-tree';

export const Profile = types.model({
  name: types.string,
  last_name: types.string,
  email: types.string,
  birthday: types.Date,
  updated_at: types.number
});
