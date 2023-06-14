import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../constant';
import {useTheme} from 'react-native-paper';
const {width} = Dimensions.get('window');
type props = {};
const NotificationCard: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.contanier}>
        <Image source={images.image1} style={styles.profileImage} />
        <View>
          <Text style={[styles.notificationText, {color: theme.colors.scrim}]}>
            Notification
          </Text>
          <Text style={styles.content} numberOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
            amet molestie justo. Praesent bibendum, arcu nec consequat
            hendrerit, purus arcu fermentum dui, quis molestie tortor nulla eu
            arcu
          </Text>
          <Text style={styles.time}>8 mins ago</Text>
        </View>
      </View>
      <View style={[styles.line, {backgroundColor: theme.colors.outline}]} />
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  contanier: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  content: {
    ...fonts.TouchableText,
    maxWidth: width * 0.8,
  },
  notificationText: {
    ...fonts.cardHeading,
    maxWidth: width * 0.8,
  },
  time: {
    ...fonts.smallText,
  },
  line: {
    height: 1,
    width: 0.9 * width,
    alignSelf: 'center',
  },
});
