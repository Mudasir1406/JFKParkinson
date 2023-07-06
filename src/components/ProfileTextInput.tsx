import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../constant';
import * as icon from '../../assets/svg';
import {useTheme} from 'react-native-paper';

type Props = {
  name?: string;
  heading?: string;
  placeholder?: string;
};

const ProfileTextInput: React.FunctionComponent<Props> = ({
  name,
  heading,
  placeholder,
}) => {
  const theme = useTheme();
  const Icon = icon[name];
  return (
    <View style={styles.contanier}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.inner}>
        <TextInput
          style={[styles.input, {color: theme.colors.scrim}]}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.outlineVariant}
          selectionColor={theme.colors.primary}
        />
        {name && <Icon width={22} height={22} />}
      </View>
      <View style={[styles.line, {backgroundColor: theme.colors.outline}]} />
    </View>
  );
};

export default ProfileTextInput;

const styles = StyleSheet.create({
  contanier: {
    padding: 4,
    marginTop: 10,
    maxWidth: '100%',
    alignSelf: 'center',
  },
  line: {
    height: 1.5,
  },
  input: {
    width: '90%',
    ...fonts.placeholderText,
    height: 50,
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
