import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import { groupByCategory } from '../store/selectors/transactions';
import Store from '../types/Store';
import ITransaction from '../types/Transaction';
import { map, random } from 'lodash';
import ICategory from '../types/Category';

const screenWidth = Dimensions.get('window').width;

interface ChartsScreenProps {
	groupByCategory: () => { [key: string]: ITransaction[] };
	categories: ICategory[];
}

export class ChartsScreen extends Component<ChartsScreenProps> {
	public render() {
		const data = map(this.props.groupByCategory(), (group: ITransaction[], key: string) => {
			return {
				name: this.props.categories.find((c) => c.id === key)!.name,
				color: `rgba(${random(255)},${random(255)},${random(255)},0.7)`,
				amount: group.reduce((acc, trx) => acc + trx.amount, 0)
			};
		});
		const chartConfig = {
			backgroundGradientFrom: '#1E2923',
			backgroundGradientTo: '#08130D',
			color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
			strokeWidth: 2
		};
		return (
			<Container style={styles.content}>
				<StatusBar barStyle="light-content" animated />
				<Content padder>
					<PieChart
						data={data}
						width={screenWidth}
						height={220}
						chartConfig={chartConfig}
						accessor="amount"
						backgroundColor="transparent"
						paddingLeft="15"
						absolute
					/>
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

export default connect(
	(state: Store) => ({ ...state, groupByCategory: () => groupByCategory(state, 'outcome') }),
	() => ({})
)(ChartsScreen);
