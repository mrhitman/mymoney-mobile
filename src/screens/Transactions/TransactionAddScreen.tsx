import { Formik } from 'formik';
import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import { TRANSACTION_ADD } from '../../store/reducers/transactions';
import ICategory from '../../types/Category';
import ICurrency from '../../types/Currency';
import { ITransactionType } from '../../types/Transaction';
import IWallet from '../../types/Wallet';
import TransactionForm from './TransactionForm';

interface TransactionAddScreenProps extends NavigationInjectedProps {
	wallets: IWallet[];
	categories: ICategory[];
	currencies: ICurrency[];
	transactionAdd: (values) => void;
}

export class TransactionAddScreen extends Component<TransactionAddScreenProps> {
	public get initialValues() {
		const { categories, wallets, currencies } = this.props;
		return {
			amount: '',
			from_wallet_id: wallets[0].id,
			to_wallet_id: '',
			category_id: categories[0].id,
			currency_id: currencies[0].id,
			description: '',
			type: 'outcome',
			date: new Date()
		};
	}

	public render() {
		const { categories, wallets, currencies } = this.props;
		return (
			<Container>
				<Content padder style={{ margin: 10 }}>
					<Formik
						initialValues={this.initialValues}
						onSubmit={this.handleSubmit}
						onReset={this.handleReset}
						render={(props) => (
							<TransactionForm
								isNew
								wallets={wallets}
								categories={categories}
								currencies={currencies}
								handleReset={this.handleReset}
								formik={props}
							/>
						)}
					/>
				</Content>
			</Container>
		);
	}

	protected handleSubmit = (values) => {
		this.props.transactionAdd(values);
		this.props.navigation.goBack();
	};

	protected handleReset = () => {
		this.props.navigation.goBack();
	};
}

export default connect(
	(state) => state,
	(dispatch) => ({
		transactionAdd: (values) => {
			dispatch({ type: TRANSACTION_ADD, payload: { ...values } });
		}
	})
)(TransactionAddScreen);
