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
const ForgetPassword: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Block>
      <TopDesign />
      <Text style={[styles.screenHeading, {color: theme.colors.onSecondary}]}>
        Forget Password
      </Text>
      <View style={styles.logo}>
        <Logo width={140} height={130} />
      </View>
      <TouchableText
        text="Please enter your email and you will recive a password reset link if your account exist"
        alignSelf="center"
        //onPress={() => navigation.navigate('ForgetPassword')}
      />
      <AuthTextInput placeholder="Your Email" name="Email" />

      <AuthButton heading="Send Email" />
      <View style={styles.bottomTextContanier}>
        <Text style={styles.bottomText}>Do not recive email?</Text>
        <TouchableText
          text="Resend"
          alignSelf="center"
          //onPress={() => navigation.navigate('ForgetPassword')}
        />
      </View>
    </Block>
  );
};

export default ForgetPassword;

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
    left: '20%',
    top: '4%',
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
