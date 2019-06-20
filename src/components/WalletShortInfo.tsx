import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export class WalletShortInfo extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>wallet.name</Text>
        <View style={styles.info}>
          <View style={styles.icon} >
            <SvgUri
              width="46"
              height="46"
              source={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }}
            />
          </View>
          <View style={styles.details}>
            <View>
              <Text>pocket.currency</Text>
              <Text>9999</Text>
            </View>
            <View>
              <Text>9999</Text>
            </View>
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
    borderRadius: 6,
  },
  header: {
    fontFamily: 'Questrial-Regular',
    fontSize: 18,
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    margin: 20
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  details: {
    marginRight: 26
  }
});

export default WalletShortInfo
