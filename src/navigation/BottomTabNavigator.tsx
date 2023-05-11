import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../constant';
import {Home} from '../screens';
import * as SvgIcons from '../../assets/svg';
import {useTheme} from 'react-native-paper';

const Tab = createBottomTabNavigator();
const BottomTabBar = ({state, navigation, descriptors}) => {
  const theme = useTheme();
  return (
    <View style={[styles.contanier, {backgroundColor: theme.colors.primary}]}>
      {state.routes.map(
        (
          route: {key: string | number; name: string},
          index: React.Key | null | undefined,
        ) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };
          const isFocused = state.index === index;
          let activeIcon, InactiveIcon;
          let Icon;
          if (route.name == 'Home') {
            activeIcon = 'Home';
            InactiveIcon = 'Home';
          } else if (route.name == 'Events') {
            activeIcon = 'Events';
            InactiveIcon = 'Events';
          } else if (route.name == 'Posts') {
            activeIcon = 'Post';
            InactiveIcon = 'Post';
          } else if (route.name == 'Consultation') {
            activeIcon = 'Consultation';
            InactiveIcon = 'Consultation';
          } else if (route.name == 'Stories') {
            activeIcon = 'Stories';
            InactiveIcon = 'Stories';
          }
          Icon = SvgIcons[isFocused ? activeIcon : InactiveIcon];
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  route.name === 'Home'
                    ? theme.colors.primaryContainer
                    : colors.white,
                borderRadius: 10,
                height: 50,
                width: 50,
                elevation: isFocused ? 0 : 3,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
              activeOpacity={0.8}>
              <Icon />
              {/* <Text style={{color: isFocused ? colors.bule : colors.lightBrown}}>
                    {route?.name}
                  </Text> */}
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
        },
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  contanier: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default BottomTab;
5;
