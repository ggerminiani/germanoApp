import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import QuartetViewItem from './quartetViewItem/';

import Colors from '../../styles/Colors';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const QuartetView = ({ name, data, onPress }) => {
  const renderItems = () => {
    let items = [];
    for (x = 0; x < data.length; x++) {
      items.push(
        <QuartetViewItem
          key={`${name}_${x}`}
          data={data[x]}
          onPress={onPress}
        />
      );
    }
    return items;
  };

  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.container}>
        <ScrollView
          style={styles.slider}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          scrollIndicatorInsets={{ top: 10, left: 10, bottom: 10, right: 10 }}
        >
          <View style={styles.hR}>
            <View style={styles.h1}>
              <Text>Olá 1</Text>
            </View>

            <View style={styles.h2}>
              <Text>Olá 2</Text>
            </View>
          </View>

          <View style={styles.hR}>
            <View style={styles.h3}>
              <Text>Olá 3</Text>
            </View>

            <View style={styles.h4}>
              <Text>Olá 4</Text>
            </View>
          </View>
          {
            //renderItems()
          }
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
    backgroundColor: 'yellow',
  },
  hR: {
    flexDirection: 'column',
    width: '50%',
  },
  h1: {
    backgroundColor: 'green',
    height: '50%',
  },
});

export default QuartetView;
