import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {colors, fonts, images} from '../constant';
import {Back, Design, NotificationIcon} from '../../assets/svg';
import {useDrawerContext} from '../context/DrawerContex';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Story: React.FunctionComponent = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {setIsOpen} = useDrawerContext();

  return (
    <ImageBackground source={images.gindolce} style={styles.image}>
      <View
        style={{
          position: 'absolute',
          height: height,
          width: width,
          backgroundColor: 'black',
          opacity: 0.2,
        }}
      />
      <TouchableOpacity
        style={styles.back}
        activeOpacity={0.8}
        onPress={() => navigation?.goBack()}>
        <Back fill={theme.colors.onSecondary} width={30} height={30} />
        <Text style={[styles.headerText, {color: theme.colors.onSecondary}]}>
          Stories
        </Text>
      </TouchableOpacity>
      <Text style={[styles.heading, {color: theme.colors.onSecondary}]}>
        A Story of My Life with Parkinson
      </Text>

      <ScrollView contentContainerStyle={styles.textContanier}>
        <View style={styles.profileContanier}>
          <Image source={images.image1} style={styles.profileImage} />
          <View>
            <Text style={[styles.user, {color: theme.colors.scrim}]}>
              John Doe
            </Text>
            <Text style={[styles.date, {color: theme.colors.scrim}]}>
              Yeaterday 12:02 Pm
            </Text>
          </View>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
          scelerisque magna. Duis interdum ipsum sodales viverra cursus. Fusce
          dictum quam ut nisl laoreet, a mattis diam elementum. Cras eu diam ac
          tortor dignissim semper sed et enim. Donec pulvinar tincidunt leo a
          ultricies. Phasellus tincidunt sollicitudin nunc. Morbi sit amet orci
          mi. Vivamus ligula ipsum, ultrices sed sollicitudin ut, posuere et
          quam. Pellentesque interdum in sem eu scelerisque. Vestibulum sagittis
          quam non dui porttitor accumsan. Phasellus semper eleifend interdum.
          Praesent vitae sodales sapien. Aliquam sed imperdiet lectus. Phasellus
          congue tellus id urna pellentesque varius. Sed volutpat massa felis,
          quis suscipit velit gravida vel. Donec ipsum augue, porta ac turpis
          sit amet, viverra dignissim purus. Phasellus nisl eros, maximus nec
          diam vel, pulvinar accumsan nisi. Duis eget nisl urna. Etiam fermentum
          justo id elementum placerat. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nulla elit lorem,
          pretium non egestas eget, ornare id quam. Phasellus consequat
          malesuada tellus sit amet molestie. Sed tincidunt eget urna a dapibus.
          Cras molestie non eros at sagittis.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Story;

const styles = StyleSheet.create({
  image: {
    height: height,
    width: width,
  },
  textContanier: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    paddingBottom: height / 5,
    minHeight: height / 2,
    marginTop: 20,
    elevation: 5,
  },
  back: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    ...fonts.headerHeading,
    marginLeft: 10,
  },
  heading: {
    ...fonts.AuthHeading,
    marginTop: height / 5,
    marginHorizontal: 10,
  },
  date: {
    ...fonts.smallText,
    marginLeft: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  user: {
    ...fonts.cardHeading,
    marginLeft: 10,
  },
  profileContanier: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    ...fonts.TouchableText,
    marginTop: 20,
  },
});
