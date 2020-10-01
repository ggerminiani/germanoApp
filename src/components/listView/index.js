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
//import { DetailsScreen } from '../../routes';

const ListView = ({ search, onPress }) => {
  const { type, fileds_search, text_search } = search;

  const [carList, setCarList] = useState([]);
  const [initial, setInitial] = useState(1);
  const [loading, setLoading] = useState(false);
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
      } else {
        setLoading(false);
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
          style={styles.list}
          data={carList}
          keyExtractor={(item) => {
            item.idcar;
          }}
          renderItem={({ item, index }) => (
            <ListViewItem
              key={`list_${index.toString()}`}
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
  notShow: {
    display: 'none',
  },
});
