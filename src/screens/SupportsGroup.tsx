import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Block, SupportGroupCard} from '../components';
import {colors, fonts} from '../constant';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Back, Design} from '../../assets/svg';

const SupportsGroup = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const data = [
    {id: 1, title: 'Benefits of JFK Support Groups'},
    {id: 2, title: 'Support Groups Meetings'},
    {id: 3, title: 'People with Parkinsons'},
    {id: 4, title: 'Newly Diagnosed'},
    {id: 5, title: 'Care partners Support Groups'},
    {id: 6, title: 'DBS Support Groups'},
    // Add more data items as needed
  ];
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
            <Text style={styles.text}>Support Groups</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={item => <SupportGroupCard heading={item.item.title} />}
        keyExtractor={item => item?.id?.toString()}
        numColumns={2}
        contentContainerStyle={styles.containerFlatList}
      />
    </>
  );
};

export default SupportsGroup;

const styles = StyleSheet.create({
  containerFlatList: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
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
});
