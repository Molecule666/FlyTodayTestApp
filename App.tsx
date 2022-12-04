import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
// import {navigationRef} from '~/navigation/methods';
import {navigationRef} from './src/navigation/methods';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <ActionSheetProvider>
        <AppNavigator />
      </ActionSheetProvider>
    </NavigationContainer>
  );
};

export default App;
