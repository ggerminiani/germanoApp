import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../styles/Colors/';

const Logo = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[Colors.contrast, Colors.background]}
      >
        <Image
          //defaultSource={(require('../../assets/logo.png'), 100, 100)}
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
    height: 120,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 100,
  },
});

export default Logo;
