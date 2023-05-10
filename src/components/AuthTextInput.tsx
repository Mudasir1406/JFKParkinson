import {StyleSheet, TextInput, Pressable} from 'react-native';
import React from 'react';
import {Surface, useTheme} from 'react-native-paper';
import {fonts} from '../constant';
import Animated, {Easing, FadeInDown} from 'react-native-reanimated';
import * as icon from '../../assets/svg';
interface Props {
  placeholder: string;
  name: string;
}
const AuthTextInput: React.FunctionComponent<Props> = ({placeholder, name}) => {
  const theme = useTheme();
  const Icon = icon[name];
  return (
    <Animated.View entering={FadeInDown.duration(1000).easing(Easing.linear)}>
      <Surface
        elevation={1}
        style={[styles.contanier, {backgroundColor: theme.colors.onSecondary}]}>
        <TextInput
          style={styles.input}
          secureTextEntry={name === 'Eye' ? true : false}
          placeholder={placeholder}
          selectionColor={theme.colors.tertiary}
          placeholderTextColor={theme.colors.onPrimary}
        />
        <Pressable>
          <Icon width={20} height={20} />
        </Pressable>
      </Surface>
    </Animated.View>
  );
};

export default AuthTextInput;

const styles = StyleSheet.create({
  contanier: {
    marginVertical: 20,
    marginHorizontal: 35,
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    ...fonts.AuthInput,
    height: 55,
    textAlignVertical: 'center',
    paddingHorizontal: 10,
    letterSpacing: 1.1,
  },
});
