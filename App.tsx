import React, { Component } from 'react';
import AppContainer from './src/screens/AppContainer';
import { Provider } from 'react-redux';
import store from './src/store';
import { Root } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}
