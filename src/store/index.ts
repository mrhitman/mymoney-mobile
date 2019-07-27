import { TransactionActions } from './reducers/transactions';
import { WalletActions } from './reducers/wallets';
import store from './Store';

export type StoreTypes = WalletActions | TransactionActions;
export default store;
export { persistor } from './Store';

