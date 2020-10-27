import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getCars } from '../../services/Cars';
import ListViewItem from './listViewItem';

//import { DetailsScreen } from '../../routes';

const ListView = ({ search, onPress }) => {
  const renderLine = Platform.OS == 'ios' ? 1 : 1;
  const { type, fileds_search, text_search } = search;
  const [carList, setCarList] = useState([]);
  const [initial, setInitial] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
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
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCarList(carList.concat(data.ads));
        setTotalRows(data.totalRows);
        setLoading(false);
        setLoadingMore(false);
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
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCarList(carList.concat(data.ads));
        setTotalRows(data.totalRows);
        setLoading(false);
        setLoadingMore(false);
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
    if (!loadingMore) {
      if (carList.length + 1 < totalRows) {
        setLoadingMore(true);
        setInitial(initial + offset);
      }
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
          style={styles.list}
          data={carList}
          keyExtractor={(item) => {
            item.idcar;
          }}
          renderItem={({ item, index }) => {
            return (
              <ListViewItem
                key={`list_${index.toString()}`}
                data={item}
                onPress={onPress}
              />
            );
          }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={renderLine}
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
