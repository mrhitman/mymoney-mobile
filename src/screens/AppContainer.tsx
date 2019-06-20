import { Icon } from 'native-base';
import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, TabBarIconProps } from 'react-navigation';
import IconSelect from '../components/IconSelect';
import CategoriesScreen from './CategoriesScreen';
import ChartsScreen from './ChartsScreen';
import TransactionsScreen from './TransactionsScreen';
import WalletAddScreen from './WalletAddScreen';
import { WalletDetailScreen } from './WalletDetailScreen';
import WalletsScreen from './WalletsScreen';

const WalletsTab = createStackNavigator({
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

const CategoriesTab = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      header: null
    }
  }
});

const ChartsTab = createStackNavigator({
  Categories: {
    screen: ChartsScreen,
    navigationOptions: {
      header: null
    }
  }
});

const tabNavigator = createBottomTabNavigator(
  {
    Wallets: {
      screen: WalletsTab,
      navigationOptions: {
        tabBarIcon: (props: TabBarIconProps) => (
          <Icon
            type="AntDesign"
            name="wallet"
            style={{ color: props.tintColor }}
          />
        )
      }
    },
    Transactions: {
      screen: TransactionsScreen,
      navigationOptions: {
        tabBarIcon: (props: TabBarIconProps) => (
          <Icon
            type="AntDesign"
            name="sync"
            style={{ color: props.tintColor }}
          />
        )
      }
    },
    Categories: {
      screen: CategoriesTab,
      navigationOptions: {
        tabBarIcon: (props: TabBarIconProps) => (
          <Icon
            type="AntDesign"
            name="book"
            style={{ color: props.tintColor }}
          />
        )
      }
    },
    Charts: {
      screen: ChartsTab,
      navigationOptions: {
        tabBarIcon: (props: TabBarIconProps) => (
          <Icon
            type="AntDesign"
            name="linechart"
            style={{ color: props.tintColor }}
          />
        )
      }
    },
    Other: {
      screen: IconSelect,
      navigationOptions: {
        tabBarIcon: (props: TabBarIconProps) => (
          <Icon
            type="AntDesign"
            name="appstore-o"
            style={{ color: props.tintColor }}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Wallets',
    backBehavior: 'history',
    tabBarOptions: {
      activeTintColor: '#02CF68',
      inactiveTintColor: 'rgba(0,0,0,0.4)',
      showLabel: false,
      indicatorStyle: { opacity: 0 },
      style: {
        borderTopWidth: 0
      }
    }
  }
);

const AppNavigator = createStackNavigator({
  Home: {
    screen: tabNavigator,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
