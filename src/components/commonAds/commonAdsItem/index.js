import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../../../styles/Colors';

const CommonAdsItem = ({ data, onPress }) => {
  // let image_url =
  //   data.photo == null
  //     ? require('../../../assets/no_photo.png')
  //     : { uri: urlPhotos + data.photo };
  // const car = `${data.brand} ${data.model} ${data.version}`;
  let image_url = require('../../../assets/no_photo.png');

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image source={image_url} resizeMethod="resize" style={styles.image} />
        <View style={styles.containerData}>
          <Text>HONDA CIVIC LXR (2014/2015)</Text>
          <Text>R$ 55.000,00</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Image source={image_url} resizeMethod="resize" style={styles.image} />
        <View style={styles.containerData}>
          <Text>HONDA CIVIC LXR (2014/2015)</Text>
          <Text>R$ 55.000,00</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Image source={image_url} resizeMethod="resize" style={styles.image} />
        <View style={styles.containerData}>
          <Text>HONDA CIVIC LXR XPTO LRRRR(2014/2015)</Text>
          <Text>R$ 55.000,00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 3,
    backgroundColor: Colors.dark_bckgrd,
    padding: 5,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    //marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  containerData: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default CommonAdsItem;
