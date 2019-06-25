import { DateTime } from 'luxon';
import { Icon, Text, View } from 'native-base';
import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ICategory from '../types/Category';
import ITransaction from '../types/Transaction';
import IWallet from '../types/Wallet';

export interface DayTransactionSummaryProps {
  day: DateTime;
  items: ITransaction[];
  getCategory: (id: string) => ICategory;
  getWallet: (id: string) => IWallet;
}

export class DayTransactionSummary extends Component<
  DayTransactionSummaryProps
> {
  protected numberWithCommas(x: number) {
    const s = x > 0 ? `+${x}` : x.toString();
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  public render() {
    const { day, items, getWallet, getCategory } = this.props;
    const dayTitle = day.toFormat('dd LLLL').toUpperCase();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> {dayTitle}, {this.getAdditionTitle()}</Text>
          <Text style={styles.headerText}>
            {this.getTotal()} $
          </Text>
        </View>

        <View style={styles.dayContainer}>
          {items.map((trx: ITransaction, i) => (
            <Fragment key={trx.id}>
              <View style={styles.trxContainer}>
                <View style={styles.operation}>
                  <Text style={styles.operationName}>{getCategory(trx.category_id).name}</Text>
                  <Text style={styles.outcomeAmount}>{trx.amount} $</Text>
                </View>
                <View style={styles.wallet}>
                  <Icon
                    {...getWallet(trx.from_wallet_id).icon}
                    style={[styles.walletIcon, { color: getWallet(trx.from_wallet_id).color }]}
                  />
                  <Text style={styles.walletName}>{getWallet(trx.from_wallet_id).name}</Text>
                </View>
              </View>
              {i < items.length && <View style={styles.trxSplitter} />}
            </Fragment>
          ))}
        </View>
      </View>
    );
  }

  protected getTotal() {
    const { items } = this.props;
    return this.numberWithCommas(
      items.reduce((acc: number, trx: ITransaction) => acc + trx.amount, 0)
    );
  }

  protected getAdditionTitle() {
    const { day } = this.props;
    let additionTitle = day.toFormat('cccc').toUpperCase();
    const today = DateTime.local();
    if (today.toFormat('YYYY MM DD') === day.toFormat('YYYY MM DD')) {
      additionTitle = 'TODAY';
    }
    if (today.minus({ day: 1 }).toFormat('YYYY MM DD') === day.toFormat('YYYY MM DD')) {
      additionTitle = 'YESTERDAY';
    }
    return additionTitle;
  }
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 30
  },
  headerText: {
    fontFamily: 'Questrial-Regular',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)'
  },
  operation: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 8,
    marginBottom: 8
  },
  operationName: {
    fontFamily: 'Questrial-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)'
  },
  incomeAmount: {
    fontFamily: 'Questrial-Regular',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgba(80,255,0,0.6)'
  },
  outcomeAmount: {
    fontFamily: 'Questrial-Regular',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgba(255,80,0,0.6)'
  },
  wallet: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 5,
    paddingLeft: 12,
    paddingRight: 12
  },
  walletName: {
    fontFamily: 'Questrial-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.5)'
  },
  walletIcon: {
    paddingTop: 3,
    paddingRight: 10,
    paddingLeft: 6,
    fontSize: 16
  },
  dayContainer: {
    marginTop: 20,
    paddingTop: 8,
    borderWidth: 0.6,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8
  },
  trxContainer: {
    paddingBottom: 20
  },
  trxSplitter: {
    borderBottomWidth: 0.6,
    borderColor: 'rgba(0,0,0,0.3)'
  }
});

export default connect(
  (state: any) => ({
    ...state,
    getCategory: (id: string) =>
      state.categories.find((category: ICategory) => category.id === id),
    getWallet: (id: string) =>
      state.wallets.find((wallet: IWallet) => wallet.id === id)
  }),
  () => ({})
)(DayTransactionSummary);
