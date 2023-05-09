import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Block, AuthTextInput, AuthButton, TouchableText} from '../components';
import Heading from '../components/Heading';
import {Text, Checkbox} from 'react-native-paper';
import {fonts} from '../constant';
import {Logo, TopDesign} from '../../assets/svg';
interface props {}
const SignUp: React.FunctionComponent<props> = () => {
  return (
    <Block>
      <TopDesign />
      <View style={styles.logo}>
        <Logo width={140} height={130} />
      </View>
      <Heading heading="Welcome" />
      <AuthTextInput placeholder="Name" />
      <AuthTextInput placeholder="Your Email" />
      <AuthTextInput placeholder="Password" />
      <View style={styles.bottomTextContanier}>
        <Text style={styles.bottomText}>I agree to the</Text>
        <TouchableText text="JFK Parkinson's" alignSelf="center" />
      </View>
      <View style={styles.bottomTextContanier}>
        <TouchableText text="Terms of Service" alignSelf="center" />
        <Text style={styles.bottomText}>And</Text>

        <TouchableText text="Privacy Policy" alignSelf="center" />
      </View>
      <AuthButton heading="Sign In" />
      <View style={styles.bottomTextContanier}>
        <Text style={styles.bottomText}>Do not have an account?</Text>
        <TouchableText text="Sign in" alignSelf="center" />
      </View>
    </Block>
  );
};

export default SignUp;

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
