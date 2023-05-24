import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../constant';
import {Surface, TouchableRipple} from 'react-native-paper';
interface props {
  width?: number;
  time: string;
  heading: string;
  onPress?: () => void;
}

const EventHomeCard: React.FunctionComponent<props> = ({
  width,
  heading,
  time,
  onPress,
}) => {
  return (
    <TouchableRipple onPress={onPress} style={[styles.ripple, {width: width}]}>
      <Surface elevation={2} style={[styles.contanier, {width: width}]}>
        <ImageBackground
          source={images.gindolce}
          style={[styles.innerContanier, {width: width}]}>
          <View style={[styles.back, {width: width}]} />
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.text}>{time}</Text>
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
