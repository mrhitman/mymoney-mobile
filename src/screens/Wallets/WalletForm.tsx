import { FormikValues } from 'formik';
import { Button, Input, Item, Label, Text, Picker, View } from 'native-base';
import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import ColorPicker from '../../components/ColorPicker';
import PocketsList from '../../components/PocketsList';
import i18n from '../../i18n/i18n';
import ICurrency from '../../types/Currency';

interface WalletFormProps {
	formik: FormikValues;
	currencies: ICurrency[];
}

export class WalletForm extends Component<WalletFormProps> {
	public render() {
		const { formik, currencies } = this.props;
		return (
			<Fragment>
				<Item inlineLabel>
					<Label>{i18n.t('name')}: </Label>
					<Input value={formik.values.name} onChangeText={formik.handleChange('name')} />
				</Item>
				<Item inlineLabel>
					<Label>{i18n.t('color')}: </Label>
					<ColorPicker value={formik.values.color} onChange={formik.handleChange('color')} />
				</Item>
				<Item inlineLabel>
					<Label>{i18n.t('icon')}: </Label>
					<Input />
				</Item>
				<Item inlineLabel picker>
					<Label>Pockets: </Label>
					<Picker>
						{currencies
							.filter((currency) => !formik.values.pockets.find((pocket) => pocket.currency_id === currency.id))
							.map((currency) => <Picker.Item key={currency.id} value={1} label={currency.name} />)}
					</Picker>
				</Item>
				<PocketsList pockets={formik.values.pockets} currencies={this.props.currencies} />
				<Button info full onPress={formik.handleSubmit}>
					<Text>{i18n.t('create')}</Text>
				</Button>
				<Button warning full>
					<Text>{i18n.t('cancel')}</Text>
				</Button>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({});

export default WalletForm;
