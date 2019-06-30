import { createStackNavigator } from 'react-navigation';
import ChartsScreen from '../ChartsScreen';

export default createStackNavigator({
	Charts: {
		screen: ChartsScreen,
		navigationOptions: {
			header: null
		}
	}
});
