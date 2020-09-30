import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Logo from '../../components/logo';
import ListCars from '../../components/listCars';

import Colors from '../../styles/Colors';

const Stock = ({ navigation, route }) => {
  const onPress = (e) => {
    navigation.navigate('Detalhes', {
      screen: 'Detalhes',
      params: { idCar: e },
    });
  };
  //console.log(route.params);
  return (
    <View style={styles.container}>
      <Logo />
      <ListCars navigation={navigation} onPress={(e) => onPress(e)} />
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
