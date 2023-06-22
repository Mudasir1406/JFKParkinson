import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../constant';
import {Back, Design} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import {Block} from '../components';
const {width, height} = Dimensions.get('window');

const Artical = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <>
      <View style={{marginBottom: 90}}>
        <View
          style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}
        />
        <View style={styles.design}>
          <Design />
        </View>
        <View style={styles.header}>
          <View style={styles.inner}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Back width={30} height={30} fill={theme.colors.onSecondary} />
            </TouchableOpacity>
            <Text style={styles.text}>Artical</Text>
          </View>
        </View>
      </View>
      <Block contentContainerStyle={styles.block}>
        <Image source={images.gindolce} style={styles.image} />
        <View style={styles.innerContanier}>
          <Text
            style={[styles.heading, {color: theme.colors.scrim}]}
            numberOfLines={3}>
            B-12 and Parkinson’s symptoms
          </Text>
          <Text
            style={
              styles.content
            }>{`Vitamin B-12 may be of particular importance to those with Parkinson’s disease, a progressive nervous system disorder that affects movement.

Low vitamin B-12 levels may worsen some symptoms of the disease, especially postural instability and cognitive impairment, which can lead to falls and injuries. In addition, Mayo Clinic researchers have found that lower vitamin B-12 levels at Parkinson’s disease diagnosis is associated with a greater risk of dementia in the future.

A 2019 Mayo Clinic-led study proposed that supplementing vitamin B-12 could be helpful to potentially improve motor and cognitive function. Mayo Clinic experts say that vitamin B-12 levels should be checked in people with Parkinson’s disease and supplemented if low.`}</Text>
        </View>
      </Block>
    </>
  );
};

export default Artical;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: '10%',
    marginHorizontal: '5%',
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

  contanier: {
    width: 300,
    height: 300,
    borderRadius: 500,
    transform: [{scaleX: 1.5}],
    overflow: 'hidden',
    position: 'absolute',
    top: '-100%',
    left: 45,
  },
  design: {
    transform: [{scaleY: -1}, {rotate: '200 deg'}],
    position: 'absolute',
    top: -170,
    left: -190,
  },
  image: {
    height: height / 3.5,
    borderRadius: 20,
    width: width * 0.95,
  },
  block: {
    alignItems: 'center',
  },
  heading: {
    ...fonts.eventDetailsHeading,
    marginHorizontal: 10,
    maxWidth: width * 0.9,
  },
  innerContanier: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  content: {
    ...fonts.TouchableText,
    margin: 10,
  },
});
