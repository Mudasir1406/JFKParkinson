import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Design, DrawerIcon, NotificationIcon} from '../../assets/svg';
import {useTheme} from 'react-native-paper';
import {fonts, colors} from '../constant';
import {ProfileTextInput} from '../components';

const Profile: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <>
      <View style={{marginBottom: 60}}>
        <View
          style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}
        />
        <View style={styles.design}>
          <Design />
        </View>
        <View style={styles.header}>
          <Pressable style={styles.inner} onPress={() => console.log('sada')}>
            <DrawerIcon width={30} height={30} />
            <Text style={styles.text}>Profile</Text>
          </Pressable>
          <NotificationIcon
            width={30}
            height={30}
            fill={theme.colors.onSecondary}
          />
        </View>
      </View>
      <ProfileTextInput name="User" heading="Name" />
      <ProfileTextInput name="Email" heading="Email" />
      <ProfileTextInput name="Email" heading="Number" />
      <ProfileTextInput name="Email" heading="Disease" />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: '10%',
    marginHorizontal: '6%',
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
