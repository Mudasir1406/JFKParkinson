import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {Back, DrawerIcon, NotificationIcon} from '../../assets/svg';
import {colors, fonts} from '../constant';
import {useDrawerContext} from '../context/DrawerContex';
type Props = {
  title: string;
};
const Header: React.FunctionComponent<Props> = ({title}) => {
  const theme = useTheme();
  const {setIsOpen} = useDrawerContext();
  return (
    <View style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}>
      <View style={styles.inner}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setIsOpen(true)}>
          <DrawerIcon fill={theme.colors.scrim} />
        </TouchableOpacity>
        <Text style={[styles.text, {color: theme.colors.primary}]}>
          {title}
        </Text>
      </View>
      <NotificationIcon fill={theme.colors.onSecondary} />
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
    overflow: 'hidden',
  },
  text: {
    ...fonts.headerHeading,
    marginLeft: 10,
  },
  inner: {flexDirection: 'row', alignItems: 'center'},
});
