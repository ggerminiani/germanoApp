import Slider from '@react-native-community/slider';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Attachment from '../../components/attachment';
import Button from '../../components/buttonAction';
import Camera from '../../components/cameraButton';
import CheckBox from '../../components/checkBox';
import ImagesPreview from '../../components/imagesPreview';
import Logo from '../../components/logo';
import SelectModal from '../../components/modalSelect';
import { getFIPE } from '../../services/Cars';
import { sendFiles } from '../../services/Sell';
import { getUUID } from '../../services/UUID';
import Colors from '../../styles/Colors';
import numeral from '../../vendros/numeral';

const Sell = ({ navigation }) => {
  const refKm = useRef(null);
  const refName = useRef(null);
  const refPhone = useRef(null);
  const refEmail = useRef(null);
  const refObs = useRef(null);

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
  const [obs, setObs] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [checkArCondicionado, setCheckArCondicionado] = useState(false);
  const [checkBancoRegulagemAltura, setCheckBancoRegulagemAltura] = useState(
    false
  );
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
  const [checkBlindado, setCheckBlindado] = useState(false);
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
  const [checkFreiosABS, setCheckFreiosABS] = useState(false);
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
  }, [brand, model, year, color, photos]);

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

    switch (title) {
      case 'Ar Condicionado':
        setCheckArCondicionado(!checkArCondicionado);
        break;
      case 'Banco com regulagem de altura':
        setCheckBancoRegulagemAltura(!checkBancoRegulagemAltura);
        break;
      case 'Bancos elétricos':
        setCheckBancoEletrico(!checkBancoEletrico);
        break;
      case 'Bancos em couro':
        setCheckBancoCouro(!checkBancoCouro);
        break;
      case 'Computador de bordo':
        setCheckComputadorBordo(!checkComputadorBordo);
        break;
      case 'Controle de retrovisores elétricos':
        setCheckRetrovisorEletrico(!checkRetrovisorEletrico);
        break;
      case 'Direção Hidráulica':
        setCheckDirecaoHidraulica(!checkDirecaoHidraulica);
        break;
      case 'Encosto traseiro':
        setCheckEncostoTraseiro(!checkEncostoTraseiro);
        break;
      case 'Faróis com regulação automática':
        setCheckFaroisRegulagem(!checkFaroisRegulagem);
        break;
      case 'GPS':
        setCheckGPS(!checkGPS);
        break;
      case 'Piloto automático':
        setCheckPilotoAutomatico(!checkPilotoAutomatico);
        break;
      case 'Vidros elétricos':
        setCheckVidrosEletricos(!checkVidrosEletricos);
        break;
      case 'Volante com regulagem de altura':
        setCheckVoltanteAltura(!checkVoltanteAltura);
        break;
      case 'Alarme':
        setCheckAlarme(!checkAlarme);
        break;
      case 'Airbag motorista':
        setCheckAirbagMotorista(!checkAirbagMotorista);
        break;
      case 'Airbag passageiro':
        setCheckAirbagPassageiro(!checkAirbagPassageiro);
        break;
      case 'Blindado':
        setCheckBlindado(!checkBlindado);
        break;
      case 'Desembaçador traseiro':
        setCheckDesembacadorTraseiro(!checkDesembacadorTraseiro);
        break;
      case 'Encosto de cabeça traseiro':
        setCheckEncostoCabecaTraseiro(!checkEncostoCabecaTraseiro);
        break;
      case 'Faróis de neblina dianteiros':
        setCheckFaroisNeblinaDianteiro(!checkFaroisNeblinaDianteiro);
        break;
      case 'Faróis de neblina traseiros':
        setCheckFaroisNeblinaTraseiro(!checkFaroisNeblinaTraseiro);
        break;
      case 'Faróis de xenon':
        setCheckFaroisXenon(!checkFaroisXenon);
        break;
      case 'Fechamento automático dos vidros':
        setCheckFechamentoVidros(!checkFechamentoVidros);
        break;
      case 'Freios ABS':
        setCheckFreiosABS(!checkFreiosABS);
        break;
      case 'Sensor de chuva':
        setCheckSensorChuva(!checkSensorChuva);
        break;
      case 'Sensor de estacionamento':
        setCheckSensorEstacionamento(!checkSensorEstacionamento);
        break;
      case 'Sensor de luz':
        setCheckSensorLuz(!checkSensorLuz);
        break;
      case 'Terceira luz de freio led':
        setCheckTerceiraLuzFreio(!checkTerceiraLuzFreio);
        break;
      case 'Teto solar elétrico retrátil':
        setCheckTetoSolar(!checkTetoSolar);
        break;
      case 'Trava elétrica central':
        setCheckTravaEletrica(!checkTravaEletrica);
        break;
      case 'AM/FM':
        setCheckAMFM(!checkAMFM);
        break;
      case 'Bluetooth':
        setCheckBluetooth(!checkBluetooth);
        break;
      case 'CD player':
        setCheckCDPlayer(!checkCDPlayer);
        break;
      case 'Controle remoto para rádio no volante':
        setCheckRadioVolante(!checkRadioVolante);
        break;
      case 'DVD player':
        setCheckDVDPlayer(!checkDVDPlayer);
        break;
      case 'Entrada auxiliar':
        setCheckEntradaAuxiliar(!checkEntradaAuxiliar);
        break;
      case 'Entrada USB':
        setCheckEntradaUSB(!checkEntradaUSB);
        break;
      case 'Leitor de MP3':
        setCheckLeitorMP3(!checkLeitorMP3);
        break;
      case 'Capota':
        setCheckCapota(!checkCapota);
        break;
      case 'Limpador traseiro':
        setCheckLimpadorTraseiro(!checkLimpadorTraseiro);
        break;
      case 'Pára-choques na cor do veículo':
        setCheckParachoques(!checkParachoques);
        break;
      case 'Protetor de caçamba':
        setCheckProtetorCacamba(!checkProtetorCacamba);
        break;
      case 'Rodas de liga leve':
        setCheckRodaLiga(!checkRodaLiga);
        break;
    }
  };

  const onPressPicture = (e) => {
    setPhotos([...photos, e]);
  };

  const onPressItem = (e) => {
    setPhotos(photos.filter((item) => item.uri !== e));
  };

  const onPressAttachment = (e) => {
    if (!e.cancelled) {
      setPhotos([...photos, e]);
    }
  };

  const onPressSend = async () => {
    if (name.trim() === '') {
      Alert.alert(
        'Formulário Incompleto!',
        'Para continuar, preencha o seu nome.'
      );
      return;
    }
    if (phone.trim() === '') {
      Alert.alert(
        'Formulário Incompleto!',
        'Para continuar, preencha o seu telefone.'
      );
      return;
    }
    if (email.trim() === '') {
      Alert.alert(
        'Formulário Incompleto!',
        'Para continuar, preencha o seu e-mail.'
      );
      return;
    }

    let uploadData = new FormData();
    let attachments = '';
    var re = /(?:\.([^.]+))?$/;

    try {
      photos.forEach((photo, index) => {
        var ext = re.exec(photo.uri);
        const file = getUUID() + ext[0];

        if (attachments == '') {
          attachments = file;
        } else {
          attachments += ';' + file;
        }

        uploadData.append('images[]', {
          uri:
            Platform.OS === 'android'
              ? photo.uri
              : photo.uri.replace('file://', ''),
          type: 'image/' + ext[1],
          name: file,
        });
      });

      const data = {
        name,
        phone,
        email,
        brand,
        model,
        year,
        color,
        km,
        priceData,
        obs,
        optional: {
          checkArCondicionado,
          checkBancoRegulagemAltura,
          checkBancoEletrico,
          checkBancoCouro,
          checkEncostoTraseiro,
          checkFaroisRegulagem,
          checkVoltanteAltura,
          checkAirbagMotorista,
          checkDesembacadorTraseiro,
          checkEncostoCabecaTraseiro,
          checkFechamentoVidros,
          checkFreiosABS,
          checkTerceiraLuzFreio,
          checkTetoSolar,
          checkCDPlayer,
          checkRadioVolante,
          checkLeitorMP3,
          checkCapota,
          checkFaroisNeblinaDianteiro,
          checkFaroisNeblinaTraseiro,
          checkFaroisXenon,
          checkSensorChuva,
          checkSensorEstacionamento,
          checkSensorLuz,
          checkTravaEletrica,
          checkAMFM,
          checkBluetooth,
          checkDVDPlayer,
          checkEntradaAuxiliar,
          checkEntradaUSB,
          checkLimpadorTraseiro,
          checkParachoques,
          checkProtetorCacamba,
          checkRodaLiga,
          checkComputadorBordo,
          checkRetrovisorEletrico,
          checkGPS,
          checkDirecaoHidraulica,
          checkPilotoAutomatico,
          checkVidrosEletricos,
          checkAirbagPassageiro,
          checkAlarme,
          checkBlindado,
        },
      };

      uploadData.append('data', JSON.stringify(data));
      const saveQuote = await sendFiles(uploadData);

      if (saveQuote.status == 'successful') {
        Alert.alert('Dados enviados!', 'Agora aguarde retornarmos o contato.');
        navigation.navigate('Home', {
          screen: 'Main',
        });
      } else {
        Alert.alert(
          'Oops!',
          'Tivemos algum problem em enviar seus dados... tente novamente!'
        );
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={[styles.container, { paddingTop: 0 }]}
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
                <Attachment onPress={(e) => onPressAttachment(e)} />
              </View>
              {photos.length == 0 ? null : (
                <ImagesPreview data={photos} onPress={(e) => onPressItem(e)} />
              )}

              <View style={styles.textContainer}>
                <TextInput
                  style={styles.textInfo}
                  ref={refName}
                  placeholder="Nome"
                  placeholderTextColor={Colors.inactive}
                  onChangeText={(e) => setName(e)}
                  returnKeyType="next"
                  keyboardType="ascii-capable"
                  maxLength={50}
                  //onSubmitEditing={(e) => refPhone.current.focus()}
                />
              </View>

              <View style={styles.textContainer}>
                <TextInputMask
                  style={styles.textInfo}
                  //ref={refPhone}
                  onChangeText={(e) => setPhone(e)}
                  value={phone}
                  placeholder="Telefone com DDD"
                  placeholderTextColor={Colors.inactive}
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                />
              </View>

              <View style={styles.textContainer}>
                <TextInput
                  style={styles.textInfo}
                  ref={refEmail}
                  placeholder="E-mail"
                  placeholderTextColor={Colors.inactive}
                  onChangeText={(e) => setEmail(e)}
                  returnKeyType="next"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCompleteType="email"
                  onSubmitEditing={(e) => refObs.current.focus()}
                  maxLength={255}
                />
              </View>

              <View style={styles.textContainer}>
                <TextInput
                  style={styles.textInfo}
                  ref={refObs}
                  placeholder="Informe se há alguma observação..."
                  placeholderTextColor={Colors.inactive}
                  onChangeText={(e) => setObs(e)}
                />
              </View>

              <Button text="Enviar Solicitação" onPress={onPressSend} />
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
    paddingTop: 25,
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
  textContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.dark_bckgrd,
    marginHorizontal: 15,
    marginVertical: 5,
    marginTop: 10,
    padding: 10,
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
  textInfo: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default Sell;
