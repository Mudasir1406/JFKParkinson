import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ForgetPassword, SignIn, SignUp} from '../screens';
import {RootStackParams} from '../Types/NavigationTypes.types';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
