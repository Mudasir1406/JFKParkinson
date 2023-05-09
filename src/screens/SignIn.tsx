import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Block, AuthTextInput, AuthButton, TouchableText} from '../components';
import Heading from '../components/Heading';
import {Text} from 'react-native-paper';
import {fonts} from '../constant';
import {Logo, TopDesign} from '../../assets/svg';
interface props {}
const SignIn: React.FunctionComponent<props> = () => {
  return (
    <Block>
      <TopDesign />
      <View style={styles.logo}>
        <Logo width={140} height={130} />
      </View>
      <Heading heading="Welcome" />
      <AuthTextInput placeholder="Your Email" />
      <AuthTextInput placeholder="Password" />
      <TouchableText text="Forgot Your Password?" alignSelf="center" />
      <AuthButton heading="Sign In" />
      <View style={styles.bottomTextContanier}>
        <Text style={styles.bottomText}>Do not have an account?</Text>
        <TouchableText text="Sign up" alignSelf="center" />
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
});
