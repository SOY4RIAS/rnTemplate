import React, { Component } from 'react';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./../tools/redux/store/store";

import Login from './screens/Login/Login';
import SplashScreen from './screens/SplashScreen/SplashScreen';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <Login />
        </PersistGate>
      </Provider>
    );
  }
}
