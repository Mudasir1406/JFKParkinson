import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListRenderItem,
  Animated,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
import {Block, DatePicker, MeetingCard} from '../components';
import {MeetingDesign} from '../../assets/svg';
import {useTheme} from 'react-native-paper';
const {height} = Dimensions.get('window');
import {meetingData, days} from '../utils/data';

const Events = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  return (
    <>
      <View>
        <MeetingDesign width="100%" height={height * 0.42} />
        <DatePicker />
      </View>
      <Block withoutScroll={true}>
        <Animated.FlatList
          data={meetingData}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            padding: 20,
          }}
          renderItem={({item, index}) => {
            const inputRange = [-1, 0, 190 * index, 190 * (index + 2)];
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
            const opacity = scrollY.interpolate({
              inputRange: [-1, 0, 190 * index, 190 * (index + 0.5)],
              outputRange: [1, 1, 0.9, 0],
            });
            return (
              <Animated.View style={{transform: [{scale}], opacity}}>
                <MeetingCard
                  date={item.date}
                  time={item.time}
                  title={item.title}
                />
              </Animated.View>
            );
          }}></Animated.FlatList>
      </Block>
    </>
  );
};

export default Events;

const styles = StyleSheet.create({});
