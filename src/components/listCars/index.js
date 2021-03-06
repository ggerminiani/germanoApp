import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ListView from '../listView';
import GridView from '../gridView';

import Colors from '../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListCars = ({ search, onPress }) => {
  const [iconGrid, setIconGrid] = useState(false);
  const changeIcon = () => {
    setIconGrid(!iconGrid);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>
          {search.type == undefined
            ? 'Listagem de Veículos'
            : 'Resultado de Pesquisa'}
        </Text>
        <TouchableOpacity onPress={changeIcon} style={styles.titleIcon}>
          {iconGrid ? (
            <Icon name="view-list" size={30} color="white" />
          ) : (
            <Icon name="view-module" size={30} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {!iconGrid ? (
        <ListView search={search} onPress={onPress} />
      ) : (
        <GridView search={search} onPress={onPress} />
      )}
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
