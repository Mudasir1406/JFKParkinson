import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ForgetPassword, Home, Onboarding, SignIn, SignUp} from '../screens';
import {RootStackParams} from '../Types/NavigationTypes.types';
import BottomTab from './BottomTabNavigator';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
