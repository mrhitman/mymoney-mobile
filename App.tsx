import React, { Component } from "react";
import AppContainer from "./src/screens/AppContainer";
import { Provider } from "react-redux";
import store from "./src/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
