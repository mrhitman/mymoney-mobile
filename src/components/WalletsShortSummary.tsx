import { find } from 'lodash';
import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { numberWithCommas } from '../helpers/formatter';
import IStore from '../types/Store';
import { totalAmount } from '../store/selectors/account';

interface WalletsShortSummaryProps {
	totalAmount: number;
}

export class WalletsShortSummary extends Component<WalletsShortSummaryProps> {
	public state = {
		totalUSDAmount: 0
	};

	public componentDidMount() {
		return this.fetchPrivat24();
	}

	public componentWillReceiveProps() {
		return this.fetchPrivat24();
	}

	public render() {
		return (
			<View style={styles.info}>
				<Text style={styles.infoTitle}>Available Balance</Text>
				<Text style={styles.infoSum}>{numberWithCommas(this.props.totalAmount)} UAH</Text>
				<View style={styles.infoTotal}>
					<View style={styles.infoTotalView}>
						<Text style={styles.infoTotalText}>${this.state.totalUSDAmount} USD</Text>
					</View>
				</View>
			</View>
		);
	}

	protected fetchPrivat24 = () => {
		const uri = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
		return fetch(uri).then((response) => response.json()).then((response) => {
			if (response) {
				const exchangeCourse = find(response, (c) => c.ccy === 'USD');
				if (exchangeCourse) {
					const totalUSDAmount =
						this.props.totalAmount / ((Number(exchangeCourse.buy) + Number(exchangeCourse.sale)) / 2);
					this.setState({ totalUSDAmount: totalUSDAmount.toFixed(2) });
				}
			}
		});
	};
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

export default connect(
	(state: IStore) => ({
		totalAmount: totalAmount(state)
	}),
	() => ({})
)(WalletsShortSummary);
