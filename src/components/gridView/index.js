import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import GridViewItem from './gridViewItem';

import { getCars } from '../../services/Cars';

const GridView = ({ search = null, onPress }) => {
  const [carList, setCarList] = useState([]);
  const [initial, setInitial] = useState(1);
  const [loading, setLoading] = useState(false);
  const offset = 6;

  useEffect(() => {
    loadList();
  }, [initial]);

  async function loadList() {
    if (search === null) {
      const data = await getCars({
        type: 'get_all',
        initial,
        offset,
      });
      if (data !== undefined && data !== null && data.length > 0) {
        setCarList(carList.concat(data));
      } else {
        setLoading(false);
      }
    } else {
      const data = await getCars({ type: 'get_all', query: 'query' });
      if (data !== undefined && data !== null && data.length > 0) {
        setCarList(carList.concat(data));
      } else {
        setLoading(false);
      }
    }
  }

  const renderFooter = () => {
    return (
      <View style={loading ? styles.loadMore : styles.notShow}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const handleLoadMore = () => {
    setLoading(true);
    setInitial(initial + offset);
  };

  return (
    <View style={carList.length == 0 ? styles.containerNull : styles.container}>
      {carList.length == 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          numColumns={2}
          style={styles.list}
          data={carList}
          keyExtractor={(item) => {
            item.idcar;
          }}
          renderItem={({ item }) => (
            <GridViewItem
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
  notShow: {
    display: 'none',
  },
});

export default GridView;
