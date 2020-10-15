import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../styles/Colors/';

const ButtonAction = ({ primary = true, onPress, text }) => {
  return (
    <TouchableOpacity
      style={
        primary
          ? styles.buttonContainerPrimary
          : styles.buttonContainerSecondary
      }
      onPress={onPress}
    >
      <Text style={primary ? styles.buttonPrimary : styles.buttonSecondary}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainerPrimary: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPrimary: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark_bckgrd,
    textAlign: 'center',
    padding: 5,
  },
  buttonContainerSecondary: {
    backgroundColor: Colors.dark_bckgrd,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSecondary: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
    padding: 5,
  },
});

export default ButtonAction;
