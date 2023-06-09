import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {colors, fonts} from '../constant';
import {Back, Design, NotificationIcon} from '../../assets/svg';
import {useDrawerContext} from '../context/DrawerContex';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Story = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {setIsOpen} = useDrawerContext();

  return (
    <>
      <View style={{marginBottom: 80}}>
        <View
          style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}
        />
        <View style={styles.design}>
          <Design />
        </View>
        <View style={styles.header}>
          <Pressable style={styles.inner} onPress={() => console.log('sada')}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Back width={30} height={30} fill={theme.colors.onSecondary} />
            </TouchableOpacity>
            <Text style={styles.text}>Stories</Text>
          </Pressable>
          <NotificationIcon
            width={30}
            height={30}
            fill={theme.colors.onSecondary}
          />
        </View>
      </View>
    </>
  );
};

export default Story;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: '10%',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...fonts.headerHeading,
    marginLeft: 10,
    color: colors.white,
  },

  contanier: {
    width: 300,
    height: 300,
    borderRadius: 500,
    transform: [{scaleX: 1.5}],
    overflow: 'hidden',
    position: 'absolute',
    top: '-100%',
    left: 45,
  },
  design: {
    transform: [{scaleY: -1}, {rotate: '200 deg'}],
    position: 'absolute',
    top: -170,
    left: -190,
  },
});
