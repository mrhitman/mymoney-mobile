import { DateTime } from 'luxon';
import { combineReducers, createStore } from 'redux';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
// import createCompressor from 'redux-persist-transform-compress';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import devToolsEnhancer from 'remote-redux-devtools';
import account from './reducers/account';
import categories from './reducers/categories';
import currencies from './reducers/currencies';
import styling from './reducers/styling';
import transactions from './reducers/transactions';
import wallets from './reducers/wallets';
// import AsyncStorage from '@react-native-community/async-storage';

const SetTransform = createTransform(
	(inboundState: any[], key) => {
		return inboundState.map((trx) => ({ ...trx, date: DateTime.fromISO(trx.date) }));
	},
	(outboundState: any[], key) => {
		return outboundState.map((trx) => ({ ...trx, date: DateTime.fromISO(trx.date) }));
	},
	{ whitelist: [ 'transactions' ] }
);

// const compressor = createCompressor();
const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
	transforms: [ SetTransform ]
};

const reducers = combineReducers({
	account,
	wallets,
	transactions,
	categories,
	currencies,
	styling
});
const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, devToolsEnhancer());
// const store = createStore(reducers, devToolsEnhancer());

export default store;
export const persistor = persistStore(store);
