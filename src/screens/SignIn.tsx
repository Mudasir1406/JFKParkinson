import {Alert, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Block,
  AuthTextInput,
  AuthButton,
  TouchableText,
  ProviderLoginButton,
} from '../components';
import Heading from '../components/Heading';
import {Snackbar, Text, useTheme} from 'react-native-paper';
import {fonts} from '../constant';
import {Logo, TopDesign} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {SignInNavigationType} from '../Types/NavigationTypes.types';
import {signInProps} from '../Types/AuthTypes.types';
import {isValidEmail} from '../utils/Validator';
import {signIn} from '../services/Auth';
import {err} from 'react-native-svg/lib/typescript/xml';
import {useLoadingContext} from '../context/LoadingContext';
interface props {
  navigation: any;
}
const SignIn: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  const navigation = useNavigation<SignInNavigationType['navigation']>();
  const [visible, setVisible] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {loading, setLoading} = useLoadingContext();
  const [user, setUser] = useState<signInProps>({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
  });
  const handleOnChangeText = (name: string, value: string | boolean) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSignIn = () => {
    setLoading(true);
    signIn(user.email, user.password)
      .then(() => setVisible(true))
      .catch(err =>
        Alert.alert(
          err.code.slice(5, err.code.length),
          err.message.slice(22, err.message.length),
        ),
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (user.email !== '') {
      setIsError({
        ...isError,
        email: !isValidEmail(user.email),
      });
    }
    if (user.password !== '') {
      setIsError({
        ...isError,
        password: user.password.length <= 5 ? true : false,
      });
    }
  }, [user]);
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
      <AuthTextInput
        placeholder="Your Email"
        name="Email"
        onChangeText={e => handleOnChangeText('email', e)}
        errorText="Please enter a valid email"
        visible={isError.email}
      />
      <AuthTextInput
        placeholder="Password"
        onChangeText={e => handleOnChangeText('password', e)}
        errorText="Password must contain at least 6 characters"
        visible={isError.password}
        secureTextEntry={secureTextEntry}
        onPress={() => setSecureTextEntry(!secureTextEntry)}
        name={secureTextEntry ? 'EyeOpen' : 'Eye'}
      />
      <TouchableText
        text="Forgot Your Password?"
        alignSelf="center"
        onPress={() => navigation.navigate('ForgetPassword')}
      />
      <AuthButton
        heading="Sign In"
        onPress={handleSignIn}
        disabled={isError.email || isError.password}
        loading={loading}
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
