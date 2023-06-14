import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {fonts, images} from '../constant';
import {Surface, useTheme} from 'react-native-paper';
import {Comment, Heart, Share} from '../../assets/svg';

type props = {
  onPress?: () => void;
};
const {width, height} = Dimensions.get('window');
const PostCard: React.FunctionComponent<props> = ({onPress}) => {
  const theme = useTheme();
  return (
    <Surface
      style={[styles.container, {backgroundColor: theme.colors.onSecondary}]}
      elevation={2}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
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
          <Heart width={20} height={20} />
          <Text style={styles.timeText}>1341</Text>
          <Comment width={20} height={20} />
          <Text style={styles.timeText}>50</Text>
          <Share width={20} height={20} />
        </View>
      </TouchableOpacity>
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
    alignItems: 'center',
  },
  nameText: {
    ...fonts.postName,
    marginHorizontal: 15,
  },
  timeText: {
    ...fonts.TouchableText,
    marginLeft: 4,
    marginRight: 20,
    marginVertical: 8,
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
