import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Animated, {Easing, FadeIn} from 'react-native-reanimated';
import {colors, fonts} from '../constant';
import {Surface, TouchableRipple} from 'react-native-paper';
interface props {
  width?: number;
}

const EventHomeCard: React.FunctionComponent<props> = ({width}) => {
  return (
    <TouchableRipple onPress={() => {}} style={[styles.ripple, {width: width}]}>
      <Surface elevation={2} style={[styles.contanier, {width: width}]}>
        <ImageBackground
          source={require('../../assets/Image1.jpg')}
          style={[styles.innerContanier, {width: width}]}>
          <View style={[styles.back, {width: width}]} />
          <Text style={styles.heading}>Moving Day New Jersey</Text>
          <Text style={styles.text}>
            Saturday,Octuber 2, 2023 from 8:30 am to Noon
          </Text>
        </ImageBackground>
      </Surface>
    </TouchableRipple>
  );
};

export default EventHomeCard;

const styles = StyleSheet.create({
  contanier: {
    overflow: 'hidden',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  innerContanier: {
    width: 250,
    height: 150,
    padding: 10,
  },
  heading: {
    ...fonts.cardHeading,
    color: colors.white,
    marginTop: 50,
  },
  text: {
    ...fonts.TouchableText,
    color: colors.white,
    maxWidth: 200,
  },
  back: {
    backgroundColor: 'black',
    height: 150,
    position: 'absolute',
    opacity: 0.4,
  },
  ripple: {
    marginLeft: 20,
    marginVertical: 10,
    borderRadius: 20,
  },
});
