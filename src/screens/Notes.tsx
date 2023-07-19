import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Block, Note} from '../components';
import {AnimatedFAB, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NotesNavigationType} from '../Types/NavigationTypes.types';
import {Add, Back, Design} from '../../assets/svg';
import {colors, fonts} from '../constant';
type props = {};
const Notes: React.FunctionComponent<props> = () => {
  const theme = useTheme();
  const navigation = useNavigation<NotesNavigationType['navigation']>();
  const [isExtended, setIsExtended] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsExtended(!isExtended), 5000);
    return () => clearTimeout(timer);
  }, [isExtended]);
  return (
    <>
      <View style={{marginBottom: 90}}>
        <View
          style={[styles.contanier, {backgroundColor: theme.colors.tertiary}]}
        />
        <View style={styles.design}>
          <Design />
        </View>
        <View style={styles.header}>
          <View style={styles.inner}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Back width={30} height={30} fill={theme.colors.onSecondary} />
            </TouchableOpacity>
            <Text style={styles.text}>My Notes</Text>
          </View>
        </View>
      </View>
      <Block>
        <Note
          heading="This Is My First Notes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis arcu, efficitur nec commodo non, posuere vel ex. Etiam luctus odio sed lacus laoreet vestibulum."
          color={theme.colors.primaryContainer}
        />
        <Note
          heading="This Is My First Notes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis arcu, efficitur nec commodo non, posuere vel ex. Etiam luctus odio sed lacus laoreet vestibulum."
          color={theme.colors.secondaryContainer}
        />
        <Note
          heading="This Is My First Notes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis arcu, efficitur nec commodo non, posuere vel ex. Etiam luctus odio sed lacus laoreet vestibulum."
          color={theme.colors.tertiaryContainer}
        />
        <Note
          heading="This Is My First Notes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis arcu, efficitur nec commodo non, posuere vel ex. Etiam luctus odio sed lacus laoreet vestibulum."
          color={theme.colors.primaryContainer}
        />
        <Note
          heading="This Is My First Notes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis arcu, efficitur nec commodo non, posuere vel ex. Etiam luctus odio sed lacus laoreet vestibulum."
          color={theme.colors.secondaryContainer}
        />
        <Note
          heading="This Is My First Notes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis arcu, efficitur nec commodo non, posuere vel ex. Etiam luctus odio sed lacus laoreet vestibulum."
          color={theme.colors.tertiaryContainer}
        />
      </Block>
      <AnimatedFAB
        icon={props => <Add />}
        label="Write a Note  "
        extended={isExtended}
        onPress={() => navigation.navigate('CreateNote')}
        visible={true}
        animateFrom="right"
        iconMode="static"
        style={[styles.fabStyle, {backgroundColor: theme.colors.secondary}]}
      />
    </>
  );
};

export default Notes;

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
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
    justifyContent: 'space-between',
  },
});
