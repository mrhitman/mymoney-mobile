import { Formik } from 'formik';
import { sample } from 'lodash';
import { Container, Content, Toast } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { defaultColors } from '../../components/ColorPicker';
import i18n from '../../i18n/i18n';
import { defaultCurrencies } from '../../store/reducers/currencies';
import { WALLET_ADD } from '../../store/reducers/wallets';
import WalletForm from './WalletForm';

interface WalletAddScreenProps extends NavigationInjectedProps {
	createWallet: (values) => void;
}

interface WalletAddFields {
	name: string;
	color: string;
	icon: {
		name: string;
		type: string;
	};
	pockets: Array<{
		id: string;
		currency_id: string;
		amount: number;
	}>;
}

const WalletAddSchema = Yup.object().shape({
	name: Yup.string().required('Wallet should have some name'),
	color: Yup.string().required('Choose some color')
});

export class WalletAddScreen extends Component<WalletAddScreenProps> {
	public get initialValues(): WalletAddFields {
		return {
			name: '',
			color: sample(defaultColors)!,
			icon: {
				name: 'cc-mastercard',
				type: 'FontAwesome'
			},
			pockets: []
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
						validationSchema={WalletAddSchema}
						render={(props) => <WalletForm formik={props} currencies={defaultCurrencies} />}
					/>
				</Content>
			</Container>
		);
	}

	protected handleSubmit = (values: WalletAddFields) => {
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
