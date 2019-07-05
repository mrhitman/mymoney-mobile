import { FormikValues } from 'formik';
import { Button, Input, Item, Label, Text } from 'native-base';
import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import PocketsList from '../../components/PocketsList';
import i18n from '../../i18n/i18n';
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
					<Label>{i18n.t('name')}: </Label>
					<Input value={formik.values.name} onChangeText={formik.handleChange('name')} />
				</Item>
				<Item inlineLabel>
					<Label>{i18n.t('color')}: </Label>
					<Input value={formik.values.color} onChangeText={formik.handleChange('color')} />
				</Item>
				<Item inlineLabel>
					<Label>{i18n.t('icon')}: </Label>
					<Input />
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
