import { createStackNavigator } from 'react-navigation';
import TransactionsScreen from '../TransactionsScreen';
import TransactionAddScreen from '../TransactionAddScreen';

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
  }
});
