import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

import { getCars } from '../../services/Cars';

import { urlPhotos } from '../../services/Cars';
import Colors from '../../styles/Colors/';
import { TouchableOpacity } from 'react-native-gesture-handler';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const Details = ({ route, navigation }) => {
  const { idCar } = route.params;
  const [car, setCar] = useState(null);
  const [confort, setConfort] = useState([]);
  const [security, setSecurity] = useState([]);
  const [multimedia, setMultimedia] = useState([]);
  const [external, setExternal] = useState([]);
  const [others, setOthers] = useState([]);
  const [element, setElement] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await getCars({ type: 'get_car', id: idCar });
      console.log(data);
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCar(data);
      }
    }

    async function loadCar() {
      //Confort
      if (car.ads.ar_condicionado == '1') {
        setConfort((confort) => [...confort, 'Ar Condicionado']);
      }
      if (car.ads.regulagem_altura == '1') {
        setConfort((confort) => [...confort, 'Banco com Regulagem de Altura']);
      }
      if (car.ads.bancos_eletricos == '1') {
        setConfort((confort) => [...confort, 'Bancos Elétricos']);
      }
      if (car.ads.bancos_couro == '1') {
        setConfort((confort) => [...confort, 'Bancos em Couro']);
      }
      if (car.ads.computador_bordo == '1') {
        setConfort((confort) => [...confort, 'Computador de Bordo']);
      }
      if (car.ads.retrovisores_eletricos == '1') {
        setConfort((confort) => [
          ...confort,
          'Controle de Retrovisores Elétricos',
        ]);
      }
      if (car.ads.direcao_hidraulica == '1') {
        setConfort((confort) => [...confort, 'Direção Hidráulica']);
      }
      if (car.ads.encosto_traseiro == '1') {
        setConfort((confort) => [...confort, 'Encosto Traseiro']);
      }
      if (car.ads.farois_automatica == '1') {
        setConfort((confort) => [
          ...confort,
          'Faróis com Regulagem Automática',
        ]);
      }
      if (car.ads.gps == '1') {
        setConfort((confort) => [...confort, 'GPS']);
      }
      if (car.ads.piloto_automatico == '1') {
        setConfort((confort) => [...confort, 'Piloto Automático']);
      }
      if (car.ads.volante_regulagem == '1') {
        setConfort((confort) => [
          ...confort,
          'Volante com Regulagem de Altura',
        ]);
      }

      //Security
      if (car.ads.airbag_motorista == '1') {
        setSecurity((security) => [...security, 'Airbag do Motorista']);
      }
      if (car.ads.airbag_passageiro == '1') {
        setSecurity((security) => [...security, 'Airbag do Passageiro']);
      }
      if (car.ads.alarme == '1') {
        setSecurity((security) => [...security, 'Alarme']);
      }
      if (car.ads.blindado == '1') {
        setSecurity((security) => [...security, 'Blindado']);
      }
      if (car.ads.desembacador_traseiro == '1') {
        setSecurity((security) => [...security, 'Desembaçador Traseiro']);
      }
      if (car.ads.encosto_cabeca_traseiro == '1') {
        setSecurity((security) => [...security, 'Encosto de Cabeça Traseiro']);
      }
      if (car.ads.neblina_dianteiros == '1') {
        setSecurity((security) => [
          ...security,
          'Faróis de Neblina Dianteiros',
        ]);
      }
      if (car.ads.neblina_traseiros == '1') {
        setSecurity((security) => [...security, 'Faróis de Neblina Traseiros']);
      }
      if (car.ads.fechamento_automatico_vidros == '1') {
        setSecurity((security) => [
          ...security,
          'Fechamento Automático dos Vidros',
        ]);
      }
      if (car.ads.freios_abs == '1') {
        setSecurity((security) => [...security, 'Freios ABS']);
      }
      if (car.ads.sensor_chuva == '1') {
        setSecurity((security) => [...security, 'Sensor de Chuva']);
      }
      if (car.ads.sensor_estacionamento == '1') {
        setSecurity((security) => [...security, 'Sensor de Estacionamento']);
      }
      if (car.ads.sensor_luz == '1') {
        setSecurity((security) => [...security, 'Sensor de Luz']);
      }
      if (car.ads.terceira_luz == '1') {
        setSecurity((security) => [...security, 'Terceira Luz de Freio LED']);
      }
      if (car.ads.teto_solar == '1') {
        setSecurity((security) => [...security, 'Teto Solar']);
      }
      if (car.ads.trava_eletrica == '1') {
        setSecurity((security) => [...security, 'Travas Elétricas']);
      }
      if (car.ads.vidros_eletricos == '1') {
        setSecurity((security) => [...security, 'Vidros Elétricos']);
      }

      //Multimedia
      if (car.ads.am_fm == '1') {
        setMultimedia((multimedia) => [...multimedia, 'AM/FM']);
      }
      if (car.ads.bluetooth == '1') {
        setMultimedia((multimedia) => [...multimedia, 'Bluetooth']);
      }
      if (car.ads.cd_player == '1') {
        setMultimedia((multimedia) => [...multimedia, 'CD Player']);
      }
      if (car.ads.controle_remoto_volante == '1') {
        setMultimedia((multimedia) => [
          ...multimedia,
          'Controle Remoto no Volante',
        ]);
      }
      if (car.ads.dvd_player == '1') {
        setMultimedia((multimedia) => [...multimedia, 'DVD Player']);
      }
      if (car.ads.entrada_auxiliar == '1') {
        setMultimedia((multimedia) => [...multimedia, 'Entrada Auxiliar']);
      }
      if (car.ads.entrada_usb == '1') {
        setMultimedia((multimedia) => [...multimedia, 'Entrada USB']);
      }
      if (car.ads.leitor_mp3 == '1') {
        setMultimedia((multimedia) => [...multimedia, 'Som com Leitor MP3']);
      }

      //External
      if (car.ads.capota == '1') {
        setExternal((extErnal) => [...extErnal, 'Capota Marítima']);
      }
      if (car.ads.xenon == '1') {
        setExternal((extErnal) => [...extErnal, 'Faróis Xenon']);
      }
      if (car.ads.limpador_traseiro == '1') {
        setExternal((extErnal) => [...extErnal, 'Limpador Traseiro']);
      }
      if (car.ads.para_choques == '1') {
        setExternal((extErnal) => [
          ...extErnal,
          'Pára-Choque na Cor do Veículo',
        ]);
      }
      if (car.ads.protetor_cacamba == '1') {
        setExternal((extErnal) => [...extErnal, 'Protetor de Caçamba']);
      }
      if (car.ads.liga_leve == '1') {
        setExternal((extErnal) => [...extErnal, 'Rodas de Liga Leve']);
      }

      //Others
      if (car.ads.aceita_troca == '1') {
        setOthers((others) => [...others, 'Aceita Troca']);
      }
      if (car.ads.ipva_pago == '1') {
        setOthers((others) => [...others, 'IPVA Pago']);
      }
      if (car.ads.laudo_cautelar == '1') {
        setOthers((others) => [...others, 'Laudo Cautelar']);
      }
      if (car.ads.preco_negociavel == '1') {
        setOthers((others) => [...others, 'Preço Negociável']);
      }
      if (car.ads.unico_dono == '1') {
        setOthers((others) => [...others, 'Único Dono']);
      }
      if (car.ads.consignado == '1') {
        setOthers((others) => [...others, 'Veículo Consignado']);
      }
    }

    async function loadElements() {
      setElement(Elements);
    }

    if (car === null) {
      loadData();
    }
    if (car !== null) {
      loadCar();
      loadElements();
    }
  }, [car]);

  const PhotosItem = () => {
    const photos = car.ads?.photo.length !== null ? car.ads.photo : null;
    return photos.map(({ idpic, thumbnail }) => {
      return (
        <Image
          key={idpic}
          source={{
            uri: urlPhotos + thumbnail.replace(/thumb_/g, ''),
          }}
          resizeMethod="resize"
          resizeMode="contain"
          style={styles.image}
        />
      );
    });
  };

  const onPressPhoto = () => {
    Alert.alert('clicado');
  };

  const Elements = () => {
    //Could be: const variable = <Element />
    return (
      <View>
        <TouchableOpacity onPress={onPressPhoto()}>
          <ScrollView
            style={styles.slider}
            horizontal={true}
            pagingEnabled={true}
          >
            <PhotosItem />
          </ScrollView>
        </TouchableOpacity>
        <Text>{`${car.ads.marca} ${car.ads.modelo} ${car.ads.versao}`}</Text>
      </View>
    );
  };

  return (
    <View style={element == null ? styles.containerEmpty : styles.container}>
      {car == null ? (
        <ActivityIndicator size="large" />
      ) : element == null ? (
        <ActivityIndicator size="large" />
      ) : (
        element
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.background,
  },
  containerImage: {
    flex: 1,
    backgroundColor: 'black',
  },
  slider: {
    margin: 10,
    width: screenWidth - 20,
    height: 250,
    backgroundColor: Colors.dark_bckgrd,

    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 10,
  },
  image: {
    width: screenWidth - 20,
    height: '100%',
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 10,
  },
});

export default Details;
