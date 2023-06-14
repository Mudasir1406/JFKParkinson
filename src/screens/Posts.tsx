import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, PostCard} from '../components';
import {useNavigation} from '@react-navigation/native';
import {PostNavigationType} from '../Types/NavigationTypes.types';

const Posts = () => {
  const navigation = useNavigation<PostNavigationType['navigation']>();
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
