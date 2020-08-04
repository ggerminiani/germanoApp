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

const QuartetViewItem = ({ data, onPress }) => {
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

export default QuartetViewItem;

const styles = StyleSheet.create({});
