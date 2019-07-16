import { Icon, Left, List, ListItem, Right, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Flag from 'react-native-flags-kit';
import ICurrency from '../types/Currency';
import IPocket from '../types/Pocket';

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
				<Left style={styles.itemContainer}>
					<Flag code={currency.code} size={32} />
					<View style={styles.flag}>
						<Text>
							{currency.name} {pocket.amount} {currency.symbol}
						</Text>
					</View>
				</Left>
				<Right>
					<Icon name="trash" />
				</Right>
			</ListItem>
		);
	};
}

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row'
	},
	flag: {
		marginLeft: 12
	}
});

export default PocketsList;
