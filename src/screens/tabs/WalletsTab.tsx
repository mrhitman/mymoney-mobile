import { createStackNavigator } from 'react-navigation';
import WalletAddScreen from '../Wallets/WalletAddScreen';
import WalletDetailScreen from '../Wallets/WalletDetailScreen';
import WalletsScreen from '../Wallets/WalletsScreen';

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
			title: 'Add New Wallet',
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
