import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/Colors';

const CheckBox = ({ onPress, title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={(e) => {
        //console.log(e);
        console.log(checked);

        setChecked(!checked);
        console.log(checked);
        onPress({ checked, title });
      }}
      style={styles.container}
    >
      {!checked ? (
        <Icon name="radio-button-unchecked" style={styles.checkbox} />
      ) : (
        <Icon name="check-circle" style={styles.checkbox} />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    color: Colors.white,
    fontSize: 22,
    marginLeft: 5,
  },
  text: {
    marginLeft: 10,
    color: Colors.white,
    fontSize: 16,
  },
});

export default CheckBox;
