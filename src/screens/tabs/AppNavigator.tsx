import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

export default createStackNavigator({
	Home: {
		screen: TabNavigator,
		navigationOptions: {
			header: null
		}
	}
});
