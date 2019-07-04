import { Button, Container, Content, Icon, Text, View, List, ListItem, Left, Body, Right } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import IWallet from '../../types/Wallet';
import { getWallet } from '../../store/selectors/wallets';
import Store from '../../types/Store';
import { getForWallet } from '../../store/selectors/transactions';
import ITransaction from '../../types/Transaction';

interface WalletDetailScreenProps
	extends NavigationInjectedProps<{
			id: string;
		}> {
	wallets: IWallet[];
}

export class WalletDetailScreen extends Component<WalletDetailScreenProps & any> {
	public render() {
		const wallet = this.getWallet();
		return (
			<Container style={styles.content}>
				<StatusBar barStyle="light-content" animated />
				<Content padder>
					<View style={styles.header}>
						<Text style={styles.headerTitle}>{wallet.name}</Text>
					</View>
					<View style={styles.info}>
						<Text style={styles.infoTitle}>Available Balance</Text>
						<Text style={styles.infoSum}>32,5557 UAH</Text>
						<View style={styles.infoTotal}>
							<View style={styles.infoTotalView}>
								<Text style={styles.infoTotalText}>$3,555.48 USD</Text>
							</View>
						</View>
					</View>
					<View style={styles.account}>
						<View style={styles.accountHeader}>
							<Text style={styles.accountHeaderText}>TRANSACTIONS HISTORY</Text>
							<Text style={styles.accountHeaderFilter}>ALL</Text>
						</View>
						<View style={styles.wallets}>
							<List>{this.props.getForWallet(this.id).map(this.renderTrx)}</List>
						</View>
					</View>
				</Content>
				<Button icon rounded warning style={{ bottom: 16, right: 26, position: 'absolute' }}>
					<Icon name="md-create" style={{ fontSize: 20 }} />
				</Button>
			</Container>
		);
	}

	protected renderTrx = (trx: ITransaction) => {
		const category = this.props.categories.find((category) => category.id === trx.category_id)!;
		return (
			<ListItem key={trx.id}>
				<Body>
					<Text>{category.name}</Text>
				</Body>
				<Right>
					<Text>{trx.amount}</Text>
				</Right>
			</ListItem>
		);
	};

	protected get id() {
		return this.props.navigation.getParam('id');
	}

	protected getWallet = () => {
		return this.props.getWallet(this.id);
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
	info: {
		flex: 1,
		paddingLeft: 20,
		paddingTop: 30,
		paddingBottom: 50,
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

export default connect(
	(state: Store) => ({
		...state,
		getWallet: (id: string) => getWallet(state, id),
		getForWallet: (id: string) => getForWallet(state, id)
	}),
	() => ({})
)(WalletDetailScreen);
