import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import QuartetViewItem from './quartetViewItem/';

import Colors from '../../styles/Colors';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const QuartetView = ({ name, data, onPress }) => {
  const [scrollHeigth, setScrollHeigth] = useState(0);
  const [items, setItems] = useState(null);

  useEffect(() => {
    const renderItems = () => {
      let odd = false;
      let lastElement = false;
      let loops = 0;
      let elementCounting = 0;
      let elements = [];

      if (data.length % 2 > 0) {
        odd = true;
        loops = (data.length + 1) / 2;
      } else {
        loops = data.length / 2;
      }

      for (let x = 0; x < loops; x++) {
        let subelements = new Array();

        for (let y = 0; y < 2; y++) {
          if (elementCounting == data.length && odd) {
            lastElement = true;
          }

          subelements.push(
            !lastElement ? (
              <View
                key={`${name}_${elementCounting}`}
                style={[styles.ads, { height: scrollHeigth / 2 - 4 }]}
              >
                <QuartetViewItem
                  data={data[elementCounting]}
                  onPress={onPress}
                />
              </View>
            ) : (
              <View key={`${name}_${elementCounting}`} />
            )
          );
          elementCounting++;
        }

        elements.push(
          <View key={`${name}_${elementCounting}`} style={styles.quadrant}>
            {subelements}
          </View>
        );
      }
      setItems(elements);
    };

    renderItems();
  }, [data, scrollHeigth]);

  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.container}>
        <ScrollView
          onLayout={(event) => {
            setScrollHeigth(event.nativeEvent.layout.height);
          }}
          style={styles.slider}
          horizontal={true}
        >
          {items !== null ? items : null}
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
    margin: 4,
    width: screenWidth - 40,
    height: screenHeight * 0.6,
  },
  quadrant: {
    flexDirection: 'column',
    width: screenWidth / 2,
  },
  ads: {
    margin: 2,
  },
});

export default QuartetView;
