import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Back, Design, DrawerIcon, NotificationIcon} from '../../assets/svg';
import {useTheme} from 'react-native-paper';
import {fonts, colors} from '../constant';
import {Block, DietPlan, ProfilePicture, ProfileTextInput} from '../components';
import {useNavigation} from '@react-navigation/native';

const Profile: React.FunctionComponent = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Block>
      <View style={{marginBottom: 60}}>
        <View
          style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}
        />
        <View style={styles.design}>
          <Design />
        </View>
        <View style={styles.header}>
          <Pressable style={styles.inner} onPress={() => navigation.goBack()}>
            <Back width={30} height={30} fill={theme.colors.onSecondary} />
            <Text style={styles.text}>Profile</Text>
          </Pressable>
          <NotificationIcon
            width={30}
            height={30}
            fill={theme.colors.onSecondary}
          />
        </View>
      </View>
      <View style={styles.profileImage}>
        <ProfilePicture />
      </View>
      <ProfileTextInput name="User" heading="Name" />
      <ProfileTextInput name="Email" heading="Email" />
      <ProfileTextInput name="Email" heading="Number" />
      <ProfileTextInput name="Email" heading="Disease" />
      <Text style={[styles.heading, {color: theme.colors.tertiary}]}>
        Today's Diet Plan
      </Text>
      <DietPlan breakFast="aaa" lunch="" dinner="" />
      <Text style={[styles.heading, {color: theme.colors.tertiary}]}>
        Today's Steps
      </Text>
    </Block>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: '10%',
    marginHorizontal: '4%',
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
  profileImage: {
    alignSelf: 'center',
    marginTop: -70,
  },
  heading: {
    ...fonts.postName,
    color: colors.black,
    marginHorizontal: '6%',
    marginVertical: 10,
  },
});
