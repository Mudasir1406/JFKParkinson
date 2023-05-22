import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../constant';
import {useTheme} from 'react-native-paper';
import {Back} from '../../assets/svg';

type props = {
  pageName: string;
};

const BackButton: React.FunctionComponent<props> = ({pageName}) => {
  const theme = useTheme();
  return (
    <View style={styles.constanier}>
      <Back width={30} height={30} />
      <Text style={[styles.text, {color: theme.colors.onSecondary}]}>
        {pageName}
      </Text>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  text: {
    ...fonts.screenHeading,
    marginLeft: 20,
    marginTop: 5,
  },
  constanier: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
