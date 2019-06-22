import { Container, Content, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import WalletShortInfo from '../components/WalletShortInfo';


export class WalletDetailScreen extends Component<NavigationInjectedProps> {
  render() {
    return (
      <Container style={styles.content}>
        <StatusBar barStyle="light-content" animated />
        <Content padder>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>wallet.name</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoTitle}>Available Balance</Text>
            <Text style={styles.infoSum}>32,5557 UAH</Text>
            <View style={styles.infoTotal}>
              <View style={styles.infoTotalView}>
                <Text style={styles.infoTotalText}>$3,555.48 USD</Text>
              </View>
            </View>
          </View>
          <View style={styles.account}>
            <View style={styles.accountHeader}>
              <Text style={styles.accountHeaderText}>TRANSACTIONS HISTORY</Text>
              <Text style={styles.accountHeaderFilter}>ALL</Text>
            </View>
            <View style={styles.wallets}>
              {/* <WalletShortInfo /> */}
              {/* <WalletShortInfo /> */}
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FEFEFE'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerTitle: {
    fontFamily: 'Questrial-Regular',
    flex: 2,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15
  },
  addButton: {
    marginTop: 10,
    marginRight: 10
  },
  addIcon: {
    fontSize: 20
  },
  info: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 50,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1
  },
  infoTitle: {
    fontFamily: 'Questrial-Regular',
    color: 'rgba(0,0,0,0.3)',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 2,
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
  },
  account: {
    backgroundColor: '#FBFCFE'
  },
  accountHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  accountHeaderText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)'
  },
  accountHeaderFilter: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.3)'
  },
  wallets: {
    paddingTop: 20,
    backgroundColor: '#FAFBFD'
  }
});

export default WalletDetailScreen;
