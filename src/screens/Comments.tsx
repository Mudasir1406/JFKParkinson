import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Block, Header, PostCard} from '../components';

const Comments: React.FunctionComponent = () => {
  return (
    <Block>
      <Header title="Comments" />
      <PostCard />
    </Block>
  );
};

export default Comments;

const styles = StyleSheet.create({});
