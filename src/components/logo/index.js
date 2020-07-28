import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';

const Logo = () => {
  let [fontsLoaded] = useFonts({
    'Imprint MT Shadow': require('../../assets/fonts/IMPRISHA.TTF'),
  });
  console.log(fontsLoaded);
  return (
    <View>
      <Text style={{ fontFamily: 'IMPRISHA', fontSize: 40 }}>GErmano</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
