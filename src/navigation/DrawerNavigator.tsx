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
const {width, height} = Dimensions.get('window');
interface DrawerModalProps {}

const DrawerNavigator: React.FC<DrawerModalProps> = () => {
  const navigation = useNavigation();
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
        onPress={handleModalClose}>
        <Animated.View
          style={[
            styles.drawer,
            {transform: [{translateX: drawerTranslateX}]},
          ]}>
          <TouchableOpacity>
            <Text
              onPress={() => {
                setIsOpen(false);
                navigation.navigate('Profile');
              }}>
              Drawer
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
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
    width: width * 0.7,
    backgroundColor: 'white',
  },
  drawerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerNavigator;
