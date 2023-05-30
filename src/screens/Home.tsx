import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {DrawerIcon, HomeDesign, NotificationIcon} from '../../assets/svg';
import {Block, EventHomeCard, TouchableText, HomeBanner} from '../components';
import {colors, fonts, images} from '../constant';
import {useTheme} from 'react-native-paper';

interface props {}

const Home: React.FunctionComponent<props> = () => {
  const showTost = () => {
    ToastAndroid.showWithGravity(
      'hello',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const theme = useTheme();
  const {width, height} = Dimensions.get('window');
  return (
    <Block>
      <HomeDesign
        width={width * 1.008}
        height={height * 0.37}
        style={{position: 'absolute'}}
      />
      <View style={styles.header}>
        <Pressable style={styles.inner} onPress={() => console.log('sada')}>
          <DrawerIcon width={30} height={30} />
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <NotificationIcon
          width={30}
          height={30}
          fill={theme.colors.onSecondary}
        />
      </View>
      <HomeBanner />
      <View style={styles.headingContanier}>
        <Text style={styles.heading}>Parkinson's Support Group Events</Text>
        <TouchableText text="View all >>" alignSelf="flex-end" />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
      <View style={{flexDirection: 'row'}}>
        <EventHomeCard
          width={170}
          heading="Stories"
          time="See Stories >"
          onPress={showTost}
        />
        <EventHomeCard
          width={170}
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
    margin: 20,
  },
});
