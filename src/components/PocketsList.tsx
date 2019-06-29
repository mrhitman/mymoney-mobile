import { List, ListItem, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import IPocket from '../types/Pocket';
import ICurrency from '../types/Currency';

interface PocketsListProps {
	pockets: IPocket[];
	currencies: ICurrency[];
}

export class PocketsList extends Component<PocketsListProps> {
	public render() {
		const { pockets } = this.props;
		return <List>{pockets.map(this.renderPocket)}</List>;
	}

	protected renderPocket = (pocket: IPocket) => {
		const { currencies } = this.props;
		const currency = currencies.find((c) => c.id === pocket.currency_id)!;
		return (
			<ListItem key={pocket.id}>
				<View style={styles.itemContainer}>
					<Text>
						{currency.name} {pocket.amount} {currency.symbol}
					</Text>
				</View>
			</ListItem>
		);
	};
}

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row'
	}
});

export default PocketsList;
