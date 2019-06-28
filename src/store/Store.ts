import { combineReducers, createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import account from './reducers/account';
import categories from './reducers/categories';
import currencies from './reducers/currencies';
import styling from './reducers/styling';
import transactions from './reducers/transactions';
import wallets from './reducers/wallets';

const store = createStore(
	combineReducers({
		account,
		wallets,
		transactions,
		categories,
		currencies,
		styling
	}),
	devToolsEnhancer()
);

export default store;
