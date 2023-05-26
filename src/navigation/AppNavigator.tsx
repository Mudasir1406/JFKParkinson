import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {EventDetails, Onboarding} from '../screens';
import {RootStackParams} from '../Types/NavigationTypes.types';
import BottomTab from './BottomTabNavigator';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 2000,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />

      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
