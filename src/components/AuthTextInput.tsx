import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {Surface, useTheme} from 'react-native-paper';
import {fonts} from '../constant';
import Animated, {Easing, FadeInDown} from 'react-native-reanimated';
interface Props {
  placeholder: string;
}
const AuthTextInput: React.FunctionComponent<Props> = ({placeholder}) => {
  const theme = useTheme();
  return (
    <Animated.View entering={FadeInDown.duration(1000).easing(Easing.linear)}>
      <Surface
        elevation={1}
        style={[styles.contanier, {backgroundColor: theme.colors.onSecondary}]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          selectionColor={theme.colors.tertiary}
          placeholderTextColor={theme.colors.onPrimary}
        />
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
    paddingHorizontal: 10,
  },
  input: {
    ...fonts.AuthInput,
    height: 55,
    textAlignVertical: 'center',
    paddingHorizontal: 10,
    letterSpacing: 1.1,
  },
});
