import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Colors from '../../../styles/Colors';

import numeral from '../../../vendros/numeral';
import { urlPhotos } from '../../../services/Cars';

const CommonAdsItem = ({ data, onPress }) => {
  let image_url =
    data.photo == null
      ? require('../../../assets/no_photo.png')
      : { uri: urlPhotos + data.photo };
  const car = `${data.brand} ${data.model} ${data.version}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerButton}
        onPress={(e) => onPress(data.idcar)}
      >
        <View style={styles.item}>
          <Image
            source={image_url}
            resizeMethod="resize"
            style={styles.image}
          />
          <View style={styles.containerData}>
            <Text style={styles.description}>{car}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                {numeral(parseFloat(data.price)).format('$ 0,0.00')}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
    justifyContent: 'center',
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
  description: {
    marginTop: 5,
    fontSize: 14,
    color: Colors.text,
    textAlign: 'left',
    flex: 1,
  },
  priceContainer: {
    backgroundColor: Colors.dolar,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
  price: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CommonAdsItem;
