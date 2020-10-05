import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
//import BEMCheckBox from 'react-native-bem-check-box';

import Logo from '../../components/logo';
import SelectModal from '../../components/modalSelect';

import { getFIPE } from '../../services/Cars';

import Colors from '../../styles/Colors';

const Sell = () => {
  const [brandData, setBrandData] = useState(null);
  const [modelData, setModelData] = useState(null);
  const [yearData, setYearData] = useState(null);
  const [priceData, setPriceData] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [color, setColor] = useState(null);
  const [km, setKm] = useState('Digite quantos Km');

  const colorData = [
    { id: 1, info: 'AMARELO' },
    { id: 2, info: 'AZUL' },
    { id: 3, info: 'BEGE' },
    { id: 4, info: 'BRANCO' },
    { id: 5, info: 'CINZA' },
    { id: 6, info: 'DOURADO' },
    { id: 7, info: 'GRENÉ' },
    { id: 8, info: 'LARANJA' },
    { id: 9, info: 'MARROM' },
    { id: 10, info: 'PRATA' },
    { id: 11, info: 'PRETO' },
    { id: 12, info: 'ROSA' },
    { id: 13, info: 'ROXO' },
    { id: 14, info: 'VERDE' },
    { id: 15, info: 'VERMELHO' },
  ];

  useEffect(() => {
    async function loadBrand() {
      const data = await getFIPE({ urlComplement: 'marcas.json' });
      if (data.length > 0) {
        setBrandData(data);
      }
    }

    async function loadModel(idBrand) {
      let url = `veiculos/${idBrand}.json`;
      const data = await getFIPE({ urlComplement: url });
      if (data.length > 0) {
        setModelData(data);
      }
    }

    async function loadYear(idBrand, idModel) {
      let url = `veiculo/${idBrand}/${idModel}.json`;
      const data = await getFIPE({ urlComplement: url });
      if (data.length > 0) {
        setYearData(data);
      }
    }

    async function loadPrice(idBrand, idModel, idYear) {
      let url = `veiculo/${idBrand}/${idModel}/${idYear}.json`;
      const data = await getFIPE({ urlComplement: url });
      if (data !== undefined) {
        setPriceData(data);
      }
    }

    if (brandData === null) {
      loadBrand();
    }
    if (brand !== null) {
      loadModel(brand.id);
    }
    if (model !== null) {
      loadYear(brand.id, model.id);
    }
    if (year !== null) {
      loadPrice(brand.id, model.id, year.id);
    }
  }, [brand, model, year, color]);

  const onPressBrand = (e) => {
    setModel(null);
    setYear(null);
    setPriceData(null);
    setColor(null);
    setKm('Digite quantos Km');
    setBrand(e);
  };

  const onPressModel = (e) => {
    setYear(null);
    setPriceData(null);
    setColor(null);
    setKm('Digite quantos Km');
    setModel(e);
  };

  const onPressYear = (e) => {
    setPriceData(null);
    setColor(null);
    setKm('Digite quantos Km');
    setYear(e);
  };

  const onPressColor = (e) => {
    setKm('Digite quantos Km');
    setColor(e);
  };

  const onChangeTextKm = (e) => {
    console.log(e);
    setKm(e);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
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
          {model === null ? null : (
            <SelectModal
              title="Ano"
              data={yearData}
              placeHolder={year === null ? 'Selecione o Ano' : year.info}
              onPress={onPressYear}
            />
          )}
          {year === null ? null : (
            <SelectModal
              title="Cor"
              data={colorData}
              placeHolder={color === null ? 'Selecione a Cor' : color.info}
              onPress={onPressColor}
            />
          )}
          {color === null ? null : (
            <View>
              <View style={styles.containerKm}>
                <TextInputMask
                  style={styles.containerKmText}
                  type={'custom'}
                  value={km}
                  options={{
                    mask: '999.99',
                  }}
                  onChangeText={(text) => onChangeTextKm(text)}
                />
              </View>

              <View>
                {/* <BEMCheckBox onValueChange={(value) => console.log(value)} /> */}
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
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
  containerKm: {
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: Colors.dark_bckgrd,
    borderRadius: 10,
    borderColor: Colors.border,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerKmText: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    padding: 10,
  },
});

export default Sell;
