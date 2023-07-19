import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Comments,
  CreateNote,
  EventDetails,
  LatestNews,
  Notes,
  Notifications,
  Onboarding,
  PeopleInTheNews,
  Profile,
  Story,
  SupportsGroup,
  TermsAndConditions,
  ZoomRecordings,
} from '../screens';
import {RootStackParamsApp} from '../Types/NavigationTypes.types';
import BottomTab from './BottomTabNavigator';
import CreateStories from '../screens/CreateStory';
import PrivacyPolicy from '../screens/PravicyPolicy';
import Articles from '../screens/Articles';
import Article from '../screens/Article';
import CreatePost from '../screens/CreatePost';

const Stack = createNativeStackNavigator<RootStackParamsApp>();

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
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="ZoomRecordings" component={ZoomRecordings} />
      <Stack.Screen name="Articles" component={Articles} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="SupportsGroup" component={SupportsGroup} />
      <Stack.Screen name="PeopleInTheNews" component={PeopleInTheNews} />
      <Stack.Screen name="LatestNews" component={LatestNews} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="CreateNote" component={CreateNote} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
