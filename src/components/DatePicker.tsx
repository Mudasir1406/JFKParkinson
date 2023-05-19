import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {fonts} from '../constant';
import {days} from '../utils/data';

type props = {};
const {height} = Dimensions.get('window');

const DatePicker: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  return (
    <>
      <Text style={[styles.textDate, {color: theme.colors.scrim}]}>Date</Text>
      <Text style={[styles.date, {color: theme.colors.scrim}]}>May 2023</Text>
      <View
        style={[
          styles.horizontalLine,
          {borderBottomColor: theme.colors.onTertiary},
        ]}
      />
      <View style={styles.days}>
        {days.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.day}>{item}</Text>
              <Text
                style={[
                  styles.number,
                  {
                    backgroundColor:
                      index === 3
                        ? theme.colors.primary
                        : theme.colors.onSecondary,
                    elevation: 2,
                  },
                ]}>
                {index + 1}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  textDate: {
    ...fonts.headerHeading,
    position: 'absolute',
    top: height * 0.23,
    left: 20,
  },
  date: {
    ...fonts.cardHeading,
    position: 'absolute',
    top: height * 0.24,
    right: 20,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    width: '90%',
    position: 'absolute',
    left: '5%',
    top: height * 0.28,
  },
  day: {
    ...fonts.screenHeading,
    textAlign: 'center',
  },
  days: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: height * 0.02,
    marginLeft: 15,
  },

  number: {
    ...fonts.screenHeading,
    textAlign: 'center',
    borderRadius: 30,
    width: 50,
    height: 50,
    marginRight: 5,
    textAlignVertical: 'center',
  },
});
