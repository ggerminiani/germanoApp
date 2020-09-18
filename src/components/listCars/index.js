import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ListView from '../listView';

import Colors from '../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListCars = ({ search = null }) => {
  const [iconGrid, setIconGrid] = useState(false);
  const changeIcon = () => {
    setIconGrid(!iconGrid);
  };

  const onPress = (e) => {
    console.log(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>
          {search === null ? 'Listagem de Veículos' : 'Resultado de Pesquisa'}
        </Text>
        <TouchableOpacity onPress={changeIcon} style={styles.titleIcon}>
          {iconGrid ? (
            <Icon name="view-list" size={30} color="white" />
          ) : (
            <Icon name="view-module" size={30} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {!iconGrid ? <ListView onPress={(e) => onPress(e)} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerNull: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  containerTitle: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  titleText: {
    flex: 1,
    textAlign: 'left',
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleIcon: {},
});

export default ListCars;
