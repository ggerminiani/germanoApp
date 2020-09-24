import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from '../../components/logo';
import SearchItem from '../../components/searchItem';
import SelectBrand from '../../components/modalSelect';

import Colors from '../../styles/Colors';

const Search = () => {
  const [textSearch, setTextSearch] = useState('');
  const [brand, setBrand] = useState('');

  const onChangeText = (e) => {
    setTextSearch(e);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Filtro de Busca</Text>
      <SearchItem onChangeText={(e) => onChangeText(e)} />
      <SelectBrand />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
  },
  title: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Search;
