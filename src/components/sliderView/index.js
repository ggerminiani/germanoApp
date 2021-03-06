import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../styles/Colors';
import SliderViewItem from './sliderViewItem';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const SliderView = ({ name, data, onPress }) => {
  const refSlider = useRef(null);
  const [items, setItems] = useState(null);
  const [startTimer, setstartTimer] = useState(true);
  const maxX = (screenWidth - 40) * (data.ads.length - 1);

  const timer = () => {
    console.log('timer');
    let scrollX = 0;

    setInterval(() => {
      if (scrollX == maxX) {
        scrollX = 0;
      } else {
        scrollX += screenWidth - 40;
      }
      refSlider.current.scrollTo({ x: scrollX, y: 0, animated: true });
    }, 3500);
  };

  useEffect(() => {
    const renderItems = () => {
      let itemsLoad = [];
      for (let x = 0; x < data.ads.length; x++) {
        itemsLoad.push(
          <SliderViewItem
            key={`${name}_${x}`}
            data={data.ads[x]}
            onPress={onPress}
          />
        );
      }

      setItems(itemsLoad);

      if (startTimer) {
        //Uncomment THIS
        timer();
        setstartTimer(false);
      }
    };

    renderItems();
  }, [data]);

  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.container}>
        <ScrollView
          style={styles.slider}
          ref={refSlider}
          // scrollEventThrottle={1500}
          // onScroll={(e) => {
          //   console.log(e.nativeEvent);
          // }}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          scrollIndicatorInsets={{ top: 10, left: 10, bottom: 10, right: 10 }}
        >
          {items}
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

export default SliderView;
