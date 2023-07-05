import {StyleSheet, View, Dimensions, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  BackButton,
  Block,
  DatePicker,
  MeetingCard,
  Search,
} from '../components';
import {Design} from '../../assets/svg';
import {useTheme} from 'react-native-paper';
const {height, width} = Dimensions.get('window');
import {meetingData} from '../utils/data';
import {useNavigation} from '@react-navigation/native';
import {EventsNavigationType} from '../Types/NavigationTypes.types';

const Events = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const [date, setDate] = useState<Date>(new Date());
  const navigation = useNavigation<EventsNavigationType['navigation']>();
  const handleDate = (e: Date) => {
    setDate(e);
    console.log(e);
  };
  return (
    <>
      <View
        style={[
          styles.designContanier,

          {backgroundColor: theme.colors.tertiaryContainer},
        ]}>
        <View style={styles.design}>
          <Design width={width * 1.2} height={height * 0.5} />
        </View>
        <View style={styles.search}>
          <Search placeholder="Search here..." />
        </View>
        <View style={styles.back}>
          <BackButton pageName="Meetings" isDrawer={true} />
        </View>
        <DatePicker setDate={handleDate} date={date} />
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
            paddingHorizontal: 16,
            paddingBottom: 16,
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
          }}
        />
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
  designContanier: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});
