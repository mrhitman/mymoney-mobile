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

const SetTransform = createTransform(
	(inboundState: any[], key) => {
		global.console.log(inboundState);
		return inboundState;
		// return inboundState.map((trx) => ({ ...trx, date: DateTime.fromISO((trx.date as any) as string) }));
	},
	(outboundState: any[], key) => {
		return outboundState;
		// return outboundState.map((trx) => ({ ...trx, date: trx.date.toString() }));
	},
	{ whitelist: [ 'transactions' ] }
);

// const compressor = createCompressor();
const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
	transform: [ SetTransform ]
};

const pReducer = persistReducer(
	persistConfig,
	combineReducers({
		account,
		wallets,
		transactions,
		categories,
		currencies,
		styling
	})
);

const store = createStore(pReducer, devToolsEnhancer());

export default store;
export const persistor = persistStore(store);
