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
import React from 'react';
import {useTheme} from 'react-native-paper';
import {colors, fonts, images} from '../constant';
import {Design, DrawerIcon, NotificationIcon} from '../../assets/svg';
import {useDrawerContext} from '../context/DrawerContex';
import {AuthButton, Block, ProfileTextInput} from '../components';
const {width, height} = Dimensions.get('window');
const Stories = () => {
  const theme = useTheme();
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
              onPress={() => setIsOpen(true)}>
              <DrawerIcon width={30} height={30} />
            </TouchableOpacity>
            <Text style={styles.text}>Make Your Story</Text>
          </Pressable>
          <NotificationIcon
            width={30}
            height={30}
            fill={theme.colors.onSecondary}
          />
        </View>
      </View>
      <Block alignItems="center" viewStyle={{top: 20}}>
        <View
          style={[styles.image, {borderColor: theme.colors.outlineVariant}]}>
          <AuthButton heading="Upload Image" />
        </View>
        <ProfileTextInput placeholder="Enter Title" />
        <TextInput
          style={[styles.description, {borderColor: theme.colors.outline}]}
          multiline={true}
          placeholder="Write Your Story..."
        />
      </Block>
    </>
  );
};

export default Stories;

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
    marginBottom: 50,
    marginHorizontal: '5%',
  },
});
