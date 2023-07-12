import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Block, CommentsCard, Header, PostCard} from '../components';
import {fonts} from '../constant';
import {useTheme} from 'react-native-paper';

const Comments: React.FunctionComponent = () => {
  const theme = useTheme();
  return (
    <Block>
      <Header title="Comments" backButton={true} />
      <PostCard />
      <Text style={styles.share}>250 shares</Text>
      <Text style={[styles.text, {color: theme.colors.scrim}]}>Comments</Text>
      <CommentsCard />
    </Block>
  );
};

export default Comments;

const styles = StyleSheet.create({
  text: {
    ...fonts.AuthHeading,
    marginHorizontal: 10,
    opacity: 0.9,
  },
  share: {
    ...fonts.placeholderText,
    marginHorizontal: 10,
  },
});
