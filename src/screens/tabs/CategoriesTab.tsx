import { createStackNavigator } from 'react-navigation';
import CategoriesScreen from '../CategoriesScreen';

export default createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
		navigationOptions: {
			header: null
		}
	}
});
