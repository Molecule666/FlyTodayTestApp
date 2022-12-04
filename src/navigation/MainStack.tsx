import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CommonActions} from '@react-navigation/native';
import {ScreenTags, HotelListScreen, FullScreenScreen} from '../screens/index';

const Stack = createNativeStackNavigator();

const navigatorOptions = {
  ...CommonActions,
  headerShown: false,
};

const screens = [
  {
    name: ScreenTags.HotelList,
    component: HotelListScreen,
  },
  {
    name: ScreenTags.FullScreenModalScreen,
    component: FullScreenScreen,
  },
];

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      {screens.map(screen => (
        //@ts-ignore
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;
