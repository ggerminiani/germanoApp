import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Color from '../../../styles/Colors';

const ModalSelectItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(e) => onPress(item)}>
        <Text style={styles.text}>{item.brand.toUpperCase().trim()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: Color.dark_bckgrd,
    borderRadius: 10,
    borderColor: Color.border,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: Color.white,
    textAlign: 'center',
    padding: 5,
  },
});

export default ModalSelectItem;
