import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../../styles/Colors';

import numeral from '../../../vendros/numeral';
import { urlPhotos } from '../../../services/Cars';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const QuartetViewItem = ({ data, onPress }) => {
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
        <Image
          source={image_url}
          resizeMethod="resize"
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.description}>{car}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {numeral(parseFloat(data.price)).format('$ 0,0.00')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark_bckgrd,
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 10,
  },
  containerButton: {
    flex: 1,
    width: '100%',
  },
  image: {
    borderRadius: 10,
    flex: 1,
    width: '100%',
    marginVertical: 5,
  },
  description: {
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingBottom: 2,
    color: Colors.text,
    width: '100%',
    textAlign: 'left',
    flex: 0.2,
    flexShrink: 1,
  },
  price: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 2,
    width: '100%',
  },
  priceContainer: {
    backgroundColor: Colors.dolar,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default QuartetViewItem;
