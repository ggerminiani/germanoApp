import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { getCars } from '../../services/Cars';

import Colors from '../../styles/Colors/';

const Details = ({ route, navigation }) => {
  console.log(route);
  console.log(navigation);
  const { idCar } = route.params;
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function loadCar() {
      const data = await getCars({ type: 'get_car', id: idCar });
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCar(data);
      }
    }

    loadCar();
  }, []);

  console.log(idCar);

  return (
    <View style={car !== null ? styles.container : styles.container}>
      {car == null ? <ActivityIndicator size="large" /> : null}
      <Text> Olá </Text>
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
