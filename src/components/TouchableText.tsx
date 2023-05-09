import {FlexStyle, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useTheme} from 'react-native-paper';
import {fonts} from '../constant';
type props = {
  text: string;
  alignSelf: FlexStyle['alignSelf'];
};
const TouchableText: React.FunctionComponent<props> = ({text, alignSelf}) => {
  const theme = useTheme();
  return (
    <Animated.Text
      entering={FadeInDown.duration(1000)}
      style={[
        styles.text,
        {color: theme.colors.tertiary, alignSelf: alignSelf},
      ]}>
      {text}
    </Animated.Text>
  );
};

export default TouchableText;

const styles = StyleSheet.create({
  text: {
    ...fonts.TouchableText,

    margin: 10,
  },
});
