import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {fonts} from '../constant';

type props = {
  heading: string;
};

const Heading: React.FunctionComponent<props> = ({heading}) => {
  const theme = useTheme();

  return (
    <Text style={[styles.text, {color: theme.colors.secondary}]}>
      {heading}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: {
    elevation: 7,
    ...fonts.AuthHeading,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
