import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { getCars } from '../../services/Cars';

import Logo from '../../components/logo';
import SliderView from '../../components/sliderView';
import QuartetView from '../../components/quartetView';
import CommonAds from '../../components/commonAds';

import Colors from '../../styles/Colors';
import { Logs } from 'expo';

const Main = ({ navigation }) => {
  const [news, setNews] = useState(null);
  const [spotlights, setSpotlights] = useState(null);
  const [commons, setCommons] = useState(null);

  useEffect(() => {
    async function loadNews() {
      const data = await getCars({ type: 'get_news' });
      if (data !== undefined && data !== null && data.status == 'successful') {
        setNews(data);
      }
    }

    async function loadSpotlights() {
      const data = await getCars({ type: 'get_spotlights' });
      if (data !== undefined && data !== null && data.status == 'successful') {
        setSpotlights(data);
      }
    }

    async function loadCommons() {
      let exceptions = [];

      if (news !== null) {
        news.ads.forEach((value) => {
          exceptions.push(value.idcar);
        });
      }

      if (spotlights !== null) {
        spotlights.ads.forEach((value) => {
          exceptions.push(value.idcar);
        });
      }

      const data = await getCars({ type: 'get_with_excep', exceptions });
      if (data !== undefined && data !== null && data.status == 'successful') {
        setCommons(data);
      }
    }

    console.log('in Effects MAIN');
    if (news === null) {
      loadNews();
    }
    if (spotlights === null) {
      loadSpotlights();
    }
    if (commons === null) {
      loadCommons();
    }
  }, [news, spotlights, commons]);

  const onPressNews = (e) => {
    navigation.navigate('Detalhes', { idCar: e });
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

        {spotlights !== null ? (
          <QuartetView
            name="Super Destaques"
            data={spotlights.ads}
            onPress={(e) => onPressNews(e)}
          />
        ) : null}

        {commons !== null ? (
          <CommonAds
            name="Veja Também"
            data={commons.ads}
            onPress={(e) => onPressNews(e)}
          />
        ) : null}
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
