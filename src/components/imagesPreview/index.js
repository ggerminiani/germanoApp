import React, { useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import ImagesPreviewItem from './imagesPreviewItem';

const ImagesPreview = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ImagesPreviewItem key={index.toString()} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default ImagesPreview;
