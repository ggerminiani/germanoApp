import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Slider from '@react-native-community/slider';

import Logo from '../../components/logo';
import SearchItem from '../../components/searchItem';
import SelectModal from '../../components/modalSelect';

import { getCars } from '../../services/Cars';

import Colors from '../../styles/Colors';
import numeral from '../../vendros/numeral';

const Search = ({ navigation }) => {
  const minYear = () => {
    let year = new Date();
    year = year.getFullYear() - 30;
    return year;
  };
  const maxYear = () => {
    let year = new Date();
    return year.getFullYear();
  };

  const refKm = useRef(null);
  const refYear = useRef(null);
  const refPrice = useRef(null);

  const [textSearch, setTextSearch] = useState('');
  const [brand, setBrand] = useState(null);
  const [brandData, setBrandData] = useState(null);
  const [model, setModel] = useState(null);
  const [modelData, setModelData] = useState(null);
  const [carColors, setCarColors] = useState(null);
  const [carTransmission, setcarTransmission] = useState(null);
  const [carPetrol, setcarPetrol] = useState(null);
  const [carKm, setCarKm] = useState(0);
  const [carYear, setCarYear] = useState(maxYear());
  const [carPrice, setCarPrice] = useState(120000);

  const carColorsData = [
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

  const carTransmissionData = [
    { id: 1, info: 'ÁLCOOL' },
    { id: 2, info: 'GASOLINA' },
    { id: 3, info: 'FLEX' },
    { id: 4, info: 'DIESEL' },
  ];

  const carPetrolData = [
    { id: 1, info: 'MANUAL' },
    { id: 2, info: 'AUTOMÁTICO' },
    { id: 3, info: 'AUTOMÁTICO SEQUENCIAL' },
    { id: 4, info: 'CVT' },
  ];

  useEffect(() => {
    async function loadBrand() {
      const data = await getCars({ type: 'get_brands' });
      if (data.status == 'successful') {
        setBrandData(data.data);
      }
    }

    async function loadModel(id) {
      const data = await getCars({ type: 'get_models', id });
      if (data.status == 'successful') {
        setModelData(data.data);
      }
    }

    if (brandData === null) {
      loadBrand();
    } else {
      if (brand !== null) {
        loadModel(brand.id);
      }
    }
  }, [brand, model]);

  const onChangeText = (e) => {
    setTextSearch(e);
  };

  const onPressBrand = (e) => {
    setBrand(e);
    setModel(null);
  };

  const onPressModel = (e) => {
    setModel(e);
  };

  const onPressColor = (e) => {
    setCarColors(e);
  };

  const onPressTransmission = (e) => {
    setcarTransmission(e);
  };

  const onPressPetrol = (e) => {
    setcarPetrol(e);
  };

  const onPressClean = () => {
    setTextSearch('');
    setBrand(null);
    setModel(null);
    setCarColors(null);
    setcarTransmission(null);
    setcarPetrol(null);
    setCarKm(null);
    setCarYear(maxYear());
    setCarPrice(120000);
    refKm.current.setNativeProps({ value: 0 });
    refYear.current.setNativeProps({ value: maxYear() });
    refPrice.current.setNativeProps({ value: 120000 });

    Alert.alert('Filtros limpos');
  };

  const onPressSearch = () => {
    navigation.navigate('Home', {
      screen: 'Veículos',
      params: { test: 'testando' },
    });
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Filtro de Busca</Text>
      <ScrollView>
        <SearchItem onChangeText={(e) => onChangeText(e)} />
        <Text
          style={[
            styles.subtitle,
            {
              textAlign: 'center',
              marginTop: 5,
            },
          ]}
        >
          - - - OU - - -
        </Text>
        <SelectModal
          title="Marca"
          placeHolder={brand === null ? 'Qualquer Marca' : brand.info}
          data={brandData}
          onPress={(e) => onPressBrand(e)}
        />
        {modelData === null ? null : (
          <SelectModal
            title="Modelo"
            placeHolder={model === null ? 'Qualquer Modelo' : model.info}
            data={modelData}
            onPress={(e) => onPressModel(e)}
          />
        )}
        <SelectModal
          title="Cor"
          placeHolder={carColors === null ? 'Qualquer Cor' : carColors.info}
          data={carColorsData}
          onPress={(e) => onPressColor(e)}
        />
        <SelectModal
          title="Câmbio"
          placeHolder={carPetrol === null ? 'Qualquer Câmbio' : carPetrol.info}
          data={carPetrolData}
          onPress={(e) => onPressPetrol(e)}
        />
        <SelectModal
          title="Combustível"
          placeHolder={
            carTransmission === null
              ? 'Qualquer Combustível'
              : carTransmission.info
          }
          data={carTransmissionData}
          onPress={(e) => onPressTransmission(e)}
        />
        <Text style={styles.subtitle}>
          Quilometragem:{' '}
          {carKm === 0
            ? '0 Km'
            : carKm !== 500000
            ? `até ${numeral(carKm).format('0,0')} Km`
            : `qualquer km`}
        </Text>
        <Slider
          ref={refKm}
          style={styles.slider}
          minimumValue={0}
          maximumValue={500000}
          value={0}
          step={10000}
          onValueChange={(e) => setCarKm(e)}
          minimumTrackTintColor={Colors.white}
          maximumTrackTintColor={Colors.black}
          thumbTintColor={Colors.dark_bckgrd}
        />

        <Text style={styles.subtitle}>
          Ano de Fabricação:{' '}
          {carYear === maxYear()
            ? carYear
            : carYear !== minYear()
            ? `até ${carYear}`
            : `qualquer ano`}
        </Text>
        <Slider
          ref={refYear}
          style={styles.slider}
          minimumValue={minYear()}
          maximumValue={maxYear()}
          inverted={true}
          step={1}
          value={maxYear()}
          onValueChange={(e) => setCarYear(e)}
          minimumTrackTintColor={Colors.black}
          maximumTrackTintColor={Colors.white}
          thumbTintColor={Colors.dark_bckgrd}
        />

        <Text style={styles.subtitle}>
          Preço:{' '}
          {carPrice !== 120000
            ? `até ${numeral(carPrice).format('$ 0,00.00')}`
            : `qualquer preço`}
        </Text>
        <Slider
          ref={refPrice}
          style={styles.slider}
          value={120000}
          minimumValue={5000}
          maximumValue={120000}
          step={5000}
          onValueChange={(e) => setCarPrice(e)}
          minimumTrackTintColor={Colors.white}
          maximumTrackTintColor={Colors.black}
          thumbTintColor={Colors.dark_bckgrd}
        />

        <TouchableOpacity
          style={[styles.buttonContainer, { marginTop: 30 }]}
          onPress={onPressClean}
        >
          <Text style={styles.button}>Limpar Filtros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, { marginBottom: 30 }]}
          onPress={onPressSearch}
        >
          <Text style={styles.button}>Pesquisar</Text>
        </TouchableOpacity>
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
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 5,
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  slider: {
    flex: 1,
    height: 30,
    marginHorizontal: 15,
  },
  buttonContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.border,
    borderWidth: 1,
    alignItems: 'center',
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
  button: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark_bckgrd,
    textAlign: 'center',
    padding: 5,
  },
});

export default Search;
