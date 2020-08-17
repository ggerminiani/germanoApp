import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../styles/Colors/';

const Details = ({ route, navigation }) => {
  const { idCar } = route.params;

  return (
    <View style={styles.container}>
      <Text>Olá</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    //marginTop: 20,
    paddingTop: 20,
  },
});
