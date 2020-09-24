import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import FindItem from '../findItem';

import Color from '../../styles/Colors';

const ModalSelect = ({ data, title = 'Modal' }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {}, [data]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
        <Text style={styles.text}>Selecionar Marca</Text>
      </TouchableOpacity>
      <Modal
        visible={show}
        style={styles.modal}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{title}</Text>
          <FindItem />
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
