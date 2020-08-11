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
      console.log(data.ads.length);
      if (data.status == 'successful') {
        setSpotlights(data);
      }
    }

    loadNews();
    loadSpotlights();
  }, []);

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

        {spotlights !== null ? (
          <QuartetView
            name="Super Destaques"
            data={spotlights.ads}
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
