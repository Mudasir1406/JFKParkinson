import {
  Dimensions,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calender, Design, Location, Time, Zoom} from '../../assets/svg';
import {AuthButton, BackButton, Block} from '../components';
import {colors, fonts} from '../constant';
import Animated, {Easing, FadeInDown} from 'react-native-reanimated';
import {useTheme} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {EventDetailsNavigationType} from '../Types/NavigationTypes.types';
import {
  onCreateTriggerNotification,
  onDisplayNotification,
} from '../services/Notifications';
import {GetMeetingResponse, getMeetingDetailsById} from '../services/meetings';
import {useLoadingContext} from '../context/LoadingContext';
import {convertDateStringToDate} from '../utils/date';

type props = {};
const {height, width} = Dimensions.get('window');

const EventDetails: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  const {setLoading, loading} = useLoadingContext();
  const route = useRoute<EventDetailsNavigationType['route']>();
  const [data, setData] = useState<GetMeetingResponse>();
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    getMeetingDetailsById(route.params.id?.trim())
      .then(data => {
        setData(data);
        if (
          new Date().getTime() > convertDateStringToDate(data?.date).getTime()
        ) {
          setButtonDisable(true);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  const handleLinkPress = async () => {
    if (data?.zoomlink) {
      await Linking.openURL(data.zoomlink);
    }
  };

  return (
    <>
      <ImageBackground
        style={styles.imageContanier}
        source={require('../../assets/gindolce.jpg')}
        resizeMode="cover">
        <View style={styles.design}>
          <Design width={width * 1.2} height={height * 0.5} />
        </View>

        <View style={styles.back}>
          <BackButton pageName="Meetings Details" isDrawer={false} />
        </View>
      </ImageBackground>
      <Block contentContainerStyle={{padding: 15}}>
        <Animated.Text
          style={styles.heading}
          entering={FadeInDown.duration(2000).easing(Easing.bounce)}>
          {data?.heading}
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
              {data?.date}
            </Animated.Text>
          </Animated.View>
          <Animated.View
            style={styles.linkContanier}
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}>
            <Time />
            <Animated.Text
              style={[styles.time, {color: theme.colors.outlineVariant}]}>
              {data?.time}
            </Animated.Text>
          </Animated.View>
        </View>
        {data?.location ? (
          <Animated.View
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}
            style={styles.linkContanier}>
            <Location />
            <Animated.Text
              style={[styles.location, {color: theme.colors.outlineVariant}]}>
              {data.location}
            </Animated.Text>
          </Animated.View>
        ) : (
          <></>
        )}

        {data?.zoomlink ? (
          <View style={styles.linkContanier}>
            <Zoom />
            <Animated.Text
              entering={FadeInDown.duration(2000).easing(Easing.bounce)}
              style={[styles.location, {color: theme.colors.outlineVariant}]}>
              Zoom Link:
            </Animated.Text>
            <Animated.Text
              entering={FadeInDown.duration(2000).easing(Easing.bounce)}
              onPress={handleLinkPress}
              style={[styles.location, {color: theme.colors.tertiary}]}>
              {data.zoomlink}
            </Animated.Text>
          </View>
        ) : (
          <></>
        )}
        {data?.note ? (
          <Animated.View
            entering={FadeInDown.duration(2000).easing(Easing.bounce)}
            style={styles.linkContanier}>
            <Animated.Text
              style={[styles.location, {color: theme.colors.outlineVariant}]}>
              Note: {data.note}
            </Animated.Text>
          </Animated.View>
        ) : (
          <></>
        )}
        <AuthButton
          heading="Register"
          disabled={buttonDisable}
          onPress={() => {
            onDisplayNotification(
              'Meeting Registered Successfully',
              `${data?.heading} ${data?.date}`,
              route.params.id,
            );
            if (data?.date) {
              const date = convertDateStringToDate(data?.date);
              onCreateTriggerNotification(
                date,
                'Meeting Reminder',
                `${data?.heading} ${data?.date}`,
              );
            }
          }}
        />
      </Block>
    </>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 20,
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
  design: {
    position: 'absolute',
    top: -height * 0.3,
    left: -width * 0.1,
  },
  imageContanier: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
