import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/Colors';

const CheckBox = ({ onPress, title1 = null, title2 = null }) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <View style={[styles.container, { marginBottom: 10 }]}>
      {title1 === null ? null : (
        <TouchableOpacity
          onPress={(e) => {
            onPress({ checked: !checked1, title: title1 });
            setChecked1(!checked1);
          }}
          style={styles.container}
        >
          {!checked1 ? (
            <Icon name="radio-button-unchecked" style={styles.checkbox} />
          ) : (
            <Icon name="check-circle" style={styles.checkbox} />
          )}
          <Text style={styles.text}>{title1}</Text>
        </TouchableOpacity>
      )}

      {title2 === null ? null : (
        <TouchableOpacity
          onPress={(e) => {
            onPress({ checked: !checked2, title: title2 });
            setChecked2(!checked2);
          }}
          style={styles.container}
        >
          {!checked2 ? (
            <Icon name="radio-button-unchecked" style={styles.checkbox} />
          ) : (
            <Icon name="check-circle" style={styles.checkbox} />
          )}
          <Text style={styles.text}>{title2}</Text>
        </TouchableOpacity>
      )}
    </View>
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
  },
  text: {
    flex: 1,
    color: Colors.white,
    fontSize: 14,
    marginLeft: 5,
  },
});

export default CheckBox;
