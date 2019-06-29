/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('NativeModules', () => ({
	UIManager: {
		RCTView: () => {}
	},
	RNGestureHandlerModule: {
		attachGestureHandler: jest.fn(),
		createGestureHandler: jest.fn(),
		dropGestureHandler: jest.fn(),
		updateGestureHandler: jest.fn(),
		State: {},
		Directions: {}
	}
}));

it('renders correctly', () => {
	renderer.create(<App />);
});
