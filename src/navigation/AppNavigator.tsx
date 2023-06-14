import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Comments,
  EventDetails,
  Notifications,
  Onboarding,
  Profile,
  Story,
} from '../screens';
import {RootStackParams} from '../Types/NavigationTypes.types';
import BottomTab from './BottomTabNavigator';
import CreateStories from '../screens/CreateStory';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 1000,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />

      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CreateStory" component={CreateStories} />
      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
