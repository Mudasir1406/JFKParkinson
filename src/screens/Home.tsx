import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {DrawerIcon, HomeDesign, NotificationIcon} from '../../assets/svg';
import {HomeBanner} from '../components';
import {colors, fonts} from '../constant';

const Home = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View>
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
      <Text>Parkinson's Support Group Events</Text>
    </View>
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
});
