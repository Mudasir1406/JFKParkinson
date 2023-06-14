import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  Design,
  DrawerIcon,
  HomeDesign,
  NotificationIcon,
} from '../../assets/svg';
import {Block, EventHomeCard, TouchableText, HomeBanner} from '../components';
import {colors, fonts, images} from '../constant';
import {useTheme} from 'react-native-paper';
import {useDrawerContext} from '../context/DrawerContex';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationType} from '../Types/NavigationTypes.types';

interface props {}

const Home: React.FunctionComponent<props> = () => {
  const {isOpen, setIsOpen} = useDrawerContext();
  const navigation = useNavigation<HomeNavigationType['navigation']>();
  const showTost = () => {
    ToastAndroid.show('hello', ToastAndroid.SHORT);
  };
  const theme = useTheme();
  const {width, height} = Dimensions.get('window');
  return (
    <Block>
      <View
        style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}>
        <ImageBackground source={images.gindolce} style={{flex: 1}}>
          <View
            style={{
              backgroundColor: theme.colors.tertiary,
              flex: 1,
              opacity: 0.9,
            }}
          />
        </ImageBackground>
      </View>
      <View style={styles.design}>
        <Design />
      </View>
      <View style={styles.header}>
        <Pressable style={styles.inner} onPress={() => setIsOpen(true)}>
          <DrawerIcon width={30} height={30} />
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Notifications')}>
          <NotificationIcon
            width={30}
            height={30}
            fill={theme.colors.onSecondary}
          />
        </Pressable>
      </View>
      <HomeBanner />
      <View style={styles.headingContanier}>
        <Text style={styles.heading}>Parkinson's Support Group Events</Text>
        <TouchableText text="View all >>" alignSelf="flex-end" />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <EventHomeCard
          width={250}
          heading="Rock Steady Boxing at JFK – on Zoom"
          time="Monday, Jan 3, 2022 1:00pm – 2:30pm"
        />
        <EventHomeCard
          width={250}
          heading="Rock Steady Boxing at JFK – on Zoom"
          time="Monday, Jan 3, 2022 1:00pm – 2:30pm"
        />
        <EventHomeCard
          width={250}
          heading="Rock Steady Boxing at JFK – on Zoom"
          time="Monday, Jan 3, 2022 1:00pm – 2:30pm"
        />
        <EventHomeCard
          width={250}
          heading="Rock Steady Boxing at JFK – on Zoom"
          time="Monday, Jan 3, 2022 1:00pm – 2:30pm"
        />
      </ScrollView>
      <View style={styles.headingContanier}>
        <Text style={styles.heading}>New On Parkinson's</Text>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <EventHomeCard
          width={width * 0.43}
          heading="Stories"
          time="See Stories >"
          onPress={showTost}
        />
        <EventHomeCard
          width={width * 0.43}
          heading="Community "
          time="Join Community >"
        />
      </View>
      <View style={styles.headingContanier}>
        <Text style={styles.heading}>Parkinson's Support Group Events</Text>
        <TouchableText text="View all >>" alignSelf="flex-end" />
      </View>
    </Block>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: '10%',
    marginHorizontal: '6%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...fonts.headerHeading,
    marginLeft: 10,
    color: colors.white,
  },
  heading: {
    ...fonts.homeHeading,
    maxWidth: '60%',
  },
  headingContanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  contanier: {
    width: 300,
    height: 300,
    borderRadius: 500,
    transform: [{scaleX: 1.5}],
    overflow: 'hidden',
    position: 'absolute',
    top: -80,
    left: 45,
  },
  design: {
    transform: [{scaleY: -1}, {rotate: '-20 deg'}],
    position: 'absolute',
    top: -170,
    right: -250,
  },
  scroll: {
    paddingHorizontal: 10,
  },
});
