import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { getCars } from '../../services/Cars';

import Colors from '../../styles/Colors/';

const Details = ({ route, navigation }) => {
  const { idCar } = route.params;
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function loadCar() {
      const data = await getCars({ type: 'get_car', id: idCar });
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCar(data);
      }
      console.log(car);
    }
    console.log('useEffect');
    loadCar();
  }, [idCar]);

  console.log('route');
  console.log(route);
  console.log('navigation');
  console.log(navigation);
  console.log('idCar: ', idCar);

  return (
    <View style={car == null ? styles.containerEmpty : styles.container}>
      {car == null ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <Text>{car.ads[0].marca}</Text>
        </View>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    //marginTop: 20,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    //marginTop: 20,
    paddingTop: 20,
  },
});
