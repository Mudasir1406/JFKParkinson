import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Modal,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
  Dimensions,
  Easing,
} from 'react-native';
import {useDrawerContext} from '../context/DrawerContex';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../../assets/svg';
import {fonts} from '../constant';
import {AuthButton, Block} from '../components';
import {HomeNavigationType} from '../Types/NavigationTypes.types';
const {width, height} = Dimensions.get('window');
interface DrawerModalProps {}

const DrawerNavigator: React.FC<DrawerModalProps> = () => {
  const navigation = useNavigation<HomeNavigationType['navigation']>();
  const [animation] = useState(new Animated.Value(0));
  const {isOpen, setIsOpen} = useDrawerContext();
  const handleModalOpen = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const handleModalClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => setIsOpen(false));
  };

  useEffect(() => {
    if (isOpen) {
      handleModalOpen();
    } else {
      handleModalClose();
    }
  }, [isOpen]);

  const overlayOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const drawerTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 0.7, 0],
  });

  return (
    <Modal visible={isOpen} transparent>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={handleModalClose}
      />
      <Animated.View
        style={[styles.drawer, {transform: [{translateX: drawerTranslateX}]}]}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Logo />
        </View>
        <Block>
          <Text
            style={styles.text}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate('Profile');
            }}>
            Profile
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate('Profile');
            }}>
            Latest PD News
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate('Articles');
            }}>
            Articles
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate('SupportsGroup');
            }}>
            Support Groups
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate('Profile');
            }}>
            People In The News
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate('ZoomRecordings');
            }}>
            Zoom Recordings
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate('TermsAndConditions');
            }}>
            Terms And Conditions
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate('PrivacyPolicy');
            }}>
            Privacy Policy
          </Text>
        </Block>
        <AuthButton heading="Logout" />
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width * 0.65,
    backgroundColor: 'white',
    height: height * 0.75,
    padding: 30,
    marginTop: height * 0.1,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  drawerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  draweContanier: {
    alignItems: 'center',
  },
  text: {
    ...fonts.deawerItem,
    lineHeight: 40,
  },
});

export default DrawerNavigator;
