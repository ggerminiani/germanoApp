import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Color from '../../styles/Colors';

const SerachItem = ({ onChangeText, onSubmitEditing, clear }) => {
  const refInput = useRef(null);

  useEffect(() => {
    if (clear) {
      refInput.current.setNativeProps({ text: '' });
    }
  }, [clear]);

  return (
    <View style={styles.container}>
      <Icon name="magnify" size={40} color={Color.white} style={styles.icon} />
      <TextInput
        style={styles.text}
        onChangeText={(text) => onChangeText(text)}
        placeholder={'Digite uma marca, modelo, versão...'}
        placeholderTextColor={Color.inactive}
        multiline={false}
        onSubmitEditing={onSubmitEditing}
        ref={refInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.dark_bckgrd,
    marginHorizontal: 15,
    marginVertical: 5,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: Color.border,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    color: Color.white,
  },
});

export default SerachItem;
