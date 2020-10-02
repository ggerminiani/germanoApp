import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Logo from '../../components/logo';
import SelectModal from '../../components/modalSelect';

import { getFIPE } from '../../services/Cars';

import Colors from '../../styles/Colors';

const Sell = () => {
  const [brandData, setBrandData] = useState(null);
  const [modelData, setModelData] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadBrand() {
      const data = await getFIPE({ urlComplement: 'marcas.json' });
      console.log(data);
      if (data.length > 0) {
        setBrandData(data);
      }
    }

    async function loadModel(id) {
      let url = `veiculos/${id}.json`;
      const data = await getFIPE({ urlComplement: url });
      if (data.length > 0) {
        setModelData(data);
      }
    }

    if (brandData === null) {
      loadBrand();
    }
    if (brand !== null) {
      loadModel(brand.id);
    }
  }, []);

  const onPressBrand = (e) => {
    console.log(e);
    setBrand(e);
  };

  const onPressModel = (e) => {
    console.log(e);
    setModel(e);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <ScrollView>
        <Text style={styles.title}>
          Deseja vender/trocar seu veículo?{'\n'}Preencha os dados abaixo!
        </Text>
        <SelectModal
          title="Marca"
          data={brandData}
          placeHolder={brand === null ? 'Selecione a Marca' : brand.info}
          onPress={onPressBrand}
        />
        {brand === null ? null : (
          <SelectModal
            title="Modelo"
            data={modelData}
            placeHolder={model === null ? 'Selecione o Modelo' : model.info}
            onPress={onPressModel}
          />
        )}
      </ScrollView>
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
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
    color: Colors.text,
    fontSize: 20,
    fontWeight: '300',
  },
});

export default Sell;
