import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import CommonAdsItem from './commonAdsItem';

import Colors from '../../styles/Colors';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const CommonAds = ({ name, data, onPress }) => {
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.container}>
        <ScrollView style={styles.slider} pagingEnabled={true}>
          <CommonAdsItem />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: Colors.contrast,
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  slider: {
    margin: 10,
    width: screenWidth - 40,
    height: screenHeight * 0.4,
  },
});

export default CommonAds;
