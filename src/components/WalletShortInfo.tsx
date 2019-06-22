import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import IWallet from '../types/Wallet';

export class WalletShortInfo extends Component<{ wallet: IWallet }> {
  public render() {
    const { wallet } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{wallet.name}</Text>
        <View style={styles.info}>
          <View style={styles.icon}>
            <SvgUri
              width="42"
              height="42"
              source={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }}
            />
          </View>
          <View style={styles.details}>
            <Text>pocket.currency</Text>
            <Text>9999</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 12,
    backgroundColor: '#fff',
    borderWidth: 0.6,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  },
  header: {
    fontFamily: 'Questrial-Regular',
    fontSize: 18,
    paddingLeft: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },
  icon: {
    margin: 16
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'nowrap',
    marginRight: 26
  }
});

export default WalletShortInfo
