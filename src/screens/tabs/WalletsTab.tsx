import { createStackNavigator } from 'react-navigation';
import WalletAddScreen from '../WalletAddScreen';
import { WalletDetailScreen } from '../WalletDetailScreen';
import WalletsScreen from '../WalletsScreen';

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
