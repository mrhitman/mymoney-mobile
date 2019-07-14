import { TransactionTypes } from './reducers/transactions';
import { WalletTypes } from './reducers/wallets';
import store from './Store';

export type StoreTypes = WalletTypes | TransactionTypes;
export default store;
export { persistor } from './Store';

