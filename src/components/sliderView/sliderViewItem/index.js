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

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const SliderViewItem = ({ data, onPress }) => {
  let image_url = { uri: data.foto };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerButton}
        onPress={(e) => onPress(data.carro)}
      >
        <Image source={image_url} resizeMethod="resize" style={styles.image} />
        <Text style={styles.description}>{data.carro}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{data.price}</Text>
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
    width: screenWidth - 40,
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
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  description: {
    fontSize: 18,
    padding: 10,
    color: Colors.text,
    width: '100%',
    textAlign: 'left',
  },
  price: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 10,
    width: '100%',
  },
  priceContainer: {
    backgroundColor: Colors.dolar,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default SliderViewItem;
