import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {fonts, images} from '../constant';
import {Surface, useTheme} from 'react-native-paper';

type props = {};
const {width, height} = Dimensions.get('window');
const PostCard: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  return (
    <Surface
      style={[styles.container, {backgroundColor: theme.colors.onSecondary}]}
      elevation={2}>
      <Animated.View>
        <View style={styles.headerContanier}>
          <Image source={images.image1} style={styles.profileImage} />
          <View>
            <Text style={[styles.nameText, {color: theme.colors.scrim}]}>
              Person Name
            </Text>
            <Text
              style={[styles.timeText, {color: theme.colors.outlineVariant}]}>
              08:06 am
            </Text>
          </View>
        </View>
        <Text style={[styles.postText, {color: theme.colors.outlineVariant}]}>
          Hi I'm sindy
        </Text>
        <Image source={images.image2} style={styles.postImage}></Image>
        <View
          style={[
            styles.HorizontalLine,
            {backgroundColor: theme.colors.outlineVariant},
          ]}
        />
        <View style={styles.footerContanier}>
          <Text style={styles.timeText}>1341</Text>
          <Text style={styles.timeText}>50</Text>
        </View>
      </Animated.View>
    </Surface>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  postImage: {
    width: width * 0.85,
    height: height / 3,
    borderRadius: 15,
    marginVertical: 10,
  },
  footerContanier: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  nameText: {
    ...fonts.postName,
    marginHorizontal: 15,
  },
  timeText: {
    ...fonts.TouchableText,
    marginLeft: 15,
  },
  postText: {
    ...fonts.TouchableText,
    marginTop: 15,
    marginHorizontal: 5,
  },
  HorizontalLine: {
    height: StyleSheet.hairlineWidth,
    width: width * 0.85,
    marginVertical: 8,
  },
});
