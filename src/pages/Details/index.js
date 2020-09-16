import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { getCars } from '../../services/Cars';

import { urlPhotos } from '../../services/Cars';
import Colors from '../../styles/Colors/';

import numeral from '../../vendros/numeral';

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
  const [ready, setReady] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadData() {
      const data = await getCars({ type: 'get_car', id: idCar });
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCar(data);
      }
    }

    async function loadCar() {
      setConfort([]);
      setSecurity([]);
      setMultimedia([]);
      setExternal([]);
      setOthers([]);

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
      setReady(true);
    }

    if (car === null) {
      loadData();
    }
    if (car !== null) {
      loadCar();
    }
  }, [car]);

  const PhotosItem = () => {
    const photos = car.ads?.photo.length !== null ? car.ads.photo : null;
    if (photos.length > 0) {
      return photos.map(({ idpic, thumbnail }) => {
        return (
          <TouchableOpacity key={idpic} onPress={() => onPressPhoto()}>
            <Image
              defaultSource={require('../../assets/spinner.gif')}
              source={{
                uri: urlPhotos + thumbnail.replace(/thumb_/g, ''),
              }}
              resizeMethod="resize"
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
        );
      });
    } else {
      return (
        <Image
          defaultSource={require('../../assets/no_photo.png')}
          source={require('../../assets/no_photo.png')}
          resizeMethod="resize"
          resizeMode="contain"
          style={styles.image}
        />
      );
    }
  };

  const ElementPhotos = () => {
    return (
      <View>
        <ScrollView
          style={styles.slider}
          horizontal={true}
          pagingEnabled={true}
        >
          <PhotosItem />
        </ScrollView>

        <View style={styles.carContainer}>
          <Text
            style={styles.carText}
          >{`${car.ads.marca} ${car.ads.modelo} ${car.ads.versao}`}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            {numeral(parseFloat(car.ads.valor)).format('$ 0,0.00')}
          </Text>
        </View>
      </View>
    );
  };

  const ElementPhotosModal = () => {
    const menuContext = {
      saveToLocal: 'Salvar no albúm de fotos.',
      cancel: 'Cancelar',
    };
    let images = [];
    const photos = car.ads?.photo.length !== null ? car.ads.photo : null;

    if (photos.length > 0) {
      photos.map(({ thumbnail }) => {
        images.push({ url: urlPhotos + thumbnail.replace(/thumb_/g, '') });
      });
    } else {
      images.push({
        url: '',
        props: {
          source: require('../../assets/no_photo.png'),
        },
      });
    }

    return (
      <ImageViewer
        enableSwipeDown={true}
        onCancel={() => setModal(false)}
        imageUrls={images}
        loadingRender={() => <ActivityIndicator size="large" />}
        menuContext={menuContext}
        pageAnimateTime={10}
      />
    );
  };

  const ElementDetails = () => {
    return (
      <View>
        <Text style={styles.title}>Detalhes</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsRow}>
            <View style={styles.detailsItem}>
              <Icon
                name="car-estate"
                color="white"
                size={30}
                style={styles.detailsIcon}
              />
              <Text style={styles.detailsText}>
                {car.ads.carroceria != ''
                  ? car.ads.carroceria.toUpperCase()
                  : '-'}
              </Text>
            </View>

            <View style={styles.detailsItem}>
              <Icon
                name="calendar-month"
                color="white"
                size={30}
                style={styles.detailsIcon}
              />
              <Text
                style={styles.detailsText}
              >{`${car.ads.ano_fabricacao}/${car.ads.ano_modelo}`}</Text>
            </View>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailsItem}>
              <Icon
                name="car-shift-pattern"
                color="white"
                size={30}
                style={styles.detailsIcon}
              />
              <Text style={styles.detailsText}>
                {car.ads.cambio != '' ? car.ads.cambio.toUpperCase() : '-'}
              </Text>
            </View>

            <View style={styles.detailsItem}>
              <Icon
                name="counter"
                color="white"
                size={30}
                style={styles.detailsIcon}
              />
              <Text style={styles.detailsText}>
                {`${numeral(parseFloat(car.ads.km)).format('0,0')} KM`}
              </Text>
            </View>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailsItem}>
              <Icon
                name="palette"
                color="white"
                size={30}
                style={styles.detailsIcon}
              />
              <Text style={styles.detailsText}>{car.ads.cor}</Text>
            </View>

            <View style={styles.detailsItem}>
              <Icon
                name="gas-station"
                color="white"
                size={30}
                style={styles.detailsIcon}
              />
              <Text style={styles.detailsText}>{car.ads.combustivel}</Text>
            </View>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailsItem}>
              <Icon
                name="car-door"
                color="white"
                size={30}
                style={styles.detailsIcon}
              />
              <Text
                style={styles.detailsText}
              >{`${car.ads.portas} PORTAS`}</Text>
            </View>

            <View style={styles.detailsItem}>
              <Icon
                name="numeric"
                color="white"
                size={30}
                style={styles.detailsIcon}
              />
              <Text style={styles.detailsText}>{`FINAL ${car.ads.placa
                .substr(car.ads.placa.length - 1, 1)
                .toUpperCase()}`}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const ElementConfort = () => {
    if (confort.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Conforto</Text>
          <View style={styles.detailsContainer}>
            {confort.map((value, index) => {
              return (
                <View key={index} style={styles.detailsItem}>
                  <Icon
                    name="check"
                    color="white"
                    size={30}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>{value.toUpperCase()}</Text>
                </View>
              );
            })}
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const ElementSecurity = () => {
    if (security.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Segurança</Text>
          <View style={styles.detailsContainer}>
            {security.map((value, index) => {
              return (
                <View key={index} style={styles.detailsItem}>
                  <Icon
                    name="check"
                    color="white"
                    size={30}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>{value.toUpperCase()}</Text>
                </View>
              );
            })}
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const ElementMultimedia = () => {
    if (multimedia.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Multimídia</Text>
          <View style={styles.detailsContainer}>
            {multimedia.map((value, index) => {
              return (
                <View key={index} style={styles.detailsItem}>
                  <Icon
                    name="check"
                    color="white"
                    size={30}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>{value.toUpperCase()}</Text>
                </View>
              );
            })}
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const ElementExternal = () => {
    if (external.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Externo</Text>
          <View style={styles.detailsContainer}>
            {external.map((value, index) => {
              return (
                <View key={index} style={styles.detailsItem}>
                  <Icon
                    name="check"
                    color="white"
                    size={30}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>{value.toUpperCase()}</Text>
                </View>
              );
            })}
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const ElementOthers = () => {
    if (others.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Outros</Text>
          <View style={styles.detailsContainer}>
            {others.map((value, index) => {
              return (
                <View key={index} style={styles.detailsItem}>
                  <Icon
                    name="check"
                    color="white"
                    size={30}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>{value.toUpperCase()}</Text>
                </View>
              );
            })}
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const onPressPhoto = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  return (
    <View style={ready == false ? styles.containerEmpty : styles.container}>
      {ready == false ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <ElementPhotos />
            <ElementDetails />
            <ElementConfort />
            <ElementSecurity />
            <ElementMultimedia />
            <ElementExternal />
            <ElementOthers />
          </ScrollView>
          <Modal animationType="slide" visible={modal}>
            <View style={styles.containerModal}>
              <ElementPhotosModal />
            </View>
          </Modal>
        </View>
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
    marginTop: 10,
    marginHorizontal: 10,
    width: screenWidth - 20,
    height: 250,
    backgroundColor: Colors.dark_bckgrd,
    borderWidth: 2,
    borderColor: Colors.border,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  containerModal: {
    backgroundColor: Colors.dark_bckgrd,
    width: '100%',
    height: '100%',
  },
  sliderModal: {
    marginHorizontal: 10,
    width: screenWidth - 20,
    height: '100%',
  },
  image: {
    width: screenWidth - 20,
    height: '100%',
    borderColor: Colors.border,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  carContainer: {
    marginHorizontal: 10,
    backgroundColor: Colors.dark_bckgrd,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: Colors.border,
  },
  carText: {
    padding: 5,
    color: Colors.white,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  priceContainer: {
    marginHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Colors.dolar,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: Colors.border,
  },
  priceText: {
    padding: 5,
    color: Colors.white,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  title: {
    marginLeft: 15,
    marginTop: 15,
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsContainer: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.dark_bckgrd,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  detailsRow: {
    flex: 1,
    flexDirection: 'row',
  },
  detailsItem: {
    flex: 1,
    flexDirection: 'row',
  },
  detailsText: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 12.5,
    color: Colors.white,
    marginLeft: 6,
    marginTop: 8,
  },
  detailsIcon: {
    marginLeft: 5,
  },
});

export default Details;
