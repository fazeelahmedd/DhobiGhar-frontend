import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './app/Navigation';
import { navigationRef } from './app/Utils/navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './app/Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaView style={{ flex: 1 }}>
            <MainNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;
