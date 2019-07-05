import { createStackNavigator } from 'react-navigation';
import WalletAddScreen from '../Wallets/WalletAddScreen';
import WalletDetailScreen from '../Wallets/WalletDetailScreen';
import WalletsScreen from '../Wallets/WalletsScreen';
import i18n from '../../i18n/i18n';

export default createStackNavigator({
	WalletsList: {
		screen: WalletsScreen,
		navigationOptions: {
			header: null
		}
	},
	WalletAdd: {
		screen: WalletAddScreen,
		navigationOptions: {
			title: i18n.t('addWallet'),
			headerStyle: {
				elevation: 0,
				shadowOpacity: 0,
				borderBottomWidth: 0
			}
		}
	},
	WalletTransactions: {
		screen: WalletDetailScreen,
		navigationOptions: {
			title: 'Wallet Details',
			headerStyle: {
				elevation: 0,
				shadowOpacity: 0,
				borderBottomWidth: 0
			}
		}
	}
});
