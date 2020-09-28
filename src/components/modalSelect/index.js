import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

import FindItem from '../findItem';

import Color from '../../styles/Colors';

const ModalSelect = ({
  data = null,
  title = 'Modal',
  placeHolder = 'Selecione',
}) => {
  const [show, setShow] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  onChangeText = (e) => {
    if (e == '') {
      setFilteredData(data);
    } else {
      const results = data.map((item) => {
        return (
          item.brand
            .normalize('NFD')
            .replace(/[\u0300-\u036F]/g, '')
            .toUpperCase()
            .trim()
            .indexOf(
              e
                .normalize('NFD')
                .replace(/[\u0300-\u036F]/g, '')
                .toUpperCase()
                .trim()
            ) > -1
        );
      });

      setFilteredData(results);
      console.log(filteredData);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
        <Text style={styles.text}>{placeHolder}</Text>
      </TouchableOpacity>
      <Modal
        visible={show}
        style={styles.modal}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{title}</Text>

          <FindItem onChangeText={(e) => onChangeText(e)} />

          <FlatList data={filteredData} />

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setShow(false)}
          >
            <Text style={styles.modalText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.dark_bckgrd,
    marginHorizontal: 15,
    marginVertical: 5,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: Color.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontSize: 18,
    color: Color.white,
    textAlign: 'center',
  },
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Color.background,
  },
  modalTitle: {
    color: Color.white,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  modalButton: {
    backgroundColor: Color.dark_bckgrd,
    marginHorizontal: 15,
    marginVertical: 5,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: Color.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    color: Color.white,
    textAlign: 'center',
    padding: 5,
  },
});

export default ModalSelect;
