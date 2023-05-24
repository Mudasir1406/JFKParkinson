import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../constant';
import {useTheme} from 'react-native-paper';
import {Back} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
type props = {
  pageName: string;
};

const BackButton: React.FunctionComponent<props> = ({pageName}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.constanier}
      onPress={() => {
        if (navigation.canGoBack()) navigation.goBack();
      }}>
      <Back width={30} height={30} fill={theme.colors.onSecondary} />
      <Text style={[styles.text, {color: theme.colors.onSecondary}]}>
        {pageName}
      </Text>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  text: {
    ...fonts.screenHeading,
    marginLeft: 20,
    marginTop: 5,
  },
  constanier: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
