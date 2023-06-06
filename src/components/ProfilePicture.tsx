import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../constant';

const ProfilePicture: React.FunctionComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Image style={styles.profilePicture} source={images.gindolce} />
    </TouchableOpacity>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
