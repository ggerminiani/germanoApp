import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import { getCars } from '../../services/Cars';

import Colors from '../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListCars = ({ search = null }) => {
  const [carList, setCarList] = useState(null);
  const [iconGrid, setIconGrid] = useState(false);

  useEffect(() => {
    async function loadList() {
      if (search === null) {
        const data = await getCars({ type: 'get_all' });
        if (
          data !== undefined &&
          data !== null &&
          data.status == 'successful'
        ) {
          setCarList(data);
        }
      } else {
        const data = await getCars({ type: 'get_all', query: 'query' });
        if (
          data !== undefined &&
          data !== null &&
          data.status == 'successful'
        ) {
          setCarList(data);
        }
      }
    }

    if (carList === null) {
      loadList();
    }
  }, [carList]);

  const changeIcon = () => {
    setIconGrid(!iconGrid);
  };

  console.log('listCars');
  console.log(carList);

  return (
    <View style={carList === null ? styles.containerNull : styles.container}>
      {carList == null ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <View style={styles.containerTitle}>
            <Text style={styles.titleText}>
              {search === null
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
          <ScrollView>
            {!iconGrid ? (
              <FlatList
                initialNumToRender={5}
                data={carList.ads}
                keyExtracto={(item) => item.idcar}
                renderItem={({ item }) => <Text>{item.brand}</Text>}
              />
            ) : null}
          </ScrollView>
        </View>
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
