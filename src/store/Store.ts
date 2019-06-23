import { combineReducers, createStore } from 'redux';
import account from './reducers/account';
import categories from './reducers/categories';
import styling from './reducers/styling';
import transactions from './reducers/transactions';
import wallets from './reducers/wallets';

const store = createStore(
  combineReducers({
    account,
    wallets,
    transactions,
    categories,
    styling
  })
);

export default store;
