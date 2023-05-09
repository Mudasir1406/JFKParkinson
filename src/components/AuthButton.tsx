import {StyleSheet} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {colors, fonts} from '../constant';
import {useTheme} from 'react-native-paper';
type props = {
  heading: string;
  loading?: boolean;
};

const AuthButton: React.FunctionComponent<props> = ({heading, loading}) => {
  const theme = useTheme();

  return (
    <Animated.View
      entering={FadeInDown.duration(1000)}
      style={styles.contanier}>
      <Button
        mode="elevated"
        loading={loading}
        disabled={loading}
        textColor={colors.white}
        buttonColor={theme.colors.tertiary}
        style={styles.button}>
        <Text style={[styles.text, {color: theme.colors.onSecondary}]}>
          {heading}
        </Text>
      </Button>
    </Animated.View>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  contanier: {
    marginVertical: 20,
    marginHorizontal: 35,
  },
  button: {
    ...fonts.AuthButton,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  text: {
    ...fonts.AuthButton,
  },
});
