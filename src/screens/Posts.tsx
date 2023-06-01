import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, PostCard} from '../components';

const Posts = () => {
  return (
    <View>
      <Header title="Posts" />
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <PostCard />
        <PostCard />
        <PostCard />
      </ScrollView>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
