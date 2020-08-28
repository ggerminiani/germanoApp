import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { getCars } from '../../services/Cars';

import Colors from '../../styles/Colors/';

const Details = ({ route, navigation }) => {
  const { idCar } = route.params;
  const [car, setCar] = useState(null);
  const [elementcar, setelEmentCar] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await getCars({ type: 'get_car', id: idCar });
      console.log(data);
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCar(data);
      }
    }

    async function loadCar() {
      let confort = [];
      let security = [];
      let multimedia = [];
      let external = [];
      let others = [];

      //Confort
      if (car.ads.ar_condicionado == '1') {
        confort.push('Ar Condicionado');
      }
      if (car.ads.regulagem_altura == '1') {
        confort.push('Banco com Regulagem de Altura');
      }
      if (car.ads.bancos_eletricos == '1') {
        confort.push('Bancos Elétricos');
      }
      if (car.ads.bancos_couro == '1') {
        confort.push('Bancos em Couro');
      }
      if (car.ads.computador_bordo == '1') {
        confort.push('Computador de Bordo');
      }
      if (car.ads.retrovisores_eletricos == '1') {
        confort.push('Controle de Retrovisores Elétricos');
      }
      if (car.ads.direcao_hidraulica == '1') {
        confort.push('Direção Hidráulica');
      }
      if (car.ads.encosto_traseiro == '1') {
        confort.push('Encosto Traseiro');
      }
      if (car.ads.farois_automatica == '1') {
        confort.push('Faróis com Regulagem Automática');
      }
      if (car.ads.gps == '1') {
        confort.push('GPS');
      }
      if (car.ads.piloto_automatico == '1') {
        confort.push('Piloto Automático');
      }
      if (car.ads.volante_regulagem == '1') {
        confort.push('Volante com Regulagem de Altura');
      }

      //Security
      if (car.ads.airbag_motorista == '1') {
        security.push('Airbag do Motorista');
      }
      if (car.ads.airbag_passageiro == '1') {
        security.push('Airbag do Passageiro');
      }
      if (car.ads.alarme == '1') {
        security.push('Alarme');
      }
      if (car.ads.blindado == '1') {
        security.push('Blindado');
      }
      if (car.ads.desembacador_traseiro == '1') {
        security.push('Desembaçador Traseiro');
      }
      if (car.ads.encosto_cabeca_traseiro == '1') {
        security.push('Encosto de Cabeça Traseiro');
      }
      if (car.ads.neblina_dianteiros == '1') {
        security.push('Faróis de Neblina Dianteiros');
      }
      if (car.ads.neblina_traseiros == '1') {
        security.push('Faróis de Neblina Traseiros');
      }
      if (car.ads.xenon == '1') {
        security.push('Faróis Xenon');
      }
      if (car.ads.fechamento_automatico_vidros == '1') {
        security.push('Fechamento Automático dos Vidros');
      }
      if (car.ads.freios_abs == '1') {
        security.push('Freios ABS');
      }
      if (car.ads.liga_leve == '1') {
        security.push('Rodas de Liga Leve');
      }
      if (car.ads.sensor_chuva == '1') {
        security.push('Sensor de Chuva');
      }
      if (car.ads.sensor_estacionamento == '1') {
        security.push('Sensor de Estacionamento');
      }
      if (car.ads.sensor_luz == '1') {
        security.push('Sensor de Luz');
      }
      if (car.ads.terceira_luz == '1') {
        security.push('Terceira Luz de Freio LED');
      }
      if (car.ads.teto_solar == '1') {
        security.push('Teto Solar');
      }
      if (car.ads.trava_eletrica == '1') {
        security.push('Travas Elétricas');
      }
      if (car.ads.vidros_eletricos == '1') {
        security.push('Vidros Elétricos');
      }

      //Multimedia
      if (car.ads.am_fm == '1') {
        multimedia.push('AM/FM');
      }
      if (car.ads.bluetooth == '1') {
        multimedia.push('Bluetooth');
      }
      if (car.ads.cd_player == '1') {
        multimedia.push('CD Player');
      }
      if (car.ads.controle_remoto_volante == '1') {
        multimedia.push('Controle Remoto no Volante');
      }
      if (car.ads.dvd_player == '1') {
        multimedia.push('DVD Player');
      }
      if (car.ads.entrada_auxiliar == '1') {
        multimedia.push('Entrada Auxiliar');
      }
      if (car.ads.entrada_usb == '1') {
        multimedia.push('Entrada USB');
      }
      if (car.ads.leitor_mp3 == '1') {
        multimedia.push('Som com Leitor MP3');
      }

      //External
      if (car.ads.capota == '1') {
        external.push('Capota Marítima');
      }
      if (car.ads.limpador_traseiro == '1') {
        external.push('Limpador Traseiro');
      }
      if (car.ads.para_choques == '1') {
        external.push('Pára-Choque na Cor do Veículo');
      }
      if (car.ads.protetor_cacamba == '1') {
        external.push('Protetor de Caçamba');
      }

      //Others
      if (car.ads.aceita_troca == '1') {
        others.push('Aceita Troca');
      }
      if (car.ads.ipva_pago == '1') {
        others.push('IPVA Pago');
      }
      if (car.ads.laudo_cautelar == '1') {
        others.push('Laudo Cautelar');
      }
      if (car.ads.preco_negociavel == '1') {
        others.push('Preço Negociável');
      }
      if (car.ads.unico_dono == '1') {
        others.push('Único Dono');
      }
      if (car.ads.consignado == '1') {
        others.push('Veículo Consignado');
      }

      console.log(confort);
      console.log(security);
      console.log(multimedia);
      console.log(external);
      console.log(others);
    }

    if (car === null) {
      loadData();
    }
    if (car !== null) {
      loadCar();
    }
  }, [car]);

  return (
    <View style={car == null ? styles.containerEmpty : styles.container}>
      {car == null ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <Text>{car.ads.marca}</Text>
        </View>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    //marginTop: 20,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    //marginTop: 20,
    paddingTop: 20,
  },
});
