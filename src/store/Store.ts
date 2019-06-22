import { combineReducers, createStore } from 'redux';
import account from './reducers/account';
import wallets from './reducers/wallets';
import categories from './reducers/categories';
import styling from './reducers/styling';

const store = createStore(
  combineReducers({
    account,
    wallets,
    categories,
    styling
  })
);

export default store;
