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
import { Colors } from 'react-native/Libraries/NewAppScreen';

const GridView = ({ search, onPress }) => {
  const { type, fileds_search, text_search } = search;

  const [carList, setCarList] = useState([]);
  const [initial, setInitial] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const offset = 6;

  useEffect(() => {
    loadList();
  }, [initial]);

  async function loadList() {
    if (search.type == undefined) {
      const data = await getCars({
        type: 'get_all',
        initial,
        offset,
      });
      if (data !== undefined && data !== null && data.length > 0) {
        setCarList(carList.concat(data));
        setLoading(false);
      } else {
        setLoading(false);
        setLoadingMore(false);
      }
    } else {
      const data = await getCars({
        type,
        fileds_search,
        text_search,
        initial,
        offset,
      });
      if (data !== undefined && data !== null && data.length > 0) {
        setCarList(carList.concat(data));
        setLoading(false);
      } else {
        setLoading(false);
        setLoadingMore(false);
      }
    }
  }

  const renderFooter = () => {
    return (
      <View style={loadingMore ? styles.loadMore : styles.notShow}>
        <ActivityIndicator size="small" color={Colors.white} />
      </View>
    );
  };

  const handleLoadMore = () => {
    if (carList.length >= 6) {
      setLoadingMore(true);
      setInitial(initial + offset);
    }
  };

  return (
    <View style={carList.length == 0 ? styles.containerNull : styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.white} />
      ) : carList.length === 0 ? (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: Colors.white,
            top: -30,
          }}
        >
          Nenhum veículo encontrado
        </Text>
      ) : (
        <FlatList
          numColumns={2}
          style={styles.list}
          data={carList}
          keyExtractor={(item) => {
            item.idcar;
          }}
          renderItem={({ item, index }) => (
            <GridViewItem
              key={`grid_${index.toString()}`}
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
