import { chain, map } from 'lodash';
import { DateTime } from 'luxon';
import { Button, Container, Content, Footer, Icon, Right } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import DayTransactionSummary from '../../components/DayTransactionSummary';
import ITransaction from '../../types/Transaction';

interface TransactionsScreenProps extends NavigationInjectedProps {
	transactions: ITransaction[];
}

export class TransactionsScreen extends Component<TransactionsScreenProps> {
	public render() {
		const transactions = chain(this.props.transactions)
			.groupBy((trx: ITransaction) => trx.date.startOf('day').valueOf())
			.value();

		// global.console.log(transactions);
		return (
			<Container style={styles.content}>
				<StatusBar barStyle="light-content" animated />
				<Content padder>
					{map(transactions, (group: ITransaction[], key: string) => (
						<DayTransactionSummary key={key} items={group} onTouch={this.handleEdit} day={DateTime.fromMillis(+key)} />
					))}
				</Content>
				<Button
					icon
					rounded
					primary
					style={{ bottom: 16, right: 26, position: 'absolute' }}
					onPress={this.handlePlusClick}
				>
					<Icon name="add" style={{ fontSize: 20 }} />
				</Button>
			</Container>
		);
	}

	protected handlePlusClick = () => {
		this.props.navigation.navigate('TransactionAdd');
	};

	protected handleEdit = (trx: ITransaction) => {
		this.props.navigation.navigate('TransactionEdit', { transaction: trx });
	};
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: '#FEFEFE'
	}
});

export default connect((state) => state, () => ({}))(TransactionsScreen);
