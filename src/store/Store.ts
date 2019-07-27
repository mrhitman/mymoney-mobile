import { DateTime } from 'luxon';
import { combineReducers, createStore } from 'redux';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import devToolsEnhancer from 'remote-redux-devtools';
import account from './reducers/account';
import categories from './reducers/categories';
import currencies from './reducers/currencies';
import styling from './reducers/styling';
import transactions from './reducers/transactions';
import wallets from './reducers/wallets';
import rates from './reducers/rates';
import Api from '../../src/api';

const SetTransform = createTransform(
	(inboundState: any[], key) => {
		return inboundState.map((trx) => ({ ...trx, date: DateTime.fromISO(trx.date) }));
	},
	(outboundState: any[], key) => {
		return outboundState.map((trx) => ({ ...trx, date: DateTime.fromISO(trx.date) }));
	},
	{ whitelist: [ 'transactions' ] }
);

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
	transforms: [ SetTransform ],
	blacklist: [ 'api' ]
};

const reducers = combineReducers({
	account,
	wallets,
	transactions,
	categories,
	currencies,
	styling,
	rates,
	api: () => new Api()
});

const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, devToolsEnhancer());

export default store;
export const persistor = persistStore(store);
