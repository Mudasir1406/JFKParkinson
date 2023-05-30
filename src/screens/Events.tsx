import {StyleSheet, View, Dimensions, Animated} from 'react-native';
import React, {useRef} from 'react';
import {
  BackButton,
  Block,
  DatePicker,
  MeetingCard,
  Search,
} from '../components';
import {Design, MeetingDesign} from '../../assets/svg';
import {useTheme} from 'react-native-paper';
const {height, width} = Dimensions.get('window');
import {meetingData, days} from '../utils/data';
import {useNavigation} from '@react-navigation/native';

const Events = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.tertiaryContainer,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View style={styles.design}>
          <Design />
        </View>
        <View style={styles.search}>
          <Search placeholder="Search here..." />
        </View>
        <View style={styles.back}>
          <BackButton pageName="Meetings" />
        </View>
        <DatePicker />
      </View>
      <Block withoutScroll={true}>
        <Animated.FlatList
          showsVerticalScrollIndicator={false}
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
                  onPress={() => navigation.navigate('EventDetails')}
                />
              </Animated.View>
            );
          }}></Animated.FlatList>
      </Block>
    </>
  );
};

export default Events;

const styles = StyleSheet.create({
  search: {
    position: 'absolute',
    right: 20,
    width: '45%',
  },
  back: {
    position: 'absolute',
    left: 20,
    width: '45%',
  },
  design: {
    position: 'absolute',
    top: -height * 0.3,
    left: -width * 0.1,
  },
});
