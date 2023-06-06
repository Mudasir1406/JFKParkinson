import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../constant';
import * as icon from '../../assets/svg';
import {useTheme} from 'react-native-paper';

type Props = {
  name: string;
  heading: string;
};

const ProfileTextInput: React.FunctionComponent<Props> = ({name, heading}) => {
  const theme = useTheme();
  const Icon = icon[name];
  return (
    <View style={styles.contanier}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.inner}>
        <TextInput
          style={[styles.input, {color: theme.colors.outline}]}
          placeholder="Jhone"
        />
        <Icon width={22} height={22} />
      </View>
      <View style={[styles.line, {backgroundColor: theme.colors.outline}]} />
    </View>
  );
};

export default ProfileTextInput;

const styles = StyleSheet.create({
  contanier: {
    padding: 4,
    marginHorizontal: '8%',
    marginTop: 10,
  },
  line: {
    height: 1.5,
    width: '100%',
  },
  input: {
    width: '90%',
    ...fonts.placeholderText,
  },
  heading: {
    ...fonts.postName,
    color: colors.black,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
