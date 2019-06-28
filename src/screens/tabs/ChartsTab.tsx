import { createStackNavigator } from 'react-navigation';
import ChartsScreen from '../ChartsScreen';

export default createStackNavigator({
	Categories: {
		screen: ChartsScreen,
		navigationOptions: {
			header: null
		}
	}
});
