import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Slider from '@react-native-community/slider';

import Logo from '../../components/logo';
import SelectModal from '../../components/modalSelect';
import CheckBox from '../../components/checkBox';
import Camera from '../../components/cameraButton';
import Attachment from '../../components/attachment';
import ImagesPreview from '../../components/imagesPreview';

import { getFIPE } from '../../services/Cars';

import Colors from '../../styles/Colors';
import numeral from '../../vendros/numeral';

const Sell = () => {
  const refKm = useRef(null);

  const maxKm = 500000;

  const [photos, setPhotos] = useState([]);

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

  const onPressCheck = (e) => {
    const { checked, title } = e;
    console.log(e);
    switch (title) {
      case 'Ar Condicionado':
        setCheckArCondicionado(!checked);
        break;
      case 'Banco com regulagem de altura':
        setCheckBancoAltura(!checked);
        break;
      case 'Bancos elétricos':
        setCheckBancoEletrico(!checked);
        break;
      case 'Bancos em couro':
        setCheckBancoCouro(!checked);
        break;
      case 'Computador de bordo':
        setCheckEncostoTraseiro(!checked);
        break;
      case 'Controle de retrovisores elétricos':
        setCheckFaroisRegulagem(!checked);
        break;
      case 'Direção Hidráulica':
        setCheckVoltanteAltura(!checked);
        break;
      case 'Encosto traseiro':
        setCheckAirbagMotorista(!checked);
        break;
      case 'Faróis com regulação automática':
        setCheckDesembacadorTraseiro(!checked);
        break;
      case 'GPS':
        setCheckEncostoCabecaTraseiro(!checked);
        break;
      case 'Piloto automático':
        setCheckFechamentoVidros(!checked);
        break;
      case 'Vidros elétricos':
        setCheckFriosABS(!checked);
        break;
      case 'Volante com regulagem de altura':
        setCheckTerceiraLuzFreio(!checked);
        break;
      case 'Alarme':
        setCheckTetoSolar(!checked);
        break;
      case 'Airbag motorista':
        setCheckCDPlayer(!checked);
        break;
      case 'Airbag passageiro':
        setCheckRadioVolante(!checked);
        break;
      case 'Blindado':
        setCheckLeitorMP3(!checked);
        break;
      case 'Desembaçador traseiro':
        setCheckCapota(!checked);
        break;
      case 'Encosto de cabeça traseiro':
        setCheckEncostoCabecaTraseiro(!checked);
        break;
      case 'Faróis de neblina dianteiros':
        setCheckFaroisNeblinaDianteiro(!checked);
        break;
      case 'Faróis de neblina traseiros':
        setCheckFaroisNeblinaTraseiro(!checked);
        break;
      case 'Faróis de xenon':
        setCheckFaroisXenon(!checked);
        break;
      case 'Fechamento automático dos vidros':
        setCheckFechamentoVidros(!checked);
        break;
      case 'Freios ABS':
        setCheckFriosABS(!checked);
        break;
      case 'Sensor de chuva':
        setCheckSensorChuva(!checked);
        break;
      case 'Sensor de estacionamento':
        setCheckSensorEstacionamento(!checked);
        break;
      case 'Sensor de luz':
        setCheckSensorLuz(!checked);
        break;
      case 'Terceira luz de freio led':
        setCheckTerceiraLuzFreio(!checked);
        break;
      case 'Teto solar elétrico retrátil':
        setCheckTetoSolar(!checked);
        break;
      case 'Trava elétrica central':
        setCheckTravaEletrica(!checked);
        break;
      case 'AM/FM':
        setCheckAMFM(!checked);
        break;
      case 'Bluetooth':
        setCheckBluetooth(!checked);
        break;
      case 'CD player':
        setCheckCDPlayer(!checked);
        break;
      case 'Controle remoto para rádio no volante':
        setCheckRadioVolante(!checked);
        break;
      case 'DVD player':
        setCheckDVDPlayer(!checked);
        break;
      case 'Entrada auxiliar':
        setCheckEntradaAuxiliar(!checked);
        break;
      case 'Entrada USB':
        setCheckEntradaUSB(!checked);
        break;
      case 'Leitor de MP3':
        setCheckLeitorMP3(!checked);
        break;
      case 'Capota':
        setCheckCapota(!checked);
        break;
      case 'Limpador traseiro':
        setCheckLimpadorTraseiro(!checked);
        break;
      case 'Pára-choques na cor do veículo':
        setCheckParachoques(!checked);
        break;
      case 'Protetor de caçamba':
        setCheckProtetorCacamba(!checked);
        break;
      case 'Rodas de liga leve':
        setCheckRodaLiga(!checked);
        break;
      default:
        break;
    }
  };

  const onPressPicture = (e) => {
    setPhotos([...photos, e]);
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
                  title1="Ar Condicionado"
                  title2="Banco com regulagem de altura"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Bancos elétricos"
                  title2="Bancos em couro"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Computador de bordo"
                  title2="Controle de retrovisores elétricos"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Direção Hidráulica"
                  title2="Encosto traseiro"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Faróis com regulação automática"
                  title2="GPS"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Piloto automático"
                  title2="Vidros elétricos"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Volante com regulagem de altura"
                  title2="Alarme"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Airbag motorista"
                  title2="Airbag passageiro"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Blindado"
                  title2="Desembaçador traseiro"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Encosto de cabeça traseiro"
                  title2="Faróis de neblina dianteiros"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Faróis de neblina traseiros"
                  title2="Faróis de xenon"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Fechamento automático dos vidros"
                  title2="Freios ABS"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Sensor de chuva"
                  title2="Sensor de estacionamento"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Sensor de luz"
                  title2="Terceira luz de freio led"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Teto solar elétrico retrátil"
                  title2="Trava elétrica central"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="AM/FM"
                  title2="Bluetooth"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="CD player"
                  title2="Controle remoto para rádio no volante"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="DVD player"
                  title2="Entrada auxiliar"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Entrada USB"
                  title2="Leitor de MP3"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Capota"
                  title2="Limpador traseiro"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Pára-choques na cor do veículo"
                  title2="Protetor de caçamba"
                />
                <CheckBox
                  onPress={(e) => onPressCheck(e)}
                  title1="Rodas de liga leve"
                />
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Camera onPress={(e) => onPressPicture(e)} />
                <Attachment />
              </View>
              {photos.length == 0 ? null : <ImagesPreview data={photos} />}
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
  },
});

export default Sell;
