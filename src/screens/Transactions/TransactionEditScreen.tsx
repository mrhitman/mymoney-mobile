import { Formik } from 'formik';
import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import { TRANSACTION_EDIT } from '../../store/reducers/transactions';
import ICategory from '../../types/Category';
import ITransaction from '../../types/Transaction';
import IWallet from '../../types/Wallet';
import TransactionForm from './TransactionForm';

interface TransactionEditScreenProps extends NavigationInjectedProps<{ transaction: ITransaction }> {
	wallets: IWallet[];
	categories: ICategory[];
	transactionEdit: (values) => void;
}

export class TransactionEditScreen extends Component<TransactionEditScreenProps> {
	public get initialValues() {
		const transaction = this.props.navigation.getParam('transaction');
		return {
			...transaction,
			amount: Math.abs(transaction.amount).toString(),
			date: transaction.date.toJSDate()
		};
	}

	public render() {
		const { categories, wallets } = this.props;
		return (
			<Container>
				<Content padder style={{ margin: 10 }}>
					<Formik
						initialValues={this.initialValues}
						onSubmit={this.handleSubmit}
						onReset={this.handleReset}
						render={(props) => (
							<TransactionForm
								wallets={wallets}
								categories={categories}
								currencies={[]}
								handleReset={this.handleReset}
								handleChangeOperation={this.handleSubmit}
								formik={props}
							/>
						)}
					/>
				</Content>
			</Container>
		);
	}

	protected handleSubmit = (values) => {
		this.props.transactionEdit(values);
		this.props.navigation.goBack();
	};

	protected handleReset = () => {
		this.props.navigation.goBack();
	};
}

export default connect(
	(state, ownProps) => ({
		...state,
		ownProps
	}),
	(dispatch) => ({
		transactionEdit: (values) => {
			dispatch({ type: TRANSACTION_EDIT, payload: values });
		}
	})
)(TransactionEditScreen);
