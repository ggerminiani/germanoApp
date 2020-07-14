import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => (
  <View style={styles.flex}>
    <Text>Página Main</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
