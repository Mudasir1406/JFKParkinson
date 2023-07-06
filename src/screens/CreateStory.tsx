import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Dialog, Portal, useTheme} from 'react-native-paper';
import {colors, fonts} from '../constant';
import {Back, Design} from '../../assets/svg';
import {AuthButton, Block, ProfileTextInput} from '../components';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const CreateStories: React.FunctionComponent = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [visible, setVisible] = useState<boolean>(true);
  const hideDialog = () => setVisible(false);

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then(async image => {
        // setNewNote({
        //   ...newNote,
        //   path: image.path,
        // });
      })
      .catch(error => console.log(error));
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
      includeBase64: true,
    })
      .then(image => {
        // setNewNote({
        //   ...newNote,
        //   path: image.path,
        // });
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <View style={{marginBottom: 90}}>
        <View
          style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}
        />
        <View style={styles.design}>
          <Design />
        </View>
        <View style={styles.header}>
          <View style={styles.inner}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                if (navigation.canGoBack()) navigation.goBack();
              }}>
              <Back width={30} height={30} fill={theme.colors.onSecondary} />
            </TouchableOpacity>
            <Text style={styles.text}>Make Your Story</Text>
          </View>
          <Text style={styles.text}>Post</Text>
        </View>
      </View>
      <Block alignItems="center" viewStyle={{top: 20}}>
        <View
          style={[styles.image, {borderColor: theme.colors.outlineVariant}]}>
          <AuthButton
            heading="Upload Image"
            onPress={() => {
              setVisible(true);
            }}
          />
        </View>
        <ProfileTextInput placeholder="Enter Title of your story" />
        <View style={[styles.storyInput, {borderColor: theme.colors.outline}]}>
          <TextInput
            style={[styles.description, {borderColor: theme.colors.outline}]}
            multiline={true}
            placeholder="let them know about Your Story..."
          />
        </View>
      </Block>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Add Image</Dialog.Title>
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

export default CreateStories;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: '10%',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
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
  image: {
    height: height / 4,
    width: width * 0.8,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  description: {
    marginBottom: '70%',
    marginHorizontal: '5%',
  },
  storyInput: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 10,

    maxWidth: '95%',
    alignSelf: 'center',
    width: '95%',
  },
});
