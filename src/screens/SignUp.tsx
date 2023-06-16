import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Block,
  AuthTextInput,
  AuthButton,
  TouchableText,
  ProviderLoginButton,
} from '../components';
import Heading from '../components/Heading';
import {Text, useTheme} from 'react-native-paper';
import {fonts} from '../constant';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Logo, TopDesign} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  RootStackParamsApp,
  SignUpNavigationType,
} from '../Types/NavigationTypes.types';
interface props {}
const SignUp: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  const navigation = useNavigation<SignUpNavigationType['navigation']>();
  return (
    <Block>
      <TopDesign />
      <Text style={[styles.screenHeading, {color: theme.colors.onSecondary}]}>
        Sign up
      </Text>
      <View style={styles.logo}>
        <Logo width={140} height={130} />
      </View>
      <Heading heading="Welcome" />
      <AuthTextInput placeholder="Name" name="User" />
      <AuthTextInput placeholder="Your Email" name="Email" />
      <AuthTextInput placeholder="Password" name="Eye" />
      <View style={styles.bottomTextContanier}>
        <BouncyCheckbox onPress={(isChecked: boolean) => {}} />
        <Text style={styles.bottomText}>I agree to the</Text>
        <TouchableText text="JFK Parkinson's" alignSelf="center" />
      </View>
      <View style={styles.bottomTextContanier}>
        <TouchableText
          text="Terms and Conditions"
          alignSelf="center"
          onPress={() => navigation.navigate('TermsAndConditions')}
        />
        <Text style={styles.bottomText}>And</Text>

        <TouchableText
          text="Privacy Policy"
          alignSelf="center"
          onPress={() => navigation.navigate('PrivacyPolicy')}
        />
      </View>
      <AuthButton heading="Sign Up" />
      <View style={styles.bottomTextContanier}>
        <Text style={styles.bottomText}>Do not have an account?</Text>
        <TouchableText
          text="Sign in"
          alignSelf="center"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
      <View style={styles.bottomButton}>
        <ProviderLoginButton
          name="Google"
          color={theme.colors.elevation.level2}
        />
        <ProviderLoginButton
          name="Facebook"
          color={theme.colors.elevation.level2}
        />
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
  screenHeading: {
    ...fonts.screenHeading,
    position: 'absolute',
    left: '37%',
    top: '4%',
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
