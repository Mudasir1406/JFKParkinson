import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MeetingDesign} from '../../assets/svg';
import {BackButton, Block, Search} from '../components';
import {colors, fonts} from '../constant';
import Animated, {Easing, FadeInDown} from 'react-native-reanimated';
import {useTheme} from 'react-native-paper';

type props = {};
const {height} = Dimensions.get('window');

const EventDetails: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  return (
    <>
      <View>
        <MeetingDesign width="100%" height={height * 0.42} />
        <View style={styles.search}>
          <Search placeholder="Search here..." />
        </View>
        <View style={styles.back}>
          <BackButton pageName="Meetings" />
        </View>
      </View>
      <Block contentContainerStyle={{padding: 15}}>
        <Animated.Text
          style={styles.heading}
          entering={FadeInDown.duration(2000).easing(Easing.bounce)}>
          Rock Steady Boxing at JFK - on Zoom
        </Animated.Text>
        <Animated.Text
          style={styles.heading}
          entering={FadeInDown.duration(2000).easing(Easing.bounce)}>
          Description
        </Animated.Text>
        <View style={styles.dateContanier}>
          <Animated.Text
            style={[styles.date, {color: theme.colors.primary}]}
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}>
            Monday, May 1, 2023
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}
            style={[styles.time, {color: theme.colors.outlineVariant}]}>
            1:00pm - 2:30pm
          </Animated.Text>
        </View>
        <Animated.Text
          entering={FadeInDown.duration(2000).easing(Easing.bounce)}
          style={[styles.location, {color: theme.colors.outlineVariant}]}>
          Location: HMH JFK UNIVERSITY MEDICAL CENTER, 70 JAMES STREET, EDISON,
          NJ 08840
        </Animated.Text>
        <View style={styles.linkContanier}>
          <Animated.Text
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}
            style={[styles.location, {color: theme.colors.outlineVariant}]}>
            Zoom Link:
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}
            style={[styles.location, {color: theme.colors.tertiary}]}>
            https://us02web.zoom.us/j/2128260907
          </Animated.Text>
        </View>
      </Block>
    </>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  search: {
    position: 'absolute',
    right: 20,
    width: '45%',
  },
  back: {
    position: 'absolute',
    left: 20,
    width: '45%',
  },
  heading: {
    ...fonts.eventDetailsHeading,
    color: colors.black,
    marginTop: 15,
  },
  date: {
    ...fonts.eventDetailsText,
  },
  dateContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    ...fonts.eventDetailsText,
    marginVertical: 15,
  },
  time: {
    ...fonts.eventDetailsText,
  },
  linkContanier: {
    flexDirection: 'row',
  },
});
