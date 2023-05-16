import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Block, MeetingCard} from '../components';

const Events = () => {
  return (
    <Block>
      <MeetingCard
        date="Monday,May 12,2023"
        time="3:00pm - 4:00pm"
        title="Rock Steady Boxing at JFK"
      />
      <MeetingCard
        date="Monday,May 12,2023"
        time="3:00pm - 4:00pm"
        title="Rock Steady Boxing at JFK"
      />
      <MeetingCard
        date="Monday,May 12,2023"
        time="3:00pm - 4:00pm"
        title="Rock Steady Boxing at JFK"
      />
      <MeetingCard
        date="Monday,May 12,2023"
        time="3:00pm - 4:00pm"
        title="Rock Steady Boxing at JFK"
      />
    </Block>
  );
};

export default Events;

const styles = StyleSheet.create({});
