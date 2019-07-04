import { map, random } from 'lodash';
import { Container, Content, Header, Left, Title, View, Segment, Button, Text } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import { groupByCategory } from '../store/selectors/transactions';
import ICategory from '../types/Category';
import Store from '../types/Store';
import ITransaction, { ITransactionType } from '../types/Transaction';

const screenWidth = Dimensions.get('window').width;

interface ChartsScreenProps {
	groupByCategory: (type: ITransactionType) => { [key: string]: ITransaction[] };
	categories: ICategory[];
}

interface ChartsScreenState {
	type: ITransactionType;
}

export class ChartsScreen extends Component<ChartsScreenProps, ChartsScreenState> {
	public state = {
		type: 'outcome' as ITransactionType
	};

	public render() {
		const data = map(this.props.groupByCategory(this.state.type), (group: ITransaction[], key: string) => {
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
				<Header hasSegment>
					<Left>
						<Title>Charts</Title>
					</Left>
				</Header>
				<Segment>
					<Button first active={this.state.type === 'income'}>
						<Text>Income</Text>
					</Button>
					<Button active={this.state.type === 'outcome'}>
						<Text>Outcome</Text>
					</Button>
					<Button last>
						<Text>Transfers</Text>
					</Button>
				</Segment>
				<Content padder>
					<View
						onTouchEndCapture={() =>
							this.setState((state) => ({ type: state.type === 'income' ? 'outcome' : 'income' }))}
					>
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
					</View>
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
	(state: Store) => ({ ...state, groupByCategory: (type: ITransactionType) => groupByCategory(state, type) }),
	() => ({})
)(ChartsScreen);
