import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Logo from '../../components/logo';
import ListCars from '../../components/listCars';

import Colors from '../../styles/Colors';

const Stock = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <ListCars />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
  },
});

export default Stock;
