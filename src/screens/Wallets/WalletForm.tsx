import { FormikProps } from 'formik';
import { Button, Input, Item, Label, Text } from 'native-base';
import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import ColorPicker from '../../components/ColorPicker';
import PocketAddModal from '../../components/PocketAddModal';
import PocketsList from '../../components/PocketsList';
import i18n from '../../i18n/i18n';
import ICurrency from '../../types/Currency';
import IPocket from '../../types/Pocket';

interface WalletFormProps {
	formik: FormikProps<{
		name: string;
		color: string;
		pockets: IPocket[];
	}>;
	currencies: ICurrency[];
}

export class WalletForm extends Component<WalletFormProps> {
	public render() {
		const { formik, currencies } = this.props;
		return (
			<Fragment>
				<Item inlineLabel error={!!formik.errors.name}>
					<Label>{i18n.t('name')}: </Label>
					<Input
						value={formik.values.name}
						onChangeText={formik.handleChange('name')}
						placeholder={formik.errors.name}
					/>
				</Item>
				<Item inlineLabel>
					<Label>{i18n.t('color')}: </Label>
					<ColorPicker value={formik.values.color} onChange={formik.handleChange('color')} />
				</Item>
				<Item inlineLabel>
					<Label>{i18n.t('icon')}: </Label>
					<Input />
				</Item>
				<PocketAddModal
					onSelect={this.handleAddPocket}
					currencies={currencies.filter(
						(currency) => !formik.values.pockets.find((pocket) => pocket.currency_id === currency.id)
					)}
				/>
				<PocketsList
					pockets={formik.values.pockets}
					currencies={this.props.currencies}
					onDelete={this.handleDeletePocket}
				/>
				<Button info full onPress={formik.handleSubmit}>
					<Text>{i18n.t('create')}</Text>
				</Button>
				<Button warning full>
					<Text>{i18n.t('cancel')}</Text>
				</Button>
			</Fragment>
		);
	}

	protected handleAddPocket = (currencyId: string) => {
		const { formik } = this.props;
		formik.setFieldValue('pockets', [
			...formik.values.pockets,
			{
				id: uuid(),
				currency_id: currencyId,
				amount: 0
			}
		]);
	};

	protected handleDeletePocket = (currencyId: string) => {
		const { formik } = this.props;
		formik.setFieldValue('pockets', formik.values.pockets.filter((pocket) => pocket.currency_id !== currencyId));
	};
}

export default WalletForm;
