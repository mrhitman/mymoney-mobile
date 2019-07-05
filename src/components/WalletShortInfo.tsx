import { Icon, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ICurrency from '../types/Currency';
import IPocket from '../types/Pocket';
import IWallet from '../types/Wallet';

interface WalletShortInfoProps {
	wallet: IWallet;
	currencies: ICurrency[];
}

export class WalletShortInfo extends Component<WalletShortInfoProps> {
	public render() {
		const { wallet } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.header}>{wallet.name}</Text>
				<View style={styles.info}>
					<View style={styles.icon}>
						<Icon {...wallet.icon} style={{ color: wallet.color, fontSize: 42 }} />
					</View>
					<View style={styles.pockets}>{wallet.pockets.map(this.renderPocket)}</View>
				</View>
			</View>
		);
	}

	protected renderPocket = (pocket: IPocket) => {
		const currency = this.props.currencies.find((c) => c.id === pocket.currency_id)!;
		return (
			<View key={pocket.id} style={styles.details}>
				<Text style={styles.pocketInfo}>
					{pocket.amount} {currency.short}
				</Text>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		margin: 12,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: 'rgba(0,0,0,0.3)',
		borderRadius: 20,
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 14,
		shadowOpacity: 0.5,
		elevation: 4
	},
	header: {
		fontFamily: 'Questrial-Regular',
		fontSize: 17,
		paddingLeft: 18,
		paddingTop: 10,
		paddingBottom: 6
	},
	icon: {
		margin: 24,
		marginTop: 14
	},
	info: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	details: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		flexWrap: 'nowrap'
	},
	pockets: {
		marginRight: 24,
		marginBottom: 12
	},
	pocketInfo: {
		fontSize: 15,
		fontWeight: 'bold',
		fontFamily: 'Questrial-Regular',
		color: 'rgba(0,0,0,0.7)'
	}
});

export default WalletShortInfo;
