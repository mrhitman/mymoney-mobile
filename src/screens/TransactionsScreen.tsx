import { Button, Container, Content, Icon, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import DayTransactionSummary from '../components/DayTransactionSummary';
import { DateTime } from 'luxon';

export class TransactionsScreen extends Component<NavigationInjectedProps> {

  public render() {
    return (
      <Container style={styles.content}>
        <StatusBar barStyle="light-content" animated />
        <Content padder>
          <DayTransactionSummary day={DateTime.local()} />
          <DayTransactionSummary day={DateTime.local().minus({ day: 1 })} />
          <DayTransactionSummary day={DateTime.local().minus({ day: 2 })} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FEFEFE'
  }
});

export default TransactionsScreen
