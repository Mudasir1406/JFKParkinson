import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images, fonts, colors} from '../constant';
import {Surface, useTheme} from 'react-native-paper';
import {
  AuthButton,
  Block,
  DoctorsCard,
  SponsorCards,
  TouchableText,
} from '../components';
import {Design, DrawerIcon, NotificationIcon} from '../../assets/svg';
import {useDrawerContext} from '../context/DrawerContex';

const Consultation = () => {
  const {setIsOpen} = useDrawerContext();
  const theme = useTheme();
  return (
    <>
      <View style={{marginBottom: 60}}>
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
            <Text style={styles.text}>Consultation</Text>
          </Pressable>
          <NotificationIcon
            width={30}
            height={30}
            fill={theme.colors.onSecondary}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}>
        <Text style={[styles.headingSponsor, {color: theme.colors.scrim}]}>
          Sponsors
        </Text>
        <View style={{flexDirection: 'row'}}>
          <SponsorCards />
          <SponsorCards />
          <SponsorCards />
        </View>
        <View style={{flexDirection: 'row'}}>
          <SponsorCards />
          <SponsorCards />
          <SponsorCards />
        </View>
        <Text style={[styles.headingSponsor, {color: theme.colors.scrim}]}>
          Doctor's Corner
        </Text>
        <DoctorsCard
          time="DO Movement Disorders and Neurology JFK University Medical Center"
          title="Doctor John Micheal"
          onPress={() => {}}
        />
        <DoctorsCard
          time="DO Movement Disorders and Neurology JFK University Medical Center"
          title="Doctor John Micheal"
          onPress={() => {}}
        />
        <DoctorsCard
          time="DO Movement Disorders and Neurology JFK University Medical Center"
          title="Doctor John Micheal"
          onPress={() => {}}
        />
      </ScrollView>
    </>
  );
};

export default Consultation;

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
  heading: {
    ...fonts.homeHeading,
    maxWidth: '60%',
  },
  headingContanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  headingSponsor: {
    ...fonts.sponsor,
    marginTop: 20,
  },
});
