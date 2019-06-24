import { chain, map } from 'lodash';
import { DateTime } from 'luxon';
import { Button, Container, Content, Footer, Icon, Right } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import DayTransactionSummary from '../components/DayTransactionSummary';
import ITransaction from '../types/Transaction';

interface TransactionsScreenProps extends NavigationInjectedProps {
  transactions: any[];
}

export class TransactionsScreen extends Component<TransactionsScreenProps> {
  public render() {
    const transactions = chain(this.props.transactions)
      .groupBy((trx: ITransaction) => trx.date.startOf('day'))
      .value();

    return (
      <Container style={styles.content}>
        <StatusBar barStyle="light-content" animated />
        <Content padder>
          {map(transactions, (group: ITransaction[], key: string) => (
            <DayTransactionSummary
              key={key}
              transactions={group}
              day={DateTime.fromISO(key)}
            />
          ))}
        </Content>
        <Footer style={{ backgroundColor: 'transparent' }}>
          <Right>
            <Button
              icon
              rounded
              transparent
              bordered
              primary
              style={{ marginRight: 20 }}
              onPress={this.handlePlusClick}
            >
              <Icon name="add" style={{ fontSize: 20 }} />
            </Button>
          </Right>
        </Footer>
      </Container>
    );
  }

  protected handlePlusClick = () => {
    this.props.navigation.navigate('TransactionAdd');
  };
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FEFEFE'
  }
});

export default connect(
  state => state,
  () => ({})
)(TransactionsScreen);
