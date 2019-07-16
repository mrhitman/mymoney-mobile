import { Formik } from 'formik';
import { Container, Content, Toast } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { defaultCurrencies } from '../../store/reducers/currencies';
import WalletForm from './WalletForm';
import i18n from '../../i18n/i18n';
import { WALLET_ADD } from '../../store/reducers/wallets';

interface WalletAddScreenProps extends NavigationInjectedProps {
	createWallet: (values) => void;
}

export class WalletAddScreen extends Component<WalletAddScreenProps> {
	public get initialValues() {
		return {
			name: '',
			color: '',
			icon: {
				name: 'cc-mastercard',
				type: 'FontAwesome'
			},
			pockets: [
				{
					id: uuid(),
					currency_id: defaultCurrencies[0].id,
					amount: 0
				},
				{
					id: uuid(),
					currency_id: defaultCurrencies[1].id,
					amount: 0
				}
			]
		};
	}

	public render() {
		return (
			<Container>
				<Content padder style={styles.content}>
					<Formik
						initialValues={this.initialValues}
						onSubmit={this.handleSubmit}
						onReset={this.handleSubmit}
						render={(props) => <WalletForm formik={props} currencies={defaultCurrencies} />}
					/>
				</Content>
			</Container>
		);
	}

	protected handleSubmit = (values) => {
		this.props.createWallet(values);
		Toast.show({
			text: `${i18n.t('wallet')} "${values.name}" created!`,
			position: 'bottom',
			duration: 2500,
			buttonText: 'Ok'
		});
		this.props.navigation.goBack();
	};

	protected handleReset = () => {
		this.props.navigation.goBack();
	};
}

const styles = StyleSheet.create({
	content: {
		paddingTop: 30
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingTop: 30
	},
	headerTitle: {
		fontFamily: 'Questrial-Regular',
		flex: 2,
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: 15,
		marginTop: 20
	},
	addButton: {
		marginTop: 10,
		marginRight: 10
	},
	addIcon: {
		fontSize: 20
	},
	footer: {
		flexDirection: 'row',
		height: 46,
		backgroundColor: '#fff',
		justifyContent: 'center'
	}
});

export default connect(
	(state) => state,
	(dispatch) => ({
		createWallet: (values) => {
			dispatch({ type: WALLET_ADD, payload: values });
		}
	})
)(WalletAddScreen);
