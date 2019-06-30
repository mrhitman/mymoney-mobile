import Store from '../../types/Store';

export const getCurrency = (state: Store, id: string) => {
	return state.currencies.find((currency) => currency.id === id)!;
};

export const exchange = (state: Store, amount: number, toCurrency: string) => {
	const currency1 = getCurrency(state, state.account.primaryCurrencyId);
	const currency2 = getCurrency(state, toCurrency);
	return amount;
};