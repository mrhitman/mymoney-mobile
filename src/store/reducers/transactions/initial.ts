import { find } from 'lodash';
import { DateTime } from 'luxon';
import { ITransactionType } from '../../../types/Transaction';
import { defaultCategories } from '../categories';
import { defaultCurrencies } from '../currencies';
import { defaultWallets } from '../wallets';

const initialState = [
	{
		id: '1',
		category_id: find(defaultCategories, (category) => category.name === 'coffee')!.id,
		date: DateTime.local(),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'outcome',
		amount: -168,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: '2',
		category_id: find(defaultCategories, (category) => category.name === 'deposit')!.id,
		date: DateTime.local(),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'income',
		amount: 404,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: '3',
		category_id: find(defaultCategories, (category) => category.name === 'salary')!.id,
		date: DateTime.local(),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'income',
		amount: 2342,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: '4',
		category_id: find(defaultCategories, (category) => category.name === 'sport')!.id,
		date: DateTime.local().minus({ day: 1 }),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'outcome',
		amount: -407,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: '5',
		category_id: find(defaultCategories, (category) => category.name === 'food')!.id,
		date: DateTime.local().minus({ day: 1 }),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'outcome',
		amount: -312,
		currency_id: defaultCurrencies[0].id,
		description: ''
	},
	{
		id: '6',
		category_id: find(defaultCategories, (category) => category.name === 'salary')!.id,
		date: DateTime.local().minus({ day: 1 }),
		from_wallet_id: defaultWallets[0].id,
		to_wallet_id: '0',
		type: <ITransactionType>'income',
		amount: 2356,
		currency_id: defaultCurrencies[0].id,
		description: ''
	}
];

export default initialState;