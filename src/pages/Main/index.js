import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { getCars } from '../../services/Cars';

import Logo from '../../components/logo';
import SliderView from '../../components/sliderView';
import QuartetView from '../../components/quartetView';

import Colors from '../../styles/Colors';

const Main = () => {
  const [news, setNews] = useState(null);
  const [spotlights, setSpotlights] = useState(null);

  useEffect(() => {
    async function loadNews() {
      const data = await getCars({ type: 'get_news' });
      if (data.status == 'successful') {
        setNews(data);
      }
    }
    async function loadSpotlights() {
      const data = await getCars({ type: 'get_spotlights' });
      console.log(data);
      if (data.status == 'successful') {
        setSpotlights(data);
      }
    }

    loadNews();
    loadSpotlights();
  }, []);

  const destaques = [
    {
      carro: 'Ford Fiesta 1.6 Class',
      price: 'R$ 23.980,00',
      foto:
        'https://s2.glbimg.com/aOOTTCU6XMA2RKVKUXBIBBfxl_A=/512x320/smart/e.glbimg.com/og/ed/f/original/2013/07/16/fiesta.jpg',
    },
    {
      carro: 'Nissan Kicks 20',
      price: 'R$ 92.150,00',
      foto:
        'https://www.nissan-cdn.net/content/dam/Nissan/br/vehicles/KicksMY20/Overview/KICKS_MY19_VLP_3000x2000.jpg.ximg.l_full_m.smart.jpg',
    },
    {
      carro: 'Chevrolet Equinox Midnight',
      price: 'R$ 158.980,00',
      foto:
        'https://s2.glbimg.com/zLknStrX7ziLvM0tAjJBIIe0QDQ=/e.glbimg.com/og/ed/f/original/2020/02/28/eqx_.jpg',
    },
  ];
  const others = [
    {
      carro: 'Chevrolet Tracker',
      price: 'R$ 76.980,00',
      foto:
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202005/20200514/chevrolet-tracker-1.4-16v-turbo-flex-premier-automatico-wmimagem15101013113.jpg?s=fill&w=1920&h=1440&q=75',
    },
    {
      carro: 'Jaguar F-Pace',
      price: 'R$ 259.900,00',
      foto:
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202007/20200721/jaguar-fpace-2.0-16v-turbo-diesel-prestige-awd-4p-automatico-wmimagem09465199725.jpg?s=fill&w=1920&h=1440&q=75',
    },
    {
      carro: 'Mercedes-Benz GLE 43 AMG',
      price: 'R$ 409.980,00',
      foto:
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202007/20200720/mercedesbenz-gle-43-amg-3.0-v6-gasolina-coupe-4matic-9gtronic-wmimagem09374376767.jpg?s=fill&w=1920&h=1440&q=75',
    },
    {
      carro: 'Land Rover Range Rover Evoque',
      price: 'R$ 87.000,00',
      foto:
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201910/20191008/land-rover-range-rover-evoque-2.0-dynamic-coupe-4wd-16v-gasolina-3p-automatico-wmimagem21173681526.jpg?s=fill&w=1920&h=1440&q=75',
    },
    {
      carro: 'Mini Cooper',
      price: 'R$ 58.000,00',
      foto:
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201905/20190501/mini-cooper-1.6-s-16v-turbo-gasolina-2p-automatico-wmimagem13214388187.jpg?s=fill&w=1920&h=1440&q=75',
    },
    {
      carro: 'Hyundai HB20',
      price: 'R$ 409.980,00',
      foto:
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201912/20191215/hyundai-hb20s-1.6-comfort-plus-16v-flex-4p-manual-wmimagem1219135361.jpg?s=fill&w=1920&h=1440&q=75',
    },
  ];

  const onPressNews = (e) => {
    console.log('pressed');
    console.log(e);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Logo />

        {news !== null ? (
          <SliderView
            name="Novidades"
            data={news}
            onPress={(e) => onPressNews(e)}
          />
        ) : null}

        <QuartetView name="Super Destaques" data={destaques} />
        {/* <SliderView name="Super Destaques" data={destaques} />

        <SliderView name="Anúncios" data={others} /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    //marginTop: 20,
    paddingTop: 20,
  },
});

export default Main;
