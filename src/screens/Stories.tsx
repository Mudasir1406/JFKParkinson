import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  Platform,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {AnimatedFAB, useTheme} from 'react-native-paper';
import {colors, fonts, images} from '../constant';
import {
  Add,
  Design,
  DrawerIcon,
  Email,
  NotificationIcon,
} from '../../assets/svg';
import {useDrawerContext} from '../context/DrawerContex';
import {StoryCard} from '../components';
import {useNavigation} from '@react-navigation/native';
import {StoriesNavigationType} from '../Types/NavigationTypes.types';
const {width, height} = Dimensions.get('window');
type ScrollViewNativeEvent = NativeSyntheticEvent<NativeScrollEvent>;
const Stories = () => {
  const theme = useTheme();
  const navigation = useNavigation<StoriesNavigationType['navigation']>();
  const {setIsOpen} = useDrawerContext();
  const [isExtended, setIsExtended] = React.useState(true);

  const onScroll = (nativeEvent: ScrollViewNativeEvent) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  return (
    <>
      <View style={{marginBottom: 80}}>
        <View
          style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}
        />
        <View style={styles.design}>
          <Design />
        </View>
        <View style={styles.header}>
          <Pressable style={styles.inner} onPress={() => console.log('sada')}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsOpen(true)}>
              <DrawerIcon width={30} height={30} />
            </TouchableOpacity>
            <Text style={styles.text}>Stories</Text>
          </Pressable>
          <NotificationIcon
            width={30}
            height={30}
            fill={theme.colors.onSecondary}
          />
        </View>
      </View>
      <ScrollView onScroll={onScroll} showsVerticalScrollIndicator={false}>
        <StoryCard onPress={() => navigation.navigate('Story')} />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </ScrollView>
      <AnimatedFAB
        icon={props => <Add />}
        label="Add your story"
        extended={isExtended}
        onPress={() => navigation.navigate('CreateStory')}
        visible={true}
        animateFrom="right"
        iconMode="static"
        style={styles.fabStyle}
      />
    </>
  );
};

export default Stories;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: '10%',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...fonts.headerHeading,
    marginLeft: 10,
    color: colors.white,
  },

  contanier: {
    width: 300,
    height: 300,
    borderRadius: 500,
    transform: [{scaleX: 1.5}],
    overflow: 'hidden',
    position: 'absolute',
    top: '-100%',
    left: 45,
  },
  design: {
    transform: [{scaleY: -1}, {rotate: '200 deg'}],
    position: 'absolute',
    top: -170,
    left: -190,
  },
  image: {
    height: height / 4,
    width: width * 0.8,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  description: {
    marginBottom: 50,
    marginHorizontal: '5%',
  },
  fabContainer: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
    justifyContent: 'space-between',
  },
});
