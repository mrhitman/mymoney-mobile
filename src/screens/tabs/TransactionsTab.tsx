import { createStackNavigator } from 'react-navigation';
import TransactionAddScreen from '../Transactions/TransactionAddScreen';
import TransactionEditScreen from '../Transactions/TransactionEditScreen';
import TransactionsScreen from '../Transactions/TransactionsScreen';

export default createStackNavigator({
	TransactionsList: {
		screen: TransactionsScreen,
		navigationOptions: {
			header: null
		}
	},
	TransactionAdd: {
		screen: TransactionAddScreen,
		navigationOptions: {
			title: 'Add New Transaction',
			headerStyle: {
				elevation: 0,
				shadowOpacity: 0,
				borderBottomWidth: 0
			}
		}
	},
	TransactionEdit: {
		screen: TransactionEditScreen,
		navigationOptions: {
			title: 'Edit Transaction',
			headerStyle: {
				elevation: 0,
				shadowOpacity: 0,
				borderBottomWidth: 0
			}
		}
	}
});
