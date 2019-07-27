import { Formik } from 'formik';
import { first } from 'lodash';
import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { TRANSACTION_ADD } from '../../store/reducers/transactions';
import ICategory from '../../types/Category';
import ICurrency from '../../types/Currency';
import IWallet from '../../types/Wallet';
import TransactionForm from './TransactionForm';

interface TransactionAddScreenProps extends NavigationInjectedProps {
	wallets: IWallet[];
	categories: ICategory[];
	currencies: ICurrency[];
	transactionAdd: (values) => void;
}

const TransactionAddSchema = Yup.object().shape({
	amount: Yup.number().moreThan(0).required("Amount shouldn't be zero"),
});

export class TransactionAddScreen extends Component<TransactionAddScreenProps> {
	public get initialValues() {
		const { categories, wallets, currencies } = this.props;
		return {
			amount: '',
			from_wallet_id: first(wallets)!.id,
			to_wallet_id: '',
			category_id: first(categories)!.id,
			currency_id: first(currencies)!.id,
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
						validationSchema={TransactionAddSchema}
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
