import { Input, Item, Label } from 'native-base';
import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { FormikValues } from 'formik';
import PocketsList from '../../components/PocketsList';
import ICurrency from '../../types/Currency';

interface WalletFormProps {
	formik: FormikValues;
	currencies: ICurrency[];
}

export class WalletForm extends Component<WalletFormProps> {
	public render() {
		const { formik } = this.props;
		return (
			<Fragment>
				<Item inlineLabel>
					<Label>Name: </Label>
					<Input />
				</Item>
				<Item inlineLabel>
					<Label>Color: </Label>
					<Input value={formik.values.color} onChangeText={formik.handleChange('color')} />
				</Item>
				<Item inlineLabel>
					<Label>Icon: </Label>
					<Input />
				</Item>
				<PocketsList pockets={formik.values.pockets} currencies={this.props.currencies} />
			</Fragment>
		);
	}
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
export default WalletForm;
