import { Button, Container, Content, Icon, Text, View } from 'native-base';
import React, { Component, SyntheticEvent } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import WalletShortInfo from '../../components/WalletShortInfo';
import WalletsShortSummary from '../../components/WalletsShortSummary';
import ICurrency from '../../types/Currency';
import IWallet from '../../types/Wallet';

interface IWalletScreenProps extends NavigationInjectedProps {
	wallets: IWallet[];
	currencies: ICurrency[];
}

export class WalletsScreen extends Component<IWalletScreenProps> {
	public render() {
		return (
			<Container style={styles.content}>
				<Content>
					<View style={styles.header}>
						<Text style={styles.headerTitle}>Your Wallets</Text>
					</View>
					<WalletsShortSummary />
					<View style={styles.account}>
						<View style={styles.accountHeader}>
							<Text style={styles.accountHeaderText}>YOUR ACCOUNT</Text>
							<Text style={styles.accountHeaderFilter}>ALL</Text>
						</View>
						<Content style={styles.wallets}>
							{this.props.wallets.map((wallet) => (
								<TouchableNativeFeedback key={wallet.id} onPress={this.handleWalletPress(wallet.id)}>
									<WalletShortInfo wallet={wallet} currencies={this.props.currencies} />
								</TouchableNativeFeedback>
							))}
						</Content>
					</View>
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

	private handlePlusClick = (e: SyntheticEvent) => {
		this.props.navigation.navigate('WalletAdd');
	};

	private handleWalletPress = (id: string) => () => {
		this.props.navigation.navigate('WalletTransactions', { id });
	};
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: '#FEFEFE'
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	headerTitle: {
		fontFamily: 'Questrial-Regular',
		flex: 2,
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: 10,
		marginTop: 15
	},
	addButton: {
		marginTop: 10,
		marginRight: 10
	},
	addIcon: {
		fontSize: 20
	},
	account: {
		backgroundColor: '#FBFCFE'
	},
	accountHeader: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'space-between',
		paddingTop: 40,
		paddingLeft: 20,
		paddingRight: 20
	},
	accountHeaderText: {
		fontSize: 19,
		fontWeight: 'bold',
		color: 'rgba(0,0,0,0.6)'
	},
	accountHeaderFilter: {
		fontSize: 19,
		fontWeight: 'bold',
		color: 'rgba(0,0,0,0.3)'
	},
	wallets: {
		paddingTop: 20,
		backgroundColor: '#FAFBFD'
	}
});

export default connect((state) => state, () => ({}))(WalletsScreen);
