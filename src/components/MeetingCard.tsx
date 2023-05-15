import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {Image} from 'react-native';
import {images} from '../constant';
import Animated, {
  BounceInRight,
  Easing,
  FadeOutLeft,
} from 'react-native-reanimated';
import TouchableText from './TouchableText';

type props = {
  date: string;
  title: string;
  time: string;
};

const MeetingCard: React.FunctionComponent<props> = ({date, time, title}) => {
  const theme = useTheme();
  return (
    <Animated.View
      style={[styles.contanier, {borderColor: theme.colors.outline}]}
      entering={BounceInRight.duration(1000)}
      exiting={FadeOutLeft.duration(1000).easing(Easing.linear)}>
      <Image source={images.healing} style={styles.image}></Image>
      <View>
        <Text>{date}</Text>
        <Text>{time}</Text>
        <Text>{title}</Text>
        <TouchableText text="Registar >>" alignSelf="flex-start" />
      </View>
    </Animated.View>
  );
};

export default MeetingCard;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
