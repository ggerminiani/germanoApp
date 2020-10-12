import React, { useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import ImagesPreviewItem from './imagesPreviewItem';

const ImagesPreview = ({ data, onPress }) => {
  useEffect(() => {}, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ImagesPreviewItem key={index.toString()} item={item} index={index} onPress={(e) => onPress(e)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10
  },
});

export default ImagesPreview;
