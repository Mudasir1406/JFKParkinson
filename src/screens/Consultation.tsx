import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {images, fonts} from '../constant';
import {Surface, useTheme} from 'react-native-paper';
import {AuthButton, Block} from '../components';

const Consultation = () => {
  const theme = useTheme();
  return (
    <Block>
      <View style={styles.headerContanier}>
        <Image source={images.image1} style={styles.profileImage} />
        <View>
          <Text style={[styles.nameText, {color: theme.colors.scrim}]}>
            Person Name
          </Text>
          <Text style={[styles.timeText, {color: theme.colors.outlineVariant}]}>
            08:06 am
          </Text>
        </View>
      </View>
      <Surface
        style={[
          styles.textInputContanier,
          {backgroundColor: theme.colors.onSecondary},
        ]}
        elevation={2}>
        <TextInput
          multiline
          placeholder="Type something here..."
          selectionColor={theme.colors.primary}
          placeholderTextColor={theme.colors.outlineVariant}
          style={styles.textInput}
        />
      </Surface>
      <Surface
        style={[
          styles.iconsContanier,
          {backgroundColor: theme.colors.onSecondary},
        ]}
        elevation={2}>
        <Text style={styles.textInput}>Add to your post</Text>
      </Surface>
      <AuthButton heading="Post" />
    </Block>
  );
};

export default Consultation;

const styles = StyleSheet.create({
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameText: {
    ...fonts.postName,
    marginHorizontal: 15,
  },
  timeText: {
    ...fonts.TouchableText,
    marginLeft: 15,
  },
  headerContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  textInput: {
    ...fonts.TouchableText,
  },
  textInputContanier: {
    margin: 20,
    borderRadius: 10,
    padding: 10,
    height: 300,
  },
  iconsContanier: {
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
});
