import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../../styles/Colors';

const ImagesPreviewItem = ({ item, index, onPress }) => {

  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.uri}}
        resizeMethod="resize"
        resizeMode="contain"
        style={styles.image}
      />
      <TouchableOpacity style={styles.delete} onPress={(e) => onPress(index)}>
        <Icon name="delete" size={22} color={Colors.white} style={{flex: 1, paddingRight: 5, textAlign: 'right'}} />
        <Text style={{flex: 1, fontSize: 17, color: Colors.white}}>Excluir</Text>
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
    margin: 3,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
    height: 150,
    marginTop: 5,
  },
  delete: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: Colors.dolar,
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center'
  }
});

export default ImagesPreviewItem;
