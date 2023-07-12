import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Back, Design, DrawerIcon, NotificationIcon} from '../../assets/svg';
import {Dialog, Portal, useTheme, Button} from 'react-native-paper';
import {fonts, colors} from '../constant';
import {Block, DietPlan, ProfilePicture, ProfileTextInput} from '../components';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {useUserContext} from '../context/UserContex';
import {uploadImage} from '../services/Storage';
import {updateProfilePicture} from '../services/Auth';
import {ProfileNavigationType} from '../Types/NavigationTypes.types';

const Profile: React.FunctionComponent<ProfileNavigationType> = ({
  navigation,
}) => {
  const theme = useTheme();
  const user = useUserContext();
  const [visible, setVisible] = useState<boolean>(false);
  const hideDialog = () => setVisible(false);
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,

      cropping: true,
      freeStyleCropEnabled: true,
      includeBase64: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        uploadImage(image.path, image.path).then(url => {
          console.log(url);
          user.user?.updateProfile({
            photoURL: url,
          });
          if (user?.user?.uid) updateProfilePicture(url, user?.user?.uid);
        });
      })
      .catch(error => console.log(error))
      .finally(() => setVisible(false));
  };
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
      cropperCircleOverlay: true,
    })
      .then(image =>
        user.user?.updateProfile({
          photoURL: image.path,
        }),
      )
      .catch(error => console.log(error))
      .finally(() => setVisible(false));
  };

  return (
    <>
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
            <Pressable onPress={() => navigation.navigate('Notifications')}>
              <NotificationIcon
                width={30}
                height={30}
                fill={theme.colors.onSecondary}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.profileImage}>
          <ProfilePicture
            onPress={() => setVisible(true)}
            source={user.user?.photoURL ? user.user?.photoURL : ''}
          />
        </View>
        <ProfileTextInput
          name="User"
          heading="Name"
          placeholder={user.user?.displayName ? user.user?.displayName : ''}
          onChangeText={() => {}}
          value=""
        />
        <ProfileTextInput
          name="Email"
          heading="Email"
          placeholder={user.user?.email ? user.user?.email : ''}
          onChangeText={() => {}}
          value=""
        />
        <ProfileTextInput
          name="Mobile"
          heading="Number"
          placeholder={
            user.user?.phoneNumber
              ? user.user?.phoneNumber
              : 'Add a phone number here'
          }
          onChangeText={() => {}}
          value=""
        />
        <ProfileTextInput
          name="Disease"
          heading="Disease"
          placeholder="Parkinsons"
          onChangeText={() => {}}
          value=""
        />
        <Text style={[styles.heading, {color: theme.colors.tertiary}]}>
          Today's Diet Plan
        </Text>
        <DietPlan breakFast="aaa" lunch="" dinner="" />
        <Text style={[styles.heading, {color: theme.colors.tertiary}]}>
          Today's Steps
        </Text>
      </Block>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Upload Image</Dialog.Title>
          <Dialog.Content>
            <Text>Upload an Image to added to your Story</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={openCamera}>Open Camera</Button>
            <Button onPress={openGallery}>Upload From Gallery</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
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
