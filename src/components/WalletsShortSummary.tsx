import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export class WalletsShortSummary extends Component {
  public render() {
    return (
      <View style={styles.info}>
        <Text style={styles.infoTitle}>Available Balance</Text>
        <Text style={styles.infoSum}>32,5557 UAH</Text>
        <View style={styles.infoTotal}>
          <View style={styles.infoTotalView}>
            <Text style={styles.infoTotalText}>$3,555.48 USD</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1
  },
  infoTitle: {
    fontFamily: 'Questrial-Regular',
    color: 'rgba(0,0,0,0.3)',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 2
  },
  infoSum: {
    margin: 8,
    fontSize: 34
  },
  infoTotal: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  infoTotalView: {
    backgroundColor: '#E9F6EF',
    padding: 8,
    marginBottom: 16
  },
  infoTotalText: {
    color: '#02CF68',
    fontWeight: 'bold'
  }
});

export default WalletsShortSummary;
