import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';
import {ScreenTags} from '../screens/index';

const Stack = createNativeStackNavigator();

const navigatorOptions = {
  headerShown: false,
};

export default function AppNavigator() {
  return (
    <>
      <Stack.Navigator screenOptions={navigatorOptions}>
        <Stack.Screen name={ScreenTags.MainStack} component={MainStack} />
      </Stack.Navigator>
    </>
  );
}
