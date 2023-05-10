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
import {Logo, TopDesign} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from '../Types/NavigationTypes.types';
interface props {
  navigation: any;
}
const SignIn: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
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
      <AuthTextInput placeholder="Your Email" name="Email" />
      <AuthTextInput placeholder="Password" name="Eye" />
      <TouchableText
        text="Forgot Your Password?"
        alignSelf="center"
        onPress={() => navigation.navigate('ForgetPassword')}
      />
      <AuthButton
        heading="Sign In"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={styles.bottomTextContanier}>
        <Text style={styles.bottomText}>Do not have an account?</Text>
        <TouchableText
          text="Sign up"
          alignSelf="center"
          onPress={() => navigation.navigate('SignUp')}
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
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
