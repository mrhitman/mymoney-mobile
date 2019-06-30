import Store from '../../types/Store';

export const incomeCategories = (store: Store) => {
	return getCategoriesByType(store, 'income');
};

export const outcomeCategories = (store: Store) => {
	return getCategoriesByType(store, 'outcome');
};

export const getCategoriesByType = (store: Store, type: string) => {
	return store.categories.filter((category) => category.type === type);
};
