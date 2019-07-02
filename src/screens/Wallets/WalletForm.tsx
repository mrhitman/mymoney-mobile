import { FormikValues } from 'formik';
import { Button, Footer, Input, Item, Label, Text, View } from 'native-base';
import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
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
				<Footer style={styles.footer}>
					<View>
						<Button success onPress={formik.handleSubmit}>
							<Text>Create wallet</Text>
						</Button>
					</View>
					<View>
						<Button warning>
							<Text>Cancel</Text>
						</Button>
					</View>
				</Footer>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	footer: {
		flexDirection: 'row',
		height: 46,
		backgroundColor: '#fff',
		justifyContent: 'center'
	}
});

export default WalletForm;
