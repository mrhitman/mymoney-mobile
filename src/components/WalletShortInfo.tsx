import { Text, View, Icon } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import IWallet from '../types/Wallet';

export class WalletShortInfo extends Component<{ wallet: IWallet }> {
  public render() {
    const { wallet } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{wallet.name}</Text>
        <View style={styles.info}>
          <View style={styles.icon}>
            <Icon {...wallet.icon} style={{ color: wallet.color, fontSize: 42 }} />
          </View>
          <View style={styles.pockets}>
            {wallet.pockets.map(pocket => (
              <View key={pocket.id} style={styles.details}>
                <Text style={styles.pocketInfo}>
                  {pocket.amount} {pocket.currency}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
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
    borderRadius: 12
  },
  header: {
    fontFamily: 'Questrial-Regular',
    fontSize: 17,
    paddingLeft: 18,
    paddingTop: 10,
    paddingBottom: 6
  },
  icon: {
    margin: 24,
    marginTop: 14
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'nowrap'
  },
  pockets: {
    marginRight: 24,
    marginBottom: 12
  },
  pocketInfo: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Questrial-Regular',
    color: 'rgba(0,0,0,0.7)'
  }
});

export default WalletShortInfo;
