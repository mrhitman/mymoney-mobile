import { DateTime } from 'luxon';
import { Icon, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { numberWithCommas } from '../helpers/formatter';
import ICategory from '../types/Category';
import IStore from '../types/Store';
import ITransaction from '../types/Transaction';
import IWallet from '../types/Wallet';
import ICurrency from '../types/Currency';

interface DayTransactionSummaryProps {
	day: DateTime;
	items: ITransaction[];
	onTouch: (trx: ITransaction) => void;
}

interface DayTransactionSummaryReduxProps {
	getCategory: (id: string) => ICategory;
	getCurrency: (id: string) => ICurrency;
	getWallet: (id: string) => IWallet;
}

export class DayTransactionSummary extends Component<DayTransactionSummaryProps & DayTransactionSummaryReduxProps> {
	public render() {
		const { day, items } = this.props;
		const dayTitle = day.toFormat('dd LLLL').toUpperCase();
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>
						{' '}
						{dayTitle}, {this.getAdditionTitle()}
					</Text>
					<Text style={styles.headerText}>{this.getTotal()} $</Text>
				</View>
				<View style={styles.dayContainer}>{items.filter((trx) => trx.type !== 'transfer').map(this.drawTrx)}</View>
			</View>
		);
	}

	protected drawTrx = (trx: ITransaction, i: number, items: ITransaction[]) => {
		const { getWallet, getCategory, getCurrency } = this.props;
		const fromWallet = getWallet(trx.from_wallet_id);
		const category = getCategory(trx.category_id);
		const currency = getCurrency(trx.currency_id);
		return (
			<TouchableNativeFeedback key={trx.id} onPress={this.handleEdit(trx)}>
				<View style={styles.trxContainer}>
					<View style={styles.operation}>
						<Text style={styles.operationName}>{category.name}</Text>
						<Text style={trx.type === 'income' ? styles.incomeAmount : styles.outcomeAmount}>{trx.amount} {currency.symbol}</Text>
					</View>
					<View style={styles.wallet}>
						<Icon {...fromWallet.icon} style={[ styles.walletIcon, { color: fromWallet.color } ]} />
						<Text style={styles.walletName}>{fromWallet.name}</Text>
					</View>
				</View>
				{i + 1 < items.length && <View style={styles.trxSplitter} />}
			</TouchableNativeFeedback>
		);
	};

	protected handleEdit = (trx: ITransaction) => () => {
		this.props.onTouch(trx);
	};

	protected getTotal() {
		const { items } = this.props;
		return numberWithCommas(items.reduce((acc: number, trx: ITransaction) => acc + trx.amount, 0));
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
	(state: IStore) => ({
		getCategory: (id: string) => state.categories.find((category: ICategory) => category.id === id)!,
		getWallet: (id: string) => state.wallets.find((wallet: IWallet) => wallet.id === id)!,
		getCurrency: (id: string) => state.currencies.find((currency: ICurrency) => currency.id === id)!
	}),
	() => ({})
)(DayTransactionSummary);
