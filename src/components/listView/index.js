import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import ListViewItem from './listViewItem';

import { getCars } from '../../services/Cars';

const ListView = ({ search = null, onPress }) => {
  const [carList, setCarList] = useState(null);
  const [initial, setInitial] = useState(1);
  const offset = 6;

  useEffect(() => {
    if (carList === null) {
      loadList();
    }
  }, [carList]);

  async function loadList() {
    if (search === null) {
      const data = await getCars({
        type: 'get_all',
        initial,
        offset,
      });
      if (data !== undefined && data !== null && data.status == 'successful') {
        if (carList === null) {
          setCarList(data);
        } else {
          //setCarList(carList.concat(data));
          setCarList((carList) => [...carList, data]);
        }
        //

        //setCarList(data);
      }
    } else {
      const data = await getCars({ type: 'get_all', query: 'query' });
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCarList(data);
      }
    }
  }

  const renderFooter = () => {
    return (
      <View style={styles.loadMore}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const handleLoadMore = () => {
    setInitial(initial + offset);
    loadList();
  };

  return (
    <View style={carList === null ? styles.containerNull : styles.container}>
      {carList === null ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          style={styles.list}
          data={carList.ads}
          keyExtractor={(item) => {
            item.idcar;
          }}
          renderItem={({ item }) => (
            <ListViewItem
              key={`car_${item.idcar}`}
              data={item}
              onPress={onPress}
            />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  containerNull: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  list: {
    marginHorizontal: 10,
  },
  loadMore: {
    marginBottom: 10,
  },
});
