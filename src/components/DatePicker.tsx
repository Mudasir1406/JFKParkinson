import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {fonts} from '../constant';
import {days} from '../utils/data';
import {TouchableOpacity} from 'react-native-gesture-handler';

type props = {};
const {height} = Dimensions.get('window');

const DatePicker: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  return (
    <View style={{marginTop: 150}}>
      <View style={styles.dateContanier}>
        <Text style={[styles.textDate, {color: theme.colors.scrim}]}>Date</Text>
        <Text style={[styles.date, {color: theme.colors.scrim}]}>May 2023</Text>
      </View>
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
              <Pressable onPress={() => console.log(index)}>
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
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  textDate: {
    ...fonts.headerHeading,
  },
  date: {
    ...fonts.cardHeading,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  day: {
    ...fonts.cardHeading,
    textAlign: 'center',
    width: 45,
    marginHorizontal: 4,
  },
  days: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },

  number: {
    ...fonts.screenHeading,
    textAlign: 'center',
    borderRadius: 30,
    width: 45,
    height: 45,
    marginHorizontal: 4,
    textAlignVertical: 'center',
  },
  dateContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
