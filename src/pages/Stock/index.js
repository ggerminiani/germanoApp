import React from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Logo from '../../components/logo';
import ListCars from '../../components/listCars';

import Colors from '../../styles/Colors';

const Stock = ({ navigation, route }) => {
  const { search } = route.params;
  const onPress = (e) => {
    navigation.navigate('Detalhes', {
      screen: 'Detalhes',
      params: { idCar: e },
    });
  };

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', () => {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: 'Veículos' }],
  //       params: { search: {} },
  //     });
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      return () => navigation.setParams({ search: {} });
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <Logo />
      <ListCars
        navigation={navigation}
        search={search}
        onPress={(e) => onPress(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 25,
  },
});

export default Stock;
