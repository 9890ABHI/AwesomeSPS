/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Index from './src/Screens/Index';
import {store} from './store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Index />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
