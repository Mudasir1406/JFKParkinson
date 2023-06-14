import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, PostCard} from '../components';
import {useNavigation} from '@react-navigation/native';

const Posts = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header title="Posts" />
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <PostCard onPress={() => navigation.navigate('Comments')} />
        <PostCard />
        <PostCard />
      </ScrollView>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
