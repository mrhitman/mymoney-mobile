import { Button, Container, Content, Footer, Form, Icon, Input, Item, Label, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import WalletForm from './WalletForm';
import { Formik } from 'formik';
import { defaultCurrencies } from '../../store/reducers/currencies';

export class WalletAddScreen extends Component<NavigationInjectedProps> {
	public get initialValues() {
		return {
			name: '',
			color: 'rgba(255,0,0,0.5)',
			icon: {
				name: 'cc-mastercard',
				type: 'FontAwesome'
			},
			pockets: [
				{
					id: '11',
					currency_id: defaultCurrencies[0].id,
					amount: 0
				}
			]
		};
	}

	public render() {
		return (
			<Container>
				<Content style={styles.content}>
					<Formik
						initialValues={this.initialValues}
						onSubmit={this.handleSubmit}
						onReset={this.handleSubmit}
						render={(props) => <WalletForm formik={props} currencies={defaultCurrencies} />}
					/>
				</Content>
				<Footer style={styles.footer}>
					<View>
						<Button success>
							<Text>Create wallet</Text>
						</Button>
					</View>
					<View>
						<Button warning>
							<Text>Cancel</Text>
						</Button>
					</View>
				</Footer>
			</Container>
		);
	}

	protected handleSubmit = (values) => {
		// @TODO write to store
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

export default WalletAddScreen;
