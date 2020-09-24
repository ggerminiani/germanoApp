import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Color from '../../styles/Colors';

const FindItem = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="magnify"
        size={20}
        color={Color.black}
        style={styles.containerIcon}
      />
      <TextInput
        placeholder="Pesquisar"
        style={styles.containerText}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    borderRadius: 10,
    borderColor: Color.black,
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  containerIcon: {
    padding: 5,
    marginLeft: 10,
  },
  containerText: {
    flex: 1,
    padding: 10,
  },
});

export default FindItem;
