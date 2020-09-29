import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from '../../components/logo';
import SearchItem from '../../components/searchItem';
import SelectBrand from '../../components/modalSelect';

import { getCars } from '../../services/Cars';

import Colors from '../../styles/Colors';

const Search = () => {
  const [textSearch, setTextSearch] = useState('');
  const [brand, setBrand] = useState('');
  const [brandId, setBrandId] = useState('');
  const [brandData, setBrandData] = useState(null);
  const [modelData, setModelData] = useState(null);

  useEffect(() => {
    async function loadBrand() {
      const data = await getCars({ type: 'get_brands' });
      if (data.status == 'successful') {
        setBrandData(data.data);
      }
    }

    async function loadModel(id) {}

    if (brandData === null) {
      loadBrand();
    } else {
      loadModel(brandId);
    }
  }, [brandData, modelData]);

  const onChangeText = (e) => {
    setTextSearch(e);
  };

  const onPressBrand = (e) => {
    setBrand(e.brand);
    setBrandId(e.idbrand);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Filtro de Busca</Text>
      <SearchItem onChangeText={(e) => onChangeText(e)} />
      <Text
        style={{
          textAlign: 'center',
          color: Colors.white,
          marginVertical: 2,
          marginTop: 5,
        }}
      >
        - - - OU - - -
      </Text>
      <SelectBrand
        title="Marca"
        placeHolder={brand === '' ? 'Selecionar Marca' : brand}
        data={brandData}
        onPress={(e) => onPressBrand(e)}
      />
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
