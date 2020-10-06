import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Slider from '@react-native-community/slider';
//import CheckBox from 'react-native-check-box';

import Logo from '../../components/logo';
import SelectModal from '../../components/modalSelect';
import CheckBox from '../../components/checkBox';

import { getFIPE } from '../../services/Cars';

import Colors from '../../styles/Colors';
import numeral from '../../vendros/numeral';

const Sell = () => {
  const refKm = useRef(null);

  const maxKm = 500000;

  const [brandData, setBrandData] = useState(null);
  const [modelData, setModelData] = useState(null);
  const [yearData, setYearData] = useState(null);
  const [priceData, setPriceData] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [color, setColor] = useState(null);
  const [km, setKm] = useState(0);

  const [checkArCondicionado, setCheckArCondicionado] = useState(false);
  const [checkBancoAltura, setCheckBancoAltura] = useState(false);
  const [checkBancoEletrico, setCheckBancoEletrico] = useState(false);
  const [checkBancoCouro, setCheckBancoCouro] = useState(false);
  const [checkComputadorBordo, setCheckComputadorBordo] = useState(false);
  const [checkRetrovisorEletrico, setCheckRetrovisorEletrico] = useState(false);
  const [checkDirecaoHidraulica, setCheckDirecaoHidraulica] = useState(false);
  const [checkEncostoTraseiro, setCheckEncostoTraseiro] = useState(false);
  const [checkFaroisRegulagem, setCheckFaroisRegulagem] = useState(false);
  const [checkGPS, setCheckGPS] = useState(false);
  const [checkPilotoAutomatico, setCheckPilotoAutomatico] = useState(false);
  const [checkVidrosEletricos, setCheckVidrosEletricos] = useState(false);
  const [checkVoltanteAltura, setCheckVoltanteAltura] = useState(false);
  const [checkAirbagMotorista, setCheckAirbagMotorista] = useState(false);
  const [checkAirbagPassageiro, setCheckAirbagPassageiro] = useState(false);
  const [checkAlarme, setCheckAlarme] = useState(false);
  const [checkBilndado, setCheckBilndado] = useState(false);
  const [checkDesembacadorTraseiro, setCheckDesembacadorTraseiro] = useState(
    false
  );
  const [checkEncostoCabecaTraseiro, setCheckEncostoCabecaTraseiro] = useState(
    false
  );
  const [
    checkFaroisNeblinaDianteiro,
    setCheckFaroisNeblinaDianteiro,
  ] = useState(false);
  const [checkFaroisNeblinaTraseiro, setCheckFaroisNeblinaTraseiro] = useState(
    false
  );
  const [checkFaroisXenon, setCheckFaroisXenon] = useState(false);
  const [checkFechamentoVidros, setCheckFechamentoVidros] = useState(false);
  const [checkFriosABS, setCheckFriosABS] = useState(false);
  const [checkSensorChuva, setCheckSensorChuva] = useState(false);
  const [checkSensorEstacionamento, setCheckSensorEstacionamento] = useState(
    false
  );
  const [checkSensorLuz, setCheckSensorLuz] = useState(false);
  const [checkTerceiraLuzFreio, setCheckTerceiraLuzFreio] = useState(false);
  const [checkTetoSolar, setCheckTetoSolar] = useState(false);
  const [checkTravaEletrica, setCheckTravaEletrica] = useState(false);
  const [checkAMFM, setCheckAMFM] = useState(false);
  const [checkBluetooth, setCheckBluetooth] = useState(false);
  const [checkCDPlayer, setCheckCDPlayer] = useState(false);
  const [checkRadioVolante, setCheckRadioVolante] = useState(false);
  const [checkDVDPlayer, setCheckDVDPlayer] = useState(false);
  const [checkEntradaAuxiliar, setCheckEntradaAuxiliar] = useState(false);
  const [checkEntradaUSB, setCheckEntradaUSB] = useState(false);
  const [checkLeitorMP3, setCheckLeitorMP3] = useState(false);
  const [checkCapota, setCheckCapota] = useState(false);
  const [checkLimpadorTraseiro, setCheckLimpadorTraseiro] = useState(false);
  const [checkParachoques, setCheckParachoques] = useState(false);
  const [checkProtetorCacamba, setCheckProtetorCacamba] = useState(false);
  const [checkRodaLiga, setCheckRodaLiga] = useState(false);

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
    setKm(0);
    setBrand(e);
  };

  const onPressModel = (e) => {
    setYear(null);
    setPriceData(null);
    setColor(null);
    setKm(0);
    setModel(e);
  };

  const onPressYear = (e) => {
    setPriceData(null);
    setColor(null);
    setKm(0);
    setYear(e);
  };

  const onPressColor = (e) => {
    setKm(0);
    setColor(e);
  };

  const onChangeTextKm = (e) => {
    console.log(e);
    setKm(e);
  };

  const onPressCheck = (e) => {
    const { checked, title } = e;
    console.log(e);
    switch (title) {
      case 'Ar-Condicionado':
        setCheckArCondicionado(!checked);
        break;

      default:
        break;
    }
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
              <Text style={styles.subtitle}>
                Quilometragem:{' '}
                {km === 0
                  ? '0 Km'
                  : km !== maxKm
                  ? `${numeral(km).format('0,0')} Km`
                  : `acima de ${numeral(km).format('0,0')} Km`}
              </Text>
              <Slider
                ref={refKm}
                style={styles.slider}
                minimumValue={0}
                maximumValue={maxKm}
                value={0}
                step={5000}
                onValueChange={(e) => setKm(e)}
                minimumTrackTintColor={Colors.white}
                maximumTrackTintColor={Colors.black}
                thumbTintColor={Colors.dark_bckgrd}
              />

              <Text style={styles.subtitle}>Opicionais:</Text>
              <View style={styles.checkbox}>
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title="Ar-Condicionado"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title="Ar-Condicionado"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title="Ar-Condicionado"
                />
                {/* <>
                  <CheckBox
                    onClick={() => {
                      setCheckArCondicionado(!checkArCondicionado);
                    }}
                    isChecked={checkArCondicionado}
                    checkBoxColor={Colors.white}
                    rightText="Ar"
                    rightTextStyle={{ color: Colors.white }}
                  />
                </>
                <>
                  <CheckBox
                    onClick={() => {
                      setCheckArCondicionado(!checkArCondicionado);
                    }}
                    isChecked={checkArCondicionado}
                    checkBoxColor={Colors.white}
                    rightText="Ar"
                    rightTextStyle={{ color: Colors.white }}
                  />
                </> */}
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
  checkbox: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
  },
});

export default Sell;
