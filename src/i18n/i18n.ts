import i18n from 'react-native-i18n';
import en from './locales/en';
import ru from './locales/ru';

i18n.fallbacks = true;
i18n.translations = {
	en,
	ru
};
i18n.locale = 'ru';


export default i18n;
