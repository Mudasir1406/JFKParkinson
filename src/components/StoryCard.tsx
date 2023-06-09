import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {fonts, images} from '../constant';
import {TouchableRipple, useTheme} from 'react-native-paper';
const {width, height} = Dimensions.get('window');

type props = {
  onPress?: () => void;
};

const StoryCard: React.FunctionComponent<props> = ({onPress}) => {
  const theme = useTheme();
  return (
    <TouchableRipple onPress={onPress}>
      <ImageBackground source={images.gindolce} style={styles.contanier}>
        <View style={styles.layer} />
        <Text
          style={[styles.heading, {color: theme.colors.onError}]}
          numberOfLines={2}>
          A Story of My Life with Parkinson
        </Text>
        <View style={styles.profileContanier}>
          <Image source={images.image1} style={styles.profileImage} />
          <View>
            <Text style={[styles.user, {color: theme.colors.onSecondary}]}>
              John Doe
            </Text>
            <Text style={[styles.date, {color: theme.colors.onSecondary}]}>
              Yeaterday 12:02 Pm
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableRipple>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  contanier: {
    margin: 12,
    padding: 12,
    height: height / 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heading: {
    ...fonts.homeHeading,
  },
  date: {
    ...fonts.TouchableText,
    marginLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  user: {
    ...fonts.cardHeading,
    marginLeft: 10,
  },
  profileContanier: {
    flexDirection: 'row',
    marginTop: 20,
  },
  layer: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    opacity: 0.3,
    alignSelf: 'center',
    height: height / 4,
    width: width,
  },
});
