import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListCars = ({ search = null }) => {
  const [carList, setCarList] = useState(null);

  useEffect(() => {
    async function loadList() {
      if (search === null) {
      } else {
      }
      const data = await getCars({ type: 'get_news' });
      if (data !== undefined && data !== null && data.status == 'successful') {
        setNews(data);
      }
    }

    if (carList != null) {
      loadList();
    }
  }, [carList]);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListCars;
