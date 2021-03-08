import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from 'native-base';
import { store, persistor } from './store';

import Splash from './src/screens/splash';

import './src/utils/networkDebugger';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <Splash />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
