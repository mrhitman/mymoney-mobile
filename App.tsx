import { Root } from 'native-base';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppContainer from './src/screens/AppContainer';
import store, { persistor } from './src/store';

export default class App extends Component {
	public render() {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Root>
						<AppContainer />
					</Root>
				</PersistGate>
			</Provider>
		);
	}
}
