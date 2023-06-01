import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {images} from '../constant';

const Stories = () => {
  const theme = useTheme();
  return (
    <View style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}>
      <ImageBackground source={images.gindolce} style={{flex: 1}}>
        <View
          style={{
            backgroundColor: theme.colors.tertiary,
            flex: 1,
            opacity: 0.9,
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  contanier: {
    width: 300,
    height: 300,
    borderRadius: 500,
    transform: [{scaleX: 1.5}],
    overflow: 'hidden',
    position: 'absolute',
    top: -80,
    left: 45,
  },
});
