import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Calender,
  Location,
  MeetingBanner,
  MeetingDesign,
  Time,
  Zoom,
} from '../../assets/svg';
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
        <MeetingBanner width="100%" height={height * 0.4725} />

        <View style={styles.back}>
          <BackButton pageName="Meeting Details" />
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
          <Animated.View
            style={styles.linkContanier}
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}>
            <Calender />
            <Animated.Text style={[styles.date, {color: theme.colors.primary}]}>
              Monday, May 1, 2023
            </Animated.Text>
          </Animated.View>
          <Animated.View
            style={styles.linkContanier}
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}>
            <Time />
            <Animated.Text
              style={[styles.time, {color: theme.colors.outlineVariant}]}>
              1:00pm - 2:30pm
            </Animated.Text>
          </Animated.View>
        </View>
        <Animated.View
          entering={FadeInDown.duration(2000).easing(Easing.bounce)}
          style={styles.linkContanier}>
          <Location />
          <Animated.Text
            style={[styles.location, {color: theme.colors.outlineVariant}]}>
            Location: HMH JFK UNIVERSITY MEDICAL CENTER, 70 JAMES STREET,
            EDISON, NJ 08840
          </Animated.Text>
        </Animated.View>

        <View style={styles.linkContanier}>
          <Zoom />
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
    marginHorizontal: 4,
    marginTop: 3,
  },
  dateContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    ...fonts.eventDetailsText,
    marginVertical: 15,
    marginLeft: 8,
  },
  time: {
    ...fonts.eventDetailsText,
    marginHorizontal: 4,
    marginTop: 3,
  },
  linkContanier: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
