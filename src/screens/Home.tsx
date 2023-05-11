import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {DrawerIcon, HomeDesign, NotificationIcon} from '../../assets/svg';
import {Block, EventHomeCard, HomeBanner, TouchableText} from '../components';
import {colors, fonts} from '../constant';

interface props {}

const Home: React.FunctionComponent<props> = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <Block>
      <HomeDesign
        width={width * 1.002}
        height={height * 0.3365}
        style={{position: 'absolute'}}
      />
      <View style={styles.header}>
        <View style={styles.inner}>
          <DrawerIcon width={30} height={30} />
          <Text style={styles.text}>Home</Text>
        </View>
        <NotificationIcon width={30} height={30} />
      </View>
      <HomeBanner />
      <View style={styles.headingContanier}>
        <Text style={styles.heading}>Parkinson's Support Group Events</Text>
        <TouchableText text="View all >>" alignSelf="flex-end" />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <EventHomeCard width={250} />
        <EventHomeCard width={250} />
        <EventHomeCard width={250} />
        <EventHomeCard width={250} />
      </ScrollView>
      <View style={styles.headingContanier}>
        <Text style={styles.heading}>New On Parkinson's</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <EventHomeCard width={170} />
        <EventHomeCard width={170} />
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
