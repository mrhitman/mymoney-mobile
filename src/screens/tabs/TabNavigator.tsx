import { Icon } from 'native-base';
import React from 'react';
import { createBottomTabNavigator, TabBarIconProps } from 'react-navigation';
import SettingsScreen from '../SettingsScreen';
import TransactionsScreen from '../TransactionsScreen';
import CategoriesTab from './CategoriesTab';
import ChartsTab from './ChartsTab';
import WalletsTab from './WalletsTab';

export default createBottomTabNavigator(
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
      screen: SettingsScreen,
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
