import { Button, Container, Content, Icon, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import WalletShortInfo from '../../components/WalletShortInfo';
import WalletsShortSummary from '../../components/WalletsShortSummary';
import IWallet from '../../types/Wallet';

interface IWalletScreenProps extends NavigationInjectedProps {
	wallets: IWallet[];
}

export class WalletsScreen extends Component<IWalletScreenProps> {
	public render() {
		return (
			<Container style={styles.content}>
				<Content scrollEnabled={false}>
					<View style={styles.header}>
						<Text style={styles.headerTitle}>Your Wallets</Text>
						<Button icon rounded transparent bordered primary style={styles.addButton} onPress={this.handleWalletAdd}>
							<Icon name="add" style={styles.addIcon} />
						</Button>
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
									<WalletShortInfo wallet={wallet} />
								</TouchableNativeFeedback>
							))}
						</Content>
					</View>
				</Content>
			</Container>
		);
	}

	private handleWalletAdd = () => {
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
