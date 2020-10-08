import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../styles/Colors';

const Attachment = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerButton}
        onPress={(e) => console.log(e)}
      >
        <Icon name="paperclip" size={45} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    alignItems: 'center',
  },
  containerButton: {
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
  },
});

export default Attachment;
