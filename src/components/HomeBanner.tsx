import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import {scrollInterpolator, animatedStyles} from '../utils/animations';
import {colors, images} from '../constant';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 6);

const DATA: any = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

const HomeBanner: React.FunctionComponent = () => {
  const [state, setState] = useState(0);

  return (
    <View>
      <Carousel
        data={DATA}
        renderItem={() => {
          return (
            <View
              style={{
                height: ITEM_HEIGHT,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: colors.white,
                overflow: 'hidden',
              }}>
              <Image
                source={images.healing}
                resizeMode="stretch"
                style={{flex: 1, width: ITEM_WIDTH}}></Image>
            </View>
          );
        }}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={5000}
        sliderWidth={SLIDER_WIDTH}
        layout="stack"
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={index => setState(index)}
        scrollInterpolator={scrollInterpolator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeBanner;
