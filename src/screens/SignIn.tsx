import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Block, AuthTextInput, AuthButton, TouchableText} from '../components';
import Heading from '../components/Heading';
import {Text, useTheme} from 'react-native-paper';
import {fonts} from '../constant';
import {Logo, TopDesign} from '../../assets/svg';
interface props {
  navigation: any;
}
const SignIn: React.FunctionComponent<props> = ({navigation}) => {
  const theme = useTheme();
  return (
    <Block>
      <TopDesign />
      <Text style={[styles.screenHeading, {color: theme.colors.onSecondary}]}>
        Sign In
      </Text>
      <View style={styles.logo}>
        <Logo width={140} height={130} />
      </View>
      <Heading heading="Welcome" />
      <AuthTextInput placeholder="Your Email" />
      <AuthTextInput placeholder="Password" />
      <TouchableText
        text="Forgot Your Password?"
        alignSelf="center"
        onPress={() => navigation.navigate('ForgetPassword')}
      />
      <AuthButton heading="Sign In" />
      <View style={styles.bottomTextContanier}>
        <Text style={styles.bottomText}>Do not have an account?</Text>
        <TouchableText
          text="Sign up"
          alignSelf="center"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </Block>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  bottomTextContanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    ...fonts.TouchableText,
  },
  logo: {
    alignItems: 'center',
    marginHorizontal: 20,
    top: -30,
  },
  screenHeading: {
    ...fonts.screenHeading,
    position: 'absolute',
    left: '37%',
    top: '4%',
  },
});
