import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../../styles/Colors';

import numeral from '../../../vendros/numeral';
import { urlPhotos } from '../../../services/Cars';

const GridViewItem = ({ data, onPress }) => {
  let image_url =
    data.photo == null
      ? require('../../../assets/no_photo.png')
      : { uri: urlPhotos + data.photo };
  const car = `${data.brand} ${data.model} ${data.version} (${data.yMade}/${data.yModel})`;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerButton}
        onPress={(e) => onPress(data.idcar)}
      >
        <View style={styles.containerItem}>
          <Image
            source={image_url}
            resizeMethod="resize"
            resizeMode="contain"
            style={styles.image}
          />

          <View style={styles.containerData}>
            <Text style={styles.description}>{car}</Text>

            <View style={styles.detailsContainer}>
              <View style={styles.detailsRow}>
                <View style={styles.detailsItem}>
                  <Icon
                    name="car-shift-pattern"
                    color="white"
                    size={20}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>
                    {data.cambio != '' ? data.cambio.toUpperCase() : '-'}
                  </Text>
                </View>

                <View style={styles.detailsItem}>
                  <Icon
                    name="counter"
                    color="white"
                    size={20}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>
                    {`${numeral(parseFloat(data.km)).format('0,0')} KM`}
                  </Text>
                </View>
              </View>

              <View style={styles.detailsRow}>
                <View style={styles.detailsItem}>
                  <Icon
                    name="palette"
                    color="white"
                    size={20}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>{data.cor}</Text>
                </View>

                <View style={styles.detailsItem}>
                  <Icon
                    name="gas-station"
                    color="white"
                    size={20}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>{data.combustivel}</Text>
                </View>
              </View>

              <View style={styles.detailsRow}>
                <View style={styles.detailsItem}>
                  <Icon
                    name="car-door"
                    color="white"
                    size={20}
                    style={styles.detailsIcon}
                  />
                  <Text
                    style={styles.detailsText}
                  >{`${data.portas} PORTAS`}</Text>
                </View>

                <View style={styles.detailsItem}>
                  <Icon
                    name="numeric"
                    color="white"
                    size={20}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>{`FINAL ${data.placa
                    .substr(data.placa.length - 1, 1)
                    .toUpperCase()}`}</Text>
                </View>
              </View>

              <View style={styles.detailsRow}>
                <View style={styles.detailsItem}>
                  <Icon
                    name="car-estate"
                    color="white"
                    size={20}
                    style={styles.detailsIcon}
                  />
                  <Text style={styles.detailsText}>
                    {data.carroceria != ''
                      ? data.carroceria.toUpperCase()
                      : '-'}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                {numeral(parseFloat(data.price)).format('$ 0,0.00')}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark_bckgrd,
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 10,
    marginBottom: 10,
  },
  containerButton: {
    flex: 1,
    width: '100%',
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    flex: 1,
    width: '100%',
    height: 150,
    margin: 5,
  },
  containerData: {
    flex: 1,
    marginRight: 5,
  },
  description: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    flex: 1,
  },
  price: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 2,
    //width: '100%',
  },
  priceContainer: {
    backgroundColor: Colors.dolar,
    borderRadius: 3,
    marginBottom: 5,
  },
  detailsContainer: {
    paddingBottom: 10,
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
    fontSize: 8,
    color: Colors.white,
    marginLeft: 5,
    marginTop: 5,
  },
  detailsIcon: {
    marginLeft: 1,
  },
});

export default GridViewItem;
