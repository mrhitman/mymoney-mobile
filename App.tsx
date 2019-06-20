import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import AppContainer from './src/screens/AppContainer';
import { Store } from './src/store';

export default class App extends Component {
  render() {
    const store = Store.create();
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
