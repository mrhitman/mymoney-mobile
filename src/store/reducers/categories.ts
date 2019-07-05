import i18n from '../../i18n/i18n';

const initialState = [
	{ id: '1', name: i18n.t('food'), type: 'outcome', parent_id: '0' },
	{ id: '2', name: i18n.t('items'), type: 'outcome', parent_id: '0' },
	{ id: '3', name: i18n.t('transport'), type: 'outcome', parent_id: '0' },
	{ id: '4', name: i18n.t('car'), type: 'outcome', parent_id: '0' },
	{ id: '5', name: i18n.t('traveling'), type: 'outcome', parent_id: '0' },
	{ id: '6', name: i18n.t('sport'), type: 'outcome', parent_id: '0' },
	{ id: '7', name: i18n.t('medecine'), type: 'outcome', parent_id: '0' },
	{ id: '8', name: i18n.t('child'), type: 'outcome', parent_id: '0' },
	{ id: '9', name: i18n.t('pets'), type: 'outcome', parent_id: '0' },
	{ id: '10', name: i18n.t('entertainments'), type: 'outcome', parent_id: '0' },
	{ id: '11', name: i18n.t('education'), type: 'outcome', parent_id: '0' },
	{ id: '12', name: i18n.t('salary'), type: 'income', parent_id: '0' },
	{ id: '13', name: i18n.t('deposit'), type: 'income', parent_id: '0' },
	{ id: '14', name: i18n.t('gift'), type: 'income', parent_id: '0' },
	{ id: '15', name: i18n.t('premial'), type: 'income', parent_id: '0' },
	{ id: '16', name: i18n.t('coffee'), type: 'outcome', parent_id: '1' }
];

export const defaultCategories = initialState;
export default (state = initialState) => state;
