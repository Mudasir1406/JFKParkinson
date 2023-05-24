import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {Back, NotificationIcon} from '../../assets/svg';
import {colors, fonts} from '../constant';
import Search from './Search';
type Props = {
  title: string;
};
const Header: React.FunctionComponent<Props> = ({title}) => {
  const theme = useTheme();
  return (
    <View
      style={[styles.contanier, {backgroundColor: theme.colors.onSecondary}]}>
      <Text style={[styles.text, {color: theme.colors.primary}]}>{title}</Text>
      <NotificationIcon fill={theme.colors.secondary} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    marginBottom: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'space-between',
  },
  text: {
    ...fonts.headerHeading,
  },
});
