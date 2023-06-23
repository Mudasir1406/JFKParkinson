import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../constant';
import AuthButton from './AuthButton';
import {Button, useTheme} from 'react-native-paper';

type Props = {};
const {width, height} = Dimensions.get('window');
const PeopleInTheNewsCards: React.FunctionComponent<Props> = () => {
  const theme = useTheme();
  return (
    <View style={styles.contanier}>
      <Image source={images.gindolce} style={styles.image} />
      <Text style={styles.heading}>DONNA M</Text>
      <Text style={styles.content}>
        Our Parkinson’s Community (particularly the ParkinSINGS choir) was
        featured on the radio. Our wonderful ParkinSINGS choir member, Donna,
        shared some insightful information and performed a taste of her solo for
        our performance this Wednesday. To listen in click the button below
      </Text>
      <Button
        mode="elevated"
        style={{width: 150, marginVertical: 10}}
        textColor={colors.white}
        buttonColor={theme.colors.tertiary}>
        Click here
      </Button>
    </View>
  );
};

export default PeopleInTheNewsCards;

const styles = StyleSheet.create({
  image: {
    height: height / 3.5,
    borderRadius: 20,
    width: width * 0.95,
    alignSelf: 'center',
    marginVertical: 10,
  },
  heading: {
    ...fonts.homeHeading,
    color: colors.black,
  },
  content: {
    ...fonts.TouchableText,
    color: colors.black,
  },
  contanier: {
    margin: 10,
  },
});
